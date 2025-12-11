import React, { useRef, useEffect } from 'react';
import { Star } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';

// Animated Counter Component
const Counter = ({ value, suffix = '', decimals = 0, delay = 0 }: { value: number, suffix?: string, decimals?: number, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  const spring = useSpring(0, {
    mass: 0.8,
    stiffness: 75,
    damping: 15
  });

  const display = useTransform(spring, (current) => current.toFixed(decimals));

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        spring.set(value);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, value, spring, delay]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{display}</motion.span>
      <span>{suffix}</span>
    </span>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Google Rating */}
          <FadeIn delay={0.0} className="flex items-center gap-4 p-4 rounded-xl hover:shadow-lg transition-shadow border border-transparent hover:border-slate-100">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-8 h-8" />
            </div>
            <div>
              <div className="text-sm text-slate-500 font-medium">Google Rating</div>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-slate-900 flex">
                  <Counter value={4.8} decimals={1} delay={0.2} />
                </span>
                <div className="flex text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
              </div>
              <div className="text-xs text-slate-400 mt-1">See all our reviews</div>
            </div>
          </FadeIn>

          <StatItem value={8} suffix="K+" label="Kinds of research" delay={0.1} />
          <StatItem value={40} suffix="K+" label="Satisfied customers" delay={0.2} />
          <StatItem value={17} suffix="+" label="Award winning" delay={0.3} />

        </div>
      </div>
    </section>
  );
};

const StatItem: React.FC<{ value: number; suffix: string; label: string; delay: number }> = ({ value, suffix, label, delay }) => (
  <FadeIn delay={delay} className="flex flex-col justify-center p-4 pl-8 border-l-2 border-slate-100">
    <div className="text-4xl font-bold text-slate-900 mb-1">
      <Counter value={value} suffix={suffix} delay={delay + 0.2} />
    </div>
    <div className="text-slate-500 font-medium">{label}</div>
  </FadeIn>
);