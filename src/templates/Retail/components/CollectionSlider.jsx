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

  // Auto-slide card-by-card every 1.5 seconds
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const slideTimer = setInterval(() => {
      if (scrollContainer && !isHovered.current) {
        const card = scrollContainer.firstElementChild;
        // Calculate dynamic card width plus the gap (280px width + 20px gap = 300px default)
        const cardWidth = card ? card.getBoundingClientRect().width + 20 : 300;
        
        const currentScroll = scrollContainer.scrollLeft;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        // If we are close to the end, scroll back to the start smoothly
        if (currentScroll >= maxScroll - 15) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Otherwise, slide smoothly to the next card
          scrollContainer.scrollTo({ left: currentScroll + cardWidth, behavior: 'smooth' });
        }
      }
    }, 1500); // 1.5-second interval

    return () => clearInterval(slideTimer);
  }, []);
  
  return (
    <section style={{ backgroundColor: 'var(--retail-surface-strong)', padding: 'var(--retail-space-10) 0' }}>
      <div className="retail-container">
        
        {/* Header Title */}
        <h2 className="retail-heading" style={{ 
          borderBottom: '1px solid var(--retail-surface-muted)', 
          paddingBottom: 'var(--retail-space-4)', 
          marginBottom: 'var(--retail-space-8)',
          textAlign: isLeft ? 'left' : 'right'
        }}>
          {title}
        </h2>

        {/* Asymmetric Grid Container */}
        <div className={`retail-slider-grid ${isLeft ? 'layout-left' : 'layout-right'}`}>
          
          {/* SPOTLIGHT WRAPPER COLUMN */}
          <div className="retail-slider-spotlight-wrap">
            {tagline && (
              <span className="retail-spotlight-tagline">
                {tagline}
              </span>
            )}
            <div className="retail-slider-spotlight">
              <img src={spotlightImage} alt={spotlightText} />
              
              {/* Gradient Overlay */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}></div>
              
              {/* Content Overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                padding: 'var(--retail-space-8) var(--retail-space-6)',
                textAlign: 'center',
                color: 'white',
                zIndex: 2
              }}>
                <h3 style={{ fontSize: '32px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: 'var(--retail-space-4)', lineHeight: 1.1 }} dangerouslySetInnerHTML={{ __html: spotlightText }}>
                </h3>
                {spotlightDesc && (
                  <p style={{
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: 'rgba(255, 255, 255, 0.85)',
                    marginBottom: 'var(--retail-space-5)',
                    maxWidth: '260px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    letterSpacing: '0.2px'
                  }}>
                    {spotlightDesc}
                  </p>
                )}
                <button className="retail-btn" style={{ 
                  backgroundColor: 'transparent', 
                  color: 'white', 
                  borderColor: 'white',
                  borderWidth: '2px',
                  padding: '8px 24px',
                  fontSize: '11px'
                }}>
                  See More
                </button>
              </div>
            </div>
          </div>

          {/* HORIZONTAL CAROUSEL COLUMN */}
          <div 
            className="retail-slider-carousel-wrap"
            onMouseEnter={() => { isHovered.current = true; }}
            onMouseLeave={() => { isHovered.current = false; }}
          >
            <div className="retail-horizontal-scroll" ref={scrollRef}>
              {products.map((item, index) => (
                <div 
                  key={item.id || index} 
                  className="retail-snap-child retail-product-card-premium"
                  onClick={() => onViewDetail && onViewDetail(item)}
                >
                  <div className="retail-product-image-box">
                    <img src={item.img} alt={item.name} />
                    
                    {/* Tag Overlay */}
                    {item.tag && (
                      <div className="retail-product-badge">
                        {item.tag}
                      </div>
                    )}
                    
                    {/* Hover Add to Cart Button */}
                    <div className="product-card-overlay" style={{
                      position: 'absolute',
                      bottom: 'var(--retail-space-5)',
                      left: 'var(--retail-space-4)',
                      right: 'var(--retail-space-4)',
                      display: 'flex',
                      justifyContent: 'center',
                      zIndex: 3
                    }}>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart && onAddToCart(item);
                        }}
                        className="retail-btn retail-btn-primary" 
                        style={{ width: '100%', fontSize: '12px', padding: 'var(--retail-space-3)' }}
                      >
                        Masukkan Keranjang
                      </button>
                    </div>
                  </div>
                  
                  <h4 style={{ fontSize: 'var(--retail-text-md)', fontWeight: 700, textTransform: 'uppercase', marginBottom: 'var(--retail-space-2)', color: 'var(--retail-text-primary)' }}>
                    {item.name}
                  </h4>
                  {item.desc && (
                    <p style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      color: 'var(--retail-text-secondary)',
                      marginBottom: 'var(--retail-space-3)',
                      lineHeight: 1.4,
                      opacity: 0.75,
                      minHeight: '32px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {item.desc}
                    </p>
                  )}
                  <p style={{ fontSize: 'var(--retail-text-sm)', color: 'var(--retail-text-secondary)', fontWeight: 600 }}>
                    {item.priceFormatted ?? item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


