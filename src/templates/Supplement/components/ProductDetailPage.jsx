import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function ProductDetailPage({ product, onAddToCart, onInquireNow, onSelectProduct, allProducts = [] }) {
  if (!product) return null;

  const relatedProducts = allProducts.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <div style={{ backgroundColor: 'var(--supp-surface-base)', padding: '60px 0', minHeight: '80vh' }}>
      <div className="supp-container" style={{ maxWidth: '1000px' }}>
        {/* Back Button */}
        <button
          onClick={() => onSelectProduct(null)}
          style={{
            background: 'none', border: '2px solid var(--supp-border-muted)',
            borderRadius: 'var(--supp-radius-sm)',
            padding: '8px 16px', cursor: 'pointer',
            fontSize: '13px', fontWeight: 700,
            color: 'var(--supp-text-primary)',
            marginBottom: '24px',
            display: 'flex', alignItems: 'center', gap: '6px',
            transition: 'all 0.2s'
          }}
        >
          ← Kembali ke Katalog
        </button>

        <ScrollReveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            backgroundColor: 'var(--supp-surface-card)',
            border: '1px solid var(--supp-border-muted)',
            borderRadius: '20px',
            padding: '30px',
            boxShadow: 'var(--supp-shadow-2)'
          }}>
            {/* Left: Product Can/Bottle SVG Illustration */}
            <div style={{
              backgroundColor: '#f0f6f2',
              borderRadius: '15px',
              border: '1px solid var(--supp-border-muted)',
              height: '350px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <svg viewBox="0 0 200 200" style={{ width: '180px', height: '180px' }}>
                <rect x="60" y="40" width="80" height="130" rx="10" fill="#0d120f" stroke={product.id === 1 ? '#78be00' : product.id === 2 ? '#03582d' : '#ffcd00'} strokeWidth="3" />
                <rect x="70" y="28" width="60" height="12" rx="3" fill="#ffcd00" />
                <circle cx="100" cy="100" r="18" fill={product.id === 1 ? '#78be00' : product.id === 2 ? '#03582d' : '#ffcd00'} opacity="0.3" />
                <path d="M90,100 Q100,90 110,100" stroke="#ffffff" strokeWidth="2" />
                <rect x="75" y="130" width="50" height="4" rx="2" fill="#ffffff" opacity="0.4" />
                <rect x="85" y="140" width="30" height="3" rx="1.5" fill="#ffffff" opacity="0.4" />
              </svg>
              {product.tag && (
                <span className="supp-product-tag" style={{ position: 'absolute', top: '15px', left: '15px', backgroundColor: 'var(--supp-surface-strong)', color: 'var(--supp-text-secondary)' }}>
                  {product.tag}
                </span>
              )}
            </div>

            {/* Right: Detailed specs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--supp-surface-raised)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {product.category}
              </span>

              <h1 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--supp-text-primary)', margin: 0 }}>
                {product.name}
              </h1>

              <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--supp-surface-raised)' }}>
                {product.priceFormatted}
              </div>

              <p style={{ fontSize: '14px', color: 'rgba(33, 37, 41, 0.75)', lineHeight: 1.6, margin: 0 }}>
                {product.desc}
              </p>

              {/* Ingredients card */}
              <div style={{
                backgroundColor: '#f0f6f2',
                border: '1px solid var(--supp-border-muted)',
                borderRadius: '12px',
                padding: '15px'
              }}>
                <h4 style={{ fontSize: '14px', color: 'var(--supp-text-primary)', fontWeight: 800, marginBottom: '6px' }}>
                  Ingredients Blueprint:
                </h4>
                <p style={{ fontSize: '13px', color: 'rgba(33, 37, 41, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  {product.ingredients}
                </p>
              </div>

              {/* Macro nutritional fact badges */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', textAlign: 'center' }}>
                <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--supp-border-muted)', padding: '10px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '10px', color: 'rgba(33, 37, 41, 0.5)', textTransform: 'uppercase', fontWeight: 600 }}>Kalori</div>
                  <div style={{ fontWeight: 800, fontSize: '13px', color: 'var(--supp-text-secondary)' }}>{product.calories}</div>
                </div>
                <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--supp-border-muted)', padding: '10px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '10px', color: 'rgba(33, 37, 41, 0.5)', textTransform: 'uppercase', fontWeight: 600 }}>Protein</div>
                  <div style={{ fontWeight: 800, fontSize: '13px', color: 'var(--supp-text-secondary)' }}>{product.protein}</div>
                </div>
                <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--supp-border-muted)', padding: '10px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '10px', color: 'rgba(33, 37, 41, 0.5)', textTransform: 'uppercase', fontWeight: 600 }}>Serat</div>
                  <div style={{ fontWeight: 800, fontSize: '13px', color: 'var(--supp-text-secondary)' }}>{product.fiber}</div>
                </div>
                <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--supp-border-muted)', padding: '10px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '10px', color: 'rgba(33, 37, 41, 0.5)', textTransform: 'uppercase', fontWeight: 600 }}>Gula</div>
                  <div style={{ fontWeight: 800, fontSize: '13px', color: 'var(--supp-text-secondary)' }}>{product.sugar}</div>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                <button
                  onClick={() => onAddToCart && onAddToCart(product)}
                  className="supp-btn supp-btn-primary"
                  style={{ flex: 1 }}
                >
                  Masukkan Keranjang
                </button>
                <button
                  onClick={() => onInquireNow && onInquireNow(product)}
                  className="supp-btn"
                  style={{
                    flex: 1,
                    backgroundColor: 'var(--supp-surface-strong)',
                    color: 'var(--supp-text-secondary)',
                    borderColor: 'var(--supp-surface-strong)',
                    borderWidth: '2px',
                    borderStyle: 'solid'
                  }}
                >
                  Ajukan Konsultasi / Beli
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <ScrollReveal>
            <div style={{ marginTop: '50px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--supp-text-primary)', marginBottom: '20px' }}>
                Produk <span style={{ color: 'var(--supp-surface-raised)' }}>Terkait</span>
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '20px'
              }}>
                {relatedProducts.map(rp => (
                  <div
                    key={rp.id}
                    onClick={() => onSelectProduct(rp)}
                    style={{
                      backgroundColor: 'var(--supp-surface-card)',
                      border: '1px solid var(--supp-border-muted)',
                      borderRadius: '15px',
                      padding: '20px',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      boxShadow: 'var(--supp-shadow-2)'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--supp-shadow-2)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div style={{
                      height: '140px', backgroundColor: '#f0f6f2',
                      borderRadius: '10px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '15px'
                    }}>
                      <svg viewBox="0 0 200 200" style={{ width: '80px', height: '80px' }}>
                        <rect x="60" y="40" width="80" height="130" rx="10" fill="#0d120f" stroke={rp.id === 1 ? '#78be00' : rp.id === 2 ? '#03582d' : '#ffcd00'} strokeWidth="3" />
                      </svg>
                    </div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '6px', color: 'var(--supp-text-primary)' }}>
                      {rp.name}
                    </h4>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--supp-surface-raised)' }}>
                      {rp.priceFormatted.split(' / ')[0]}
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
