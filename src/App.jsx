import { ReactLenis } from 'lenis/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navigation/Navbar';
import { Home } from './pages/Home';
import { Security } from './pages/Security';
import { Quiz } from './pages/Quiz';

import { Footer } from './components/Navigation/Footer';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

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
      <ScrollToTop />
      <ReactLenis root>
        <div className="min-h-screen relative overflow-x-hidden text-white font-sans selection:bg-brand-indigo/30 selection:text-white">
          {/* Global Background Star Effects */}
          <div className="stars" />
          <div className="stars-2" />

          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/security" element={<Security />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </ReactLenis>
    </Router>
  );
}

export default App;
