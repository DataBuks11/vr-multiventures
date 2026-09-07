import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BrandPositioning from './components/BrandPositioning';
import ServicesSection from './components/ServicesSection';
import PartnerSection from './components/PartnerSection';
import ProcessSection from './components/ProcessSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-root" style={{ minHeight: '100vh', backgroundColor: '#000000' }}>
      <Navbar />
      <main>
        <HeroSection />
        <div id="sectors">
          <BrandPositioning />
        </div>
        <ServicesSection />
        <PartnerSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
