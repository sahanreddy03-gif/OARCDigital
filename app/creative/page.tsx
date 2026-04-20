import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Creative & Brand Strategy — Malta's First | OARC Digital",
  description: "Malta's top creative agency for social media management, brand strategy, web design, video production & paid advertising. AI-enhanced creative that converts. Trusted by 500+ Malta businesses. From content calendars to full brand identity — we handle everything. Get your free creative audit today.",
  keywords: "creative agency Malta, social media agency Malta, branding agency Malta, web design Malta, video production Malta, marketing agency Malta, brand strategy Malta, social media management Malta, content creation Malta, graphic design Malta, paid advertising Malta, Google Ads Malta, Meta Ads Malta, Instagram marketing Malta, digital marketing Malta, social media Malta",
  alternates: { canonical: "https://oarcdigital.com/creative" },
  openGraph: {
    title: "Creative & Brand Strategy — Malta's First | OARC Digital",
    description: "Malta's top creative agency. Social media management, brand strategy, web design, video production & paid advertising — all enhanced with AI. Free creative audit available.",
    url: "https://oarcdigital.com/creative",
    type: "website",
    images: [{ url: "https://oarcdigital.com/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative & Brand Agency Malta | OARC Digital",
    description: "Malta's AI-powered creative agency. Social media, branding, web design, video & paid ads. Free creative audit.",
    images: ["https://oarcdigital.com/og-image.png"],
  },
};

export default function Page() {
  return <PageContent />;
}
