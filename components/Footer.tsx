'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function Footer() {
  const t = useTranslations('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900">
              Info Poland
            </h3>
            <p className="text-sm text-gray-600">
              Your comprehensive guide to living in Poland. Information for foreigners on documents, healthcare, housing, and more.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900">
              Resources
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="https://www.gov.pl" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                  Polish Government
                </a>
              </li>
              <li>
                <a href="https://www.nfz.gov.pl" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                  NFZ (Health Insurance)
                </a>
              </li>
              <li>
                <a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                  ZUS (Social Security)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/privacy-policy" className="hover:text-red-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-red-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
          <p>&copy; {currentYear} Info Poland. All rights reserved.</p>
          <p className="mt-2">
            This website is for informational purposes only. Please verify all information with official sources.
          </p>
        </div>
      </div>
    </footer>
  );
}
