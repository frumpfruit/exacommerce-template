import React, { useState } from 'react';

const MENU_ITEMS = [
  { label: 'HOME', key: 'home' },
  { label: 'ABOUT', key: 'about' },
  { label: 'PROCESS', key: 'process' },
  { label: 'INSIGHTS', key: 'insights' },
  { label: 'CONTACT', key: 'contact' },
  { label: 'STORE', key: 'store' }
];

export default function Navbar({ activePage, onNavigate, cartCount, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (key) => {
    onNavigate(key);
    setMobileMenuOpen(false);
  };

  return (
    <header style={{ 
      borderBottom: '1px solid var(--retail-surface-muted)',
      backgroundColor: 'var(--retail-surface-strong)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      {/* Announcement Bar */}
      <div style={{
        backgroundColor: 'var(--retail-surface-base)',
        color: 'var(--retail-surface-strong)',
        textAlign: 'center',
        padding: 'var(--retail-space-2)',
        fontSize: 'var(--retail-text-xs)',
        fontWeight: 600,
        letterSpacing: '0.5px'
      }}>
        Premium Furniture & Home Accessories • Free Shipping on Orders Over $100
      </div>

      <div className="retail-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 'var(--retail-space-5)',
        paddingBottom: 'var(--retail-space-5)',
        position: 'relative'
      }}>
        {/* Left Side: Hamburger, Logo, Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--retail-space-8)' }}>
          {/* Hamburger Menu (Mobile Only) */}
          <button 
            className="retail-mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--retail-text-primary)',
              alignItems: 'center'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>

          {/* Logo HAVEN */}
          <div 
            onClick={() => handleNavClick('home')}
            style={{
              fontSize: 'var(--retail-text-xl)',
              fontWeight: 700,
              letterSpacing: '2px',
              cursor: 'pointer',
              color: 'var(--retail-text-primary)'
            }}
            className="retail-logo"
          >
            HAVEN
          </div>

          {/* Navigation Links (Desktop Only) */}
          <nav className="retail-nav-links" style={{ alignItems: 'center' }}>
            {MENU_ITEMS.map((item) => {
              const isActive = activePage === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '8px 4px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    color: isActive ? 'var(--retail-border-strong)' : 'var(--retail-text-primary)',
                    position: 'relative',
                    transition: 'color 0.2s'
                  }}
                  className="retail-nav-link-item"
                >
                  {item.label}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: 'var(--retail-border-strong)',
                      borderRadius: '1px'
                    }} />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Actions */}
        <div style={{ display: 'flex', gap: 'var(--retail-space-6)', alignItems: 'center' }}>
          {/* Direct WhatsApp Call-to-action */}
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--retail-border-strong)',
              border: '1px solid var(--retail-border-strong)',
              padding: '6px 14px',
              borderRadius: '2px',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
            className="retail-whatsapp-badge"
          >
            <span>Design Advisory</span>
          </a>

          {/* Cart Trigger Button */}
          <button 
            className="retail-action-btn icon-cart" 
            onClick={onOpenCart}
            style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', padding: '6px' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span style={{
              position: 'absolute',
              top: '-3px',
              right: '-3px',
              backgroundColor: 'var(--retail-border-strong)',
              color: 'var(--retail-surface-strong)',
              fontSize: '9px',
              fontWeight: 700,
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s'
            }}>
              {cartCount}
            </span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--retail-surface-strong)',
            borderBottom: '1px solid var(--retail-surface-muted)',
            boxShadow: 'var(--retail-shadow-1)',
            display: 'flex',
            flexDirection: 'column',
            padding: 'var(--retail-space-3) 0',
            zIndex: 99
          }} className="retail-mobile-nav">
            {MENU_ITEMS.map((item) => {
              const isActive = activePage === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 'var(--retail-space-4) var(--retail-space-6)',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 600,
                    textAlign: 'left',
                    color: isActive ? 'var(--retail-border-strong)' : 'var(--retail-text-primary)',
                    backgroundColor: isActive ? 'var(--retail-surface-raised)' : 'transparent',
                    width: '100%'
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
