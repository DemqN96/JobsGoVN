'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  end: number;
  suffix: string;
  label: string;
  duration: number;
}

const STATS: Stat[] = [
  { end: 15,   suffix: '+',       label: 'експертів з досвідом від 3 років',          duration: 1200 },
  { end: 9,    suffix: ' років',  label: 'офіційної роботи',                           duration: 1000 },
  { end: 7680, suffix: '',        label: 'влаштованих людей',                          duration: 1800 },
  { end: 100,  suffix: '%',       label: 'офіційне та легальне працевлаштування',      duration: 1400 },
];

function useCountUp(end: number, duration: number, started: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  return value;
}

function StatItem({ stat, started }: { stat: Stat; started: boolean }) {
  const count = useCountUp(stat.end, stat.duration, started);
  return (
    <div className="text-center py-6 px-3 sm:py-7 sm:px-4">
      <p className="text-3xl sm:text-4xl font-bold text-[#1a3057]">
        {count}{stat.suffix}
      </p>
      <p className="text-gray-400 text-xs sm:text-sm mt-1">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
          {STATS.map((s) => (
            <StatItem key={s.label} stat={s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
