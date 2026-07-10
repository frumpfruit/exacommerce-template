import React from 'react';
import { motion } from 'framer-motion';
import { Network, BadgeCheck, Leaf, Droplet, Users, Flower2 } from 'lucide-react';

export default function AboutPage({ onNavigate = () => {}, showToast = () => {} }) {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] } }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden flex items-center min-h-[60vh] md:min-h-[80vh]">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover transition-transform duration-[20s] ease-out hover:scale-110" alt="Silk rolls" src="/images/textile/about-hero.jpg" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040d17]/60 to-[#040d17]/20"></div>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-[20px] md:px-[80px] w-full text-white">
          <motion.div variants={revealVariants} initial="hidden" animate="visible" className="max-w-2xl">
            <span className="font-sans text-[14px] font-semibold uppercase tracking-widest block mb-4 opacity-80">Established 1984</span>
            <h1 className="font-serif text-[48px] md:text-[64px] leading-[1.15] mb-8">Defining the Soul of Global Textiles.</h1>
            <p className="font-sans text-[18px] mb-10 max-w-lg leading-relaxed text-white/90">A forty-year odyssey of curating the world's most exceptional fibers, uniting heritage craftsmanship with contemporary trade precision.</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => onNavigate('catalog')} className="bg-white text-[color:var(--txtl-primary)] px-10 py-4 font-sans text-[14px] font-semibold uppercase hover:bg-[var(--txtl-surface-container)] transition-colors tracking-[0.05em]">EXPLORE HERITAGE</button>
              <button onClick={() => onNavigate('process')} className="border border-white text-white px-10 py-4 font-sans text-[14px] font-semibold uppercase hover:bg-white hover:text-[color:var(--txtl-primary)] transition-all tracking-[0.05em]">OUR PROCESS</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section: Heritage */}
      <section className="bg-[var(--txtl-surface)] py-24">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-5 mb-12 md:mb-0">
              <span className="font-sans text-[14px] font-semibold text-[var(--txtl-on-primary-container)] uppercase tracking-widest mb-6 block">Our Legacy</span>
              <h2 className="font-serif text-[48px] text-[color:var(--txtl-primary)] mb-8 leading-[1.15]">The Thread Between Past and Future</h2>
              <p className="font-sans text-[18px] text-[color:var(--txtl-secondary)] mb-6 leading-relaxed">
                  Founded in the textile districts of Northern Italy and expanded through the historic silk roads of the East, Silk & Stone Collective began with a single vision: to bridge the gap between rural master weavers and the world's most discerning design houses.
              </p>
              <p className="font-sans text-[18px] text-[color:var(--txtl-secondary)] leading-relaxed">
                  Today, we stand as a premier global curator, managing an intricate network of sustainable material sources that span five continents. Our role as a "Trusted Curator" is not just about logistics; it is about preserving the intangible heritage of weave patterns that have been passed down for generations.
              </p>
            </motion.div>
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-6 md:col-start-7 relative">
              <div className="aspect-[4/5] bg-[var(--txtl-surface-container)] overflow-hidden rounded-sm hover:-translate-y-2 transition-transform duration-500">
                <img className="w-full h-full object-cover" alt="Textile archive library" src="/images/textile/archive.jpg" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 md:w-64 md:h-64 border border-[#c5c6cc] p-4 bg-[var(--txtl-surface)] hidden sm:block z-10">
                <div className="w-full h-full bg-[var(--txtl-surface-container-high)] overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Close-up macro shot" src="/images/textile/macro.jpg" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Quality & Trade */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[80px]">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-serif text-[48px] text-[color:var(--txtl-primary)] mb-4">Precision in Every Fiber</h2>
            <div className="w-20 h-1 bg-[var(--txtl-primary)] mx-auto mb-6"></div>
            <p className="text-[color:var(--txtl-secondary)] font-sans text-[18px] max-w-xl mx-auto">Mastering the complex intersection of artisanal craft and international logistics.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:min-h-[800px]">
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-2 md:row-span-2 bg-[var(--txtl-surface-container-low)] p-12 flex flex-col justify-end group cursor-pointer overflow-hidden relative min-h-[400px]">
              <img className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700" alt="Trade Infrastructure" src="/images/textile/janko-ferlic-eBtwD6ZG78I-unsplash.jpg" />
              <div className="relative z-10">
                <Network className="w-10 h-10 mb-6 text-[color:var(--txtl-primary)]" />
                <h3 className="font-serif text-[32px] text-[color:var(--txtl-primary)] mb-4">Global Trade Infrastructure</h3>
                <p className="font-sans text-[16px] text-[color:var(--txtl-secondary)] leading-relaxed mb-6">Navigating international borders with a logistics network that ensures the integrity of temperature-sensitive organic fibers from farm to atelier.</p>
                <a onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="font-sans text-[14px] font-semibold text-[color:var(--txtl-primary)] uppercase border-b border-[var(--txtl-primary)] w-fit pb-1 hover:text-[color:var(--txtl-outline)] transition-colors cursor-pointer" href="#">Our Trade Partners</a>
              </div>
            </motion.div>
            
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-2 bg-[var(--txtl-primary)] p-12 text-white flex items-center min-h-[300px] relative overflow-hidden group">
              <img className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700" alt="Textile aesthetic" src="/images/textile/kevin-limbri-mBXQCNKbq7E-unsplash.jpg" />
              <div className="absolute inset-0 bg-[#040d17]/40 group-hover:bg-[#040d17]/20 transition-colors duration-700"></div>
              <div className="relative z-10">
                <h3 className="font-serif text-[32px] mb-4 italic leading-[1.15]">"Quality is the silence before the applause."</h3>
                <p className="font-sans text-[16px] text-white/80">— Founder, Silk & Stone Collective</p>
              </div>
            </motion.div>
            
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-1 bg-[var(--txtl-surface-container)] p-8 flex flex-col justify-between border border-[#c5c6cc]/30 min-h-[300px] relative overflow-hidden group">
              <img className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 transition-opacity duration-700" alt="Textile detail" src="/images/textile/lidya-nada-grQh_x_vZKM-unsplash.jpg" />
              <BadgeCheck className="w-8 h-8 text-[color:var(--txtl-outline)] relative z-10" />
              <div className="relative z-10">
                <h4 className="font-sans text-[14px] font-semibold uppercase tracking-wider mb-3">128-Step Inspection</h4>
                <p className="font-sans text-[14px] text-[color:var(--txtl-secondary)]">Every meter of fabric undergoes rigorous tactile and microscopic analysis.</p>
              </div>
            </motion.div>
            
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-1 bg-[var(--txtl-secondary-container)] p-8 flex flex-col justify-between border border-[#c5c6cc]/30 min-h-[300px] relative overflow-hidden group">
              <img className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 transition-opacity duration-700" alt="Natural fiber" src="/images/textile/susan-wilkinson-PyjLCMReMns-unsplash.jpg" />
              <Leaf className="w-8 h-8 text-[var(--txtl-on-secondary-container)] relative z-10" />
              <div className="relative z-10">
                <h4 className="font-sans text-[14px] font-semibold uppercase tracking-wider mb-3 text-[var(--txtl-on-secondary-container)]">Ethical Sourcing</h4>
                <p className="font-sans text-[14px] text-[var(--txtl-on-secondary-container)]/80">100% Traceability across our entire regenerative supply chain.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="bg-[var(--txtl-primary-container)] text-white overflow-hidden relative py-32">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 flex items-center justify-center pointer-events-none text-[var(--txtl-on-primary-container)]">
          <Flower2 className="w-[400px] h-[400px]" />
        </div>
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[80px] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="font-sans text-[14px] font-semibold text-[var(--txtl-on-primary-container)] uppercase tracking-widest mb-6 block">Responsible Stewardship</span>
              <h2 className="font-serif text-[48px] mb-8 leading-[1.15]">Woven into the Earth</h2>
              <p className="font-sans text-[18px] text-[var(--txtl-on-primary-container)] mb-12 leading-relaxed">
                  Our commitment to sustainability isn't a modern pivot—it's a founding principle. We recognize that the future of luxury textiles is inextricably linked to the health of the ecosystems that produce them.
              </p>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full border border-[var(--txtl-on-primary-container)] flex items-center justify-center flex-shrink-0">
                    <Droplet className="text-[var(--txtl-on-primary-container)] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-sans text-[14px] font-semibold mb-2 uppercase tracking-wide">Water Reclamation</h4>
                    <p className="text-[var(--txtl-on-primary-container)]/80 font-sans text-[16px]">Advanced dye-house technologies that recycle 98% of all water used in the production process.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full border border-[var(--txtl-on-primary-container)] flex items-center justify-center flex-shrink-0">
                    <Users className="text-[var(--txtl-on-primary-container)] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-sans text-[14px] font-semibold mb-2 uppercase tracking-wide">Fair Trade Curatorship</h4>
                    <p className="text-[var(--txtl-on-primary-container)]/80 font-sans text-[16px]">Ensuring living wages and generational wealth for over 4,000 independent weavers globally.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 gap-6">
              <div className="space-y-6 mt-12">
                <img className="w-full aspect-square object-cover rounded-sm border border-white/20" alt="Master weaver" src="/images/textile/weaver.jpg" />
                <div className="bg-[var(--txtl-tertiary-container)] p-8">
                  <div className="font-serif text-[48px] md:text-[64px] mb-2 leading-[1.15]">94%</div>
                  <div className="font-sans text-[12px] font-semibold uppercase tracking-widest">Organic Certification</div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10">
                  <div className="font-serif text-[48px] md:text-[64px] mb-2 leading-[1.15]">2030</div>
                  <div className="font-sans text-[12px] font-semibold uppercase tracking-widest">Net Zero Commitment</div>
                </div>
                <img className="w-full aspect-[4/5] object-cover rounded-sm border border-white/20" alt="Mulberry leaves" src="/images/textile/mulberry.jpg" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners / As Seen In */}
      <section className="bg-[var(--txtl-surface)] py-20">
        <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1440px] mx-auto px-[20px] md:px-[80px]">
          <h5 className="text-center font-sans text-[12px] font-medium text-[color:var(--txtl-outline)] uppercase tracking-[0.2em] mb-12">Collaborations & Recognition</h5>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <span className="font-serif text-[24px] uppercase tracking-tighter text-[#a62b4c]">Vogue Trade</span>
            <span className="font-serif text-[24px] uppercase tracking-tighter text-[#b89564]">Architectural Digest</span>
            <span className="font-serif text-[24px] uppercase tracking-tighter text-[#8b5a2b]">The Tailor's Guild</span>
            <span className="font-serif text-[24px] uppercase tracking-tighter text-[#1f8b82]">Bustle Lux</span>
            <span className="font-serif text-[24px] uppercase tracking-tighter text-[#0a3663]">Forbes Global</span>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1440px] mx-auto px-[20px] md:px-[80px] text-center">
          <h2 className="font-serif text-[48px] text-[color:var(--txtl-primary)] mb-6">Begin a New Chapter in Design</h2>
          <p className="text-[color:var(--txtl-secondary)] font-sans text-[18px] max-w-2xl mx-auto mb-12 leading-relaxed">Whether you are a global fashion house or an independent boutique, our curatorial expertise is at your disposal.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={() => onNavigate('inquiry')} className="bg-[var(--txtl-primary)] text-white px-12 py-5 font-sans text-[14px] font-semibold tracking-widest uppercase hover:opacity-90 transition-all">Request Trade Access</button>
            <button onClick={() => onNavigate('catalog')} className="border border-[#75777c] text-[color:var(--txtl-primary)] px-12 py-5 font-sans text-[14px] font-semibold tracking-widest uppercase hover:bg-[var(--txtl-surface-container)] transition-all">View Lookbook</button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
