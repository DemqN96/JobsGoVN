const CHANNELS = [
  {
    name: 'Telegram-канал з вакансіями',
    desc: 'Свіжі гарячі вакансії у країнах ЄС щодня.',
    href: 'https://t.me/robootaeu',
    handle: '@robootaeu',
    icon: 'tg',
  },
  {
    name: 'Viber-спільнота',
    desc: 'Оперативне спілкування та оновлення вакансій.',
    href: 'https://invite.viber.com/?g2=AQBlr4wjW0V%2FNUtwZpPr%2FCNQcXb22LafDZ43sLvz6eepEJcQ3d36leh%2BXlgIYd5p',
    handle: 'Jobs Go VN',
    icon: 'viber',
  },
  {
    name: 'Відгуки та умови проживання',
    desc: 'Telegram-група: реальні відгуки кандидатів про роботу та житло.',
    href: 'https://t.me/+9D-Yo8mZ-q9iNzQy',
    handle: 'Закрита група',
    icon: 'tg',
  },
];

function Icon({ kind }: { kind: string }) {
  if (kind === 'tg') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.4.034C9.4.082 5.16.418 2.788 2.595 1.026 4.353.405 6.928.34 10.122c-.064 3.193-.143 9.184 5.63 10.807v2.482s-.037.999.625 1.203c.795.246 1.265-.514 2.026-1.331.418-.45.995-1.115 1.43-1.62 3.946.331 6.98-.428 7.326-.54.795-.259 5.293-.836 6.024-6.807.752-6.157-.36-10.05-2.366-11.81-.605-.541-3.032-2.31-8.443-2.327 0 0-.398-.025-1.193-.025z" />
    </svg>
  );
}

export default function Channels() {
  return (
    <section id="channels" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3057] mb-3">
          Актуальні вакансії та чати
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl">
          Підпишіться, щоб отримувати свіжі вакансії одразу, як вони з&apos;являються,
          та читати відгуки наших кандидатів.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CHANNELS.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#1a3057] text-white flex items-center justify-center">
                  <Icon kind={c.icon} />
                </div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  {c.handle}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#1a3057] mb-2">{c.name}</h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{c.desc}</p>
              <span className="text-[#c9870a] text-sm font-semibold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                Перейти
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
