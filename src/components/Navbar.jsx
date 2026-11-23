
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { navLinks } from "../assets/assets";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when navigating to another route
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname, location.hash]);

  // Render internal routes with React Router
  // Keep homepage section links as regular anchors
  const renderNavLink = (link, mobile = false) => {
    const isButton = link.isButton;
    const isHashLink = link.href.includes("#");

    const className = mobile
      ? isButton
        ? "px-10 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-all"
        : "text-gray-300 hover:text-white transition-colors"
      : isButton
        ? "px-6 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-full transition-all hover:scale-105"
        : "text-sm font-medium text-gray-300 hover:text-white transition-colors";

    if (isHashLink) {
      return (
        <a
          key={link.href}
          href={link.href}
          onClick={closeMobileMenu}
          className={className}
        >
          {link.label}
        </a>
      );
    }

    return (
      <Link
        key={link.href}
        to={link.href}
        onClick={closeMobileMenu}
        className={className}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <nav
      id="navbar"
      className={`fixed w-full z-40 transition-all duration-300 top-0 ${
        scrolled
          ? "backdrop-blur-lg bg-dark/45"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="font-display text-2xl font-bold tracking-tighter text-white group"
          >
            <img
              src={logo}
              alt="Crevos Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              renderNavLink(link)
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() =>
              setIsMobileOpen((previous) => !previous)
            }
            aria-label={
              isMobileOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={isMobileOpen}
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isMobileOpen ? "block" : "hidden"
        } md:hidden bg-dark/95 backdrop-blur-lg border-t border-white/10`}
      >
        <div className="px-6 py-4 min-h-[calc(100dvh-72px)]">
          <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-120px)]">
            <div className="flex flex-col items-center gap-8 text-xl">
              {navLinks.map((link) =>
                renderNavLink(link, true)
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
