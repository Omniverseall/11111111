import React from 'react';
import { Hero } from '@/widgets/hero';
import { DocumentManagement } from '@/features/document-management';
import { ElectronicSignature } from '@/features/electronic-signature';
import { WorkflowAutomation } from '@/features/workflow-automation';
import { SecurityDeployment } from '@/features/security-deployment';
import { PricingPlans } from '@/features/pricing-plans';
import { ContactForm } from '@/features/contact-form';
import { Dictionary } from '@/shared/lib/i18n';

interface MainPageProps {
  dict: Dictionary;
}

export const MainPage: React.FC<MainPageProps> = ({ dict }) => {
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