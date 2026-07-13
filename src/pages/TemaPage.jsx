import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const TEMPLATES = [
  { 
    id: 'retail', 
    title: 'Retail & Online Store (HAVEN)', 
    category: 'E-commerce', 
    img: '/mockup/HAVEN DESK.png', 
    desc: 'Template toko online furnitur mewah (HAVEN) dengan katalog premium, keranjang belanja, proses konsultasi desain kustom, dan ulasan estetika.' 
  },
  { 
    id: 'distribution', 
    title: 'Distribution & Wholesale (NEXUS)', 
    category: 'E-commerce', 
    img: '/mockup/NEXUS DESK.png', 
    desc: 'Platform e-commerce B2B (NEXUS) untuk distributor pengemasan, alat keselamatan SNI, dan logistik industri dengan fitur Request for Quote (RFQ).' 
  },
  { 
    id: 'coffee', 
    title: 'Premium Coffee Exporter (KOPITERA)', 
    category: 'Landing Page', 
    img: '/mockup/KOPITERA DESK.png', 
    desc: 'Landing page eksportir biji kopi hijau pilihan Nusantara (KOPITERA) untuk roastery global lengkap dengan profil rasa origin dan detail ketertelusuran.' 
  },
  { 
    id: 'roastery', 
    title: 'Roastery & Specialty Coffee (ELITE BREW)', 
    category: 'Landing Page', 
    img: '/mockup/ELITE BRE DESK.png', 
    desc: 'Website modern specialty coffee roastery (ELITE BREW) yang menampilkan aneka mesin pembuat kopi (brewers), pods kopi, aksesoris, dan paket bundel.' 
  },
  { 
    id: 'textile', 
    title: 'Textile Global (Silk & Stone)', 
    category: 'Corporate', 
    img: '/mockup/SILK DESK.png', 
    desc: 'Katalog ekspor B2B kain tenun warisan budaya (Silk & Stone) yang menjembatani karya perajin tradisional dengan logistik pengiriman internasional.' 
  },
  { 
    id: 'kokitopia', 
    title: 'Kokitopia (Goldfish Store)', 
    category: 'E-commerce', 
    img: '/mockup/KOKITOPIA ENTIRE PAGE DESK.png', 
    desc: 'Website e-commerce spesialis ikan hias koki / goldfish premium (Kokitopia) dengan galeri ikan pilihan, tips perawatan maskoki, dan sistem pemesanan langsung.' , 
    external: true, 
    url: 'https://kokitopia.com' 
  },
  { 
    id: 'spjteak', 
    title: 'SPJ Teak Furniture', 
    category: 'Corporate', 
    img: '/mockup/SPJ DESK.png', 
    desc: 'Katalog produk eksportir mebel kayu jati premium Jepara (SPJ Teak Furniture) untuk kebutuhan ritel furnitur internasional dan dekorasi indoor-outdoor.', 
    external: true, 
    url: 'https://spjteakfurniture.com' 
  }
];

const FILTERS = ['All', 'Landing Page', 'E-commerce', 'Corporate', 'Portfolio', 'SaaS', 'Content'];

export default function TemaPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Make sure page starts at top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = TEMPLATES.filter((t) => {
    const matchCat = activeFilter === 'All' || t.category === activeFilter;
    const matchSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        t.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="font-body bg-[#0a0a0a] min-h-screen text-white selection:bg-white/20">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-20">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white font-mono text-xs rounded-full mb-6 border border-white/20">
              RILIS TERBARU SETIAP MINGGU
            </span>
            <h1 className="font-headline text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto tracking-tight">
              Template Premium untuk <span className="text-gray-400">Pahlawan Ekspor</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Kit UI siap produksi, boilerplate full-stack, dan komponen minimalis yang dibuat untuk mengangkasa di pasar global.
            </p>
            
            <div className="max-w-xl mx-auto relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                className="w-full pl-12 pr-4 py-4 bg-[#111] border border-gray-800 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent transition-all shadow-sm text-white placeholder-gray-500" 
                placeholder="Cari template (mis. 'E-commerce', 'Portfolio')" 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-3 inset-y-0 flex items-center">
                <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-mono text-gray-500 border border-gray-800 rounded bg-black">CMD + K</kbd>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="pb-16 border-b border-gray-900">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {FILTERS.map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-6 py-2 rounded-full font-medium transition-all shadow-sm ${
                    activeFilter === tab 
                      ? 'bg-white text-black' 
                      : 'bg-[#111] text-gray-400 hover:bg-[#222] border border-gray-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Template Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filtered.map((tpl) => (
                  <motion.div 
                    key={tpl.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-[#111] border border-gray-800 hover:border-gray-600 rounded-xl overflow-hidden transition-all duration-300"
                  >
                    <div className="w-full bg-[#1a1a1a] relative overflow-hidden" style={{ height: '220px' }}>
                      <img
                        src={tpl.img}
                        alt={tpl.title}
                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                        {tpl.external ? (
                          <a href={tpl.url} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-2 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
                            Kunjungi Website
                          </a>
                        ) : (
                          <Link to={`/${tpl.id}`} className="bg-white text-black px-6 py-2 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
                            Preview Langsung
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-headline text-lg font-semibold text-white">{tpl.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {tpl.desc}
                      </p>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-[#1a1a1a] border border-gray-800 text-gray-300 text-xs font-mono rounded">
                          {tpl.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {filtered.length === 0 && (
                <div className="col-span-full py-20 text-center text-gray-500">
                  Tidak ada template yang cocok dengan pencarian Anda.
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-20 border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-white text-xl">★</span>
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-white">Template Pilihan Bulan Ini</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-[#111] border border-gray-800 rounded-2xl overflow-hidden shadow-sm">
              <div className="lg:col-span-7 aspect-[16/10] bg-[#1a1a1a] overflow-hidden relative">
                <div 
                  className="w-full h-full transform hover:scale-105 transition-transform duration-700 bg-cover bg-center"
                  style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZl8OI9BddePCFCaa0Y0xwwAtnE_Z0sXcqjqS-nEEo4wmZS9HMXET79aCgzh8f0YRHTJgkS_gUFWr6HxEyvSe5kyTBsNW8P7othcQAjXQ7zHQqasE1bK4wwMdJzdJ8L2skJj0Dv53HH-ZTKH9D7LOL_oyUWHxWLk65_3rfSp7_KsghX49DNN5pO0evKrhZ4g0GttWyszNa9rfMkKqRiH0hjZj0dxwP1gLX_zbEW8spBl7CsYPONAlL')` }}
                ></div>
              </div>
              <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center">
                <span className="font-mono text-gray-400 text-xs uppercase tracking-wider mb-4 border border-gray-800 bg-[#1a1a1a] px-3 py-1 rounded-full w-max">
                  Rilis Terpopuler
                </span>
                <h3 className="font-headline text-3xl md:text-4xl font-bold text-white mb-6">Nexus Distribution System</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Sistem desain terbaik untuk distributor ekspor B2B. Termasuk 15+ komponen katalog, sistem pemesanan grosir, dan dasbor manajemen pembeli internasional.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="text-white">✓</span> Layout Responsif Penuh
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="text-white">✓</span> Katalog Produk Skala Besar
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="text-white">✓</span> Siap untuk Infrastruktur Global
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/distribution" className="bg-white text-black px-8 py-4 text-center rounded-xl font-bold hover:bg-gray-200 transition-all shadow-md">
                    Gunakan Nexus
                  </Link>
                  <Link to="/distribution" className="bg-[#1a1a1a] text-white px-8 py-4 text-center rounded-xl font-bold border border-gray-800 hover:bg-[#222] transition-all">
                    Lihat Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden border-t border-gray-900">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white mb-6">Siap membangun etalase global Anda?</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10">Pilih dari belasan template siap pakai kami dan percepat ekspansi pasar Anda hari ini.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="px-8 py-4 bg-white text-black rounded-full font-bold hover:shadow-xl hover:-translate-y-1 transition-all">
                Jelajahi Semua Template
              </button>
              <Link to="/" className="px-8 py-4 bg-transparent text-white border border-gray-600 rounded-full font-bold hover:bg-white/10 transition-all">
                Konsultasi Kustom
              </Link>
            </div>
          </div>
        </section>
      </main>

      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
}
