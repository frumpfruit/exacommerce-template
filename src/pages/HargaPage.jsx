import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import GlowCard from '../components/ui/GlowCard';
import MagneticButton from '../components/ui/MagneticButton';

const plans = [
  {
    id: 'free',
    name: 'Free',
    for: 'Cocok untuk mencoba dan memulai',
    currency: 'Rp',
    priceMonthly: '0',
    priceYearly: '0',
    hidePerBln: true,
    cta: 'Mulai Sekarang',
    ctaLink: 'https://exantara.com/sign-in',
    ctaVariant: 'outline',
    features: [
      '1 Website',
      '1 Halaman per Website (Page, Blog, Store)',
      '1 Pengguna',
      '100 MB Penyimpanan',
    ],
    highlight: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    for: 'Deal untuk UMKM yang ingin berkembang',
    currency: 'Rp',
    priceMonthly: '165.000',
    priceYearly: '1.800.000',
    monthlyText: '/bulan',
    yearlyText: '/tahun',
    cta: 'Tingkatkan Sekarang',
    ctaLink: 'https://exantara.com/sign-in',
    ctaVariant: 'primary',
    features: [
      '1 Website',
      '5 Halaman per Website (Page, Blog, Store)',
      'Hingga 5 Pengguna',
      '1 GB Penyimpanan',
    ],
    highlight: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    for: 'Layanan khusus sesuai permintaan bisnis anda',
    currency: '',
    priceMonthly: 'Hubungi Kami',
    priceYearly: 'Hubungi Kami',
    hidePerBln: true,
    cta: 'Hubungi Tim Kami',
    ctaLink: 'https://wa.me/6282337123533?text=Halo%20Exantara%2C%20saya%20ingin%20mengetahui%20lebih%20detail%20mengenai%20layanan%20Enterprise.',
    ctaVariant: 'outline',
    features: [
      'Penggunaan fleksibel, bayar sesuai kebutuhan',
      'Skalabilitas penuh untuk bisnis besar',
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
    <motion.div className="border-b border-[#222] cursor-pointer" initial={false}>
      <button className="w-full flex justify-between items-center py-5 text-left gap-6" onClick={() => setOpen(!open)}>
        <span className="font-medium">{q}</span>
        <motion.span
          className="material-symbols-outlined text-xl shrink-0 text-gray-400"
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
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="font-body bg-[#0a0f1d] text-white min-h-screen">
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="px-6 md:px-12 py-16 md:py-24 max-w-6xl mx-auto text-center">
          <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-8 tracking-tight">
            Pilih Rencana
          </h1>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className={`text-sm font-bold transition-colors ${!isYearly ? 'text-white' : 'text-gray-500'}`}>Bulanan</span>
            <motion.button
              className="w-14 h-7 rounded-full p-1 flex items-center cursor-pointer border border-gray-600 relative"
              style={{ backgroundColor: isYearly ? '#ffffff' : '#1a1a2e' }}
              onClick={() => setIsYearly(!isYearly)}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              aria-label="Toggle yearly/monthly pricing"
            >
              <motion.div
                className={`w-5 h-5 rounded-full shadow ${isYearly ? 'bg-black' : 'bg-white'}`}
                animate={{ x: isYearly ? 28 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            </motion.button>
            <span className={`text-sm font-bold transition-colors ${isYearly ? 'text-white' : 'text-gray-500'}`}>
              Tahunan
              {isYearly && (
                <motion.span
                  className="ml-2 text-xs bg-white/10 border border-white/20 text-white px-2 py-0.5 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  Hemat
                </motion.span>
              )}
            </span>
          </div>
        </AnimatedSection>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 md:px-12 pb-24 max-w-5xl mx-auto">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <StaggerItem key={plan.id} direction="scale">
              <GlowCard
                className={`flex flex-col rounded-2xl border h-full transition-all duration-300 ${
                  plan.highlight
                    ? 'border-gray-500 bg-[#151b2b] shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] transform md:-translate-y-4'
                    : 'border-white/10 bg-[#121624] hover:bg-[#151a2a]'
                }`}
                glowColor={plan.highlight ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.02)'}
              >
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                    <p className="text-xs text-gray-400 h-8">{plan.for}</p>
                  </div>

                  <div className="flex items-end gap-1 mb-8 min-h-[60px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={isYearly ? 'yearly' : 'monthly'}
                        className={`font-bold flex ${plan.priceMonthly === 'Hubungi Kami' ? 'text-2xl text-white' : 'flex-col text-white'}`}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                         {plan.priceMonthly === 'Hubungi Kami' ? (
                            isYearly ? plan.priceYearly : plan.priceMonthly
                         ) : plan.id === 'free' ? (
                            <span className="text-4xl text-white tracking-tight">Rp 0</span>
                         ) : (
                            <div className="flex flex-col items-start leading-none gap-1 w-full">
                               <span className="text-xs font-semibold text-gray-400">Rp</span>
                               <div className="flex flex-wrap items-baseline gap-x-1 gap-y-1 w-full">
                                 <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{isYearly ? plan.priceYearly : plan.priceMonthly}</span>
                                 <span className="text-xs text-gray-400 font-medium whitespace-nowrap">{isYearly ? plan.yearlyText : plan.monthlyText}</span>
                               </div>
                            </div>
                         )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  
                  {plan.highlight && !isYearly && (
                     <div className="text-xs text-gray-500 mb-4 -mt-4">Rp 1.800.000 /tahun</div>
                  )}

                  <hr className="border-white/10 mb-6" />

                  <ul className="space-y-4 text-sm text-gray-300 flex-grow mb-8">
                    {plan.features.map((f) => {
                       const parts = f.split(' (');
                       return (
                        <li key={f} className="flex gap-3 items-start text-[13px]">
                          <span className="material-symbols-outlined text-sm text-gray-300 shrink-0 font-bold mt-0.5">check</span>
                          <span className="flex flex-col">
                            <span>{parts[0]}</span>
                            {parts[1] && (
                               <span className="flex gap-1 mt-1.5">
                                  {parts[1].replace(')', '').split(', ').map(badge => (
                                     <span key={badge} className="px-2 py-0.5 rounded text-[10px] bg-white/5 border border-white/10">{badge}</span>
                                  ))}
                               </span>
                            )}
                          </span>
                        </li>
                       );
                    })}
                  </ul>

                  <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer" className="block w-full mt-auto">
                    <MagneticButton
                      className={`w-full py-3 font-bold rounded-lg transition-colors text-sm ${
                        plan.ctaVariant === 'primary'
                          ? 'bg-white text-black hover:bg-gray-200 shadow-lg shadow-white/10'
                          : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                      }`}
                    >
                      {plan.cta}
                    </MagneticButton>
                  </a>
                </div>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Feature Table */}
      <section className="px-6 md:px-12 py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-headline font-bold tracking-tight mb-4">Bandingkan Semua Fitur</h2>
            <p className="text-gray-400">Pilih paket yang tepat untuk kebutuhan bisnis Anda.</p>
          </AnimatedSection>
          <AnimatedSection direction="scale" className="border border-white/10 rounded-2xl overflow-x-auto bg-[#121624]">
            <div className="min-w-[700px]">
              <div className="grid grid-cols-4 border-b border-white/10 bg-[#1a1f33]">
                {['Fitur', 'Free', 'Pro', 'Enterprise'].map((h, i) => (
                  <div key={h} className={`p-5 text-sm font-bold ${i > 0 ? 'text-center' : ''} ${i === 2 ? 'text-white' : 'text-gray-300'} ${i < 3 ? 'border-r border-white/10' : ''}`}>
                    {h}
                  </div>
                ))}
              </div>
              {[
                { feature: 'Website', vals: ['1', '1', 'Custom'] },
                { feature: 'Halaman', vals: ['1 (Page/Blog/Store)', '5 (Page/Blog/Store)', 'Tidak Terbatas'] },
                { feature: 'Pengguna (Staf)', vals: ['1', '5', 'Fleksibel'] },
                { feature: 'Kapasitas Penyimpanan', vals: ['100 MB', '1 GB', 'Skalabilitas Penuh'] },
                { feature: 'Dukungan Pelanggan', vals: ['Komunitas', 'Prioritas Chat', 'Manajer Khusus'] },
              ].map(({ feature, vals }, ri) => (
                <motion.div
                  key={feature}
                  className={`grid grid-cols-4 border-b border-white/5 ${ri % 2 === 0 ? 'bg-transparent' : 'bg-white/5'}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: ri * 0.05 }}
                >
                  <div className="p-5 text-sm text-gray-300 border-r border-white/10 font-medium">{feature}</div>
                  {vals.map((v, vi) => (
                    <div key={vi} className={`p-5 text-sm text-center flex items-center justify-center ${vi === 1 ? 'text-white' : 'text-gray-400'} ${vi < 2 ? 'border-r border-white/10' : ''}`}>
                      {v === '✓' ? <span className="text-indigo-400 text-lg font-bold">✓</span> : v === '✗' ? <span className="text-gray-600">✗</span> : v}
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 py-24 border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tight mb-4">Pertanyaan Umum</h2>
            <p className="text-gray-400">Pertanyaan lain? <a href="https://wa.me/6282337123533" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">Hubungi tim kami.</a></p>
          </AnimatedSection>
          <AnimatedSection direction="up" className="border-t border-white/10">
            {pricingFaqs.map((faq, i) => <PricingFAQ key={faq.q} {...faq} index={i} />)}
          </AnimatedSection>
        </div>
      </section>
      </main>

      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
}

