import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { COFFEE_PRODUCTS } from '../CoffeeStore';
import heroBg from '../../../assets/hero.png';

/* ─── Reusable scroll-triggered reveal ─── */
function Reveal({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={visible ? 'visible' : 'hidden'}>
      {children}
    </motion.div>
  );
}

/* ─── Simpler Reveal (useInView pattern) ─── */
function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={v ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.7, delay, ease: [0.16,1,0.3,1] }}>
      {children}
    </motion.div>
  );
}

/* ─── Animated counter ─── */
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const steps = 60;
        const increment = target / steps;
        let cur = 0;
        const t = setInterval(() => {
          cur += increment;
          if (cur >= target) { setCount(target); clearInterval(t); }
          else setCount(Math.round(cur));
        }, 1800 / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Parallax section ─── */
function ParallaxSection({ imageUrl, height = 480, children, overlay = 'rgba(28,15,10,0.65)' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  return (
    <div ref={ref} style={{ position: 'relative', height, overflow: 'hidden' }}>
      <motion.div style={{ y, position: 'absolute', inset: 0, backgroundImage: `url('${imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '140%', top: '-20%', willChange: 'transform' }} />
      <div style={{ position: 'absolute', inset: 0, background: overlay }} />
      <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>{children}</div>
    </div>
  );
}

/* ─── Marquee ticker ─── */
const TICKER_ITEMS = ['Gayo Highland · Aceh', 'Mandheling · North Sumatra', 'Toraja Kalossi · Sulawesi', 'Kintamani · Bali', 'Sidikalang · Sumatra', 'Flores Bajawa · NTT', 'Java Estate · West Java', 'Wamena · Papua'];

function TickerStrip() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div style={{ backgroundColor: '#1C0F0A', borderTop: '1px solid rgba(197,168,128,0.2)', borderBottom: '1px solid rgba(197,168,128,0.2)', overflow: 'hidden', padding: '13px 0' }}>
      <motion.div
        style={{ display: 'flex', width: 'max-content' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', padding: '0 40px', fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2.5px', color: '#C5A880', whiteSpace: 'nowrap' }}>
            <span style={{ width: 3, height: 3, borderRadius: '50%', backgroundColor: 'rgba(197,168,128,0.5)', display: 'inline-block', flexShrink: 0 }} />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Testimonials ─── */
const TESTIMONIALS = [
  { name: 'Hiroshi Yamamoto', company: 'Blue Mountain Roastery, Tokyo', quote: 'KOPITERA memberikan konsistensi mutu yang belum pernah saya temukan dari supplier Indonesia manapun. Batch Gayo mereka luar biasa floral.', initial: 'H' },
  { name: 'Sofia Bergström', company: 'Nordic Bean Co., Stockholm', quote: 'Responsivitas tim sourcing mereka sangat profesional. Pengapalan tepat waktu, dokumentasi lengkap. Kami memperpanjang kontrak tahunan.', initial: 'S' },
  { name: 'Park Joon-ho', company: 'Roast Republic, Seoul', quote: 'Toraja Kalossi dari KOPITERA mendapat skor cupping 87.5 di lab kami. Akan menjadi andalan menu specialty kami musim ini.', initial: 'P' },
];

const CERTS = ['SCA Certified Lab', 'Rainforest Alliance', 'Organic Indonesia', 'Fair Trade Sourcing', 'ISO 22000'];

export default function HomePage({ onNavigate, onToggleCartItem, cart }) {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY = useTransform(heroScroll, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.05]);

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--coffee-bg-dark)', color: 'var(--coffee-text-light)' }}>

      {/* ─── 1. HERO ──────────────────────────────────────────────────────── */}
      <section ref={heroRef} style={{ position: 'relative', minHeight: '100vh', display: 'flex', overflow: 'hidden' }}>
        <motion.div style={{ y: heroImgY, scale: heroScale, position: 'absolute', inset: 0, backgroundImage: "url('/images/coffee/gregory-hayes-MjvOQ__XFgI-unsplash.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', willChange: 'transform' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(28,15,10,0.88) 0%, rgba(28,15,10,0.4) 60%, rgba(28,15,10,0.15) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '220px', background: 'linear-gradient(to top, var(--coffee-bg-dark) 0%, transparent 100%)' }} />

        {/* Floating EST badge */}
        <motion.div
          style={{ position: 'absolute', top: 40, right: 60, display: 'flex' }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div style={{ width: 80, height: 80, borderRadius: '50%', border: '1px solid var(--coffee-gold)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--coffee-surface)' }}>
            <span style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', color: '#C5A880', letterSpacing: '1.5px', textAlign: 'center', lineHeight: 1.6 }}>EST{'\n'}2015</span>
          </div>
        </motion.div>

        <motion.div style={{ opacity: heroOpacity, position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(80px, 10vw, 120px) clamp(24px, 6vw, 80px)' }}>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: '#C5A880', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <span style={{ width: 28, height: 1, background: '#C5A880', display: 'inline-block' }} />
            Premium B2B Green Bean Supplier · Indonesia
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16,1,0.3,1] }}
            style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 900, color: '#FAF7F2', lineHeight: 1.0, letterSpacing: '-1px', marginBottom: '24px', maxWidth: 720 }}
          >
            Dari Biji Terbaik <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 400, color: '#C5A880' }}>Nusantara</span> Untuk Dunia.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.16,1,0.3,1] }}
            style={{ fontSize: '15px', color: 'rgba(250,247,242,0.72)', lineHeight: 1.7, marginBottom: '44px', maxWidth: 500 }}
          >
            Menyuplai biji kopi hijau pilihan langsung dari perkebunan rakyat di Sumatra, Sulawesi, Bali, dan Gayo — dengan jaminan mutu SCA dan logistik terpadu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}
          >
            <button onClick={() => onNavigate('inquiry')} className="coffee-btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              Mulai Kemitraan
              <span style={{ fontSize: '16px', lineHeight: 1 }}>→</span>
            </button>
            <button onClick={() => onNavigate('process')} className="coffee-btn-outline" style={{ color: 'rgba(250,247,242,0.8)', borderColor: 'rgba(197,168,128,0.45)' }}>
              Alur Kerja Kami
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div style={{ position: 'absolute', bottom: 36, left: '50%', x: '-50%', zIndex: 3 }} animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '8px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(197,168,128,0.6)', fontWeight: 700 }}>SCROLL</span>
            <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, rgba(197,168,128,0.6), transparent)' }} />
          </div>
        </motion.div>
      </section>

      {/* ─── 2. TICKER ────────────────────────────────────────────────────── */}
      <TickerStrip />

      {/* ─── 3. STATS + NARRATIVE ─────────────────────────────────────────── */}
      <section style={{ padding: '100px 24px', backgroundColor: 'var(--coffee-bg-dark)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="kopi-stats-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '60px', alignItems: 'start' }}>
            <style>{`
              .kopi-stats-grid { grid-template-columns: 1.5fr 1fr 1fr 1fr; }
              @media (max-width: 1000px) { .kopi-stats-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; } }
              @media (max-width: 560px) { .kopi-stats-grid { grid-template-columns: 1fr !important; } }
            `}</style>

            <FadeIn delay={0}>
              <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--coffee-gold)', display: 'block', marginBottom: '14px' }}>
                Kapasitas & Jejak Langkah
              </span>
              <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 900, color: 'var(--coffee-text-light)', lineHeight: 1.2, marginBottom: '16px' }}>
                Rantai Pasok Terintegrasi{' '}
                <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 400, color: 'var(--coffee-gold)' }}>Skala Ekspor.</span>
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--coffee-text-muted)', lineHeight: 1.8 }}>
                Kami menjamin kontinuitas pasokan biji kopi hijau dari koperasi petani binaan. Setiap batch disortir presisi dengan penapisan mutu berstandar SCA.
              </p>
              <div style={{ width: 48, height: 1.5, background: 'var(--coffee-gold)', marginTop: 20 }} />
            </FadeIn>

            {[
              { value: 240, suffix: '+', unit: 'Ton / Tahun', label: 'Kapasitas Pasokan', color: 'var(--coffee-gold)' },
              { value: 50,  suffix: '+', unit: 'Roastery Global', label: 'Kemitraan Aktif', color: 'var(--coffee-coral)' },
              { value: 12,  suffix: '',  unit: 'Koperasi Tani', label: 'Binaan Langsung', color: 'var(--coffee-gold)' },
            ].map((stat, i) => (
              <FadeIn key={i} delay={0.12 * (i + 1)}>
                <div style={{ borderLeft: '1px solid var(--coffee-border-gold)', paddingLeft: '28px' }}>
                  <div style={{ fontSize: 'clamp(40px, 4vw, 60px)', fontWeight: 900, color: stat.color, lineHeight: 1, letterSpacing: '-2px' }}>
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--coffee-text-light)', marginTop: '8px' }}>{stat.unit}</div>
                  <div style={{ fontSize: '11px', color: 'var(--coffee-text-pale)', marginTop: '3px' }}>{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. SINGLE ORIGIN — Full desktop grid, mobile horizontal scroll ── */}
      <section style={{ backgroundColor: 'var(--coffee-surface)', borderTop: '1px solid var(--coffee-border-gold)', borderBottom: '1px solid var(--coffee-border-gold)', padding: '80px 0' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '48px', padding: '0 24px' }}>
            <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--coffee-gold)', display: 'block', marginBottom: '10px' }}>
              Single-Origin Pilihan
            </span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 900, color: 'var(--coffee-text-light)' }}>
              Varietas <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 400, color: 'var(--coffee-gold)' }}>Green Beans</span> Unggulan
            </h2>
          </div>
        </FadeIn>

        {/* Desktop: full-width grid; Mobile: vertical grid */}
        <style>{`
          .kopi-products-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 32px;
          }
          @media (max-width: 1024px) {
            .kopi-products-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 640px) {
            .kopi-products-grid { grid-template-columns: 1fr; gap: 32px; }
          }
        `}</style>

        {/* Unified Responsive Grid */}
        <div className="kopi-products-grid">
          {COFFEE_PRODUCTS.map((prod, idx) => {
            const isSelected = cart.find(item => item.id === prod.id);
            const accentColor = idx % 2 === 0 ? '#C5A880' : '#E0714F';
            const imgSources = [
              '/images/coffee/calvin-polen-5vUqkkYzmug-unsplash.jpg',
              '/images/coffee/gregory-hayes-MjvOQ__XFgI-unsplash.jpg',
              '/images/coffee/nathan-dumlao-6VhPY27jdps-unsplash.jpg',
              '/images/coffee/sean-benesh-bf_9hsxUA1M-unsplash.jpg'
            ];
            const imgSrc = imgSources[idx % imgSources.length];
            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16,1,0.3,1] }}
                style={{
                  border: '1px solid var(--coffee-border-gold)',
                  borderRadius: '10px',
                  backgroundColor: 'var(--coffee-bg-dark)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
                  <motion.div
                    style={{ position: 'absolute', inset: 0, backgroundImage: `url('${imgSrc}')`, backgroundSize: 'cover', backgroundPosition: 'center', willChange: 'transform' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,6,4,1) 0%, rgba(12,6,4,0.3) 60%, transparent 100%)' }} />

                  {/* Region badge */}
                  <div style={{ position: 'absolute', top: 16, left: 16 }}>
                    <span style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: accentColor, backgroundColor: 'var(--coffee-bg-dark)', border: '1px solid var(--coffee-border-gold)', padding: '5px 10px', display: 'block', lineHeight: 1 }}>
                      {prod.region}
                    </span>
                  </div>

                  {/* Profile overlay */}
                  <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#FAF7F2', marginBottom: '8px', lineHeight: 1.1 }}>{prod.name}</h3>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {prod.profile.split(',').map(note => note.trim()).map(note => (
                        <span key={note} style={{ fontSize: '9px', fontWeight: 700, color: '#FAF7F2', backgroundColor: 'rgba(12,6,4,0.6)', border: '1px solid var(--coffee-border-gold)', padding: '4px 8px' }}>
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Info & CTA */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <div>
                      <div style={{ color: 'var(--coffee-gold)', fontWeight: 800, marginBottom: '4px' }}>Proses</div>
                      <div style={{ color: 'var(--coffee-text-light)' }}>{prod.process}</div>
                    </div>
                    <div>
                      <div style={{ color: 'var(--coffee-gold)', fontWeight: 800, marginBottom: '4px' }}>Ketinggian</div>
                      <div style={{ color: 'var(--coffee-text-light)' }}>{prod.altitude}</div>
                    </div>
                  </div>

                  <div style={{ marginTop: 'auto' }}>
                    <motion.button
                      onClick={() => onToggleCartItem(prod)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        width: '100%',
                        padding: '14px',
                        border: isSelected ? `1px solid ${accentColor}` : '1px solid var(--coffee-border-gold)',
                        backgroundColor: isSelected ? accentColor : 'transparent',
                        color: isSelected ? 'var(--coffee-bg-dark)' : 'var(--coffee-gold)',
                        fontWeight: 800,
                        fontSize: '11px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {isSelected ? (
                        <><span>✓</span> Ditambahkan</>
                      ) : (
                        <><span>+</span> Request Sampel</>
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <FadeIn delay={0.15}>
          <div style={{ textAlign: 'center', marginTop: '48px', padding: '0 24px' }}>
            <button onClick={() => onNavigate('inquiry')} className="coffee-btn-primary">
              Mulai Form Inquiry B2B <span style={{ marginLeft: 8 }}>→</span>
            </button>
          </div>
        </FadeIn>
      </section>

      {/* ─── 5. PARALLAX PHILOSOPHY STRIP ────────────────────────────────── */}
      <ParallaxSection imageUrl="/images/coffee/mike-kenneally-tNALoIZhqVM-unsplash.jpg" height={480} overlay="rgba(20,10,6,0.72)">
        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: '680px' }}>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: '#C5A880', display: 'block', marginBottom: '20px' }}
            >
              Filosofi Kami
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16,1,0.3,1] }}
              style={{ fontSize: 'clamp(24px, 4vw, 48px)', fontWeight: 400, color: '#FAF7F2', lineHeight: 1.3, fontFamily: 'Playfair Display, serif', fontStyle: 'italic', marginBottom: '28px' }}
            >
              "Dari biji pilihan <em style={{ color: '#C5A880', fontStyle: 'normal', fontWeight: 800 }}>Nusantara</em>, kami hadirkan standar kualitas <em style={{ color: '#E0714F', fontStyle: 'normal', fontWeight: 800 }}>roastery</em> tingkat dunia."
            </motion.h2>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={() => onNavigate('about')}
              style={{ background: 'transparent', border: '1px solid rgba(197,168,128,0.4)', color: '#FAF7F2', padding: '11px 26px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', fontFamily: 'Outfit, sans-serif', transition: 'all 0.3s' }}
              whileHover={{ borderColor: '#C5A880', backgroundColor: 'rgba(197,168,128,0.1)' }}
            >
              Tentang KOPITERA
            </motion.button>
          </div>
        </div>
      </ParallaxSection>

      {/* ─── 6. PROCESS TEASER — Compact 3-col ───────────────────────────── */}
      <section style={{ padding: '100px 24px', backgroundColor: 'var(--coffee-bg-dark)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--coffee-gold)', display: 'block', marginBottom: '10px' }}>Dari Kebun ke Pengapalan</span>
                <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900, color: 'var(--coffee-text-light)' }}>Alur Kerja Presisi Kami</h2>
              </div>
              <button onClick={() => onNavigate('process')} style={{ background: 'none', border: 'none', color: 'var(--coffee-gold)', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Outfit, sans-serif' }}>
                Lihat Lengkap <span>→</span>
              </button>
            </div>
          </FadeIn>

          <div className="kopi-process-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--coffee-border-gold)', border: '1px solid var(--coffee-border-gold)', borderRadius: '8px', overflow: 'hidden' }}>
            <style>{`
              .kopi-process-3col { grid-template-columns: repeat(3, 1fr); }
              @media (max-width: 768px) { .kopi-process-3col { grid-template-columns: 1fr !important; } }
            `}</style>
            {[
              { step: '01', title: 'Pemanenan Selektif', desc: 'Cherry picking manual oleh petani mitra — hanya ceri merah matang sempurna.' },
              { step: '02', title: 'QC & Cupping Lab', desc: 'Setiap batch diuji seduh oleh Q-Grader bersertifikat SCA. Minimum skor 80.' },
              { step: '03', title: 'GrainPro & Ekspor', desc: 'Green beans dikemas GrainPro dan dikirim melalui jalur logistik terpadu.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16,1,0.3,1] }}
                style={{ padding: '36px 32px', background: 'var(--coffee-bg-dark)' }}
                whileHover={{ background: 'var(--coffee-surface)' }}
              >
                <span style={{ fontSize: '11px', fontWeight: 900, color: i === 1 ? 'var(--coffee-coral)' : 'var(--coffee-gold)', fontFamily: 'monospace', display: 'block', marginBottom: '14px', letterSpacing: '1px' }}>
                  {item.step}
                </span>
                <h3 style={{ fontSize: '16px', fontWeight: 900, color: 'var(--coffee-text-light)', marginBottom: '10px' }}>{item.title}</h3>
                <div style={{ width: 28, height: 1.5, background: i === 1 ? 'var(--coffee-coral)' : 'var(--coffee-gold)', marginBottom: '12px' }} />
                <p style={{ fontSize: '13px', color: 'var(--coffee-text-muted)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. TESTIMONIALS ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--coffee-surface)', borderTop: '1px solid var(--coffee-border-gold)', padding: '100px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--coffee-gold)', display: 'block', marginBottom: '10px' }}>Kata Mitra Global Kami</span>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, color: 'var(--coffee-text-light)', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
                Kepercayaan yang Terbangun
              </h2>
            </div>
          </FadeIn>

          <AnimatePresence mode="wait">
            <motion.div key={activeTestimonial} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.45, ease: [0.16,1,0.3,1] }}>
              <div style={{ background: 'var(--coffee-bg-dark)', borderRadius: '10px', padding: 'clamp(32px, 5vw, 52px)', border: '1px solid var(--coffee-border-gold)', position: 'relative' }}>
                {/* Large decorative quote */}
                <div style={{ position: 'absolute', top: 20, left: 32, fontSize: '72px', color: 'rgba(197,168,128,0.08)', fontFamily: 'Playfair Display, serif', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>"</div>
                {/* Stars as dots */}
                <div style={{ display: 'flex', gap: '5px', marginBottom: '20px' }}>
                  {[1,2,3,4,5].map(i => (
                    <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#C5A880' }} />
                  ))}
                </div>
                <p style={{ fontSize: 'clamp(15px, 2vw, 19px)', color: 'var(--coffee-text-light)', lineHeight: 1.7, fontFamily: 'Playfair Display, serif', fontStyle: 'italic', marginBottom: '28px', position: 'relative', zIndex: 1 }}>
                  "{TESTIMONIALS[activeTestimonial].quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', border: '1.5px solid var(--coffee-border-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 900, color: 'var(--coffee-gold)', backgroundColor: 'var(--coffee-surface)', flexShrink: 0 }}>
                    {TESTIMONIALS[activeTestimonial].initial}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--coffee-text-light)' }}>{TESTIMONIALS[activeTestimonial].name}</div>
                    <div style={{ fontSize: '11px', color: 'var(--coffee-text-muted)' }}>{TESTIMONIALS[activeTestimonial].company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '28px' }}>
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)} style={{ width: i === activeTestimonial ? 28 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', backgroundColor: i === activeTestimonial ? 'var(--coffee-gold)' : 'var(--coffee-border-gold)', transition: 'all 0.4s ease', padding: 0 }} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. CERTIFICATIONS ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--coffee-bg-dark)', padding: '52px 24px', borderTop: '1px solid var(--coffee-border-gold)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--coffee-text-muted)', flexShrink: 0 }}>Standar & Sertifikasi</span>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {CERTS.map((cert, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--coffee-gold)', background: 'rgba(197,168,128,0.07)', border: '1px solid rgba(197,168,128,0.2)', borderRadius: '20px', padding: '7px 14px', cursor: 'default', whiteSpace: 'nowrap' }}
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. CTA PARALLAX ──────────────────────────────────────────────── */}
      <ParallaxSection imageUrl="/images/coffee/calvin-polen-5vUqkkYzmug-unsplash.jpg" height={360} overlay="rgba(12,8,6,0.82)">
        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: '640px' }}>
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.16,1,0.3,1] }}
              style={{ fontSize: 'clamp(24px, 3.5vw, 44px)', fontWeight: 900, color: '#FAF7F2', marginBottom: '14px', lineHeight: 1.15 }}>
              Siap Menghadirkan Kopi Terbaik di Roastery Anda?
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.18 }}
              style={{ fontSize: '14px', color: 'rgba(250,247,242,0.65)', lineHeight: 1.6, marginBottom: '32px' }}>
              Pelajari alur kerja kami atau kirimkan kebutuhan kapasitas batch Anda sekarang.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => onNavigate('inquiry')} className="coffee-btn-primary">Mulai Form Inquiry</button>
              <button onClick={() => onNavigate('process')}
                style={{ background: 'transparent', border: '1px solid rgba(197,168,128,0.4)', color: '#FAF7F2', padding: '13px 26px', borderRadius: '4px', cursor: 'pointer', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'Outfit, sans-serif', transition: 'all 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(197,168,128,0.1)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Lihat Alur Kerja
              </button>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

    </div>
  );
}
