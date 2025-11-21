import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { SPONSOR_PACKAGES } from '../constants';
import { CheckCircle } from 'lucide-react';

export const Sponsors: React.FC = () => {
  const [formState, setFormState] = useState({
    companyName: '',
    contactName: '',
    email: '',
    packageInterest: 'Title Sponsor',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! We will contact you shortly.");
    setFormState({ companyName: '', contactName: '', email: '', packageInterest: 'Title Sponsor', message: '' });
  };

  return (
    <>
      <div className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Partner With WAXE</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            High-visibility content, authentic cultural storytelling, and targeted exposure to African & global audiences.
          </p>
        </div>
      </div>

      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-secondary mb-6">Sponsorship Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From title sponsorship to specific experience branding, we offer tailored packages to suit your marketing goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {SPONSOR_PACKAGES.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col p-6 rounded-xl border ${
                pkg.highlight 
                  ? 'border-primary shadow-xl scale-105 relative bg-white z-10' 
                  : 'border-gray-200 bg-white shadow-sm hover:shadow-md'
              } transition-all duration-300`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-secondary mb-2">{pkg.name}</h3>
              <div className="text-3xl font-black text-primary mb-6">{pkg.price}</div>
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.includes.map((inc, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    {inc}
                  </li>
                ))}
              </ul>
              <Button 
                variant={pkg.highlight ? 'primary' : 'outline'} 
                fullWidth
                onClick={() => {
                    const element = document.getElementById('contact-form');
                    element?.scrollIntoView({ behavior: 'smooth' });
                    setFormState({...formState, packageInterest: pkg.name});
                }}
              >
                Select Package
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact-form" background="gray">
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
          <h2 className="text-3xl font-heading font-bold text-secondary mb-2 text-center">Request Sponsor Pack</h2>
          <p className="text-gray-500 text-center mb-8">Fill out the form below and our partnerships team will be in touch.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input 
                type="text" 
                name="companyName"
                required
                value={formState.companyName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="Enter company name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                <input 
                  type="text" 
                  name="contactName"
                  required
                  value={formState.contactName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Interested Package</label>
              <select 
                name="packageInterest"
                value={formState.packageInterest}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
              >
                {SPONSOR_PACKAGES.map(p => (
                  <option key={p.name} value={p.name}>{p.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
              <textarea 
                name="message"
                rows={4}
                value={formState.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="Any specific requirements or questions?"
              />
            </div>

            <Button type="submit" fullWidth variant="primary">
              Submit Request
            </Button>
          </form>
        </div>
      </Section>
    </>
  );
};