import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { PILLAR_SCHEMAS } from "@/lib/seo/pillarSchemaConfig";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";

const pillarMeta = PILLAR_SCHEMAS["/automation"];

export const metadata: Metadata = {
  title: "Business Automation Malta | Revenue Solutions | OARC",
  description: "One Malta team for creative, AI agents, and automation—so owners get more customers and fewer manual loops. Birkirkara. Book a call.",
  keywords: "business automation Malta, workflow automation Malta, CRM Malta, custom software Malta, digital transformation Malta, API integration Malta, lead generation Malta, email marketing Malta, marketing automation Malta, process automation Malta, Zapier Malta, HubSpot Malta, sales automation Malta",
  alternates: getHreflangAlternates("/solutions", { canonical: "https://oarcdigital.com/automation" }),
  openGraph: {
    title: "Business Automation Malta | Revenue Solutions | OARC",
    description: "One Malta team for creative, AI agents, and automation—so owners get more customers and fewer manual loops. Birkirkara. Book a call.",
    url: "https://oarcdigital.com/automation",
    type: "website",
    images: [{ url: "https://oarcdigital.com/attached_assets/marketing-automation-optimized.webp", width: 1200, height: 630, alt: "OARC Digital Malta — revenue automation and marketing solutions for SMBs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Automation Malta | Revenue Solutions | OARC",
    description: "One Malta team for creative, AI agents, and automation—so owners get more customers and fewer manual loops.",
    images: ["https://oarcdigital.com/attached_assets/marketing-automation-optimized.webp"],
  },
};

export default function Page() {
  return (
    <>
      <SpeakableJsonLd path="/solutions" />
      <RouteSchema
        type="pillar"
        path="/solutions"
        title={pillarMeta.title}
        description={pillarMeta.description}
        faqs={pillarMeta.faqs}
      />
      <PageContent />
    </>
  );
}
