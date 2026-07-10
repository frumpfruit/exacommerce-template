import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from '../ui/CountUp';

gsap.registerPlugin(ScrollTrigger);

const IMPACT_IMAGES = [
  {
    src: '/images/home/michael-descharles-BmMABUWOJbY-unsplash.jpg',
    alt: 'Pelabuhan ekspor internasional dengan kapal kargo',
    caption: 'GLOBAL TRADE INFRASTRUCTURE'
  },
  {
    src: '/images/home/ian-taylor--Lv0ALobiJc-unsplash.jpg',
    alt: 'Pelaku UMKM di pasar tradisional Indonesia',
    caption: 'UMKM ECOSYSTEM'
  },
  {
    src: '/images/home/lucas-van-oort-fBZOVyF-96w-unsplash.jpg',
    alt: 'Kontainer kargo di terminal pelabuhan',
    caption: 'MARITIME LOGISTICS'
  },
  {
    src: '/images/home/dimitri-karastelev-ZH4FUYiaczY-unsplash.jpg',
    alt: 'Penandatanganan dokumen kepatuhan ekspor',
    caption: 'REGULATORY COMPLIANCE'
  }
];

export default function ImpactSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    // Header entrance
    gsap.fromTo('.impact-header',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
      }
    );

    // Photo grid entrance with stagger
    gsap.fromTo('.impact-photo-card',
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: '.impact-photo-grid', start: 'top 90%', toggleActions: 'play none none none' }
      }
    );

    // Statistics rows entrance
    gsap.fromTo('.annual-report-row',
      { opacity: 0, y: 25 },
      {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.annual-report-row', start: 'top 92%', toggleActions: 'play none none none' }
      }
    );

  }, { scope: containerRef });

  return (
    <section 
      id="dampak" 
      ref={containerRef} 
      className="py-28 px-6 md:px-12 bg-white text-[#111827] relative z-20 border-t border-[#e5e7eb] overflow-hidden font-body"
    >
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        <div className="impact-header text-left max-w-4xl space-y-4 border-b border-[#e5e7eb] pb-10">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-[#111827] font-headline">
            Ketika Ribuan Bisnis Bertumbuh, <br/>
            <span className="text-[#6b7280] font-normal">Dampaknya Melampaui Angka.</span>
          </h2>
          <p className="text-[#4b5563] text-base sm:text-lg leading-relaxed max-w-3xl font-normal pt-2">
            Setiap UMKM yang berkembang membawa dampak nyata bagi rantai pasok, perluasan lapangan kerja, serta daya saing valuta asing Indonesia di pasar global.
          </p>
        </div>

        {/* Photo Grid — Editorial Magazine Layout */}
        <div className="impact-photo-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Main Large Photo */}
          <div className="impact-photo-card md:row-span-2 relative rounded-2xl overflow-hidden bg-[#f3f4f6] group cursor-pointer border border-[#e5e7eb] hover:border-[#111827] transition-all duration-300">
            <img 
              src={IMPACT_IMAGES[0].src}
              alt={IMPACT_IMAGES[0].alt}
              className="w-full h-full min-h-[400px] md:min-h-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <span className="px-3 py-1 rounded bg-white/90 text-[#111827] font-mono text-[10px] font-bold tracking-widest uppercase">
                {IMPACT_IMAGES[0].caption}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-3 font-headline leading-snug">
                Infrastruktur perdagangan global yang menghubungkan produk Indonesia ke pasar dunia.
              </h3>
            </div>
          </div>

          {/* Secondary Photo — UMKM */}
          <div className="impact-photo-card relative rounded-2xl overflow-hidden bg-[#f3f4f6] group cursor-pointer border border-[#e5e7eb] hover:border-[#111827] transition-all duration-300">
            <img 
              src={IMPACT_IMAGES[1].src}
              alt={IMPACT_IMAGES[1].alt}
              className="w-full h-56 sm:h-64 object-cover transition-all duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <span className="px-2.5 py-1 rounded bg-white/90 text-[#111827] font-mono text-[10px] font-bold tracking-widest uppercase">
                {IMPACT_IMAGES[1].caption}
              </span>
              <p className="text-sm text-white font-semibold mt-2">
                12.450+ pelaku usaha aktif dari desa hingga kawasan industri.
              </p>
            </div>
          </div>

          {/* Bottom Row — 2 smaller photos */}
          <div className="grid grid-cols-2 gap-6">
            <div className="impact-photo-card relative rounded-2xl overflow-hidden bg-[#f3f4f6] group cursor-pointer border border-[#e5e7eb] hover:border-[#111827] transition-all duration-300">
              <img 
                src={IMPACT_IMAGES[2].src}
                alt={IMPACT_IMAGES[2].alt}
                className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 z-10">
                <span className="px-2 py-0.5 rounded bg-white/90 text-[#111827] font-mono text-[9px] font-bold tracking-widest uppercase">
                  {IMPACT_IMAGES[2].caption}
                </span>
              </div>
            </div>

            <div className="impact-photo-card relative rounded-2xl overflow-hidden bg-[#f3f4f6] group cursor-pointer border border-[#e5e7eb] hover:border-[#111827] transition-all duration-300">
              <img 
                src={IMPACT_IMAGES[3].src}
                alt={IMPACT_IMAGES[3].alt}
                className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 z-10">
                <span className="px-2 py-0.5 rounded bg-white/90 text-[#111827] font-mono text-[9px] font-bold tracking-widest uppercase">
                  {IMPACT_IMAGES[3].caption}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Rows */}
        <div className="pt-8 border-t border-[#e5e7eb] space-y-2">
          <div className="text-xs font-mono text-[#6b7280] uppercase tracking-[0.2em] font-bold pb-4">
            Laporan Kinerja Dampak Ekonomi
          </div>

          <div className="grid grid-cols-1 divide-y divide-[#e5e7eb] border-b border-[#e5e7eb]">
            
            {/* Row 1 */}
            <div className="annual-report-row py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-[#f8f9fa] transition-colors px-4 rounded-xl">
              <div className="md:col-span-5 flex items-baseline gap-4">
                <span className="text-xs font-mono font-bold text-[#6b7280]">01</span>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111827] font-headline tracking-tight">
                  <CountUp to={12450} duration={2500} suffix="+" />
                </div>
              </div>
              <div className="md:col-span-7 text-left space-y-1">
                <h4 className="text-lg font-bold text-[#111827] font-headline">Ekosistem UMKM Aktif Terhubung</h4>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  Menggerakkan ribuan produsen lokal, petani komoditas, dan pengrajin dari desa hingga kawasan industri ekspor nusantara menuju jaringan perdagangan internasional.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="annual-report-row py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-[#f8f9fa] transition-colors px-4 rounded-xl">
              <div className="md:col-span-5 flex items-baseline gap-4">
                <span className="text-xs font-mono font-bold text-[#374151]">02</span>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111827] font-headline tracking-tight">
                  USD $<CountUp to={84.5} duration={2500} decimals={1} />M+
                </div>
              </div>
              <div className="md:col-span-7 text-left space-y-1">
                <h4 className="text-lg font-bold text-[#111827] font-headline">Akumulasi Devisa Valuta Asing (FX)</h4>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  Total nilai transaksi ekspor yang langsung masuk memperkuat likuiditas dan arus kas valuta asing para pelaku usaha dalam negeri tanpa potongan perantara yang merugikan.
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="annual-report-row py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-[#f8f9fa] transition-colors px-4 rounded-xl">
              <div className="md:col-span-5 flex items-baseline gap-4">
                <span className="text-xs font-mono font-bold text-[#6b7280]">03</span>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111827] font-headline tracking-tight">
                  <CountUp to={35} duration={2000} suffix="+" /> <span className="text-2xl font-bold font-mono text-[#6b7280]">Negara</span>
                </div>
              </div>
              <div className="md:col-span-7 text-left space-y-1">
                <h4 className="text-lg font-bold text-[#111827] font-headline">Perluasan Akses Rantai Pasok Global</h4>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  Menghubungkan produk unggulan Indonesia secara langsung dengan pusat permintaan ritel dan B2B di Jepang, Uni Eropa, Amerika Serikat, Australia, hingga Timur Tengah.
                </p>
              </div>
            </div>

            {/* Row 4 */}
            <div className="annual-report-row py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-[#f8f9fa] transition-colors px-4 rounded-xl">
              <div className="md:col-span-5 flex items-baseline gap-4">
                <span className="text-xs font-mono font-bold text-[#6b7280]">04</span>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111827] font-headline tracking-tight">
                  100% <span className="text-2xl font-bold font-mono text-[#374151]">Digital</span>
                </div>
              </div>
              <div className="md:col-span-7 text-left space-y-1">
                <h4 className="text-lg font-bold text-[#111827] font-headline">Otomatisasi Kepatuhan Bea Cukai NSW</h4>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  Standarisasi dokumen kepatuhan ekspor, klasifikasi kode tarif HS otomatis akurat, dan integrasi langsung dengan sistem National Single Window (NSW) Bea Cukai RI.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
