import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({ company: '', name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ backgroundColor: 'var(--dist-surface-raised)', padding: 'var(--dist-space-8) 0' }}>
        <div className="dist-container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <div style={{
            width: '64px', height: '64px', borderRadius: '50%',
            backgroundColor: '#F0FDF4', display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto var(--dist-space-4)'
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h1 style={{ fontSize: '22px', fontWeight: 700 }}>Message Sent!</h1>
          <p style={{ fontSize: '14px', color: 'var(--dist-text-secondary)', lineHeight: 1.6, marginTop: 'var(--dist-space-2)' }}>
            Thank you, <strong>{formData.name}</strong>. Our team will review your inquiry and respond within 24 business hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--dist-surface-raised)' }}>
      {/* Header */}
      <section style={{
        backgroundColor: 'var(--dist-surface-base)',
        color: 'white',
        padding: 'var(--dist-space-8) 0',
        textAlign: 'center'
      }}>
        <div className="dist-container">
          <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--dist-brand-accent)' }}>
            Contact
          </span>
          <h1 style={{ fontSize: '36px', fontWeight: 800, marginTop: 'var(--dist-space-2)', letterSpacing: '-0.5px' }}>
            Get in <span style={{ color: 'var(--dist-brand-accent)' }}>Touch</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: 'var(--dist-space-3) auto 0', lineHeight: 1.6 }}>
            Have questions about our products or pricing? Our sales team is ready to help your business.
          </p>
        </div>
      </section>

      <ScrollReveal>
        <section style={{ padding: 'var(--dist-space-8) 0' }}>
          <div className="dist-container" style={{ maxWidth: '900px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--dist-space-7)'
            }}>
              {/* Contact Info */}
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: 'var(--dist-space-5)' }}>
                  Contact Information
                </h2>

                {[
                  { label: 'Head Office', value: 'Jl. Raya Industri No. 88, Surabaya 60175, East Java, Indonesia', icon: '📍' },
                  { label: 'Phone', value: '+62 31 8888 7777', icon: '📞' },
                  { label: 'Email', value: 'sales@nexusdistribution.co.id', icon: '✉️' },
                  { label: 'Business Hours', value: 'Mon - Fri: 08:00 - 17:00 WIB\nSat: 08:00 - 12:00 WIB', icon: '🕐' }
                ].map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex', gap: 'var(--dist-space-3)',
                    marginBottom: 'var(--dist-space-4)',
                    paddingBottom: 'var(--dist-space-4)',
                    borderBottom: '1px solid var(--dist-surface-muted)'
                  }}>
                    <span style={{ fontSize: '20px' }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--dist-text-primary)', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: '13px', color: 'var(--dist-text-secondary)', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Form */}
              <div style={{
                backgroundColor: 'var(--dist-surface-strong)',
                border: '1px solid var(--dist-surface-muted)',
                borderRadius: 'var(--dist-radius-sm)',
                padding: 'var(--dist-space-5)',
                boxShadow: 'var(--dist-shadow-md)'
              }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: 'var(--dist-space-4)' }}>
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--dist-space-3)' }}>
                  {[
                    { field: 'company', label: 'Company Name', type: 'text', placeholder: 'Your company name', required: true },
                    { field: 'name', label: 'Contact Person', type: 'text', placeholder: 'Full name', required: true },
                    { field: 'email', label: 'Email', type: 'email', placeholder: 'business@company.com', required: true },
                    { field: 'phone', label: 'Phone', type: 'text', placeholder: '+62 xxx xxxx xxxx', required: true }
                  ].map(f => (
                    <div key={f.field}>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--dist-text-primary)', display: 'block', marginBottom: '4px' }}>
                        {f.label} {f.required && <span style={{ color: '#ef4444' }}>*</span>}
                      </label>
                      <input
                        type={f.type}
                        required={f.required}
                        placeholder={f.placeholder}
                        value={formData[f.field]}
                        onChange={(e) => handleChange(f.field, e.target.value)}
                        style={{
                          width: '100%', padding: '10px 12px',
                          border: '1px solid #d1d5db', borderRadius: '6px',
                          fontFamily: 'inherit', fontSize: '14px', outline: 'none'
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--dist-text-primary)', display: 'block', marginBottom: '4px' }}>
                      Message <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can we help your business?"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      style={{
                        width: '100%', padding: '10px 12px',
                        border: '1px solid #d1d5db', borderRadius: '6px',
                        fontFamily: 'inherit', fontSize: '14px', outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="dist-btn dist-btn-primary"
                    style={{ width: '100%', padding: '12px', fontSize: '14px', marginTop: 'var(--dist-space-2)' }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
