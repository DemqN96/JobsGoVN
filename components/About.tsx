import Image from 'next/image';

const BADGES = [
  { text: '15+ спеціалістів у команді' },
  { text: '7680 влаштованих людей 🇪🇺', highlight: true },
  { text: 'Офіційне працевлаштування' },
];

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3057] text-center mb-10">Про нас</h2>

        {/* Main group photo */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 shadow-md">
          <Image
            src="/team/IMG_5833.JPG"
            alt="Команда Jobs Go VN"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
        </div>

        {/* White card — like Open Visa */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-7 mb-6">
          <p className="font-bold text-[#1a3057] mb-3">Jobs Go VN</p>
          <div className="space-y-3 text-gray-600 leading-relaxed text-sm">
            <p>
              Команда з офіційного працевлаштування, яка допомагає громадянам України знайти роботу
              в країнах ЄС <strong>без стресу, сірих схем та прихованих умов.</strong>
            </p>
            <p>
              Ми не просто «скидаємо вакансії» — ми <strong>детально аналізуємо ваш досвід,
              підбираємо позицію під ваші очікування, оформлюємо повний пакет документів</strong> та
              координуємо ваш виїзд від А до Я.
            </p>
            <p>
              Працюємо з <strong>будівництвом, виробництвом, сільським господарством, готельним бізнесом,
              доглядом та логістикою</strong> у Польщі, Чехії, Німеччині, Нідерландах та інших країнах.
            </p>
            <p>
              За роки роботи ми супроводили <strong>тисячі клієнтів — від першої консультації до
              першої зарплати на новому місці.</strong>
            </p>
            <p>
              Наша задача — <strong>чесно підібрати вакансію</strong> та зробити все, щоб ваш
              переїзд і старт на новому місці пройшли впевнено та без зайвих ризиків.
            </p>
          </div>
        </div>

        {/* 3 badges — like Open Visa */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {BADGES.map((b) => (
            <div
              key={b.text}
              className={`flex items-center justify-center text-center px-4 py-4 rounded-xl text-sm font-semibold ${
                b.highlight
                  ? 'bg-[#1a3057] text-white'
                  : 'border border-gray-200 text-[#1a3057]'
              }`}
            >
              {b.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
