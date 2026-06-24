'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Reviews from '@/components/Reviews';
import Countries from '@/components/Countries';
import About from '@/components/About';
import WhyUs from '@/components/WhyUs';
import Services from '@/components/Services';
import Process from '@/components/Process';
import HotVacancies from '@/components/HotVacancies';
import Team from '@/components/Team';
import Story from '@/components/Story';
import Socials from '@/components/Socials';
import LeadModal from '@/components/LeadModal';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  useEffect(() => {
    window.addEventListener('open-lead-modal', openModal);
    return () => window.removeEventListener('open-lead-modal', openModal);
  }, []);

  return (
    <>
      <Header onConsult={openModal} />
      <main>
        {/* 1. Hero */}
        <Hero onConsult={openModal} />
        {/* 2. Про агентство */}
        <Reveal><About /></Reveal>
        {/* 3. Лічильники */}
        <Reveal><Stats /></Reveal>
        {/* 4. Актуальні послуги (таби по країнах) */}
        <Reveal><Services /></Reveal>
        {/* 5. Як ми працюємо */}
        <Reveal><Process /></Reveal>
        {/* 6. Гарячі вакансії */}
        <Reveal><HotVacancies /></Reveal>
        {/* 7. Переваги / окупність */}
        <Reveal><WhyUs /></Reveal>
        {/* 8. Країни */}
        <Reveal><Countries /></Reveal>
        {/* 9. Відгуки */}
        <Reveal><Reviews /></Reveal>
        {/* 10. Команда */}
        <Reveal><Team /></Reveal>
        {/* 11. Наша історія */}
        <Reveal><Story /></Reveal>
        {/* 12. Соцмережі */}
        <Reveal><Socials /></Reveal>

        {/* 13. Заявка / контакти */}
        <section id="contacts" className="relative bg-ink text-white overflow-hidden py-20 sm:py-28">
          <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full bg-yellow/10 blur-3xl" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <p className="eyebrow text-yellow mb-4">Залишились запитання?</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-5">
              Готові почати працювати в Європі?
            </h2>
            <p className="text-white/70 text-lg mb-9">
              Залиште заявку — менеджер зателефонує найближчим часом.
              Перша консультація безкоштовна.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={openModal}
                className="bg-yellow hover:bg-yellow-dark text-ink font-bold px-9 py-4 rounded-full text-base transition-colors"
              >
                Залишити заявку
              </button>
              <a
                href="tel:+380970774947"
                className="inline-flex items-center gap-2 border border-white/25 hover:border-white/60 text-white font-semibold px-7 py-4 rounded-full transition-colors"
              >
                +38 (097) 077-49-47
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
