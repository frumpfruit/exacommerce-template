import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Reveal({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const variants = {
    hidden: { opacity: 0, y: direction === 'up' ? 30 : 0, x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0 },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.7, delay, ease: [0.16,1,0.3,1] } }
  };
  return <motion.div ref={ref} variants={variants} initial="hidden" animate={visible ? 'visible' : 'hidden'}>{children}</motion.div>;
}

function ParallaxStrip({ imageUrl, height = 400, children, overlay = 'rgba(20,10,6,0.75)' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  return (
    <div ref={ref} style={{ position: 'relative', height, overflow: 'hidden' }}>
      <motion.div style={{ y, position: 'absolute', inset: 0, backgroundImage: `url('${imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '140%', top: '-20%', willChange: 'transform' }} />
      <div style={{ position: 'absolute', inset: 0, background: overlay }} />
      <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>{children}</div>
    </div>
  );
}

const PROCESS_STEPS = [
  { step: '01', title: 'Pemanenan Selektif', desc: 'Cherry picking manual — hanya ceri merah matang sempurna yang dipetik untuk kadar gula maksimal.', tag: 'Farm Level' },
  { step: '02', title: 'Sortasi Floatation', desc: 'Ceri dimasukkan ke bak air mengalir; yang mengapung (cacat) dibuang. Densitas tinggi = mutu terjamin.', tag: 'Defect < 2%' },
  { step: '03', title: 'Pulping & Fermentasi', desc: 'Kulit ceri dikupas, dilanjut fermentasi terkontrol (honey / washed / anaerobic) sesuai profil target.', tag: '24–72 jam' },
  { step: '04', title: 'Pengeringan Raised Bed', desc: 'Dijemur di atas ranjang anyaman bambu 14–21 hari dengan sirkulasi udara optimal hingga kadar air 11–12%.', tag: 'Moisture 11–12%' },
  { step: '05', title: 'Hulling & Triple Pick', desc: 'Kulit tanduk dikupas menghasilkan green beans, disortir manual tiga tahap berdasarkan ukuran dan cacat fisik.', tag: 'Grade A Only' },
  { step: '06', title: 'Cupping & QC', desc: 'Setiap batch diuji di cupping lab oleh Q-Grader bersertifikat SCA. Minimum skor 80 poin untuk lolos.', tag: 'SCA Score ≥ 80' },
  { step: '07', title: 'Pengemasan GrainPro', desc: 'Green beans dikemas dalam karung GrainPro kedap udara + goni jute untuk menjaga integritas selama pengapalan.', tag: 'Export Ready' },
];

const QUALITY_POINTS = [
  { label: 'SCA Certified Cupping Lab', desc: 'Q-Grader berlisensi internasional menguji setiap batch.' },
  { label: 'Organic Indonesia', desc: 'Tersedia batch tersertifikasi bebas pestisida sintetis.' },
  { label: 'Rainforest Alliance', desc: 'Keberlanjutan bumi & kesejahteraan sosial petani terjamin.' },
  { label: 'ISO 22000 Food Safety', desc: 'Sistem keamanan pangan terintegrasi kebun–pelabuhan.' },
];

export default function ProcessPage({ onNavigate }) {
  return (
    <div style={{ backgroundColor: 'var(--coffee-bg-dark)', color: 'var(--coffee-text-light)' }}>

      {/* ─── HERO — Parallax compact ──────────────────────────────────────── */}
      <ParallaxStrip imageUrl="/images/coffee/nathan-dumlao-6VhPY27jdps-unsplash.jpg" height={420} overlay="linear-gradient(120deg, rgba(12,8,7,0.9) 0%, rgba(28,15,10,0.55) 100%)">
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '52px 80px' }}>
          <style>{`@media (max-width: 768px) { .kopi-process-hero-pad { padding: 40px 24px !important; } }`}</style>
          <motion.div className="kopi-process-hero-pad" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>
            <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: '#C5A880', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: 28, height: 1, background: '#C5A880', display: 'inline-block' }} />
              Filosofi Pengolahan
            </span>
            <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 58px)', fontWeight: 900, color: '#FAF7F2', lineHeight: 1.05, letterSpacing: '-1px', marginBottom: '12px' }}>
              Alur Kerja{' '}
              <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 400, color: '#C5A880' }}>Kebun ke Cangkir</span>
            </h1>
            <p style={{ fontSize: '14px', color: 'rgba(250,247,242,0.65)', maxWidth: '500px', lineHeight: 1.7 }}>
              Tujuh tahapan terkontrol & terekam — dari ceri merah hingga green beans siap ekspor.
            </p>
          </motion.div>
        </div>
      </ParallaxStrip>

      {/* ─── PROCESS — Compact numbered table layout ──────────────────────── */}
      <section style={{ padding: '80px 24px', backgroundColor: 'var(--coffee-bg-dark)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '52px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--coffee-gold)', display: 'block', marginBottom: '10px' }}>
                  7 Tahapan Produksi
                </span>
                <h2 style={{ fontSize: 'clamp(24px, 2.5vw, 34px)', fontWeight: 900, color: 'var(--coffee-text-light)' }}>
                  Dari Kebun ke Pengapalan
                </h2>
              </div>
              <span style={{ fontSize: '13px', color: 'var(--coffee-text-muted)' }}>
                Terstandarisasi · Terdokumentasi · Tertelusur
              </span>
            </div>
          </Reveal>

          {/* Step rows — compact table style */}
          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, var(--coffee-gold) 0%, rgba(197,168,128,0.1) 100%)' }}
              className="kopi-vline" />
            <style>{`.kopi-vline { @media (max-width: 640px) { display: none; } }`}</style>

            {PROCESS_STEPS.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.05} direction="left">
                <motion.div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '64px 1fr auto',
                    gap: '0 32px',
                    alignItems: 'start',
                    padding: '28px 0 28px 28px',
                    borderBottom: idx < PROCESS_STEPS.length - 1 ? '1px solid var(--coffee-border-muted)' : 'none',
                    position: 'relative',
                  }}
                  className="kopi-step-row"
                  whileHover={{ paddingLeft: '34px' }}
                  transition={{ duration: 0.25 }}
                >
                  <style>{`
                    .kopi-step-row { grid-template-columns: 64px 1fr auto; }
                    @media (max-width: 640px) {
                      .kopi-step-row { grid-template-columns: 40px 1fr !important; gap: 0 16px !important; padding-left: 0 !important; }
                      .kopi-step-tag { display: none !important; }
                    }
                  `}</style>

                  {/* Step dot + number */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', paddingTop: '3px', position: 'relative' }}>
                    {/* Dot on timeline */}
                    <div style={{ position: 'absolute', left: '-32px', top: '6px', width: 7, height: 7, borderRadius: '50%', backgroundColor: idx === 0 ? 'var(--coffee-coral)' : 'var(--coffee-gold)', border: '1.5px solid var(--coffee-bg-dark)' }} className="kopi-timeline-dot" />
                    <style>{`.kopi-timeline-dot { @media (max-width: 640px) { display: none; } }`}</style>
                    <span style={{ fontSize: '11px', fontWeight: 900, color: 'var(--coffee-gold)', letterSpacing: '1px', fontFamily: 'monospace' }}>
                      {item.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--coffee-text-light)', marginBottom: '6px', lineHeight: 1.2 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--coffee-text-muted)', lineHeight: 1.65, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Tag */}
                  <div className="kopi-step-tag" style={{ paddingTop: '3px', flexShrink: 0 }}>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: 'var(--coffee-gold)', textTransform: 'uppercase', letterSpacing: '1px', background: 'rgba(197,168,128,0.08)', border: '1px solid rgba(197,168,128,0.2)', borderRadius: '20px', padding: '4px 12px', whiteSpace: 'nowrap', display: 'inline-block' }}>
                      {item.tag}
                    </span>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUALITY CERTS — Two-column clean ────────────────────────────── */}
      <section style={{ padding: '80px 24px', backgroundColor: 'var(--coffee-surface)', borderTop: '1px solid var(--coffee-border-gold)', borderBottom: '1px solid var(--coffee-border-gold)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="kopi-quality-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <style>{`
              .kopi-quality-split { grid-template-columns: 1fr 1fr; }
              @media (max-width: 768px) { .kopi-quality-split { grid-template-columns: 1fr !important; gap: 48px !important; } }
            `}</style>

            <Reveal direction="left">
              <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--coffee-gold)', display: 'block', marginBottom: '16px' }}>
                Penjaminan Mutu
              </span>
              <div style={{ width: 36, height: 1.5, background: 'var(--coffee-gold)', marginBottom: '20px' }} />
              <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 900, color: 'var(--coffee-text-light)', lineHeight: 1.25, marginBottom: '20px' }}>
                Standarisasi Mutu{' '}
                <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 400, color: 'var(--coffee-gold)' }}>SCA</span>
                {' '}& Sertifikasi Organik
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--coffee-text-muted)', lineHeight: 1.8 }}>
                Green beans kami rata-rata mencetak SCA Score di atas 80 poin. Laboratorium cupping berlisensi dengan roaster sampel khusus diuji panel Q-Grader bersertifikat — plus Organic Indonesia dan Rainforest Alliance untuk batch tertentu.
              </p>
            </Reveal>

            <Reveal direction="right">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {QUALITY_POINTS.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16,1,0.3,1] }}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '16px 1fr',
                      gap: '0 16px',
                      alignItems: 'start',
                      padding: '18px 0',
                      borderBottom: i < QUALITY_POINTS.length - 1 ? '1px solid var(--coffee-border-muted)' : 'none',
                    }}
                  >
                    <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--coffee-gold)', marginTop: '6px', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--coffee-text-light)', marginBottom: '3px' }}>
                        {cert.label}
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--coffee-text-muted)', lineHeight: 1.6 }}>
                        {cert.desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CAPACITY — Minimal number strip ─────────────────────────────── */}
      <section style={{ padding: '72px 24px', backgroundColor: 'var(--coffee-bg-dark)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Reveal>
            <div className="kopi-capacity-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--coffee-border-gold)', border: '1px solid var(--coffee-border-gold)', borderRadius: '8px', overflow: 'hidden' }}>
              <style>{`
                .kopi-capacity-row { grid-template-columns: repeat(3, 1fr); }
                @media (max-width: 600px) { .kopi-capacity-row { grid-template-columns: 1fr !important; } }
              `}</style>
              {[
                { value: '240+', unit: 'Ton / Tahun', sub: 'Kapasitas total green beans' },
                { value: '5',    unit: 'Batch / Bulan', sub: 'Container-load rutin' },
                { value: '20+',  unit: 'Ton Storage', sub: 'Gudang humidity-controlled' },
              ].map((s, i) => (
                <div key={i} style={{ padding: '36px 28px', background: 'var(--coffee-bg-dark)', textAlign: i === 1 ? 'center' : i === 2 ? 'right' : 'left' }}>
                  <div style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 900, color: i === 1 ? 'var(--coffee-coral)' : 'var(--coffee-gold)', lineHeight: 1, letterSpacing: '-1px', marginBottom: '8px' }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--coffee-text-light)', marginBottom: '4px' }}>{s.unit}</div>
                  <div style={{ fontSize: '12px', color: 'var(--coffee-text-muted)' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <ParallaxStrip imageUrl="/images/coffee/mike-kenneally-tNALoIZhqVM-unsplash.jpg" height={320} overlay="rgba(12,8,6,0.84)">
        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: '560px' }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.16,1,0.3,1] }}
              style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 900, color: '#FAF7F2', marginBottom: '14px' }}
            >
              Mulai Kemitraan Berkelanjutan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ fontSize: '14px', color: 'rgba(250,247,242,0.65)', lineHeight: 1.6, marginBottom: '28px' }}
            >
              Kirimkan form rencana kapasitas tahunan roastery Anda.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              onClick={() => onNavigate('inquiry')}
              className="coffee-btn-primary"
            >
              Mulai Form Inquiry B2B
            </motion.button>
          </div>
        </div>
      </ParallaxStrip>

    </div>
  );
}
