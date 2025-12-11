import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Benefits } from './components/Benefits';
import { Team } from './components/Team';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Testimonials />
        <Benefits />
        <Team />
        <Features />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;