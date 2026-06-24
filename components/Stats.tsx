const STATS = [
  { value: '8', label: 'років активної роботи' },
  { value: '1270+', label: 'перевірених роботодавців' },
  { value: '7680', label: 'влаштованих та задоволених клієнтів' },
  { value: '15+', label: 'країн для працевлаштування' },
];

export default function Stats() {
  return (
    <section className="bg-blue text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <p className="eyebrow text-yellow text-center mb-10">Про компанію</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-yellow leading-none">
                {s.value}
              </p>
              <p className="mt-3 text-white/75 text-sm sm:text-base leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
