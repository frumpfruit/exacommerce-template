import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldBeSolid = activePage !== 'home' || isScrolled;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 lg:px-16 py-4 transition-all duration-300 ${shouldBeSolid ? 'bg-primary shadow-lg py-3' : 'bg-transparent'}`}>
      <div 
        onClick={() => onNavigate('home')} 
        className="text-headline-md font-headline-md font-extrabold text-white tracking-tighter cursor-pointer hover:opacity-90 transition-opacity"
      >
        ELITE BREW
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
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
          className={`relative px-4 py-2 rounded-full font-label-lg text-label-lg transition-all flex items-center gap-2 ${shouldBeSolid ? 'bg-primary-container text-white border border-white/10 hover:bg-primary-container/85' : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'}`}
        >
          Cart ({cartCount})
        </button>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white focus:outline-none flex items-center justify-center"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-primary flex flex-col items-center gap-4 py-6 md:hidden shadow-lg border-t border-pure-white/10 z-50">
          {navLinks.map(({ label, page }) => (
            <button 
              key={page}
              onClick={() => { onNavigate(page); setIsOpen(false); }} 
              className={`font-label-lg text-label-lg py-2 transition-colors ${activePage === page ? 'text-[#F58A6C]' : 'text-pure-white'}`}
            >
              {label}
            </button>
          ))}
          <button 
            onClick={() => { onNavigate('contact'); setIsOpen(false); }} 
            className="text-pure-white font-label-lg text-label-lg py-2"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
