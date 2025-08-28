"use client";
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/app/providers';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  tariff?: string | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, tariff }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, tariff }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setName('');
          setPhone('');
          setSubmitStatus('idle');
        }, 2000);
      } else {
        const errorData = await response.json();
        console.error('API error:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Failed to send contact request:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative glass rounded-2xl p-6 w-full max-w-md">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-themed-muted hover:text-themed-foreground transition-colors"
          aria-label={t('closeModal')}
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold mb-6 text-themed-foreground">{t('contactModalTitle')}</h3>
        {tariff && (
          <div className="mb-4 text-themed-muted text-center">
            <span className="font-semibold">Тариф: </span>{tariff}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="label-themed">
              {t('contactModalNameLabel')}
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-themed"
              placeholder={t('contactModalNamePlaceholder')}
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="label-themed">
              {t('contactModalPhoneLabel')}
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input-themed"
              placeholder="+998 __ ___ __ __"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full btn ${
              submitStatus === 'success'
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : submitStatus === 'error'
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'btn-primary'
            }`}
            aria-live="polite"
          >
            {isSubmitting
              ? t('contactModalSubmitting')
              : submitStatus === 'success'
              ? t('contactModalSuccess')
              : submitStatus === 'error'
              ? t('contactModalError')
              : t('contactModalSubmit')}
          </button>
        </form>
      </div>
    </div>
  );
};
