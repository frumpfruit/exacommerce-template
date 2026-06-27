import React, { useState } from 'react';
import { MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formState.name.trim()) errors.name = 'Full name is required';
    if (!formState.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formState.message.trim()) errors.message = 'Message cannot be empty';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormSubmitted(true);
    setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
    
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="supp-section supp-container">
      <div className="supp-contact-grid">
        <div className="supp-contact-info">
          <div className="supp-section-subtitle">Get In Touch</div>
          <h2 className="supp-section-title">
            Ready to Upgrade <br />
            <span className="supp-heading-yellow">Your Wellness Plan?</span>
          </h2>
          <p style={{ color: 'rgba(33, 37, 41, 0.75)', fontSize: '15px', lineHeight: '1.6' }}>
            Konsultasikan kebutuhan nutrisi tubuh Anda secara gratis dengan tim ahli gizi kami, 
            atau tanyakan langsung mengenai detail kemitraan distribusi toko di kota Anda.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
            <div className="supp-contact-item">
              <div className="supp-contact-icon"><MapPin size={20} /></div>
              <div className="supp-contact-detail">
                <h4>Headquarter Office</h4>
                <p>Grand Slipi Tower Lt. 32, Slipi, Jakarta Barat, DKI Jakarta, 11480</p>
              </div>
            </div>

            <div className="supp-contact-item">
              <div className="supp-contact-icon"><Mail size={20} /></div>
              <div className="supp-contact-detail">
                <h4>Email Support</h4>
                <p>care@nutripride.co.id / partnership@nutripride.co.id</p>
              </div>
            </div>

            <div className="supp-contact-item">
              <div className="supp-contact-icon"><Phone size={20} /></div>
              <div className="supp-contact-detail">
                <h4>WhatsApp & Hotline</h4>
                <p>+62 812-3456-7890 (Toll Free Hotline)</p>
              </div>
            </div>
          </div>

          {/* Simulated Map Embed */}
          <div className="supp-map-placeholder">
            <MapPin size={32} style={{ color: 'var(--supp-surface-raised)' }} />
            <span style={{ fontSize: '13px', fontWeight: 600 }}>Grand Slipi Tower Slipi, Jakarta Barat</span>
            <span style={{ fontSize: '11px', opacity: 0.6 }}>Interactive Map Embed Interface Ready</span>
          </div>
        </div>

        <div>
          <form className="supp-form" onSubmit={handleFormSubmit} noValidate>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--supp-surface-raised)', marginBottom: '5px' }}>
              Consultation Request Form
            </h3>
            
            {formSubmitted && (
              <div className="supp-alert supp-alert-success">
                <CheckCircle2 size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                Thank you! Your message has been sent. Our nutritionist will contact you within 24 hours.
              </div>
            )}

            <div className="supp-form-group">
              <label className="supp-form-label" htmlFor="name">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formState.name} 
                onChange={handleInputChange} 
                className="supp-form-input" 
                placeholder="e.g. John Doe"
              />
              {formErrors.name && <span style={{ color: '#ef4444', fontSize: '12px' }}>{formErrors.name}</span>}
            </div>

            <div className="supp-form-group">
              <label className="supp-form-label" htmlFor="email">Email Address *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formState.email} 
                onChange={handleInputChange} 
                className="supp-form-input" 
                placeholder="e.g. john@domain.com"
              />
              {formErrors.email && <span style={{ color: '#ef4444', fontSize: '12px' }}>{formErrors.email}</span>}
            </div>

            <div className="supp-form-group">
              <label className="supp-form-label" htmlFor="phone">Phone Number (WhatsApp)</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formState.phone} 
                onChange={handleInputChange} 
                className="supp-form-input" 
                placeholder="e.g. 08123456789"
              />
            </div>

            <div className="supp-form-group">
              <label className="supp-form-label" htmlFor="subject">Subject Topic</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formState.subject} 
                onChange={handleInputChange} 
                className="supp-form-input" 
                placeholder="Diet consultation / Partnership / General inquiry"
              />
            </div>

            <div className="supp-form-group">
              <label className="supp-form-label" htmlFor="message">Message *</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                value={formState.message} 
                onChange={handleInputChange} 
                className="supp-form-input" 
                placeholder="Tell us about your diet history or questions..."
                style={{ resize: 'vertical', minHeight: '100px' }}
              />
              {formErrors.message && <span style={{ color: '#ef4444', fontSize: '12px' }}>{formErrors.message}</span>}
            </div>

            <button type="submit" className="supp-btn supp-btn-primary" style={{ width: '100%', marginTop: '10px' }}>
              Submit Consultation Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
