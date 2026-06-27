import React from 'react';

const CATEGORIES = [
  { 
    id: 1, 
    title: 'Living Room', 
    desc: 'Create inviting spaces with timeless comfort.', 
    img: '/images/retail/living-room.jpg' 
  },
  { 
    id: 2, 
    title: 'Dining Room', 
    desc: 'Gather around beautifully crafted pieces.', 
    img: '/images/retail/dining-room.jpg' 
  },
  { 
    id: 3, 
    title: 'Bedroom', 
    desc: 'Designed for rest and relaxation.', 
    img: '/images/retail/bedroom.jpg' 
  },
  { 
    id: 4, 
    title: 'Workspace', 
    desc: 'Where productivity meets sophistication.', 
    img: '/images/retail/workspace.jpg' 
  }
];

export default function CategoryGrid({ onNavigate }) {
  const handleCategoryClick = () => {
    if (typeof onNavigate === 'function') {
      onNavigate('store');
    }
  };

  return (
    <section className="retail-container" style={{ padding: 'var(--retail-space-7) var(--retail-space-7) var(--retail-space-10) var(--retail-space-7)' }}>
      
      {/* Visual Hierarchy: Title & Subtitle */}
      <div style={{ textAlign: 'center', marginBottom: 'var(--retail-space-8)' }}>
        <span style={{
          display: 'block',
          fontSize: '11px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '2px',
          color: 'var(--retail-text-secondary)',
          marginBottom: 'var(--retail-space-2)'
        }}>
          Curated Rooms
        </span>
        <h2 className="retail-heading" style={{ fontSize: 'var(--retail-text-lg)', margin: '0 0 10px 0', letterSpacing: '1.5px' }}>
          Shop by Category
        </h2>
        <p style={{ 
          fontSize: '13.5px', 
          color: 'var(--retail-text-secondary)', 
          margin: 0, 
          maxWidth: '520px', 
          marginLeft: 'auto', 
          marginRight: 'auto', 
          lineHeight: 1.5 
        }}>
          Explore our curated collections<br/>crafted for every room in your home.
        </p>
      </div>
      
      {/* Categories Grid with Premium Hover Animations */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 'var(--retail-space-7)'
      }}>
        {CATEGORIES.map(cat => (
          <div 
            key={cat.id} 
            className="retail-category-card" 
            onClick={handleCategoryClick}
          >
            <img src={cat.img} alt={cat.title} />
            <div className="retail-category-overlay" />
            <div className="retail-category-content">
              <h3 style={{ 
                fontSize: '16px', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                letterSpacing: '1px', 
                margin: '0 0 6px 0', 
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center'
              }}>
                {cat.title} <span className="retail-category-arrow">→</span>
              </h3>
              <p style={{ 
                fontSize: '12px', 
                color: '#e5e7eb', 
                lineHeight: 1.4, 
                margin: 0 
              }}>
                {cat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Collections Link */}
      <div style={{ textAlign: 'center', marginTop: 'var(--retail-space-8)' }}>
        <button 
          onClick={handleCategoryClick}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--retail-border-strong)',
            fontSize: '13px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            cursor: 'pointer',
            borderBottom: '1px solid var(--retail-border-strong)',
            padding: '2px 0 4px 0',
            transition: 'color 0.2s, border-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--retail-text-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--retail-border-strong)'}
        >
          View All Collections →
        </button>
      </div>

    </section>
  );
}
