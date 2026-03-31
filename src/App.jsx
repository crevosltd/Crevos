import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FineArts from "./components/FineArts";
import Training from "./components/Training";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Global smooth scrolling for all anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href");

      if (href?.startsWith("#")) {
        e.preventDefault(); // Stop default jump
        const targetId = href.substring(1); // Remove the #
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const navbarHeight = 80; // Adjust if your navbar height changes

          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.scrollY - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    // Add event listener to all anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    // Cleanup
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
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
