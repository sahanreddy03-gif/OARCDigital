import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
import { getHreflangAlternates } from "@/lib/seo/discoveryTags";
import { FAQS } from "./faqs";

const TITLE = "Best Marketing Agencies in Malta (2026): The Shortlist, the Method & the 9 Checks";
const DESCRIPTION =
  "A measured shortlist of marketing agencies in Malta: the published method, the seven queries we tested on 7 September 2026, 15 agencies described from their own sites, and nine checks that remove an agency before you call.";
const URL = "https://oarcdigital.com/insights/best-marketing-agencies-malta";

export const metadata: Metadata = {
  title: `${TITLE} | OARC Digital`,
  description: DESCRIPTION,
  alternates: getHreflangAlternates("/insights/best-marketing-agencies-malta", { canonical: URL }),
  openGraph: {
    images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "article",
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
      <RouteSchema
        type="article"
        path="/insights/best-marketing-agencies-malta"
        title={TITLE}
        description={DESCRIPTION}
        datePublished="2026-09-13"
        dateModified="2026-09-13"
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
      />
      <PageContent />
    </>
  );
}
