import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './i18n/locales';

export default createMiddleware({
  locales,
  defaultLocale,
  localeDetection: false,
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
