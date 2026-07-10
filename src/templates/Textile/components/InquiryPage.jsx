import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, RefreshCw, FileText, Send } from 'lucide-react';

export default function InquiryPage({ cartItems = [], onNavigate = () => {}, showToast = () => {} }) {
  const [activeStep, setActiveStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  useEffect(() => {
    // Generate a unique inquiry reference ID on mount
    const num = Math.floor(1000 + Math.random() * 9000);
    setInquiryId(`#SST-2026-${num}`);
  }, []);

  useEffect(() => {
    if (submitted) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'step-1') setActiveStep(1);
          if (entry.target.id === 'step-2') setActiveStep(2);
          if (entry.target.id === 'step-3') setActiveStep(3);
        }
      });
    }, { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" });

    if (step1Ref.current) observer.observe(step1Ref.current);
    if (step2Ref.current) observer.observe(step2Ref.current);
    if (step3Ref.current) observer.observe(step3Ref.current);

    return () => observer.disconnect();
  }, [submitted]);

  const scrollToStep = (ref) => {
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top + window.scrollY - 120; // 120px offset for fixed navbar
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast("Inquiry submitted! Check success details below.");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="bg-[var(--txtl-surface)] min-h-[80vh] flex items-center justify-center py-20 px-[20px]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-[#c5c6cc]/30 max-w-xl w-full p-10 md:p-12 text-center shadow-2xl space-y-8"
        >
          {/* Animated Success Checkmark */}
          <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto outline outline-8 outline-emerald-500/10">
            <Check className="w-10 h-10 stroke-[2.5]" />
          </div>

          <div className="space-y-3">
            <span className="font-sans text-[10px] font-bold text-emerald-600 uppercase tracking-widest block">Inquiry Logged</span>
            <h2 className="font-serif text-[36px] text-[color:var(--txtl-primary)] leading-tight">Thank You</h2>
            <p className="font-sans text-[16px] text-[color:var(--txtl-secondary)] leading-relaxed max-w-sm mx-auto">
              Your custom textile brief has been successfully received by our B2B procurement division.
            </p>
          </div>

          {/* Reference Meta Details */}
          <div className="bg-[var(--txtl-surface-container-low)] border border-[#c5c6cc]/30 p-6 space-y-3 text-left">
            <div className="flex justify-between font-sans text-[13px] border-b border-[#c5c6cc]/20 pb-2">
              <span className="text-[color:var(--txtl-outline)] font-medium">REFERENCE ID</span>
              <span className="text-[color:var(--txtl-primary)] font-bold font-mono">{inquiryId}</span>
            </div>
            <div className="flex justify-between font-sans text-[13px] border-b border-[#c5c6cc]/20 pb-2">
              <span className="text-[color:var(--txtl-outline)] font-medium">ASSIGNED DESK</span>
              <span className="text-[color:var(--txtl-primary)] font-semibold uppercase">Jakarta Procurement Desk</span>
            </div>
            <div className="flex justify-between font-sans text-[13px]">
              <span className="text-[color:var(--txtl-outline)] font-medium">RESPONSE WINDOW</span>
              <span className="text-[color:var(--txtl-primary)] font-semibold">Within 24 Business Hours</span>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('catalog')}
              className="flex-1 bg-[var(--txtl-primary)] text-white py-4 uppercase font-sans text-[12px] font-bold tracking-widest hover:opacity-90 transition-opacity"
            >
              Browse Catalog
            </button>
            <button 
              onClick={() => onNavigate('home')}
              className="flex-1 border border-[var(--txtl-primary)] text-[color:var(--txtl-primary)] py-4 uppercase font-sans text-[12px] font-bold tracking-widest hover:bg-[var(--txtl-surface-container)] transition-all"
            >
              Return Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--txtl-background)] text-[color:var(--txtl-on-background)] font-sans min-h-screen">
      <main>
        {/* Hero Section / Context */}
        <section className="relative flex items-center overflow-hidden min-h-[500px]">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: "url('/images/textile/inquiry-hero.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--txtl-primary)]/90 via-[var(--txtl-primary)]/60 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto px-[20px] lg:px-[80px] w-full">
            <motion.div variants={revealVariants} initial="hidden" animate="visible">
              <span className="font-sans text-[14px] font-semibold uppercase tracking-widest text-white/70 mb-4 block">B2B Procurement</span>
              <h1 className="font-serif text-[48px] md:text-[64px] leading-[1.15] text-white max-w-2xl mb-6">Process & Custom Inquiry</h1>
              <p className="font-sans text-[18px] text-white/90 max-w-xl leading-relaxed">
                Our curators bridge the gap between architectural vision and material reality. Initiate a bespoke textile inquiry for your global projects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Multi-step Form Section */}
        <section className="max-w-[1440px] mx-auto px-[20px] lg:px-[80px] py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Left: Form Progress & Contact */}
            <div className="md:col-span-12 lg:col-span-4 h-full relative">
              <div className="sticky top-32 space-y-12">
                <div className="space-y-8">
                  <div 
                    onClick={() => scrollToStep(step1Ref)}
                    className={`flex items-center gap-4 transition-all duration-500 cursor-pointer hover:opacity-100 ${activeStep === 1 ? 'opacity-100' : 'opacity-50'}`}
                  >
                    <div className={`w-10 h-10 border flex items-center justify-center font-sans text-[14px] font-semibold transition-colors duration-500 ${activeStep === 1 ? 'border-[var(--txtl-primary)] bg-[var(--txtl-primary)] text-white' : 'border-[#c5c6cc] text-[color:var(--txtl-outline)]'}`}>01</div>
                    <div>
                      <h3 className={`font-sans text-[14px] font-semibold uppercase transition-colors duration-500 ${activeStep === 1 ? 'text-[color:var(--txtl-primary)]' : 'text-[color:var(--txtl-outline)]'}`}>Company Profile</h3>
                      <p className="font-sans text-[12px] font-semibold tracking-widest text-[color:var(--txtl-outline)]">Establish your credentials.</p>
                    </div>
                  </div>
                  <div 
                    onClick={() => scrollToStep(step2Ref)}
                    className={`flex items-center gap-4 transition-all duration-500 cursor-pointer hover:opacity-100 ${activeStep === 2 ? 'opacity-100' : 'opacity-50'}`}
                  >
                    <div className={`w-10 h-10 border flex items-center justify-center font-sans text-[14px] font-semibold transition-colors duration-500 ${activeStep === 2 ? 'border-[var(--txtl-primary)] bg-[var(--txtl-primary)] text-white' : 'border-[#c5c6cc] text-[color:var(--txtl-outline)]'}`}>02</div>
                    <div>
                      <h3 className={`font-sans text-[14px] font-semibold uppercase transition-colors duration-500 ${activeStep === 2 ? 'text-[color:var(--txtl-primary)]' : 'text-[color:var(--txtl-outline)]'}`}>Textile Selection</h3>
                      <p className="font-sans text-[12px] font-semibold tracking-widest text-[color:var(--txtl-outline)]">Specify weave and yardage.</p>
                    </div>
                  </div>
                  <div 
                    onClick={() => scrollToStep(step3Ref)}
                    className={`flex items-center gap-4 transition-all duration-500 cursor-pointer hover:opacity-100 ${activeStep === 3 ? 'opacity-100' : 'opacity-50'}`}
                  >
                    <div className={`w-10 h-10 border flex items-center justify-center font-sans text-[14px] font-semibold transition-colors duration-500 ${activeStep === 3 ? 'border-[var(--txtl-primary)] bg-[var(--txtl-primary)] text-white' : 'border-[#c5c6cc] text-[color:var(--txtl-outline)]'}`}>03</div>
                    <div>
                      <h3 className={`font-sans text-[14px] font-semibold uppercase transition-colors duration-500 ${activeStep === 3 ? 'text-[color:var(--txtl-primary)]' : 'text-[color:var(--txtl-outline)]'}`}>Logistics & Timeline</h3>
                      <p className="font-sans text-[12px] font-semibold tracking-widest text-[color:var(--txtl-outline)]">Global shipping needs.</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-10 border-t border-[#c5c6cc]/30">
                  <h4 className="font-serif text-[24px] leading-[1.15] text-[color:var(--txtl-primary)] mb-4">Urgent Consultation?</h4>
                  <p className="font-sans text-[16px] text-[color:var(--txtl-secondary)] mb-6 leading-relaxed">Our global offices are available for high-priority logistics coordination.</p>
                  <a className="font-sans text-[14px] font-semibold border-b border-[var(--txtl-primary)] pb-1 hover:text-[color:var(--txtl-outline)] hover:border-[var(--txtl-outline)] transition-colors uppercase tracking-widest text-[color:var(--txtl-primary)]" href="mailto:concierge@silkandstone.com">concierge@silkandstone.com</a>
                </div>
              </div>
            </div>

            {/* Right: The Form */}
            <div className="md:col-span-12 lg:col-span-8 bg-white border border-[#c5c6cc]/30 p-8 md:p-12 lg:p-16">
              <form className="space-y-16" onSubmit={handleFormSubmit}>
                
                {/* Step 1: Company Info */}
                <div id="step-1" ref={step1Ref} className="space-y-10">
                  <h2 className="font-serif text-[32px] leading-[1.15] text-[color:var(--txtl-primary)]">Company Identity</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2 group">
                      <label className="font-sans text-[12px] font-semibold text-[color:var(--txtl-outline)] group-focus-within:text-[color:var(--txtl-primary)] transition-colors uppercase tracking-widest">Company Name</label>
                      <input required className="w-full bg-transparent border-0 border-b border-[#c5c6cc] focus:border-[var(--txtl-primary)] focus:ring-0 px-0 py-3 font-sans text-[16px] text-[color:var(--txtl-primary)] transition-colors outline-none" placeholder="e.g. Studio Minimal" type="text" />
                    </div>
                    <div className="space-y-2 group">
                      <label className="font-sans text-[12px] font-semibold text-[color:var(--txtl-outline)] group-focus-within:text-[color:var(--txtl-primary)] transition-colors uppercase tracking-widest">Official Website</label>
                      <input required className="w-full bg-transparent border-0 border-b border-[#c5c6cc] focus:border-[var(--txtl-primary)] focus:ring-0 px-0 py-3 font-sans text-[16px] text-[color:var(--txtl-primary)] transition-colors outline-none" placeholder="https://" type="url" />
                    </div>
                    <div className="space-y-2 group">
                      <label className="font-sans text-[12px] font-semibold text-[color:var(--txtl-outline)] group-focus-within:text-[color:var(--txtl-primary)] transition-colors uppercase tracking-widest">Industry Type</label>
                      <select className="w-full bg-transparent border-0 border-b border-[#c5c6cc] focus:border-[var(--txtl-primary)] focus:ring-0 px-0 py-3 font-sans text-[16px] text-[color:var(--txtl-primary)] appearance-none outline-none cursor-pointer">
                        <option>Architecture & Interior Design</option>
                        <option>Luxury Fashion Manufacture</option>
                        <option>Hospitality Procurement</option>
                        <option>Furniture Design</option>
                      </select>
                    </div>
                    <div className="space-y-2 group">
                      <label className="font-sans text-[12px] font-semibold text-[color:var(--txtl-outline)] group-focus-within:text-[color:var(--txtl-primary)] transition-colors uppercase tracking-widest">Lead Contact Name</label>
                      <input required className="w-full bg-transparent border-0 border-b border-[#c5c6cc] focus:border-[var(--txtl-primary)] focus:ring-0 px-0 py-3 font-sans text-[16px] text-[color:var(--txtl-primary)] transition-colors outline-none" type="text" />
                    </div>
                  </div>
                </div>

                {/* Step 2: Product Needs */}
                <div id="step-2" ref={step2Ref} className="space-y-10 pt-10 border-t border-[#c5c6cc]/30">
                  <h2 className="font-serif text-[32px] leading-[1.15] text-[color:var(--txtl-primary)]">Textile Requirements</h2>
                  
                  {cartItems.length > 0 && (
                    <div className="bg-[var(--txtl-surface-container-low)] p-6 md:p-8 border border-[#c5c6cc]/30 mb-8">
                      <h3 className="font-sans text-[14px] font-semibold uppercase tracking-widest text-[color:var(--txtl-primary)] mb-6 border-b border-[#c5c6cc]/30 pb-4">Pre-Selected from Archive ({cartItems.length})</h3>
                      <div className="space-y-4">
                        {cartItems.map(item => (
                          <div key={item.id} className="flex justify-between items-center bg-white p-4 border border-[#c5c6cc]/20">
                            <div className="flex items-center gap-4">
                              <div className="w-16 h-16 shrink-0 bg-gray-100 hidden sm:block">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                              </div>
                              <div>
                                <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[color:var(--txtl-outline)] block mb-1">{item.category}</span>
                                <h4 className="font-serif text-[18px] text-[color:var(--txtl-primary)]">{item.title}</h4>
                                <span className="font-sans text-[12px] font-medium text-[color:var(--txtl-secondary)]">Weave: {item.weave} | Origin: {item.origin}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="font-sans text-[14px] font-semibold text-[color:var(--txtl-primary)]">Qty: {item.quantity}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="font-sans text-[12px] text-[color:var(--txtl-secondary)] mt-6 pt-4 border-t border-[#c5c6cc]/30 italic">These items have been automatically attached to your formal inquiry.</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2 group">
                      <label className="font-sans text-[12px] font-semibold text-[color:var(--txtl-outline)] group-focus-within:text-[color:var(--txtl-primary)] transition-colors uppercase tracking-widest">Core Textile Type (Additional)</label>
                      <select className="w-full bg-transparent border-0 border-b border-[#c5c6cc] focus:border-[var(--txtl-primary)] focus:ring-0 px-0 py-3 font-sans text-[16px] text-[color:var(--txtl-primary)] appearance-none outline-none cursor-pointer">
                        <option>No additional required</option>
                        <option>Hand-woven Thai Silk</option>
                        <option>Belgian Linen (Heavyweight)</option>
                        <option>Alcantara Composite</option>
                        <option>Egyptian Giza Cotton</option>
                        <option>Custom Weave Development</option>
                      </select>
                    </div>
                    <div className="space-y-2 group">
                      <label className="font-sans text-[12px] font-semibold text-[color:var(--txtl-outline)] group-focus-within:text-[color:var(--txtl-primary)] transition-colors uppercase tracking-widest">Total Quantity (Yards/Meters)</label>
                      <input className="w-full bg-transparent border-0 border-b border-[#c5c6cc] focus:border-[var(--txtl-primary)] focus:ring-0 px-0 py-3 font-sans text-[16px] text-[color:var(--txtl-primary)] transition-colors outline-none" placeholder="Min. 50" type="number" />
                    </div>
                    <div className="col-span-full space-y-4">
                      <label className="font-sans text-[12px] font-semibold text-[color:var(--txtl-outline)] uppercase tracking-widest">Specific Functional Requirements</label>
                      <div className="flex flex-wrap gap-4">
                        {['Flame Retardant', 'UV Resistance', 'Acoustic Absorption', 'High-Traffic Durability'].map(req => (
                          <label key={req} className="cursor-pointer flex items-center gap-2 border border-[#c5c6cc] px-4 py-2 hover:bg-[var(--txtl-primary)] hover:text-white hover:border-[var(--txtl-primary)] transition-colors group">
                            <input className="hidden" type="checkbox" />
                            <span className="font-sans text-[12px] font-semibold uppercase tracking-widest">{req}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3: Logistics */}
                <div id="step-3" ref={step3Ref} className="space-y-10 pt-10 border-t border-[#c5c6cc]/30">
                  <h2 className="font-serif text-[32px] leading-[1.15] text-[color:var(--txtl-primary)]">Logistics & Timeline</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2 group">
                      <label className="font-sans text-[12px] font-semibold text-[color:var(--txtl-outline)] group-focus-within:text-[color:var(--txtl-primary)] transition-colors uppercase tracking-widest">Destination City</label>
                      <input required className="w-full bg-transparent border-0 border-b border-[#c5c6cc] focus:border-[var(--txtl-primary)] focus:ring-0 px-0 py-3 font-sans text-[16px] text-[color:var(--txtl-primary)] transition-colors outline-none" placeholder="London, Dubai, New York..." type="text" />
                    </div>
                    <div className="space-y-2 group">
                      <label className="font-sans text-[12px] font-semibold text-[color:var(--txtl-outline)] group-focus-within:text-[color:var(--txtl-primary)] transition-colors uppercase tracking-widest">Requested Delivery Window</label>
                      <input required className="w-full bg-transparent border-0 border-b border-[#c5c6cc] focus:border-[var(--txtl-primary)] focus:ring-0 px-0 py-3 font-sans text-[16px] text-[color:var(--txtl-primary)] transition-colors outline-none" type="date" />
                    </div>
                    <div className="col-span-full space-y-2 group">
                      <label className="font-sans text-[12px] font-semibold text-[color:var(--txtl-outline)] group-focus-within:text-[color:var(--txtl-primary)] transition-colors uppercase tracking-widest">Project Brief & Specific Requirements</label>
                      <textarea required className="w-full bg-transparent border-0 border-b border-[#c5c6cc] focus:border-[var(--txtl-primary)] focus:ring-0 px-0 py-3 font-sans text-[16px] text-[color:var(--txtl-primary)] transition-colors resize-none outline-none" placeholder="Describe the scope of the project and any unique material specifications..." rows="4"></textarea>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center pt-10 gap-6">
                  <button 
                    onClick={() => showToast("Progress saved successfully as draft!")}
                    className="font-sans text-[12px] font-bold text-[color:var(--txtl-outline)] uppercase tracking-widest hover:text-[color:var(--txtl-primary)] transition-colors flex items-center gap-2" 
                    type="button"
                  >
                    <RefreshCw className="w-4 h-4" /> Save Draft
                  </button>
                  <button className="bg-[var(--txtl-primary)] text-white px-8 md:px-12 py-4 uppercase tracking-[0.2em] font-sans text-[12px] font-bold hover:bg-[var(--txtl-surface-container)] hover:text-[color:var(--txtl-primary)] border border-transparent hover:border-[var(--txtl-primary)] transition-all shadow-lg flex items-center gap-2" type="submit">
                    <Send className="w-4 h-4" /> Submit Formal Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Bento Highlights Section */}
        <section className="bg-[var(--txtl-surface-container)] py-24">
          <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[80px]">
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-between items-end mb-12">
              <div>
                <span className="font-sans text-[14px] font-semibold text-[color:var(--txtl-outline)] uppercase tracking-widest block mb-2">Curatorial Standards</span>
                <h2 className="font-serif text-[48px] leading-[1.15] text-[color:var(--txtl-primary)]">Global Distribution Network</h2>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-7 relative group overflow-hidden border border-[#c5c6cc]/30 min-h-[400px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: "url('/images/textile/inquiry-logistics.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--txtl-primary)]/90 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white p-4">
                  <h3 className="font-serif text-[24px] leading-[1.15] mb-2">Climate-Controlled Archive</h3>
                  <p className="font-sans text-[16px] opacity-90 max-w-sm leading-relaxed">Preserving the integrity of rare natural fibers through strict environmental monitoring.</p>
                </div>
              </motion.div>
              
              <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-5 grid grid-rows-2 gap-6 min-h-[400px] md:min-h-0">
                <div className="relative group overflow-hidden border border-[#c5c6cc]/30 h-full min-h-[200px]">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                    style={{ backgroundImage: "url('/images/textile/inquiry-quality.jpg')" }}
                  ></div>
                  <div className="absolute inset-0 bg-[var(--txtl-primary)]/20 group-hover:bg-transparent transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur px-6 py-2 font-sans text-[14px] font-semibold text-[color:var(--txtl-primary)] uppercase tracking-widest shadow-lg">Quality Assurance</span>
                  </div>
                </div>
                <div className="bg-[var(--txtl-primary)] p-10 flex flex-col justify-center text-white border border-[var(--txtl-primary)] h-full min-h-[200px]">
                  <span className="material-symbols-outlined text-4xl mb-4 text-[color:var(--txtl-primary-fixed)]">public</span>
                  <h3 className="font-serif text-[24px] leading-[1.15] mb-4">64 Export Hubs</h3>
                  <p className="font-sans text-[16px] text-white/80 leading-relaxed">Our presence in 22 countries ensures duty-free lanes for most textile categories.</p>
                </div>
              </motion.div>
              
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
