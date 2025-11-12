import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { pagesConfig, categoryNames, type Category } from '@/lib/pages-config';
import { AdBanner } from '@/components/AdBanner';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const t = useTranslations('pages');

  // Group pages by category
  const pagesByCategory = pagesConfig.reduce((acc, page) => {
    if (!acc[page.category]) {
      acc[page.category] = [];
    }
    acc[page.category].push(page);
    return acc;
  }, {} as Record<string, typeof pagesConfig>);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-red-600 py-12 text-white md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              Welcome to Poland! 🇵🇱
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl">
              Your comprehensive guide to living in Poland. Find all the information you need about documents, healthcare, housing, work, and daily life.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                📚 100+ Detailed Guides
              </div>
              <div className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                🌍 Available in 20 Languages
              </div>
              <div className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                ✅ Always Up-to-Date
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner - Top */}
      <AdBanner slot="1234567890" format="auto" />

      {/* Categories and Pages */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {Object.entries(pagesByCategory).map(([category, pages], categoryIndex) => {
              const categoryKey = category as Category;

              return (
                <div key={category} id={category}>
                  <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
                    {categoryNames[categoryKey]}
                  </h2>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {pages.map((page) => {
                      const IconComponent = (Icons[page.icon as keyof typeof Icons] || Icons.FileText) as LucideIcon;

                      return (
                        <Link
                          key={page.slug}
                          href={`/${page.slug}`}
                          className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-red-500 hover:shadow-md"
                        >
                          <div className="mb-3 flex items-start justify-between">
                            <div className="rounded-lg bg-red-50 p-3 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                              <IconComponent size={24} />
                            </div>
                          </div>
                          <h3 className="mb-2 font-semibold text-gray-900 group-hover:text-red-600">
                            {t(`${page.titleKey}`)}
                          </h3>
                          <p className="line-clamp-2 text-sm text-gray-600">
                            {t(`${page.descriptionKey}`)}
                          </p>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Ad Banner - After every 3 categories */}
                  {(categoryIndex + 1) % 3 === 0 && categoryIndex < Object.keys(pagesByCategory).length - 1 && (
                    <div className="mt-8">
                      <AdBanner slot={`${1234567890 + categoryIndex}`} format="auto" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ad Banner - Bottom */}
      <AdBanner slot="9876543210" format="auto" />

      {/* Quick Links Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Most Popular Topics
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <Link href="/sunday-shopping-laws" className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md">
              <div className="text-2xl">🛒</div>
              <h3 className="mt-2 font-semibold">Sunday Shopping</h3>
            </Link>
            <Link href="/pesel-number" className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md">
              <div className="text-2xl">📋</div>
              <h3 className="mt-2 font-semibold">PESEL Number</h3>
            </Link>
            <Link href="/polish-holidays" className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md">
              <div className="text-2xl">📅</div>
              <h3 className="mt-2 font-semibold">Polish Holidays</h3>
            </Link>
            <Link href="/nfz-health-insurance" className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md">
              <div className="text-2xl">🏥</div>
              <h3 className="mt-2 font-semibold">Healthcare (NFZ)</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
