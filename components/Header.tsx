'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeaderProps {
  onConsult: () => void;
}

const NAV = [
  { label: 'Про нас', href: '#about' },
  { label: 'Послуги', href: '#vacancies' },
  { label: 'Як працюємо', href: '#process' },
  { label: 'Вакансії', href: '#hot' },
  { label: 'Відгуки', href: '#reviews' },
  { label: 'Контакти', href: '#contacts' },
];

export default function Header({ onConsult }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Топ-бар */}
      <div className="bg-ink text-white/80 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-9 flex items-center justify-between gap-4">
          <span className="hidden sm:inline">
            Офіційне працевлаштування в країнах ЄС
          </span>
          <div className="flex items-center gap-4">
            <a href="tel:+380970774947" className="hover:text-yellow transition-colors">
              +38 (097) 077-49-47
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline">Вінниця</span>
          </div>
        </div>
      </div>

      {/* Основний бар */}
      <div
        className={`transition-shadow duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <a href="#" className="flex-shrink-0 flex items-center gap-3">
            <Image src="/logo.png" alt="Jobs Go VN" width={40} height={40} priority />
            <span className="hidden sm:block font-display font-extrabold text-ink text-lg leading-none tracking-tight">
              JOBS GO <span className="text-blue">VN</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-ink-soft hover:text-blue text-sm font-semibold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={onConsult}
            className="hidden lg:inline-flex items-center bg-yellow hover:bg-yellow-dark text-ink font-bold text-sm px-6 py-3 rounded-full transition-colors"
          >
            Залишити заявку
          </button>

          <button
            className="lg:hidden p-2 text-ink"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-line px-4 py-4 flex flex-col gap-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-ink font-semibold py-1"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => { setMenuOpen(false); onConsult(); }}
              className="bg-yellow text-ink font-bold px-5 py-3 rounded-full mt-2"
            >
              Залишити заявку
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
