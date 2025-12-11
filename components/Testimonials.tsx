import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    name: "Liza Adam",
    role: "Marketing",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    stars: 5,
    text: "Felt at ease from the moment I arrived. Dr. Dentist's Name took the time to explain every step of my treatment, making sure I was comfortable throughout the process. Now, I'm proud to show off my smile."
  },
  {
    name: "Mark Wilson",
    role: "Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    stars: 5,
    text: "The state-of-the-art technology they use is impressive. I had a painless procedure and the recovery was much faster than I expected. Truly a professional team."
  },
  {
    name: "Sarah Jenkins",
    role: "Teacher",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    stars: 5,
    text: "I've always been anxious about dental visits, but the friendly staff here changed that completely. The environment is so relaxing and family-friendly."
  }
];

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center lg:text-left">
            <FadeIn>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">Hear the smiles behind our success</h2>
            </FadeIn>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
                <FadeIn>
                    <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px] w-full shadow-xl">
                        <AnimatePresence mode="wait">
                            <motion.img 
                                key={current}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                src={reviews[current].image}
                                alt={reviews[current].name}
                                className="w-full h-full object-cover"
                            />
                        </AnimatePresence>
                    </div>
                </FadeIn>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg relative">
                    <div className="absolute top-8 right-8 text-slate-100">
                        <Quote size={80} fill="currentColor" />
                    </div>

                    <div className="relative z-10">
                         <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <img src={reviews[current].image} alt="" className="w-14 h-14 rounded-full object-cover" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">{reviews[current].name}</h4>
                                        <p className="text-sm text-slate-500">{reviews[current].role}</p>
                                    </div>
                                    <div className="flex text-yellow-400 ml-auto">
                                        {[...Array(reviews[current].stars)].map((_, i) => (
                                            <Star key={i} size={16} fill="currentColor" />
                                        ))}
                                    </div>
                                </div>
                                
                                <p className="text-slate-600 text-lg italic leading-relaxed mb-8">
                                    "{reviews[current].text}"
                                </p>
                            </motion.div>
                         </AnimatePresence>

                        <div className="flex gap-4">
                            <button onClick={prev} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all">
                                <ArrowLeft size={20} />
                            </button>
                            <button onClick={next} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all">
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};