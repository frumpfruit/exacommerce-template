import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--vivere-surface-strong)', color: 'var(--vivere-text-primary)' }}>
      
      {/* 1. Hero Section */}
      <section style={{ 
        padding: 'var(--vivere-space-10) 0 var(--vivere-space-8) 0', 
        borderBottom: '1px solid var(--vivere-surface-muted)',
        backgroundColor: 'var(--vivere-surface-raised)',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <ScrollReveal>
          <div className="vivere-container" style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 2 }}>
            <span style={{
              display: 'block',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: 'var(--vivere-text-secondary)',
              marginBottom: 'var(--vivere-space-3)'
            }}>
              Est. 2010 • Premium Curation
            </span>
            <h1 className="vivere-heading" style={{ 
              fontSize: '36px', 
              lineHeight: 1.15, 
              marginBottom: 'var(--vivere-space-5)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Crafting <span style={{ color: 'var(--vivere-border-strong)' }}>Timeless Spaces</span> with Exceptional Design
            </h1>
            <p className="vivere-subtext" style={{ 
              fontSize: '16px', 
              lineHeight: 1.6, 
              color: 'var(--vivere-text-secondary)',
              margin: '0 auto',
              maxWidth: '680px'
            }}>
              HAVEN adalah studio kurasi ruang dan kurator produk interior modern. Kami mendedikasikan karya kami untuk menyatukan estetika arsitektural yang bersih dengan material premium alami, melahirkan harmoni keindahan dan kenyamanan di setiap hunian.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. Our Story */}
      <section style={{ padding: 'var(--vivere-space-10) 0', borderBottom: '1px solid var(--vivere-surface-muted)', overflow: 'hidden' }}>
        <div className="vivere-container">
          <ScrollReveal>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--vivere-space-9)',
              alignItems: 'center'
            }}>
              <div>
                <span style={{
                  display: 'block',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: 'var(--vivere-border-strong)',
                  marginBottom: 'var(--vivere-space-2)'
                }}>
                  Our Story
                </span>
                <h2 style={{
                  fontSize: '26px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: 'var(--vivere-space-5)',
                  color: 'var(--vivere-text-primary)'
                }}>
                  The Journey of <span style={{ color: 'var(--vivere-border-strong)' }}>Curation</span>
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-4)', fontSize: '14px', lineHeight: 1.7, color: 'var(--vivere-text-secondary)' }}>
                  <p>
                    Perjalanan kami dimulai dari keyakinan sederhana: rumah Anda harus menjadi tempat perlindungan yang tenang sekaligus mengekspresikan karakter pribadi Anda secara autentik.
                  </p>
                  <p>
                    Didirikan pada tahun 2010 oleh sekelompok desainer interior dan perajin lokal, HAVEN bertumbuh dengan memadukan kecintaan terhadap estetika abadi dan craftsmanship berstandar tinggi. Kami mengeksplorasi garis rancang arsitektur minimalis untuk melahirkan furnitur yang tidak hanya menghias ruang, namun memberi makna.
                  </p>
                  <blockquote style={{
                    borderLeft: '3px solid var(--vivere-border-strong)',
                    paddingLeft: 'var(--vivere-space-5)',
                    margin: 'var(--vivere-space-5) 0',
                    fontStyle: 'italic',
                    color: 'var(--vivere-text-primary)',
                    fontWeight: 500,
                    fontSize: '14.5px',
                    lineHeight: 1.6
                  }}>
                    "Berawal dari kecintaan terhadap desain yang abadi dan craftsmanship berkualitas tinggi, kami menghadirkan koleksi furniture dan home accessories yang dirancang untuk memperkaya setiap ruang hidup."
                  </blockquote>
                </div>
              </div>
              
              <div style={{ overflow: 'hidden', height: '420px', borderRadius: 'var(--vivere-radius-xs)', position: 'relative' }}>
                <img 
                  src="/images/retail/workspace.jpg" 
                  alt="HAVEN creative workshop" 
                  style={{
                    width: '100%',
                    height: '115%',
                    objectFit: 'cover',
                    filter: 'grayscale(15%)',
                    transform: `translateY(${Math.min(50, Math.max(-50, (scrollY - 300) * 0.07))}px) scale(1.12)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Our Philosophy */}
      <section style={{ padding: 'var(--vivere-space-10) 0', borderBottom: '1px solid var(--vivere-surface-muted)', backgroundColor: 'var(--vivere-surface-raised)' }}>
        <div className="vivere-container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 'var(--vivere-space-8)' }}>
              <span style={{
                display: 'block',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'var(--vivere-text-secondary)'
              }}>
                Core Foundations
              </span>
              <h2 style={{
                fontSize: '26px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginTop: 'var(--vivere-space-2)'
              }}>
                Our <span style={{ color: 'var(--vivere-border-strong)' }}>Philosophy</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Typographic Border Grid (No cards, no shadows) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            borderTop: '1px solid var(--vivere-surface-muted)',
            borderLeft: '1px solid var(--vivere-surface-muted)'
          }}>
            {[
              { title: 'Timeless Design', desc: 'Kami menciptakan desain yang tetap relevan lintas tren, menjamin fungsionalitas dan keindahan visual yang bertahan melampaui waktu.' },
              { title: 'Quality Craftsmanship', desc: 'Setiap sambungan kayu, jahitan kain, dan polesan akhir dibuat dengan ketelitian penuh oleh perajin berpengalaman.' },
              { title: 'Functional Beauty', desc: 'Kami percaya keindahan yang sejati terletak pada kegunaan. Setiap produk dirancang untuk ergonomis dan meningkatkan kualitas aktivitas sehari-hari.' },
              { title: 'Sustainable Thinking', desc: 'Menerapkan pendekatan bertanggung jawab dalam pemilihan material kayu legal, kain ramah lingkungan, serta proses produksi rendah limbah.' }
            ].map((p, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} style={{ display: 'flex', flexDirection: 'column' }}>
                <div 
                  className="philosophy-grid-cell"
                  style={{
                    padding: 'var(--vivere-space-7)',
                    borderRight: '1px solid var(--vivere-surface-muted)',
                    borderBottom: '1px solid var(--vivere-surface-muted)',
                    backgroundColor: 'var(--vivere-surface-strong)',
                    height: '100%'
                  }}
                >
                  <span className="cell-index" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--vivere-border-strong)', display: 'block', marginBottom: 'var(--vivere-space-2)' }}>
                    0{idx + 1} //
                  </span>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 'var(--vivere-space-3)' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--vivere-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Values */}
      <section style={{ padding: 'var(--vivere-space-8) 0', borderBottom: '1px solid var(--vivere-surface-muted)' }}>
        <div className="vivere-container">
          <ScrollReveal>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 'var(--vivere-space-5)'
            }}>
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'var(--vivere-text-secondary)',
                flexShrink: 0
              }}>
                Our Core <span style={{ color: 'var(--vivere-border-strong)' }}>Values</span>:
              </span>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--vivere-space-6)',
                alignItems: 'center'
              }}>
                {['Excellence', 'Authenticity', 'Innovation', 'Sustainability', 'Customer Commitment'].map((v, i) => (
                  <span key={i} style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: 'var(--vivere-text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{ color: 'var(--vivere-border-strong)' }}>✦</span> {v}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Our Commitment */}
      <section style={{ padding: 'var(--vivere-space-10) 0', borderBottom: '1px solid var(--vivere-surface-muted)', overflow: 'hidden' }}>
        <div className="vivere-container">
          <ScrollReveal>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--vivere-space-9)',
              alignItems: 'center'
            }}>
              <div style={{ overflow: 'hidden', height: '420px', borderRadius: 'var(--vivere-radius-xs)', position: 'relative' }}>
                <img 
                  src="/images/retail/dining-room.jpg" 
                  alt="Premium materials" 
                  style={{
                    width: '100%',
                    height: '115%',
                    objectFit: 'cover',
                    transform: `translateY(${Math.min(50, Math.max(-50, (scrollY - 1000) * 0.05))}px) scale(1.12)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                />
              </div>
              
              <div>
                <span style={{
                  display: 'block',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: 'var(--vivere-border-strong)',
                  marginBottom: 'var(--vivere-space-2)'
                }}>
                  Our Promise
                </span>
                <h2 style={{
                  fontSize: '26px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: 'var(--vivere-space-5)'
                }}>
                  Our <span style={{ color: 'var(--vivere-border-strong)' }}>Commitment</span>
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-4)', fontSize: '14px', lineHeight: 1.7, color: 'var(--vivere-text-secondary)' }}>
                  <p>
                    Komitmen kami terhadap kesempurnaan tercermin dalam setiap tahap kurasi. Kami hanya menggunakan material premium berkualitas tinggi, seperti kayu oak putih padat, kain linen boucle berkepadatan tinggi, serta logam antik karat.
                  </p>
                  <p>
                    Bagi kami, hubungan dengan klien tidak selesai saat furnitur dikirimkan. Kami bertekad membangun kemitraan jangka panjang dengan menghadirkan layanan purna jual tepercaya, panduan perawatan khusus, dan jaminan kualitas produk guna memastikan kepuasan yang mendalam bagi setiap keluarga.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Numbers That Define Us */}
      <section style={{ 
        padding: 'var(--vivere-space-10) 0', 
        backgroundColor: '#1a1a1a', 
        color: '#fcfbfa',
        borderBottom: '1px solid var(--vivere-surface-muted)'
      }}>
        <div className="vivere-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--vivere-space-8)',
            textAlign: 'center'
          }}>
            {[
              { val: '10+', label: 'Years Experience' },
              { val: '500+', label: 'Projects Completed' },
              { val: '1,000+', label: 'Happy Clients' },
              { val: '50+', label: 'Design Collections' }
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div>
                  <div style={{ 
                    fontSize: '48px', 
                    fontWeight: 700, 
                    color: '#d9ab7e', // Warm gold accent for high-end feel and contrast on dark backgrounds
                    marginBottom: 'var(--vivere-space-2)'
                  }}>
                    {stat.val}
                  </div>
                  <div style={{ 
                    fontSize: '12px', 
                    fontWeight: 600, 
                    textTransform: 'uppercase', 
                    letterSpacing: '1.5px',
                    color: '#999999'
                  }}>
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Closing Statement */}
      <section style={{ padding: 'var(--vivere-space-10) 0', textAlign: 'center' }}>
        <div className="vivere-container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <ScrollReveal>
            <span style={{ fontSize: '24px', color: 'var(--vivere-border-strong)', display: 'block', marginBottom: 'var(--vivere-space-4)' }}>✦</span>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 600,
              lineHeight: 1.6,
              color: 'var(--vivere-text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: 'var(--vivere-space-5)'
            }}>
              Empowering <span style={{ color: 'var(--vivere-border-strong)' }}>Modern Lifestyles</span> by Designing Spaces that Speak Without Words.
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--vivere-text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Visi kami ke depan adalah terus berinovasi dalam mengintegrasikan prinsip-prinsip keberlanjutan lingkungan dengan keindahan rancang interior kelas dunia, membimbing setiap langkah Anda untuk mewujudkan rumah impian yang abadi.
            </p>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
