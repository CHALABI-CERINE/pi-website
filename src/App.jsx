import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Shared Components
import { Navigation } from './components/shared/Navigation';
import { Footer } from './components/shared/Footer';

// Pages
import Home from './pages/Home';


// Helper pour scroller en haut lors d'un changement de page
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-canvas selection:bg-accent selection:text-white">
        
        {/* Toujours en haut lors du changement de route */}
        <ScrollToTop />

        {/* Navigation persistante sur toutes les pages */}
        <Navigation />

        {/* Zone de contenu dynamique */}
        <main className="flex-grow">
          <Routes>
            {/* PAGE 1: Longue page scrollable avec 9 sections */}
            <Route path="/" element={<Home />} />

    ?
          </Routes>
        </main>

        {/* Footer persistant */}
        <Footer />

      </div>
    </Router>
  );
}

export default App; 