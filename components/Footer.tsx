import Image from 'next/image';

const NAV = [
  { label: 'Про нас', href: '#about' },
  { label: 'Як працюємо', href: '#process' },
  { label: 'Команда', href: '#team' },
  { label: 'Вакансії', href: '#channels' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Jobs Go VN" width={44} height={44} className="brightness-0 invert opacity-90" />
              <span className="font-bold text-white text-lg">
                Jobs Go <span className="text-yellow">VN</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Офіційне працевлаштування у країнах ЄС.
              Підбір вакансій, документи, повний супровід.
            </p>
            <p className="text-xs text-white/40">
              Партнер: <a href="https://open-visa.online" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-yellow transition-colors">Open Visa</a> — оформлення віз та допомога з депортаціями.
            </p>
          </div>

          <div>
            <p className="text-white font-semibold mb-4">Навігація</p>
            <ul className="space-y-2 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-yellow transition-colors">{item.label}</a>
                </li>
              ))}
              <li>
                <a href="https://t.me/robootaeu" target="_blank" rel="noopener noreferrer" className="hover:text-yellow transition-colors">
                  Telegram-канал
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-4">Контакти</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+380970774947" className="hover:text-yellow transition-colors">
                  📞 +38 (097) 077-49-47
                </a>
              </li>
              <li>
                <a href="mailto:ceo.openvisa@gmail.com" className="hover:text-yellow transition-colors">
                  ✉ ceo.openvisa@gmail.com
                </a>
              </li>
              <li className="pt-2 text-white/50">
                📍 <a
                  href="https://maps.app.goo.gl/PWrf6rG5sXb2XWrU6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow transition-colors"
                >
                  м. Вінниця, пл. Гагаріна, 2<br />
                  ТЦ «Вінницький універмаг»
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} Jobs Go VN. Всі права захищено.</p>
          <p>Розроблено в Україні 🇺🇦</p>
        </div>
      </div>
    </footer>
  );
}
