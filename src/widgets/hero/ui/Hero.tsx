import React from 'react';
import { Dictionary } from '@/shared/lib/i18n';
import { Logo } from '@/shared/ui/Logo';

export const Hero: React.FC<{ dict: Dictionary }> = ({ dict }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Logo className="w-24 h-24 sm:w-32 sm:h-32" width={128} height={128} />
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