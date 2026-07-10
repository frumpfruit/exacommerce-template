import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import GlowCard from '../components/ui/GlowCard';
import MagneticButton from '../components/ui/MagneticButton';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    for: 'Untuk wirausahawan perorangan',
    priceMonthly: 19,
    priceYearly: 15,
    cta: 'Minta Konsultasi',
    ctaVariant: 'primary',
    features: [
      'Berjualan secara online, langsung, dan di obrolan AI',
      '2% penyedia pembayaran pihak ke-3',
      'Asisten AI untuk perdagangan',
      'Jutaan token AI per bulan',
    ],
    highlight: false,
  },
  {
    id: 'grow',
    name: 'Grow',
    for: 'Untuk tim kecil',
    priceMonthly: 49,
    priceYearly: 39,
    cta: 'Minta Konsultasi',
    ctaVariant: 'primary',
    features: [
      'Semua yang ada di Basic',
      '1% penyedia pembayaran pihak ke-3',
      'Hingga 5 akun staf',
      'Dapatkan hingga $5.000 kredit',
    ],
    highlight: true,
    badge: 'Paling Populer',
  },
  {
    id: 'advanced',
    name: 'Advanced',
    for: 'Untuk jangkauan global',
    priceMonthly: 299,
    priceYearly: 239,
    cta: 'Minta Konsultasi',
    ctaVariant: 'primary',
    features: [
      'Semua yang ada di Grow',
      '0,6% penyedia pembayaran pihak ke-3',
      'Hingga 15 akun staf',
      'Tarif pengiriman langsung pihak ketiga',
    ],
    highlight: false,
  },
  {
    id: 'plus',
    name: 'Plus',
    for: 'Untuk bisnis yang kompleks',
    priceMonthly: 2300,
    priceYearly: 1900,
    cta: 'Hubungi Sales',
    ctaVariant: 'outline',
    features: [
      'Semua yang ada di Advanced',
      '0,2% penyedia pembayaran pihak ke-3',
      'Akun staf tak terbatas',
      'Checkout yang dapat dikustomisasi sepenuhnya',
      'Katalog B2B tak terbatas',
    ],
    highlight: false,
  },
];

const pricingFaqs = [
  { q: 'Apakah ada biaya tersembunyi?', a: 'Tidak ada biaya tersembunyi. Anda hanya membayar biaya berlangganan bulanan/tahunan, ditambah biaya transaksi jika menggunakan payment provider pihak ketiga.' },
  { q: 'Bisakah saya upgrade atau downgrade paket?', a: 'Ya, Anda bisa mengubah paket kapan saja. Perubahan akan berlaku di siklus penagihan berikutnya.' },
  { q: 'Apa yang terjadi setelah masa trial berakhir?', a: 'Setelah 3 hari trial, Anda akan ditagih untuk paket yang dipilih. Anda bisa membatalkan sebelum trial berakhir tanpa biaya.' },
];

function PricingFAQ({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div className="border-b border-gray-700 cursor-pointer" initial={false}>
      <button className="w-full flex justify-between items-center py-5 text-left gap-6" onClick={() => setOpen(!open)}>
        <span className="font-medium">{q}</span>
        <motion.span
          className="material-symbols-outlined text-xl shrink-0 text-blue-400"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          add
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-400 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function HargaPage() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="font-body bg-[#111111] text-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="px-6 md:px-12 py-32 max-w-6xl mx-auto text-center">
        <AnimatedSection>
          <motion.div
            className="inline-block px-3 py-1 border border-gray-600 text-gray-200 font-label text-xs uppercase tracking-widest mb-8 bg-gray-800/50"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Harga Transparan
          </motion.div>
          <h1 className="text-6xl font-headline font-bold mb-6 tracking-tight">
            Anda punya rencana.<br />Kami punya paketnya.
          </h1>
          <p className="text-xl text-gray-400 mb-12">Minta Konsultasi dengan tim ahli kami untuk mengetahui lebih lanjut.</p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className={`text-sm font-bold transition-colors ${!isYearly ? 'text-white' : 'text-gray-500'}`}>Bulanan</span>
            <motion.button
              className="w-14 h-7 rounded-full p-1 flex items-center cursor-pointer border border-gray-600 relative"
              style={{ backgroundColor: isYearly ? '#555' : '#1a1a1a' }}
              onClick={() => setIsYearly(!isYearly)}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              aria-label="Toggle yearly/monthly pricing"
            >
              <motion.div
                className="w-5 h-5 bg-white rounded-full shadow"
                animate={{ x: isYearly ? 28 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            </motion.button>
            <span className={`text-sm font-bold transition-colors ${isYearly ? 'text-white' : 'text-gray-500'}`}>
              Tahunan
              {isYearly && (
                <motion.span
                  className="ml-2 text-xs bg-gray-800 border border-gray-600 text-gray-200 px-2 py-0.5 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  Hemat ~20%
                </motion.span>
              )}
            </span>
          </div>
        </AnimatedSection>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 md:px-12 pb-24 max-w-6xl mx-auto">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan) => (
            <StaggerItem key={plan.id} direction="scale">
              <GlowCard
                className={`flex flex-col rounded-xl border h-full ${
                  plan.highlight
                    ? 'border-gray-400 bg-[#222]'
                    : 'border-gray-800 bg-[#111]'
                }`}
                glowColor={plan.highlight ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.02)'}
              >
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                      {plan.badge && (
                        <motion.span
                          className="text-xs bg-white text-black px-2 py-0.5 rounded-full font-label font-bold uppercase tracking-wider"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {plan.badge}
                        </motion.span>
                      )}
                    </div>
                    <p className="text-sm text-gray-400">{plan.for}</p>
                  </div>

                  <div className="flex items-end gap-1 mb-8">
                    {plan.name === 'Plus' && <span className="text-sm text-gray-400 mr-1 mb-1">mulai dari</span>}
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={isYearly ? 'yearly' : 'monthly'}
                        className="text-4xl font-bold"
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.25 }}
                      >
                        US${isYearly ? plan.priceYearly : plan.priceMonthly}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-gray-400 mb-1">/bln</span>
                  </div>

                  <a href="https://wa.me/6282337123533?text=Halo%20Exantara,%20saya%20tertarik%20dengan%20layanan%20Anda." target="_blank" rel="noopener noreferrer" className="block w-full mb-8">
                    <MagneticButton
                      className={`w-full py-3 font-bold rounded transition-colors text-sm ${
                        plan.ctaVariant === 'primary'
                          ? plan.highlight
                            ? 'bg-white text-black hover:bg-gray-200'
                            : 'bg-[#222] border border-gray-700 text-white hover:bg-gray-800'
                          : 'border border-gray-600 text-white hover:bg-gray-800'
                      }`}
                    >
                      {plan.cta}
                    </MagneticButton>
                  </a>

                  <ul className="space-y-3 text-sm text-gray-300 flex-grow">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2 items-start">
                        <span className="material-symbols-outlined text-base text-white shrink-0 mt-0.5 font-bold">check</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Feature Table */}
      <section className="px-6 md:px-12 py-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold tracking-tight mb-4">Bandingkan Semua Fitur</h2>
            <p className="text-gray-400">Pilih paket yang tepat untuk kebutuhan bisnis Anda.</p>
          </AnimatedSection>
          <AnimatedSection direction="scale" className="border border-gray-800 rounded-xl overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-5 border-b border-gray-800 bg-[#161616]">
                {['Fitur', 'Basic', 'Grow', 'Advanced', 'Plus'].map((h, i) => (
                  <div key={h} className={`p-5 text-sm font-bold ${i > 0 ? 'text-center' : ''} ${i === 2 ? 'text-white' : 'text-gray-400'} ${i < 4 ? 'border-r border-gray-800' : ''}`}>
                    {h}
                  </div>
                ))}
              </div>
              {[
                { feature: 'Produk tak terbatas', vals: ['✓', '✓', '✓', '✓'] },
                { feature: 'Akun staf', vals: ['2', '5', '15', '∞'] },
                { feature: 'Biaya transaksi', vals: ['2%', '1%', '0.6%', '0.2%'] },
                { feature: 'AI Sidekick', vals: ['Dasar', 'Standar', 'Pro', 'Enterprise'] },
                { feature: 'Laporan analytics', vals: ['Dasar', '✓', '✓', 'Custom'] },
                { feature: 'API akses', vals: ['✗', '✓', '✓', 'Unlimited'] },
                { feature: 'Dukungan', vals: ['Email', 'Chat', 'Prioritas', 'Dedicated'] },
              ].map(({ feature, vals }, ri) => (
                <motion.div
                  key={feature}
                  className={`grid grid-cols-5 border-b border-gray-800 ${ri % 2 === 0 ? 'bg-[#111111]' : 'bg-[#151515]'}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: ri * 0.05 }}
                >
                  <div className="p-5 text-sm text-gray-300 border-r border-gray-800">{feature}</div>
                  {vals.map((v, vi) => (
                    <div key={vi} className={`p-5 text-sm text-center ${vi === 1 ? 'text-white' : 'text-gray-500'} ${vi < 3 ? 'border-r border-gray-800' : ''}`}>
                      {v === '✓' ? <span className="text-white text-base">✓</span> : v === '✗' ? <span className="text-gray-700">✗</span> : v}
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 py-24 border-t border-gray-800">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tight mb-4">Pertanyaan Umum</h2>
            <p className="text-gray-400">Pertanyaan lain? <a href="#" className="text-white hover:underline">Hubungi tim kami.</a></p>
          </AnimatedSection>
          <AnimatedSection direction="up" className="border-t border-gray-700">
            {pricingFaqs.map((faq, i) => <PricingFAQ key={faq.q} {...faq} index={i} />)}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 md:px-12 py-24 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <GlowCard className="rounded-2xl bg-[#111] border border-gray-800 p-8 md:p-16 text-center" glowColor="rgba(255,255,255,0.05)">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight mb-6">Minta Konsultasi Gratis</h2>
              <p className="text-gray-400 max-w-lg mx-auto mb-10">Hubungi kami melalui WhatsApp untuk mendapatkan panduan implementasi Exantara.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://wa.me/6282337123533?text=Halo%20Exantara,%20saya%20tertarik%20dengan%20layanan%20Anda." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <MagneticButton className="w-full bg-white text-black px-10 py-4 font-bold rounded-xl hover:bg-gray-200 transition-colors">
                    Hubungi WhatsApp
                  </MagneticButton>
                </a>
                <a href="#demo" className="w-full sm:w-auto">
                  <MagneticButton className="w-full bg-transparent border border-gray-600 text-white px-10 py-4 font-bold rounded-xl hover:bg-gray-800 transition-colors">
                    Jadwalkan Demo
                  </MagneticButton>
                </a>
              </div>
            </AnimatedSection>
          </GlowCard>
        </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
}
