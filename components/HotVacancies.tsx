'use client';

const HOT = [
  {
    code: '0825',
    flag: '🇩🇪',
    place: 'поблизу Дортмунда, Німеччина',
    start: 'від вже',
    title: 'Робота на логістичному складі',
    lang: 'не вимагається',
    salary: 'від 14 €/год',
  },
  {
    code: '8023',
    flag: '🇧🇪',
    place: 'поблизу Гента, Бельгія',
    start: 'Червень',
    title: 'Збір та сортування овочів',
    lang: 'мінімальний рівень англійської',
    salary: '10–12 €/год',
  },
  {
    code: '0869',
    flag: '🇳🇱',
    place: 'Алкмар, Нідерланди',
    start: 'від вже',
    title: 'Теплиці: збір та пакування',
    lang: 'не вимагається',
    salary: '14,06–15,50 €/год',
  },
  {
    code: '1081',
    flag: '🇫🇮',
    place: 'Сіунтіо, Фінляндія',
    start: 'Травень',
    title: 'Збір ягід та урожаю',
    lang: 'не вимагається',
    salary: '2000–3000 €/міс',
  },
  {
    code: '0753',
    flag: '🇦🇹',
    place: 'Відень, Австрія',
    start: 'від вже',
    title: 'Покоївка в готелі',
    lang: 'базовий рівень',
    salary: 'від 12,74 €/год',
  },
  {
    code: '1101',
    flag: '🇨🇿',
    place: 'Брно, Чехія',
    start: 'від вже',
    title: 'Автомобільне виробництво',
    lang: 'не вимагається',
    salary: '150–180 крон/год',
  },
];

export default function HotVacancies() {
  const openModal = () => window.dispatchEvent(new CustomEvent('open-lead-modal'));

  return (
    <section id="hot" className="py-16 sm:py-24 bg-mist">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <p className="eyebrow mb-3">Актуальне</p>
            <h2 className="font-display font-extrabold text-ink text-3xl sm:text-4xl lg:text-5xl">
              Гарячі вакансії
            </h2>
          </div>
          <button
            onClick={openModal}
            className="hidden sm:inline-flex shrink-0 border border-line hover:border-ink text-ink font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Усі вакансії
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {HOT.map((v) => (
            <div
              key={v.code}
              className="flex flex-col bg-white rounded-3xl border border-line p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft">
                  <span className="text-xl">{v.flag}</span>
                  {v.place}
                </span>
                <span className="text-xs font-bold text-blue bg-blue/10 px-2.5 py-1 rounded-full">
                  №{v.code}
                </span>
              </div>

              <span className="inline-flex self-start items-center gap-1.5 text-xs font-bold text-ink bg-yellow px-3 py-1 rounded-full mb-3">
                Початок: {v.start}
              </span>

              <h3 className="font-display font-extrabold text-ink text-lg leading-snug mb-3">
                {v.title}
              </h3>

              <dl className="text-sm space-y-1.5 mb-5 flex-1">
                <div className="flex gap-2">
                  <dt className="text-ink-soft/50 shrink-0">Мова:</dt>
                  <dd className="text-ink-soft">{v.lang}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-ink-soft/50 shrink-0">Зарплата:</dt>
                  <dd className="text-ink font-semibold">{v.salary}</dd>
                </div>
              </dl>

              <button
                onClick={openModal}
                className="w-full py-3 rounded-full font-bold text-sm bg-ink text-white hover:bg-blue transition-colors"
              >
                Детальніше
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <button
            onClick={openModal}
            className="border border-line text-ink font-semibold px-6 py-3 rounded-full"
          >
            Усі вакансії
          </button>
        </div>
      </div>
    </section>
  );
}
