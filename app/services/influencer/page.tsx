import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Influencer Partners | Creator Campaigns | OARC Digital",
  description: "Connect with vetted creators who align with your brand. We handle sourcing, outreach, contracts, and campaign management from start to finish.",
  alternates: { canonical: "https://oarcdigital.com/services/influencer-marketing" },
  openGraph: {
    title: "Influencer Partners | Creator Campaigns | OARC Digital",
    description: "Connect with vetted creators who align with your brand. We handle sourcing, outreach, contracts, and campaign management from start to finish.",
    url: "https://oarcdigital.com/services/influencer-marketing",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Partners | Creator Campaigns | OARC Digital",
    description: "Connect with vetted creators who align with your brand. We handle sourcing, outreach, contracts, and campaign management from start to finish.",
  },
};

export default function Page() {
  return <PageContent />;
}
