import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--vivere-surface-raised)', padding: 'var(--vivere-space-10) 0' }}>
      <div className="vivere-container">
        {/* Editorial Heading */}
        <ScrollReveal>
          <span style={{
            display: 'block',
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: 'var(--vivere-text-secondary)',
            textAlign: 'center',
            marginBottom: 'var(--vivere-space-3)'
          }}>
            GET IN TOUCH
          </span>
          <h1 className="vivere-heading" style={{ textAlign: 'center', fontSize: 'var(--vivere-text-xl)', marginBottom: 'var(--vivere-space-9)' }}>
            Contact <span style={{ color: 'var(--vivere-border-strong)' }}>HAVEN</span>
          </h1>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--vivere-space-9)'
        }}>
          {/* Left panel: Info */}
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-7)' }}>
              <div>
                <h2 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: 'var(--vivere-space-4)',
                  color: 'var(--vivere-text-primary)'
                }}>
                  Flagship <span style={{ color: 'var(--vivere-border-strong)' }}>Showroom</span>
                </h2>
                <p style={{ fontSize: 'var(--vivere-text-md)', color: 'var(--vivere-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Jl. Senopati No. 84,<br />
                  Kebayoran Baru, Jakarta Selatan,<br />
                  12190, Indonesia
                </p>
              </div>

              <div>
                <h2 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: 'var(--vivere-space-4)',
                  color: 'var(--vivere-text-primary)'
                }}>
                  Showroom Desk & <span style={{ color: 'var(--vivere-border-strong)' }}>Advisory</span>
                </h2>
                <p style={{ fontSize: 'var(--vivere-text-md)', color: 'var(--vivere-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  <strong>General Email:</strong> hello@havenhome.com<br />
                  <strong>Design Advisory:</strong> showroom@havenhome.com<br />
                  <strong>Phone / WA:</strong> +62 812-3456-7890
                </p>
              </div>

              {/* Google Map Mockup */}
              <div style={{
                height: '220px',
                backgroundColor: 'var(--vivere-surface-muted)',
                border: '1px solid var(--vivere-surface-muted)',
                borderRadius: 'var(--vivere-radius-xs)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Map Graphics */}
                <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" style={{ position: 'absolute', top: 0, left: 0 }}>
                  <rect width="300" height="200" fill="#ebebeb" />
                  <path d="M0 40 H 300 M0 110 H 300 M0 160 H 300 M50 0 V 200 M180 0 V 200 M240 0 V 200" stroke="#dcdcdc" strokeWidth="2" />
                  <path d="M80 0 L 160 200 M0 80 L 300 120" stroke="#cfcfcf" strokeWidth="4" />
                  <circle cx="180" cy="110" r="16" fill="var(--vivere-border-strong)" fillOpacity="0.15" />
                  <circle cx="180" cy="110" r="6" fill="var(--vivere-border-strong)" />
                </svg>
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  padding: 'var(--vivere-space-2) var(--vivere-space-4)',
                  border: '1px solid var(--vivere-border-strong)',
                  fontSize: '11px',
                  fontWeight: 600,
                  borderRadius: '2px',
                  color: 'var(--vivere-text-primary)'
                }}>
                  Senopati Showroom, Jakarta
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right panel: Contact Form */}
          <ScrollReveal delay={150}>
            <div style={{
              backgroundColor: 'var(--vivere-surface-strong)',
              border: '1px solid var(--vivere-surface-muted)',
              borderRadius: 'var(--vivere-radius-xs)',
              padding: 'var(--vivere-space-7) var(--vivere-space-7)',
              boxShadow: 'var(--vivere-shadow-1)'
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: 'var(--vivere-space-8) 0' }}>
                  <span style={{ fontSize: '48px', display: 'block', marginBottom: 'var(--vivere-space-4)' }}>📩</span>
                  <h3 style={{ fontSize: 'var(--vivere-text-lg)', fontWeight: 700, textTransform: 'uppercase', marginBottom: 'var(--vivere-space-3)' }}>Message Submitted</h3>
                  <p style={{ fontSize: 'var(--vivere-text-sm)', color: 'var(--vivere-text-secondary)', lineHeight: 1.6, marginBottom: 'var(--vivere-space-6)' }}>
                    Thank you for contacting HAVEN. A member of our design team will respond to your inquiry at <strong>{formData.email}</strong> within 24 hours.
                  </p>
                  <button 
                    className="vivere-btn vivere-btn-primary" 
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-5)' }}>
                  <h2 style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: 'var(--vivere-space-2)',
                    color: 'var(--vivere-text-primary)'
                  }}>
                    Send Us A <span style={{ color: 'var(--vivere-border-strong)' }}>Message</span>
                  </h2>
                  <p style={{ fontSize: '12px', color: 'var(--vivere-text-secondary)', margin: '0 0 var(--vivere-space-3)' }}>
                    Have questions about our collections, customized furniture, or shipping? Leave a message below.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-1)' }}>
                    <label style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--vivere-text-secondary)' }}>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name} 
                      onChange={e => setFormData({ ...formData, name: e.target.value })} 
                      style={{
                        padding: 'var(--vivere-space-4)',
                        border: '1px solid var(--vivere-surface-muted)',
                        borderRadius: 'var(--vivere-radius-xs)',
                        fontFamily: 'inherit',
                        fontSize: 'var(--vivere-text-sm)'
                      }} 
                      placeholder="E.g. Jane Doe"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-1)' }}>
                    <label style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--vivere-text-secondary)' }}>Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email} 
                      onChange={e => setFormData({ ...formData, email: e.target.value })} 
                      style={{
                        padding: 'var(--vivere-space-4)',
                        border: '1px solid var(--vivere-surface-muted)',
                        borderRadius: 'var(--vivere-radius-xs)',
                        fontFamily: 'inherit',
                        fontSize: 'var(--vivere-text-sm)'
                      }} 
                      placeholder="E.g. jane@example.com"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-1)' }}>
                    <label style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--vivere-text-secondary)' }}>Subject</label>
                    <input 
                      type="text" 
                      value={formData.subject} 
                      onChange={e => setFormData({ ...formData, subject: e.target.value })} 
                      style={{
                        padding: 'var(--vivere-space-4)',
                        border: '1px solid var(--vivere-surface-muted)',
                        borderRadius: 'var(--vivere-radius-xs)',
                        fontFamily: 'inherit',
                        fontSize: 'var(--vivere-text-sm)'
                      }} 
                      placeholder="E.g. Custom Dining Table Inquiry"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-1)' }}>
                    <label style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--vivere-text-secondary)' }}>Message *</label>
                    <textarea 
                      required 
                      rows={4}
                      value={formData.message} 
                      onChange={e => setFormData({ ...formData, message: e.target.value })} 
                      style={{
                        padding: 'var(--vivere-space-4)',
                        border: '1px solid var(--vivere-surface-muted)',
                        borderRadius: 'var(--vivere-radius-xs)',
                        fontFamily: 'inherit',
                        fontSize: 'var(--vivere-text-sm)',
                        resize: 'vertical'
                      }} 
                      placeholder="Tuliskan pesan Anda..."
                    />
                  </div>

                  <button type="submit" className="vivere-btn vivere-btn-primary" style={{ marginTop: 'var(--vivere-space-3)' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
