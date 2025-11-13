'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Globe, Check } from 'lucide-react';
import { locales, localeNames, type Locale } from '@/i18n';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface LanguageSelectorProps {
  mobile?: boolean;
}

export function LanguageSelector({ mobile = false }: LanguageSelectorProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLocaleChange = (newLocale: Locale) => {
    const path = pathname.split('/').slice(2).join('/');
    router.push(`/${newLocale}/${path}`);
  };

  if (mobile) {
    return (
      <div className="space-y-2">
        <DropdownMenuLabel className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          Language
        </DropdownMenuLabel>
        <div className="grid grid-cols-2 gap-2 px-3">
          {locales.map((locale) => (
            <Button
              key={locale}
              onClick={() => handleLocaleChange(locale)}
              variant={currentLocale === locale ? "default" : "outline"}
              size="sm"
              className="w-full justify-start"
            >
              {localeNames[locale]}
            </Button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="default" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline-block">{localeNames[currentLocale as Locale]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 max-h-96 overflow-y-auto">
        <DropdownMenuLabel>Select Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="grid grid-cols-2 gap-1 p-1">
          {locales.map((locale) => (
            <DropdownMenuItem
              key={locale}
              onClick={() => handleLocaleChange(locale)}
              className={cn(
                "cursor-pointer",
                currentLocale === locale && "bg-primary text-primary-foreground"
              )}
            >
              <Check className={cn(
                "mr-2 h-4 w-4",
                currentLocale === locale ? "opacity-100" : "opacity-0"
              )} />
              {localeNames[locale]}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
