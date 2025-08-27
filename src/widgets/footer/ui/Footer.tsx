import React from 'react';
import { Dictionary } from '@/shared/lib/i18n';
import { Logo } from '@/shared/ui/Logo';

export const Footer: React.FC<{ dict: Dictionary }> = ({ dict }) => {
  const navLinks = [
    { label: dict.features, href: '#features-section' },
    { label: dict.solutions, href: '#solutions-section' },
    { label: dict.processes, href: '#processes-section' },
    { label: dict.security, href: '#security-section' },
    { label: dict.pricing, href: '#pricing-section' },
  ] as const;

  return (
    <footer className="bg-[rgb(var(--color-background))] border-t border-themed-border text-themed-muted">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 text-center md:text-left">
          <div>
            <a href="#" aria-label="EdoLine Home" className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <Logo />
              <span className="text-xl font-bold text-white">EdoLine</span>
            </a>
            <p className="text-sm mb-4 max-w-xs mx-auto md:mx-0">{dict.footerDescription}</p>
          </div>
          <div className="md:mx-auto">
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">{dict.navigation}</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-tech-green transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:mx-auto">
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">{dict.contacts}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={`mailto:${dict.contactEmail}`} className="hover:text-tech-green transition-colors">{dict.contactEmail}</a></li>
              <li><a href={`tel:${dict.contactPhone.replace(/[\s-()]/g, '')}`} className="hover:text-tech-green transition-colors">{dict.contactPhone}</a></li>
              <li>{dict.footerAddress}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-themed-border pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-center">
          <p className="text-xs">
            © {new Date().getFullYear()} EdoLine. {dict.footerRights}
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-slate-300 text-xs transition-colors">{dict.footerTerms}</a>
            <a href="#" className="hover:text-slate-300 text-xs transition-colors">{dict.footerPrivacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};