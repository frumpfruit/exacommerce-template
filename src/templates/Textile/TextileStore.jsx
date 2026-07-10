import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TextileTheme.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProcessPage from './components/ProcessPage';
import CatalogPage from './components/CatalogPage';
import InsightPage from './components/InsightPage';
import ContactPage from './components/ContactPage';
import InquiryPage from './components/InquiryPage';
import ProductDetailPage from './components/ProductDetailPage';
import Footer from './components/Footer';

export default function TextileStore() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Scroll to top on mount and page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = (message) => {
    setToast(message);
  };

  const handleNavigate = (page, data = null) => {
    setActivePage(page);
    if (page === 'product-detail' && data) {
      setSelectedProduct(data);
    }
  };

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1, price: 45 }]; // adding a dummy price for the cart
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, change) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + change;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="textile-theme selection:bg-[var(--txtl-primary-fixed)] selection:text-[var(--txtl-on-primary-fixed)] min-h-screen flex flex-col">
      <Navbar 
        activePage={activePage} 
        onNavigate={handleNavigate}
        cartItems={cartItems}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
      <div className="flex-grow">
        {activePage === 'home' && <HomePage onNavigate={handleNavigate} showToast={showToast} />}
        {activePage === 'about' && <AboutPage onNavigate={handleNavigate} showToast={showToast} />}
        {activePage === 'process' && <ProcessPage onNavigate={handleNavigate} showToast={showToast} />}
        {activePage === 'catalog' && <CatalogPage onNavigate={handleNavigate} onAddToCart={addToCart} showToast={showToast} />}
        {activePage === 'insight' && <InsightPage onNavigate={handleNavigate} showToast={showToast} />}
        {activePage === 'contact' && <ContactPage onNavigate={handleNavigate} showToast={showToast} />}
        {activePage === 'inquiry' && <InquiryPage cartItems={cartItems} onNavigate={handleNavigate} showToast={showToast} />}
        {activePage === 'product-detail' && <ProductDetailPage product={selectedProduct} onNavigate={handleNavigate} onAddToCart={addToCart} showToast={showToast} />}
      </div>
      <Footer onNavigate={handleNavigate} showToast={showToast} />

      {/* Toast Alert */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[100] bg-[var(--txtl-primary)] text-white font-sans text-[12px] tracking-widest px-6 py-4 shadow-2xl flex items-center gap-3 uppercase font-semibold border border-white/10"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span>{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
