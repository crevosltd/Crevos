import { useEffect, useState } from 'react';
import { navLinks } from '../assets/assets';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Close mobile menu when clicking a link
  const closeMobileMenu = () => setIsMobileOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" className={`fixed w-full z-40 transition-all duration-300 top-0 ${scrolled ? "backdrop-blur-lg bg-dark/45" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="font-display text-2xl font-bold tracking-tighter text-white group">
            {/* CREVOS<span className="text-primary group-hover:text-secondary transition-colors">.</span> */}
            <img src="src/assets/logo.png" alt="Crevos Logo" width={100} height={100} className="rounded-full" />

          </a>

          <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => 
              link.isButton ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-full transition-all hover:scale-105"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-white"
          >
            <svg
              className="w-7 h-7 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isMobileOpen ? (
                // X icon
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6h12v12" />
              ) : (
                // Hamburger icon
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileOpen ? 'block' : 'hidden'} md:hidden bg-dark/75 backdrop-blur-lg border-t border-white/10`}>
        <div className="px-6 py-4 space-y-4 h-dvh">
         <div className="flex flex-col items-center justify-center h-full pt-5">
          <div className="flex flex-col items-center gap-8 text-xl">
            {navLinks.map((link) => 
              link.isButton ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="px-10 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-all"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
}