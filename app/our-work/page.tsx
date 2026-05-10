import type { Metadata } from "next";
import RouteSchema from "@/components/RouteSchema";
import { SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SUPPORTING_PAGE_SCHEMAS } from "@/lib/seo/supportingPagesSchema";
import { supportingPagesSEO } from "@/data/seoMetadata";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: supportingPagesSEO.ourWork.title,
  description: supportingPagesSEO.ourWork.description,
  alternates: { canonical: `https://oarcdigital.com${supportingPagesSEO.ourWork.path}` },
  openGraph: {
    images: ogImageEntry({ title: supportingPagesSEO.ourWork.title, subtitle: supportingPagesSEO.ourWork.description }),
    title: supportingPagesSEO.ourWork.title,
    description: supportingPagesSEO.ourWork.description,
    url: `https://oarcdigital.com${supportingPagesSEO.ourWork.path}`,
    type: supportingPagesSEO.ourWork.ogType ?? "website",
  },
  twitter: {
    images: [ogImageUrl({ title: supportingPagesSEO.ourWork.title, subtitle: supportingPagesSEO.ourWork.description })],
    card: "summary_large_image",
    title: supportingPagesSEO.ourWork.title,
    description: supportingPagesSEO.ourWork.description,
  },
};

export default function Page() {
  return (
    <>
      <SpeakableJsonLd path="/our-work" />
        <RouteSchema
          type="pillar"
          path="/our-work"
          title="Our Work — Case Studies & Campaigns | OARC Digital Malta"
          description="Selected OARC Digital projects: AI agents in production, brand systems, video, paid campaigns, and revenue automation builds across Malta and the EU."
          faqs={SUPPORTING_PAGE_SCHEMAS["/our-work"].faqs}
        />
      <PageContent />
    </>
  );
}
