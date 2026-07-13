import React from 'react';
import { Coffee } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer style={{
      backgroundColor: '#1C0F0A', color: '#FAF7F2',
      padding: '80px 24px 40px', borderTop: '1px solid #DCD1BE'
    }}>
      <div style={{
        maxWidth: '1200px', width: '100%', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
        gap: '48px', paddingBottom: '60px', borderBottom: '1px solid rgba(250,247,242,0.08)'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '20px', fontWeight: 900, marginBottom: '20px', color: '#FAF7F2' }}>
            <Coffee size={24} fill="#FAF7F2" color="#1C0F0A" />
            KOPITERA
          </div>
          <p style={{ fontSize: '14px', color: 'rgba(250,247,242,0.6)', lineHeight: 1.6, maxWidth: '300px' }}>
            B2B supplier biji kopi hijau pilihan Nusantara. Menghubungkan perkebunan rakyat dengan mitra roastery global.
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#C5A880', marginBottom: '20px' }}>Navigasi</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['home', 'about', 'process', 'insight', 'contact'].map(page => (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'rgba(250,247,242,0.6)', fontSize: '13px',
                  textAlign: 'left', textTransform: 'uppercase', letterSpacing: '0.5px',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#FAF7F2'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,247,242,0.6)'}
              >
                {page === 'home' ? 'Beranda' : page === 'about' ? 'Tentang Kami' : page === 'process' ? 'Alur Kerja' : page === 'insight' ? 'Artikel' : 'Kontak'}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#C5A880', marginBottom: '20px' }}>Kontak</h4>
          <p style={{ fontSize: '14px', color: 'rgba(250,247,242,0.6)', lineHeight: 1.6, marginBottom: '10px' }}>
            Jalan Perkebunan Raya No. 42,<br/>Bandung, Jawa Barat, Indonesia
          </p>
          <p style={{ fontSize: '14px', color: 'rgba(250,247,242,0.6)' }}>Email: partnership@kopitera.com</p>
          <p style={{ fontSize: '14px', color: 'rgba(250,247,242,0.6)', marginTop: '5px' }}>Telepon: +62 22 4567 890</p>
        </div>
      </div>

      <div style={{
        maxWidth: '1200px', width: '100%', margin: '40px auto 0',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',
        gap: '20px', fontSize: '12px', color: 'rgba(250,247,242,0.3)'
      }}>
        <div>Â© 2026 KOPITERA. Semua Hak Cipta Dilindungi.</div>
        <div>Design System: Warm Luxury Gourmet Â· PRD v1.0</div>
      </div>
    </footer>
  );
}

