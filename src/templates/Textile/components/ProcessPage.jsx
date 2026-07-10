import React from 'react';
import { motion } from 'framer-motion';

export default function ProcessPage({ onNavigate = () => {}, showToast = () => {} }) {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <div className="bg-[var(--txtl-background)] text-[color:var(--txtl-on-background)] font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-[716px] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            alt="Raw silk fibers on dark stone" 
            src="/images/textile/process-hero.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--txtl-primary)]/80 to-[var(--txtl-primary)]/30"></div>
        </div>
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-[20px] md:px-[80px] w-full">
          <motion.div variants={revealVariants} initial="hidden" animate="visible" className="max-w-2xl">
            <span className="font-sans text-[14px] font-semibold text-[color:var(--txtl-primary-fixed-dim)] uppercase tracking-[0.2em] mb-4 block">
              The Artisanal Path
            </span>
            <h1 className="font-serif text-[48px] md:text-[64px] leading-[1.15] text-white mb-6">
              From Earth to <br/><span className="italic font-light">Elegance</span>
            </h1>
            <p className="font-sans text-[18px] text-[color:var(--txtl-surface-variant)] max-w-lg mb-10 opacity-90">
              An uncompromising journey of precision. We trace every thread from its source to its ultimate destination, ensuring a legacy of quality in every weave.
            </p>
            <div className="flex gap-4">
              <button onClick={() => document.getElementById('process-steps')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-[color:var(--txtl-primary)] px-8 py-4 font-sans text-[14px] font-bold uppercase tracking-widest hover:bg-[var(--txtl-surface-container)] transition-colors">
                Begin the Journey
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Bento Grid */}
      <section id="process-steps" className="py-24 bg-[var(--txtl-surface)]">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[80px]">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
            <h2 className="font-serif text-[48px] text-[color:var(--txtl-primary)] mb-4">A Curated Workflow</h2>
            <div className="w-24 h-px bg-[var(--txtl-outline)] mx-auto"></div>
          </motion.div>
 
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[auto] md:auto-rows-[300px]">
            {/* Step 1: Sourcing - Large Hero (Spans 8 cols, 2 rows) */}
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-8 md:row-span-2 group relative overflow-hidden bg-white border border-[#c5c6cc]/30 min-h-[400px]">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Ethical Sourcing" src="/images/textile/process-1.jpg"/>
              <div className="absolute inset-0 bg-[var(--txtl-primary)]/60 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-sans text-[14px] font-semibold text-[color:var(--txtl-primary-fixed-dim)] mb-2">PHASE 01</span>
                <h3 className="font-serif text-[32px] text-white mb-2">Ethical Sourcing</h3>
                <p className="font-sans text-white/80 text-[14px]">Selecting raw fibers from protected eco-regions.</p>
              </div>
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 font-sans text-[12px] font-bold text-[color:var(--txtl-primary)]">01. SOURCE</div>
            </motion.div>

            {/* Step 2: Refining - Tall Side (Spans 4 cols, 2 rows) */}
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-4 md:row-span-2 group relative overflow-hidden bg-white border border-[#c5c6cc]/30 min-h-[400px]">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Molecular Refining" src="/images/textile/process-2.jpg"/>
              <div className="absolute inset-0 bg-[var(--txtl-primary)]/60 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-sans text-[14px] font-semibold text-[color:var(--txtl-primary-fixed-dim)] mb-2">PHASE 02</span>
                <h3 className="font-serif text-[32px] text-white mb-2">Molecular Refining</h3>
                <p className="font-sans text-white/80 text-[14px]">Purity testing at every micron for absolute quality.</p>
              </div>
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 font-sans text-[12px] font-bold text-[color:var(--txtl-primary)]">02. REFINE</div>
            </motion.div>

            {/* Step 3: Weaving - Wide Bottom (Spans 6 cols, 1 row) */}
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-6 group relative overflow-hidden bg-white border border-[#c5c6cc]/30 min-h-[300px]">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Precision Weaving" src="/images/textile/process-3.jpg"/>
              <div className="absolute inset-0 bg-[var(--txtl-primary)]/60 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-sans text-[14px] font-semibold text-[color:var(--txtl-primary-fixed-dim)] mb-2">PHASE 03</span>
                <h3 className="font-serif text-[32px] text-white mb-2">Precision Weaving</h3>
                <p className="font-sans text-white/80 text-[14px]">Architectural strength in every single thread.</p>
              </div>
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 font-sans text-[12px] font-bold text-[var(--txtl-primary)]">03. WEAVE</div>
            </motion.div>

            {/* Step 4: Quality - Wide Bottom (Spans 6 cols, 1 row) */}
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-6 group relative overflow-hidden bg-white border border-[#c5c6cc]/30 min-h-[300px]">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Quality Control" src="/images/textile/process-4.jpg"/>
              <div className="absolute inset-0 bg-[var(--txtl-primary)]/60 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-sans text-[14px] font-semibold text-[var(--txtl-primary-fixed-dim)] mb-2">PHASE 04</span>
                <h3 className="font-serif text-[32px] text-white mb-2">The Standard Protocol</h3>
                <p className="font-sans text-white/80 text-[14px]">Our 42-point inspection for mark of excellence.</p>
              </div>
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 font-sans text-[12px] font-bold text-[var(--txtl-primary)]">04. CONTROL</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diagrammatic Section */}
      <section className="py-24 bg-white border-y border-[#c5c6cc]/30">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="font-serif text-[48px] text-[color:var(--txtl-primary)] mb-8">Supply Chain Transparency</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[var(--txtl-primary)] flex items-center justify-center font-bold text-[color:var(--txtl-primary)]">1</div>
                  <div>
                    <h4 className="font-sans text-[14px] font-semibold uppercase mb-2 text-[color:var(--txtl-primary)]">Fibre Extraction</h4>
                    <p className="font-sans text-[16px] text-[color:var(--txtl-secondary)]">Utilizing low-impact mechanical methods to preserve the natural protein structure of long-staple silk.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[var(--txtl-primary)] flex items-center justify-center font-bold text-[color:var(--txtl-primary)]">2</div>
                  <div>
                    <h4 className="font-sans text-[14px] font-semibold uppercase mb-2 text-[color:var(--txtl-primary)]">Bio-Degumming</h4>
                    <p className="font-sans text-[16px] text-[color:var(--txtl-secondary)]">A closed-loop aqueous system that removes sericin without harsh petro-chemicals, recycling 98% of water used.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[var(--txtl-primary)] flex items-center justify-center font-bold text-[color:var(--txtl-primary)]">3</div>
                  <div>
                    <h4 className="font-sans text-[14px] font-semibold uppercase mb-2 text-[color:var(--txtl-primary)]">Sonic Scouring</h4>
                    <p className="font-sans text-[16px] text-[color:var(--txtl-secondary)]">Using ultrasonic technology to deeply cleanse fibers at a microscopic level, ensuring uniform dye absorption.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative aspect-square bg-[var(--txtl-surface-container)] flex items-center justify-center overflow-hidden">
              <div className="relative z-10 border border-[var(--txtl-primary)]/20 p-8 backdrop-blur-sm bg-white/30 text-center">
                <span className="material-symbols-outlined text-[64px] text-[color:var(--txtl-primary)] mb-4 block">hub</span>
                <h3 className="font-serif text-[32px] text-[color:var(--txtl-primary)] mb-2">Interconnected Ethics</h3>
                <p className="font-sans text-[12px] font-medium text-[color:var(--txtl-secondary)] uppercase tracking-widest">Real-Time Blockchain Verification</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Shipping / Logistics */}
      <section className="py-24 bg-[var(--txtl-primary)] text-white">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[80px]">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="font-sans text-[14px] font-semibold text-[color:var(--txtl-on-tertiary-container)] uppercase tracking-widest mb-4 block">Final Stage</span>
              <h2 className="font-serif text-[48px]">Global Curated Distribution</h2>
            </div>
            <p className="font-sans text-[16px] text-white/70 max-w-md">
              Our white-glove logistics network ensures climate-controlled transit from our central hub to design houses across six continents.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-10 border border-white/10 hover:bg-white/5 transition-colors group">
              <span className="material-symbols-outlined text-[40px] mb-6 text-[color:var(--txtl-on-primary-container)]">inventory_2</span>
              <h4 className="font-serif text-[32px] mb-4">Archival Packaging</h4>
              <p className="font-sans text-[16px] text-white/60">Acid-free interleaved paper and custom cedar-lined crates protect fabric integrity during transit.</p>
            </motion.div>
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-10 border border-white/10 hover:bg-white/5 transition-colors group">
              <span className="material-symbols-outlined text-[40px] mb-6 text-[color:var(--txtl-on-primary-container)]">monitoring</span>
              <h4 className="font-serif text-[32px] mb-4">Sensor Tracking</h4>
              <p className="font-sans text-[16px] text-white/60">Real-time humidity and vibration sensors integrated into every shipment for absolute visibility.</p>
            </motion.div>
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-10 border border-white/10 hover:bg-white/5 transition-colors group">
              <span className="material-symbols-outlined text-[40px] mb-6 text-[color:var(--txtl-on-primary-container)]">local_shipping</span>
              <h4 className="font-serif text-[32px] mb-4">Carbon-Neutral Fleet</h4>
              <p className="font-sans text-[16px] text-white/60">Sustainable last-mile delivery options available in 14 global metropolitan hubs.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1440px] mx-auto px-[20px] md:px-[80px] text-center relative z-10">
          <h2 className="font-serif text-[64px] text-[color:var(--txtl-primary)] mb-12 leading-[1.15] tracking-normal">Experience the <br/>Collective Standard</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button onClick={() => onNavigate('inquiry')} className="bg-[var(--txtl-primary)] text-white px-10 py-5 font-sans text-[14px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">Request Swatches</button>
            <button onClick={() => onNavigate('contact')} className="border border-[var(--txtl-primary)] text-[color:var(--txtl-primary)] px-10 py-5 font-sans text-[14px] font-bold uppercase tracking-widest hover:bg-white transition-colors">Partner with Us</button>
          </div>
        </motion.div>
        {/* Atmospheric background element */}
        <div className="absolute -bottom-1/2 -left-1/4 w-[100%] h-full bg-[var(--txtl-surface-container)] rounded-full blur-[120px] opacity-50 -z-10"></div>
      </section>

    </div>
  );
}
