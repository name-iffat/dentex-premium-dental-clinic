import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="w-full relative z-50">
        {/* Top Bar */}
        <div className="bg-primary text-white py-2 px-4 text-center text-xs sm:text-sm font-medium">
          <span className="bg-white text-primary px-2 py-0.5 rounded mr-2 font-bold">Special Offer</span>
          HEALTHY SMILES FOR A HEALTHY LIFE - BOOK AN APPOINTMENT!
        </div>

        {/* Navbar */}
        <div
          className={`w-full transition-all duration-300 z-50 ${isScrolled ? 'fixed top-0 bg-white shadow-md py-3' : 'relative bg-transparent py-5'
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif font-bold text-slate-800">Dentex</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-600 hover:text-primary font-medium">Home</a>
              <a href="#about" className="text-slate-600 hover:text-primary font-medium">About</a>
              <a href="#benefits" className="text-slate-600 hover:text-primary font-medium">Benefits</a>
              <a href="#services" className="text-slate-600 hover:text-primary font-medium">Services</a>
              <a href="#faq" className="text-slate-600 hover:text-primary font-medium">FAQ</a>
              <a href="#contact" className="text-slate-600 hover:text-primary font-medium">Contact</a>
            </nav>

            {/* Contact Info */}
            <div className="hidden md:flex items-center gap-2 text-slate-800 font-medium">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-primary">
                <Phone size={16} />
              </div>
              <span>+0123-456-789</span>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-slate-800 p-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slide-over */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <span className="text-2xl font-serif font-bold text-slate-900">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-500 hover:text-red-500 transition-colors"
                  aria-label="Close Menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* Search Bar */}
                <div className="relative mb-8">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm bg-slate-50"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-2">
                  <MobileNavLink href="#" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
                  <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
                  <MobileNavLink href="#benefits" onClick={() => setMobileMenuOpen(false)}>Benefits</MobileNavLink>
                  <MobileNavLink href="#services" onClick={() => setMobileMenuOpen(false)}>Services</MobileNavLink>
                  <MobileNavLink href="#blog" onClick={() => setMobileMenuOpen(false)}>Blog</MobileNavLink>
                </div>

                {/* Call to Action */}
                <div className="mt-10 pt-8 border-t border-slate-100 space-y-4">
                  <div className="flex items-center gap-3 text-slate-600 mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                      <Phone size={16} />
                    </div>
                    <span className="font-medium">+0123-456-789</span>
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full bg-primary text-white py-3.5 rounded-lg font-medium text-center shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const MobileNavLink: React.FC<{ href: string; children: React.ReactNode; onClick: () => void }> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="block text-lg font-medium text-slate-700 hover:text-primary transition-colors py-3 border-b border-slate-50 last:border-0"
  >
    {children}
  </a>
);
