import { translations, type Locale } from './config';

export async function getDictionary(lang: string): Promise<typeof translations[Locale]> {
  // Проверяем, существует ли язык в translations
  const isValidLang = lang in translations;
  // Если язык существует, используем его, иначе используем украинский
  return translations[isValidLang ? (lang as Locale) : 'ua'];
} 