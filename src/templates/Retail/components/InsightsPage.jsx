import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

const FEATURED_ARTICLE = {
  title: 'The Art of Creating a Luxurious Living Room',
  category: 'Home Styling',
  date: 'June 02, 2026',
  author: 'Aditya Pratama',
  desc: 'Menciptakan ruang keluarga mewah tidak melulu tentang furnitur mahal. Kami membagikan panduan mendalam tentang bagaimana menyelaraskan proporsi furnitur, pencahayaan arsitektural, dan tekstur kain premium untuk menghasilkan kemewahan yang tenang dan kenyamanan abadi.',
  image: '/images/retail/living-room.jpg',
  readTime: '6 min read'
};

const CATEGORIES = [
  'All',
  'Interior Design',
  'Furniture Care',
  'Home Styling',
  'Material & Craftsmanship',
  'Trends & Lifestyle'
];

const ARTICLES = [
  {
    title: 'Art of Curation: Blending Textures in Modern Living Rooms',
    category: 'Interior Design',
    date: 'May 28, 2026',
    author: 'Design Studio',
    desc: 'Memadukan kain boucle berserat tebal dengan permukaan kayu oak yang halus dan aksen logam kuningan untuk kedalaman visual yang memikat.',
    image: '/images/retail/bedroom.jpg',
    readTime: '5 min read'
  },
  {
    title: 'Lighting Architecture: Creating Ambient Glows for Cozy Spaces',
    category: 'Material & Craftsmanship',
    date: 'April 14, 2026',
    author: 'Curation Dept',
    desc: 'Panduan lengkap menata pencahayaan berlapis di ruang makan menggunakan lampu keramik bertekstur organik untuk suasana hangat.',
    image: '/images/retail/spotlight.png',
    readTime: '6 min read'
  },
  {
    title: 'The Sofa Guide: Finding the Perfect Silhouette for comfort',
    category: 'Trends & Lifestyle',
    date: 'March 05, 2026',
    author: 'Creative Director',
    desc: 'Menemukan proporsi sofa minimalis dengan kepadatan busa tinggi yang sesuai untuk tata ruang terbuka agar nyaman dan efisien.',
    image: '/images/retail/workspace.jpg',
    readTime: '4 min read'
  }
];

const EXPERT_TIPS = [
  {
    title: 'How to Choose the Perfect Dining Table',
    author: 'Elena Rostova (Lead Architect)',
    tip: 'Pilihlah meja makan dengan sambungan joint kayu tradisional (mortise and tenon) untuk kekuatan seumur hidup. Untuk estetika modern, padukan meja oak putih dengan kursi berlapis linen.'
  },
  {
    title: 'Mixing Textures for a Sophisticated Interior',
    author: 'Hendra Wijaya (Principal Curator)',
    tip: 'Gunakan hukum kontras 60-30-10: 60% tekstur dasar (dinding/lantai kayu), 30% tekstur kain sekunder (boucle/linen sofa), dan 10% aksen metalik atau kaca.'
  }
];

export default function InsightsPage() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [email, setEmail] = useState('');
  const [subbed, setSubbed] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredArticles = selectedCat === 'All' 
    ? ARTICLES 
    : ARTICLES.filter(a => a.category === selectedCat);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubbed(true);
      setEmail('');
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--vivere-surface-strong)', color: 'var(--vivere-text-primary)' }}>
      
      {/* 1. Hero Section */}
      <section style={{ 
        padding: 'var(--vivere-space-10) 0 var(--vivere-space-8) 0', 
        borderBottom: '1px solid var(--vivere-surface-muted)',
        backgroundColor: '#1a1a1a',
        color: '#fcfbfa',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle background shift */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(circle at 80% 20%, rgba(90, 55, 33, 0.15) 0%, transparent 50%)',
          transform: `translateY(${scrollY * 0.15}px)`
        }} />

        <ScrollReveal>
          <div className="vivere-container" style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 2 }}>
            <span style={{
              display: 'block',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: '#d9ab7e', // High-contrast gold accent for dark backgrounds
              marginBottom: 'var(--vivere-space-3)'
            }}>
              Creative Journal
            </span>
            <h1 className="vivere-heading" style={{ 
              fontSize: '36px', 
              lineHeight: 1.15, 
              marginBottom: 'var(--vivere-space-4)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#ffffff'
            }}>
              Design Inspiration & <span style={{ color: '#d9ab7e' }}>Living Insights</span>
            </h1>
            <p className="vivere-subtext" style={{ 
              fontSize: '15px', 
              lineHeight: 1.6, 
              color: '#cccccc',
              margin: '0 auto',
              maxWidth: '620px'
            }}>
              Tempat berbagi pengetahuan, inspirasi, dan tren mengenai interior dan lifestyle. Temukan ide rancang estetika modern dari kurator desain kami.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. Featured Article */}
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
                  src={FEATURED_ARTICLE.image} 
                  alt={FEATURED_ARTICLE.title} 
                  style={{
                    width: '100%',
                    height: '115%',
                    objectFit: 'cover',
                    transform: `translateY(${Math.min(40, Math.max(-40, (scrollY - 200) * 0.05))}px) scale(1.1)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-4)' }}>
                <div style={{ display: 'flex', gap: '10px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--vivere-border-strong)' }}>
                  <span>{FEATURED_ARTICLE.category}</span>
                  <span>•</span>
                  <span>{FEATURED_ARTICLE.readTime}</span>
                </div>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  lineHeight: 1.2,
                  color: 'var(--vivere-text-primary)',
                  margin: 0
                }}>
                  The Art of Creating a <span style={{ color: 'var(--vivere-border-strong)' }}>Luxurious Living Room</span>
                </h2>
                <span style={{ fontSize: '12px', color: 'var(--vivere-text-secondary)' }}>
                  Dipublikasikan pada {FEATURED_ARTICLE.date} oleh {FEATURED_ARTICLE.author}
                </span>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--vivere-text-secondary)', margin: 0 }}>
                  {FEATURED_ARTICLE.desc}
                </p>
                <button 
                  onClick={() => alert(`Membaca artikel: ${FEATURED_ARTICLE.title}`)}
                  className="vivere-btn vivere-btn-primary" 
                  style={{ alignSelf: 'flex-start', fontSize: '11px', padding: '10px 20px', borderRadius: '4px' }}
                >
                  Read Article
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Categories Navigation */}
      <section style={{ 
        padding: 'var(--vivere-space-6) 0', 
        borderBottom: '1px solid var(--vivere-surface-muted)',
        backgroundColor: 'var(--vivere-surface-raised)'
      }}>
        <div className="vivere-container">
          <ScrollReveal>
            <div style={{ display: 'flex', overflowX: 'auto', gap: '10px', scrollbarWidth: 'none' }}>
              {CATEGORIES.map((cat, i) => {
                const isActive = selectedCat === cat;
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedCat(cat)}
                    style={{
                      background: 'none',
                      border: 'none',
                      outline: 'none',
                      padding: '8px 16px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      color: isActive ? 'var(--vivere-border-strong)' : 'var(--vivere-text-secondary)',
                      borderBottom: isActive ? '2px solid var(--vivere-border-strong)' : '2px solid transparent',
                      transition: 'all 0.2s'
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Latest Insights Grid */}
      <section style={{ padding: 'var(--vivere-space-10) 0', borderBottom: '1px solid var(--vivere-surface-muted)' }}>
        <div className="vivere-container">
          <ScrollReveal>
            <h3 style={{
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--vivere-text-secondary)',
              marginBottom: 'var(--vivere-space-7)',
              borderLeft: '2px solid var(--vivere-border-strong)',
              paddingLeft: 'var(--vivere-space-3)'
            }}>
              Latest <span style={{ color: 'var(--vivere-border-strong)' }}>Insights</span>
            </h3>
          </ScrollReveal>

          {filteredArticles.length === 0 ? (
            <p style={{ fontSize: '14px', color: 'var(--vivere-text-secondary)' }}>Belum ada artikel dalam kategori ini.</p>
          ) : (
            /* 3-Column Clean Border Grid (No shadow cards, no white boxes) */
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--vivere-space-8)'
            }}>
              {filteredArticles.map((art, idx) => (
                <div key={idx} style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 'var(--vivere-space-4)',
                  paddingBottom: 'var(--vivere-space-4)',
                  borderBottom: '1px solid var(--vivere-surface-muted)'
                }}>
                  <div style={{ height: '220px', borderRadius: '2px', overflow: 'hidden', backgroundColor: 'var(--vivere-surface-muted)' }}>
                    <img 
                      src={art.image} 
                      alt={art.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                    />
                  </div>
                  <div style={{ display: 'flex', justifyBetween: 'space-between', fontSize: '11px', color: 'var(--vivere-text-secondary)', gap: '10px' }}>
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    margin: 0,
                    color: 'var(--vivere-text-primary)',
                    lineHeight: 1.3
                  }}>
                    {art.title}
                  </h4>
                  <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--vivere-text-secondary)', margin: 0 }}>
                    {art.desc}
                  </p>
                  <button 
                    onClick={() => alert(`Membaca: ${art.title}`)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: 'var(--vivere-border-strong)',
                      fontSize: '12px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      cursor: 'pointer',
                      alignSelf: 'flex-start',
                      borderBottom: '1px solid var(--vivere-border-strong)'
                    }}
                  >
                    Read Story
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. Expert Recommendations */}
      <section style={{ 
        padding: 'var(--vivere-space-10) 0', 
        borderBottom: '1px solid var(--vivere-surface-muted)',
        backgroundColor: 'var(--vivere-surface-raised)'
      }}>
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
                Curator Advisory
              </span>
              <h3 style={{
                fontSize: '26px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginTop: 'var(--vivere-space-2)'
              }}>
                Expert <span style={{ color: 'var(--vivere-border-strong)' }}>Recommendations</span>
              </h3>
            </div>
          </ScrollReveal>

          {/* Horizontal Layout with Vertical Dividers (No Cards) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--vivere-space-8)'
          }}>
            {EXPERT_TIPS.map((tip, idx) => (
              <ScrollReveal key={idx} delay={idx * 150} style={{ display: 'flex', flexDirection: 'column' }}>
                <div 
                  className="expert-tip-card"
                  style={{
                    padding: 'var(--vivere-space-6) var(--vivere-space-8)',
                    borderLeft: '2px solid var(--vivere-border-strong)',
                    backgroundColor: 'var(--vivere-surface-strong)',
                    height: '100%'
                  }}
                >
                  <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--vivere-text-secondary)', display: 'block', marginBottom: 'var(--vivere-space-2)' }}>
                    Tip Dari: {tip.author}
                  </span>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 'var(--vivere-space-3)', color: 'var(--vivere-text-primary)' }}>
                    {tip.title}
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--vivere-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    "{tip.tip}"
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Newsletter Section */}
      <section style={{ 
        padding: 'var(--vivere-space-10) 0', 
        backgroundColor: '#1a1a1a', 
        color: '#ffffff',
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {/* Subtle background shift */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(90, 55, 33, 0.12) 0%, transparent 50%)',
          transform: `translateY(${(scrollY - 1500) * 0.1}px)`
        }} />

        <div className="vivere-container" style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <ScrollReveal>
            <span style={{
              display: 'block',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: '#d9ab7e', // high contrast gold on dark
              marginBottom: 'var(--vivere-space-3)'
            }}>
              Subscribe to HAVEN Archives
            </span>
            <h3 style={{
              fontSize: '22px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: 'var(--vivere-space-4)'
            }}>
              Dapatkan Inspirasi & <span style={{ color: '#d9ab7e' }}>Update Desain</span> Terbaru
            </h3>
            <p style={{ fontSize: '13px', color: '#cccccc', lineHeight: 1.6, marginBottom: 'var(--vivere-space-6)' }}>
              Bergabunglah dengan buletin bulanan kami untuk menerima tips dekorasi interior eksklusif, wawasan material, dan penawaran koleksi terbaru langsung di email Anda.
            </p>

            {subbed ? (
              <div style={{ color: '#d9ab7e', fontWeight: 600, fontSize: '14px', padding: '10px' }}>
                ✓ Terima kasih! Anda telah terdaftar dalam newsletter kami.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                <input
                  type="email"
                  required
                  placeholder="Alamat Email Anda"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{
                    backgroundColor: '#262626',
                    color: 'white',
                    border: '1px solid #404040',
                    padding: '10px 16px',
                    borderRadius: '4px',
                    fontSize: '13px',
                    width: '280px',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  className="vivere-btn vivere-btn-primary"
                  style={{ fontSize: '12px', padding: '10px 20px', borderRadius: '4px', border: 'none', backgroundColor: '#d9ab7e', color: '#1a1a1a' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#c89a6d'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#d9ab7e'; }}
                >
                  Langganan
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
