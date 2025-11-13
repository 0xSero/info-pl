import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, localeNames } from '@/i18n';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import '../globals.css';
import Script from 'next/script';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const baseUrl = 'https://info-poland.com'; // Replace with your actual domain

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: 'Info Poland - Complete Guide for Foreigners Living in Poland',
      template: '%s | Info Poland',
    },
    description: 'Comprehensive information for foreigners living in Poland. Learn about PESEL, residence permits, work permits, healthcare (NFZ), housing, and daily life. Available in 20 languages.',
    keywords: ['Poland', 'foreigners', 'expats', 'PESEL', 'residence permit', 'work permit', 'Polish healthcare', 'NFZ', 'living in Poland', 'visa', 'Karta Pobytu', 'immigration'],
    authors: [{ name: 'Info Poland' }],
    creator: 'Info Poland',
    publisher: 'Info Poland',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: 'Info Poland - Complete Guide for Foreigners',
      description: 'Comprehensive information for foreigners living in Poland. 100+ detailed guides in 20 languages.',
      url: `${baseUrl}/${locale}`,
      siteName: 'Info Poland',
      locale: locale,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-image.png`, // Create this image later
          width: 1200,
          height: 630,
          alt: 'Info Poland - Guide for Foreigners',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Info Poland - Complete Guide for Foreigners',
      description: 'Comprehensive information for foreigners living in Poland. 100+ detailed guides in 20 languages.',
      images: [`${baseUrl}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${baseUrl}/${l}`])
      ),
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
    },
    other: {
      'google-adsense-account': 'ca-pub-XXXXXXXXXXXXXXXX',
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

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Info Poland',
    alternateName: 'Info Poland - Guide for Foreigners',
    url: `https://info-poland.com/${locale}`,
    description: 'Comprehensive information for foreigners living in Poland. Learn about PESEL, residence permits, work permits, healthcare, and daily life.',
    inLanguage: locale,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `https://info-poland.com/${locale}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Info Poland',
      logo: {
        '@type': 'ImageObject',
        url: 'https://info-poland.com/logo.png',
      },
    },
  };

  return (
    <html lang={locale}>
      <body>
        {/* Google AdSense - Replace with your actual publisher ID */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
