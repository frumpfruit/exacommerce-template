import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Minus, Plus, ShoppingCart, ShieldCheck, Check, ChevronDown, ChevronUp, Globe } from 'lucide-react';

export default function ProductDetailPage({ product, onNavigate, onAddToCart, showToast }) {
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [selectedSwatch, setSelectedSwatch] = useState(0);

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setQuantity(1);
    setSelectedSwatch(0);
  }, [product]);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center font-sans">
        <h2 className="text-2xl font-serif text-[color:var(--txtl-primary)] mb-4">No product selected</h2>
        <button onClick={() => onNavigate('catalog')} className="px-6 py-3 bg-[var(--txtl-primary)] text-white uppercase tracking-wider font-semibold">
          Return to Catalog
        </button>
      </div>
    );
  }

  const mockSwatches = [
    product.image,
    "/images/textile/macro.jpg",
    "/images/textile/weaves.jpg"
  ];

  const archiveProducts = [
    {
      id: 1, title: "Giza 88 Organic Cotton", category: "Sustainable",
      image: "/images/textile/catalog-cotton.jpg", weight: "120gsm", origin: "Egypt", weave: "Sateen"
    },
    {
      id: 2, title: "Hand-loomed Mulberry Silk", category: "Heritage",
      image: "/images/textile/catalog-silk.jpg", weight: "45gsm", origin: "Japan", weave: "Habotai"
    },
    {
      id: 3, title: "Belgian Heritage Linen", category: "Heritage",
      image: "/images/textile/catalog-linen.jpg", weight: "280gsm", origin: "Belgium", weave: "Plain"
    },
    {
      id: 4, title: "Recycled Cashmere", category: "Sustainable",
      image: "/images/textile/catalog-cashmere.jpg", weight: "320gsm", origin: "Italy", weave: "Twill"
    },
    {
      id: 5, title: "Raw Himalayan Wool", category: "Heritage",
      image: "/images/textile/catalog-hero.jpg", weight: "400gsm", origin: "Nepal", weave: "Twill"
    },
    {
      id: 6, title: "Organic Bamboo Silk", category: "Sustainable",
      image: "/images/textile/catalog-silk.jpg", weight: "150gsm", origin: "Indonesia", weave: "Satin"
    },
    {
      id: 7, title: "Vintage French Linen", category: "Heritage",
      image: "/images/textile/catalog-linen.jpg", weight: "300gsm", origin: "France", weave: "Plain"
    },
    {
      id: 8, title: "Regenerative Cotton Blend", category: "Sustainable",
      image: "/images/textile/catalog-cotton.jpg", weight: "180gsm", origin: "USA", weave: "Percale"
    }
  ];

  const relatedProducts = archiveProducts
    .filter(p => p.id !== product.id && (p.category === product.category || p.weave === product.weave))
    .slice(0, 3);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleAddToCart = () => {
    // Add quantity times to cart
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    showToast(`${quantity} yard(s) of ${product.title} added to inquiry list.`);
  };

  return (
    <div className="bg-[var(--txtl-surface)] min-h-screen font-sans pt-12 pb-24">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[80px]">
        {/* Breadcrumbs & Back Navigation */}
        <button 
          onClick={() => onNavigate('catalog')}
          className="group flex items-center gap-2 font-sans text-[12px] font-semibold uppercase tracking-widest text-[color:var(--txtl-outline)] hover:text-[color:var(--txtl-primary)] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Catalog
        </button>

        {/* Product Core Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Swatch Viewer / Gallery */}
          <div className="lg:col-span-7 space-y-6">
            <div className="aspect-square bg-[var(--txtl-surface-container-low)] border border-[#c5c6cc]/30 overflow-hidden relative group">
              <img 
                src={mockSwatches[selectedSwatch]} 
                alt={product.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/95 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[color:var(--txtl-primary)] border border-[#c5c6cc]/30 shadow-sm">
                Swatched Live
              </div>
            </div>

            {/* Thumbnail Selection */}
            <div className="flex gap-4">
              {mockSwatches.map((swatch, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedSwatch(idx)}
                  className={`w-24 h-24 border overflow-hidden transition-all duration-300 relative ${selectedSwatch === idx ? 'border-[var(--txtl-primary)] ring-2 ring-[var(--txtl-primary)]/10 scale-95' : 'border-[#c5c6cc]/30 hover:border-[var(--txtl-outline)] opacity-70 hover:opacity-100'}`}
                >
                  <img src={swatch} alt="Swatch snippet" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Narrative & Actions */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="font-sans text-[12px] font-semibold text-[color:var(--txtl-outline)] uppercase tracking-[0.2em] mb-4 block">
                {product.category} COLLECTION
              </span>
              <h1 className="font-serif text-[38px] md:text-[48px] leading-[1.15] text-[color:var(--txtl-primary)] mb-6">
                {product.title}
              </h1>
              <p className="font-serif text-[24px] text-[color:var(--txtl-primary)] font-light italic mb-8">
                $45.00 <span className="font-sans text-[14px] text-[color:var(--txtl-outline)] not-italic uppercase tracking-wider ml-1">/ yard (sample minimum 1yd)</span>
              </p>
              <p className="font-sans text-[16px] leading-[26px] text-[color:var(--txtl-secondary)]">
                Highly sought-after, master-crafted raw fabric. This weave is custom-sourced to meet the rigorous durability and sensory standards of elite architecture and luxury fashion design houses.
              </p>
            </div>

            {/* Structured Specifications Grid */}
            <div className="grid grid-cols-3 gap-4 border-y border-[#c5c6cc]/30 py-6">
              <div className="text-center md:text-left border-r border-[#c5c6cc]/30 last:border-none pr-2">
                <span className="font-sans text-[10px] font-bold text-[color:var(--txtl-outline)] uppercase tracking-wider block mb-1">ORIGIN</span>
                <span className="font-sans text-[14px] font-semibold text-[color:var(--txtl-primary)]">{product.origin}</span>
              </div>
              <div className="text-center md:text-left border-r border-[#c5c6cc]/30 last:border-none px-2">
                <span className="font-sans text-[10px] font-bold text-[color:var(--txtl-outline)] uppercase tracking-wider block mb-1">WEIGHT</span>
                <span className="font-sans text-[14px] font-semibold text-[color:var(--txtl-primary)]">{product.weight}</span>
              </div>
              <div className="text-center md:text-left last:border-none pl-2">
                <span className="font-sans text-[10px] font-bold text-[color:var(--txtl-outline)] uppercase tracking-wider block mb-1">WEAVE STYLE</span>
                <span className="font-sans text-[14px] font-semibold text-[color:var(--txtl-primary)]">{product.weave}</span>
              </div>
            </div>

            {/* Cart & Inquiry Actions */}
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center border border-[#c5c6cc] h-14 bg-white">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-4 hover:bg-[var(--txtl-surface-container-low)] text-[color:var(--txtl-primary)] transition-colors h-full flex items-center justify-center"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-sans font-semibold text-[16px]">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="px-4 hover:bg-[var(--txtl-surface-container-low)] text-[color:var(--txtl-primary)] transition-colors h-full flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button 
                  onClick={handleAddToCart}
                  className="flex-grow bg-[var(--txtl-primary)] text-white font-sans font-semibold text-[14px] uppercase tracking-widest h-14 flex items-center justify-center gap-3 hover:bg-[#040d17]/90 transition-colors shadow-sm"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Inquiry Cart
                </button>
              </div>

              <button 
                onClick={() => onNavigate('inquiry')}
                className="w-full border border-[var(--txtl-primary)] text-[color:var(--txtl-primary)] font-sans font-semibold text-[14px] uppercase tracking-widest h-14 hover:bg-[var(--txtl-surface-container-high)] transition-all flex items-center justify-center"
              >
                Request Custom Yardage Inquiry
              </button>
            </div>

            {/* Immersive Accordion Details */}
            <div className="border-t border-[#c5c6cc]/30 pt-6 space-y-4">
              {[
                {
                  title: "Sustainability & Traceability",
                  content: "This fabric is GOTS (Global Organic Textile Standard) certified, ensuring 100% ecological harvesting and fair trade sourcing from local co-ops. Our blockchain tracking guarantees transparency from crop harvest to shipping manifest."
                },
                {
                  title: "Weaving Specifications",
                  content: "Woven on historical tension-adjusted looms. Features a tight, uniform fiber structure offering enhanced dimensional stability and excellent color saturation for organic dye-stuffs. Tensile strength rated at 420N."
                },
                {
                  title: "Care Guidelines",
                  content: "Dry clean recommended to preserve the raw protein or cellulose luster. Alternatively, wash gently in lukewarm water with certified natural pH-neutral liquid detergents. Dry flat in shade. Iron medium-low."
                }
              ].map((item, idx) => (
                <div key={idx} className="border-b border-[#c5c6cc]/30 pb-4">
                  <button 
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex justify-between items-center text-left py-2 font-sans text-[14px] font-semibold text-[color:var(--txtl-primary)] uppercase tracking-wider hover:text-[color:var(--txtl-outline)] transition-colors"
                  >
                    {item.title}
                    {activeAccordion === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  <AnimatePresence initial={false}>
                    {activeAccordion === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="font-sans text-[14px] text-[color:var(--txtl-secondary)] leading-relaxed pt-2">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Curations Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 pt-20 border-t border-[#c5c6cc]/30">
            <h2 className="font-serif text-[36px] text-[color:var(--txtl-primary)] mb-12">Related Curations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map(rel => (
                <div 
                  key={rel.id}
                  onClick={() => onNavigate('product-detail', rel)}
                  className="group cursor-pointer border border-[#c5c6cc]/30 bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  <div className="aspect-square overflow-hidden bg-[var(--txtl-surface-container)] relative">
                    <img src={rel.image} alt={rel.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[color:var(--txtl-outline)] mb-2 block">{rel.category}</span>
                      <h4 className="font-serif text-[20px] text-[color:var(--txtl-primary)] leading-tight mb-4 group-hover:text-[color:var(--txtl-outline)] transition-colors line-clamp-1">{rel.title}</h4>
                    </div>
                    <span className="font-sans text-[12px] font-semibold uppercase tracking-widest text-[color:var(--txtl-primary)] border-b border-[var(--txtl-primary)] w-fit pb-1 group-hover:text-[color:var(--txtl-outline)] group-hover:border-[color:var(--txtl-outline)] transition-all">
                      Explore Fabric
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
