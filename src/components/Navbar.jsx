import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Sectors', href: '#sectors' },
    { name: 'Partner', href: '#partner' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center',
        borderBottom: scrolled ? '1px solid var(--border-hairline)' : '1px solid transparent',
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.88)' : 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Approved Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '42px',
          }}
          aria-label="VR Multiventures Home"
        >
          <img
            src={logoImg}
            alt="VR Multiventures."
            style={{
              height: '34px',
              width: 'auto',
              display: 'block',
              objectFit: 'contain',
            }}
          />
        </a>

        {/* Desktop Editorial Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2.5rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.8125rem',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                position: 'relative',
                padding: '0.5rem 0',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Status / Action */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.5rem',
          }}
          className="desktop-actions"
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                boxShadow: '0 0 8px #10b981',
                display: 'inline-block',
              }}
            />
            Logistics Active
          </div>

          <a
            href="#contact"
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#ffffff',
              padding: '0.55rem 1.15rem',
              border: '1px solid var(--border-strong)',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-orange)';
              e.currentTarget.style.color = 'var(--accent-orange)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-strong)';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            Inquire
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            padding: '0.5rem',
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            bottom: 0,
            height: 'calc(100vh - var(--header-height))',
            backgroundColor: 'rgba(0, 0, 0, 0.96)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2.5rem 1.5rem',
            borderTop: '1px solid var(--border-hairline)',
            zIndex: 99,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <span className="editorial-label-muted">Navigation Menu</span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '1.5rem',
                  fontFamily: 'var(--font-heading)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {link.name}
                <ArrowUpRight size={18} color="var(--accent-orange)" />
              </a>
            ))}
          </div>

          <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '1.5rem' }}>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              VR Multiventures · Infrastructure Transportation
            </p>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Moving infrastructure. Connecting possibilities.
            </p>
          </div>
        </div>
      )}

      {/* Media Query Styles for Desktop/Mobile view */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
