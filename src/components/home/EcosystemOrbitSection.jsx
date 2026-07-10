import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ECO_MODULES = [
  { 
    id: 'commerce', 
    name: "Commerce Builder", 
    tagline: "Etalase Digital B2B Multi-Bahasa",
    desc: "Membangun identitas digital internasional tanpa koding. Kelola katalog produk, konversi mata uang otomatis, dan sinkronisasi stok global.", 
    icon: "storefront", 
    image: "/images/generated/eco_commerce_1783608613418.png" 
  },
  { 
    id: 'market', 
    name: "Market Builder", 
    tagline: "Ekspansi Akses & Jaringan Buyer",
    desc: "Menghubungkan produk unggulan Anda secara langsung dengan importir, distributor, dan pusat retail di Jepang, Uni Eropa, hingga Amerika Serikat.", 
    icon: "public", 
    image: "/images/generated/eco_market_1783608625514.png" 
  },
  { 
    id: 'export', 
    name: "Export Builder", 
    tagline: "Otomatisasi Dokumen & NSW",
    desc: "Standarisasi dokumen ekspor (PEB, COO, Invoice) otomatis terintegrasi dengan sistem National Single Window (NSW) Bea Cukai RI.", 
    icon: "local_shipping", 
    image: "/images/generated/eco_export_1783608661450.png" 
  },
  { 
    id: 'dashboard', 
    name: "Smart Dashboard", 
    tagline: "Kendali Operasional Satu Pintu",
    desc: "Pantau kinerja penjualan, status pengiriman kargo laut/udara, dan laporan akumulasi devisa valas secara real-time.", 
    icon: "space_dashboard", 
    image: "/images/generated/eco_dashboard_1783608724546.png" 
  }
];

export default function EcosystemOrbitSection() {
  const containerRef = useRef(null);
  const parallaxBgRef = useRef(null);
  const [activeTab, setActiveTab] = useState('commerce');

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    // Header animation
    gsap.fromTo('.eco-header-content',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' }
      }
    );

    // Parallax background scroll effect
    gsap.fromTo(parallaxBgRef.current,
      { yPercent: -15 },
      {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );

    // Tabs & Showcase animations
    gsap.fromTo('.eco-showcase-container',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.eco-showcase-container', start: 'top 85%', toggleActions: 'play none none none' }
      }
    );

  }, { scope: containerRef });

  const activeModule = ECO_MODULES.find(m => m.id === activeTab) || ECO_MODULES[0];

  return (
    <section 
      id="ekosistem" 
      ref={containerRef} 
      className="py-32 px-6 md:px-12 bg-white text-[#111827] relative z-20 border-t border-[#e5e7eb] overflow-hidden font-body"
    >
      {/* Parallax Background Image Layer for elegant atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-[0.04]">
        <img 
          ref={parallaxBgRef}
          src="/images/home/amina-atar-4mEyvORkbN0-unsplash.jpg"
          alt="Parallax background global shipping"
          className="w-full h-[140%] object-cover"
        />
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:5rem_5rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Header */}
        <div className="eco-header-content text-left max-w-4xl space-y-6 border-b border-[#e5e7eb] pb-10">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#111827] font-headline">
            Semua Terhubung Dalam Satu <br/>
            <span className="underline decoration-2 underline-offset-8 decoration-[#111827] text-[#1f2937]">Ekosistem Digital.</span>
          </h2>
          <p className="text-[#4b5563] text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
            Exantara mengintegrasikan setiap tahapan bisnis ekspor Anda ke dalam satu platform yang saling terhubung untuk efisiensi maksimal.
          </p>
        </div>

        {/* Tabbed Showcase Interactive Center */}
        <div className="eco-showcase-container grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Module Selector (Tabs) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-3">
            {ECO_MODULES.map((mod) => {
              const isActive = activeTab === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveTab(mod.id)}
                  onMouseEnter={() => setActiveTab(mod.id)}
                  className={`w-full p-6 text-left rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    isActive 
                      ? 'bg-[#f8f9fa] border-[#111827] shadow-sm' 
                      : 'bg-white border-[#e5e7eb] hover:border-[#111827]/60'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl border transition-colors ${
                    isActive ? 'bg-[#111827] text-white border-transparent' : 'bg-[#f8f9fa] text-[#4b5563] border-[#e5e7eb]'
                  }`}>
                    <span className="material-symbols-outlined text-xl block font-bold">{mod.icon}</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-[#111827] font-headline">{mod.name}</h3>
                    <p className="text-xs text-[#6b7280]">{mod.tagline}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual Preview Panel with Geist typography */}
          <div className="lg:col-span-7 rounded-3xl bg-[#f8f9fa] border border-[#e5e7eb] p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-sm relative group">
            
            {/* Visual container with animation key */}
            <div className="w-full aspect-[16/10] bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden relative shadow-inner">
              <img 
                key={activeModule.id}
                src={activeModule.image}
                alt={activeModule.name}
                className="w-full h-full object-cover transition-all duration-500 animate-fadeIn"
                loading="lazy"
              />
            </div>

            {/* Description area */}
            <div className="pt-6 text-left space-y-2">
              <h4 className="text-lg font-bold text-[#111827] font-headline">
                {activeModule.tagline}
              </h4>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                {activeModule.desc}
              </p>
            </div>

          </div>

        </div>

        {/* Simple Spacer Line */}
        <div className="pt-8 border-t border-[#e5e7eb]"></div>

      </div>
    </section>
  );
}
