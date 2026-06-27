import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const CATEGORIES = ['All', 'Daily Nutrition', 'Detox & Cleanse', 'Fitness & Strength'];

export default function StorePage({ products = [], onAddToCart, onViewDetail }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div style={{ backgroundColor: 'var(--supp-surface-base)', padding: '60px 0', minHeight: '100vh' }}>
      <div className="supp-container">
        {/* Title */}
        <ScrollReveal>
          <h1 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 800, color: 'var(--supp-text-primary)', marginBottom: '15px' }}>
            Katalog <span style={{ color: 'var(--supp-surface-raised)' }}>Nutrisi</span>
          </h1>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px', fontSize: '15px', color: 'rgba(33, 37, 41, 0.75)', lineHeight: 1.6 }}>
            Temukan produk pangan fungsional organik bersertifikasi nasional untuk mendukung kebugaran harian Anda dan keluarga.
          </p>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal delay={100}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="supp-btn"
                style={{
                  backgroundColor: selectedCategory === cat ? 'var(--supp-surface-raised)' : 'transparent',
                  color: selectedCategory === cat ? '#ffffff' : 'var(--supp-text-primary)',
                  borderColor: 'var(--supp-surface-raised)',
                  padding: '8px 20px',
                  fontSize: '13px',
                  textTransform: 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Product Grid */}
        <ScrollReveal delay={200}>
          <div className="supp-products-grid">
            {filteredProducts.map(product => (
              <div 
                key={product.id} 
                className="supp-product-card" 
                onClick={() => onViewDetail(product)}
                style={{
                  backgroundColor: 'var(--supp-surface-card)',
                  border: '1px solid var(--supp-border-muted)',
                  borderRadius: '20px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--supp-shadow-2)',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <div className="supp-product-image-box" style={{ 
                  height: '240px', 
                  backgroundColor: 'linear-gradient(135deg, #f0f6f2 0%, #ffffff 100%)',
                  marginBottom: '20px',
                  position: 'relative'
                }}>
                  {/* SVG Illustration of can/bottle depending on product */}
                  <svg viewBox="0 0 200 200" style={{ width: '120px', height: '120px' }}>
                    <rect x="60" y="40" width="80" height="130" rx="10" fill="#0d120f" stroke={product.id === 1 ? '#78be00' : product.id === 2 ? '#03582d' : '#ffcd00'} strokeWidth="3" />
                    <rect x="70" y="28" width="60" height="12" rx="3" fill="#ffcd00" />
                    <circle cx="100" cy="100" r="18" fill={product.id === 1 ? '#78be00' : product.id === 2 ? '#03582d' : '#ffcd00'} opacity="0.3" />
                    <path d="M90,100 Q100,90 110,100" stroke="#ffffff" strokeWidth="2" />
                    <rect x="75" y="130" width="50" height="4" rx="2" fill="#ffffff" opacity="0.4" />
                    <rect x="85" y="140" width="30" height="3" rx="1.5" fill="#ffffff" opacity="0.4" />
                  </svg>
                  
                  {product.tag && (
                    <span className="supp-product-tag" style={{ backgroundColor: 'var(--supp-surface-strong)', color: 'var(--supp-text-secondary)' }}>
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Info & Description */}
                <span style={{ fontSize: '11px', color: 'var(--supp-surface-raised)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
                  {product.category}
                </span>
                
                <h3 className="supp-product-title" style={{ fontSize: '20px', color: 'var(--supp-text-primary)', marginBottom: '8px' }}>
                  {product.name}
                </h3>
                
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(33, 37, 41, 0.75)',
                  lineHeight: 1.5,
                  marginBottom: '20px',
                  minHeight: '36px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {product.desc}
                </p>

                {/* Nutritional mini tags */}
                <div className="supp-product-nutrients" style={{ borderTop: '1px solid var(--supp-border-muted)', paddingTop: '12px', marginBottom: '20px' }}>
                  <div className="supp-nutrient-tag" style={{ backgroundColor: '#f0f6f2', color: 'var(--supp-text-secondary)', border: '1px solid var(--supp-border-muted)' }}>{product.calories}</div>
                  <div className="supp-nutrient-tag" style={{ backgroundColor: '#f0f6f2', color: 'var(--supp-text-secondary)', border: '1px solid var(--supp-border-muted)' }}>P: {product.protein}</div>
                  <div className="supp-nutrient-tag" style={{ backgroundColor: '#f0f6f2', color: 'var(--supp-text-secondary)', border: '1px solid var(--supp-border-muted)' }}>Serat: {product.fiber}</div>
                </div>

                <div style={{ 
                  marginTop: 'auto', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center'
                }}>
                  <span className="supp-product-price" style={{ fontSize: '18px' }}>
                    {product.priceFormatted.split(' / ')[0]}
                  </span>
                  
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="supp-btn supp-btn-primary"
                      style={{ padding: '8px 14px', fontSize: '12px' }}
                    >
                      Beli / +RFQ
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onViewDetail(product);
                      }}
                      className="supp-btn"
                      style={{
                        padding: '6px 12px',
                        fontSize: '11px',
                        backgroundColor: 'transparent',
                        color: 'var(--supp-text-primary)',
                        borderColor: 'var(--supp-border-muted)',
                        borderWidth: '2px',
                        borderStyle: 'solid'
                      }}
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
