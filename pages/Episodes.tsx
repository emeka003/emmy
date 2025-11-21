import React from 'react';
import { Section } from '../components/Section';
import { EPISODES } from '../constants';
import { PlayCircle, Eye } from 'lucide-react';

export const Episodes: React.FC = () => {
  return (
    <>
      <div className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Episodes</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the journey. Watch our long-form documentaries from each city.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EPISODES.map((ep) => (
            <div key={ep.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group cursor-pointer">
              <div className="relative aspect-video">
                <img src={ep.thumbnail} alt={ep.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <PlayCircle size={64} className="text-white opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {ep.duration}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-secondary mb-2 group-hover:text-primary transition-colors">
                  {ep.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                  <span className="flex items-center gap-1">
                    <Eye size={14} /> {ep.views} views
                  </span>
                  <span className="bg-neutral px-2 py-1 rounded text-xs font-medium">
                    Episode {ep.id}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};