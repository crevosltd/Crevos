"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/contact-bg.jpg";

export default function Contact() {
  const [notification, setNotification] = useState(null);
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      const notif = {
        id: Date.now(),
        message: "Message Sent!",
        sub: "We'll get back to you soon.",
      };

      setNotification(notif);
      formRef.current.reset();
      setSelectedService("");

      setTimeout(() => {
        setNotification(null);
      }, 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setNotification({
        id: Date.now(),
        message: "Message failed",
        sub: "Please try again.",
      });

      setTimeout(() => {
        setNotification(null);
      }, 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 max-sm:py-16 overflow-hidden bg-dark"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(${contactImg})`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 max-lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div>
            <div className="flex flex-col max-lg:items-center">
              <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-4 block">
                Get in Touch
              </span>

              <h2 className="font-hero text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Let's Create <br className="max-lg:hidden" />
                <span className="font-normal text-gray-200">Together</span>
              </h2>
            </div>

            <p className="text-gray-400 text-sm md:text-base max-w-md mb-10">
              Are you looking for quality creative services tailored to your
              needs? Reach out to us and let&apos;s bring your ideas to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-white">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-xs text-gray-400">E-mail</p>
                  <p className="text-sm text-white">Info@crevosltd.com.ng</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-white">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.49 0 .13 5.36.13 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.86 11.86 0 005.79 1.48h.01c6.57 0 11.93-5.36 11.93-11.93 0-3.19-1.24-6.19-3.48-8.43zM12.07 21.8c-1.79 0-3.55-.48-5.08-1.38l-.36-.21-3.72.97.99-3.63-.23-.37a9.82 9.82 0 01-1.5-5.25c0-5.43 4.42-9.85 9.85-9.85 2.63 0 5.1 1.02 6.96 2.89a9.79 9.79 0 012.89 6.96c0 5.43-4.42 9.85-9.8 9.85zm5.4-7.38c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15s-.78.97-.96 1.17c-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.8.37s-1.05 1.03-1.05 2.5 1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs text-gray-400">Phone number</p>
                  <p className="text-sm text-white">+234 703 259 0454</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-2">
                  Service Interested In
                </label>
                <select
                  name="service"
                  required
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="" className="bg-dark">
                    Select a service
                  </option>
                  <option value="Graphic Design" className="bg-dark">
                    Graphic Design
                  </option>
                  <option value="Motion Graphics" className="bg-dark">
                    Motion Graphics
                  </option>
                  <option value="Video Editing" className="bg-dark">
                    Video Editing
                  </option>
                  <option value="Photography" className="bg-dark">
                    Photography
                  </option>
                  <option value="Web Development" className="bg-dark">
                    Web Development
                  </option>
                  <option value="Fine Arts & Crafts" className="bg-dark">
                    Fine Arts & Crafts
                  </option>
                  <option value="Training & Workshops" className="bg-dark">
                    Training & Workshops
                  </option>
                  <option value="Management Consultancy" className="bg-dark">
                    Management Consultancy
                  </option>
                  <option value="Social Media Management" className="bg-dark">
                    Social Media Management
                  </option>
                </select>
              </div>

              {selectedService === "Training & Workshops" && (
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-2">
                    Skill You Want to Learn
                  </label>
                  <select
                    name="skill"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="" className="bg-dark">
                      Select a skill
                    </option>
                    <option value="Graphic Design" className="bg-dark">
                      Graphic Design
                    </option>
                    <option value="Motion Graphics" className="bg-dark">
                      Motion Graphics
                    </option>
                    <option value="Video Editing" className="bg-dark">
                      Video Editing
                    </option>
                    <option value="Photography" className="bg-dark">
                      Photography
                    </option>
                    <option value="Web Development" className="bg-dark">
                      Web Development
                    </option>
                    <option value="Fine Arts & Crafts" className="bg-dark">
                      Fine Arts & Crafts
                    </option>
                    <option value="Social Media Management" className="bg-dark">
                      Social Media Management
                    </option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-primary via-primary to-secondary hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all flex items-center justify-center gap-3"
              >
                {isSubmitting ? "Sending..." : "Send Message"}

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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {notification && (
        <div className="fixed top-24 right-6 bg-primary text-white px-6 py-4 rounded-xl shadow-2xl z-50 flex items-center gap-3 animate-slide-in">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <div>
            <div className="font-medium">{notification.message}</div>
            <div className="text-sm text-white/80">{notification.sub}</div>
          </div>
        </div>
      )}
    </section>
  );
}
