import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { LeadStatus } from '@prisma/client';

const ALLOWED: LeadStatus[] = ['NEW', 'IN_PROGRESS', 'DOCUMENTS', 'PLACED', 'REJECTED'];

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const leadId = Number(id);
  if (!Number.isFinite(leadId)) {
    return NextResponse.json({ error: 'Bad id' }, { status: 400 });
  }

  const body = await req.json();
  const data: { status?: LeadStatus; notes?: string } = {};

  if (body.status) {
    if (!ALLOWED.includes(body.status)) {
      return NextResponse.json({ error: 'Bad status' }, { status: 400 });
    }
    data.status = body.status;
  }
  if (typeof body.notes === 'string') {
    data.notes = body.notes.slice(0, 5000);
  }

  const lead = await prisma.lead.update({ where: { id: leadId }, data });
  return NextResponse.json({ ok: true, lead });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const leadId = Number(id);
  if (!Number.isFinite(leadId)) {
    return NextResponse.json({ error: 'Bad id' }, { status: 400 });
  }
  await prisma.lead.delete({ where: { id: leadId } });
  return NextResponse.json({ ok: true });
}
