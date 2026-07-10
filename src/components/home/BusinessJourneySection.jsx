import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const JOURNEY_SCENES = [
  {
    id: "scene-01",
    num: "SCENE 01",
    tag: "LOCAL BUSINESS",
    headline: "Awal dari setiap perjalanan adalah kualitas produk.",
    desc: "Drone perkebunan kopi arabika gayo dan workshop produksi lokal. Menjaga keaslian cita rasa rempah dan komoditas unggulan Nusantara sebelum melangkah ke panggung dunia.",
    img: "/images/home/ali-mkumbwa-WUG0QcXVh0k-unsplash.jpg",
    overlay: {
      title: "ORIGIN QUALITY DIAGNOSTIC",
      status: "100% Organic Grade A • Altitude 1,400m ASL",
      data: "Kapasitas Produksi: 12 Ton / Bulan"
    }
  },
  {
    id: "scene-02",
    num: "SCENE 02",
    tag: "BRAND IDENTITY",
    headline: "Bangun identitas yang dipercaya pelanggan.",
    desc: "Sesi fotografi profesional produk, perancangan logo standar internasional, dan kurasi kemasan ramah lingkungan yang memancarkan kredibilitas tinggi.",
    img: "/images/home/austin-distel-744oGeqpxPQ-unsplash.jpg",
    overlay: {
      title: "EXANTARA COMMERCE ENGINE",
      status: "Domain Verified • Multi-Language Ready",
      data: "Rasio Konversi Web: +42.8%"
    }
  },
  {
    id: "scene-03",
    num: "SCENE 03",
    tag: "MARKET EXPANSION",
    headline: "Perluas jangkauan tanpa batas wilayah.",
    desc: "Koneksi instan ke jaringan pembeli global. Sinkronisasi pesanan secara real-time melalui TikTok Shop Global, Amazon B2B, dan negosiasi WhatsApp terverifikasi.",
    img: "/images/home/aron-yigin-sNY6B9NsPP8-unsplash.jpg",
    overlay: {
      title: "LIVE OMNICHANNEL FEED",
      status: "150M+ Active Buyer Network",
      data: "Permintaan Baru: 5,000 Pouch (Tokyo Buyer)"
    }
  },
  {
    id: "scene-04",
    num: "SCENE 04",
    tag: "OPERATIONS",
    headline: "Operasional yang lebih efisien.",
    desc: "Fasilitas gudang terotomatisasi, pemindaian barcode pintar, dan kendali stok multi-gudang terintegrasi yang mencegah kelangkaan maupun penumpukan barang.",
    img: "/images/home/chuttersnap-fN603qcEA7g-unsplash.jpg",
    overlay: {
      title: "WAREHOUSE AUTOMATION SYNC",
      status: "Real-Time Inventory Control",
      data: "Akurasi Distribusi: 99.9%"
    }
  },
  {
    id: "scene-05",
    num: "SCENE 05",
    tag: "EXPORT PREPARATION",
    headline: "Persiapkan ekspor dengan lebih percaya diri.",
    desc: "Otomatisasi penyusunan dokumen bea cukai NSW, penentuan kode tarif HS akurat AI, serta verifikasi kelayakan regulasi negara tujuan tanpa hambatan birokrasi.",
    img: "/images/home/dimitri-karastelev-ZH4FUYiaczY-unsplash.jpg",
    overlay: {
      title: "NSW CUSTOMS COMPLIANCE",
      status: "HS Code 0901.21.00 • 0% Tariff Treaty",
      data: "Status Dokumen: 100% Verified & Approved"
    }
  },
  {
    id: "scene-06",
    num: "SCENE 06",
    tag: "GLOBAL TRADE",
    headline: "Hubungkan produk lokal dengan pasar dunia.",
    desc: "Pelayaran kapal kargo kontainer maritim dan kargo udara melintasi samudra. Pelacakan satelit real-time memastikan pesanan tiba di pelabuhan Rotterdam, Hamburg, hingga Osaka.",
    img: "/images/home/lucas-van-oort-fBZOVyF-96w-unsplash.jpg",
    overlay: {
      title: "SATELLITE MARITIME TRACKING",
      status: "Container Vessel #EX-889 in Transit",
      data: "Rute: Tanjung Priok (ID) → Hamburg (DE)"
    }
  },
  {
    id: "scene-07",
    num: "SCENE 07",
    tag: "BUSINESS GROWTH",
    headline: "Pertumbuhan bukan lagi sekadar target, tetapi proses yang terukur.",
    desc: "Arus kas valuta asing mengalir stabil ke rekening usaha Anda. Laporan keuangan eksekutif mencatat ekspansi nyata ke puluhan negara tujuan ekspor baru.",
    img: "/images/home/bernd-dittrich-r1AIp7Vj3Mg-unsplash.jpg",
    overlay: {
      title: "EXECUTIVE FOREIGN EXCHANGE REVENUE",
      status: "Multi-Currency Liquidity Active",
      data: "Akumulasi Ekspor: USD $1,420,500 (+48.5%)"
    }
  }
];

export default function BusinessJourneySection() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const [hoveredScene, setHoveredScene] = useState(null);
  const [liveOrders, setLiveOrders] = useState(1420);

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveOrders(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;

    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top top',
        end: () => `+=${track.scrollWidth * 1.5}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    // 1. Horizontal Scroll across the 7 scenes
    tl.to(track, {
      x: getScrollAmount,
      ease: 'none',
      duration: 8.5
    });

    // 2. Gate transition close
    tl.to('.journey-gate-top', {
      y: 0,
      ease: 'power2.inOut',
      duration: 1.0
    }, '-=0.5');

    tl.to('.journey-gate-bottom', {
      y: 0,
      ease: 'power2.inOut',
      duration: 1.0
    }, '<');

    // 3. Hide journey elements, activate ascension
    tl.to('.journey-top-strip, .journey-bottom-strip, .journey-track', {
      opacity: 0,
      duration: 0.3
    }, '-=0.5');

    tl.to('.national-impact-ascension', {
      opacity: 1,
      pointerEvents: 'auto',
      duration: 0.1
    }, '<');

    // 4. Gates Open
    tl.to('.journey-gate-top', {
      y: '-100%',
      ease: 'power3.inOut',
      duration: 1.2
    }, '+=0.2');

    tl.to('.journey-gate-bottom', {
      y: '100%',
      ease: 'power3.inOut',
      duration: 1.2
    }, '<');

    // 5. Staggered Entrance for National Impact
    tl.fromTo('.ascension-badge', 
      { opacity: 0, scale: 0.8, y: -20 }, 
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'back.out(1.5)' }, 
      '-=0.9'
    )
    .fromTo('.ascension-headline', 
      { opacity: 0, y: 40, clipPath: 'inset(100% 0% 0% 0%)' }, 
      { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.0, ease: 'power3.out' }, 
      '-=0.6'
    )
    .fromTo('.ascension-desc', 
      { opacity: 0, y: 25 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 
      '-=0.7'
    )
    .fromTo('.ascension-card', 
      { opacity: 0, y: 40, scale: 0.9 }, 
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.4)' }, 
      '-=0.6'
    )
    .fromTo('.ascension-btn', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 
      '-=0.4'
    );

  }, { scope: wrapperRef });

  return (
    <section 
      id="perjalanan" 
      ref={wrapperRef} 
      data-theme="dark"
      className="bg-black text-white border-t border-[#1a1a1a] font-body relative pt-20 md:pt-0"
    >
      <div className="h-screen w-full relative overflow-hidden flex items-center">

        {/* Video background loop with extremely low opacity for premium layout */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-10">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/images/home/vecteezy_port-container-train_2987831.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Top Navigation Strip */}
        <div className="journey-top-strip absolute top-20 sm:top-0 left-0 right-0 z-30 bg-gradient-to-b from-black via-black/80 to-transparent pt-4 sm:pt-6 pb-8 px-6 sm:px-12 pointer-events-none flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1 text-left">
            <div className="flex items-center gap-2 font-mono text-[11px] text-white/70 uppercase tracking-[0.25em] font-bold">
              <span className="w-2 h-2 rounded-full bg-white/70"></span>
              <span>Langkah Transformasi Ekspor</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-extrabold tracking-tight text-white font-headline">
              Setiap Produk Memiliki Perjalanan Menuju Pasar Global.
            </h2>
          </div>
          <div className="flex items-center gap-4 font-mono text-xs text-[#6b7280]">
            <span className="hidden md:inline">LIVE GLOBAL ORDERS: <strong className="text-white">{liveOrders}</strong></span>
          </div>
        </div>

        {/* Bottom Guidance Strip */}
        <div className="journey-bottom-strip absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black via-black/80 to-transparent pb-6 pt-8 px-6 sm:px-12 pointer-events-none flex justify-between items-center text-xs font-mono text-[#6b7280]">
          <div className="flex items-center gap-2 text-white font-semibold">
            <span className="material-symbols-outlined text-sm animate-bounce text-white/70">arrow_forward</span>
            <span>Mengulas Proses Pengiriman Global</span>
          </div>
          <p className="hidden lg:block text-[#9ca3af] max-w-xl text-right truncate">
            Exantara mendampingi perjalanan bisnis sejak tahap awal hingga mendukung kesiapan ekspor valuta asing.
          </p>
        </div>

        {/* Horizontal Track */}
        <div 
          ref={trackRef} 
          className="journey-track flex items-center pt-16 sm:pt-0 h-full w-max px-6 sm:px-24 relative z-10 gap-8 sm:gap-32"
        >
          
          {/* Progress SVG Line */}
          <div className="absolute top-1/2 left-12 right-12 h-1 -translate-y-1/2 pointer-events-none z-0">
            <svg className="w-full h-12 overflow-visible" viewBox="0 0 4200 40" fill="none">
              <path 
                className="journey-thin-svg-line"
                d="M 0,20 L 4200,20" 
                stroke="#666" 
                strokeWidth="2" 
                strokeDasharray="4000" 
              />
            </svg>
          </div>

          {/* 7 Documentary Scenes */}
          {JOURNEY_SCENES.map((scene, i) => {
            const isHover = hoveredScene === scene.id;
            return (
              <div
                key={scene.id}
                onMouseEnter={() => setHoveredScene(scene.id)}
                onMouseLeave={() => setHoveredScene(null)}
                className="w-[85vw] sm:w-[580px] md:w-[680px] max-w-[340px] sm:max-w-none h-[55vh] sm:h-[65vh] max-h-[560px] shrink-0 relative z-10 bg-[#111] rounded-3xl overflow-hidden border border-[#333]/60 group cursor-pointer transition-all duration-500 shadow-2xl flex flex-col justify-end p-6 sm:p-10"
              >
                {/* Background Photography */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-[#111]">
                  <img 
                    src={scene.img} 
                    alt={scene.tag}
                    className="doc-img-parallax w-[120%] h-full object-cover object-center opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
                </div>
                
                {/* Scene Marker */}
                <div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-center pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/90 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                      {scene.tag}
                    </span>
                  </div>
                </div>

                {/* Data Overlay Widget */}
                <div className={`absolute top-16 sm:top-20 left-4 right-4 sm:left-auto sm:right-6 z-20 sm:max-w-[300px] p-4 rounded-2xl bg-black/90 border border-[#333] backdrop-blur-md shadow-2xl transition-all duration-500 pointer-events-none ${
                  isHover ? 'opacity-100 translate-y-0 border-white/30' : 'opacity-85 translate-y-1'
                }`}>
                  <div className="flex items-center justify-between pb-2 border-b border-[#333] mb-2 text-[10px] font-mono">
                    <span className="text-white/80 font-bold">{scene.overlay.title}</span>
                    <span className="w-2 h-2 rounded-full bg-white/70"></span>
                  </div>
                  <div className="text-xs font-bold text-white font-headline mb-1">
                    {scene.overlay.status}
                  </div>
                  <div className="text-[11px] font-mono text-[#9ca3af] text-right">
                    {scene.overlay.data}
                  </div>
                </div>

                {/* Bottom Narrative */}
                <div className="relative z-20 space-y-3 sm:space-y-4 max-w-xl text-left pointer-events-none">
                  <div className="w-10 h-0.5 bg-white/60 group-hover:w-20 transition-all duration-500"></div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-headline tracking-tight leading-tight">
                    {scene.headline}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-normal">
                    {scene.desc}
                  </p>
                </div>

                {/* Bottom border glow */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}

          <div className="w-24 shrink-0"></div>

        </div>

        {/* HANGAR GATE TRANSITION */}
        <div className="journey-gate-container absolute inset-0 pointer-events-none z-40 flex flex-col">
          <div className="journey-gate-top w-full h-1/2 bg-white transform -translate-y-full border-b border-[#e5e7eb]"></div>
          <div className="journey-gate-bottom w-full h-1/2 bg-white transform translate-y-full border-t border-[#e5e7eb]"></div>
        </div>

        {/* NATIONAL IMPACT ASCENSION SCREEN */}
        <div className="national-impact-ascension absolute inset-0 z-30 bg-black opacity-0 pointer-events-none flex flex-col justify-start items-center px-6 sm:px-12 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 overflow-y-auto overflow-x-hidden text-center font-body">
          
          {/* Background Image with low opacity */}
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
            <img 
              src="/images/home/michael-descharles-BmMABUWOJbY-unsplash.jpg" 
              className="w-full h-full object-cover scale-105 filter blur-[2px]" 
              alt="National Impact Background" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 md:space-y-6 w-full relative z-10">
            <span className="ascension-badge inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs uppercase tracking-widest mb-2">
              Momentum Transformasi
            </span>
            <h2 className="ascension-headline text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-headline">
              Dari Satu Bisnis Lokal Menjadi <br/>
              <span className="text-[#9ca3af]">
                Dampak Bagi Ribuan UMKM Nusantara.
              </span>
            </h2>

            <p className="ascension-desc text-white/60 text-xs sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
              Ketika satu produk lokal menembus pasar internasional, dampaknya menggerakkan seluruh rantai pasok: petani rempah, pengrajin kemasan, hingga logistik nasional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto pt-2 text-left font-mono">
              <div className="ascension-card p-3.5 sm:p-4 rounded-xl bg-[#111]/90 border border-[#333] space-y-0.5 shadow-xl">
                <span className="text-[10px] sm:text-xs text-[#6b7280] uppercase block">TOTAL EKSPORTIR AKTIF</span>
                <div className="text-xl sm:text-2xl font-extrabold text-white font-headline">12,450+ <span className="text-xs font-normal text-[#9ca3af]">UMKM</span></div>
              </div>
              <div className="ascension-card p-3.5 sm:p-4 rounded-xl bg-[#111]/90 border border-[#333] space-y-0.5 shadow-xl">
                <span className="text-[10px] sm:text-xs text-[#6b7280] uppercase block">AKUMULASI DEVISA VALAS</span>
                <div className="text-xl sm:text-2xl font-extrabold text-white font-headline">USD $84.5M+</div>
              </div>
              <div className="ascension-card p-3.5 sm:p-4 rounded-xl bg-[#111]/90 border border-[#333] space-y-0.5 shadow-xl">
                <span className="text-[10px] sm:text-xs text-[#6b7280] uppercase block">NEGARA TUJUAN EKSPOR</span>
                <div className="text-xl sm:text-2xl font-extrabold text-white font-headline">35+ <span className="text-xs font-normal text-[#6b7280]">Negara</span></div>
              </div>
            </div>

            {/* Button Removed per user request */}
          </div>

          {/* Ambient Background Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]"></div>
        </div>

      </div>
    </section>
  );
}
