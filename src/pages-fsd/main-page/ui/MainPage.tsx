"use client";
import React, { useEffect, useState } from 'react';
import { Hero } from '@/widgets/hero';
import { DocumentManagement } from '@/features/document-management';
import { ElectronicSignature } from '@/features/electronic-signature';
import { WorkflowAutomation } from '@/features/workflow-automation';
import { SecurityDeployment } from '@/features/security-deployment';
import { PricingPlans } from '@/features/pricing-plans';
import { ContactForm } from '@/features/contact-form';
import { Dictionary } from '@/shared/lib/i18n';
import { LoadingScreen } from '@/widgets/loading';

export const MainPage: React.FC<{ dict: Dictionary }> = ({ dict }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('hasVisited', 'true');
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <>
      <Hero dict={dict} />
      <DocumentManagement dict={dict} />
      <ElectronicSignature dict={dict} />
      <WorkflowAutomation dict={dict} />
      <SecurityDeployment dict={dict} />
      <PricingPlans />
      <ContactForm />
    </>
  );
};