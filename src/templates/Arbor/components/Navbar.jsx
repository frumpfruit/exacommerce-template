import React, { useState } from 'react';

export default function Navbar({ onNavigate, activePage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (page) => {
    setIsMobileMenuOpen(false);
    if(onNavigate) onNavigate(page);
  };

  return (
    <nav className="bg-white border-b border-[#c1c8c2]/30 sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center w-full px-[24px] max-w-[1280px] mx-auto h-20">
        <div className="flex items-center gap-8">
          <a 
            className="font-['Hanken_Grotesk'] text-[32px] leading-[40px] font-bold text-[#1b4332] tracking-tighter" 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNav('home'); }}
          >
            Arbor Pulp
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a 
              className={`font-['Hanken_Grotesk'] text-[16px] leading-[20px] transition-colors duration-300 ${activePage === 'home' ? 'text-[#1b4332] font-bold border-b-2 border-[#1b4332] pb-1' : 'text-[#414844] font-[600] hover:text-[#1b4332]'}`} 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNav('home'); }}
            >
              Homepage
            </a>
            <a 
              className={`font-['Hanken_Grotesk'] text-[16px] leading-[20px] transition-colors duration-300 ${activePage === 'about' ? 'text-[#1b4332] font-bold border-b-2 border-[#1b4332] pb-1' : 'text-[#414844] font-[600] hover:text-[#1b4332]'}`} 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNav('about'); }}
            >
              About
            </a>
            <a 
              className={`font-['Hanken_Grotesk'] text-[16px] leading-[20px] transition-colors duration-300 ${activePage === 'process' ? 'text-[#1b4332] font-bold border-b-2 border-[#1b4332] pb-1' : 'text-[#414844] font-[600] hover:text-[#1b4332]'}`} 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNav('process'); }}
            >
              Process
            </a>
            <a 
              className={`font-['Hanken_Grotesk'] text-[16px] leading-[20px] transition-colors duration-300 ${activePage === 'insights' ? 'text-[#1b4332] font-bold border-b-2 border-[#1b4332] pb-1' : 'text-[#414844] font-[600] hover:text-[#1b4332]'}`} 
              href="#"
            >
              Insights
            </a>
            <a 
              className={`font-['Hanken_Grotesk'] text-[16px] leading-[20px] transition-colors duration-300 ${activePage === 'catalog' ? 'text-[#1b4332] font-bold border-b-2 border-[#1b4332] pb-1' : 'text-[#414844] font-[600] hover:text-[#1b4332]'}`} 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNav('catalog'); }}
            >
              Catalog
            </a>
            <a 
              className={`font-['Hanken_Grotesk'] text-[16px] leading-[20px] transition-colors duration-300 ${activePage === 'contact' ? 'text-[#1b4332] font-bold border-b-2 border-[#1b4332] pb-1' : 'text-[#414844] font-[600] hover:text-[#1b4332]'}`} 
              href="#"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-[#1b4332] text-white px-6 py-2.5 rounded-full font-['Hanken_Grotesk'] text-[16px] leading-[20px] font-[600] hover:opacity-90 transition-all active:scale-95">
            Process Inquiry
          </button>
          <button 
            className="md:hidden flex items-center justify-center p-2 text-[#1b4332]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#c1c8c2]/30 px-[24px] py-4 shadow-lg absolute w-full left-0">
          <div className="flex flex-col gap-4">
            <a 
              className={`font-['Hanken_Grotesk'] text-[18px] leading-[24px] ${activePage === 'home' ? 'text-[#1b4332] font-bold' : 'text-[#414844] font-[600]'}`} 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNav('home'); }}
            >
              Homepage
            </a>
            <a 
              className={`font-['Hanken_Grotesk'] text-[18px] leading-[24px] ${activePage === 'about' ? 'text-[#1b4332] font-bold' : 'text-[#414844] font-[600]'}`} 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNav('about'); }}
            >
              About
            </a>
            <a 
              className={`font-['Hanken_Grotesk'] text-[18px] leading-[24px] ${activePage === 'process' ? 'text-[#1b4332] font-bold' : 'text-[#414844] font-[600]'}`} 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNav('process'); }}
            >
              Process
            </a>
            <a className={`font-['Hanken_Grotesk'] text-[18px] leading-[24px] ${activePage === 'insights' ? 'text-[#1b4332] font-bold' : 'text-[#414844] font-[600]'}`} href="#">Insights</a>
            <a 
              className={`font-['Hanken_Grotesk'] text-[18px] leading-[24px] ${activePage === 'catalog' ? 'text-[#1b4332] font-bold' : 'text-[#414844] font-[600]'}`} 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNav('catalog'); }}
            >
              Catalog
            </a>
            <a className={`font-['Hanken_Grotesk'] text-[18px] leading-[24px] ${activePage === 'contact' ? 'text-[#1b4332] font-bold' : 'text-[#414844] font-[600]'}`} href="#">Contact</a>
            
            <div className="pt-4 mt-2 border-t border-[#c1c8c2]/30">
              <button className="w-full bg-[#1b4332] text-white px-6 py-3 rounded-full font-['Hanken_Grotesk'] text-[16px] leading-[20px] font-[600] active:scale-95 transition-all">
                Process Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
