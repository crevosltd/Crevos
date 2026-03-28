export default function Training() {
  return (
    <section id="training" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-wider text-sm uppercase mb-4 block">Education</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Vocational Training & Workshops</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Empowering the next generation of creatives through hands-on education in digital and artistic disciplines.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 h-full">
              <div className="text-5xl font-display font-bold text-primary/20 mb-4">01</div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Digital Skills</h3>
              <p className="text-gray-400 text-sm mb-6">Master industry-standard software for design, video editing, and digital content creation.</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />Adobe Creative Suite</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />Motion Graphics</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />Web Development</li>
              </ul>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 h-full">
              <div className="text-5xl font-display font-bold text-secondary/20 mb-4">02</div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Traditional Arts</h3>
              <p className="text-gray-400 text-sm mb-6">Learn time-honored techniques in textile design, illustration, and craftmanship.</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" />Adire Making</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" />Illustration</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" />Crafts & Textiles</li>
              </ul>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 h-full">
              <div className="text-5xl font-display font-bold text-accent/20 mb-4">03</div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Business Skills</h3>
              <p className="text-gray-400 text-sm mb-6">Management consultancy and professional development for creative entrepreneurs.</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" />Project Management</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" />Client Relations</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" />Business Strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}