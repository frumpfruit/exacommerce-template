import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-primary text-pure-white mt-auto border-t border-pure-white/5">
      <div className="w-full py-16 px-6 lg:px-16 flex flex-col lg:flex-row justify-between gap-8 max-w-[1280px] mx-auto">
        <div className="space-y-4 max-w-sm">
          <div className="text-headline-lg font-headline-lg text-pure-white font-extrabold tracking-tighter">ELITE BREW</div>
          <p className="text-body-md text-pure-white/75 leading-relaxed">
            Sign up for our newsletter to receive the latest updates and exclusive offers on our premium coffee collections.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-4 max-w-md pt-2">
            <div className="relative flex-1">
              <input 
                className="w-full bg-pure-white/10 border border-pure-white/10 rounded-lg px-5 py-3 text-pure-white placeholder:text-pure-white/40 focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all" 
                placeholder="Email address" 
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button 
                type="submit"
                className="absolute right-1.5 top-1.5 bg-secondary text-pure-white rounded-md w-9 h-9 flex items-center justify-center hover:bg-secondary/90 transition-all focus:outline-none"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </form>
          <div className="flex gap-5 pt-4 text-pure-white/50">
            <a className="hover:text-pure-white transition-colors flex items-center justify-center" href="#facebook" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
            </a>
            <a className="hover:text-pure-white transition-colors flex items-center justify-center" href="#instagram" aria-label="Instagram">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a className="hover:text-pure-white transition-colors flex items-center justify-center" href="#twitter" aria-label="Twitter">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 lg:gap-x-16">
          <div className="space-y-4">
            <h5 className="text-label-lg font-label-lg font-bold uppercase tracking-wider text-pure-white/90">Shop</h5>
            <ul className="space-y-2.5 text-body-md text-pure-white/70">
              <li><button onClick={() => onNavigate('store')} className="hover:text-pure-white hover:underline transition-all text-left">Brewers</button></li>
              <li><button onClick={() => onNavigate('store')} className="hover:text-pure-white hover:underline transition-all text-left">Coffee Pods</button></li>
              <li><button onClick={() => onNavigate('store')} className="hover:text-pure-white hover:underline transition-all text-left">Accessories</button></li>
              <li><button onClick={() => onNavigate('store')} className="hover:text-pure-white hover:underline transition-all text-left">Bundles</button></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-label-lg font-label-lg font-bold uppercase tracking-wider text-pure-white/90">Learn</h5>
            <ul className="space-y-2.5 text-body-md text-pure-white/70">
              <li><button onClick={() => onNavigate('about')} className="hover:text-pure-white hover:underline transition-all text-left">Our Story</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-pure-white hover:underline transition-all text-left">Sustainability</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-pure-white hover:underline transition-all text-left">Brewing Guides</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-pure-white hover:underline transition-all text-left">Blog</button></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-label-lg font-label-lg font-bold uppercase tracking-wider text-pure-white/90">Support</h5>
            <ul className="space-y-2.5 text-body-md text-pure-white/70">
              <li><button onClick={() => onNavigate('contact')} className="hover:text-pure-white hover:underline transition-all text-left">FAQ</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-pure-white hover:underline transition-all text-left">Returns</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-pure-white hover:underline transition-all text-left">Contact Us</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-pure-white hover:underline transition-all text-left">Warranty</button></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-label-lg font-label-lg font-bold uppercase tracking-wider text-pure-white/90">Company</h5>
            <ul className="space-y-2.5 text-body-md text-pure-white/70">
              <li><button onClick={() => onNavigate('about')} className="hover:text-pure-white hover:underline transition-all text-left">Careers</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-pure-white hover:underline transition-all text-left">Terms</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-pure-white hover:underline transition-all text-left">Privacy</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-pure-white hover:underline transition-all text-left">Legal</button></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-pure-white/5 py-6 px-6 lg:px-16 text-center md:text-left">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-label-md font-label-md text-pure-white/40">© 2026 Elite Brew Co. All rights reserved.</p>
          <div className="flex gap-4 text-label-md text-pure-white/40">
            <a href="#privacy" className="hover:text-pure-white transition-colors">Privacy Policy</a>
            <span className="opacity-30">•</span>
            <a href="#terms" className="hover:text-pure-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
