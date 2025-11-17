import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export const config = {
  matcher: ['/', '/(en|uk|ru|be|ka|hi|ro|zh|vi|tr|ne|de|es|fr|it|ar|pt|ko|ja|th)/:path*'],
};
