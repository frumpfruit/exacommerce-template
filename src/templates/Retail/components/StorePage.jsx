import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const CATEGORIES = ['All', 'Chair', 'Table', 'Lounge', 'Accessories'];

export default function StorePage({ products = [], onAddToCart, onViewDetail }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.tag === selectedCategory);

  return (
    <div style={{ backgroundColor: 'var(--vivere-surface-raised)', padding: 'var(--vivere-space-10) 0' }}>
      <div className="vivere-container">
        {/* Title */}
        <ScrollReveal>
          <h1 className="vivere-heading" style={{ textAlign: 'center', fontSize: 'var(--vivere-text-xl)', marginBottom: 'var(--vivere-space-4)' }}>
            Our <span style={{ color: 'var(--vivere-border-strong)' }}>Catalog</span>
          </h1>
          <p className="vivere-subtext" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto var(--vivere-space-8)' }}>
            Kami menghadirkan produk dengan kualitas terbaik untuk Anda. Silakan telusuri katalog mebel kami dan klik detail untuk informasi lebih lanjut.
          </p>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal delay={100}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--vivere-space-3)',
            marginBottom: 'var(--vivere-space-8)',
            flexWrap: 'wrap'
          }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="vivere-btn"
                style={{
                  backgroundColor: selectedCategory === cat ? 'var(--vivere-text-primary)' : 'transparent',
                  color: selectedCategory === cat ? 'var(--vivere-surface-strong)' : 'var(--vivere-text-primary)',
                  borderColor: 'var(--vivere-text-primary)',
                  padding: 'var(--vivere-space-3) var(--vivere-space-6)',
                  fontSize: '12px'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Product Grid */}
        <ScrollReveal delay={200}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 'var(--vivere-space-8)'
          }}>
            {filteredProducts.map(product => (
              <div 
                key={product.id} 
                className="vivere-product-card-premium" 
                onClick={() => onViewDetail(product)}
                style={{
                  backgroundColor: 'var(--vivere-surface-strong)',
                  border: '1px solid var(--vivere-surface-muted)',
                  borderRadius: 'var(--vivere-radius-xs)',
                  padding: 'var(--vivere-space-5)',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--vivere-shadow-1)',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <div className="vivere-product-image-box" style={{ 
                  height: '240px', 
                  backgroundColor: 'var(--vivere-surface-raised)',
                  marginBottom: 'var(--vivere-space-4)'
                }}>
                  <img src={product.img} alt={product.name} style={{ maxWidth: '85%', maxHeight: '85%' }} />
                  
                  {product.tag && (
                    <span className="vivere-product-badge">{product.tag}</span>
                  )}
                  
                  {/* Add to Cart Overlay */}
                  <div className="product-card-overlay" style={{
                    position: 'absolute',
                    bottom: 'var(--vivere-space-3)',
                    left: 'var(--vivere-space-3)',
                    right: 'var(--vivere-space-3)',
                    zIndex: 3
                  }}>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="vivere-btn vivere-btn-primary" 
                      style={{ width: '100%', fontSize: '11px', padding: 'var(--vivere-space-3)' }}
                    >
                      Masukkan Keranjang
                    </button>
                  </div>
                </div>

                {/* Title & Price */}
                <h3 style={{ 
                  fontSize: '15px', 
                  fontWeight: 700, 
                  marginBottom: 'var(--vivere-space-2)',
                  color: 'var(--vivere-text-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {product.name}
                </h3>
                
                <p style={{
                  fontSize: '11px',
                  color: 'var(--vivere-text-secondary)',
                  lineHeight: 1.4,
                  marginBottom: 'var(--vivere-space-3)',
                  minHeight: '32px',
                  opacity: 0.8,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {product.desc}
                </p>

                <div style={{ 
                  marginTop: 'auto', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  borderTop: '1px solid var(--vivere-surface-muted)',
                  paddingTop: 'var(--vivere-space-4)',
                  gap: 'var(--vivere-space-3)'
                }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--vivere-text-primary)' }}>
                    {product.priceFormatted}
                  </span>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewDetail(product);
                    }}
                    className="vivere-btn"
                    style={{
                      marginLeft: 'auto',
                      padding: '6px 12px',
                      fontSize: '11px',
                      backgroundColor: 'transparent',
                      color: 'var(--vivere-border-strong)',
                      borderColor: 'var(--vivere-border-strong)'
                    }}
                  >
                    Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
