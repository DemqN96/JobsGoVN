'use client';

import { useState } from 'react';

interface Item {
  q: string;
  a: React.ReactNode;
}

const ITEMS: Item[] = [
  {
    q: 'Хочеш заробити 25€ за 2 хвилини?',
    a: (
      <>
        <p>
          Хочеш заробити 25€ за 2 хвилини? Якщо ти вже працював через Jobs Go і
          залишився задоволений — просто запиши коротке відео про свій досвід. Як
          все було, що сподобалось, чи рекомендуєш.
        </p>
        <p>
          Надсилаєш нам — і отримуєш <strong className="text-[#1a3057]">25€ на картку</strong>. Все.
        </p>
        <p>
          Нам важливо чути реальні історії наших клієнтів. А тобі за це приємний
          бонус. Пиши в Директ — домовимось.
        </p>
      </>
    ),
  },
  {
    q: 'Ти вже працюєш в Європі через Jobs Go — і це вже говорить про те, що ти зробив правильний вибір! Є пропозиція для тебе особисто.',
    a: (
      <>
        <p>
          Ти вже працюєш в Європі через Jobs Go — і це вже говорить про те, що ти
          зробив правильний вибір! Є пропозиція для тебе особисто.
        </p>
        <p>
          Якщо серед твоїх знайомих є хтось, хто теж думає про роботу за
          кордоном — порадь їм нас. Людина оформиться і оплатить послугу — ти
          отримуєш <strong className="text-[#1a3057]">25€ на картку</strong>. Просто за рекомендацію.
        </p>
        <ul className="list-none space-y-1">
          <li>Порадиш одного — <strong className="text-[#c9870a]">25€</strong></li>
          <li>Порадиш двох — <strong className="text-[#c9870a]">50€</strong></li>
          <li>Порадиш трьох — <strong className="text-[#c9870a]">75€</strong></li>
        </ul>
        <p>
          Скільки порадиш — стільки й заробиш. Ти вже знаєш як ми працюємо.
          Тому знаєш що радиш надійне. Напиши нам — розкажемо деталі.
        </p>
      </>
    ),
  },
  {
    q: 'Встигніть скористатися найвигіднішими пропозиціями! Щотижня ми оновлюємо знижки на вакансії та напрямки, щоб ви могли заощадити на оформленні та швидше розпочати роботу за кордоном.',
    a: (
      <>
        <p>
          Встигніть скористатися найвигіднішими пропозиціями! Щотижня ми
          оновлюємо знижки на вакансії та напрямки, щоб ви могли заощадити на
          оформленні та швидше розпочати роботу за кордоном.
        </p>
        <p>Що на вас чекає:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Нові акційні пропозиції щотижня</li>
          <li>Знижки на популярні країни та вакансії</li>
          <li>Можливість отримати вигідніші умови, ніж раніше</li>
        </ul>
        <p>
          Не втрачайте шанс заощадити — акційні пропозиції діють обмежений час і
          регулярно змінюються. Підписуйтеся на наші соціальні мережі та
          слідкуйте за оновленнями, щоб першими дізнаватися про нові знижки.
        </p>
      </>
    ),
  },
  {
    q: 'Їдете на роботу удвох або компанією? Отримайте знижку –20€ для кожного!',
    a: (
      <>
        <p>
          Їдете на роботу удвох або компанією? Отримайте знижку{' '}
          <strong className="text-[#c9870a]">–20€ для кожного!</strong>
        </p>
        <p>
          Плануєте виїзд разом із друзями, рідними чи знайомими? Це чудова
          можливість не лише працювати разом, а й заощадити на оформленні.
        </p>
        <p>Знижка –20€ діє, якщо:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Ви їдете від 2 осіб</li>
          <li>У вас уже готові документи</li>
          <li>Ви наш повторний клієнт</li>
        </ul>
        <p>
          Ми цінуємо вашу довіру та прагнемо зробити шлях до роботи за кордоном
          ще вигіднішим. Напишіть нам у повідомлення, щоб дізнатися деталі та
          забронювати вакансію на спеціальних умовах.
        </p>
      </>
    ),
  },
];

export default function Loyalty() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="loyalty" className="py-14 sm:py-20 bg-[#f8f9fb]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3057] mb-3">
            Програма лояльності
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Спеціальні пропозиції для наших клієнтів — бонуси, кешбек та знижки
            за вашу довіру.
          </p>
        </div>

        <div className="space-y-3">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start gap-4 text-left px-5 sm:px-6 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-2xl font-bold text-[#c9870a] leading-none shrink-0">
                    {i + 1}
                  </span>
                  <span className="flex-1 font-bold text-[#1a3057] leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 text-[#1a3057] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 pl-14 sm:pl-16 space-y-3 text-sm leading-relaxed text-gray-600">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
