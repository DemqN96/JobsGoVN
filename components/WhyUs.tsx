const REASONS = [
  {
    num: '1',
    icon: '♟️',
    text: 'Офіційний контракт — без сірих схем, прихованих умов і передоплат за «місця».',
  },
  {
    num: '2',
    icon: '💼',
    text: 'Підбираємо вакансії під ваш досвід та очікування — не надсилаємо все підряд.',
  },
  {
    num: '3',
    icon: '📖',
    text: 'Говоримо чесно: якщо вакансія не підходить — скажемо одразу, а не після виїзду.',
  },
  {
    num: '4',
    icon: '💬',
    text: 'Повний пакет документів — від резюме до трудової угоди та дозволу на роботу.',
  },
  {
    num: '5',
    icon: '✏️',
    text: 'Координуємо виїзд: логістика, житло, умови праці — всі деталі до першого дня роботи.',
  },
  {
    num: '6',
    highlight: true,
    icon: '🔥',
    text: 'На зв\'язку протягом усього процесу — від першого дзвінка до виходу на роботу.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-14 sm:py-20 bg-[#f8f9fb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3057] text-center mb-12">
          Чому варто звернутись до нас?
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {REASONS.map((r) => (
            <div
              key={r.num}
              className={`flex items-start gap-4 px-6 py-5 rounded-2xl border ${
                r.highlight
                  ? 'bg-[#c9870a] border-[#c9870a] text-white'
                  : 'bg-white border-gray-100 text-gray-700'
              }`}
            >
              <span className={`text-2xl font-black shrink-0 ${r.highlight ? 'text-white/70' : 'text-[#1a3057]/20'}`}>
                {r.num}
              </span>
              <div className="flex-1">
                <p className={`text-sm leading-relaxed ${r.highlight ? 'text-white' : ''}`}>{r.text}</p>
              </div>
              <span className="text-2xl shrink-0">{r.icon}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-lead-modal'))}
            className="bg-[#c9870a] hover:bg-[#e09f1a] text-white font-bold px-10 py-4 rounded-md transition-colors"
          >
            Отримати консультацію
          </button>
        </div>
      </div>
    </section>
  );
}
