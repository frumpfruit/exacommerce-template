import React, { useState, useEffect } from 'react';
import './RetailTheme.css'; // Import the specific CSS tokens for HAVEN

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

const PRODUCTS = [
  { 
    id: 1, 
    name: 'BORA Stacking Armless Chair', 
    price: 300, 
    priceFormatted: 'Rp 300', 
    img: '/images/retail/bora_chair.png', 
    tag: 'Chair', 
    stock: 100, 
    desc: 'Premium solid wood stacking chair, ergonomic slats, perfect for outdoor and dining settings.' 
  },
  { 
    id: 2, 
    name: 'Circa Side Table', 
    price: 1100000, 
    priceFormatted: 'IDR 1,100,000', 
    img: '/images/retail/product_dining_table_1780307623683.png', 
    tag: 'Table', 
    stock: 50, 
    desc: 'FSC-certified solid oak side table with a minimalist cylindrical silhouette.' 
  },
  { 
    id: 3, 
    name: 'Crema Dining Table 8 Seater', 
    price: 35000000, 
    priceFormatted: 'IDR 35,000,000', 
    img: '/images/retail/product_dining_table_1780307623683.png', 
    tag: 'Table', 
    stock: 15, 
    desc: 'Eight-seater dining table handcrafted from solid European white oak.' 
  },
  { 
    id: 4, 
    name: 'Livra Coffee Table', 
    price: 6500000, 
    priceFormatted: 'IDR 6,500,000', 
    img: '/images/retail/product_dining_table_1780307623683.png', 
    tag: 'Table', 
    stock: 20, 
    desc: 'Architectural solid wood coffee table with distinct floating leg joins.' 
  },
  { 
    id: 5, 
    name: 'Minimalist Lounge Chair', 
    price: 4500000, 
    priceFormatted: 'IDR 4,500,000', 
    img: '/images/retail/product_lounge_chair_1780307435536.png', 
    tag: 'Chair', 
    stock: 35, 
    desc: 'Curved ash wood structure upholstered in premium linen boucle fabric.' 
  },
  { 
    id: 6, 
    name: 'Ceramic Table Lamp', 
    price: 1200000, 
    priceFormatted: 'IDR 1,200,000', 
    img: '/images/retail/product_ceramic_lamp_1780307642586.png', 
    tag: 'Accessories', 
    stock: 80, 
    desc: 'Hand-thrown sand textured ceramic base with organic linen shade.' 
  },
  { 
    id: 7, 
    name: 'Velvet Sofa 3 Seater', 
    price: 12000000, 
    priceFormatted: 'IDR 12,000,000', 
    img: '/images/retail/product_lounge_chair_1780307435536.png', 
    tag: 'Lounge', 
    stock: 8, 
    desc: 'Luxurious three-seater sofa featuring high-density cushioning and brushed brass legs.' 
  },
  { 
    id: 8, 
    name: 'Oak Wood TV Stand', 
    price: 8500000, 
    priceFormatted: 'IDR 8,500,000', 
    img: '/images/retail/product_dining_table_1780307623683.png', 
    tag: 'Table', 
    stock: 12, 
    desc: 'Sleek entertainment unit made of rift-cut oak with slide-to-reveal slatted doors.' 
  }
];

export default function RetailStore() {
  const [activePage, setActivePage] = useState('home');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [inquiryItems, setInquiryItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Scroll to top on page change
  useEffect(() => {
    const themeWrapper = document.querySelector('.vivere-theme');
    if (themeWrapper) {
      themeWrapper.scrollTop = 0;
      const parent = themeWrapper.parentElement;
      if (parent) {
        parent.scrollTop = 0;
      }
    }
    window.scrollTo(0, 0);
  }, [activePage, selectedProduct]);

  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.product.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const handleUpdateQuantity = (productId, amount) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.product.id === productId) {
          const newQty = item.quantity + amount;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  const handleInquireNow = (product, quantity = 1) => {
    setInquiryItems([{ product, quantity }]);
    setActivePage('inquiry');
  };

  const handleCheckout = () => {
    setInquiryItems(cart);
    setCartOpen(false);
    setActivePage('inquiry');
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleViewDetail = (product) => {
    if (product === null) {
      setSelectedProduct(null);
      setActivePage('store');
    } else {
      setSelectedProduct(product);
      setActivePage('product-detail');
    }
  };

  const cartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="vivere-theme">
      {/* Navbar Component */}
      <Navbar 
        activePage={activePage} 
        onNavigate={(page) => {
          setSelectedProduct(null);
          setActivePage(page);
        }} 
        cartCount={cartCount} 
        onOpenCart={() => setCartOpen(true)} 
      />

      {/* Pages Switcher */}
      <main>
        {activePage === 'home' && (
          <HomePage 
            products={PRODUCTS}
            onNavigate={(page, prod) => {
              if (page === 'product-detail') {
                setSelectedProduct(prod);
                setActivePage('product-detail');
              } else {
                setSelectedProduct(null);
                setActivePage(page);
              }
            }} 
            onAddToCart={handleAddToCart} 
          />
        )}
        {activePage === 'about' && (
          <AboutPage />
        )}
        {activePage === 'process' && (
          <ProcessPage onNavigate={(page) => {
            setSelectedProduct(null);
            setActivePage(page);
          }} />
        )}
        {activePage === 'insights' && (
          <InsightsPage />
        )}
        {activePage === 'contact' && (
          <ContactPage />
        )}
        {activePage === 'store' && (
          <StorePage 
            products={PRODUCTS}
            onAddToCart={handleAddToCart} 
            onViewDetail={handleViewDetail} 
          />
        )}
        {activePage === 'product-detail' && (
          <ProductDetailPage 
            product={selectedProduct}
            onAddToCart={handleAddToCart}
            onInquireNow={handleInquireNow}
            onSelectProduct={handleViewDetail}
            allProducts={PRODUCTS}
          />
        )}
        {activePage === 'inquiry' && (
          <InquiryPage 
            inquiryItems={inquiryItems} 
            onGoBack={() => {
              if (selectedProduct) {
                setActivePage('product-detail');
              } else {
                setActivePage('store');
              }
            }} 
            onClearCart={handleClearCart} 
          />
        )}
      </main>

      {/* Footer Component */}
      <Footer />

      {/* Cart Drawer Component */}
      {cartOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(3px)',
          zIndex: 999,
          display: 'flex',
          justifyContent: 'flex-end',
          animation: 'fadeIn 0.3s ease-out'
        }} onClick={() => setCartOpen(false)}>
          
          <div style={{
            width: '100%',
            maxWidth: '420px',
            height: '100%',
            backgroundColor: 'var(--vivere-surface-strong)',
            boxShadow: 'var(--vivere-shadow-1)',
            padding: 'var(--vivere-space-6) var(--vivere-space-6) var(--vivere-space-8) var(--vivere-space-6)',
            display: 'flex',
            flexDirection: 'column',
            animation: 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            position: 'relative'
          }} onClick={e => e.stopPropagation()}>
            
            {/* Drawer Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--vivere-surface-muted)',
              paddingBottom: 'var(--vivere-space-4)',
              marginBottom: 'var(--vivere-space-6)'
            }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--vivere-text-primary)',
                margin: 0
              }}>
                Keranjang Belanja ({cartCount})
              </h2>
              <button 
                onClick={() => setCartOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 'var(--vivere-space-2)',
                  display: 'flex',
                  color: 'var(--vivere-text-secondary)',
                  transition: 'color 0.2s'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Drawer Body */}
            <div style={{ flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
              {cart.length === 0 ? (
                /* Empty state */
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  textAlign: 'center',
                  padding: '0 var(--vivere-space-6)'
                }}>
                  {/* Shopping Bag Icon */}
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--vivere-surface-raised)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--vivere-space-5)',
                    color: '#9ca3af'
                  }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                  </div>
                  
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--vivere-text-primary)', marginBottom: 'var(--vivere-space-2)' }}>
                    Keranjang Anda kosong
                  </h3>
                  
                  <p style={{ fontSize: '12px', color: 'var(--vivere-text-secondary)', lineHeight: 1.5, marginBottom: 'var(--vivere-space-6)' }}>
                    Tambahkan produk untuk memulai belanja
                  </p>

                  <button 
                    onClick={() => {
                      setCartOpen(false);
                      setSelectedProduct(null);
                      setActivePage('store');
                    }}
                    className="vivere-btn vivere-btn-primary"
                    style={{ fontSize: '12px', padding: '10px 20px', borderRadius: '4px' }}
                  >
                    Belanja Sekarang
                  </button>
                </div>
              ) : (
                /* Cart Items List */
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-5)' }}>
                  {cart.map(item => (
                    <div key={item.product.id} style={{
                      display: 'flex',
                      gap: 'var(--vivere-space-4)',
                      borderBottom: '1px solid var(--vivere-surface-muted)',
                      paddingBottom: 'var(--vivere-space-4)'
                    }}>
                      {/* Image Thumbnail */}
                      <div style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: 'var(--vivere-surface-raised)',
                        borderRadius: 'var(--vivere-radius-xs)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <img src={item.product.img} alt={item.product.name} style={{ maxWidth: '85%', maxHeight: '85%', objectFit: 'contain' }} />
                      </div>

                      {/* Info & Controls */}
                      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', margin: '0 0 var(--vivere-space-1) 0', color: 'var(--vivere-text-primary)' }}>
                            {item.product.name}
                          </h4>
                          <span style={{ fontSize: '12px', color: 'var(--vivere-text-secondary)' }}>
                            {item.product.priceFormatted}
                          </span>
                        </div>

                        {/* Quantity controls */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--vivere-space-3)' }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid var(--vivere-surface-muted)',
                            borderRadius: '4px',
                            overflow: 'hidden'
                          }}>
                            <button 
                              onClick={() => handleUpdateQuantity(item.product.id, -1)}
                              style={{ border: 'none', background: 'none', width: '28px', height: '28px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 600 }}
                            >
                              -
                            </button>
                            <span style={{ width: '28px', textAlign: 'center', fontSize: '12px', fontWeight: 600 }}>
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => handleUpdateQuantity(item.product.id, 1)}
                              style={{ border: 'none', background: 'none', width: '28px', height: '28px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 600 }}
                            >
                              +
                            </button>
                          </div>

                          <button 
                            onClick={() => handleRemoveFromCart(item.product.id)}
                            style={{
                              border: 'none',
                              background: 'none',
                              color: '#ef4444',
                              fontSize: '11px',
                              fontWeight: 600,
                              cursor: 'pointer',
                              textDecoration: 'underline'
                            }}
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

            {/* Drawer Footer (Only if cart not empty) */}
            {cart.length > 0 && (
              <div style={{
                borderTop: '1px solid var(--vivere-surface-muted)',
                paddingTop: 'var(--vivere-space-5)',
                marginTop: 'var(--vivere-space-4)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 'var(--vivere-space-5)'
                }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--vivere-text-secondary)' }}>
                    Total Item
                  </span>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--vivere-text-primary)' }}>
                    {cartCount} Unit
                  </span>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="vivere-btn vivere-btn-primary"
                  style={{ width: '100%', padding: '12px 0', fontSize: '12px' }}
                >
                  Checkout / Kirim Inquiry
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
