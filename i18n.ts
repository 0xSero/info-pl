export const locales = [
  'en', // English
  'uk', // Ukrainian
  'ru', // Russian
  'be', // Belarusian
  'ka', // Georgian
  'hi', // Hindi
  'ro', // Romanian
  'zh', // Chinese
  'vi', // Vietnamese
  'tr', // Turkish
  'ne', // Nepali
  'de', // German
  'es', // Spanish
  'fr', // French
  'it', // Italian
  'ar', // Arabic
  'pt', // Portuguese
  'ko', // Korean
  'ja', // Japanese
  'th', // Thai
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  uk: 'Українська',
  ru: 'Русский',
  be: 'Беларуская',
  ka: 'ქართული',
  hi: 'हिन्दी',
  ro: 'Română',
  zh: '中文',
  vi: 'Tiếng Việt',
  tr: 'Türkçe',
  ne: 'नेपाली',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
  ar: 'العربية',
  pt: 'Português',
  ko: '한국어',
  ja: '日本語',
  th: 'ไทย',
};
