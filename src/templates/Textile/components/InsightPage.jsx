import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InsightPage({ onNavigate = () => {}, showToast = () => {} }) {
  const [activeCategory, setActiveCategory] = useState('LATEST');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const insightArticles = [
    // LATEST
    {
      id: 1,
      category: 'LATEST',
      topic: 'Heritage Preservation',
      title: 'The Milanese Archive: Cataloging 400 Years of Drape',
      description: 'How Silk & Stone is digitizing historical pattern books to inspire contemporary bespoke designs. By preserving original physical weaves digitally, we ensure future generations can replicate precise heritage densities.',
      image: '/images/textile/insight-archive.jpg'
    },
    {
      id: 2,
      category: 'LATEST',
      topic: 'Sustainability',
      title: 'Zero-Waste Cutting Techniques in Haute Couture',
      description: 'Exploring modern atelier strategies to maximize fabric utilization and reduce environmental footprint. Standard patterns are reimagined using computational layouts, achieving up to 98% efficiency in material yield.',
      image: '/images/textile/insight-lab.jpg'
    },
    {
      id: 3,
      category: 'LATEST',
      topic: 'Market Expansion',
      title: 'Emerging Markets: The Rise of South American Silk',
      description: 'Analyzing the shift in high-end silk production as climate patterns alter traditional Asian hubs. Sourcing offices in Brazil report record tensile strength due to localized mulberry growth variables.',
      image: '/images/textile/insight-hero.jpg'
    },
    // TRENDS
    {
      id: 4,
      category: 'TRENDS',
      topic: 'Material Science',
      title: 'Micro-weaves and the Future of Breathable Luxury',
      description: 'A deep dive into the engineering of high-performance natural fibers for the next generation of premium suiting. These multi-ply structures combine natural cooling properties with structural durability.',
      image: '/images/textile/insight-linen.jpg'
    },
    {
      id: 5,
      category: 'TRENDS',
      topic: 'Design Aesthetics',
      title: 'The Resurgence of Undyed Natural Fibers',
      description: 'Why leading fashion houses are returning to raw, unbleached linens and cottons for their SS25 collections. The organic texture details offer a serene, skeuomorphic feel that synthetics cannot duplicate.',
      image: '/images/textile/insight-factory.jpg'
    },
    {
      id: 6,
      category: 'TRENDS',
      topic: 'Consumer Behavior',
      title: 'Tactile Transparency: What Buyers Want Now',
      description: 'The modern consumer demands complete traceability from seed to garment. How mills are responding. Verified QR tags on selvages provide direct links to the weaving co-op and carbon balance ledger.',
      image: '/images/textile/insight-archive.jpg'
    },
    // LOGISTICS
    {
      id: 7,
      category: 'LOGISTICS',
      topic: 'Market Dynamics',
      title: 'Supply Chain Resilience in the Luxury Sector',
      description: 'Navigating the complexities of artisanal production timelines in a world of instant demand. Climate-controlled transit vaults ensure sensitive materials maintain perfect relative humidity during shipping.',
      image: '/images/textile/insight-cargo.jpg'
    },
    {
      id: 8,
      category: 'LOGISTICS',
      topic: 'Trade Regulations',
      title: 'Navigating the New European Import Tariffs',
      description: 'What textile exporters need to know about the upcoming carbon border adjustment mechanism. Adapting compliance protocols now prevents customs release delays for high-end organic fibers.',
      image: '/images/textile/insight-hero.jpg'
    },
    {
      id: 9,
      category: 'LOGISTICS',
      topic: 'Tech & Transport',
      title: 'Blockchain in Maritime Freight Operations',
      description: 'How decentralized ledgers are drastically reducing delays and ensuring provenance of luxury imports. Smart contracts release payments automatically as cargo sensors confirm temperature stability.',
      image: '/images/textile/insight-lab.jpg'
    }
  ];

  const filteredArticles = insightArticles.filter(a => a.category === activeCategory);

  const categories = ['LATEST', 'TRENDS', 'LOGISTICS'];

  const handleShare = () => {
    showToast("Shareable article link copied to clipboard!");
  };

  return (
    <div className="bg-[var(--txtl-background)] text-[color:var(--txtl-on-background)] font-sans">
      <main className="max-w-[1440px] mx-auto px-[20px] md:px-[80px] py-12 md:py-16">
        
        {/* Hero Insight Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-20 min-h-[500px]">
          <motion.div variants={revealVariants} initial="hidden" animate="visible" className="md:col-span-7 relative group overflow-hidden">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Master weaver working with indigo silk" 
              src="/images/textile/insight-hero.jpg" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--txtl-primary)]/90 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white max-w-lg pr-8">
              <span className="font-sans text-[12px] font-semibold tracking-widest mb-2 block uppercase text-[color:var(--txtl-primary-fixed)]">Featured Analysis</span>
              <h1 className="font-serif text-[38px] md:text-[48px] leading-[1.15] mb-4">The Evolution of Global Silk Trade: 2025 Forecast</h1>
              <p className="font-sans text-[16px] opacity-90 mb-6 leading-relaxed">Examining the intersection of traditional weaving techniques and modern logistics in the South Asian corridor.</p>
              <a 
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedArticle({
                    title: 'The Evolution of Global Silk Trade: 2025 Forecast',
                    category: 'LATEST',
                    topic: 'Featured Analysis',
                    image: '/images/textile/insight-hero.jpg',
                    description: 'Examining the intersection of traditional weaving techniques and modern logistics in the South Asian corridor. Rising global demand for raw luxury assets highlights the need for climate-controlled freight routes and decentralized provenance ledgers to guarantee fiber status.'
                  });
                }}
                className="font-sans text-[12px] font-bold underline underline-offset-8 tracking-widest hover:text-[color:var(--txtl-outline)] transition-colors uppercase cursor-pointer" 
                href="#"
              >
                READ FULL ANALYSIS
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={revealVariants} initial="hidden" animate="visible" className="md:col-span-5 flex flex-col justify-center bg-[var(--txtl-surface-container-low)] p-10">
            <div className="border-b border-[#c5c6cc]/30 pb-6 mb-6">
              <span className="font-sans text-[12px] font-semibold text-[color:var(--txtl-secondary)] uppercase tracking-widest mb-2 block">Market Snapshot</span>
              <h2 className="font-serif text-[32px] leading-[1.15] text-[color:var(--txtl-primary)] mb-4">Sustainability as a Standard</h2>
              <p className="text-[color:var(--txtl-outline)] font-sans text-[16px] leading-relaxed">How European import regulations are reshaping the supply chains of premium organic wool and organic silk collectives.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="font-serif text-[24px] text-[color:var(--txtl-outline)]">01</span>
                <div>
                  <h3 className="font-sans text-[14px] font-semibold text-[color:var(--txtl-primary)] uppercase tracking-widest mb-1">The Linen Resurgence</h3>
                  <p className="font-sans text-[12px] text-[color:var(--txtl-secondary)]">Export volumes up 14% in Mediterranean hubs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-serif text-[24px] text-[color:var(--txtl-outline)]">02</span>
                <div>
                  <h3 className="font-sans text-[14px] font-semibold text-[color:var(--txtl-primary)] uppercase tracking-widest mb-1">Digital Traceability</h3>
                  <p className="font-sans text-[12px] text-[color:var(--txtl-secondary)]">New blockchain protocols for heritage textiles.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Industry Intelligence Grid */}
        <section className="mb-20">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
            <h2 className="font-serif text-[32px] leading-[1.15] text-[color:var(--txtl-primary)]">Industry Intelligence</h2>
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 border font-sans text-[12px] font-semibold tracking-widest uppercase transition-colors ${
                    activeCategory === cat 
                      ? 'border-[var(--txtl-primary)] bg-[var(--txtl-primary)] text-white' 
                      : 'border-[#c5c6cc] text-[color:var(--txtl-outline)] hover:border-[var(--txtl-primary)] hover:text-[color:var(--txtl-primary)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[400px]">
            <AnimatePresence mode="wait">
              {filteredArticles.map((article) => (
                <motion.article 
                  key={article.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="md:col-span-4 group cursor-pointer"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="aspect-[4/5] overflow-hidden mb-6 bg-[var(--txtl-surface-container)] border border-[#c5c6cc]/30">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={article.title} src={article.image} />
                  </div>
                  <span className="font-sans text-[12px] font-semibold text-[color:var(--txtl-outline)] uppercase tracking-widest mb-3 block">{article.topic}</span>
                  <h3 className="font-serif text-[24px] leading-[1.15] text-[color:var(--txtl-primary)] mb-4 group-hover:text-[color:var(--txtl-outline)] transition-colors">{article.title}</h3>
                  <p className="font-sans text-[16px] text-[color:var(--txtl-secondary)] mb-6 line-clamp-3 leading-relaxed">{article.description}</p>
                  <a 
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedArticle(article); }}
                    className="font-sans text-[12px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all text-[color:var(--txtl-primary)] cursor-pointer" 
                    href="#"
                  >
                    CONTINUE READING <span className="material-symbols-outlined text-[18px]">east</span>
                  </a>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Curated Briefings CTA */}
        <motion.section variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-[var(--txtl-primary)] text-white p-12 md:p-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative overflow-hidden mb-20">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
              <path d="M0 100 C 20 0, 50 0, 100 100" fill="none" stroke="white" strokeWidth="0.5"></path>
              <path d="M0 90 C 30 10, 60 10, 100 90" fill="none" stroke="white" strokeWidth="0.5"></path>
            </svg>
          </div>
          <div className="md:col-span-6 z-10">
            <h2 className="font-serif text-[48px] leading-[1.15] mb-4">Curated Briefings.</h2>
            <p className="font-sans text-[18px] opacity-80 mb-0 max-w-md leading-relaxed">Join our network for monthly insights on global textile markets and exclusive previews of new arrivals.</p>
          </div>
          <div className="md:col-span-6 z-10">
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => { e.preventDefault(); showToast("Subscribed! You will receive our monthly briefs."); }}>
              <input required
                className="bg-transparent border-b border-white/30 text-white placeholder:text-white/50 focus:border-white focus:ring-0 flex-grow py-3 px-0 font-sans text-[16px] outline-none" 
                placeholder="Professional Email Address" 
                type="email"
              />
              <button type="submit" className="bg-white text-[color:var(--txtl-primary)] px-10 py-3 font-sans text-[12px] font-bold tracking-widest uppercase hover:bg-[var(--txtl-surface-container)] transition-colors">SUBSCRIBE</button>
            </form>
          </div>
        </motion.section>

        {/* Heritage Milestones */}
        <section className="mb-12">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-serif text-[32px] leading-[1.15] text-[color:var(--txtl-primary)] mb-12 text-center">Heritage Milestones</h2>
          </motion.div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#c5c6cc]/30 hidden md:block"></div>
            
            <div className="space-y-16">
              {/* Milestone 1 */}
              <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="flex flex-col md:flex-row items-center gap-10 group">
                <div className="md:w-1/2 text-center md:text-right">
                  <span className="font-serif text-[64px] md:text-[80px] leading-none text-[color:var(--txtl-primary)]/10 group-hover:text-[color:var(--txtl-primary)]/30 transition-colors block mb-2">2024</span>
                  <h4 className="font-sans text-[14px] font-semibold uppercase tracking-widest mb-2 text-[color:var(--txtl-primary)]">Sustainable Pivot</h4>
                  <p className="font-sans text-[16px] text-[color:var(--txtl-secondary)] max-w-xs mx-auto md:ml-auto md:mr-0 leading-relaxed">100% of our silk supply chain achieved GOTS certification, setting a new industry standard.</p>
                </div>
                <div className="hidden md:block w-4 h-4 bg-[var(--txtl-primary)] rounded-full relative z-10 shrink-0 outline outline-8 outline-[var(--txtl-background)]"></div>
                <div className="w-full md:w-1/2 overflow-hidden aspect-video border border-[#c5c6cc]/30 bg-[var(--txtl-surface-container)]">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Laboratory silk testing" src="/images/textile/insight-lab.jpg" />
                </div>
              </motion.div>
              
              {/* Milestone 2 */}
              <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="flex flex-col md:flex-row-reverse items-center gap-10 group">
                <div className="md:w-1/2 text-center md:text-left">
                  <span className="font-serif text-[64px] md:text-[80px] leading-none text-[color:var(--txtl-primary)]/10 group-hover:text-[color:var(--txtl-primary)]/30 transition-colors block mb-2">2023</span>
                  <h4 className="font-sans text-[14px] font-semibold uppercase tracking-widest mb-2 text-[color:var(--txtl-primary)]">Global Expansion</h4>
                  <p className="font-sans text-[16px] text-[color:var(--txtl-secondary)] max-w-xs mx-auto md:ml-0 md:mr-auto leading-relaxed">Inaugurated our stone-wash facility in Portugal, merging centuries-old softening with energy recovery.</p>
                </div>
                <div className="hidden md:block w-4 h-4 bg-[var(--txtl-primary)] rounded-full relative z-10 shrink-0 outline outline-8 outline-[var(--txtl-background)]"></div>
                <div className="w-full md:w-1/2 overflow-hidden aspect-video border border-[#c5c6cc]/30 bg-[var(--txtl-surface-container)]">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Portuguese limestone factory" src="/images/textile/insight-factory.jpg" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
      </main>

      {/* Article Reader Modal Overlay */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white max-w-2xl w-full p-8 md:p-10 border border-[#c5c6cc]/30 shadow-2xl relative max-h-[85vh] overflow-y-auto flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedArticle(null)} className="absolute top-4 right-4 text-[color:var(--txtl-primary)] p-2 hover:bg-[var(--txtl-surface-container-low)] rounded-full transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
              
              <div>
                <span className="font-sans text-[10px] font-bold text-[color:var(--txtl-outline)] uppercase tracking-widest block mb-2">{selectedArticle.topic} • {selectedArticle.category}</span>
                <h3 className="font-serif text-[28px] md:text-[34px] leading-tight text-[color:var(--txtl-primary)]">{selectedArticle.title}</h3>
              </div>

              <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-4 font-sans text-[15px] leading-relaxed text-[color:var(--txtl-secondary)]">
                <p className="font-medium text-[color:var(--txtl-primary)] text-[16px]">{selectedArticle.description}</p>
                <p>
                  As we look to the future of high-end manufacturing, tracking the precise origin and mechanical variables of our fibers is paramount. The Silk & Stone Collective is currently rolling out an audited protocol designed to protect the micro-climates and agricultural legacy of our primary partners.
                </p>
                <p>
                  By establishing private logistics corridors, we ensure that the delicate proteins in Giza Cotton, Mulberry Silk, and cashmere are not exposed to high heat or unchecked vibrations. This represents the ultimate convergence of historic mastery and cutting-edge logistics science.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-[#c5c6cc]/30 flex flex-wrap gap-4 justify-between items-center">
                <button 
                  onClick={handleShare}
                  className="bg-[var(--txtl-primary)] text-white px-6 py-3 font-sans text-[12px] font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
                >
                  Share Article
                </button>
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="border border-[#c5c6cc] text-[color:var(--txtl-outline)] px-6 py-3 font-sans text-[12px] font-bold tracking-widest uppercase hover:border-[var(--txtl-primary)] hover:text-[color:var(--txtl-primary)] transition-colors"
                >
                  Close Reader
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
