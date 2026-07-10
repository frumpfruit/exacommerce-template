import React from 'react';
import ScrollReveal from './ScrollReveal';

const ARTICLES = [
  {
    title: '5 Ways to Optimize Your Procurement Process',
    excerpt: 'Streamline your supply chain operations with these proven strategies for reducing costs and improving delivery times.',
    category: 'Procurement',
    date: 'May 28, 2026',
    readTime: '5 min read',
    img: '/images/distribution/article-procurement.jpg'
  },
  {
    title: 'Understanding MOQ: A Buyer\'s Guide',
    excerpt: 'Everything you need to know about Minimum Order Quantities — how they work, why they matter, and how to negotiate better terms.',
    category: 'Education',
    date: 'May 20, 2026',
    readTime: '4 min read',
    img: '/images/distribution/article-moq.jpg'
  },
  {
    title: 'Packaging Trends 2026: Sustainability',
    excerpt: 'The latest packaging innovations driving cost savings and environmental responsibility in Indonesian distribution.',
    category: 'Industry',
    date: 'May 15, 2026',
    readTime: '6 min read',
    img: '/images/distribution/article-packaging.jpg'
  },
  {
    title: 'Workplace Safety Compliance Checklist',
    excerpt: 'Ensure your facility meets Indonesian safety standards with this comprehensive PPE and safety equipment compliance guide.',
    category: 'Safety',
    date: 'May 10, 2026',
    readTime: '7 min read',
    img: '/images/distribution/article-safety.jpg'
  }
];

export default function InsightsPage() {
  return (
    <div style={{ backgroundColor: 'var(--dist-surface-raised)', minHeight: '100vh' }}>
      <style>{`
        .dist-insights-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: var(--dist-space-6);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: var(--dist-space-4);
        }
        .dist-insights-row {
          display: flex;
          gap: var(--dist-space-5);
          border-bottom: 1px solid var(--dist-surface-muted);
          padding-bottom: var(--dist-space-6);
          align-items: center;
          cursor: pointer;
        }
        .dist-insights-img-wrapper {
          width: 200px;
          height: 140px;
          flex-shrink: 0;
          background-color: var(--dist-surface-muted);
          border-radius: 2px;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .dist-insights-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .dist-insights-row {
            flex-direction: column;
            align-items: stretch;
            gap: var(--dist-space-4);
          }
          .dist-insights-img-wrapper {
            width: 100%;
            height: 200px;
          }
        }
      `}</style>

      {/* 1. Header & Global Supply Chain Map */}
      <section style={{ backgroundColor: 'var(--dist-surface-base)', color: 'white', paddingTop: 'var(--dist-space-7)', paddingBottom: 'var(--dist-space-8)' }}>
        <div className="dist-container">
          <div className="dist-insights-header">
            <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, margin: 0, letterSpacing: '-1.5px' }}>
              Intelligence <span style={{ color: 'var(--dist-brand-primary)' }}>& Reach.</span>
            </h1>
            <div style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
              Global Network Overview
            </div>
          </div>

          <ScrollReveal>
            {/* Replaced Live Data Feed with Global Network / Distribution Map layout */}
            <div style={{
              backgroundColor: '#1E293B',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '2px',
              padding: 'var(--dist-space-6)',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '350px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>

              {/* Background Map Placeholder Pattern */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
                backgroundSize: '24px 24px', opacity: 0.5, zIndex: 0
              }}></div>

              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', gap: 'var(--dist-space-6)' }}>
                {/* Text Block */}
                <div style={{ flex: '1 1 300px' }}>
                  <span className="dist-badge dist-badge-accent" style={{ marginBottom: 'var(--dist-space-3)' }}>Network Capability</span>
                  <h2 style={{ fontSize: '32px', fontWeight: 800, margin: '0 0 var(--dist-space-3) 0', letterSpacing: '-0.5px', lineHeight: 1.2 }}>
                    Unmatched <br /> Distribution Node.
                  </h2>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 'var(--dist-space-4)', maxWidth: '400px' }}>
                    Access our proprietary network map detailing our major warehouses, partner transit hubs, and average lead times across key industrial zones in Indonesia and SE Asia.
                  </p>
                  <button className="dist-btn dist-btn-primary" style={{ padding: '12px 24px' }}>
                    View Interactive Map
                  </button>
                </div>

                {/* Data Points */}
                <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'var(--dist-space-4)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--dist-space-3)', paddingBottom: 'var(--dist-space-3)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--dist-brand-primary)', borderRadius: '2px' }}></div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: 800 }}>14 Hubs</div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>Primary Distribution Centers</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--dist-space-3)', paddingBottom: 'var(--dist-space-3)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--dist-brand-accent)', borderRadius: '2px' }}></div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: 800 }}>800+</div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>Fleet Vehicles</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--dist-space-3)' }}>
                    <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--dist-status-success)', borderRadius: '2px' }}></div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: 800 }}>{'<'} 48 Hrs</div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>Average Inter-Island Lead Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Research Reports (List Layout) */}
      <ScrollReveal>
        <section style={{ padding: 'var(--dist-space-8) 0' }}>
          <div className="dist-container">
            <h2 style={{ fontSize: '24px', fontWeight: 800, borderBottom: '2px solid var(--dist-surface-border)', paddingBottom: 'var(--dist-space-3)', marginBottom: 'var(--dist-space-6)' }}>
              Industry Reports & Research
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--dist-space-6)' }}>
              {ARTICLES.map((article, idx) => (
                <div key={idx} className="dist-insights-row">
                  {/* Article Image */}
                  <div className="dist-insights-img-wrapper">
                    <img src={article.img} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>

                  {/* Article Details */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '8px' }}>
                      <span className="dist-badge dist-badge-primary">{article.category}</span>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--dist-text-secondary)' }}>• {article.readTime}</span>
                    </div>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--dist-text-primary)', margin: '0 0 8px 0', lineHeight: 1.3 }}>
                      {article.title}
                    </h3>
                    <p style={{ fontSize: '15px', color: 'var(--dist-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 'var(--dist-space-6)' }}>
              <button className="dist-btn dist-btn-secondary">
                Access Archive
              </button>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
