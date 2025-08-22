import React from 'react';
import { ShieldCheck, Layers, Lock, Key } from 'lucide-react';
import { Dictionary } from '@/shared/lib/i18n';

export const SecurityDeployment: React.FC<{ dict: Dictionary }> = ({ dict }) => {
  const benefits = [
    { icon: <Layers className="w-8 h-8 text-green-400" />, title: dict.securityBenefitConfidentialityTitle, desc: dict.securityBenefitConfidentialityDesc },
    { icon: <Lock className="w-8 h-8 text-green-400" />, title: dict.securityBenefitControlTitle, desc: dict.securityBenefitControlDesc },
    { icon: <ShieldCheck className="w-8 h-8 text-green-400" />, title: dict.securityBenefitComplianceTitle, desc: dict.securityBenefitComplianceDesc },
    { icon: <Key className="w-8 h-8 text-green-400" />, title: dict.securityBenefitAdminTitle, desc: dict.securityBenefitAdminDesc },
  ];

  return (
    <section id='security-section' className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex p-4 rounded-full bg-green-500/10 mb-4">
            <ShieldCheck className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="mb-6">{dict.securitySectionMainTitle}</h2>
          <p className="text-lg text-themed-muted">{dict.securitySectionMainDesc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-500/10 flex items-center justify-center rounded-full mb-6">
                {b.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{b.title}</h3>
              <p className="text-themed-muted text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};