import React, { useState } from 'react';
import './App.css';
import RetailStore from './templates/Retail/RetailStore';

// Pure, minimal geometric mockups (No emojis, no AI-slop)
const MockupA = () => (
  <svg viewBox="0 0 240 160" fill="none" className="w-full h-full">
    <rect width="240" height="160" fill="#090909" />
    <rect x="20" y="20" width="120" height="12" rx="6" fill="#ffffff" />
    <rect x="20" y="45" width="200" height="60" rx="10" fill="#141414" stroke="#262626" />
    <rect x="35" y="60" width="60" height="8" rx="4" fill="#ffffff" />
    <rect x="35" y="76" width="140" height="6" rx="3" fill="#999999" />
    <circle cx="200" cy="75" r="12" fill="#1c1c1c" />
  </svg>
);

const MockupB = () => (
  <svg viewBox="0 0 240 160" fill="none" className="w-full h-full">
    <rect width="240" height="160" fill="#090909" />
    <rect x="20" y="20" width="60" height="120" rx="10" fill="#141414" stroke="#262626" />
    <rect x="30" y="35" width="40" height="8" rx="4" fill="#ffffff" />
    <rect x="90" y="20" width="130" height="55" rx="10" fill="#141414" stroke="#262626" />
    <rect x="90" y="85" width="130" height="55" rx="10" fill="#141414" stroke="#262626" />
  </svg>
);

const MockupC = () => (
  <svg viewBox="0 0 240 160" fill="none" className="w-full h-full">
    <rect width="240" height="160" fill="#141414" />
    <circle cx="120" cy="60" r="30" fill="#1c1c1c" stroke="#262626" />
    <rect x="90" y="110" width="60" height="10" rx="5" fill="#ffffff" />
    <rect x="70" y="130" width="100" height="6" rx="3" fill="#999999" />
  </svg>
);

const MockupD = () => (
  <svg viewBox="0 0 240 160" fill="none" className="w-full h-full">
    <rect width="240" height="160" fill="#090909" />
    <path d="M0 80 Q 60 20 120 80 T 240 80" stroke="#262626" strokeWidth="2" fill="none" />
    <circle cx="120" cy="80" r="6" fill="#0099ff" />
    <rect x="110" y="95" width="20" height="6" rx="3" fill="#ffffff" />
  </svg>
);

const TEMPLATES = [
  { id: 'retail', title: 'Retail & Online Store (HAVEN)', category: 'E-commerce', svg: <MockupC /> },
  { id: 'marketing', title: 'Marketing Site', category: 'Landing Page', svg: <MockupA /> },
  { id: 'dashboard', title: 'Web App Interface', category: 'Dashboard', svg: <MockupB /> },
  { id: 'profile', title: 'Creator Profile', category: 'Portfolio', svg: <MockupC /> },
  { id: 'analytics', title: 'Data Analytics', category: 'SaaS', svg: <MockupD /> },
  { id: 'docs', title: 'Documentation', category: 'Content', svg: <MockupA /> }
];

export default function App() {
  const [activePreview, setActivePreview] = useState(TEMPLATES[0]);
  const [simulatorDevice, setSimulatorDevice] = useState('desktop');

  return (
    <div className="app-wrapper">
      {!activePreview ? (
        <>
          {/* Top Navigation */}
          <header className="top-nav">
            <a href="/" className="nav-brand">Template Catalog</a>
            <div className="nav-actions">
              <button className="button-secondary">Sign in</button>
              <button className="button-primary">Get started for free</button>
            </div>
          </header>

          {/* Hero Section */}
          <section className="section-hero">
            <h1 className="display-xl">Build faster.</h1>
            <h1 className="display-xl hero-spacer">Launch better.</h1>
            <p className="subhead" style={{ marginBottom: '40px' }}>
              A collection of premium architectural blueprints for modern teams.
              Designed with precision, built for performance.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
              <button className="button-primary">Browse Templates</button>
              <button className="button-secondary">Read Documentation</button>
            </div>
          </section>

          {/* Filter Bar */}
          <div className="filter-bar">
            {['All', 'Landing Page', 'Dashboard', 'Portfolio', 'SaaS', 'Commerce'].map((tab, i) => (
              <button key={tab} className={`filter-tab ${i === 0 ? 'active' : ''}`}>{tab}</button>
            ))}
          </div>

          {/* Catalog Grid */}
          <main className="catalog-grid">
            
            {/* The Signature Gradient Spotlight Card from DESIGN.md */}
            <div className="gradient-spotlight-card">
              <h2 className="gradient-title">Unleash your creativity</h2>
              <p className="gradient-desc">
                Start with a blank canvas or choose from our meticulously crafted layouts. 
                Everything is customizable down to the finest detail.
              </p>
              <div style={{ marginTop: 'auto', paddingTop: '30px' }}>
                <button className="button-primary" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  Explore Gallery
                </button>
              </div>
            </div>

            {TEMPLATES.map((tpl) => (
              <div key={tpl.id} className="template-card" onClick={() => setActivePreview(tpl)}>
                <div className="card-visual">
                  {tpl.svg}
                </div>
                <h3 className="card-title">{tpl.title}</h3>
                <span className="card-category">{tpl.category}</span>
              </div>
            ))}
            
          </main>
          
          {/* Footer (Dark Canvas) */}
          <footer style={{ padding: '64px 30px', borderTop: '1px solid #1a1a1a', display: 'flex', justifyContent: 'space-between' }}>
            <div className="nav-brand">ExaCommerce</div>
            <div style={{ color: '#999999', fontSize: '13px' }}>© 2026 Systems Inc.</div>
          </footer>
        </>
      ) : (
        /* Minimal Simulator Layout */
        <div className="simulator-layout">
          <div className="simulator-topbar">
            <button className="button-secondary" onClick={() => setActivePreview(null)}>
              Back to Catalog
            </button>
            <div className="simulator-title">{activePreview.title}</div>
            
            {/* Minimal Device Switcher */}
            <div style={{ display: 'flex', gap: '4px', backgroundColor: '#090909', padding: '4px', borderRadius: '100px', border: '1px solid #262626' }}>
              {['desktop', 'tablet', 'mobile'].map((dev) => (
                <button 
                  key={dev} 
                  onClick={() => setSimulatorDevice(dev)}
                  style={{ 
                    background: simulatorDevice === dev ? '#262626' : 'transparent',
                    color: simulatorDevice === dev ? '#ffffff' : '#999999',
                    border: 'none',
                    padding: '4px 12px',
                    borderRadius: '100px',
                    fontSize: '12px',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  {dev.charAt(0).toUpperCase() + dev.slice(1)}
                </button>
              ))}
            </div>

            <button className="button-primary">Get Template</button>
          </div>

          <div className="simulator-canvas">
            <div className="device-frame" style={{ width: simulatorDevice === 'desktop' ? '100%' : simulatorDevice === 'tablet' ? '768px' : '375px' }}>
              <div 
                className="device-body" 
                style={{ 
                  padding: activePreview.id === 'retail' ? 0 : 'var(--spacing-xl)'
                }}
              >
                {activePreview.id === 'retail' ? (
                  <RetailStore />
                ) : (
                  <div style={{ maxWidth: '800px', margin: '40px auto', textAlign: 'center' }}>
                  <h1 className="display-md" style={{ marginBottom: '15px' }}>{activePreview.title}</h1>
                  <p className="subhead" style={{ marginBottom: '60px' }}>
                    Previewing the <span style={{ color: '#ffffff' }}>{activePreview.category}</span> structural layout.
                  </p>
                  
                  {/* Clean Visual Placeholder for the actual template */}
                  <div style={{
                    width: '100%',
                    height: '400px',
                    backgroundColor: '#141414',
                    border: '1px dashed #262626',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '15px'
                  }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                    <div style={{ color: '#999999', fontSize: '15px', letterSpacing: '-0.15px' }}>
                      Template rendering engine ready.
                    </div>
                  </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
