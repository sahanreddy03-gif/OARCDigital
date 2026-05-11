import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Facebook and Google Ads in Malta: What Paid Advertising Actually Costs (2026)",
  description: "Malta has one of the most competitive paid advertising markets in Europe per capita. Here's how to not waste your budget on Facebook ads and Google ads in Malta.",
  alternates: { canonical: "https://oarcdigital.com/blog/paid-advertising-malta" },
  openGraph: {
    images: ogImageEntry({ title: "Facebook and Google Ads in Malta: What Paid Advertising Actually Costs (2026)", subtitle: "Malta has one of the most competitive paid advertising markets in Europe per capita. Here's how to not waste your budget on Facebook ads and Google ads in Malta." }),
    title: "Facebook and Google Ads in Malta: What Paid Advertising Actually Costs (2026)",
    description: "Malta has one of the most competitive paid advertising markets in Europe per capita. Here's how to not waste your budget on Facebook ads and Google ads in Malta.",
    url: "https://oarcdigital.com/blog/paid-advertising-malta",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Facebook and Google Ads in Malta: What Paid Advertising Actually Costs (2026)", subtitle: "Malta has one of the most competitive paid advertising markets in Europe per capita. Here's how to not waste your budget on Facebook ads and Google ads in Malta." })],
    card: "summary_large_image",
    title: "Facebook and Google Ads in Malta: What Paid Advertising Actually Costs (2026)",
    description: "Malta has one of the most competitive paid advertising markets in Europe per capita. Here's how to not waste your budget on Facebook ads and Google ads in Malta.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/paid-advertising-malta"
        title="Facebook and Google Ads in Malta: What Paid Advertising Actually Costs (2026)"
        description="Malta has one of the most competitive paid advertising markets in Europe per capita. Here's how to not waste your budget on Facebook ads and Google ads in Malta."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
