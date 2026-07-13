import React from 'react';
import ScrollReveal from './ScrollReveal';

const CATEGORIES = [
  {
    title: 'Packaging Supplies',
    desc: 'Corrugated boxes, stretch wrap, packing tape, bubble wrap, and palletizing materials for secure goods transit.',
    count: '120+ Products',
    /* ðŸ“· IMAGE NEEDED: packaging-supplies.jpg â€” warehouse shelves with stacked boxes, packaging tape rolls, bubble wrap */
    img: '/images/distribution/packaging-supplies.jpg'
  },
  {
    title: 'Safety Equipment',
    desc: 'Helmets, gloves, goggles, high-vis vests, and certified PPE for industrial and construction environments.',
    count: '85+ Products',
    /* ðŸ“· IMAGE NEEDED: safety-equipment.jpg â€” safety helmets, gloves, goggles arranged on industrial surface */
    img: '/images/distribution/safety-equipment.jpg'
  },
  {
    title: 'Office Supplies',
    desc: 'Paper reams, writing instruments, filing systems, and desk essentials for professional work environments.',
    count: '200+ Products',
    /* ðŸ“· IMAGE NEEDED: office-supplies.jpg â€” organized office supplies, paper stacks, pens, folders */
    img: '/images/distribution/office-supplies.jpg'
  },
  {
    title: 'Industrial Equipment',
    desc: 'Material handling tools, pallet dispensers, strapping machines, and warehouse automation accessories.',
    count: '60+ Products',
    /* ðŸ“· IMAGE NEEDED: industrial-equipment.jpg â€” warehouse with industrial tools, pallet jacks, machinery */
    img: '/images/distribution/industrial-equipment.jpg'
  }
];

export default function CategoryGrid({ onNavigate }) {
  return (
    <ScrollReveal>
      <section style={{
        backgroundColor: 'var(--dist-surface-raised)',
        padding: 'var(--dist-space-8) 0',
        borderBottom: '1px solid var(--dist-surface-muted)'
      }}>
        <div className="dist-container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--dist-space-6)' }}>
            <span style={{
              fontSize: '12px', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '2px', color: 'var(--dist-brand-primary)'
            }}>
              Product Categories
            </span>
            <h2 style={{
              fontSize: '24px', fontWeight: 700,
              marginTop: 'var(--dist-space-2)', color: 'var(--dist-text-primary)'
            }}>
              Browse by <span style={{ color: 'var(--dist-brand-primary)' }}>Industry</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: 'var(--dist-space-5)'
          }}>
            {CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="dist-category-card"
                onClick={() => onNavigate && onNavigate('store')}
              >
                {/* Placeholder background when image is missing */}
                <div style={{
                  width: '100%', height: '100%',
                  backgroundColor: '#E2E8F0',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'absolute', top: 0, left: 0
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <img src={cat.img} alt={cat.title} onError={(e) => { e.target.style.display = 'none'; }} />
                <div className="dist-category-overlay"></div>
                <div className="dist-category-content">
                  <span style={{
                    fontSize: '11px', fontWeight: 600, letterSpacing: '1px',
                    color: 'var(--dist-brand-accent)', textTransform: 'uppercase',
                    marginBottom: '4px', display: 'block'
                  }}>
                    {cat.count}
                  </span>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '6px' }}>
                    {cat.title}
                    <span className="dist-category-arrow">â†’</span>
                  </h3>
                  <p style={{ fontSize: '12px', lineHeight: 1.5, opacity: 0.85, margin: 0 }}>
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

