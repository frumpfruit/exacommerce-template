import React from 'react';

export default function Navbar({ activePage, onNavigate, cartCount, onOpenCart }) {
  return (
    <nav style={{ 
      position: 'sticky', top: 0, zIndex: 100,
      backgroundColor: 'var(--nexus-surface-strong)',
      borderBottom: '1px solid var(--nexus-surface-muted)',
      boxShadow: 'var(--nexus-shadow-sm)'
    }}>
      {/* Top Utility Bar (SaaS/Enterprise style) */}
      <div style={{ backgroundColor: 'var(--nexus-surface-base)', color: 'white', padding: 'var(--nexus-space-1) 0' }}>
        <div className="nexus-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px' }}>
          <div style={{ display: 'flex', gap: '16px', opacity: 0.8 }}>
            <span>B2B Portal</span>
            <span>Support: +62 31 8888 7777</span>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button style={{ background: 'none', border: 'none', color: 'white', fontSize: '11px', cursor: 'pointer' }}>Corporate Login</button>
            <button style={{ background: 'none', border: 'none', color: 'var(--nexus-brand-accent)', fontSize: '11px', cursor: 'pointer', fontWeight: 700 }}>Track Freight</button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="nexus-container" style={{ 
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: 'var(--nexus-space-3) var(--nexus-space-5)'
      }}>
        {/* Logo */}
        <div 
          onClick={() => onNavigate('home')} 
          style={{ 
            fontSize: '24px', fontWeight: 800, letterSpacing: '-0.5px',
            color: 'var(--nexus-brand-primary)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: '8px'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          </svg>
          NEXUS.
        </div>

        {/* Main Links */}
        <div className="nexus-nav-links" style={{ display: 'flex', gap: 'var(--nexus-space-5)', alignItems: 'center' }}>
          {[
            { id: 'home', label: 'HOME' },
            { id: 'about', label: 'ABOUT' },
            { id: 'process', label: 'PROCESS' },
            { id: 'insights', label: 'INSIGHTS' },
            { id: 'contact', label: 'CONTACT' },
            { id: 'store', label: 'STORE' }
          ].map(link => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '13px', fontWeight: activePage === link.id ? 700 : 500,
                color: activePage === link.id ? 'var(--nexus-brand-primary)' : 'var(--nexus-text-primary)',
                textTransform: 'uppercase', letterSpacing: '0.5px'
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--nexus-space-4)' }}>
          {/* Quick SKU Search */}
          <div style={{ position: 'relative', display: 'none' }} className="nexus-desktop-search">
             <input type="text" placeholder="Search SKU..." style={{
               padding: '8px 12px 8px 32px', border: '1px solid var(--nexus-surface-muted)',
               borderRadius: '2px', fontSize: '12px', width: '200px', backgroundColor: 'var(--nexus-surface-raised)'
             }}/>
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--nexus-text-secondary)" strokeWidth="2" style={{ position: 'absolute', left: '10px', top: '9px' }}>
               <circle cx="11" cy="11" r="8"></circle>
               <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
             </svg>
          </div>

          <button 
            onClick={onOpenCart}
            style={{
              background: 'none', border: '1px solid var(--nexus-surface-muted)', 
              borderRadius: '2px', padding: '8px 16px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '8px',
              fontSize: '12px', fontWeight: 700, color: 'var(--nexus-text-primary)'
            }}
          >
            RFQ Cart
            {cartCount > 0 && (
              <span style={{ 
                backgroundColor: 'var(--nexus-brand-primary)', color: 'white', 
                padding: '2px 6px', borderRadius: '2px', fontSize: '10px'
              }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
