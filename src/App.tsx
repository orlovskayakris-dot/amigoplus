import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ElectroPage } from './pages/ElectroPage';
import { RollerPage } from './pages/RollerPage';
import { BlindsPage } from './pages/BlindsPage';
import { PleatsPage } from './pages/PleatsPage';
import { MetalPage } from './pages/MetalPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll to top or to anchor on route change
function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        // Small delay to allow layout to stabilize
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      // Force scroll to top immediately and with a small backup delay
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/electro" element={<ElectroPage />} />
        <Route path="/roller" element={<RollerPage />} />
        <Route path="/blinds" element={<BlindsPage />} />
        <Route path="/pleats" element={<PleatsPage />} />
        <Route path="/metal" element={<MetalPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
