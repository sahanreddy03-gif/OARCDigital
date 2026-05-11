// /about — single page where the founder is publicly named (kept small,
// footer-style, per Mr Reddy's stated low-visibility preference). This page
// exists primarily as the Person schema entity anchor (E-E-A-T signal for
// Google + AI answer engines). Visible prose uses "Reddy" / "Mr Reddy".
// Schema entity name is the full "Sahan Reddy" form so it resolves
// cleanly against the LinkedIn vanity URL `/in/sahanoarcdigital`.

import type { Metadata } from "next";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SUPPORTING_PAGE_SCHEMAS } from "@/lib/seo/supportingPagesSchema";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


const TITLE = "About OARC Digital | Malta's AI-Native Creative & Automation Agency";
const DESCRIPTION =
  "Founded in Birkirkara to bring AI, creative, and automation under one roof for Maltese businesses. Meet the team and the operating principles behind OARC Digital.";
const URL = "https://oarcdigital.com/about";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: getHreflangAlternates("/about"),
  openGraph: {
    images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
    type: "website",
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "OARC Digital",
  },
  twitter: {
    images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return (
    <>
      <SpeakableJsonLd path="/about" />
        <RouteSchema
          type="pillar"
          path="/about"
          title="About OARC Digital — Malta's AI-Native Creative & Automation Agency"
          description="Founded in Birkirkara to bring creative, AI engineering, and revenue automation under one roof for Maltese businesses. Our team, story, and operating principles."
          faqs={SUPPORTING_PAGE_SCHEMAS["/about"].faqs}
        />
      <PageContent />
    </>
  );
}
