import { MetadataRoute } from 'next';
import { pagesConfig } from '@/lib/pages-config';
import { locales } from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://info-poland.com'; // Replace with your actual domain

  // Homepage for each language
  const homepages = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${baseUrl}/${l}`])
      ),
    },
  }));

  // All pages for each language
  const pages = pagesConfig.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}/${page.slug}`])
        ),
      },
    }))
  );

  return [...homepages, ...pages];
}
