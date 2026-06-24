'use client';

interface HeroProps {
  onConsult: () => void;
}

export default function Hero({ onConsult }: HeroProps) {
  return (
    <section className="relative bg-ink text-white overflow-hidden pt-[136px] pb-20 sm:pt-[160px] sm:pb-28">
      {/* декоративні плями */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-yellow/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-blue/30 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl">
          <p className="eyebrow text-yellow mb-5">Jobs Go VN · Працевлаштування в ЄС</p>
          <h1 className="font-display font-extrabold uppercase leading-[0.98] tracking-tight text-4xl sm:text-6xl lg:text-7xl mb-7">
            Працюй <span className="text-yellow">.</span> Заробляй{' '}
            <span className="text-yellow">.</span> Живи в Європі{' '}
            <span className="text-yellow">.</span>
          </h1>
          <p className="text-white/70 text-base sm:text-xl leading-relaxed mb-9 max-w-2xl">
            Ви просто подаєте заявку — ми робимо все інше. Підбираємо вакансії,
            оформлюємо документи, координуємо виїзд і підтримуємо до виходу на роботу.
            Дистанційно по всій Україні та Європі, офлайн-офіс у Вінниці.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onConsult}
              className="bg-yellow hover:bg-yellow-dark text-ink font-bold px-8 py-4 rounded-full text-base transition-colors"
            >
              Залишити заявку
            </button>
            <a
              href="#vacancies"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/60 text-white font-semibold px-7 py-4 rounded-full transition-colors"
            >
              Наші послуги
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
