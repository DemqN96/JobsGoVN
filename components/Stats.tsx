'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  end: number;
  suffix: string;
  label: string;
  duration: number;
}

const STATS: Stat[] = [
  { end: 8,    suffix: '',    label: 'років активної роботи',                    duration: 1000 },
  { end: 1270, suffix: '+',   label: 'перевірених роботодавців',                 duration: 1600 },
  { end: 7680, suffix: '',    label: 'влаштованих та задоволених клієнтів',      duration: 1800 },
  { end: 15,   suffix: '+',   label: 'країн для працевлаштування',               duration: 1200 },
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
    <div className="text-center">
      <p className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-yellow leading-none">
        {count}{stat.suffix}
      </p>
      <p className="mt-3 text-white/75 text-sm sm:text-base leading-snug">
        {stat.label}
      </p>
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
    <section ref={ref} className="bg-blue text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <p className="eyebrow text-yellow text-center mb-10">Про компанію</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <StatItem key={s.label} stat={s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
