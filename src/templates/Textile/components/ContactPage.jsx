import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, X, Navigation } from 'lucide-react';

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
      email: 'jakarta@silkstone.co',
      coordinates: '6.2239° S, 106.8078° E',
      image: '/images/textile/contact-hero.jpg',
      notes: 'Our primary design campus, physical weave archive, and central logistics routing center.'
    },
    newyork: {
      city: 'New York, USA',
      title: 'North American Hub',
      address: 'West Chelsea Arts District, 520 W 27th St, NY 10001',
      phone: '+1 212 555 0843',
      email: 'newyork@silkstone.co',
      coordinates: '40.7505° N, 74.0048° W',
      image: '/images/textile/contact-ny.jpg',
      notes: 'Luxury designer showroom and trade client consultation studios.'
    },
    milan: {
      city: 'Milan, Italy',
      title: 'European Union Hub',
      address: 'Via della Moscova, 33, 20121 Milano MI, Italy',
      phone: '+39 02 555 0911',
      email: 'milan@silkstone.co',
      coordinates: '45.4781° N, 9.1895° E',
      image: '/images/textile/contact-milan.jpg',
      notes: 'Bespoke weaving R&D and heritage pattern digitizing facility.'
    },
    london: {
      city: 'London, United Kingdom',
      title: 'Corporate HQ',
      address: 'Savile Row, Mayfair, London W1S 3PF',
      phone: '+44 20 7555 0142',
      email: 'london@silkstone.co',
      coordinates: '51.5113° N, 0.1412° W',
      image: '/images/textile/archive.jpg',
      notes: 'Trade legal compliance, commercial sales contracts, and executive suites.'
    },
    mumbai: {
      city: 'Mumbai, India',
      title: 'South Asian Logistics',
      address: 'Bandra Kurla Complex, Mumbai 400051',
      phone: '+91 22 5555 0319',
      email: 'mumbai@silkstone.co',
      coordinates: '19.0607° N, 72.8633° E',
      image: '/images/textile/weaver.jpg',
      notes: 'Raw material sorting yard, certified grading labs, and maritime shipping terminal.'
    }
  };

  return (
    <div className="bg-[var(--txtl-background)] text-[color:var(--txtl-on-background)] font-sans overflow-x-hidden m-0 p-0">
      <main>
        {/* Hero Section */}
        <section className="relative h-[614px] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: "url('/images/textile/contact-hero.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--txtl-primary)]/70 to-[var(--txtl-primary)]/30"></div>
          </div>
          <div className="relative z-10 text-center px-[20px]">
            <motion.div variants={revealVariants} initial="hidden" animate="visible">
              <h1 className="font-serif text-[48px] md:text-[64px] leading-[1.15] text-white mb-4">Connect With Our Curators</h1>
              <p className="font-sans text-[18px] text-white/80 max-w-2xl mx-auto leading-relaxed">From our weaving rooms in Jakarta to our design houses in Milan, we are here to support your creative journey.</p>
            </motion.div>
          </div>
        </section>

        {/* Global Presence Bento Grid */}
        <section className="py-20 w-full max-w-[1440px] mx-auto px-[20px] lg:px-[80px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Headquarters Jakarta */}
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-8 bg-[var(--txtl-surface-container-low)] border border-[#c5c6cc]/30 p-10 flex flex-col justify-between">
              <div>
                <span className="font-sans text-[12px] font-semibold text-[color:var(--txtl-outline)] uppercase tracking-[0.2em] mb-4 block">Global Headquarters</span>
                <h2 className="font-serif text-[48px] leading-[1.15] mb-6 text-[color:var(--txtl-primary)]">Jakarta, Indonesia</h2>
                <p className="font-sans text-[16px] text-[color:var(--txtl-secondary)] max-w-md mb-8 leading-relaxed">The heart of our operations, where tradition meets modern logistics. Our Jakarta campus houses our primary archives and quality control labs.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[#c5c6cc]/30">
                <div>
                  <p className="font-sans text-[14px] font-semibold tracking-widest text-[color:var(--txtl-primary)] mb-2 uppercase">Primary Hub</p>
                  <p className="text-[color:var(--txtl-outline)] font-sans text-[16px] leading-relaxed">Jl. Senopati No. 42, Kebayoran Baru<br/>Jakarta Selatan 12190</p>
                </div>
                <div>
                  <p className="font-sans text-[14px] font-semibold tracking-widest text-[color:var(--txtl-primary)] mb-2 uppercase">Direct Line</p>
                  <p className="text-[color:var(--txtl-outline)] font-sans text-[16px] leading-relaxed">+62 21 555 0192<br/>jakarta@silkstone.co</p>
                </div>
              </div>
            </motion.div>
            
            {/* New York */}
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-4 group overflow-hidden border border-[#c5c6cc]/30 bg-[var(--txtl-surface-container-low)] flex flex-col h-full">
              <div className="h-64 overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: "url('/images/textile/contact-ny.jpg')" }}
                ></div>
              </div>
              <div className="p-8 flex-grow">
                <span className="font-sans text-[12px] font-semibold text-[color:var(--txtl-outline)] uppercase tracking-[0.2em] mb-2 block">North America</span>
                <h3 className="font-serif text-[32px] leading-[1.15] mb-4 text-[color:var(--txtl-primary)]">New York</h3>
                <p className="text-[color:var(--txtl-secondary)] font-sans text-[16px] mb-4 leading-relaxed">West Chelsea Arts District<br/>520 W 27th St, NY 10001</p>
                <a onClick={(e) => { e.preventDefault(); onNavigate('inquiry'); }} className="font-sans text-[14px] font-semibold tracking-widest text-[color:var(--txtl-primary)] hover:underline underline-offset-4 decoration-1 uppercase cursor-pointer" href="#">Visit Showroom →</a>
              </div>
            </motion.div>
            
            {/* Milan */}
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-4 group overflow-hidden border border-[#c5c6cc]/30 bg-[var(--txtl-surface-container-low)] flex flex-col h-full">
              <div className="h-64 overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: "url('/images/textile/contact-milan.jpg')" }}
                ></div>
              </div>
              <div className="p-8 flex-grow">
                <span className="font-sans text-[12px] font-semibold text-[color:var(--txtl-outline)] uppercase tracking-[0.2em] mb-2 block">European Union</span>
                <h3 className="font-serif text-[32px] leading-[1.15] mb-4 text-[color:var(--txtl-primary)]">Milan</h3>
                <p className="text-[color:var(--txtl-secondary)] font-sans text-[16px] mb-4 leading-relaxed">Via della Moscova, 33<br/>20121 Milano MI, Italy</p>
                <a onClick={(e) => { e.preventDefault(); onNavigate('inquiry'); }} className="font-sans text-[14px] font-semibold tracking-widest text-[color:var(--txtl-primary)] hover:underline underline-offset-4 decoration-1 uppercase cursor-pointer" href="#">Design Studio →</a>
              </div>
            </motion.div>
            
            {/* Interactive Map Placeholder */}
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-8 bg-[var(--txtl-surface-container-highest)] border border-[#c5c6cc]/30 relative min-h-[400px] overflow-hidden">
              <div 
                className="absolute inset-0 opacity-40 grayscale pointer-events-none bg-cover bg-center" 
                style={{ backgroundImage: "url('/images/textile/contact-map.jpg')" }}
              ></div>
              <div className="relative z-10 p-10 h-full w-full flex flex-col justify-center items-center text-center">
                <div className="bg-white/80 backdrop-blur-md p-8 border border-[#c5c6cc]/30 max-w-sm">
                  <span className="material-symbols-outlined text-4xl text-[color:var(--txtl-primary)] mb-4">explore</span>
                  <h4 className="font-serif text-[24px] leading-[1.15] mb-2 text-[color:var(--txtl-primary)]">Interactive Global Map</h4>
                  <p className="font-sans text-[16px] text-[color:var(--txtl-secondary)] mb-6 leading-relaxed">Explore our supply chain and local branch offices in real-time.</p>
                  <button onClick={() => setShowMapModal(true)} className="bg-[var(--txtl-primary)] text-white px-8 py-3 font-sans text-[14px] font-semibold uppercase tracking-widest hover:bg-[var(--txtl-surface-container)] hover:text-[color:var(--txtl-primary)] border border-transparent hover:border-[var(--txtl-primary)] transition-all">Launch Map</button>
                </div>
              </div>
            </motion.div>
            
          </div>
        </section>

        {/* Departmental Contact */}
        <section className="bg-[var(--txtl-surface-container)] py-20 w-full overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[80px]">
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-serif text-[48px] leading-[1.15] mb-4 text-[color:var(--txtl-primary)]">Departmental Inquiries</h2>
              <p className="font-sans text-[18px] text-[color:var(--txtl-secondary)] leading-relaxed">Direct your request to the appropriate specialist for a prompt response.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-10 border-b-2 border-[#c5c6cc]/30 hover:border-[var(--txtl-primary)] transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl text-[color:var(--txtl-primary)] mb-6">shopping_bag</span>
                <h4 className="font-serif text-[24px] leading-[1.15] mb-4 text-[color:var(--txtl-primary)]">Sales & Wholesale</h4>
                <p className="text-[color:var(--txtl-secondary)] font-sans text-[16px] mb-6 leading-relaxed">For trade inquiries, custom weaving orders, and bulk procurement contracts.</p>
                <a onClick={(e) => { e.preventDefault(); showToast("Directing to sales: sales@silkstone.co"); }} className="font-sans text-[14px] font-semibold tracking-widest text-[color:var(--txtl-primary)] hover:opacity-70 transition-opacity cursor-pointer" href="mailto:sales@silkstone.co">sales@silkstone.co</a>
              </motion.div>
              
              <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-10 border-b-2 border-[#c5c6cc]/30 hover:border-[var(--txtl-primary)] transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl text-[color:var(--txtl-primary)] mb-6">local_shipping</span>
                <h4 className="font-serif text-[24px] leading-[1.15] mb-4 text-[color:var(--txtl-primary)]">Logistics & Supply</h4>
                <p className="text-[color:var(--txtl-secondary)] font-sans text-[16px] mb-6 leading-relaxed">Inquiries regarding shipping status, international customs, and warehouse delivery.</p>
                <a onClick={(e) => { e.preventDefault(); showToast("Directing to logistics: logistics@silkstone.co"); }} className="font-sans text-[14px] font-semibold tracking-widest text-[color:var(--txtl-primary)] hover:opacity-70 transition-opacity cursor-pointer" href="mailto:logistics@silkstone.co">logistics@silkstone.co</a>
              </motion.div>
              
              <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-10 border-b-2 border-[#c5c6cc]/30 hover:border-[var(--txtl-primary)] transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl text-[color:var(--txtl-primary)] mb-6">newspaper</span>
                <h4 className="font-serif text-[24px] leading-[1.15] mb-4 text-[color:var(--txtl-primary)]">Press & Media</h4>
                <p className="text-[color:var(--txtl-secondary)] font-sans text-[16px] mb-6 leading-relaxed">Partnerships, editorial loans, and high-resolution asset requests for publications.</p>
                <a onClick={(e) => { e.preventDefault(); showToast("Directing to media: press@silkstone.co"); }} className="font-sans text-[14px] font-semibold tracking-widest text-[color:var(--txtl-primary)] hover:opacity-70 transition-opacity cursor-pointer" href="mailto:press@silkstone.co">press@silkstone.co</a>
              </motion.div>
              
            </div>
          </div>
        </section>

        {/* Inquiry CTA */}
        <section className="py-24 w-full overflow-hidden bg-[var(--txtl-primary)] text-white mt-10">
          <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[80px] grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6">
              <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <span className="font-sans text-[14px] font-semibold text-[color:var(--txtl-primary-fixed)] uppercase tracking-[0.2em] mb-4 block">Bespoke Projects</span>
                <h2 className="font-serif text-[48px] leading-[1.15] mb-6">Initiate a Custom Textile Inquiry</h2>
                <p className="font-sans text-[18px] text-white/80 leading-relaxed mb-10 max-w-lg">
                  Looking for unique weaves or large-scale procurement? Our curators bridge the gap between architectural vision and material reality.
                </p>
                <button 
                  onClick={() => onNavigate('inquiry')}
                  className="bg-white text-[color:var(--txtl-primary)] px-8 py-4 font-sans text-[14px] font-semibold uppercase tracking-[0.2em] hover:bg-[var(--txtl-surface-container)] transition-colors inline-flex items-center gap-3 group"
                >
                  Start Inquiry Process
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">east</span>
                </button>
              </motion.div>
            </div>
            <div className="md:col-span-6">
              <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative h-[400px] border border-white/20 p-2 overflow-hidden group">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/images/textile/inquiry-hero.jpg')" }}></div>
              </motion.div>
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
              className="bg-white max-w-4xl w-full p-8 border border-[#c5c6cc]/30 shadow-2xl relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setShowMapModal(false)} className="absolute top-4 right-4 text-[color:var(--txtl-primary)] p-2 hover:bg-[var(--txtl-surface-container-low)] rounded-full transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
              
              <h3 className="font-serif text-[28px] text-[color:var(--txtl-primary)] mb-2">Interactive Trade Map</h3>
              <p className="font-sans text-[14px] text-[color:var(--txtl-secondary)] mb-8">Click a region to review supply chain operations and local coordinates.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                {/* Map Sidebar / Picker */}
                <div className="md:col-span-4 flex flex-col gap-2">
                  {Object.keys(globalHubs).map((key) => (
                    <button 
                      key={key}
                      onClick={() => setSelectedHub(key)}
                      className={`text-left p-4 border transition-all flex items-center gap-3 font-sans text-[14px] font-semibold uppercase tracking-wider ${selectedHub === key ? 'border-[var(--txtl-primary)] bg-[var(--txtl-primary)] text-white shadow-sm' : 'border-[#c5c6cc]/30 hover:border-[#c5c6cc]'}`}
                    >
                      <MapPin className="w-4 h-4 shrink-0" />
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Map Display / Info Panel */}
                <div className="md:col-span-8 bg-[var(--txtl-surface-container)] border border-[#c5c6cc]/30 p-6 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="aspect-video w-full overflow-hidden bg-white border border-[#c5c6cc]/30 relative">
                      <img src={globalHubs[selectedHub].image} alt="Location facade" className="w-full h-full object-cover" />
                      <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 text-[10px] font-bold font-mono text-[color:var(--txtl-primary)] shadow flex items-center gap-2">
                        <Navigation className="w-3 h-3 text-sky-500 animate-pulse" />
                        {globalHubs[selectedHub].coordinates}
                      </div>
                    </div>

                    <div>
                      <span className="font-sans text-[10px] font-bold text-[color:var(--txtl-outline)] uppercase tracking-widest block mb-1">{globalHubs[selectedHub].title}</span>
                      <h4 className="font-serif text-[24px] text-[color:var(--txtl-primary)] mb-2">{globalHubs[selectedHub].city}</h4>
                      <p className="font-sans text-[14px] text-[color:var(--txtl-secondary)] leading-relaxed mb-4">{globalHubs[selectedHub].notes}</p>
                      
                      <div className="space-y-2 font-sans text-[13px] text-[color:var(--txtl-primary)]">
                        <p className="flex items-center gap-2 font-medium"><MapPin className="w-4 h-4 text-[color:var(--txtl-outline)]" /> {globalHubs[selectedHub].address}</p>
                        <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-[color:var(--txtl-outline)]" /> {globalHubs[selectedHub].phone}</p>
                        <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-[color:var(--txtl-outline)]" /> {globalHubs[selectedHub].email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#c5c6cc]/30 flex justify-end">
                    <button 
                      onClick={() => {
                        setShowMapModal(false);
                        onNavigate('inquiry');
                      }}
                      className="bg-[var(--txtl-primary)] text-white px-6 py-3 font-sans text-[12px] font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
                    >
                      Book Showroom Visit
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
