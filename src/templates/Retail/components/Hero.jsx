import React from 'react';

export default function Hero() {
  return (
    <section style={{ 
      backgroundColor: 'var(--retail-surface-raised)',
      padding: 'var(--retail-space-10) 0',
      textAlign: 'center',
      borderBottom: '1px solid var(--retail-surface-muted)'
    }}>
      <div className="retail-container">
        <h1 className="retail-hero-heading" style={{ marginBottom: 'var(--retail-space-4)' }}>
          Elevate Your Space
        </h1>
        <p className="retail-subtext" style={{ maxWidth: '600px', margin: '0 auto var(--retail-space-8)' }}>
          Discover our new collection of premium furniture and home accessories. 
          Designed with functional elegance and timeless minimalism.
        </p>
        
        <div className="retail-hero-buttons" style={{ marginBottom: 'var(--retail-space-8)' }}>
          <button className="retail-btn retail-btn-primary">Shop Collection</button>
          <button className="retail-btn retail-btn-secondary">View Lookbook</button>
        </div>

        {/* Premium Interactive Hero Billboard */}
        <div 
          className="retail-hero-billboard-container"
          style={{
            marginTop: 'var(--retail-space-8)',
            height: '480px'
          }}
        >
          {/* Background Image */}
          <img 
            src="/images/retail/hero_living_room_1780307411390.png" 
            alt="Elegant Living Room" 
            className="retail-hero-billboard-img"
          />
          
          {/* Dark Overlay Gradient */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
            zIndex: 2,
            pointerEvents: 'none'
          }}></div>

          {/* Editorial Content Overlay */}
          <div style={{
            position: 'relative',
            zIndex: 3,
            color: 'white',
            padding: 'var(--retail-space-8) var(--retail-space-8)',
            textAlign: 'left',
            maxWidth: '650px',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}>
            <span style={{
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: 'rgba(255, 255, 255, 0.75)',
              display: 'block',
              marginBottom: 'var(--retail-space-2)'
            }}>
              Curated Living Spaces
            </span>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: 'var(--retail-space-4)',
              lineHeight: 1.2,
              color: 'white'
            }}>
              The New Living Archive
            </h2>
            <p style={{
              fontSize: '13px',
              fontWeight: 400,
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: 'var(--retail-space-6)',
              letterSpacing: '0.2px'
            }}>
              Handcrafted in solid European white oak and premium textured linen, our signature living room set anchors your home with elegant clean silhouettes, subtle organic curves, and unmatched functional longevity.
            </p>
            <button className="retail-btn retail-hero-billboard-btn">
              Explore Living Room
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
