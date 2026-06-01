import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--vivere-surface-base)',
      color: 'var(--vivere-surface-strong)',
      padding: 'var(--vivere-space-10) 0 var(--vivere-space-6) 0'
    }}>
      <div className="vivere-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--vivere-space-8)',
          marginBottom: 'var(--vivere-space-10)'
        }}>

          <div>
            <h3 style={{ fontSize: 'var(--vivere-text-lg)', fontWeight: 700, letterSpacing: '2px', marginBottom: 'var(--vivere-space-6)' }}>
              HAVEN
            </h3>
            <p style={{ fontSize: 'var(--vivere-text-sm)', color: '#999', lineHeight: 1.6 }}>
              Crafting timeless pieces for modern homes. Sustainable, elegant, and functional.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: 'var(--vivere-text-sm)', fontWeight: 600, marginBottom: 'var(--vivere-space-5)', textTransform: 'uppercase' }}>Shop</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-3)' }}>
              <li><a href="#" style={{ color: '#999', fontSize: 'var(--vivere-text-sm)' }}>Furniture</a></li>
              <li><a href="#" style={{ color: '#999', fontSize: 'var(--vivere-text-sm)' }}>Lighting</a></li>
              <li><a href="#" style={{ color: '#999', fontSize: 'var(--vivere-text-sm)' }}>Decor</a></li>
              <li><a href="#" style={{ color: '#999', fontSize: 'var(--vivere-text-sm)' }}>Sale</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 'var(--vivere-text-sm)', fontWeight: 600, marginBottom: 'var(--vivere-space-5)', textTransform: 'uppercase' }}>Support</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-3)' }}>
              <li><a href="#" style={{ color: '#999', fontSize: 'var(--vivere-text-sm)' }}>FAQ</a></li>
              <li><a href="#" style={{ color: '#999', fontSize: 'var(--vivere-text-sm)' }}>Shipping & Returns</a></li>
              <li><a href="#" style={{ color: '#999', fontSize: 'var(--vivere-text-sm)' }}>Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 'var(--vivere-text-sm)', fontWeight: 600, marginBottom: 'var(--vivere-space-5)', textTransform: 'uppercase' }}>Newsletter</h4>
            <p style={{ fontSize: 'var(--vivere-text-sm)', color: '#999', marginBottom: 'var(--vivere-space-4)' }}>Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div style={{ display: 'flex', gap: 'var(--vivere-space-2)', flexWrap: 'wrap' }}>
              <input type="email" placeholder="Enter your email" style={{
                padding: 'var(--vivere-space-3) var(--vivere-space-4)',
                backgroundColor: 'var(--vivere-surface-raised)',
                border: 'none',
                borderRadius: 'var(--vivere-radius-xs)',
                width: '100%',
                color: 'var(--vivere-text-primary)'
              }} />
              <button className="vivere-btn" style={{
                backgroundColor: 'var(--vivere-border-strong)',
                color: 'var(--vivere-surface-strong)',
                border: 'none',
                padding: 'var(--vivere-space-3) var(--vivere-space-5)'
              }}>Join</button>
            </div>
          </div>

        </div>

        <div style={{
          borderTop: '1px solid #333',
          paddingTop: 'var(--vivere-space-6)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 'var(--vivere-text-xs)',
          color: '#666'
        }}>
          <div>© 2026 Haven Collection. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 'var(--vivere-space-5)' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
