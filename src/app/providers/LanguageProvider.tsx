"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { translations, Language, TranslationKey } from '@/shared/config/translations';
import { LanguageContext } from './contexts/LanguageContext';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');
  const router = useRouter();

  useEffect(() => {
    const cookieLang = document.cookie.split('; ').find(c => c.startsWith('language='))?.split('=')[1] as Language | undefined;
    const savedLang = localStorage.getItem('language') as Language | null;
    
    console.log('Cookie language:', cookieLang);
    console.log('LocalStorage language:', savedLang);
    
    if (cookieLang && translations[cookieLang]) {
      setLanguage(cookieLang);
      document.documentElement.lang = cookieLang;
      console.log('Set language from cookie:', cookieLang);
      return;
    }
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
      document.documentElement.lang = savedLang;
      console.log('Set language from localStorage:', savedLang);
      return;
    }
    const browserLang = navigator.language.split('-')[0] as Language;
    if (translations[browserLang]) {
      setLanguage(browserLang);
      document.documentElement.lang = browserLang;
      console.log('Set language from browser:', browserLang);
      return;
    }
    setLanguage('ru');
    document.documentElement.lang = 'ru';
    console.log('Set default language: ru');
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.cookie = `language=${lang}; path=/; max-age=31536000`;
    document.documentElement.lang = lang;
    router.refresh();
  };

  const t = useCallback((key: TranslationKey): string => {
    const langPack: Record<string, string> = translations[language] || translations.ru;
    return langPack[key] || String(key);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};