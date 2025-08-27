"use client";
import React, { useRef, useState } from 'react';
import { Phone, Mail, UserCheck, CheckCircle } from 'lucide-react';
import { useInView } from '@/shared/lib/hooks/useInView';
import { ContactModal } from './ContactModal';
import { useLanguage } from '@/app/providers';
import { TranslationKey } from '@/shared/config/translations';

export const ContactForm: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.05, once: true });
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { t } = useLanguage();

  const turnkeyFeatures: TranslationKey[] = [
    'platformCustomization',
    'documentConfiguration',
    'employeeTraining',
    'technicalSupport'
  ];

  return (
    <section id="contact-section" ref={sectionRef} className="section bg-themed-surface">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="mb-6">{t('turnkeyTitle')}</h2>
            <p className="text-lg text-themed-muted mb-8">{t('turnkeyDescription')}</p>
            <ul className="space-y-4">
              {turnkeyFeatures.map((featureKey) => (
                <li key={featureKey} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-tech-green mt-1 flex-shrink-0" />
                  <p className="text-themed-foreground">{t(featureKey)}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={`tech-card ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-6 text-center">{t('contactInfo')}</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-tech-green flex-shrink-0" />
                <a href={`mailto:${t('contactEmail')}`} className="text-themed-foreground hover:text-tech-green transition-colors break-all">{t('contactEmail')}</a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-tech-green flex-shrink-0" />
                <a href={`tel:${t('contactPhone').replace(/[\s-()]/g, '')}`} className="text-themed-foreground hover:text-tech-green transition-colors">{t('contactPhone')}</a>
              </div>
              <div className="flex items-center space-x-4">
                <UserCheck className="w-5 h-5 text-tech-green flex-shrink-0" />
                <span className="text-themed-foreground">{t('contactPerson')}</span>
              </div>
            </div>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="btn btn-primary w-full"
            >
              {t('contactUs')}
            </button>
          </div>
        </div>
      </div>
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
};