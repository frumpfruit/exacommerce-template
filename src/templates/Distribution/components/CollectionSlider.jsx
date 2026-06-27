import React, { useRef, useEffect } from 'react';

export default function CollectionSlider({
  title,
  tagline,
  spotlightPosition = 'left',
  spotlightImage,
  spotlightText,
  spotlightDesc,
  products,
  onAddToCart,
  onViewDetail
}) {
  const isLeft = spotlightPosition === 'left';
  const scrollRef = useRef(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const slideTimer = setInterval(() => {
      if (scrollContainer && !isHovered.current) {
        const card = scrollContainer.firstElementChild;
        const cardWidth = card ? card.getBoundingClientRect().width + 24 : 304;
        const currentScroll = scrollContainer.scrollLeft;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

        if (currentScroll >= maxScroll - 15) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainer.scrollTo({ left: currentScroll + cardWidth, behavior: 'smooth' });
        }
      }
    }, 2000);

    return () => clearInterval(slideTimer);
  }, []);

  return (
    <section style={{ backgroundColor: 'var(--dist-surface-strong)', padding: 'var(--dist-space-8) 0' }}>
      <div className="dist-container">
        <h2 className="dist-heading" style={{
          borderBottom: '1px solid var(--dist-surface-muted)',
          paddingBottom: 'var(--dist-space-3)',
          marginBottom: 'var(--dist-space-6)',
          textAlign: isLeft ? 'left' : 'right'
        }}>
          {title}
        </h2>

        <div className={`dist-slider-grid ${isLeft ? 'layout-left' : 'layout-right'}`}>
          {/* Spotlight */}
          <div className="dist-slider-spotlight-wrap">
            {tagline && (
              <span className="dist-spotlight-tagline">{tagline}</span>
            )}
            <div className="dist-slider-spotlight">
              {/* 📷 IMAGE NEEDED: spotlightImage passed as prop */}
              <div style={{
                width: '100%', height: '100%',
                backgroundColor: '#1E293B',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'absolute', top: 0, left: 0, zIndex: 0
              }}>
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <img src={spotlightImage} alt={spotlightText} onError={(e) => { e.target.style.display = 'none'; }} />

              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(to top, rgba(15,23,42,0.9) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}></div>

              <div style={{
                position: 'absolute', bottom: 0, left: 0, width: '100%',
                padding: 'var(--dist-space-6) var(--dist-space-5)',
                textAlign: 'center', color: 'white', zIndex: 2
              }}>
                <h3 style={{ fontSize: '28px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: 'var(--dist-space-3)', lineHeight: 1.1 }}
                  dangerouslySetInnerHTML={{ __html: spotlightText }}>
                </h3>
                {spotlightDesc && (
                  <p style={{
                    fontSize: '12px', fontWeight: 400, lineHeight: 1.6,
                    color: 'rgba(255, 255, 255, 0.85)',
                    marginBottom: 'var(--dist-space-4)',
                    maxWidth: '260px', marginLeft: 'auto', marginRight: 'auto'
                  }}>
                    {spotlightDesc}
                  </p>
                )}
                <button className="dist-btn" style={{
                  backgroundColor: 'transparent', color: 'white',
                  borderColor: 'white', borderWidth: '2px',
                  padding: '8px 24px', fontSize: '12px'
                }}>
                  View All
                </button>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div
            className="dist-slider-carousel-wrap"
            onMouseEnter={() => { isHovered.current = true; }}
            onMouseLeave={() => { isHovered.current = false; }}
          >
            <div className="dist-horizontal-scroll" ref={scrollRef}>
              {products.map((item, index) => (
                <div
                  key={item.id || index}
                  className="dist-snap-child dist-product-card-premium"
                  onClick={() => onViewDetail && onViewDetail(item)}
                >
                  <div className="dist-product-image-box">
                    {/* 📷 IMAGE NEEDED: product image (item.img) */}
                    <div style={{
                      width: '100%', height: '100%',
                      backgroundColor: '#F1F5F9',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      position: 'absolute', top: 0, left: 0, zIndex: 0
                    }}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="1">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg>
                    </div>
                    <img src={item.img} alt={item.name} onError={(e) => { e.target.style.display = 'none'; }} />

                    {item.tag && (
                      <div className="dist-product-badge">{item.tag}</div>
                    )}

                    <div className="product-card-overlay" style={{
                      position: 'absolute',
                      bottom: 'var(--dist-space-4)',
                      left: 'var(--dist-space-3)',
                      right: 'var(--dist-space-3)',
                      display: 'flex',
                      justifyContent: 'center',
                      zIndex: 3
                    }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart && onAddToCart(item);
                        }}
                        className="dist-btn dist-btn-primary"
                        style={{ width: '100%', fontSize: '12px', padding: 'var(--dist-space-2)' }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  <h4 style={{ fontSize: 'var(--dist-text-sm)', fontWeight: 700, marginBottom: 'var(--dist-space-2)', color: 'var(--dist-text-primary)' }}>
                    {item.name}
                  </h4>
                  {item.desc && (
                    <p style={{
                      fontSize: '12px', fontWeight: 400,
                      color: 'var(--dist-text-secondary)',
                      marginBottom: 'var(--dist-space-2)',
                      lineHeight: 1.4, opacity: 0.75,
                      minHeight: '34px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {item.desc}
                    </p>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 'var(--dist-text-sm)', color: 'var(--dist-text-primary)', fontWeight: 600 }}>
                      {item.priceFormatted ?? item.price}
                    </span>
                    {item.moq && (
                      <span style={{
                        fontSize: '11px', color: 'var(--dist-brand-primary)',
                        fontWeight: 600, backgroundColor: '#EFF6FF',
                        padding: '2px 8px', borderRadius: 'var(--dist-radius-xs)'
                      }}>
                        MOQ: {item.moq}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
