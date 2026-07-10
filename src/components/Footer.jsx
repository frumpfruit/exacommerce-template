import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from './ui/AnimatedSection';

export default function Footer({ dark = false }) {
  const links = [
    {
      heading: 'Sistem',
      items: ['Produk', 'Solusi', 'Harga'],
    },
    {
      heading: 'Ekosistem',
      items: ['Dokumentasi', 'Blog', 'Panduan'],
    },
    {
      heading: 'Perusahaan',
      items: ['Tentang Kami', 'Karir', 'Privasi'],
    },
  ];

  return (
    <footer className={`bg-transparent border-t transition-colors duration-300 ${
      dark 
        ? 'border-white/10 text-white' 
        : 'border-gray-200 text-[#111827]'
    }`}>
      <StaggerContainer
        className="px-6 md:px-12 lg:px-16 py-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12"
        staggerDelay={0.08}
      >
        <StaggerItem className="md:col-span-2 text-left">
          <span className="text-2xl font-headline font-black tracking-tighter uppercase mb-8 block">
            Exantara
          </span>
          <p className={`text-sm max-w-xs leading-relaxed ${
            dark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Arsitek Digital Anda. Membangun infrastruktur perdagangan global dengan presisi teknis
            tingkat tinggi.
          </p>
          <div className="mt-12 flex gap-4 text-xs font-bold tracking-widest uppercase items-center">
            <a href="https://www.instagram.com/exantara?igsh=MTBqbWVrdnlvMHM5Zg==" target="_blank" rel="noopener noreferrer" className={`hover:opacity-100 transition-opacity cursor-pointer ${dark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-[#111827]'}`}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/share/1DFNCSMBto/" target="_blank" rel="noopener noreferrer" className={`hover:opacity-100 transition-opacity cursor-pointer ${dark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-[#111827]'}`}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://youtube.com/@exantara?si=Ru83IZCEQsd30wrE" target="_blank" rel="noopener noreferrer" className={`hover:opacity-100 transition-opacity cursor-pointer ${dark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-[#111827]'}`}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/exantara-group-22b960354?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className={`hover:opacity-100 transition-opacity cursor-pointer ${dark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-[#111827]'}`}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@exantara.com?_r=1&_t=ZS-97tKtjQanJM" target="_blank" rel="noopener noreferrer" className={`hover:opacity-100 transition-opacity cursor-pointer ${dark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-[#111827]'}`}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v8.12c0 1.05-.15 2.11-.53 3.12-.66 1.74-2.14 3.1-3.9 3.66-1.14.36-2.35.41-3.53.15-2.52-.55-4.49-2.53-5.06-5.06-.26-1.18-.21-2.39.15-3.53.56-1.76 1.92-3.24 3.66-3.9 1.01-.38 2.07-.53 3.12-.53v4.06c-.46.01-.91.07-1.34.24-.76.31-1.39.94-1.7 1.7-.31.76-.37 1.62-.16 2.39.2.74.72 1.36 1.4 1.7.67.33 1.45.39 2.19.19.74-.2 1.36-.72 1.7-1.4.17-.43.23-.88.24-1.34V.02z"/>
              </svg>
            </a>
          </div>
        </StaggerItem>

        {links.map(({ heading, items }) => (
          <StaggerItem key={heading} className="text-left">
            <h4 className={`text-xs font-label font-bold uppercase tracking-widest mb-8 ${
              dark ? 'text-white' : 'text-[#111827]'
            }`}>
              {heading}
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              {items.map((item) => (
                <li key={item}>
                  <motion.a
                    className={`transition-colors inline-block ${
                      dark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-[#111827]'
                    }`}
                    href="#"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className={`px-6 md:px-12 lg:px-16 py-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-label font-bold ${
        dark ? 'border-white/10 text-gray-500' : 'border-gray-200 text-gray-400'
      }`}>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          <span>© 2024 Exantara</span>
          <Link className={`transition-colors ${dark ? 'hover:text-white' : 'hover:text-[#111827]'}`} to="/legal/terms">Syarat & Ketentuan</Link>
          <Link className={`transition-colors ${dark ? 'hover:text-white' : 'hover:text-[#111827]'}`} to="/legal/privacy">Kebijakan Privasi</Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-sm">language</span>
          <span>Indonesia | Global Standard</span>
        </div>
      </div>
    </footer>
  );
}
