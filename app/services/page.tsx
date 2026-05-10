import type { Metadata } from "next";
import RouteSchema from "@/components/RouteSchema";
import { SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SUPPORTING_PAGE_SCHEMAS } from "@/lib/seo/supportingPagesSchema";
import { supportingPagesSEO } from "@/data/seoMetadata";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: supportingPagesSEO.services.title,
  description: supportingPagesSEO.services.description,
  alternates: { canonical: `https://oarcdigital.com${supportingPagesSEO.services.path}` },
  openGraph: {
    images: ogImageEntry({ title: supportingPagesSEO.services.title, subtitle: supportingPagesSEO.services.description }),
    title: supportingPagesSEO.services.title,
    description: supportingPagesSEO.services.description,
    url: `https://oarcdigital.com${supportingPagesSEO.services.path}`,
    type: supportingPagesSEO.services.ogType ?? "website",
  },
  twitter: {
    images: [ogImageUrl({ title: supportingPagesSEO.services.title, subtitle: supportingPagesSEO.services.description })],
    card: "summary_large_image",
    title: supportingPagesSEO.services.title,
    description: supportingPagesSEO.services.description,
  },
};

export default function Page() {
  return (
    <>
      <SpeakableJsonLd path="/services" />
        <RouteSchema
          type="pillar"
          path="/services"
          title="All Services — Creative, AI Agents, Revenue Automation | OARC Digital"
          description="OARC Digital's full Malta-based service catalogue: brand and creative, AI agents and employees, paid media, SEO, and revenue automation under one team."
          faqs={SUPPORTING_PAGE_SCHEMAS["/services"].faqs}
        />
      <PageContent />
    </>
  );
}
