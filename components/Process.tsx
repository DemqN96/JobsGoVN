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
    <section id="process" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">Процес</p>
          <h2 className="font-display font-extrabold text-ink text-3xl sm:text-4xl lg:text-5xl mb-4">
            Як ми працюємо
          </h2>
          <p className="text-ink-soft max-w-xl mx-auto">
            Прозорий процес без прихованих кроків — ви завжди знаєте, що відбувається.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="group relative bg-mist hover:bg-ink rounded-3xl p-7 transition-colors duration-300"
            >
              <span className="font-display text-5xl font-extrabold text-blue/15 group-hover:text-yellow/40 transition-colors">
                {step.num}
              </span>
              <h3 className="font-display text-ink group-hover:text-white font-extrabold text-lg mt-3 mb-2 transition-colors">
                {step.title}
              </h3>
              <p className="text-ink-soft group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
