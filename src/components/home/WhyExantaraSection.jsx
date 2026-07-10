import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyExantaraSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Phone Mockup Floating Animation (Continuous loop)
    gsap.to('.phone-mockup-1', {
      y: -12,
      rotateZ: 1,
      repeat: -1,
      yoyo: true,
      duration: 3.5,
      ease: 'sine.inOut'
    });

    gsap.to('.phone-mockup-2', {
      y: 12,
      rotateZ: -1,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: 'sine.inOut',
      delay: 0.5
    });

    // Reveal and scale animations
    gsap.fromTo('.mockup-card-left',
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.zigzag-row-1',
          start: 'top 90%',
          toggleActions: 'play none none none',
        }
      }
    );

    gsap.fromTo('.mockup-card-right',
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.zigzag-row-2',
          start: 'top 90%',
          toggleActions: 'play none none none',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="solusi" ref={containerRef} className="py-32 px-6 md:px-12 bg-white text-[#111827] relative z-10 border-t border-[#e5e7eb] font-body">
      <div className="max-w-7xl mx-auto space-y-28">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 border-b border-[#e5e7eb] pb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-[#111827] font-headline">
            Semua Yang Dibutuhkan UMKM <br/>
            <span className="underline decoration-2 underline-offset-8 decoration-[#374151]">Dalam Satu Platform.</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
            Tidak perlu lagi menggunakan banyak software yang terpisah dan rumit. Exantara mengintegrasikan seluruh proses bisnis dari pembuatan toko online multi-bahasa, manajemen stok multi-gudang, hingga kepatuhan ekspor global.
          </p>
        </div>

        {/* Zigzag Row 1: Mockup Left -> Text Right */}
        <div className="zigzag-row-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Workspace Visual Showcase 1 */}
          <div className="mockup-card-left lg:col-span-6 flex justify-center w-full">
            <div className="phone-mockup-1 relative w-full max-w-md min-h-[380px] sm:min-h-[420px] lg:min-h-0 lg:aspect-[4/3] rounded-2xl bg-white border border-[#f3f4f6] p-5 sm:p-6 shadow-sm flex flex-col justify-between overflow-hidden group hover:border-[#111827] transition-all">
              <div className="flex justify-between items-center pb-4 border-b border-[#f3f4f6]">
                <span className="text-xs text-[#374151] font-bold">Commerce Builder</span>
                <span className="px-2.5 py-1 rounded bg-[#f8f9fa] border border-[#d1d5db] text-[#111827] text-[10px] font-bold">Sinkronisasi Otomatis</span>
              </div>

              <div className="my-auto space-y-4 text-left py-4">
                <div className="border-l-2 border-[#111827] pl-5 space-y-2">
                  <div className="flex justify-between text-xs text-gray-600 font-bold">
                    <span>Etalase Digital Multi-Bahasa</span>
                    <span className="text-[#111827]">Aktif</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#111827] font-headline">Katalog Produk Global 24 Negara</h4>
                  <p className="text-xs text-gray-700 leading-relaxed">Menerjemahkan deskripsi dan mengonversi mata uang (USD, JPY, EUR, SGD) sesuai lokasi pembeli secara otomatis.</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1.5 rounded bg-[#f8f9fa] border border-[#e5e7eb] text-[10px] sm:text-xs font-semibold text-gray-700 shadow-sm">1-Click Global Checkout</span>
                  <span className="px-3 py-1.5 rounded bg-[#f8f9fa] border border-[#e5e7eb] text-[10px] sm:text-xs font-semibold text-gray-700 shadow-sm">WhatsApp Commerce</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-[#f3f4f6] text-xs text-gray-600">
                <span>Akurasi Sinkronisasi 100%</span>
                <span className="text-[#111827] font-bold">Konfigurasi Mudah</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#111827] text-white flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[#ffffff] text-2xl">storefront</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#111827] font-headline">
              Bangun Toko & Etalase Ekspor Dalam Hitungan Menit
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl">
              Tanpa perlu memahami koding atau menyewa developer mahal. Platform kami merancang etalase digital resmi berstandar internasional yang dioptimalkan untuk rasio konversi tinggi di pasar domestik maupun global.
            </p>
            <ul className="space-y-3.5 text-sm text-[#1f2937] font-semibold font-body">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#374151] text-lg font-bold">check</span>
                <span>Dukungan 24+ bahasa dunia otomatis oleh AI Translator</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#374151] text-lg font-bold">check</span>
                <span>Konversi valuta asing real-time dengan kurs valuta terbaik</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#374151] text-lg font-bold">check</span>
                <span>Desain responsif mobile-first berkecepatan tinggi</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Zigzag Row 2: Text Left -> Mockup Right */}
        <div className="zigzag-row-2 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12 border-t border-[#e5e7eb]">
          
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
            <div className="w-12 h-12 rounded-xl bg-[#374151] text-white flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[#ffffff] text-2xl">local_shipping</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#111827] font-headline">
              Satu Jaringan Logistik & Bea Cukai Global NSW
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl">
              Lupakan kerumitan birokrasi dokumen ekspor manual. Exantara langsung terhubung dengan gerbang bea cukai National Single Window (NSW) dan kurir maritim internasional untuk menghasilkan invoice dan HS Code akurat.
            </p>
            <ul className="space-y-3.5 text-sm text-[#1f2937] font-semibold font-body">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#374151] text-lg font-bold">check</span>
                <span>Otomatisasi pembuatan HS Code & Commercial Invoice PEB NSW</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#374151] text-lg font-bold">check</span>
                <span>Integrasi langsung ke DHL, FedEx, Maersk, & BUMN Logistik</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#374151] text-lg font-bold">check</span>
                <span>Pelacakan satelit kargo maritim & udara secara real-time</span>
              </li>
            </ul>
          </div>

          {/* Workspace Visual Showcase 2 */}
          <div className="mockup-card-right lg:col-span-6 flex justify-center order-1 lg:order-2 w-full">
            <div className="phone-mockup-2 relative w-full max-w-md min-h-[380px] sm:min-h-[420px] lg:min-h-0 lg:aspect-[4/3] rounded-2xl bg-white border border-[#f3f4f6] p-5 sm:p-6 shadow-sm flex flex-col justify-between overflow-hidden group hover:border-[#374151] transition-all">
              <div className="flex justify-between items-center pb-4 border-b border-[#f3f4f6]">
                <span className="text-xs text-[#374151] font-bold">Export Builder</span>
                <span className="px-2.5 py-1 rounded bg-[#f8f9fa] border border-[#d1d5db] text-[#111827] text-[10px] font-bold">Verifikasi Bea Cukai</span>
              </div>

              <div className="my-auto space-y-4 text-left py-4 w-full">
                <div className="border-l-2 border-[#374151] pl-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#111827] text-white flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xl">directions_boat</span>
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-[#111827] font-headline truncate">Ocean Container</h4>
                      <span className="text-[10px] sm:text-xs text-gray-600 block truncate">Tanjung Priok (ID) → Rotterdam (NL)</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#374151] h-full w-[72%] animate-pulse"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-700 font-semibold">
                    <span>Status: In Transit</span>
                    <span className="text-[#374151] font-bold">ETA: 14 Hari</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-[#f3f4f6] text-xs text-gray-600">
                <span>Sistem Bea Cukai Terintegrasi</span>
                <span className="text-[#111827] font-bold">100% Otomatis</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
