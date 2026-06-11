import React from 'react';
import ScrollReveal from './ScrollReveal';
import { ContainerScroll, CardSticky } from '@/components/cards-stack';

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: 'var(--nexus-surface-raised)' }}>
      {/* 1. Hero Section - Massive Typography */}
      <section style={{
        backgroundColor: 'var(--nexus-surface-base)',
        color: 'white',
        padding: 'var(--nexus-space-10) 0 var(--nexus-space-8) 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="nexus-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--nexus-space-8)', alignItems: 'center' }}>
            <div style={{ maxWidth: '600px' }}>
              <span style={{ 
                display: 'inline-block',
                fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', 
                letterSpacing: '2px', color: 'var(--nexus-brand-primary)',
                marginBottom: 'var(--nexus-space-3)'
              }}>
                Corporate Overview
              </span>
              <h1 style={{ 
                fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, 
                letterSpacing: '-2px', lineHeight: 1.1, margin: '0 0 var(--nexus-space-5) 0'
              }}>
                Powering Indonesia's <br/>
                <span style={{ color: 'var(--nexus-brand-primary)' }}>Supply Chain.</span>
              </h1>
              <p style={{ 
                fontSize: '18px', color: 'rgba(255,255,255,0.7)', 
                lineHeight: 1.6, fontWeight: 400 
              }}>
                Since 2015, NEXUS has been connecting businesses with quality industrial supplies through transparent pricing and robust logistics architecture.
              </p>
            </div>
            
            <div style={{
              width: '100%', height: '320px', borderRadius: '2px',
              backgroundColor: 'rgba(255,255,255,0.05)', overflow: 'hidden', position: 'relative'
            }}>
              <img src="/images/distribution/warehouse.jpg" alt="About NEXUS" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.4), transparent)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Big Stats (Data Dashboard Feel) */}
      <ScrollReveal direction="right" easing="elastic">
        <section style={{ backgroundColor: 'var(--nexus-surface-base)', paddingBottom: 'var(--nexus-space-8)' }}>
          <div className="nexus-container">
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              borderTop: '1px solid rgba(255,255,255,0.1)', borderLeft: '1px solid rgba(255,255,255,0.1)'
            }}>
              {[
                { value: '10K+', label: 'Active SKUs', trend: '+15% YoY' },
                { value: '500+', label: 'Enterprise Clients', trend: '+22% YoY' },
                { value: '34', label: 'Provinces Covered', trend: '100% Coverage' },
                { value: '200+', label: 'Verified Suppliers', trend: 'Strictly Audited' }
              ].map((stat, idx) => (
                <div key={idx} style={{ 
                  padding: 'var(--nexus-space-5)',
                  borderRight: '1px solid rgba(255,255,255,0.1)',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', flexDirection: 'column'
                }}>
                  <div style={{ fontSize: '48px', fontWeight: 800, color: 'white', letterSpacing: '-1.5px', lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginTop: 'var(--nexus-space-2)', marginBottom: 'var(--nexus-space-4)' }}>
                    {stat.label}
                  </div>
                  <div style={{
                    marginTop: 'auto', display: 'inline-block', padding: '4px 8px',
                    backgroundColor: 'rgba(22, 163, 74, 0.1)', color: 'var(--nexus-status-success)',
                    fontSize: '11px', fontWeight: 700, borderRadius: '2px', alignSelf: 'flex-start'
                  }}>
                    {stat.trend}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 3. Horizontal Story Line */}
      <ScrollReveal direction="left" easing="smooth">
        <section style={{ padding: 'var(--nexus-space-8) 0', borderBottom: '1px solid var(--nexus-surface-muted)' }}>
          <div className="nexus-container">
            <h2 style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: 'var(--nexus-space-6)' }}>
              The <span style={{ color: 'var(--nexus-brand-primary)' }}>NEXUS</span> Journey
            </h2>
            
            <div className="nexus-horizontal-scroll" style={{ paddingBottom: 'var(--nexus-space-4)' }}>
              {[
                { year: '2015', title: 'The Beginning', desc: 'Founded in Surabaya as a small packaging supplies distributor serving local businesses.' },
                { year: '2018', title: 'Digital Expansion', desc: 'Launched our first B2B platform and expanded our catalog to include safety and office supplies.' },
                { year: '2021', title: 'National Scale', desc: 'Opened distribution hubs in Jakarta, Medan, and Makassar, reaching nationwide coverage.' },
                { year: '2024', title: 'Enterprise Solutions', desc: 'Introduced dynamic pricing engine and API integrations for seamless enterprise procurement.' },
                { year: '2026', title: 'Sustainability', desc: 'Committed to green logistics and eco-friendly product alternatives across our entire catalog.' }
              ].map((phase, idx) => (
                <div key={idx} className="nexus-snap-child" style={{ 
                  backgroundColor: 'var(--nexus-surface-strong)',
                  border: '1px solid var(--nexus-surface-muted)',
                  borderRadius: '2px', padding: 'var(--nexus-space-5)', position: 'relative', overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute', top: '-10px', right: '-10px',
                    fontSize: '80px', fontWeight: 800, color: 'var(--nexus-surface-raised)', zIndex: 0, lineHeight: 1
                  }}>
                    {phase.year.substring(2)}
                  </div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--nexus-brand-primary)', marginBottom: '4px' }}>{phase.year}</div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 var(--nexus-space-2) 0', color: 'var(--nexus-text-primary)' }}>{phase.title}</h3>
                    <p style={{ fontSize: '13px', color: 'var(--nexus-text-secondary)', lineHeight: 1.5, margin: 0 }}>{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 4. Split-Pane Typography Core Principles (No cards, no emojis) */}
      <section style={{ padding: 'var(--nexus-space-10) 0', backgroundColor: 'var(--nexus-surface-strong)' }}>
        <style>{`
          .nexus-principles-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--nexus-space-8);
          }
          .nexus-principles-left {
            position: sticky;
            top: 120px;
            align-self: start;
          }
          @container nexus-app (max-width: 768px) {
            .nexus-principles-grid {
              grid-template-columns: 1fr;
              gap: var(--nexus-space-6);
            }
            .nexus-principles-left {
              position: static;
            }
          }
        `}</style>
        <div className="nexus-container">
          <div className="nexus-principles-grid">
            {/* Left Column: Sticky Title */}
            <div className="nexus-principles-left">
              <ScrollReveal direction="left" easing="smooth">
                <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--nexus-brand-primary)' }}>
                  Operating Principles
                </span>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-1.5px', margin: 'var(--nexus-space-3) 0 var(--nexus-space-4) 0', lineHeight: 1.1 }}>
                  Built on Data.<br/>Driven by Efficiency.
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--nexus-text-secondary)', lineHeight: 1.7, maxWidth: '400px' }}>
                  Our operational tenets dictate every partnership we form and every line of code we write in our procurement software.
                </p>
                <div style={{
                  marginTop: 'var(--nexus-space-6)',
                  width: '100%', maxWidth: '400px', height: '240px', borderRadius: '2px',
                  backgroundColor: 'var(--nexus-surface-muted)', overflow: 'hidden', position: 'relative'
                }}>
                  <img src="/images/distribution/exportation-3.jpg" alt="Operating Principles" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Cards Stack */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <ContainerScroll style={{ position: 'relative', width: '100%' }}>
                {[
                  {
                    id: '01',
                    title: 'Radical Transparency',
                    desc: 'No hidden fees, no obscure sourcing. Our dynamic pricing engine displays exactly how volume affects unit cost in real-time, allowing procurement managers to make calculated decisions instantly.',
                    bgColor: 'var(--nexus-surface-raised)'
                  },
                  {
                    id: '02',
                    title: 'Operational Efficiency',
                    desc: 'We invest heavily in warehouse robotics and route optimization algorithms. We ensure your production line never halts due to missing supplies or delayed freight.',
                    bgColor: 'var(--nexus-surface-raised)'
                  },
                  {
                    id: '03',
                    title: 'Scalable Infrastructure',
                    desc: 'From local SME to multinational enterprise, our API-first platform integrates directly into your existing ERP systems. We grow our bandwidth parallel to your demands.',
                    bgColor: 'var(--nexus-surface-raised)'
                  },
                  {
                    id: '04',
                    title: 'Strategic Partnership',
                    desc: 'Dedicated account managers act as an extension of your procurement team, proactively identifying cost-saving opportunities and supply chain consolidations.',
                    bgColor: 'var(--nexus-surface-raised)'
                  }
                ].map((item, idx) => (
                  <CardSticky 
                    key={item.id} 
                    index={idx}
                    className="rounded-md border p-8"
                    style={{ 
                      backgroundColor: item.bgColor,
                      borderColor: 'var(--nexus-surface-muted)',
                      boxShadow: 'var(--nexus-shadow-lg)',
                      marginBottom: '24px'
                    }}
                  >
                    <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--nexus-brand-primary)', fontFamily: 'monospace', marginBottom: 'var(--nexus-space-2)' }}>{item.id}</div>
                    <h3 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 var(--nexus-space-3) 0', color: 'var(--nexus-text-primary)' }}>{item.title}</h3>
                    <p style={{ fontSize: '16px', color: 'var(--nexus-text-secondary)', lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
                  </CardSticky>
                ))}
              </ContainerScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
