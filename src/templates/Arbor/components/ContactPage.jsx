import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';

export default function ContactPage({ onNavigate = () => {}, showToast = () => {} }) {
  const [showMapModal, setShowMapModal] = useState(false);
  const [selectedHub, setSelectedHub] = useState('jakarta');

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const globalHubs = {
    jakarta: {
      city: 'Jakarta, Indonesia',
      title: 'Global Headquarters',
      address: 'Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan 12190',
      phone: '+62 21 555 0192',
      email: 'jakarta@arborpulp.com',
      coordinates: '6.2239° S, 106.8078° E',
      image: '/images/arbor/acacia.jpg',
      notes: 'Our primary design campus, physical pulp research laboratory, and central Southeast Asia logistics center.'
    },
    newyork: {
      city: 'New York, USA',
      title: 'North American Hub',
      address: 'West Chelsea Arts District, 520 W 27th St, NY 10001',
      phone: '+1 212 555 0843',
      email: 'newyork@arborpulp.com',
      coordinates: '40.7505° N, 74.0048° W',
      image: '/images/arbor/hero-bg.jpg',
      notes: 'Luxury packaging designer showroom and US sales consultation suites.'
    },
    milan: {
      city: 'Milan, Italy',
      title: 'European Union Hub',
      address: 'Via della Moscova, 33, 20121 Milano MI, Italy',
      phone: '+39 02 555 0911',
      email: 'milan@arborpulp.com',
      coordinates: '45.4781° N, 9.1895° E',
      image: '/images/arbor/eucalyptus.jpg',
      notes: 'European sales operations and sustainable logistics optimization team.'
    },
    london: {
      city: 'London, United Kingdom',
      title: 'Corporate HQ',
      address: 'Savile Row, Mayfair, London W1S 3PF',
      phone: '+44 20 7555 0142',
      email: 'london@arborpulp.com',
      coordinates: '51.5113° N, 0.1412° W',
      image: '/images/arbor/pulping.jpg',
      notes: 'Trade legal compliance, commercial sales contracts, and executive suites.'
    },
    mumbai: {
      city: 'Mumbai, India',
      title: 'South Asian Logistics',
      address: 'Bandra Kurla Complex, Mumbai 400051',
      phone: '+91 22 5555 0319',
      email: 'mumbai@arborpulp.com',
      coordinates: '19.0607° N, 72.8633° E',
      image: '/images/arbor/report.jpg',
      notes: 'Raw material sorting yard, certified grading labs, and maritime shipping terminal.'
    }
  };

  return (
    <div className="bg-[var(--arbor-background)] text-[color:var(--arbor-on-surface)] selection:bg-[var(--arbor-sapling-light)] font-sans">
      <main>
        
        {/* Hero Section */}
        <section className="relative h-[450px] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: "url('/images/arbor/hero-bg.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--arbor-primary)]/80 to-[var(--arbor-primary)]/40"></div>
          </div>
          <div className="relative z-10 text-center px-6">
            <motion.div variants={revealVariants} initial="hidden" animate="visible">
              <span className="font-headline text-[12px] font-bold text-[color:var(--arbor-sapling-light)] uppercase tracking-[0.2em] mb-4 block">Corporate Offices</span>
              <h1 className="font-headline text-[48px] md:text-[64px] font-extrabold text-white mb-4 tracking-tight leading-none">Connect with Arbor</h1>
              <p className="font-sans text-[18px] text-white/80 max-w-2xl mx-auto leading-relaxed">
                Reach out to our global distribution hubs or request direct consultations for bulk fiber procurement.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Global Presence Bento Grid */}
        <section className="py-24 max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Headquarters Jakarta */}
            <motion.div 
              variants={revealVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              className="md:col-span-8 bg-[var(--arbor-surface-container-low)] border border-[var(--arbor-outline-variant)]/40 p-12 flex flex-col justify-between rounded-xl"
            >
              <div>
                <span className="font-headline text-[12px] font-bold text-[color:var(--arbor-outline)] uppercase tracking-[0.2em] mb-4 block">Global Headquarters</span>
                <h2 className="font-headline text-[40px] font-extrabold mb-6 text-[color:var(--arbor-primary)] tracking-tight">Jakarta, Indonesia</h2>
                <p className="font-sans text-[16px] text-[color:var(--arbor-on-surface-variant)] max-w-md mb-8 leading-relaxed">
                  The central coordination campus for our Southeast Asian sustainable forest plantations. Home to our core cellulose characterization laboratories.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[var(--arbor-outline-variant)]/30">
                <div>
                  <p className="font-headline text-[13px] font-bold tracking-widest text-[color:var(--arbor-primary)] mb-2 uppercase">Physical Campus</p>
                  <p className="text-[color:var(--arbor-on-surface-variant)] font-sans text-[15px] leading-relaxed">Jl. Senopati No. 42, Kebayoran Baru<br/>Jakarta Selatan 12190</p>
                </div>
                <div>
                  <p className="font-headline text-[13px] font-bold tracking-widest text-[color:var(--arbor-primary)] mb-2 uppercase">Direct Inquiry</p>
                  <p className="text-[color:var(--arbor-on-surface-variant)] font-sans text-[15px] leading-relaxed">+62 21 555 0192<br/>jakarta@arborpulp.com</p>
                </div>
              </div>
            </motion.div>

            {/* New York */}
            <motion.div 
              variants={revealVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              className="md:col-span-4 group overflow-hidden border border-[var(--arbor-outline-variant)]/40 bg-[var(--arbor-surface-container-low)] flex flex-col h-full rounded-xl"
            >
              <div className="h-64 overflow-hidden relative">
                <img src="/images/arbor/hero-bg.jpg" alt="New York Chelsea Hub" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <span className="font-headline text-[11px] font-bold text-[color:var(--arbor-outline)] uppercase tracking-[0.2em] mb-2 block">North America</span>
                  <h3 className="font-headline text-[28px] font-bold mb-4 text-[color:var(--arbor-primary)] tracking-tight">New York</h3>
                  <p className="text-[color:var(--arbor-on-surface-variant)] font-sans text-[15px] leading-relaxed mb-6">West Chelsea Arts District<br/>520 W 27th St, NY 10001</p>
                </div>
                <a onClick={(e) => { e.preventDefault(); onNavigate('inquiry'); }} className="font-headline text-[13px] font-bold tracking-wider text-[color:var(--arbor-primary)] hover:underline uppercase cursor-pointer" href="#">Book Showroom Visit →</a>
              </div>
            </motion.div>

            {/* Milan */}
            <motion.div 
              variants={revealVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              className="md:col-span-4 group overflow-hidden border border-[var(--arbor-outline-variant)]/40 bg-[var(--arbor-surface-container-low)] flex flex-col h-full rounded-xl"
            >
              <div className="h-64 overflow-hidden relative">
                <img src="/images/arbor/eucalyptus.jpg" alt="Milan Design Studio" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <span className="font-headline text-[11px] font-bold text-[color:var(--arbor-outline)] uppercase tracking-[0.2em] mb-2 block">European Union</span>
                  <h3 className="font-headline text-[28px] font-bold mb-4 text-[color:var(--arbor-primary)] tracking-tight">Milan</h3>
                  <p className="text-[color:var(--arbor-on-surface-variant)] font-sans text-[15px] leading-relaxed mb-6">Via della Moscova, 33<br/>20121 Milano MI, Italy</p>
                </div>
                <a onClick={(e) => { e.preventDefault(); onNavigate('inquiry'); }} className="font-headline text-[13px] font-bold tracking-wider text-[color:var(--arbor-primary)] hover:underline uppercase cursor-pointer" href="#">Design Studio →</a>
              </div>
            </motion.div>

            {/* Map Placeholder Card */}
            <motion.div 
              variants={revealVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              className="md:col-span-8 bg-[var(--arbor-surface-container-highest)] border border-[var(--arbor-outline-variant)]/40 relative min-h-[400px] overflow-hidden rounded-xl"
            >
              <div 
                className="absolute inset-0 opacity-40 grayscale pointer-events-none bg-cover bg-center" 
                style={{ backgroundImage: "url('/images/arbor/acacia.jpg')" }}
              ></div>
              <div className="relative z-10 p-12 h-full w-full flex flex-col justify-center items-center text-center">
                <div className="bg-white/90 backdrop-blur-md p-8 border border-[var(--arbor-outline-variant)]/30 max-w-sm rounded">
                  <span className="material-symbols-outlined text-5xl text-[color:var(--arbor-primary)] mb-4">explore</span>
                  <h4 className="font-headline text-[24px] font-bold mb-2 text-[color:var(--arbor-primary)] tracking-tight">Interactive Supply Chain Map</h4>
                  <p className="font-sans text-[15px] text-[color:var(--arbor-on-surface-variant)] mb-6 leading-relaxed">
                    Explore forest plantation boundaries, water monitoring points, and dispatch shipping lanes.
                  </p>
                  <button 
                    onClick={() => setShowMapModal(true)} 
                    className="bg-[var(--arbor-primary)] text-white px-8 py-3.5 font-headline text-[13px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity rounded"
                  >
                    Launch Interactive Map
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Departmental Contacts */}
        <section className="bg-[var(--arbor-surface-container)] py-20 border-t border-[var(--arbor-outline-variant)]/30">
          <div className="max-w-[1280px] mx-auto px-6">
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-headline text-[40px] font-extrabold mb-4 text-[color:var(--arbor-primary)] tracking-tight">Departmental Inquiries</h2>
              <p className="font-sans text-[17px] text-[color:var(--arbor-on-surface-variant)]">Direct your request to the appropriate specialist desk for pricing audits.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-white p-10 border-b-4 border-[var(--arbor-outline-variant)]/40 hover:border-[var(--arbor-primary)] transition-colors duration-300 rounded shadow-sm">
                <span className="material-symbols-outlined text-4xl text-[color:var(--arbor-primary)] mb-6">shopping_bag</span>
                <h4 className="font-headline text-[22px] font-bold mb-3 text-[color:var(--arbor-primary)]">Sales & Procurement</h4>
                <p className="text-[color:var(--arbor-on-surface-variant)] font-sans text-[14px] mb-6 leading-relaxed">For bulk fiber orders, raw wood allocations, and long-term contract pricing.</p>
                <a onClick={(e) => { e.preventDefault(); showToast("Directing to sales desk: sales@arborpulp.com"); }} className="font-headline text-[13px] font-bold tracking-wider text-[color:var(--arbor-primary)] hover:underline uppercase cursor-pointer" href="mailto:sales@arborpulp.com">sales@arborpulp.com</a>
              </div>

              <div className="bg-white p-10 border-b-4 border-[var(--arbor-outline-variant)]/40 hover:border-[var(--arbor-primary)] transition-colors duration-300 rounded shadow-sm">
                <span className="material-symbols-outlined text-4xl text-[color:var(--arbor-primary)] mb-6">local_shipping</span>
                <h4 className="font-headline text-[22px] font-bold mb-3 text-[color:var(--arbor-primary)]">Logistics & Supply</h4>
                <p className="text-[color:var(--arbor-on-surface-variant)] font-sans text-[14px] mb-6 leading-relaxed">For ship coordinates, customs clearance document releases, and freight status.</p>
                <a onClick={(e) => { e.preventDefault(); showToast("Directing to logistics: logistics@arborpulp.com"); }} className="font-headline text-[13px] font-bold tracking-wider text-[color:var(--arbor-primary)] hover:underline uppercase cursor-pointer" href="mailto:logistics@arborpulp.com">logistics@arborpulp.com</a>
              </div>

              <div className="bg-white p-10 border-b-4 border-[var(--arbor-outline-variant)]/40 hover:border-[var(--arbor-primary)] transition-colors duration-300 rounded shadow-sm">
                <span className="material-symbols-outlined text-4xl text-[color:var(--arbor-primary)] mb-6">newspaper</span>
                <h4 className="font-headline text-[22px] font-bold mb-3 text-[color:var(--arbor-primary)]">Ecology & Media</h4>
                <p className="text-[color:var(--arbor-on-surface-variant)] font-sans text-[14px] mb-6 leading-relaxed">For sustainability metrics, carbon auditing certifications, and media partnerships.</p>
                <a onClick={(e) => { e.preventDefault(); showToast("Directing to ecology: ecology@arborpulp.com"); }} className="font-headline text-[13px] font-bold tracking-wider text-[color:var(--arbor-primary)] hover:underline uppercase cursor-pointer" href="mailto:ecology@arborpulp.com">ecology@arborpulp.com</a>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Global Interactive Map Modal */}
      <AnimatePresence>
        {showMapModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowMapModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white max-w-4xl w-full p-8 border border-[var(--arbor-outline-variant)] shadow-2xl relative rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setShowMapModal(false)} className="absolute top-4 right-4 text-[color:var(--arbor-primary)] p-2 hover:bg-[var(--arbor-surface-container)] rounded-full transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
              
              <h3 className="font-headline text-[28px] font-bold text-[color:var(--arbor-primary)] mb-2 tracking-tight">Supply Chain Locations Map</h3>
              <p className="font-sans text-[14px] text-[color:var(--arbor-outline)] mb-8">Click a region to review supply chain operations and local coordinates.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                {/* Map Sidebar / Picker */}
                <div className="md:col-span-4 flex flex-col gap-2">
                  {Object.keys(globalHubs).map((key) => (
                    <button 
                      key={key}
                      onClick={() => setSelectedHub(key)}
                      className={`text-left p-4 border transition-all flex items-center gap-3 font-headline text-[13px] font-bold uppercase tracking-wider rounded ${selectedHub === key ? 'border-[var(--arbor-primary)] bg-[var(--arbor-primary)] text-white shadow-sm' : 'border-[var(--arbor-outline-variant)]/30 hover:border-[var(--arbor-outline-variant)] bg-white'}`}
                    >
                      <MapPin className="w-4 h-4 shrink-0" />
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Map Display / Info Panel */}
                <div className="md:col-span-8 bg-[var(--arbor-surface-container-low)] border border-[var(--arbor-outline-variant)]/30 p-6 flex flex-col justify-between rounded">
                  <div className="space-y-6">
                    <div className="aspect-video w-full overflow-hidden bg-white border border-[var(--arbor-outline-variant)]/30 relative rounded">
                      <img src={globalHubs[selectedHub].image} alt="Location facade" className="w-full h-full object-cover" />
                      <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 text-[10px] font-bold font-mono text-[color:var(--arbor-primary)] shadow flex items-center gap-2 rounded">
                        <Navigation className="w-3 h-3 text-emerald-500 animate-pulse" />
                        {globalHubs[selectedHub].coordinates}
                      </div>
                    </div>

                    <div>
                      <span className="font-headline text-[10px] font-bold text-[color:var(--arbor-outline)] uppercase tracking-widest block mb-1">{globalHubs[selectedHub].title}</span>
                      <h4 className="font-headline text-[24px] font-bold text-[color:var(--arbor-primary)] mb-2 tracking-tight">{globalHubs[selectedHub].city}</h4>
                      <p className="font-sans text-[14px] text-[color:var(--arbor-on-surface-variant)] leading-relaxed mb-4">{globalHubs[selectedHub].notes}</p>
                      
                      <div className="space-y-2 font-sans text-[13px] text-[color:var(--arbor-primary)]">
                        <p className="flex items-center gap-2 font-medium"><MapPin className="w-4 h-4 text-[color:var(--arbor-outline)]" /> {globalHubs[selectedHub].address}</p>
                        <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-[color:var(--arbor-outline)]" /> {globalHubs[selectedHub].phone}</p>
                        <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-[color:var(--arbor-outline)]" /> {globalHubs[selectedHub].email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[var(--arbor-outline-variant)]/30 flex justify-end">
                    <button 
                      onClick={() => {
                        setShowMapModal(false);
                        onNavigate('inquiry');
                      }}
                      className="bg-[var(--arbor-primary)] text-white px-6 py-3 font-headline text-[12px] font-bold tracking-widest uppercase hover:opacity-90 transition-opacity rounded"
                    >
                      Book Procurement Audit
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
