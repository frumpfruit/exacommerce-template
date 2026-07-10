import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function InquiryPage({ inquiryItems = [], onRemoveItem, onNavigate }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    consultationGoal: 'Pencegahan Asam Lambung / GERD',
    expectedDelivery: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inquiryItems.length === 0) {
      alert('Keranjang konsultasi Anda kosong. Silakan pilih produk dari katalog terlebih dahulu.');
      return;
    }
    
    console.log('Submitting NutriPride Consultation RFQ:', { user: formData, items: inquiryItems });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ backgroundColor: 'var(--supp-surface-base)', padding: '80px 0', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="supp-container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <div style={{
            width: '80px', height: '80px', borderRadius: '50%',
            backgroundColor: '#f0f6f2', display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 20px', border: '1px solid var(--supp-surface-raised)'
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--supp-surface-raised)" strokeWidth="2.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '15px', color: 'var(--supp-text-primary)' }}>
            Permintaan Konsultasi Dikirim
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(33, 37, 41, 0.75)', lineHeight: 1.6, marginBottom: '30px' }}>
            Terima kasih, <strong>{formData.fullName}</strong>. Data rencana diet sehat Anda telah kami terima. Tim ahli gizi NutriPride akan segera menghubungi Anda di nomor WhatsApp <strong>{formData.phone}</strong> atau email <strong>{formData.email}</strong> dalam waktu maksimal 24 jam.
          </p>
          <button 
            onClick={() => onNavigate('home')}
            className="supp-btn supp-btn-primary"
            style={{ padding: '12px 32px', fontSize: '14px' }}
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--supp-surface-base)', padding: '60px 0', minHeight: '80vh' }}>
      <div className="supp-container" style={{ maxWidth: '1000px' }}>
        
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--supp-surface-raised)' }}>
              Order & Consultation
            </span>
            <h1 style={{ fontSize: '28px', fontWeight: 800, marginTop: '10px', color: 'var(--supp-text-primary)' }}>
              Pengajuan <span style={{ color: 'var(--supp-surface-raised)' }}>Konsultasi & Pemesanan</span>
            </h1>
            <p style={{ fontSize: '14px', color: 'rgba(33, 37, 41, 0.75)', maxWidth: '600px', margin: '15px auto 0', lineHeight: 1.6 }}>
              Lengkapi formulir di bawah ini untuk berkonsultasi mengenai produk pangan fungsional yang tepat untuk program diet lambung Anda atau pemesanan skala grosir.
            </p>
          </div>
        </ScrollReveal>

        <form onSubmit={handleSubmit}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '30px'
          }}>
            
            {/* Items List */}
            <ScrollReveal delay={100}>
              <div style={{
                backgroundColor: 'var(--supp-surface-card)',
                border: '1px solid var(--supp-border-muted)',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: 'var(--supp-shadow-2)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--supp-border-muted)', paddingBottom: '15px' }}>
                  <h2 style={{ fontSize: '16px', fontWeight: 800, margin: 0, color: 'var(--supp-text-primary)' }}>
                    Item yang Dipilih ({inquiryItems.length})
                  </h2>
                  <button 
                    type="button" 
                    onClick={() => onNavigate('store')}
                    style={{ background: 'none', border: 'none', color: 'var(--supp-surface-raised)', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}
                  >
                    + Tambah Produk Lain
                  </button>
                </div>

                {inquiryItems.length === 0 ? (
                  <div style={{ padding: '40px 0', textAlign: 'center', backgroundColor: '#f0f6f2', borderRadius: '15px' }}>
                    <p style={{ fontSize: '14px', color: 'rgba(33, 37, 41, 0.75)', marginBottom: '15px' }}>
                      Belum ada produk di dalam daftar keranjang Anda.
                    </p>
                    <button 
                      type="button" 
                      onClick={() => onNavigate('store')}
                      className="supp-btn supp-btn-primary"
                    >
                      Buka Katalog Produk
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {inquiryItems.map((item, idx) => (
                      <div key={item.id + idx} style={{
                        display: 'flex',
                        gap: '20px',
                        paddingBottom: '20px',
                        borderBottom: idx === inquiryItems.length - 1 ? 'none' : '1px solid var(--supp-border-muted)'
                      }}>
                        <div style={{
                          width: '80px', height: '80px',
                          backgroundColor: '#f0f6f2',
                          borderRadius: '10px',
                          border: '1px solid var(--supp-border-muted)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                          <svg viewBox="0 0 200 200" style={{ width: '48px', height: '48px' }}>
                            <rect x="60" y="40" width="80" height="130" rx="10" fill="#0d120f" stroke={item.id === 1 ? '#78be00' : item.id === 2 ? '#03582d' : '#ffcd00'} strokeWidth="3" />
                          </svg>
                        </div>
                        
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                              <h3 style={{ fontSize: '15px', fontWeight: 700, margin: '0 0 4px 0', color: 'var(--supp-text-primary)' }}>{item.name}</h3>
                              <div style={{ fontSize: '12px', color: 'var(--supp-surface-raised)', fontWeight: 700 }}>
                                Estimasi Harga: {item.priceFormatted}
                              </div>
                            </div>
                            <button 
                              type="button" 
                              onClick={() => onRemoveItem(item.id)}
                              style={{
                                background: 'none', border: 'none', 
                                color: '#ef4444', fontSize: '12px', 
                                fontWeight: 700, cursor: 'pointer',
                                padding: '4px'
                              }}
                            >
                              Hapus
                            </button>
                          </div>
                          
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px', marginTop: '12px' }}>
                            <div>
                              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: 'rgba(33, 37, 41, 0.5)', marginBottom: '4px' }}>
                                Jumlah Paket yang Diinginkan (Unit)
                              </label>
                              <input 
                                type="text" 
                                placeholder="Contoh: 3 botol / 10 kaleng (Grosir)"
                                style={{
                                  width: '100%', padding: '8px 10px',
                                  border: '1px solid var(--supp-border-muted)', borderRadius: '6px',
                                  fontSize: '13px', fontFamily: 'inherit',
                                  backgroundColor: '#ffffff',
                                  color: 'var(--supp-text-secondary)'
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* User Form Details */}
            <ScrollReveal delay={200}>
              <div style={{
                backgroundColor: 'var(--supp-surface-card)',
                border: '1px solid var(--supp-border-muted)',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: 'var(--supp-shadow-2)'
              }}>
                <h2 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '20px', borderBottom: '1px solid var(--supp-border-muted)', paddingBottom: '15px', color: 'var(--supp-text-primary)' }}>
                  Data Informasi Konsumen
                </h2>
                <style>{`
                  .supp-inquiry-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px;
                    margin-bottom: 15px;
                  }
                  @media (max-width: 768px) {
                    .supp-inquiry-grid {
                      grid-template-columns: 1fr;
                    }
                  }
                `}</style>
                <div className="supp-inquiry-grid">
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--supp-text-primary)', display: 'block', marginBottom: '4px' }}>
                      Nama Lengkap <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input 
                      type="text" required placeholder="Contoh: Budi Pratama"
                      value={formData.fullName} onChange={e => handleChange('fullName', e.target.value)}
                      style={{ width: '100%', padding: '10px', border: '1px solid var(--supp-border-muted)', borderRadius: '6px', fontSize: '13px', backgroundColor: '#ffffff', color: 'var(--supp-text-secondary)' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--supp-text-primary)', display: 'block', marginBottom: '4px' }}>
                      Tujuan Utama Konsultasi
                    </label>
                    <select 
                      value={formData.consultationGoal} onChange={e => handleChange('consultationGoal', e.target.value)}
                      style={{ width: '100%', padding: '10px', border: '1px solid var(--supp-border-muted)', borderRadius: '6px', fontSize: '13px', backgroundColor: '#ffffff', color: 'var(--supp-text-secondary)' }}
                    >
                      <option value="Pencegahan Asam Lambung / GERD">Pencegahan Asam Lambung / GERD</option>
                      <option value="Pemulihan Stamina & Imunitas">Pemulihan Stamina & Imunitas</option>
                      <option value="Diet Rendah Gula / Glikemik">Diet Rendah Gula / Glikemik</option>
                      <option value="Kemitraan Toko / Reseller Grosir">Kemitraan Toko / Reseller Grosir</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--supp-text-primary)', display: 'block', marginBottom: '4px' }}>
                      Rencana Tanggal Pengiriman
                    </label>
                    <input 
                      type="date" 
                      value={formData.expectedDelivery} onChange={e => handleChange('expectedDelivery', e.target.value)}
                      style={{ width: '100%', padding: '10px', border: '1px solid var(--supp-border-muted)', borderRadius: '6px', fontSize: '13px', fontFamily: 'inherit', backgroundColor: '#ffffff', color: 'var(--supp-text-secondary)' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--supp-text-primary)', display: 'block', marginBottom: '4px' }}>
                      Alamat Email Aktif <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input 
                      type="email" required placeholder="budi@domain.com"
                      value={formData.email} onChange={e => handleChange('email', e.target.value)}
                      style={{ width: '100%', padding: '10px', border: '1px solid var(--supp-border-muted)', borderRadius: '6px', fontSize: '13px', backgroundColor: '#ffffff', color: 'var(--supp-text-secondary)' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--supp-text-primary)', display: 'block', marginBottom: '4px' }}>
                      Nomor WhatsApp Aktif <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input 
                      type="text" required placeholder="Contoh: 081234567890"
                      value={formData.phone} onChange={e => handleChange('phone', e.target.value)}
                      style={{ width: '100%', padding: '10px', border: '1px solid var(--supp-border-muted)', borderRadius: '6px', fontSize: '13px', backgroundColor: '#ffffff', color: 'var(--supp-text-secondary)' }}
                    />
                  </div>

                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--supp-text-primary)', display: 'block', marginBottom: '4px' }}>
                      Riwayat Kesehatan Lambung / Catatan Khusus
                    </label>
                    <textarea 
                      rows={3} placeholder="Tuliskan riwayat alergi makanan Anda atau permohonan khusus lainnya..."
                      value={formData.message} onChange={e => handleChange('message', e.target.value)}
                      style={{ width: '100%', padding: '10px', border: '1px solid var(--supp-border-muted)', borderRadius: '6px', fontSize: '13px', resize: 'vertical', fontFamily: 'inherit', backgroundColor: '#ffffff', color: 'var(--supp-text-secondary)' }}
                    />
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#f0f6f2',
                  padding: '15px',
                  borderRadius: '10px',
                  marginTop: '20px',
                  border: '1px solid var(--supp-border-muted)'
                }}>
                  <p style={{ fontSize: '12px', color: 'rgba(33, 37, 41, 0.65)', lineHeight: 1.5, margin: '0 0 15px 0' }}>
                    Dengan menekan tombol kirim di bawah, Anda menyetujui data Anda digunakan untuk saran diet gizi privat oleh ahli gizi klinis kami secara gratis.
                  </p>
                  <button 
                    type="submit" 
                    className="supp-btn supp-btn-primary"
                    disabled={inquiryItems.length === 0}
                    style={{ 
                      width: '100%', padding: '14px', fontSize: '14px',
                      opacity: inquiryItems.length === 0 ? 0.5 : 1,
                      cursor: inquiryItems.length === 0 ? 'not-allowed' : 'pointer'
                    }}
                  >
                    Kirim Permintaan Konsultasi & Pemesanan
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </form>
      </div>
    </div>
  );
}
