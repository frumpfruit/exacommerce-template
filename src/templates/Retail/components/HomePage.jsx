import React, { useState, useEffect } from 'react';
import CategoryGrid from './CategoryGrid';
import CollectionSlider from './CollectionSlider';
import ProductShowcase from './ProductShowcase';
import ScrollReveal from './ScrollReveal';
import { useParallax, useMouseTilt, useStaggerVisible } from '../../../lib/motionHooks';

// â”€â”€â”€ 3D Tilt Hover Card â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function TiltCard({ children, style = {} }) {
  const [ref, tilt, handleMouseMove, handleMouseLeave] = useMouseTilt(5);
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

const BEST_SELLERS = [
  { id: 1, name: 'BORA Stacking Armless Chair', price: 300, priceFormatted: 'Rp 300', img: '/images/retail/bora_chair.png', tag: 'BEST SELLER', desc: 'Premium solid wood stacking chair, ergonomic slats, perfect for outdoor and dining settings.' },
  { id: 2, name: 'Circa Side Table', price: 1100000, priceFormatted: 'IDR 1,100,000', img: '/images/retail/product_dining_table_1780307623683.png', tag: '', desc: 'FSC-certified solid oak side table with a minimalist cylindrical silhouette.' },
  { id: 3, name: 'Crema Dining Table 8 Seater', price: 35000000, priceFormatted: 'IDR 35,000,000', img: '/images/retail/product_dining_table_1780307623683.png', tag: 'PRE ORDER', desc: 'Eight-seater dining table handcrafted from solid European white oak.' },
  { id: 4, name: 'Livra Coffee Table', price: 6500000, priceFormatted: 'IDR 6,500,000', img: '/images/retail/product_dining_table_1780307623683.png', tag: 'PRE ORDER', desc: 'Architectural solid wood coffee table with distinct floating leg joins.' },
  { id: 5, name: 'Minimalist Lounge Chair', price: 4500000, priceFormatted: 'IDR 4,500,000', img: '/images/retail/product_lounge_chair_1780307435536.png', tag: '', desc: 'Curved ash wood structure upholstered in premium linen boucle fabric.' },
];

const NEW_COLLECTION = [
  { id: 1, name: 'Velvet Sofa 3 Seater', price: 12000000, priceFormatted: 'IDR 12,000,000', img: '/images/retail/product_lounge_chair_1780307435536.png', tag: 'NEW', desc: 'Luxurious three-seater sofa featuring high-density cushioning and brushed brass legs.' },
  { id: 2, name: 'Oak Wood TV Stand', price: 8500000, priceFormatted: 'IDR 8,500,000', img: '/images/retail/product_dining_table_1780307623683.png', tag: 'NEW', desc: 'Sleek entertainment unit made of rift-cut oak with slide-to-reveal slatted doors.' },
  { id: 3, name: 'Abstract Area Rug', price: 3200000, priceFormatted: 'IDR 3,200,000', img: '/images/retail/product_ceramic_lamp_1780307642586.png', tag: 'NEW', desc: 'Organic wool-blend rug with subtle sand-carved abstract geometric patterns.' },
  { id: 4, name: 'Brass Floor Lamp', price: 2800000, priceFormatted: 'IDR 2,800,000', img: '/images/retail/product_ceramic_lamp_1780307642586.png', tag: '', desc: 'Hand-brushed solid brass lighting fixture emitting a warm ambient glow.' },
];

export default function HomePage({ products = [], onNavigate, onAddToCart }) {
  const [heroParallaxRef, heroOffset] = useParallax(0.28);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      {/* HAVEN Hero Section */}
      <section style={{
        position: 'relative',
        height: '620px',
        backgroundColor: '#7c736a', // Warm earthy grayish brown matching the screenshot benchmark
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        borderBottom: '1px solid var(--retail-surface-muted)'
      }}>
        {/* Parallax Background Image */}
        <div
          ref={heroParallaxRef}
          style={{
            position: 'absolute',
            top: '-20%', left: 0, right: 0, bottom: '-20%',
            backgroundImage: 'url("/images/retail/hero_living_room_1780307411390.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.35,
            zIndex: 1,
            transform: `translateY(${heroOffset}px)`,
            transition: 'transform 0.08s linear'
          }}
        ></div>

        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to right, rgba(37,33,30,0.85) 0%, rgba(37,33,30,0.4) 60%, transparent 100%)',
          zIndex: 2
        }}></div>

        <div className="retail-container" style={{ position: 'relative', zIndex: 3, color: 'white', width: '100%' }}>
          <div style={{ maxWidth: '650px' }}>
            {/* Hero title â€” cinematic reveal from right, delayed */}
            <h1 style={{
              fontSize: '44px',
              fontWeight: 800,
              lineHeight: 1.1,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'white',
              marginBottom: 'var(--retail-space-4)',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'none' : 'translateX(50px) rotate(0.8deg)',
              transition: 'opacity 1100ms cubic-bezier(0.25, 0.1, 0.1, 1) 150ms, transform 1100ms cubic-bezier(0.25, 0.1, 0.1, 1) 150ms',
            }}>
              ELEVATE YOUR <span style={{ color: '#d9ab7e' }}>SPACE</span><br />
              WITH <span style={{ color: '#d9ab7e' }}>PREMIUM</span><br />
              MODERN LIVING
            </h1>
            
            <p style={{
              fontSize: '14px',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: 'var(--retail-space-8)',
              fontWeight: 400,
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'none' : 'translateY(20px)',
              transition: 'opacity 1000ms cubic-bezier(0.25, 0.1, 0.1, 1) 400ms, transform 1000ms cubic-bezier(0.25, 0.1, 0.1, 1) 400ms',
            }}>
              Discover our premium collection of modern furniture, textiles, and home lighting. Crafted in collaboration with leading architects and designers to elevate modern living.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--retail-space-6)', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onNavigate('store')}
                className="retail-btn" 
                style={{
                  backgroundColor: 'white',
                  color: '#25211e',
                  borderColor: 'white',
                  padding: '12px 28px',
                  fontWeight: 700,
                  fontSize: '12px'
                }}
              >
                View Products
              </button>

              {/* HAVEN Premium Curation Badge */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                padding: '6px 12px',
                borderRadius: '4px',
                backgroundColor: 'rgba(0,0,0,0.2)'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '1px', color: '#4ade80', lineHeight: 1 }}>EST. 2010</div>
                  <div style={{ fontSize: '7px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase', marginTop: '2px' }}>Premium Curations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Curation Details Section â€” cinematic right slide */}
      <ScrollReveal direction="right" duration={1100}>
        <section style={{ backgroundColor: 'var(--retail-surface-strong)', padding: 'var(--retail-space-10) 0', borderBottom: '1px solid var(--retail-surface-muted)' }}>
          <div className="retail-container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'var(--retail-space-9)',
              alignItems: 'center'
            }}>
              <div>
                <img 
                  src="/images/retail/bedroom.jpg" 
                  alt="HAVEN design curation" 
                  style={{
                    width: '100%',
                    height: '340px',
                    objectFit: 'cover',
                    borderRadius: 'var(--retail-radius-xs)',
                    boxShadow: 'var(--retail-shadow-1)',
                    border: '1px solid var(--retail-surface-muted)'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--retail-space-4)' }}>
                <h2 style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: 'var(--retail-text-primary)',
                  lineHeight: 1.3
                }}>
                  A Modern <span style={{ color: 'var(--retail-border-strong)' }}>Lifestyle & Curation</span> Studio You Can <span style={{ color: 'var(--retail-border-strong)' }}>Rely On</span>
                </h2>
                
                <p className="retail-subtext" style={{ fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                  Established in 2010, HAVEN is a design-centric premium lifestyle brand based in Indonesia. We curate spatial aesthetics by merging luxury upholstered seating, textured lighting, and organic decorations that evoke harmony, functionality, and timeless visual comfort.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* The HAVEN Curation Approach */}
      <section style={{ backgroundColor: 'var(--retail-surface-raised)', padding: 'var(--retail-space-10) 0', borderBottom: '1px solid var(--retail-surface-muted)' }}>
          <div className="retail-container">
            <h2 style={{
              fontSize: '22px',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: 'var(--retail-space-3)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'var(--retail-text-primary)'
            }}>
              Designed for <span style={{ color: 'var(--retail-border-strong)' }}>Modern Lifestyles</span>
            </h2>
            <p style={{
              textAlign: 'center',
              fontSize: '14px',
              color: 'var(--retail-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto var(--retail-space-9)'
            }}>
              We curate and tailor elements that anchor modern living spaces with architectural balance and unmatched material comfort.
            </p>

            {/* Rich Editorial Image Cards Grid â€” 3D tilt on hover */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: 'var(--retail-space-8)'
            }}>
              {/* Card 1 â€” rises from below */}
              <ScrollReveal direction="rise" staggerIndex={0} duration={1000}>
              <TiltCard>
              <div 
                style={{
                  backgroundColor: 'var(--retail-surface-strong)',
                  borderRadius: 'var(--retail-radius-xs)',
                  border: '1px solid var(--retail-surface-muted)',
                  overflow: 'hidden',
                  boxShadow: 'var(--retail-shadow-1)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <img 
                    src="/images/retail/living-room.jpg" 
                    alt="Curated Spaces" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: 'var(--retail-space-6)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--retail-text-primary)', marginBottom: 'var(--retail-space-2)' }}>
                    Curated Spaces
                  </h3>
                  <p style={{ fontSize: '12px', color: 'var(--retail-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Seamlessly blending accent lighting, upholstered seating, and side tables to anchor modern homes with harmony and balance.
                  </p>
                </div>
              </div>
              </TiltCard>
              </ScrollReveal>

              {/* Card 2 â€” slides from left */}
              <ScrollReveal direction="left" staggerIndex={1} duration={1000}>
              <TiltCard>
              <div 
                style={{
                  backgroundColor: 'var(--retail-surface-strong)',
                  borderRadius: 'var(--retail-radius-xs)',
                  border: '1px solid var(--retail-surface-muted)',
                  overflow: 'hidden',
                  boxShadow: 'var(--retail-shadow-1)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <img 
                    src="/images/retail/product_lounge_chair_1780307435536.png" 
                    alt="Artisanal Materials" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: 'var(--retail-space-6)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--retail-text-primary)', marginBottom: 'var(--retail-space-2)' }}>
                    Artisanal Materials
                  </h3>
                  <p style={{ fontSize: '12px', color: 'var(--retail-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Vetting premium fabrics (boucle, aniline leather, organic linen) paired with hand-polished structural frames and bases.
                  </p>
                </div>
              </div>
              </TiltCard>
              </ScrollReveal>

              {/* Card 3 â€” dissolves */}
              <ScrollReveal direction="dissolve" staggerIndex={2} duration={1200}>
              <TiltCard>
              <div 
                style={{
                  backgroundColor: 'var(--retail-surface-strong)',
                  borderRadius: 'var(--retail-radius-xs)',
                  border: '1px solid var(--retail-surface-muted)',
                  overflow: 'hidden',
                  boxShadow: 'var(--retail-shadow-1)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <img 
                    src="/images/retail/workspace.jpg" 
                    alt="Bespoke Styling Advisory" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: 'var(--retail-space-6)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--retail-text-primary)', marginBottom: 'var(--retail-space-2)' }}>
                    Styling Advisory
                  </h3>
                  <p style={{ fontSize: '12px', color: 'var(--retail-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Collaborate directly with our design consultants to customize sizes, materials, configurations, and lighting moods.
                  </p>
                </div>
              </div>
              </TiltCard>
              </ScrollReveal>

              {/* Card 4 â€” rises from below */}
              <ScrollReveal direction="rise" staggerIndex={3} duration={1000}>
              <TiltCard>
              <div 
                style={{
                  backgroundColor: 'var(--retail-surface-strong)',
                  borderRadius: 'var(--retail-radius-xs)',
                  border: '1px solid var(--retail-surface-muted)',
                  overflow: 'hidden',
                  boxShadow: 'var(--retail-shadow-1)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <img 
                    src="/images/retail/dining-room.jpg" 
                    alt="White-Glove Delivery" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: 'var(--retail-space-6)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--retail-text-primary)', marginBottom: 'var(--retail-space-2)' }}>
                    White-Glove Setup
                  </h3>
                  <p style={{ fontSize: '12px', color: 'var(--retail-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Specialized transit, delivery, and professional home assembly to ensure your new curation is positioned with absolute care.
                  </p>
                </div>
              </div>
              </TiltCard>
              </ScrollReveal>
            </div>
          </div>
      </section>

      {/* Category Grid */}
      <ScrollReveal direction="up" duration={900}>
        <CategoryGrid onNavigate={onNavigate} />
      </ScrollReveal>

      {/* Why Choose Us Section â€” slide from left */}
      <ScrollReveal direction="right" duration={1000}>
        <section style={{ 
          backgroundColor: 'var(--retail-surface-strong)', 
          padding: 'var(--retail-space-10) 0', 
          borderBottom: '1px solid var(--retail-surface-muted)' 
        }}>
          <div className="retail-container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'var(--retail-space-9)',
              alignItems: 'start'
            }}>
              {/* Left side: Editorial intro & image */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--retail-space-5)' }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: 'var(--retail-border-strong)'
                }}>
                  Our Edge
                </span>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  margin: 0
                }}>
                  Why Choose <span style={{ color: 'var(--retail-border-strong)' }}>Us</span>
                </h2>
                <p style={{ fontSize: '13.5px', color: 'var(--retail-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Kami meyakini bahwa furnitur bukan sekadar pengisi ruang, melainkan cerminan gaya hidup Anda. Melalui kurasi material terbaik dan pengerjaan presisi, kami menghadirkan kenyamanan yang bertahan lama.
                </p>
                <img 
                  src="/images/retail/bedroom.jpg" 
                  alt="Craftsmanship details" 
                  style={{
                    width: '100%',
                    height: '240px',
                    objectFit: 'cover',
                    borderRadius: 'var(--retail-radius-xs)',
                    marginTop: '10px'
                  }}
                />
              </div>

              {/* Right side: 4 Points list separated by thin borders */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { title: 'Premium Materials', desc: 'Carefully selected materials of the highest quality, from solid hardwood to high-tactile fabrics.' },
                  { title: 'Expert Craftsmanship', desc: 'Attention to every detail, ensuring structural integrity and flawless finish in every joint.' },
                  { title: 'Timeless Design', desc: 'Designed to last beyond trends, bringing aesthetic balance that remains relevant for decades.' },
                  { title: 'Custom Solutions', desc: 'Tailored to your needs, matching your specific spatial size, color codes, and interior configurations.' }
                ].map((item, idx) => (
                  <div key={idx} style={{ 
                    display: 'flex', 
                    gap: 'var(--retail-space-5)', 
                    padding: 'var(--retail-space-5) 0',
                    borderBottom: '1px solid var(--retail-surface-muted)'
                  }}>
                    <span style={{ 
                      fontSize: '18px', 
                      fontWeight: 700, 
                      color: 'var(--retail-border-strong)',
                      fontFamily: 'monospace'
                    }}>
                      0{idx + 1}.
                    </span>
                    <div>
                      <h3 style={{ 
                        fontSize: '15px', 
                        fontWeight: 700, 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.5px',
                        margin: '0 0 4px 0',
                        color: 'var(--retail-text-primary)'
                      }}>
                        {item.title}
                      </h3>
                      <p style={{ fontSize: '12.5px', color: 'var(--retail-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Collection Sliders â€” alternating directions */}
      <ScrollReveal direction="left" duration={1100}>
        <CollectionSlider 
          title="Best Seller" 
          tagline="Most Coveted Items"
          spotlightPosition="left" 
          spotlightImage="/images/retail/spotlight-bestseller.png"
          spotlightText="BEST<br/>SELLER"
          spotlightDesc="Discover our most coveted, timeless furniture pieces handcrafted from solid oak and upholstered in premium boucle texturing, built to anchor your living spaces."
          products={BEST_SELLERS}
          onAddToCart={onAddToCart}
          onViewDetail={(prod) => onNavigate('product-detail', prod)}
        />
      </ScrollReveal>
      
      <ScrollReveal direction="right" duration={1100}>
        <CollectionSlider 
          title="New Collection" 
          tagline="Fresh Arrivals"
          spotlightPosition="right" 
          spotlightImage="/images/retail/spotlight.png"
          spotlightText="NEW<br/>COLLECTION"
          spotlightDesc="Introducing our latest seasonal archive. An elegant collection highlighting clean silhouettes, soft linen textures, and warm organic lighting elements."
          products={NEW_COLLECTION}
          onAddToCart={onAddToCart}
          onViewDetail={(prod) => onNavigate('product-detail', prod)}
        />
      </ScrollReveal>

      <ScrollReveal direction="up" duration={900}>
        <ProductShowcase 
          products={products} 
          onAddToCart={onAddToCart} 
          onViewDetail={(prod) => onNavigate('product-detail', prod)}
        />
      </ScrollReveal>

      {/* Testimonials Section â€” dissolve reveal */}
      <ScrollReveal direction="dissolve" duration={1300}>
        <section style={{ 
          backgroundColor: 'var(--retail-surface-raised)', 
          padding: 'var(--retail-space-10) 0', 
          borderBottom: '1px solid var(--retail-surface-muted)' 
        }}>
          <div className="retail-container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--retail-space-8)' }}>
              <span style={{
                display: 'block',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'var(--retail-text-secondary)'
              }}>
                Client Stories
              </span>
              <h2 style={{
                fontSize: '26px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginTop: 'var(--retail-space-2)'
              }}>
                What Our Clients <span style={{ color: 'var(--retail-border-strong)' }}>Say</span>
              </h2>
            </div>

            {/* 3-Column Clean Bordered Grid for Reviews (No cards, no shadows) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'var(--retail-space-8)'
            }}>
              {[
                { 
                  quote: 'Exceptional quality and craftsmanship. Every piece exceeded our expectations. The velvet sofa anchors our living room beautifully.', 
                  client: 'Michael T.', 
                  loc: 'Kebayoran Baru' 
                },
                { 
                  quote: 'The team delivered both elegance and functionality perfectly. The bespoke dining table customization process was very professional.', 
                  client: 'Clara S.', 
                  loc: 'Menteng' 
                },
                { 
                  quote: 'HAVEN transformed our space. The organic textures feel premium and the white-glove setup team was absolutely flawless.', 
                  client: 'Ronald W.', 
                  loc: 'Pondok Indah' 
                }
              ].map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  paddingRight: 'var(--retail-space-4)',
                  borderRight: idx === 2 ? 'none' : '1px solid var(--retail-surface-muted)',
                  borderBottom: 'none'
                }} className="retail-testimonial-item">
                  <div>
                    <div style={{ color: 'var(--retail-border-strong)', fontSize: '14px', marginBottom: 'var(--retail-space-3)' }}>
                      â˜…â˜…â˜…â˜…â˜…
                    </div>
                    <p style={{ 
                      fontSize: '14px', 
                      fontStyle: 'italic', 
                      lineHeight: 1.6, 
                      color: 'var(--retail-text-secondary)',
                      margin: '0 0 var(--retail-space-4) 0' 
                    }}>
                      "{item.quote}"
                    </p>
                  </div>
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', display: 'block', color: 'var(--retail-text-primary)' }}>
                      {item.client}
                    </span>
                    <span style={{ fontSize: '11px', color: 'var(--retail-text-secondary)' }}>
                      {item.loc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}

