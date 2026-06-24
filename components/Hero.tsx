'use client';

interface HeroProps {
  onConsult: () => void;
}

export default function Hero({ onConsult }: HeroProps) {
  return (
    <section className="bg-white pt-24 pb-14 sm:pt-32 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a3057] leading-tight mb-6">
            Робота в Європі —<br />
            офіційно і без стресу
          </h1>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
            Ви просто подаєте заявку — ми робимо все інше. Підбираємо гарячі вакансії,
            оформлюємо документи, координуємо логістику та підтримуємо до виходу на роботу.
          </p>
          <p className="text-[#1a3057] font-medium mb-8">
            Працюємо <strong>дистанційно по всій Україні та Європі</strong> і офлайн-офісі у Вінниці.
          </p>
          <button
            onClick={onConsult}
            className="bg-[#c9870a] hover:bg-[#e09f1a] text-white font-bold px-8 py-4 rounded-md text-base transition-colors shadow-sm"
          >
            Підібрати вакансію
          </button>
        </div>
      </div>
    </section>
  );
}
