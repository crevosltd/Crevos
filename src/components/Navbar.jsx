import { useState } from 'react';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav id="navbar" className="fixed w-full z-40 transition-all duration-300 top-0">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="font-display text-2xl font-bold tracking-tighter text-white group">
            CREVOS<span className="text-primary group-hover:text-secondary transition-colors">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#arts" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Arts & Crafts</a>
            <a href="#training" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Training</a>
            <a href="#contact" className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-full transition-all hover:scale-105">
              Get in Touch
            </a>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileOpen ? 'block' : 'hidden'} md:hidden bg-dark/95 backdrop-blur-lg border-t border-white/10`}>
        <div className="px-6 py-4 space-y-4">
          <a href="#services" className="block text-gray-300 hover:text-white" onClick={() => setIsMobileOpen(false)}>Services</a>
          <a href="#about" className="block text-gray-300 hover:text-white" onClick={() => setIsMobileOpen(false)}>About</a>
          <a href="#arts" className="block text-gray-300 hover:text-white" onClick={() => setIsMobileOpen(false)}>Arts & Crafts</a>
          <a href="#training" className="block text-gray-300 hover:text-white" onClick={() => setIsMobileOpen(false)}>Training</a>
          <a href="#contact" className="block text-primary font-medium" onClick={() => setIsMobileOpen(false)}>Get in Touch</a>
        </div>
      </div>
    </nav>
  );
}