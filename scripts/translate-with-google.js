#!/usr/bin/env node

/**
 * Automated Translation Script using Google Cloud Translation API
 *
 * Usage:
 * 1. Install: npm install @google-cloud/translate
 * 2. Set up Google Cloud credentials
 * 3. Run: node scripts/translate-with-google.js
 */

const fs = require('fs');
const path = require('path');

// Check if Google Translate is installed
try {
  require.resolve('@google-cloud/translate');
} catch (e) {
  console.error('❌ @google-cloud/translate not installed');
  console.error('Please run: npm install @google-cloud/translate');
  process.exit(1);
}

const { Translate } = require('@google-cloud/translate').v2;

const translate = new Translate({
  key: process.env.GOOGLE_TRANSLATE_API_KEY
});

// All languages supported by Google Translate
const languageMap = {
  'uk': 'uk',  // Ukrainian
  'ru': 'ru',  // Russian
  'be': 'be',  // Belarusian
  'ka': 'ka',  // Georgian
  'hi': 'hi',  // Hindi
  'ro': 'ro',  // Romanian
  'zh': 'zh-CN',  // Chinese (Simplified)
  'vi': 'vi',  // Vietnamese
  'tr': 'tr',  // Turkish
  'ne': 'ne',  // Nepali
  'de': 'de',  // German
  'es': 'es',  // Spanish
  'fr': 'fr',  // French
  'it': 'it',  // Italian
  'ar': 'ar',  // Arabic
  'pt': 'pt',  // Portuguese
  'ko': 'ko',  // Korean
  'ja': 'ja',  // Japanese
  'th': 'th',  // Thai
};

let translatedCount = 0;

async function translateObject(obj, targetLang) {
  if (typeof obj === 'string') {
    try {
      const [translation] = await translate.translate(obj, targetLang);
      translatedCount++;
      if (translatedCount % 20 === 0) {
        process.stdout.write(`\r  Translated: ${translatedCount} strings`);
      }
      return translation;
    } catch (error) {
      console.error(`\nError translating: ${error.message}`);
      return obj;
    }
  }

  if (Array.isArray(obj)) {
    const results = [];
    for (const item of obj) {
      results.push(await translateObject(item, targetLang));
    }
    return results;
  }

  if (typeof obj === 'object' && obj !== null) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = await translateObject(value, targetLang);
      // Rate limiting delay
      await new Promise(resolve => setTimeout(resolve, 30));
    }
    return result;
  }

  return obj;
}

async function translateLanguage(langCode) {
  const googleLangCode = languageMap[langCode];

  console.log(`\n🌍 Translating to ${langCode.toUpperCase()}...`);

  try {
    const enPath = path.join(__dirname, '..', 'messages', 'en.json');
    const enContent = JSON.parse(fs.readFileSync(enPath, 'utf8'));

    translatedCount = 0;
    const translated = await translateObject(enContent, googleLangCode);

    const outputPath = path.join(__dirname, '..', 'messages', `${langCode}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(translated, null, 2), 'utf8');

    console.log(`\n   ✅ Complete! Saved to messages/${langCode}.json`);
    return true;
  } catch (error) {
    console.error(`\n   ❌ Error: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('🚀 Google Translate - Translation Script\n');

  const args = process.argv.slice(2);
  const languages = args.length > 0 ? args : Object.keys(languageMap);

  console.log(`Translating ${languages.length} languages\n`);

  let successCount = 0;

  for (const lang of languages) {
    const success = await translateLanguage(lang);
    if (success) successCount++;
  }

  console.log(`\n✅ Successfully translated ${successCount}/${languages.length} languages`);
}

main().catch(console.error);
