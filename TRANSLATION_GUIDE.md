# Translation Guide

The website has been built with 100 pages and 20 language support. Currently, only English content is complete. This guide explains how to translate all content into the remaining 19 languages.

## Current Status

- ✅ **English (en)**: Complete with all 100 pages fully written
- ⏳ **Other 19 languages**: Template files created, awaiting translation

## Translation Options

### Option 1: Professional Translation Services (Recommended for Production)

**Best for**: Production websites with high quality requirements

**Services**:
1. **Localize.js** (https://localize.com) - $25-500/month
   - Automated translation + human review
   - Integrates with JSON files
   - Good for ongoing updates

2. **Phrase** (https://phrase.com) - Custom pricing
   - Professional translation management
   - Supports 20+ languages
   - Developer-friendly API

3. **Crowdin** (https://crowdin.com) - Free for open source
   - Community-powered translations
   - Quality voting system
   - Git integration

4. **Freelance Translators** (Upwork, Fiverr)
   - $0.05-0.15 per word
   - Native speakers
   - For ~10,000 words × 19 languages = $9,500-28,500

### Option 2: AI Translation (Fast & Affordable)

**Best for**: Quick launch, MVP, or development/testing

**Tools**:
1. **DeepL API** (https://www.deepl.com/pro-api)
   - €20/month + €20 per million characters
   - Best quality AI translation
   - Supports most of your target languages
   - Recommended script below

2. **Google Cloud Translation**
   - $20 per million characters
   - Supports all 20 languages
   - Good quality, slightly lower than DeepL

3. **ChatGPT/Claude API**
   - Can translate with context awareness
   - Good for technical content
   - Requires careful prompting

### Option 3: Hybrid Approach (Recommended)

**Best balance of quality, cost, and speed**:

1. **AI translate first** (1-2 days, ~$100-200)
   - Use DeepL or Google Translate API
   - Translate all content automatically

2. **Native speaker review** (1-2 weeks, ~$2,000-5,000)
   - Hire native speakers for top 5 languages
   - Review and fix AI translations
   - Focus on: Ukrainian, Russian, German, Hindi, Spanish

3. **Community contributions** (ongoing)
   - Open source the translations
   - Accept pull requests from community
   - Gradually improve over time

## Quick Start: Automated Translation with DeepL

### Step 1: Install Dependencies

```bash
npm install --save-dev deepl-node
```

### Step 2: Get DeepL API Key

1. Sign up at https://www.deepl.com/pro-api
2. Get your API key
3. Add to `.env` file:

```bash
DEEPL_API_KEY=your-api-key-here
```

### Step 3: Run Translation Script

Create `scripts/translate-with-deepl.js`:

```javascript
const fs = require('fs');
const deepl = require('deepl-node');

const translator = new deepl.Translator(process.env.DEEPL_API_KEY);

const languageMap = {
  'uk': 'uk',  // Ukrainian
  'ru': 'ru',  // Russian
  'de': 'de',  // German
  'es': 'es',  // Spanish
  'fr': 'fr',  // French
  'it': 'it',  // Italian
  'pl': 'pl',  // Polish
  'pt': 'pt-BR',  // Portuguese
  'zh': 'zh',  // Chinese
  'ja': 'ja',  // Japanese
  'ko': 'ko',  // Korean
};

async function translateObject(obj, targetLang) {
  if (typeof obj === 'string') {
    const result = await translator.translateText(obj, 'en', targetLang);
    return result.text;
  }

  if (Array.isArray(obj)) {
    return Promise.all(obj.map(item => translateObject(item, targetLang)));
  }

  if (typeof obj === 'object' && obj !== null) {
    const translated = {};
    for (const [key, value] of Object.entries(obj)) {
      translated[key] = await translateObject(value, targetLang);
      // Add small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    return translated;
  }

  return obj;
}

async function translateLanguage(langCode) {
  console.log(`Translating to ${langCode}...`);

  const enContent = JSON.parse(fs.readFileSync('./messages/en.json', 'utf8'));
  const deeplLangCode = languageMap[langCode];

  if (!deeplLangCode) {
    console.log(`Skipping ${langCode} - not supported by DeepL`);
    return;
  }

  try {
    const translated = await translateObject(enContent, deeplLangCode);
    fs.writeFileSync(
      `./messages/${langCode}.json`,
      JSON.stringify(translated, null, 2),
      'utf8'
    );
    console.log(`✓ ${langCode} translation complete`);
  } catch (error) {
    console.error(`✗ Error translating ${langCode}:`, error.message);
  }
}

async function main() {
  const languages = ['uk', 'ru', 'de', 'es', 'fr', 'it', 'pt', 'zh', 'ja', 'ko'];

  for (const lang of languages) {
    await translateLanguage(lang);
  }

  console.log('\\nTranslation complete!');
  console.log('Note: Some languages may need manual translation or alternative services.');
}

main().catch(console.error);
```

### Step 4: Run the Script

```bash
node scripts/translate-with-deepl.js
```

This will translate all supported languages automatically.

## Languages Requiring Special Attention

Some languages are not supported by DeepL and need alternative approaches:

- **Belarusian (be)**: Use Google Translate API or manual translation
- **Georgian (ka)**: Google Translate or native speaker
- **Hindi (hi)**: DeepL or Google Translate
- **Romanian (ro)**: DeepL supported
- **Vietnamese (vi)**: Google Translate
- **Turkish (tr)**: DeepL supported
- **Nepali (ne)**: Google Translate or manual
- **Arabic (ar)**: DeepL or Google Translate
- **Thai (th)**: Google Translate

## Translation Quality Checklist

After translating, verify:

- [ ] All JSON files are valid (no syntax errors)
- [ ] Special characters are properly escaped
- [ ] Technical terms are consistently translated
- [ ] Polish-specific terms (PESEL, NIP, ZUS, etc.) remain unchanged
- [ ] Formatting placeholders are preserved
- [ ] Numbers and dates follow local conventions
- [ ] Cultural appropriateness is maintained

## Testing Translations

```bash
# Build the site to check for errors
npm run build

# Start dev server and manually check each language
npm run dev

# Visit:
# http://localhost:3000/en (English)
# http://localhost:3000/uk (Ukrainian)
# http://localhost:3000/ru (Russian)
# etc.
```

## Cost Estimates

**AI Translation (DeepL)**:
- English content: ~150,000 words
- 19 languages × 150,000 = 2,850,000 words
- At ~5 characters per word = 14,250,000 characters
- Cost: ~€300 ($320)

**Professional Human Translation**:
- $0.08/word average
- 2,850,000 words × $0.08 = $228,000
- Or focus on top 5 languages: $60,000

**Hybrid (AI + Review)**:
- AI translation: $320
- Native review (top 5 languages): $3,000-5,000
- **Total: ~$3,500-5,500**

## Recommended Workflow

1. **Week 1**: AI translate all languages ($300)
2. **Week 2-3**: Native speaker review for Ukrainian & Russian ($1,500)
3. **Week 4**: Review German, Hindi, Spanish ($1,500)
4. **Launch**: Site live in 20 languages
5. **Ongoing**: Community contributions and improvements

## Getting Help

- **For technical issues**: Open an issue on GitHub
- **For translation help**: Consider posting on r/translator on Reddit
- **For professional services**: Contact translation agencies

## Files to Translate

All files are in `/messages/` directory:

```
messages/
├── en.json (SOURCE - DO NOT MODIFY)
├── uk.json (Ukrainian - TRANSLATE)
├── ru.json (Russian - TRANSLATE)
├── be.json (Belarusian - TRANSLATE)
├── ka.json (Georgian - TRANSLATE)
├── hi.json (Hindi - TRANSLATE)
├── ro.json (Romanian - TRANSLATE)
├── zh.json (Chinese - TRANSLATE)
├── vi.json (Vietnamese - TRANSLATE)
├── tr.json (Turkish - TRANSLATE)
├── ne.json (Nepali - TRANSLATE)
├── de.json (German - TRANSLATE)
├── es.json (Spanish - TRANSLATE)
├── fr.json (French - TRANSLATE)
├── it.json (Italian - TRANSLATE)
├── ar.json (Arabic - TRANSLATE)
├── pt.json (Portuguese - TRANSLATE)
├── ko.json (Korean - TRANSLATE)
├── ja.json (Japanese - TRANSLATE)
└── th.json (Thai - TRANSLATE)
```

## Next Steps

1. Choose your translation approach (AI, Professional, or Hybrid)
2. Set up translation service (DeepL recommended)
3. Run translation script
4. Review and test translations
5. Deploy to production

Remember: It's better to launch with AI-translated content and improve over time than to wait months for perfect translations!
