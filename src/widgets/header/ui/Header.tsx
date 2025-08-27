import React from 'react';
import { Dictionary } from '@/shared/lib/i18n';
import { HeaderClient } from './HeaderClient';

interface HeaderProps {
  dict: Dictionary;
}

export const Header: React.FC<HeaderProps> = ({ dict }) => {
  const navLinks = [
    { label: dict.features, href: '#features-section' },
    { label: dict.solutions, href: '#solutions-section' },
    { label: dict.processes, href: '#processes-section' },
    { label: dict.security, href: '#security-section' },
    { label: dict.pricing, href: '#pricing-section' },
    { label: dict.contacts, href: '#contact-section' },
  ];

  return <HeaderClient navLinks={navLinks} />;
};