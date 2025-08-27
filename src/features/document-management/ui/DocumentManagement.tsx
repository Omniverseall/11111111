import React from 'react';
import { FileText, FileCheck, Users, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { Dictionary } from '@/shared/lib/i18n';

export const DocumentManagement: React.FC<{ dict: Dictionary }> = ({ dict }) => {
  const features = [
    { icon: <FileText className="w-6 h-6 text-tech-green" />, title: dict.docMgmtFeature1Title, desc: dict.docMgmtFeature1Desc },
    { icon: <FileCheck className="w-6 h-6 text-tech-green" />, title: dict.docMgmtFeature2Title, desc: dict.docMgmtFeature2Desc },
    { icon: <Clock className="w-6 h-6 text-tech-yellow" />, title: dict.docMgmtFeature3Title, desc: dict.docMgmtFeature3Desc },
    { icon: <MessageCircle className="w-6 h-6 text-tech-blue" />, title: dict.docMgmtFeature4Title, desc: dict.docMgmtFeature4Desc },
    { icon: <Users className="w-6 h-6 text-tech-green" />, title: dict.docMgmtFeature5Title, desc: dict.docMgmtFeature5Desc },
    { icon: <ShieldCheck className="w-6 h-6 text-tech-yellow" />, title: dict.docMgmtFeature6Title, desc: dict.docMgmtFeature6Desc }
  ];

  return (
    <section id="features-section" className="section bg-themed-surface">
      <div className="container text-center">
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <h3 className="text-base font-semibold text-tech-green uppercase tracking-wider mb-2">{dict.docMgmtSubtitle}</h3>
          <h2 className="mb-6">{dict.docMgmtTitle}</h2>
          <p className="text-lg text-themed-muted">{dict.docMgmtDescription}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="tech-card p-8 text-left transition-all duration-300 hover:border-tech-green border border-themed-border hover:shadow-lg hover:shadow-tech-green/10"
            >
              <div className="inline-flex p-3 rounded-lg bg-tech-green/10 mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-themed-muted leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};