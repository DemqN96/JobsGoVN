'use client';

const ADVANTAGES = [
  'Безкоштовна консультація спеціалістів та підбір вакансії під ваш профіль',
  'Офіційний контракт — без сірих схем, прихованих умов і передоплат за «місця»',
  'Підготовка повного пакета документів — від резюме до дозволу на роботу',
  'Постійна підтримка за кордоном 24/7 — до виходу на роботу й далі',
];

export default function WhyUs() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-[2rem] bg-ink text-white overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 sm:p-12 lg:p-14">
            {/* Заголовок-окупність */}
            <div className="flex flex-col justify-center">
              <p className="eyebrow text-yellow mb-4">Чому ми</p>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
                Вартість послуг окупиться вже за{' '}
                <span className="text-yellow">10 робочих днів</span>
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Все решта — ваші зароблені кошти. Ми зацікавлені, щоб ви швидко
                вийшли на роботу та залишились задоволені.
              </p>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-lead-modal'))}
                className="self-start bg-yellow hover:bg-yellow-dark text-ink font-bold px-8 py-4 rounded-full transition-colors"
              >
                Отримати консультацію
              </button>
            </div>

            {/* Переваги */}
            <div className="lg:border-l lg:border-white/10 lg:pl-12 flex flex-col justify-center">
              <p className="font-display font-extrabold text-xl mb-6">
                Переваги співпраці з нами:
              </p>
              <ul className="space-y-5">
                {ADVANTAGES.map((a, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="shrink-0 mt-0.5 w-7 h-7 rounded-full bg-yellow text-ink font-bold text-sm flex items-center justify-center">
                      ✓
                    </span>
                    <span className="text-white/85 leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
