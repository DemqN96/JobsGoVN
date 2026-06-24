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

export default function Services() {
  const openModal = () => window.dispatchEvent(new CustomEvent('open-lead-modal'));
  const [detailsId, setDetailsId] = useState<string | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  const active = SERVICES.find((s) => s.id === detailsId);
  const vacancies: Vacancy[] = detailsId ? VACANCY_DETAILS[detailsId] ?? [] : [];
  const photos: string[] = detailsId ? VACANCY_PHOTOS[detailsId] ?? [] : [];

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
    <section id="vacancies" className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3057]">
            <span className="bg-[#c9870a] text-white px-2 rounded mr-2">Наші</span>послуги
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              id={`service-${s.id}`}
              className={`scroll-mt-24 flex flex-col rounded-2xl border p-6 sm:p-7 ${
                s.highlight
                  ? 'bg-[#1a3057] border-[#1a3057] text-white'
                  : 'bg-white border-gray-100 hover:shadow-md'
              } transition-all`}
            >
              <div className="text-5xl mb-4">{s.flag}</div>
              <h3 className={`text-xl font-bold mb-2 ${s.highlight ? 'text-white' : 'text-[#1a3057]'}`}>
                {s.title}
              </h3>
              <div
                className={`inline-flex items-center self-start gap-1 px-3 py-1 rounded-full text-sm font-bold mb-3 ${
                  s.highlight ? 'bg-white text-[#1a3057]' : 'bg-[#c9870a]/10 text-[#c9870a]'
                }`}
              >
                від {s.salary}/міс
              </div>
              <p className={`text-sm mb-3 ${s.highlight ? 'text-white/70' : 'text-gray-400'}`}>
                {s.types}
              </p>
              <p className={`text-sm leading-relaxed flex-1 ${s.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                {s.desc}
              </p>
              <button
                onClick={() => setDetailsId(s.id)}
                className={`mt-5 inline-flex items-center gap-1 self-start text-sm font-semibold transition-colors ${
                  s.highlight
                    ? 'text-white hover:text-white/70'
                    : 'text-[#c9870a] hover:text-[#1a3057]'
                }`}
              >
                Детальніше про вакансії
                <span aria-hidden>→</span>
              </button>
              <button
                onClick={openModal}
                className={`mt-3 w-full py-3 rounded-xl font-semibold text-sm transition-colors ${
                  s.highlight
                    ? 'bg-white text-[#1a3057] hover:bg-gray-100'
                    : 'bg-gray-100 text-[#1a3057] hover:bg-[#1a3057] hover:text-white'
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
            className="bg-white w-full sm:max-w-2xl max-h-[88vh] sm:rounded-2xl rounded-t-2xl overflow-hidden flex flex-col shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-6 py-5 border-b border-gray-100">
              <h3 className="text-xl font-bold text-[#1a3057] flex items-center gap-2">
                <span className="text-2xl">{active.flag}</span>
                {active.title}
              </h3>
              <button
                onClick={() => setDetailsId(null)}
                className="text-gray-400 hover:text-[#1a3057] text-2xl leading-none w-8 h-8 flex items-center justify-center shrink-0"
                aria-label="Закрити"
              >
                ×
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-5 space-y-5">
              {photos.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                    Фото умов
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {photos.map((src) => (
                      <button
                        key={src}
                        onClick={() => setPhoto(src)}
                        className="relative aspect-[4/3] overflow-hidden rounded-lg border border-gray-200 bg-gray-50"
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
                <p className="text-gray-500 text-sm">
                  Деталі уточнюйте у менеджера — натисніть «Отримати консультацію».
                </p>
              )}
              {vacancies.map((v, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-100 bg-[#f8f9fb] p-4 sm:p-5"
                >
                  <p className="font-bold text-[#1a3057] mb-3">{v.role}</p>
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

            <div className="px-6 py-4 border-t border-gray-100">
              <button
                onClick={() => {
                  setDetailsId(null);
                  openModal();
                }}
                className="w-full py-3 rounded-xl font-semibold text-sm bg-[#c9870a] text-white hover:bg-[#e09f1a] transition-colors"
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
      <dt className="text-gray-400 text-xs">{label}</dt>
      <dd className="text-[#1a3057]">{value}</dd>
    </div>
  );
}
