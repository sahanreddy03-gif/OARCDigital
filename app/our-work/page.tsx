import type { Metadata } from "next";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SUPPORTING_PAGE_SCHEMAS } from "@/lib/seo/supportingPagesSchema";
import { supportingPagesSEO } from "@/data/seoMetadata";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  alternates: getHreflangAlternates("/our-work"),
  title: supportingPagesSEO.ourWork.title,
  description: supportingPagesSEO.ourWork.description,
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
        title={supportingPagesSEO.ourWork.title}
        description={supportingPagesSEO.ourWork.description}
        faqs={SUPPORTING_PAGE_SCHEMAS["/our-work"].faqs}
      />
      <PageContent />
    </>
  );
}
