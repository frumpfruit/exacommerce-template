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
    <section className="vivere-container" style={{ padding: 'var(--vivere-space-7) var(--vivere-space-7) var(--vivere-space-10) var(--vivere-space-7)' }}>
      
      {/* Visual Hierarchy: Title & Subtitle */}
      <div style={{ textAlign: 'center', marginBottom: 'var(--vivere-space-8)' }}>
        <span style={{
          display: 'block',
          fontSize: '11px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '2px',
          color: 'var(--vivere-text-secondary)',
          marginBottom: 'var(--vivere-space-2)'
        }}>
          Curated Rooms
        </span>
        <h2 className="vivere-heading" style={{ fontSize: 'var(--vivere-text-lg)', margin: '0 0 10px 0', letterSpacing: '1.5px' }}>
          Shop by Category
        </h2>
        <p style={{ 
          fontSize: '13.5px', 
          color: 'var(--vivere-text-secondary)', 
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
        gap: 'var(--vivere-space-7)'
      }}>
        {CATEGORIES.map(cat => (
          <div 
            key={cat.id} 
            className="vivere-category-card" 
            onClick={handleCategoryClick}
          >
            <img src={cat.img} alt={cat.title} />
            <div className="vivere-category-overlay" />
            <div className="vivere-category-content">
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
                {cat.title} <span className="vivere-category-arrow">→</span>
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
      <div style={{ textAlign: 'center', marginTop: 'var(--vivere-space-8)' }}>
        <button 
          onClick={handleCategoryClick}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--vivere-border-strong)',
            fontSize: '13px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            cursor: 'pointer',
            borderBottom: '1px solid var(--vivere-border-strong)',
            padding: '2px 0 4px 0',
            transition: 'color 0.2s, border-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--vivere-text-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--vivere-border-strong)'}
        >
          View All Collections →
        </button>
      </div>

    </section>
  );
}
