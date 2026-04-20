import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "The Complete Guide to Digital Marketing in Malta 2025 | OARC Digital",
  description: "The ultimate guide to digital marketing in Malta for 2025. Discover what actually works for local businesses, from SEO and Social Media to AI-powered growth strategies.",
  alternates: { canonical: "https://oarcdigital.com/blog/digital-marketing-malta" },
  openGraph: {
    title: "The Complete Guide to Digital Marketing in Malta 2025 | OARC Digital",
    description: "The ultimate guide to digital marketing in Malta for 2025. Discover what actually works for local businesses, from SEO and Social Media to AI-powered growth strategies.",
    url: "https://oarcdigital.com/blog/digital-marketing-malta",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Complete Guide to Digital Marketing in Malta 2025 | OARC Digital",
    description: "The ultimate guide to digital marketing in Malta for 2025. Discover what actually works for local businesses, from SEO and Social Media to AI-powered growth strategies.",
  },
};

export default function Page() {
  return <PageContent />;
}
