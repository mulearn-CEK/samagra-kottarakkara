'use client';

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: string) => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }
    return translations[key][language];
  };

  return { t };
} 