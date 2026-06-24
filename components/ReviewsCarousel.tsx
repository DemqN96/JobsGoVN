'use client';

import Image from 'next/image';
import { useRef, useEffect, useCallback } from 'react';

export interface ReviewPhoto {
  src: string;
  w: number;
  h: number;
}

const SPEED = 0.5;
const CARD_H = 340;

export default function ReviewsCarousel({
  photos,
  onOpen,
}: {
  photos: ReviewPhoto[];
  onOpen: (index: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const draggingRef = useRef(false);
  const movedRef = useRef(0);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);

  const doubled = [...photos, ...photos];

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

  const clampLoop = (el: HTMLDivElement) => {
    if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft -= el.scrollWidth / 2;
    if (el.scrollLeft < 0) el.scrollLeft += el.scrollWidth / 2;
  };

  const start = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    draggingRef.current = true;
    movedRef.current = 0;
    startXRef.current = clientX;
    scrollStartRef.current = el.scrollLeft;
  };

  const move = (clientX: number) => {
    if (!draggingRef.current || !ref.current) return;
    const dx = clientX - startXRef.current;
    movedRef.current = Math.max(movedRef.current, Math.abs(dx));
    const el = ref.current;
    el.scrollLeft = scrollStartRef.current - dx;
    clampLoop(el);
  };

  const end = () => {
    draggingRef.current = false;
    if (ref.current) ref.current.style.cursor = 'grab';
  };

  return (
    <div
      className="overflow-hidden"
      onMouseMove={(e) => move(e.clientX)}
      onMouseUp={end}
      onMouseLeave={end}
    >
      <div
        ref={ref}
        className="flex gap-4 overflow-x-hidden"
        style={{ paddingLeft: 24, paddingRight: 24, cursor: 'grab' }}
        onMouseDown={(e) => {
          start(e.clientX);
          if (ref.current) ref.current.style.cursor = 'grabbing';
        }}
        onTouchStart={(e) => start(e.touches[0].clientX)}
        onTouchMove={(e) => move(e.touches[0].clientX)}
        onTouchEnd={end}
      >
        {doubled.map((p, i) => (
          <button
            key={`${p.src}-${i}`}
            onClick={() => {
              if (movedRef.current < 8) onOpen(i % photos.length);
            }}
            className="shrink-0 rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow select-none"
            style={{ height: CARD_H }}
            aria-label={`Відгук ${(i % photos.length) + 1}`}
          >
            <Image
              src={p.src}
              alt={`Відгук клієнта ${(i % photos.length) + 1}`}
              width={p.w}
              height={p.h}
              draggable={false}
              sizes="500px"
              className="h-full w-auto object-cover pointer-events-none"
              style={{ height: CARD_H, width: 'auto' }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
