const STATS = [
  { value: '15+', label: 'спеціалістів у команді' },
  { value: '100%', label: 'офіційне працевлаштування' },
  { value: 'A–Я', label: 'повний супровід' },
  { value: 'ЄС', label: 'країни Європи' },
];

export default function Stats() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
          {STATS.map((s) => (
            <div key={s.label} className="text-center py-6 px-3 sm:py-7 sm:px-4">
              <p className="text-3xl sm:text-4xl font-bold text-[#1a3057]">{s.value}</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
