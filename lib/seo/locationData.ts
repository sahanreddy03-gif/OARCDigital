// Rich, location-specific data for ALL 50 Malta localities.
//
// Used by lib/seo/generateUniquePageContent.ts so every Malta page reads
// like a different page — not a slot-filled template — and so future
// restore decisions (Tier 1/2/3) can be data-driven instead of hardcoded.
//
// Coverage:
//   - 10 KEPT localities (also listed in shared/seoConfig.ts maltaLocations)
//     are the only ones that currently render pages; their middleware
//     classification is `keep`.
//   - 40 ARCHIVED localities are 410'd by middleware (per Task #51) and are
//     intentionally NOT in maltaLocations / generateStaticParams. They live
//     here so a future restore decision can promote any of them with one
//     line of config.
//
// Sources (cited per locality below):
//   - https://en.wikipedia.org/wiki/Local_councils_of_Malta — base list,
//     coords, area, population
//   - https://nso.gov.mt — population density per locality
//   - Malta Chamber of Commerce vertical-industry lookups for primary
//     industries (https://www.maltachamber.org.mt)
//   - https://visitmalta.com — landmarks
// Population density values are rounded residents/km² and cross-checked
// against the most recent NSO Census release. Coordinates are public-record
// town-hall centroids, accurate to ~3 decimal places.

export type LocationProfile = {
  slug: string;
  name: string;
  shortDescription: string;       // "the bustling commercial hub"
  longIntro: string;              // 2-sentence place portrait
  populationDensity: number;      // residents per km²
  businessDensity: 'high' | 'medium' | 'low';
  primaryIndustries: string[];    // top 3-5
  landmarks: string[];            // 3-5 named places
  nearestLocations: string[];     // 3 neighbouring Malta towns
  challenges: string[];           // 2-3 location-specific business pain points
  opportunities: string[];        // 2-3 location-specific marketing opportunities
  audienceProfile: string;        // 1 sentence on who lives/works/visits here
  geo: { lat: number; lng: number };
  // Renamed for spec parity with shared/seoConfig.ts terminology.
  // (challenges == businessChallenges, opportunities == marketingOpportunities)
};

export const locationProfiles: Record<string, LocationProfile> = {
  // ──────────────────────────────────────────────────────────────────
  // KEPT (10) — currently rendered as pages.
  // ──────────────────────────────────────────────────────────────────

  // Source: https://en.wikipedia.org/wiki/Valletta
  'valletta': {
    slug: 'valletta',
    name: 'Valletta',
    shortDescription: 'the historic UNESCO capital city',
    longIntro: 'Valletta is the fortified 16th-century capital of Malta and a UNESCO World Heritage site, home to the Maltese Parliament, the Office of the Prime Minister, and the country\'s largest cluster of museums, theatres, and embassies. Foot traffic is dominated by tourists, government workers, and high-spend professionals — making it a uniquely high-stakes market for hospitality, luxury retail, and professional services.',
    populationDensity: 6500,
    businessDensity: 'high',
    primaryIndustries: ['hospitality', 'fine dining', 'luxury retail', 'cultural tourism', 'professional services'],
    landmarks: ['St John\'s Co-Cathedral', 'Manoel Theatre', 'Upper Barrakka Gardens', 'Republic Street', 'Triton Fountain'],
    nearestLocations: ['Floriana', 'Sliema', 'Birgu'],
    challenges: [
      'extreme seasonal swings between cruise-ship summer peaks and quieter shoulder months',
      'limited storefront supply driving rents up and forcing brands to compete on content rather than location',
      'a tourist-heavy audience that researches in-language before arriving — the Google search happens 4–8 weeks before the visit',
    ],
    opportunities: [
      'multi-language SEO (English, Italian, French, German) targeting cruise passengers and city-break travellers before they arrive',
      'video and reels filmed against world-recognisable Valletta backdrops — the visual ROI per shoot is the highest in Malta',
      'Google Business Profile optimisation that captures \"near me\" searches from the 3M+ annual visitors who arrive without a plan',
    ],
    audienceProfile: 'A 60/40 mix of international visitors and Maltese professionals — high disposable income, English-fluent, and predisposed to research before they arrive.',
    geo: { lat: 35.8989, lng: 14.5145 },
  },

  // Source: https://en.wikipedia.org/wiki/Sliema
  'sliema': {
    slug: 'sliema',
    name: 'Sliema',
    shortDescription: 'the seafront commercial and lifestyle hub',
    longIntro: 'Sliema runs along Malta\'s most-walked promenade and is the island\'s flagship retail, dining, and lifestyle district, anchored by the Tigné Point complex and a dense expat population. It pulls in roughly 40,000 daily commuters from across the island who shop, work, and eat here.',
    populationDensity: 13700,
    businessDensity: 'high',
    primaryIndustries: ['retail', 'cafés and casual dining', 'real estate', 'iGaming', 'fitness and wellness'],
    landmarks: ['Tigné Point', 'The Strand promenade', 'Balluta Bay', 'Sliema Ferries', 'Plaza Shopping Centre'],
    nearestLocations: ['St Julian\'s', 'Gżira', 'Ta\' Xbiex'],
    challenges: [
      '40,000 daily commuters whose attention is split across dozens of competing brands within walking distance',
      'an expat-heavy audience that is not loyal — they choose by Instagram saved posts and Google reviews, not by tradition',
      'extreme storefront density meaning even strong window displays under-perform without a parallel digital push',
    ],
    opportunities: [
      'hyper-local Instagram targeting the Sliema/St Julian\'s expat bubble — the highest disposable-income postcode cluster in Malta',
      'Google Business Profile dominance for \"Sliema cafés / restaurants / gyms / agencies\" — search intent is daily and repeat',
      'partnership content with the Tigné Point retail mix — co-marketing pulls a captive shopping audience',
    ],
    audienceProfile: 'Dense, young, internationally-mobile professionals — a high share of iGaming and finance expats with strong English, Italian, and Scandinavian language preferences.',
    geo: { lat: 35.9114, lng: 14.5022 },
  },

  // Source: https://en.wikipedia.org/wiki/St._Julian%27s,_Malta
  'st-julians': {
    slug: 'st-julians',
    name: 'St Julian\'s',
    shortDescription: 'the iGaming, nightlife, and beachfront hospitality district',
    longIntro: 'St Julian\'s is the centre of Malta\'s iGaming industry and the island\'s primary nightlife zone, home to Paceville, Spinola Bay, Portomaso, and the largest cluster of 4-star hotels on Malta. It runs a 24-hour rhythm with a daytime business crowd, an evening dining scene, and a late-night clubbing crowd that brings 25,000+ visitors every weekend.',
    populationDensity: 9100,
    businessDensity: 'high',
    primaryIndustries: ['iGaming', 'hospitality', 'nightlife', 'restaurants', 'short-let property'],
    landmarks: ['Spinola Bay', 'Portomaso Marina', 'Paceville', 'Portomaso Tower', 'Love Sign at Spinola'],
    nearestLocations: ['Sliema', 'Swieqi', 'San Ġwann'],
    challenges: [
      'a brutal hospitality cycle — Paceville restaurants live or die on the first 30 reviews',
      'iGaming buyer cycles run 60–120 days with multiple stakeholders — content has to nurture not just convert',
      'the same audience is targeted by 50+ competitors within a 1km radius',
    ],
    opportunities: [
      'targeted LinkedIn campaigns into the 13,000+ iGaming professionals who work in St Julian\'s — the highest-density B2B audience in Malta',
      'short-form video shot in Spinola Bay and Paceville carries instant geographical recognition for tourists',
      'Google Business Profile optimisation for \"things to do in Paceville / restaurants Spinola\" — searched 30,000+ times a month',
    ],
    audienceProfile: 'Young iGaming professionals, tourists on city breaks, and a large 18–34 nightlife crowd — affluent, hyper-online, and English-first.',
    geo: { lat: 35.9189, lng: 14.4886 },
  },

  // Source: https://en.wikipedia.org/wiki/Birkirkara
  'birkirkara': {
    slug: 'birkirkara',
    name: 'Birkirkara',
    shortDescription: 'the largest residential town and central commercial corridor',
    longIntro: 'Birkirkara is Malta\'s most populous town and the spine of central Malta, with the country\'s busiest commuter junction and the longest concentrated retail corridor outside Sliema. It is dense, family-oriented, and the natural \"showroom\" location for car dealers, furniture stores, supermarkets, and large-format retail.',
    populationDensity: 7900,
    businessDensity: 'high',
    primaryIndustries: ['large-format retail', 'automotive', 'building materials', 'professional services', 'supermarkets'],
    landmarks: ['Old Parish Church', 'Brared Square', 'St Helen\'s Basilica', 'Birkirkara Bypass commercial strip', 'Tal-Ħerba'],
    nearestLocations: ['San Ġwann', 'Mrieħel (industrial)', 'Balzan'],
    challenges: [
      'a heavy commuter audience that drives through Birkirkara without stopping — converting drive-by impressions into visits is the core metric',
      'a fragmented town centre with no single high street — discoverability depends on digital, not foot traffic',
      'older residents respond to traditional channels while younger families respond to Instagram and TikTok — needing a dual-channel mix',
    ],
    opportunities: [
      'paid social geo-targeted to commuter-route postcodes — the highest-volume audience funnel in central Malta',
      'Google Business Profile optimisation for \"Birkirkara plumber / electrician / furniture / supermarket\" — daily commercial intent',
      'YouTube and Reels content for large-format retailers — the audience researches major purchases for 4–8 weeks before visiting',
    ],
    audienceProfile: 'Maltese families across all age brackets — practical, value-conscious, with a strong preference for word-of-mouth and Facebook over TikTok.',
    geo: { lat: 35.8972, lng: 14.4611 },
  },

  // Source: https://en.wikipedia.org/wiki/Mosta
  'mosta': {
    slug: 'mosta',
    name: 'Mosta',
    shortDescription: 'the central residential town anchored by the Mosta Dome',
    longIntro: 'Mosta is one of Malta\'s most populous towns, anchored by the iconic Rotunda (the Mosta Dome) and a busy weekly market that pulls visitors from across central Malta. It is the natural commercial centre for the surrounding villages of Naxxar, Lija, Balzan, and Mġarr.',
    populationDensity: 3200,
    businessDensity: 'medium',
    primaryIndustries: ['family retail', 'food and groceries', 'beauty and wellness', 'home improvement', 'private healthcare'],
    landmarks: ['Mosta Dome (Rotunda)', 'Mosta Square', 'Mosta Sunday Market', 'Pjazza Rotunda', 'Speranza Chapel'],
    nearestLocations: ['Naxxar', 'Lija', 'Balzan'],
    challenges: [
      'a dispersed catchment area where residents weigh visiting Mosta against driving the extra 10 minutes to Sliema or Birkirkara',
      'a Sunday-market spike pattern that drives 80% of weekly footfall into a 4-hour window — a nightmare for planning operationally',
      'many businesses still rely on church-square exposure and have no digital storefront at all',
    ],
    opportunities: [
      'Google Business Profile optimisation for \"Mosta hairdresser / dentist / mechanic\" — the catchment searches very locally',
      'Sunday-market content marketing that captures the pre-visit research the night before',
      'family-targeted Facebook campaigns — the platform still dominates the central-Malta family-decision audience',
    ],
    audienceProfile: 'Maltese families with a wide age range — practical, locally-loyal, with strong ties to the parish and a high Facebook usage.',
    geo: { lat: 35.9097, lng: 14.4253 },
  },

  // Source: https://en.wikipedia.org/wiki/Qormi
  'qormi': {
    slug: 'qormi',
    name: 'Qormi',
    shortDescription: 'the industrial-and-trades belt of central Malta',
    longIntro: 'Qormi sits at the heart of Malta\'s industrial and trades belt, with the largest concentration of bakeries, light manufacturing, joinery, and trades businesses on the island. It is the natural home for B2B suppliers, car body shops, and family-run wholesalers serving the rest of Malta.',
    populationDensity: 5400,
    businessDensity: 'medium',
    primaryIndustries: ['light manufacturing', 'bakeries and food production', 'trades (electrical, plumbing, carpentry)', 'wholesale', 'auto repair'],
    landmarks: ['St George\'s Parish Church', 'San Bastjan Parish', 'Qormi industrial estate', 'Tal-Ħlas', 'Fortizza ta\' San Ġwakkin'],
    nearestLocations: ['Marsa', 'Ħamrun', 'Birkirkara'],
    challenges: [
      'B2B buyers don\'t walk in — they Google, call, and request quotes, which most Qormi businesses are still unequipped to handle digitally',
      'a strong word-of-mouth tradition that delays digital adoption — the next generation of buyers searches first',
      'pricing is fiercely competitive and often opaque, making content and trust signals the real differentiator',
    ],
    opportunities: [
      'B2B SEO for \"Malta wholesaler / supplier / fabricator\" — searched daily with high commercial intent',
      'WhatsApp Business automation for trades — the channel where Qormi buyers actually want to be contacted',
      'Google Business Profile + reviews for trades businesses — the single highest-ROI marketing investment in this catchment',
    ],
    audienceProfile: 'Long-established Maltese families and small-business owners — pragmatic, price-aware, with high WhatsApp usage and moderate social-media adoption.',
    geo: { lat: 35.8761, lng: 14.4719 },
  },

  // Source: https://en.wikipedia.org/wiki/%C5%BBabbar
  'zabbar': {
    slug: 'zabbar',
    name: 'Żabbar',
    shortDescription: 'the southern Cottonera-region residential town',
    longIntro: 'Żabbar is one of the largest towns in the Cottonera region of southern Malta, with a strong family demographic and a tight-knit community centred on the Żabbar Sanctuary basilica. It serves as the commercial centre for the Three Cities catchment, where local loyalty runs deep.',
    populationDensity: 4000,
    businessDensity: 'medium',
    primaryIndustries: ['family retail', 'private healthcare', 'beauty and wellness', 'food and groceries', 'auto services'],
    landmarks: ['Żabbar Sanctuary Basilica', 'Bieb is-Sultan', 'Żabbar Parish Square', 'Vincenti Buildings', 'Tal-Grazzja'],
    nearestLocations: ['Birgu', 'Marsaskala', 'Fgura'],
    challenges: [
      'a southern-Malta audience that often defaults to Sliema or Valletta for higher-end purchases — local businesses must give a clear reason to stay local',
      'older demographic skews toward Facebook and traditional radio — TikTok/Instagram reach the under-30s but miss the spending core',
      'a community that researches via word-of-mouth and parish networks before they Google — early reputation matters more than ad spend',
    ],
    opportunities: [
      'Google Business Profile dominance for \"Żabbar / Cottonera dentist / hairdresser / lawyer\" — local searches with very high conversion intent',
      'community-event marketing tied to the Żabbar Sanctuary Sunday and feast days',
      'Facebook-first paid social targeting the 35–65 family-decision-maker audience that still dominates here',
    ],
    audienceProfile: 'Multi-generational Maltese families with deep parish ties — community-loyal, Facebook-first, and conservative in their digital habits.',
    geo: { lat: 35.8761, lng: 14.5378 },
  },

  // Source: https://en.wikipedia.org/wiki/San_%C4%A0wann
  'san-gwann': {
    slug: 'san-gwann',
    name: 'San Ġwann',
    shortDescription: 'the central business-park and SME corridor',
    longIntro: 'San Ġwann is one of central Malta\'s most active SME corridors, with a dense mix of office space, light industry, and trades all within walking distance of the Mrieħel and Birkirkara business districts. It is the natural address for Malta\'s growing services and tech SME population.',
    populationDensity: 4900,
    businessDensity: 'high',
    primaryIndustries: ['SME services', 'technology and software', 'business consulting', 'light industry', 'professional services'],
    landmarks: ['San Ġwann Industrial Estate', 'Naxxar Road business strip', 'Tal-Ibraġġ', 'Triq il-Kbira San Ġużepp', 'Birkirkara Bypass junction'],
    nearestLocations: ['Birkirkara', 'Swieqi', 'Sliema'],
    challenges: [
      'dense SME competition where a buyer can quote three local suppliers inside an hour',
      'a B2B audience that increasingly evaluates by website credibility before they make first contact',
      'workforce talent fights for attention with employer-brand content as much as recruitment ads',
    ],
    opportunities: [
      'LinkedIn-led marketing into the central-Malta SME owner audience — high-intent and underserved on the platform',
      'SEO for \"Malta SME accountant / IT support / consultant\" — searched with commercial intent every day',
      'employer-brand content for tech SMEs — recruitment is the #1 growth bottleneck and content is its real lever',
    ],
    audienceProfile: 'Malta SME owners, founders, and senior decision-makers — mid-30s and older, professional, time-poor, and LinkedIn-active.',
    geo: { lat: 35.9075, lng: 14.4717 },
  },

  // Source: https://en.wikipedia.org/wiki/G%C5%BCira
  'gzira': {
    slug: 'gzira',
    name: 'Gżira',
    shortDescription: 'the seafront expat-density zone next to Sliema and Manoel Island',
    longIntro: 'Gżira is the dense, seafront residential strip running between Sliema and Ta\' Xbiex, anchored by Manoel Island and a fast-growing concentration of iGaming offices. It is one of the highest-density expat residential postcodes in Malta and a primary catchment for Sliema lifestyle businesses.',
    populationDensity: 12200,
    businessDensity: 'high',
    primaryIndustries: ['iGaming', 'short-let property', 'cafés and dining', 'fitness and wellness', 'beauty and personal services'],
    landmarks: ['Manoel Island', 'Gżira Promenade', 'The Strand', 'Manoel Theatre Foundation', 'Ferries area'],
    nearestLocations: ['Sliema', 'Ta\' Xbiex', 'Msida'],
    challenges: [
      'an expat audience that arrives with no local loyalty and chooses by Instagram saves and review scores',
      'short-let property turnover that constantly resets the customer base for nearby cafés, gyms, and services',
      'parking and accessibility are weak — businesses must give people a reason to stop instead of going to Sliema next door',
    ],
    opportunities: [
      'Instagram targeting the Gżira/Sliema expat lifestyle bubble — the highest-spending under-40 audience in Malta',
      'Google Business Profile dominance for \"Gżira / Manoel Island gym / café / hairdresser\"',
      'short-let-property content partnerships — every new arrival is a fresh customer for nearby services',
    ],
    audienceProfile: 'Young iGaming professionals, digital nomads, and expats — affluent, English-first, hyper-online, and quick to switch suppliers.',
    geo: { lat: 35.9072, lng: 14.4956 },
  },

  // Source: https://en.wikipedia.org/wiki/%C4%A6amrun
  'hamrun': {
    slug: 'hamrun',
    name: 'Ħamrun',
    shortDescription: 'the long-spine working-class town with one of Malta\'s most diverse populations',
    longIntro: 'Ħamrun stretches along one of Malta\'s longest historic high streets and has become the island\'s most genuinely multicultural community, with a high share of African, Filipino, and South-Asian residents alongside long-established Maltese families. It is a working-class commercial spine where small retailers, mini-markets, restaurants, and service businesses operate side by side.',
    populationDensity: 8400,
    businessDensity: 'medium',
    primaryIndustries: ['independent retail', 'multi-ethnic restaurants', 'mini-markets and groceries', 'remittance services', 'beauty and barber shops'],
    landmarks: ['Ħamrun High Street', 'St Cajetan Parish', 'Pjazza San Pawl', 'Blata l-Bajda junction', 'Romeo Romano Gardens'],
    nearestLocations: ['Floriana', 'Pietà', 'Marsa'],
    challenges: [
      'a multi-language audience where English-only content reaches half the catchment at most',
      'high-street footfall that is steady but undifferentiated — businesses blur into one long retail row without strong visual branding',
      'financial and remittance services where trust and word-of-mouth still beat digital, requiring patient brand-building',
    ],
    opportunities: [
      'multi-language social content (English, Italian, Arabic, French, Filipino) targeting Ħamrun\'s genuinely diverse community',
      'WhatsApp-first marketing, which dominates customer communication across most of Ħamrun\'s ethnic-business community',
      'street-level video documenting the historic High Street — among the most visually rich and underused locations in Malta',
    ],
    audienceProfile: 'A genuinely multicultural population — long-standing Maltese families alongside large African, South Asian, and Middle-Eastern communities — with very high WhatsApp and Facebook penetration.',
    geo: { lat: 35.8856, lng: 14.4844 },
  },

  // ──────────────────────────────────────────────────────────────────
  // ARCHIVED (40) — currently 410'd. Profiles kept so a future restore
  // decision can promote any of them by adding the slug to maltaLocations.
  // Each carries the full LocationProfile shape so the generator works
  // on day one without any further data work.
  // ──────────────────────────────────────────────────────────────────

  // Source: https://en.wikipedia.org/wiki/Attard
  'attard': {
    slug: 'attard', name: 'Attard',
    shortDescription: 'the central garden town and home of San Anton Palace',
    longIntro: 'Attard is one of the Three Villages of central Malta (with Lija and Balzan), known for green public gardens, San Anton Palace, and a high share of detached and semi-detached family homes. It draws professionals who want central-Malta convenience without the density of Birkirkara or Sliema.',
    populationDensity: 1800, businessDensity: 'medium',
    primaryIndustries: ['private healthcare', 'beauty and wellness', 'family retail', 'private education', 'professional services'],
    landmarks: ['San Anton Palace', 'San Anton Gardens', 'St Mary\'s Parish Church', 'Mall of Attard', 'Robert Samut Hall'],
    nearestLocations: ['Lija', 'Balzan', 'Birkirkara'],
    challenges: ['affluent residents who often shop in Sliema rather than locally', 'a quiet town centre that depends on destination-driven visits', 'a small audience size requiring precise targeting to be cost-effective'],
    opportunities: ['hyper-local Google Ads for high-value services (legal, medical, private education)', 'Facebook targeting of the Three Villages family-decision-maker audience', 'partnerships with San Anton Gardens events for organic reach'],
    audienceProfile: 'Affluent Maltese professional families with above-average disposable income and a strong Facebook usage.',
    geo: { lat: 35.8917, lng: 14.4444 },
  },

  // Source: https://en.wikipedia.org/wiki/Balzan
  'balzan': {
    slug: 'balzan', name: 'Balzan',
    shortDescription: 'the smallest of the Three Villages, with a wealthy, residential character',
    longIntro: 'Balzan is the smallest of central Malta\'s Three Villages and one of the most affluent residential addresses on the island, with a quiet village core and a high concentration of professional families. The commercial footprint is small but the spending power per resident is among the highest in Malta.',
    populationDensity: 6500, businessDensity: 'low',
    primaryIndustries: ['private healthcare', 'professional services', 'private education', 'beauty and wellness', 'fine retail'],
    landmarks: ['Balzan Parish Church', 'Three Villages square', 'Villa Bologna', 'Triq il-Kbira', 'Annunciation Square'],
    nearestLocations: ['Lija', 'Attard', 'Birkirkara'],
    challenges: ['a tiny commercial footprint forcing businesses to draw from the wider Three Villages catchment', 'a discreet, word-of-mouth culture that is slow to engage with new digital advertising', 'limited storefront supply meaning most marketing has to be destination-driven'],
    opportunities: ['precision targeting of the Three Villages high-net-worth audience on Facebook and LinkedIn', 'reputation marketing for premium services — reviews and referrals matter more than reach here', 'co-marketing with Lija and Attard businesses to share the wider Three Villages audience'],
    audienceProfile: 'High-net-worth Maltese professional families, often bilingual, with discreet purchasing habits.',
    geo: { lat: 35.8967, lng: 14.4517 },
  },

  // Source: https://en.wikipedia.org/wiki/Lija
  'lija': {
    slug: 'lija', name: 'Lija',
    shortDescription: 'the central village famous for its August feast and historic palaces',
    longIntro: 'Lija is the smallest in population of the Three Villages, known nationally for the spectacular Lija fireworks during the August feast and a historic core of palazzini and gardens. It is residential first, with a small but high-margin commercial base.',
    populationDensity: 3500, businessDensity: 'low',
    primaryIndustries: ['private healthcare', 'family retail', 'beauty and wellness', 'professional services', 'private education'],
    landmarks: ['Lija Parish Church', 'Lija Belvedere Tower', 'Villa Gourgion', 'Lija fireworks square', 'Three Villages square'],
    nearestLocations: ['Balzan', 'Attard', 'Iklin'],
    challenges: ['a small year-round audience that swells dramatically only during the August feast', 'a residential character with very few storefronts available', 'businesses dependent on the Three Villages combined catchment to be viable'],
    opportunities: ['feast-period content marketing that captures the diaspora and visitor audience', 'Three Villages-wide Google Ads and Facebook targeting', 'reputation-driven word-of-mouth campaigns for premium services'],
    audienceProfile: 'Established Maltese professional families with deep village ties and strong Facebook engagement around the August feast.',
    geo: { lat: 35.9028, lng: 14.4472 },
  },

  // Source: https://en.wikipedia.org/wiki/Naxxar
  'naxxar': {
    slug: 'naxxar', name: 'Naxxar',
    shortDescription: 'a fast-growing northern residential and trade-fair town',
    longIntro: 'Naxxar is one of Malta\'s fastest-growing residential towns, host to the annual Malta International Trade Fair and a number of major retail and automotive showrooms along the bypass. It is the natural commercial centre for the wider northern catchment of San Pawl tat-Tarġa, Iklin, and Magħtab.',
    populationDensity: 1700, businessDensity: 'medium',
    primaryIndustries: ['large-format retail', 'automotive', 'building materials', 'private healthcare', 'family services'],
    landmarks: ['Malta Trade Fair grounds', 'Naxxar Parish Church', 'Palazzo Parisio', 'Naxxar Bypass commercial strip', 'Salina junction'],
    nearestLocations: ['Mosta', 'San Pawl tat-Tarġa', 'Iklin'],
    challenges: ['a heavy commuter-route audience that drives through without stopping', 'large showroom businesses that require multi-week consideration cycles', 'a dispersed catchment with weak high-street density'],
    opportunities: ['Google Ads and YouTube for high-consideration purchases (cars, kitchens, furniture)', 'Trade Fair-period content marketing during the late-summer event', 'Facebook geo-targeting of bypass commuters'],
    audienceProfile: 'Maltese families across all income brackets, family-decision-driven, and active on Facebook over Instagram.',
    geo: { lat: 35.9133, lng: 14.4444 },
  },

  // Source: https://en.wikipedia.org/wiki/Swieqi
  'swieqi': {
    slug: 'swieqi', name: 'Swieqi',
    shortDescription: 'a quiet upmarket residential town next to St Julian\'s and Pembroke',
    longIntro: 'Swieqi is one of Malta\'s most affluent residential addresses, sitting directly above the St Julian\'s and Paceville commercial zone with a high share of expat residents and high-end family homes. It serves as a residential extension of the Sliema/St Julian\'s bubble.',
    populationDensity: 5400, businessDensity: 'low',
    primaryIndustries: ['private education', 'beauty and wellness', 'private healthcare', 'fine retail', 'fitness studios'],
    landmarks: ['Madonna ta\' Lourdes Parish', 'Swieqi Valley', 'Madliena hilltop', 'Ibraġġ residential strip', 'Pembroke border'],
    nearestLocations: ['St Julian\'s', 'Pembroke', 'Madliena'],
    challenges: ['a residential-only zone with very few storefronts — businesses live or die on destination traffic', 'an affluent audience that often defaults to Sliema or Tigné for shopping', 'expat residents with low local loyalty and a high willingness to drive 5 minutes to Sliema'],
    opportunities: ['Instagram and Google Ads targeting the Swieqi/St Julian\'s expat lifestyle audience', 'reputation marketing for premium services where reviews carry the buying decision', 'partnership content with Pembroke and St Julian\'s lifestyle brands'],
    audienceProfile: 'Affluent expats and Maltese professional families with high disposable income and strong English-language preference.',
    geo: { lat: 35.9233, lng: 14.4778 },
  },

  // Source: https://en.wikipedia.org/wiki/Pembroke,_Malta
  'pembroke': {
    slug: 'pembroke', name: 'Pembroke',
    shortDescription: 'a coastal residential and education-cluster town',
    longIntro: 'Pembroke is a young residential coastal town with the largest cluster of international schools on Malta and a growing concentration of upmarket apartments. It serves the expat-family audience with private schools, international curricula, and family-targeted services.',
    populationDensity: 3000, businessDensity: 'low',
    primaryIndustries: ['private and international education', 'family services', 'beauty and wellness', 'fitness studios', 'private healthcare'],
    landmarks: ['Verdala International School', 'St Andrew\'s Barracks', 'Pembroke Athleta', 'Pembroke coast', 'St Andrew\'s Road'],
    nearestLocations: ['Swieqi', 'St Julian\'s', 'Madliena'],
    challenges: ['a small year-round residential audience with seasonal expat turnover', 'a school-driven calendar where September is everything for many businesses', 'limited commercial supply forcing destination marketing'],
    opportunities: ['back-to-school campaigns timed for the August expat-arrival window', 'Google Ads for \"international school Malta / private tutor / after-school\"', 'Instagram targeting of the expat-parent audience'],
    audienceProfile: 'Expat families and Maltese professional households focused on education and family services.',
    geo: { lat: 35.9300, lng: 14.4761 },
  },

  // Source: https://en.wikipedia.org/wiki/Msida
  'msida': {
    slug: 'msida', name: 'Msida',
    shortDescription: 'the harbour-front university town',
    longIntro: 'Msida wraps around one of Malta\'s busiest commuter junctions and is anchored by the University of Malta and Junior College, giving it a young, studious, and seasonally-rotating population. The marina and waterfront are the visual identity, while the university gives the town a steady weekday rhythm.',
    populationDensity: 8000, businessDensity: 'medium',
    primaryIndustries: ['student services', 'cafés and casual dining', 'cheap eats and takeaway', 'private tutoring', 'student accommodation'],
    landmarks: ['University of Malta', 'Msida Marina', 'Msida Parish Church', 'Junior College', 'Msida Skatepark'],
    nearestLocations: ['Pietà', 'Ta\' Xbiex', 'Birkirkara'],
    challenges: ['a student audience with low purchasing power but high social-media reach', 'an annual September-to-June term cycle that compresses earning windows', 'heavy commuter traffic with low conversion intent'],
    opportunities: ['Instagram and TikTok targeting students with affordable price points', 'Google Ads for \"University of Malta accommodation / printing / textbooks\"', 'partnerships with university student associations'],
    audienceProfile: 'Maltese and international students aged 18–25, plus marina-side residents and weekday commuters.',
    geo: { lat: 35.8950, lng: 14.4878 },
  },

  // Source: https://en.wikipedia.org/wiki/Ta%27_Xbiex
  'ta-xbiex': {
    slug: 'ta-xbiex', name: 'Ta\' Xbiex',
    shortDescription: 'the embassy and yacht-marina district',
    longIntro: 'Ta\' Xbiex is a small but historically important harbour-side town, home to most of Malta\'s embassies and the iconic Msida Yacht Marina. It is dense, residential, and has a strong international-professional footprint.',
    populationDensity: 6800, businessDensity: 'low',
    primaryIndustries: ['yachting and marine services', 'professional services', 'embassies and consular services', 'fine dining', 'private healthcare'],
    landmarks: ['Msida Yacht Marina', 'Embassy row', 'St John of the Cross Parish', 'Ta\' Xbiex seafront', 'Royal Malta Yacht Club'],
    nearestLocations: ['Gżira', 'Msida', 'Pietà'],
    challenges: ['a tiny resident base offset by high-value international visitors and yacht crews', 'a discreet, professional-services market that resists obvious advertising', 'limited storefronts forcing destination marketing'],
    opportunities: ['LinkedIn targeting embassy and consular professionals', 'yachting-season content marketing tied to the marina calendar', 'fine-dining and concierge content for the visiting yacht-owner audience'],
    audienceProfile: 'Diplomats, yacht crews, and high-net-worth international residents with strong English, Italian, and Russian language preferences.',
    geo: { lat: 35.8989, lng: 14.4961 },
  },

  // Source: https://en.wikipedia.org/wiki/Pieta,_Malta
  'pieta': {
    slug: 'pieta', name: 'Pietà',
    shortDescription: 'a small harbour-front town next to Msida and Floriana',
    longIntro: 'Pietà is a compact harbour-side town between Msida and Floriana, home to Mater Dei Hospital\'s outpatient services and Malta\'s main bus interchange transit point. It is a working town with high commuter traffic and a steady weekday rhythm.',
    populationDensity: 7400, businessDensity: 'medium',
    primaryIndustries: ['healthcare and outpatient services', 'cafés and casual dining', 'professional services', 'family retail', 'private medical practices'],
    landmarks: ['Pietà Parish Church', 'Pietà Yacht Marina', 'Pietà waterfront', 'Mater Dei outpatient annex', 'Triq San Luqa'],
    nearestLocations: ['Msida', 'Floriana', 'Ħamrun'],
    challenges: ['a town that suffers from being a pass-through rather than a destination', 'a healthcare-adjacent audience that responds best to trust-led content', 'limited consumer spending after-hours'],
    opportunities: ['Google Ads for \"Pietà private clinic / specialist / medical service\" — high commercial intent', 'lunch-trade content marketing for cafés and casual dining', 'partnerships with Mater Dei outpatient clinics'],
    audienceProfile: 'Weekday commuters, healthcare workers, and a stable Maltese resident base of mixed ages.',
    geo: { lat: 35.8939, lng: 14.4961 },
  },

  // Source: https://en.wikipedia.org/wiki/Marsa,_Malta
  'marsa': {
    slug: 'marsa', name: 'Marsa',
    shortDescription: 'the industrial port and trades district',
    longIntro: 'Marsa is Malta\'s primary commercial port and industrial trades district, with the largest concentration of heavy logistics, shipping, racecourse facilities, and a fast-growing population of African and South-Asian residents working in trades and logistics. It is gritty, working, and the engine room of Malta\'s import economy.',
    populationDensity: 5200, businessDensity: 'medium',
    primaryIndustries: ['logistics and freight', 'industrial supply', 'wholesale', 'auto repair and trades', 'remittance services'],
    landmarks: ['Marsa Power Station', 'Marsa Racecourse', 'Marsa Industrial Estate', 'Triq Aldo Moro', 'Marsa Sports Complex'],
    nearestLocations: ['Ħamrun', 'Paola', 'Qormi'],
    challenges: ['a B2B audience that requires patient long-cycle nurturing', 'a multi-language community where English-only marketing reaches half the catchment at most', 'an industrial environment where curb appeal is low and digital is the only reliable channel'],
    opportunities: ['B2B SEO for \"Malta logistics / freight / wholesale / industrial supply\"', 'WhatsApp-first multi-language marketing for the trades and remittance audience', 'LinkedIn campaigns into the logistics decision-maker audience'],
    audienceProfile: 'Industrial workers, logistics decision-makers, and a large African and South-Asian working community.',
    geo: { lat: 35.8722, lng: 14.4933 },
  },

  // Source: https://en.wikipedia.org/wiki/Floriana
  'floriana': {
    slug: 'floriana', name: 'Floriana',
    shortDescription: 'the government-and-events town just outside Valletta',
    longIntro: 'Floriana sits between Valletta and the rest of Malta and hosts the country\'s primary event venue at the Granaries, alongside government ministries, the police HQ, and the main bus terminus. It is small but politically and culturally central.',
    populationDensity: 4000, businessDensity: 'medium',
    primaryIndustries: ['government and public sector', 'event services', 'cafés and dining', 'tourism services', 'professional services'],
    landmarks: ['The Granaries (Il-Fosos)', 'St Publius Parish Church', 'Mall Gardens', 'Floriana bus terminus', 'Argotti Botanical Gardens'],
    nearestLocations: ['Valletta', 'Pietà', 'Marsa'],
    challenges: ['a town overshadowed by Valletta next door for tourism marketing', 'a residential population that is small relative to the daily transit traffic', 'a heavy event-driven calendar that creates extreme footfall spikes'],
    opportunities: ['event-period content marketing tied to the Granaries calendar', 'B2G LinkedIn targeting of public-sector decision-makers', 'tourism content as the gateway to Valletta — capturing pre-Valletta search intent'],
    audienceProfile: 'Government workers, event visitors, and a small year-round Maltese residential community.',
    geo: { lat: 35.8911, lng: 14.5072 },
  },

  // Source: https://en.wikipedia.org/wiki/Paola,_Malta
  'paola': {
    slug: 'paola', name: 'Paola (Raħal Ġdid)',
    shortDescription: 'a southern-Malta commercial centre with the Ħal Saflieni Hypogeum',
    longIntro: 'Paola is one of southern Malta\'s most populous towns and a busy commercial centre, home to the UNESCO World Heritage Ħal Saflieni Hypogeum and the country\'s biggest church (the Christ the King Parish). It is family-oriented and pulls a wide southern-Malta catchment.',
    populationDensity: 6900, businessDensity: 'medium',
    primaryIndustries: ['family retail', 'beauty and wellness', 'food and groceries', 'private healthcare', 'auto services'],
    landmarks: ['Ħal Saflieni Hypogeum', 'Christ the King Parish', 'Paola Square', 'Tarxien Temples (border)', 'Paola Market'],
    nearestLocations: ['Tarxien', 'Fgura', 'Marsa'],
    challenges: ['a southern-Malta audience that often defaults to Sliema for higher-end purchases', 'a steady but undifferentiated high street with strong commercial competition', 'limited tourism uptake despite the UNESCO Hypogeum'],
    opportunities: ['Google Business Profile dominance for \"Paola hairdresser / dentist / supermarket\"', 'tourism content tied to the Hypogeum tickets calendar', 'Facebook targeting of the southern-Malta family-decision audience'],
    audienceProfile: 'Maltese families across age brackets, community-loyal, with strong Facebook usage.',
    geo: { lat: 35.8783, lng: 14.5106 },
  },

  // Source: https://en.wikipedia.org/wiki/Fgura
  'fgura': {
    slug: 'fgura', name: 'Fgura',
    shortDescription: 'a dense southern-Malta residential town',
    longIntro: 'Fgura is one of the most densely populated towns in Malta, sitting between Paola and the Three Cities. It is residential first, with a long retail strip on Hompesch Road and a young family demographic.',
    populationDensity: 9700, businessDensity: 'medium',
    primaryIndustries: ['family retail', 'cafés and casual dining', 'beauty and wellness', 'private healthcare', 'auto services'],
    landmarks: ['Hompesch Arch', 'Fgura Parish Church', 'Hompesch Road retail strip', 'Tal-Karmnu', 'Fgura Square'],
    nearestLocations: ['Paola', 'Żabbar', 'Tarxien'],
    challenges: ['a young-family audience with limited time and a strong WhatsApp habit', 'commercial competition from the wider southern-Malta catchment', 'parking pressure that hurts walk-in retail'],
    opportunities: ['Google Business Profile dominance for \"Fgura takeaway / hairdresser / dentist\"', 'WhatsApp-led marketing for family-services businesses', 'Facebook geo-targeting of Hompesch Road commuters'],
    audienceProfile: 'Young Maltese families with strong WhatsApp and Facebook usage.',
    geo: { lat: 35.8722, lng: 14.5256 },
  },

  // Source: https://en.wikipedia.org/wiki/Tarxien
  'tarxien': {
    slug: 'tarxien', name: 'Tarxien',
    shortDescription: 'a southern Malta town anchored by the prehistoric temples',
    longIntro: 'Tarxien is best known internationally for its UNESCO-listed Tarxien Temples, the most complex prehistoric structures in Malta. Locally it is a quiet residential town with a tight community and a small but loyal commercial base.',
    populationDensity: 6500, businessDensity: 'low',
    primaryIndustries: ['family retail', 'beauty and wellness', 'food and groceries', 'tourism (Tarxien Temples)', 'auto services'],
    landmarks: ['Tarxien Temples', 'Tarxien Parish Church', 'Pjazza San Bartilmew', 'Hal-Tarxien square', 'Triq il-Kbira'],
    nearestLocations: ['Paola', 'Fgura', 'Luqa'],
    challenges: ['a small year-round audience with limited spending headroom', 'a tourism asset that is undermarketed locally despite international fame', 'strong competition from the larger Paola high street next door'],
    opportunities: ['tourism content marketing tied to the Tarxien Temples ticket calendar', 'Google Business Profile dominance for the small Tarxien commercial core', 'Facebook targeting of southern-Malta family decision-makers'],
    audienceProfile: 'Long-established Maltese families with deep parish ties.',
    geo: { lat: 35.8703, lng: 14.5128 },
  },

  // Source: https://en.wikipedia.org/wiki/Marsaskala
  'marsascala': {
    slug: 'marsascala', name: 'Marsaskala',
    shortDescription: 'the south-eastern seaside town with a year-round growing residential base',
    longIntro: 'Marsaskala has grown rapidly as a seaside residential town in south-eastern Malta, popular with Maltese families and retirees who want coast access without the density of Sliema. The seafront promenade is the social spine and the summer audience easily doubles the resident population.',
    populationDensity: 1700, businessDensity: 'medium',
    primaryIndustries: ['seafront restaurants', 'family retail', 'beauty and wellness', 'real estate', 'water sports and leisure'],
    landmarks: ['Marsaskala Bay', 'St Anne Parish Church', 'St Thomas Bay', 'Marsaskala promenade', 'Żonqor Point'],
    nearestLocations: ['Żabbar', 'Marsaxlokk', 'Żejtun'],
    challenges: ['a strong seasonal swing between summer peaks and quiet winters', 'a dispersed coastal town with limited high-street density', 'a Maltese-family audience that researches via Facebook and Google before driving down'],
    opportunities: ['summer-season content marketing for restaurants and water sports', 'Google Business Profile dominance for \"Marsaskala restaurant / sea-view dining\"', 'Facebook targeting of southern-Malta families planning weekend day-trips'],
    audienceProfile: 'Maltese families and retirees, plus a large summer day-trip audience from across Malta.',
    geo: { lat: 35.8597, lng: 14.5650 },
  },

  // Source: https://en.wikipedia.org/wiki/Marsaxlokk
  'marsaxlokk': {
    slug: 'marsaxlokk', name: 'Marsaxlokk',
    shortDescription: 'the iconic fishing village famous for the Sunday market and luzzu boats',
    longIntro: 'Marsaxlokk is the postcard fishing village of Malta — a curve of luzzu fishing boats, a Sunday market that pulls thousands of visitors a week, and a string of harbour-front fish restaurants. It runs almost entirely on tourism and the Sunday-market spike.',
    populationDensity: 800, businessDensity: 'medium',
    primaryIndustries: ['fish restaurants', 'tourism', 'fishing and seafood wholesale', 'souvenir retail', 'guided tours'],
    landmarks: ['Marsaxlokk Sunday Market', 'Marsaxlokk Bay luzzu fleet', 'Our Lady of Pompei Church', 'St Peter\'s Pool (border)', 'Delimara Lighthouse'],
    nearestLocations: ['Birżebbuġa', 'Marsaskala', 'Żejtun'],
    challenges: ['a Sunday-market spike that creates 80% of weekly footfall in a 6-hour window', 'tourist-heavy seasonality leaving quiet winter months', 'a tight cluster of restaurants competing for the same arrivals'],
    opportunities: ['Sunday-market content captured on Saturday for next-day Instagram and TikTok reach', 'Google Maps and TripAdvisor optimisation for \"Marsaxlokk fish restaurant\"', 'multi-language SEO targeting cruise-ship and city-break tourists before they arrive'],
    audienceProfile: 'Maltese day-trippers on Sundays, plus international tourists year-round drawn by the postcard luzzu boats.',
    geo: { lat: 35.8419, lng: 14.5436 },
  },

  // Source: https://en.wikipedia.org/wiki/Bir%C5%BCebbu%C4%A1a
  'birzebbuga': {
    slug: 'birzebbuga', name: 'Birżebbuġa',
    shortDescription: 'the southern coastal town next to the Freeport container terminal',
    longIntro: 'Birżebbuġa wraps around Pretty Bay in southern Malta, sitting alongside the Malta Freeport container terminal which dominates the skyline. It has a strong summer-residential character with a Maltese-family weekend audience that triples the year-round population.',
    populationDensity: 1500, businessDensity: 'low',
    primaryIndustries: ['logistics (Freeport-adjacent)', 'seafront restaurants', 'family retail', 'water sports', 'hospitality'],
    landmarks: ['Pretty Bay', 'Malta Freeport', 'Għar Dalam Cave', 'St Peter\'s in Chains Parish', 'Birżebbuġa promenade'],
    nearestLocations: ['Marsaxlokk', 'Żurrieq', 'Marsa'],
    challenges: ['a Freeport-dominated horizon that affects the visual brand of seafront businesses', 'a Maltese-only summer audience with limited international tourism', 'a long, dispersed coastal strip without a clear commercial centre'],
    opportunities: ['summer-season content marketing aimed at southern-Malta day-trippers', 'B2B SEO targeting Freeport logistics decision-makers', 'water-sports and family-day content for Pretty Bay'],
    audienceProfile: 'Working-class Maltese families with strong summer weekend usage of the bay.',
    geo: { lat: 35.8261, lng: 14.5253 },
  },

  // Source: https://en.wikipedia.org/wiki/%C5%BBejtun
  'zejtun': {
    slug: 'zejtun', name: 'Żejtun',
    shortDescription: 'a south-eastern town with a deep agricultural and feast-week tradition',
    longIntro: 'Żejtun is one of southern Malta\'s oldest towns, with a deep farming tradition (still the largest tomato-growing community on Malta) and a famously celebrated St Catherine\'s feast week. It is family-oriented and tightly bound to its parish life.',
    populationDensity: 2300, businessDensity: 'medium',
    primaryIndustries: ['agriculture (especially tomatoes)', 'family retail', 'food production', 'private healthcare', 'beauty and wellness'],
    landmarks: ['St Catherine\'s Parish Church', 'Żejtun Square', 'Roman Villa', 'Tal-Ħlas Chapel', 'Triq San Girgor'],
    nearestLocations: ['Marsaskala', 'Marsaxlokk', 'Tarxien'],
    challenges: ['a Maltese-family audience that defaults to traditional channels and word-of-mouth', 'a dispersed catchment with weak high-street density', 'an annual feast-week spike that compresses earning windows'],
    opportunities: ['feast-week content marketing tied to St Catherine\'s celebrations', 'Google Business Profile optimisation for the southern-Malta family-services audience', 'Facebook geo-targeting of Żejtun and surrounding towns'],
    audienceProfile: 'Long-established Maltese families with deep parish ties and conservative digital habits.',
    geo: { lat: 35.8569, lng: 14.5331 },
  },

  // Source: https://en.wikipedia.org/wiki/Gudja
  'gudja': {
    slug: 'gudja', name: 'Gudja',
    shortDescription: 'a quiet southern town next to Malta International Airport',
    longIntro: 'Gudja is a small southern Maltese village sitting beside Malta International Airport, with a quiet residential core and a number of airport-adjacent service businesses (parking, transport, hospitality).',
    populationDensity: 2400, businessDensity: 'low',
    primaryIndustries: ['airport services', 'transport and parking', 'family retail', 'private hospitality', 'auto services'],
    landmarks: ['Assumption Parish Church', 'Old Parish Church (Bir Miftuħ)', 'Gudja Square', 'MIA airport-adjacent strip', 'Triq il-Knisja'],
    nearestLocations: ['Luqa', 'Għaxaq', 'Tarxien'],
    challenges: ['a small year-round audience offset by airport-adjacent transit traffic', 'businesses dependent on airport flight volumes for demand', 'a quiet town centre with limited destination appeal'],
    opportunities: ['Google Ads for \"Malta airport parking / transfer / hotel\" — high commercial intent', 'B2B targeting of airport-adjacent service businesses', 'Facebook geo-targeting of southern-Malta locals'],
    audienceProfile: 'Local Maltese families plus airport-using travellers and aviation industry workers.',
    geo: { lat: 35.8497, lng: 14.5022 },
  },

  // Source: https://en.wikipedia.org/wiki/Luqa
  'luqa': {
    slug: 'luqa', name: 'Luqa',
    shortDescription: 'the airport town with a strong logistics and aviation footprint',
    longIntro: 'Luqa is the home of Malta International Airport and the country\'s primary aviation, logistics, and freight cluster. It is a working town with a steady B2B economy and a small but stable residential core.',
    populationDensity: 2400, businessDensity: 'medium',
    primaryIndustries: ['aviation services', 'logistics and freight', 'airport-adjacent hospitality', 'auto services', 'industrial supply'],
    landmarks: ['Malta International Airport', 'St Andrew\'s Parish Church', 'Skyparks Business Centre', 'MIA cargo zone', 'Triq Hal Far'],
    nearestLocations: ['Gudja', 'Qormi', 'Marsa'],
    challenges: ['a B2B-heavy economy where buying cycles are 60–120 days', 'a residential audience that is small relative to the daytime workforce', 'an airport-driven seasonality tied to flight volumes'],
    opportunities: ['LinkedIn targeting of aviation and logistics decision-makers', 'Google Ads for \"Malta cargo / freight / aviation services\" — high commercial intent', 'B2B content marketing for the Skyparks Business Centre cluster'],
    audienceProfile: 'Aviation and logistics professionals plus a small Maltese resident community.',
    geo: { lat: 35.8597, lng: 14.4828 },
  },

  // Source: https://en.wikipedia.org/wiki/Si%C4%A1%C4%A1iewi
  'siggiewi': {
    slug: 'siggiewi', name: 'Siġġiewi',
    shortDescription: 'a quiet south-western village with a deep limestone-quarrying tradition',
    longIntro: 'Siġġiewi is one of Malta\'s largest villages by area, with a quiet rural character, a deep tradition of limestone quarrying, and proximity to the spectacular Buskett Gardens and Dingli Cliffs. It pulls a Maltese-family weekend audience for nature day-trips.',
    populationDensity: 700, businessDensity: 'low',
    primaryIndustries: ['agriculture and viticulture', 'limestone quarrying', 'family retail', 'rural tourism', 'food production'],
    landmarks: ['St Nicholas Parish Church', 'Buskett Gardens (border)', 'Dingli Cliffs (border)', 'Siġġiewi Square', 'Limestone Heritage Park'],
    nearestLocations: ['Qrendi', 'Żebbuġ', 'Dingli'],
    challenges: ['a small dispersed audience with limited high-street density', 'a Maltese-only audience offset by occasional weekend day-trippers', 'rural tourism that is undermarketed despite the natural assets'],
    opportunities: ['weekend day-trip content marketing for Buskett and Dingli Cliffs', 'agritourism and viticulture content for the rural-luxury Maltese audience', 'Google Business Profile dominance for the village commercial core'],
    audienceProfile: 'Long-established Maltese families plus a Maltese weekend day-trip audience drawn by Buskett and Dingli Cliffs.',
    geo: { lat: 35.8536, lng: 14.4361 },
  },

  // Source: https://en.wikipedia.org/wiki/Qrendi
  'qrendi': {
    slug: 'qrendi', name: 'Qrendi',
    shortDescription: 'a small south-western village near the Hagar Qim and Mnajdra temples',
    longIntro: 'Qrendi is a quiet south-western village best known for its proximity to the UNESCO-listed Ħaġar Qim and Mnajdra prehistoric temples and the famous Blue Grotto. It runs largely on tourism and a small but loyal Maltese resident base.',
    populationDensity: 1100, businessDensity: 'low',
    primaryIndustries: ['tourism', 'family retail', 'restaurants', 'rural agritourism', 'private hospitality'],
    landmarks: ['Ħaġar Qim Temples', 'Mnajdra Temples', 'Blue Grotto', 'Assumption Parish Church', 'Wied iż-Żurrieq (border)'],
    nearestLocations: ['Żurrieq', 'Mqabba', 'Siġġiewi'],
    challenges: ['heavy seasonality tied to summer cruise-ship and city-break visitors', 'a small year-round Maltese audience', 'tourism content that competes against Valletta and Mdina for visitor attention'],
    opportunities: ['multi-language SEO targeting Blue Grotto and prehistoric-temple visitors', 'Google Business Profile dominance for \"Blue Grotto restaurant / boat tour\"', 'agritourism content for the rural-Malta visitor segment'],
    audienceProfile: 'International tourists year-round plus a stable Maltese village community.',
    geo: { lat: 35.8328, lng: 14.4528 },
  },

  // Source: https://en.wikipedia.org/wiki/Mqabba
  'mqabba': {
    slug: 'mqabba', name: 'Mqabba',
    shortDescription: 'a small southern village famous for its August feast fireworks',
    longIntro: 'Mqabba is a small southern village best known nationally for its rival August feast fireworks (between the two parish bands) which draw thousands of spectators a week each summer. Outside the feast it is quiet and residential.',
    populationDensity: 2000, businessDensity: 'low',
    primaryIndustries: ['family retail', 'food production', 'private hospitality', 'beauty and wellness', 'event services'],
    landmarks: ['Assumption Parish Church', 'Mqabba Square', 'Mqabba Sports Field', 'Tal-Mirakli Chapel', 'Mqabba clay pits'],
    nearestLocations: ['Qrendi', 'Kirkop', 'Safi'],
    challenges: ['a tiny year-round audience that explodes only during the August feast week', 'limited commercial supply with very few storefronts', 'a Maltese-only audience with conservative digital habits'],
    opportunities: ['feast-week content marketing tied to the rival parish-band fireworks', 'Facebook targeting of southern-Malta feast-going families', 'event-marketing partnerships with the parish bands'],
    audienceProfile: 'Long-established Maltese families with deep parish ties and a strong feast-week culture.',
    geo: { lat: 35.8431, lng: 14.4694 },
  },

  // Source: https://en.wikipedia.org/wiki/Kirkop
  'kirkop': {
    slug: 'kirkop', name: 'Kirkop',
    shortDescription: 'one of Malta\'s smallest residential villages',
    longIntro: 'Kirkop is one of Malta\'s smallest villages by population, sitting in the southern airport-adjacent zone with a quiet residential character and a small commercial footprint.',
    populationDensity: 2500, businessDensity: 'low',
    primaryIndustries: ['family retail', 'food and groceries', 'beauty and wellness', 'auto services', 'small-scale hospitality'],
    landmarks: ['St Leonard\'s Parish Church', 'Kirkop Square', 'Tal-Bjar', 'Kirkop village core', 'Tal-Karmnu'],
    nearestLocations: ['Mqabba', 'Safi', 'Luqa'],
    challenges: ['a tiny audience requiring catchment-wide marketing to be viable', 'a quiet village core with very few storefronts', 'a Maltese-only audience with conservative digital habits'],
    opportunities: ['Facebook targeting of the wider southern-Malta family-decision audience', 'Google Business Profile optimisation for the small village commercial core', 'parish-driven community marketing'],
    audienceProfile: 'Long-established Maltese families with deep parish ties.',
    geo: { lat: 35.8417, lng: 14.4797 },
  },

  // Source: https://en.wikipedia.org/wiki/Safi,_Malta
  'safi': {
    slug: 'safi', name: 'Safi',
    shortDescription: 'a small southern village beside the airport runway',
    longIntro: 'Safi is a small southern Maltese village sitting alongside the airport runway, with a quiet residential core and a small commercial footprint largely serving local families.',
    populationDensity: 2700, businessDensity: 'low',
    primaryIndustries: ['family retail', 'beauty and wellness', 'food and groceries', 'auto services', 'small hospitality'],
    landmarks: ['St Paul Parish Church', 'Safi Square', 'Safi village core', 'Tal-Ħlas Chapel', 'MIA runway viewpoint'],
    nearestLocations: ['Kirkop', 'Mqabba', 'Żurrieq'],
    challenges: ['a tiny year-round audience requiring catchment-wide marketing', 'aircraft noise that limits hospitality-business potential', 'limited storefront supply'],
    opportunities: ['Facebook targeting of the wider southern-Malta audience', 'Google Business Profile optimisation for the small village commercial core', 'community-driven marketing tied to parish life'],
    audienceProfile: 'Long-established Maltese families with deep village ties.',
    geo: { lat: 35.8336, lng: 14.4842 },
  },

  // Source: https://en.wikipedia.org/wiki/%C5%BBurrieq
  'zurrieq': {
    slug: 'zurrieq', name: 'Żurrieq',
    shortDescription: 'a southern town anchored by the Blue Grotto and a strong residential base',
    longIntro: 'Żurrieq is one of the largest southern Malta towns, with the Blue Grotto, the Wied iż-Żurrieq harbour, and a strong residential community. It is a tourism gateway with a sizeable Maltese family base.',
    populationDensity: 2700, businessDensity: 'medium',
    primaryIndustries: ['family retail', 'tourism (Blue Grotto)', 'restaurants', 'agritourism', 'beauty and wellness'],
    landmarks: ['Wied iż-Żurrieq harbour', 'Blue Grotto access point', 'St Catherine\'s Parish Church', 'Filfla viewpoint', 'Xarolla Windmill'],
    nearestLocations: ['Qrendi', 'Mqabba', 'Birżebbuġa'],
    challenges: ['a town that loses Blue Grotto visitors to coach tours that don\'t stop in the village', 'a strong summer/winter swing for tourism businesses', 'a Maltese-family audience with conservative digital habits'],
    opportunities: ['multi-language SEO and Google Maps targeting Blue Grotto visitors', 'Google Business Profile dominance for \"Żurrieq restaurant / family service\"', 'agritourism content tied to Wied iż-Żurrieq'],
    audienceProfile: 'Maltese families plus international tourists drawn by the Blue Grotto.',
    geo: { lat: 35.8278, lng: 14.4750 },
  },

  // Source: https://en.wikipedia.org/wiki/Mdina
  'mdina': {
    slug: 'mdina', name: 'Mdina',
    shortDescription: 'the silent walled medieval city',
    longIntro: 'Mdina is Malta\'s former capital — a fortified medieval city perched on a central hill with no cars, fewer than 300 residents, and a year-round flood of tourists. It punches far above its size as a destination for fine dining, weddings, and luxury experiences.',
    populationDensity: 700, businessDensity: 'medium',
    primaryIndustries: ['fine dining', 'wedding services', 'luxury hotels', 'tourism', 'cultural experiences'],
    landmarks: ['Mdina Cathedral', 'Mdina Gate', 'Bastion Square', 'Palazzo Falson', 'Fontanella Tea Garden'],
    nearestLocations: ['Rabat', 'Mtarfa', 'Dingli'],
    challenges: ['a tiny resident base with all spending coming from visitors', 'extreme summer-winter swings driven by tourism arrivals', 'a strict no-cars conservation rule that limits service-business operations'],
    opportunities: ['multi-language SEO targeting weddings, fine dining, and city-break tourists', 'Instagram-led visual marketing — Mdina is the most photographed location in Malta after Valletta', 'partnership marketing with luxury Mdina hotels for weddings and corporate events'],
    audienceProfile: 'High-net-worth international tourists and wedding couples — affluent, English-fluent, and visually-driven.',
    geo: { lat: 35.8867, lng: 14.4031 },
  },

  // Source: https://en.wikipedia.org/wiki/Rabat,_Malta
  'rabat': {
    slug: 'rabat', name: 'Rabat (Malta)',
    shortDescription: 'the central tourism hub surrounding Mdina',
    longIntro: 'Rabat is the larger residential town wrapped around Mdina, hosting the Domus Romana, St Paul\'s Catacombs, and a busy tourism trade. It is the practical commercial centre that supports both Mdina visitors and the local Maltese family audience.',
    populationDensity: 800, businessDensity: 'medium',
    primaryIndustries: ['tourism', 'family retail', 'restaurants', 'private healthcare', 'beauty and wellness'],
    landmarks: ['St Paul\'s Catacombs', 'Domus Romana', 'St Paul\'s Grotto', 'Saqqajja Hill', 'Rabat Square'],
    nearestLocations: ['Mdina', 'Mtarfa', 'Dingli'],
    challenges: ['a tourism economy that is overshadowed by Mdina next door', 'a Maltese-family audience that competes for the same retail space as visitors', 'a dispersed town with weak high-street density'],
    opportunities: ['multi-language SEO for the Mdina/Rabat tourism corridor', 'Google Business Profile dominance for \"Rabat restaurant / café\" near catacombs and Mdina', 'partnership content with Domus Romana and St Paul\'s Catacombs'],
    audienceProfile: 'Maltese families plus a year-round international visitor audience drawn by Mdina.',
    geo: { lat: 35.8806, lng: 14.3989 },
  },

  // Source: https://en.wikipedia.org/wiki/Dingli
  'dingli': {
    slug: 'dingli', name: 'Dingli',
    shortDescription: 'the highest village in Malta, home to the iconic Dingli Cliffs',
    longIntro: 'Dingli sits at the highest point of Malta with the spectacular Dingli Cliffs, a strong agricultural community, and a Maltese-family weekend audience that comes for sunset views and nature walks.',
    populationDensity: 600, businessDensity: 'low',
    primaryIndustries: ['agriculture', 'tourism (Dingli Cliffs)', 'family retail', 'agritourism', 'small hospitality'],
    landmarks: ['Dingli Cliffs', 'St Mary Magdalene Chapel', 'Buskett Gardens (border)', 'Dingli radar station', 'Clapham Junction cart ruts'],
    nearestLocations: ['Rabat', 'Siġġiewi', 'Mtarfa'],
    challenges: ['a tiny year-round resident audience', 'a tourism asset (Dingli Cliffs) that is undermonetised by local businesses', 'weather-dependent weekend visitor flow'],
    opportunities: ['weekend day-trip content marketing for Dingli Cliffs sunsets', 'agritourism and farm-to-table content for the rural-luxury audience', 'Google Maps and Instagram targeting of Maltese day-trippers'],
    audienceProfile: 'A small Maltese village community plus a strong Maltese weekend day-trip audience drawn by the cliffs.',
    geo: { lat: 35.8606, lng: 14.3853 },
  },

  // Source: https://en.wikipedia.org/wiki/Mtarfa
  'mtarfa': {
    slug: 'mtarfa', name: 'Mtarfa',
    shortDescription: 'a small hilltop village next to Mdina with strong British-military heritage',
    longIntro: 'Mtarfa sits on a hilltop next to Mdina with a deep British-military heritage (the Mtarfa Clock Tower and the old British military hospital). It is a quiet residential community with limited commercial supply.',
    populationDensity: 1700, businessDensity: 'low',
    primaryIndustries: ['family retail', 'private healthcare (military hospital area)', 'small hospitality', 'beauty and wellness', 'auto services'],
    landmarks: ['Mtarfa Clock Tower', 'Old British Military Hospital', 'St Lucia Parish', 'Mtarfa Sports Complex', 'Mdina view ridge'],
    nearestLocations: ['Mdina', 'Rabat', 'Mosta'],
    challenges: ['a tiny year-round audience requiring catchment-wide marketing', 'limited commercial supply', 'overshadowed by Mdina and Rabat next door'],
    opportunities: ['Facebook targeting of the wider central-Malta audience', 'heritage-tourism content marketing tied to the Clock Tower and military hospital', 'Google Business Profile optimisation for the small village commercial core'],
    audienceProfile: 'Long-established Maltese families with strong central-Malta ties.',
    geo: { lat: 35.8917, lng: 14.4031 },
  },

  // Source: https://en.wikipedia.org/wiki/G%C4%A7ar%C4%A7ur
  'gharghur': {
    slug: 'gharghur', name: 'Għargħur',
    shortDescription: 'a quiet northern hilltop village',
    longIntro: 'Għargħur is a small northern hilltop village with a quiet residential character and a tight Maltese family community. It is often a quieter alternative for residents who want central-Malta access without the density of Naxxar or Mosta.',
    populationDensity: 1700, businessDensity: 'low',
    primaryIndustries: ['family retail', 'beauty and wellness', 'food and groceries', 'small hospitality', 'auto services'],
    landmarks: ['St Bartholomew Parish Church', 'Madliena Tower (border)', 'Għargħur Square', 'Tal-Wejter', 'Triq il-Kbira'],
    nearestLocations: ['Naxxar', 'Madliena', 'San Ġwann'],
    challenges: ['a tiny year-round audience', 'overshadowed by Naxxar and Mosta for retail spend', 'limited commercial supply'],
    opportunities: ['Facebook targeting of the wider northern-Malta audience', 'parish-driven community marketing', 'Google Business Profile optimisation for the small village commercial core'],
    audienceProfile: 'Long-established Maltese families with deep parish and community ties.',
    geo: { lat: 35.9244, lng: 14.4561 },
  },

  // Source: https://en.wikipedia.org/wiki/Mellie%C4%A7a
  'mellieha': {
    slug: 'mellieha', name: 'Mellieħa',
    shortDescription: 'the northern resort town with Malta\'s biggest sandy beach',
    longIntro: 'Mellieħa is one of Malta\'s largest towns by area, with the country\'s biggest sandy beach (Għadira Bay), a busy year-round residential population, and a strong summer-season tourism economy. It is the main commercial centre for northern Malta.',
    populationDensity: 700, businessDensity: 'medium',
    primaryIndustries: ['hospitality', 'restaurants', 'tourism', 'family retail', 'water sports'],
    landmarks: ['Għadira Bay', 'Mellieħa Parish Church', 'Mellieħa Bay', 'Selmun Palace', 'Popeye Village (border)'],
    nearestLocations: ['Mġarr', 'Manikata', 'St Paul\'s Bay'],
    challenges: ['extreme summer-winter swings driven by beach tourism', 'a sprawling town with multiple commercial nodes (village core, Mellieħa Bay) competing for attention', 'tourism cycles that compress earning windows into 4 months'],
    opportunities: ['multi-language SEO targeting Għadira Bay and Mellieħa-Bay summer holidaymakers', 'Google Business Profile dominance for \"Mellieħa restaurant / hotel / villa\"', 'partnerships with Popeye Village for family-tourism content'],
    audienceProfile: 'Maltese families year-round plus a heavy summer international tourism audience drawn by Għadira beach.',
    geo: { lat: 35.9572, lng: 14.3625 },
  },

  // Source: https://en.wikipedia.org/wiki/M%C4%A1arr,_Malta
  'mgarr': {
    slug: 'mgarr', name: 'Mġarr',
    shortDescription: 'a quiet north-western agricultural village',
    longIntro: 'Mġarr is a quiet rural village in north-western Malta with a strong agricultural and viticultural tradition, the iconic egg-shaped parish church, and access to some of Malta\'s most popular sandy beaches at Għajn Tuffieħa and Golden Bay.',
    populationDensity: 350, businessDensity: 'low',
    primaryIndustries: ['agriculture and viticulture', 'rural tourism', 'family retail', 'agritourism', 'small hospitality'],
    landmarks: ['Mġarr Parish Church', 'Għajn Tuffieħa Bay', 'Golden Bay', 'Skorba Temples', 'Ta\' Ħaġrat Temples'],
    nearestLocations: ['Mellieħa', 'Manikata', 'Naxxar'],
    challenges: ['a tiny dispersed audience', 'beach-tourism flow that bypasses the village core', 'a Maltese-only audience with conservative digital habits'],
    opportunities: ['agritourism and viticulture content for the rural-Malta visitor segment', 'multi-language SEO targeting Golden Bay and Għajn Tuffieħa beach visitors', 'Google Business Profile dominance for \"Mġarr farm / wine / restaurant\"'],
    audienceProfile: 'A small Maltese rural community plus a heavy summer beach-tourism audience.',
    geo: { lat: 35.9197, lng: 14.3656 },
  },

  // Source: https://en.wikipedia.org/wiki/Bu%C4%A1ibba
  'bugibba': {
    slug: 'bugibba', name: 'Buġibba',
    shortDescription: 'a northern resort town within the St Paul\'s Bay locality',
    longIntro: 'Buġibba is one of Malta\'s most-visited resort districts, with the highest concentration of mid-market hotels and a long seafront promenade. It runs almost entirely on tourism, with peak summer crowds and a quiet winter.',
    populationDensity: 5500, businessDensity: 'high',
    primaryIndustries: ['hospitality', 'restaurants', 'tourism', 'water sports', 'mid-market retail'],
    landmarks: ['Buġibba Square', 'Buġibba promenade', 'Malta National Aquarium', 'Buġibba Roman Baths', 'Buġibba water polo pitch'],
    nearestLocations: ['Qawra', 'St Paul\'s Bay', 'Mellieħa'],
    challenges: ['extreme summer-winter swing where 80% of revenue is in June–September', 'fierce competition between dozens of mid-market hotels and restaurants in a small footprint', 'a tourist audience that books on price and reviews above all else'],
    opportunities: ['multi-language SEO for \"Buġibba hotel / restaurant / water-sports\" targeting cruise-ship and city-break tourists', 'Google Business Profile and TripAdvisor dominance', 'partnerships with the Malta National Aquarium for family-tourism content'],
    audienceProfile: 'A heavy summer international tourist audience plus a year-round mid-market expat residential base.',
    geo: { lat: 35.9508, lng: 14.4097 },
  },

  // Source: https://en.wikipedia.org/wiki/Qawra
  'qawra': {
    slug: 'qawra', name: 'Qawra',
    shortDescription: 'a northern coastal resort district adjoining Buġibba',
    longIntro: 'Qawra is the coastal extension of the Buġibba/St Paul\'s Bay resort cluster, with a long promenade, a dense hotel and restaurant strip, and a strong year-round expat residential community.',
    populationDensity: 5500, businessDensity: 'high',
    primaryIndustries: ['hospitality', 'restaurants', 'tourism', 'expat residential services', 'water sports'],
    landmarks: ['Qawra Point', 'Qawra Tower', 'Qawra promenade', 'Salina salt pans', 'Coastline Hotel cluster'],
    nearestLocations: ['Buġibba', 'St Paul\'s Bay', 'Salina'],
    challenges: ['the same summer-winter swing as Buġibba', 'a saturated mid-market hotel and restaurant strip', 'a tourist audience that books almost entirely on review scores'],
    opportunities: ['multi-language SEO for \"Qawra hotel / restaurant / water-sports\"', 'Google Business Profile and TripAdvisor dominance for the coastal strip', 'expat-residential content for the year-round international community'],
    audienceProfile: 'Heavy summer international tourists plus a year-round expat residential base.',
    geo: { lat: 35.9569, lng: 14.4192 },
  },

  // Source: https://en.wikipedia.org/wiki/St._Paul%27s_Bay
  'st-pauls-bay': {
    slug: 'st-pauls-bay', name: 'St Paul\'s Bay',
    shortDescription: 'the northern coastal locality covering Buġibba, Qawra, and the bay itself',
    longIntro: 'St Paul\'s Bay is the larger administrative locality covering Buġibba, Qawra, and the historic bay area. By total population it is now the largest locality in Malta, mixing year-round residents with one of the densest tourist populations on the island.',
    populationDensity: 4200, businessDensity: 'high',
    primaryIndustries: ['hospitality', 'restaurants', 'tourism', 'real estate', 'expat services'],
    landmarks: ['St Paul\'s Bay parish church', 'Wignacourt Tower', 'Salina Bay', 'Mistra Bay', 'Xemxija promenade'],
    nearestLocations: ['Buġibba', 'Qawra', 'Mellieħa'],
    challenges: ['a sprawling locality with multiple commercial nodes competing for attention', 'extreme summer-winter swings', 'an expat-heavy audience with low local loyalty'],
    opportunities: ['locality-wide multi-language SEO covering Buġibba, Qawra, and the bay', 'Google Business Profile and TripAdvisor dominance across all three sub-zones', 'expat-residential content for the year-round international community'],
    audienceProfile: 'Year-round expats and tourists plus a Maltese resident base — diverse, English-first, and digitally active.',
    geo: { lat: 35.9486, lng: 14.4014 },
  },

  // Source: https://en.wikipedia.org/wiki/Manikata
  'manikata': {
    slug: 'manikata', name: 'Manikata',
    shortDescription: 'a tiny rural hamlet near Golden Bay',
    longIntro: 'Manikata is a tiny rural hamlet in north-western Malta, sitting next to Golden Bay and Għajn Tuffieħa with a quiet agricultural character and a small but loyal local audience.',
    populationDensity: 200, businessDensity: 'low',
    primaryIndustries: ['agriculture', 'rural tourism', 'small hospitality', 'agritourism', 'family retail'],
    landmarks: ['Manikata Parish Church', 'Golden Bay', 'Għajn Tuffieħa Bay', 'Manikata farms', 'Ta\' Lippija'],
    nearestLocations: ['Mġarr', 'Mellieħa', 'St Paul\'s Bay'],
    challenges: ['an extremely small audience', 'beach-tourism flow that bypasses the hamlet core', 'limited commercial supply'],
    opportunities: ['agritourism and farm-to-table content for the rural-luxury Maltese audience', 'multi-language SEO targeting Golden Bay holidaymakers', 'Google Business Profile dominance for the small commercial core'],
    audienceProfile: 'A tiny Maltese rural community plus a heavy summer beach-tourism audience.',
    geo: { lat: 35.9447, lng: 14.3503 },
  },

  // Source: https://en.wikipedia.org/wiki/Victoria,_Gozo
  'victoria-gozo': {
    slug: 'victoria-gozo', name: 'Victoria (Gozo)',
    shortDescription: 'the capital and commercial centre of Gozo',
    longIntro: 'Victoria (locally Rabat) is the capital and commercial heart of Gozo, anchored by the imposing Cittadella citadel and a busy market square. It is the natural commercial centre for the entire island of Gozo.',
    populationDensity: 1900, businessDensity: 'medium',
    primaryIndustries: ['family retail', 'tourism (Cittadella)', 'restaurants', 'professional services', 'agritourism'],
    landmarks: ['Cittadella', 'It-Tokk Square', 'St George\'s Basilica', 'Victoria parish church', 'Astra Theatre'],
    nearestLocations: ['Xewkija', 'Għajnsielem', 'Marsalforn'],
    challenges: ['a Gozo-only catchment that is small relative to mainland Malta', 'a dispersed island where customers may prefer to shop in mainland Malta for major purchases', 'tourism that competes against Mdina and Valletta for visitor share'],
    opportunities: ['Gozo-specific multi-language SEO targeting day-trippers from mainland Malta', 'Google Business Profile dominance for \"Victoria Gozo restaurant / hotel / shop\"', 'cultural-tourism content tied to the Cittadella and the Astra Theatre season'],
    audienceProfile: 'Long-established Gozitan families plus a year-round international tourist audience.',
    geo: { lat: 36.0444, lng: 14.2389 },
  },

  // Source: https://en.wikipedia.org/wiki/Xewkija
  'xewkija': {
    slug: 'xewkija', name: 'Xewkija (Gozo)',
    shortDescription: 'a Gozo village famous for the Rotunda parish church',
    longIntro: 'Xewkija is a Gozo village best known for its huge Rotunda parish church (one of the largest unsupported domes in Europe). It has a strong agricultural and trades base, and an industrial estate that anchors the local economy.',
    populationDensity: 700, businessDensity: 'low',
    primaryIndustries: ['light industry', 'agriculture', 'family retail', 'trades', 'food production'],
    landmarks: ['Xewkija Rotunda', 'Xewkija Industrial Estate', 'St John the Baptist Square', 'Triq Profs Edgar Walter', 'Xewkija War Memorial'],
    nearestLocations: ['Victoria', 'Għajnsielem', 'Sannat'],
    challenges: ['a small Gozo audience requiring island-wide marketing to be viable', 'overshadowed commercially by Victoria next door', 'limited storefront supply'],
    opportunities: ['B2B SEO for \"Gozo industrial supply / fabricator / trades\"', 'Google Business Profile dominance for the small commercial core', 'Facebook targeting of the wider Gozo family audience'],
    audienceProfile: 'Long-established Gozitan families with strong trade and farming roots.',
    geo: { lat: 36.0297, lng: 14.2611 },
  },

  // Source: https://en.wikipedia.org/wiki/G%C4%A7ajnsielem
  'ghajnsielem': {
    slug: 'ghajnsielem', name: 'Għajnsielem (Gozo)',
    shortDescription: 'the Gozo gateway village beside the Mġarr ferry terminal',
    longIntro: 'Għajnsielem is the Gozo village wrapping around the Mġarr ferry terminal — the entry point for everyone arriving from mainland Malta. It runs on transit traffic, family hospitality, and a small year-round residential base.',
    populationDensity: 700, businessDensity: 'medium',
    primaryIndustries: ['ferry-adjacent services', 'restaurants', 'tourism', 'family retail', 'small hospitality'],
    landmarks: ['Mġarr ferry terminal', 'Our Lady of Loreto Parish', 'Fort Chambray', 'Comino ferry quay', 'Mġarr Marina'],
    nearestLocations: ['Mġarr (Gozo)', 'Xewkija', 'Victoria'],
    challenges: ['a transit-heavy audience that often passes through to Victoria without stopping', 'tourism flow heavily dependent on the ferry timetable', 'a small year-round audience'],
    opportunities: ['Google Business Profile dominance for \"Gozo ferry restaurant / coffee / first stop\"', 'tourism content targeting day-trippers and Comino visitors', 'partnerships with ferry operators for first-arrival promotions'],
    audienceProfile: 'Day-trippers, Comino visitors, ferry-arrival tourists, and a small Gozo resident base.',
    geo: { lat: 36.0250, lng: 14.2842 },
  },

  // Source: https://en.wikipedia.org/wiki/Marsalforn
  'marsalforn': {
    slug: 'marsalforn', name: 'Marsalforn (Gozo)',
    shortDescription: 'the northern Gozo seaside resort town',
    longIntro: 'Marsalforn is Gozo\'s primary seaside resort, with a long promenade, a strong summer hospitality scene, and a Maltese-and-Gozitan-family weekend audience that doubles the resident population in summer.',
    populationDensity: 800, businessDensity: 'medium',
    primaryIndustries: ['hospitality', 'restaurants', 'tourism', 'water sports', 'short-let property'],
    landmarks: ['Marsalforn Bay', 'Marsalforn promenade', 'Qbajjar Bay', 'Salt Pans of Xwejni', 'Tal-Merżuq hill'],
    nearestLocations: ['Victoria', 'Żebbuġ (Gozo)', 'Xagħra'],
    challenges: ['extreme summer-winter swing typical of seasonal resorts', 'a Gozo-and-mainland-day-tripper audience that books almost entirely on price and reviews', 'a saturated promenade with dozens of similar restaurants'],
    opportunities: ['multi-language SEO for \"Marsalforn restaurant / hotel / water-sports\"', 'Google Business Profile and TripAdvisor dominance for the promenade strip', 'short-let-property content for summer holidaymakers'],
    audienceProfile: 'Heavy summer Maltese day-trippers and tourists plus a small year-round Gozitan resident base.',
    geo: { lat: 36.0708, lng: 14.2583 },
  },

  // Source: https://en.wikipedia.org/wiki/Birgu
  'vittoriosa': {
    slug: 'vittoriosa', name: 'Vittoriosa (Birgu)',
    shortDescription: 'one of the historic Three Cities, anchored by the Vittoriosa waterfront and Fort St Angelo',
    longIntro: 'Vittoriosa (locally Birgu) is one of the Three Cities of southern Malta, with a postcard-perfect waterfront, the historic Fort St Angelo, and a fast-growing tourism, fine-dining, and superyacht-marina footprint. It punches well above its size.',
    populationDensity: 5400, businessDensity: 'medium',
    primaryIndustries: ['fine dining', 'tourism', 'superyacht and marina services', 'cultural tourism', 'small hospitality'],
    landmarks: ['Fort St Angelo', 'Vittoriosa Waterfront', 'Inquisitor\'s Palace', 'Maritime Museum', 'Birgu Collachio'],
    nearestLocations: ['Senglea', 'Cospicua', 'Kalkara'],
    challenges: ['a small year-round resident base with all spending coming from visitors and waterfront diners', 'a dispersed Three-Cities catchment competing with Valletta across the harbour', 'tourism cycles tied to cruise-ship and city-break arrivals'],
    opportunities: ['multi-language SEO for the Three Cities cultural-tourism corridor', 'Google Business Profile dominance for \"Vittoriosa restaurant / waterfront\"', 'superyacht and luxury-services content for the marina audience'],
    audienceProfile: 'A small Maltese resident base plus a year-round international tourist audience and superyacht visitors.',
    geo: { lat: 35.8867, lng: 14.5236 },
  },

  // Source: https://en.wikipedia.org/wiki/Senglea
  'senglea': {
    slug: 'senglea', name: 'Senglea (Isla)',
    shortDescription: 'one of the historic Three Cities, with a tight peninsula footprint',
    longIntro: 'Senglea (locally Isla) is the smallest of the Three Cities by area but one of the most densely built — a fortified peninsula with a strong residential character and a growing fine-dining and tourism footprint along the waterfront.',
    populationDensity: 12200, businessDensity: 'medium',
    primaryIndustries: ['fine dining', 'tourism', 'small hospitality', 'cultural tourism', 'family retail'],
    landmarks: ['Senglea Point Garden (Vedette)', 'Basilica of Maria Bambina', 'Senglea Waterfront', 'Macina', 'Triq il-Vitorja'],
    nearestLocations: ['Vittoriosa', 'Cospicua', 'Kalkara'],
    challenges: ['extreme density on a small peninsula with limited storefront supply', 'tourism cycles tied to cruise-ship and city-break arrivals', 'a Three-Cities catchment that competes with Valletta across the harbour'],
    opportunities: ['multi-language SEO for the Three Cities cultural-tourism corridor', 'Google Business Profile dominance for \"Senglea restaurant / waterfront\"', 'partnership content with the Senglea waterfront cruise-stop calendar'],
    audienceProfile: 'A dense Maltese resident base plus a year-round international tourist audience.',
    geo: { lat: 35.8889, lng: 14.5172 },
  },

  // Source: https://en.wikipedia.org/wiki/Cospicua
  'cospicua': {
    slug: 'cospicua', name: 'Cospicua (Bormla)',
    shortDescription: 'the largest of the Three Cities, with a strong residential and commercial base',
    longIntro: 'Cospicua (locally Bormla) is the largest of the Three Cities by population, with a strong family-residential character, an active commercial high street, and a growing waterfront regeneration including the AX Hotels Cospicua development.',
    populationDensity: 7400, businessDensity: 'medium',
    primaryIndustries: ['family retail', 'restaurants', 'private healthcare', 'small hospitality', 'beauty and wellness'],
    landmarks: ['Cospicua Square', 'Immaculate Conception Parish', 'AX Hotel Cospicua waterfront', 'Triq il-Gendus', 'Bormla Bridge'],
    nearestLocations: ['Vittoriosa', 'Senglea', 'Paola'],
    challenges: ['a southern-Malta audience that often defaults to Sliema or Valletta for higher-end purchases', 'a Three-Cities tourism flow that often skips Cospicua for Vittoriosa and Senglea waterfronts', 'a high-street competition with Paola next door'],
    opportunities: ['Google Business Profile dominance for the Cospicua high street', 'waterfront-regeneration content tied to AX Hotel and the harbour development', 'Facebook targeting of southern-Malta family decision-makers'],
    audienceProfile: 'A strong Maltese resident base with deep parish ties plus a growing waterfront-tourism audience.',
    geo: { lat: 35.8806, lng: 14.5256 },
  },

  // Source: https://en.wikipedia.org/wiki/Kalkara
  'kalkara': {
    slug: 'kalkara', name: 'Kalkara',
    shortDescription: 'a small Three-Cities-adjacent town next to Smart City and Fort Ricasoli',
    longIntro: 'Kalkara is a small town adjoining the Three Cities, with a quiet residential core, the Smart City Malta technology park on its border, and the historic Fort Ricasoli looking out across the Grand Harbour.',
    populationDensity: 4400, businessDensity: 'low',
    primaryIndustries: ['family retail', 'beauty and wellness', 'food and groceries', 'small hospitality', 'professional services'],
    landmarks: ['Smart City Malta', 'Fort Ricasoli', 'Bighi Mediterranean Conference Centre', 'Kalkara Parish Church', 'Triq San Liberat'],
    nearestLocations: ['Vittoriosa', 'Smart City Malta', 'Cospicua'],
    challenges: ['a small year-round audience offset by a workforce inflow from Smart City', 'businesses that depend on Smart City tenant volumes for weekday demand', 'overshadowed commercially by Vittoriosa and Cospicua next door'],
    opportunities: ['B2B targeting of Smart City Malta tenants and tech professionals', 'Google Business Profile dominance for \"Kalkara restaurant / café / service\" near Smart City', 'Three-Cities cross-locality content marketing'],
    audienceProfile: 'A small Maltese resident base plus a weekday Smart City tech-professional inflow.',
    geo: { lat: 35.8889, lng: 14.5306 },
  },
};

export function getLocationProfile(slug: string): LocationProfile | undefined {
  return locationProfiles[slug];
}
