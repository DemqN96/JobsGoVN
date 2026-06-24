'use client';

import Image from 'next/image';
import { useRef, useEffect, useCallback } from 'react';

interface Member {
  name: string;
  role: string;
  photo: string;
  email?: string;
  phone?: string;
}

function initials(name: string) {
  return name.split(' ').slice(0, 2).map((p) => p[0]).join('').toUpperCase();
}

function Card({ m }: { m: Member }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 select-none">
      <div className="relative bg-mist pointer-events-none" style={{ aspectRatio: '3/4' }}>
        {m.photo ? (
          <Image
            src={m.photo}
            alt={m.name}
            fill
            sizes="380px"
            draggable={false}
            className="object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-ink/20 text-5xl font-bold">
            {initials(m.name)}
          </div>
        )}
      </div>
      <div className="p-4 pointer-events-none">
        {m.name ? (
          <>
            <h3 className="font-bold text-ink leading-tight">{m.name}</h3>
            <p className="text-sm text-gray-400 mt-1 leading-snug">{m.role}</p>
          </>
        ) : (
          <h3 className="font-bold text-ink leading-snug">{m.role}</h3>
        )}
        {m.email && (
          <p className="block mt-3 text-xs text-blue truncate">✉ {m.email}</p>
        )}
        {m.phone && (
          <p className="block mt-3 text-xs text-blue">📞 {m.phone}</p>
        )}
      </div>
    </div>
  );
}

const SPEED = 0.6;

export default function TeamCarousel({ members }: { members: Member[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);

  const doubled = [...members, ...members];

  const animate = useCallback(() => {
    const el = ref.current;
    if (el && !draggingRef.current) {
      el.scrollLeft += SPEED;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft -= el.scrollWidth / 2;
      }
    }
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  // Mouse drag
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    draggingRef.current = true;
    startXRef.current = e.clientX;
    scrollStartRef.current = el.scrollLeft;
    el.style.cursor = 'grabbing';
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!draggingRef.current || !ref.current) return;
    const dx = e.clientX - startXRef.current;
    const el = ref.current;
    el.scrollLeft = scrollStartRef.current - dx;
    // seamless loop during drag
    if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft -= el.scrollWidth / 2;
    if (el.scrollLeft < 0) el.scrollLeft += el.scrollWidth / 2;
  }, []);

  const onMouseUp = useCallback(() => {
    draggingRef.current = false;
    if (ref.current) ref.current.style.cursor = 'grab';
  }, []);

  // Touch drag
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const el = ref.current;
    if (!el) return;
    draggingRef.current = true;
    startXRef.current = e.touches[0].clientX;
    scrollStartRef.current = el.scrollLeft;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!draggingRef.current || !ref.current) return;
    const dx = e.touches[0].clientX - startXRef.current;
    const el = ref.current;
    el.scrollLeft = scrollStartRef.current - dx;
    if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft -= el.scrollWidth / 2;
    if (el.scrollLeft < 0) el.scrollLeft += el.scrollWidth / 2;
  }, []);

  const onTouchEnd = useCallback(() => {
    draggingRef.current = false;
  }, []);

  return (
    <div
      className="overflow-hidden"
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <div
        ref={ref}
        className="flex gap-4 overflow-x-hidden"
        style={{ paddingLeft: 24, paddingRight: 24, cursor: 'grab' }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {doubled.map((m, i) => (
          <div
            key={`${m.name}-${i}`}
            data-card
            className="shrink-0"
            style={{ width: 380 }}
          >
            <Card m={m} />
          </div>
        ))}
      </div>
    </div>
  );
}
