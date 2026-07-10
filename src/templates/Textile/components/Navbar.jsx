import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react';

export default function Navbar({ 
  activePage = 'home', 
  onNavigate = () => {},
  cartItems = [],
  isCartOpen = false,
  setIsCartOpen = () => {},
  updateQuantity = () => {},
  removeFromCart = () => {}
}) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNav = (pageId) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
  };

  const navItems = ['Home', 'About', 'Process', 'Catalog', 'Insight', 'Contact'];

  return (
    <>
      <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? 'bg-white shadow-md border-[#c5c6cc]/30' : 'bg-white/95 backdrop-blur border-[#c5c6cc]/10'}`}>
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-[20px] md:px-[80px] py-5">
          <button onClick={() => onNavigate('home')} className="font-serif text-[24px] leading-[32px] font-normal tracking-tighter text-[color:var(--txtl-primary)]">
            Silk & Stone Collective
          </button>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const pageId = item.toLowerCase();
              const isActive = activePage === pageId;
              return (
                <button 
                  key={item} 
                  onClick={() => onNavigate(pageId)}
                  className={`transition-colors duration-300 font-sans font-semibold text-[14px] tracking-[0.05em] ${isActive ? 'text-[color:var(--txtl-primary)] border-b-2 border-[var(--txtl-primary)] pb-1' : 'text-[color:var(--txtl-secondary)] hover:text-[color:var(--txtl-primary)]'}`}
                >
                  {item}
                </button>
              );
            })}
          </nav>
          
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center border-b border-[#c5c6cc]/50 focus-within:border-[var(--txtl-primary)] transition-all pb-1">
              <Search className="text-[color:var(--txtl-outline)] w-5 h-5 mr-1" />
              <input className="bg-transparent border-none focus:ring-0 text-[12px] font-medium tracking-[0.05em] text-[color:var(--txtl-primary)] placeholder-[var(--txtl-outline)] py-0 w-32 outline-none" placeholder="Search Inventory" type="text" />
            </div>
            
            <div className="hidden md:flex items-center gap-2">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="text-[color:var(--txtl-primary)] p-2 hover:bg-[var(--txtl-surface-container-low)] rounded-full transition-all relative"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItems.length > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--txtl-primary)] rounded-full"></span>
                )}
              </button>
              <button onClick={() => onNavigate('inquiry')} className="bg-[var(--txtl-primary)] text-[color:var(--txtl-on-primary)] font-sans font-semibold text-[14px] tracking-wider px-6 py-2 ml-4 hover:bg-[#040d17]/90 transition-colors">
                INQUIRY
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 md:hidden ml-auto">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="text-[color:var(--txtl-primary)] p-2 hover:bg-[var(--txtl-surface-container-low)] rounded-full transition-all relative"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItems.length > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--txtl-primary)] rounded-full"></span>
                )}
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-[color:var(--txtl-primary)] p-2 hover:bg-[var(--txtl-surface-container-low)] rounded-full transition-all"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-[var(--txtl-background)] shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-6 border-b border-[#c5c6cc]/30">
                <span className="font-serif text-[20px] text-[color:var(--txtl-primary)]">Navigation</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[color:var(--txtl-primary)] p-2 hover:bg-[var(--txtl-surface-container-low)] rounded-full transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex flex-col p-6 gap-6 overflow-y-auto">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => {
                    const pageId = item.toLowerCase();
                    const isActive = activePage === pageId;
                    return (
                      <button 
                        key={item} 
                        onClick={() => handleMobileNav(pageId)}
                        className={`text-left text-[18px] font-sans font-semibold tracking-widest uppercase transition-colors ${isActive ? 'text-[color:var(--txtl-primary)]' : 'text-[color:var(--txtl-outline)] hover:text-[color:var(--txtl-primary)]'}`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </nav>
                
                <div className="mt-8 pt-8 border-t border-[#c5c6cc]/30 flex flex-col gap-6">
                  <button 
                    onClick={() => handleMobileNav('inquiry')} 
                    className="bg-[var(--txtl-primary)] text-[color:var(--txtl-on-primary)] font-sans font-semibold text-[14px] tracking-wider px-6 py-4 text-center hover:bg-[#040d17]/90 transition-colors uppercase w-full"
                  >
                    START INQUIRY
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full md:w-[450px] bg-[var(--txtl-background)] shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-6 border-b border-[#c5c6cc]/30 bg-white">
                <span className="font-serif text-[24px] text-[color:var(--txtl-primary)]">Your Cart</span>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-[color:var(--txtl-primary)] p-2 hover:bg-[var(--txtl-surface-container-low)] rounded-full transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 bg-[var(--txtl-surface-container-low)]">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-[color:var(--txtl-secondary)] opacity-70">
                    <ShoppingCart className="w-16 h-16 mb-4 stroke-1" />
                    <p className="font-sans text-[16px] tracking-widest uppercase">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 bg-white p-4 border border-[#c5c6cc]/30 relative group">
                        <div className="w-24 h-24 shrink-0 bg-gray-100">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[color:var(--txtl-outline)] block mb-1">{item.category}</span>
                            <h4 className="font-serif text-[18px] text-[color:var(--txtl-primary)] leading-tight mb-2 pr-6 line-clamp-2">{item.title}</h4>
                            <p className="font-sans text-[14px] text-[color:var(--txtl-primary)] font-medium">${item.price * item.quantity}.00</p>
                          </div>
                          
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center border border-[#c5c6cc]">
                              <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-[var(--txtl-surface-container-low)] text-[color:var(--txtl-primary)] transition-colors"><Minus className="w-4 h-4" /></button>
                              <span className="w-8 text-center font-sans text-[14px] font-semibold">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-[var(--txtl-surface-container-low)] text-[color:var(--txtl-primary)] transition-colors"><Plus className="w-4 h-4" /></button>
                            </div>
                          </div>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="absolute top-4 right-4 text-[color:var(--txtl-outline)] hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-[#c5c6cc]/30 bg-white">
                  <div className="flex justify-between items-center mb-6 font-serif text-[20px] text-[color:var(--txtl-primary)]">
                    <span>Subtotal</span>
                    <span>${cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)}.00</span>
                  </div>
                  <p className="font-sans text-[12px] text-[color:var(--txtl-secondary)] mb-6 text-center">Shipping and taxes calculated at checkout.</p>
                  <button 
                    onClick={() => {
                      setIsCartOpen(false);
                      onNavigate('inquiry');
                    }}
                    className="w-full bg-[var(--txtl-primary)] text-[color:var(--txtl-on-primary)] font-sans font-semibold text-[14px] tracking-widest px-6 py-4 hover:bg-[#040d17]/90 transition-colors uppercase"
                  >
                    Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
