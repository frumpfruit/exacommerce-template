import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PARTNERS = [
  { name: "Kementerian Perdagangan RI", badge: "Regulator Partner", icon: "account_balance" },
  { name: "BUMN Logistik & Pelabuhan", badge: "Infrastruktur", icon: "directions_boat" },
  { name: "Asosiasi UMKM Indonesia", badge: "Komunitas 100k+", icon: "groups" },
  { name: "Indonesia Export Community", badge: "Global Network", icon: "public" },
  { name: "Global Marketplace Gateway", badge: "E-Commerce Hub", icon: "shopping_cart_checkout" },
  { name: "Bea Cukai & National Single Window", badge: "Customs NSW API", icon: "verified_user" },
  { name: "Bank Nusantara Trade Finance", badge: "Valuta Asing & FX", icon: "account_balance_wallet" },
  { name: "Global Express Air & Ocean", badge: "Logistik Maritim", icon: "local_shipping" },
];

const CORPORATE_PILLARS = [
  {
    category: "Regulatory Compliance",
    title: "Terlisensi Resmi & Terintegrasi NSW Bea Cukai RI",
    desc: "Sistem kepatuhan otomatis yang terhubung langsung dengan National Single Window untuk klasifikasi HS Code dan verifikasi dokumen PEB tanpa celah kesalahan.",
    image: "/images/home/dimitri-karastelev-ZH4FUYiaczY-unsplash.jpg",
    icon: "verified_user"
  },
  {
    category: "Global FX Banking",
    title: "Jaringan Perbankan & Rekening Valas Internasional",
    desc: "Kerjasama strategis dengan institusi keuangan global untuk perlindungan likuiditas dan konversi mata uang asing instan dengan kurs institusional terbaik.",
    image: "/images/home/austin-distel-744oGeqpxPQ-unsplash.jpg",
    icon: "account_balance"
  },
  {
    category: "Human Capital & Analytics",
    title: "Pendampingan Analis Perdagangan Ekspor 24/7",
    desc: "Tim spesialis perdagangan internasional, ahli tarif bea cukai, dan negosiator kontrak ekspor yang siap mendampingi setiap tahapan ekspansi Anda.",
    image: "/images/home/hobi-industri-CBMmY0UVPNg-unsplash.jpg",
    icon: "groups"
  },
  {
    category: "Global Maritime Logistics",
    title: "Prioritas Alokasi Kargo & Pelacakan Real-Time",
    desc: "Akses langsung ke jaringan pelayaran kapal kargo maritim dan ekspedisi udara internasional dengan garansi kepastian jadwal pengiriman barang.",
    image: "/images/home/lucas-van-oort-fBZOVyF-96w-unsplash.jpg",
    icon: "directions_boat"
  }
];

export default function TrustedSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo('.trust-pillar-card',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 95%',
          toggleActions: 'play none none none',
        }
      }
    );

  }, { scope: containerRef });

  return (
    <section 
      id="trust" 
      ref={containerRef} 
      className="w-full py-28 bg-[#f8f9fa] border-y border-[#e5e7eb] relative overflow-hidden z-20 font-body"
    >

      {/* REAL WORLD TRUST CONTENT */}
      <div className="trust-real-world-content max-w-7xl mx-auto px-6 md:px-12 space-y-20 relative z-10 transition-opacity duration-500">
        
        {/* Header */}
        <div className="text-left max-w-4xl space-y-4 border-b border-[#e5e7eb] pb-10">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-[#111827] font-headline">
            Di Balik Arsitektur Digital Exantara, <br/>
            <span className="text-[#6b7280] font-normal">Kredibilitas Nyata untuk Bisnis Anda.</span>
          </h2>
          <p className="text-[#4b5563] text-base sm:text-lg leading-relaxed max-w-3xl font-normal pt-2">
            Dari visi, fakta, hingga visualisasi data, kini saatnya melihat siapa sebenarnya Exantara. Kami didukung oleh badan hukum resmi, sertifikasi kepatuhan bea cukai, jaringan perbankan valuta asing, serta tim eksekutif profesional yang mendampingi setiap langkah transformasi bisnis global Anda.
          </p>
        </div>

        {/* 2. Real World Photography Grid (4 Corporate Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORPORATE_PILLARS.map((pillar, idx) => (
            <div 
              key={idx}
              className="trust-pillar-card group relative rounded-3xl overflow-hidden bg-white border border-[#e5e7eb] shadow-sm hover:shadow-xl hover:border-[#111827] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Banner with Subtle Zoom on Hover */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#e2e8f0]">
                <img 
                  src={pillar.image} 
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#111827]/90 text-white font-mono text-[11px] font-bold tracking-widest uppercase backdrop-blur border border-white/20">
                    {pillar.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-white text-[#111827] flex items-center justify-center font-bold shadow-lg group-hover:bg-[#111827] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">{pillar.icon}</span>
                </div>
              </div>

              {/* Editorial Typography Content */}
              <div className="p-8 space-y-3 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111827] group-hover:text-[#374151] transition-colors font-headline leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#4b5563] leading-relaxed mt-2 font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Strategic Ecosystem Partners Marquee */}
        <div className="pt-8 border-t border-[#e5e7eb] space-y-6">
          <div className="flex flex-col items-center justify-center gap-2 text-center text-xs uppercase tracking-[0.25em] font-bold">
            <span className="text-[#6b7280]">DIPERCEYA & DIDUKUNG OLEH EKOSISTEM EKSPOR NASIONAL</span>
            <span className="text-[#111827]">Kemitraan Strategis</span>
          </div>

          <div className="relative w-full overflow-hidden flex items-center py-4">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none"></div>

            <div className="flex gap-4 animate-scroll whitespace-nowrap w-max">
              {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((item, idx) => (
                <div 
                  key={idx}
                  className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white border border-[#e5e7eb] hover:border-[#111827] hover:shadow-md transition-all cursor-pointer group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#f8f9fa] group-hover:bg-[#111827] flex items-center justify-center transition-colors border border-[#e5e7eb]">
                    <span className="material-symbols-outlined text-[#4b5563] group-hover:text-white text-xl transition-colors">{item.icon}</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-[#111827] group-hover:text-[#374151] transition-colors">{item.name}</h4>
                    <span className="text-[11px] uppercase tracking-widest text-[#6b7280]">{item.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
