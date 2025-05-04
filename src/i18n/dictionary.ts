import { translations } from './config';

export async function getDictionary(lang: string) {
  return translations[lang as keyof typeof translations] || translations.ru;
} 