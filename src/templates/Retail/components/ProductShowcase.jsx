import React from 'react';

const PRODUCTS = [
  { id: 1, name: 'Minimalist Lounge Chair', price: '$450', img: '/images/retail/product_lounge_chair_1780307435536.png' },
  { id: 2, name: 'Solid Oak Dining Table', price: '$890', img: '/images/retail/product_dining_table_1780307623683.png' },
  { id: 3, name: 'Ceramic Table Lamp', price: '$120', img: '/images/retail/product_ceramic_lamp_1780307642586.png' },
  { id: 4, name: 'Woven Area Rug', price: '$340', img: '/images/retail/product_lounge_chair_1780307435536.png' } // Reusing chair for mockup
];

export default function ProductShowcase() {
  return (
    <section style={{ backgroundColor: 'var(--vivere-surface-strong)', padding: 'var(--vivere-space-10) 0' }}>
      <div className="vivere-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--vivere-space-8)' }}>
          <h2 className="vivere-heading" style={{ margin: 0 }}>Featured Products</h2>
          <a href="#" style={{ fontSize: 'var(--vivere-text-sm)', fontWeight: 600, textDecoration: 'underline' }}>View All</a>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: 'var(--vivere-space-8)'
        }}>
          {PRODUCTS.map(product => (
            <div key={product.id} className="product-card" style={{ cursor: 'pointer' }}>
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
                
                {/* Hover overlay mock */}
                <div className="product-card-overlay" style={{
                  position: 'absolute',
                  bottom: 'var(--vivere-space-4)',
                  left: 'var(--vivere-space-4)',
                  right: 'var(--vivere-space-4)'
                }}>
                  <button className="vivere-btn vivere-btn-primary" style={{ width: '100%', fontSize: '12px', padding: 'var(--vivere-space-3)' }}>
                    Add to Cart
                  </button>
                </div>
              </div>
              <h3 style={{ fontSize: 'var(--vivere-text-md)', fontWeight: 600, marginBottom: 'var(--vivere-space-1)' }}>
                {product.name || product.Oak}
              </h3>
              <p style={{ fontSize: 'var(--vivere-text-sm)', color: 'var(--vivere-text-secondary)' }}>
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
