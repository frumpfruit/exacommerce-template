import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InsightsPage({ onNavigate = () => {}, showToast = () => {} }) {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const publications = [
    {
      id: 1,
      title: 'Water Purification & Groundwater Restoration Audit 2026',
      description: 'An in-depth review of closed-loop micro-filtration and biological cleaning performance across our major European and Asian pulpmill campuses.',
      fileSize: '4.8 MB',
      date: 'May 2026',
      author: 'Dr. Sarah Veld, Director of Hydrological Research',
      image: '/images/arbor/pulping.jpg'
    },
    {
      id: 2,
      title: 'LiDAR Canopy Density Metrics and Yield Modeling',
      description: 'A study on computational forestry: using 3D laser scanner algorithms to predict cellulose volume per acre and optimize selective harvest plans.',
      fileSize: '6.2 MB',
      date: 'March 2026',
      author: 'Julian Chen, Chief Architect of Systems',
      image: '/images/arbor/eucalyptus.jpg'
    },
    {
      id: 3,
      title: 'Acacia Mangium Tensile Indices: Multi-Ply Application',
      description: 'Mechanical fiber testing profiles showing tear resistance coefficients and burst pressure variables of Acacia pulps in high-durability liners.',
      fileSize: '3.5 MB',
      date: 'January 2026',
      author: 'Prof. Ananda Rao, Cellulose Biomass Laboratory',
      image: '/images/arbor/acacia.jpg'
    }
  ];

  const handleDownloadSubmit = (e) => {
    e.preventDefault();
    showToast(`Download link for "${selectedDoc.title}" sent to email!`);
    setSelectedDoc(null);
  };

  return (
    <div className="bg-[var(--arbor-background)] text-[color:var(--arbor-on-surface)] selection:bg-[var(--arbor-sapling-light)] font-sans">
      <main className="max-w-[1280px] mx-auto px-6 py-16">
        
        {/* Featured Sustainability Spotlight */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20 bg-white border border-[var(--arbor-outline-variant)]/30 rounded-xl overflow-hidden shadow-sm">
          <div className="md:col-span-7 h-[400px] overflow-hidden">
            <img src="/images/arbor/report.jpg" alt="Sustainability report front preview" className="w-full h-full object-cover transition-transform duration-700 hover:scale-102" />
          </div>
          <div className="md:col-span-5 p-12 space-y-6">
            <span className="font-headline text-[12px] font-bold text-[color:var(--arbor-secondary)] uppercase tracking-[0.2em] block">Annual Publication</span>
            <h1 className="font-headline text-[36px] font-extrabold text-[color:var(--arbor-primary)] tracking-tight leading-tight">Sustainability Report 2026</h1>
            <p className="font-sans text-[15px] text-[color:var(--arbor-on-surface-variant)] leading-relaxed">
              Explore our carbon sequestration audits, groundwater recycling metrics, and fair-wage allocations across our global forestry cooperatives.
            </p>
            <div className="flex gap-4 pt-2">
              <button 
                onClick={() => showToast("Sustainability Report PDF downloading...")}
                className="bg-[var(--arbor-primary)] text-white px-8 py-4 font-headline text-[14px] font-bold tracking-widest uppercase hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Download PDF <span className="material-symbols-outlined text-[18px]">download</span>
              </button>
            </div>
          </div>
        </section>

        {/* Technical Publications list */}
        <section className="mb-20">
          <motion.div 
            variants={revealVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="font-headline text-[12px] font-bold text-[color:var(--arbor-secondary)] uppercase tracking-[0.2em] mb-2 block">Research Library</span>
            <h2 className="font-headline text-[38px] font-extrabold text-[color:var(--arbor-primary)] tracking-tight">Technical Whitepapers</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publications.map((doc) => (
              <motion.article 
                key={doc.id}
                variants={revealVariants} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
                onClick={() => setSelectedDoc(doc)}
                className="bg-white border border-[var(--arbor-outline-variant)]/40 rounded-xl overflow-hidden flex flex-col justify-between hover-lift cursor-pointer"
              >
                <div>
                  <div className="h-48 overflow-hidden bg-slate-100 border-b border-[var(--arbor-outline-variant)]/20">
                    <img src={doc.image} alt={doc.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="flex justify-between font-sans text-[11px] font-bold text-[color:var(--arbor-outline)] uppercase tracking-wider">
                      <span>{doc.date}</span>
                      <span>{doc.fileSize}</span>
                    </div>
                    <h3 className="font-headline text-[18px] font-bold text-[color:var(--arbor-primary)] leading-snug line-clamp-2 hover:text-[color:var(--arbor-secondary)] transition-colors">{doc.title}</h3>
                    <p className="font-sans text-[14px] text-[color:var(--arbor-on-surface-variant)] line-clamp-3 leading-relaxed">{doc.description}</p>
                  </div>
                </div>
                <div className="px-8 pb-8 pt-4">
                  <span className="font-headline text-[12px] font-bold text-[color:var(--arbor-secondary)] uppercase tracking-widest flex items-center gap-2">
                    Request Document <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Newsletter Subscription Panel */}
        <motion.section 
          variants={revealVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          className="bg-[var(--arbor-primary)] text-white p-12 md:p-16 rounded-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-[var(--arbor-primary)]"
        >
          <div className="md:col-span-7">
            <h2 className="font-headline text-[32px] font-bold mb-3 tracking-tight">Stay informed with Arbor Intelligence.</h2>
            <p className="font-sans text-[15px] opacity-80 leading-relaxed max-w-md">
              Receive quarterly updates regarding timber inventories, chemical legislation, and pulp pricing indices.
            </p>
          </div>
          <div className="md:col-span-5">
            <form 
              onSubmit={(e) => { e.preventDefault(); showToast("Subscribed successfully to quarterly circulars."); e.target.reset(); }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input required
                type="email" 
                placeholder="Professional Email" 
                className="bg-white/10 border border-white/20 px-4 py-3 rounded text-[14px] text-white focus:outline-none focus:border-white flex-grow font-sans"
              />
              <button 
                type="submit" 
                className="bg-[var(--arbor-sapling-light)] text-[color:var(--arbor-primary)] px-6 py-3 font-headline text-[13px] font-bold uppercase tracking-wider rounded hover:opacity-90 transition-opacity"
              >
                Join
              </button>
            </form>
          </div>
        </motion.section>

      </main>

      {/* Technical Download Request Modal */}
      <AnimatePresence>
        {selectedDoc && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedDoc(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white max-w-lg w-full p-8 border border-[var(--arbor-outline-variant)] shadow-2xl relative rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedDoc(null)} className="absolute top-4 right-4 text-[color:var(--arbor-primary)] p-2 hover:bg-[var(--arbor-surface-container)] rounded-full transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
              
              <span className="font-headline text-[10px] font-bold text-[color:var(--arbor-outline)] uppercase tracking-widest block mb-2">{selectedDoc.date} • {selectedDoc.fileSize}</span>
              <h3 className="font-headline text-[24px] font-bold text-[color:var(--arbor-primary)] mb-4 leading-tight">{selectedDoc.title}</h3>
              <p className="font-sans text-[14px] text-[color:var(--arbor-on-surface-variant)] mb-6 leading-relaxed">{selectedDoc.description}</p>
              
              <div className="bg-[var(--arbor-surface-container-low)] p-4 border border-[var(--arbor-outline-variant)]/30 rounded mb-8 text-[12px] font-sans text-[color:var(--arbor-on-surface)] space-y-1">
                <p><strong>Primary Author:</strong> {selectedDoc.author}</p>
                <p><strong>Format:</strong> Document PDF Audit</p>
              </div>

              <form onSubmit={handleDownloadSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="font-headline text-[11px] font-bold uppercase tracking-wider text-[color:var(--arbor-outline)] block">Corporate Email Address</label>
                  <input required
                    type="email" 
                    placeholder="name@company.com" 
                    className="w-full border border-[var(--arbor-outline-variant)] px-4 py-3 rounded text-[14px] focus:outline-none focus:border-[var(--arbor-primary)] font-sans"
                  />
                </div>
                <div className="flex gap-4 justify-end pt-4">
                  <button 
                    type="button"
                    onClick={() => setSelectedDoc(null)}
                    className="px-6 py-3 border border-[var(--arbor-outline)] text-[color:var(--arbor-outline)] font-headline text-[12px] font-bold uppercase tracking-wider hover:bg-[var(--arbor-surface-container-low)] transition-colors rounded"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-[var(--arbor-primary)] text-white font-headline text-[12px] font-bold uppercase tracking-wider hover:opacity-90 transition-opacity rounded"
                  >
                    Send Download Link
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
