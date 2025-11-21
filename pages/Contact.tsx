import React from 'react';
import { Section } from '../components/Section';
import { Mail, Phone, FileText } from 'lucide-react';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  return (
    <>
      <div className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions? Want to meet us on the road? Reach out.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <Mail size={32} />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-2">Email Us</h3>
            <p className="text-gray-500 mb-4">For sponsorships & general inquiries</p>
            <a href="mailto:hello@waxeexpedition.com" className="text-primary font-medium hover:underline">
              hello@waxeexpedition.com
            </a>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
              <Phone size={32} />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-2">Call Us</h3>
            <p className="text-gray-500 mb-4">Mon-Fri from 9am to 5pm WAT</p>
            <a href="tel:+2340000000000" className="text-primary font-medium hover:underline">
              +234-000-000-0000
            </a>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
              <FileText size={32} />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-2">Press Kit</h3>
            <p className="text-gray-500 mb-4">Download assets & stats</p>
            <Button variant="outline" className="text-sm px-4 py-2">
              Download PDF
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};