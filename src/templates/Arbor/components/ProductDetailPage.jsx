import React, { useState } from 'react';

export default function ProductDetailPage({ product, onNavigate = () => {}, onAddToCart = () => {}, showToast = () => {} }) {
  const [tonnage, setTonnage] = useState(25);
  const [activeTab, setActiveTab] = useState('specs');
  const [activeSwatch, setActiveSwatch] = useState(0);

  if (!product) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 py-20 text-center font-sans">
        <p className="text-[color:var(--arbor-outline)] mb-6">No product selected.</p>
        <button onClick={() => onNavigate('catalog')} className="bg-[var(--arbor-primary)] text-white px-8 py-3 font-headline text-[13px] font-bold uppercase tracking-widest">Go to Catalog</button>
      </div>
    );
  }

  // Swatch image variations representing microscopic fiber zooms
  const swatches = [
    product.image,
    '/images/arbor/pulping.jpg',
    '/images/arbor/report.jpg'
  ];

  const handleAddToCart = () => {
    onAddToCart(product, tonnage);
    showToast(`${tonnage} tons of ${product.title} added to B2B Inquiry.`);
  };

  const calculatedFootprint = (tonnage * 0.12).toFixed(1); // 0.12 CO2 tons per pulp ton

  return (
    <div className="bg-[var(--arbor-background)] text-[color:var(--arbor-on-surface)] selection:bg-[var(--arbor-sapling-light)] font-sans">
      <main className="max-w-[1280px] mx-auto px-6 py-12">
        
        {/* Back Link */}
        <button 
          onClick={() => onNavigate('catalog')}
          className="mb-8 font-headline text-[12px] font-bold uppercase tracking-widest text-[color:var(--arbor-outline)] hover:text-[color:var(--arbor-primary)] flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          Back to Catalog
        </button>

        {/* Product Details Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          
          {/* Swatches Visual Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[var(--arbor-outline-variant)] bg-white relative">
              <img src={swatches[activeSwatch]} alt="Detailed product view" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="flex gap-4">
              {swatches.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveSwatch(idx)}
                  className={`w-24 h-16 rounded overflow-hidden border-2 transition-all ${activeSwatch === idx ? 'border-[var(--arbor-primary)] opacity-100 scale-102 shadow-sm' : 'border-[var(--arbor-outline-variant)]/40 opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt="Mini preview swatch" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details & B2B Calculator */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="font-headline text-[11px] font-bold text-[color:var(--arbor-secondary)] uppercase tracking-[0.2em] block mb-2">{product.category}</span>
              <h1 className="font-headline text-[38px] md:text-[44px] font-extrabold leading-tight text-[color:var(--arbor-primary)] tracking-tight mb-4">{product.title}</h1>
              <span className="bg-[var(--arbor-surface-container-high)] text-[color:var(--arbor-primary)] px-3 py-1 text-[11px] font-mono font-bold tracking-wider rounded uppercase">Origin: {product.origin}</span>
            </div>

            <p className="text-[15px] text-[color:var(--arbor-on-surface-variant)] leading-relaxed">{product.description}</p>

            {/* Spec Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-[var(--arbor-outline-variant)]/30 text-center font-sans">
              <div>
                <span className="text-[10px] text-[color:var(--arbor-outline)] uppercase font-semibold block mb-1">Density</span>
                <span className="text-[15px] font-bold text-[color:var(--arbor-primary)]">{product.density}</span>
              </div>
              <div>
                <span className="text-[10px] text-[color:var(--arbor-outline)] uppercase font-semibold block mb-1">Moisture</span>
                <span className="text-[15px] font-bold text-[color:var(--arbor-primary)]">{product.moisture}</span>
              </div>
              <div>
                <span className="text-[10px] text-[color:var(--arbor-outline)] uppercase font-semibold block mb-1">Tensile</span>
                <span className="text-[15px] font-bold text-[color:var(--arbor-primary)]">{product.tensile}</span>
              </div>
              <div>
                <span className="text-[10px] text-[color:var(--arbor-outline)] uppercase font-semibold block mb-1">Brightness</span>
                <span className="text-[15px] font-bold text-[color:var(--arbor-primary)]">{product.brightness}</span>
              </div>
            </div>

            {/* B2B Tonnage RFQ Calculator */}
            <div className="p-6 border border-[var(--arbor-outline-variant)]/40 bg-[var(--arbor-surface-container-low)] space-y-6">
              <h3 className="font-headline text-[13px] font-bold uppercase tracking-wider text-[color:var(--arbor-primary)]">Inquiry Estimation Calculator</h3>
              
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase text-[color:var(--arbor-outline)] block">Requested Volume (Tons)</label>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setTonnage(prev => Math.max(5, prev - 5))}
                      className="w-10 h-10 border border-[var(--arbor-outline-variant)] bg-white text-lg font-bold flex items-center justify-center hover:bg-slate-50 active:scale-95 transition-all"
                    >
                      -
                    </button>
                    <input 
                      type="number"
                      value={tonnage}
                      onChange={(e) => setTonnage(Math.max(5, parseInt(e.target.value) || 5))}
                      className="w-20 h-10 border border-[var(--arbor-outline-variant)] text-center text-[14px] font-mono font-bold focus:outline-none focus:border-[var(--arbor-primary)]"
                    />
                    <button 
                      onClick={() => setTonnage(prev => prev + 5)}
                      className="w-10 h-10 border border-[var(--arbor-outline-variant)] bg-white text-lg font-bold flex items-center justify-center hover:bg-slate-50 active:scale-95 transition-all"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-left sm:text-right font-sans text-[13px] text-[color:var(--arbor-on-surface-variant)] space-y-1">
                  <p>Min. Volume: <strong className="font-bold text-[color:var(--arbor-primary)]">{product.moq}</strong></p>
                  <p>Est. COâ‚‚ Footprint: <strong className="font-bold text-emerald-600">{calculatedFootprint} Tons</strong></p>
                </div>
              </div>

              <button 
                onClick={handleAddToCart}
                className="w-full bg-[var(--arbor-primary)] text-white py-4 font-headline text-[13px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Add Volume to B2B Inquiry List
                <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
              </button>
            </div>

          </div>
        </section>

        {/* Technical & Conservation Accordions */}
        <section className="border-t border-[var(--arbor-outline-variant)]/30 pt-12 mb-20">
          <div className="flex border-b border-[var(--arbor-outline-variant)]/30 mb-8 overflow-x-auto">
            {[
              { id: 'specs', label: 'Technical Profile' },
              { id: 'eco', label: 'Environmental Impact' },
              { id: 'shipping', label: 'Processing & Shipping' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-6 font-headline text-[13px] font-bold uppercase tracking-wider whitespace-nowrap transition-colors border-b-2 ${activeTab === tab.id ? 'border-[var(--arbor-primary)] text-[color:var(--arbor-primary)]' : 'border-transparent text-[color:var(--arbor-outline)] hover:text-[color:var(--arbor-primary)]'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="font-sans text-[15px] leading-relaxed text-[color:var(--arbor-on-surface-variant)] max-w-3xl space-y-4">
            {activeTab === 'specs' && (
              <div className="space-y-4">
                <p>Our raw fiber is optimized through laboratory clonal propagation of high-growth parent trees, generating a uniform cell structure. This limits fiber distribution skew and delivers consistent thickness profiles inside pulpmill vats.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-[13px]">
                  <div className="bg-[var(--arbor-surface-container-low)] p-4 border border-[var(--arbor-outline-variant)]/30">
                    <strong className="font-bold text-[color:var(--arbor-primary)] uppercase tracking-wider block mb-1">Recommended Applications</strong>
                    {product.applications}
                  </div>
                  <div className="bg-[var(--arbor-surface-container-low)] p-4 border border-[var(--arbor-outline-variant)]/30">
                    <strong className="font-bold text-[color:var(--arbor-primary)] uppercase tracking-wider block mb-1">Bleaching Process</strong>
                    Elemental Chlorine Free (ECF) technology utilizing advanced oxygen delignification loops.
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'eco' && (
              <div className="space-y-4">
                <p>This species is audited under a strict zero-deforestation ledger. 100% of our harvesting acreage is certified by national and global forestry bodies. We plant four new saplings for every single tree selected for logging.</p>
                <ul className="list-disc pl-6 space-y-2 text-[14px]">
                  <li>PEFC Certified Supply Chain compliance tracking.</li>
                  <li>Designated native ecological balance corridors occupying 30% of total land holds.</li>
                  <li>Continuous soil organic index replenishment monitoring via LiDAR canopy maps.</li>
                </ul>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-4">
                <p>Materials are prepared inside moisture-barrier-lined rolls or heavy pressed bales wrapped in protective weather-proof Kraft skins. Direct sensors are added to oceanic shipping cargo to monitor ambient relative humidity during transit.</p>
                <div className="grid grid-cols-3 gap-4 text-center text-[12px] font-mono py-4 bg-[var(--arbor-surface-container-low)] border border-[var(--arbor-outline-variant)]/30">
                  <div>
                    <span className="text-[10px] text-[color:var(--arbor-outline)] uppercase font-sans font-semibold block mb-1">Standard Roll Width</span>
                    2400 mm
                  </div>
                  <div>
                    <span className="text-[10px] text-[color:var(--arbor-outline)] uppercase font-sans font-semibold block mb-1">Core Inside Diameter</span>
                    76 mm / 3 inches
                  </div>
                  <div>
                    <span className="text-[10px] text-[color:var(--arbor-outline)] uppercase font-sans font-semibold block mb-1">Moisture wrapping</span>
                    Multi-ply HDPE skin
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}



