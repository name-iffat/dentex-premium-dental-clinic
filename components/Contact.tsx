import React from 'react';
import { FadeIn } from './ui/FadeIn';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* Image Side */}
                <div className="relative h-64 lg:h-auto">
                    <img 
                        src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2069&auto=format&fit=crop" 
                        alt="Dental Office" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/10"></div>
                </div>

                {/* Form Side */}
                <div className="p-8 md:p-12 lg:p-16">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                            Schedule your cosmetic dental consultation
                        </h2>
                        <p className="text-slate-500 mb-8">
                            Taking care of your oral health is crucial for your overall well-being. Schedule your dental appointment today.
                        </p>
                    </FadeIn>

                    <form className="space-y-6">
                        <FadeIn delay={0.1}>
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            />
                        </FadeIn>
                        
                        <FadeIn delay={0.2}>
                            <input 
                                type="tel" 
                                placeholder="Phone Number" 
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            />
                        </FadeIn>
                        
                        <FadeIn delay={0.3}>
                            <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-500">
                                <option>Select Service</option>
                                <option>General Dentistry</option>
                                <option>Cosmetic Dentistry</option>
                                <option>Orthodontics</option>
                            </select>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="grid grid-cols-2 gap-4">
                                <input 
                                    type="date" 
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-500"
                                />
                                <input 
                                    type="time" 
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-500"
                                />
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.5}>
                            <button 
                                type="submit" 
                                className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-blue-500/30"
                            >
                                Book Now
                            </button>
                        </FadeIn>
                    </form>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};