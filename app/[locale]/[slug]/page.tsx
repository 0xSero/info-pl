import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { pagesConfig } from '@/lib/pages-config';
import { AdBanner } from '@/components/AdBanner';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return pagesConfig.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const page = pagesConfig.find((p) => p.slug === slug);

  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: `${page.titleKey} - Info Poland`,
    description: page.descriptionKey,
    alternates: {
      canonical: `/${locale}/${slug}`,
      languages: {
        'en': `/en/${slug}`,
        'uk': `/uk/${slug}`,
        'ru': `/ru/${slug}`,
        'de': `/de/${slug}`,
        'es': `/es/${slug}`,
        'fr': `/fr/${slug}`,
        'it': `/it/${slug}`,
        'pl': `/pl/${slug}`,
      },
    },
    openGraph: {
      title: `${page.titleKey} - Info Poland`,
      description: page.descriptionKey,
      type: 'article',
      locale: locale,
    },
  };
}

export default async function PageDetail({ params }: PageProps) {
  const { slug, locale } = await params;
  const page = pagesConfig.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }

  const t = useTranslations('pages');
  const tc = useTranslations('content');

  // Get related pages from the same category
  const relatedPages = pagesConfig
    .filter((p) => p.category === page.category && p.slug !== slug)
    .slice(0, 4);

  const IconComponent = (Icons[page.icon as keyof typeof Icons] || Icons.FileText) as LucideIcon;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href={`/${locale}`} className="hover:text-red-600">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900">{t(page.titleKey)}</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="border-b bg-gradient-to-r from-red-50 to-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-start space-x-4">
            <div className="rounded-lg bg-red-600 p-4 text-white">
              <IconComponent size={32} />
            </div>
            <div className="flex-1">
              <h1 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
                {t(page.titleKey)}
              </h1>
              <p className="text-lg text-gray-600">{t(page.descriptionKey)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Banner - Top */}
      <AdBanner slot="2345678901" />

      {/* Main Content */}
      <article className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Table of Contents */}
            <div className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h2 className="mb-4 text-xl font-bold text-gray-900">
                {tc('tableOfContents')}
              </h2>
              <ul className="space-y-2">
                <li>
                  <a href="#overview" className="text-red-600 hover:underline">
                    {tc('overview')}
                  </a>
                </li>
                <li>
                  <a href="#requirements" className="text-red-600 hover:underline">
                    {tc('requirements')}
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-red-600 hover:underline">
                    {tc('stepByStep')}
                  </a>
                </li>
                <li>
                  <a href="#documents" className="text-red-600 hover:underline">
                    {tc('documents')}
                  </a>
                </li>
                <li>
                  <a href="#costs" className="text-red-600 hover:underline">
                    {tc('costs')}
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-red-600 hover:underline">
                    {tc('tips')}
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-red-600 hover:underline">
                    {tc('faq')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Content Sections */}
            <div className="prose prose-lg max-w-none">
              <section id="overview" className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  {tc('overview')}
                </h2>
                <p className="mb-4 text-gray-700">
                  {tc(`${slug}.overview`)}
                </p>
              </section>

              {/* Ad Banner - Mid Content */}
              <AdBanner slot="3456789012" format="auto" />

              <section id="requirements" className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  {tc('requirements')}
                </h2>
                <div className="rounded-lg bg-blue-50 p-6">
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>{tc(`${slug}.req1`)}</li>
                    <li>{tc(`${slug}.req2`)}</li>
                    <li>{tc(`${slug}.req3`)}</li>
                    <li>{tc(`${slug}.req4`)}</li>
                  </ul>
                </div>
              </section>

              <section id="process" className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  {tc('stepByStep')}
                </h2>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((step) => (
                    <div key={step} className="flex space-x-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-lg font-bold text-white">
                        {step}
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 font-semibold text-gray-900">
                          {tc(`${slug}.step${step}.title`)}
                        </h3>
                        <p className="text-gray-700">
                          {tc(`${slug}.step${step}.description`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Ad Banner - Mid Content 2 */}
              <AdBanner slot="4567890123" format="auto" />

              <section id="documents" className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  {tc('documents')}
                </h2>
                <div className="rounded-lg border border-gray-200 bg-white p-6">
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>{tc(`${slug}.doc1`)}</li>
                    <li>{tc(`${slug}.doc2`)}</li>
                    <li>{tc(`${slug}.doc3`)}</li>
                    <li>{tc(`${slug}.doc4`)}</li>
                  </ul>
                </div>
              </section>

              <section id="costs" className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  {tc('costs')}
                </h2>
                <div className="rounded-lg bg-green-50 p-6">
                  <p className="mb-4 text-gray-700">{tc(`${slug}.costs`)}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">{tc(`${slug}.cost1`)}</span>
                      <span className="font-semibold">{tc(`${slug}.cost1Amount`)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">{tc(`${slug}.cost2`)}</span>
                      <span className="font-semibold">{tc(`${slug}.cost2Amount`)}</span>
                    </div>
                  </div>
                </div>
              </section>

              <section id="tips" className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  {tc('tips')}
                </h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((tip) => (
                    <div key={tip} className="flex space-x-3 rounded-lg bg-yellow-50 p-4">
                      <span className="text-2xl">💡</span>
                      <p className="text-gray-700">{tc(`${slug}.tip${tip}`)}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="faq" className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  {tc('faq')}
                </h2>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((faqNum) => (
                    <div key={faqNum} className="rounded-lg border border-gray-200 p-6">
                      <h3 className="mb-2 font-semibold text-gray-900">
                        {tc(`${slug}.faq${faqNum}Q`)}
                      </h3>
                      <p className="text-gray-700">{tc(`${slug}.faq${faqNum}A`)}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Important Notice */}
              <div className="my-8 rounded-lg border-l-4 border-red-600 bg-red-50 p-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Icons.AlertCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      {tc('importantNotice')}
                    </h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>{tc('verifyInformation')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Ad Banner - Bottom */}
      <AdBanner slot="5678901234" />

      {/* Related Pages */}
      {relatedPages.length > 0 && (
        <section className="border-t bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">
              {tc('relatedTopics')}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedPages.map((relatedPage) => {
                const RelatedIcon = (Icons[relatedPage.icon as keyof typeof Icons] || Icons.FileText) as LucideIcon;
                return (
                  <Link
                    key={relatedPage.slug}
                    href={`/${locale}/${relatedPage.slug}`}
                    className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-red-500 hover:shadow-md"
                  >
                    <div className="mb-3 rounded-lg bg-red-50 p-3 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                      <RelatedIcon size={24} />
                    </div>
                    <h3 className="mb-2 font-semibold text-gray-900 group-hover:text-red-600">
                      {t(relatedPage.titleKey)}
                    </h3>
                    <p className="line-clamp-2 text-sm text-gray-600">
                      {t(relatedPage.descriptionKey)}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
