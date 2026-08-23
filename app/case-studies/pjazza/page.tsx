import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
import { buildPjazzaCaseStudyGraph } from "@/lib/schema/workCaseStudy";

const TITLE = "PJAZZA — Malta's Live Shopping Marketplace | OARC Digital";
const DESCRIPTION =
  "PJAZZA is OARC Digital's own product: Malta's live shopping marketplace, with 24+ businesses, 12 sectors, and escrow protection.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://oarcdigital.com/case-studies/pjazza" },
  openGraph: {
    images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
    title: TITLE,
    description: DESCRIPTION,
    url: "https://oarcdigital.com/case-studies/pjazza",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildPjazzaCaseStudyGraph()) }}
      />
      <PageContent />
    </>
  );
}
