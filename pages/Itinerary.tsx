import React from 'react';
import { Section } from '../components/Section';
import { ITINERARY } from '../constants';
import { MapPin, Calendar, AlertTriangle } from 'lucide-react';

export const Itinerary: React.FC = () => {
  return (
    <>
      <div className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">The Route</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Lagos (Nigeria) → Benin City (Nigeria) → Cotonou (Benin) → Lomé (Togo) → Accra / Kumasi (Ghana) → Abidjan (Côte d’Ivoire).
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 p-6 bg-blue-50 rounded-lg border border-blue-100 flex flex-col md:flex-row gap-6 items-center justify-between">
             <div>
               <h3 className="text-lg font-bold text-secondary mb-1">Estimated Duration</h3>
               <p className="text-gray-600">21–35 Days</p>
             </div>
             <div>
               <h3 className="text-lg font-bold text-secondary mb-1">Start Point</h3>
               <p className="text-gray-600">Lagos, Nigeria</p>
             </div>
             <div>
               <h3 className="text-lg font-bold text-secondary mb-1">End Point</h3>
               <p className="text-gray-600">Abidjan, Côte d’Ivoire</p>
             </div>
          </div>

          <div className="relative border-l-4 border-gray-200 ml-4 md:ml-8 space-y-12">
            {ITINERARY.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-12">
                {/* Timeline Dot */}
                <div className="absolute -left-[14px] top-0 bg-primary w-6 h-6 rounded-full border-4 border-white shadow-sm"></div>
                
                <div className="flex flex-col md:flex-row gap-4 md:items-start">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex-1 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-secondary text-white text-xs font-bold px-2 py-1 rounded">Day {item.day}</span>
                      <h3 className="text-xl font-bold text-secondary flex items-center gap-2">
                        <MapPin size={18} className="text-primary" />
                        {item.city}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {item.activities.map((act, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className="text-accent mt-1">•</span>
                          {act}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Optional: Image per location */}
                  <div className="hidden md:block w-48 h-32 flex-shrink-0">
                    <img 
                      src={`https://picsum.photos/300/200?random=${index + 20}`} 
                      alt={item.city} 
                      className="w-full h-full object-cover rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-neutral rounded-lg border-l-4 border-accent">
             <div className="flex items-start gap-3 mb-3">
               <AlertTriangle className="text-secondary mt-1" size={24} />
               <h3 className="text-xl font-bold text-secondary">Logistics, Permits & Legal</h3>
             </div>
             <p className="text-gray-600 text-sm leading-relaxed mb-4">
               Notes on inter-country travel, filming permits, insurance, certified gun range and hunting permit requirements, drone permits and medical/evacuation plans.
             </p>
             <p className="text-gray-500 text-xs italic border-t border-gray-200 pt-4">
               Disclaimer: All activities that involve weapons, hunting or restricted adventure sports will only be executed with certified local partners, proper permits, and in compliance with local laws. WAXE is not responsible for illegal or unsafe activity.
             </p>
          </div>
        </div>
      </Section>
    </>
  );
};