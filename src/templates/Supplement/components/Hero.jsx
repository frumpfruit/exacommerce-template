import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero({ onNavClick }) {
  return (
    <section id="home" className="supp-section supp-container">
      <div className="supp-hero">
        <div className="supp-hero-content">
          <div className="supp-hero-badge">
            <Sparkles size={14} style={{ fill: 'currentColor', marginRight: '4px' }} />
            100% Plant-Based Clean Nutrition
          </div>
          <h1 className="supp-hero-title">
            Fuel Your Day <br />
            <span className="supp-heading-primary">With Pure Power,</span> <br />
            No AI-Slop, Just Health.
          </h1>
          <p className="supp-hero-desc">
            Premium daily functional meals and liquid supplements made from organic multigrains, 
            superfoods, and zero artificial additives. Scientifically formulated to enhance immunity, 
            restore energy, and optimize gut longevity.
          </p>
          <div className="supp-hero-actions">
            <button className="supp-btn supp-btn-primary" onClick={() => onNavClick('products')}>
              Explore Products <ArrowRight size={16} />
            </button>
            <button className="supp-btn supp-btn-secondary" onClick={() => onNavClick('about')}>
              Our Philosophy
            </button>
          </div>
        </div>

        <div className="supp-hero-image-wrap">
          <div className="supp-hero-glow"></div>
          {/* Visual Geometric Supplement Mockup */}
          <svg viewBox="0 0 400 400" className="supp-hero-mockup" fill="none">
            <defs>
              <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#03582d" />
                <stop offset="100%" stopColor="#78be00" />
              </linearGradient>
              <linearGradient id="grad-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffcd00" />
                <stop offset="100%" stopColor="#ff9900" />
              </linearGradient>
              <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="10" stdDeviation="15" floodOpacity="0.4" />
              </filter>
            </defs>
            
            {/* Back glowing shape */}
            <circle cx="200" cy="200" r="140" fill="url(#grad-green)" opacity="0.15" />
            <polygon points="200,80 320,150 320,290 200,360 80,290 80,150" fill="url(#grad-green)" opacity="0.08" />
            
            {/* Main Can Container Mockup */}
            <rect x="140" y="110" width="120" height="200" rx="15" fill="#0b0f0c" stroke="url(#grad-green)" strokeWidth="4" filter="url(#shadow)" />
            {/* Can Cap */}
            <rect x="155" y="90" width="90" height="20" rx="4" fill="url(#grad-yellow)" />
            {/* Can Label Graphic */}
            <rect x="144" y="140" width="112" height="140" fill="#0d120f" />
            {/* Label Circle Accent */}
            <circle cx="200" cy="200" r="30" fill="url(#grad-green)" opacity="0.2" />
            <circle cx="200" cy="200" r="20" fill="url(#grad-yellow)" />
            {/* Text indicator mockups inside label */}
            <rect x="160" y="245" width="80" height="6" rx="3" fill="#78be00" />
            <rect x="175" y="258" width="50" height="4" rx="2" fill="#ffffff" opacity="0.6" />
            
            {/* Leaf element wrapping around the can */}
            <path d="M260,220 C290,190 320,220 320,220 C320,220 290,250 260,220 Z" fill="#78be00" opacity="0.8" />
            <path d="M260,220 Q290,220 320,220" stroke="#ffcd00" strokeWidth="2" />
            
            {/* Healthy grains particles floating around */}
            <circle cx="100" cy="180" r="6" fill="#ffcd00" />
            <circle cx="115" cy="240" r="4" fill="#78be00" />
            <circle cx="290" cy="130" r="8" fill="#78be00" opacity="0.6" />
            <circle cx="310" cy="280" r="5" fill="#ffcd00" />
          </svg>
        </div>
      </div>
    </section>
  );
}
