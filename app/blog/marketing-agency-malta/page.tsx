import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
import { FAQS } from "./showcase";

// "Why OARC Digital" showcase (Nov 2026). The title is about OARC, not the homepage's
// search words, so this page sends its strength to the homepage instead of competing.
const PATH = "/blog/marketing-agency-malta";
const TITLE = "Why OARC Digital | Malta's First Creative + AI Systems Agency";
const DESCRIPTION =
  "Creativity and software in one house. Real, named brands, proof in every department, and how to choose a marketing agency in Malta.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `https://oarcdigital.com${PATH}` },
  openGraph: {
    images: ogImageEntry({ title: "Why OARC Digital", subtitle: DESCRIPTION }),
    title: TITLE,
    description: DESCRIPTION,
    url: `https://oarcdigital.com${PATH}`,
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Why OARC Digital", subtitle: DESCRIPTION })],
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path={PATH}
        title={TITLE}
        description={DESCRIPTION}
        datePublished="2025-12-01"
        dateModified="2026-11-27"
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
      />
      <PageContent />
    </>
  );
}
