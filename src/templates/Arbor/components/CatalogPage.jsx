import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CatalogPage({ products = [], onNavigate = () => {}, onAddToCart = () => {}, showToast = () => {} }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedSpecs, setSelectedSpecs] = useState(null);

  const categories = ['All', 'Raw Pulp Resources', 'Finished Industrial Paper'];

  const filteredProducts = products.filter(p => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Raw Pulp Resources') return p.category.includes('Pulp') || p.category.includes('Fiber');
    if (activeCategory === 'Finished Industrial Paper') return p.category.includes('Paper') || p.category.includes('Linerboard');
    return true;
  });

  const getSpecSheetData = (productId) => {
    const sheets = {
      acacia: {
        fiberLength: '1.15 mm',
        hemicellulose: '18.4%',
        freeness: '480 ml CSF',
        tearFactor: '8.4 mN·m²/g',
        cert: 'FSC / PEFC Certified Raw Resource',
        lignin: '2.1%'
      },
      eucalyptus: {
        fiberLength: '0.85 mm',
        hemicellulose: '14.2%',
        freeness: '520 ml CSF',
        tearFactor: '6.8 mN·m²/g',
        cert: 'FSC Certified & ECF (Elemental Chlorine Free)',
        lignin: '1.2%'
      },
      kraft: {
        fiberLength: '2.40 mm',
        hemicellulose: '12.0%',
        freeness: '340 ml CSF',
        tearFactor: '14.5 mN·m²/g',
        cert: 'ISO 9001 / ISO 14001 Compliant Packaging',
        lignin: '4.8%'
      },
      bskp: {
        fiberLength: '3.10 mm',
        hemicellulose: '8.5%',
        freeness: '640 ml CSF',
        tearFactor: '18.2 mN·m²/g',
        cert: 'FSC Mixed Sources Certification',
        lignin: '0.8%'
      }
    };
    return sheets[productId] || { fiberLength: '1.80 mm', hemicellulose: '12%', freeness: '450 ml', tearFactor: '9.0', cert: 'FSC Certified', lignin: '2%' };
  };

  const handleOpenSpecs = (e, product) => {
    e.stopPropagation();
    const sheetData = getSpecSheetData(product.id);
    setSelectedSpecs({ ...product, ...sheetData });
  };

  return (
    <div className="bg-[var(--arbor-background)] text-[color:var(--arbor-on-surface)] selection:bg-[var(--arbor-sapling-light)] font-sans">
      <main className="max-w-[1280px] mx-auto px-6 py-16">
        
        {/* Page Header */}
        <section className="mb-12">
          <span className="font-headline text-[12px] font-bold text-[color:var(--arbor-secondary)] uppercase tracking-[0.2em] mb-4 block">Product Catalog</span>
          <h1 className="font-headline text-[48px] md:text-[56px] font-extrabold leading-tight text-[color:var(--arbor-primary)] tracking-tight mb-4">Industrial Fiber Solutions</h1>
          <p className="font-sans text-[16px] text-[color:var(--arbor-on-surface-variant)] max-w-xl leading-relaxed">
            Procure sustainably cultivated Acacia and Eucalyptus pulps or custom heavy-duty multi-ply Kraft packaging liners.
          </p>
        </section>

        {/* Categories Tab Selector */}
        <section className="flex flex-wrap gap-3 mb-12 border-b border-[var(--arbor-outline-variant)]/30 pb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 font-headline text-[13px] font-bold uppercase tracking-wider transition-colors rounded ${
                activeCategory === cat 
                  ? 'bg-[var(--arbor-primary)] text-white' 
                  : 'border border-[var(--arbor-outline-variant)] text-[color:var(--arbor-on-surface-variant)] hover:border-[var(--arbor-primary)] hover:text-[color:var(--arbor-primary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* Grid Collections */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                onClick={() => onNavigate('product-detail', p)}
                className="bg-white border border-[var(--arbor-outline-variant)]/40 rounded-xl overflow-hidden flex flex-col md:flex-row hover-lift cursor-pointer"
              >
                {/* Image frame */}
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative bg-slate-100 shrink-0">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 font-headline text-[10px] font-bold uppercase tracking-wider text-[color:var(--arbor-primary)] shadow-sm">
                    {p.category}
                  </div>
                </div>

                {/* Content info */}
                <div className="md:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline text-[22px] font-bold text-[color:var(--arbor-primary)] mb-2 tracking-tight">{p.title}</h3>
                    <p className="font-sans text-[13px] text-[color:var(--arbor-on-surface-variant)] mb-4 leading-relaxed line-clamp-3">{p.description}</p>
                    
                    {/* Brief Spec Badges */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-t border-[var(--arbor-outline-variant)]/20 mb-4 font-sans text-[12px]">
                      <div>
                        <span className="text-[color:var(--arbor-outline)] block uppercase text-[10px] font-semibold">Origin</span>
                        <span className="text-[color:var(--arbor-primary)] font-bold">{p.origin}</span>
                      </div>
                      <div>
                        <span className="text-[color:var(--arbor-outline)] block uppercase text-[10px] font-semibold">Density</span>
                        <span className="text-[color:var(--arbor-primary)] font-bold">{p.density}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={(e) => handleOpenSpecs(e, p)}
                      className="font-headline text-[11px] font-bold text-[color:var(--arbor-secondary)] uppercase tracking-widest hover:underline flex items-center gap-1.5"
                    >
                      Specifications Sheet 
                      <span className="material-symbols-outlined text-[15px]">arrow_right_alt</span>
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(p);
                      }}
                      className="w-full bg-[var(--arbor-primary-container)] text-white py-3 font-headline text-[12px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      Add to RFQ List
                      <span className="material-symbols-outlined text-[16px]">add</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </section>

      </main>

      {/* Specifications Sheet Overlay Modal */}
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
              className="bg-white max-w-lg w-full p-8 border border-[var(--arbor-outline-variant)] shadow-2xl relative rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedSpecs(null)} className="absolute top-4 right-4 text-[color:var(--arbor-primary)] p-2 hover:bg-[var(--arbor-surface-container)] rounded-full transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
              
              <span className="font-headline text-[10px] font-bold text-[color:var(--arbor-outline)] uppercase tracking-widest block mb-2">{selectedSpecs.category} Certification</span>
              <h3 className="font-headline text-[26px] font-bold text-[color:var(--arbor-primary)] mb-6 tracking-tight">{selectedSpecs.title}</h3>
              
              <div className="space-y-4 font-sans text-[14px] mb-8">
                <div className="flex justify-between border-b border-[var(--arbor-outline-variant)]/30 pb-2">
                  <span className="text-[color:var(--arbor-outline)] uppercase tracking-wider font-semibold">Origin</span>
                  <span className="text-[color:var(--arbor-primary)] font-bold">{selectedSpecs.origin}</span>
                </div>
                <div className="flex justify-between border-b border-[var(--arbor-outline-variant)]/30 pb-2">
                  <span className="text-[color:var(--arbor-outline)] uppercase tracking-wider font-semibold">GSM / Density</span>
                  <span className="text-[color:var(--arbor-primary)] font-bold">{selectedSpecs.density}</span>
                </div>
                <div className="flex justify-between border-b border-[var(--arbor-outline-variant)]/30 pb-2">
                  <span className="text-[color:var(--arbor-outline)] uppercase tracking-wider font-semibold">Moisture Index</span>
                  <span className="text-[color:var(--arbor-primary)] font-bold">{selectedSpecs.moisture}</span>
                </div>
                <div className="flex justify-between border-b border-[var(--arbor-outline-variant)]/30 pb-2">
                  <span className="text-[color:var(--arbor-outline)] uppercase tracking-wider font-semibold">Brightness Rating</span>
                  <span className="text-[color:var(--arbor-primary)] font-bold">{selectedSpecs.brightness}</span>
                </div>
                <div className="flex justify-between border-b border-[var(--arbor-outline-variant)]/30 pb-2">
                  <span className="text-[color:var(--arbor-outline)] uppercase tracking-wider font-semibold">Mean Fiber Length</span>
                  <span className="text-[color:var(--arbor-primary)] font-bold">{selectedSpecs.fiberLength}</span>
                </div>
                <div className="flex justify-between border-b border-[var(--arbor-outline-variant)]/30 pb-2">
                  <span className="text-[color:var(--arbor-outline)] uppercase tracking-wider font-semibold">Hemicellulose Content</span>
                  <span className="text-[color:var(--arbor-primary)] font-bold">{selectedSpecs.hemicellulose}</span>
                </div>
                <div className="flex justify-between border-b border-[var(--arbor-outline-variant)]/30 pb-2">
                  <span className="text-[color:var(--arbor-outline)] uppercase tracking-wider font-semibold">Residual Lignin</span>
                  <span className="text-[color:var(--arbor-primary)] font-bold">{selectedSpecs.lignin}</span>
                </div>
                <div className="flex justify-between border-b border-[var(--arbor-outline-variant)]/30 pb-2">
                  <span className="text-[color:var(--arbor-outline)] uppercase tracking-wider font-semibold">Tear Resistance Index</span>
                  <span className="text-[color:var(--arbor-primary)] font-bold">{selectedSpecs.tearFactor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[color:var(--arbor-outline)] uppercase tracking-wider font-semibold">Audit Standards</span>
                  <span className="text-[color:var(--arbor-primary)] font-bold text-right text-[12px]">{selectedSpecs.cert}</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    onAddToCart(selectedSpecs);
                    setSelectedSpecs(null);
                  }}
                  className="flex-grow bg-[var(--arbor-primary)] text-white py-3.5 font-headline text-[12px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity rounded"
                >
                  Add Fiber to Inquiry
                </button>
                <button
                  onClick={() => setSelectedSpecs(null)}
                  className="border border-[var(--arbor-outline)] text-[color:var(--arbor-outline)] px-6 py-3.5 font-headline text-[12px] font-bold uppercase tracking-wider hover:bg-[var(--arbor-surface-container-low)] transition-colors rounded"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
