import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Circle, ArrowRight, ShieldCheck, Globe, Map } from 'lucide-react';

export default function HomePage({ onNavigate = () => {}, showToast = () => {} }) {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] } }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover grayscale-[10%]" alt="Raw mulberry silk fabric weave patterns" src="/images/textile/hero.jpg" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--txtl-surface)] via-[#f7f9ff]/30 to-transparent"></div>
        </div>
        <div className="container max-w-[1440px] mx-auto px-[20px] md:px-[80px] relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl py-20"
          >
            <span className="font-sans text-[14px] font-semibold uppercase tracking-[0.2em] text-[var(--txtl-outline)] block mb-6">Established 1924</span>
            <h1 className="font-serif text-[48px] md:text-[80px] leading-[1.05] tracking-[-0.02em] mb-8 text-[color:var(--txtl-primary)]">
              The Art of <br /><span className="italic font-light">Global Weaving</span>
            </h1>
            <p className="font-sans text-[18px] leading-[28px] text-[color:var(--txtl-secondary)] mb-12 max-w-md">
              Curating the world's rarest and most exceptional raw materials, delivering unparalleled textile quality for discerning designers, architects, and global fashion houses.
            </p>
            <div className="flex flex-wrap gap-6">
              <button onClick={() => onNavigate('catalog')} className="bg-[var(--txtl-primary)] text-[color:var(--txtl-on-primary)] font-sans text-[14px] font-semibold px-10 py-5 uppercase tracking-widest hover:opacity-95 transition-opacity">
                Explore Collections
              </button>
              <button onClick={() => onNavigate('about')} className="border border-[var(--txtl-primary)] text-[color:var(--txtl-primary)] font-sans text-[14px] font-semibold px-10 py-5 uppercase tracking-widest hover:bg-[#040d17]/5 transition-all">
                Our Heritage
              </button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-12 right-[80px] z-20 flex-col items-end hidden md:flex text-[color:var(--txtl-primary)] mix-blend-difference text-white">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-[1px] bg-white/70"></div>
            <span className="font-sans text-[12px] font-medium tracking-[0.05em] text-white/90">SCROLL TO DISCOVER</span>
          </div>
          <ChevronDown className="animate-bounce text-white/90 w-6 h-6" />
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-[var(--txtl-surface-container)] py-8 border-y border-[#c5c6cc]/30 overflow-hidden">
        <div className="flex whitespace-nowrap gap-16 animate-marquee">
          {[1, 2].map((group) => (
            <React.Fragment key={group}>
              <span className="font-sans text-[14px] font-semibold uppercase tracking-[0.3em] flex items-center gap-4">Ethically Sourced <Circle className="w-2.5 h-2.5 fill-current" /></span>
              <span className="font-sans text-[14px] font-semibold uppercase tracking-[0.3em] flex items-center gap-4">Global Network <Circle className="w-2.5 h-2.5 fill-current" /></span>
              <span className="font-sans text-[14px] font-semibold uppercase tracking-[0.3em] flex items-center gap-4">Unrivaled Quality <Circle className="w-2.5 h-2.5 fill-current" /></span>
              <span className="font-sans text-[14px] font-semibold uppercase tracking-[0.3em] flex items-center gap-4">Legacy Craftsmanship <Circle className="w-2.5 h-2.5 fill-current" /></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Featured Collections */}
      <section className="py-24 max-w-[1440px] mx-auto px-[20px] md:px-[80px]">
        <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-serif text-[48px] leading-[56px] mb-4">Signature Collections</h2>
            <p className="font-sans text-[16px] text-[color:var(--txtl-secondary)]">Our curations represent the pinnacle of artisanal mastery across five continents, balancing traditional methods with contemporary scale.</p>
          </div>
          <a onClick={(e) => { e.preventDefault(); onNavigate('catalog'); }} className="font-sans text-[14px] font-semibold uppercase border-b border-[var(--txtl-primary)] pb-1 hover:text-[var(--txtl-outline)] transition-colors mb-2 cursor-pointer" href="#">View All Curations</a>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px] min-h-[800px]">
          {/* Large Feature */}
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-8 group relative overflow-hidden bg-[var(--txtl-surface-container-high)] aspect-[16/9] md:aspect-auto">
            <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="High-end interior showroom with silk swatches" src="/images/textile/mysore.jpg" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040d17]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-12 left-12 text-[color:var(--txtl-on-primary)]">
              <span className="font-sans text-[12px] font-medium uppercase tracking-widest mb-2 block">Premium Export</span>
              <h3 className="font-serif text-[32px] mb-8">Ceremonial Silks of Mysore</h3>
              <button onClick={() => onNavigate('catalog')} className="bg-[var(--txtl-surface)] text-[color:var(--txtl-primary)] font-sans text-[12px] font-medium px-8 py-4 uppercase hover:bg-[var(--txtl-primary)] hover:text-[color:var(--txtl-on-primary)] transition-all">Explore Series</button>
            </div>
          </motion.div>
          
          <div className="md:col-span-4 flex flex-col gap-[24px]">
            {/* Small Top */}
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="flex-1 group relative overflow-hidden bg-[var(--txtl-surface-container-low)] min-h-[350px]">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Hand-spun organic linen" src="/images/textile/linen.jpg" />
              <div className="absolute inset-0 bg-[#040d17]/40 group-hover:bg-[#040d17]/50 transition-colors"></div>
              <div className="absolute bottom-10 left-10">
                <h3 className="font-serif text-[24px] text-white mb-4">Organic Linens</h3>
                <a onClick={(e) => { e.preventDefault(); onNavigate('catalog'); }} className="text-white font-sans text-[12px] font-medium uppercase tracking-widest flex items-center gap-2 group/link cursor-pointer" href="#">
                  View Inventory <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
            
            {/* Small Bottom */}
            <motion.div border="1" variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="flex-1 group relative overflow-hidden bg-[var(--txtl-surface-container-low)] min-h-[350px]">
              <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt="Architectural upholstery swatches" src="/images/textile/weaves.jpg" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#040d17]/70 via-[#040d17]/20 to-transparent"></div>
              <div className="absolute top-10 left-10">
                <h3 className="font-serif text-[24px] text-white mb-2">Architectural Weaves</h3>
                <a onClick={(e) => { e.preventDefault(); onNavigate('catalog'); }} className="font-sans text-[12px] font-medium text-white/80 hover:text-white uppercase tracking-widest transition-colors cursor-pointer" href="#">Explore Series →</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-32 silk-texture border-y border-[#c5c6cc]/20 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[80px] grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative order-2 lg:order-1">
            <div className="relative z-10 pr-12 pb-12">
              <img className="w-full aspect-[4/5] object-cover shadow-2xl" alt="Textile curator examining rare fabric" src="/images/textile/curator.jpg" />
            </div>
            <div className="absolute -bottom-4 -right-4 lg:right-4 lg:bottom-4 bg-[var(--txtl-primary)] p-12 text-[color:var(--txtl-on-primary)] max-w-sm z-20">
              <p className="font-serif text-[24px] italic mb-4">"We don't just export fabric; we transport heritage."</p>
              <p className="font-sans text-[12px] font-medium uppercase tracking-wider">— Arthur Stone, Founder</p>
            </div>
          </motion.div>
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-1 lg:order-2">
            <span className="font-sans text-[14px] font-semibold uppercase tracking-[0.2em] text-[var(--txtl-outline)] mb-6 block">Defining Excellence</span>
            <h2 className="font-serif text-[48px] mb-10 leading-[1.15]">Curating the World's Finest Fiber Assets</h2>
            <p className="font-sans text-[18px] text-[color:var(--txtl-secondary)] mb-12 leading-relaxed">
              For over a century, Silk & Stone Collective has defined the pinnacle of the global textile trade. We specialize in the meticulous identification, ethical sourcing, and international distribution of the rarest silks, high-grade architectural weaves, and heritage fabrics. Our legacy is built on uncompromising quality and deep artisanal partnerships.
            </p>
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <ShieldCheck className="text-[color:var(--txtl-primary)] w-[28px] h-[28px] flex-shrink-0" />
                <div>
                  <h4 className="font-sans text-[14px] font-semibold uppercase mb-2 tracking-wide">Authenticity Guaranteed</h4>
                  <p className="font-sans text-[16px] text-[color:var(--txtl-secondary)]">Every meter is tracked from origin to destination with full provenance and certified grading.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <Globe className="text-[color:var(--txtl-primary)] w-[28px] h-[28px] flex-shrink-0" />
                <div>
                  <h4 className="font-sans text-[14px] font-semibold uppercase mb-2 tracking-wide">Global Logistics Excellence</h4>
                  <p className="font-sans text-[16px] text-[color:var(--txtl-secondary)]">A private network spanning 42 countries ensuring seamless border-to-border transit and climate-controlled storage.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Reach Map */}
      <section className="bg-[var(--txtl-primary)] py-24 relative overflow-hidden">
        <div className="container max-w-[1440px] mx-auto px-[20px] md:px-[80px] relative z-10">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-serif text-[48px] text-[color:var(--txtl-on-primary)] mb-6">Our Global Presence</h2>
            <p className="font-sans text-[16px] text-white/60">Operating across 5 major hubs and 12 trade offices globally to serve our international clientele with localized expertise.</p>
          </motion.div>
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative aspect-[21/9] w-full bg-[var(--txtl-primary-container)] border border-[#75777c]/20 flex items-center justify-center overflow-hidden">
            {/* Map Background Visual */}
            <div className="absolute inset-0 opacity-40 bg-[url('/images/textile/world-map.png')] bg-cover bg-center bg-no-repeat"></div>
            {/* Watermark Inside Map */}
            <div className="absolute -bottom-6 -right-6 pointer-events-none opacity-10 z-0">
              <span className="font-serif text-[180px] md:text-[240px] leading-[1.15] text-white tracking-tighter uppercase select-none">Silk</span>
            </div>
            {/* Trade Points */}
            <div onClick={() => onNavigate('contact')} className="absolute top-1/4 left-1/4 group cursor-pointer z-20">
              <div className="w-3 h-3 bg-[var(--txtl-on-primary)] rounded-full animate-ping absolute inset-0"></div>
              <div className="w-3 h-3 bg-[var(--txtl-on-primary)] rounded-full relative"></div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-[var(--txtl-surface)] px-4 py-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-lg pointer-events-none">
                <p className="font-sans text-[12px] font-medium text-[color:var(--txtl-primary)] whitespace-nowrap">London Hub (HQ)</p>
              </div>
            </div>
            <div onClick={() => onNavigate('contact')} className="absolute top-1/2 left-[65%] group cursor-pointer z-20">
              <div className="w-3 h-3 bg-[var(--txtl-on-primary)] rounded-full animate-ping absolute inset-0"></div>
              <div className="w-3 h-3 bg-[var(--txtl-on-primary)] rounded-full relative"></div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-[var(--txtl-surface)] px-4 py-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-lg pointer-events-none">
                <p className="font-sans text-[12px] font-medium text-[color:var(--txtl-primary)] whitespace-nowrap">Mumbai Logistics Center</p>
              </div>
            </div>
            <div className="relative pointer-events-none text-center">
              <Map className="text-white/20 w-[120px] h-[120px]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 border-b border-[#c5c6cc]/30">
        <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1440px] mx-auto px-[20px] md:px-[80px]">
          <p className="text-center font-sans text-[12px] font-medium uppercase tracking-[0.2em] text-[color:var(--txtl-secondary)] mb-16">Featured In Global Publications</p>
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-12 lg:gap-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <span className="font-serif text-[24px] font-bold tracking-tight text-[#b89564]">ARCHITECTURAL DIGEST</span>
            <span className="font-serif text-[24px] italic text-[#c2446c]">VOGUE BUSINESS</span>
            <span className="font-mono text-[24px] tracking-tighter text-[#1b2b4c]">THE MONOCLE</span>
            <span className="font-serif text-[24px] font-bold text-[#2b6b55]">WALLPAPER*</span>
            <span className="font-serif text-[24px] italic text-[#d45b34]">FRAME</span>
          </div>
        </motion.div>
      </section>

      {/* Trade Library CTA */}
      <section className="py-24 bg-[var(--txtl-surface-container)]">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[80px]">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-[var(--txtl-primary)] p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-serif text-[48px] text-[color:var(--txtl-on-primary)] mb-6">Access the Trade Library</h2>
              <p className="font-sans text-[18px] text-white/70 mb-12">Join our exclusive professional network for early access to seasonal swatches, trade terms, and market insight reports.</p>
              <form onSubmit={(e) => { e.preventDefault(); showToast("Access request received. A credentials link has been sent to your email."); }} className="flex flex-col sm:flex-row gap-0 border border-white/30 max-w-xl">
                <input className="flex-grow bg-transparent border-none text-[color:var(--txtl-on-primary)] placeholder:text-white/40 py-5 px-8 focus:ring-0 outline-none" placeholder="Professional Email Address" required type="email" />
                <button className="bg-[var(--txtl-on-primary)] text-[color:var(--txtl-primary)] font-sans text-[14px] font-semibold px-10 py-5 uppercase tracking-widest hover:bg-[var(--txtl-surface)] transition-colors whitespace-nowrap" type="submit">
                  Apply for Access
                </button>
              </form>
            </div>
            <div className="absolute top-0 right-0 h-full w-1/3 bg-white/5 -skew-x-12 translate-x-1/2"></div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
