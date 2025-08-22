import React from 'react';
import { Settings, Vote, FileSearch, Database } from 'lucide-react';
import { Dictionary } from '@/shared/lib/i18n';

export const WorkflowAutomation: React.FC<{ dict: Dictionary }> = ({ dict }) => {
  const sections = [
    {
      icon: <Vote className="w-6 h-6 text-green-500" />,
      title: dict.workflowVoteTitle,
      features: [
        { title: dict.workflowVoteFeat1Title, desc: dict.workflowVoteFeat1Desc },
        { title: dict.workflowVoteFeat2Title, desc: dict.workflowVoteFeat2Desc },
        { title: dict.workflowVoteFeat3Title, desc: dict.workflowVoteFeat3Desc },
      ]
    },
    {
      icon: <Settings className="w-6 h-6 text-green-500" />,
      title: dict.workflowDynDocTitle,
      features: [
        { title: dict.workflowDynDocFeat1Title, desc: dict.workflowDynDocFeat1Desc },
        { title: dict.workflowDynDocFeat2Title, desc: dict.workflowDynDocFeat2Desc },
        { title: dict.workflowDynDocFeat3Title, desc: dict.workflowDynDocFeat3Desc },
      ]
    },
    {
      icon: <FileSearch className="w-6 h-6 text-green-500" />,
      title: dict.workflowHRTitle,
      features: [
        { title: dict.workflowHRFeat1Title, desc: dict.workflowHRFeat1Desc },
        { title: dict.workflowHRFeat2Title, desc: dict.workflowHRFeat2Desc },
        { title: dict.workflowHRFeat3Title, desc: dict.workflowHRFeat3Desc },
        { title: dict.workflowHRFeat4Title, desc: dict.workflowHRFeat4Desc },
      ]
    },
    {
      icon: <Database className="w-6 h-6 text-green-500" />,
      title: dict.workflowControlTitle,
      features: [
        { title: dict.workflowControlFeat1Title, desc: dict.workflowControlFeat1Desc },
        { title: dict.workflowControlFeat2Title, desc: dict.workflowControlFeat2Desc },
        { title: dict.workflowControlFeat3Title, desc: dict.workflowControlFeat3Desc },
        { title: dict.workflowControlFeat4Title, desc: dict.workflowControlFeat4Desc },
      ]
    }
  ];

  return (
    <section id="processes-section" className="section bg-themed-surface">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-base font-semibold text-green-500 uppercase tracking-wider mb-2">{dict.workflowSectionSubtitle}</h3>
          <h2 className="mb-6">{dict.workflowSectionTitle}</h2>
          <p className="text-lg text-themed-muted">{dict.workflowSectionDescription}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="card">
              <div className="mb-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/10 flex items-center justify-center rounded-lg flex-shrink-0">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold">{section.title}</h3>
              </div>
              <div className="space-y-4">
                {section.features.map((item, i) => (
                  <div key={i}>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-themed-muted text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};