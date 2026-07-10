import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', page: 'home' },
  { label: 'Our Story', page: 'about' },
  { label: 'Our Process', page: 'process' },
  { label: 'Shop', page: 'store' },
  { label: 'Insight', page: 'insight' },
  { label: 'Inquiry', page: 'inquiry' },
];

export default function Navbar({ onNavigate, activePage, cartCount, onOpenCart }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-[72px] z-50 flex justify-between items-center px-6 lg:px-16 py-0 bg-primary shadow-lg transition-all duration-300">
      <div 
        onClick={() => onNavigate('home')} 
        className="text-headline-md font-headline-md font-extrabold text-white tracking-tighter cursor-pointer hover:opacity-90 transition-opacity"
      >
        ELITE BREW
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-8 z-50 relative">
        {navLinks.map(({ label, page }) => (
          <button 
            key={page}
            onClick={() => onNavigate(page)} 
            className={`font-label-lg text-label-lg transition-all duration-250 ${activePage === page ? 'text-white border-b-2 pb-1 border-[#F58A6C]' : 'text-white/80 hover:text-white'}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => onNavigate('contact')}
          className={`hidden md:block font-label-lg text-label-lg transition-all px-5 py-2 rounded-full border ${activePage === 'contact' ? 'bg-white/20 text-white border-white/40' : 'text-white/80 border-white/20 hover:text-white hover:border-white/40'}`}
        >
          Contact
        </button>
        <button 
          onClick={onOpenCart}
          className="relative px-4 py-2 rounded-full font-label-lg text-label-lg transition-all flex items-center gap-2 bg-primary-container text-white border border-white/10 hover:bg-primary-container/85"
        >
          Cart ({cartCount})
        </button>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden text-white focus:outline-none flex items-center justify-center z-50 relative"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-full h-screen bg-[#001d32] flex flex-col justify-center items-center gap-6 lg:hidden z-40"
          >
            {navLinks.map(({ label, page }) => (
              <button 
                key={page}
                onClick={() => { onNavigate(page); setIsOpen(false); }} 
                className={`text-[24px] font-bold tracking-tight transition-colors ${activePage === page ? 'text-[#F58A6C]' : 'text-white'}`}
              >
                {label}
              </button>
            ))}
            <button 
              onClick={() => { onNavigate('contact'); setIsOpen(false); }} 
              className="text-white text-[24px] font-bold tracking-tight mt-2"
            >
              Contact
            </button>
            
            <div className="absolute bottom-12 text-white/50 text-sm tracking-widest uppercase">
              Elite Brew Roastery
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
