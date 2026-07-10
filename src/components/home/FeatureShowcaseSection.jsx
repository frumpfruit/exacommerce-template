import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PRODUCT_MODES = [
  {
    id: "commerce",
    title: "Commerce Builder",
    menuLabel: "01 Commerce Builder",
    headline: "Bangun Toko Online Berstandar Internasional",
    desc: "Buat etalase digital resmi usaha Anda tanpa ketergantungan programmer. Dukungan katalog multi-bahasa dan checkout valuta asing langsung terintegrasi.",
    benefit: "Rasio Konversi +40% di Pasar Global",
    kicker: "NO-CODE COMMERCE",
    accent: "#374151"
  },
  {
    id: "market",
    title: "Market Builder",
    menuLabel: "02 Market Builder",
    headline: "Perluas Jangkauan Penjualan Omnichannel",
    desc: "Hubungkan berbagai kanal pemasaran dan kelola seluruh pesanan dari satu dasbor terpusat. Sinkronisasi TikTok Shop global, Amazon B2B, dan WhatsApp.",
    benefit: "150M+ Akses Jaringan Buyer",
    kicker: "OMNICHANNEL SALES",
    accent: "#111827"
  },
  {
    id: "export",
    title: "Export Builder",
    menuLabel: "03 Export Builder",
    headline: "Otomatisasi Kepatuhan Bea Cukai NSW",
    desc: "Persiapkan dokumen ekspor secara otomatis, klasifikasi HS Code akurat, penerbitan Commercial Invoice PEB, dan pelacakan satelit kontainer maritim.",
    benefit: "100% Kepatuhan Bea Cukai NSW",
    kicker: "CUSTOMS COMPLIANCE",
    accent: "#374151"
  },
  {
    id: "dashboard",
    title: "Smart Dashboard",
    menuLabel: "04 Smart Dashboard",
    headline: "Pusat Kendali Eksekutif Real-Time",
    desc: "Pantau arus kas valuta asing dan pertumbuhan bisnis melalui visualisasi laporan yang mudah dibaca. Kendali penuh atas stok multi-gudang.",
    benefit: "Real-Time Inventory Sync",
    kicker: "OPERATIONAL LEDGER",
    accent: "#111827"
  },
  {
    id: "ai",
    title: "Trade Intelligence",
    menuLabel: "05 Trade Intelligence",
    headline: "Intelijen Pasar Yang Memandu Bisnis Anda",
    desc: "Analisis data pasar ekspor internasional yang memberikan rekomendasi negara tujuan, strategi dinamisasi harga, dan konsultasi kepatuhan bea cukai.",
    benefit: "24/7 Market Intelligence Report",
    kicker: "TRADE INTELLIGENCE",
    accent: "#374151"
  }
];

export default function FeatureShowcaseSection() {
  const containerRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [aiTyping, setAiTyping] = useState("");

  useEffect(() => {
    if (activeIdx !== 4) return;
    const text = "Analisis Laporan Pasar: 1. Jepang (Peluang 94%) • 2. Singapura (Peluang 88%) • 3. Australia (Peluang 82%)";
    let i = 0;
    setAiTyping("");
    const timer = setInterval(() => {
      if (i < text.length) {
        setAiTyping(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [activeIdx]);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 15%',
      end: 'bottom 85%',
      scrub: true,
      onUpdate: (self) => {
        const index = Math.min(
          PRODUCT_MODES.length - 1,
          Math.floor(self.progress * PRODUCT_MODES.length)
        );
        setActiveIdx(index);
      }
    });
  }, { scope: containerRef });

  const currentMode = PRODUCT_MODES[activeIdx] || PRODUCT_MODES[0];

  return (
    <section 
      id="fitur" 
      ref={containerRef} 
      className="py-28 px-6 md:px-12 bg-white text-[#111827] relative z-20 border-t border-[#e5e7eb] overflow-hidden font-body"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Editorial Report Header */}
        <div className="border-b border-[#e5e7eb] pb-10 text-center lg:text-left space-y-4">
          <div className="flex justify-center lg:justify-between items-center text-xs font-mono text-[#6b7280] uppercase tracking-[0.2em] font-bold">
            <span>Product Experience Workspace</span>
            <span className="hidden lg:block">Exantara Platform Core</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-2">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111827] leading-[1.2] md:leading-[1.1] font-headline">
                Semua Aktivitas Bisnis. <br/>
                <span className="text-[#6b7280] font-normal">Dalam Satu Dashboard.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed">
                Mulai dari membangun toko online berdomain resmi hingga mengelola kepatuhan bea cukai, seluruh aktivitas perdagangan internasional dikelola dalam satu antarmuka eksekutif.
              </p>
            </div>
          </div>
        </div>

        {/* 3-Column Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1 (Left ~25%): Sidebar Menu */}
          <div className="lg:col-span-3 space-y-2 lg:sticky lg:top-32 bg-[#f8f9fa] p-4 rounded-xl border border-[#e5e7eb] shadow-sm">
            <div className="text-xs font-mono uppercase tracking-widest text-[#6b7280] px-3 pb-2 border-b border-[#e5e7eb] mb-2 font-bold flex justify-between">
              <span>MODUL PLATFORM</span>
              <span className="text-[#374151]">0{activeIdx + 1}/05</span>
            </div>
            {PRODUCT_MODES.map((mode, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-body text-xs transition-all flex items-center justify-between ${
                    isActive 
                      ? 'bg-[#111827] text-white font-bold shadow-md' 
                      : 'text-[#4b5563] hover:bg-white hover:text-[#111827]'
                  }`}
                >
                  <span className="font-semibold">{mode.menuLabel}</span>
                </button>
              );
            })}
            <div className="pt-6 px-3 border-t border-[#e5e7eb] text-xs font-mono text-[#6b7280]">
              <span>STATUS SYSTEM: <strong className="text-[#111827]">ACTIVE</strong></span>
            </div>
          </div>

          {/* Column 2 (Center ~60%): Big B2B Report Preview Window */}
          <div className="lg:col-span-6 lg:sticky lg:top-32 w-full">
            <div className="w-full min-h-[380px] sm:min-h-[440px] lg:min-h-0 lg:aspect-[4/3] bg-white border border-[#f3f4f6] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between relative">
              
              {/* Workspace Window Header */}
              <div className="bg-white px-5 py-3.5 border-b border-[#e5e7eb] flex items-center justify-between text-xs font-mono text-[#6b7280] shadow-sm">
                <div className="flex items-center gap-2.5 font-bold text-[#111827]">
                  <span>exantara-core - {currentMode.id}-workspace</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#f8f9fa] border border-[#d1d5db] text-[#111827] text-[10px] font-bold">LIVE B2B FEED</span>
              </div>

              {/* Dynamic Workspace Preview Content */}
              <div className="p-6 my-auto text-left relative overflow-hidden">
                
                {/* 1. COMMERCE BUILDER PREVIEW */}
                {currentMode.id === 'commerce' && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-[#e5e7eb]">
                      <div>
                        <span className="text-xs font-mono text-[#6b7280] font-bold">WEBSITE BUILDER • NO-CODE PLATFORM</span>
                        <h4 className="text-base sm:text-lg font-bold text-[#111827] font-headline mt-1">Etalase Toko Kopi Arabika Nusantara</h4>
                      </div>
                      <button className="w-full sm:w-auto px-4 py-2 rounded bg-[#111827] text-white font-body text-xs font-bold shadow-md hover:bg-[#374151] text-center justify-center flex">
                        <span>Publish Store</span>
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs font-body">
                      <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e5e7eb] space-y-1.5">
                        <span className="text-[#6b7280] font-mono uppercase text-[10px]">DESAIN ETHOS</span>
                        <div className="text-[#111827] font-bold text-sm">Minimalist Tokyo Clean</div>
                        <span className="text-[#111827] font-mono text-[11px] block flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">check</span>
                          <span>Auto-translated 24 bahasa</span>
                        </span>
                      </div>
                      <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e5e7eb] space-y-1.5">
                        <span className="text-[#6b7280] font-mono uppercase text-[10px]">VALUTA ASING & FX</span>
                        <div className="text-[#111827] font-bold text-sm">Multi-Currency Ready</div>
                        <span className="text-[#374151] font-mono text-[11px] block flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">check</span>
                          <span>USD, JPY, EUR, SGD Active</span>
                        </span>
                      </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-lg bg-[#f8f9fa]">
                      <img src="/images/home/media-library.png" alt="Exantara Commerce Media Library" className="w-full h-auto object-cover max-h-72" loading="lazy" />
                    </div>
                  </div>
                )}

                {/* 2. MARKET BUILDER PREVIEW */}
                {currentMode.id === 'market' && (
                  <div className="space-y-5">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <span className="text-xs font-mono text-[#374151] font-bold">OMNICHANNEL SYNCHRONIZATION HUB</span>
                      <span className="px-2.5 py-1 rounded bg-[#f8f9fa] border border-[#d1d5db] text-[#111827] font-mono text-[10px] sm:text-xs font-bold">100% Connected</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-center font-body text-[10px] sm:text-xs font-bold">
                      {["WhatsApp Shop", "TikTok Global", "Amazon B2B", "Alibaba Hub"].map((ch, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-[#f8f9fa] border border-[#e5e7eb] text-[#111827] shadow-sm flex items-center justify-center gap-1 truncate">
                          <span className="material-symbols-outlined text-sm text-[#374151]">check</span>
                          <span className="truncate">{ch}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e5e7eb] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs font-mono text-[#6b7280] block font-bold">VERIFIED BUYER INQUIRY</span>
                        <span className="text-sm font-bold text-[#111827] flex items-center gap-1.5 mt-0.5">
                          <span className="material-symbols-outlined text-base text-[#111827]">storefront</span>
                          <span>Tokyo Specialty Roasters (Jepang)</span>
                        </span>
                      </div>
                      <span className="w-full sm:w-auto text-center justify-center flex px-3.5 py-1.5 rounded bg-[#111827] text-white font-body text-xs font-bold cursor-pointer hover:bg-[#374151]">Proses Pesanan</span>
                    </div>
                  </div>
                )}

                {/* 3. EXPORT BUILDER PREVIEW */}
                {currentMode.id === 'export' && (
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-3 border-b border-[#e5e7eb]">
                      <div>
                        <span className="text-xs font-mono text-[#374151] font-bold">AUTOMATED NSW CUSTOMS CLEARANCE</span>
                        <h4 className="text-base font-bold text-[#111827] mt-1">HS Code: 0901.21.00 (Kopi Arabika Sangrai)</h4>
                      </div>
                      <span className="text-xs font-mono text-[#111827] font-bold">Tarif 0% (IJ-EPA Treaty)</span>
                    </div>
                    <div className="space-y-2.5 text-xs font-body font-semibold">
                      <div className="p-3.5 rounded bg-[#f8f9fa] border border-[#e5e7eb] flex justify-between items-center text-[#111827]">
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-base text-[#6b7280]">description</span>
                          <span>Commercial Invoice PEB #EX-2026-99</span>
                        </span>
                        <span className="text-[#10b981] font-mono">READY</span>
                      </div>
                      <div className="p-3.5 rounded bg-[#f8f9fa] border border-[#e5e7eb] flex justify-between items-center text-[#111827]">
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-base text-[#6b7280]">verified_user</span>
                          <span>Certificate of Origin (Form D / E)</span>
                        </span>
                        <span className="text-[#10b981] font-mono">APPROVED</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. SMART DASHBOARD PREVIEW */}
                {currentMode.id === 'dashboard' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-[#e5e7eb]">
                      <span className="text-xs font-mono text-[#6b7280] font-bold">EXECUTIVE REAL-TIME LEDGER</span>
                      <span className="text-xs text-[#4b5563]">Last Update: Just Now</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-5 rounded-2xl bg-[#f8f9fa] border border-[#e5e7eb] text-left">
                        <span className="text-xs text-[#6b7280] block font-mono">PENDAPATAN EKSPOR (YTD)</span>
                        <div className="text-xl sm:text-2xl font-black text-[#111827] font-headline mt-1">$1,424,500</div>
                        <span className="text-xs text-[#10b981] font-mono block mt-1 font-semibold">+24.8% vs last month</span>
                      </div>
                      <div className="p-5 rounded-2xl bg-[#f8f9fa] border border-[#e5e7eb] text-left">
                        <span className="text-xs text-[#6b7280] block font-mono">TRANSAKSI VALAS (FX)</span>
                        <div className="text-xl sm:text-2xl font-black text-[#111827] font-headline mt-1">USD, EUR, JPY</div>
                        <span className="text-[11px] sm:text-xs text-[#4b5563] font-mono block mt-1 font-semibold">Semua rekening terhubung</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. AI TRADE INTELLIGENCE PREVIEW */}
                {currentMode.id === 'ai' && (
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#374151] font-bold">
                      <span className="material-symbols-outlined text-base animate-pulse">auto_awesome</span>
                      <span>EXANTARA AI TRADE ANALYTICS</span>
                    </div>
                    <div className="p-5 rounded-xl bg-[#f8f9fa] border border-[#e5e7eb] space-y-3">
                      <div className="text-xs font-mono text-[#6b7280]">AI PROMPT DEMO</div>
                      <p className="text-sm font-semibold text-[#111827] leading-relaxed font-body">
                        {aiTyping || "Mengonfigurasi data analisis..."}
                        <span className="inline-block w-1.5 h-4 bg-[#111827] ml-1 animate-pulse"></span>
                      </p>
                    </div>
                  </div>
                )}

              </div>

              {/* Workspace Window Footer */}
              <div className="bg-white px-5 py-3.5 border-t border-[#e5e7eb] flex items-center justify-between text-xs font-mono text-[#6b7280]">
                <span>Kecepatan Sinkronisasi 0.2s</span>
                <span className="text-[#111827] font-bold">Sistem NSW Bea Cukai</span>
              </div>

            </div>
          </div>

          {/* Column 3 (Right ~15%): Key Benefits & Action Info */}
          <div className="lg:col-span-3 space-y-6 lg:sticky lg:top-32 text-left">
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#111827] font-bold block">{currentMode.kicker}</span>
              <h3 className="text-2xl font-extrabold text-[#111827] font-headline tracking-tight leading-tight">
                {currentMode.headline}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed font-normal max-w-[40ch]">
                {currentMode.desc}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#f3f4f6] space-y-2 shadow-sm">
              <span className="text-[10px] font-mono text-gray-500 block font-bold">GARANSI OUTPUT</span>
              <div className="text-base font-bold text-[#111827] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#111827] text-lg">check</span>
                <span>{currentMode.benefit}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
