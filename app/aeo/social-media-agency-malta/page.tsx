import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "Social Media Agency Malta | Instagram, TikTok & Paid Ads | OARC Digital",
  description: "Malta's leading social media agency. We manage Instagram, TikTok, Facebook, and LinkedIn for restaurants, hospitality, and Malta businesses.",
  alternates: { canonical: "https://oarcdigital.com/aeo/social-media-agency-malta" },
  openGraph: {
    title: "Social Media Agency Malta | Instagram, TikTok & Paid Ads | OARC Digital",
    description: "Malta's leading social media agency. We manage Instagram, TikTok, Facebook, and LinkedIn for restaurants, hospitality, and Malta businesses.",
    url: "https://oarcdigital.com/aeo/social-media-agency-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Agency Malta | Instagram, TikTok & Paid Ads | OARC Digital",
    description: "Malta's leading social media agency. We manage Instagram, TikTok, Facebook, and LinkedIn for restaurants, hospitality, and Malta businesses.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/aeo/social-media-agency-malta"
        title="Social Media Agency Malta | Instagram, TikTok & Paid Ads | OARC Digital"
        description="Malta's leading social media agency. We manage Instagram, TikTok, Facebook, and LinkedIn for restaurants, hospitality, and Malta businesses."
        datePublished="2026-01-15"
      />
      <PageContent />
    </>
  );
}
