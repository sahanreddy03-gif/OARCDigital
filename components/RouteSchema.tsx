// Server component. Emits a single JSON-LD @graph for any route.
// Designed to be dropped into any page.tsx with one line:
//
//   <RouteSchema type="article" path="/blog/foo" title="…" description="…" datePublished="2026-01-01" />
//
// Includes BreadcrumbList automatically derived from `path`.

import {
  buildArticle,
  buildFAQ,
  buildService,
  buildLocalBusiness,
  buildOrganization,
  buildPerson,
  buildWebSite,
  combine,
  breadcrumbFromPath,
  DEFAULT_RATING,
  type AggregateRatingOpts,
  type OfferOpts,
} from "@/lib/schema";

const BASE = "https://oarcdigital.com";

type CommonProps = {
  path: string;
  title: string;
  description: string;
  scriptId?: string;
};

type ArticleProps = CommonProps & {
  type: "article";
  datePublished: string;
  dateModified?: string;
  image?: string;
  faqs?: { question: string; answer: string }[];
};

type ServiceProps = CommonProps & {
  type: "service";
  features?: { name: string; description?: string }[];
  faqs?: { question: string; answer: string }[];
  aggregateRating?: AggregateRatingOpts;
  offers?: OfferOpts[];
  /** Optional Service.serviceType (e.g. "Industry-Specific Paid Advertising"). */
  serviceType?: string;
  /** Optional Service.audience array (verticals this Service targets). */
  audience?: string[];
  /** Optional Service.areaServed override; defaults to Malta. */
  areaServed?: string;
  /** Set false to skip the LocalBusiness node (default true). */
  includeLocalBusiness?: boolean;
  /** ISO date (YYYY-MM-DD). When set, emits a WebPage node carrying dateModified
   *  alongside the Service node so AI/SERP freshness signals pick it up. */
  dateModified?: string;
  /** Town-page geo. When set, the page node becomes `AboutPage` and carries
   *  `geo` (GeoCoordinates) + `contentLocation` (Place with PostalAddress +
   *  GeoCoordinates) for the named town. The LocalBusiness node STAYS
   *  anchored to the canonical Birkirkara HQ NAP and geo — town pages serve
   *  the locality from HQ, they do NOT claim a physical office in the town.
   *  Required for marketing-agency-{mosta,qormi,swieqi,gzira,mellieha,paola}. */
  townGeo?: { latitude: number; longitude: number; locality: string };
};

type LocalBusinessProps = CommonProps & {
  type: "localBusiness";
  faqs?: { question: string; answer: string }[];
  aggregateRating?: AggregateRatingOpts;
  locality?: string;
};

type PillarProps = CommonProps & {
  type: "pillar";
  faqs?: { question: string; answer: string }[];
  /** Set false to skip the LocalBusiness node (default true). */
  includeLocalBusiness?: boolean;
  /** Optional AggregateRating attached to the Organization node on pillar pages. */
  aggregateRating?: AggregateRatingOpts;
};

type GenericProps = CommonProps & {
  type?: "page";
};

export type RouteSchemaProps =
  | ArticleProps
  | ServiceProps
  | LocalBusinessProps
  | PillarProps
  | GenericProps;

export default function RouteSchema(props: RouteSchemaProps) {
  const url = `${BASE}${props.path}`;
  const breadcrumb = breadcrumbFromPath(props.path);
  // Fix breadcrumb final node title to use the real page title rather than a
  // slug-derived string.
  if (Array.isArray((breadcrumb as { itemListElement?: unknown[] }).itemListElement)) {
    const items = (breadcrumb as { itemListElement: { name: string; item: string }[] })
      .itemListElement;
    if (items.length > 0) items[items.length - 1].name = props.title;
  }

  const nodes: object[] = [breadcrumb];

  if (props.type === "article") {
    nodes.push(
      buildArticle({
        headline: props.title,
        description: props.description,
        url,
        datePublished: props.datePublished,
        dateModified: props.dateModified,
        image: props.image,
        speakable: true,
      }),
    );
    if (props.faqs && props.faqs.length) nodes.push(buildFAQ(props.faqs, true));
  } else if (props.type === "service") {
    const includeLB = props.includeLocalBusiness !== false;
    nodes.push(
      buildService({
        name: props.title,
        description: props.description,
        url,
        features: props.features,
        aggregateRating: props.aggregateRating ?? DEFAULT_RATING,
        offers: props.offers,
        serviceType: props.serviceType,
        audience: props.audience,
        areaServed: props.areaServed,
      }),
    );
    if (includeLB) {
      // LocalBusiness is ALWAYS anchored to the canonical Birkirkara HQ NAP
      // and geo. Town pages serve the locality from the HQ — they do NOT
      // claim a physical office in the town. Town-specific geo is expressed
      // on the AboutPage node below (geo + contentLocation), not by mutating
      // the LocalBusiness address.
      nodes.push(buildLocalBusiness());
      nodes.push(buildOrganization());
    }
    if (props.dateModified || props.townGeo) {
      const pageNode: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": props.townGeo ? "AboutPage" : "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: props.title,
        description: props.description,
        isPartOf: { "@id": `${BASE}/#website` },
        about: { "@id": `${BASE}/#organization` },
      };
      if (props.dateModified) pageNode.dateModified = props.dateModified;
      if (props.townGeo) {
        pageNode.geo = {
          "@type": "GeoCoordinates",
          latitude: props.townGeo.latitude,
          longitude: props.townGeo.longitude,
        };
        pageNode.contentLocation = {
          "@type": "Place",
          name: props.townGeo.locality,
          address: {
            "@type": "PostalAddress",
            addressLocality: props.townGeo.locality,
            addressCountry: "MT",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: props.townGeo.latitude,
            longitude: props.townGeo.longitude,
          },
        };
      }
      nodes.push(pageNode);
    }
    if (props.faqs && props.faqs.length) nodes.push(buildFAQ(props.faqs, true));
  } else if (props.type === "localBusiness") {
    const lb: Record<string, unknown> = { ...buildLocalBusiness({ locality: props.locality }) };
    const rating = props.aggregateRating ?? DEFAULT_RATING;
    if (rating) {
      lb.aggregateRating = {
        "@type": "AggregateRating",
        ratingValue: rating.ratingValue,
        reviewCount: rating.reviewCount,
        bestRating: rating.bestRating ?? 5,
        worstRating: rating.worstRating ?? 1,
      };
    }
    nodes.push(lb);
    nodes.push(buildOrganization());
    if (props.faqs && props.faqs.length) nodes.push(buildFAQ(props.faqs, true));
  } else if (props.type === "pillar") {
    // Money-page schema: Organization + LocalBusiness + WebSite + Person
    // (founder) + BreadcrumbList + FAQPage. No Service node — pillars promote
    // the brand entity, the spoke /services/<slug> pages emit Service nodes.
    const org = { ...buildOrganization() } as Record<string, unknown>;
    if (props.aggregateRating) {
      org.aggregateRating = {
        "@type": "AggregateRating",
        ratingValue: props.aggregateRating.ratingValue,
        reviewCount: props.aggregateRating.reviewCount,
        bestRating: props.aggregateRating.bestRating ?? 5,
        worstRating: props.aggregateRating.worstRating ?? 1,
      };
    }
    nodes.push(org);
    if (props.includeLocalBusiness !== false) nodes.push(buildLocalBusiness());
    nodes.push(buildWebSite());
    nodes.push(buildPerson());
    nodes.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: props.title,
      description: props.description,
      isPartOf: { "@id": `${BASE}/#website` },
      about: { "@id": `${BASE}/#organization` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${BASE}/oarc-logo.png` },
    });
    if (props.faqs && props.faqs.length) nodes.push(buildFAQ(props.faqs, true));
  } else {
    nodes.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      url,
      name: props.title,
      description: props.description,
    });
  }

  const graph = combine(...nodes);
  const id =
    props.scriptId ?? `route-schema-${props.path.replace(/[^a-z0-9]+/gi, "-")}`;

  const faqs =
    "faqs" in props && props.faqs && props.faqs.length ? props.faqs : null;

  // Plain inline <script> renders deterministically in SSR HTML. next/script
  // with strategy="beforeInteractive" is silently dropped outside app/layout
  // (Next.js docs), which previously prevented Service / BreadcrumbList nodes
  // from reaching the rendered page on every /services/<slug> route.
  //
  // Always-present `.faq-answer` nodes keep SpeakableSpecification valid when
  // visible FAQs live in closed accordions (not in initial HTML).
  return (
    <>
      <script
        id={id}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      {faqs ? (
        <div className="sr-only" aria-hidden="true">
          {faqs.map((f, i) => (
            <p key={`faq-speakable-${i}`} className="faq-answer">
              {f.answer}
            </p>
          ))}
        </div>
      ) : null}
    </>
  );
}
