import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="text-2xl font-serif font-bold text-white mb-6">Dentex</div>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              We are committed to providing top-quality dental care that prioritizes your comfort and oral health.
            </p>
            <div className="flex gap-4">
                <SocialIcon Icon={Facebook} />
                <SocialIcon Icon={Twitter} />
                <SocialIcon Icon={Instagram} />
                <SocialIcon Icon={Linkedin} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
             <h3 className="text-white font-bold mb-6 opacity-0 md:opacity-100">Other</h3>
             <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Appointment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">404</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-6 text-sm">
                <li className="flex gap-3">
                    <Phone size={18} className="text-primary flex-shrink-0" />
                    <span>+44 20 7946 0958</span>
                </li>
                <li className="flex gap-3">
                    <MapPin size={18} className="text-primary flex-shrink-0" />
                    <span>123 Harley Street, London, W1G 6AX</span>
                </li>
                <li className="flex gap-3">
                    <Mail size={18} className="text-primary flex-shrink-0" />
                    <span>info@dentex.co.uk</span>
                </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-slate-800">
              <p className="text-xs text-slate-500 leading-relaxed">
                General Dental Council registered. Complaints procedure available on request.
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; 2025 Dentex. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Terms of Use</a>
                <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ Icon: React.ElementType }> = ({ Icon }) => (
    <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400">
        <Icon size={18} />
    </a>
);