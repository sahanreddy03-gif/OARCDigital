import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "LinkedIn Marketing Malta: B2B Lead Generation for Maltese Companies | OARC Digital",
  description: "How Malta B2B companies use LinkedIn to generate high-quality leads, build authority, and close bigger deals — without paid advertising.",
  alternates: { canonical: "https://oarcdigital.com/blog/linkedin-marketing-malta" },
  openGraph: {
    images: ogImageEntry({ title: "LinkedIn Marketing Malta: B2B Lead Generation for Maltese Companies | OARC Digital", subtitle: "How Malta B2B companies use LinkedIn to generate high-quality leads, build authority, and close bigger deals — without paid advertising." }),
    title: "LinkedIn Marketing Malta: B2B Lead Generation for Maltese Companies | OARC Digital",
    description: "How Malta B2B companies use LinkedIn to generate high-quality leads, build authority, and close bigger deals — without paid advertising.",
    url: "https://oarcdigital.com/blog/linkedin-marketing-malta",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "LinkedIn Marketing Malta: B2B Lead Generation for Maltese Companies | OARC Digital", subtitle: "How Malta B2B companies use LinkedIn to generate high-quality leads, build authority, and close bigger deals — without paid advertising." })],
    card: "summary_large_image",
    title: "LinkedIn Marketing Malta: B2B Lead Generation for Maltese Companies | OARC Digital",
    description: "How Malta B2B companies use LinkedIn to generate high-quality leads, build authority, and close bigger deals — without paid advertising.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/linkedin-marketing-malta"
        title="LinkedIn Marketing Malta: B2B Lead Generation for Maltese Companies | OARC Digital"
        description="How Malta B2B companies use LinkedIn to generate high-quality leads, build authority, and close bigger deals — without paid advertising."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
