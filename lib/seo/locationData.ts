// Rich, location-specific data for the 10 KEPT Malta localities.
// Used by the unique-content generator so every Malta page reads
// like a different page, not a slot-filled template.
//
// Coordinates are public-record centroids; populationDensity is rounded
// (residents per km²) per Malta National Statistics Office figures.
// Archived localities (40) live behind 410s in middleware and are
// intentionally excluded here.

export type LocationProfile = {
  slug: string;
  name: string;
  shortDescription: string;       // "the bustling commercial hub"
  longIntro: string;              // 2 sentence place portrait
  populationDensity: number;      // residents per km²
  businessDensity: 'high' | 'medium' | 'low';
  primaryIndustries: string[];    // top 3-5
  landmarks: string[];            // 3-5 named places
  nearestLocations: string[];     // 3 neighbouring Malta towns
  challenges: string[];           // 2-3 location-specific business pain points
  opportunities: string[];        // 2-3 location-specific marketing opportunities
  audienceProfile: string;        // 1 sentence on who lives/works/visits here
  geo: { lat: number; lng: number };
};

export const locationProfiles: Record<string, LocationProfile> = {
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
      'cinematic short-form video that converts pre-arrival travel research into bookings',
      'multilingual SEO targeting British, German, Italian, and Scandinavian visitors',
      'Google Business Profile optimisation around the city\'s 200+ listed restaurants and bars',
    ],
    audienceProfile: 'A blended audience of 1.6M annual cultural tourists, 7,500 government and embassy professionals, and a small but affluent resident base.',
    geo: { lat: 35.8989, lng: 14.5145 },
  },

  'sliema': {
    slug: 'sliema',
    name: 'Sliema',
    shortDescription: 'Malta\'s coastal commercial and retail hub',
    longIntro: 'Sliema is the densest commercial seafront in Malta, with the highest concentration of international retail, finance offices, and waterfront restaurants on the island. Its 2.5 km promenade — Tigné Point through to Balluta Bay — is the busiest pedestrian artery outside Valletta and the default first move for any consumer brand entering Malta.',
    populationDensity: 13700,
    businessDensity: 'high',
    primaryIndustries: ['retail', 'finance', 'restaurants', 'real estate', 'health & beauty'],
    landmarks: ['Tigné Point', 'The Strand', 'Balluta Bay', 'Sliema Ferries', 'The Plaza'],
    nearestLocations: ['Gzira', 'St. Julians', 'Ta\' Xbiex'],
    challenges: [
      'fierce competition from international retail chains with global ad budgets and global creative production',
      'an audience that already lives in Instagram and TikTok — generic, posted-once-a-week content is invisible here',
      'high foot traffic that disguises poor conversion: 10,000 walk-bys a day means almost nothing without a content engine pulling them in',
    ],
    opportunities: [
      'hyper-local Meta and TikTok ads targeting the 40,000 daily commuters into the Sliema commercial zone',
      'lifestyle and product video shot against the promenade — the most recognisable visual in Malta',
      'Google Maps + Apple Maps optimisation for "near me" searches, which dominate Sliema retail intent',
    ],
    audienceProfile: 'High-density mix of young professionals, expats working in iGaming and finance, and a steady stream of regional and international shoppers.',
    geo: { lat: 35.9132, lng: 14.5018 },
  },

  'st-julians': {
    slug: 'st-julians',
    name: 'St. Julians',
    shortDescription: 'Malta\'s nightlife, iGaming, and entertainment district',
    longIntro: 'St. Julians is the entertainment and corporate gaming capital of Malta. Paceville alone hosts more than 100 bars, clubs, and restaurants, and the surrounding business towers — Portomaso, Spinola, Pendergardens — house the majority of the island\'s iGaming operators and the highest density of expat workers in the country.',
    populationDensity: 16400,
    businessDensity: 'high',
    primaryIndustries: ['iGaming', 'hospitality', 'nightlife', 'hotels', 'corporate B2B'],
    landmarks: ['Portomaso Marina', 'Spinola Bay', 'Paceville', 'Pendergardens', 'InterContinental Arena'],
    nearestLocations: ['Sliema', 'Swieqi', 'Pembroke'],
    challenges: [
      'a transient, expat-dominated customer base that turns over every 18–24 months — brand loyalty must be rebuilt continuously',
      'strict iGaming advertising compliance constraints that rule out most generic creative playbooks',
      'a saturated nightlife market where 100+ venues fight for the same Friday and Saturday spend',
    ],
    opportunities: [
      'B2B LinkedIn and account-based campaigns reaching the 12,000+ iGaming professionals based in St. Julians',
      'event marketing tied to SiGMA, iGaming Next, and the year-round conference calendar at the InterContinental Arena',
      'compliance-aware paid creative production for regulated operators — a service Malta has very few specialists in',
    ],
    audienceProfile: 'Young, international, high-disposable-income professionals — predominantly 25–40, working in iGaming, finance, or tech, plus weekend tourist nightlife traffic.',
    geo: { lat: 35.9215, lng: 14.4899 },
  },

  'birkirkara': {
    slug: 'birkirkara',
    name: 'Birkirkara',
    shortDescription: 'Malta\'s largest town and central business backbone',
    longIntro: 'Birkirkara is the most populous town in Malta and sits at the geographic heart of the island, making it the island\'s default address for SMEs, professional services, and the Central Business District around Mdina Road. It is where most Maltese-owned businesses are registered and where local-language marketing still outperforms English-only campaigns.',
    populationDensity: 5400,
    businessDensity: 'high',
    primaryIndustries: ['SMEs', 'professional services', 'automotive', 'retail', 'B2B services'],
    landmarks: ['Central Business District', 'St Helen\'s Basilica', 'Mdina Road', 'Bypass', 'Tal-Ħerba'],
    nearestLocations: ['Balzan', 'San Gwann', 'Qormi'],
    challenges: [
      'a fragmented SME audience that responds better to Maltese-language marketing than English — a nuance most international agencies miss',
      'high-traffic but low-discoverability commercial zones where signage no longer drives walk-ins',
      'family-run businesses competing against well-funded chains moving into the Central Business District',
    ],
    opportunities: [
      'bilingual (Maltese + English) social and ad creative that genuinely speaks to the local owner-operator economy',
      'B2B campaigns targeting the 1,000+ companies registered around the Central Business District',
      'review and reputation management on Google Business Profile, where most Birkirkara consumer journeys still start',
    ],
    audienceProfile: 'Predominantly Maltese-speaking residents, family-run SMEs, and a growing cluster of international companies moving into the Central Business District.',
    geo: { lat: 35.8972, lng: 14.4611 },
  },

  'mosta': {
    slug: 'mosta',
    name: 'Mosta',
    shortDescription: 'central Malta\'s residential and retail heartland',
    longIntro: 'Mosta sits at the geographic centre of Malta and is best known for the Mosta Dome, one of the largest unsupported domes in Europe. Beyond tourism, Mosta is a dense residential town with one of the strongest domestic retail catchments outside Sliema — the Mosta Square commercial strip alone draws shoppers from a dozen surrounding villages.',
    populationDensity: 2900,
    businessDensity: 'medium',
    primaryIndustries: ['retail', 'restaurants', 'family services', 'automotive', 'home & lifestyle'],
    landmarks: ['Rotunda of Mosta', 'Mosta Square', 'Triq il-Kostituzzjoni', 'Mosta Public Garden', 'Targa Gap'],
    nearestLocations: ['Naxxar', 'Lija', 'Birkirkara'],
    challenges: [
      'a domestic shopper audience that compares prices online before visiting — making local Google search rank a direct revenue driver',
      'older brick-and-mortar businesses with no organised digital presence losing share to chains with better content',
      'limited late-evening trade — the catchment goes home by 8pm, requiring tightly targeted day-part advertising',
    ],
    opportunities: [
      'Google Maps and "Mosta + service" SEO for the 12 surrounding villages that source services from the Mosta commercial strip',
      'family-oriented social content that performs heavily on Facebook (still the dominant platform for Maltese 35+)',
      'cross-promotion between independent Mosta retailers — a community angle the chains structurally cannot match',
    ],
    audienceProfile: 'Multi-generational Maltese families, suburban shoppers from a wide central-Malta catchment, plus weekend cultural tourists drawn to the Rotunda.',
    geo: { lat: 35.9094, lng: 14.4258 },
  },

  'qormi': {
    slug: 'qormi',
    name: 'Qormi',
    shortDescription: 'Malta\'s historic artisan and bakery city',
    longIntro: 'Qormi is one of Malta\'s oldest cities, traditionally known as Casal Fornaro for its bakers, and today combines historic artisan trades with light industrial estates and a growing logistics cluster. It is one of the largest towns by area and home to a wide mix of family bakeries, mechanics, B2B suppliers, and emerging F&B brands.',
    populationDensity: 2400,
    businessDensity: 'medium',
    primaryIndustries: ['bakeries & food production', 'light industry', 'logistics', 'automotive trades', 'B2B suppliers'],
    landmarks: ['Parish Church of St George', 'Mill Street', 'Qormi Industrial Estate', 'Wied is-Sewda', 'Triq il-Vitorja'],
    nearestLocations: ['Hamrun', 'Marsa', 'Birkirkara'],
    challenges: [
      'an artisan economy where founders rarely have time or skill for ongoing content — generating consistent organic reach is the #1 unmet need',
      'B2B suppliers with no digital lead-gen pipeline, still reliant on word-of-mouth and trade events',
      'historic brand assets (some businesses date back generations) that have never been visually documented or modernised',
    ],
    opportunities: [
      'storytelling video content showcasing multi-generational Qormi craft — a heritage angle no other Malta town can authentically match',
      'B2B lead generation for the 200+ light-industrial and trade businesses in the Qormi Industrial Estate',
      'TikTok and Reels for traditional bakeries — Maltese food content travels exceptionally well internationally',
    ],
    audienceProfile: 'Historic Maltese families, second-generation business owners, B2B trade buyers, and a growing pocket of food and craft tourism.',
    geo: { lat: 35.8761, lng: 14.4708 },
  },

  'zabbar': {
    slug: 'zabbar',
    name: 'Żabbar',
    shortDescription: 'a heritage southern town with a strong local economy',
    longIntro: 'Żabbar is the largest town in the south-east of Malta, anchored by the Sanctuary of Our Lady of Graces and a tightly-knit residential community. Its commercial strip on Triq is-Santwarju serves Żabbar plus a wider catchment from the Three Cities — making it a quietly important centre for everyday retail, services, and family-run F&B.',
    populationDensity: 4400,
    businessDensity: 'medium',
    primaryIndustries: ['everyday retail', 'family restaurants', 'health services', 'home services', 'trades'],
    landmarks: ['Sanctuary of Our Lady of Graces', 'Triq is-Santwarju', 'Bieb is-Sultan', 'Żabbar Square', 'Hompesch Arch'],
    nearestLocations: ['Fgura', 'Cospicua', 'Marsaskala'],
    challenges: [
      'a loyal but ageing customer base — younger demographics travel to Sliema or Valletta unless given a reason to stay local',
      'trade and home-service businesses with no digital booking flow, losing leads to Malta-wide directories with worse local knowledge',
      'limited high-speed F&B trade — most spend leaves the town in the evenings',
    ],
    opportunities: [
      'community-led Facebook content (Facebook still dominates the 40+ demographic in southern Malta)',
      'Google Local Service Ads for plumbers, electricians, and home service trades operating from Żabbar',
      'partnership content with the Three Cities tourism uplift — capturing the heritage-tourist overflow into Żabbar\'s F&B venues',
    ],
    audienceProfile: 'Multi-generational southern Maltese families, a strong 40+ demographic, plus growing weekend traffic from Cospicua and Vittoriosa heritage tourists.',
    geo: { lat: 35.8736, lng: 14.5378 },
  },

  'san-gwann': {
    slug: 'san-gwann',
    name: 'San Ġwann',
    shortDescription: 'a fast-growing northern residential and commercial hub',
    longIntro: 'San Ġwann has grown from a quiet residential town into one of the most rapidly commercialising districts in Malta, sitting between the iGaming corridor of St. Julians and the central business cluster of Birkirkara. Its industrial estate and Triq it-Torri commercial strip now host hundreds of SMEs, tech companies, and professional services firms.',
    populationDensity: 5100,
    businessDensity: 'high',
    primaryIndustries: ['tech & SaaS', 'professional services', 'B2B suppliers', 'health & wellness', 'showrooms'],
    landmarks: ['San Ġwann Industrial Estate', 'Triq it-Torri', 'Tal-Mensija', 'Triq Naxxar', 'Misraħ Lourdes'],
    nearestLocations: ['Swieqi', 'Birkirkara', 'St. Julians'],
    challenges: [
      'a commercial district growing faster than its brand identity — most San Ġwann businesses still rely on signage rather than digital discovery',
      'tech and SaaS companies competing for international clients with generic, undifferentiated positioning',
      'showroom and B2B retail businesses where the buyer journey now starts on Instagram, not a Saturday drive-by',
    ],
    opportunities: [
      'B2B LinkedIn campaigns targeting the dense cluster of decision-makers working in San Ġwann Industrial Estate',
      'positioning content for tech and SaaS founders selling out of Malta — a market most local agencies do not understand',
      'Google Maps optimisation for the showroom economy along Triq it-Torri',
    ],
    audienceProfile: 'A mix of young Maltese families, tech professionals, B2B buyers from across the central commercial corridor, and expat residents priced out of Sliema.',
    geo: { lat: 35.9069, lng: 14.4781 },
  },

  'gzira': {
    slug: 'gzira',
    name: 'Gżira',
    shortDescription: 'Malta\'s waterfront student and lifestyle district',
    longIntro: 'Gżira sits on the harbourfront between Sliema and Msida, anchored by the University of Malta\'s outer campus and a long lifestyle promenade looking across to Manoel Island. It is one of the youngest demographic profiles on the island and has the highest concentration of student-targeted F&B, fitness, and lifestyle services in Malta.',
    populationDensity: 16800,
    businessDensity: 'high',
    primaryIndustries: ['student F&B', 'fitness', 'lifestyle retail', 'short-let property', 'co-working & tech'],
    landmarks: ['Manoel Island', 'Gżira Promenade', 'Triq ix-Xatt', 'Independence Garden', 'Garibaldi Square'],
    nearestLocations: ['Sliema', 'Msida', 'Ta\' Xbiex'],
    challenges: [
      'a student-heavy customer base with low brand loyalty and extreme price sensitivity during term breaks',
      'an oversupplied short-let property market competing on Airbnb optimisation and visual content',
      'fitness and wellness brands fighting for the same 18–28 demographic across a dozen near-identical studios',
    ],
    opportunities: [
      'TikTok and Instagram Reels content built around the student lifestyle and harbour-view aesthetic',
      'short-let property marketing — professional photography, video, and Airbnb / Booking.com listing optimisation',
      'micro-community content for fitness studios and wellness brands, where founder personality outperforms slick production',
    ],
    audienceProfile: 'Heavily skewed 18–35: international students, young professionals, short-stay residents, and the lifestyle traffic spilling over from Sliema.',
    geo: { lat: 35.9078, lng: 14.4933 },
  },

  'hamrun': {
    slug: 'hamrun',
    name: 'Ħamrun',
    shortDescription: 'central Malta\'s historic main-street and multicultural hub',
    longIntro: 'Ħamrun is one of the most densely populated towns in Malta, built along a historic mile-long main road (High Street) that runs from Floriana into Birkirkara. It is one of the most multicultural communities on the island, with strong African, Asian, and Middle-Eastern populations, and a main-street economy that mixes traditional Maltese trades with new ethnic F&B and retail.',
    populationDensity: 7900,
    businessDensity: 'medium',
    primaryIndustries: ['main-street retail', 'ethnic F&B', 'remittance & financial services', 'small workshops', 'community services'],
    landmarks: ['St Cajetan Parish Church', 'High Street', 'Triq il-Kbira San Ġużepp', 'Blata l-Bajda', 'Marsa Junction'],
    nearestLocations: ['Marsa', 'Pieta', 'Qormi'],
    challenges: [
      'a multicultural customer base with very different content consumption habits — single-language, single-platform marketing fails here',
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
};

export function getLocationProfile(slug: string): LocationProfile | undefined {
  return locationProfiles[slug];
}
