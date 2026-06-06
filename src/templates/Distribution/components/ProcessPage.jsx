import React from 'react';
import ScrollReveal from './ScrollReveal';

const PIPELINE_STEPS = [
  { num: '01', title: 'Catalog Integration', desc: 'Browse 10k+ SKUs or connect our catalog directly to your ERP via API for seamless internal procurement.', output: 'Procurement Ready' },
  { num: '02', title: 'Smart RFQ Submission', desc: 'Submit bulk requests. Our system auto-calculates volume discounts based on your account tier and historical data.', output: 'RFQ Processed' },
  { num: '03', title: 'Dynamic Quotation', desc: 'Receive instant or reviewed quotes within hours. Accept quotes digitally to automatically generate Purchase Orders.', output: 'PO Generated' },
  { num: '04', title: 'Automated Fulfillment', desc: 'Orders are routed to the nearest regional hub. Automated picking and packing ensures 99.9% accuracy.', output: 'Dispatched' },
  { num: '05', title: 'Live Fleet Tracking', desc: 'Monitor your freight in real-time via our dashboard. Receive automated alerts for ETAs and proof of delivery.', output: 'Delivered' },
  { num: '06', title: 'Digital Invoicing', desc: 'Invoices sync automatically with your accounting software. Manage corporate credit terms and digital payments.', output: 'Reconciled' }
];

export default function ProcessPage({ onNavigate }) {
  return (
    <div style={{ backgroundColor: 'var(--nexus-surface-raised)', minHeight: '100vh' }}>
      {/* 1. Header - Enterprise Tech Feel */}
      <section style={{
        backgroundColor: 'var(--nexus-surface-base)', color: 'white', padding: 'var(--nexus-space-10) 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="nexus-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--nexus-space-8)', alignItems: 'center' }}>
            <div style={{ maxWidth: '600px' }}>
              <span style={{ 
                display: 'inline-block', padding: '4px 10px', backgroundColor: 'rgba(255,255,255,0.1)', 
                borderRadius: '2px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', 
                letterSpacing: '1px', color: 'var(--nexus-text-secondary)', marginBottom: 'var(--nexus-space-4)'
              }}>
                System Architecture
              </span>
              <h1 style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.1, margin: '0 0 var(--nexus-space-4) 0' }}>
                The Procurement <span style={{ color: 'var(--nexus-brand-primary)' }}>Pipeline.</span>
              </h1>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
                End-to-end automation from catalog browsing to final reconciliation. Designed to eliminate friction in B2B supply chains.
              </p>
            </div>
            
            <div style={{
              width: '100%', height: '320px', borderRadius: '2px',
              backgroundColor: 'rgba(255,255,255,0.05)', overflow: 'hidden', position: 'relative'
            }}>
              <img src="/images/distribution/exportation-2.jpg" alt="Procurement Pipeline" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.4), transparent)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Horizontal Pipeline View */}
      <ScrollReveal direction="right" easing="elastic">
        <section style={{ padding: 'var(--nexus-space-8) 0', backgroundColor: 'var(--nexus-surface-strong)' }}>
          <div className="nexus-container">
            <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: 'var(--nexus-space-2)', color: 'var(--nexus-text-primary)' }}>
              Operational Workflow
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--nexus-text-secondary)', marginBottom: 'var(--nexus-space-6)' }}>
              Scroll horizontally to view the complete fulfillment lifecycle.
            </p>

            <div style={{ position: 'relative' }}>
              <div className="nexus-pipeline-container">
                <div className="nexus-pipeline-track" style={{ width: `${PIPELINE_STEPS.length * 300}px` }}></div>

                {PIPELINE_STEPS.map((step, idx) => (
                  <div key={idx} className="nexus-pipeline-step">
                    <div className="nexus-pipeline-node">{step.num}</div>

                    <div style={{
                      backgroundColor: 'var(--nexus-surface-raised)',
                      border: '1px solid var(--nexus-surface-muted)',
                      borderRadius: '2px', padding: 'var(--nexus-space-5)', height: '260px',
                      display: 'flex', flexDirection: 'column', transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--nexus-shadow-md)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                      <h3 style={{ fontSize: '16px', fontWeight: 800, marginBottom: 'var(--nexus-space-3)', color: 'var(--nexus-text-primary)' }}>
                        {step.title}
                      </h3>
                      <p style={{ fontSize: '14px', color: 'var(--nexus-text-secondary)', lineHeight: 1.6, margin: 0, flex: 1 }}>
                        {step.desc}
                      </p>
                      
                      <div style={{
                        marginTop: 'auto', paddingTop: 'var(--nexus-space-3)',
                        borderTop: '1px dashed var(--nexus-surface-border)',
                        display: 'flex', alignItems: 'center', gap: '8px'
                      }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--nexus-brand-primary)' }}></div>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--nexus-text-primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Output: {step.output}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Visual Separator Banner */}
      <section style={{ height: '300px', width: '100%', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--nexus-surface-muted)' }}>
        <img src="/images/distribution/verified.jpg" alt="Distribution Center" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.4)' }}></div>
      </section>

      {/* 3. Service Level Agreement (SLA) & Guarantees - Data Heavy */}
      <ScrollReveal direction="left" easing="smooth">
        <section style={{ padding: 'var(--nexus-space-10) 0', borderTop: '1px solid var(--nexus-surface-muted)' }}>
          <div className="nexus-container">
            <h2 style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: 'var(--nexus-space-6)', textAlign: 'center' }}>
              Enterprise <span style={{ color: 'var(--nexus-brand-primary)' }}>Service Level Agreement</span> (SLA)
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--nexus-space-5)' }}>
              {[
                { title: '99.9% Order Accuracy', desc: 'Our automated picking systems ensure you get exactly what you ordered. We cover all reverse logistics costs for any picking errors.' },
                { title: '24-Hour Quotation Turnaround', desc: 'Complex custom RFQs are processed by our pricing analysts and returned within one business day, guaranteed.' },
                { title: 'Same-Day Dispatch', desc: 'Orders confirmed before 14:00 WIB for in-stock items are dispatched from our distribution hubs on the exact same day.' },
                { title: 'Price Match Guarantee', desc: 'If you find a lower contracted price for the exact same industrial specification, we will match it and offer an additional 2% rebate.' }
              ].map((sla, idx) => (
                <div key={idx} style={{ 
                  backgroundColor: 'var(--nexus-surface-strong)', border: '1px solid var(--nexus-surface-muted)',
                  borderRadius: '2px', padding: 'var(--nexus-space-5)', borderTop: '3px solid var(--nexus-brand-primary)'
                }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, margin: '0 0 var(--nexus-space-3) 0', color: 'var(--nexus-text-primary)' }}>
                    {sla.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--nexus-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {sla.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 4. CTA - Data Center style */}
      <ScrollReveal direction="scale" easing="elastic">
        <section style={{
          backgroundColor: '#0F172A', backgroundImage: 'radial-gradient(#1E293B 1px, transparent 1px)',
          backgroundSize: '20px 20px', padding: 'var(--nexus-space-8) 0', textAlign: 'center', color: 'white'
        }}>
          <div className="nexus-container">
            <div style={{
              backgroundColor: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(10px)',
              padding: 'var(--nexus-space-6)', borderRadius: '2px', border: '1px solid rgba(255,255,255,0.1)',
              maxWidth: '800px', margin: '0 auto'
            }}>
              <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: 'var(--nexus-space-3)', letterSpacing: '-0.5px' }}>
                Ready to Upgrade Your <span style={{ color: 'var(--nexus-brand-primary)' }}>Logistics?</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: 'var(--nexus-space-5)', maxWidth: '600px', margin: '0 auto var(--nexus-space-5)' }}>
                Integrate your procurement operations with NEXUS today and reduce average sourcing time by up to 40%.
              </p>
              <div style={{ display: 'flex', gap: 'var(--nexus-space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => onNavigate && onNavigate('store')} className="nexus-btn nexus-btn-primary" style={{ padding: '14px 32px' }}>
                  Access Platform
                </button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
