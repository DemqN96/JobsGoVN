import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Текст */}
          <div>
            <p className="eyebrow mb-4">Про нас</p>
            <h2 className="font-display font-extrabold text-ink text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Агентство з офіційного працевлаштування
            </h2>
            <div className="space-y-4 text-ink-soft leading-relaxed">
              <p>
                Ми допомагаємо громадянам України знайти офіційну роботу в Польщі,
                Чехії, Німеччині, Нідерландах, Бельгії та інших країнах ЄС. Оформлюємо
                документи, координуємо виїзд і супроводжуємо протягом усього перебування
                за кордоном.
              </p>
              <p>
                У нас велика база перевірених роботодавців по всій Європі — аграрні
                підприємства, виробництва, готелі, ресторани, склади та логістика.
                Кількість нових вакансій збільшується щомісяця.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#hot"
                className="bg-yellow hover:bg-yellow-dark text-ink font-bold px-7 py-3.5 rounded-full transition-colors"
              >
                Наші вакансії
              </a>
              <a
                href="#vacancies"
                className="border border-line hover:border-ink text-ink font-semibold px-7 py-3.5 rounded-full transition-colors"
              >
                Усі послуги
              </a>
            </div>
          </div>

          {/* Фото */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/team/IMG_5833.JPG"
              alt="Команда Jobs Go VN"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-2xl px-5 py-4 flex items-center gap-4">
              <div className="text-3xl font-display font-extrabold text-blue">8</div>
              <div className="text-sm text-ink-soft leading-tight">
                років офіційної роботи<br />на ринку працевлаштування
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
