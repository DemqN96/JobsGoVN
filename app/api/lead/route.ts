import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { pushLeadToKeyCrm } from '@/lib/keycrm';

// Простий in-memory rate-limit: не більше 5 заявок з одного IP за 10 хв.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, country, comment, source, website } = body ?? {};

    // Honeypot: справжні користувачі не бачать це поле; боти його заповнюють.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      'unknown';
    if (rateLimited(ip)) {
      return NextResponse.json(
        { error: 'Забагато заявок. Спробуйте трохи пізніше.' },
        { status: 429 }
      );
    }

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Ім'я та телефон обов'язкові" },
        { status: 400 }
      );
    }

    const cleanLead = {
      name: String(name).trim().slice(0, 200),
      phone: String(phone).trim().slice(0, 50),
      country: country ? String(country).trim().slice(0, 100) : null,
      comment: comment ? String(comment).trim().slice(0, 2000) : null,
      source: source ? String(source).trim().slice(0, 100) : 'website',
    };

    // 1. Запис у локальну БД — завжди (резерв + локальна /admin)
    const lead = await prisma.lead.create({ data: cleanLead });

    // 2. Відправка у KeyCRM — некритично. Якщо впала, лід усе одно збережено.
    const crm = await pushLeadToKeyCrm(cleanLead);
    if (!crm.ok) {
      console.warn(`Lead ${lead.id} saved locally, but KeyCRM push failed:`, crm.error);
    }

    return NextResponse.json({ ok: true, id: lead.id, crm: crm.ok });
  } catch (err) {
    console.error('Lead API error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
