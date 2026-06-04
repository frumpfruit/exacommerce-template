import React from 'react';

export default function ProductShowcase({ products = [], onAddToCart, onViewDetail }) {
  // Use passed products, default to first 4 if available
  const list = products.slice(0, 4);

  return (
    <section style={{ backgroundColor: 'var(--vivere-surface-strong)', padding: 'var(--vivere-space-10) 0' }}>
      <div className="vivere-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--vivere-space-8)' }}>
          <h2 className="vivere-heading" style={{ margin: 0 }}>Featured Products</h2>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); onViewDetail && onViewDetail(null); }} 
            style={{ fontSize: 'var(--vivere-text-sm)', fontWeight: 600, textDecoration: 'underline' }}
          >
            View All
          </a>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 'var(--vivere-space-8)'
        }}>
          {list.map(product => (
            <div 
              key={product.id} 
              className="product-card" 
              onClick={() => onViewDetail && onViewDetail(product)}
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
            >
              <div className="product-card-image-wrap" style={{
                backgroundColor: 'var(--vivere-surface-muted)',
                height: '300px',
                borderRadius: 'var(--vivere-radius-xs)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--vivere-text-secondary)',
                marginBottom: 'var(--vivere-space-5)',
                position: 'relative'
              }}>
                <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
                {/* Hover overlay */}
                <div className="product-card-overlay" style={{
                  position: 'absolute',
                  bottom: 'var(--vivere-space-4)',
                  left: 'var(--vivere-space-4)',
                  right: 'var(--vivere-space-4)',
                  zIndex: 3
                }}>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart && onAddToCart(product);
                    }}
                    className="vivere-btn vivere-btn-primary" 
                    style={{ width: '100%', fontSize: '11px', padding: 'var(--vivere-space-3)' }}
                  >
                    Masukkan Keranjang
                  </button>
                </div>
              </div>
              <h3 style={{ fontSize: 'var(--vivere-text-md)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 'var(--vivere-space-1)', color: 'var(--vivere-text-primary)' }}>
                {product.name}
              </h3>
              <p style={{ fontSize: 'var(--vivere-text-sm)', color: 'var(--vivere-text-secondary)', fontWeight: 600, marginTop: 'auto' }}>
                {product.priceFormatted}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
