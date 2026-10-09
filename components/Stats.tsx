import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import trustCare from './ui/assets/trust-care.png';

export const Stats: React.FC = () => (
  <section className="trust-strip" aria-label="Care you can feel confident about">
    <div className="trust-layout max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn className="trust-intro">
        <img src={trustCare} alt="" aria-hidden="true" width="128" height="128" loading="lazy" />
        <div>
          <p className="trust-kicker">You're in good hands</p>
          <h2>Care built around you.</h2>
        </div>
      </FadeIn>
      <FadeIn delay={0.1} className="trust-detail">
        <Check size={18} aria-hidden="true" />
        <div><h3>Care for every smile</h3><p>Find the care that fits your needs.</p></div>
      </FadeIn>
      <FadeIn delay={0.2} className="trust-detail">
        <Check size={18} aria-hidden="true" />
        <div><h3>A personal approach</h3><p>Your questions. Your comfort. Your smile.</p></div>
      </FadeIn>
      <FadeIn delay={0.3}>
        <a className="trust-story" href="#patient-stories">Meet the smiles<ArrowUpRight size={19} aria-hidden="true" /><span>Explore patient stories</span></a>
      </FadeIn>
    </div>
  </section>
);
