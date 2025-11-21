import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-heading font-black text-white mb-4">WAXE</h2>
            <p className="text-gray-300 max-w-md leading-relaxed">
              A cinematic 3–5 week journey through Lagos, Kumasi, Benin and beyond. 
              Documenting culture, adventure, fintech, and nightlife across West Africa.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Youtube size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook size={24} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-accent mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/itinerary" className="text-gray-300 hover:text-white transition-colors">Itinerary</Link></li>
              <li><Link to="/episodes" className="text-gray-300 hover:text-white transition-colors">Episodes</Link></li>
              <li><Link to="/sponsors" className="text-gray-300 hover:text-white transition-colors">Sponsorship</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-white transition-colors">Join the Team</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-accent mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <span>partnerships@waxeexpedition.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>Lagos, Nigeria (HQ)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} WAXE Expedition. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};