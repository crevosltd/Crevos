import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FineArts from "./components/FineArts";
import Training from "./components/Training";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StartProjectModal from "./components/StartProjectModal";
import WebProjectsPage from "./pages/WebProjectsPage";

function HomePage({ onStartClick }) {
  return (
    <>
      <Hero onStartClick={onStartClick} />
      <Services onStartClick={onStartClick} />
      <FineArts />
      <Training />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;

      if (!hash) return;

      const targetId = hash.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const navbarHeight = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.scrollY - navbarHeight;

        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      }
    };

    scrollToHash();

    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <div className="bg-dark text-light antialiased selection:bg-primary selection:text-white overflow-x-hidden">
      <div className="noise fixed inset-0 pointer-events-none z-50 opacity-[0.03]" />

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<HomePage onStartClick={() => setIsModalOpen(true)} />}
        />

        <Route path="/webprojects" element={<WebProjectsPage />} />
      </Routes>

      <Footer />

      <StartProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;