import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COFFEE_PRODUCTS } from '../CoffeeStore';

function Reveal({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const variants = {
    hidden: { opacity: 0, y: direction === 'up' ? 40 : 0, x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0 },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.75, delay, ease: [0.16,1,0.3,1] } }
  };
  return <motion.div ref={ref} variants={variants} initial="hidden" animate={visible ? 'visible' : 'hidden'}>{children}</motion.div>;
}

const FAQS = [
  { q: 'Berapa lama proses persetujuan inquiry B2B?', a: 'Tim sales partnership kami akan meninjau kelengkapan form profil perusahaan Anda dan menghubungi PIC dalam waktu maksimal 24 jam kerja.' },
  { q: 'Apakah KOPITERA menyediakan sampel kopi hijau gratis?', a: 'Ya, kami menyediakan sampel kopi hijau (green beans) masing-masing 250 gram untuk varietas yang diminati secara gratis. Roastery hanya perlu menanggung ongkos kirim.' },
  { q: 'Berapa Minimum Order Quantity (MOQ) untuk kontrak batch?', a: 'MOQ default kami adalah 500 kg untuk batch mikro-lot single-origin dan 1.000 kg (1 ton) untuk kualitas komersial reguler.' },
  { q: 'Apakah tersedia opsi pengiriman internasional?', a: 'Ya, kami menyediakan skema pengiriman FOB melalui pelabuhan Tanjung Priok (Jakarta) dan Belawan (Medan), serta jalur kargo udara untuk sampel mikro-lot.' },
];

const PROCESS_STEPS = [
  { num: '01', icon: '◈', title: 'Isi Profil Kebutuhan', desc: 'Lengkapi varietas kopi yang diminati beserta estimasi volume bulanan/tahunan pada form.' },
  { num: '02', icon: '◎', title: 'Konsultasi & Sampel', desc: 'Tim sales melakukan panggilan verifikasi kapasitas dan mengirimkan sampel uji cupping.' },
  { num: '03', icon: '◆', title: 'Kontrak Kerjasama', desc: 'Persetujuan syarat MOQ, penawaran harga FOB/Lokal, penandatanganan jaminan pasokan.' },
];

const GUARANTEES = [
  { icon: '▲', text: 'Mitra Petani Aktif: 1,200+ KK' },
  { icon: '▼', text: 'SNI / Organik / SCA Standard' },
  { icon: '◆', text: 'Kebun Binaan: 4 Provinsi' },
  { icon: '◈', text: 'Respons dalam 24 Jam Kerja' },
];

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  border: '1px solid var(--coffee-border-gold)',
  borderRadius: '6px',
  backgroundColor: 'var(--coffee-surface)',
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

export default function InquiryPage({ inquiryCart = [], onRemoveItem, onNavigate }) {
  const [selectedVariants, setSelectedVariants] = useState(() => inquiryCart.map(i => i.id));
  const [activeFaq, setActiveFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleToggleSelect = (variantId) => {
    setSelectedVariants(prev =>
      prev.includes(variantId) ? prev.filter(id => id !== variantId) : [...prev, variantId]
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (formSubmitted) {
    return (
      <div style={{ backgroundColor: 'var(--coffee-bg-dark)', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
          style={{ maxWidth: '560px', textAlign: 'center', background: 'var(--coffee-surface)', border: '1px solid var(--coffee-border-gold)', borderRadius: '16px', padding: '64px 48px' }}
        >
          <div style={{ width: 64, height: 64, borderRadius: '50%', border: '2px solid var(--coffee-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '28px', color: 'var(--coffee-gold)' }}>
            ✓
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ fontSize: '30px', fontWeight: 900, color: 'var(--coffee-gold)', marginBottom: '12px', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            Inquiry Sourcing Terkirim!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            style={{ fontSize: '15px', color: 'var(--coffee-text-muted)', lineHeight: 1.7, marginBottom: '36px' }}
          >
            Terima kasih atas kepercayaan Anda. Tim sales partnership KOPITERA akan meninjau draf B2B Anda dan mengirimkan email konfirmasi sampel dalam waktu maksimal 24 jam.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            onClick={() => onNavigate('home')}
            className="coffee-btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
          >
            ← Kembali ke Beranda
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--coffee-bg-dark)', color: 'var(--coffee-text-light)' }}>

      {/* ─── 1. HERO — Dark premium gradient ─────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #1C0F0A 0%, #0C0807 100%)', padding: '100px 24px 80px', borderBottom: '1px solid rgba(197,168,128,0.2)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <motion.span
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: '#C5A880', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '20px' }}
          >
            <span style={{ width: 32, height: 1, background: '#C5A880', display: 'inline-block' }} />
            Kemitraan Komersial B2B
            <span style={{ width: 32, height: 1, background: '#C5A880', display: 'inline-block' }} />
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16,1,0.3,1] }}
            style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, color: '#FAF7F2', lineHeight: 1.05, letterSpacing: '-1px', marginBottom: '20px' }}
          >
            Mulai{' '}
            <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 400, color: '#C5A880' }}>Kerjasama</span>{' '}
            Sourcing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ fontSize: '15px', color: 'rgba(250,247,242,0.65)', lineHeight: 1.7, maxWidth: '580px', margin: '0 auto' }}
          >
            Kirimkan form estimasi kapasitas tahunan roastery Anda. Tim ahli sourcing kami akan merespons proposal Anda secara komprehensif.
          </motion.p>
        </div>
      </section>

      {/* ─── 2. PROCESS STEPS ─────────────────────────────────────────────── */}
      <section style={{ padding: '80px 24px', backgroundColor: 'var(--coffee-bg-dark)', borderBottom: '1px solid var(--coffee-border-gold)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div className="coffee-inquiry-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', position: 'relative' }}>
            <style>{`
              .coffee-inquiry-steps { grid-template-columns: repeat(3, 1fr); }
              @media (max-width: 768px) { .coffee-inquiry-steps { grid-template-columns: 1fr !important; } }
            `}</style>
            {/* Connector line */}
            <div style={{ position: 'absolute', top: 40, left: '16.6%', right: '16.6%', height: 1, background: 'var(--coffee-border-gold)', zIndex: 0 }} className="coffee-inquiry-line" />
            <style>{`.coffee-inquiry-line { @media (max-width: 768px) { display: none; } }`}</style>

            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div style={{ textAlign: 'center', padding: '16px 24px', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 80, height: 80, borderRadius: '50%', border: '2px solid var(--coffee-border-gold)', background: 'var(--coffee-bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '28px', transition: 'border-color 0.3s', boxShadow: '0 4px 16px rgba(42,20,10,0.06)' }}>
                    {step.icon}
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--coffee-gold)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>STEP {step.num}</div>
                  <h3 style={{ fontSize: '16px', fontWeight: 900, color: 'var(--coffee-text-light)', marginBottom: '10px' }}>{step.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--coffee-text-muted)', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. FORM + SIDEBAR ────────────────────────────────────────────── */}
      <section style={{ padding: '100px 24px', backgroundColor: 'var(--coffee-bg-dark)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="coffee-inquiry-cols" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '64px' }}>
            <style>{`
              .coffee-inquiry-cols { grid-template-columns: 1.5fr 1fr; }
              @media (max-width: 900px) { .coffee-inquiry-cols { grid-template-columns: 1fr !important; gap: 50px !important; } }
              .coffee-form-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
              @media (max-width: 600px) { .coffee-form-2col { grid-template-columns: 1fr !important; } }
            `}</style>

            {/* ── FORM ── */}
            <Reveal direction="left">
              <div>
                <span style={labelStyle}>Formulir Kebutuhan Mitra</span>
                <div style={{ width: 40, height: 2, background: 'var(--coffee-gold)', marginBottom: '24px' }} />
                <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 900, color: 'var(--coffee-text-light)', marginBottom: '32px' }}>
                  Detail Profil Roastery Anda
                </h2>

                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  {/* Row 1 */}
                  <div className="coffee-form-2col">
                    <div>
                      <label style={labelStyle}>Nama Perusahaan</label>
                      <input type="text" required style={inputStyle}
                        onFocus={e => { e.target.style.borderColor='var(--coffee-gold)'; e.target.style.boxShadow='0 0 0 3px rgba(197,168,128,0.12)'; }}
                        onBlur={e => { e.target.style.borderColor='var(--coffee-border-gold)'; e.target.style.boxShadow='none'; }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Jenis Usaha</label>
                      <select style={inputStyle}
                        onFocus={e => { e.target.style.borderColor='var(--coffee-gold)'; e.target.style.boxShadow='0 0 0 3px rgba(197,168,128,0.12)'; }}
                        onBlur={e => { e.target.style.borderColor='var(--coffee-border-gold)'; e.target.style.boxShadow='none'; }}
                      >
                        <option>Café / Roastery Mandiri</option>
                        <option>Distributor / Importir Kopi</option>
                        <option>Pabrik Kopi Kemasan / Industri</option>
                        <option>Lainnya</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="coffee-form-2col">
                    <div>
                      <label style={labelStyle}>Estimasi Volume Sourcing</label>
                      <select style={inputStyle}
                        onFocus={e => { e.target.style.borderColor='var(--coffee-gold)'; e.target.style.boxShadow='0 0 0 3px rgba(197,168,128,0.12)'; }}
                        onBlur={e => { e.target.style.borderColor='var(--coffee-border-gold)'; e.target.style.boxShadow='none'; }}
                      >
                        <option>250 kg – 500 kg / Batch</option>
                        <option>500 kg – 1.000 kg / Bulan</option>
                        <option>1 – 5 Ton / Bulan</option>
                        <option>Lebih dari 5 Ton / Bulan</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Nama PIC & Kontak WhatsApp</label>
                      <input type="text" required style={inputStyle}
                        onFocus={e => { e.target.style.borderColor='var(--coffee-gold)'; e.target.style.boxShadow='0 0 0 3px rgba(197,168,128,0.12)'; }}
                        onBlur={e => { e.target.style.borderColor='var(--coffee-border-gold)'; e.target.style.boxShadow='none'; }}
                      />
                    </div>
                  </div>

                  {/* Varietas Checklist */}
                  <div>
                    <label style={labelStyle}>Varietas Kopi Yang Diminati</label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {COFFEE_PRODUCTS.map(prod => {
                        const checked = selectedVariants.includes(prod.id);
                        return (
                          <motion.label
                            key={prod.id}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                            style={{
                              display: 'flex', alignItems: 'center', gap: '14px',
                              padding: '14px 18px',
                              border: `1px solid ${checked ? 'var(--coffee-gold)' : 'var(--coffee-border-gold)'}`,
                              borderRadius: '8px',
                              backgroundColor: checked ? 'rgba(197,168,128,0.07)' : 'var(--coffee-surface)',
                              cursor: 'pointer', transition: 'all 0.25s ease',
                              boxShadow: checked ? '0 4px 14px rgba(197,168,128,0.1)' : 'none',
                            }}
                          >
                            {/* Custom checkbox */}
                            <div
                              onClick={() => handleToggleSelect(prod.id)}
                              style={{
                                width: 22, height: 22, borderRadius: 4, flexShrink: 0,
                                border: `2px solid ${checked ? 'var(--coffee-gold)' : 'var(--coffee-border-gold)'}`,
                                backgroundColor: checked ? 'var(--coffee-gold)' : 'transparent',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                transition: 'all 0.25s ease',
                              }}
                            >
                              {checked && <span style={{ color: 'white', fontSize: '14px', lineHeight: 1 }}>✓</span>}
                            </div>
                            <div style={{ flex: 1 }}>
                              <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--coffee-text-light)', display: 'block' }}>
                                {prod.name}
                              </span>
                              <span style={{ fontSize: '11px', color: 'var(--coffee-text-muted)', marginTop: '2px', display: 'block' }}>
                                {prod.region} · {prod.process} · MOQ {prod.moq}
                              </span>
                            </div>
                            {checked && (
                              <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                style={{ fontSize: '10px', fontWeight: 800, color: 'var(--coffee-gold)', textTransform: 'uppercase', letterSpacing: '1px', background: 'rgba(197,168,128,0.12)', padding: '3px 10px', borderRadius: '20px' }}
                              >
                                Terpilih
                              </motion.span>
                            )}
                          </motion.label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Catatan */}
                  <div>
                    <label style={labelStyle}>Catatan Kebutuhan Tambahan</label>
                    <textarea
                      rows="4"
                      placeholder="Tuliskan spesifikasi kadar air kustom, roasting profile, atau persyaratan dokumen khusus..."
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
                      onFocus={e => { e.target.style.borderColor='var(--coffee-gold)'; e.target.style.boxShadow='0 0 0 3px rgba(197,168,128,0.12)'; }}
                      onBlur={e => { e.target.style.borderColor='var(--coffee-border-gold)'; e.target.style.boxShadow='none'; }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="coffee-btn-primary"
                    style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span style={{ fontSize: '14px' }}>→</span> Kirim Draf Inquiry Kemitraan
                  </motion.button>
                </form>
              </div>
            </Reveal>

            {/* ── SIDEBAR ── */}
            <Reveal direction="right">
              <div style={{ position: 'sticky', top: '100px', alignSelf: 'start' }}>
                <div style={{ background: 'var(--coffee-surface)', border: '1px solid var(--coffee-border-gold)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(42,20,10,0.08)' }}>
                  {/* Header */}
                  <div style={{ background: 'linear-gradient(135deg, #1C0F0A 0%, #2A140A 100%)', padding: '28px 28px 24px' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid var(--coffee-border-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, fontSize: '18px', color: 'var(--coffee-gold)', flexShrink: 0 }}>◈</div>
                    <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#FAF7F2', marginBottom: '4px' }}>
                      Ringkasan Kemitraan
                    </h3>
                    <p style={{ fontSize: '12px', color: 'rgba(250,247,242,0.55)' }}>Varietas yang Anda pilih</p>
                  </div>

                  {/* Selected products */}
                  <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--coffee-border-muted)' }}>
                    {selectedVariants.length === 0 ? (
                      <p style={{ fontSize: '13px', color: 'var(--coffee-text-muted)', fontStyle: 'italic', textAlign: 'center', padding: '12px 0' }}>
                        Belum ada varietas terpilih.
                      </p>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {selectedVariants.map(id => {
                          const prod = COFFEE_PRODUCTS.find(p => p.id === id);
                          if (!prod) return null;
                          return (
                            <motion.div
                              key={id}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}
                            >
                              <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--coffee-gold)', flexShrink: 0, marginTop: 6 }} />
                              <div>
                                <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--coffee-text-light)' }}>{prod.name}</div>
                                <div style={{ fontSize: '11px', color: 'var(--coffee-text-muted)' }}>MOQ: {prod.moq} · {prod.capacity}</div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Logistik info */}
                  <div style={{ padding: '20px 24px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--coffee-gold)', marginBottom: '10px' }}>
                      Skema Logistik
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--coffee-text-muted)', lineHeight: 1.65 }}>
                      Tersedia opsi FOB pelabuhan utama (Tanjung Priok/Belawan) serta pengiriman domestik cargo darat/laut berpendingin.
                    </p>
                  </div>
                </div>

                {/* Trust points */}
                <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { glyph: '◈', text: 'Respons dalam 24 jam kerja' },
                    { glyph: '◎', text: 'Sampel gratis 250g per varietas' },
                    { glyph: '◆', text: 'Tanpa komitmen awal' },
                  ].map((t, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      style={{ display: 'flex', gap: '12px', alignItems: 'center', background: 'var(--coffee-surface)', border: '1px solid var(--coffee-border-muted)', borderRadius: '8px', padding: '12px 16px' }}
                    >
                      <span style={{ fontSize: '18px' }}>{t.glyph}</span>
                      <span style={{ fontSize: '13px', color: 'var(--coffee-text-muted)', fontWeight: 600 }}>{t.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 4. FAQ ACCORDION ─────────────────────────────────────────────── */}
      <section style={{ padding: '100px 24px', backgroundColor: 'var(--coffee-surface)', borderTop: '1px solid var(--coffee-border-gold)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--coffee-gold)', display: 'block', marginBottom: '12px' }}>
                FAQ
              </span>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 400, color: 'var(--coffee-text-light)', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
                Tanya Jawab Kemitraan
              </h2>
            </div>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} style={{ borderBottom: '1px solid var(--coffee-border-gold)' }}>
                  <motion.button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%', background: 'none', border: 'none', textAlign: 'left',
                      cursor: 'pointer', display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', fontSize: '16px', fontWeight: 800,
                      color: 'var(--coffee-text-light)', fontFamily: 'Outfit, sans-serif',
                      padding: '24px 0', gap: '20px',
                    }}
                    whileHover={{ color: '#C5A880' }}
                  >
                    <span>{faq.q}</span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} style={{ fontSize: '12px', color: isOpen ? '#C5A880' : '#B0A49D' }}>
                      ▼
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16,1,0.3,1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p style={{ fontSize: '14px', color: 'var(--coffee-text-muted)', lineHeight: 1.8, paddingBottom: '24px' }}>
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 5. GUARANTEE STRIP ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--coffee-bg-dark)', padding: '40px 24px', borderTop: '1px solid var(--coffee-border-gold)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            {GUARANTEES.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', fontWeight: 800, color: 'var(--coffee-gold)', textTransform: 'uppercase', letterSpacing: '1px' }}
              >
                <span style={{ fontSize: '18px' }}>{g.icon}</span>
                {g.text}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
