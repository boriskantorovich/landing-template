import { NonprofitNavComponent } from '@/components/nonprofit-nav'
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '@/app/globals.css';
import { VideoProvider } from '@/contexts/video-context';
import { features } from '@/config/features';

// Define a type for the locales
type Locale = 'en' | 'ua' | 'ru';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {features.enableVideos ? (
        <VideoProvider>
          <NonprofitNavComponent />
          <main className="pt-8 font-sans">
            {children}
          </main>
        </VideoProvider>
      ) : (
        <>
          <NonprofitNavComponent />
          <main className="pt-8 font-sans">
            {children}
          </main>
        </>
      )}
    </NextIntlClientProvider>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
