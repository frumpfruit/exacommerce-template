import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

export default function ProductDetailPage({ product, onAddToCart, onInquireNow, onSelectProduct, allProducts = [] }) {
  const [quantity, setQuantity] = useState(1);

  // Reset quantity to 1 when product changes
  useEffect(() => {
    setQuantity(1);
  }, [product]);

  if (!product) {
    return (
      <div style={{ backgroundColor: 'var(--vivere-surface-raised)', padding: 'var(--vivere-space-10) 0', textAlign: 'center' }}>
        <p className="vivere-subtext">Tidak ada produk yang dipilih.</p>
      </div>
    );
  }

  // Find similar products in same category (exclude current product, limit to 4)
  const similarProducts = allProducts
    .filter(p => p.tag === product.tag && p.id !== product.id)
    .slice(0, 4);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < (product.stock || 100)) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--vivere-surface-raised)', padding: 'var(--vivere-space-8) 0' }}>
      <div className="vivere-container">
        
        {/* Breadcrumbs */}
        <div style={{
          display: 'flex',
          gap: 'var(--vivere-space-2)',
          fontSize: 'var(--vivere-text-xs)',
          color: 'var(--vivere-text-secondary)',
          marginBottom: 'var(--vivere-space-6)',
          textTransform: 'uppercase',
          fontWeight: 600
        }}>
          <span style={{ cursor: 'pointer' }} onClick={() => onSelectProduct(null)}>Catalog</span>
          <span>/</span>
          <span style={{ color: 'var(--vivere-border-strong)' }}>{product.tag}</span>
        </div>

        {/* Shopee-style Product Main Box */}
        <ScrollReveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--vivere-space-8)',
            backgroundColor: 'var(--vivere-surface-strong)',
            border: '1px solid var(--vivere-surface-muted)',
            borderRadius: 'var(--vivere-radius-xs)',
            padding: 'var(--vivere-space-8)',
            boxShadow: 'var(--vivere-shadow-1)',
            marginBottom: 'var(--vivere-space-10)'
          }}>
          {/* Left Column: Product Image */}
          <div style={{
            backgroundColor: 'var(--vivere-surface-raised)',
            borderRadius: 'var(--vivere-radius-xs)',
            border: '1px solid var(--vivere-surface-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '420px',
            padding: 'var(--vivere-space-6)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <img 
              src={product.img} 
              alt={product.name} 
              style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', transition: 'transform 0.3s' }} 
            />
            {product.tag && (
              <span className="vivere-product-badge">{product.tag}</span>
            )}
          </div>

          {/* Right Column: Product Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-5)' }}>
            <div>
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--vivere-border-strong)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                display: 'block',
                marginBottom: 'var(--vivere-space-1)'
              }}>
                {product.tag}
              </span>
              <h1 style={{
                fontSize: '28px',
                fontWeight: 800,
                color: 'var(--vivere-text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                margin: '0 0 var(--vivere-space-3) 0',
                lineHeight: 1.2
              }}>
                {product.name}
              </h1>
              
              {/* Price */}
              <div style={{
                fontSize: '24px',
                fontWeight: 700,
                color: 'var(--vivere-border-strong)',
                marginBottom: 'var(--vivere-space-4)'
              }}>
                {product.priceFormatted}
              </div>
            </div>

            {/* Description */}
            <div style={{ borderTop: '1px solid var(--vivere-surface-muted)', paddingTop: 'var(--vivere-space-4)' }}>
              <p style={{
                fontSize: 'var(--vivere-text-md)',
                color: 'var(--vivere-text-secondary)',
                lineHeight: 1.6,
                margin: 0
              }}>
                {product.desc}
              </p>
            </div>

            {/* Stock */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--vivere-space-4)' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--vivere-text-secondary)' }}>Stok Tersedia:</span>
              <span style={{
                backgroundColor: 'var(--vivere-surface-base)',
                color: 'var(--vivere-surface-strong)',
                fontSize: '12px',
                fontWeight: 700,
                padding: '3px 12px',
                borderRadius: '4px'
              }}>
                {product.stock || 100} unit
              </span>
            </div>

            {/* Quantity Selector */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--vivere-space-4)',
              borderTop: '1px solid var(--vivere-surface-muted)',
              paddingTop: 'var(--vivere-space-5)',
              marginTop: 'var(--vivere-space-2)'
            }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--vivere-text-secondary)' }}>Kuantitas:</span>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                overflow: 'hidden',
                backgroundColor: 'var(--vivere-surface-strong)'
              }}>
                <button 
                  onClick={handleDecrease}
                  style={{ border: 'none', background: 'none', width: '36px', height: '36px', cursor: 'pointer', fontSize: '16px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.2s' }}
                >
                  -
                </button>
                <span style={{ width: '40px', textAlign: 'center', fontSize: '14px', fontWeight: 700, display: 'inline-block' }}>
                  {quantity}
                </span>
                <button 
                  onClick={handleIncrease}
                  style={{ border: 'none', background: 'none', width: '36px', height: '36px', cursor: 'pointer', fontSize: '16px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.2s' }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: 'var(--vivere-space-4)',
              marginTop: 'var(--vivere-space-4)',
              flexWrap: 'wrap'
            }}>
              {/* Add to Cart */}
              <button
                onClick={() => {
                  // Add the selected quantity to the cart
                  for (let i = 0; i < quantity; i++) {
                    onAddToCart(product);
                  }
                }}
                className="vivere-btn"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--vivere-border-strong)',
                  borderColor: 'var(--vivere-border-strong)',
                  borderWidth: '2px',
                  padding: '12px 24px',
                  flexGrow: 1,
                  fontSize: '12px',
                  fontWeight: 700
                }}
              >
                🛒 Masukkan Keranjang
              </button>

              {/* Inquire now */}
              <button
                onClick={() => onInquireNow(product, quantity)}
                className="vivere-btn vivere-btn-primary"
                style={{
                  padding: '12px 24px',
                  flexGrow: 1.5,
                  fontSize: '12px',
                  fontWeight: 700
                }}
              >
                💬 Kirim Inquiry
              </button>
            </div>
          </div>
        </div>
        </ScrollReveal>

        {/* Rekomendasi Produk Serupa */}
        {similarProducts.length > 0 && (
          <ScrollReveal delay={150}>
            <div>
              <h2 className="vivere-heading" style={{
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderBottom: '1px solid var(--vivere-surface-muted)',
                paddingBottom: 'var(--vivere-space-4)',
                marginBottom: 'var(--vivere-space-6)'
              }}>
                Rekomendasi <span style={{ color: 'var(--vivere-border-strong)' }}>Produk Serupa</span>
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: 'var(--vivere-space-6)'
              }}>
                {similarProducts.map(similar => (
                  <div
                    key={similar.id}
                    onClick={() => onSelectProduct(similar)}
                    className="vivere-product-card-premium"
                    style={{
                      backgroundColor: 'var(--vivere-surface-strong)',
                      border: '1px solid var(--vivere-surface-muted)',
                      borderRadius: 'var(--vivere-radius-xs)',
                      padding: 'var(--vivere-space-4)',
                      boxShadow: 'var(--vivere-shadow-1)',
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <div className="vivere-product-image-box" style={{
                      height: '180px',
                      backgroundColor: 'var(--vivere-surface-raised)',
                      marginBottom: 'var(--vivere-space-3)',
                      position: 'relative'
                    }}>
                      <img src={similar.img} alt={similar.name} style={{ maxWidth: '85%', maxHeight: '85%' }} />
                      <span className="vivere-product-badge" style={{ top: '8px', left: '8px', padding: '3px 8px', fontSize: '9px' }}>
                        {similar.tag}
                      </span>
                    </div>

                    <h3 style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      color: 'var(--vivere-text-primary)',
                      marginBottom: 'var(--vivere-space-1)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {similar.name}
                    </h3>

                    <p style={{
                      fontSize: '11px',
                      color: 'var(--vivere-text-secondary)',
                      marginBottom: 'var(--vivere-space-2)',
                      display: '-webkit-box',
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {similar.desc}
                    </p>

                    <div style={{
                      marginTop: 'auto',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderTop: '1px solid var(--vivere-surface-muted)',
                      paddingTop: 'var(--vivere-space-3)'
                    }}>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--vivere-text-primary)' }}>
                        {similar.priceFormatted}
                      </span>
                      <button
                        className="vivere-btn"
                        style={{
                          padding: '4px 10px',
                          fontSize: '10px',
                          backgroundColor: 'transparent',
                          borderColor: 'var(--vivere-border-strong)',
                          color: 'var(--vivere-border-strong)'
                        }}
                      >
                        Detail
                      </button>
                    </div>
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
