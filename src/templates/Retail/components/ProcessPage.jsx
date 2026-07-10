import React from 'react';
import ScrollReveal from './ScrollReveal';

const STAGES = [
  {
    num: '01',
    title: 'Discovery & Consultation',
    todo: 'Memahami kebutuhan pelanggan, mendiskusikan konsep ruang secara mendalam, dan menentukan preferensi desain estetika yang diinginkan.',
    output: 'Brief Kebutuhan'
  },
  {
    num: '02',
    title: 'Design & Material Selection',
    todo: 'Pemilihan garis desain furnitur, penentuan material premium (kayu oak/ash, linen boucle, logam kuningan), serta penyesuaian detail dimensi produk.',
    output: 'Design Proposal'
  },
  {
    num: '03',
    title: 'Craftsmanship & Production',
    todo: 'Proses manufaktur oleh perajin kayu dan penjahit kain ahli, diiringi pengawasan kualitas (quality control) ketat dan pengerjaan finishing detail tangan.',
    output: 'Produk Siap Kirim'
  },
  {
    num: '04',
    title: 'Delivery & Installation',
    todo: 'Pengiriman aman terproteksi ke rumah Anda, instalasi profesional oleh tim teknis internal HAVEN, dan inspeksi penataan akhir di dalam ruang.',
    output: 'Ruang Siap Digunakan'
  },
  {
    num: '05',
    title: 'Aftercare & Support',
    todo: 'Penyediaan panduan perawatan berkala untuk kain dan kayu, klaim garansi kualitas produk, serta layanan dukungan pelanggan yang andal selamanya.',
    output: 'Kepuasan Jangka Panjang'
  }
];

export default function ProcessPage({ onNavigate }) {
  const handleContactNav = () => {
    if (typeof onNavigate === 'function') {
      onNavigate('contact');
    } else {
      // Fallback
      alert('Silakan hubungi kami via menu CONTACT.');
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--retail-surface-strong)', color: 'var(--retail-text-primary)' }}>
      
      {/* 1. Hero Section */}
      <section style={{ 
        padding: 'var(--retail-space-10) 0 var(--retail-space-8) 0', 
        borderBottom: '1px solid var(--retail-surface-muted)',
        backgroundColor: 'var(--retail-surface-raised)'
      }}>
        <ScrollReveal>
          <div className="retail-container" style={{ textAlign: 'center', maxWidth: '800px' }}>
            <span style={{
              display: 'block',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: 'var(--retail-text-secondary)',
              marginBottom: 'var(--retail-space-3)'
            }}>
              How We Work
            </span>
            <h1 className="retail-heading" style={{ 
              fontSize: '36px', 
              lineHeight: 1.15, 
              marginBottom: 'var(--retail-space-4)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              From <span style={{ color: 'var(--retail-border-strong)' }}>Concept</span> to <span style={{ color: 'var(--retail-border-strong)' }}>Completion</span>
            </h1>
            <p className="retail-subtext" style={{ 
              fontSize: '15px', 
              lineHeight: 1.6, 
              color: 'var(--retail-text-secondary)',
              margin: '0 auto',
              maxWidth: '620px'
            }}>
              Menjelaskan bagaimana perusahaan bekerja dari konsultasi hingga produk berada di tangan pelanggan. Kami mendampingi Anda di setiap langkah kurasi ruang.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 2 - 6. Stepper Timeline Section */}
      <section style={{ padding: 'var(--retail-space-10) 0', borderBottom: '1px solid var(--retail-surface-muted)' }}>
        <div className="retail-container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          
          {/* Vertical Stepper Container */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative' }}>
            
            {STAGES.map((stage, idx) => {
              const isLast = idx === STAGES.length - 1;
              return (
                <ScrollReveal key={idx} delay={idx * 150} style={{ display: 'flex', width: '100%' }}>
                  <div className="process-step-row" style={{ display: 'flex', gap: 'var(--retail-space-6)', minHeight: '160px', width: '100%' }}>
                    
                    {/* Left Column: Number & Stage Indicator */}
                    <div style={{ width: '80px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', flexShrink: 0 }}>
                      <span style={{ 
                        fontSize: '12px', 
                        fontWeight: 700, 
                        letterSpacing: '1.5px', 
                        color: 'var(--retail-text-secondary)',
                        textTransform: 'uppercase',
                        marginTop: '3px'
                      }}>
                        Step {stage.num}
                      </span>
                    </div>

                    {/* Middle Column: Line and Dot Indicator */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      {/* Circle Dot */}
                      <div className="process-dot" style={{ 
                        width: '18px', 
                        height: '18px', 
                        borderRadius: '50%', 
                        border: '2px solid var(--retail-border-strong)', 
                        backgroundColor: 'var(--retail-surface-strong)',
                        zIndex: 2
                      }} />
                      {/* Vertical Connector Line */}
                      {!isLast && (
                        <div style={{ 
                          width: '2px', 
                          flexGrow: 1, 
                          backgroundColor: 'var(--retail-surface-muted)',
                          margin: '6px 0'
                        }} />
                      )}
                    </div>

                    {/* Right Column: Content Details */}
                    <div style={{ 
                      flexGrow: 1, 
                      paddingBottom: isLast ? 0 : 'var(--retail-space-9)', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: 'var(--retail-space-3)'
                    }}>
                      <h3 style={{ 
                        fontSize: '18px', 
                        fontWeight: 700, 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.5px', 
                        margin: 0,
                        color: 'var(--retail-text-primary)'
                      }}>
                        {stage.title}
                      </h3>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--retail-border-strong)' }}>
                          What We Do:
                        </span>
                        <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'var(--retail-text-secondary)', margin: 0 }}>
                          {stage.todo}
                        </p>
                      </div>

                      {/* Muted Highlight Block for Output */}
                      <div className="process-output-badge" style={{ 
                        alignSelf: 'flex-start',
                        marginTop: '4px',
                        padding: '8px 16px',
                        backgroundColor: 'var(--retail-surface-raised)',
                        borderLeft: '2px solid var(--retail-border-strong)',
                        borderRadius: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--retail-text-secondary)' }}>
                          Output:
                        </span>
                        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--retail-text-primary)' }}>
                          {stage.output}
                        </span>
                      </div>
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}

          </div>
        </div>
      </section>

      {/* 7. Final CTA Section */}
      <section style={{ 
        padding: 'var(--retail-space-10) 0', 
        textAlign: 'center', 
        backgroundColor: 'var(--retail-surface-raised)'
      }}>
        <div className="retail-container" style={{ maxWidth: '640px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '26px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: 'var(--retail-space-3)'
            }}>
              Let's Create Your <span style={{ color: 'var(--retail-border-strong)' }}>Ideal Living Space</span>
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--retail-text-secondary)', lineHeight: 1.6, marginBottom: 'var(--retail-space-7)' }}>
              Hubungi tim desainer interior dan arsitek kami hari ini untuk mulai merencanakan konsep hunian impian Anda. Kami siap melayani konsultasi personal baik secara daring maupun langsung di galeri kami.
            </p>

            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="retail-btn retail-btn-primary" 
                style={{ fontSize: '12px', padding: '12px 28px', borderRadius: '4px' }}
              >
                Schedule Consultation
              </a>
              <button 
                onClick={handleContactNav}
                className="retail-btn retail-btn-secondary" 
                style={{ fontSize: '12px', padding: '12px 28px', borderRadius: '4px', border: '1px solid var(--retail-text-primary)' }}
              >
                Contact Us
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
