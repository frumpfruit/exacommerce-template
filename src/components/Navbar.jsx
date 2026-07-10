import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import ScrollProgress from './ui/ScrollProgress';

const MEGAMENU_DATA = {
  mengapa: {
    title: "Mengapa Exantara",
    columns: [
      {
        title: "Keunggulan Core",
        links: [
          { title: "Ekosistem Terintegrasi", desc: "Kelola seluruh operasional ekspor dari satu hub tunggal.", to: "/#tentang" },
          { title: "Sertifikasi Mudah", desc: "Penyusunan HS Code & Bea Cukai terautomasi NSW.", to: "/#perjalanan" },
          { title: "Skala Global", desc: "Jaringan logistik multi-moda menjangkau 35+ negara.", to: "/#dampak" }
        ]
      },
      {
        title: "Dukungan & Komunitas",
        links: [
          { title: "Advisor Board", desc: "Konsultasi tatap muka dengan dewan pengawas perdagangan.", to: "/#perusahaan" },
          { title: "Peta Dampak Nasional", desc: "Lihat kontribusi devisa riil dari ribuan UMKM mitra.", to: "/#dampak" }
        ]
      }
    ],
    promo: {
      badge: "EXECUTIVE CASE",
      title: "Exantara Trade Intelligence Report",
      desc: "Laporan analitik ekspor nasional kuartal terbaru. Analisis pasar Uni Eropa dan Asia Timur.",
      cta: "Baca Report ➔",
      to: "/#intelijen"
    }
  },
  produk: {
    title: "Produk Kami",
    columns: [
      {
        title: "Platform Utama",
        links: [
          { title: "Commerce Builder", desc: "Toko online global multi-bahasa teroptimasi SEO.", to: "/#fitur" },
          { title: "Market Builder", desc: "Integrasi marketplace TikTok Shop Global & Amazon B2B.", to: "/#fitur" },
          { title: "Export Builder", desc: "Otomasi packing list, booking container, & freight forwarding.", to: "/#fitur" }
        ]
      },
      {
        title: "Analitik & Intelijen",
        links: [
          { title: "Smart Dashboard", desc: "Visualisasi devisa, omzet global, & status pengiriman real-time.", to: "/#intelijen" },
          { title: "AI Trade Copilot", desc: "Rekomendasi negara tujuan ekspor potensial berbasis data AI.", to: "/#intelijen" }
        ]
      }
    ],
    promo: {
      badge: "FREE TRIAL",
      title: "Minta Konsultasi Gratis",
      desc: "Dapatkan akses penuh ke fitur ekspor berstandar enterprise tanpa komitmen kartu kredit.",
      cta: "Hubungi Kami ➔",
      to: "https://wa.me/6282337123533?text=Halo%20Exantara,%20saya%20tertarik%20dengan%20layanan%20Anda."
    }
  }
};

const SIMPLE_NAV_ITEMS = [
  { key: 'template', to: '/tema', label: 'Template Website Kami' }
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null); // 'mengapa' | 'produk' | null
  const [activeDropdown, setActiveDropdown] = useState(null); // 'mengapa' | 'produk' | null
  const [timeoutId, setTimeoutId] = useState(null);
  
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      
      // On the homepage and tema page, it's dark (transparent) only at the very top.
      if (location.pathname === '/' || location.pathname === '/tema') {
        setIsDarkTheme(window.scrollY <= 30);
      } else {
        setIsDarkTheme(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle hover triggers with transition delays
  const handleMouseEnter = (menu) => {
    if (timeoutId) clearTimeout(timeoutId);
    
    if (activeDropdown && activeDropdown !== menu) {
      // Close the current dropdown first to let it animate out, then open the new one
      setActiveDropdown(null);
      const id = setTimeout(() => {
        setActiveDropdown(menu);
      }, 200); // 200ms delay for closing tirai
      setTimeoutId(id);
    } else {
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (timeoutId) clearTimeout(timeoutId);
    const id = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
    setTimeoutId(id);
  };

  // Scrolled/Solid state includes active dropdowns
  const isSolid = scrolled || mobileOpen || activeDropdown !== null || !(location.pathname === '/' || location.pathname === '/tema');

  return (
    <>
      <ScrollProgress color="#374151" height={2} />
      <div className={`fixed top-0 left-0 w-full flex justify-center z-[99999] pointer-events-none transition-all duration-700 ease-in-out ${
        scrolled ? 'pt-4 px-4 md:px-8' : 'pt-0 px-0'
      }`}>
        <header
          className={`pointer-events-auto w-full transition-all duration-700 ease-in-out font-body ${
            scrolled 
              ? 'max-w-7xl rounded-2xl border'
              : 'max-w-full rounded-none border-b'
          } ${
            isSolid 
              ? 'bg-white/90 backdrop-blur-xl shadow-lg border-[#e5e7eb] text-[#111827]'
              : 'bg-transparent border-transparent text-white'
          }`}
        >
        <nav className="flex justify-between items-center w-full px-5 py-4 relative z-50">
          
          {/* Brand Logo */}
          <div className="flex-1 flex justify-start">
            <Link to="/" className="text-xl font-headline font-extrabold tracking-tight uppercase flex items-center gap-2">
              <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-black text-base transition-colors ${
                isSolid && !isDarkTheme ? 'bg-[#111827] text-white' : 'bg-white text-[#111827]'
              }`}>
                E
              </span>
              <span>Exantara</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex gap-4 xl:gap-8 items-center justify-center h-full">
            
            {/* Mega Menu Triggers Hidden for Production Hold 
            <div
              className={`relative group py-2 font-body text-xs uppercase tracking-[0.12em] xl:tracking-[0.18em] font-bold transition-colors cursor-pointer flex items-center gap-1 ${
                isSolid && !isDarkTheme ? 'text-[#4b5563] hover:text-[#111827]' : 'text-white/80 hover:text-white'
              }`}
              onMouseEnter={() => handleMouseEnter('mengapa')}
            >
              <span>Mengapa Exantara</span>
              <span className="material-symbols-outlined text-[14px]">keyboard_arrow_down</span>
            </div>
            
            <div
              className={`relative group py-2 font-body text-xs uppercase tracking-[0.12em] xl:tracking-[0.18em] font-bold transition-colors cursor-pointer flex items-center gap-1 ${
                isSolid && !isDarkTheme ? 'text-[#4b5563] hover:text-[#111827]' : 'text-white/80 hover:text-white'
              }`}
              onMouseEnter={() => handleMouseEnter('produk')}
            >
              <span>Produk</span>
              <span className="material-symbols-outlined text-[14px]">keyboard_arrow_down</span>
            </div>
            */}

            {/* Simple Menu Items */}
            {SIMPLE_NAV_ITEMS.map(({ key, to, label }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={key}
                  to={to}
                  className={`relative group py-2 font-body text-xs uppercase tracking-[0.12em] xl:tracking-[0.18em] font-bold transition-colors ${
                    isSolid && !isDarkTheme
                      ? (isActive ? 'text-[#374151]' : 'text-[#4b5563] hover:text-[#111827]')
                      : (isActive ? 'text-white font-black' : 'text-white/80 hover:text-white')
                  }`}
                >
                  <span>{label}</span>
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full ${
                    isSolid && !isDarkTheme ? 'bg-[#374151]' : 'bg-white'
                  }`}></span>
                </Link>
              );
            })}

          </div>

          <div className="flex-1 hidden lg:flex items-center justify-end gap-4 xl:gap-6">
            <a 
              href="https://exantara.com/sign-in" 
              className={`font-body text-xs uppercase tracking-[0.15em] xl:tracking-[0.2em] font-bold transition-all ${
                isSolid && !isDarkTheme ? 'text-[#111827] hover:text-[#374151]' : 'text-white hover:opacity-80'
              }`}
            >
              Masuk
            </a>
            <a
              href="https://exantara.com/sign-up"
              className={`font-body text-xs uppercase tracking-[0.15em] xl:tracking-[0.2em] px-5 xl:px-7 py-3 font-bold rounded transition-all shadow-sm ${
                isSolid && !isDarkTheme 
                  ? 'bg-[#111827] text-white hover:bg-[#374151]' 
                  : 'bg-white text-[#111827] hover:bg-white/90'
              }`}
            >
              Daftar
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex-1 flex justify-end lg:hidden">
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </nav>

        {/* Desktop Mega Menu Dropdown Sheets */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              onMouseEnter={() => handleMouseEnter(activeDropdown)}
              onMouseLeave={handleMouseLeave}
              className={`absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[950px] max-w-[95vw] rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border z-40 overflow-hidden transition-colors duration-300 ${
                isDarkTheme 
                  ? 'bg-[#0b0f19]/95 backdrop-blur-2xl border-white/10 text-white' 
                  : 'bg-white/95 backdrop-blur-2xl text-[#111827] border-[#e5e7eb]'
              }`}
            >
              {activeDropdown === 'mengapa' ? (
                <div className="p-8 grid grid-cols-12 gap-6 text-left">
                  {/* Left Section: 3 Featured Cards (Col-span 9) */}
                  <div className="col-span-9 grid grid-cols-3 gap-6">
                    
                    {/* Card 1 */}
                    <a 
                      href="#daftar" 
                      onClick={() => setActiveDropdown(null)} 
                      className="group flex flex-col space-y-4 rounded-2xl overflow-hidden transition-all duration-300"
                    >
                      <div className="w-full aspect-[16/10] overflow-hidden rounded-xl bg-slate-800 relative">
                        <img 
                          src="/images/home/aron-yigin-sNY6B9NsPP8-unsplash.jpg" 
                          alt="Mulai dengan cepat" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                      </div>
                      <div className="space-y-1 px-1">
                        <h4 className={`text-sm font-bold group-hover:underline leading-tight ${isDarkTheme ? 'text-white' : 'text-[#111827]'}`}>
                          Mulai dengan cepat
                        </h4>
                        <p className={`text-[11px] leading-normal font-normal ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>
                          Siapkan etalase digital global B2B Anda dalam hitungan hari.
                        </p>
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a 
                      href="#ekosistem" 
                      onClick={() => setActiveDropdown(null)} 
                      className="group flex flex-col space-y-4 rounded-2xl overflow-hidden transition-all duration-300"
                    >
                      <div className="w-full aspect-[16/10] overflow-hidden rounded-xl bg-slate-800 relative">
                        <img 
                          src="/images/home/dimitri-karastelev-ZH4FUYiaczY-unsplash.jpg" 
                          alt="Ekosistem Terintegrasi" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                      </div>
                      <div className="space-y-1 px-1">
                        <h4 className={`text-sm font-bold group-hover:underline leading-tight ${isDarkTheme ? 'text-white' : 'text-[#111827]'}`}>
                          Beralih ke Exantara
                        </h4>
                        <p className={`text-[11px] leading-normal font-normal ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>
                          Dari katalog multi-bahasa hingga sinkronisasi logistik maritim.
                        </p>
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a 
                      href="#perjalanan" 
                      onClick={() => setActiveDropdown(null)} 
                      className="group flex flex-col space-y-4 rounded-2xl overflow-hidden transition-all duration-300"
                    >
                      <div className="w-full aspect-[16/10] overflow-hidden rounded-xl bg-slate-800 relative">
                        <img 
                          src="/images/home/hobi-industri-CBMmY0UVPNg-unsplash.jpg" 
                          alt="Dipercaya Merek Enterprise" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                      </div>
                      <div className="space-y-1 px-1">
                        <h4 className={`text-sm font-bold group-hover:underline leading-tight ${isDarkTheme ? 'text-white' : 'text-[#111827]'}`}>
                          Dipercaya Merek Enterprise
                        </h4>
                        <p className={`text-[11px] leading-normal font-normal ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>
                          Otomatisasi dokumen kepabeanan terintegrasi langsung Bea Cukai RI.
                        </p>
                      </div>
                    </a>

                  </div>

                  {/* Right Section: Integrations Sidebar (Col-span 3) */}
                  <div className={`col-span-3 border-l pl-6 space-y-6 flex flex-col justify-center ${isDarkTheme ? 'border-white/10' : 'border-gray-200'}`}>
                    
                    <h5 className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-2 ${isDarkTheme ? 'text-white/40' : 'text-gray-400'}`}>
                      Terintegrasi di Setiap Toko
                    </h5>

                    <div className="space-y-3">
                      
                      {/* Item 1: Exa Pay */}
                      <a 
                        href="#fitur" 
                        onClick={() => setActiveDropdown(null)} 
                        className={`group flex items-start gap-4 p-2 rounded-xl transition-colors text-left ${isDarkTheme ? 'hover:bg-white/5' : 'hover:bg-gray-50'}`}
                      >
                        <div className="w-16 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-md shrink-0">
                          <span className="font-mono font-black text-[10px] text-white tracking-tighter">EXA PAY</span>
                        </div>
                        <div className="space-y-0.5">
                          <h6 className={`text-xs font-bold group-hover:underline transition-colors leading-tight ${isDarkTheme ? 'text-white' : 'text-[#111827] group-hover:text-slate-900'}`}>
                            Checkout terbaik di dunia
                          </h6>
                          <p className={`text-[10px] leading-snug ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>
                            Terbukti menghasilkan konversi pembayaran valas yang lebih baik.
                          </p>
                        </div>
                      </a>

                      {/* Item 2: Trade Intelligence AI */}
                      <a 
                        href="#intelijen" 
                        onClick={() => setActiveDropdown(null)} 
                        className={`group flex items-start gap-4 p-2 rounded-xl transition-colors text-left ${isDarkTheme ? 'hover:bg-white/5' : 'hover:bg-gray-50'}`}
                      >
                        <div className="w-16 h-10 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] flex items-center justify-center shadow-md shrink-0 relative overflow-hidden">
                          <span className="material-symbols-outlined text-white text-lg relative z-10">smart_toy</span>
                          <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                        <div className="space-y-0.5">
                          <h6 className={`text-xs font-bold transition-colors leading-tight ${isDarkTheme ? 'text-white group-hover:text-pink-400 group-hover:underline' : 'text-[#111827] group-hover:text-pink-600 group-hover:underline'}`}>
                            Sidekick AI
                          </h6>
                          <p className={`text-[10px] leading-snug ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>
                            Asisten AI Anda yang ahli dalam regulasi ekspor global.
                          </p>
                        </div>
                      </a>

                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-8 grid grid-cols-12 gap-6 text-left">
                  {/* Mega Menu Left Column Links */}
                  <div className="col-span-8 grid grid-cols-2 gap-8">
                    {MEGAMENU_DATA[activeDropdown].columns.map((col, idx) => (
                      <div key={idx} className="space-y-4">
                        <h4 className={`text-[11px] font-mono uppercase tracking-[0.2em] font-bold border-b pb-2 ${
                          isDarkTheme ? 'text-white/40 border-white/10' : 'text-[#9ca3af] border-[#f3f4f6]'
                        }`}>
                          {col.title}
                        </h4>
                        <div className="space-y-3">
                          {col.links.map((link, lIdx) => (
                            <a 
                              key={lIdx} 
                              href={link.to}
                              onClick={() => setActiveDropdown(null)}
                              className={`block group/link p-3 rounded-2xl transition-all duration-300 ${
                                isDarkTheme ? 'hover:bg-white/5' : 'hover:bg-[#f8f9fa]'
                              }`}
                            >
                              <div className={`text-xs font-bold flex items-center gap-1 ${
                                isDarkTheme ? 'text-white group-hover/link:text-white/85' : 'text-[#111827] group-hover/link:text-[#000000]'
                              }`}>
                                <span>{link.title}</span>
                                <span className="material-symbols-outlined text-xs opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300">arrow_forward</span>
                              </div>
                              <p className={`text-[11px] leading-normal font-normal mt-0.5 ${
                                isDarkTheme ? 'text-white/60' : 'text-[#6b7280]'
                              }`}>
                                {link.desc}
                              </p>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mega Menu Right Promotion Card */}
                  <div className="col-span-4 border-l border-[#e5e7eb] pl-8 flex">
                    <a 
                      href={MEGAMENU_DATA[activeDropdown].promo.to}
                      onClick={() => setActiveDropdown(null)}
                      className={`w-full rounded-2xl p-6 flex flex-col justify-between transition-all group/promo shadow-lg relative overflow-hidden ${
                        isDarkTheme 
                          ? 'bg-white text-black hover:bg-white/95' 
                          : 'bg-[#000000] text-white hover:bg-[#111111]'
                      }`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06)_0%,transparent_70%)]"></div>
                      <div className="space-y-4 relative z-10">
                        <span className={`inline-block px-2.5 py-1 rounded font-mono text-[9px] uppercase tracking-widest font-bold ${
                          isDarkTheme ? 'bg-black/10 text-black' : 'bg-white/10 text-white'
                        }`}>
                          {MEGAMENU_DATA[activeDropdown].promo.badge}
                        </span>
                        <h5 className={`text-sm font-extrabold font-headline leading-tight ${
                          isDarkTheme ? 'text-black' : 'text-white/95'
                        }`}>
                          {MEGAMENU_DATA[activeDropdown].promo.title}
                        </h5>
                        <p className={`text-[11px] leading-relaxed font-normal ${
                          isDarkTheme ? 'text-black/70' : 'text-[#9ca3b8]'
                        }`}>
                          {MEGAMENU_DATA[activeDropdown].promo.desc}
                        </p>
                      </div>
                      <div className={`text-[10px] font-mono uppercase tracking-widest font-bold transition-colors relative z-10 pt-6 flex items-center gap-1.5 ${
                        isDarkTheme ? 'text-black/80 group-hover/promo:text-black' : 'text-[#d1d5db] group-hover/promo:text-white'
                      }`}>
                        <span>{MEGAMENU_DATA[activeDropdown].promo.cta}</span>
                      </div>
                    </a>
                  </div>

                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Slide-over Drawer Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              data-lenis-prevent={true}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
              className="fixed inset-0 z-[100000] bg-[#0b0f19] text-white flex flex-col lg:hidden w-screen h-[100dvh]"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center px-6 py-5 border-b border-white/10 shrink-0">
                <Link to="/" onClick={() => { setMobileOpen(false); setMobileSubmenu(null); }} className="text-xl font-headline font-extrabold tracking-tight uppercase flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-black text-base bg-white text-[#0b0f19]">
                    E
                  </span>
                  <span>Exantara</span>
                </Link>
                <button 
                  onClick={() => { setMobileOpen(false); setMobileSubmenu(null); }}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors focus:outline-none"
                  aria-label="Close Menu"
                >
                  <span className="material-symbols-outlined text-white text-xl">close</span>
                </button>
              </div>

              {/* Drawer Body Area with Sliding Panels */}
              <div className="flex-1 relative overflow-hidden">
                
                {/* Panel 1: Main Menu level */}
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: mobileSubmenu === null ? 0 : '-100%' }}
                  transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                  className="absolute inset-0 px-6 py-6 pb-32 overflow-y-auto text-left space-y-2 flex flex-col"
                  data-lenis-prevent={true}
                >
                  {/* Mega Menu triggers hidden for production
                  <button
                    onClick={() => setMobileSubmenu('mengapa')}
                    className="w-full text-left py-4 border-b border-white/10 flex items-center justify-between text-base font-bold font-headline tracking-wide hover:text-white/80 transition-colors"
                  >
                    <span>Mengapa Exantara</span>
                    <span className="material-symbols-outlined text-sm text-gray-400">arrow_forward</span>
                  </button>

                  <button
                    onClick={() => setMobileSubmenu('produk')}
                    className="w-full text-left py-4 border-b border-white/10 flex items-center justify-between text-base font-bold font-headline tracking-wide hover:text-white/80 transition-colors"
                  >
                    <span>Produk</span>
                    <span className="material-symbols-outlined text-sm text-gray-400">arrow_forward</span>
                  </button>
                  */}

                  {SIMPLE_NAV_ITEMS.map(({ key, to, label }) => (
                    <a
                      key={key}
                      href={to}
                      onClick={() => { setMobileOpen(false); setMobileSubmenu(null); }}
                      className="w-full text-left py-4 border-b border-white/10 block text-base font-bold font-headline tracking-wide hover:text-white/80 transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                </motion.div>

                {/* Panel 2: Mengapa Exantara Nested Submenu */}
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: mobileSubmenu === 'mengapa' ? 0 : '100%' }}
                  transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                  className="absolute inset-0 px-6 py-6 pb-32 overflow-y-auto text-left space-y-6"
                  data-lenis-prevent={true}
                >
                  <button
                    onClick={() => setMobileSubmenu(null)}
                    className="flex items-center gap-1.5 text-xs font-mono tracking-widest text-gray-400 mb-6 hover:text-white transition-colors cursor-pointer focus:outline-none"
                  >
                    <span className="material-symbols-outlined text-xs">arrow_back</span>
                    <span>Kembali</span>
                  </button>

                  {/* Visual cards */}
                  <div className="space-y-5">
                    {/* Card 1 */}
                    <a 
                      href="#daftar" 
                      onClick={() => { setMobileOpen(false); setMobileSubmenu(null); }}
                      className="group flex items-start gap-4 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="w-16 aspect-square overflow-hidden rounded-lg bg-slate-800 relative shrink-0">
                        <img 
                          src="/images/home/aron-yigin-sNY6B9NsPP8-unsplash.jpg" 
                          alt="Mulai dengan cepat" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-0.5 text-left">
                        <h4 className="text-xs font-bold text-white group-hover:underline leading-tight">
                          Mulai dengan cepat
                        </h4>
                        <p className="text-[10px] leading-normal font-normal text-gray-400">
                          Siapkan etalase digital B2B Anda dalam hitungan hari.
                        </p>
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a 
                      href="#ekosistem" 
                      onClick={() => { setMobileOpen(false); setMobileSubmenu(null); }}
                      className="group flex items-start gap-4 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="w-16 aspect-square overflow-hidden rounded-lg bg-slate-800 relative shrink-0">
                        <img 
                          src="/images/home/dimitri-karastelev-ZH4FUYiaczY-unsplash.jpg" 
                          alt="Ekosistem Terintegrasi" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-0.5 text-left">
                        <h4 className="text-xs font-bold text-white group-hover:underline leading-tight">
                          Beralih ke Exantara
                        </h4>
                        <p className="text-[10px] leading-normal font-normal text-gray-400">
                          Dari katalog multi-bahasa hingga sinkronisasi logistik maritim.
                        </p>
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a 
                      href="#perjalanan" 
                      onClick={() => { setMobileOpen(false); setMobileSubmenu(null); }}
                      className="group flex items-start gap-4 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="w-16 aspect-square overflow-hidden rounded-lg bg-slate-800 relative shrink-0">
                        <img 
                          src="/images/home/hobi-industri-CBMmY0UVPNg-unsplash.jpg" 
                          alt="Dipercaya Merek Enterprise" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-0.5 text-left">
                        <h4 className="text-xs font-bold text-white group-hover:underline leading-tight">
                          Dipercaya Merek Enterprise
                        </h4>
                        <p className="text-[10px] leading-normal font-normal text-gray-400">
                          Otomatisasi dokumen kepabeanan terintegrasi langsung Bea Cukai RI.
                        </p>
                      </div>
                    </a>
                  </div>

                  {/* Terintegrasi Section */}
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <h5 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/50 px-1">
                      Terintegrasi di Setiap Toko
                    </h5>
                    <div className="grid grid-cols-1 gap-3">
                      
                      {/* Exa Pay */}
                      <a 
                        href="#fitur" 
                        onClick={() => { setMobileOpen(false); setMobileSubmenu(null); }}
                        className="group flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left"
                      >
                        <div className="w-14 h-9 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-md shrink-0">
                          <span className="font-mono font-black text-[9px] text-white tracking-tighter">EXA PAY</span>
                        </div>
                        <div className="space-y-0.5">
                          <h6 className="text-xs font-bold text-white group-hover:underline transition-colors leading-tight">
                            Checkout terbaik di dunia
                          </h6>
                          <p className="text-[10px] leading-snug text-gray-400">
                            Terbukti menghasilkan konversi pembayaran valas yang lebih baik.
                          </p>
                        </div>
                      </a>

                      {/* Sidekick AI */}
                      <a 
                        href="#intelijen" 
                        onClick={() => { setMobileOpen(false); setMobileSubmenu(null); }}
                        className="group flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left"
                      >
                        <div className="w-14 h-9 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] flex items-center justify-center shadow-md shrink-0 overflow-hidden">
                          <span className="material-symbols-outlined text-white text-base">smart_toy</span>
                        </div>
                        <div className="space-y-0.5">
                          <h6 className="text-xs font-bold text-white group-hover:underline transition-colors leading-tight">
                            Sidekick AI
                          </h6>
                          <p className="text-[10px] leading-snug text-gray-400">
                            Asisten AI Anda yang ahli dalam regulasi ekspor global.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Panel 3: Produk Nested Submenu */}
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: mobileSubmenu === 'produk' ? 0 : '100%' }}
                  transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                  className="absolute inset-0 px-6 py-6 pb-32 overflow-y-auto text-left space-y-6"
                  data-lenis-prevent={true}
                >
                  <button
                    onClick={() => setMobileSubmenu(null)}
                    className="flex items-center gap-1.5 text-xs font-mono tracking-widest text-gray-400 mb-6 hover:text-white transition-colors cursor-pointer focus:outline-none"
                  >
                    <span className="material-symbols-outlined text-xs">arrow_back</span>
                    <span>Kembali</span>
                  </button>

                  <div className="space-y-4">
                    {MEGAMENU_DATA.produk.columns.flatMap(c => c.links).map((link, idx) => (
                      <a
                        key={idx}
                        href={link.to}
                        onClick={() => { setMobileOpen(false); setMobileSubmenu(null); }}
                        className="group block p-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-left"
                      >
                        <h4 className="text-xs font-bold text-white group-hover:underline transition-colors">
                          {link.title}
                        </h4>
                        <p className="text-[10px] leading-snug text-gray-400 mt-1">
                          {link.desc}
                        </p>
                      </a>
                    ))}
                  </div>

                  {/* Promotion card */}
                  <div className="pt-4 border-t border-white/10">
                    <a 
                      href="https://wa.me/6282337123533?text=Halo%20Exantara,%20saya%20tertarik%20dengan%20layanan%20Anda."
                      target="_blank" rel="noopener noreferrer"
                      onClick={() => { setMobileOpen(false); setMobileSubmenu(null); }}
                      className="block rounded-xl p-5 bg-white text-black hover:bg-white/95 transition-all text-left shadow-lg relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.04)_0%,transparent_70%)]"></div>
                      <div className="space-y-3 relative z-10">
                        <span className="inline-block px-2 py-0.5 rounded font-mono text-[8px] uppercase tracking-widest font-bold bg-black/10 text-black">
                          FREE TRIAL
                        </span>
                        <h5 className="text-xs font-extrabold leading-tight text-black">
                          Minta Konsultasi Gratis
                        </h5>
                        <p className="text-[10px] leading-normal font-normal text-black/70">
                          Dapatkan akses penuh ke fitur ekspor berstandar enterprise tanpa kartu kredit.
                        </p>
                        <div className="text-[9px] font-mono uppercase tracking-widest font-bold text-black pt-2">
                          Hubungi Kami ➔
                        </div>
                      </div>
                    </a>
                  </div>
                </motion.div>

              </div>

              {/* Fixed Bottom Action Buttons */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/95 to-transparent shrink-0 z-50 flex gap-4 pt-10 border-t border-white/5">
                <a 
                  href="#login" 
                  onClick={() => { setMobileOpen(false); setMobileSubmenu(null); }}
                  className="flex-1 py-3 text-center rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/5 transition-colors"
                >
                  Login
                </a>
                <a 
                  href="https://wa.me/6282337123533?text=Halo%20Exantara,%20saya%20tertarik%20dengan%20layanan%20Anda."
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => { setMobileOpen(false); setMobileSubmenu(null); }}
                  className="flex-1 py-3 text-center rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-gray-100 transition-all shadow-md flex items-center justify-center"
                >
                  Minta Konsultasi
                </a>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
        </header>
      </div>
    </>
  );
}
