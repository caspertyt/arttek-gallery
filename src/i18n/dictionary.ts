import { translations } from './config';

export async function getDictionary(lang: string) {
  const validLang = lang as keyof typeof translations;
  return translations[validLang] || translations.ua;
} 