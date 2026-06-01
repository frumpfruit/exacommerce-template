import React from 'react';

const CATEGORIES = [
  { id: 1, title: 'Living Room', img: '/images/retail/living-room.jpg' },
  { id: 2, title: 'Dining', img: '/images/retail/dining-room.jpg' },
  { id: 3, title: 'Bedroom', img: '/images/retail/bedroom.jpg' },
  { id: 4, title: 'Workspace', img: '/images/retail/workspace.jpg' }
];

export default function CategoryGrid() {
  return (
    <section className="vivere-container" style={{ padding: 'var(--vivere-space-10) var(--vivere-space-7)' }}>
      <h2 className="vivere-heading" style={{ textAlign: 'center', fontSize: 'var(--vivere-text-lg)' }}>
        Shop by Category
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 'var(--vivere-space-7)',
        marginTop: 'var(--vivere-space-8)'
      }}>
        {CATEGORIES.map(cat => (
          <div key={cat.id} className="product-card" style={{ cursor: 'pointer', textAlign: 'center' }}>
            <div className="product-card-image-wrap" style={{
              backgroundColor: 'var(--vivere-surface-muted)',
              height: '250px',
              borderRadius: 'var(--vivere-radius-xs)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 'var(--vivere-space-4)',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid var(--vivere-surface-muted)'
            }}>
              <img src={cat.img} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              
              {/* Hover overlay with button */}
              <div className="product-card-overlay" style={{
                position: 'absolute',
                bottom: 'var(--vivere-space-4)',
                left: 'var(--vivere-space-4)',
                right: 'var(--vivere-space-4)',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <button className="vivere-btn vivere-btn-primary" style={{ fontSize: '12px', padding: 'var(--vivere-space-3) var(--vivere-space-6)', boxShadow: 'var(--vivere-shadow-1)' }}>
                  Shop Now
                </button>
              </div>
            </div>
            
            <h3 style={{ fontSize: 'var(--vivere-text-md)', fontWeight: 600 }}>{cat.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
