import React, { useState, useEffect } from 'react';
import './RoasteryTheme.css';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import StorePage from './components/StorePage';
import AboutPage from './components/AboutPage';
import ProcessPage from './components/ProcessPage';
import InsightPage from './components/InsightPage';
import InquiryPage from './components/InquiryPage';
import ProductDetailPage from './components/ProductDetailPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import { ROASTERY_PRODUCTS } from './products';

export default function RoasteryStore() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  const handleToggleCartItem = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev;
      } else {
        return [...prev, product];
      }
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  return (
    <div className="roastery-theme min-h-screen flex flex-col">
      <Navbar 
        onNavigate={handleNavigate} 
        activePage={activePage} 
        cartCount={cart.length} 
        onOpenCart={() => setIsCartOpen(true)}
      />
      
      <main className={`flex-grow ${activePage === 'home' ? 'pt-0' : 'pt-[72px]'}`}>
        {activePage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onToggleCartItem={handleToggleCartItem} 
            cart={cart}
          />
        )}
        {activePage === 'store' && (
          <StorePage 
            onNavigate={handleNavigate}
            onToggleCartItem={handleToggleCartItem}
            cart={cart}
          />
        )}
        {activePage === 'product-detail' && (
          <ProductDetailPage 
            product={selectedProduct}
            allProducts={ROASTERY_PRODUCTS}
            onAddToCart={handleToggleCartItem}
            onNavigate={handleNavigate}
          />
        )}
        {activePage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {activePage === 'process' && (
          <ProcessPage onNavigate={handleNavigate} />
        )}
        {activePage === 'insight' && (
          <InsightPage onNavigate={handleNavigate} />
        )}
        {activePage === 'inquiry' && (
          <InquiryPage 
            inquiryItems={cart}
            onRemoveItem={handleRemoveFromCart}
            onNavigate={handleNavigate}
          />
        )}
        {activePage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Cart Drawer */}
      {isCartOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div style={{ width: '100%', maxWidth: '420px', backgroundColor: '#FFFFFF', height: '100%', display: 'flex', flexDirection: 'column', padding: '30px' }} className="shadow-2xl">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#001d32' }}>Inquiry List ({cart.length})</h3>
              <button onClick={() => setIsCartOpen(false)} style={{ fontSize: '24px', background: 'none', border: 'none', cursor: 'pointer', color: '#001d32' }}>×</button>
            </div>
            
            <div style={{ flexGrow: 1, overflowY: 'auto' }} className="space-y-4">
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                  <p style={{ color: '#717880', marginBottom: '16px' }}>Your inquiry list is empty.</p>
                  <button 
                    onClick={() => { setIsCartOpen(false); handleNavigate('store'); }}
                    className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-bold"
                  >
                    Browse Catalog
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} style={{ display: 'flex', gap: '16px', alignItems: 'center', borderBottom: '1px solid #edf4ff', paddingBottom: '16px' }}>
                    <img src={item.img} alt={item.name} style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '8px' }} />
                    <div style={{ flexGrow: 1 }}>
                      <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#001d32' }}>{item.name}</h4>
                      <p style={{ fontSize: '12px', color: '#717880', marginTop: '2px' }}>MOQ: {item.moq}</p>
                    </div>
                    <button onClick={() => handleRemoveFromCart(item.id)} style={{ color: '#ba1a1a', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}>Remove</button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div style={{ borderTop: '1px solid #edf4ff', paddingTop: '20px', marginTop: '20px' }}>
                <button 
                  onClick={() => { setIsCartOpen(false); handleNavigate('inquiry'); }}
                  style={{ width: '100%', backgroundColor: '#003759', color: '#FFFFFF', padding: '14px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', border: 'none' }}
                >
                  Proceed to Inquiry
                </button>
                <button 
                  onClick={() => { setIsCartOpen(false); handleNavigate('store'); }}
                  style={{ width: '100%', backgroundColor: 'transparent', color: '#003759', padding: '10px', marginTop: '8px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', border: 'none' }}
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
