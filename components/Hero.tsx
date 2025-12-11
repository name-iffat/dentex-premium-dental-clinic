import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 relative z-10">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif text-slate-900 leading-tight mb-6">
                Expert care for a <br/>
                <span className="text-slate-900">lifetime of smiles</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Our experienced team is dedicated to providing you with personalized, high-quality dental care in a comfortable and caring environment.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-blue-700 text-white px-8 py-3.5 rounded-md font-medium transition-colors shadow-lg shadow-blue-500/30"
              >
                Book A Callback
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 text-slate-800 px-8 py-3.5 rounded-md font-medium transition-all"
              >
                Browse Services
              </motion.button>
            </FadeIn>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                  alt="Dentist checking patient" 
                  className="w-full h-[400px] lg:h-[600px] object-cover"
                />
                {/* Decorative element */}
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-20"
                ></motion.div>
                <motion.div 
                    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-10 right-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-20"
                ></motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};