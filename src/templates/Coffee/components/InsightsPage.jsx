import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Reveal({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const variants = {
    hidden: { opacity: 0, y: direction === 'up' ? 40 : 0, x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0, scale: direction === 'scale' ? 0.93 : 1 },
    visible: { opacity: 1, y: 0, x: 0, scale: 1, transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] } }
  };
  return <motion.div ref={ref} variants={variants} initial="hidden" animate={visible ? 'visible' : 'hidden'}>{children}</motion.div>;
}

const ARTICLES = [
  {
    id: 1,
    title: 'Tren Permintaan Specialty Coffee Global 2026',
    date: '25 Juni 2026',
    category: 'Pasar Global',
    icon: '◈',
    excerpt: 'Bagaimana perubahan iklim dan pergeseran demografi penikmat kopi memengaruhi kuota impor roastery besar di Amerika Serikat dan Eropa.',
    readTime: '6 menit',
    featured: true,
  },
  {
    id: 2,
    title: 'Mengenal Proses Pascapanen Fermentasi Anaerob',
    date: '18 Juni 2026',
    category: 'Roasting',
    icon: '●',
    excerpt: 'Mengapa teknik manipulasi mikroba dalam kondisi tanpa oksigen mampu menghasilkan cita rasa buah tropis yang intens pada biji kopi arabika.',
    readTime: '8 menit',
    featured: false,
  },
  {
    id: 3,
    title: 'Masa Depan Regenerative Agriculture di Kebun Gayo',
    date: '10 Juni 2026',
    category: 'Agrikultur',
    icon: '◆',
    excerpt: 'Menelisik upaya koperasi petani kopi lokal Aceh Tengah dalam menanam tanaman penaung demi mengembalikan unsur hara tanah kebun.',
    readTime: '5 menit',
    featured: false,
  },
  {
    id: 4,
    title: 'Resep Roasting untuk Profil Kopi Kintamani',
    date: '04 Juni 2026',
    category: 'Resep',
    icon: '◎',
    excerpt: 'Panduan kurva roasting (RoR) tingkat medium-light untuk memunculkan kompleksitas sitrus dan aroma jackfruit khas Bali Kintamani.',
    readTime: '7 menit',
    featured: false,
  },
  {
    id: 5,
    title: 'Standar Keadilan Harga Sourcing Kopi B2B',
    date: '28 Mei 2026',
    category: 'Keberlanjutan',
    icon: '▲',
    excerpt: 'Memahami bagaimana model penetapan harga langsung (direct-trade) menjamin stabilitas mata pencaharian petani dan kelangsungan pasokan.',
    readTime: '9 menit',
    featured: false,
  },
];

const CATEGORIES = ['Semua', 'Agrikultur', 'Roasting', 'Pasar Global', 'Keberlanjutan', 'Resep'];

const CATEGORY_COLORS = {
  'Agrikultur': '#C5A880',
  'Roasting': '#E0714F',
  'Pasar Global': '#C5A880',
  'Keberlanjutan': '#6AAF8A',
  'Resep': '#E0714F',
};

const STATS = [
  { value: '5+', label: 'Artikel Diterbitkan' },
  { value: '12K', label: 'Pembaca Bulanan' },
  { value: '6', label: 'Topik Industri' },
];

export default function InsightsPage() {
  const [selectedCat, setSelectedCat] = useState('Semua');
  const [hovered, setHovered] = useState(null);
  const gridRef = useRef(null);

  const filteredArticles = selectedCat === 'Semua'
    ? ARTICLES
    : ARTICLES.filter(art => art.category === selectedCat);

  const featured = ARTICLES.find(a => a.featured);
  const secondary = ARTICLES.filter(a => !a.featured);

  return (
    <div style={{ backgroundColor: 'var(--coffee-bg-dark)', color: 'var(--coffee-text-light)' }}>

      {/* ─── 1. HERO — Editorial Magazine Layout ─────────────────────────── */}
      <section style={{ padding: '80px 24px 0', backgroundColor: 'var(--coffee-bg-dark)', borderBottom: '1px solid var(--coffee-border-gold)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header */}
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--coffee-gold)', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <span style={{ width: 32, height: 1, background: 'var(--coffee-gold)', display: 'inline-block' }} />
                  Jurnal & Kajian Industri
                </span>
                <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, color: 'var(--coffee-text-light)', lineHeight: 1.0, letterSpacing: '-1px' }}>
                  KOPITERA{' '}
                  <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 400, color: 'var(--coffee-gold)' }}>Editorial.</span>
                </h1>
              </div>
              <div style={{ display: 'flex', gap: '40px' }}>
                {STATS.map((s, i) => (
                  <div key={i} style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '28px', fontWeight: 900, color: 'var(--coffee-gold)', lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: '11px', color: 'var(--coffee-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Featured article — large card */}
          {featured && (
            <Reveal direction="scale">
              <motion.div
                className="coffee-img-zoom"
                style={{ position: 'relative', height: 420, marginBottom: 64, borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--coffee-border-gold)', cursor: 'pointer' }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}
              >
                {/* Background */}
                <div className="coffee-bg-img" style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/coffee/sean-benesh-bf_9hsxUA1M-unsplash.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,8,7,0.97) 0%, rgba(12,8,7,0.5) 50%, transparent 100%)' }} />

                {/* Content */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 48px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '14px' }}>
                    <span className="coffee-origin-tag" style={{ backgroundColor: 'var(--coffee-bg-dark)', color: 'var(--coffee-gold)', border: '1px solid var(--coffee-border-gold)', fontSize: '10px', gap: 5 }}>
                      {featured.icon} {featured.category}
                    </span>
                    <span style={{ fontSize: '12px', color: 'rgba(250,247,242,0.55)' }}>{featured.date} · {featured.readTime} baca</span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 900, color: '#FAF7F2', lineHeight: 1.2, marginBottom: '12px', maxWidth: '640px' }}>
                    {featured.title}
                  </h2>
                  <p style={{ fontSize: '14px', color: 'rgba(250,247,242,0.7)', lineHeight: 1.6, maxWidth: '600px', marginBottom: '20px' }}>
                    {featured.excerpt}
                  </p>
                  <button style={{ background: 'transparent', border: 'none', color: '#C5A880', fontWeight: 700, fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '1px', padding: 0, fontFamily: 'Outfit, sans-serif' }}>
                    Baca Artikel <span style={{ fontSize: '14px' }}>→</span>
                  </button>
                </div>

                {/* Featured badge */}
                <div style={{ position: 'absolute', top: 24, left: 24 }}>
                  <span style={{ background: 'var(--coffee-coral)', color: 'white', fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', padding: '5px 12px', borderRadius: '4px' }}>
                    Kajian Utama
                  </span>
                </div>
              </motion.div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ─── 2. FILTER CATEGORIES ────────────────────────────────────────── */}
      <section style={{ padding: '24px', backgroundColor: 'var(--coffee-bg-dark)', borderBottom: '1px solid var(--coffee-border-gold)', position: 'sticky', top: 80, zIndex: 10 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '10px', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {CATEGORIES.map(cat => (
            <motion.button
              key={cat}
              onClick={() => {
                setSelectedCat(cat);
                if (gridRef.current) {
                  const top = gridRef.current.getBoundingClientRect().top + window.scrollY - 160;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                backgroundColor: selectedCat === cat ? 'var(--coffee-gold)' : 'transparent',
                color: selectedCat === cat ? 'var(--coffee-bg-dark)' : 'var(--coffee-gold)',
                border: '1px solid var(--coffee-gold)',
                padding: '9px 22px', fontSize: '11px', fontWeight: 700,
                borderRadius: '30px', cursor: 'pointer', whiteSpace: 'nowrap',
                textTransform: 'uppercase', letterSpacing: '1px',
                transition: 'all 0.25s ease', fontFamily: 'Outfit, sans-serif',
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* ─── 3. ARTICLE GRID ─────────────────────────────────────────────── */}
      <section ref={gridRef} style={{ padding: '80px 24px', backgroundColor: 'var(--coffee-bg-dark)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }}
            >
              <div className="coffee-articles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
                <style>{`
                  .coffee-articles-grid { grid-template-columns: repeat(2, 1fr); }
                  @media (max-width: 768px) { .coffee-articles-grid { grid-template-columns: 1fr !important; } }
                `}</style>

                {filteredArticles.filter(a => !a.featured || selectedCat !== 'Semua').length === 0 ? (
                  <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '80px 24px', color: 'var(--coffee-text-muted)' }}>
                    <Coffee size={40} style={{ margin: '0 auto 16px', opacity: 0.3 }} />
                    <p>Belum ada artikel dalam kategori ini.</p>
                  </div>
                ) : (
                  filteredArticles.filter(a => !a.featured || selectedCat !== 'Semua').map((art, idx) => (
                    <motion.div
                      key={art.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16,1,0.3,1] }}
                      onHoverStart={() => setHovered(art.id)}
                      onHoverEnd={() => setHovered(null)}
                    >
                      <motion.div
                        className="coffee-card-glow"
                        style={{ borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', height: '100%' }}
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }}
                      >
                        {/* Image */}
                        <div className="coffee-img-zoom" style={{ height: 220, position: 'relative', overflow: 'hidden' }}>
                          <div style={{ width: '100%', height: '100%', backgroundImage: "url('/images/coffee/sean-benesh-bf_9hsxUA1M-unsplash.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(30%)' }} className="coffee-list-img" />
                          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,8,7,0.6) 0%, transparent 60%)' }} />
                          <div style={{ position: 'absolute', top: 16, left: 16 }}>
                            <span className="coffee-origin-tag" style={{ backgroundColor: 'var(--coffee-bg-dark)', color: 'var(--coffee-gold)', border: '1px solid var(--coffee-border-gold)', fontSize: '10px', gap: 5 }}>
                              {art.icon} {art.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div style={{ padding: '28px 28px 32px' }}>
                          <div style={{ fontSize: '11px', color: 'var(--coffee-text-pale)', marginBottom: '10px' }}>
                            {art.date} · <span style={{ color: 'var(--coffee-gold)' }}>{art.readTime} baca</span>
                          </div>
                          <h3 style={{ fontSize: '18px', fontWeight: 900, color: 'var(--coffee-text-light)', lineHeight: 1.3, marginBottom: '12px' }}>
                            {art.title}
                          </h3>
                          <p style={{ fontSize: '13px', color: 'var(--coffee-text-muted)', lineHeight: 1.7, marginBottom: '20px' }}>
                            {art.excerpt}
                          </p>
                          <motion.div
                            style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--coffee-gold)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}
                            animate={{ x: hovered === art.id ? 4 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            Baca Artikel <span style={{ fontSize: '14px' }}>→</span>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── 4. MARKET INSIGHT STATS STRIP ───────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--coffee-surface-dark)', padding: '80px 24px', borderTop: '1px solid rgba(197,168,128,0.15)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: '#C5A880', display: 'block', marginBottom: '12px' }}>
                Data Industri Kopi 2026
              </span>
              <h2 style={{ fontSize: 'clamp(24px, 2.5vw, 36px)', fontWeight: 900, color: '#FAF7F2' }}>
                Pasar Specialty Coffee Global
              </h2>
            </div>
          </Reveal>

          <div className="coffee-insight-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(197,168,128,0.2)', border: '1px solid rgba(197,168,128,0.2)', borderRadius: '10px', overflow: 'hidden' }}>
            <style>{`
              .coffee-insight-stats { grid-template-columns: repeat(4, 1fr); }
              @media (max-width: 768px) { .coffee-insight-stats { grid-template-columns: 1fr 1fr !important; } }
              @media (max-width: 480px) { .coffee-insight-stats { grid-template-columns: 1fr !important; } }
            `}</style>
            {[
              { value: '$47B', label: 'Market Size Global', sub: '2026 Estimate' },
              { value: '6.8%', label: 'CAGR', sub: 'Pertumbuhan 5 Tahun' },
              { value: '#4', label: 'Posisi Indonesia', sub: 'Eksportir Dunia' },
              { value: '80%', label: 'Arabika Demand', sub: 'Specialty Segment' },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <motion.div
                  style={{ padding: '40px 28px', background: 'var(--coffee-surface-dark)', textAlign: 'center' }}
                  whileHover={{ background: 'rgba(255,255,255,0.04)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 900, color: '#C5A880', lineHeight: 1, marginBottom: '10px', letterSpacing: '-1px' }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#FAF7F2', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{s.label}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(250,247,242,0.45)' }}>{s.sub}</div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. NEWSLETTER ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--coffee-surface)', padding: '100px 24px', borderTop: '1px solid var(--coffee-border-gold)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--coffee-gold)', display: 'block', marginBottom: '16px' }}>
              Langganan Jurnal
            </span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 900, color: 'var(--coffee-text-light)', marginBottom: '14px' }}>
              Dapatkan Wawasan Industri Kopi
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--coffee-text-muted)', lineHeight: 1.7, marginBottom: '40px' }}>
              Riset pasar global, panduan teknik pascapanen, dan update panen langsung ke inbox Anda setiap bulan.
            </p>

            <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <input
                type="email"
                placeholder="email@perusahaan.com"
                required
                style={{
                  backgroundColor: 'var(--coffee-bg-dark)',
                  border: '1px solid var(--coffee-border-gold)',
                  borderRadius: '6px', padding: '14px 20px',
                  fontSize: '14px', fontFamily: 'Outfit, sans-serif',
                  width: '280px', color: 'var(--coffee-text-light)',
                  outline: 'none', transition: 'border-color 0.25s, box-shadow 0.25s',
                }}
                onFocus={e => { e.target.style.borderColor = 'var(--coffee-gold)'; e.target.style.boxShadow = '0 0 0 3px rgba(197,168,128,0.12)'; }}
                onBlur={e => { e.target.style.borderColor = 'var(--coffee-border-gold)'; e.target.style.boxShadow = 'none'; }}
              />
              <motion.button
                type="submit"
                className="coffee-btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Langganan
              </motion.button>
            </form>
            <p style={{ fontSize: '11px', color: 'var(--coffee-text-pale)', marginTop: '14px' }}>
              Tanpa spam. Bisa berhenti berlangganan kapan saja.
            </p>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
