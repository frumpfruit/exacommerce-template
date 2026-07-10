import React from 'react';
import ScrollReveal from './ScrollReveal';

const ARTICLES = [
  {
    title: 'Mengapa Ubi Ungu Baik untuk Penderita Asam Lambung?',
    excerpt: 'Ubi ungu mengandung konsentrasi tinggi antosianin dan senyawa bioaktif yang melindungi membran mukosa lambung dari asam berlebih.',
    category: 'Edukasi Lambung',
    date: 'Juni 12, 2026',
    readTime: '5 menit baca',
    img: ''
  },
  {
    title: 'Mengenal Peran Prebiotik Aktif dalam Oat Multigrain',
    excerpt: 'Memahami bagaimana serat larut beta-glucan dan inulin bersinergi memberi makan bakteri baik pencernaan dan memperlancar sekresi usus.',
    category: 'Kesehatan Pencernaan',
    date: 'Juni 08, 2026',
    readTime: '4 menit baca',
    img: ''
  },
  {
    title: '5 Bahaya Kimia Pengental & Pengawet Buatan di Makanan',
    excerpt: 'Zat aditif sintetis seperti maltodextrin dan karagenan dapat mengikis dinding pelindung lambung. Kenali alternatif alami pengental pangan.',
    category: 'Pangan Sehat',
    date: 'Juni 02, 2026',
    readTime: '6 menit baca',
    img: ''
  },
  {
    title: 'Panduan Diet Rendah Indeks Glikemik bagi Penderita Diabetes',
    excerpt: 'Oat multigrain dengan pelepasan lambat karbohidrat membantu mencegah lonjakan gula darah mendadak setelah makan.',
    category: 'Manajemen Nutrisi',
    date: 'Mei 25, 2026',
    readTime: '7 menit baca',
    img: ''
  }
];

export default function InsightsPage() {
  return (
    <div style={{ backgroundColor: 'var(--supp-surface-base)', minHeight: '100vh', paddingBottom: '60px' }}>
      <style>{`
        .supp-insights-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--supp-border-muted);
          padding-bottom: 16px;
        }
        .supp-insights-row {
          display: flex;
          gap: 20px;
          border-bottom: 1px solid var(--supp-border-muted);
          padding-bottom: 24px;
          align-items: center;
          cursor: pointer;
        }
        .supp-insights-img-wrapper {
          width: 200px;
          height: 140px;
          flex-shrink: 0;
          background-color: var(--supp-border-muted);
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--supp-surface-raised);
        }
        @media (max-width: 768px) {
          .supp-insights-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .supp-insights-row {
            flex-direction: column;
            align-items: stretch;
            gap: 16px;
          }
          .supp-insights-img-wrapper {
            width: 100%;
            height: 200px;
          }
        }
      `}</style>

      {/* 1. Header & R&D Capability */}
      <section style={{ backgroundColor: '#ffffff', color: 'var(--supp-text-secondary)', paddingTop: '30px', paddingBottom: '40px', borderBottom: '1px solid var(--supp-border-muted)' }}>
        <div className="supp-container">
          <div className="supp-insights-header">
            <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, margin: 0, letterSpacing: '-1.5px', color: 'var(--supp-text-primary)' }}>
              R&D <span style={{ color: 'var(--supp-surface-raised)' }}>Laporan Medis.</span>
            </h1>
            <div style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(33, 37, 41, 0.5)', fontWeight: 600 }}>
              Pusat Edukasi NutriPride
            </div>
          </div>

          <ScrollReveal>
            <div style={{
              backgroundColor: 'var(--supp-surface-card)',
              border: '1px solid var(--supp-border-muted)',
              borderRadius: '20px',
              padding: '24px',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '320px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: 'var(--supp-shadow-2)'
            }}>

              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
                {/* Text Block */}
                <div style={{ flex: '1 1 300px' }}>
                  <span className="supp-hero-badge" style={{ marginBottom: '15px' }}>R&D Capability</span>
                  <h2 style={{ fontSize: '32px', fontWeight: 800, margin: '0 0 15px 0', letterSpacing: '-0.5px', lineHeight: 1.2, color: 'var(--supp-text-primary)' }}>
                    Formulasi Teruji <br /> Laboratorium Klinis.
                  </h2>
                  <p style={{ fontSize: '15px', color: 'rgba(33, 37, 41, 0.75)', lineHeight: 1.6, marginBottom: '20px', maxWidth: '400px' }}>
                    Akses hasil riset gizi, pengujian keamanan organoleptik, dan jurnal ilmiah uji asam lambung yang disusun oleh dewan komite penasihat medis NutriPride.
                  </p>
                  <button className="supp-btn supp-btn-primary" style={{ padding: '12px 24px' }}>
                    Unduh Laporan Medis (PDF)
                  </button>
                </div>

                {/* Data Points */}
                <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', paddingBottom: '15px', borderBottom: '1px solid var(--supp-border-muted)' }}>
                    <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--supp-surface-raised)', borderRadius: '3px' }}></div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--supp-text-primary)' }}>12+ Lab Test</div>
                      <div style={{ fontSize: '12px', color: 'rgba(33, 37, 41, 0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>Pengujian Cemaran Kimia & Bakteri</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', paddingBottom: '15px', borderBottom: '1px solid var(--supp-border-muted)' }}>
                    <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--supp-surface-strong)', borderRadius: '3px' }}></div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--supp-text-primary)' }}>99.8%</div>
                      <div style={{ fontSize: '12px', color: 'rgba(33, 37, 41, 0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>Indeks Pencernaan Nyaman (Uji Panelis)</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--supp-text-primary)', borderRadius: '3px' }}></div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--supp-text-primary)' }}>15 Grains</div>
                      <div style={{ fontSize: '12px', color: 'rgba(33, 37, 41, 0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>Komposisi Fitonutrisi Sinergis</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Research Reports (List Layout) */}
      <ScrollReveal>
        <section style={{ padding: '40px 0' }}>
          <div className="supp-container">
            <h2 style={{ fontSize: '24px', fontWeight: 800, borderBottom: '2px solid var(--supp-border-muted)', paddingBottom: '12px', marginBottom: '24px', color: 'var(--supp-text-primary)' }}>
              Artikel & Edukasi Nutrisi Terbaru
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {ARTICLES.map((article, idx) => (
                <div key={idx} className="supp-insights-row">
                  {/* Article Image / Icon placeholder */}
                  <div className="supp-insights-img-wrapper">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                  </div>

                  {/* Article Details */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '8px' }}>
                      <span className="supp-hero-badge">{article.category}</span>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(33, 37, 41, 0.5)' }}>{article.date} • {article.readTime}</span>
                    </div>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--supp-text-primary)', margin: '0 0 8px 0', lineHeight: 1.3 }}>
                      {article.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'rgba(33, 37, 41, 0.75)', lineHeight: 1.6, margin: 0 }}>
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <button className="supp-btn supp-btn-secondary">
                Lihat Arsip Artikel
              </button>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
