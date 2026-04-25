const trainings = [
  {
    number: "01",
    title: "Digital Skills",
    description:
      "Master industry-standard software for design, video editing, and digital content creation.",
    color: "primary",
    numberClass: "bg-primary/70",
    items: ["Adobe Creative Suite", "Motion Graphics", "Web Development etc."],
  },
  {
    number: "02",
    title: "Financial Education",
    description:
      "Build practical investment skills, understand personal finance, and learn how to make better financial decisions.",
    color: "secondary",
    numberClass: "bg-secondary/70",
    items: ["Shares & Stocks", "Mutual Funds", "Savings & Investments"],
  },
  {
    number: "03",
    title: "Business Skills",
    description:
      "Management consultancy and professional development for creative entrepreneurs.",
    color: "accent",
    numberClass: "bg-accent/70",
    items: ["Social media management", "Client Relations", "Business Strategy"],
  },
];

export default function Training() {
  return (
    <section id="training" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-wider text-sm uppercase mb-4 block">
            Crevos Academy
          </span>

          <h2 className="font-hero text-4xl md:text-5xl font-bold text-white mb-6">
            Training & Workshops
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Empowering the next generation of creatives through hands-on
            education in digital and artistic disciplines.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {trainings.map((training) => (
            <div
              key={training.number}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              <div
                className={`absolute top-0 left-0 w-20 h-20 rounded-br-xl rounded-tl-xl flex items-center justify-center text-white font-display font-bold text-lg mb-6 ${training.numberClass}`}
              >
                {training.number}
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-3 mt-20">
                {training.title}
              </h3>

              <p className="text-gray-400 text-sm mb-5">
                {training.description}
              </p>

              <ul className="space-y-2 text-sm text-gray-500">
                {training.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full bg-${training.color}`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
