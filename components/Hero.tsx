'use client';

interface HeroProps {
  onConsult: () => void;
}

export default function Hero({ onConsult }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-20 bg-[#1a3057]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-bg.mp4"
      />
      <div className="absolute inset-0 bg-[#1a3057]/70" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Знайдіть офіційну роботу в Європі вже цього тижня
          </h1>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
            Ви просто подаєте заявку — ми робимо все інше.
          </p>
          <p className="text-white/90 font-medium mb-8">
            Працюємо <strong>дистанційно по Україні та Європі</strong> та маємо два фізичних офіси у Вінниці та Варшаві.
          </p>
          <div className="relative inline-block">
            <span className="absolute inset-0 rounded-md bg-[#c9870a] animate-ping opacity-40" />
            <button
              onClick={onConsult}
              className="relative bg-[#c9870a] hover:bg-[#e09f1a] text-white font-bold px-8 py-4 rounded-md text-base transition-colors shadow-sm"
            >
              Підібрати вакансію
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
