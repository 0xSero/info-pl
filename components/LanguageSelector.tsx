'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Globe, ChevronDown } from 'lucide-react';
import { locales, localeNames, type Locale } from '@/i18n';

interface LanguageSelectorProps {
  mobile?: boolean;
}

export function LanguageSelector({ mobile = false }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLocaleChange = (newLocale: Locale) => {
    const path = pathname.split('/').slice(2).join('/');
    router.push(`/${newLocale}/${path}`);
    setIsOpen(false);
  };

  if (mobile) {
    return (
      <div className="space-y-2">
        <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700">
          <Globe size={18} />
          <span>Language</span>
        </div>
        <div className="grid grid-cols-2 gap-2 px-3">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLocaleChange(locale)}
              className={`rounded-md px-3 py-2 text-sm ${
                currentLocale === locale
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {localeNames[locale]}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        <Globe size={18} />
        <span>{localeNames[currentLocale as Locale]}</span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 z-20 mt-2 max-h-96 w-64 overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg">
            <div className="grid grid-cols-2 gap-1 p-2">
              {locales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => handleLocaleChange(locale)}
                  className={`rounded px-3 py-2 text-left text-sm ${
                    currentLocale === locale
                      ? 'bg-red-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {localeNames[locale]}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
