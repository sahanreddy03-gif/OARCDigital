import type { ProductVisualId } from '../product-cards/productCardsData';
import type { ClusterMetaConfig } from './buildClusterMetadata';
import { H360_CLUSTER } from '../h360Site';

export type PainPageConfig = {
  meta: ClusterMetaConfig;
  eyebrow: string;
  h1: string;
  pillarHref: string;
  pillarLabel: string;
  diagnosisIntro: string;
  problems: readonly { issue: string; fix: string; productHref: string; productLabel: string }[];
  checklist: readonly { label: string; fixed: string }[];
  related: readonly { label: string; href: string }[];
};

export type PillarPageConfig = {
  meta: ClusterMetaConfig;
  eyebrow: string;
  h1: string;
  intro: string;
  wedge: string;
  visual: ProductVisualId;
  painLinks: readonly { label: string; href: string }[];
  products: readonly { label: string; href: string; sub: string }[];
  related: readonly { label: string; href: string }[];
};

// ─── PILLARS ───────────────────────────────────────────────────────────────

export const MAPS_PILLAR: PillarPageConfig = {
  meta: {
    path: H360_CLUSTER.mapsPillar,
    pageType: 'pillar',
    serviceName: 'H360 Google Maps Visibility — Malta Restaurants',
    title: 'Google Maps for Restaurants Malta | OARC Digital — H360',
    description:
      'Get your restaurant found on Google Maps in Malta — active GBP, local SEO, and the searches-to-calls number owners actually need. H360 by OARC Digital.',
    keywords: ['google maps restaurant malta', 'restaurant google maps ranking malta', 'get found google maps restaurant'],
    og: { title: 'Rank on Google Maps', subtitle: '847 searches → 37 calls · H360', eyebrow: 'H360 · Maps Pillar' },
    breadcrumbName: 'Google Maps Malta',
    faqs: [
      {
        question: 'How do I get my restaurant on Google Maps in Malta?',
        answer:
          'Claim your Google Business Profile, verify the address, add photos and hours, then keep the profile active with weekly posts and review replies. OARC Digital H360 manages GBP for Malta restaurants and tracks the one metric that matters: searches turning into calls and walk-ins.',
      },
      {
        question: 'Why is my restaurant not showing on Google Maps?',
        answer:
          'Common causes: unclaimed profile, wrong category, stale hours, no photos, few reviews, or inconsistent NAP (name/address/phone). H360 diagnoses each gap and fixes what stops you ranking in Malta\'s small market.',
      },
    ],
  },
  eyebrow: 'H360 · Get found on Maps',
  h1: 'Get your restaurant found on Google Maps in Malta.',
  intro:
    'Hungry tourists search "restaurant near me" — they pick whoever shows up first with stars, photos, and recent activity. If your Google page is stale, you\'re invisible while the place across the road fills up.',
  wedge: 'Not a one-time GBP setup — active posts, photos, replies, and local SEO that moves you up Maps.',
  visual: 'google-visibility',
  painLinks: [
    { label: 'Why am I not on Google Maps?', href: '/h360/why-am-i-not-on-google-maps' },
    { label: 'Restaurant not getting walk-ins', href: '/h360/restaurant-not-getting-walk-ins' },
    { label: 'Why is my restaurant empty?', href: '/h360/why-is-my-restaurant-empty' },
  ],
  products: [
    { label: 'Google Visibility', href: '/h360/google-business-profile-restaurant-malta', sub: 'Active GBP · posts · 847→37' },
    { label: 'Smart Google Reviews', href: '/h360/get-more-google-reviews-restaurant-malta', sub: 'One-tap table QR' },
    { label: 'Website', href: '/h360/restaurant-website-malta', sub: 'Menu Google can index' },
  ],
  related: [
    { label: 'H360 hub', href: '/h360' },
    { label: 'How to get more customers', href: '/h360/how-to-get-more-customers-restaurant-malta' },
  ],
};

export const REVIEWS_PILLAR: PillarPageConfig = {
  meta: {
    path: H360_CLUSTER.reviewsPillar,
    pageType: 'pillar',
    serviceName: 'H360 Restaurant Reviews — Malta',
    title: 'Restaurant Google Reviews Malta | OARC Digital — H360',
    description:
      'Get more Google reviews for your Malta restaurant — smart timing, table QR, tourist-friendly flow. H360 by OARC Digital.',
    keywords: ['restaurant google reviews malta', 'get more reviews restaurant malta', 'google reviews restaurant tourists'],
    og: { title: 'Reviews that sell tables', subtitle: '3× in 90 days · H360', eyebrow: 'H360 · Reviews Pillar' },
    breadcrumbName: 'Restaurant reviews Malta',
    faqs: [
      {
        question: 'How do Malta restaurants get more Google reviews?',
        answer:
          'Put a QR on every table that opens the review form in one tap — not a Maps search that takes 3–4 steps. H360 smart review collection uses timing after the meal, Google-compliant (no paid reviews), and works without POS or Sunday terminals.',
      },
      {
        question: 'Do tourists leave Google reviews in Malta?',
        answer:
          'Yes — especially when the prompt is easy ("Happy? Tap to share") while they\'re still at the table. Tourists often review because they use Google to pick their next meal. More reviews = more tourist trust before they sit down.',
      },
    ],
  },
  eyebrow: 'H360 · Reviews that rank',
  h1: 'Get more Google reviews for your restaurant in Malta.',
  intro:
    'Competitors have 200 reviews. You have 12. People search Google — they pick stars and recent reviews, not necessarily the best food on the block. Tourists especially trust reviews before they commit to a table.',
  wedge: 'Not Birdeye or Sunday terminals — a QR on the table. One tap to review.',
  visual: 'reviews-stars',
  painLinks: [
    { label: 'How to get more Google reviews', href: '/h360/how-to-get-more-google-reviews-restaurant' },
    { label: 'Why is my restaurant empty?', href: '/h360/why-is-my-restaurant-empty' },
    { label: 'Not getting walk-ins', href: '/h360/restaurant-not-getting-walk-ins' },
  ],
  products: [
    { label: 'Smart Google Reviews', href: '/h360/get-more-google-reviews-restaurant-malta', sub: 'Table QR · one tap' },
    { label: 'Google Visibility', href: '/h360/google-business-profile-restaurant-malta', sub: 'Profile + review replies' },
    { label: 'Wallet Pass', href: '/h360/restaurant-loyalty-card-malta', sub: 'Repeat guests review again' },
  ],
  related: [
    { label: 'H360 hub', href: '/h360' },
    { label: 'Google Maps pillar', href: H360_CLUSTER.mapsPillar },
  ],
};

export const POS_PILLAR: PillarPageConfig = {
  meta: {
    path: H360_CLUSTER.posPillar,
    pageType: 'pillar',
    serviceName: 'H360 Restaurant System — Malta (No Enterprise POS)',
    title: 'Restaurant POS Alternative Malta | OARC Digital — H360',
    description:
      'H360 restaurant system for Malta — digital menu, kitchen screen, direct orders, QR pay. Complements your till; not a €50/mo Toast replacement. OARC Digital.',
    keywords: ['restaurant pos system malta', 'restaurant management system malta', 'restaurant software malta'],
    og: { title: 'System without enterprise POS', subtitle: 'Menu · kitchen · orders · H360', eyebrow: 'H360 · System Pillar' },
    breadcrumbName: 'Restaurant system Malta',
    faqs: [
      {
        question: 'What is the best system for a small restaurant in Malta?',
        answer:
          'For most Malta small venues, the best stack is modular: digital menu + kitchen routing + direct orders (zero commission) + wallet loyalty — not a full POS rip-and-replace. OARC Digital H360 Full System connects menu, kitchen, and owner view; works alongside your existing cash register.',
      },
      {
        question: 'Does H360 replace my POS?',
        answer:
          'No — H360 complements what you run today. It handles guest-facing digital layer (menu, table order, QR pay, loyalty) and owner visibility. Celery and traditional tills stay for accounting if you use them.',
      },
    ],
  },
  eyebrow: 'H360 · Full system',
  h1: 'Restaurant system for Malta — without enterprise POS lock-in.',
  intro:
    'Menu on paper. Kitchen on shouting. Wolt taking 30%. Twelve apps that don\'t talk. Enterprise POS vendors want hardware contracts and monthly fees before you serve your first cover.',
  wedge: 'Not Toast or Lightspeed bundles — menu, kitchen, orders, and loyalty in one H360 stack that grows module by module.',
  visual: 'venue-360',
  painLinks: [
    { label: 'Losing money to Wolt & Bolt', href: '/h360/losing-money-to-wolt-bolt-malta' },
    { label: 'Why is my restaurant empty?', href: '/h360/why-is-my-restaurant-empty' },
  ],
  products: [
    { label: 'Full System', href: '/h360/restaurant-management-system-malta', sub: 'Menu · kitchen · owner' },
    { label: 'Direct Orders', href: '/h360/restaurant-table-ordering-qr-malta', sub: 'Zero commission · LIVE' },
    { label: 'QR Payment', href: '/h360/restaurant-qr-payment-malta', sub: 'Pay from table' },
    { label: 'Analytics', href: '/h360/restaurant-analytics-without-pos-malta', sub: 'One number at close' },
  ],
  related: [
    { label: 'H360 hub', href: '/h360' },
    { label: 'Booking', href: '/h360/restaurant-booking-system-malta' },
  ],
};

// ─── PAIN PAGES ────────────────────────────────────────────────────────────

export const PAIN_EMPTY: PainPageConfig = {
  meta: {
    path: '/h360/why-is-my-restaurant-empty',
    pageType: 'pain',
    headline: "Why Is Your Restaurant Empty? Here's What's Actually Broken",
    title: 'Why Is My Restaurant Empty? | OARC Digital — H360',
    description:
      'Diagnose why your Malta restaurant sits empty — Maps, reviews, aggregators, repeat guests. Free ARC audit by OARC Digital operators.',
    keywords: ['why is my restaurant empty', 'restaurant empty malta', 'why no customers restaurant malta'],
    og: { title: 'Why your restaurant is empty', subtitle: 'Diagnose first · H360', eyebrow: 'H360 · Diagnosis' },
    breadcrumbName: 'Why is my restaurant empty',
    faqs: [
      {
        question: 'Why is my restaurant not getting customers in Malta?',
        answer:
          'Usually a combination: not visible on Google Maps, too few reviews vs competitors, leaking margin to Wolt/Bolt, no system to bring guests back, or invisible to tourists searching on phones. OARC Digital H360 diagnoses which gaps apply to your venue — built in Malta for restaurants aiming at the top, not the middle.',
      },
      {
        question: 'My food is good but tables are empty — why?',
        answer:
          'Good food doesn\'t rank on Google. Visibility, reviews, and repeat systems do. The worse place across the road may have 200 reviews and an active Maps profile. Diagnose visibility before spending on ads.',
      },
    ],
  },
  eyebrow: 'H360 · Diagnosis',
  h1: "Why is your restaurant empty? Here's what's actually broken.",
  pillarHref: '/h360',
  pillarLabel: 'H360 hub',
  diagnosisIntro:
    'Empty tables on a Tuesday. The place across the road is full — and their food isn\'t better. Money bleeding to Wolt. Most agencies sell you posts and ads. We diagnose why you\'re invisible first — because we run restaurants in Malta and we know exactly what\'s broken.',
  problems: [
    { issue: 'Not showing on Google Maps', fix: 'Active GBP + local SEO', productHref: '/h360/google-business-profile-restaurant-malta', productLabel: 'Google Visibility' },
    { issue: 'Competitors have 10× your reviews', fix: 'One-tap table QR reviews', productHref: '/h360/get-more-google-reviews-restaurant-malta', productLabel: 'Smart Reviews' },
    { issue: '30% of delivery margin gone', fix: 'Direct table orders — zero commission', productHref: '/h360/restaurant-table-ordering-qr-malta', productLabel: 'Direct Orders' },
    { issue: 'Guests visit once, never return', fix: 'Wallet loyalty + WhatsApp win-back', productHref: '/h360/restaurant-loyalty-card-malta', productLabel: 'Wallet Pass' },
  ],
  checklist: [
    { label: 'Not on Maps / stale GBP', fixed: 'Google Visibility' },
    { label: 'Under 50 Google reviews', fixed: 'Smart Reviews QR' },
    { label: 'Losing orders to Wolt', fixed: 'Direct Orders' },
    { label: 'No repeat guest system', fixed: 'Wallet + WhatsApp' },
  ],
  related: [
    { label: 'Not on Google Maps', href: '/h360/why-am-i-not-on-google-maps' },
    { label: 'Losing to Wolt', href: '/h360/losing-money-to-wolt-bolt-malta' },
    { label: 'More customers', href: '/h360/how-to-get-more-customers-restaurant-malta' },
  ],
};

export const PAIN_NOT_ON_MAPS: PainPageConfig = {
  meta: {
    path: '/h360/why-am-i-not-on-google-maps',
    pageType: 'pain',
    headline: 'Why Am I Not on Google Maps?',
    title: 'Why Am I Not on Google Maps? | OARC Digital — H360',
    description: 'Fix why your Malta restaurant doesn\'t show on Google Maps — claim, category, photos, reviews. H360 diagnosis.',
    keywords: ['why am i not on google maps', 'restaurant not on google maps malta', 'google maps restaurant missing'],
    og: { title: 'Not on Google Maps?', subtitle: 'Claim · fix · rank · H360', eyebrow: 'H360 · Diagnosis' },
    breadcrumbName: 'Not on Google Maps',
    faqs: [
      {
        question: 'Why is my restaurant not appearing on Google Maps?',
        answer:
          'Usually: profile not claimed, wrong business category, address not verified, duplicate listing, or suspended for policy issues. Less obvious: stale profile with no photos/posts — Google shows active competitors first. H360 claims, fixes, and keeps your GBP active for Malta searches.',
      },
    ],
  },
  eyebrow: 'H360 · Diagnosis',
  h1: 'Why am I not on Google Maps?',
  pillarHref: H360_CLUSTER.mapsPillar,
  pillarLabel: 'Google Maps guide',
  diagnosisIntro:
    'Someone searches "restaurant Sliema" — you\'re not there. Or you appear on page three with no photos while a competitor with 180 reviews sits at the top. In Malta\'s small market, Maps visibility is the front door.',
  problems: [
    { issue: 'Profile never claimed or verified', fix: 'Claim + verify GBP', productHref: '/h360/google-business-profile-restaurant-malta', productLabel: 'Google Visibility' },
    { issue: 'Wrong category or duplicate listing', fix: 'Category + dedupe audit', productHref: H360_CLUSTER.mapsPillar, productLabel: 'Maps pillar' },
    { issue: 'No photos / stale hours', fix: 'Weekly posts + holiday hours', productHref: '/h360/google-business-profile-restaurant-malta', productLabel: 'Google Visibility' },
    { issue: 'Few reviews vs competitors', fix: 'Table QR review collection', productHref: '/h360/get-more-google-reviews-restaurant-malta', productLabel: 'Smart Reviews' },
  ],
  checklist: [
    { label: 'GBP not claimed', fixed: 'Claim profile' },
    { label: 'No menu photos', fixed: 'Upload + weekly posts' },
    { label: '12 reviews vs 200', fixed: 'Review QR' },
    { label: '847 searches · 0 calls tracked', fixed: 'Visibility dashboard' },
  ],
  related: [
    { label: 'Empty restaurant', href: '/h360/why-is-my-restaurant-empty' },
    { label: 'No walk-ins', href: '/h360/restaurant-not-getting-walk-ins' },
    { label: 'Google Visibility product', href: '/h360/google-business-profile-restaurant-malta' },
  ],
};

export const PAIN_MORE_CUSTOMERS: PainPageConfig = {
  meta: {
    path: '/h360/how-to-get-more-customers-restaurant-malta',
    pageType: 'pain',
    headline: 'How to Get More Customers for Your Restaurant in Malta',
    title: 'How to Get More Customers Restaurant Malta | OARC Digital — H360',
    description: 'How Malta restaurants get more customers — Maps, reviews, direct orders, loyalty. Method by OARC Digital operators.',
    keywords: ['how to get more customers restaurant malta', 'more customers restaurant malta', 'restaurant marketing malta'],
    og: { title: 'More customers — the method', subtitle: 'Find · trust · return · H360', eyebrow: 'H360 · Guide' },
    breadcrumbName: 'More customers Malta',
    faqs: [
      {
        question: 'How do I get more customers for my restaurant in Malta?',
        answer:
          'Four layers: get found on Google Maps (active GBP + SEO), build trust with reviews, capture walk-ins with a real website and social proof, then keep margin with direct orders and bring guests back with wallet loyalty and WhatsApp. OARC Digital H360 is the modular stack — diagnose which layer is broken first.',
      },
    ],
  },
  eyebrow: 'H360 · Guide',
  h1: 'How to get more customers for your restaurant in Malta.',
  pillarHref: '/h360',
  pillarLabel: 'H360 hub',
  diagnosisIntro:
    'More customers isn\'t one magic ad. It\'s find → trust → visit → return. Most venues break at step one (invisible on Maps) or step four (no repeat system). We run restaurants here — this is the order we fix things.',
  problems: [
    { issue: 'Step 1 — Find', fix: 'Google Maps + website', productHref: H360_CLUSTER.mapsPillar, productLabel: 'Maps pillar' },
    { issue: 'Step 2 — Trust', fix: 'Google reviews + social', productHref: H360_CLUSTER.reviewsPillar, productLabel: 'Reviews pillar' },
    { issue: 'Step 3 — Visit', fix: 'Booking + events + walk-in proof', productHref: '/h360/restaurant-booking-system-malta', productLabel: 'Booking' },
    { issue: 'Step 4 — Return', fix: 'Loyalty + WhatsApp + SMS', productHref: '/h360/whatsapp-marketing-restaurant-malta', productLabel: 'WhatsApp' },
  ],
  checklist: [
    { label: 'Invisible on Maps', fixed: 'Google Visibility' },
    { label: 'Low review count', fixed: 'Smart Reviews' },
    { label: 'No online booking', fixed: 'Booking link' },
    { label: 'One-time guests only', fixed: 'Wallet + SEND' },
  ],
  related: [
    { label: 'Empty restaurant', href: '/h360/why-is-my-restaurant-empty' },
    { label: 'No walk-ins', href: '/h360/restaurant-not-getting-walk-ins' },
    { label: 'Social & Ads', href: '/h360/restaurant-social-media-malta' },
  ],
};

export const PAIN_MORE_REVIEWS: PainPageConfig = {
  meta: {
    path: '/h360/how-to-get-more-google-reviews-restaurant',
    pageType: 'pain',
    headline: 'How to Get More Google Reviews for Your Restaurant',
    title: 'How to Get More Google Reviews Restaurant | OARC Digital — H360',
    description: 'How restaurants get more Google reviews — table QR, one tap, no POS. Guide by OARC Digital H360.',
    keywords: ['how to get more google reviews restaurant', 'get google reviews restaurant', 'restaurant review qr'],
    og: { title: 'More Google reviews', subtitle: 'One tap · no POS · H360', eyebrow: 'H360 · Guide' },
    breadcrumbName: 'More Google reviews',
    faqs: [
      {
        question: 'How do I get more Google reviews for my restaurant?',
        answer:
          'Use a QR on every table that opens your Google review form directly — one tap, not 3–4 steps through Maps. Prompt while guests are happy ("Happy? Tap to share"). No incentives (Google-compliant). H360 Smart Reviews needs no POS or payment terminal.',
      },
    ],
  },
  eyebrow: 'H360 · Guide',
  h1: 'How to get more Google reviews for your restaurant.',
  pillarHref: H360_CLUSTER.reviewsPillar,
  pillarLabel: 'Reviews guide',
  diagnosisIntro:
    'You have 14 reviews. The competitor has 214. Every tourist checks stars before they sit. Free DIY QRs link to Maps search — guests quit at step 2. You need one step to the review form.',
  problems: [
    { issue: 'Free QR links to Maps search', fix: 'Direct review-form deep link', productHref: '/h360/get-more-google-reviews-restaurant-malta', productLabel: 'Smart Reviews' },
    { issue: 'Waiter awkwardness asking', fix: 'Table card: "Happy? Tap to share"', productHref: '/h360/get-more-google-reviews-restaurant-malta', productLabel: 'Smart Reviews' },
    { issue: 'Sunday/Birdeye need POS', fix: 'QR only — no hardware', productHref: '/h360/get-more-google-reviews-restaurant-malta', productLabel: 'Smart Reviews' },
    { issue: 'Bad reviews with no reply', fix: 'AI-drafted owner replies', productHref: '/h360/google-business-profile-restaurant-malta', productLabel: 'Google Visibility' },
  ],
  checklist: [
    { label: 'QR → Maps search (3–4 taps)', fixed: 'Direct review form' },
    { label: 'No table prompt', fixed: '"Happy? Tap to share"' },
    { label: 'Needs POS integration', fixed: 'QR tent card only' },
    { label: 'Reviews unanswered', fixed: 'Reply in one tap' },
  ],
  related: [
    { label: 'Reviews pillar', href: H360_CLUSTER.reviewsPillar },
    { label: 'Not on Maps', href: '/h360/why-am-i-not-on-google-maps' },
    { label: 'Google Visibility', href: '/h360/google-business-profile-restaurant-malta' },
  ],
};

export const PAIN_WOLT: PainPageConfig = {
  meta: {
    path: '/h360/losing-money-to-wolt-bolt-malta',
    pageType: 'pain',
    headline: 'Losing Money to Wolt and Bolt in Malta',
    title: 'Losing Money to Wolt & Bolt Malta | OARC Digital — H360',
    description: 'Stop losing 22–30% to Wolt and Bolt — direct orders, keep customer data, zero commission. H360 by OARC Digital.',
    keywords: ['wolt commission restaurant malta', 'bolt food delivery malta restaurant', 'stop using wolt restaurant'],
    og: { title: 'Keep 100% of orders', subtitle: 'Zero commission · H360 ORDER', eyebrow: 'H360 · Margin' },
    breadcrumbName: 'Wolt & Bolt margin',
    faqs: [
      {
        question: 'How much does Wolt take from restaurants in Malta?',
        answer:
          'Wolt and Bolt typically take 15–30% commission per order. On €500/day delivery at 22%: ~€3,300/month in fees. Direct table and pickup orders via H360 ORDER keep 100% of the order value — guest scans QR, kitchen prints, no aggregator in the middle.',
      },
      {
        question: 'Can I keep using Wolt and add direct orders?',
        answer:
          'Yes. Many venues keep aggregators for discovery while shifting regulars to a direct link (Instagram bio, GBP, table QR). Over time, margin improves as repeat customers order direct.',
      },
    ],
  },
  eyebrow: 'H360 · Margin',
  h1: 'Losing money to Wolt and Bolt in Malta?',
  pillarHref: H360_CLUSTER.posPillar,
  pillarLabel: 'Restaurant system',
  diagnosisIntro:
    '€15 pasta. Wolt takes €4.50. You needed volume — now you\'re busy and broke. Worse: customer data belongs to Wolt. You never know who ordered or how to get them back. Direct orders fix margin and ownership.',
  problems: [
    { issue: '22–30% commission per order', fix: 'Zero commission direct orders', productHref: '/h360/restaurant-table-ordering-qr-malta', productLabel: 'Direct Orders · LIVE' },
    { issue: 'No customer data / email', fix: 'Wallet pass + WhatsApp opt-in', productHref: '/h360/restaurant-loyalty-card-malta', productLabel: 'Wallet Pass' },
    { issue: 'Guests only find you on Wolt', fix: 'Link on GBP, site, Instagram', productHref: '/h360/restaurant-website-malta', productLabel: 'Website' },
    { issue: 'Table orders still via waiter only', fix: 'QR menu → kitchen print', productHref: '/h360/restaurant-table-ordering-qr-malta', productLabel: 'Direct Orders' },
  ],
  checklist: [
    { label: '€500/day @ 22% = €3,300/mo fees', fixed: 'Direct orders €0 commission' },
    { label: 'Wolt owns customer data', fixed: 'Wallet + SEND capture' },
    { label: 'No direct order link', fixed: 'QR + website + GBP' },
    { label: 'Slow table turns', fixed: 'QR pay from table' },
  ],
  related: [
    { label: 'Direct Orders product', href: '/h360/restaurant-table-ordering-qr-malta' },
    { label: 'QR Payment', href: '/h360/restaurant-qr-payment-malta' },
    { label: 'Empty restaurant', href: '/h360/why-is-my-restaurant-empty' },
  ],
};

export const PAIN_WALK_INS: PainPageConfig = {
  meta: {
    path: '/h360/restaurant-not-getting-walk-ins',
    pageType: 'pain',
    headline: 'Restaurant Not Getting Walk-Ins in Malta',
    title: 'Restaurant Not Getting Walk-Ins Malta | OARC Digital — H360',
    description: 'Why your Malta restaurant isn\'t getting walk-ins — Maps ranking, reviews, hours, photos. Diagnose with H360.',
    keywords: ['restaurant not getting walk ins malta', 'no walk in customers restaurant', 'restaurant foot traffic malta'],
    og: { title: 'No walk-ins?', subtitle: 'Maps · reviews · hours · H360', eyebrow: 'H360 · Diagnosis' },
    breadcrumbName: 'No walk-ins',
    faqs: [
      {
        question: 'Why is my restaurant not getting walk-in customers?',
        answer:
          'Walk-ins follow visibility: Google Maps ranking, review count and recency, accurate hours (especially Malta public holidays), and photos that sell the room. Tourists decide on phones before they walk the street. Fix Maps + reviews first — ads second.',
      },
    ],
  },
  eyebrow: 'H360 · Diagnosis',
  h1: 'Restaurant not getting walk-ins in Malta?',
  pillarHref: H360_CLUSTER.mapsPillar,
  pillarLabel: 'Google Maps guide',
  diagnosisIntro:
    'St Julian\'s strip is busy — your door isn\'t. Tourists already picked three places on Google before they left the hotel. Walk-ins are a visibility problem dressed as a location problem.',
  problems: [
    { issue: 'Rank below competitors on Maps', fix: 'Active GBP + SEO', productHref: '/h360/google-business-profile-restaurant-malta', productLabel: 'Google Visibility' },
    { issue: 'Stars/reviews lose the click', fix: 'Review QR on tables', productHref: '/h360/get-more-google-reviews-restaurant-malta', productLabel: 'Smart Reviews' },
    { issue: 'Wrong hours on holidays', fix: '14 Malta holidays tracked', productHref: '/h360/google-business-profile-restaurant-malta', productLabel: 'Google Visibility' },
    { issue: 'No "open now" food photos', fix: 'Weekly posts + social', productHref: '/h360/restaurant-social-media-malta', productLabel: 'Social & Ads' },
  ],
  checklist: [
    { label: 'Page 3 on Maps', fixed: 'GBP + SEO lift' },
    { label: '4.2★ · 18 reviews', fixed: 'Review collection' },
    { label: 'Closed on public holiday — still "open"', fixed: 'Holiday hours sync' },
    { label: 'Dark / old photos', fixed: 'Fresh posts weekly' },
  ],
  related: [
    { label: 'Not on Maps', href: '/h360/why-am-i-not-on-google-maps' },
    { label: 'More customers', href: '/h360/how-to-get-more-customers-restaurant-malta' },
    { label: 'Maps pillar', href: H360_CLUSTER.mapsPillar },
  ],
};

export const ALL_PAIN_PAGES = [
  PAIN_EMPTY,
  PAIN_NOT_ON_MAPS,
  PAIN_MORE_CUSTOMERS,
  PAIN_MORE_REVIEWS,
  PAIN_WOLT,
  PAIN_WALK_INS,
] as const;

export const ALL_PILLAR_PAGES = [MAPS_PILLAR, REVIEWS_PILLAR, POS_PILLAR] as const;

/** FAQ hub — top AEO queries across cluster */
export const FAQ_HUB_META: ClusterMetaConfig = {
  path: H360_CLUSTER.faq,
  pageType: 'faq',
  title: 'Restaurant Marketing FAQ Malta | OARC Digital — H360',
  description:
    'Answers Malta restaurant owners ask — Google Maps, reviews, Wolt commission, bookings, loyalty. H360 FAQ by OARC Digital.',
  keywords: ['restaurant marketing faq malta', 'h360 faq', 'restaurant google malta questions'],
  og: { title: 'H360 FAQ', subtitle: 'Real owner questions · Malta', eyebrow: 'H360 · FAQ' },
  breadcrumbName: 'FAQ',
  faqs: [
    ...MAPS_PILLAR.meta.faqs,
    ...REVIEWS_PILLAR.meta.faqs,
    ...PAIN_EMPTY.meta.faqs,
    ...PAIN_WOLT.meta.faqs,
    {
      question: 'What is H360?',
      answer:
        'H360 is OARC Digital\'s hospitality product line for Malta restaurants — modular tools for Google visibility, reviews, direct orders, loyalty, WhatsApp, and operations. Built in Malta for venues on the road to #1. Not a generic agency retainer.',
    },
    {
      question: 'How is H360 different from a marketing agency?',
      answer:
        'Agencies sell posts and ads. H360 diagnoses why you\'re invisible (Maps, reviews, margin leak to aggregators), then fixes with specific tools — each product is its own page, schema, and method. Operator authority, not Warsaw funnel copy.',
    },
  ],
};

export const FAQ_HUB_SECTIONS = [
  { title: 'Visibility & Google Maps', links: [{ q: 'Why am I not on Google Maps?', href: '/h360/why-am-i-not-on-google-maps' }, { q: 'Google Visibility product', href: '/h360/google-business-profile-restaurant-malta' }] },
  { title: 'Reviews', links: [{ q: 'How to get more Google reviews', href: '/h360/how-to-get-more-google-reviews-restaurant' }, { q: 'Smart Reviews product', href: '/h360/get-more-google-reviews-restaurant-malta' }] },
  { title: 'Margin & orders', links: [{ q: 'Losing money to Wolt', href: '/h360/losing-money-to-wolt-bolt-malta' }, { q: 'Direct Orders · LIVE', href: '/h360/restaurant-table-ordering-qr-malta' }] },
  { title: 'Customers & walk-ins', links: [{ q: 'Why is my restaurant empty?', href: '/h360/why-is-my-restaurant-empty' }, { q: 'Not getting walk-ins', href: '/h360/restaurant-not-getting-walk-ins' }] },
] as const;
