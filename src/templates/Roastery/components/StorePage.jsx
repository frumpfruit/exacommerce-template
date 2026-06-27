import React, { useState } from 'react';
import { ROASTERY_PRODUCTS } from '../products';

export default function StorePage({ onNavigate, onToggleCartItem, cart }) {
  const [selectedCat, setSelectedCat] = useState('All');
  const categories = ['All', 'Brewers', 'Coffee Pods', 'Espresso Selection', 'Iced Beverages'];

  const filteredProducts = selectedCat === 'All'
    ? ROASTERY_PRODUCTS
    : ROASTERY_PRODUCTS.filter(p => p.category === selectedCat);

  return (
    <div className="bg-pure-white min-h-screen py-12 px-6 lg:px-margin-desktop">
      <div className="max-w-container-max mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-secondary font-label-md uppercase tracking-wider font-bold">Catalog</span>
          <h1 className="text-display-lg font-display-lg text-primary font-extrabold">Elite Coffee Store</h1>
          <p className="text-body-lg text-on-surface-variant">
            Explore our curated bundles and specialty blends optimized for direct extraction.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex justify-center gap-4 overflow-x-auto pb-4 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-6 py-2 rounded-full font-label-lg text-label-lg border transition-all ${selectedCat === cat ? 'bg-primary text-pure-white border-primary' : 'bg-surface-container-low text-primary border-outline-variant/30 hover:bg-surface-container'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
          {filteredProducts.map(prod => {
            const isAdded = cart.some(item => item.id === prod.id);
            return (
              <div 
                key={prod.id} 
                className="bg-pure-white border border-outline-variant/30 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <div 
                    onClick={() => onNavigate('product-detail', prod)}
                    className="aspect-square w-full rounded-xl overflow-hidden mb-6 border border-outline-variant/20 bg-surface-container-low cursor-pointer group"
                  >
                    <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="space-y-2 mb-6">
                    <span className="text-secondary font-label-md uppercase tracking-wider text-xs font-bold">{prod.category}</span>
                    <h3 
                      onClick={() => onNavigate('product-detail', prod)}
                      className="text-headline-md font-headline-md font-bold text-primary cursor-pointer hover:opacity-70 transition-opacity"
                    >
                      {prod.name}
                    </h3>
                    <p className="text-body-md text-on-surface-variant line-clamp-3 leading-relaxed">{prod.desc}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-label-md text-outline block">MOQ: {prod.moq}</span>
                      <span className="text-headline-md font-bold text-primary">${prod.price}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => onToggleCartItem(prod)}
                    className={`w-full py-3 rounded-lg font-label-lg text-label-lg font-bold transition-all ${isAdded ? 'bg-secondary text-pure-white hover:bg-on-secondary-container' : 'bg-primary text-pure-white hover:bg-ocean-deep'}`}
                  >
                    {isAdded ? 'Remove from Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
