import type { Metadata } from "next";
import NewWorkIndex from "@/components/premium-work/NewWorkIndex";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SUPPORTING_PAGE_SCHEMAS } from "@/lib/seo/supportingPagesSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const title = "Our Work — OARC Digital Client Portfolio | Malta";
const description = "Explore OARC Digital client work across digital marketing, social media management, social video, TikTok campaigns, content production, websites, paid advertising, automation, AI chatbots, digital products, and launch campaigns.";

export const metadata: Metadata = {
  alternates: getHreflangAlternates("/our-work"),
  title,
  description,
  openGraph: {
    images: ogImageEntry({ title, subtitle: description }),
    title,
    description,
    url: "https://oarcdigital.com/our-work",
    type: "website",
  },
  twitter: {
    images: [ogImageUrl({ title, subtitle: description })],
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <>
      <SpeakableJsonLd path="/our-work" />
      <RouteSchema
        type="pillar"
        path="/our-work"
        title={title}
        description={description}
        faqs={SUPPORTING_PAGE_SCHEMAS["/our-work"].faqs}
        includeLocalBusiness={false}
      />
      <NewWorkIndex />
    </>
  );
}
