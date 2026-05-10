import type { Metadata } from "next";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SUPPORTING_PAGE_SCHEMAS } from "@/lib/seo/supportingPagesSchema";
import { supportingPagesSEO } from "@/data/seoMetadata";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  alternates: getHreflangAlternates("/contact"),
  title: supportingPagesSEO.contact.title,
  description: supportingPagesSEO.contact.description,
  openGraph: {
    images: ogImageEntry({ title: supportingPagesSEO.contact.title, subtitle: supportingPagesSEO.contact.description }),
    title: supportingPagesSEO.contact.title,
    description: supportingPagesSEO.contact.description,
    url: `https://oarcdigital.com${supportingPagesSEO.contact.path}`,
    type: supportingPagesSEO.contact.ogType ?? "website",
  },
  twitter: {
    images: [ogImageUrl({ title: supportingPagesSEO.contact.title, subtitle: supportingPagesSEO.contact.description })],
    card: "summary_large_image",
    title: supportingPagesSEO.contact.title,
    description: supportingPagesSEO.contact.description,
  },
};

export default function Page() {
  return (
    <>
      <SpeakableJsonLd path="/contact" />
        <RouteSchema
          type="pillar"
          path="/contact"
          title="Contact OARC Digital — Birkirkara, Malta | Book a 30-Minute Audit"
          description="Talk to the OARC Digital team in Birkirkara CBD about creative, AI agents, and revenue automation. Walk in to The Brewhouse on weekdays, call us, or book a slot online."
          faqs={SUPPORTING_PAGE_SCHEMAS["/contact"].faqs}
        />
      <PageContent />
    </>
  );
}
