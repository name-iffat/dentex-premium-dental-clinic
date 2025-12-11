import React from 'react';
import { FadeIn } from './ui/FadeIn';

export const Features: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
          {/* Image Side */}
          <FadeIn direction="right" className="relative order-2 lg:order-1">
             <div className="rounded-2xl overflow-hidden h-[500px] shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" 
                    alt="Dental procedure" 
                    className="w-full h-full object-cover"
                 />
             </div>
             {/* Decorative */}
             <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-slate-700 rounded-2xl"></div>
          </FadeIn>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <FadeIn>
                <div className="flex items-center gap-3 mb-4">
                     <span className="w-12 h-[1px] bg-slate-500"></span>
                     <span className="text-slate-400 uppercase tracking-widest text-sm">Why Choose Us</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">The care you deserve it</h2>
                <p className="text-slate-400 mb-10">
                    Our experienced team is committed to ensuring that you feel comfortable and in our care whether you need.
                </p>
            </FadeIn>

            <div className="space-y-8">
                <FeatureItem 
                    number="01" 
                    title="Pain-Free Dentistry" 
                    text="We start by thoroughly understanding your project requirements, goals, and vision. Our team conducts site evaluations."
                    delay={0.2}
                />
                <FeatureItem 
                    number="02" 
                    title="State-of-the-Art Technology" 
                    text="We believe that a healthy, beautiful smile is the foundation of overall well-being vision. That's why we are committed."
                    delay={0.3}
                />
                <FeatureItem 
                    number="03" 
                    title="Family-friendly Environment" 
                    text="We also recognize the importance of affordable and accessible dental care, which is why we offer flexible scheduling, convenient."
                    delay={0.4}
                />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{ number: string; title: string; text: string; delay: number }> = ({ number, title, text, delay }) => (
    <FadeIn delay={delay} className="flex gap-6">
        <div className="w-12 h-12 rounded-full border border-slate-700 flex-shrink-0 flex items-center justify-center text-lg font-bold text-white">
            {number}
        </div>
        <div>
            <h4 className="text-xl font-bold font-serif mb-2">{title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
        </div>
    </FadeIn>
);