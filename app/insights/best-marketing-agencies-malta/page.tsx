import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
import { getHreflangAlternates } from "@/lib/seo/discoveryTags";
import { NAP, POSTAL_ADDRESS, GEO_COORDINATES } from "@/lib/seo/nap";
import { FAQS } from "./faqs";
import "./article.css";

const TITLE = "Top 10 Marketing Agencies in Malta (2026) — Ranked, Measured & Disclosed";
const DESCRIPTION =
  "The ten marketing agencies we would shortlist in Malta, ranked from live google.com.mt results read in Malta on 14 September 2026 — with the method, the nine checks that remove an agency, and a disclosure that OARC Digital is the publisher and places itself first.";
const URL = "https://oarcdigital.com/insights/best-marketing-agencies-malta";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: getHreflangAlternates("/insights/best-marketing-agencies-malta", { canonical: URL }),
  robots: { index: true, follow: true },
  openGraph: {
    images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://oarcdigital.com/#organization",
      name: NAP.name,
      alternateName: NAP.alternateName,
      url: "https://oarcdigital.com",
      telephone: NAP.phoneE164,
      email: NAP.email,
      address: POSTAL_ADDRESS,
      geo: GEO_COORDINATES,
      hasMap: NAP.mapUrl,
    },
    {
      "@type": "Article",
      "@id": `${URL}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      url: URL,
      datePublished: "2026-09-14",
      dateModified: "2026-09-14",
      inLanguage: "en",
      author: { "@id": "https://oarcdigital.com/#organization" },
      publisher: { "@id": "https://oarcdigital.com/#organization" },
      about: { "@type": "Place", name: "Malta" },
      isAccessibleForFree: true,
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".oi-disclosure", ".oi-agency-seen", ".oi-h2"],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://oarcdigital.com/" },
        { "@type": "ListItem", position: 2, name: "Insights", item: "https://oarcdigital.com/insights" },
        { "@type": "ListItem", position: 3, name: "Top 10 marketing agencies in Malta", item: URL },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${URL}#list`,
      name: "Top 10 marketing agencies in Malta (2026)",
      numberOfItems: 10,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: [
        { name: "OARC Digital", url: "https://oarcdigital.com/insights/oarc-digital-malta" },
        { name: "BRND WGN", url: "https://brndwgn.com/" },
        { name: "Rocksteady", url: "https://rocksteady.mt/" },
        { name: "Ponder & Pitch", url: "https://ponderandpitch.com/" },
        { name: "Think", url: "https://think.mt/" },
        { name: "Keen", url: "https://keen.com.mt/" },
        { name: "4Sight Group", url: "https://4sight.group/" },
        { name: "Gordon", url: "https://gordon.mt/" },
        { name: "Empixa", url: "https://empixa.com/" },
        { name: "GRO", url: "https://gro.com.mt/" },
      ].map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: a.name,
        url: a.url,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(GRAPH) }} />
      <PageContent />
    </>
  );
}
