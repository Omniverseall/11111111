import React from 'react';
import { Dictionary } from '@/shared/lib/i18n';

const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 sm:w-32 sm:h-32">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path>
  </svg>
);

export const Hero: React.FC<{ dict: Dictionary }> = ({ dict }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Logo />
          </div>
          <h1 className="mb-5 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {dict.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-themed-muted max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {dict.heroSubtitle}
          </p>
        </div>
      </div>
    </section>
  );
};