import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SkipLink } from '@/components/ui/SkipLink';
import { CookieConsent } from '@/components/ui/CookieConsent';
import { OrganizationSchema, WebsiteSchema } from '@/components/seo/StructuredData';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages();
  const t = messages.metadata as { title: string; description: string };
  
  return {
    title: {
      template: `%s | ${locale === 'cy' ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      default: t.title,
    },
    description: t.description,
    keywords: locale === 'cy' 
      ? ['chwaraeon', 'cymru', 'gweithgarwch corfforol', 'iechyd', 'ffitrwydd']
      : ['sport', 'wales', 'physical activity', 'health', 'fitness'],
    authors: [{ name: 'Sport Wales' }],
    creator: 'Sport Wales',
    publisher: 'Sport Wales',
    formatDetection: {
      email: false,
      telephone: false,
    },
    metadataBase: new URL('https://www.sport.wales'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'cy': '/cy',
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `https://www.sport.wales/${locale}`,
      siteName: locale === 'cy' ? 'Chwaraeon Cymru' : 'Sport Wales',
      locale: locale === 'cy' ? 'cy_GB' : 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate locale
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale} dir="ltr">
      <head>
        {/* Preconnect to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#C8102E" />
        
        {/* hreflang for bilingual SEO */}
        <link rel="alternate" hrefLang="en" href="https://www.sport.wales/en" />
        <link rel="alternate" hrefLang="cy" href="https://www.sport.wales/cy" />
        <link rel="alternate" hrefLang="x-default" href="https://www.sport.wales/en" />
      </head>
      <body className="flex flex-col min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {/* Skip Link for Accessibility */}
          <SkipLink />
          
          {/* Header */}
          <Header />
          
          {/* Main Content */}
          <main id="main-content" className="flex-grow" tabIndex={-1}>
            {children}
          </main>
          
          {/* Footer */}
          <Footer />
          
          {/* Cookie Consent Banner */}
          <CookieConsent />
          
          {/* Structured Data for SEO */}
          <OrganizationSchema locale={locale} />
          <WebsiteSchema locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

