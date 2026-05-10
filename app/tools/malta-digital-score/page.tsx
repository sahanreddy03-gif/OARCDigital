import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Malta Digital Score | Free Business Digital Audit | OARC Digital",
  description: "Find out how your Malta business scores on social media, SEO, reviews, AI readiness, and content quality. Free instant score. No email required.",
  alternates: { canonical: "https://oarcdigital.com/tools/malta-digital-score" },
  openGraph: {
    images: ogImageEntry({ title: "Malta Digital Score | Free Business Digital Audit | OARC Digital", subtitle: "Find out how your Malta business scores on social media, SEO, reviews, AI readiness, and content quality. Free instant score. No email required." }),
    title: "Malta Digital Score | Free Business Digital Audit | OARC Digital",
    description: "Find out how your Malta business scores on social media, SEO, reviews, AI readiness, and content quality. Free instant score. No email required.",
    url: "https://oarcdigital.com/tools/malta-digital-score",
  },
  twitter: {
    images: [ogImageUrl({ title: "Malta Digital Score | Free Business Digital Audit | OARC Digital", subtitle: "Find out how your Malta business scores on social media, SEO, reviews, AI readiness, and content quality. Free instant score. No email required." })],
    card: "summary_large_image",
    title: "Malta Digital Score | Free Business Digital Audit | OARC Digital",
    description: "Find out how your Malta business scores on social media, SEO, reviews, AI readiness, and content quality. Free instant score. No email required.",
  },
};

export default function Page() {
  return <PageContent />;
}
