import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, locales } from './locales';

export default getRequestConfig(async ({ requestLocale }: { requestLocale: string }) => {
  let locale = requestLocale;

  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
