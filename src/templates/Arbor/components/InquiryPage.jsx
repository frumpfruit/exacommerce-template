import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, RefreshCw, Send } from 'lucide-react';

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
    const num = Math.floor(1000 + Math.random() * 9000);
    setInquiryId(`#ARB-2026-${num}`);
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
      const top = ref.current.getBoundingClientRect().top + window.scrollY - 120;
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
      <div className="bg-[var(--arbor-surface-container-low)] min-h-[80vh] flex items-center justify-center py-20 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-[var(--arbor-outline-variant)]/40 max-w-xl w-full p-10 md:p-12 text-center shadow-2xl space-y-8 rounded-xl"
        >
          {/* Animated Success Checkmark */}
          <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto outline outline-8 outline-emerald-500/10">
            <Check className="w-10 h-10 stroke-[2.5]" />
          </div>

          <div className="space-y-3">
            <span className="font-headline text-[10px] font-bold text-emerald-600 uppercase tracking-widest block">Inquiry Logged</span>
            <h2 className="font-headline text-[36px] font-extrabold text-[color:var(--arbor-primary)] leading-tight tracking-tight">RFQ Logged</h2>
            <p className="font-sans text-[15px] text-[color:var(--arbor-on-surface-variant)] leading-relaxed max-w-sm mx-auto">
              Your custom pulp and fiber requirements brief has been successfully received by our global supply coordinators.
            </p>
          </div>

          {/* Reference Meta Details */}
          <div className="bg-[var(--arbor-surface-container-low)] border border-[var(--arbor-outline-variant)]/30 p-6 space-y-3 text-left rounded">
            <div className="flex justify-between font-sans text-[13px] border-b border-[var(--arbor-outline-variant)]/20 pb-2">
              <span className="text-[color:var(--arbor-outline)] font-medium">REFERENCE ID</span>
              <span className="text-[color:var(--arbor-primary)] font-bold font-mono">{inquiryId}</span>
            </div>
            <div className="flex justify-between font-sans text-[13px] border-b border-[var(--arbor-outline-variant)]/20 pb-2">
              <span className="text-[color:var(--arbor-outline)] font-medium">ASSIGNED DESK</span>
              <span className="text-[color:var(--arbor-primary)] font-semibold uppercase">Jakarta Supply & Port Desk</span>
            </div>
            <div className="flex justify-between font-sans text-[13px]">
              <span className="text-[color:var(--arbor-outline)] font-medium">RESPONSE WINDOW</span>
              <span className="text-[color:var(--arbor-primary)] font-semibold">Within 24 Business Hours</span>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('catalog')}
              className="flex-1 bg-[var(--arbor-primary)] text-white py-4 uppercase font-headline text-[12px] font-bold tracking-widest hover:opacity-90 transition-opacity rounded"
            >
              Browse Catalog
            </button>
            <button 
              onClick={() => onNavigate('home')}
              className="flex-1 border border-[var(--arbor-primary)] text-[color:var(--arbor-primary)] py-4 uppercase font-headline text-[12px] font-bold tracking-widest hover:bg-slate-50 transition-all rounded"
            >
              Return Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--arbor-background)] text-[color:var(--arbor-on-surface)] selection:bg-[var(--arbor-sapling-light)] font-sans">
      <main>
        
        {/* Context Header */}
        <section className="relative flex items-center overflow-hidden min-h-[400px]">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: "url('/images/arbor/pulping.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--arbor-primary)]/90 via-[var(--arbor-primary)]/60 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full py-10">
            <motion.div variants={revealVariants} initial="hidden" animate="visible">
              <span className="font-headline text-[13px] font-bold uppercase tracking-widest text-white/70 mb-4 block">B2B Material Inquiry</span>
              <h1 className="font-headline text-[48px] md:text-[60px] font-extrabold leading-tight text-white max-w-2xl mb-6 tracking-tight">Initiate Bulk RFQ</h1>
              <p className="font-sans text-[17px] text-white/90 max-w-xl leading-relaxed">
                Connect your logistics team with our certified forestry curators. Fill out the three-part requirements form to receive contract terms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Multi-step Form Grid */}
        <section className="max-w-[1280px] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Timeline Panel */}
            <div className="lg:col-span-4 h-full relative">
              <div className="sticky top-32 space-y-12">
                <div className="space-y-8">
                  <div 
                    onClick={() => scrollToStep(step1Ref)}
                    className={`flex items-center gap-4 transition-all duration-500 cursor-pointer hover:opacity-100 ${activeStep === 1 ? 'opacity-100' : 'opacity-50'}`}
                  >
                    <div className={`w-10 h-10 border flex items-center justify-center font-headline text-[14px] font-bold transition-colors duration-500 rounded ${activeStep === 1 ? 'border-[var(--arbor-primary)] bg-[var(--arbor-primary)] text-white' : 'border-[var(--arbor-outline-variant)] text-[color:var(--arbor-outline)]'}`}>01</div>
                    <div>
                      <h3 className={`font-headline text-[14px] font-bold uppercase tracking-wider transition-colors duration-500 ${activeStep === 1 ? 'text-[color:var(--arbor-primary)]' : 'text-[color:var(--arbor-outline)]'}`}>Company Profile</h3>
                      <p className="font-sans text-[12px] text-[color:var(--arbor-outline)]">Establish credentials.</p>
                    </div>
                  </div>
                  <div 
                    onClick={() => scrollToStep(step2Ref)}
                    className={`flex items-center gap-4 transition-all duration-500 cursor-pointer hover:opacity-100 ${activeStep === 2 ? 'opacity-100' : 'opacity-50'}`}
                  >
                    <div className={`w-10 h-10 border flex items-center justify-center font-headline text-[14px] font-bold transition-colors duration-500 rounded ${activeStep === 2 ? 'border-[var(--arbor-primary)] bg-[var(--arbor-primary)] text-white' : 'border-[var(--arbor-outline-variant)] text-[color:var(--arbor-outline)]'}`}>02</div>
                    <div>
                      <h3 className={`font-headline text-[14px] font-bold uppercase tracking-wider transition-colors duration-500 ${activeStep === 2 ? 'text-[color:var(--arbor-primary)]' : 'text-[color:var(--arbor-outline)]'}`}>Fiber Selection</h3>
                      <p className="font-sans text-[12px] text-[color:var(--arbor-outline)]">Specify tonnage & variant.</p>
                    </div>
                  </div>
                  <div 
                    onClick={() => scrollToStep(step3Ref)}
                    className={`flex items-center gap-4 transition-all duration-500 cursor-pointer hover:opacity-100 ${activeStep === 3 ? 'opacity-100' : 'opacity-50'}`}
                  >
                    <div className={`w-10 h-10 border flex items-center justify-center font-headline text-[14px] font-bold transition-colors duration-500 rounded ${activeStep === 3 ? 'border-[var(--arbor-primary)] bg-[var(--arbor-primary)] text-white' : 'border-[var(--arbor-outline-variant)] text-[color:var(--arbor-outline)]'}`}>03</div>
                    <div>
                      <h3 className={`font-headline text-[14px] font-bold uppercase tracking-wider transition-colors duration-500 ${activeStep === 3 ? 'text-[color:var(--arbor-primary)]' : 'text-[color:var(--arbor-outline)]'}`}>Logistics & Shipping</h3>
                      <p className="font-sans text-[12px] text-[color:var(--arbor-outline)]">Destination port terms.</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-10 border-t border-[var(--arbor-outline-variant)]/30">
                  <h4 className="font-headline text-[22px] font-bold text-[color:var(--arbor-primary)] mb-3 tracking-tight">Dedicated Support?</h4>
                  <p className="font-sans text-[15px] text-[color:var(--arbor-on-surface-variant)] mb-6 leading-relaxed">Our logistics managers assist with customs clearances and duty-free certificates.</p>
                  <a className="font-headline text-[13px] font-bold border-b border-[var(--arbor-primary)] pb-1 hover:text-[color:var(--arbor-outline)] hover:border-[var(--arbor-outline)] transition-colors uppercase tracking-widest text-[color:var(--arbor-primary)]" href="mailto:concierge@arborpulp.com">concierge@arborpulp.com</a>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="lg:col-span-8 bg-white border border-[var(--arbor-outline-variant)]/40 p-8 md:p-12 lg:p-16 rounded-xl">
              <form className="space-y-16" onSubmit={handleFormSubmit}>
                
                {/* Step 1: Company Profile */}
                <div id="step-1" ref={step1Ref} className="space-y-10">
                  <h2 className="font-headline text-[30px] font-bold text-[color:var(--arbor-primary)] tracking-tight">Company Identity</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2 group">
                      <label className="font-headline text-[11px] font-bold text-[color:var(--arbor-outline)] group-focus-within:text-[color:var(--arbor-primary)] transition-colors uppercase tracking-wider">Company Name</label>
                      <input required className="w-full bg-transparent border-0 border-b border-[var(--arbor-outline-variant)] focus:border-[var(--arbor-primary)] focus:ring-0 px-0 py-3 font-sans text-[16px] text-[color:var(--arbor-primary)] transition-colors outline-none" placeholder="e.g. EcoBox International" type="text" />
                    </div>
                    <div className="space-y-2 group">
                      <label className="font-headline text-[11px] font-bold text-[color:var(--arbor-outline)] group-focus-within:text-[color:var(--arbor-primary)] transition-colors uppercase tracking-wider">Corporate Website</label>
                      <input required className="w-full bg-transparent border-0 border-b border-[var(--arbor-outline-variant)] focus:border-[var(--arbor-primary)] focus:ring-0 px-0 py-3 font-sans text-[16px] text-[color:var(--arbor-primary)] transition-colors outline-none" placeholder="https://" type="url" />
                    </div>
                    <div className="space-y-2 group">
                      <label className="font-headline text-[11px] font-bold text-[color:var(--arbor-outline)] group-focus-within:text-[color:var(--arbor-primary)] transition-colors uppercase tracking-wider">Industry Sector</label>
                      <select className="w-full bg-transparent border-0 border-b border-[var(--arbor-outline-variant)] focus:border-[var(--arbor-primary)] focus:ring-0 px-0 py-3 font-sans text-[16px] text-[color:var(--arbor-primary)] appearance-none outline-none cursor-pointer">
                        <option>Industrial Packaging Manufacture</option>
                        <option>Premium Publishing & Fine Papers</option>
                        <option>Sanitary Tissue Processing</option>
                        <option>Biomass R&D Facility</option>
                      </select>
                    </div>
                    <div className="space-y-2 group">
                      <label className="font-headline text-[11px] font-bold text-[color:var(--arbor-outline)] group-focus-within:text-[color:var(--arbor-primary)] transition-colors uppercase tracking-wider">Lead Procurement Contact</label>
                      <input required className="w-full bg-transparent border-0 border-b border-[var(--arbor-outline-variant)] focus:border-[var(--arbor-primary)] focus:ring-0 px-0 py-3 font-sans text-[16px] text-[color:var(--arbor-primary)] transition-colors outline-none" type="text" />
                    </div>
                  </div>
                </div>

                {/* Step 2: Fiber Selection */}
                <div id="step-2" ref={step2Ref} className="space-y-10 pt-10 border-t border-[var(--arbor-outline-variant)]/30">
                  <h2 className="font-headline text-[30px] font-bold text-[color:var(--arbor-primary)] tracking-tight">Fiber Requirements</h2>
                  
                  {cartItems.length > 0 && (
                    <div className="bg-[var(--arbor-surface-container-low)] p-6 md:p-8 border border-[var(--arbor-outline-variant)]/30 mb-8 rounded">
                      <h3 className="font-headline text-[12px] font-bold uppercase tracking-widest text-[color:var(--arbor-primary)] mb-6 border-b border-[var(--arbor-outline-variant)]/20 pb-4">Selected from Catalog ({cartItems.length})</h3>
                      <div className="space-y-4">
                        {cartItems.map(item => (
                          <div key={item.id} className="flex justify-between items-center bg-white p-4 border border-[var(--arbor-outline-variant)]/20 rounded">
                            <div className="flex items-center gap-4">
                              <div className="w-16 h-16 shrink-0 bg-gray-100 border border-[var(--arbor-outline-variant)]/30 hidden sm:block">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                              </div>
                              <div>
                                <span className="font-headline text-[9px] font-bold uppercase tracking-wider text-[color:var(--arbor-outline)] block mb-0.5">{item.category}</span>
                                <h4 className="font-headline text-[16px] font-bold text-[color:var(--arbor-primary)]">{item.title}</h4>
                                <span className="font-sans text-[12px] text-[color:var(--arbor-on-surface-variant)]">Density: {item.density} | Origin: {item.origin}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="font-headline text-[13px] font-bold text-[color:var(--arbor-primary)]">Qty: {item.quantity} Tons</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="font-sans text-[12px] text-[color:var(--arbor-outline)] mt-6 pt-4 border-t border-[var(--arbor-outline-variant)]/20 italic">These specifications have been attached directly to your logged RFQ session.</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2 group">
                      <label className="font-headline text-[11px] font-bold text-[color:var(--arbor-outline)] group-focus-within:text-[color:var(--arbor-primary)] transition-colors uppercase tracking-wider">Secondary Fiber Requirement</label>
                      <select className="w-full bg-transparent border-0 border-b border-[var(--arbor-outline-variant)] focus:border-[var(--arbor-primary)] focus:ring-0 px-0 py-3 font-sans text-[16px] text-[color:var(--arbor-primary)] appearance-none outline-none cursor-pointer">
                        <option>No secondary fiber</option>
                        <option>Acacia Premium Pulp</option>
                        <option>Eucalyptus Kraft Fiber</option>
                        <option>Double Kraft Linerboard</option>
                        <option>Bleached Softwood Kraft Pulp</option>
                      </select>
                    </div>
                    <div className="space-y-2 group">
                      <label className="font-headline text-[11px] font-bold text-[color:var(--arbor-outline)] group-focus-within:text-[color:var(--arbor-primary)] transition-colors uppercase tracking-wider">Additional Weight Needed (Tons)</label>
                      <input className="w-full bg-transparent border-0 border-b border-[var(--arbor-outline-variant)] focus:border-[var(--arbor-primary)] focus:ring-0 px-0 py-3 font-sans text-[16px] text-[color:var(--arbor-primary)] transition-colors outline-none" placeholder="e.g. 50" type="number" />
                    </div>
                    <div className="col-span-full space-y-4">
                      <label className="font-headline text-[11px] font-bold text-[color:var(--arbor-outline)] uppercase tracking-wider block">Mandatory Fiber Certifications</label>
                      <div className="flex flex-wrap gap-4">
                        {['FSC Certified', 'PEFC Compliant', 'Elemental Chlorine Free (ECF)', 'Heavy Metals Free'].map(cert => (
                          <label key={cert} className="cursor-pointer flex items-center gap-2 border border-[var(--arbor-outline-variant)] px-4 py-2 hover:bg-[var(--arbor-primary)] hover:text-white transition-all rounded">
                            <input className="hidden" type="checkbox" />
                            <span className="font-headline text-[12px] font-bold uppercase tracking-wider">{cert}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3: Logistics & Timeline */}
                <div id="step-3" ref={step3Ref} className="space-y-10 pt-10 border-t border-[var(--arbor-outline-variant)]/30">
                  <h2 className="font-headline text-[30px] font-bold text-[color:var(--arbor-primary)] tracking-tight">Logistics & Timeline</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2 group">
                      <label className="font-headline text-[11px] font-bold text-[color:var(--arbor-outline)] group-focus-within:text-[color:var(--arbor-primary)] transition-colors uppercase tracking-wider">Destination Port / City</label>
                      <input required className="w-full bg-transparent border-0 border-b border-[var(--arbor-outline-variant)] focus:border-[var(--arbor-primary)] focus:ring-0 px-0 py-3 font-sans text-[16px] text-[color:var(--arbor-primary)] transition-colors outline-none" placeholder="e.g. Port of Rotterdam, Hamburg..." type="text" />
                    </div>
                    <div className="space-y-2 group">
                      <label className="font-headline text-[11px] font-bold text-[color:var(--arbor-outline)] group-focus-within:text-[color:var(--arbor-primary)] transition-colors uppercase tracking-wider">Required Delivery Date</label>
                      <input required className="w-full bg-transparent border-0 border-b border-[var(--arbor-outline-variant)] focus:border-[var(--arbor-primary)] focus:ring-0 px-0 py-3 font-sans text-[16px] text-[color:var(--arbor-primary)] transition-colors outline-none" type="date" />
                    </div>
                    <div className="col-span-full space-y-2 group">
                      <label className="font-headline text-[11px] font-bold text-[color:var(--arbor-outline)] group-focus-within:text-[color:var(--arbor-primary)] transition-colors uppercase tracking-wider">Project Scope & Technical Details</label>
                      <textarea required className="w-full bg-transparent border-0 border-b border-[var(--arbor-outline-variant)] focus:border-[var(--arbor-primary)] focus:ring-0 px-0 py-3 font-sans text-[16px] text-[color:var(--arbor-primary)] transition-colors resize-none outline-none" placeholder="Describe the core B2B application and any custom processing variables..." rows="4"></textarea>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center pt-10 gap-6 border-t border-[var(--arbor-outline-variant)]/20">
                  <button 
                    onClick={() => showToast("RFQ draft saved successfully.")}
                    className="font-headline text-[12px] font-bold text-[color:var(--arbor-outline)] uppercase tracking-widest hover:text-[color:var(--arbor-primary)] transition-colors flex items-center gap-2" 
                    type="button"
                  >
                    <RefreshCw className="w-4 h-4" /> Save RFQ Draft
                  </button>
                  <button className="bg-[var(--arbor-primary)] text-white px-10 py-4 uppercase tracking-[0.2em] font-headline text-[12px] font-bold hover:opacity-90 transition-all rounded shadow-lg flex items-center gap-2" type="submit">
                    <Send className="w-4 h-4" /> Submit B2B Inquiry
                  </button>
                </div>
              </form>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
