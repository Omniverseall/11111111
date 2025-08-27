import React from 'react';
import { Shield, FileCheck, Lock, QrCode } from 'lucide-react';
import { Dictionary } from '@/shared/lib/i18n';
import { ESignTabsClient } from './ESignTabs.client';

export const ElectronicSignature: React.FC<{ dict: Dictionary }> = ({ dict }) => {
  const features = [
    { icon: <Shield className="w-5 h-5 text-tech-green" />, title: dict.eSignFeature1Title, desc: dict.eSignFeature1Desc },
    { icon: <FileCheck className="w-5 h-5 text-tech-yellow" />, title: dict.eSignFeature2Title, desc: dict.eSignFeature2Desc },
    { icon: <Lock className="w-5 h-5 text-tech-green" />, title: dict.eSignFeature3Title, desc: dict.eSignFeature3Desc },
    { icon: <QrCode className="w-5 h-5 text-tech-blue" />, title: dict.eSignFeature4Title, desc: dict.eSignFeature4Desc }
  ];

  return (
    <section id="solutions-section" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-base font-semibold text-tech-green uppercase tracking-wider mb-2">{dict.eSignSubtitle}</h3>
            <h2 className="mb-6">{dict.eSignTitle}</h2>
            <p className="text-lg text-themed-muted mb-8">{dict.eSignDescription}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i}>
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 flex-shrink-0">{f.icon}</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{f.title}</h4>
                      <p className="text-themed-muted text-sm">{f.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-card p-2">
            <ESignTabsClient dict={dict} />
          </div>
        </div>
      </div>
    </section>
  );
};
