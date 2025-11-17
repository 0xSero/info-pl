# Info Poland - Complete Guide for Foreigners 🇵🇱

A comprehensive, multilingual website providing essential information for foreigners living in Poland. Built with Next.js 14, TypeScript, Tailwind CSS, and next-intl.

## Features

- **100 Detailed Information Pages** covering all aspects of life in Poland
- **20 Language Support**: English, Ukrainian, Russian, Belarusian, Georgian, Hindi, Romanian, Chinese, Vietnamese, Turkish, Nepali, German, Spanish, French, Italian, Arabic, Portuguese, Korean, Japanese, Thai
- **Mobile-First Design** optimized for smartphones and tablets
- **SEO Optimized** with proper metadata for each page and language
- **Google AdSense Integration** with multiple tasteful ad placements
- **Static Site Generation** for fast loading and excellent performance
- **Responsive UI** built with Tailwind CSS and Lucide icons

## Translation Status

- ✅ **English**: Complete with all content written
- ⏳ **Other 19 languages**: Template files ready for translation

**Quick translation setup:**
```bash
# Install DeepL for automated translation
npm install deepl-node dotenv

# Add your API key to .env
echo "DEEPL_API_KEY=your-key-here" > .env

# Translate all supported languages
node scripts/translate-with-deepl.js
```

📖 **See [TRANSLATION_GUIDE.md](./TRANSLATION_GUIDE.md) for complete translation instructions, cost estimates, and recommendations.**

## Content Categories

### 1. Legal & Documents (15 pages)
PESEL, NIP, residence permits, work permits, visas, and more

### 2. Healthcare (10 pages)
NFZ insurance, doctors, pharmacies, hospitals, emergency services

### 3. Finance (10 pages)
Banking, taxes, loans, currency exchange, social security

### 4. Housing (10 pages)
Renting, buying property, utilities, internet providers

### 5. Transportation (10 pages)
Public transport, cars, driving licenses, trains, airports

### 6. Daily Life (15 pages)
Shopping, holidays, waste sorting, postal services, utilities

### 7. Work & Business (10 pages)
Finding jobs, contracts, starting business, freelancing

### 8. Education (10 pages)
Schools, universities, language courses, diplomas

### 9. Culture & Integration (10 pages)
Polish customs, cuisine, expat communities, making friends

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Configuration

### Google AdSense

1. Sign up for Google AdSense at https://www.google.com/adsense
2. Get your AdSense client ID (starts with `ca-pub-`)
3. Replace `ca-pub-XXXXXXXXXXXXXXXX` in the following files:
   - `app/[locale]/layout.tsx` (line 33)
   - `components/AdBanner.tsx` (line 28)
4. Create ad units in AdSense dashboard and update slot IDs in:
   - `app/[locale]/page.tsx` (homepage ads)
   - `app/[locale]/[slug]/page.tsx` (article page ads)

### Translations

The site currently has English content in `messages/en.json`. Translation files for all 20 languages exist as templates in the `messages/` directory but need to be translated.

**Translation Options:**
1. **Manual Translation**: Edit each language JSON file
2. **Professional Service**: Use services like Localize, Phrase, or Crowdin
3. **AI Translation**: Use GPT-4 or Claude to translate with context
4. **Community**: Crowdsource translations from native speakers

**Translation Structure:**
- `common.*` - Common UI elements (header, footer, navigation)
- `pages.*` - Page titles and descriptions
- `content.*` - Detailed page content including FAQs, steps, tips

### Content Customization

To modify page content:
1. Edit translations in `messages/{locale}.json`
2. Update page configuration in `lib/pages-config.ts`
3. Modify page templates in `app/[locale]/[slug]/page.tsx`

## Project Structure

```
info-poland-website/
├── app/
│   └── [locale]/
│       ├── layout.tsx          # Root layout with header/footer
│       ├── page.tsx             # Homepage with all pages
│       └── [slug]/
│           └── page.tsx         # Dynamic page template
├── components/
│   ├── AdBanner.tsx            # Google AdSense component
│   ├── Header.tsx              # Site header with language selector
│   ├── Footer.tsx              # Site footer
│   └── LanguageSelector.tsx   # Language switching component
├── lib/
│   ├── pages-config.ts         # Configuration for all 100 pages
│   └── utils.ts                # Utility functions
├── messages/
│   ├── en.json                 # English translations
│   ├── uk.json                 # Ukrainian translations
│   ├── ru.json                 # Russian translations
│   └── ...                     # Other language files
├── i18n.ts                     # i18n configuration
├── i18n/
│   └── request.ts              # Server-side i18n setup
├── middleware.ts               # Next.js middleware for locale routing
└── tailwind.config.ts          # Tailwind CSS configuration
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables (if any)
4. Deploy!

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- Cloudflare Pages
- AWS Amplify
- Self-hosted with Docker

## Performance

- Static Site Generation (SSG) for all pages
- Optimized images with Next.js Image component
- Lazy loading for ads and components
- Minimal JavaScript bundle size
- Perfect Lighthouse scores achievable

## SEO

- Proper meta tags for all pages
- Open Graph tags for social sharing
- Canonical URLs
- Hreflang tags for all 20 languages
- Semantic HTML structure
- Mobile-friendly design

## License

ISC License - Feel free to use and modify for your needs.

## Contributing

Contributions are welcome! Please feel free to submit pull requests, especially for:
- Content improvements and updates
- Translations to additional languages
- Bug fixes
- UI/UX enhancements

## Support

For issues and questions:
- Open an issue on GitHub
- Check Polish government websites for official information
- Verify all information with official sources

## Disclaimer

This website provides general information for educational purposes. Always verify current requirements and regulations with official Polish government sources. Information may change over time.

## Resources

- [Polish Government](https://www.gov.pl)
- [NFZ (Health Insurance)](https://www.nfz.gov.pl)
- [ZUS (Social Security)](https://www.zus.pl)
- [Foreigners Portal](https://udsc.gov.pl/en/)

---

Built with ❤️ for foreigners living in Poland
