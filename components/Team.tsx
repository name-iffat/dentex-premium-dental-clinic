import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const doctors = [
  {
    name: "Dr. Michael Johnson",
    title: "DDS - Lead Dentist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Dr. Topon Sorma",
    title: "DDS - Lead Dentist",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Dr. Raihan Ahmed",
    title: "DDS - Lead Dentist",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
  }
];

export const Team: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <FadeIn>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Meet our dental experts</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Our team of skilled professionals is dedicated to ensuring every patient receives personalized attention and the highest quality care.
                </p>
            </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
                <FadeIn key={index} delay={index * 0.2} className="group">
                    <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/5] bg-slate-100">
                        <img 
                            src={doctor.image} 
                            alt={doctor.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                            <div className="flex gap-4">
                                <SocialLink Icon={Facebook} />
                                <SocialLink Icon={Twitter} />
                                <SocialLink Icon={Instagram} />
                            </div>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold font-serif text-slate-900">{doctor.name}</h3>
                    <p className="text-slate-500 text-sm mt-1">{doctor.title}</p>
                </FadeIn>
            ))}
        </div>
      </div>
    </section>
  );
};

const SocialLink: React.FC<{ Icon: React.ElementType }> = ({ Icon }) => (
    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-colors">
        <Icon size={18} />
    </a>
);