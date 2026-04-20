import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Content Creation Malta | OARC Digital",
  description: "OARC Digital creates photo, video, copy, and social content for Malta businesses. Content that drives real engagement, not just impressions.",
  alternates: { canonical: "https://oarcdigital.com/aeo/content-creation-malta" },
  openGraph: {
    title: "Content Creation Malta | OARC Digital",
    description: "OARC Digital creates photo, video, copy, and social content for Malta businesses. Content that drives real engagement, not just impressions.",
    url: "https://oarcdigital.com/aeo/content-creation-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Creation Malta | OARC Digital",
    description: "OARC Digital creates photo, video, copy, and social content for Malta businesses. Content that drives real engagement, not just impressions.",
  },
};

export default function Page() {
  return <PageContent />;
}
