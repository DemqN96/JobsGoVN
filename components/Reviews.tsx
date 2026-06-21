const REVIEWS = [
  {
    name: 'oleksiy.m',
    initials: 'ОМ',
    color: '#4285f4',
    ago: '3 міс. тому',
    text: 'Дуже задоволений роботою агентства! За 3 тижні підібрали вакансію в Польщі, оформили всі документи і я вже на місці. Все офіційно, зарплата приходить вчасно.',
    likes: 4,
  },
  {
    name: 'tetyana.k',
    initials: 'ТК',
    color: '#ea4335',
    ago: '4 міс. тому',
    text: 'Зверталась щодо роботи в Чехії на виробництво. Менеджери відповідали на всі питання, допомогли з документами. Вже 4 місяці на новому місці, все відмінно!',
    likes: 2,
  },
  {
    name: 'vasyl.g',
    initials: 'ВГ',
    color: '#34a853',
    ago: '5 міс. тому',
    text: 'Шукав роботу в Нідерландах — знайшли за 2 тижні. Допомогли з усіма паперами. Все прозоро та без передоплат. Рекомендую всім!',
    likes: 3,
  },
  {
    name: 'nataliia.v',
    initials: 'НВ',
    color: '#fbbc05',
    ago: '6 міс. тому',
    text: 'Дуже професійна команда. Пояснили все від А до Я, підтримували протягом усього процесу. Зараз працюю в Австрії доглядальницею. Дякую Jobs Go VN!',
    likes: 5,
  },
  {
    name: 'ihor.s',
    initials: 'ІС',
    color: '#4285f4',
    ago: '7 міс. тому',
    text: 'Думав, що офіційне працевлаштування в ЄС — це складно. Виявилось, що з Jobs Go VN — ні. Все зробили за мене, залишилось лише виїхати. Чудова робота!',
    likes: 1,
  },
  {
    name: 'maryna.l',
    initials: 'МЛ',
    color: '#ea4335',
    ago: '8 міс. тому',
    text: 'Дуже швидко зреагували на мою заявку. Через тиждень вже мала пропозицію. Умови праці і житло точно такі, як обіцяли. Все чесно і прозоро.',
    likes: 2,
  },
];

// Google "G" icon SVG
function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col gap-3">
              {/* Header: avatar + name + google icon */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ backgroundColor: r.color }}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a3057] text-sm leading-tight">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.ago} · від автора</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-red-400 text-sm shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  <span>{r.likes}</span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#fbbc05">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{r.text}</p>

              {/* Footer links */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                <div className="flex gap-3 text-xs text-gray-400">
                  <button className="hover:text-[#1a3057] transition-colors">Відповісти</button>
                  <button className="hover:text-[#1a3057] transition-colors">Показати переклад</button>
                  <button className="hover:text-[#1a3057] transition-colors">Сховати</button>
                </div>
                <GoogleIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
