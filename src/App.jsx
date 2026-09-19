import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import SmoothScroll from './components/SmoothScroll';
import BackgroundVideo from './components/BackgroundVideo';
import LiveTelemetryBar from './components/LiveTelemetryBar';
import DynamicSEO from './components/DynamicSEO';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SectorsPage from './pages/SectorsPage';
import PartnerPage from './pages/PartnerPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* Dynamic SEO Engine: updates page titles, meta descriptions, and canonical URLs on every route change */}
        <DynamicSEO />
        
        <SmoothScroll>
          <div
            className="app-root"
            style={{
              minHeight: '100vh',
              backgroundColor: 'transparent',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Global Background Video running smoothly behind all glass sections */}
            <BackgroundVideo />

            {/* Dynamic Real-Time Fleet & Corridor Telemetry Bar */}
            <LiveTelemetryBar />

            {/* Global Liquid Glass Navbar */}
            <Navbar />

            {/* Main Content with Route Views */}
            <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/sectors" element={<SectorsPage />} />
                <Route path="/partner" element={<PartnerPage />} />
                <Route path="/process" element={<ProcessPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>

            {/* Global Liquid Glass Footer */}
            <Footer />
          </div>
        </SmoothScroll>
      </BrowserRouter>
    </ThemeProvider>
  );
}
