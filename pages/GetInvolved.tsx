import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { ROLES } from '../constants';

export const GetInvolved: React.FC = () => {
  const [role, setRole] = useState(ROLES[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application received!");
  };

  return (
    <>
      <div className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Join the Expedition</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We are looking for creators, hosts, and local partners. Accommodation and select payments covered for accepted talent.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-heading font-bold text-secondary mb-6">Apply as Talent</h2>
            <p className="text-gray-600 mb-8">
              Are you a videographer, editor, host, or influencer? Join us for the adventure of a lifetime. 
              Fill out the form to be considered for the core team.
            </p>
            
            <div className="bg-neutral p-6 rounded-lg border border-gray-200 mb-8">
              <h3 className="font-bold text-secondary mb-2">What we provide:</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Travel and accommodation expenses</li>
                <li>Food and experience costs</li>
                <li>Media exposure across our network</li>
                <li>Payment stipends (role dependent)</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                 <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
              </div>
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio / Socials</label>
                 <input type="text" required placeholder="https://" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
              </div>
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Role Interest</label>
                 <select 
                   className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
                   value={role}
                   onChange={(e) => setRole(e.target.value)}
                 >
                   {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                 </select>
              </div>
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Short Bio</label>
                 <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
              </div>
              <Button type="submit" variant="secondary">Apply Now</Button>
            </form>
          </div>

          <div>
             <h2 className="text-3xl font-heading font-bold text-secondary mb-6">Local Partners</h2>
             <p className="text-gray-600 mb-8">
               We welcome local production partners, tour guides, and cultural liaisons in Lagos, Benin City, Cotonou, Lomé, Accra, Kumasi, and Abidjan.
             </p>
             <div className="relative h-64 w-full rounded-lg overflow-hidden mb-8 shadow-md">
                <img src="https://picsum.photos/800/600?random=99" alt="Local Partners" className="w-full h-full object-cover" />
             </div>
             <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-secondary mb-2">Payments & Commerce</h3>
                <p className="text-sm text-gray-600 mb-4">
                  We use Flutterwave for secure cross-border sponsor collections and payouts to local partners.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold bg-white px-2 py-1 rounded border border-gray-200">SECURED BY FLUTTERWAVE</span>
                </div>
             </div>
          </div>
        </div>
      </Section>
    </>
  );
};