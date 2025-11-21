import React, { useState } from 'react';
import { Section } from '../components/Section';
import { PenTool, Image as ImageIcon } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'photos' | 'tattoos'>('photos');

  // Generating placeholders
  const images = Array.from({ length: 9 }).map((_, i) => ({
    src: `https://picsum.photos/600/${i % 2 === 0 ? '800' : '600'}?random=${i + 50}`,
    alt: `Gallery Image ${i + 1}`
  }));

  const tattooDesigns = [
    { id: "tat1", name: "Adinkra Wave", usage: "Temporary Sticker", color: "bg-black" },
    { id: "tat2", name: "Kente Stripe", usage: "Sleeve Print", color: "bg-yellow-500" },
    { id: "tat3", name: "Coastal Compass", usage: "Stamp", color: "bg-blue-600" }
  ];

  return (
    <>
       <div className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">The Gallery</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Photos, short clips, tattoo designs and behind-the-scenes moments from the road.
          </p>
        </div>
      </div>

      <Section>
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-neutral p-1 rounded-lg">
            <button 
              onClick={() => setActiveTab('photos')}
              className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'photos' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-secondary'}`}
            >
              <span className="flex items-center gap-2"><ImageIcon size={16} /> Photos & Clips</span>
            </button>
            <button 
              onClick={() => setActiveTab('tattoos')}
              className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'tattoos' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-secondary'}`}
            >
              <span className="flex items-center gap-2"><PenTool size={16} /> Tattoo Designs</span>
            </button>
          </div>
        </div>

        {activeTab === 'photos' && (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, idx) => (
              <div key={idx} className="break-inside-avoid relative group overflow-hidden rounded-lg">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white opacity-0 group-hover:opacity-100 font-bold translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Location {idx + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'tattoos' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tattooDesigns.map((tat) => (
              <div key={tat.id} className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className={`w-32 h-32 mx-auto ${tat.color} rounded-full mb-6 flex items-center justify-center opacity-90`}>
                  <PenTool className="text-white w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-secondary">{tat.name}</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider mt-2">{tat.usage}</p>
                <div className="mt-6">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">SVG Asset</span>
                </div>
              </div>
            ))}
            
            <div className="bg-neutral border border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-bold text-gray-500 mb-2">More Designs</h3>
              <p className="text-sm text-gray-400">Additional region-specific tattoo designs unlock as the expedition progresses.</p>
            </div>
          </div>
        )}
      </Section>
    </>
  );
};