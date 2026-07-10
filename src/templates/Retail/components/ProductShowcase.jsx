import React from 'react';

export default function ProductShowcase({ products = [], onAddToCart, onViewDetail }) {
  // Use passed products, default to first 4 if available
  const list = products.slice(0, 4);

  return (
    <section style={{ backgroundColor: 'var(--retail-surface-strong)', padding: 'var(--retail-space-10) 0' }}>
      <div className="retail-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--retail-space-8)' }}>
          <h2 className="retail-heading" style={{ margin: 0 }}>Featured Products</h2>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); onViewDetail && onViewDetail(null); }} 
            style={{ fontSize: 'var(--retail-text-sm)', fontWeight: 600, textDecoration: 'underline' }}
          >
            View All
          </a>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 'var(--retail-space-8)'
        }}>
          {list.map(product => (
            <div 
              key={product.id} 
              className="product-card" 
              onClick={() => onViewDetail && onViewDetail(product)}
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
            >
              <div className="product-card-image-wrap" style={{
                backgroundColor: 'var(--retail-surface-muted)',
                height: '300px',
                borderRadius: 'var(--retail-radius-xs)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--retail-text-secondary)',
                marginBottom: 'var(--retail-space-5)',
                position: 'relative'
              }}>
                <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
                {/* Hover overlay */}
                <div className="product-card-overlay" style={{
                  position: 'absolute',
                  bottom: 'var(--retail-space-4)',
                  left: 'var(--retail-space-4)',
                  right: 'var(--retail-space-4)',
                  zIndex: 3
                }}>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart && onAddToCart(product);
                    }}
                    className="retail-btn retail-btn-primary" 
                    style={{ width: '100%', fontSize: '11px', padding: 'var(--retail-space-3)' }}
                  >
                    Masukkan Keranjang
                  </button>
                </div>
              </div>
              <h3 style={{ fontSize: 'var(--retail-text-md)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 'var(--retail-space-1)', color: 'var(--retail-text-primary)' }}>
                {product.name}
              </h3>
              <p style={{ fontSize: 'var(--retail-text-sm)', color: 'var(--retail-text-secondary)', fontWeight: 600, marginTop: 'auto' }}>
                {product.priceFormatted}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
