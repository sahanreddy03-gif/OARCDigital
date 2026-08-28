/* OARC Design Reminder — Evidence in Motion: New Work is the single combined index; it must preserve the distinction between original OARC records and curated client records. */
import type { Metadata } from "next";
import NewWorkIndex from "@/components/premium-work/NewWorkIndex";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
import { SUPPORTING_PAGE_SCHEMAS } from "@/lib/seo/supportingPagesSchema";

const title = "New Work — 32 OARC Digital Records | OARC Digital Malta";
const description = "A complete OARC Digital Work index bringing together 21 original OARC records and 11 newly curated client and event records with clear source and evidence boundaries.";

export const metadata: Metadata = {
  title,
  description,
  alternates: getHreflangAlternates("/new-work"),
  openGraph: {
    title,
    description,
    url: "https://oarcdigital.com/new-work",
    type: "website",
    images: ogImageEntry({ title: "New Work — 32 OARC Digital Records", subtitle: "Original OARC work and curated client records on one inspectable surface." }),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImageUrl({ title: "New Work — 32 OARC Digital Records", subtitle: "Original OARC work and curated client records on one inspectable surface." })],
  },
  robots: { index: true, follow: true },
};

export default function NewWorkPage() {
  return <>
    <SpeakableJsonLd path="/new-work" />
    <RouteSchema type="pillar" path="/new-work" title={title} description={description} faqs={SUPPORTING_PAGE_SCHEMAS["/new-work"].faqs} includeLocalBusiness={false} />
    <NewWorkIndex />
  </>;
}
