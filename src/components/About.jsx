export default function About() {
  return (
    <section id="about" className="py-32 relative bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="font-display text-2xl font-bold text-white mb-4">Management Consultancy</h3>
                <p className="text-gray-400 leading-relaxed">
                  Strategic guidance for creative businesses and general contracts. We help organizations 
                  optimize their creative processes, implement digital transformation, and achieve operational excellence.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 rounded-xl text-center">
                  <div className="text-3xl font-display font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="glass-card p-6 rounded-xl text-center">
                  <div className="text-3xl font-display font-bold text-secondary mb-2">100+</div>
                  <div className="text-sm text-gray-400">Students Trained</div>
                </div>
                <div className="glass-card p-6 rounded-xl text-center">
                  <div className="text-3xl font-display font-bold text-accent mb-2">15+</div>
                  <div className="text-sm text-gray-400">Art Exhibitions</div>
                </div>
                <div className="glass-card p-6 rounded-xl text-center">
                  <div className="text-3xl font-display font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">About Crevos</span>
            <h2 className="font-hero text-4xl md:text-5xl font-bold text-white mb-6">Bridging Creativity & Commerce</h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Crevos LTD stands at the intersection of artistic expression and digital innovation. Founded with a vision 
              to democratize creative excellence, we serve clients ranging from startups to established enterprises, 
              while nurturing local talent through education and apprenticeship.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our dual focus on cutting-edge digital services and traditional arts preservation makes us uniquely positioned 
              to offer holistic creative solutions that honor cultural heritage while embracing future technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Certified Professionals
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Quality Assured
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Timely Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}