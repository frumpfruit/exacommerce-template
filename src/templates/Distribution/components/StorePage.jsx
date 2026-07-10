import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const CATEGORIES = ['All', 'Packaging', 'Safety', 'Office', 'Equipment'];

export default function StorePage({ products = [], onAddToCart, onViewDetail }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.tag === selectedCategory);

  return (
    <div style={{ backgroundColor: 'var(--dist-surface-raised)', minHeight: '100vh' }}>
      {/* 1. Header Area - Utility / B2B Search style */}
      <div style={{ backgroundColor: 'var(--dist-surface-strong)', borderBottom: '1px solid var(--dist-surface-muted)', padding: 'var(--dist-space-6) 0' }}>
        <div className="dist-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 'var(--dist-space-4)' }}>
            <div>
              <h1 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--dist-text-primary)', margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
                Procurement <span style={{ color: 'var(--dist-brand-primary)' }}>Catalog</span>
              </h1>
              <p style={{ fontSize: '14px', color: 'var(--dist-text-secondary)', margin: 0 }}>
                {products.length} active SKUs available for corporate ordering.
              </p>
            </div>
            
            {/* Filter Bar */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    backgroundColor: selectedCategory === cat ? 'var(--dist-brand-primary)' : 'var(--dist-surface-raised)',
                    color: selectedCategory === cat ? 'white' : 'var(--dist-text-secondary)',
                    border: '1px solid',
                    borderColor: selectedCategory === cat ? 'var(--dist-brand-primary)' : 'var(--dist-surface-muted)',
                    padding: '8px 16px',
                    fontSize: '12px', fontWeight: 600,
                    borderRadius: '2px', cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. List View (Data Rows) */}
      <div className="dist-container" style={{ padding: 'var(--dist-space-6) var(--dist-space-5)' }}>
        <ScrollReveal>
          {/* Table Header (Visual only for list view) */}
          <style>{`
            .dist-store-th { display: flex; }
            @media (max-width: 768px) {
              .dist-store-th { display: none !important; }
            }
          `}</style>
          <div className="dist-store-th" style={{ 
            display: 'flex', 
            padding: '0 var(--dist-space-4) var(--dist-space-3) var(--dist-space-4)', 
            borderBottom: '2px solid var(--dist-surface-muted)',
            marginBottom: 'var(--dist-space-4)',
            fontSize: '11px', fontWeight: 700, color: 'var(--dist-text-secondary)', textTransform: 'uppercase', letterSpacing: '1px'
          }}>
            <div style={{ width: '120px', marginRight: 'var(--dist-space-5)' }}>Image</div>
            <div style={{ flex: 1 }}>Product Specification</div>
            <div style={{ width: '250px', textAlign: 'right' }}>Availability & Pricing</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {filteredProducts.map((product, idx) => (
              <div
                key={product.id}
                className="dist-list-row"
                onClick={() => onViewDetail(product)}
                style={{ cursor: 'pointer', borderRadius: '2px' }}
              >
                {/* Image */}
                <div className="dist-list-img">
                  {/* 📷 IMAGE NEEDED */}
                  <img src={product.img} alt={product.name} onError={(e) => { e.target.style.display = 'none'; }} />
                </div>

                {/* Details */}
                <div className="dist-list-content">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--dist-brand-primary)', fontFamily: 'monospace' }}>
                      SKU: NX-{product.id}00
                    </span>
                    {product.tag && (
                      <span className="dist-badge dist-badge-accent">{product.tag}</span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--dist-text-primary)', margin: '0 0 6px 0' }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--dist-text-secondary)', lineHeight: 1.5, margin: 0, maxWidth: '600px' }}>
                    {product.desc}
                  </p>
                </div>

                {/* Meta & Actions */}
                <div className="dist-list-meta">
                  <div className="dist-list-meta-row">
                    <span style={{ fontSize: '12px', color: 'var(--dist-text-secondary)' }}>Unit Price</span>
                    <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--dist-text-primary)' }}>
                      {product.priceFormatted}
                    </span>
                  </div>
                  
                  <div className="dist-list-meta-row" style={{ fontSize: '12px', gap: '16px' }}>
                    <div><span style={{ color: 'var(--dist-text-secondary)' }}>MOQ:</span> <strong>{product.moq}</strong></div>
                    <div><span style={{ color: 'var(--dist-status-success)', fontWeight: 600 }}>● {product.stock > 0 ? 'In Stock' : 'Out'}</span></div>
                  </div>

                  <div className="dist-list-meta-row" style={{ marginTop: 'auto' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="dist-btn dist-btn-primary"
                      style={{ padding: '8px 16px', fontSize: '12px', borderRadius: '2px' }}
                    >
                      Add to RFQ
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
