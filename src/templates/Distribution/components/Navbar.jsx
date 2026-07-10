import React, { useState } from 'react';

const NAV_LINKS = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'process', label: 'PROCESS' },
  { id: 'insights', label: 'INSIGHTS' },
  { id: 'contact', label: 'CONTACT' },
  { id: 'store', label: 'STORE' }
];

export default function Navbar({ activePage, onNavigate, cartCount, onOpenCart }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <>
      <style>{`
        .dist-topbar { display: flex; }
        .dist-nav-links { display: flex; }
        .dist-hamburger { display: none; }
        @media (max-width: 768px) {
          .dist-topbar { display: none !important; }
          .dist-nav-links { display: none !important; }
          .dist-hamburger { display: flex !important; }
          .dist-rfq-btn-label { display: none; }
        }
      `}</style>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            backgroundColor: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(4px)'
          }}
        />
      )}

      {/* Mobile Slide Drawer */}
      <div style={{
        position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 201,
        width: '280px', height: '100vh',
        backgroundColor: 'var(--dist-surface-strong)',
        boxShadow: '4px 0 32px rgba(0,0,0,0.2)',
        transform: mobileOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s cubic-bezier(0.25,1,0.5,1)',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {/* Drawer Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '20px 24px',
          borderBottom: '1px solid var(--dist-surface-muted)',
          backgroundColor: 'var(--dist-surface-base)'
        }}>
          <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--dist-brand-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            </svg>
            NEXUS.
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', padding: '4px' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Drawer Nav Links */}
        <div style={{ padding: '16px 0', flex: 1, overflowY: 'auto' }}>
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                background: activePage === link.id ? 'rgba(29,78,216,0.08)' : 'none',
                border: 'none', borderLeft: activePage === link.id ? '3px solid var(--dist-brand-primary)' : '3px solid transparent',
                padding: '14px 24px',
                fontSize: '14px', fontWeight: activePage === link.id ? 700 : 500,
                color: activePage === link.id ? 'var(--dist-brand-primary)' : 'var(--dist-text-primary)',
                textTransform: 'uppercase', letterSpacing: '0.5px',
                cursor: 'pointer', transition: 'all 0.15s'
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Drawer RFQ Button */}
        <div style={{ padding: '16px 24px', borderTop: '1px solid var(--dist-surface-muted)' }}>
          <button
            onClick={() => { setMobileOpen(false); onOpenCart(); }}
            className="dist-btn dist-btn-primary"
            style={{ width: '100%', padding: '12px', fontSize: '14px', justifyContent: 'center', gap: '8px' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
            RFQ Cart {cartCount > 0 && `(${cartCount})`}
          </button>
        </div>
      </div>

      <nav style={{ 
        position: 'sticky', top: 0, zIndex: 100,
        backgroundColor: 'var(--dist-surface-strong)',
        borderBottom: '1px solid var(--dist-surface-muted)',
        boxShadow: 'var(--dist-shadow-sm)'
      }}>
        {/* Top Utility Bar */}
        <div className="dist-topbar" style={{ backgroundColor: 'var(--dist-surface-base)', color: 'white', padding: 'var(--dist-space-1) 0' }}>
          <div className="dist-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px', width: '100%' }}>
            <div style={{ display: 'flex', gap: '16px', opacity: 0.8 }}>
              <span>B2B Portal</span>
              <span>Support: +62 31 8888 7777</span>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button style={{ background: 'none', border: 'none', color: 'white', fontSize: '11px', cursor: 'pointer' }}>Corporate Login</button>
              <button style={{ background: 'none', border: 'none', color: 'var(--dist-brand-accent)', fontSize: '11px', cursor: 'pointer', fontWeight: 700 }}>Track Freight</button>
            </div>
          </div>
        </div>

        {/* Main Bar */}
        <div className="dist-container" style={{ 
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: 'var(--dist-space-3) var(--dist-space-5)'
        }}>
          {/* Logo */}
          <div 
            onClick={() => onNavigate('home')} 
            style={{ 
              fontSize: '22px', fontWeight: 800, letterSpacing: '-0.5px',
              color: 'var(--dist-brand-primary)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '8px'
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            </svg>
            NEXUS.
          </div>

          {/* Desktop Nav Links */}
          <div className="dist-nav-links" style={{ gap: 'var(--dist-space-5)', alignItems: 'center' }}>
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '13px', fontWeight: activePage === link.id ? 700 : 500,
                  color: activePage === link.id ? 'var(--dist-brand-primary)' : 'var(--dist-text-primary)',
                  textTransform: 'uppercase', letterSpacing: '0.5px'
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--dist-space-3)' }}>
            {/* Desktop: RFQ Cart button */}
            <button 
              onClick={onOpenCart}
              style={{
                background: 'none', border: '1px solid var(--dist-surface-muted)', 
                borderRadius: '2px', padding: '8px 16px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '8px',
                fontSize: '12px', fontWeight: 700, color: 'var(--dist-text-primary)'
              }}
            >
              <span className="dist-rfq-btn-label">RFQ Cart</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              {cartCount > 0 && (
                <span style={{ 
                  backgroundColor: 'var(--dist-brand-primary)', color: 'white', 
                  padding: '2px 6px', borderRadius: '2px', fontSize: '10px'
                }}>
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              className="dist-hamburger"
              onClick={() => setMobileOpen(true)}
              style={{
                background: 'none', border: '1px solid var(--dist-surface-muted)',
                borderRadius: '4px', padding: '8px', cursor: 'pointer',
                display: 'none', alignItems: 'center', justifyContent: 'center',
                color: 'var(--dist-text-primary)', position: 'relative'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute', top: '2px', right: '2px',
                  width: '8px', height: '8px', borderRadius: '50%',
                  backgroundColor: 'var(--dist-brand-primary)'
                }} />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
