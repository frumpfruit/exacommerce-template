import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer style={{ 
      backgroundColor: 'var(--nexus-surface-base)', 
      color: 'rgba(255,255,255,0.7)',
      paddingTop: 'var(--nexus-space-8)',
      borderTop: '4px solid var(--nexus-brand-primary)'
    }}>
      <div className="nexus-container">
        {/* Mega Footer Grid */}
        <div className="nexus-footer-grid" style={{ marginBottom: 'var(--nexus-space-8)' }}>
          
          {/* Col 1: Brand & Data */}
          <div>
            <div style={{ 
              fontSize: '28px', fontWeight: 800, letterSpacing: '-1px',
              color: 'white', marginBottom: 'var(--nexus-space-3)',
              display: 'flex', alignItems: 'center', gap: '8px'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--nexus-brand-primary)" strokeWidth="3">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
              NEXUS
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.6, marginBottom: 'var(--nexus-space-4)', maxWidth: '280px' }}>
              The infrastructure for Indonesia's industrial supply chain. Delivering 10,000+ SKUs to all 34 provinces.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
              <div><strong>Headquarters:</strong> Surabaya, East Java</div>
              <div><strong>System Status:</strong> <span style={{ color: 'var(--nexus-status-success)' }}>● 100% Operational</span></div>
            </div>
          </div>

          {/* Col 2: Solutions / Shop */}
          <div>
            <h4 style={{ color: 'white', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 'var(--nexus-space-4)' }}>
              Shop
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
              <li><a href="#" style={{ cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); onNavigate('store'); }}>Furniture</a></li>
              <li><a href="#" style={{ cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); onNavigate('store'); }}>Lighting</a></li>
              <li><a href="#" style={{ cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); onNavigate('store'); }}>Decor</a></li>
              <li><a href="#" style={{ cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); onNavigate('store'); }}>Sale</a></li>
            </ul>
          </div>

          {/* Col 3: Company / Support */}
          <div>
            <h4 style={{ color: 'white', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 'var(--nexus-space-4)' }}>
              Support
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
              <li><a href="#" style={{ cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); }}>FAQ</a></li>
              <li><a href="#" style={{ cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); }}>Shipping & Returns</a></li>
              <li><a href="#" style={{ cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Contact Us</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter/Data */}
          <div>
            <h4 style={{ color: 'white', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 'var(--nexus-space-4)' }}>
              Market Reports
            </h4>
            <p style={{ fontSize: '13px', marginBottom: 'var(--nexus-space-3)' }}>
              Subscribe to receive quarterly B2B procurement intelligence and commodity price indexes.
            </p>
            <style>{`
              .nexus-footer-subscribe {
                display: flex;
              }
              @container nexus-app (max-width: 480px) {
                .nexus-footer-subscribe {
                  flex-direction: column;
                  gap: 8px;
                }
              }
            `}</style>
            <div className="nexus-footer-subscribe">
              <input type="email" placeholder="Corporate Email" style={{ 
                padding: '10px 12px', border: '1px solid rgba(255,255,255,0.2)', 
                backgroundColor: 'rgba(0,0,0,0.2)', color: 'white', fontSize: '12px',
                width: '100%', outline: 'none'
              }} />
              <button style={{ 
                backgroundColor: 'var(--nexus-brand-primary)', border: 'none', 
                color: 'white', padding: '10px 16px', fontSize: '12px', fontWeight: 700,
                cursor: 'pointer', whiteSpace: 'nowrap'
              }}>
                SUBSCRIBE
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          padding: 'var(--nexus-space-4) 0',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: '11px', flexWrap: 'wrap', gap: '16px'
        }}>
          <div>&copy; {new Date().getFullYear()} NEXUS Distribution Networks. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Vendor Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
