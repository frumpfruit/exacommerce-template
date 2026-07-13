import React from 'react';

export default function ProductShowcase({ products = [], onAddToCart, onViewDetail }) {
  const displayProducts = products.slice(0, 4);

  if (displayProducts.length === 0) return null;

  return (
    <section style={{
      backgroundColor: 'var(--dist-surface-raised)',
      padding: 'var(--dist-space-8) 0',
      borderBottom: '1px solid var(--dist-surface-muted)'
    }}>
      <div className="dist-container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--dist-space-6)' }}>
          <span style={{
            fontSize: '12px', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '2px', color: 'var(--dist-brand-primary)'
          }}>
            Featured
          </span>
          <h2 style={{
            fontSize: '24px', fontWeight: 700,
            marginTop: 'var(--dist-space-2)', color: 'var(--dist-text-primary)'
          }}>
            Popular <span style={{ color: 'var(--dist-brand-primary)' }}>Products</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))',
          gap: 'var(--dist-space-5)'
        }}>
          {displayProducts.map(product => (
            <div
              key={product.id}
              className="dist-product-card-premium"
              onClick={() => onViewDetail && onViewDetail(product)}
              style={{
                backgroundColor: 'var(--dist-surface-strong)',
                border: '1px solid var(--dist-surface-muted)',
                borderRadius: 'var(--dist-radius-sm)',
                padding: 'var(--dist-space-4)',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--dist-shadow-sm)',
                textAlign: 'left',
                cursor: 'pointer'
              }}
            >
              <div className="dist-product-image-box" style={{
                height: '200px',
                backgroundColor: 'var(--dist-surface-raised)',
                marginBottom: 'var(--dist-space-3)',
                position: 'relative'
              }}>
                {/* ðŸ“· IMAGE NEEDED: product image */}
                <div style={{
                  width: '100%', height: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'absolute', top: 0, left: 0, zIndex: 0
                }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="1">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <img src={product.img} alt={product.name} style={{ maxWidth: '85%', maxHeight: '85%' }} onError={(e) => { e.target.style.display = 'none'; }} />

                {product.tag && (
                  <span className="dist-product-badge">{product.tag}</span>
                )}

                <div className="product-card-overlay" style={{
                  position: 'absolute',
                  bottom: 'var(--dist-space-2)',
                  left: 'var(--dist-space-2)',
                  right: 'var(--dist-space-2)',
                  zIndex: 3
                }}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart && onAddToCart(product);
                    }}
                    className="dist-btn dist-btn-primary"
                    style={{ width: '100%', fontSize: '12px', padding: 'var(--dist-space-2)' }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              <h3 style={{
                fontSize: '14px', fontWeight: 700,
                marginBottom: 'var(--dist-space-1)',
                color: 'var(--dist-text-primary)'
              }}>
                {product.name}
              </h3>

              <div style={{
                marginTop: 'auto',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                paddingTop: 'var(--dist-space-2)'
              }}>
                <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--dist-text-primary)' }}>
                  {product.priceFormatted}
                </span>
                {product.moq && (
                  <span style={{
                    fontSize: '11px', color: 'var(--dist-brand-primary)',
                    fontWeight: 600, backgroundColor: '#EFF6FF',
                    padding: '2px 6px', borderRadius: 'var(--dist-radius-xs)'
                  }}>
                    MOQ: {product.moq}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

