import { prisma } from '@/lib/prisma';
import AdminTable from './AdminTable';

export const dynamic = 'force-dynamic';

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; q?: string }>;
}) {
  const sp = await searchParams;
  const statusFilter = sp.status;
  const q = sp.q?.trim();

  const where: Record<string, unknown> = {};
  if (statusFilter && statusFilter !== 'ALL') where.status = statusFilter;
  if (q) {
    where.OR = [
      { name: { contains: q, mode: 'insensitive' } },
      { phone: { contains: q, mode: 'insensitive' } },
      { country: { contains: q, mode: 'insensitive' } },
    ];
  }

  const [leads, counts] = await Promise.all([
    prisma.lead.findMany({ where, orderBy: { createdAt: 'desc' }, take: 200 }),
    prisma.lead.groupBy({ by: ['status'], _count: { _all: true } }),
  ]);

  const countsMap: Record<string, number> = {};
  let total = 0;
  for (const c of counts) {
    countsMap[c.status] = c._count._all;
    total += c._count._all;
  }

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      <header className="bg-[#0b2a4a] text-white py-4 px-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Jobs Go VN — CRM</h1>
          <p className="text-xs text-white/60">Управління заявками з сайту</p>
        </div>
        <a href="/" className="text-sm text-white/70 hover:text-[#f1b21d]">← На сайт</a>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          <StatCard label="Всього" value={total} active={!statusFilter || statusFilter === 'ALL'} href="/admin" />
          <StatCard label="Нові" value={countsMap.NEW ?? 0} active={statusFilter === 'NEW'} href="/admin?status=NEW" color="#1e63b0" />
          <StatCard label="В роботі" value={countsMap.IN_PROGRESS ?? 0} active={statusFilter === 'IN_PROGRESS'} href="/admin?status=IN_PROGRESS" color="#f1b21d" />
          <StatCard label="Документи" value={countsMap.DOCUMENTS ?? 0} active={statusFilter === 'DOCUMENTS'} href="/admin?status=DOCUMENTS" color="#a855f7" />
          <StatCard label="Працевлаштовані" value={countsMap.PLACED ?? 0} active={statusFilter === 'PLACED'} href="/admin?status=PLACED" color="#16a34a" />
          <StatCard label="Відмови" value={countsMap.REJECTED ?? 0} active={statusFilter === 'REJECTED'} href="/admin?status=REJECTED" color="#ef4444" />
        </div>

        <form className="mb-4 flex gap-2" action="/admin" method="get">
          {statusFilter && <input type="hidden" name="status" value={statusFilter} />}
          <input
            name="q"
            defaultValue={q ?? ''}
            placeholder="Пошук за ім'ям, телефоном або країною..."
            className="flex-1 border border-gray-200 bg-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1e63b0]"
          />
          <button className="bg-[#0b2a4a] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1e63b0]">
            Пошук
          </button>
        </form>

        <AdminTable leads={leads} />
      </main>
    </div>
  );
}

function StatCard({
  label, value, href, active, color,
}: { label: string; value: number; href: string; active?: boolean; color?: string }) {
  return (
    <a
      href={href}
      className={`block rounded-xl p-4 transition-all border ${
        active ? 'bg-white border-[#1e63b0] shadow-md' : 'bg-white border-transparent hover:border-gray-200'
      }`}
    >
      <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">{label}</div>
      <div className="text-2xl font-bold mt-1" style={{ color: color ?? '#0b2a4a' }}>{value}</div>
    </a>
  );
}
