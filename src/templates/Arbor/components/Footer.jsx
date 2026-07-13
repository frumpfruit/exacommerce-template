import React from 'react';

export default function Footer({ onNavigate = () => {} }) {
  return (
    <footer className="bg-[#1b4332] text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[64px] px-[24px] py-[120px] max-w-[1280px] mx-auto">
        <div className="space-y-6">
          <button onClick={() => onNavigate('home')} className="font-['Hanken_Grotesk'] text-[32px] leading-[40px] font-bold text-[#D8F3DC] hover:opacity-80 transition-opacity text-left">Arbor Pulp</button>
          <p className="font-['Manrope'] text-[16px] leading-[24px] font-[400] text-[#a5d0b9] leading-relaxed">
            Engineering a sustainable future through meticulous stewardship of industrial forest species.
          </p>
        </div>
        <div className="space-y-6">
          <h4 className="font-['Hanken_Grotesk'] text-[12px] leading-[16px] font-[700] tracking-[0.05em] uppercase tracking-wider text-[#D8F3DC]">Core Assets</h4>
          <nav className="flex flex-col gap-3">
            <button onClick={() => onNavigate('home')} className="text-[#a5d0b9] hover:text-[#D8F3DC] transition-colors duration-200 font-['Manrope'] text-[16px] leading-[24px] font-[400] text-left">Acacia Lifecycle</button>
            <button onClick={() => onNavigate('home')} className="text-[#a5d0b9] hover:text-[#D8F3DC] transition-colors duration-200 font-['Manrope'] text-[16px] leading-[24px] font-[400] text-left">Eucalyptus Stewardship</button>
            <button onClick={() => onNavigate('about')} className="text-[#a5d0b9] hover:text-[#D8F3DC] transition-colors duration-200 font-['Manrope'] text-[16px] leading-[24px] font-[400] text-left">Sustainability Report</button>
            <button onClick={() => onNavigate('home')} className="text-[#a5d0b9] hover:text-[#D8F3DC] transition-colors duration-200 font-['Manrope'] text-[16px] leading-[24px] font-[400] text-left">Industrial Applications</button>
          </nav>
        </div>
        <div className="space-y-6">
          <h4 className="font-['Hanken_Grotesk'] text-[12px] leading-[16px] font-[700] tracking-[0.05em] uppercase tracking-wider text-[#D8F3DC]">Corporate</h4>
          <nav className="flex flex-col gap-3">
            <button onClick={() => onNavigate('about')} className="text-[#a5d0b9] hover:text-[#D8F3DC] transition-colors duration-200 font-['Manrope'] text-[16px] leading-[24px] font-[400] text-left">Investor Relations</button>
            <button onClick={() => onNavigate('about')} className="text-[#a5d0b9] hover:text-[#D8F3DC] transition-colors duration-200 font-['Manrope'] text-[16px] leading-[24px] font-[400] text-left">Privacy Policy</button>
            <button onClick={() => onNavigate('about')} className="text-[#a5d0b9] hover:text-[#D8F3DC] transition-colors duration-200 font-['Manrope'] text-[16px] leading-[24px] font-[400] text-left">Terms of Service</button>
            <button onClick={() => onNavigate('process')} className="text-[#a5d0b9] hover:text-[#D8F3DC] transition-colors duration-200 font-['Manrope'] text-[16px] leading-[24px] font-[400] text-left">Press Kit</button>
          </nav>
        </div>
        <div className="space-y-6">
          <h4 className="font-['Hanken_Grotesk'] text-[12px] leading-[16px] font-[700] tracking-[0.05em] uppercase tracking-wider text-[#D8F3DC]">Stay Informed</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#D8F3DC]">mail</span>
              <span className="font-['Manrope'] text-[16px] leading-[24px] font-[400] text-[#a5d0b9]">hello@arborpulp.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#D8F3DC]">phone</span>
              <span className="font-['Manrope'] text-[16px] leading-[24px] font-[400] text-[#a5d0b9]">+1 (855) 701-1792</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-[24px] py-8">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="font-['Manrope'] text-[16px] leading-[24px] font-[400] text-[#a5d0b9]/60">
            &copy; 2024 Arbor Pulp. All rights reserved. Engineered Nature for a Sustainable Future.
          </p>
          <div className="flex gap-6">
            <button onClick={() => onNavigate('home')} className="text-[#a5d0b9]/60 hover:text-[#D8F3DC] transition-colors"><span className="material-symbols-outlined">public</span></button>
            <button onClick={() => onNavigate('about')} className="text-[#a5d0b9]/60 hover:text-[#D8F3DC] transition-colors"><span className="material-symbols-outlined">share</span></button>
            <button onClick={() => onNavigate('process')} className="text-[#a5d0b9]/60 hover:text-[#D8F3DC] transition-colors"><span className="material-symbols-outlined">rss_feed</span></button>
          </div>
        </div>
      </div>
    </footer>
  );
}
