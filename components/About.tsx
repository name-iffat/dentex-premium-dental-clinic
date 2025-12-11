import React from 'react';
import { FadeIn } from './ui/FadeIn';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side with Opening Hours */}
          <div className="relative">
            <FadeIn direction="right">
              <div className="relative rounded-2xl overflow-hidden h-[500px] w-full">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
                  alt="Dental Professional" 
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
            
            {/* Floating Card */}
            <FadeIn delay={0.3} className="absolute -bottom-10 right-4 lg:-right-10 bg-white p-6 rounded-xl shadow-2xl max-w-xs w-full border border-slate-100 hidden sm:block">
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Opening Hours</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-dashed border-slate-200 pb-2">
                  <span className="text-slate-500">Monday</span>
                  <span className="font-medium text-slate-900">09:00 - 18:00</span>
                </li>
                <li className="flex justify-between border-b border-dashed border-slate-200 pb-2">
                  <span className="text-slate-500">Tuesday</span>
                  <span className="font-medium text-slate-900">09:00 - 18:00</span>
                </li>
                <li className="flex justify-between border-b border-dashed border-slate-200 pb-2">
                  <span className="text-slate-500">Wednesday</span>
                  <span className="font-medium text-slate-900">09:00 - 18:00</span>
                </li>
                 <li className="flex justify-between pb-1">
                  <span className="text-slate-500">Thursday</span>
                  <span className="font-medium text-slate-900">09:00 - 17:00</span>
                </li>
              </ul>
            </FadeIn>
          </div>

          {/* Text Side */}
          <div className="lg:pl-8">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Innovative dental care with a personal touch comfort
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our team of skilled professionals is dedicated to ensuring every patient receives personalized attention and the highest we're here to help you achieve the healthy.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our experienced team is dedicated to providing you with personalized, high-quality dental care in a comfortable and caring environment. Whether you need a routine check-up or advanced dental treatments, we're here to help you achieve the healthy, beautiful smile you deserve.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <button className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
                Book a Callback
              </button>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};