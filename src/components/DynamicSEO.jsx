import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeMetadata = {
  '/': {
    title: 'VR Multiventures — Telecom Infrastructure Logistics & Mobile Tower Transportation',
    description: 'VR Multiventures provides dependable heavy logistics and telecom infrastructure transportation across Nagpur, Vidarbha, and Central India.',
  },
  '/about': {
    title: 'About Enterprise — VR Multiventures',
    description: 'Discover VR Multiventures: specialized telecom infrastructure haulage, mission-critical logistics, and precision fleet coordination.',
  },
  '/services': {
    title: 'Specialized Services — Mobile Tower Haulage & Telecom Freight',
    description: 'Explore our specialized services including mobile tower parts transport, heavy infrastructure dispatch, and secure electronics handling.',
  },
  '/sectors': {
    title: 'Operating Sectors — Telecom Infrastructure & Heavy Corridors',
    description: 'Powering cellular network rollout, microwave link transit, and rural telecom expansion across Maharashtra & Central India.',
  },
  '/partner': {
    title: 'Enterprise Partnership & Network Ecosystem — VR Multiventures',
    description: 'Partner with VR Multiventures for dedicated corridor telemetry, long-term contractor SLAs, and dependable fleet execution.',
  },
  '/process': {
    title: 'Operational Process & Precision Protocol — VR Multiventures',
    description: 'Our five-stage logistics protocol: Route Survey, Dunnage Engineering, Secure Lashing, Real-Time Telemetry, and Site Handover POD.',
  },
  '/contact': {
    title: 'Contact Dispatch Desk — VR Multiventures Nagpur',
    description: 'Reach our 24/7 central dispatch desk at 42, Solanki Patil wadi, Nagpur. Phone: +91 8668406011. Email: vrmultiventures@gmail.com.',
  },
};

export default function DynamicSEO() {
  const location = useLocation();

  useEffect(() => {
    const meta = routeMetadata[location.pathname] || routeMetadata['/'];
    
    // Update document title dynamically
    document.title = meta.title;

    // Update meta description dynamically
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', meta.description);
    }

    // Update OpenGraph Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', meta.title);
    }
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', meta.description);
    }

    // Update Canonical URL
    const canonicalUrl = `https://vr-multiventures.vercel.app${location.pathname === '/' ? '' : location.pathname}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', canonicalUrl);
    }
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    }

    // Scroll to top smoothly on route change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return null;
}
