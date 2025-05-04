import { translations, type Locale } from './config';

export async function getDictionary(lang: string) {
  if (Object.keys(translations).includes(lang)) {
    return translations[lang as Locale];
  }
  return translations.ua;
} 