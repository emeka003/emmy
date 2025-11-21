import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'dark';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = "", 
  id, 
  background = 'white' 
}) => {
  
  const bgClasses = {
    white: "bg-white",
    gray: "bg-neutral",
    dark: "bg-secondary text-white"
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};