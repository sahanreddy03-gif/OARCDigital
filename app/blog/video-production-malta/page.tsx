import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Video Production in Malta: Costs, Formats, and What Actually Converts",
  description: "Short-form, long-form, corporate, social — what video formats Malta businesses should be investing in, what they cost, and which ones actually bring in customers.",
  alternates: { canonical: "https://oarcdigital.com/blog/video-production-malta" },
  openGraph: {
    images: ogImageEntry({ title: "Video Production in Malta: Costs, Formats, and What Actually Converts", subtitle: "Short-form, long-form, corporate, social — what video formats Malta businesses should be investing in, what they cost, and which ones actually bring in customers." }),
    title: "Video Production in Malta: Costs, Formats, and What Actually Converts",
    description: "Short-form, long-form, corporate, social — what video formats Malta businesses should be investing in, what they cost, and which ones actually bring in customers.",
    url: "https://oarcdigital.com/blog/video-production-malta",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Video Production in Malta: Costs, Formats, and What Actually Converts", subtitle: "Short-form, long-form, corporate, social — what video formats Malta businesses should be investing in, what they cost, and which ones actually bring in customers." })],
    card: "summary_large_image",
    title: "Video Production in Malta: Costs, Formats, and What Actually Converts",
    description: "Short-form, long-form, corporate, social — what video formats Malta businesses should be investing in, what they cost, and which ones actually bring in customers.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/video-production-malta"
        title="Video Production in Malta: Costs, Formats, and What Actually Converts"
        description="Short-form, long-form, corporate, social — what video formats Malta businesses should be investing in, what they cost, and which ones actually bring in customers."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
