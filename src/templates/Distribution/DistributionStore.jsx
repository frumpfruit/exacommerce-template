import React, { useState, useEffect } from 'react';
import './DistributionTheme.css';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProcessPage from './components/ProcessPage';
import InsightsPage from './components/InsightsPage';
import ContactPage from './components/ContactPage';
import StorePage from './components/StorePage';
import ProductDetailPage from './components/ProductDetailPage';
import InquiryPage from './components/InquiryPage';
import Footer from './components/Footer';

// Dummy Distribution Products
const DISTRIBUTION_PRODUCTS = [
  { id: 1, name: 'Industrial Packing Tape 48mm', price: 15000, priceFormatted: 'IDR 15,000/roll', img: '/images/distribution/packing-tape.jpg', tag: 'Packaging', moq: '100 rolls', stock: 5000, desc: 'Heavy-duty OPP packing tape, 48mm x 100m. High adhesion, suitable for sealing corrugated cartons.' },
  { id: 2, name: 'Corrugated Box A3 Double Wall', price: 8500, priceFormatted: 'IDR 8,500/pc', img: '/images/distribution/corrugated-box.jpg', tag: 'Packaging', moq: '500 pcs', stock: 12000, desc: 'Double-wall corrugated cardboard box (A3 size). Crush-resistant, ideal for heavy goods shipping.' },
  { id: 3, name: 'Nitrile Gloves M (Box of 100)', price: 125000, priceFormatted: 'IDR 125,000/box', img: '/images/distribution/nitrile-gloves.jpg', tag: 'Safety', moq: '50 boxes', stock: 800, desc: 'Powder-free nitrile examination gloves, medium size. Chemical and puncture resistant.' },
  { id: 4, name: 'Stretch Wrap Film 50cm', price: 85000, priceFormatted: 'IDR 85,000/roll', img: '/images/distribution/stretch-wrap.jpg', tag: 'Packaging', moq: '24 rolls', stock: 350, desc: 'Machine-grade stretch film, 50cm x 300m. Superior load retention for pallet wrapping.' },
  { id: 5, name: 'Safety Helmet SNI Certified', price: 45000, priceFormatted: 'IDR 45,000/pc', img: '/images/distribution/safety-helmet.jpg', tag: 'Safety', moq: '100 pcs', stock: 1500, desc: 'HDPE safety helmet with ratchet suspension. SNI-certified for construction and industrial use.' },
  { id: 6, name: 'A4 Copy Paper 80gsm (Ream)', price: 52000, priceFormatted: 'IDR 52,000/ream', img: '/images/distribution/copy-paper.jpg', tag: 'Office', moq: '200 reams', stock: 10000, desc: 'Premium white copy paper, 80gsm, 500 sheets per ream. Compatible with all inkjet and laser printers.' },
  { id: 7, name: 'Bubble Wrap Roll 125cm x 50m', price: 175000, priceFormatted: 'IDR 175,000/roll', img: '/images/distribution/bubble-wrap.jpg', tag: 'Packaging', moq: '10 rolls', stock: 85, desc: 'Standard bubble wrap with 10mm bubble diameter. Ideal for fragile item protection during transit.' },
  { id: 8, name: 'Pallet Wrap Dispenser', price: 350000, priceFormatted: 'IDR 350,000/unit', img: '/images/distribution/pallet-dispenser.jpg', tag: 'Equipment', moq: '5 units', stock: 42, desc: 'Ergonomic manual stretch film dispenser. Reduces wrapping time by 40% with consistent tension control.' },
  { id: 9, name: 'High-Vis Safety Vest Class 2', price: 35000, priceFormatted: 'IDR 35,000/pc', img: '/images/distribution/safety-vest.jpg', tag: 'Safety', moq: '100 pcs', stock: 2500, desc: 'Fluorescent yellow safety vest with reflective strips. ANSI/ISEA Class 2 certified for high-visibility.' },
  { id: 10, name: 'Heavy Duty Strapping Band 15mm', price: 120000, priceFormatted: 'IDR 120,000/roll', img: '/images/distribution/strapping-band.jpg', tag: 'Packaging', moq: '20 rolls', stock: 400, desc: 'PP strapping band, 15mm width, 10kg roll. High tensile strength for securing heavy loads.' }
];

export default function DistributionStore() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inquiryItems, setInquiryItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage, selectedProduct]);

  const handleNavigate = (page, product = null) => {
    if (product) {
      setSelectedProduct(product);
      setActivePage('product-detail');
    } else {
      setSelectedProduct(null);
      setActivePage(page);
    }
  };

  const handleAddToCart = (product) => {
    if (!inquiryItems.find(item => item.id === product.id)) {
      setInquiryItems(prev => [...prev, product]);
    }
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId) => {
    setInquiryItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleInquireNow = (product) => {
    if (!inquiryItems.find(item => item.id === product.id)) {
      setInquiryItems(prev => [...prev, product]);
    }
    handleNavigate('inquiry');
  };

  return (
    <div className="dist-theme">
      <Navbar 
        activePage={activePage} 
        onNavigate={handleNavigate} 
        cartCount={inquiryItems.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main style={{ minHeight: '80vh' }}>
        {activePage === 'home' && (
          <HomePage 
            products={DISTRIBUTION_PRODUCTS} 
            onNavigate={handleNavigate} 
            onAddToCart={handleAddToCart} 
          />
        )}
        
        {activePage === 'about' && (
          <AboutPage />
        )}
        
        {activePage === 'process' && (
          <ProcessPage onNavigate={handleNavigate} />
        )}
        
        {activePage === 'insights' && (
          <InsightsPage />
        )}
        
        {activePage === 'contact' && (
          <ContactPage />
        )}
        
        {activePage === 'store' && (
          <StorePage 
            products={DISTRIBUTION_PRODUCTS} 
            onAddToCart={handleAddToCart}
            onViewDetail={(p) => handleNavigate('product-detail', p)}
          />
        )}
        
        {activePage === 'product-detail' && (
          <ProductDetailPage 
            product={selectedProduct}
            allProducts={DISTRIBUTION_PRODUCTS}
            onAddToCart={handleAddToCart}
            onInquireNow={handleInquireNow}
            onSelectProduct={(p) => handleNavigate(p ? 'product-detail' : 'store', p)}
          />
        )}
        
        {activePage === 'inquiry' && (
          <InquiryPage 
            inquiryItems={inquiryItems}
            onRemoveItem={handleRemoveFromCart}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Cart/RFQ Drawer */}
      {isCartOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(15,23,42,0.6)',
          backdropFilter: 'blur(4px)',
          zIndex: 1000,
          display: 'flex', justifyContent: 'flex-end',
          animation: 'fadeIn 0.3s ease-out'
        }} onClick={() => setIsCartOpen(false)}>
          <div className="dist-rfq-drawer" style={{
            backgroundColor: 'var(--dist-surface-strong)',
            height: '100%',
            display: 'flex', flexDirection: 'column',
            boxShadow: '-4px 0 24px rgba(0,0,0,0.1)',
            animation: 'slideInRight 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
          }} onClick={e => e.stopPropagation()}>
            <div style={{
              padding: 'var(--dist-space-5)',
              borderBottom: '1px solid var(--dist-surface-muted)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                RFQ List ({inquiryItems.length})
              </h3>
              <button 
                onClick={() => setIsCartOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--dist-text-secondary)' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--dist-space-5)' }}>
              {inquiryItems.length === 0 ? (
                <div style={{ textAlign: 'center', color: 'var(--dist-text-secondary)', marginTop: '40px' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ margin: '0 auto 16px', opacity: 0.5 }}>
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                  <p style={{ fontSize: '14px' }}>Your RFQ list is empty.</p>
                  <button 
                    className="dist-btn dist-btn-primary" 
                    style={{ marginTop: '16px' }}
                    onClick={() => {
                      setIsCartOpen(false);
                      handleNavigate('store');
                    }}
                  >
                    Browse Catalog
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--dist-space-4)' }}>
                  {inquiryItems.map(item => (
                    <div key={item.id} style={{ display: 'flex', gap: '12px', borderBottom: '1px solid var(--dist-surface-muted)', paddingBottom: '12px' }}>
                      <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--dist-surface-raised)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={item.img} alt={item.name} style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: '13px', fontWeight: 700, margin: '0 0 4px 0' }}>{item.name}</h4>
                        <div style={{ fontSize: '12px', color: 'var(--dist-brand-primary)', fontWeight: 600, marginBottom: '4px' }}>{item.priceFormatted}</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '11px', color: 'var(--dist-text-secondary)' }}>MOQ: {item.moq}</span>
                          <button 
                            onClick={() => handleRemoveFromCart(item.id)}
                            style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '11px', cursor: 'pointer', padding: 0 }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {inquiryItems.length > 0 && (
              <div style={{ padding: 'var(--dist-space-5)', borderTop: '1px solid var(--dist-surface-muted)', backgroundColor: 'var(--dist-surface-raised)' }}>
                <button 
                  className="dist-btn dist-btn-primary"
                  style={{ width: '100%', padding: '14px', fontSize: '14px' }}
                  onClick={() => {
                    setIsCartOpen(false);
                    handleNavigate('inquiry');
                  }}
                >
                  Proceed to Request Quote
                </button>
                <button 
                  className="dist-btn"
                  style={{ width: '100%', padding: '10px', fontSize: '13px', marginTop: '8px', backgroundColor: 'transparent', borderColor: 'transparent' }}
                  onClick={() => {
                    setIsCartOpen(false);
                    handleNavigate('store');
                  }}
                >
                  Continue Browsing
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
