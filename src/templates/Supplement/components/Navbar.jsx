import React, { useState } from 'react';
import { Leaf, X, ShoppingBag } from 'lucide-react';

export default function Navbar({ activePage, onNavigate, cartCount = 0, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="supp-navbar">
        <div className="supp-container supp-navbar-inner">
          <button 
            className="supp-logo" 
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            onClick={() => handleNavClick('home')}
          >
            <Leaf size={28} className="supp-text-green" style={{ fill: 'currentColor', marginRight: '8px' }} />
            NUTRI<span style={{ color: 'var(--supp-surface-strong)' }}>PRIDE</span>
          </button>

          {/* Desktop Nav Links */}
          <div className="supp-nav-links">
            <button 
              className={`supp-nav-link ${activePage === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Beranda
            </button>
            <button 
              className={`supp-nav-link ${activePage === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Tentang Kami
            </button>
            <button 
              className={`supp-nav-link ${activePage === 'process' ? 'active' : ''}`}
              onClick={() => handleNavClick('process')}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Alur Kerja
            </button>
            <button 
              className={`supp-nav-link ${activePage === 'store' ? 'active' : ''}`}
              onClick={() => handleNavClick('store')}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Katalog
            </button>
            <button 
              className={`supp-nav-link ${activePage === 'insights' ? 'active' : ''}`}
              onClick={() => handleNavClick('insights')}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Artikel
            </button>
            <button 
              className={`supp-nav-link ${activePage === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('contact')}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Kontak
            </button>
          </div>

          {/* Nav CTA & Cart button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            {/* Cart Icon Button */}
            <button
              onClick={onOpenCart}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--supp-text-primary)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px'
              }}
              aria-label="Keranjang konsultasi"
            >
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-2px',
                  backgroundColor: 'var(--supp-surface-strong)',
                  color: 'var(--supp-text-secondary)',
                  fontSize: '10px',
                  fontWeight: 800,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--supp-border-muted)'
                }}>
                  {cartCount}
                </span>
              )}
            </button>

            <button 
              className="supp-btn supp-btn-primary" 
              style={{ padding: '8px 20px', fontSize: '13px' }}
              onClick={() => handleNavClick('contact')}
            >
              Konsultasi
            </button>
            
            {/* Hamburger Button */}
            <button 
              className="supp-hamburger" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? (
                <X size={24} style={{ color: 'var(--supp-surface-raised)' }} />
              ) : (
                <>
                  <span></span>
                  <span></span>
                  <span></span>
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div className={`supp-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <button 
          className={`supp-nav-link ${activePage === 'home' ? 'active' : ''}`}
          onClick={() => handleNavClick('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'block', width: '100%', textAlign: 'left', marginBottom: '15px' }}
        >
          Beranda
        </button>
        <button 
          className={`supp-nav-link ${activePage === 'about' ? 'active' : ''}`}
          onClick={() => handleNavClick('about')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'block', width: '100%', textAlign: 'left', marginBottom: '15px' }}
        >
          Tentang Kami
        </button>
        <button 
          className={`supp-nav-link ${activePage === 'process' ? 'active' : ''}`}
          onClick={() => handleNavClick('process')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'block', width: '100%', textAlign: 'left', marginBottom: '15px' }}
        >
          Alur Kerja
        </button>
        <button 
          className={`supp-nav-link ${activePage === 'store' ? 'active' : ''}`}
          onClick={() => handleNavClick('store')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'block', width: '100%', textAlign: 'left', marginBottom: '15px' }}
        >
          Katalog
        </button>
        <button 
          className={`supp-nav-link ${activePage === 'insights' ? 'active' : ''}`}
          onClick={() => handleNavClick('insights')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'block', width: '100%', textAlign: 'left', marginBottom: '15px' }}
        >
          Artikel
        </button>
        <button 
          className={`supp-nav-link ${activePage === 'contact' ? 'active' : ''}`}
          onClick={() => handleNavClick('contact')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'block', width: '100%', textAlign: 'left', marginBottom: '15px' }}
        >
          Kontak
        </button>
        <button 
          className="supp-btn supp-btn-primary" 
          style={{ marginTop: '20px', width: '100%' }}
          onClick={() => handleNavClick('contact')}
        >
          Hubungi Konsultan
        </button>
      </div>
    </>
  );
}
