import React, { useEffect, createContext, useContext, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export const LenisContext = createContext(null);
export const useLenis = () => useContext(LenisContext);

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Detect mobile touch devices
    const isTouchDevice =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    // Initialize Lenis with desktop and mobile optimizations
    const lenis = new Lenis({
      duration: isTouchDevice ? 0.95 : 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: isTouchDevice ? 1.5 : 1.0,
      infinite: false,
      autoResize: true,
    });

    lenisRef.current = lenis;
    window.lenis = lenis;

    // Listen to scroll events for real-time progress bar and scroll-driven effects
    lenis.on('scroll', ({ progress }) => {
      setScrollProgress(progress);
    });

    // RAF loop
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global anchor click handler for smooth scrolling
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el, { offset: -75, duration: 1.2 });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  // Route change handling: instantly scroll to top with Lenis
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // Observe newly rendered elements on route change for scroll reveal
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.08,
        }
      );

      const revealElements = document.querySelectorAll(
        '.liquid-glass-card, .reveal-on-scroll'
      );
      revealElements.forEach((el) => observer.observe(el));
    }, 80);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {/* Global Scroll Progress Bar (Mobile & Laptop) */}
      <div
        className="global-scroll-progress"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '2.5px',
          width: `${Math.min(100, Math.max(0, scrollProgress * 100))}%`,
          background: 'linear-gradient(90deg, #ff5500, #ff8800)',
          zIndex: 9999,
          boxShadow: '0 0 12px rgba(255, 85, 0, 0.9)',
          transition: 'width 0.08s linear',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Floating Scroll-to-Top Button (Mobile & Desktop) */}
      {scrollProgress > 0.12 && (
        <button
          onClick={() => lenisRef.current?.scrollTo(0, { duration: 1.2 })}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'rgba(10, 10, 14, 0.85)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 85, 0, 0.5)',
            color: 'var(--accent-orange)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 90,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 85, 0, 0.25)',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--accent-orange)';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(10, 10, 14, 0.85)';
            e.currentTarget.style.color = 'var(--accent-orange)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          aria-label="Scroll to top"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </button>
      )}

      {children}
    </LenisContext.Provider>
  );
}
