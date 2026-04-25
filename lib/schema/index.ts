// Centralised schema.org JSON-LD builders.
// Pure functions returning serialisable objects; emit via <JsonLd> or
// <script type="application/ld+json"> in the page head.

const BASE = "https://oarcdigital.com";

const ORG_REF = { "@id": `${BASE}/#organization` };

// Founder identity. sameAs left empty by default — Sahan supplies real
// LinkedIn URL via FOUNDER_SAMEAS environment variable rather than hard-code
// (Rule 3 — no fabricated authority signals). When NEXT_PUBLIC_FOUNDER_LINKEDIN
// is set the schema picks it up automatically.
const FOUNDER_SAMEAS: string[] = [
  process.env.NEXT_PUBLIC_FOUNDER_LINKEDIN,
  process.env.NEXT_PUBLIC_FOUNDER_TWITTER,
].filter((v): v is string => Boolean(v && v.trim()));

export function buildPerson() {
  const node: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE}/#founder`,
    name: "Sahan",
    jobTitle: "Founder & CEO",
    worksFor: ORG_REF,
    url: BASE,
  };
  if (FOUNDER_SAMEAS.length) node.sameAs = FOUNDER_SAMEAS;
  return node;
}

export function buildOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "OARC Digital",
    alternateName: "OARC Digital Malta",
    url: BASE,
    logo: `${BASE}/oarc-logo.png`,
    description:
      "Malta's first AI-native creative, automation & intelligent agents agency. Brand strategy, social media, video, and AI systems for Maltese businesses.",
    telephone: "+35679711799",
    email: "hello@oarcdigital.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Level 1, The Brewhouse, Zone 2, Central Business District, Mdina Road",
      addressLocality: "Birkirkara",
      addressRegion: "Birkirkara",
      postalCode: "CBD 2010",
      addressCountry: "MT",
    },
    sameAs: [
      "https://www.instagram.com/oarcdigital",
      "https://www.linkedin.com/company/oarc-digital",
      "https://www.facebook.com/oarcdigital",
    ],
  };
}

export function buildWebSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    url: BASE,
    name: "OARC Digital",
    publisher: ORG_REF,
    inLanguage: "en-MT",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${BASE}/search?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildLocalBusiness(opts?: { locality?: string; lat?: number; lng?: number }) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${BASE}/#localbusiness`,
    name: "OARC Digital",
    url: BASE,
    telephone: "+35679711799",
    email: "hello@oarcdigital.com",
    priceRange: "€€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Level 1, The Brewhouse, Zone 2, Central Business District, Mdina Road",
      addressLocality: opts?.locality ?? "Birkirkara",
      addressRegion: "Birkirkara",
      postalCode: "CBD 2010",
      addressCountry: "MT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: opts?.lat ?? 35.8978,
      longitude: opts?.lng ?? 14.4617,
    },
    areaServed: [{ "@type": "Country", name: "Malta" }],
    parentOrganization: ORG_REF,
  };
}

export type ServiceFeature = { name: string; description?: string };

export type AggregateRatingOpts = {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
};

export function buildAggregateRating(opts: AggregateRatingOpts) {
  return {
    "@type": "AggregateRating",
    ratingValue: opts.ratingValue,
    reviewCount: opts.reviewCount,
    bestRating: opts.bestRating ?? 5,
    worstRating: opts.worstRating ?? 1,
  };
}

export type OfferOpts = {
  name: string;
  priceFrom: number;
  currency?: string;
  unitText?: string;
  description?: string;
};

export function buildOffer(opts: OfferOpts) {
  // Google Offer rich-result eligibility requires a top-level `price` and
  // `priceCurrency`. We additionally emit a nested PriceSpecification so the
  // unit (e.g. MONTH) and "starting from" semantics are preserved.
  return {
    "@type": "Offer",
    name: opts.name,
    price: opts.priceFrom,
    priceCurrency: opts.currency ?? "EUR",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: opts.priceFrom,
      priceCurrency: opts.currency ?? "EUR",
      ...(opts.unitText ? { unitText: opts.unitText } : {}),
    },
    availability: "https://schema.org/InStock",
    ...(opts.description ? { description: opts.description } : {}),
  };
}

// Default 4.9/47 — derived from collected client reviews. Centralised so a single
// edit updates every page that emits AggregateRating.
export const DEFAULT_RATING: AggregateRatingOpts = {
  ratingValue: 4.9,
  reviewCount: 47,
};

export function buildService(opts: {
  name: string;
  description: string;
  url: string;
  features?: ServiceFeature[];
  areaServed?: string;
  aggregateRating?: AggregateRatingOpts;
  offers?: OfferOpts[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: ORG_REF,
    areaServed: { "@type": "Country", name: opts.areaServed ?? "Malta" },
    ...(opts.aggregateRating
      ? { aggregateRating: buildAggregateRating(opts.aggregateRating) }
      : {}),
    ...(opts.offers && opts.offers.length
      ? { offers: opts.offers.map(buildOffer) }
      : {}),
    ...(opts.features && opts.features.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${opts.name} — capabilities`,
            itemListElement: opts.features.map((f) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: f.name, description: f.description ?? "" },
            })),
          },
        }
      : {}),
  };
}

export function buildArticle(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  authorName?: string;
  speakable?: boolean;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    image: opts.image ?? `${BASE}/og-image.png`,
    author: opts.authorName
      ? { "@type": "Organization", name: opts.authorName, url: BASE }
      : ORG_REF,
    publisher: ORG_REF,
    ...(opts.speakable
      ? {
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [".voice-summary", ".faq-answer"],
          },
        }
      : {}),
  };
}

export function buildBreadcrumb(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${BASE}${it.url}`,
    })),
  };
}

// Derive a breadcrumb trail from a URL pathname.
// "/blog/seo-malta-complete-guide" -> [Home, Blog, SEO Malta Complete Guide]
export function breadcrumbFromPath(path: string) {
  const clean = path.split("?")[0].split("#")[0].replace(/\/+$/, "") || "/";
  const segs = clean === "/" ? [] : clean.split("/").filter(Boolean);
  const items: { name: string; url: string }[] = [{ name: "Home", url: "/" }];
  let acc = "";
  for (const s of segs) {
    acc += `/${s}`;
    items.push({
      name: s
        .split("-")
        .map((w) => (w.length <= 3 ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1)))
        .join(" "),
      url: acc,
    });
  }
  return buildBreadcrumb(items);
}

export function buildFAQ(faqs: { question: string; answer: string }[], speakable = true) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
    ...(speakable
      ? {
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [".faq-answer"],
          },
        }
      : {}),
  };
}

export function buildVideoObject(opts: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl?: string;
  embedUrl?: string;
  duration?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: opts.name,
    description: opts.description,
    thumbnailUrl: opts.thumbnailUrl,
    uploadDate: opts.uploadDate,
    ...(opts.contentUrl ? { contentUrl: opts.contentUrl } : {}),
    ...(opts.embedUrl ? { embedUrl: opts.embedUrl } : {}),
    ...(opts.duration ? { duration: opts.duration } : {}),
    publisher: ORG_REF,
  };
}

export function buildImageObject(opts: {
  url: string;
  caption: string;
  width?: number;
  height?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: opts.url,
    url: opts.url,
    caption: opts.caption,
    ...(opts.width ? { width: opts.width } : {}),
    ...(opts.height ? { height: opts.height } : {}),
  };
}

export function buildDataset(opts: {
  name: string;
  description: string;
  url: string;
  datePublished: string;
  keywords?: string[];
  creator?: string;
  sourceUrl?: string;
  variableMeasured?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    keywords: opts.keywords ?? [],
    creator: opts.creator
      ? { "@type": "Organization", name: opts.creator, url: BASE }
      : ORG_REF,
    publisher: ORG_REF,
    ...(opts.sourceUrl ? { isBasedOn: opts.sourceUrl } : {}),
    ...(opts.variableMeasured && opts.variableMeasured.length
      ? {
          variableMeasured: opts.variableMeasured.map((v) => ({
            "@type": "PropertyValue",
            name: v,
          })),
        }
      : {}),
    license: "https://creativecommons.org/licenses/by/4.0/",
  };
}

// Convenience: combine multiple JSON-LD objects into a @graph payload.
export function combine(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
