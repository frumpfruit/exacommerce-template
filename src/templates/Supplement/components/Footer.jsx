import React from 'react';
import { Leaf, MessageSquare, Activity, Heart } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="supp-footer" style={{ backgroundColor: '#032b17' }}>
      <div className="supp-container supp-footer-inner">
        <div className="supp-footer-brand">
          <a href="#" className="supp-logo" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
            <Leaf size={24} className="supp-text-green" style={{ fill: 'currentColor', marginRight: '6px' }} />
            <span style={{ color: '#ffffff' }}>NUTRI</span><span style={{ color: 'var(--supp-surface-strong)' }}>PRIDE</span>
          </a>
          <p className="supp-footer-tagline">
            Premium functional multigrains & superfoods. Committed to raw botanical integrity and optimal digestive longevity.
          </p>
          <div className="supp-social-links">
            <a href="#" className="supp-social-link"><MessageSquare size={16} /></a>
            <a href="#" className="supp-social-link"><Activity size={16} /></a>
            <a href="#" className="supp-social-link"><Heart size={16} /></a>
          </div>
        </div>

        <div className="supp-footer-nav">
          <h4 className="supp-footer-nav-title">Quick Navigation</h4>
          <div className="supp-footer-nav-links">
            <a href="#home" className="supp-footer-nav-link" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
            <a href="#about" className="supp-footer-nav-link" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>About Us</a>
            <a href="#process" className="supp-footer-nav-link" onClick={(e) => { e.preventDefault(); onNavigate('process'); }}>Our Process</a>
            <a href="#store" className="supp-footer-nav-link" onClick={(e) => { e.preventDefault(); onNavigate('store'); }}>Catalog Store</a>
            <a href="#insights" className="supp-footer-nav-link" onClick={(e) => { e.preventDefault(); onNavigate('insights'); }}>Medical Reports</a>
            <a href="#contact" className="supp-footer-nav-link" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Contact</a>
          </div>
        </div>

        <div className="supp-footer-nav">
          <h4 className="supp-footer-nav-title">Legalities & Safety</h4>
          <div className="supp-footer-nav-links">
            <a href="#" className="supp-footer-nav-link" onClick={(e) => e.preventDefault()}>BPOM Certificate</a>
            <a href="#" className="supp-footer-nav-link" onClick={(e) => e.preventDefault()}>Halal Certificate</a>
            <a href="#" className="supp-footer-nav-link" onClick={(e) => e.preventDefault()}>Terms of Service</a>
            <a href="#" className="supp-footer-nav-link" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
          </div>
        </div>
      </div>

      <div className="supp-container supp-copyright">
        © 2026 PT NutriPride Indonesia. All rights reserved. Sunpride Indonesia Brand Guidelines Incorporated.
      </div>
    </footer>
  );
}
