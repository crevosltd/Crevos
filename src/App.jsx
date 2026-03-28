import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FineArts from './components/FineArts';
import Training from './components/Training';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // GSAP ScrollTrigger registration will be handled in components where needed
  }, []);

  return (
    <div className="bg-dark text-light antialiased selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Noise Overlay */}
      <div className="noise fixed inset-0 pointer-events-none z-50 opacity-[0.03]" />

      <Navbar />
      <Hero />
      <Services />
      <FineArts />
      <Training />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;