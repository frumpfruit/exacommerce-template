import React, { useState } from 'react';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');
  const [activeModal, setActiveModal] = useState(null); // null | 'faq' | 'shipping' | 'privacy' | 'terms'

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Email cannot be empty.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
  };

  const handleNav = (e, target) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(target);
    }
  };

  const handleModalOpen = (e, type) => {
    e.preventDefault();
    setActiveModal(type);
  };

  return (
    <footer style={{
      backgroundColor: 'var(--retail-surface-base)',
      color: 'var(--retail-surface-strong)',
      padding: 'var(--retail-space-10) 0 var(--retail-space-6) 0',
      position: 'relative'
    }}>
      <div className="retail-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
          gap: 'var(--retail-space-8)',
          marginBottom: 'var(--retail-space-10)'
        }}>

          <div>
            <h3 
              onClick={(e) => handleNav(e, 'home')}
              style={{ 
                fontSize: 'var(--retail-text-lg)', 
                fontWeight: 700, 
                letterSpacing: '2px', 
                marginBottom: 'var(--retail-space-6)',
                cursor: 'pointer',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#d9ab7e'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--retail-surface-strong)'}
            >
              HAVEN
            </h3>
            <p style={{ fontSize: 'var(--retail-text-sm)', color: '#999', lineHeight: 1.6 }}>
              Crafting timeless pieces for modern homes. Sustainable, elegant, and functional.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: 'var(--retail-text-sm)', fontWeight: 600, marginBottom: 'var(--retail-space-5)', textTransform: 'uppercase', color: '#ffffff' }}>Shop</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--retail-space-3)' }}>
              <li>
                <button onClick={(e) => handleNav(e, 'store')} className="retail-footer-link">
                  Furniture
                </button>
              </li>
              <li>
                <button onClick={(e) => handleNav(e, 'store')} className="retail-footer-link">
                  Lighting
                </button>
              </li>
              <li>
                <button onClick={(e) => handleNav(e, 'store')} className="retail-footer-link">
                  Decor
                </button>
              </li>
              <li>
                <button onClick={(e) => handleNav(e, 'store')} className="retail-footer-link">
                  Sale
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 'var(--retail-text-sm)', fontWeight: 600, marginBottom: 'var(--retail-space-5)', textTransform: 'uppercase', color: '#ffffff' }}>Support</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--retail-space-3)' }}>
              <li>
                <button onClick={(e) => handleModalOpen(e, 'faq')} className="retail-footer-link">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={(e) => handleModalOpen(e, 'shipping')} className="retail-footer-link">
                  Shipping & Returns
                </button>
              </li>
              <li>
                <button onClick={(e) => handleNav(e, 'contact')} className="retail-footer-link">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 'var(--retail-text-sm)', fontWeight: 600, marginBottom: 'var(--retail-space-5)', textTransform: 'uppercase', color: '#ffffff' }}>Newsletter</h4>
            <p style={{ fontSize: 'var(--retail-text-sm)', color: '#999', marginBottom: 'var(--retail-space-4)' }}>Subscribe to receive updates, access to exclusive deals, and more.</p>
            
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: 'var(--retail-space-2)', flexWrap: 'wrap', flexDirection: 'column', width: '100%' }}>
              <div style={{ display: 'flex', gap: 'var(--retail-space-2)', width: '100%' }}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="retail-footer-input"
                />
                <button type="submit" className="retail-footer-btn-join">
                  Join
                </button>
              </div>
              
              {error && (
                <span style={{ fontSize: 'var(--retail-text-xs)', color: '#ff6b6b', marginTop: 'var(--retail-space-1)' }}>
                  {error}
                </span>
              )}
              
              {subscribed && (
                <span style={{ fontSize: 'var(--retail-text-sm)', color: '#d9ab7e', marginTop: 'var(--retail-space-1)', fontWeight: 500 }}>
                  âœ“ Subscribed successfully!
                </span>
              )}
            </form>
          </div>

        </div>

        <div style={{
          borderTop: '1px solid #333',
          paddingTop: 'var(--retail-space-6)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 'var(--retail-text-xs)',
          color: '#666'
        }}>
          <div>Â© 2026 Haven Collection. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 'var(--retail-space-5)' }}>
            <button onClick={(e) => handleModalOpen(e, 'privacy')} className="retail-footer-link" style={{ fontSize: 'var(--retail-text-xs)', color: '#666' }}>
              Privacy Policy
            </button>
            <button onClick={(e) => handleModalOpen(e, 'terms')} className="retail-footer-link" style={{ fontSize: 'var(--retail-text-xs)', color: '#666' }}>
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Premium Informational Modals */}
      {activeModal && (
        <div 
          onClick={() => setActiveModal(null)}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#161616',
              border: '1px solid #333',
              borderRadius: 'var(--retail-radius-xs)',
              width: '100%',
              maxWidth: '600px',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: 'var(--retail-space-8)',
              position: 'relative',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              color: '#ffffff'
            }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveModal(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: '#888',
                cursor: 'pointer',
                padding: '5px',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#888'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Modal Title */}
            <h3 style={{
              fontSize: '20px',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#d9ab7e',
              borderBottom: '1px solid #333',
              paddingBottom: 'var(--retail-space-4)',
              marginBottom: 'var(--retail-space-6)'
            }}>
              {activeModal === 'faq' && 'Frequently Asked Questions'}
              {activeModal === 'shipping' && 'Shipping & Returns'}
              {activeModal === 'privacy' && 'Privacy Policy'}
              {activeModal === 'terms' && 'Terms of Service'}
            </h3>

            {/* Modal Content */}
            <div style={{ fontSize: '14px', lineHeight: '1.7', color: '#ccc' }}>
              {activeModal === 'faq' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <h4 style={{ color: '#ffffff', fontWeight: 600, marginBottom: '8px' }}>Bagaimana cara melakukan custom order?</h4>
                    <p>Anda dapat menghubungi desainer tata ruang kami melalui tombol WhatsApp "Design Advisory" di bagian navigasi atas, atau kunjungi halaman Contact untuk mengirim formulir konsultasi.</p>
                  </div>
                  <div>
                    <h4 style={{ color: '#ffffff', fontWeight: 600, marginBottom: '8px' }}>Di mana material mebel HAVEN bersumber?</h4>
                    <p>Semua material kayu kami bersumber dari kayu solid pilihan bersertifikat FSC (seperti Oak putih Eropa dan kayu Ash), dipadukan dengan kain boucle premium berkualitas tinggi.</p>
                  </div>
                  <div>
                    <h4 style={{ color: '#ffffff', fontWeight: 600, marginBottom: '8px' }}>Apakah mebel HAVEN bergaransi?</h4>
                    <p>Ya. Kami memberikan garansi struktur selama 2 tahun untuk seluruh koleksi furniture HAVEN sebagai jaminan kualitas pengerjaan dan craftsmanship kami.</p>
                  </div>
                  <div>
                    <h4 style={{ color: '#ffffff', fontWeight: 600, marginBottom: '8px' }}>Apakah ada layanan pengiriman ke seluruh Indonesia?</h4>
                    <p>Tentu. Kami melayani pengiriman domestik ke kota-kota besar di seluruh Indonesia. Tarif pengiriman akan dihitung secara detail pada saat konfirmasi inquiry pesanan Anda.</p>
                  </div>
                </div>
              )}

              {activeModal === 'shipping' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <h4 style={{ color: '#ffffff', fontWeight: 600, marginBottom: '8px' }}>Ketentuan Pengiriman (Shipping)</h4>
                    <p>Kami menyediakan layanan pengiriman khusus (white-glove delivery) termasuk perakitan langsung di lokasi untuk wilayah Jabodetabek. Untuk luar kota, kami bekerja sama dengan kargo terpercaya dengan proteksi asuransi penuh agar mebel tiba dengan aman.</p>
                  </div>
                  <div>
                    <h4 style={{ color: '#ffffff', fontWeight: 600, marginBottom: '8px' }}>Ketentuan Pengembalian (Returns)</h4>
                    <p>Setiap produk HAVEN melewati kontrol kualitas (QC) yang ketat sebelum dikirim. Jika terjadi cacat produksi atau kerusakan selama pengiriman oleh tim kami, silakan laporkan dalam waktu 1x24 jam untuk penggantian produk baru tanpa biaya tambahan. Produk custom order tidak dapat dibatalkan atau dikembalikan setelah proses produksi dimulai.</p>
                  </div>
                </div>
              )}

              {activeModal === 'privacy' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <p>Kepercayaan Anda adalah prioritas kami. HAVEN Collection berkomitmen untuk melindungi data pribadi yang Anda bagikan kepada kami.</p>
                  <p>1. **Pengumpulan Data**: Kami mengumpulkan informasi seperti nama, email, nomor telepon, dan detail alamat pengiriman hanya untuk keperluan pemrosesan inquiry dan pengiriman pesanan.</p>
                  <p>2. **Keamanan**: Kami menerapkan protokol enkripsi standar untuk memastikan seluruh data transaksi dan komunikasi terhindar dari akses pihak ketiga yang tidak sah.</p>
                  <p>3. **Kerahasiaan**: HAVEN tidak akan pernah menjual, membagikan, atau menyewakan informasi pribadi Anda kepada perusahaan atau pihak lain untuk tujuan pemasaran eksternal.</p>
                </div>
              )}

              {activeModal === 'terms' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <p>Selamat datang di HAVEN Collection. Dengan mengakses dan berbelanja di layanan kami, Anda menyetujui ketentuan berikut:</p>
                  <p>1. **Pemesanan & Estimasi**: Waktu produksi untuk item pra-order atau custom berkisar antara 4-6 minggu setelah pembayaran deposit diterima.</p>
                  <p>2. **Hak Cipta**: Seluruh desain mebel, layout interior, konsep visual, serta konten multimedia yang ditampilkan di situs ini adalah hak milik intelektual HAVEN Collection.</p>
                  <p>3. **Batasan Tanggung Jawab**: Kami berupaya menampilkan warna dan detail material seakurat mungkin, namun variasi serat kayu alami serta pencahayaan layar dapat menyebabkan sedikit perbedaan tampilan.</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div style={{
              marginTop: 'var(--retail-space-8)',
              paddingTop: 'var(--retail-space-4)',
              borderTop: '1px solid #333',
              textAlign: 'right'
            }}>
              <button 
                onClick={() => setActiveModal(null)}
                className="retail-btn"
                style={{
                  backgroundColor: '#d9ab7e',
                  color: '#1a1a1a',
                  border: 'none',
                  padding: '8px 20px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

