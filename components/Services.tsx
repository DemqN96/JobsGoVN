'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { VACANCY_DETAILS, VACANCY_PHOTOS, Vacancy } from '@/lib/vacancies';

const SERVICES = [
  {
    id: 'de',
    flag: '🇩🇪',
    title: 'Робота в Німеччині',
    salary: '1800–3000€',
    types: 'Збір / Склади / Заводи / Теплиці / Ресторани',
    desc: 'Одна з найкращих країн для заробітку в ЄС. Офіційний контракт + житло від роботодавця.',
  },
  {
    id: 'nl',
    flag: '🇳🇱',
    title: 'Робота в Нідерландах',
    salary: '1600–2500€',
    types: 'Збір квітів, овочів та ягід',
    desc: 'Топ напрямок серед наших клієнтів. Робота на свіжому повітрі, житло та харчування часто включені.',
    highlight: true,
  },
  {
    id: 'fr',
    flag: '🇫🇷',
    title: 'Робота у Франції',
    salary: '1400–2000€',
    types: 'Збір грибів, винограду та овочів',
    desc: 'Сезонна та постійна робота. Природа, клімат — і гідна зарплата.',
  },
  {
    id: 'pl-cz',
    flag: '🇵🇱🇨🇿',
    title: 'Польща / Чехія',
    salary: '1200–1800€',
    types: 'Склади / Виробництво / Готелі / Збір',
    desc: 'Найближчі країни — найшвидший виїзд. Можливий вже за 1–2 тижні.',
  },
  {
    id: 'it-gr',
    flag: '🇮🇹🇬🇷',
    title: 'Італія / Греція',
    salary: '1300–2000€',
    types: 'Готелі / Ресторани / Збір / Теплиці',
    desc: 'Робота біля моря — це реально. Тепло, красиво і офіційно.',
  },
  {
    id: 'fi-se',
    flag: '🇫🇮🇸🇪',
    title: 'Фінляндія / Швеція',
    salary: '1800–2800€',
    types: 'Збір ягід / Ферми / Виробництво',
    desc: 'Північ — це великі гроші. Чисто, безпечно, офіційно.',
  },
  {
    id: 'at',
    flag: '🇦🇹',
    title: 'Робота в Австрії',
    salary: '1600–2500€',
    types: 'Готелі / Ресторани / Збір / Виробництво',
    desc: 'Європейська якість умов праці. Альпи, стабільність і хороший роботодавець.',
  },
  {
    id: 'be',
    flag: '🇧🇪',
    title: 'Робота в Бельгії',
    salary: '1500–2200€',
    types: 'Збір фруктів та овочів / Склади / Виробництво',
    desc: 'Стабільна робота та добросовісні роботодавці. Офіційне оформлення + житло.',
  },
];

const TABS = [
  { id: 'all', label: 'Усі країни' },
  ...SERVICES.map((s) => ({ id: s.id, label: s.title.replace(/^Робота (в|у) /, '') })),
];

export default function Services() {
  const openModal = () => window.dispatchEvent(new CustomEvent('open-lead-modal'));
  const [tab, setTab] = useState('all');
  const [detailsId, setDetailsId] = useState<string | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  const active = SERVICES.find((s) => s.id === detailsId);
  const vacancies: Vacancy[] = detailsId ? VACANCY_DETAILS[detailsId] ?? [] : [];
  const photos: string[] = detailsId ? VACANCY_PHOTOS[detailsId] ?? [] : [];
  const shown = tab === 'all' ? SERVICES : SERVICES.filter((s) => s.id === tab);

  useEffect(() => {
    if (!detailsId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (photo) setPhoto(null);
      else setDetailsId(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [detailsId, photo]);

  return (
    <section id="vacancies" className="py-16 sm:py-24 bg-mist">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="eyebrow mb-3">Напрямки</p>
          <h2 className="font-display font-extrabold text-ink text-3xl sm:text-4xl lg:text-5xl">
            Актуальні послуги
          </h2>
        </div>

        {/* Таби країн */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                tab === t.id
                  ? 'bg-ink text-white'
                  : 'bg-white text-ink-soft border border-line hover:border-ink'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shown.map((s) => (
            <div
              key={s.title}
              id={`service-${s.id}`}
              className={`scroll-mt-28 flex flex-col rounded-3xl p-6 sm:p-7 transition-all ${
                s.highlight
                  ? 'bg-blue text-white'
                  : 'bg-white border border-line hover:shadow-lg'
              }`}
            >
              <div className="text-5xl mb-4">{s.flag}</div>
              <h3 className={`font-display text-xl font-extrabold mb-3 ${s.highlight ? 'text-white' : 'text-ink'}`}>
                {s.title}
              </h3>
              <div
                className={`inline-flex items-center self-start px-3 py-1 rounded-full text-sm font-bold mb-3 ${
                  s.highlight ? 'bg-yellow text-ink' : 'bg-yellow/20 text-blue'
                }`}
              >
                від {s.salary}/міс
              </div>
              <p className={`text-sm mb-3 ${s.highlight ? 'text-white/70' : 'text-ink-soft/60'}`}>
                {s.types}
              </p>
              <p className={`text-sm leading-relaxed flex-1 ${s.highlight ? 'text-white/90' : 'text-ink-soft'}`}>
                {s.desc}
              </p>
              <button
                onClick={() => setDetailsId(s.id)}
                className={`mt-5 inline-flex items-center gap-1 self-start text-sm font-bold transition-colors ${
                  s.highlight ? 'text-yellow hover:text-white' : 'text-blue hover:text-ink'
                }`}
              >
                Детальніше про вакансії
                <span aria-hidden>→</span>
              </button>
              <button
                onClick={openModal}
                className={`mt-4 w-full py-3 rounded-full font-bold text-sm transition-colors ${
                  s.highlight
                    ? 'bg-yellow text-ink hover:bg-yellow-dark'
                    : 'bg-ink text-white hover:bg-blue'
                }`}
              >
                Отримати консультацію
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Модальне вікно з деталями вакансій */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 flex items-end sm:items-center justify-center p-0 sm:p-6"
          onClick={() => setDetailsId(null)}
        >
          <div
            className="bg-white w-full sm:max-w-2xl max-h-[88vh] sm:rounded-3xl rounded-t-3xl overflow-hidden flex flex-col shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-6 py-5 border-b border-line">
              <h3 className="font-display text-xl font-extrabold text-ink flex items-center gap-2">
                <span className="text-2xl">{active.flag}</span>
                {active.title}
              </h3>
              <button
                onClick={() => setDetailsId(null)}
                className="text-ink-soft/50 hover:text-ink text-2xl leading-none w-8 h-8 flex items-center justify-center shrink-0"
                aria-label="Закрити"
              >
                ×
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-5 space-y-5">
              {photos.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft/50 mb-2">
                    Фото умов
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {photos.map((src) => (
                      <button
                        key={src}
                        onClick={() => setPhoto(src)}
                        className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-mist"
                      >
                        <Image
                          src={src}
                          alt={`${active.title} — фото умов`}
                          fill
                          sizes="220px"
                          className="object-cover hover:scale-105 transition-transform"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {vacancies.length === 0 && (
                <p className="text-ink-soft text-sm">
                  Деталі уточнюйте у менеджера — натисніть «Отримати консультацію».
                </p>
              )}
              {vacancies.map((v, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-line bg-mist p-4 sm:p-5"
                >
                  <p className="font-display font-extrabold text-ink mb-3">{v.role}</p>
                  <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                    {v.city && <Row label="Місто" value={v.city} />}
                    {v.candidates && <Row label="Кандидати" value={v.candidates} />}
                    {v.salary && <Row label="Зарплата" value={v.salary} />}
                    {v.schedule && <Row label="Графік" value={v.schedule} />}
                    {v.duties && <Row label="Обов’язки" value={v.duties} full />}
                    {v.housing && <Row label="Житло" value={v.housing} full />}
                    {v.food && <Row label="Харчування" value={v.food} full />}
                  </dl>
                </div>
              ))}
            </div>

            <div className="px-6 py-4 border-t border-line">
              <button
                onClick={() => {
                  setDetailsId(null);
                  openModal();
                }}
                className="w-full py-3 rounded-full font-bold text-sm bg-yellow text-ink hover:bg-yellow-dark transition-colors"
              >
                Залишити заявку на цю вакансію
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Перегляд фото вакансії на весь екран */}
      {photo && (
        <div
          className="fixed inset-0 z-[110] bg-black/85 flex items-center justify-center p-4"
          onClick={() => setPhoto(null)}
        >
          <button
            onClick={() => setPhoto(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl leading-none w-10 h-10 flex items-center justify-center"
            aria-label="Закрити"
          >
            ×
          </button>
          <Image
            src={photo}
            alt="Фото вакансії"
            width={1200}
            height={1600}
            className="object-contain w-auto h-auto max-w-full max-h-[90vh] rounded-lg"
            onClick={(e) => e.stopPropagation()}
            priority
          />
        </div>
      )}
    </section>
  );
}

function Row({
  label,
  value,
  full,
}: {
  label: string;
  value: string;
  full?: boolean;
}) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <dt className="text-ink-soft/50 text-xs">{label}</dt>
      <dd className="text-ink">{value}</dd>
    </div>
  );
}
