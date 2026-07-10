import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Handshake, Box, Newspaper, MapPin, Clock, Phone, Mail, Globe, Star, Truck } from 'lucide-react';

function Reveal({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const variants = {
    hidden: { opacity: 0, y: direction === 'up' ? 40 : 0, x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0 },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] } }
  };
  return <motion.div ref={ref} variants={variants} initial="hidden" animate={visible ? 'visible' : 'hidden'}>{children}</motion.div>;
}

function ParallaxStrip({ imageUrl, height = 420, children, overlay = 'rgba(20,10,6,0.75)' }) {
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

const DIVISIONS = [
  { icon: Handshake, name: 'Kemitraan Sales / Ekspor', mail: 'sales@kopitera.com', tel: '+62 22 4567 890 ext. 1', desc: 'Pricing, contract, & shipment schedule' },
  { icon: Box, name: 'Logistik & Hub Kebun', mail: 'logistic@kopitera.com', tel: '+62 22 4567 890 ext. 2', desc: 'Tracking, warehouse, & container booking' },
  { icon: Newspaper, name: 'Hubungan Media / PR', mail: 'media@kopitera.com', tel: '+62 22 4567 890 ext. 3', desc: 'Press inquiries & editorial partnerships' },
];

const INFO_ITEMS = [
  { icon: MapPin, label: 'Alamat Kantor', value: 'Jalan Perkebunan Raya No. 42\nBandung, Jawa Barat 40123' },
  { icon: Clock, label: 'Jam Operasional', value: 'Senin – Jumat\n08.00 – 17.00 WIB' },
  { icon: Phone, label: 'Telepon Utama', value: '+62 22 4567 890' },
  { icon: Mail, label: 'Email Umum', value: 'hello@kopitera.com' },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    border: '1px solid var(--coffee-border-gold)',
    borderRadius: '6px',
    backgroundColor: 'var(--coffee-bg-dark)',
    color: 'var(--coffee-text-light)',
    fontSize: '14px',
    fontFamily: 'Outfit, sans-serif',
    outline: 'none',
    transition: 'border-color 0.25s, box-shadow 0.25s',
  };

  const labelStyle = {
    fontSize: '11px',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: 'var(--coffee-gold)',
    display: 'block',
    marginBottom: '8px',
  };

  return (
    <div style={{ backgroundColor: 'var(--coffee-bg-dark)', color: 'var(--coffee-text-light)' }}>

      {/* ─── 1. PARALLAX HERO ─────────────────────────────────────────────── */}
      <ParallaxStrip imageUrl="/images/coffee/sean-benesh-bf_9hsxUA1M-unsplash.jpg" height={460} overlay="linear-gradient(120deg, rgba(12,8,7,0.92) 0%, rgba(28,15,10,0.5) 100%)">
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '60px 80px' }}>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: '#C5A880', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <span style={{ width: 32, height: 1, background: '#C5A880', display: 'inline-block' }} />
            Hubungi Sourcing Desk
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
            style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, color: '#FAF7F2', lineHeight: 1.0, letterSpacing: '-1px', maxWidth: '680px' }}
          >
            KOPITERA{' '}
            <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 400, color: '#C5A880' }}>Headquarters</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ fontSize: '15px', color: 'rgba(250,247,242,0.7)', marginTop: '16px', maxWidth: '480px', lineHeight: 1.7 }}
          >
            Kami siap berdiskusi tentang kebutuhan pasokan, kapasitas batch, atau kunjungan ke cupping lab kami di Bandung.
          </motion.p>
        </div>
      </ParallaxStrip>

      {/* ─── 2. QUICK CONTACT INFO — Floating cards ─────────────────────── */}
      <section style={{ padding: '0 24px', backgroundColor: 'var(--coffee-bg-dark)', marginTop: -48 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="coffee-info-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            <style>{`
              .coffee-info-grid { grid-template-columns: repeat(4, 1fr); }
              @media (max-width: 900px) { .coffee-info-grid { grid-template-columns: 1fr 1fr !important; } }
              @media (max-width: 500px) { .coffee-info-grid { grid-template-columns: 1fr !important; } }
            `}</style>
            {INFO_ITEMS.map((item, i) => {
              const bgImages = [
                '/images/coffee/mike-kenneally-tNALoIZhqVM-unsplash.jpg',
                '/images/coffee/sean-benesh-bf_9hsxUA1M-unsplash.jpg',
                '/images/coffee/nathan-dumlao-6VhPY27jdps-unsplash.jpg',
                '/images/coffee/mike-kenneally-tNALoIZhqVM-unsplash.jpg'
              ];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16,1,0.3,1] }}
                  style={{
                    position: 'relative',
                    borderRadius: '0',
                    padding: '48px 32px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    minHeight: '280px',
                    height: '100%',
                    border: '1px solid var(--coffee-border-gold)',
                  }}
                  whileHover={{ y: -8 }}
                >
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${bgImages[i]}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,6,4,1) 0%, rgba(12,6,4,0.6) 50%, rgba(12,6,4,0.2) 100%)' }} />
                  
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ color: 'var(--coffee-gold)', marginBottom: '16px' }}><item.icon size={24} /></div>
                    <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--coffee-gold)', marginBottom: '10px' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: 400, color: '#FAF7F2', lineHeight: 1.5, whiteSpace: 'pre-line', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
                      {item.value}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. MAP + FORM ────────────────────────────────────────────────── */}
      <section style={{ padding: '100px 24px', backgroundColor: 'var(--coffee-bg-dark)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="coffee-contact-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '64px', alignItems: 'start' }}>
            <style>{`
              .coffee-contact-split { grid-template-columns: 1fr 1.1fr; }
              @media (max-width: 900px) { .coffee-contact-split { grid-template-columns: 1fr !important; gap: 60px !important; } }
            `}</style>

            {/* Left: Map mockup + info */}
            <Reveal direction="left">
              <div>
                {/* Map visual */}
                <div style={{ height: 320, background: 'var(--coffee-surface)', border: '1px solid var(--coffee-border-gold)', borderRadius: '10px', overflow: 'hidden', marginBottom: '36px', position: 'relative' }}>
                  <svg width="100%" height="100%" style={{ position: 'absolute', opacity: 0.12 }}>
                    <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <rect width="40" height="40" fill="none" stroke="var(--coffee-gold)" strokeWidth="1"/>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#mapgrid)" />
                  </svg>
                  {/* Location pin animation */}
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
                    >
                      {/* Ripple */}
                      <motion.div
                        animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                        style={{ position: 'absolute', width: 20, height: 20, borderRadius: '50%', backgroundColor: 'var(--coffee-coral)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }}
                      />
                      <div style={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: 'var(--coffee-coral)', border: '3px solid var(--coffee-bg-dark)', boxShadow: '0 0 20px rgba(224,113,79,0.5)', zIndex: 1 }} />
                    </motion.div>
                  </div>
                  <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, textAlign: 'center' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--coffee-text-light)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                      KOPITERA Warehouse · Bandung
                    </span>
                  </div>
                </div>

                {/* Divisi grid */}
                <h3 style={{ fontSize: '20px', fontWeight: 900, color: 'var(--coffee-text-light)', marginBottom: '24px' }}>
                  Direktori Divisi
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {DIVISIONS.map((div, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16,1,0.3,1] }}
                      whileHover={{ x: 5, borderColor: 'var(--coffee-gold)' }}
                      style={{ background: 'var(--coffee-surface)', border: '1px solid var(--coffee-border-gold)', borderRadius: '8px', padding: '18px 20px', display: 'flex', gap: '14px', alignItems: 'flex-start', transition: 'border-color 0.3s', cursor: 'default' }}
                    >
                      <div style={{ color: 'var(--coffee-gold)', flexShrink: 0, marginTop: 2 }}><div.icon size={20} /></div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--coffee-text-light)', marginBottom: '3px' }}>{div.name}</div>
                        <div style={{ fontSize: '11px', color: 'var(--coffee-text-pale)', marginBottom: '6px' }}>{div.desc}</div>
                        <div style={{ fontSize: '12px', color: 'var(--coffee-text-muted)', lineHeight: 1.6 }}>
                          {div.mail} · {div.tel}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right: Contact form */}
            <Reveal direction="right">
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--coffee-gold)', display: 'block', marginBottom: '16px' }}>
                  Kirim Pertanyaan
                </span>
                <div style={{ width: 40, height: 2, background: 'var(--coffee-gold)', marginBottom: '24px' }} />
                <h2 style={{ fontSize: 'clamp(24px, 2.5vw, 34px)', fontWeight: 900, color: 'var(--coffee-text-light)', marginBottom: '12px' }}>
                  Hubungi Tim Sourcing
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--coffee-text-muted)', marginBottom: '36px', lineHeight: 1.7 }}>
                  Ada pertanyaan tentang penawaran sampel, kunjungan cupping lab, atau kapasitas pengiriman? Kami merespons dalam 1×24 jam kerja.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ background: 'rgba(197,168,128,0.1)', border: '1px solid var(--coffee-gold)', borderRadius: '10px', padding: '40px', textAlign: 'center' }}
                  >
                    <div style={{ fontSize: '36px', marginBottom: '16px' }}>✓</div>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--coffee-text-light)', marginBottom: '8px' }}>Pesan Terkirim!</h3>
                    <p style={{ fontSize: '14px', color: 'var(--coffee-text-muted)' }}>Tim kami akan menghubungi Anda segera.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {/* Name + Email */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="coffee-form-2col">
                      <style>{`
                        @media (max-width: 600px) { .coffee-form-2col { grid-template-columns: 1fr !important; } }
                      `}</style>
                      <div>
                        <label style={labelStyle}>Nama Lengkap</label>
                        <input
                          type="text" required value={formState.name}
                          onChange={e => setFormState(p => ({ ...p, name: e.target.value }))}
                          style={inputStyle}
                          onFocus={e => { e.target.style.borderColor = 'var(--coffee-gold)'; e.target.style.boxShadow = '0 0 0 3px rgba(197,168,128,0.12)'; }}
                          onBlur={e => { e.target.style.borderColor = 'var(--coffee-border-gold)'; e.target.style.boxShadow = 'none'; }}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Email Bisnis</label>
                        <input
                          type="email" required value={formState.email}
                          onChange={e => setFormState(p => ({ ...p, email: e.target.value }))}
                          style={inputStyle}
                          onFocus={e => { e.target.style.borderColor = 'var(--coffee-gold)'; e.target.style.boxShadow = '0 0 0 3px rgba(197,168,128,0.12)'; }}
                          onBlur={e => { e.target.style.borderColor = 'var(--coffee-border-gold)'; e.target.style.boxShadow = 'none'; }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Subjek Pesan</label>
                      <input
                        type="text" required value={formState.subject}
                        onChange={e => setFormState(p => ({ ...p, subject: e.target.value }))}
                        style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = 'var(--coffee-gold)'; e.target.style.boxShadow = '0 0 0 3px rgba(197,168,128,0.12)'; }}
                        onBlur={e => { e.target.style.borderColor = 'var(--coffee-border-gold)'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Pesan Anda</label>
                      <textarea
                        rows="5" required value={formState.message}
                        onChange={e => setFormState(p => ({ ...p, message: e.target.value }))}
                        style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                        onFocus={e => { e.target.style.borderColor = 'var(--coffee-gold)'; e.target.style.boxShadow = '0 0 0 3px rgba(197,168,128,0.12)'; }}
                        onBlur={e => { e.target.style.borderColor = 'var(--coffee-border-gold)'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="coffee-btn-primary"
                      style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '10px' }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span style={{ fontSize: '14px' }}>→</span> Kirim Pesan
                    </motion.button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 4. SOCIAL PROOF STRIP ───────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--coffee-surface)', borderTop: '1px solid var(--coffee-border-gold)', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--coffee-border-gold)', border: '1px solid var(--coffee-border-gold)', borderRadius: '10px', overflow: 'hidden' }} className="coffee-social-strip">
              <style>{`
                .coffee-social-strip { grid-template-columns: repeat(3, 1fr); }
                @media (max-width: 700px) { .coffee-social-strip { grid-template-columns: 1fr !important; } }
              `}</style>
              {[
                { icon: Globe, value: '15+', label: 'Negara Tujuan Ekspor' },
                { icon: Star, value: '4.9/5', label: 'Rating Kepuasan Mitra' },
                { icon: Truck, value: '240+', label: 'Ton Kapasitas / Tahun' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  style={{ padding: '36px 32px', background: 'var(--coffee-surface)', textAlign: 'center' }}
                  whileHover={{ background: 'var(--coffee-bg-dark)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}><s.icon size={32} color="var(--coffee-gold)" /></div>
                  <div style={{ fontSize: '32px', fontWeight: 900, color: 'var(--coffee-gold)', lineHeight: 1, marginBottom: '8px' }}>{s.value}</div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--coffee-text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
