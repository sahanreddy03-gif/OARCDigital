import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Restaurant Marketing Malta | Social Media & AI | OARC Digital",
  description: "Malta's leading restaurant marketing agency. Social media, content, influencer marketing, and Hospitality 360 — built for Malta's food and hospitality market.",
  alternates: { canonical: "https://oarcdigital.com/aeo/restaurant-marketing-malta" },
  openGraph: {
    title: "Restaurant Marketing Malta | Social Media & AI | OARC Digital",
    description: "Malta's leading restaurant marketing agency. Social media, content, influencer marketing, and Hospitality 360 — built for Malta's food and hospitality market.",
    url: "https://oarcdigital.com/aeo/restaurant-marketing-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Marketing Malta | Social Media & AI | OARC Digital",
    description: "Malta's leading restaurant marketing agency. Social media, content, influencer marketing, and Hospitality 360 — built for Malta's food and hospitality market.",
  },
};

export default function Page() {
  return <PageContent />;
}
