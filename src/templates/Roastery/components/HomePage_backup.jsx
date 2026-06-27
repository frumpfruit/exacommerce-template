import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ROASTERY_PRODUCTS } from '../products';

// --- CountUp Hook ---
function useCountUp(target, duration = 1800, inView = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

// --- StatsCounter Component ---
function StatsCounter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const stats = [
    { target: 48, suffix: '+', label: 'Farm Partners', sub: 'Direct trade, no middlemen', color: '#F58A6C' },
    { target: 12, suffix: '', label: 'Origins', sub: 'Across Indonesian archipelago', color: '#024871' },
    { target: 2400, suffix: '+', label: 'Happy Subscribers', sub: 'Rating 4.9 / 5.0', color: '#004E7C' },
    { target: 48, suffix: 'h', label: 'Ship After Roast', sub: 'Freshness guarantee', color: '#F58A6C' },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="lg:col-span-6 grid grid-cols-2 border-t lg:border-t-0 lg:border-l border-[rgba(0,0,0,0.1)] pt-8 lg:pt-0"
    >
      {stats.map((stat, i) => (
        <StatItem key={i} stat={stat} inView={inView} delay={i * 200} />
      ))}
    </motion.div>
  );
}

function StatItem({ stat, inView, delay }) {
  const [triggered, setTriggered] = useState(false);
  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setTriggered(true), delay);
      return () => clearTimeout(t);
    }
  }, [inView, delay]);

  const count = useCountUp(stat.target, 1600, triggered);

  const borderRight = [0, 2].includes([0, 1, 2, 3].indexOf(stat)) ? 'border-r' : '';

  return (
    <div
      className={`flex flex-col justify-center p-6 lg:p-8 border-b border-[rgba(0,0,0,0.08)] ${borderRight}`}
      style={{ borderColor: 'rgba(0,0,0,0.08)' }}
    >
      <span
        className="text-[56px] md:text-[80px] font-[900] leading-none mb-2 tabular-nums"
        style={{ color: stat.color, fontFamily: 'Hanken Grotesk, sans-serif' }}
      >
        {count}{stat.suffix}
      </span>
      <span className="uppercase text-[11px] tracking-[2px] font-bold mb-1" style={{ color: '#004E7C' }}>{stat.label}</span>
      <span className="italic text-[12px]" style={{ color: '#41474F' }}>{stat.sub}</span>
    </div>
  );
}

export default function HomePage({ onNavigate, onToggleCartItem, cart }) {
  // Brand colors matched to DESIGNBRUVI
  const brand = {
    blue: "#004E7C",
    deepBlue: "#024871",
    coral: "#F58A6C",
    cream: "#f7f9ff",
    brown: "#001d32",
    tan: "#EDF8F8",
    gray: "#41474f",
    lightGray: "#e2efff",
    white: "#FFFFFF",
  
  onSurface: "#001d32",
  softMint: "#EDF8F8",
  surface: "#f7f9ff",
  primary: "#003759",};

  // We use the first 4 products for the featured section
  const featuredProducts = ROASTERY_PRODUCTS.slice(0, 4);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredProducts.length]);

  return (
    <div className="text-on-surface font-body-md" style={{ backgroundColor: brand.cream }}>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* 1. Hero Section (Asymmetric Split) */}
      <section className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-[55%] h-[40vh] lg:h-screen relative order-2 lg:order-1">
          <img 
            className="w-full h-full object-cover"
            alt="Coffee beans close up" 
            src="/images/roastery/nathan-dumlao-xPSBoaJNs2g-unsplash.jpg"
          />
        </div>
        <div className="w-full lg:w-[45%] flex flex-col justify-center px-8 py-16 md:px-12 lg:px-16 lg:py-20 order-1 lg:order-2" style={{ backgroundColor: brand.deepBlue, color: brand.white }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-[4px] text-[11px] font-bold mb-6" style={{ color: brand.coral }}>
              Jakarta &middot; Est. 2019
            </p>
            <h1 className="text-[48px] md:text-[56px] lg:text-[72px] xl:text-[80px] font-[800] leading-[1.0] mb-8 font-display-lg tracking-tight">
              Coffee Is Not<br />A Habit.<br />It's A Standard.
            </h1>
            <p className="text-lg leading-relaxed max-w-md mb-10 opacity-90">
              Elite Brew sources, roasts, and delivers single-origin beans crafted for those who refuse to settle for ordinary.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button 
                onClick={() => onNavigate('store')}
                className="px-10 py-4 font-bold rounded-[2px] transition-transform hover:-translate-y-1 shadow-lg"
                style={{ backgroundColor: brand.coral, color: brand.white }}
              >
                Explore Our Roasts
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="font-bold pb-1 border-b transition-opacity hover:opacity-70"
                style={{ borderColor: 'rgba(255,255,255,0.4)', color: brand.white }}
              >
                Our Process &rarr;
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Brand Statement */}
      <section className="relative w-full flex flex-col">
        {/* Marquee */}
        <div className="w-full overflow-hidden whitespace-nowrap py-5 border-y border-[rgba(0,0,0,0.05)] flex items-center z-10" style={{ backgroundColor: brand.softMint }}>
          <div className="inline-block animate-marquee">
            <span className="text-[13px] uppercase tracking-[6px] font-bold mx-4" style={{ color: brand.onSurface }}>
              SINGLE ORIGIN &middot; PRECISION ROASTED &middot; SMALL BATCH &middot; DIRECT TRADE &middot; SPECIALTY GRADE &middot; TRACEABLE FARMS &middot; 
              SINGLE ORIGIN &middot; PRECISION ROASTED &middot; SMALL BATCH &middot; DIRECT TRADE &middot; SPECIALTY GRADE &middot; TRACEABLE FARMS &middot; 
              SINGLE ORIGIN &middot; PRECISION ROASTED &middot; SMALL BATCH &middot; DIRECT TRADE &middot; SPECIALTY GRADE &middot; TRACEABLE FARMS &middot; 
            </span>
          </div>
        </div>
        
        {/* Manifesto with BG Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full flex flex-col bg-center bg-cover bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/images/roastery/kevin-schmid-ftA71vetxuo-unsplash.jpg')", backgroundBlendMode: "overlay", backgroundColor: "rgba(247, 249, 255, 0.85)" }}>
          <div className="pt-24 pb-16 px-6 max-w-[720px] mx-auto text-center z-10 relative">
            <h2 className="text-[36px] md:text-[48px] font-bold mb-8 font-display-lg leading-tight italic font-serif" style={{ color: brand.onSurface }}>
              We don't roast coffee.<br />We translate terroir.
            </h2>
            <p className="text-[18px] leading-[1.8]" style={{ color: brand.gray }}>
              Every bag of Elite Brew begins with a conversation — with farmers who cultivate with intention, and ends with a cup that makes you pause. We believe the best coffee isn't discovered in a café. It's roasted for you, the moment you order.
            </p>
          </div>

          {/* Wave Separator linking to brand.white background of the next section */}
          <div className="w-full overflow-hidden leading-[0] mt-auto relative z-10">
            <svg className="relative block w-full h-[50px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,115.5,188.4,98.67,243.6,82.52,284.14,63.14,321.39,56.44Z" fill={brand.white}></path>
            </svg>
          </div>
        </motion.div>
      </section>

      {/* 3. Angka Kredibilitas */}
      <section className="pt-24 relative flex flex-col" style={{ backgroundColor: brand.white }}>
        <div className="max-w-[1280px] mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 pr-0 lg:pr-16 flex flex-col justify-center"
          >
            <h3 className="text-[32px] md:text-[44px] font-bold mb-6 font-display-lg leading-[1.2]" style={{ color: brand.onSurface }}>
              Five years of obsession over a single cup.
            </h3>
            <p className="text-[18px] leading-[1.7]" style={{ color: brand.gray }}>
              Elite Brew started as a pursuit — not a business. We spent two years traveling to farms in Aceh, Flores, Papua, and East Java before roasting our first commercial batch. Because understanding origin is the only way to honor it.
            </p>
          </motion.div>
          
          <StatsCounter />
        </div>

        {/* Upward Wave Transition linking to brand.lightGray background of the next section */}
        <div className="w-full overflow-hidden leading-[0] mt-auto">
          <svg className="relative block w-full h-[50px] md:h-[80px] scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,115.5,188.4,98.67,243.6,82.52,284.14,63.14,321.39,56.44Z" fill={brand.lightGray}></path>
          </svg>
        </div>
      </section>

      {/* 4. Origins / Produk Unggulan */}
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true, margin: "-100px" }} 
        transition={{ duration: 0.8 }}
        className="py-24 overflow-hidden" style={{ backgroundColor: brand.lightGray }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1280px] mx-auto px-8 md:px-16 mb-16">
          <p className="uppercase text-[11px] tracking-[3px] font-bold mb-4" style={{ color: brand.coral }}>Our Roasts</p>
          <h2 className="text-[40px] md:text-[56px] font-bold font-display-lg leading-[1.1] mb-6" style={{ color: brand.onSurface }}>
            Every origin,<br />a different story.
          </h2>
          <p className="text-[18px] max-w-lg" style={{ color: brand.gray }}>
            We roast in small batches — no more than 10kg at a time — to preserve what each farm intended.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="max-w-[1280px] mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row h-auto md:h-[500px] lg:h-[600px] rounded-[2px] overflow-hidden shadow-2xl relative transition-colors duration-1000" style={{ backgroundColor: [brand.onSurface, "#1a0a00", brand.deepBlue, "#2C1503"][currentSlide % 4], color: [brand.softMint, brand.softMint, brand.white, brand.softMint][currentSlide % 4] }}>
            
            <div className="w-full md:w-1/2 h-[350px] md:h-full relative overflow-hidden">
               {featuredProducts.map((prod, idx) => (
                  <img 
                    key={prod.id} 
                    src={prod.img} 
                    alt={prod.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 origin-center ${currentSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`} 
                  />
               ))}
            </div>

            <div className="w-full md:w-1/2 relative h-[350px] md:h-full overflow-hidden">
               {featuredProducts.map((prod, idx) => (
                  <div key={prod.id} className={`absolute inset-0 p-10 lg:p-16 flex flex-col justify-center transition-all duration-1000 ${currentSlide === idx ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-8 z-0 pointer-events-none'}`}>
                     <h3 className="text-[32px] md:text-[48px] font-bold font-display-lg mb-2">{prod.name}</h3>
                     <p className="text-[12px] md:text-[14px] opacity-80 mb-6 uppercase tracking-[2px]">{prod.category} &middot; Light-Medium</p>
                     <p className="italic text-[16px] md:text-[18px] opacity-90 mb-8 max-w-md leading-relaxed">"Bright, dynamic, and perfectly balanced. A beautiful reflection of its origin."</p>
                     
                     <div className="flex items-center gap-6 mt-4">
                        <span className="font-bold text-[20px]" style={{ color: brand.coral }}>Rp 185.000</span>
                        <button onClick={() => onNavigate('store')} className="border px-6 py-3 text-[13px] font-bold transition-colors rounded-[2px] hover:bg-white/10" style={{ borderColor: 'currentColor' }}>
                          Add to Cart
                        </button>
                     </div>
                  </div>
               ))}
               
               {/* Controls */}
               <div className="absolute bottom-8 right-8 flex gap-3 z-20">
                  <button onClick={() => setCurrentSlide(prev => prev === 0 ? featuredProducts.length - 1 : prev - 1)} className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border rounded-full hover:bg-white/10 transition-colors" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                     &larr;
                  </button>
                  <button onClick={() => setCurrentSlide(prev => (prev + 1) % featuredProducts.length)} className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border rounded-full hover:bg-white/10 transition-colors" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                     &rarr;
                  </button>
               </div>
               
               {/* Pagination Dots */}
               <div className="absolute bottom-12 left-10 lg:left-16 flex gap-3 z-20">
                  {featuredProducts.map((_, idx) => (
                     <button 
                        key={idx} 
                        onClick={() => setCurrentSlide(idx)} 
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-current scale-150' : 'bg-current opacity-30'}`} 
                     />
                  ))}
               </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* 5. Process Teaser */}
      <section className="w-full flex flex-col">
        {/* Row 1 */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row min-h-[500px]">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[60%] h-[400px] lg:h-auto">
            <img src="/images/roastery/kevin-schmid-ftA71vetxuo-unsplash.jpg" alt="Coffee farm" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full lg:w-[40%] flex flex-col justify-center p-12 lg:p-20" style={{ backgroundColor: brand.cream, color: brand.onSurface }}>
            <p className="uppercase text-[11px] tracking-[3px] font-bold mb-6" style={{ color: brand.coral }}>01 &mdash; Sourcing</p>
            <h3 className="text-[32px] font-bold font-display-lg leading-[1.2] mb-6">
              We travel to origin. Not to tourism sites — to the farms.
            </h3>
            <p className="text-[16px] leading-relaxed mb-8 opacity-90">
              Our sourcing team visits partner farms twice a year. We cup on-site, discuss harvest timelines, and agree on prices that sustain the farmers — before the season starts.
            </p>
            <button onClick={() => onNavigate('about')} className="text-left font-bold border-b border-black/20 pb-1 max-w-max hover:opacity-70 transition-opacity">
              Read Our Process &rarr;
            </button>
          </motion.div>
        </motion.div>
        {/* Row 2 */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8 }}
          className="flex flex-col-reverse lg:flex-row min-h-[500px]">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full lg:w-[40%] flex flex-col justify-center p-12 lg:p-20" style={{ backgroundColor: brand.deepBlue, color: brand.white }}>
            <p className="uppercase text-[11px] tracking-[3px] font-bold mb-6" style={{ color: brand.coral }}>02 &mdash; Roasting</p>
            <h3 className="text-[32px] font-bold font-display-lg leading-[1.2] mb-6">
              Every roast profile is written by hand. No algorithms.
            </h3>
            <p className="text-[16px] leading-relaxed mb-8 opacity-90">
              We roast on a 10kg Probat drum roaster. Each origin gets its own curve — developed through dozens of test batches until the profile honors what the terroir offers.
            </p>
            <button onClick={() => onNavigate('about')} className="text-left font-bold border-b border-white/30 pb-1 max-w-max hover:opacity-70 transition-opacity">
              See Full Process &rarr;
            </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[60%] h-[400px] lg:h-auto">
            <img src="/images/roastery/skylar-michael-SwmUmhrFr54-unsplash.jpg" alt="Roasting beans" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
      </section>

      {/* 6. Social Proof */}
      <section className="py-32 px-6 md:px-16 overflow-hidden" style={{ backgroundColor: brand.cream, color: brand.onSurface }}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start">
          
          {/* Header */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center text-center lg:text-left pt-0 lg:pt-12">
            <p className="uppercase text-[11px] tracking-[3px] font-bold mb-4" style={{ color: brand.coral }}>The Verdict</p>
            <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold font-display-lg leading-[1.05] mb-8">
              Don't just take<br />our word for it.
            </h2>
            <p className="text-[18px] leading-relaxed mb-10 max-w-md mx-auto lg:mx-0" style={{ color: brand.gray }}>
              Join 2,400+ coffee enthusiasts who have made Elite Brew their daily standard. Rated 4.9/5.0 across all origins.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-1">
               {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6" viewBox="0 0 24 24" fill={brand.coral} xmlns="http://www.w3.org/2000/svg">
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
               ))}
            </div>
          </div>
          
          {/* Masonry Testimonials */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div className="flex flex-col gap-6">
               <div className="p-10 rounded-[2px] shadow-lg border" style={{ backgroundColor: brand.white, borderColor: 'rgba(0,0,0,0.03)' }}>
                  <p className="text-[18px] leading-relaxed mb-8 italic font-serif opacity-90">"I've tried roasteries from Tokyo to Berlin. Elite Brew is the only one I reorder without thinking. The Aceh Gayo changed how I think about light roast."</p>
                  <p className="text-[12px] font-bold uppercase tracking-[1px]">— Reza K., Jakarta</p>
               </div>
               <div className="p-10 rounded-[2px] shadow-lg border" style={{ backgroundColor: brand.white, borderColor: 'rgba(0,0,0,0.03)' }}>
                  <p className="text-[18px] leading-relaxed mb-8 italic font-serif opacity-90">"Ordered once, subscribed for life. The Papua Wamena is extraordinary, bright, and honest."</p>
                  <p className="text-[12px] font-bold uppercase tracking-[1px]">— Bram S., Bandung</p>
               </div>
            </div>
            <div className="flex flex-col gap-6 sm:mt-16">
               <div className="p-10 rounded-[2px] shadow-xl border overflow-hidden relative" style={{ backgroundColor: brand.deepBlue, color: brand.white, borderColor: 'rgba(0,0,0,0.05)' }}>
                  <span className="text-[140px] leading-none opacity-[0.07] font-serif absolute -top-4 -left-2">"</span>
                  <p className="text-[20px] leading-relaxed mb-8 italic font-serif relative z-10">"Not just great coffee — great packaging, fast shipping, and they know their craft. Every origin tells a different story."</p>
                  <p className="text-[12px] font-bold uppercase tracking-[1px]" style={{ color: brand.coral }}>— Lila R., Bali</p>
               </div>
               <div className="p-10 rounded-[2px] shadow-lg border" style={{ backgroundColor: brand.white, borderColor: 'rgba(0,0,0,0.03)' }}>
                  <p className="text-[18px] leading-relaxed mb-8 italic font-serif opacity-90">"Finally, a roastery that respects the beans. The brewing guide included in every package is a game changer."</p>
                  <p className="text-[12px] font-bold uppercase tracking-[1px]">— Dinda M., Surabaya</p>
               </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 7. Subscription */}
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true, margin: "-100px" }} 
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col lg:flex-row min-h-[600px]" style={{ backgroundColor: brand.cream }}>
        <div className="w-full lg:w-[50%] h-[400px] lg:h-auto">
          <img src="/images/roastery/jason-betz-klub_Ke-268-unsplash.jpg" alt="Coffee bag on table" className="w-full h-full object-cover" />
        </div>
        <div className="w-full lg:w-[50%] p-10 lg:p-20 flex flex-col justify-center" style={{ color: brand.onSurface }}>
          <p className="uppercase text-[11px] tracking-[3px] font-bold mb-4" style={{ color: brand.coral }}>Elite Brew Club</p>
          <h2 className="text-[40px] md:text-[48px] font-bold font-display-lg leading-[1.1] mb-6">
            Your ritual,<br />delivered monthly.
          </h2>
          <p className="text-[16px] leading-relaxed mb-8" style={{ color: brand.gray }}>
            Join 1,200+ subscribers who never run out of exceptional coffee. Fresh-roasted, shipped within 48 hours of roast date.
          </p>
          
          <ul className="mb-10 space-y-4">
            {["10% off every order, always", "First access to new origins and limited releases", "Free shipping on all subscription orders", "Roast notes and brew guide with every bag"].map((ben, i) => (
              <li key={i} className="flex gap-4 items-start text-[16px]">
                <span className="font-bold" style={{ color: brand.coral }}>&mdash;</span>
                <span className="font-medium">{ben}</span>
              </li>
            ))}
          </ul>
          
          <p className="uppercase text-[12px] font-bold mb-4" style={{ color: brand.coral }}>1,200+ active subscribers</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-4 border bg-transparent focus:outline-none rounded-[2px]"
              style={{ borderColor: brand.gray, color: brand.onSurface }}
            />
            <button className="px-8 py-4 font-bold rounded-[2px] transition-opacity hover:opacity-90 whitespace-nowrap" style={{ backgroundColor: brand.coral, color: brand.white }}>
              Start Subscription
            </button>
          </div>
          <p className="text-[12px] italic" style={{ color: brand.gray }}>Cancel anytime. No minimum commitment.</p>
        </div>
      </motion.section>

      {/* 8. Editorial / Insight Teaser */}
      <section className="py-24" style={{ backgroundColor: brand.white }}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1280px] mx-auto px-8 md:px-16">
          <p className="uppercase text-[11px] tracking-[3px] font-bold mb-4" style={{ color: brand.coral }}>From The Roastery</p>
          <h2 className="text-[40px] md:text-[56px] font-bold font-display-lg leading-[1.1] mb-12" style={{ color: brand.onSurface }}>
            Read deeper.
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7 flex flex-col h-full cursor-pointer group">
              <div className="flex-1 w-full overflow-hidden mb-6 rounded-[2px] min-h-[360px]">
                <img src="/images/roastery/charles-sims-k-w7laFKa0g-unsplash.jpg" alt="Gayo coffee" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-auto">
                <p className="uppercase text-[11px] tracking-[3px] font-bold mb-4" style={{ color: brand.coral }}>Origin Story</p>
                <h3 className="text-[28px] md:text-[32px] font-bold font-display-lg leading-tight mb-4 group-hover:opacity-70 transition-opacity" style={{ color: brand.onSurface }}>
                  What Makes Gayo the Most Sought-After Coffee in Indonesia?
                </h3>
                <p className="text-[16px] leading-relaxed mb-6" style={{ color: brand.gray }}>
                  The answer isn't just altitude. It's the drying beds, the microclimates, and the generational knowledge of the Gayo people.
                </p>
                <span className="font-bold border-b border-black/20 pb-1 max-w-max" style={{ color: brand.onSurface }}>Read Article &rarr;</span>
              </div>
            </div>
            
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
              <div className="flex flex-col cursor-pointer group">
                <div className="h-[200px] w-full overflow-hidden mb-6 rounded-sm">
                  <img src="/images/roastery/skylar-michael-SwmUmhrFr54-unsplash.jpg" alt="Roasting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="uppercase text-[11px] tracking-[3px] font-bold mb-3" style={{ color: brand.coral }}>Roasting</p>
                <h3 className="text-[22px] font-bold font-display-lg leading-tight mb-4 group-hover:opacity-70 transition-opacity" style={{ color: brand.onSurface }}>
                  The Difference Between Light and Medium Is Not Just Temperature
                </h3>
                <span className="font-bold border-b border-black/20 pb-1 max-w-max text-[14px]" style={{ color: brand.onSurface }}>Read &rarr;</span>
              </div>
              
              <div className="flex flex-col cursor-pointer group">
                <div className="h-[200px] w-full overflow-hidden mb-6 rounded-sm">
                  <img src="/images/roastery/karl-fredrickson-TYIzeCiZ_60-unsplash.jpg" alt="Brewing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="uppercase text-[11px] tracking-[3px] font-bold mb-3" style={{ color: brand.coral }}>Brew Guide</p>
                <h3 className="text-[22px] font-bold font-display-lg leading-tight mb-4 group-hover:opacity-70 transition-opacity" style={{ color: brand.onSurface }}>
                  Why Your Grind Size Matters More Than Your Brewer
                </h3>
                <span className="font-bold border-b border-black/20 pb-1 max-w-max text-[14px]" style={{ color: brand.onSurface }}>Read &rarr;</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 9. Final CTA */}
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true, margin: "-100px" }} 
        transition={{ duration: 1 }}
        className="relative w-full min-h-[70vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/images/roastery/nathan-dumlao-xPSBoaJNs2g-unsplash.jpg')" }}>
          {/* rgba(0,20,40,0.6) overlay per spec */}
          <div className="absolute inset-0 z-1" style={{ backgroundColor: 'rgba(0, 20, 40, 0.65)' }}></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-[56px] md:text-[72px] font-[800] leading-[1.1] mb-6 font-display-lg text-white drop-shadow-lg">
            Your next great cup<br />is one order away.
          </h2>
          <p className="text-[18px] max-w-lg mb-10 text-white/90">
            Free shipping on orders above Rp 300.000. Roasted fresh, shipped within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => onNavigate('store')}
              className="px-12 py-5 font-bold rounded-[2px] transition-transform hover:-translate-y-1 shadow-lg"
              style={{ backgroundColor: brand.coral, color: brand.white }}
            >
              Shop All Roasts
            </button>
            <button 
              className="px-12 py-5 font-bold rounded-[2px] border hover:bg-white/10 transition-colors"
              style={{ borderColor: brand.white, color: brand.white }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </motion.section>
      
      {/* Bottom Note */}
      <div className="py-6 text-center text-[12px]" style={{ backgroundColor: "#0a0a0a", color: "rgba(255,255,255,0.5)" }}>
        &copy; 2026 Elite Brew &middot; Jakarta, Indonesia &middot; hello@elitebrew.id
      </div>
      
    </div>
  );
}

