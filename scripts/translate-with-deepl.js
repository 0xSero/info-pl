#!/usr/bin/env node

/**
 * Automated Translation Script using DeepL API
 *
 * Usage:
 * 1. Install: npm install deepl-node dotenv
 * 2. Set DEEPL_API_KEY in .env file
 * 3. Run: node scripts/translate-with-deepl.js
 */

const fs = require('fs');
const path = require('path');

// Check if deepl-node is installed
try {
  require.resolve('deepl-node');
} catch (e) {
  console.error('❌ deepl-node not installed. Please run: npm install deepl-node dotenv');
  process.exit(1);
}

const deepl = require('deepl-node');
require('dotenv').config();

if (!process.env.DEEPL_API_KEY) {
  console.error('❌ DEEPL_API_KEY not found in environment variables');
  console.error('Please add DEEPL_API_KEY=your-key-here to .env file');
  process.exit(1);
}

const translator = new deepl.Translator(process.env.DEEPL_API_KEY);

// Language mapping: our code -> DeepL code
const languageMap = {
  'uk': 'uk',      // Ukrainian
  'ru': 'ru',      // Russian
  'de': 'de',      // German
  'es': 'es',      // Spanish
  'fr': 'fr',      // French
  'it': 'it',      // Italian
  'pt': 'pt-BR',   // Portuguese (Brazilian)
  'zh': 'zh',      // Chinese
  'ja': 'ja',      // Japanese
  'ko': 'ko',      // Korean
  'ro': 'ro',      // Romanian
  'tr': 'tr',      // Turkish
};

// Track translation progress
let translatedStrings = 0;
let totalStrings = 0;

// Count strings in object
function countStrings(obj) {
  let count = 0;
  if (typeof obj === 'string') {
    count++;
  } else if (Array.isArray(obj)) {
    obj.forEach(item => count += countStrings(item));
  } else if (typeof obj === 'object' && obj !== null) {
    Object.values(obj).forEach(value => count += countStrings(value));
  }
  return count;
}

// Translate object recursively
async function translateObject(obj, targetLang, path = '') {
  if (typeof obj === 'string') {
    try {
      const result = await translator.translateText(obj, 'en', targetLang);
      translatedStrings++;
      if (translatedStrings % 10 === 0) {
        process.stdout.write(`\r  Progress: ${translatedStrings}/${totalStrings} strings`);
      }
      return result.text;
    } catch (error) {
      console.error(`\n  Error translating "${obj.substring(0, 50)}...": ${error.message}`);
      return obj; // Return original on error
    }
  }

  if (Array.isArray(obj)) {
    const translated = [];
    for (const item of obj) {
      translated.push(await translateObject(item, targetLang, path));
    }
    return translated;
  }

  if (typeof obj === 'object' && obj !== null) {
    const translated = {};
    for (const [key, value] of Object.entries(obj)) {
      translated[key] = await translateObject(value, targetLang, `${path}.${key}`);
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    return translated;
  }

  return obj;
}

// Translate a single language
async function translateLanguage(langCode) {
  const deeplLangCode = languageMap[langCode];

  if (!deeplLangCode) {
    console.log(`⏭️  Skipping ${langCode} - not supported by DeepL`);
    console.log(`   Use Google Translate API or manual translation for this language`);
    return false;
  }

  console.log(`\n🌍 Translating to ${langCode.toUpperCase()} (${deeplLangCode})...`);

  try {
    // Load English content
    const enPath = path.join(__dirname, '..', 'messages', 'en.json');
    const enContent = JSON.parse(fs.readFileSync(enPath, 'utf8'));

    // Count total strings
    translatedStrings = 0;
    totalStrings = countStrings(enContent);
    console.log(`   Total strings to translate: ${totalStrings}`);

    // Translate
    const translated = await translateObject(enContent, deeplLangCode);

    // Save translated content
    const outputPath = path.join(__dirname, '..', 'messages', `${langCode}.json`);
    fs.writeFileSync(
      outputPath,
      JSON.stringify(translated, null, 2),
      'utf8'
    );

    console.log(`\n   ✅ Translation complete! Saved to messages/${langCode}.json`);
    return true;
  } catch (error) {
    console.error(`\n   ❌ Error translating ${langCode}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  console.log('='.repeat(60));
  console.log('🚀 Automated Translation Script');
  console.log('='.repeat(60));

  // Get languages to translate from command line args or use all
  const args = process.argv.slice(2);
  let languages;

  if (args.length > 0) {
    languages = args;
    console.log(`\nTranslating specified languages: ${languages.join(', ')}`);
  } else {
    languages = Object.keys(languageMap);
    console.log(`\nTranslating all supported languages (${languages.length} languages)`);
  }

  const startTime = Date.now();
  let successCount = 0;
  let failCount = 0;

  for (const lang of languages) {
    const success = await translateLanguage(lang);
    if (success) successCount++;
    else failCount++;
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log('\n' + '='.repeat(60));
  console.log('📊 Translation Summary');
  console.log('='.repeat(60));
  console.log(`✅ Successfully translated: ${successCount} languages`);
  console.log(`❌ Failed: ${failCount} languages`);
  console.log(`⏱️  Total time: ${duration}s`);
  console.log('\n💡 Next steps:');
  console.log('   1. Review translations: npm run dev');
  console.log('   2. Test build: npm run build');
  console.log('   3. For unsupported languages, see TRANSLATION_GUIDE.md');

  // List unsupported languages
  const allLangs = ['uk', 'ru', 'be', 'ka', 'hi', 'ro', 'zh', 'vi', 'tr', 'ne', 'de', 'es', 'fr', 'it', 'ar', 'pt', 'ko', 'ja', 'th'];
  const unsupported = allLangs.filter(lang => !languageMap[lang]);

  if (unsupported.length > 0) {
    console.log('\n⚠️  Unsupported languages (need alternative translation):');
    console.log(`   ${unsupported.join(', ')}`);
  }
}

// Handle errors
process.on('unhandledRejection', (error) => {
  console.error('\n❌ Unhandled error:', error);
  process.exit(1);
});

// Run
main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
