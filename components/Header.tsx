'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeaderProps {
  onConsult: () => void;
}

const NAV = [
  { label: 'Про нас', href: '#about' },
  { label: 'Країни', href: '#channels' },
  { label: 'Як працюємо', href: '#process' },
  { label: 'Послуги', href: '#vacancies' },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <a href="#" className="flex-shrink-0 flex items-center gap-3">
          <Image src="/logo.png" alt="Jobs Go VN" width={44} height={44} priority />
          <span className="hidden sm:block font-bold text-[#1a3057] text-lg leading-tight">
            Jobs Go <span className="text-[#c9870a]">VN</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#1a3057] hover:text-[#c9870a] text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={onConsult}
          className="hidden md:inline-flex bg-[#c9870a] hover:bg-[#e09f1a] text-white font-semibold text-sm px-5 py-2.5 rounded-md transition-colors"
        >
          Підібрати вакансію
        </button>

        <button
          className="md:hidden p-2 text-[#1a3057]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#1a3057] font-medium py-1"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+380970774947"
            className="text-[#1a3057] font-semibold py-1"
          >
            📞 +38 (097) 077-49-47
          </a>
          <button
            onClick={() => { setMenuOpen(false); onConsult(); }}
            className="bg-[#c9870a] text-white font-semibold px-5 py-3 rounded-md mt-2"
          >
            Підібрати вакансію
          </button>
        </div>
      )}
    </header>
  );
}
