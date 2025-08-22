"use client";
import React, { useState } from 'react';
import { Shield, FileCheck, QrCode } from 'lucide-react';
import { Dictionary } from '@/shared/lib/i18n';

export const ESignTabsClient: React.FC<{ dict: Dictionary }> = ({ dict }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { key: 'sign', label: dict.eSignTabSign, icon: <FileCheck className="w-8 h-8 text-green-500" />, title: dict.eSignTabSignTitle, desc: dict.eSignTabSignDesc },
    { key: 'verify', label: dict.eSignTabVerify, icon: <Shield className="w-8 h-8 text-green-500" />, title: dict.eSignTabVerifyTitle, desc: dict.eSignTabVerifyDesc },
    { key: 'history', label: dict.eSignTabHistory, icon: <QrCode className="w-8 h-8 text-green-500" />, title: dict.eSignTabHistoryTitle, desc: dict.eSignTabHistoryDesc },
  ] as const;

  return (
    <>
      <div className="tabs flex mb-2 space-x-1 bg-themed-surface border border-themed-border p-1 rounded-lg">
        {tabs.map((tab, index) => (
          <button
            key={tab.key}
            className={`flex-1 py-2.5 px-4 rounded-md transition-colors text-sm font-semibold ${activeTab === index ? 'bg-green-500 text-white' : 'text-themed-muted hover:text-themed-foreground'}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 bg-themed-surface rounded-lg border border-themed-border min-h-[300px] flex items-center justify-center">
        {tabs.map((tab, index) => activeTab === index && (
          <div key={tab.key} className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
              {tab.icon}
            </div>
            <h4 className="text-xl font-semibold mb-2">{tab.title}</h4>
            <p className="text-themed-muted max-w-xs mx-auto">{tab.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};