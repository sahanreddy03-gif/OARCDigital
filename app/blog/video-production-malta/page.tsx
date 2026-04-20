import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Video Production in Malta: Costs, Formats, and What Actually Converts",
  description: "Short-form, long-form, corporate, social — what video formats Malta businesses should be investing in, what they cost, and which ones actually bring in customers.",
  alternates: { canonical: "https://oarcdigital.com/blog/video-production-malta" },
  openGraph: {
    title: "Video Production in Malta: Costs, Formats, and What Actually Converts",
    description: "Short-form, long-form, corporate, social — what video formats Malta businesses should be investing in, what they cost, and which ones actually bring in customers.",
    url: "https://oarcdigital.com/blog/video-production-malta",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Production in Malta: Costs, Formats, and What Actually Converts",
    description: "Short-form, long-form, corporate, social — what video formats Malta businesses should be investing in, what they cost, and which ones actually bring in customers.",
  },
};

export default function Page() {
  return <PageContent />;
}
