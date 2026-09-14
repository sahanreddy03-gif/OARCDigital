import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
import { getHreflangAlternates } from "@/lib/seo/discoveryTags";
import { NAP, POSTAL_ADDRESS, GEO_COORDINATES } from "@/lib/seo/nap";
import { FAQS } from "./faqs";
import "./insights.css";

const TITLE = "Marketing Agency in Malta — OARC Digital | Search, Ads, Film & AI";
const DESCRIPTION =
  "OARC Digital is the Malta marketing agency that publishes its numbers: ranked #3 for best marketing agencies in Malta and #5 for marketing agency Malta (14 Sept 2026). Search, answer engines, paid media, film, motion and AI staff from Birkirkara — one team, one retainer, one accountable number.";
const URL = "https://oarcdigital.com/insights/oarc-digital-malta";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: getHreflangAlternates("/insights/oarc-digital-malta", { canonical: URL }),
  robots: { index: true, follow: true },
  openGraph: {
    images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
  },
  twitter: {
    images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const SERVICES = [
  ["Search & SEO", "/services/seo-services"],
  ["Answer-engine & AI visibility", "/services/content-marketing"],
  ["Paid advertising", "/services/paid-advertising"],
  ["Social media & creative", "/services/social-media-creative-management"],
  ["Video production", "/services/video-production"],
  ["Motion design & 3D", "/services/motion-design"],
  ["Websites & product", "/services/web-design"],
  ["AI staff & voice agents", "/services/ai-voice-receptionist"],
  ["Automation & systems", "/services/automation"],
];

const FAQ_LD = {
  "@type": "FAQPage",
  "@id": `${URL}#faq`,
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "Organization", "LocalBusiness"],
      "@id": "https://oarcdigital.com/#organization",
      name: NAP.name,
      alternateName: NAP.alternateName,
      url: "https://oarcdigital.com",
      description:
        "OARC Digital is a Malta growth studio running search, answer-engine optimisation, paid media, film, motion and AI staff for brands in Malta and abroad.",
      telephone: NAP.phoneE164,
      email: NAP.email,
      address: POSTAL_ADDRESS,
      geo: GEO_COORDINATES,
      hasMap: NAP.mapUrl,
      areaServed: [
        { "@type": "Country", name: "Malta" },
        { "@type": "Place", name: "Europe" },
      ],
      knowsAbout: [
        "search engine optimisation",
        "answer engine optimisation",
        "generative engine optimisation",
        "local SEO in Malta",
        "Google Business Profile",
        "paid advertising",
        "video production",
        "motion design",
        "AI voice agents",
        "marketing automation",
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": "https://oarcdigital.com/#website" },
      about: { "@id": "https://oarcdigital.com/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://oarcdigital.com/insights/oarc-digital-malta/hero-cinematic-poster.jpg",
      },
      datePublished: "2026-09-13",
      dateModified: "2026-09-14",
      inLanguage: "en",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".oi-answer-quote", ".oi-entity dl", ".oi-h2"],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://oarcdigital.com/" },
        { "@type": "ListItem", position: 2, name: "Insights", item: "https://oarcdigital.com/insights" },
        { "@type": "ListItem", position: 3, name: "OARC Digital", item: URL },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${URL}#services`,
      name: "Services run by OARC Digital",
      itemListElement: SERVICES.map(([name, path], i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          name,
          url: `https://oarcdigital.com${path}`,
          provider: { "@id": "https://oarcdigital.com/#organization" },
        },
      })),
    },
    FAQ_LD,
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
