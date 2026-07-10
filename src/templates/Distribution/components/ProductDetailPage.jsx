import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function ProductDetailPage({ product, onAddToCart, onInquireNow, onSelectProduct, allProducts = [] }) {
  if (!product) return null;

  const relatedProducts = allProducts.filter(p => p.id !== product.id && p.tag === product.tag).slice(0, 3);

  return (
    <div style={{ backgroundColor: 'var(--dist-surface-raised)', padding: 'var(--dist-space-8) 0' }}>
      <div className="dist-container" style={{ maxWidth: '1000px' }}>
        {/* Back */}
        <button
          onClick={() => onSelectProduct(null)}
          style={{
            background: 'none', border: '1px solid var(--dist-surface-muted)',
            borderRadius: 'var(--dist-radius-xs)',
            padding: '8px 16px', cursor: 'pointer',
            fontSize: '13px', fontWeight: 600,
            color: 'var(--dist-text-secondary)',
            marginBottom: 'var(--dist-space-5)',
            display: 'flex', alignItems: 'center', gap: '6px',
            transition: 'all 0.2s'
          }}
        >
          ← Back to Catalog
        </button>

        <ScrollReveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--dist-space-7)',
            backgroundColor: 'var(--dist-surface-strong)',
            border: '1px solid var(--dist-surface-muted)',
            borderRadius: 'var(--dist-radius-sm)',
            padding: 'var(--dist-space-6)',
            boxShadow: 'var(--dist-shadow-md)'
          }}>
            {/* Image */}
            <div className="dist-detail-img-container">
              {/* 📷 IMAGE NEEDED: product image */}
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="1" style={{ position: 'absolute', zIndex: 0 }}>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              <img src={product.img} alt={product.name} style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain', position: 'relative', zIndex: 1 }} onError={(e) => { e.target.style.display = 'none'; }} />
            </div>

            {/* Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--dist-space-3)' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--dist-brand-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {product.tag || 'General'}
              </span>

              <h1 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--dist-text-primary)', margin: 0 }}>
                {product.name}
              </h1>

              <p style={{ fontSize: '14px', color: 'var(--dist-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                {product.desc}
              </p>

              {/* Price & MOQ */}
              <div style={{
                backgroundColor: 'var(--dist-surface-raised)',
                border: '1px solid var(--dist-surface-muted)',
                borderRadius: 'var(--dist-radius-sm)',
                padding: 'var(--dist-space-4)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--dist-space-2)' }}>
                  <span style={{ fontSize: '13px', color: 'var(--dist-text-secondary)' }}>Unit Price</span>
                  <span style={{ fontSize: '20px', fontWeight: 700, color: 'var(--dist-text-primary)' }}>
                    {product.priceFormatted}
                  </span>
                </div>

                {product.moq && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--dist-space-2)' }}>
                    <span style={{ fontSize: '13px', color: 'var(--dist-text-secondary)' }}>Min. Order</span>
                    <span style={{
                      fontSize: '14px', fontWeight: 600,
                      color: 'var(--dist-brand-primary)',
                      backgroundColor: '#EFF6FF',
                      padding: '4px 10px',
                      borderRadius: 'var(--dist-radius-xs)'
                    }}>
                      {product.moq}
                    </span>
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', color: 'var(--dist-text-secondary)' }}>Stock</span>
                  <span style={{
                    fontSize: '13px', fontWeight: 600,
                    color: product.stock > 20 ? 'var(--dist-status-success)' : 'var(--dist-status-warning)'
                  }}>
                    {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: 'var(--dist-space-3)', marginTop: 'var(--dist-space-2)' }}>
                <button
                  onClick={() => onAddToCart && onAddToCart(product)}
                  className="dist-btn dist-btn-primary"
                  style={{ flex: 1, padding: '12px', fontSize: '13px' }}
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => onInquireNow && onInquireNow(product)}
                  className="dist-btn"
                  style={{
                    flex: 1, padding: '12px', fontSize: '13px',
                    backgroundColor: 'var(--dist-brand-accent)',
                    color: '#0F172A',
                    borderColor: 'var(--dist-brand-accent)'
                  }}
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <ScrollReveal>
            <div style={{ marginTop: 'var(--dist-space-8)' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: 'var(--dist-space-5)' }}>
                Related <span style={{ color: 'var(--dist-brand-primary)' }}>Products</span>
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: 'var(--dist-space-4)'
              }}>
                {relatedProducts.map(rp => (
                  <div
                    key={rp.id}
                    onClick={() => onSelectProduct(rp)}
                    style={{
                      backgroundColor: 'var(--dist-surface-strong)',
                      border: '1px solid var(--dist-surface-muted)',
                      borderRadius: 'var(--dist-radius-sm)',
                      padding: 'var(--dist-space-4)',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--dist-shadow-md)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div style={{
                      height: '140px', backgroundColor: 'var(--dist-surface-raised)',
                      borderRadius: 'var(--dist-radius-xs)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 'var(--dist-space-3)'
                    }}>
                      <img src={rp.img} alt={rp.name} style={{ maxWidth: '75%', maxHeight: '75%', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; }} />
                    </div>
                    <h4 style={{ fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: 'var(--dist-text-primary)' }}>
                      {rp.name}
                    </h4>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--dist-brand-primary)' }}>
                      {rp.priceFormatted}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
