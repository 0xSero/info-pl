import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { pagesConfig, categoryNames, type Category } from '@/lib/pages-config';
import { AdBanner } from '@/components/AdBanner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('pages');

  // Group pages by category
  const pagesByCategory = pagesConfig.reduce((acc, page) => {
    if (!acc[page.category]) {
      acc[page.category] = [];
    }
    acc[page.category].push(page);
    return acc;
  }, {} as Record<string, typeof pagesConfig>);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
              Welcome to Poland! 🇵🇱
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed md:text-xl">
              Your comprehensive guide to living in Poland. Find all the information you need about documents, healthcare, housing, work, and daily life.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="px-4 py-2 text-base">
                📚 100+ Detailed Guides
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-base">
                🌍 Available in 20 Languages
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-base">
                ✅ Always Up-to-Date
              </Badge>
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

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {pages.map((page) => {
                      const IconComponent = (Icons[page.icon as keyof typeof Icons] || Icons.FileText) as LucideIcon;

                      return (
                        <Link
                          key={page.slug}
                          href={`/${locale}/${page.slug}`}
                          className="group transition-all hover:scale-[1.02]"
                        >
                          <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                            <CardHeader>
                              <div className="mb-3 flex items-start justify-between">
                                <div className="rounded-xl bg-primary/10 p-3.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                  <IconComponent className="h-6 w-6" />
                                </div>
                              </div>
                              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                {t(`${page.titleKey}`)}
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CardDescription className="line-clamp-2">
                                {t(`${page.descriptionKey}`)}
                              </CardDescription>
                            </CardContent>
                          </Card>
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
      <section className="bg-muted/40 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
            Most Popular Topics
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            <Link href={`/${locale}/sunday-shopping-laws`} className="group transition-all hover:scale-[1.02]">
              <Card className="h-full text-center transition-all hover:shadow-lg hover:border-primary">
                <CardHeader>
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-4xl transition-all group-hover:bg-primary group-hover:scale-110">
                    🛒
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">Sunday Shopping</CardTitle>
                </CardHeader>
              </Card>
            </Link>
            <Link href={`/${locale}/pesel-number`} className="group transition-all hover:scale-[1.02]">
              <Card className="h-full text-center transition-all hover:shadow-lg hover:border-primary">
                <CardHeader>
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-4xl transition-all group-hover:bg-primary group-hover:scale-110">
                    📋
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">PESEL Number</CardTitle>
                </CardHeader>
              </Card>
            </Link>
            <Link href={`/${locale}/polish-holidays`} className="group transition-all hover:scale-[1.02]">
              <Card className="h-full text-center transition-all hover:shadow-lg hover:border-primary">
                <CardHeader>
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-4xl transition-all group-hover:bg-primary group-hover:scale-110">
                    📅
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">Polish Holidays</CardTitle>
                </CardHeader>
              </Card>
            </Link>
            <Link href={`/${locale}/nfz-health-insurance`} className="group transition-all hover:scale-[1.02]">
              <Card className="h-full text-center transition-all hover:shadow-lg hover:border-primary">
                <CardHeader>
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-4xl transition-all group-hover:bg-primary group-hover:scale-110">
                    🏥
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">Healthcare (NFZ)</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
