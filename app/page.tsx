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
        {/* 2. Stats */}
        <Reveal><Stats /></Reveal>
        {/* 3. Країни */}
        <Reveal><Countries /></Reveal>
        {/* 4. Про нас */}
        <Reveal><About /></Reveal>
        {/* 5. Чому варто */}
        <Reveal><WhyUs /></Reveal>
        {/* 6. Наші послуги */}
        <Reveal><Services /></Reveal>
        {/* 7. Відгуки */}
        <Reveal><Reviews /></Reveal>
        {/* 8. Як ми працюємо */}
        <Reveal><Process /></Reveal>
        {/* 9. Команда */}
        <Reveal><Team /></Reveal>
        {/* 10. Наша історія */}
        <Reveal><Story /></Reveal>
        {/* 11. Соцмережі */}
        <Reveal><Socials /></Reveal>

        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3057] mb-4">
              Готові почати працювати в Європі?
            </h2>
            <p className="text-gray-500 mb-8">
              Залиште заявку — перша консультація безкоштовна.
            </p>
            <button
              onClick={openModal}
              className="bg-[#c9870a] hover:bg-[#e09f1a] text-white font-bold px-10 py-4 rounded-md text-base transition-colors"
            >
              Підібрати вакансію
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
