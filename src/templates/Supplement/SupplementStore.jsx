import React, { useState, useEffect } from 'react';
import './SupplementTheme.css';

// Modular Page/Section Imports
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

// Premium Supplement Products
const SUPPLEMENT_PRODUCTS = [
  { 
    id: 1, 
    name: 'NUTRIPRIDE Oat-Grains Purple Sweet Potato', 
    price: 195000, 
    priceFormatted: 'IDR 195.000 / 500g', 
    category: 'Daily Nutrition',
    tag: 'Best Seller',
    rating: 5,
    calories: '120 kcal',
    protein: '7g',
    fiber: '6g',
    sugar: 'Low Glycemic',
    desc: 'Our signature premium multigrain oat drink enriched with organic purple sweet potato, high in antioxidants, beta-glucan, and complex carbohydrates to sustain energy and protect heart health.',
    ingredients: 'Organic Purple Sweet Potato, Premium Swedish Oat, 15 Grains (Brown Rice, Barley, Quinoa, Chia Seed, Flaxseed, Black Bean, etc.), Soluble Fiber, Prebiotics.',
    img: '/images/supplement/purple-sweet-potato.jpg',
    moq: '1 pack',
    stock: 250
  },
  { 
    id: 2, 
    name: 'NUTRIPRIDE Green-Detox Superfood Powder', 
    price: 245000, 
    priceFormatted: 'IDR 245.000 / 300g', 
    category: 'Detox & Cleanse',
    tag: 'New Formula',
    rating: 5,
    calories: '45 kcal',
    protein: '4g',
    fiber: '8g',
    sugar: '0g Added Sugar',
    desc: 'An alkalizing blend of cold-pressed greens, spirulina, wheatgrass, and moringa combined with active probiotics to restore gut microflora, boost metabolism, and natural detoxification.',
    ingredients: 'Organic Wheatgrass, Barley Grass, Spirulina, Moringa Leaf, Spinach, Kale, Green Apple Extract, Lactobacillus Acidophilus Probiotics, Enzyme Blend.',
    img: '/images/supplement/green-detox.jpg',
    moq: '1 pack',
    stock: 180
  },
  { 
    id: 3, 
    name: 'NUTRIPRIDE Golden Whey Protein Clean Isolates', 
    price: 380000, 
    priceFormatted: 'IDR 380.000 / 750g', 
    category: 'Fitness & Strength',
    tag: 'Premium Grade',
    rating: 4,
    calories: '110 kcal',
    protein: '26g',
    fiber: '2g',
    sugar: '0g Sugar',
    desc: 'Pure grass-fed whey protein isolate designed for optimal lean muscle repair, featuring zero artificial flavorings, high bioavailability, and complete BCAA profiles.',
    ingredients: 'Grass-Fed Whey Protein Isolate, Natural Vanilla Beans, Sunflower Lecithin, Stevia Leaf Extract, digestive enzymes (Protease, Lactase).',
    img: '/images/supplement/golden-whey.jpg',
    moq: '1 pack',
    stock: 90
  }
];

export default function SupplementStore() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inquiryItems, setInquiryItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Scroll to top on page navigation
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
    <div className="supp-theme" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Sticky Navbar */}
      <Navbar 
        activePage={activePage}
        onNavigate={handleNavigate}
        cartCount={inquiryItems.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Dynamic Viewport */}
      <main style={{ minHeight: '80vh' }}>
        {activePage === 'home' && (
          <HomePage onNavigate={handleNavigate} />
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

        {activePage === 'store' && (
          <StorePage 
            products={SUPPLEMENT_PRODUCTS}
            onAddToCart={handleAddToCart}
            onViewDetail={(p) => handleNavigate('product-detail', p)}
          />
        )}

        {activePage === 'product-detail' && (
          <ProductDetailPage 
            product={selectedProduct}
            allProducts={SUPPLEMENT_PRODUCTS}
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



        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* RFQ Cart Drawer Overlay */}
      {isCartOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(3, 88, 45, 0.4)',
          backdropFilter: 'blur(4px)',
          zIndex: 2000,
          display: 'flex', justifyContent: 'flex-end',
          animation: 'fadeIn 0.3s ease-out'
        }} onClick={() => setIsCartOpen(false)}>
          <div className="supp-rfq-drawer" onClick={e => e.stopPropagation()}>
            <div style={{
              padding: '20px',
              borderBottom: '1px solid var(--supp-border-muted)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, margin: 0, color: 'var(--supp-text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                Daftar Konsultasi ({inquiryItems.length})
              </h3>
              <button 
                onClick={() => setIsCartOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--supp-text-secondary)' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
              {inquiryItems.length === 0 ? (
                <div style={{ textAlign: 'center', color: 'var(--supp-text-secondary)', marginTop: '40px' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ margin: '0 auto 16px', opacity: 0.5, color: 'var(--supp-surface-raised)' }}>
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                  <p style={{ fontSize: '14px' }}>Keranjang konsultasi kosong.</p>
                  <button 
                    className="supp-btn supp-btn-primary" 
                    style={{ marginTop: '16px', fontSize: '12px' }}
                    onClick={() => {
                      setIsCartOpen(false);
                      handleNavigate('store');
                    }}
                  >
                    Jelajahi Produk
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {inquiryItems.map(item => (
                    <div key={item.id} style={{ display: 'flex', gap: '12px', borderBottom: '1px solid var(--supp-border-muted)', paddingBottom: '12px' }}>
                      <div style={{ width: '60px', height: '60px', backgroundColor: '#f0f6f2', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg viewBox="0 0 200 200" style={{ width: '32px', height: '32px' }}>
                          <rect x="60" y="40" width="80" height="130" rx="10" fill="#0d120f" stroke={item.id === 1 ? '#78be00' : item.id === 2 ? '#03582d' : '#ffcd00'} strokeWidth="3" />
                        </svg>
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: '13px', fontWeight: 700, margin: '0 0 4px 0', color: 'var(--supp-text-primary)' }}>{item.name}</h4>
                        <div style={{ fontSize: '12px', color: 'var(--supp-surface-raised)', fontWeight: 700, marginBottom: '4px' }}>{item.priceFormatted.split(' / ')[0]}</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '11px', color: 'var(--supp-text-secondary)' }}>Min: {item.moq}</span>
                          <button 
                            onClick={() => handleRemoveFromCart(item.id)}
                            style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '11px', cursor: 'pointer', padding: 0, fontWeight: 700 }}
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {inquiryItems.length > 0 && (
              <div style={{ padding: '20px', borderTop: '1px solid var(--supp-border-muted)', backgroundColor: '#f0f6f2' }}>
                <button 
                  className="supp-btn supp-btn-primary"
                  style={{ width: '100%', padding: '12px', fontSize: '13px' }}
                  onClick={() => {
                    setIsCartOpen(false);
                    handleNavigate('inquiry');
                  }}
                >
                  Ajukan Konsultasi Sekarang
                </button>
                <button 
                  className="supp-btn"
                  style={{ width: '100%', padding: '10px', fontSize: '12px', marginTop: '8px', backgroundColor: 'transparent', borderColor: 'transparent', color: 'var(--supp-text-primary)' }}
                  onClick={() => {
                    setIsCartOpen(false);
                    handleNavigate('store');
                  }}
                >
                  Kembali Memilih
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
