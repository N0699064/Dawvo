import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Rail, TopBar } from './components/Rail';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Marketplace from './pages/Marketplace';
import Suppliers from './pages/Suppliers';
import IntelligentPilot from './pages/IntelligentPilot';
import SmartCities from './pages/SmartCities';
import Distributors from './pages/Distributors';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const TITLES: Record<string, string> = {
  '/': 'Davwo Energy | The Intelligent Infrastructure Platform',
  '/about': 'About | Davwo Energy',
  '/solutions': 'Solutions | Davwo Energy',
  '/solutions/marketplace': 'Clean Energy Marketplace | Davwo Energy',
  '/solutions/suppliers': 'Suppliers | Davwo Energy',
  '/solutions/intelligent-pilot': 'Intelligent Pilot | Davwo Energy',
  '/solutions/smart-cities': 'Smart Cities & Smart Companies | Davwo Energy',
  '/distributors': 'Distributors & Partners | Davwo Energy',
  '/contact': 'Contact | Davwo Energy',
};

function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = TITLES[pathname] ?? 'Davwo Energy';
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <RouteEffects />
      <Rail />
      <div className="lg:pl-[68px] min-w-0">
        <TopBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/marketplace" element={<Marketplace />} />
            <Route path="/solutions/suppliers" element={<Suppliers />} />
            <Route path="/solutions/intelligent-pilot" element={<IntelligentPilot />} />
            <Route path="/solutions/smart-cities" element={<SmartCities />} />
            <Route path="/distributors" element={<Distributors />} />
            <Route path="/contact" element={<Contact />} />
            {/* Old URLs from the previous site */}
            <Route path="/platform-architecture" element={<Navigate to="/solutions" replace />} />
            <Route path="/programme" element={<Navigate to="/solutions" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}
