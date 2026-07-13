import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Navbar from '../components/Navbar';
import HeroSection from '../components/home/HeroSection';
import ProblemSection from '../components/home/ProblemSection';
import EcosystemOrbitSection from '../components/home/EcosystemOrbitSection';
import FeatureShowcaseSection from '../components/home/FeatureShowcaseSection';
import BusinessJourneySection from '../components/home/BusinessJourneySection';
import ImpactSection from '../components/home/ImpactSection';
import TrustedSection from '../components/home/TrustedSection';
import WhyExantaraSection from '../components/home/WhyExantaraSection';
import AiExperienceSection from '../components/home/AiExperienceSection';
import TestimonialSection from '../components/home/TestimonialSection';
import FaqSection from '../components/home/FaqSection';
import CtaSection from '../components/home/CtaSection';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  // Initialize Lenis Smooth Scroll and GSAP Pinning
  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll synced with GSAP Ticker for 0-frame latency
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    const sectionsToPin = [
      { id: '#hero-pin', start: 'top top' },
      { id: '#problem-pin', start: 'bottom bottom' },
      { id: '#fitur-pin', start: 'bottom bottom' },
      { id: '#dampak-pin', start: 'bottom bottom' }
    ];

    sectionsToPin.forEach(({ id, start }) => {
      ScrollTrigger.create({
        trigger: id,
        start: start,
        end: '+=100%',
        pin: true,
        pinSpacing: false,
      });
    });

    // 3. Highlight navigation dots based on active pinned section
    const pinIds = ['#hero-pin', '#problem-pin', '#fitur-pin', '#dampak-pin'];
    pinIds.forEach((id, index) => {
      ScrollTrigger.create({
        trigger: id,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => {
          if (self.isActive) {
            document.querySelectorAll('.pin-dot').forEach((dot, dotIdx) => {
              if (dotIdx === index) {
                dot.classList.add('bg-white', 'scale-125', 'ring-2', 'ring-white/40', 'ring-offset-2', 'ring-offset-black/80');
                dot.classList.remove('bg-white/40');
              } else {
                dot.classList.remove('bg-white', 'scale-125', 'ring-2', 'ring-white/40', 'ring-offset-2', 'ring-offset-black/80');
                dot.classList.add('bg-white/40');
              }
            });
          }
        }
      });
    });

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111827] selection:bg-[#374151] selection:text-white overflow-x-hidden font-body">
      
      {/* Global Navigation */}
      <Navbar />
 
      {/* Floating Pinned Scroll Navigation Indicators */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[9999] hidden md:flex flex-col gap-4 bg-black/60 backdrop-blur-md px-3 py-5 rounded-full border border-white/10 shadow-2xl">
        {[
          { id: '#hero-pin', label: 'Hero' },
          { id: '#problem-pin', label: 'Reality Check' },
          { id: '#fitur-pin', label: 'Dashboard' },
          { id: '#dampak-pin', label: 'Dampak Nasional' }
        ].map((sec, index) => (
          <button
            key={sec.id}
            onClick={() => {
              const el = document.querySelector(sec.id);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className={`pin-dot w-2 h-2 rounded-full transition-all duration-300 cursor-pointer relative group ${
              index === 0 ? 'bg-white scale-125 ring-2 ring-white/40 ring-offset-2 ring-offset-black/80' : 'bg-white/40'
            }`}
            aria-label={`Scroll to ${sec.label}`}
          >
            {/* Tooltip */}
            <span className="absolute right-6 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-black/90 text-white font-mono text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-white/10 shadow-xl">
              {sec.label}
            </span>
          </button>
        ))}
      </div>

      {/* Main Container */}
      <main className="relative z-10 w-full">
        {/* Section 1: Hero Cover (Pinned) */}
        <div id="hero-pin" className="relative z-10 w-full">
          <HeroSection />
        </div>

        {/* Section 2: Reality Check (Slides up with rounded top corners & Pinned) */}
        <div id="problem-pin" className="relative z-20 bg-white rounded-t-[3.5rem] md:rounded-t-[5rem] shadow-[0_-24px_50px_rgba(0,0,0,0.15)] overflow-hidden">
          <ProblemSection />
        </div>

        {/* Section 3: Ecosystem Orbit */}
        <div className="relative z-20 bg-[#f8f9fa]">
          <EcosystemOrbitSection />
        </div>

        {/* Section 4: Feature Showcase (Pinned) */}
        <div id="fitur-pin" className="relative z-20 bg-white">
          <FeatureShowcaseSection />
        </div>

        {/* Section 5: Business Journey (Slides up with rounded top corners) */}
        <div id="journey-pin" className="relative z-20 bg-black rounded-t-[3.5rem] md:rounded-t-[5rem] shadow-[0_-24px_50px_rgba(0,0,0,0.3)] overflow-hidden">
          <BusinessJourneySection />
        </div>

        {/* Section 6: Impact & National Vision (Slides up with rounded top corners & Pinned) */}
        <div id="dampak-pin" className="relative z-20 bg-white rounded-t-[3.5rem] md:rounded-t-[5rem] shadow-[0_-24px_50px_rgba(0,0,0,0.15)] overflow-hidden">
          <ImpactSection />
        </div>

        {/* Section 7: Trusted Ecosystem Marquee */}
        <div className="relative z-20 bg-[#f8f9fa]">
          <TrustedSection />
        </div>

        {/* Section 8: Why Exantara Magazine Layout */}
        <div className="relative z-20 bg-white">
          <WhyExantaraSection />
        </div>

        {/* Section 9: Trade Intelligence Report 
        <div className="relative z-20 bg-[#f8f9fa]">
          <AiExperienceSection />
        </div>
        */}

        {/* Section 10: Case Studies (Pinned) */}
        <div id="testimoni-pin" className="relative z-20 bg-white">
          <TestimonialSection />
        </div>

        {/* Section 11: FAQ (Slides up with rounded top corners & Pinned) */}
        <div id="faq-pin" className="relative z-20 bg-[#f8f9fa] rounded-t-[3.5rem] md:rounded-t-[5rem] shadow-[0_-24px_50px_rgba(0,0,0,0.15)] overflow-hidden">
          <FaqSection />
        </div>

        {/* Section 12: CTA & Footer (Slides up with rounded top corners) */}
        <div id="contact" className="relative z-30 bg-black rounded-t-[3.5rem] md:rounded-t-[5rem] shadow-[0_-24px_50px_rgba(0,0,0,0.35)] overflow-hidden">
          <CtaSection />
        </div>

        {/* Global Footer with solid z-30 white background to block out the pinned FAQ underneath */}
        <div className="relative z-30 bg-white">
          <Footer />
        </div>
      </main>

    </div>
  );
}
