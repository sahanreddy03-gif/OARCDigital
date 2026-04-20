import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Facebook Ads Malta: The Complete Guide to Meta Advertising in 2025 | OARC Digital",
  description: "How Malta businesses use Facebook and Instagram ads to reach local customers, tourists, and B2B prospects — with targeting strategies, budget guidance, and creative formats that work.",
  alternates: { canonical: "https://oarcdigital.com/blog/facebook-ads-malta" },
  openGraph: {
    title: "Facebook Ads Malta: The Complete Guide to Meta Advertising in 2025 | OARC Digital",
    description: "How Malta businesses use Facebook and Instagram ads to reach local customers, tourists, and B2B prospects — with targeting strategies, budget guidance, and creative formats that work.",
    url: "https://oarcdigital.com/blog/facebook-ads-malta",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook Ads Malta: The Complete Guide to Meta Advertising in 2025 | OARC Digital",
    description: "How Malta businesses use Facebook and Instagram ads to reach local customers, tourists, and B2B prospects — with targeting strategies, budget guidance, and creative formats that work.",
  },
};

export default function Page() {
  return <PageContent />;
}
