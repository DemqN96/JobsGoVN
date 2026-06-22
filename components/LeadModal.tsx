'use client';

import { useState, useEffect } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function LeadModal({ open, onClose }: Props) {
  const [form, setForm] = useState({ name: '', phone: '', country: '', comment: '', website: '' });
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setStatus('idle');
      setForm({ name: '', phone: '', country: '', comment: '', website: '' });
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const params = new URLSearchParams(window.location.search);
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          source: params.get('utm_source') ?? 'website',
        }),
      });
      if (!res.ok) throw new Error('server error');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 text-lg"
          aria-label="Закрити"
        >
          ✕
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-[#1a3057] mb-2">Заявку прийнято!</h3>
            <p className="text-gray-500">
              Менеджер зв&apos;яжеться з вами протягом робочого дня.
            </p>
            <button
              onClick={onClose}
              className="mt-6 bg-[#c9870a] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#e09f1a] transition-colors"
            >
              Закрити
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-[#1a3057] mb-2">Підібрати вакансію</h2>
            <p className="text-gray-500 text-sm mb-6">
              Залиште заявку — менеджер передзвонить протягом робочого дня.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot — приховане поле проти ботів. Люди його не заповнюють. */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                className="absolute left-[-9999px] w-px h-px opacity-0"
              />
              <div>
                <label className="block text-sm font-medium text-[#1a3057] mb-1.5">
                  Прізвище та ім&apos;я <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Прізвище та ім'я"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#1a3057] placeholder-gray-300 focus:outline-none focus:border-[#c9870a] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a3057] mb-1.5">
                  Телефон <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+38 (0XX) XXX-XX-XX"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#1a3057] placeholder-gray-300 focus:outline-none focus:border-[#c9870a] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a3057] mb-1.5">
                  Бажана країна <span className="text-gray-400 font-normal">(необов&apos;язково)</span>
                </label>
                <input
                  type="text"
                  placeholder="Польща, Чехія, Німеччина..."
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#1a3057] placeholder-gray-300 focus:outline-none focus:border-[#c9870a] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a3057] mb-1.5">
                  Коментар <span className="text-gray-400 font-normal">(необов&apos;язково)</span>
                </label>
                <textarea
                  placeholder="Досвід роботи, очікування, умови..."
                  rows={3}
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#1a3057] placeholder-gray-300 focus:outline-none focus:border-[#c9870a] transition-colors text-sm resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm">Щось пішло не так. Спробуйте ще раз.</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#c9870a] hover:bg-[#e09f1a] disabled:opacity-60 text-white font-bold py-4 rounded-md transition-colors"
              >
                {status === 'loading' ? 'Відправляємо...' : 'Відправити заявку'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
