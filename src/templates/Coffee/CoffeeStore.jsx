import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CoffeeTheme.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProcessPage from './components/ProcessPage';
import InsightsPage from './components/InsightsPage';
import ContactPage from './components/ContactPage';
import InquiryPage from './components/InquiryPage';

// Per-page entry/exit animation variants
const PAGE_VARIANTS = {
  home:    { initial: { opacity: 0, y: 24 },      animate: { opacity: 1, y: 0 },       exit: { opacity: 0, y: -16 } },
  about:   { initial: { opacity: 0, scale: 0.97 }, animate: { opacity: 1, scale: 1 },   exit: { opacity: 0, scale: 1.01 } },
  process: { initial: { opacity: 0, x: -32 },      animate: { opacity: 1, x: 0 },       exit: { opacity: 0, x: 20 } },
  insight: { initial: { opacity: 0, x: 32 },       animate: { opacity: 1, x: 0 },       exit: { opacity: 0, x: -20 } },
  contact: { initial: { opacity: 0, filter: 'blur(6px)' }, animate: { opacity: 1, filter: 'blur(0px)' }, exit: { opacity: 0 } },
  inquiry: { initial: { opacity: 0, y: 40 },       animate: { opacity: 1, y: 0 },       exit: { opacity: 0, y: -12 } },
};

const PAGE_TRANSITION = { duration: 0.42, ease: [0.22, 1, 0.36, 1] };

// Coffee varieties from PRD context
export const COFFEE_PRODUCTS = [
  { id: 'gayo', name: 'Gayo Highland Honey', region: 'Aceh Gayo', altitude: '1,500m', process: 'Honey Process', profile: 'Sweet acidity, red apple, floral aroma', moq: '500 kg', capacity: '10 tons/mo', img: '/images/coffee/gayo.png' },
  { id: 'mandheling', name: 'Mandheling Classic Typica', region: 'North Sumatra', altitude: '1,300m', process: 'Wet Hulled (Giling Basah)', profile: 'Full body, earthy, dark chocolate, low acidity', moq: '1,000 kg', capacity: '25 tons/mo', img: '/images/coffee/mandheling.png' },
  { id: 'toraja', name: 'Toraja Kalossi Single Origin', region: 'South Sulawesi', altitude: '1,700m', process: 'Fully Washed', profile: 'Bright citrus notes, spicy cardamom, velvet finish', moq: '500 kg', capacity: '8 tons/mo', img: '/images/coffee/toraja.png' },
  { id: 'kintamani', name: 'Bali Kintamani Carbonic Maceration', region: 'Kintamani, Bali', altitude: '1,400m', process: 'Anaerobic Natural', profile: 'Intense berry sweetness, jackfruit, whiskey aroma', moq: '250 kg', capacity: '5 tons/mo', img: '/images/coffee/kintamani.png' }
];

export default function CoffeeStore() {
  const [activePage, setActivePage] = useState('home');
  const [inquiryCart, setInquiryCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Scroll to top on page switches
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const handleNavigate = (page) => {
    setActivePage(page);
  };

  const handleToggleCartItem = (product) => {
    setInquiryCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    setInquiryCart(prev => prev.filter(item => item.id !== productId));
  };

  return (
    <div className="coffee-theme">
      <Navbar 
        activePage={activePage} 
        onNavigate={handleNavigate}
        cartCount={inquiryCart.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main style={{ minHeight: '80vh' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={PAGE_VARIANTS[activePage]?.initial ?? { opacity: 0, y: 20 }}
            animate={PAGE_VARIANTS[activePage]?.animate ?? { opacity: 1, y: 0 }}
            exit={PAGE_VARIANTS[activePage]?.exit ?? { opacity: 0 }}
            transition={PAGE_TRANSITION}
          >
            {activePage === 'home' && (
              <HomePage 
                onNavigate={handleNavigate} 
                onToggleCartItem={handleToggleCartItem} 
                cart={inquiryCart}
              />
            )}

            {activePage === 'about' && (
              <AboutPage />
            )}

            {activePage === 'process' && (
              <ProcessPage onNavigate={handleNavigate} />
            )}

            {activePage === 'insight' && (
              <InsightsPage />
            )}

            {activePage === 'contact' && (
              <ContactPage />
            )}

            {activePage === 'inquiry' && (
              <InquiryPage 
                inquiryCart={inquiryCart}
                onRemoveItem={handleRemoveFromCart}
                onNavigate={handleNavigate}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Inquiry Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 9999,
                backgroundColor: 'black'
              }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                position: 'fixed', right: 0, top: 0, bottom: 0,
                width: '380px', maxWidth: '100%', zIndex: 10000,
                backgroundColor: 'var(--coffee-surface)', borderLeft: '1px solid var(--coffee-border-gold)',
                display: 'flex', flexDirection: 'column', padding: '30px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--coffee-text-light)' }}>Daftar Inquiry B2B</h3>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: 'var(--coffee-text-light)' }}
                >
                  ×
                </button>
              </div>

              <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {inquiryCart.length === 0 ? (
                  <p style={{ color: 'var(--coffee-text-muted)', fontSize: '14px', textAlign: 'center', marginTop: '40px' }}>
                    Belum ada varietas kopi yang dipilih untuk inquiry.
                  </p>
                ) : (
                  inquiryCart.map(item => (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '15px', borderBottom: '1px solid var(--coffee-border-muted)' }}>
                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--coffee-text-light)' }}>{item.name}</h4>
                        <p style={{ fontSize: '12px', color: 'var(--coffee-text-muted)' }}>MOQ: {item.moq} | {item.process}</p>
                      </div>
                      <button 
                        onClick={() => handleRemoveFromCart(item.id)}
                        style={{ background: 'none', border: 'none', color: '#E0714F', fontWeight: 700, cursor: 'pointer', fontSize: '13px' }}
                      >
                        Hapus
                      </button>
                    </div>
                  ))
                )}
              </div>

              {inquiryCart.length > 0 && (
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setActivePage('inquiry');
                  }}
                  style={{
                    backgroundColor: 'var(--coffee-coral)', color: 'white',
                    border: 'none', padding: '14px', fontSize: '14px',
                    fontWeight: 700, borderRadius: '4px', cursor: 'pointer',
                    textTransform: 'uppercase', letterSpacing: '1px', marginTop: '20px',
                    boxShadow: '0 8px 24px rgba(224, 113, 79, 0.25)'
                  }}
                >
                  Mulai Kemitraan ({inquiryCart.length} Produk)
                </button>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
