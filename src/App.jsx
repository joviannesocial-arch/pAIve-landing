import { ReactLenis } from 'lenis/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navigation/Navbar';
import { Home } from './pages/Home';
import { Security } from './pages/Security';
import { Quiz } from './pages/Quiz';

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
            </Routes>
          </main>

          <footer className="py-8 text-center text-gray-400 text-sm border-t border-white/5 bg-space-black/80 backdrop-blur-md relative z-10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <div>&copy; 2026 pAIve Inc. All rights reserved.</div>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="https://x.com/paiveapp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
              </div>
            </div>
          </footer>
        </div>
      </ReactLenis>
    </Router>
  );
}

export default App;
