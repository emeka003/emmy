import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Itinerary } from './pages/Itinerary';
import { Episodes } from './pages/Episodes';
import { Sponsors } from './pages/Sponsors';
import { Gallery } from './pages/Gallery';
import { GetInvolved } from './pages/GetInvolved';
import { Contact } from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/itinerary" element={<Itinerary />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;