import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "The Complete Guide to Digital Marketing in Malta 2025 | OARC Digital",
  description: "The ultimate guide to digital marketing in Malta for 2025. Discover what actually works for local businesses, from SEO and Social Media to AI-powered growth strategies.",
  alternates: { canonical: "https://oarcdigital.com/blog/digital-marketing-malta" },
  openGraph: {
    images: ogImageEntry({ title: "The Complete Guide to Digital Marketing in Malta 2025 | OARC Digital", subtitle: "The ultimate guide to digital marketing in Malta for 2025. Discover what actually works for local businesses, from SEO and Social Media to AI-powered growth strategies." }),
    title: "The Complete Guide to Digital Marketing in Malta 2025 | OARC Digital",
    description: "The ultimate guide to digital marketing in Malta for 2025. Discover what actually works for local businesses, from SEO and Social Media to AI-powered growth strategies.",
    url: "https://oarcdigital.com/blog/digital-marketing-malta",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "The Complete Guide to Digital Marketing in Malta 2025 | OARC Digital", subtitle: "The ultimate guide to digital marketing in Malta for 2025. Discover what actually works for local businesses, from SEO and Social Media to AI-powered growth strategies." })],
    card: "summary_large_image",
    title: "The Complete Guide to Digital Marketing in Malta 2025 | OARC Digital",
    description: "The ultimate guide to digital marketing in Malta for 2025. Discover what actually works for local businesses, from SEO and Social Media to AI-powered growth strategies.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/digital-marketing-malta"
        title="The Complete Guide to Digital Marketing in Malta 2025 | OARC Digital"
        description="The ultimate guide to digital marketing in Malta for 2025. Discover what actually works for local businesses, from SEO and Social Media to AI-powered growth strategies."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
