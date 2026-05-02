import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function StartProjectModal({ isOpen, onClose }) {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  // ESC close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setNotification({
        id: Date.now(),
        message: "Message Sent!",
        sub: "We'll get back to you soon.",
      });

      formRef.current.reset();

      setTimeout(() => {
        setNotification(null);
        onClose(); // 👈 close modal after success
      }, 3000);
    } catch (error) {
      console.error(error);
      setNotification({
        id: Date.now(),
        message: "Message failed",
        sub: "Please try again.",
      });

      setTimeout(() => setNotification(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-primary w-full max-w-lg rounded-2xl shadow-lg p-6 relative animate-fadeIn"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">Start a Project</h2>

        {/* ✅ FORM */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name" // 👈 REQUIRED
            type="text"
            placeholder="Your Name"
            required
            className="w-full border rounded-lg p-3"
          />

          <input
            name="email" // 👈 REQUIRED
            type="email"
            placeholder="Your Email"
            required
            className="w-full border rounded-lg p-3"
          />

          <textarea
            name="message" // 👈 REQUIRED
            placeholder="Tell me about your project..."
            rows="4"
            required
            className="w-full border rounded-lg p-3"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-5 border-t pt-4 text-center text-sm text-white">
          Or reach me directly
        </div>

        {/* Contact Options */}
        <div className="flex flex-col gap-3">
          <a
            href="https://wa.me/2347032590454"
            target="_blank"
            rel="noreferrer"
            className="w-full text-center bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
          >
            Chat on WhatsApp
          </a>

          <a
            href="mailto:Info@crevosltd.com.ng"
            className="w-full text-center border py-3 rounded-lg hover:bg-gray-100"
          >
            Send Email
          </a>
        </div>
      </div>

      {/* ✅ Notification */}
      {notification && (
        <div className="fixed top-20 right-6 bg-primary text-white px-6 py-4 rounded-xl shadow-lg z-[60]">
          <div className="font-medium">{notification.message}</div>
          <div className="text-sm text-white/80">{notification.sub}</div>
        </div>
      )}
    </div>
  );
}