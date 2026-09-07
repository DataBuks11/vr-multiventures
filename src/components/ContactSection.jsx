import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Mail, Phone, MapPin, RefreshCw } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
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
    setFormData({ name: '', company: '', contact: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="editorial-section"
      style={{
        backgroundColor: '#000000',
        borderBottom: '1px solid var(--border-hairline)',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '4rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left Column: Context & Direct Contact Placeholders */}
          <div>
            <span className="editorial-label" style={{ color: 'var(--accent-orange)', marginBottom: '1rem' }}>
              ENGAGEMENT & DISPATCH
            </span>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                fontWeight: 300,
                lineHeight: 1.08,
                color: '#ffffff',
                letterSpacing: '-0.025em',
                marginBottom: '1.25rem',
              }}
            >
              Let's move what matters.
            </h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                marginBottom: '3rem',
                fontWeight: 300,
              }}
            >
              Have a logistics requirement? Let's connect.
            </p>

            {/* Clearly Marked Placeholders */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '2px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-orange)',
                    backgroundColor: 'rgba(255, 85, 0, 0.05)',
                  }}
                >
                  <Phone size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                    Direct Operational Line
                  </div>
                  <div style={{ fontSize: '1.05rem', color: '#ffffff', marginTop: '0.2rem' }}>
                    +91 [Direct Line Placeholder]
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '2px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-orange)',
                    backgroundColor: 'rgba(255, 85, 0, 0.05)',
                  }}
                >
                  <Mail size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                    Logistics Coordination Email
                  </div>
                  <div style={{ fontSize: '1.05rem', color: '#ffffff', marginTop: '0.2rem' }}>
                    ops@vrmultiventures.com [Placeholder]
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '2px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-orange)',
                    backgroundColor: 'rgba(255, 85, 0, 0.05)',
                  }}
                >
                  <MapPin size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                    Regional Logistics Base
                  </div>
                  <div style={{ fontSize: '1.05rem', color: '#ffffff', marginTop: '0.2rem' }}>
                    Regional Infrastructure Hub, India [Placeholder]
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Editorial Form */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-hairline)',
              padding: '2.5rem',
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
                  animation: 'fadeIn 0.4s ease',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
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
                  <CheckCircle size={28} />
                </div>
                <h3 style={{ fontSize: '1.75rem', color: '#ffffff', fontWeight: 300, marginBottom: '0.75rem' }}>
                  Requirement Received
                </h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', marginBottom: '2rem', fontSize: '0.95rem' }}>
                  Thank you, <strong style={{ color: '#ffffff' }}>{formData.name || 'Partner'}</strong>. Your logistics dispatch query has been recorded. Our coordination team will follow up promptly.
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
                    padding: '0.6rem 1.25rem',
                    border: '1px solid rgba(255, 85, 0, 0.3)',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                  }}
                >
                  <RefreshCw size={14} />
                  Submit Another Query
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="form-two-col">
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        color: 'var(--text-muted)',
                        marginBottom: '0.5rem',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-orange)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        color: 'var(--text-muted)',
                        marginBottom: '0.5rem',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="e.g. Telecom Infra Corp"
                      value={formData.company}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-orange)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: 'var(--text-muted)',
                      marginBottom: '0.5rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    Phone / Email Contact *
                  </label>
                  <input
                    type="text"
                    name="contact"
                    required
                    placeholder="e.g. +91 98765 43210 or contact@domain.com"
                    value={formData.contact}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-orange)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: 'var(--text-muted)',
                      marginBottom: '0.5rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    Requirement Details / Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Describe pickup location, destination, cargo nature (e.g. tower components, equipment weight), or operational timeframe..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-orange)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
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
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 20px rgba(255, 85, 0, 0.3)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-orange-hover)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-orange)')}
                >
                  {submitting ? 'Submitting...' : 'Transmit Inquiry'}
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .form-two-col {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
