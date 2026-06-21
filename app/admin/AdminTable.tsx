'use client';

import { Fragment, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

type LeadStatus = 'NEW' | 'IN_PROGRESS' | 'DOCUMENTS' | 'PLACED' | 'REJECTED';

interface Lead {
  id: number;
  name: string;
  phone: string;
  country: string | null;
  comment: string | null;
  source: string | null;
  status: LeadStatus;
  notes: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}

const STATUS_LABEL: Record<LeadStatus, string> = {
  NEW: 'Новий',
  IN_PROGRESS: 'В роботі',
  DOCUMENTS: 'Оформлення документів',
  PLACED: 'Працевлаштований',
  REJECTED: 'Відмова',
};

const STATUS_COLOR: Record<LeadStatus, string> = {
  NEW: 'bg-blue-100 text-blue-800 border-blue-200',
  IN_PROGRESS: 'bg-amber-100 text-amber-800 border-amber-200',
  DOCUMENTS: 'bg-purple-100 text-purple-800 border-purple-200',
  PLACED: 'bg-green-100 text-green-800 border-green-200',
  REJECTED: 'bg-red-100 text-red-800 border-red-200',
};

function formatDate(d: Date | string) {
  const date = new Date(d);
  return date.toLocaleString('uk-UA', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}

export default function AdminTable({ leads }: { leads: Lead[] }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [expanded, setExpanded] = useState<number | null>(null);

  const update = async (id: number, data: Partial<Lead>) => {
    await fetch(`/api/admin/leads/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    startTransition(() => router.refresh());
  };

  const remove = async (id: number) => {
    if (!confirm('Видалити заявку?')) return;
    await fetch(`/api/admin/leads/${id}`, { method: 'DELETE' });
    startTransition(() => router.refresh());
  };

  if (leads.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-12 text-center text-gray-500">
        Поки що немає заявок за цим фільтром.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr className="text-left text-xs text-gray-500 uppercase tracking-wide">
              <th className="px-4 py-3 font-semibold">Дата</th>
              <th className="px-4 py-3 font-semibold">Ім&apos;я</th>
              <th className="px-4 py-3 font-semibold">Телефон</th>
              <th className="px-4 py-3 font-semibold">Країна</th>
              <th className="px-4 py-3 font-semibold">Статус</th>
              <th className="px-4 py-3 font-semibold"></th>
            </tr>
          </thead>
          <tbody className={pending ? 'opacity-60 transition-opacity' : ''}>
            {leads.map((lead) => (
              <Fragment key={lead.id}>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{formatDate(lead.createdAt)}</td>
                  <td className="px-4 py-3 font-semibold text-[#0b2a4a]">{lead.name}</td>
                  <td className="px-4 py-3">
                    <a href={`tel:${lead.phone}`} className="text-[#1e63b0] hover:underline">
                      {lead.phone}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{lead.country || <span className="text-gray-300">—</span>}</td>
                  <td className="px-4 py-3">
                    <select
                      value={lead.status}
                      onChange={(e) => update(lead.id, { status: e.target.value as LeadStatus })}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full border cursor-pointer ${STATUS_COLOR[lead.status]}`}
                    >
                      {(Object.keys(STATUS_LABEL) as LeadStatus[]).map((s) => (
                        <option key={s} value={s}>{STATUS_LABEL[s]}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right">
                    <button
                      onClick={() => setExpanded(expanded === lead.id ? null : lead.id)}
                      className="text-xs text-[#1e63b0] hover:underline mr-3"
                    >
                      {expanded === lead.id ? 'Згорнути' : 'Деталі'}
                    </button>
                    <button
                      onClick={() => remove(lead.id)}
                      className="text-xs text-red-500 hover:underline"
                    >
                      Видалити
                    </button>
                  </td>
                </tr>
                {expanded === lead.id && (
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <td colSpan={6} className="px-4 py-4">
                      <div className="grid sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Коментар клієнта</div>
                          <div className="text-gray-700 whitespace-pre-wrap">
                            {lead.comment || <span className="text-gray-400">—</span>}
                          </div>
                          <div className="text-xs text-gray-500 uppercase font-semibold mt-3 mb-1">Джерело</div>
                          <div className="text-gray-700">{lead.source || '—'}</div>
                          <div className="text-xs text-gray-500 uppercase font-semibold mt-3 mb-1">Оновлено</div>
                          <div className="text-gray-700">{formatDate(lead.updatedAt)}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Внутрішні нотатки менеджера</div>
                          <textarea
                            defaultValue={lead.notes ?? ''}
                            rows={5}
                            onBlur={(e) => {
                              if (e.target.value !== (lead.notes ?? '')) {
                                update(lead.id, { notes: e.target.value });
                              }
                            }}
                            placeholder="Деталі дзвінків, домовленості..."
                            className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#1e63b0]"
                          />
                          <p className="text-xs text-gray-400 mt-1">Автозбереження при втраті фокусу</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
