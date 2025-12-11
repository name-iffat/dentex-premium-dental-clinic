import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import dental5 from './ui/assets/dental-5.png';
import dental4 from './ui/assets/dental-4.png';
import dental3 from './ui/assets/dental-3.png';

const services = [
  {
    title: "Bridge restoration",
    description: "From routine check-ups to advanced restorative procedures, we've got you covered routine check inpot.",
    image: dental4
  },
  {
    title: "Cosmetic bonding",
    description: "Our experienced team offers everything you need for exceptional dental health care.",
    image: dental3
  },
  {
    title: "Fluoride treatment",
    description: "Explore our full range of dental services into dental designed to keep your smile healthy need.",
    image: dental5
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Dental services tailored to you</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-slate-300">
              Our services include preventive care to keep your smile healthy, restorative treatments to repair and enhance your healthy dental.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.2} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{service.description}</p>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};