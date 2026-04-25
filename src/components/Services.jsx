import { services } from '../assets/assets';
import ServiceCard from './ServiceCard';


export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">What We Do</span>
          <h2 className="font-hero text-4xl md:text-5xl font-bold text-white mb-6">Digital & Creative Services</h2>
          <p className="text-gray-400 max-w-2xl text-lg">From pixels to prints, code to canvas—we transform ideas into impactful realities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              iconKey={service.iconKey}
              title={service.title}
              description={service.description}
              color={service.color}
              image={service.image} // Pass the image prop to the ServiceCard
            />
          ))}
        </div>
      </div>
    </section>
  );
}