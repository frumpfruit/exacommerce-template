import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CatalogPage({ onNavigate, onAddToCart, showToast }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSpecs, setSelectedSpecs] = useState(null);

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const archiveProducts = [
    {
      id: 1, title: "Giza 88 Organic Cotton", category: "Sustainable",
      image: "/images/textile/catalog-cotton.jpg", weight: "120gsm", origin: "Egypt", weave: "Sateen"
    },
    {
      id: 2, title: "Hand-loomed Mulberry Silk", category: "Heritage",
      image: "/images/textile/catalog-silk.jpg", weight: "45gsm", origin: "Japan", weave: "Habotai"
    },
    {
      id: 3, title: "Belgian Heritage Linen", category: "Heritage",
      image: "/images/textile/catalog-linen.jpg", weight: "280gsm", origin: "Belgium", weave: "Plain"
    },
    {
      id: 4, title: "Recycled Cashmere", category: "Sustainable",
      image: "/images/textile/catalog-cashmere.jpg", weight: "320gsm", origin: "Italy", weave: "Twill"
    },
    {
      id: 5, title: "Raw Himalayan Wool", category: "Heritage",
      image: "/images/textile/catalog-hero.jpg", weight: "400gsm", origin: "Nepal", weave: "Twill"
    },
    {
      id: 6, title: "Organic Bamboo Silk", category: "Sustainable",
      image: "/images/textile/catalog-silk.jpg", weight: "150gsm", origin: "Indonesia", weave: "Satin"
    },
    {
      id: 7, title: "Vintage French Linen", category: "Heritage",
      image: "/images/textile/catalog-linen.jpg", weight: "300gsm", origin: "France", weave: "Plain"
    },
    {
      id: 8, title: "Regenerative Cotton Blend", category: "Sustainable",
      image: "/images/textile/catalog-cotton.jpg", weight: "180gsm", origin: "USA", weave: "Percale"
    }
  ];

  const categories = ['All', 'Sustainable', 'Heritage'];

  const filteredProducts = activeCategory === 'All' 
    ? archiveProducts 
    : archiveProducts.filter(p => p.category === activeCategory);

  const sliderRef = useRef(null);

  const scrollToArchive = () => {
    document.getElementById('archive-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Reset slider when category changes
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeCategory]);

  const handleNext = () => {
    if (sliderRef.current && sliderRef.current.firstElementChild) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const cardWidth = sliderRef.current.firstElementChild.offsetWidth + 24; // 24px gap (gap-6)
      
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }
  };

  const handlePrev = () => {
    if (sliderRef.current && sliderRef.current.firstElementChild) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const cardWidth = sliderRef.current.firstElementChild.offsetWidth + 24;
      
      if (scrollLeft <= 10) {
        sliderRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
      } else {
        sliderRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      }
    }
  };

  // Auto-play slider
  useEffect(() => {
    if (isHovered || filteredProducts.length <= 4) return;
    
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    
    return () => clearInterval(timer);
  }, [isHovered, filteredProducts.length, activeCategory]);

  return (
    <div className="bg-[var(--txtl-surface)] text-[color:var(--txtl-on-surface)] font-sans overflow-x-hidden">
      {/* Hero Section: Curated Collection */}
      <section className="relative h-[716px] min-h-[600px] flex items-center justify-center overflow-hidden bg-[var(--txtl-primary)] text-white">
        <div className="absolute inset-0 opacity-40">
          <img 
            className="w-full h-full object-cover" 
            alt="Raw ivory silk threads" 
            src="/images/textile/catalog-hero.jpg"
          />
        </div>
        <div className="relative z-10 text-center px-[20px] md:px-[80px]">
          <motion.div variants={revealVariants} initial="hidden" animate="visible">
            <span className="font-sans text-[14px] font-semibold tracking-widest mb-4 block opacity-80 uppercase">THE ARCHIVE</span>
            <h1 className="font-serif text-[48px] md:text-[64px] leading-[1.15] mb-8 max-w-4xl mx-auto">Masterpieces of Textile Artistry</h1>
            <p className="font-sans text-[18px] max-w-2xl mx-auto opacity-90 mb-10 leading-relaxed">
              From the heritage looms of Kyoto to the organic cotton farms of the Nile, explore our meticulously curated collection of world-class textiles.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => { setActiveCategory('Heritage'); scrollToArchive(); }} className="bg-white text-[color:var(--txtl-primary)] px-10 py-4 font-sans text-[14px] font-semibold tracking-widest uppercase hover:bg-[var(--txtl-surface-container)] transition-colors">DISCOVER SILKS</button>
              <button onClick={() => { setActiveCategory('All'); scrollToArchive(); }} className="border border-white text-white px-10 py-4 font-sans text-[14px] font-semibold tracking-widest uppercase hover:bg-white hover:text-[color:var(--txtl-primary)] transition-colors">VIEW ALL SERIES</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Grid: Asymmetric Editorial Layout */}
      <section className="max-w-[1440px] mx-auto py-24 px-[20px] md:px-[80px]">
        <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-serif text-[48px] leading-[1.15] text-[color:var(--txtl-primary)] mb-4">Curated Categories</h2>
            <p className="font-sans text-[16px] text-[color:var(--txtl-secondary)] max-w-md leading-relaxed">Our collection is organized by origin and tactile profile, ensuring a seamless selection process for discerning designers.</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <span 
              onClick={() => { setActiveCategory('All'); scrollToArchive(); }} 
              className={`font-sans text-[12px] font-semibold uppercase tracking-widest py-2 cursor-pointer transition-colors ${activeCategory === 'All' ? 'border-b-2 border-[var(--txtl-primary)] text-[color:var(--txtl-primary)]' : 'text-[color:var(--txtl-outline)] hover:text-[color:var(--txtl-primary)]'}`}
            >
              ALL
            </span>
            <span 
              onClick={() => { setActiveCategory('All'); scrollToArchive(); showToast("Showing all organic and natural weaves."); }} 
              className="font-sans text-[12px] font-semibold uppercase tracking-widest text-[color:var(--txtl-outline)] hover:text-[color:var(--txtl-primary)] py-2 cursor-pointer transition-colors"
            >
              NATURAL FIBERS
            </span>
            <span 
              onClick={() => { setActiveCategory('Sustainable'); scrollToArchive(); }} 
              className={`font-sans text-[12px] font-semibold uppercase tracking-widest py-2 cursor-pointer transition-colors ${activeCategory === 'Sustainable' ? 'border-b-2 border-[var(--txtl-primary)] text-[color:var(--txtl-primary)]' : 'text-[color:var(--txtl-outline)] hover:text-[color:var(--txtl-primary)]'}`}
            >
              SUSTAINABLE
            </span>
            <span 
              onClick={() => { setActiveCategory('Heritage'); scrollToArchive(); }} 
              className={`font-sans text-[12px] font-semibold uppercase tracking-widest py-2 cursor-pointer transition-colors ${activeCategory === 'Heritage' ? 'border-b-2 border-[var(--txtl-primary)] text-[color:var(--txtl-primary)]' : 'text-[color:var(--txtl-outline)] hover:text-[color:var(--txtl-primary)]'}`}
            >
              HERITAGE
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Item: Silk Heritage */}
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-8 group overflow-hidden relative border border-[#c5c6cc]/30 h-[500px]">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Silk Heritage" src="/images/textile/catalog-silk.jpg" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--txtl-primary)]/90 to-transparent flex flex-col justify-end p-10 md:p-12 text-white">
              <span className="font-sans text-[12px] font-semibold uppercase tracking-widest mb-2 opacity-90">COLLECTION 01</span>
              <h3 onClick={() => onNavigate('product-detail', archiveProducts[1])} className="font-serif text-[32px] leading-[1.15] mb-4 cursor-pointer hover:underline">The Silk Heritage Series</h3>
              <div className="flex flex-wrap items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="font-sans text-[12px] font-semibold uppercase tracking-widest">100% ORGANIC SILK</div>
                <div className="font-sans text-[12px] font-semibold uppercase tracking-widest">ORIGIN: KYOTO, JP</div>
                <button onClick={() => onNavigate('inquiry')} className="ml-auto flex items-center gap-2 border-b border-white pb-1 font-sans text-[12px] font-semibold tracking-widest uppercase">INQUIRE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></button>
              </div>
            </div>
          </motion.div>

          {/* Small Item: Raw Linen */}
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-4 group border border-[#c5c6cc]/30 p-8 flex flex-col justify-between bg-[var(--txtl-surface-container-low)] hover:bg-[var(--txtl-surface-container)] transition-colors h-[500px]">
            <div>
              <span className="font-sans text-[12px] font-semibold uppercase tracking-widest text-[color:var(--txtl-primary)] border-b border-[var(--txtl-primary)]/20 pb-2 mb-6 block w-fit">SERIES 02</span>
              <h3 onClick={() => onNavigate('product-detail', archiveProducts[2])} className="font-serif text-[24px] leading-[1.15] text-[color:var(--txtl-primary)] mb-3 cursor-pointer hover:text-[color:var(--txtl-outline)] transition-colors">{productTitle => "Raw Linen & Hemp"}Belgian Heritage Linen</h3>
              <p className="font-sans text-[16px] text-[color:var(--txtl-secondary)] mb-6 leading-relaxed line-clamp-2">Sourced from the Belgian countryside, our linens represent the pinnacle of breathability and structural integrity.</p>
            </div>
            <div onClick={() => onNavigate('product-detail', archiveProducts[2])} className="aspect-[4/3] mb-6 overflow-hidden relative cursor-pointer">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Raw Linen" src="/images/textile/catalog-linen.jpg" />
            </div>
            <button 
              onClick={() => {
                onAddToCart(archiveProducts[2]);
                showToast("Belgian Heritage Linen added to sample inquiry list.");
              }} 
              className="w-full py-4 border border-[var(--txtl-primary)] text-[color:var(--txtl-primary)] font-sans text-[14px] font-semibold uppercase tracking-widest hover:bg-[var(--txtl-primary)] hover:text-white transition-colors"
            >
              REQUEST SAMPLES
            </button>
          </motion.div>

          {/* Grid Item: Egyptian Cotton */}
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-4 group border border-[#c5c6cc]/30 h-auto">
            <div onClick={() => onNavigate('product-detail', archiveProducts[0])} className="aspect-[4/5] overflow-hidden relative cursor-pointer">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Egyptian Cotton" src="/images/textile/catalog-cotton.jpg" />
              <div className="absolute inset-0 bg-[var(--txtl-primary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[48px]">visibility</span>
              </div>
            </div>
            <div className="p-8 bg-white">
              <h3 onClick={() => onNavigate('product-detail', archiveProducts[0])} className="font-serif text-[24px] leading-[1.15] text-[color:var(--txtl-primary)] mb-2 cursor-pointer hover:text-[color:var(--txtl-outline)] transition-colors">Egyptian Long-Staple</h3>
              <p className="font-sans text-[12px] font-semibold uppercase tracking-widest text-[color:var(--txtl-outline)] mb-6">COTTON • GIZA 88 • 800TC</p>
              <a 
                onClick={(e) => { e.preventDefault(); setSelectedSpecs(archiveProducts[0]); }} 
                className="font-sans text-[14px] font-semibold uppercase tracking-widest text-[color:var(--txtl-primary)] flex items-center gap-2 group-hover:translate-x-2 transition-transform cursor-pointer" 
                href="#"
              >
                SPECIFICATIONS <span className="material-symbols-outlined">arrow_right_alt</span>
              </a>
            </div>
          </motion.div>

          {/* Grid Item: Recycled Cashmere */}
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-8 group border border-[#c5c6cc]/30 flex flex-col md:flex-row bg-[var(--txtl-primary)] text-white">
            <div className="p-12 flex flex-col justify-center flex-1">
              <span className="font-sans text-[12px] font-semibold uppercase tracking-widest opacity-70 mb-4 block">SUSTAINABILITY PIONEER</span>
              <h3 onClick={() => onNavigate('product-detail', archiveProducts[3])} className="font-serif text-[32px] leading-[1.15] mb-4 cursor-pointer hover:underline">Recycled Cashmere Blends</h3>
              <p className="font-sans text-[16px] text-white/80 mb-8 max-w-sm leading-relaxed">Luxury redefined through circular economy. Re-engineered fibers that maintain original softness with 70% less environmental impact.</p>
              <button onClick={() => { setActiveCategory('Sustainable'); scrollToArchive(); }} className="border border-white px-8 py-4 w-fit font-sans text-[14px] font-semibold uppercase tracking-widest hover:bg-white hover:text-[color:var(--txtl-primary)] transition-colors">EXPLORE SUSTAINABLE</button>
            </div>
            <div onClick={() => onNavigate('product-detail', archiveProducts[3])} className="flex-1 overflow-hidden h-[400px] md:h-auto cursor-pointer">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Recycled Cashmere" src="/images/textile/catalog-cashmere.jpg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Collection Archive (WITH TABS & AUTO-SLIDER) */}
      <section id="archive-section" className="bg-[var(--txtl-surface-container-low)] py-24 border-t border-[#c5c6cc]/30 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[80px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="font-serif text-[48px] leading-[1.15] text-[color:var(--txtl-primary)] mb-4">The Collection Archive</h2>
              <p className="font-sans text-[16px] text-[color:var(--txtl-secondary)] max-w-2xl leading-relaxed">Explore our full range of artisan textiles, filtered by weave, weight, and origin.</p>
            </motion.div>
            
            {/* Category Selection Tabs */}
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col items-end gap-6 w-full md:w-auto">
              <div className="flex flex-wrap gap-4 border-b border-[#c5c6cc]/30">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`py-3 px-2 font-sans text-[12px] font-semibold uppercase tracking-widest transition-all ${
                      activeCategory === cat 
                        ? 'text-[color:var(--txtl-primary)] border-b-2 border-[var(--txtl-primary)]' 
                        : 'text-[color:var(--txtl-outline)] hover:text-[color:var(--txtl-primary)]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              
              {/* Slider Controls */}
              {filteredProducts.length > 4 && (
                <div className="flex gap-2">
                  <button onClick={handlePrev} className="w-10 h-10 border border-[#c5c6cc]/50 rounded-full flex items-center justify-center hover:bg-white hover:border-[var(--txtl-primary)] text-[color:var(--txtl-primary)] transition-all">
                    <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                  </button>
                  <button onClick={handleNext} className="w-10 h-10 border border-[#c5c6cc]/50 rounded-full flex items-center justify-center hover:bg-white hover:border-[var(--txtl-primary)] text-[color:var(--txtl-primary)] transition-all">
                    <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                  </button>
                </div>
              )}
            </motion.div>
          </div>
          
          {/* Slider Container */}
          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
            
            <motion.div 
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    key={product.id} 
                    className="w-full md:w-[calc(25%-18px)] shrink-0 snap-start group border border-[#c5c6cc]/30 bg-white hover:shadow-lg transition-shadow duration-300"
                  >
                    <div onClick={() => onNavigate('product-detail', product)} className="aspect-square overflow-hidden bg-[var(--txtl-surface-container)] cursor-pointer">
                      <img alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={product.image} />
                    </div>
                    <div className="p-8">
                      <span className="font-sans text-[12px] font-semibold uppercase tracking-widest text-[color:var(--txtl-outline)] mb-3 block">{product.category}</span>
                      <h3 onClick={() => onNavigate('product-detail', product)} className="font-serif text-[24px] leading-[1.15] text-[color:var(--txtl-primary)] mb-5 truncate cursor-pointer hover:text-[color:var(--txtl-outline)] transition-colors">{product.title}</h3>
                      <div className="space-y-3 mb-8">
                        <div className="flex justify-between font-sans text-[12px] font-semibold uppercase tracking-wider">
                          <span className="text-[color:var(--txtl-outline)]">WEIGHT</span>
                          <span className="text-[color:var(--txtl-primary)]">{product.weight}</span>
                        </div>
                        <div className="flex justify-between font-sans text-[12px] font-semibold uppercase tracking-wider">
                          <span className="text-[color:var(--txtl-outline)]">ORIGIN</span>
                          <span className="text-[color:var(--txtl-primary)]">{product.origin}</span>
                        </div>
                        <div className="flex justify-between font-sans text-[12px] font-semibold uppercase tracking-wider">
                          <span className="text-[color:var(--txtl-outline)]">WEAVE</span>
                          <span className="text-[color:var(--txtl-primary)]">{product.weave}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          onAddToCart(product);
                          showToast(`${product.title} added to inquiry list.`);
                        }}
                        className="w-full border-t border-[#c5c6cc]/30 pt-4 font-sans text-[14px] font-semibold uppercase tracking-widest text-[color:var(--txtl-primary)] hover:text-[color:var(--txtl-outline)] transition-colors text-left flex justify-between items-center"
                      >
                        Add to Cart <span className="material-symbols-outlined text-[18px]">add</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProducts.length === 0 && (
              <div className="w-full py-20 text-center text-[color:var(--txtl-outline)] font-sans text-[14px] tracking-widest uppercase">
                No collections found for this category.
              </div>
            )}
            
            {/* Gradient Mask for Slider indication */}
            {filteredProducts.length > 4 && (
              <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[var(--txtl-surface-container-low)] to-transparent pointer-events-none hidden md:block"></div>
            )}
          </div>
        </div>
      </section>

      {/* Feature Interaction: Material Specs Bento */}
      <section className="bg-[var(--txtl-surface-container)] py-24">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[80px]">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-serif text-[48px] leading-[1.15] text-[color:var(--txtl-primary)] mb-4">The Curator's Standard</h2>
            <p className="font-sans text-[18px] text-[color:var(--txtl-secondary)] max-w-2xl mx-auto leading-relaxed">Every roll is inspected by three generations of textile experts before leaving our studio.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-10 border border-[#c5c6cc]/30 text-center hover:-translate-y-2 transition-transform duration-500">
              <span className="material-symbols-outlined text-[40px] text-[color:var(--txtl-primary)] mb-6">verified</span>
              <h4 className="font-serif text-[24px] leading-[1.15] text-[color:var(--txtl-primary)] mb-3">Certified Origin</h4>
              <p className="font-sans text-[16px] text-[color:var(--txtl-secondary)] leading-relaxed">Verified supply chain with full traceability from farm to atelier.</p>
            </div>
            <div className="bg-white p-10 border border-[#c5c6cc]/30 text-center hover:-translate-y-2 transition-transform duration-500">
              <span className="material-symbols-outlined text-[40px] text-[color:var(--txtl-primary)] mb-6">eco</span>
              <h4 className="font-serif text-[24px] leading-[1.15] text-[color:var(--txtl-primary)] mb-3">Sustainable Dyeing</h4>
              <p className="font-sans text-[16px] text-[color:var(--txtl-secondary)] leading-relaxed">Closed-loop water systems and non-toxic botanical dyes only.</p>
            </div>
            <div className="bg-white p-10 border border-[#c5c6cc]/30 text-center hover:-translate-y-2 transition-transform duration-500">
              <span className="material-symbols-outlined text-[40px] text-[color:var(--txtl-primary)] mb-6">precision_manufacturing</span>
              <h4 className="font-serif text-[24px] leading-[1.15] text-[color:var(--txtl-primary)] mb-3">Artisan Weaving</h4>
              <p className="font-sans text-[16px] text-[color:var(--txtl-secondary)] leading-relaxed">A mix of modern precision and traditional hand-loomed techniques.</p>
            </div>
            <div className="bg-white p-10 border border-[#c5c6cc]/30 text-center hover:-translate-y-2 transition-transform duration-500">
              <span className="material-symbols-outlined text-[40px] text-[color:var(--txtl-primary)] mb-6">diversity_2</span>
              <h4 className="font-serif text-[24px] leading-[1.15] text-[color:var(--txtl-primary)] mb-3">Fair Trade Ethics</h4>
              <p className="font-sans text-[16px] text-[color:var(--txtl-secondary)] leading-relaxed">Ensuring living wages and safe conditions for every worker in our network.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Logos */}
      <section className="py-24 bg-[var(--txtl-surface)]">
        <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1440px] mx-auto px-[20px] md:px-[80px] text-center">
          <p className="font-sans text-[12px] font-semibold uppercase tracking-widest text-[color:var(--txtl-outline)] mb-12">Trusted By Global Fashion Houses</p>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <span className="font-serif text-[24px] uppercase tracking-tighter text-[#d61c59]">COSMOPOLITAN</span>
            <span className="font-serif text-[24px] uppercase tracking-tighter text-[#333333]">VICE</span>
            <span className="font-serif text-[24px] uppercase tracking-tighter text-[#e85324]">FAST COMPANY</span>
            <span className="font-serif text-[24px] uppercase tracking-tighter text-[#20b2aa]">BUSTLE</span>
            <span className="font-serif text-[24px] uppercase tracking-tighter text-[#4a5568]">DAPPER Q</span>
          </div>
        </motion.div>
      </section>

      {/* Specifications Details Modal */}
      <AnimatePresence>
        {selectedSpecs && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedSpecs(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white max-w-lg w-full p-8 border border-[#c5c6cc]/30 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedSpecs(null)} className="absolute top-4 right-4 text-[color:var(--txtl-primary)] p-2 hover:bg-[var(--txtl-surface-container-low)] rounded-full transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
              <span className="font-sans text-[10px] font-bold text-[color:var(--txtl-outline)] uppercase tracking-widest block mb-2">{selectedSpecs.category} Spec Sheet</span>
              <h3 className="font-serif text-[28px] text-[color:var(--txtl-primary)] mb-6">{selectedSpecs.title}</h3>
              
              <div className="space-y-4 font-sans text-[14px]">
                <div className="flex justify-between border-b border-[#c5c6cc]/30 pb-2">
                  <span className="text-[color:var(--txtl-outline)] uppercase tracking-wider font-semibold">Origin Country</span>
                  <span className="text-[color:var(--txtl-primary)] font-medium">{selectedSpecs.origin}</span>
                </div>
                <div className="flex justify-between border-b border-[#c5c6cc]/30 pb-2">
                  <span className="text-[color:var(--txtl-outline)] uppercase tracking-wider font-semibold">GSM Weight</span>
                  <span className="text-[color:var(--txtl-primary)] font-medium">{selectedSpecs.weight}</span>
                </div>
                <div className="flex justify-between border-b border-[#c5c6cc]/30 pb-2">
                  <span className="text-[color:var(--txtl-outline)] uppercase tracking-wider font-semibold">Weave Pattern</span>
                  <span className="text-[color:var(--txtl-primary)] font-medium">{selectedSpecs.weave}</span>
                </div>
                <div className="flex justify-between border-b border-[#c5c6cc]/30 pb-2">
                  <span className="text-[color:var(--txtl-outline)] uppercase tracking-wider font-semibold">Thread Count</span>
                  <span className="text-[color:var(--txtl-primary)] font-medium">800 TC (Giza Grade)</span>
                </div>
                <div className="flex justify-between border-b border-[#c5c6cc]/30 pb-2">
                  <span className="text-[color:var(--txtl-outline)] uppercase tracking-wider font-semibold">Certification</span>
                  <span className="text-[color:var(--txtl-primary)] font-medium">GOTS Certified Organic Fiber</span>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button 
                  onClick={() => {
                    onAddToCart(selectedSpecs);
                    setSelectedSpecs(null);
                    showToast(`${selectedSpecs.title} added to sample list.`);
                  }}
                  className="flex-grow bg-[var(--txtl-primary)] text-white py-4 uppercase font-sans text-[12px] font-bold tracking-widest hover:opacity-90 transition-opacity"
                >
                  Request Samples
                </button>
                <button 
                  onClick={() => {
                    setSelectedSpecs(null);
                    onNavigate('product-detail', selectedSpecs);
                  }}
                  className="border border-[var(--txtl-primary)] text-[color:var(--txtl-primary)] px-6 py-4 uppercase font-sans text-[12px] font-bold tracking-widest hover:bg-[var(--txtl-surface-container)] transition-all"
                >
                  Details
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
