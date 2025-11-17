# Google AdSense Setup Guide for Info Poland

This guide will walk you through setting up Google AdSense on your Info Poland website.

## Step 1: Create Google AdSense Account

1. **Go to Google AdSense**: Visit [https://www.google.com/adsense](https://www.google.com/adsense)

2. **Sign up**: Click "Get Started" and sign in with your Google account

3. **Add your website**: Enter your website URL (e.g., `https://info-poland.com`)

4. **Accept Terms**: Read and accept the Google AdSense terms and conditions

5. **Complete your details**:
   - Enter your payment address
   - Verify your phone number
   - Submit your tax information

## Step 2: Get Your Publisher ID

Once your account is created:

1. **Find your Publisher ID**: In AdSense dashboard, look for your publisher ID (starts with `ca-pub-`)
   - Example: `ca-pub-1234567890123456`

2. **Copy this ID** - you'll need it in the next step

## Step 3: Update Your Website Code

Replace the placeholder AdSense IDs in your code:

### Update Layout File

**File: `app/[locale]/layout.tsx`**

Find these lines (around line 124-139):
```tsx
<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>
```

Replace `ca-pub-XXXXXXXXXXXXXXXX` with your actual Publisher ID:
```tsx
<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456"
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>
```

Also update line 139:
```tsx
<meta name="google-adsense-account" content="ca-pub-1234567890123456" />
```

### Update AdBanner Component

**File: `components/AdBanner.tsx`**

Find this line (around line 33):
```tsx
data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
```

Replace with your Publisher ID:
```tsx
data-ad-client="ca-pub-1234567890123456"
```

## Step 4: Create Ad Units in AdSense Dashboard

1. **Go to AdSense Dashboard** → **Ads** → **By ad unit**

2. **Create Display Ads**:
   - Click "Create new ad unit"
   - Choose "Display ads"
   - Name it (e.g., "Homepage Top Banner")
   - Choose "Responsive" size
   - Click "Create"

3. **Get Ad Unit ID**: Copy the `data-ad-slot` value (e.g., `1234567890`)

4. **Create Multiple Ad Units**:
   - Top Banner (homepage)
   - Sidebar Banner (content pages)
   - Article Bottom Banner
   - In-Content Banner

## Step 5: Update Ad Slot IDs in Your Code

### Homepage Ad Slots

**File: `app/[locale]/page.tsx`**

Find these lines and replace the placeholder slot IDs:

```tsx
{/* Top of homepage */}
<AdBanner slot="1234567890" format="auto" />

{/* After every 3 categories */}
<AdBanner slot="2345678901" format="auto" />

{/* Bottom of homepage */}
<AdBanner slot="3456789012" format="auto" />
```

### Article Page Ad Slots

**File: `app/[locale]/[slug]/page.tsx`**

Find these lines and replace:

```tsx
{/* Top of article */}
<AdBanner slot="4567890123" />

{/* Mid content */}
<AdBanner slot="5678901234" format="auto" />

{/* Mid content 2 */}
<AdBanner slot="6789012345" format="auto" />

{/* Bottom */}
<AdBanner slot="7890123456" />
```

## Step 6: Verify Your Site with AdSense

1. **Add AdSense code**: Already done in step 3 ✓

2. **AdSense will verify**: Google will check if the code is on your site
   - This can take a few hours to 48 hours

3. **Wait for approval**: Google will review your site
   - Approval can take a few days to 2 weeks
   - Make sure your site has quality content and follows AdSense policies

## Step 7: AdSense Policies Checklist

Make sure your site complies with:

✅ **Content Requirements**:
- Original, high-quality content
- Content in multiple languages is fine
- Regularly updated content

✅ **Technical Requirements**:
- Functional navigation
- No broken links
- Mobile-friendly design ✓ (Already done!)
- Fast loading times

✅ **Privacy & Legal**:
- Privacy Policy page (create if you don't have one)
- Cookie consent banner
- Terms of Service page

❌ **Prohibited Content** (avoid):
- Adult content
- Copyrighted material
- Misleading information
- Illegal content

## Step 8: Optimize Ad Placement

### Best Practices

1. **Above the fold**: Place at least one ad in visible area
2. **Between content**: Ads within articles perform well
3. **Don't overdo it**: Maximum 3 ads per page is recommended
4. **Responsive**: All ads are set to responsive ✓

### Current Ad Placements

**Homepage** (3 ad units):
- Top banner (after hero section)
- Mid-page (after every 3 categories)
- Bottom section (before popular topics)

**Article Pages** (4 ad units):
- Top of article
- Mid-content (after overview section)
- Mid-content 2 (after steps section)
- Bottom of article

## Step 9: Monitor Performance

1. **AdSense Dashboard**: Check your earnings and performance
   - Go to Reports → Overview

2. **Key Metrics**:
   - Page RPM (Revenue Per Thousand Impressions)
   - Click-through rate (CTR)
   - CPC (Cost Per Click)

3. **Optimize**: Test different ad sizes and placements

## Step 10: Payment Setup

1. **Verify your address**:
   - Google will send a PIN to your address
   - Enter the PIN in AdSense dashboard

2. **Add payment method**:
   - Bank account (direct deposit)
   - Wire transfer
   - Check (some countries)

3. **Payment threshold**: $100 USD
   - You'll receive payment once you reach $100

## Troubleshooting

### Ads not showing?

1. **Check if approved**: Go to AdSense dashboard and check status
2. **Verify code**: Make sure Publisher ID is correct
3. **Check browser console**: Look for any JavaScript errors
4. **Ad blockers**: Disable ad blockers to test
5. **Wait**: New accounts may take 48 hours for ads to show

### Low earnings?

1. **Traffic**: You need visitors to earn money
2. **Quality traffic**: Organic search traffic performs best
3. **Content**: Create valuable, search-optimized content
4. **Ad placement**: Test different locations
5. **Languages**: English content typically earns more, but Ukrainian/Russian can also perform well in Poland

## Expected Earnings

Earnings vary greatly based on:
- **Traffic**: More visitors = more revenue
- **Language**: English typically pays more
- **Niche**: Immigration/legal topics can have good CPM
- **Geography**: Polish visitors may have lower CPC than US/UK visitors

### Realistic Expectations

- **1,000 views/month**: $5-20
- **10,000 views/month**: $50-200
- **100,000 views/month**: $500-2,000
- **1,000,000 views/month**: $5,000-20,000

*Note: These are rough estimates. Actual earnings vary significantly.*

## SEO Tips to Increase Traffic

See the SEO section below for comprehensive guide on driving traffic to your site.

## Need Help?

- **AdSense Help**: [https://support.google.com/adsense](https://support.google.com/adsense)
- **AdSense Policies**: [https://support.google.com/adsense/answer/48182](https://support.google.com/adsense/answer/48182)
- **Community Forum**: [https://support.google.com/adsense/community](https://support.google.com/adsense/community)

---

## Summary Checklist

- [ ] Create AdSense account
- [ ] Get Publisher ID (ca-pub-...)
- [ ] Update layout.tsx with your Publisher ID
- [ ] Update AdBanner.tsx with your Publisher ID
- [ ] Create ad units in AdSense dashboard
- [ ] Update slot IDs in page.tsx and [slug]/page.tsx
- [ ] Submit site for AdSense review
- [ ] Wait for approval (1-2 weeks)
- [ ] Verify address with PIN
- [ ] Add payment method
- [ ] Start earning!

Good luck! 🚀
