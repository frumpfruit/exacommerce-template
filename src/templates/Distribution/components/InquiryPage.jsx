import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function InquiryPage({ inquiryItems = [], onRemoveItem, onNavigate }) {
  const [formData, setFormData] = useState({
    companyName: '',
    npwp: '',
    picName: '',
    email: '',
    phone: '',
    industry: 'Manufacturing',
    expectedDelivery: '',
    additionalNotes: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  // Update specific field in form
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleUpdateItem = (id, updates) => {
    // If we wanted to let users edit MOQ/Expected Price here.
    // Assuming parent state handles it if needed.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inquiryItems.length === 0) {
      alert('Your inquiry list is empty. Please add products from the catalog first.');
      return;
    }
    
    // Simulate API call
    console.log('Submitting B2B RFQ:', { company: formData, items: inquiryItems });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ backgroundColor: 'var(--nexus-surface-raised)', padding: 'var(--nexus-space-10) 0', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="nexus-container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <div style={{
            width: '80px', height: '80px', borderRadius: '50%',
            backgroundColor: '#F0FDF4', display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto var(--nexus-space-5)'
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: 'var(--nexus-space-3)' }}>
            RFQ Submitted Successfully
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--nexus-text-secondary)', lineHeight: 1.6, marginBottom: 'var(--nexus-space-6)' }}>
            Thank you, {formData.picName}. Your Request for Quotation (RFQ) has been received. Our sales team will review your requirements and send a formal quotation to <strong>{formData.email}</strong> within 24 business hours.
          </p>
          <button 
            onClick={() => onNavigate('home')}
            className="nexus-btn nexus-btn-primary"
            style={{ padding: '12px 32px', fontSize: '14px' }}
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--nexus-surface-raised)', padding: 'var(--nexus-space-8) 0', minHeight: '80vh' }}>
      <div className="nexus-container" style={{ maxWidth: '1000px' }}>
        
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 'var(--nexus-space-6)' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--nexus-brand-primary)' }}>
              Procurement
            </span>
            <h1 style={{ fontSize: '28px', fontWeight: 800, marginTop: 'var(--nexus-space-2)' }}>
              Request for <span style={{ color: 'var(--nexus-brand-primary)' }}>Quotation</span> (RFQ)
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--nexus-text-secondary)', maxWidth: '600px', margin: 'var(--nexus-space-3) auto 0', lineHeight: 1.6 }}>
              Complete the form below to receive a formal quotation with bulk volume pricing and estimated delivery timelines.
            </p>
          </div>
        </ScrollReveal>

        <form onSubmit={handleSubmit}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--nexus-space-6)'
          }}>
            
            {/* Left: Items List */}
            <ScrollReveal delay={100}>
              <div style={{
                backgroundColor: 'var(--nexus-surface-strong)',
                border: '1px solid var(--nexus-surface-muted)',
                borderRadius: 'var(--nexus-radius-sm)',
                padding: 'var(--nexus-space-5)',
                boxShadow: 'var(--nexus-shadow-sm)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--nexus-space-4)', borderBottom: '1px solid var(--nexus-surface-muted)', paddingBottom: 'var(--nexus-space-3)' }}>
                  <h2 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>
                    Requested Items ({inquiryItems.length})
                  </h2>
                  <button 
                    type="button" 
                    onClick={() => onNavigate('store')}
                    style={{ background: 'none', border: 'none', color: 'var(--nexus-brand-primary)', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}
                  >
                    + Add More Items
                  </button>
                </div>

                {inquiryItems.length === 0 ? (
                  <div style={{ padding: 'var(--nexus-space-8) 0', textAlign: 'center', backgroundColor: 'var(--nexus-surface-raised)', borderRadius: 'var(--nexus-radius-xs)' }}>
                    <p style={{ fontSize: '14px', color: 'var(--nexus-text-secondary)', marginBottom: 'var(--nexus-space-3)' }}>
                      No items added to your RFQ yet.
                    </p>
                    <button 
                      type="button" 
                      onClick={() => onNavigate('store')}
                      className="nexus-btn nexus-btn-primary"
                    >
                      Browse Catalog
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--nexus-space-4)' }}>
                    {inquiryItems.map((item, idx) => (
                      <div key={item.id + idx} style={{
                        display: 'flex',
                        gap: 'var(--nexus-space-4)',
                        paddingBottom: 'var(--nexus-space-4)',
                        borderBottom: idx === inquiryItems.length - 1 ? 'none' : '1px solid var(--nexus-surface-muted)'
                      }}>
                        <div style={{
                          width: '80px', height: '80px',
                          backgroundColor: 'var(--nexus-surface-raised)',
                          borderRadius: 'var(--nexus-radius-xs)',
                          border: '1px solid var(--nexus-surface-muted)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                          <img src={item.img} alt={item.name} style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; }} />
                        </div>
                        
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                              <h3 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 4px 0' }}>{item.name}</h3>
                              <div style={{ fontSize: '12px', color: 'var(--nexus-text-secondary)' }}>
                                Est. Price: {item.priceFormatted}
                              </div>
                            </div>
                            <button 
                              type="button" 
                              onClick={() => onRemoveItem(item.id)}
                              style={{
                                background: 'none', border: 'none', 
                                color: '#ef4444', fontSize: '12px', 
                                fontWeight: 600, cursor: 'pointer',
                                padding: '4px'
                              }}
                            >
                              Remove
                            </button>
                          </div>
                          
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px', marginTop: '12px' }}>
                            <div>
                              <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: 'var(--nexus-text-secondary)', marginBottom: '4px' }}>
                                Target Quantity (Min: {item.moq || '1'})
                              </label>
                              <input 
                                type="text" 
                                placeholder={`e.g. ${item.moq || '100'}`}
                                style={{
                                  width: '100%', padding: '8px 10px',
                                  border: '1px solid #d1d5db', borderRadius: '4px',
                                  fontSize: '13px', fontFamily: 'inherit'
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Right: Company Details Form */}
            <ScrollReveal delay={200}>
              <div style={{
                backgroundColor: 'var(--nexus-surface-strong)',
                border: '1px solid var(--nexus-surface-muted)',
                borderRadius: 'var(--nexus-radius-sm)',
                padding: 'var(--nexus-space-5)',
                boxShadow: 'var(--nexus-shadow-sm)'
              }}>
                <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: 'var(--nexus-space-4)', borderBottom: '1px solid var(--nexus-surface-muted)', paddingBottom: 'var(--nexus-space-3)' }}>
                  Company Information
                </h2>
                <style>{`
                  .nexus-inquiry-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--nexus-space-4);
                    margin-bottom: var(--nexus-space-4);
                  }
                  @media (max-width: 768px) {
                    .nexus-inquiry-grid {
                      grid-template-columns: 1fr;
                    }
                  }
                `}</style>
                <div className="nexus-inquiry-grid">
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--nexus-text-primary)', display: 'block', marginBottom: '4px' }}>
                      Company Name <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input 
                      type="text" required placeholder="PT. Maju Bersama"
                      value={formData.companyName} onChange={e => handleChange('companyName', e.target.value)}
                      style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '13px' }}
                    />
                  </div>
                  
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--nexus-text-primary)', display: 'block', marginBottom: '4px' }}>
                      Tax ID / NPWP (Optional)
                    </label>
                    <input 
                      type="text" placeholder="00.000.000.0-000.000"
                      value={formData.npwp} onChange={e => handleChange('npwp', e.target.value)}
                      style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '13px' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--nexus-text-primary)', display: 'block', marginBottom: '4px' }}>
                      Contact Person (PIC) <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input 
                      type="text" required placeholder="Full Name"
                      value={formData.picName} onChange={e => handleChange('picName', e.target.value)}
                      style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '13px' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--nexus-text-primary)', display: 'block', marginBottom: '4px' }}>
                      Industry Sector
                    </label>
                    <select 
                      value={formData.industry} onChange={e => handleChange('industry', e.target.value)}
                      style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '13px', backgroundColor: 'white' }}
                    >
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Logistics">Logistics & Warehousing</option>
                      <option value="Construction">Construction</option>
                      <option value="Retail">Retail & FMCG</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--nexus-text-primary)', display: 'block', marginBottom: '4px' }}>
                      Business Email <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input 
                      type="email" required placeholder="pic@company.com"
                      value={formData.email} onChange={e => handleChange('email', e.target.value)}
                      style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '13px' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--nexus-text-primary)', display: 'block', marginBottom: '4px' }}>
                      Phone / WhatsApp <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input 
                      type="text" required placeholder="+62 xxx"
                      value={formData.phone} onChange={e => handleChange('phone', e.target.value)}
                      style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '13px' }}
                    />
                  </div>
                  
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--nexus-text-primary)', display: 'block', marginBottom: '4px' }}>
                      Expected Delivery Date
                    </label>
                    <input 
                      type="date" 
                      value={formData.expectedDelivery} onChange={e => handleChange('expectedDelivery', e.target.value)}
                      style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '13px', fontFamily: 'inherit' }}
                    />
                  </div>

                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--nexus-text-primary)', display: 'block', marginBottom: '4px' }}>
                      Additional Notes / Shipping Address
                    </label>
                    <textarea 
                      rows={3} placeholder="Please provide your shipping area or any specific requirements..."
                      value={formData.additionalNotes} onChange={e => handleChange('additionalNotes', e.target.value)}
                      style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '13px', resize: 'vertical', fontFamily: 'inherit' }}
                    />
                  </div>
                </div>

                <div style={{
                  backgroundColor: 'var(--nexus-surface-raised)',
                  padding: 'var(--nexus-space-4)',
                  borderRadius: 'var(--nexus-radius-xs)',
                  marginTop: 'var(--nexus-space-5)',
                  border: '1px solid var(--nexus-surface-muted)'
                }}>
                  <p style={{ fontSize: '12px', color: 'var(--nexus-text-secondary)', lineHeight: 1.5, margin: '0 0 var(--nexus-space-3) 0' }}>
                    By submitting this RFQ, you agree that our sales team will contact you with a formal quotation. This is not a binding purchase contract until the quotation is approved.
                  </p>
                  <button 
                    type="submit" 
                    className="nexus-btn nexus-btn-primary"
                    disabled={inquiryItems.length === 0}
                    style={{ 
                      width: '100%', padding: '14px', fontSize: '14px',
                      opacity: inquiryItems.length === 0 ? 0.5 : 1,
                      cursor: inquiryItems.length === 0 ? 'not-allowed' : 'pointer'
                    }}
                  >
                    Submit Request for Quotation
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </form>
      </div>
    </div>
  );
}
