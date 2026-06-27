import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/* ─── Shared Reveal ─── */
function Reveal({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
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
    visible: {
      opacity: 1, y: 0, x: 0,
      transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={visible ? 'visible' : 'hidden'}>
      {children}
    </motion.div>
  );
}

/* ─── Parallax Section ─── */
function ParallaxStrip({ imageUrl, height = 480, children, overlay = 'rgba(20,10,6,0.72)' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <div ref={ref} style={{ position: 'relative', height, overflow: 'hidden' }}>
      <motion.div style={{ y, position: 'absolute', inset: 0, backgroundImage: `url('${imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '140%', top: '-20%', willChange: 'transform' }} />
      <div style={{ position: 'absolute', inset: 0, background: overlay }} />
      <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>
        {children}
      </div>
    </div>
  );
}

const TIMELINE = [
  { year: '2015', title: 'Pendirian KOPITERA', desc: 'Lahir di Bandung Barat dengan misi memutus rantai pasok panjang yang merugikan petani kopi rakyat.', glyph: '◈' },
  { year: '2018', title: 'Ekspansi Kebun & Koperasi', desc: 'Membentuk kemitraan langsung dengan 12 koperasi tani di Gayo, Sidikalang, dan Toraja.', glyph: '◎' },
  { year: '2021', title: 'Ekspor Perdana ke Asia Timur', desc: 'Mengekspor 40 ton green beans berkualitas komersial dan mikro-lot ke Jepang dan Korea Selatan.', glyph: '◆' },
  { year: '2024', title: 'Sertifikasi Organik & Standar SCA', desc: 'Membangun cupping lab mandiri berlisensi SCA untuk menjamin konsistensi mutu rasa produk.', glyph: '▲' },
];

const TEAM = [
  { name: 'Ahmad Basuki', role: 'Founder & CEO', bio: 'Mantan Q-Grader bersertifikat dengan pengalaman 15 tahun menjelajah kebun kopi Indonesia.' },
  { name: 'Dewi Kartika', role: 'Head of Quality Assurance', bio: 'Bertanggung jawab atas standarisasi cupping lab dan sortasi mikro-lot green beans.' },
  { name: 'Hendri Wijaya', role: 'Chief Sourcing Officer', bio: 'Menjembatani hubungan kemitraan, logistik daerah, dan koperasi tani di seluruh Nusantara.' },
];

const VALUES = [
  { id: 'I', glyph: '◈', title: 'Keberlanjutan', desc: 'Setiap bibit dan pupuk yang digunakan petani mitra didukung oleh program pertanian ramah lingkungan bebas bahan kimia berlebih.', color: 'var(--coffee-gold)' },
  { id: 'II', glyph: '◆', title: 'Integritas Produk', desc: 'Kami menjamin keaslian asal usul single-origin beans kami. Tidak ada pencampuran varietas batch tanpa sepengetahuan roastery mitra.', color: 'var(--coffee-coral)' },
  { id: 'III', glyph: '▲', title: 'Ekonomi Keadilan', desc: 'Sistem bagi hasil dan pembayaran tepat waktu bagi kelompok tani binaan KOPITERA menjadi pilar stabilitas rantai pasok kami.', color: 'var(--coffee-gold)' },
];

const PARTNERS = [
  { name: 'Blue Mountain Roastery', country: 'Jepang', flag: '🇯🇵' },
  { name: 'Nordic Bean Co.', country: 'Swedia', flag: '🇸🇪' },
  { name: 'Roast Republic', country: 'Korea Selatan', flag: '🇰🇷' },
  { name: 'Café de Origen', country: 'Spanyol', flag: '🇪🇸' },
  { name: 'The Brew Lab', country: 'Australia', flag: '🇦🇺' },
  { name: 'Golden Bean HK', country: 'Hong Kong', flag: '🇭🇰' },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: 'var(--coffee-bg-dark)', color: 'var(--coffee-text-light)' }}>

      {/* ─── 1. PARALLAX HERO ────────────────────────────────────────────── */}
      <ParallaxStrip imageUrl="/images/coffee/gregory-hayes-MjvOQ__XFgI-unsplash.jpg" height={520} overlay="linear-gradient(120deg, rgba(12,8,7,0.92) 0%, rgba(28,15,10,0.5) 100%)">
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '64px 80px' }}>
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
            style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: '#C5A880', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <span style={{ width: 32, height: 1, background: '#C5A880', display: 'inline-block' }} />
            Tentang Perusahaan
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16,1,0.3,1] }}
            style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, color: '#FAF7F2', lineHeight: 1.05, letterSpacing: '-1px', maxWidth: '700px' }}
          >
            KOPITERA ·{' '}
            <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 400, color: '#C5A880' }}>
              Menghubungkan
            </span>{' '}
            Rasa B2B
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16,1,0.3,1] }}
            style={{ fontSize: '15px', color: 'rgba(250,247,242,0.7)', marginTop: '16px', maxWidth: '480px', lineHeight: 1.7 }}
          >
            Melayani pasokan biji kopi hijau pilihan dengan penjaminan mutu berstandar sejak 2015.
          </motion.p>
        </div>
      </ParallaxStrip>

      {/* ─── 2. TIMELINE ────────────────────────────────────────────────────── */}
      <section style={{ padding: '120px 24px', backgroundColor: 'var(--coffee-bg-dark)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--coffee-gold)', display: 'block', marginBottom: '12px' }}>Perjalanan Kami</span>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 400, color: 'var(--coffee-text-light)', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
                Rekam Jejak KOPITERA
              </h2>
            </div>
          </Reveal>

          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: 24, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, var(--coffee-gold) 0%, var(--coffee-border-gold) 100%)' }} />

            {TIMELINE.map((milestone, idx) => (
              <Reveal key={idx} delay={idx * 0.12} direction="left">
                <motion.div
                  style={{ position: 'relative', paddingLeft: 72, marginBottom: 56 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Dot */}
                  <motion.div
                    style={{ position: 'absolute', left: 12, top: 8, width: 24, height: 24, borderRadius: '50%', backgroundColor: 'var(--coffee-bg-dark)', border: '2px solid var(--coffee-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}
                    whileHover={{ scale: 1.3, borderColor: 'var(--coffee-coral)' }}
                  >
                    {milestone.glyph}
                  </motion.div>

                  <div style={{ background: 'var(--coffee-surface)', border: '1px solid var(--coffee-border-gold)', borderRadius: '8px', padding: '28px 32px', transition: 'all 0.4s ease' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--coffee-gold)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--coffee-border-gold)'}
                  >
                    <div style={{ fontSize: '28px', fontWeight: 900, color: 'var(--coffee-gold)', marginBottom: '6px' }}>
                      {milestone.year}
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--coffee-text-light)', marginBottom: '10px' }}>
                      {milestone.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--coffee-text-muted)', lineHeight: 1.7, margin: 0 }}>
                      {milestone.desc}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. VISI & MISI — Split pane ────────────────────────────────── */}
      <section style={{ borderTop: '1px solid var(--coffee-border-gold)', borderBottom: '1px solid var(--coffee-border-gold)' }}>
        <div className="coffee-vm-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <style>{`
            @media (max-width: 768px) { .coffee-vm-grid { grid-template-columns: 1fr !important; } }
          `}</style>

          {/* Visi */}
          <Reveal direction="left">
            <div style={{ backgroundColor: 'var(--coffee-surface)', padding: '80px 56px', height: '100%' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--coffee-gold)', display: 'block', marginBottom: '20px' }}>
                Visi Kami
              </span>
              <div style={{ width: 40, height: 2, background: 'var(--coffee-gold)', marginBottom: '24px' }} />
              <h2 style={{ fontSize: 'clamp(20px, 2vw, 28px)', fontWeight: 400, lineHeight: 1.5, color: 'var(--coffee-text-light)', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
                Menjadi gerbang utama rantai pasok kopi hijau B2B Indonesia yang berkeadilan, transparan, dan berkelanjutan.
              </h2>
            </div>
          </Reveal>

          {/* Misi */}
          <Reveal direction="right">
            <div style={{ backgroundColor: 'var(--coffee-bg-dark)', padding: '80px 56px', borderLeft: '1px solid var(--coffee-border-gold)', height: '100%' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--coffee-coral)', display: 'block', marginBottom: '20px' }}>
                Misi Kami
              </span>
              <div style={{ width: 40, height: 2, background: 'var(--coffee-coral)', marginBottom: '28px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  { num: 'I', title: 'Kualitas Terjamin', desc: 'Menerapkan protokol sortasi dan cupping berstandar mutu internasional di setiap tahapan.' },
                  { num: 'II', title: 'Kesejahteraan Petani', desc: 'Membeli hasil panen di atas harga pasar rata-rata untuk menjamin kelangsungan hidup petani mitra.' },
                  { num: 'III', title: 'Integrasi Digital', desc: 'Transparansi data batch dan volume serta kemudahan penawaran harga kemitraan B2B secara terpadu.' },
                ].map((m, i) => (
                  <motion.div key={i} style={{ display: 'flex', gap: '16px' }} whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
                    <span style={{ fontSize: '20px', fontWeight: 900, color: 'var(--coffee-gold)', flexShrink: 0, width: 24, fontFamily: 'monospace' }}>{m.num}</span>
                    <div>
                      <strong style={{ fontSize: '14px', display: 'block', color: 'var(--coffee-text-light)', marginBottom: '4px' }}>{m.title}</strong>
                      <p style={{ fontSize: '13px', color: 'var(--coffee-text-muted)', lineHeight: 1.6, margin: 0 }}>{m.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── 4. VALUES — Animated bento cards ───────────────────────────── */}
      <section style={{ padding: '120px 24px', backgroundColor: 'var(--coffee-surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--coffee-gold)', display: 'block', marginBottom: '12px' }}>Nilai Perusahaan</span>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 900, color: 'var(--coffee-text-light)' }}>
                Apa Yang Kami Percayai
              </h2>
            </div>
          </Reveal>

          <div className="coffee-values-bento" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <style>{`
              .coffee-values-bento { grid-template-columns: repeat(3, 1fr); }
              @media (max-width: 900px) { .coffee-values-bento { grid-template-columns: 1fr 1fr !important; } }
              @media (max-width: 600px) { .coffee-values-bento { grid-template-columns: 1fr !important; } }
            `}</style>
            {VALUES.map((v, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <motion.div
                  className="coffee-card-glow"
                  style={{ borderRadius: '10px', padding: '44px 36px', height: '100%' }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }}
                >
                  <div style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--coffee-gold)' }}>{v.glyph}</div>
                  <div style={{ fontSize: '48px', fontWeight: 900, color: v.color, opacity: 0.15, position: 'absolute', top: 20, right: 24, fontFamily: 'monospace', lineHeight: 1, pointerEvents: 'none' }}>{v.id}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: 900, color: 'var(--coffee-text-light)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>{v.title}</h3>
                  <div style={{ width: 36, height: 2, background: v.color, marginBottom: '16px' }} />
                  <p style={{ fontSize: '14px', color: 'var(--coffee-text-muted)', lineHeight: 1.7 }}>{v.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. PARALLAX QUOTE STRIP ─────────────────────────────────────── */}
      <ParallaxStrip imageUrl="/images/coffee/nathan-dumlao-6VhPY27jdps-unsplash.jpg" height={380} overlay="rgba(20,10,6,0.78)">
        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: '640px' }}>
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.16,1,0.3,1] }}
              style={{ fontSize: 'clamp(20px, 3vw, 30px)', color: '#FAF7F2', lineHeight: 1.55, fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
            >
              "Setiap cangkir kopi yang dinikmati roastery mitra kami adalah bukti dedikasi petani Nusantara selama berbulan-bulan."
            </motion.p>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: '#C5A880', display: 'block', marginTop: '24px' }}
            >
              — Ahmad Basuki, Founder KOPITERA
            </motion.span>
          </div>
        </div>
      </ParallaxStrip>

      {/* ─── 6. TEAM ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '120px 24px', backgroundColor: 'var(--coffee-bg-dark)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--coffee-gold)', display: 'block', marginBottom: '12px' }}>Manajemen Kami</span>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 400, color: 'var(--coffee-text-light)', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
                Pemimpin KOPITERA
              </h2>
            </div>
          </Reveal>

          <div className="coffee-team-bento" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            <style>{`
              .coffee-team-bento { grid-template-columns: repeat(3, 1fr); }
              @media (max-width: 900px) { .coffee-team-bento { grid-template-columns: 1fr 1fr !important; } }
              @media (max-width: 600px) { .coffee-team-bento { grid-template-columns: 1fr !important; } }
            `}</style>
            {TEAM.map((member, idx) => (
              <Reveal key={idx} delay={idx * 0.12} direction="up">
                <motion.div
                  className="coffee-card-glow"
                  style={{ borderRadius: '10px', overflow: 'hidden' }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }}
                >
                  {/* Portrait area */}
                  <div className="coffee-img-zoom" style={{ height: 280, backgroundColor: 'var(--coffee-surface)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--coffee-bg-dark) 0%, var(--coffee-surface) 100%)' }} />
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: 80, height: 80, borderRadius: '50%', border: '2px solid var(--coffee-border-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 900, color: 'var(--coffee-gold)', backgroundColor: 'var(--coffee-surface)' }}>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    {/* Decorative lines */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to top, var(--coffee-surface) 0%, transparent 100%)' }} />
                  </div>

                  <div style={{ padding: '24px 28px 32px' }}>
                    <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--coffee-text-light)', marginBottom: '4px' }}>{member.name}</h3>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: 'var(--coffee-coral)', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '14px' }}>
                      {member.role}
                    </span>
                    <div style={{ width: 32, height: 1, background: 'var(--coffee-border-gold)', marginBottom: '14px' }} />
                    <p style={{ fontSize: '13px', color: 'var(--coffee-text-muted)', lineHeight: 1.7 }}>{member.bio}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. GLOBAL PARTNERS ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--coffee-surface)', borderTop: '1px solid var(--coffee-border-gold)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--coffee-gold)', display: 'block', marginBottom: '10px' }}>Kemitraan Global</span>
              <p style={{ fontSize: '14px', color: 'var(--coffee-text-muted)' }}>Dipercaya oleh roastery terkemuka dari berbagai negara</p>
            </div>
          </Reveal>

          <div className="coffee-partners-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <style>{`
              .coffee-partners-grid { grid-template-columns: repeat(3, 1fr); }
              @media (max-width: 768px) { .coffee-partners-grid { grid-template-columns: 1fr 1fr !important; } }
              @media (max-width: 480px) { .coffee-partners-grid { grid-template-columns: 1fr !important; } }
            `}</style>
            {PARTNERS.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16,1,0.3,1] }}
                whileHover={{ y: -4, borderColor: 'var(--coffee-gold)' }}
                style={{ background: 'var(--coffee-bg-dark)', border: '1px solid var(--coffee-border-gold)', borderRadius: '8px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '14px', transition: 'border-color 0.3s' }}
              >
                <span style={{ fontSize: '24px' }}>{partner.flag}</span>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--coffee-text-light)' }}>{partner.name}</div>
                  <div style={{ fontSize: '11px', color: 'var(--coffee-text-muted)' }}>{partner.country}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
