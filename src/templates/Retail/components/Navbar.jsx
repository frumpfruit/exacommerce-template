import React from 'react';

export default function Navbar() {
  return (
    <header style={{ 
      borderBottom: '1px solid var(--vivere-surface-muted)',
      backgroundColor: 'var(--vivere-surface-strong)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      {/* Announcement Bar */}
      <div style={{
        backgroundColor: 'var(--vivere-surface-base)',
        color: 'var(--vivere-surface-strong)',
        textAlign: 'center',
        padding: 'var(--vivere-space-2)',
        fontSize: 'var(--vivere-text-xs)'
      }}>
        Free Shipping on Orders Over $100
      </div>

      <div className="vivere-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 'var(--vivere-space-6)',
        paddingBottom: 'var(--vivere-space-6)'
      }}>
        {/* Left Side: Hamburger, Logo, Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--vivere-space-8)' }}>
          {/* Hamburger Menu (Mobile Only) */}
          <button className="vivere-mobile-menu-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {/* Logo */}
          <div style={{
            fontSize: 'var(--vivere-text-xl)',
            fontWeight: 700,
            letterSpacing: '2px'
          }}>
            HAVEN
          </div>

          {/* Left Links (Desktop Only) */}
          <nav className="vivere-nav-links" style={{ alignItems: 'center' }}>
            <div className="vivere-dropdown">
              <a href="#" className="vivere-nav-link-item" style={{ paddingBottom: 'var(--vivere-space-4)' }}>
                CATEGORIES
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '4px', verticalAlign: 'middle' }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <div className="vivere-dropdown-content">
                <a href="#" className="vivere-dropdown-item">Fashion</a>
                <a href="#" className="vivere-dropdown-item">Beauty & Cosmetics</a>
                <a href="#" className="vivere-dropdown-item">Electronics & Gadgets</a>
                <a href="#" className="vivere-dropdown-item">Home & Living</a>
                <a href="#" className="vivere-dropdown-item">Baby & Kids</a>
                <a href="#" className="vivere-dropdown-item">Pet Supplies</a>
                <a href="#" className="vivere-dropdown-item">Sports Equipment</a>
                <a href="#" className="vivere-dropdown-item">Jewelry & Accessories</a>
                <a href="#" className="vivere-dropdown-item">Furniture</a>
                <a href="#" className="vivere-dropdown-item">Automotive Accessories</a>
              </div>
            </div>
            <a href="#" className="vivere-nav-link-item">HOME DÉCOR</a>
            <a href="#" className="vivere-nav-link-item">KITCHEN</a>
          </nav>
        </div>

        {/* Right Actions */}
        <div style={{ display: 'flex', gap: 'var(--vivere-space-6)', alignItems: 'center' }}>
          <button className="vivere-action-btn icon-search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button className="vivere-action-btn icon-user">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
          <button className="vivere-action-btn icon-cart" style={{ position: 'relative' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span style={{
              position: 'absolute',
              top: '-5px',
              right: '-5px',
              backgroundColor: 'var(--vivere-text-primary)',
              color: 'var(--vivere-surface-strong)',
              fontSize: '10px',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>2</span>
          </button>
        </div>
      </div>
    </header>
  );
}
