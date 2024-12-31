import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/layout/Navigation';
import { Dashboard } from './components/layout/Dashboard';
import { About } from './pages/About';
import { FAQ } from './pages/FAQ';
import { Footer } from './components/layout/Footer';
import { CookieBanner } from './components/cookies/CookieBanner';
import { useCookieConsent } from './hooks/useCookieConsent';

export default function App() {
  const { showBanner, acceptAll, acceptSelected, rejectAll } = useCookieConsent();

  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
        {showBanner && (
          <CookieBanner
            onAcceptAll={acceptAll}
            onAcceptSelected={acceptSelected}
            onRejectAll={rejectAll}
          />
        )}
      </div>
    </Router>
  );
}