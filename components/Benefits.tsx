import { ContourBackdrop, SparkMark, SmileMark } from './ui/Decoration';
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';


export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="benefits-backdrop py-20 lg:py-28 bg-white">
      <ContourBackdrop className="benefit-contours" />
      <div className="section-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Side */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Your comfort makes all the difference
              </h2>
              <p className="text-slate-600 mb-10">
                Feel heard, supported and informed, from your first conversation to your follow-up care.
              </p>
            </FadeIn>

            <div className="space-y-6">
              <BenefitItem title="Personalised care for every patient" text="We take the time to understand your needs and provide customised treatments designed to achieve a healthier smile." delay={0.2} />
              <BenefitItem title="Comprehensive services under one roof" text="From routine cleanings to advanced restorative procedures, we offer a full range of dental services for the entire family." delay={0.4} />
            </div>
          </div>

          {/* Image Collage Side */}
          <div className="order-1 lg:order-2 h-[400px] sm:h-[500px] relative">
            <SmileMark className="benefits-smile" />
            <FadeIn direction="left" delay={0.2} className="absolute top-0 right-0 w-2/3 h-[60%] z-10">
              <img
                src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=2070&auto=format&fit=crop"
                alt="Dentist"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </FadeIn>
            <FadeIn direction="up" delay={0.4} className="absolute bottom-0 left-0 w-2/3 h-[60%] z-20">
              <img
                src="https://images.unsplash.com/photo-1522849696084-818b29dfe210?auto=format&fit=crop&q=80&w=600"
                alt="Dental Care"
                className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white"
              />
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

const BenefitItem: React.FC<{ title: string; text: string; delay: number }> = ({ title, text, delay }) => (
  <FadeIn delay={delay} className="flex gap-4">
    <div className="mt-1 flex-shrink-0">
      <CheckCircle2 size={28} className="text-primary" />
    </div>
    <div>
      <h4 className="text-xl font-bold font-serif text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-500 leading-relaxed text-sm">{text}</p>
    </div>
  </FadeIn>
);
