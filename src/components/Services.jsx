import { services } from "../assets/assets";
import ServiceCard from "./ServiceCard";

export default function Services({ onStartClick }) {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="font-hero text-4xl md:text-5xl font-bold text-white mb-6">
            Digital & Creative Services
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            From pixels to prints, code to canvas, we transform ideas into
            impactful realities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              iconKey={service.iconKey}
              title={service.title}
              description={service.description}
              color={service.color}
              image={service.image}
              link={service.link}
            />
          ))}
        </div>
      </div>
      <div className="flex pt-10 items-center justify-center">
        <a
          href="#services"
          className="magnetic-btn px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-all hover:scale-105 flex items-center gap-2"
           onClick={onStartClick}
        >
          Start a Project
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
      </div>
    </section>
  );
}
