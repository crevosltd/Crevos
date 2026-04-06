import { useState } from 'react';

export default function Contact() {
  const [notification, setNotification] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const notif = {
      id: Date.now(),
      message: "Message Sent!",
      sub: "We'll get back to you soon."
    };
    
    setNotification(notif);

    setTimeout(() => {
      setNotification(null);
    }, 4000);

    e.target.reset();
  };

  return (
    <section id="contact" className="py-32 max-sm:pb-10 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">Get in Touch</span>
          <h2 className="font-hero text-4xl md:text-5xl font-bold text-white mb-6">Let's Create Together</h2>
          <p className="text-gray-400 text-lg">Ready to start your project? Reach out and let's discuss how we can bring your vision to life.</p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input type="email" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Service Interested In</label>
              <select required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary transition-colors">
                <option value="" className="bg-dark">Select a service</option>
                <option value="design" className="bg-dark">Graphic Design</option>
                <option value="motion" className="bg-dark">Motion Graphics</option>
                <option value="video" className="bg-dark">Video Editing</option>
                <option value="photo" className="bg-dark">Photography</option>
                <option value="web" className="bg-dark">Web Development</option>
                <option value="arts" className="bg-dark">Fine Arts & Crafts</option>
                <option value="training" className="bg-dark">Training & Workshops</option>
                <option value="consultancy" className="bg-dark">Management Consultancy</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea rows="5" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your project..." />
            </div>

            <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary via-primary to-secondary hover:opacity-90 text-white font-medium rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
              Send Message
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className='max-sm:flex max-sm:flex-row max-sm:items-center'>
            <div className="w-12 h-12 mx-auto max-sm:mx-5 max-sm:mb-0 mb-4 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <svg className="w-6 h-6 max-sm:w-4 max-sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            {/* <h4 className="text-white font-medium mb-1">Email</h4> */}
            <p className="text-gray-400 text-sm">hello@crevosltd.com</p>
          </div>
          <div className='max-sm:flex max-sm:flex-row max-sm:items-center'>
            <div className="w-12 h-12 mx-auto max-sm:mx-5 max-sm:mb-0 mb-4 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
              <svg className="w-6 h-6 max-sm:w-4 max-sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            {/* <h4 className="text-white font-medium mb-1">Phone</h4> */}
            <p className="text-gray-400 text-sm">+234 XXX XXX XXXX</p>
          </div>
          <div className='max-sm:flex max-sm:flex-row max-sm:items-center'>
            <div className="w-12 h-12 mx-auto max-sm:mx-5 max-sm:mb-0 mb-4  rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <svg className="w-6 h-6 max-sm:w-4 max-sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            {/* <h4 className="text-white font-medium mb-1">Location</h4> */}
            <p className="text-gray-400 text-sm">Nigeria</p>
          </div>
        </div>
      </div>

      {/* Success Notification */}
      {notification && (
        <div className="fixed top-24 right-6 bg-primary text-white px-6 py-4 rounded-xl shadow-2xl z-50 flex items-center gap-3 animate-slide-in">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
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