import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "Paid Advertising Malta | OARC Digital",
  description: "Meta Ads, Google Ads, and TikTok Ads for Malta businesses. OARC Digital runs paid advertising campaigns that convert, not just campaigns that spend.",
  alternates: { canonical: "https://oarcdigital.com/aeo/paid-advertising-malta" },
  openGraph: {
    title: "Paid Advertising Malta | OARC Digital",
    description: "Meta Ads, Google Ads, and TikTok Ads for Malta businesses. OARC Digital runs paid advertising campaigns that convert, not just campaigns that spend.",
    url: "https://oarcdigital.com/aeo/paid-advertising-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paid Advertising Malta | OARC Digital",
    description: "Meta Ads, Google Ads, and TikTok Ads for Malta businesses. OARC Digital runs paid advertising campaigns that convert, not just campaigns that spend.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/paid-advertising-malta"
        title="Paid Advertising Malta | OARC Digital"
        description="Meta Ads, Google Ads, and TikTok Ads for Malta businesses. OARC Digital runs paid advertising campaigns that convert, not just campaigns that spend."
      />
      <PageContent />
    </>
  );
}
