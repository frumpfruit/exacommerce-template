import React, { useState } from 'react';
import { motion } from 'framer-motion';

const brand = {
  blue: "#004E7C",
  deepBlue: "#024871",
  coral: "#F58A6C",
  cream: "#F7F9FF",
  white: "#FFFFFF",
  brown: "#2C1503",
  tan: "#F5E6D3",
  gray: "#41474F",
  lightGray: "#e2efff",

  onSurface: "#001d32",
  softMint: "#EDF8F8",
  surface: "#f7f9ff",
  primary: "#003759",};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  return (
    <div className="font-body-md" style={{ backgroundColor: brand.cream, color: brand.onSurface }}>

      {/* Hero Split */}
      <section className="min-h-[100vh] grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Image Parallax */}
        <div className="relative h-[50vh] lg:h-auto overflow-hidden">
          <div
            className="absolute inset-0 bg-center bg-cover bg-fixed"
            style={{ backgroundImage: "url('/images/roastery/karl-fredrickson-TYIzeCiZ_60-unsplash.jpg')" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(2,20,40,0.7) 0%, rgba(2,72,113,0.4) 100%)" }} />
          <div className="absolute inset-0 flex flex-col justify-end p-12 md:p-16 z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="uppercase text-[11px] tracking-[4px] font-bold mb-4" style={{ color: brand.coral }}
            >
              Contact Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-[48px] md:text-[72px] font-bold leading-[1.0] text-white"
              style={{ fontFamily: 'Hanken Grotesk, sans-serif', letterSpacing: '-0.02em' }}
            >
              We're a<br />team of<br />seven.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-6 text-[16px] text-white/65 max-w-xs leading-relaxed"
            >
              Small enough that you'll hear from an actual person. Focused enough that we can actually help.
            </motion.p>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-10 grid grid-cols-2 gap-4 max-w-sm"
            >
              {[
                { label: "Response Time", value: "< 24 hours" },
                { label: "Business Hours", value: "Mon–Fri 9–17 WIB" },
                { label: "Language", value: "ID & EN" },
                { label: "WhatsApp", value: "Available" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-[2px]" style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                  <p className="text-[10px] uppercase tracking-[2px] text-white/50 mb-1">{item.label}</p>
                  <p className="text-[14px] font-bold text-white">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center px-8 md:px-16 py-20"
          style={{ backgroundColor: brand.white }}
        >
          {!submitted ? (
            <>
              <p className="uppercase text-[11px] tracking-[3px] font-bold mb-3" style={{ color: brand.coral }}>Send a Message</p>
              <h2 className="text-[32px] md:text-[44px] font-bold leading-[1.1] mb-10" style={{ fontFamily: 'Hanken Grotesk' }}>
                We'll read it.<br />We'll respond.
              </h2>
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[2px] font-bold mb-2" style={{ color: brand.gray }}>Name</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3.5 border bg-transparent focus:outline-none rounded-[2px] transition-all"
                      style={{ borderColor: 'rgba(0,0,0,0.12)', color: brand.onSurface }}
                      onFocus={e => e.target.style.borderColor = brand.coral}
                      onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[2px] font-bold mb-2" style={{ color: brand.gray }}>Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3.5 border bg-transparent focus:outline-none rounded-[2px] transition-all"
                      style={{ borderColor: 'rgba(0,0,0,0.12)', color: brand.onSurface }}
                      onFocus={e => e.target.style.borderColor = brand.coral}
                      onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[2px] font-bold mb-2" style={{ color: brand.gray }}>Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3.5 border bg-transparent focus:outline-none rounded-[2px] transition-all"
                    style={{ borderColor: 'rgba(0,0,0,0.12)', color: brand.onSurface }}
                    onFocus={e => e.target.style.borderColor = brand.coral}
                    onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[2px] font-bold mb-2" style={{ color: brand.gray }}>Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Write freely. The more context you give us, the better we can help."
                    className="w-full px-4 py-3.5 border bg-transparent focus:outline-none rounded-[2px] resize-none transition-all"
                    style={{ borderColor: 'rgba(0,0,0,0.12)', color: brand.onSurface }}
                    onFocus={e => e.target.style.borderColor = brand.coral}
                    onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 font-bold rounded-[2px] transition-transform hover:-translate-y-1 text-[15px]"
                  style={{ backgroundColor: brand.coral, color: brand.white }}
                >
                  Send Message
                </button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: `${brand.coral}20` }}>
                <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke={brand.coral} strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-[28px] font-bold mb-3" style={{ fontFamily: 'Hanken Grotesk' }}>Message Sent.</h3>
              <p className="text-[15px] leading-relaxed" style={{ color: brand.gray }}>
                We've received your message and will reply to <strong>{form.email}</strong> within 24 hours.
              </p>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Location & Social */}
      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: brand.cream }}>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              label: "Visit Us",
              content: "Jl. Kemang Raya No. 48B\nKemang, Jakarta Selatan\nDKI Jakarta 12730\n\nBy appointment only.\nMon–Fri 09:00–17:00 WIB",
            },
            {
              label: "Reach Us",
              content: "hello@elitebrew.id\ntrade@elitebrew.id\npress@elitebrew.id\n\n+62 21 5050 8800 (office)\n+62 812 1234 5678 (WhatsApp)",
            },
            {
              label: "Follow Us",
              content: "@elitebrew.id on Instagram\n@elitebrewid on Twitter/X\nElite Brew on YouTube\n\nNew content weekly:\nFarm dispatches, brew guides,\nand roastery updates.",
            },
          ].map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <p className="uppercase text-[11px] tracking-[3px] font-bold mb-5" style={{ color: brand.coral }}>{block.label}</p>
              <p className="text-[15px] leading-[2]" style={{ color: brand.gray, whiteSpace: 'pre-line' }}>{block.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map Placeholder */}
      <motion.section
        {...fadeUp}
        className="px-8 md:px-16 pb-24"
        style={{ backgroundColor: brand.cream }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div
            className="w-full h-[360px] rounded-[2px] flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: brand.deepBlue }}
          >
            <div className="text-center text-white/40">
              <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              <p className="text-[13px] uppercase tracking-[2px]">Kemang, Jakarta Selatan</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
