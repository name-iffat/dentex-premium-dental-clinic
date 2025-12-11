import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of dental services including general dentistry, cosmetic procedures teeth whitening, veneers, orthodontics braces, Invisalign, pediatric dentistry ensuring that."
  },
  {
    question: "How often should I visit the dentist?",
    answer: "It is generally recommended to visit the dentist every six months for a routine check-up and cleaning. However, your dentist may recommend more frequent visits depending on your oral health needs."
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major dental insurance plans. Please contact our office to verify if we are in-network with your specific provider."
  },
  {
    question: "How do I schedule an appointment?",
    answer: "You can schedule an appointment by calling our office directly or by using the online booking form on our website."
  },
  {
    question: "Do you offer emergency dental services?",
    answer: "Yes, we offer emergency dental services for urgent situations such as severe toothaches, broken teeth, or lost fillings. Please call us immediately if you have a dental emergency."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-1">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Frequently asked questions</h2>
              <p className="text-slate-600 mb-8">
                Our experienced team is committed to ensuring that you feel comfortable and confident in our care. Whether you need routine cleanings.
              </p>
              <button className="bg-slate-900 text-white px-8 py-3 rounded-md hover:bg-slate-800 transition-colors">
                Ask a Question
              </button>
            </FadeIn>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FadeIn key={index} delay={index * 0.1} fullWidth>
                  <div className="border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-900 text-lg pr-4">{faq.question}</span>
                      {openIndex === index ? <Minus size={20} className="text-primary flex-shrink-0" /> : <Plus size={20} className="text-slate-400 flex-shrink-0" />}
                    </button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};