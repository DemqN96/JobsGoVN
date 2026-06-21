'use client';

const SERVICES = [
  {
    flag: '🇵🇱',
    title: 'Робота в Польщі',
    types: 'Будівництво / Виробництво / Склад',
    desc: 'Офіційний контракт, оформлення дозволу на роботу, підбір під досвід та координація виїзду.',
  },
  {
    flag: '🇨🇿',
    title: 'Робота в Чехії',
    types: 'Виробництво / Будівництво / Сфера послуг',
    desc: 'Підбір вакансій на заводи та будівельні об\'єкти, повний супровід документів та виїзду.',
    highlight: true,
  },
  {
    flag: '🇩🇪',
    title: 'Робота в Німеччині',
    types: 'Будівництво / Догляд / Виробництво',
    desc: 'Допомога з документами, мовним бар\'єром та адаптацією. Вакансії з офіційним оформленням.',
  },
  {
    flag: '🇳🇱',
    title: 'Робота в Нідерландах',
    types: 'Сільське господарство / Склад / Логістика',
    desc: 'Збирання урожаю, теплиці, складські комплекси. Житло та транспорт від роботодавця.',
  },
  {
    flag: '🇦🇹',
    title: 'Робота в Австрії',
    types: 'Догляд / Готельний бізнес / Будівництво',
    desc: 'Доглядальниці та помічники медсестер, персонал готелів. Офіційне оформлення та хороші умови.',
  },
  {
    flag: '🇧🇪',
    title: 'Робота в Бельгії',
    types: 'Сільське господарство / Виробництво',
    desc: 'Збирання фруктів та овочів, виробничі лінії. Контракт, страховка, проживання.',
  },
  {
    flag: '🇭🇷',
    title: 'Робота в Хорватії',
    types: 'Готелі / Ресторани / Туризм',
    desc: 'Сезонна робота в готельно-ресторанному секторі. Офіційне оформлення, проживання включено.',
  },
];

export default function Services() {
  const openModal = () => window.dispatchEvent(new CustomEvent('open-lead-modal'));

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
              className={`flex flex-col rounded-2xl border p-6 sm:p-7 ${
                s.highlight
                  ? 'bg-[#1a3057] border-[#1a3057] text-white'
                  : 'bg-white border-gray-100 hover:shadow-md'
              } transition-all`}
            >
              <div className="text-5xl mb-4">{s.flag}</div>
              <h3 className={`text-xl font-bold mb-1 ${s.highlight ? 'text-white' : 'text-[#1a3057]'}`}>
                {s.title}
              </h3>
              <p className={`text-sm mb-3 ${s.highlight ? 'text-white/70' : 'text-gray-400'}`}>
                {s.types}
              </p>
              <p className={`text-sm leading-relaxed flex-1 ${s.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                {s.desc}
              </p>
              <button
                onClick={openModal}
                className={`mt-6 w-full py-3 rounded-xl font-semibold text-sm transition-colors ${
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
    </section>
  );
}
