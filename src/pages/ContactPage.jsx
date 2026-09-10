import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, RefreshCw, HelpCircle, Clock, ChevronRight } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
    serviceType: 'Mobile Tower Parts Transportation',
    urgency: 'Scheduled Project Window',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      contact: '',
      serviceType: 'Mobile Tower Parts Transportation',
      urgency: 'Scheduled Project Window',
      message: '',
    });
    setSubmitted(false);
  };

  const faqs = [
    {
      q: 'What types of cellular tower components do you transport?',
      a: 'We transport all structural lattice segments, tubular poles, headframes, antenna mounting brackets, BTS cabinets, power banks, waveguide trays, and related site equipment.',
    },
    {
      q: 'How are sensitive telecommunication electronics protected during transit?',
      a: 'We use high-density vibration-dampening dunnage, multi-point heavy duty ratchets, waterproof tarpaulins, and air-ride suspension vehicles when required by client specifications.',
    },
    {
      q: 'Can you coordinate deliveries directly to remote or high-altitude sites?',
      a: 'Yes. Our teams conduct pre-dispatch access surveys and deploy specialized fleet configurations suitable for unpaved, winding, or high-elevation site approaches.',
    },
    {
      q: 'What proof of delivery is provided upon site handover?',
      a: 'We provide itemized serial number verification, photographic confirmation of cargo condition, and digital e-POD sign-offs signed by authorized site installation engineers.',
    },
  ];

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 1.5rem)', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      
      {/* 1. Page Header with Breadcrumb to Home */}
      <section className="editorial-section" style={{ paddingBottom: '2.5rem', paddingTop: '2rem' }}>
        <div className="container">
          <div className="editorial-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={12} />
            <span style={{ color: '#ffffff' }}>Dispatch & Inquiries</span>
          </div>

          <div style={{ maxWidth: '880px' }}>
            <span className="editorial-label" style={{ marginBottom: '1rem' }}>
              DISPATCH & INQUIRIES
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: '#ffffff',
                letterSpacing: '-0.025em',
                marginBottom: '1.75rem',
              }}
            >
              Let's move what matters.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>
              Have a logistics requirement or cellular tower parts dispatch scheduled? Connect with our dedicated operations team.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Form & Channels (Liquid Glass Panel) */}
      <section className="editorial-section" style={{ paddingTop: '1rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div
            className="liquid-glass"
            style={{
              padding: '3.5rem 3rem',
              borderRadius: '2px',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '4.5rem',
              alignItems: 'start',
            }}
            className="contact-main-grid"
          >
            
            {/* Left Column: Direct Operations Details */}
            <div>
              <span className="editorial-label" style={{ marginBottom: '1rem' }}>
                DIRECT COORDINATION
              </span>
              <h2 style={{ fontSize: '2.25rem', color: '#ffffff', fontWeight: 300, marginBottom: '1.5rem', lineHeight: 1.2 }}>
                Central Operations Desk
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2.5rem' }}>
                For emergency site dispatches, scheduled project rollouts, or contract inquiries, our dispatch desk provides continuous operational support.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '2px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-orange)',
                      backgroundColor: 'rgba(255, 85, 0, 0.05)',
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                      Operational Line
                    </div>
                    <div style={{ fontSize: '1.15rem', color: '#ffffff', marginTop: '0.2rem', fontWeight: 400 }}>
                      <a href="tel:+918668406011" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-orange)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>
                        +91 8668406011
                      </a>
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      Mon - Sat: 08:00 - 20:00 IST
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '2px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-orange)',
                      backgroundColor: 'rgba(255, 85, 0, 0.05)',
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                      Dispatch Inquiries
                    </div>
                    <div style={{ fontSize: '1.15rem', color: '#ffffff', marginTop: '0.2rem', fontWeight: 400 }}>
                      ops@vrmultiventures.com
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      Response within 2 business hours
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '2px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-orange)',
                      backgroundColor: 'rgba(255, 85, 0, 0.05)',
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                      Registered Office & Hub
                    </div>
                    <div style={{ fontSize: '1.05rem', color: '#ffffff', marginTop: '0.2rem', fontWeight: 400, lineHeight: 1.5 }}>
                      42, Solanki Patil wadi, Bidipeth road, Near Sakkardara talao, Nagpur
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Full Enterprise Inquiry Form (Liquid Glass Card) */}
            <div
              className="liquid-glass-card"
              style={{
                padding: '2.5rem',
                borderRadius: '2px',
                position: 'relative',
              }}
            >
              {submitted ? (
                <div
                  style={{
                    padding: '3rem 1rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10b981',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <CheckCircle size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.85rem', color: '#ffffff', fontWeight: 300, marginBottom: '0.75rem' }}>
                    Requirement Registered
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', maxWidth: '440px', marginBottom: '2rem', fontSize: '1rem', lineHeight: 1.6 }}>
                    Thank you, <strong style={{ color: '#ffffff' }}>{formData.name || 'Partner'}</strong>. Your dispatch requirement has been logged. Our logistics team will review vehicle allocation and route requirements and reach out to you shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.8125rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-orange)',
                      padding: '0.65rem 1.5rem',
                      border: '1px solid rgba(255, 85, 0, 0.35)',
                      backgroundColor: 'transparent',
                    }}
                  >
                    <RefreshCw size={14} />
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="form-two-col">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Ramesh Sharma"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.85rem 1rem', backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                        Company / Contractor *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        placeholder="e.g. Telecom Infra Corp"
                        value={formData.company}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.85rem 1rem', backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="form-two-col">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                        Phone / Email *
                      </label>
                      <input
                        type="text"
                        name="contact"
                        required
                        placeholder="+91 8668406011 or your email"
                        value={formData.contact}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.85rem 1rem', backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                        Service Required *
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.85rem 1rem', backgroundColor: 'rgba(0,0,0,0.85)', border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', outline: 'none' }}
                      >
                        <option value="Mobile Tower Parts Transportation">Mobile Tower Parts Transportation</option>
                        <option value="Telecom Infrastructure Logistics">Telecom Infrastructure Logistics</option>
                        <option value="Local Pickup & Delivery Coordination">Local Pickup & Delivery Coordination</option>
                        <option value="Secure Component Handling">Secure Component Handling</option>
                        <option value="Dedicated Route Logistics">Dedicated Route Logistics</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                      Requirement Details & Locations *
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      required
                      placeholder="Specify pickup depot, site destination, cargo type (e.g. lattice sections, monopole), weight, or scheduled site crane window..."
                      value={formData.message}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.85rem 1rem', backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', outline: 'none', resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      backgroundColor: 'var(--accent-orange)',
                      color: '#ffffff',
                      padding: '1rem 2rem',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.75rem',
                      cursor: submitting ? 'wait' : 'pointer',
                      boxShadow: '0 4px 20px rgba(255, 85, 0, 0.3)',
                    }}
                  >
                    {submitting ? 'Registering...' : 'Transmit Requirement'}
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <style>{`
          @media (min-width: 860px) {
            .contact-main-grid {
              grid-template-columns: 1fr 1.25fr !important;
            }
            .form-two-col {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* 3. Contractor FAQs (Liquid Glass Cards) */}
      <section className="editorial-section" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div style={{ marginBottom: '3.5rem', maxWidth: '720px' }}>
            <span className="editorial-label" style={{ marginBottom: '0.75rem' }}>
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#ffffff', fontWeight: 300 }}>
              Operational Clarifications
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="liquid-glass-card"
                style={{
                  padding: '2rem',
                  borderRadius: '2px',
                }}
              >
                <h4 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 400, marginBottom: '0.75rem' }}>
                  {faq.q}
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
