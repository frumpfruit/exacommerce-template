import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ activePage, onNavigate, cartCount = 0, onOpenCart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1024) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleLinkClick = (pageId) => {
    onNavigate(pageId);
    setMenuOpen(false);
  };

  const navLinks = [
    { id: 'home',    label: 'Beranda' },
    { id: 'about',   label: 'Tentang' },
    { id: 'process', label: 'Alur Kerja' },
    { id: 'insight', label: 'Artikel' },
    { id: 'contact', label: 'Kontak' },
  ];

  return (
    <>
      <style>{`
        /* ── Navbar global styles ── */
        .kopi-nav {
          position: sticky; top: 0; z-index: 1000;
          background-color: var(--coffee-bg-dark);
          border-bottom: 1px solid var(--coffee-border-gold);
          transition: box-shadow 0.3s ease;
        }
        .kopi-nav.scrolled {
          box-shadow: 0 4px 32px rgba(42,20,10,0.08);
        }
        .kopi-nav-inner {
          max-width: 1240px; width: 100%; margin: 0 auto;
          padding: 0 32px; height: 76px;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
        }

        /* ── Logo ── */
        .kopi-logo {
          background: none; border: none; cursor: pointer;
          font-size: 20px; font-weight: 900; letter-spacing: 2px;
          text-transform: uppercase; color: var(--coffee-text-light);
          font-family: var(--coffee-font-sans);
          display: flex; align-items: center; gap: 10px;
          flex-shrink: 0;
        }
        .kopi-logo-mark {
          width: 32px; height: 32px; border-radius: 50%;
          background: var(--coffee-gold);
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 900; color: var(--coffee-bg-dark);
          font-family: 'Playfair Display', serif; font-style: italic;
          letter-spacing: 0;
          flex-shrink: 0;
        }

        /* ── Desktop links ── */
        .kopi-links {
          display: flex; align-items: center; gap: 4px; flex: 1; justify-content: center;
        }
        .kopi-link {
          background: none; border: none; cursor: pointer;
          font-family: 'Outfit', sans-serif; font-size: 12px; font-weight: 700;
          color: var(--coffee-text-muted); padding: 8px 14px; border-radius: 4px;
          text-transform: uppercase; letter-spacing: 1.5px;
          transition: color 0.25s, background-color 0.25s;
          white-space: nowrap;
        }
        .kopi-link:hover { color: var(--coffee-text-light); background: rgba(42,20,10,0.05); }
        .kopi-link.active { color: var(--coffee-text-light); }
        .kopi-link.active::after {
          content: ''; display: block; height: 1.5px; width: 100%;
          background: var(--coffee-gold); margin-top: 3px;
          border-radius: 2px;
        }

        /* ── Actions right ── */
        .kopi-actions {
          display: flex; align-items: center; gap: 12px; flex-shrink: 0;
        }

        /* Cart icon button */
        .kopi-cart-btn {
          background: none; border: none; cursor: pointer;
          position: relative; padding: 8px; border-radius: 4px;
          color: var(--coffee-text-muted); transition: color 0.2s;
          display: flex; align-items: center; justify-content: center;
        }
        .kopi-cart-btn:hover { color: var(--coffee-text-light); }
        .kopi-cart-icon {
          width: 20px; height: 20px; position: relative;
        }
        .kopi-cart-icon::before {
          content: ''; display: block; width: 16px; height: 14px;
          border: 1.5px solid currentColor; border-top: none;
          border-radius: 0 0 3px 3px; margin: 4px auto 0;
        }
        .kopi-cart-icon::after {
          content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 10px; height: 8px;
          border: 1.5px solid currentColor; border-bottom: none;
          border-radius: 6px 6px 0 0;
        }
        .kopi-cart-badge {
          position: absolute; top: 2px; right: 2px;
          background: var(--coffee-coral); color: white;
          font-size: 9px; font-weight: 900;
          width: 16px; height: 16px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 1.5px solid var(--coffee-bg-dark);
        }

        /* RFQ pill button — always visible */
        .kopi-rfq-btn {
          background: var(--coffee-coral); color: white; border: none;
          border-radius: 4px; padding: 9px 18px;
          font-size: 11px; font-weight: 800; cursor: pointer;
          text-transform: uppercase; letter-spacing: 1.5px;
          font-family: 'Outfit', sans-serif;
          white-space: nowrap; flex-shrink: 0;
          box-shadow: 0 3px 12px rgba(224,113,79,0.22);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .kopi-rfq-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(224,113,79,0.32);
        }
        /* On tablet: shorten label */
        @media (max-width: 900px) and (min-width: 641px) {
          .kopi-rfq-full { display: none; }
          .kopi-rfq-short { display: inline; }
        }
        @media (min-width: 901px) {
          .kopi-rfq-short { display: none; }
        }
        @media (max-width: 640px) {
          .kopi-rfq-full { display: none; }
          .kopi-rfq-short { display: inline; }
        }

        /* Hamburger — visible below 1024px */
        .kopi-burger {
          background: none; border: none; cursor: pointer;
          padding: 8px; color: var(--coffee-text-light);
          display: none; flex-direction: column; gap: 5px; align-items: flex-end;
        }
        .kopi-burger-bar {
          display: block; height: 1.5px; background: currentColor; border-radius: 2px;
          transition: all 0.3s ease; transform-origin: right center;
        }

        /* ── Breakpoints ── */
        @media (max-width: 1024px) {
          .kopi-links { display: none !important; }
          .kopi-burger { display: flex !important; }
          .kopi-nav-inner { padding: 0 20px; }
        }
        @media (max-width: 640px) {
          .kopi-logo { font-size: 17px; letter-spacing: 1.5px; }
          .kopi-rfq-btn { padding: 8px 12px; font-size: 10px; }
          .kopi-nav-inner { gap: 12px; }
        }

        /* ── Mobile Drawer ── */
        .kopi-drawer {
          position: fixed; top: 76px; left: 0; right: 0; bottom: 0; z-index: 998;
          background: var(--coffee-bg-dark);
          border-top: 1px solid var(--coffee-border-gold);
          display: flex; flex-direction: column;
          padding: 32px 28px 40px;
          overflow-y: auto;
        }
        .kopi-drawer-link {
          background: none; border: none; cursor: pointer;
          font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 800;
          color: var(--coffee-text-muted); text-align: left;
          text-transform: uppercase; letter-spacing: 2px;
          padding: 16px 0; border-bottom: 1px solid var(--coffee-border-muted);
          transition: color 0.2s, padding-left 0.2s;
          display: flex; align-items: center; justify-content: space-between;
        }
        .kopi-drawer-link:hover, .kopi-drawer-link.active {
          color: var(--coffee-text-light); padding-left: 8px;
        }
        .kopi-drawer-link.active { color: var(--coffee-gold); }
        .kopi-drawer-rfq {
          background: var(--coffee-coral); color: white; border: none;
          padding: 16px; border-radius: 6px; font-size: 14px; font-weight: 800;
          text-transform: uppercase; letter-spacing: 2px;
          cursor: pointer; margin-top: 28px; font-family: 'Outfit', sans-serif;
          transition: opacity 0.2s;
        }
        .kopi-drawer-rfq:hover { opacity: 0.9; }
      `}</style>

      <nav className={`kopi-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="kopi-nav-inner">

          {/* Brand */}
          <button className="kopi-logo" onClick={() => handleLinkClick('home')}>
            <span className="kopi-logo-mark">K</span>
            KOPITERA
          </button>

          {/* Desktop links */}
          <div className="kopi-links">
            {navLinks.map(link => (
              <button
                key={link.id}
                className={`kopi-link${activePage === link.id ? ' active' : ''}`}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="kopi-actions">
            {/* Cart */}
            <button className="kopi-cart-btn" onClick={onOpenCart} aria-label="Daftar Inquiry">
              <div className="kopi-cart-icon" />
              {cartCount > 0 && (
                <span className="kopi-cart-badge">{cartCount}</span>
              )}
            </button>

            {/* RFQ button — always visible, label adapts */}
            <button className="kopi-rfq-btn" onClick={() => handleLinkClick('inquiry')}>
              <span className="kopi-rfq-full">Mulai Inquiry</span>
              <span className="kopi-rfq-short">RFQ</span>
            </button>

            {/* Hamburger */}
            <button className="kopi-burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span className="kopi-burger-bar" style={{ width: 22, opacity: menuOpen ? 0 : 1 }} />
              <span className="kopi-burger-bar" style={{
                width: 22,
                transform: menuOpen ? 'rotate(-45deg) scaleX(1.15)' : 'none',
              }} />
              <span className="kopi-burger-bar" style={{
                width: 14,
                transform: menuOpen ? 'rotate(45deg) translateY(-7px) scaleX(1.6)' : 'none',
                opacity: menuOpen ? 1 : 0.6,
              }} />
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="kopi-drawer"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  className={`kopi-drawer-link${activePage === link.id ? ' active' : ''}`}
                  onClick={() => handleLinkClick(link.id)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <span>{link.label}</span>
                  <span style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--coffee-gold)', opacity: activePage === link.id ? 1 : 0 }}>●</span>
                </motion.button>
              ))}

              <motion.button
                className="kopi-drawer-rfq"
                onClick={() => handleLinkClick('inquiry')}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.25 }}
              >
                Mulai Form Inquiry B2B
              </motion.button>

              {/* Contact strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                style={{ marginTop: 'auto', paddingTop: 32, borderTop: '1px solid var(--coffee-border-muted)' }}
              >
                <p style={{ fontSize: '11px', color: 'var(--coffee-text-muted)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>Sourcing Desk</p>
                <p style={{ fontSize: '13px', color: 'var(--coffee-text-light)', fontWeight: 700 }}>sales@kopitera.com</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
