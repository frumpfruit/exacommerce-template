import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const CATEGORIES = ['All', 'Packaging', 'Safety', 'Office', 'Equipment'];

export default function StorePage({ products = [], onAddToCart, onViewDetail }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.tag === selectedCategory);

  return (
    <div style={{ backgroundColor: 'var(--nexus-surface-raised)', minHeight: '100vh' }}>
      {/* 1. Header Area - Utility / B2B Search style */}
      <div style={{ backgroundColor: 'var(--nexus-surface-strong)', borderBottom: '1px solid var(--nexus-surface-muted)', padding: 'var(--nexus-space-6) 0' }}>
        <div className="nexus-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 'var(--nexus-space-4)' }}>
            <div>
              <h1 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--nexus-text-primary)', margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
                Procurement <span style={{ color: 'var(--nexus-brand-primary)' }}>Catalog</span>
              </h1>
              <p style={{ fontSize: '14px', color: 'var(--nexus-text-secondary)', margin: 0 }}>
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
                    backgroundColor: selectedCategory === cat ? 'var(--nexus-brand-primary)' : 'var(--nexus-surface-raised)',
                    color: selectedCategory === cat ? 'white' : 'var(--nexus-text-secondary)',
                    border: '1px solid',
                    borderColor: selectedCategory === cat ? 'var(--nexus-brand-primary)' : 'var(--nexus-surface-muted)',
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
      <div className="nexus-container" style={{ padding: 'var(--nexus-space-6) var(--nexus-space-5)' }}>
        <ScrollReveal>
          {/* Table Header (Visual only for list view) */}
          <style>{`
            .nexus-store-th { display: flex; }
            @media (max-width: 768px) {
              .nexus-store-th { display: none !important; }
            }
          `}</style>
          <div className="nexus-store-th" style={{ 
            display: 'flex', 
            padding: '0 var(--nexus-space-4) var(--nexus-space-3) var(--nexus-space-4)', 
            borderBottom: '2px solid var(--nexus-surface-muted)',
            marginBottom: 'var(--nexus-space-4)',
            fontSize: '11px', fontWeight: 700, color: 'var(--nexus-text-secondary)', textTransform: 'uppercase', letterSpacing: '1px'
          }}>
            <div style={{ width: '120px', marginRight: 'var(--nexus-space-5)' }}>Image</div>
            <div style={{ flex: 1 }}>Product Specification</div>
            <div style={{ width: '250px', textAlign: 'right' }}>Availability & Pricing</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {filteredProducts.map((product, idx) => (
              <div
                key={product.id}
                className="nexus-list-row"
                onClick={() => onViewDetail(product)}
                style={{ cursor: 'pointer', borderRadius: '2px' }}
              >
                {/* Image */}
                <div className="nexus-list-img">
                  {/* 📷 IMAGE NEEDED */}
                  <img src={product.img} alt={product.name} onError={(e) => { e.target.style.display = 'none'; }} />
                </div>

                {/* Details */}
                <div className="nexus-list-content">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--nexus-brand-primary)', fontFamily: 'monospace' }}>
                      SKU: NX-{product.id}00
                    </span>
                    {product.tag && (
                      <span className="nexus-badge nexus-badge-accent">{product.tag}</span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--nexus-text-primary)', margin: '0 0 6px 0' }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--nexus-text-secondary)', lineHeight: 1.5, margin: 0, maxWidth: '600px' }}>
                    {product.desc}
                  </p>
                </div>

                {/* Meta & Actions */}
                <div className="nexus-list-meta">
                  <div className="nexus-list-meta-row">
                    <span style={{ fontSize: '12px', color: 'var(--nexus-text-secondary)' }}>Unit Price</span>
                    <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--nexus-text-primary)' }}>
                      {product.priceFormatted}
                    </span>
                  </div>
                  
                  <div className="nexus-list-meta-row" style={{ fontSize: '12px', gap: '16px' }}>
                    <div><span style={{ color: 'var(--nexus-text-secondary)' }}>MOQ:</span> <strong>{product.moq}</strong></div>
                    <div><span style={{ color: 'var(--nexus-status-success)', fontWeight: 600 }}>● {product.stock > 0 ? 'In Stock' : 'Out'}</span></div>
                  </div>

                  <div className="nexus-list-meta-row" style={{ marginTop: 'auto' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="nexus-btn nexus-btn-primary"
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
