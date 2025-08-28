import { translations, Language } from '@/shared/config/translations';

export type Dictionary = typeof translations.ru;

export function getDictionary(lang: Language): Dictionary {
  return translations[lang] || translations.ru;
}