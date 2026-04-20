import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Facebook and Google Ads in Malta: What Paid Advertising Actually Costs (2026)",
  description: "Malta has one of the most competitive paid advertising markets in Europe per capita. Here's how to not waste your budget on Facebook ads and Google ads in Malta.",
  alternates: { canonical: "https://oarcdigital.com/blog/paid-advertising-malta" },
  openGraph: {
    title: "Facebook and Google Ads in Malta: What Paid Advertising Actually Costs (2026)",
    description: "Malta has one of the most competitive paid advertising markets in Europe per capita. Here's how to not waste your budget on Facebook ads and Google ads in Malta.",
    url: "https://oarcdigital.com/blog/paid-advertising-malta",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook and Google Ads in Malta: What Paid Advertising Actually Costs (2026)",
    description: "Malta has one of the most competitive paid advertising markets in Europe per capita. Here's how to not waste your budget on Facebook ads and Google ads in Malta.",
  },
};

export default function Page() {
  return <PageContent />;
}
