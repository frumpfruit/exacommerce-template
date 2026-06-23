import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
/* eslint-disable react/prop-types */
import { FinancialHero } from '@/components/hero-section';

const BEST_SELLERS = [
  { id: 1, sku: 'NX-PT-48', name: 'Industrial Packing Tape 48mm', price: 15000, priceFormatted: 'IDR 15,000', unit: '/ roll', moq: '100', stock: 5000, desc: 'Heavy-duty OPP packing tape, 48mm x 100m. High adhesion, suitable for sealing corrugated cartons.' },
  { id: 2, sku: 'NX-CB-A3', name: 'Corrugated Box A3 Double Wall', price: 8500, priceFormatted: 'IDR 8,500', unit: '/ pc', moq: '500', stock: 12000, desc: 'Double-wall corrugated cardboard box (A3 size). Crush-resistant, ideal for heavy goods shipping.' },
  { id: 3, sku: 'NX-NG-M', name: 'Nitrile Gloves M (Box of 100)', price: 125000, priceFormatted: 'IDR 125,000', unit: '/ box', moq: '50', stock: 800, desc: 'Powder-free nitrile examination gloves, medium size. Chemical and puncture resistant.' },
  { id: 5, sku: 'NX-SH-01', name: 'Safety Helmet SNI Certified', price: 45000, priceFormatted: 'IDR 45,000', unit: '/ pc', moq: '100', stock: 1500, desc: 'HDPE safety helmet with ratchet suspension. SNI-certified for construction and industrial use.' },
];

const NEW_ARRIVALS = [
  { id: 6, name: 'A4 Copy Paper 80gsm', img: '/images/distribution/copy-paper.jpg' },
  { id: 7, name: 'Bubble Wrap Roll 125cm', img: '/images/distribution/bubble-wrap.jpg' },
  { id: 8, name: 'Pallet Wrap Dispenser', img: '/images/distribution/pallet-dispenser.jpg' },
];

const FEATURE_CARDS = [
  {
    id: '01',
    title: 'Nationwide Logistics',
    desc: 'Delivery network covering all 34 provinces with real-time tracking and dedicated freight.',
    accent: '#1D4ED8',
    bg: '#0F172A',
    textColor: '#fff',
  },
  {
    id: '02',
    title: 'Verified Suppliers',
    desc: 'Every supplier is audited for quality standards, certifications, and delivery reliability.',
    accent: '#2563EB',
    bg: '#FFFFFF',
    textColor: '#111827',
  },
  {
    id: '03',
    title: 'Dynamic Pricing',
    desc: 'Volume-based tiered pricing — the more you order, the lower your unit cost, in real time.',
    accent: '#F59E0B',
    bg: '#FFFFFF',
    textColor: '#111827',
  },
  {
    id: '04',
    title: 'Account Managers',
    desc: 'Dedicated sourcing experts act as an extension of your procurement team, 24/7.',
    accent: '#16A34A',
    bg: '#FFFFFF',
    textColor: '#111827',
  },
  {
    id: '05',
    title: 'API Integration',
    desc: 'Connect your ERP system directly to our platform. Automate PO generation and reconciliation.',
    accent: '#7C3AED',
    bg: '#FFFFFF',
    textColor: '#111827',
  },
];

function NexusCardStack() {
  const [hovered, setHovered] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  // Touch-friendly: tap to toggle fan-out on mobile
  const [tapped, setTapped] = useState(false);

  const isFanOut = hovered || tapped;

  // Stacked state offsets (cards peeking behind top card)
  const stackOffsets = [
    { rotate: 0,    translateY: 0,   translateX: 0,   scale: 1,    zIndex: 5 },
    { rotate: -4,   translateY: 10,  translateX: -8,  scale: 0.97, zIndex: 4 },
    { rotate: 6,    translateY: 18,  translateX: 10,  scale: 0.94, zIndex: 3 },
    { rotate: -7,   translateY: 26,  translateX: -14, scale: 0.91, zIndex: 2 },
    { rotate: 8,    translateY: 34,  translateX: 16,  scale: 0.88, zIndex: 1 },
  ];

  // Fan-out state offsets
  const fanOffsets = [
    { rotate: 0,    translateY: 0,   translateX: 0,   scale: 1,    zIndex: 5 },
    { rotate: -8,   translateY: -130, translateX: -140, scale: 0.95, zIndex: 4 },
    { rotate: -3,   translateY: -150, translateX: -50,  scale: 0.97, zIndex: 3 },
    { rotate: 4,    translateY: -140, translateX: 60,   scale: 0.97, zIndex: 2 },
    { rotate: 10,   translateY: -120, translateX: 155,  scale: 0.95, zIndex: 1 },
  ];

  return (
    <div
      style={{ position: 'relative', height: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1200px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setActiveCard(null); }}
      onClick={() => setTapped(t => !t)}
    >
      {/* Hint label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isFanOut ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
          fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px',
          color: 'var(--nexus-text-secondary)', display: 'flex', alignItems: 'center', gap: '6px',
          pointerEvents: 'none', zIndex: 10, whiteSpace: 'nowrap'
        }}
      >
        <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
        Tap / Hover to explore
      </motion.div>

      {FEATURE_CARDS.map((card, i) => {
        const pos = isFanOut ? fanOffsets[i] : stackOffsets[i];
        const isActive = activeCard === i;

        return (
          <motion.div
            key={card.id}
            animate={{
              rotate: pos.rotate,
              y: pos.translateY,
              x: pos.translateX,
              scale: isActive ? 1.05 : pos.scale,
              zIndex: isActive ? 20 : pos.zIndex,
            }}
            transition={{ type: 'spring', stiffness: 280, damping: 26, mass: 0.8 }}
            onHoverStart={() => isFanOut && setActiveCard(i)}
            onHoverEnd={() => setActiveCard(null)}
            style={{
              position: 'absolute',
              width: '240px',
              minHeight: '180px',
              backgroundColor: card.bg,
              borderRadius: '12px',
              border: isActive ? `2px solid ${card.accent}` : '1px solid #E5E7EB',
              boxShadow: isActive
                ? `0 20px 48px rgba(0,0,0,0.2), 0 0 0 1px ${card.accent}20`
                : '0 8px 24px rgba(0,0,0,0.12)',
              cursor: isFanOut ? 'pointer' : 'default',
              overflow: 'hidden',
              transformStyle: 'preserve-3d',
              willChange: 'transform',
            }}
          >
            {/* Top accent bar */}
            <div style={{ height: '4px', backgroundColor: card.accent, width: '100%' }} />

            <div style={{ padding: '20px 22px 22px' }}>
              <div style={{
                fontSize: '11px', fontWeight: 800, fontFamily: 'monospace',
                color: card.accent, marginBottom: '10px', letterSpacing: '1px'
              }}>
                {card.id}
              </div>
              <h3 style={{
                fontSize: '17px', fontWeight: 800,
                color: card.textColor, margin: '0 0 8px 0', lineHeight: 1.25,
                letterSpacing: '-0.3px'
              }}>
                {card.title}
              </h3>
              <p style={{
                fontSize: '13px', color: card.textColor === '#fff' ? 'rgba(255,255,255,0.7)' : '#6B7280',
                lineHeight: 1.6, margin: 0
              }}>
                {card.desc}
              </p>

              {/* Mini progress indicator on active */}
              <motion.div
                animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                initial={{ scaleX: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{
                  height: '2px', backgroundColor: card.accent,
                  marginTop: '16px', transformOrigin: 'left', borderRadius: '1px'
                }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function HomePage({ products = [], onNavigate, onAddToCart }) {
  useEffect(() => {
    // no-op for scroll tracking moved to parent if needed
  }, []);

  return (
    <div>
      <style>{`
        .nexus-value-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--nexus-space-8);
          align-items: center;
        }
        .nexus-table-header-row { display: flex; }
        .nexus-card-mobile-scroll { display: none; }
        .nexus-card-stack-canvas { display: block; }
        @media (max-width: 768px) {
          .nexus-value-grid {
            grid-template-columns: 1fr;
            gap: var(--nexus-space-6);
          }
          .nexus-table-header-row { display: none; }
          .nexus-card-stack-canvas { display: none !important; }
          .nexus-card-mobile-scroll {
            display: flex !important;
            overflow-x: auto;
            gap: 16px;
            padding: 16px 20px;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            margin: 0 -20px;
          }
          .nexus-card-mobile-scroll::-webkit-scrollbar {
            display: none;
          }
        }
        @media (max-width: 600px) {
          .nexus-mosaic-first { grid-column: span 1 !important; }
        }
        @media (max-width: 480px) {
          .nexus-card-mobile-scroll {
            margin: 0 -16px;
            padding: 16px 16px;
          }
        }
      `}</style>

      {/* 1. Hero Section - Animated FinancialHero */}
      <FinancialHero 
        title={
          <>
            Scale Your <br/>
            <span style={{ color: 'var(--nexus-brand-primary)' }}>Supply Chain.</span>
          </>
        }
        description="Indonesia's most robust B2B distribution platform. Gain access to 10,000+ industrial products with dynamic volume pricing, verified suppliers, and seamless nationwide logistics."
        buttonText="Access Catalog"
        onButtonClick={() => onNavigate('store')}
        imageUrl1="/images/distribution/exportation1.jpg"
        imageUrl2="/images/distribution/exportation-2.jpg"
        className="border-b border-muted"
      />

      {/* 2. Value Props - Stacked Card Deck (hover/tap to fan out) */}
      <section style={{ backgroundColor: 'var(--nexus-surface-raised)', padding: 'var(--nexus-space-10) 0', borderBottom: '1px solid var(--nexus-surface-muted)' }}>
        <div className="nexus-container">
          <div className="nexus-value-grid">

            {/* Left: Headline */}
            <ScrollReveal direction="left" easing="elastic">
              <div>
                <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--nexus-brand-primary)', display: 'block', marginBottom: 'var(--nexus-space-3)' }}>Platform Capabilities</span>
                <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, color: 'var(--nexus-text-primary)', letterSpacing: '-1px', lineHeight: 1.15, margin: '0 0 var(--nexus-space-4) 0' }}>
                  Engineered for <span style={{ color: 'var(--nexus-brand-primary)' }}>Scale.</span>
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--nexus-text-secondary)', lineHeight: 1.7, margin: '0 0 var(--nexus-space-6) 0', maxWidth: '480px' }}>
                  We replaced traditional procurement hurdles with a robust digital infrastructure designed to accelerate your growth.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--nexus-space-3)' }}>
                  {[
                    { num: '10K+', label: 'Active SKUs' },
                    { num: '34', label: 'Provinces Covered' },
                    { num: '-20%', label: 'Avg. Cost Savings' },
                  ].map((stat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--nexus-space-4)', paddingBottom: 'var(--nexus-space-3)', borderBottom: '1px solid var(--nexus-surface-muted)' }}>
                      <span style={{ fontSize: '28px', fontWeight: 800, color: 'var(--nexus-text-primary)', letterSpacing: '-0.5px', fontFamily: 'monospace', minWidth: '80px' }}>{stat.num}</span>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--nexus-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Stacked Card Deck or Mobile Scroll */}
            <div className="nexus-card-stack-canvas" style={{ width: '100%' }}>
              <NexusCardStack />
            </div>
            
            <div className="nexus-card-mobile-scroll">
              {FEATURE_CARDS.map((card) => (
                <div
                  key={card.id}
                  style={{
                    flex: '0 0 280px',
                    minHeight: '200px',
                    backgroundColor: card.bg,
                    borderRadius: '12px',
                    border: '1px solid #E5E7EB',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    overflow: 'hidden',
                    scrollSnapAlign: 'start',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ height: '4px', backgroundColor: card.accent, width: '100%' }} />
                  <div style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{
                      fontSize: '11px', fontWeight: 800, fontFamily: 'monospace',
                      color: card.accent, marginBottom: '10px', letterSpacing: '1px'
                    }}>
                      {card.id}
                    </div>
                    <h3 style={{
                      fontSize: '17px', fontWeight: 800,
                      color: card.textColor, margin: '0 0 8px 0', lineHeight: 1.25,
                      letterSpacing: '-0.3px'
                    }}>
                      {card.title}
                    </h3>
                    <p style={{
                      fontSize: '13px', color: card.textColor === '#fff' ? 'rgba(255,255,255,0.7)' : '#6B7280',
                      lineHeight: 1.6, margin: 0
                    }}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* 3. B2B Data Table (Replaces Best Sellers Slider) */}
      <ScrollReveal direction="up" easing="smooth">
        <section style={{ padding: 'var(--nexus-space-8) 0', borderBottom: '1px solid var(--nexus-surface-muted)' }}>
          <div className="nexus-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--nexus-space-5)', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--nexus-text-primary)', margin: '0 0 4px 0' }}>High-Volume Movers</h2>
                <p style={{ fontSize: '14px', color: 'var(--nexus-text-secondary)', margin: 0 }}>Our most frequently reordered industrial supplies.</p>
              </div>
              <button className="nexus-btn nexus-btn-secondary" onClick={() => onNavigate('store')}>View All →</button>
            </div>
            
            <div style={{ overflowX: 'auto', backgroundColor: 'var(--nexus-surface-strong)', border: '1px solid var(--nexus-surface-muted)' }}>
              <table className="nexus-data-table" style={{ minWidth: '640px' }}>
                <thead>
                  <tr>
                    <th>SKU</th>
                    <th>Product Description</th>
                    <th>MOQ</th>
                    <th>Availability</th>
                    <th>Unit Price</th>
                    <th style={{ textAlign: 'right' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {BEST_SELLERS.map(item => (
                    <tr key={item.id}>
                      <td style={{ fontFamily: 'monospace', fontWeight: 600, color: 'var(--nexus-brand-primary)', whiteSpace: 'nowrap' }}>{item.sku}</td>
                      <td>
                        <div style={{ fontWeight: 700, color: 'var(--nexus-text-primary)', marginBottom: '4px' }}>{item.name}</div>
                        <div style={{ fontSize: '12px', color: 'var(--nexus-text-secondary)', maxWidth: '260px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.desc}</div>
                      </td>
                      <td style={{ whiteSpace: 'nowrap' }}>{item.moq}</td>
                      <td>
                        <span className="nexus-badge nexus-badge-success" style={{ backgroundColor: 'rgba(22,163,74,0.1)', color: 'var(--nexus-status-success)', whiteSpace: 'nowrap' }}>
                          {item.stock.toLocaleString()} In Stock
                        </span>
                      </td>
                      <td style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>{item.priceFormatted} <span style={{ fontSize: '11px', color: 'var(--nexus-text-secondary)', fontWeight: 400 }}>{item.unit}</span></td>
                      <td style={{ textAlign: 'right' }}>
                        <button 
                          onClick={() => onAddToCart(item)}
                          style={{ background: 'var(--nexus-brand-primary)', border: 'none', color: 'white', padding: '6px 12px', fontSize: '11px', fontWeight: 700, cursor: 'pointer', borderRadius: '2px', whiteSpace: 'nowrap' }}
                        >
                          Add to RFQ
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 4. Brutalist Mosaic Grid (Replaces New Arrivals Slider) */}
      <ScrollReveal direction="scale" easing="elastic">
        <section style={{ padding: 'var(--nexus-space-8) 0', backgroundColor: 'var(--nexus-surface-base)' }}>
          <div className="nexus-container">
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'white', marginBottom: 'var(--nexus-space-5)' }}>
              New Contract <span style={{ color: 'var(--nexus-brand-primary)' }}>Additions</span>
            </h2>
            
            <div className="nexus-mosaic-grid">
              {NEW_ARRIVALS.map((item, idx) => (
                <div key={item.id} className={`nexus-mosaic-item${idx === 0 ? ' nexus-mosaic-first' : ''}`} style={{ gridColumn: idx === 0 ? 'span 2' : 'span 1' }}>
                  {/* 📷 IMAGE NEEDED */}
                  <img src={item.img} alt={item.name} onError={(e) => { e.target.style.display = 'none'; }} />
                  <div className="nexus-mosaic-content">
                    <span className="nexus-badge nexus-badge-accent" style={{ marginBottom: '8px' }}>NEW ITEM</span>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'white', margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                      {item.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ textAlign: 'center', marginTop: 'var(--nexus-space-5)' }}>
               <button className="nexus-btn" onClick={() => onNavigate('store')} style={{ backgroundColor: 'transparent', borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                 Browse Latest Inventory
               </button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 5. Why Choose Us - Sticky Scroll Layout */}
      <section style={{ backgroundColor: 'var(--nexus-surface-strong)', borderBottom: '1px solid var(--nexus-surface-muted)', padding: 'var(--nexus-space-10) 0' }}>
        <div className="nexus-container">
          <div className="nexus-sticky-container">
            <div className="nexus-sticky-left">
              <div style={{ width: '100%' }}>
                <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--nexus-text-primary)', letterSpacing: '-0.5px', marginBottom: 'var(--nexus-space-6)', lineHeight: 1.2 }}>
                  The NEXUS <br/> <span style={{ color: 'var(--nexus-brand-primary)' }}>Advantage.</span>
                </h2>
                
                {/* 📷 IMAGE NEEDED: warehouse-operations.jpg */}
                <div style={{
                  width: '100%', height: '360px', borderRadius: '2px',
                  backgroundColor: '#E2E8F0', overflow: 'hidden', position: 'relative'
                }}>
                  <img src="/images/distribution/warehouse-operations.jpg" alt="Operations" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.6), transparent)' }}></div>
                </div>
              </div>
            </div>

            <div className="nexus-sticky-right">
              {[
                { title: 'Reliable Supply Chain', desc: 'Consistent stock availability backed by partnerships with 200+ certified manufacturers and distributors. We minimize your risk of stockouts.' },
                { title: 'Scalable Operations', desc: 'From 100 units to 100,000 units — our infrastructure scales with your business demands seamlessly. Order precisely what you need, when you need it.' },
                { title: 'Fast Fulfillment', desc: 'Same-day dispatch for in-stock items. Average delivery time of 3-5 business days across Java island utilizing our dedicated freight network.' },
                { title: 'Full Transparency', desc: 'Real-time order tracking, detailed invoicing, and complete audit trails for all procurement activities integrated into your dashboard.' }
              ].map((item, idx) => (
                <div key={idx} className="nexus-scroll-block">
                  <span style={{
                    fontSize: '64px', fontWeight: 800, color: 'var(--nexus-surface-muted)',
                    lineHeight: 1, marginBottom: 'var(--nexus-space-2)', display: 'block', fontFamily: 'monospace'
                  }}>
                    0{idx + 1}
                  </span>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: 'var(--nexus-space-3)', color: 'var(--nexus-text-primary)' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '16px', color: 'var(--nexus-text-secondary)', lineHeight: 1.6, margin: 0, maxWidth: '400px' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
