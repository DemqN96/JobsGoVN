'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import ReviewsCarousel, { ReviewPhoto } from './ReviewsCarousel';

// Натуральні розміри сконвертованих фото (ширина однакова, висота різна —
// дві портретні). Передаємо в next/image, щоб пропорції не ламались.
const PHOTOS: ReviewPhoto[] = [
  { src: '/reviews/review-01.jpg', w: 1206, h: 918 },
  { src: '/reviews/review-02.jpg', w: 1206, h: 905 },
  { src: '/reviews/review-03.jpg', w: 1206, h: 987 },
  { src: '/reviews/review-04.jpg', w: 1206, h: 892 },
  { src: '/reviews/review-05.jpg', w: 1206, h: 880 },
  { src: '/reviews/review-06.jpg', w: 1206, h: 889 },
  { src: '/reviews/review-07.jpg', w: 1206, h: 946 },
  { src: '/reviews/review-08.jpg', w: 1206, h: 937 },
  { src: '/reviews/review-09.jpg', w: 1206, h: 886 },
  { src: '/reviews/review-10.jpg', w: 1206, h: 1429 },
  { src: '/reviews/review-11.jpg', w: 1206, h: 894 },
  { src: '/reviews/review-12.jpg', w: 1206, h: 889 },
  { src: '/reviews/review-13.jpg', w: 1206, h: 946 },
  { src: '/reviews/review-14.jpg', w: 1206, h: 895 },
  { src: '/reviews/review-15.jpg', w: 1206, h: 950 },
  { src: '/reviews/review-16.jpg', w: 1206, h: 896 },
  { src: '/reviews/review-17.jpg', w: 1206, h: 1450 },
  { src: '/reviews/review-18.jpg', w: 1206, h: 899 },
];

const COUNT = PHOTOS.length;

export default function Reviews() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i - 1 + COUNT) % COUNT)),
    []
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % COUNT)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, prev, next]);

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">Відгуки</p>
          <h2 className="font-display font-extrabold text-ink text-3xl sm:text-4xl lg:text-5xl mb-4">
            Відгуки наших клієнтів
          </h2>
          <p className="text-ink-soft max-w-xl mx-auto">
            Реальні відгуки людей, яких ми працевлаштували в Європі.
            Проведіть, щоб погортати, натисніть на фото — щоб збільшити.
          </p>
        </div>
      </div>

      {/* Карусель — на всю ширину */}
      <ReviewsCarousel photos={PHOTOS} onOpen={setActive} />

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4 sm:p-8"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl leading-none w-10 h-10 flex items-center justify-center"
            aria-label="Закрити"
          >
            ×
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 sm:left-6 text-white/70 hover:text-white text-4xl sm:text-5xl w-12 h-12 flex items-center justify-center"
            aria-label="Попереднє"
          >
            ‹
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={PHOTOS[active].src}
              alt={`Відгук клієнта ${active + 1}`}
              width={PHOTOS[active].w}
              height={PHOTOS[active].h}
              className="object-contain w-auto h-auto max-w-full max-h-[85vh] rounded-lg"
              priority
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 sm:right-6 text-white/70 hover:text-white text-4xl sm:text-5xl w-12 h-12 flex items-center justify-center"
            aria-label="Наступне"
          >
            ›
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {active + 1} / {COUNT}
          </div>
        </div>
      )}
    </section>
  );
}
