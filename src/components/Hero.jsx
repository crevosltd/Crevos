import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBackground from "../assets/hero-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    gsap.to(".hero-content", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });

    gsap.to(scrollRef.current, {
      opacity: 1,
      duration: 1,
      delay: 1.5,
    });
  }, []);

  return (
    <section
      id="Hero"
      className="relative min-h-screen flex items-center justify-center hero-bg bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Optional subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="hero-content opacity-0 translate-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">
              Creative & Digital Agency
            </span>
          </div>

          <h1 className="font-hero text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            We Craft <span className="gradient-text">Digital</span>
            <br />
            <span className="text-white">Experiences</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
            Crevos LTD delivers comprehensive creative solutions from motion
            graphics to fine arts, vocational training to management
            consultancy. Where innovation meets tradition. 
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#services"
              className="magnetic-btn px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-all hover:scale-105 flex items-center gap-2"
            >
              Explore Services
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="magnetic-btn px-8 py-4 bg-accent/5 hover:bg-accent/10 border border-white/20 text-white font-medium rounded-full transition-all"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator opacity-0"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
