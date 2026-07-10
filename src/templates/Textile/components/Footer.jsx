import React from 'react';
import { Globe, AtSign, Share2, ArrowRight } from 'lucide-react';

export default function Footer({ onNavigate = () => {}, showToast = () => {} }) {
  return (
    <footer className="bg-[var(--txtl-primary)] text-[var(--txtl-on-primary)]">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[80px] py-24 grid grid-cols-1 md:grid-cols-12 gap-y-16 gap-x-[24px]">
        <div className="md:col-span-12 lg:col-span-4">
          <button onClick={() => onNavigate('home')} className="font-serif text-[32px] leading-[40px] block mb-8 text-left hover:opacity-85 transition-opacity">Silk & Stone Collective</button>
          <p className="font-sans text-[16px] leading-[24px] text-white/60 mb-10 max-w-xs leading-relaxed">
            Global curators of premium heritage textiles. We bridge the gap between artisanal mastery and modern international logistics.
          </p>
          <div className="flex gap-6">
            <a onClick={(e) => { e.preventDefault(); showToast("Opening international portal..."); }} className="hover:text-[var(--txtl-primary-fixed)] transition-colors cursor-pointer" href="#">
              <Globe className="w-6 h-6" />
            </a>
            <a onClick={(e) => { e.preventDefault(); showToast("Directing to inquiry team: info@silkstone.co"); }} className="hover:text-[var(--txtl-primary-fixed)] transition-colors cursor-pointer" href="#">
              <AtSign className="w-6 h-6" />
            </a>
            <a onClick={(e) => { e.preventDefault(); showToast("Share link copied to clipboard!"); }} className="hover:text-[var(--txtl-primary-fixed)] transition-colors cursor-pointer" href="#">
              <Share2 className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="md:col-span-4 lg:col-span-2">
          <h5 className="font-sans text-[14px] font-semibold uppercase mb-8 tracking-[0.05em]">Resources</h5>
          <ul className="space-y-5 font-sans text-[16px] text-[var(--txtl-on-primary)]/60">
            <li><a onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="hover:text-[var(--txtl-on-primary)] transition-colors cursor-pointer" href="#">Sustainability Report</a></li>
            <li><a onClick={(e) => { e.preventDefault(); onNavigate('inquiry'); }} className="hover:text-[var(--txtl-on-primary)] transition-colors cursor-pointer" href="#">Trade Terms</a></li>
            <li><a onClick={(e) => { e.preventDefault(); showToast("Privacy Policy: Your professional data is secure with us."); }} className="hover:text-[var(--txtl-on-primary)] transition-colors cursor-pointer" href="#">Privacy Policy</a></li>
            <li><a onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="hover:text-[var(--txtl-on-primary)] transition-colors cursor-pointer" href="#">Global Offices</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-4 lg:col-span-2">
          <h5 className="font-sans text-[14px] font-semibold uppercase mb-8 tracking-[0.05em]">Company</h5>
          <ul className="space-y-5 font-sans text-[16px] text-[var(--txtl-on-primary)]/60">
            <li><a onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="hover:text-[var(--txtl-on-primary)] transition-colors cursor-pointer" href="#">Our Story</a></li>
            <li><a onClick={(e) => { e.preventDefault(); showToast("No open positions at this time. CVs can be sent to careers@silkstone.co"); }} className="hover:text-[var(--txtl-on-primary)] transition-colors cursor-pointer" href="#">Careers</a></li>
            <li><a onClick={(e) => { e.preventDefault(); onNavigate('catalog'); }} className="hover:text-[var(--txtl-on-primary)] transition-colors cursor-pointer" href="#">Archive Access</a></li>
            <li><a onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="hover:text-[var(--txtl-on-primary)] transition-colors cursor-pointer" href="#">Stockists</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-4 lg:col-span-4">
          <h5 className="font-sans text-[14px] font-semibold uppercase mb-8 tracking-[0.05em]">Newsletter</h5>
          <p className="font-sans text-[16px] text-white/60 mb-8">Receive our quarterly journal on textile heritage and market trends.</p>
          <form onSubmit={(e) => { e.preventDefault(); showToast("Subscribed! Check your email for journal validation."); }} className="flex border-b border-white/30 pb-4 group focus-within:border-[var(--txtl-on-primary)] transition-colors">
            <input required className="bg-transparent border-none focus:ring-0 text-[var(--txtl-on-primary)] flex-grow font-sans text-[16px] px-0 placeholder:text-white/30 outline-none" placeholder="Email Address" type="email" />
            <button type="submit" className="hover:translate-x-1 transition-transform">
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
        
        <div className="md:col-span-12 border-t border-white/10 pt-12 mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-sans text-[12px] font-medium text-white/40 uppercase tracking-[0.05em]">© 2024 Silk & Stone Collective. All Rights Reserved.</span>
          <span className="font-sans text-[12px] font-medium text-white/40 uppercase tracking-[0.05em]">Curated by Hand. Shipped by Science.</span>
        </div>
      </div>
    </footer>
  );
}
