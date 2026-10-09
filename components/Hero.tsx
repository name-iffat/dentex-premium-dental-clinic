import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { SmileMark, SparkMark } from './ui/Decoration';

export const Hero: React.FC = () => (
  <section className="dentex-hero relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
    <SmileMark className="hero-smile" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <FadeIn>
            <div className="hero-eyebrow"><span /> Dental care, with you in mind</div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight mb-6">
              Expert care for a <span className="hero-highlight">lifetime of smiles</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-lg mb-8 max-w-lg leading-relaxed hero-description">
              Personalised dental care, a team that listens, and a space where you can feel at ease. Let's find your reason to smile.
            </p>
          </FadeIn>
          <FadeIn delay={0.25} className="flex flex-wrap gap-4">
            <a href="#contact" className="hero-cta">Book a callback <ArrowUpRight size={20} aria-hidden="true" /></a>
            <a href="#services" className="hero-secondary">Explore treatments <ArrowDownRight size={20} aria-hidden="true" /></a>
          </FadeIn>
          <FadeIn delay={0.35} className="hero-footnote">Personalised dental care <span aria-hidden="true">/</span> Malaysia</FadeIn>
        </div>
        <div className="hero-visual relative">
          <FadeIn direction="left" delay={0.15}>
            <div className="hero-photo">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" alt="Bright, welcoming dental treatment room" className="w-full h-[360px] sm:h-[460px] lg:h-[560px] object-cover" fetchPriority="high" />
            </div>
          </FadeIn>
          <SparkMark className="hero-spark" />
          <div className="hero-note"><SmileMark className="w-16 h-12" /><span>A little care.<br /><strong>A lasting smile.</strong></span></div>
        </div>
      </div>
    </div>
  </section>
);
