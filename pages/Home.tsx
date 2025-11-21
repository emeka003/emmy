import React from 'react';
import { Play, ArrowRight, Camera, Activity, Map } from 'lucide-react';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { FEATURES } from '../constants';

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 bg-secondary">
           <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
            poster="https://picsum.photos/1920/1080?random=10"
           >
             <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4" type="video/mp4" />
           </video>
           <div className="absolute inset-0 bg-hero-pattern"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <span className="inline-block py-1 px-3 border border-accent text-accent text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
            The Expedition
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-6 leading-tight">
            Five countries. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">One West African story.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md">
            A cinematic 3–5 week journey through Lagos, Kumasi, Benin and beyond — culture, adventure, fintech and nightlife.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/sponsors" variant="primary">
              Sponsor the Expedition
            </Button>
            <Button to="/itinerary" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
              See the Itinerary
            </Button>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">What is WAXE?</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            WAXE is a brand-first travel and content project that documents West African culture and adventure across five countries. 
            We produce long-form episodes, daily short videos, photography packs, and live events — all in partnership with hospitality, fintech and lifestyle brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="p-6 bg-neutral rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary text-white rounded flex items-center justify-center mb-4 shadow-md">
                {idx === 0 && <Play size={24} />}
                {idx === 1 && <Camera size={24} />}
                {idx === 2 && <Activity size={24} />}
                {idx === 3 && <Map size={24} />}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Highlight Activities */}
      <Section background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">Signature Experiences</h2>
            <p className="text-gray-600 mb-8">
              We don't just visit; we participate. From the bustling markets of Lagos to the serene beaches of Togo, WAXE is about immersion.
            </p>
            <ul className="space-y-4">
              {[
                "Boat & car racing",
                "Gun range (certified venues only)",
                "Fishing & water sports",
                "Traditional art performance & live painting",
                "Temporary African tattoo & merch",
                "Culinary challenges and food crawls"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 shadow-sm">
                    <ArrowRight size={14} className="text-secondary" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button to="/gallery" variant="secondary">Explore the Gallery</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <img src="https://picsum.photos/400/500?random=11" alt="Activity 1" className="rounded-lg shadow-md w-full h-64 object-cover transform translate-y-8" />
             <img src="https://picsum.photos/400/500?random=12" alt="Activity 2" className="rounded-lg shadow-md w-full h-64 object-cover" />
          </div>
        </div>
      </Section>

      {/* Callout */}
      <Section background="dark" className="text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-heading font-bold text-white mb-6">All-expenses sponsorship packages available</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            We cover food and hotels for partners and creators as part of select packages. 
            Interested brands can apply to sponsor a city or the whole expedition.
          </p>
          <Button to="/sponsors" variant="primary" className="bg-accent text-secondary hover:bg-yellow-400 hover:text-secondary border-none">
            Get Sponsor Pack
          </Button>
        </div>
      </Section>
    </>
  );
};