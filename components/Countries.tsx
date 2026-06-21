const COUNTRIES = [
  { flag: '🇵🇱', name: 'Польща' },
  { flag: '🇩🇪', name: 'Німеччина' },
  { flag: '🇨🇿', name: 'Чехія' },
  { flag: '🇳🇱', name: 'Нідерланди' },
  { flag: '🇧🇪', name: 'Бельгія' },
  { flag: '🇦🇹', name: 'Австрія' },
  { flag: '🇫🇷', name: 'Франція' },
  { flag: '🇸🇰', name: 'Словаччина' },
  { flag: '🇷🇴', name: 'Румунія' },
  { flag: '🇭🇷', name: 'Хорватія' },
  { flag: '🇱🇹', name: 'Литва' },
  { flag: '🇪🇪', name: 'Естонія' },
];

export default function Countries() {
  return (
    <section id="channels" className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3057] mb-3">
            Країни, де ми працевлаштовуємо
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Підбираємо офіційні вакансії у країнах Євросоюзу — з контрактом,
            соціальним захистом та легальним оформленням.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
          {COUNTRIES.map((c) => (
            <div
              key={c.name}
              className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-gray-200 text-[#1a3057] font-semibold text-sm hover:border-[#1a3057] hover:bg-[#1a3057] hover:text-white transition-all cursor-default"
            >
              <span className="text-2xl">{c.flag}</span>
              {c.name}
            </div>
          ))}
        </div>

        <div className="bg-[#f8f9fb] rounded-xl px-6 py-4 text-center text-gray-500 text-sm mb-10">
          Не бачите потрібну країну? Напишіть нам — можливо ми вже маємо вакансії в цьому напрямку
        </div>

        <div className="text-center">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-lead-modal'))}
            className="bg-[#c9870a] hover:bg-[#e09f1a] text-white font-bold px-10 py-4 rounded-md transition-colors"
          >
            Підібрати вакансію
          </button>
        </div>
      </div>
    </section>
  );
}
