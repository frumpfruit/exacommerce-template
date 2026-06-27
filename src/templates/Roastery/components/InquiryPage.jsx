import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

export default function InquiryPage({ inquiryItems = [], onRemoveItem, onNavigate }) {
  const [formData, setFormData] = useState({
    companyName: '',
    picName: '',
    email: '',
    phone: '',
    industry: 'Wholesale & B2B',
    expectedDelivery: '',
    additionalNotes: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inquiryItems.length === 0) {
      alert('Your inquiry list is empty. Please add products from the catalog first.');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="font-body-md flex items-center justify-center min-h-[80vh]" style={{ backgroundColor: brand.cream, color: brand.onSurface }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="py-16 px-10 rounded-[2px] text-center max-w-[600px] w-full"
          style={{ backgroundColor: brand.white, boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}
        >
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: brand.coral }}>
            <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="white" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="text-[32px] font-bold mb-4" style={{ fontFamily: 'Hanken Grotesk' }}>Inquiry Received.</h3>
          <p className="text-[16px] leading-relaxed mb-8" style={{ color: brand.gray }}>
            Thank you, {formData.picName}. Your Request for Quotation (RFQ) has been received. Our sales team will review your requirements and send a formal quotation to <strong>{formData.email}</strong> within 24 hours.
          </p>
          <button 
            onClick={() => onNavigate('home')}
            className="px-8 py-4 font-bold rounded-[2px] transition-transform hover:-translate-y-1"
            style={{ backgroundColor: brand.coral, color: brand.white }}
          >
            Return to Homepage
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="font-body-md" style={{ backgroundColor: brand.cream, color: brand.onSurface }}>
      <section
        className="relative min-h-[45vh] flex items-end pb-16 px-8 md:px-16 bg-center bg-cover"
        style={{ backgroundImage: "url('/images/roastery/jason-betz-klub_Ke-268-unsplash.jpg')" }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,20,40,0.97) 0%, rgba(2,20,40,0.4) 60%, transparent 100%)" }} />
        <div className="relative z-10 max-w-[800px]">
          <p className="uppercase text-[11px] tracking-[4px] font-bold mb-4" style={{ color: brand.coral }}>
            Procurement
          </p>
          <h1 className="text-[40px] md:text-[56px] font-bold leading-[1.0] mb-4 text-white" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
            Request for Quotation
          </h1>
          <p className="text-[16px] text-white/65 max-w-lg leading-relaxed">
            Complete the form below to receive a formal quotation with bulk volume pricing and estimated delivery timelines.
          </p>
        </div>
      </section>

      <section className="py-20 px-8 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Items List */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 rounded-[2px] shadow-sm border" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                <div className="flex justify-between items-center mb-8 pb-4 border-b" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                  <h2 className="text-[20px] font-bold" style={{ fontFamily: 'Hanken Grotesk' }}>Requested Items ({inquiryItems.length})</h2>
                  <button 
                    type="button" 
                    onClick={() => onNavigate('store')}
                    className="text-[13px] font-bold"
                    style={{ color: brand.coral }}
                  >
                    + Add More Items
                  </button>
                </div>

                {inquiryItems.length === 0 ? (
                  <div className="text-center py-12 bg-gray-50 rounded-[2px]">
                    <p className="text-[14px] mb-4" style={{ color: brand.gray }}>No items added to your inquiry yet.</p>
                    <button 
                      type="button" 
                      onClick={() => onNavigate('store')}
                      className="px-6 py-3 font-bold rounded-[2px]"
                      style={{ backgroundColor: brand.deepBlue, color: brand.white }}
                    >
                      Browse Catalog
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {inquiryItems.map((item, idx) => (
                      <div key={item.id + idx} className={`flex gap-6 pb-6 ${idx !== inquiryItems.length - 1 ? 'border-b' : ''}`} style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                        <div className="w-[100px] h-[100px] bg-gray-50 rounded-[2px] border flex items-center justify-center p-2" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                          <img src={item.img} alt={item.name} className="max-w-full max-h-full object-contain" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-[16px] font-bold">{item.name}</h3>
                              <p className="text-[13px]" style={{ color: brand.gray }}>Est. Price: ${item.price}</p>
                            </div>
                            <button 
                              type="button" 
                              onClick={() => onRemoveItem(item.id)}
                              className="text-[12px] font-bold text-red-500"
                            >
                              Remove
                            </button>
                          </div>
                          
                          <div className="mt-4">
                            <label className="block text-[11px] uppercase tracking-[1px] font-bold mb-2" style={{ color: brand.gray }}>
                              Target Quantity (Min: {item.moq || '1'})
                            </label>
                            <input 
                              type="text" 
                              placeholder={`e.g. ${item.moq || '10'}`}
                              className="w-full sm:w-1/2 px-4 py-3 border bg-transparent focus:outline-none rounded-[2px]"
                              style={{ borderColor: 'rgba(0,0,0,0.15)', color: brand.onSurface }}
                              onFocus={e => e.target.style.borderColor = brand.coral}
                              onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.15)'}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-5">
              <div className="bg-white p-8 rounded-[2px] shadow-sm border sticky top-28" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                <h2 className="text-[20px] font-bold mb-8 pb-4 border-b" style={{ fontFamily: 'Hanken Grotesk', borderColor: 'rgba(0,0,0,0.05)' }}>
                  Company Information
                </h2>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[1px] font-bold mb-2" style={{ color: brand.gray }}>Company Name *</label>
                    <input 
                      type="text" required placeholder="Your Company Ltd"
                      value={formData.companyName} onChange={e => handleChange('companyName', e.target.value)}
                      className="w-full px-4 py-3 border bg-transparent focus:outline-none rounded-[2px]"
                      style={{ borderColor: 'rgba(0,0,0,0.15)', color: brand.onSurface }}
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[1px] font-bold mb-2" style={{ color: brand.gray }}>Contact Person (PIC) *</label>
                    <input 
                      type="text" required placeholder="Full Name"
                      value={formData.picName} onChange={e => handleChange('picName', e.target.value)}
                      className="w-full px-4 py-3 border bg-transparent focus:outline-none rounded-[2px]"
                      style={{ borderColor: 'rgba(0,0,0,0.15)', color: brand.onSurface }}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[1px] font-bold mb-2" style={{ color: brand.gray }}>Email *</label>
                      <input 
                        type="email" required placeholder="pic@company.com"
                        value={formData.email} onChange={e => handleChange('email', e.target.value)}
                        className="w-full px-4 py-3 border bg-transparent focus:outline-none rounded-[2px]"
                        style={{ borderColor: 'rgba(0,0,0,0.15)', color: brand.onSurface }}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-[1px] font-bold mb-2" style={{ color: brand.gray }}>Phone *</label>
                      <input 
                        type="text" required placeholder="+62 xxx"
                        value={formData.phone} onChange={e => handleChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border bg-transparent focus:outline-none rounded-[2px]"
                        style={{ borderColor: 'rgba(0,0,0,0.15)', color: brand.onSurface }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[1px] font-bold mb-2" style={{ color: brand.gray }}>Industry Sector</label>
                    <select 
                      value={formData.industry} onChange={e => handleChange('industry', e.target.value)}
                      className="w-full px-4 py-3 border bg-transparent focus:outline-none rounded-[2px]"
                      style={{ borderColor: 'rgba(0,0,0,0.15)', color: brand.onSurface }}
                    >
                      <option value="Wholesale & B2B">Wholesale & B2B</option>
                      <option value="Subscription">Subscription</option>
                      <option value="Custom Roast">Custom Roast</option>
                      <option value="Collaboration">Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[1px] font-bold mb-2" style={{ color: brand.gray }}>Additional Notes</label>
                    <textarea 
                      rows={3} placeholder="Please provide your shipping area or any specific requirements..."
                      value={formData.additionalNotes} onChange={e => handleChange('additionalNotes', e.target.value)}
                      className="w-full px-4 py-3 border bg-transparent focus:outline-none rounded-[2px] resize-none"
                      style={{ borderColor: 'rgba(0,0,0,0.15)', color: brand.onSurface }}
                    />
                  </div>

                  <div className="pt-6 border-t" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                    <button 
                      type="submit" 
                      disabled={inquiryItems.length === 0}
                      className="w-full py-4 font-bold rounded-[2px] transition-transform hover:-translate-y-1"
                      style={{ 
                        backgroundColor: brand.coral, color: brand.white,
                        opacity: inquiryItems.length === 0 ? 0.5 : 1,
                        cursor: inquiryItems.length === 0 ? 'not-allowed' : 'pointer'
                      }}
                    >
                      Submit Inquiry
                    </button>
                    <p className="text-[12px] text-center mt-4" style={{ color: brand.gray }}>
                      By submitting this RFQ, you agree that our sales team will contact you with a formal quotation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
