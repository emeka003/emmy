import React, { useState } from 'react';
import { Section } from '../components/Section';
import { ChevronDown, Calendar, Users, Globe, MessageSquare, Check } from 'lucide-react';
import { Button } from '../components/Button';

export const Booking: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'booking' | 'faq'>('booking');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    duration: '',
    travelers: '',
    startDate: '',
    destinations: [] as string[],
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const faqs = [
    {
      q: "How far in advance should I book?",
      a: "We recommend booking at least 2-3 months in advance to secure the best accommodations and experiences, especially during peak travel seasons (November-February)."
    },
    {
      q: "What's included in the journey price?",
      a: "All journeys include accommodations, ground transportation, guided tours, select meals, and 24/7 support. International flights, travel insurance, and personal expenses are not included."
    },
    {
      q: "Do I need a visa?",
      a: "Visa requirements vary by country and your nationality. We provide detailed visa guidance and can assist with invitation letters where needed."
    },
    {
      q: "Is it safe to travel in West Africa?",
      a: "Yes! We carefully select destinations and have local partners who ensure your safety. We provide pre-trip briefings and maintain 24/7 communication during your journey."
    },
    {
      q: "Can I customize my itinerary?",
      a: "Absolutely! Every journey is tailored to your interests, pace, and budget. We work with you to create your perfect West African adventure."
    }
  ];

  const destinations = [
    "Ghana", "Senegal", "Nigeria", "Ivory Coast", "Benin", "Togo", "Gambia", "Mali"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDestinationToggle = (destination: string) => {
    setFormData(prev => ({
      ...prev,
      destinations: prev.destinations.includes(destination)
        ? prev.destinations.filter(d => d !== destination)
        : [...prev.destinations, destination]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const renderFaq = () => (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-heading font-bold mb-4 text-center text-secondary">Frequently Asked Questions</h1>
        <p className="text-center text-gray-600 mb-16 text-lg">Everything you need to know before booking</p>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg text-secondary">{faq.q}</span>
                <ChevronDown className={`text-primary transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 text-gray-700">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-red-50 rounded-lg p-8 text-center border border-red-100">
          <h3 className="text-2xl font-heading font-bold mb-4 text-secondary">Still Have Questions?</h3>
          <p className="text-gray-700 mb-6">Our team is here to help you plan the perfect West African adventure</p>
          <Button 
            onClick={() => setActiveSection('booking')} 
            variant="primary"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );

  const renderBooking = () => (
    <div className="py-20 bg-neutral">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-5xl font-heading font-bold mb-4 text-center text-secondary">Start Your Journey</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">Fill out the form below and we'll be in touch within 24 hours</p>
        
        {submitted && (
          <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-6 flex items-center gap-3">
            <Check className="text-green-600 w-6 h-6" />
            <div>
              <p className="font-bold text-green-900">Thank you for your inquiry!</p>
              <p className="text-green-700">We'll contact you within 24 hours to discuss your journey.</p>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">First Name *</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Last Name *</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" 
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" 
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  Preferred Start Date *
                </label>
                <input 
                  type="date" 
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  <Users className="inline w-4 h-4 mr-1" />
                  Number of Travelers *
                </label>
                <select 
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
                >
                  <option value="">Select number</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3-4">3-4 People</option>
                  <option value="5+">5+ People</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Journey Duration *</label>
              <select 
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
              >
                <option value="">Select duration</option>
                <option value="1-week">1 Week</option>
                <option value="2-weeks">2 Weeks</option>
                <option value="3-weeks">3 Weeks</option>
                <option value="4-weeks">4 Weeks</option>
                <option value="5-weeks">5+ Weeks</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">
                <Globe className="inline w-4 h-4 mr-1" />
                Interested Destinations * (Select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {destinations.map((dest) => (
                  <button
                    key={dest}
                    type="button"
                    onClick={() => handleDestinationToggle(dest)}
                    className={`px-4 py-2 rounded-lg border-2 font-semibold transition-all ${
                      formData.destinations.includes(dest)
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                    }`}
                  >
                    {dest}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Budget Range (USD)</label>
              <select 
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
              >
                <option value="">Select budget range</option>
                <option value="under-3000">Under $3,000</option>
                <option value="3000-5000">$3,000 - $5,000</option>
                <option value="5000-8000">$5,000 - $8,000</option>
                <option value="8000-12000">$8,000 - $12,000</option>
                <option value="12000+">$12,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                <MessageSquare className="inline w-4 h-4 mr-1" />
                Tell Us About Your Dream Journey
              </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                placeholder="Share your interests, special requests, or any questions..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none outline-none"
              />
            </div>

            <button 
              onClick={handleSubmit}
              className="w-full bg-primary hover:bg-red-600 text-white py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Submit Inquiry
            </button>

            <p className="text-sm text-gray-500 text-center">
              By submitting this form, you agree to be contacted about your West African journey
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => setActiveSection('faq')} 
            className="text-primary hover:text-red-600 font-semibold underline"
          >
            View Frequently Asked Questions
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Book Your Adventure</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to experience West Africa? Start planning your custom journey today.
          </p>
        </div>
      </div>

      {activeSection === 'booking' ? renderBooking() : renderFaq()}
    </>
  );
};