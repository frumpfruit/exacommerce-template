import React from 'react';
import ScrollReveal from './ScrollReveal';

const PIPELINE_STEPS = [
  { num: '01', title: 'Organic Sourcing', desc: 'Pemilihan ubi ungu organik lokal dan oat Swedia premium yang kaya beta-glucan sebagai bahan baku dasar.', output: 'Bahan Baku Siap' },
  { num: '02', title: 'Sanitary Processing', desc: 'Pencucian dan sterilisasi mekanis tanpa bahan kimia untuk memastikan kebersihan mutlak bebas pestisida.', output: 'Bahan Baku Steril' },
  { num: '03', title: 'Low-Temp Dehydration', desc: 'Pengeringan dengan suhu rendah (cold-pressed milling) agar senyawa bioaktif dan antioksidan tidak rusak oleh panas.', output: 'Bubuk Nutrisi Alami' },
  { num: '04', title: 'Bio-Active Blending', desc: 'Formulasi pencampuran dengan kultur prebiotik larut air dan enzim pencernaan untuk optimalisasi kesehatan lambung.', output: 'Formula Akhir Siap' },
  { num: '05', title: 'BPOM & Halal Quality Gate', desc: 'Pemeriksaan batch di laboratorium klinis kami untuk sertifikasi BPOM dan kesesuaian standar Halal MUI.', output: 'Lolos Sertifikasi' },
  { num: '06', title: 'Airtight Oxygen-Free Sealing', desc: 'Pengemasan dengan teknologi hampa oksigen untuk melindungi senyawa aktif dari oksidasi tanpa bahan pengawet.', output: 'Siap Didistribusikan' }
];

export default function ProcessPage({ onNavigate }) {
  return (
    <div style={{ backgroundColor: 'var(--supp-surface-base)', minHeight: '100vh' }}>
      {/* 1. Header - Scientific & Fresh Organic Feel */}
      <section style={{
        backgroundColor: '#ffffff', color: 'var(--supp-text-secondary)', padding: '60px 0',
        borderBottom: '1px solid var(--supp-border-muted)'
      }}>
        <div className="supp-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--supp-space-layout-sm)', alignItems: 'center' }}>
            <div style={{ maxWidth: '600px' }}>
              <span style={{ 
                display: 'inline-block', padding: '4px 10px', backgroundColor: 'rgba(120, 190, 0, 0.1)', 
                borderRadius: '4px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', 
                letterSpacing: '1px', color: 'var(--supp-surface-raised)', marginBottom: 'var(--supp-space-4)'
              }}>
                Scientific Quality Assurance
              </span>
              <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.1, margin: '0 0 var(--supp-space-4) 0', color: 'var(--supp-text-primary)' }}>
                Alur Produksi <span style={{ color: 'var(--supp-surface-raised)' }}>Higienis.</span>
              </h1>
              <p style={{ fontSize: '18px', color: 'rgba(33, 37, 41, 0.75)', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
                Otomatisasi pengolahan nutrisi nabati dari ladang organik hingga ke gelas Anda. Dirancang untuk melindungi serat pangan aktif lambung Anda.
              </p>
            </div>
            
            <div style={{
              width: '100%', height: '320px', borderRadius: '12px',
              backgroundColor: '#ffffff', overflow: 'hidden', position: 'relative',
              border: '1px solid var(--supp-border-muted)'
            }}>
              {/* Clean abstract organic circles / representation of laboratory process */}
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f0f6f2 0%, #e2ede5 100%)' }}>
                <svg viewBox="0 0 200 200" width="120" height="120" fill="none">
                  <circle cx="100" cy="100" r="70" stroke="var(--supp-surface-raised)" strokeWidth="2" strokeDasharray="5 5" />
                  <circle cx="100" cy="100" r="50" fill="rgba(120, 190, 0, 0.1)" />
                  <path d="M70,100 L130,100 M100,70 L100,130" stroke="var(--supp-text-primary)" strokeWidth="2" />
                  <circle cx="100" cy="100" r="10" fill="var(--supp-surface-strong)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Horizontal Pipeline View */}
      <ScrollReveal direction="right" easing="elastic">
        <section style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
          <div className="supp-container">
            <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: 'var(--supp-space-2)', color: 'var(--supp-text-primary)' }}>
              Tahapan Pengolahan Alami
            </h2>
            <p style={{ fontSize: '14px', color: 'rgba(33, 37, 41, 0.75)', marginBottom: '30px' }}>
              Geser horizontal untuk melihat siklus hidup lengkap formulasi NutriPride.
            </p>

            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '20px', scrollbarWidth: 'thin' }}>
                {PIPELINE_STEPS.map((step, idx) => (
                  <div key={idx} style={{ flex: '0 0 280px', position: 'relative' }}>
                    <div style={{ 
                      width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--supp-surface-raised)',
                      color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '12px', fontWeight: 800, marginBottom: '15px'
                    }}>
                      {step.num}
                    </div>

                    <div style={{
                      backgroundColor: 'var(--supp-surface-card)',
                      border: '1px solid var(--supp-border-muted)',
                      borderRadius: '12px', padding: '20px', height: '240px',
                      display: 'flex', flexDirection: 'column', transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--supp-shadow-2)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                      <h3 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '10px', color: 'var(--supp-text-primary)' }}>
                        {step.title}
                      </h3>
                      <p style={{ fontSize: '13px', color: 'rgba(33, 37, 41, 0.75)', lineHeight: 1.6, margin: 0, flex: 1 }}>
                        {step.desc}
                      </p>
                      
                      <div style={{
                        marginTop: 'auto', paddingTop: '10px',
                        borderTop: '1px dashed var(--supp-border-muted)',
                        display: 'flex', alignItems: 'center', gap: '8px'
                      }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--supp-surface-strong)' }}></div>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--supp-text-primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Status: {step.output}
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

      {/* 3. Service Level Agreement (SLA) & Guarantees */}
      <ScrollReveal direction="left" easing="smooth">
        <section style={{ padding: '80px 0', borderTop: '1px solid var(--supp-border-muted)' }}>
          <div className="supp-container">
            <h2 style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '40px', textAlign: 'center', color: 'var(--supp-text-primary)' }}>
              Garansi Kualitas & Layanan NutriPride
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {[
                { title: '100% Organik Tanpa Kimia', desc: 'Kami menjamin tidak ada pewarna sintetis, pemanis buatan, atau pengental kimia. Seluruh bahan mentah murni bersumber dari perkebunan organik.' },
                { title: 'Konsultasi Ahli Gizi Cepat', desc: 'Semua permintaan konsultasi diet dan saran produk akan diproses dan dihubungi oleh ahli gizi bersertifikat kami dalam waktu maksimal 24 jam.' },
                { title: 'Pengiriman Segar Langsung', desc: 'Pesanan yang masuk sebelum jam 14:00 WIB dikirim pada hari yang sama dari gudang R&D pusat kami untuk menjaga kesegaran formula.' },
                { title: 'Uji Lab Terakreditasi', desc: 'Tiap bets produksi melewati uji logam berat dan cemaran mikroba untuk memastikan kepatuhan standar keamanan pangan nasional.' }
              ].map((sla, idx) => (
                <div key={idx} style={{ 
                  backgroundColor: 'var(--supp-surface-card)', border: '1px solid var(--supp-border-muted)',
                  borderRadius: '12px', padding: '20px', borderTop: '3px solid var(--supp-surface-raised)',
                  boxShadow: 'var(--supp-shadow-2)'
                }}>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, margin: '0 0 10px 0', color: 'var(--supp-text-primary)' }}>
                    {sla.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'rgba(33, 37, 41, 0.75)', lineHeight: 1.6, margin: 0 }}>
                    {sla.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 4. CTA */}
      <ScrollReveal direction="scale" easing="elastic">
        <section style={{
          backgroundColor: '#f0f6f2', padding: '60px 0', textAlign: 'center'
        }}>
          <div className="supp-container">
            <div style={{
              backgroundColor: '#ffffff',
              padding: '40px', borderRadius: '20px', border: '1px solid var(--supp-border-muted)',
              maxWidth: '800px', margin: '0 auto', boxShadow: 'var(--supp-shadow-2)'
            }}>
              <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '15px', color: 'var(--supp-text-primary)', letterSpacing: '-0.5px' }}>
                Mulai Pola Hidup Sehat Sekarang
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(33, 37, 41, 0.75)', marginBottom: '25px', maxWidth: '600px', margin: '0 auto 25px' }}>
                Kunjungi katalog suplemen pangan nabati kami dan konsultasikan rencana kebugaran Anda secara gratis.
              </p>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => onNavigate && onNavigate('store')} className="supp-btn supp-btn-primary" style={{ padding: '14px 32px' }}>
                  Lihat Katalog Produk
                </button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
