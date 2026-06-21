const STEPS = [
  {
    num: '01',
    title: 'Заявка та консультація',
    desc: 'Залишаєте заявку — менеджер передзвонює, уточнює досвід, побажання та сімейну ситуацію.',
  },
  {
    num: '02',
    title: 'Підбір вакансії',
    desc: 'Підбираємо позиції від перевірених роботодавців під ваш профіль та очікувану зарплату.',
  },
  {
    num: '03',
    title: 'Документи',
    desc: 'Допомагаємо зібрати та оформити повний пакет: запрошення, переклади, нострифікація.',
  },
  {
    num: '04',
    title: 'Віза',
    desc: 'За потреби — допомагаємо з оформленням робочої або національної візи через партнера Open Visa.',
  },
  {
    num: '05',
    title: 'Логістика виїзду',
    desc: 'Координуємо квитки, маршрут, зустріч у країні прибуття та поселення.',
  },
  {
    num: '06',
    title: 'Підтримка на місці',
    desc: 'Менеджер на зв\'язку до моменту виходу на роботу — не залишаємо самих ні на одному кроці.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-[#f5f7fa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3057] mb-3">
          Як ми працюємо
        </h2>
        <p className="text-gray-500 mb-12 max-w-xl">
          Прозорий процес без прихованих кроків — ви завжди знаєте, що відбувається.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
            >
              <span className="text-4xl font-bold text-[#c9870a]/30">{step.num}</span>
              <h3 className="text-[#1a3057] font-bold text-lg mt-2 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
