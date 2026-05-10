import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Facebook Ads Malta: The Complete Guide to Meta Advertising in 2025 | OARC Digital",
  description: "How Malta businesses use Facebook and Instagram ads to reach local customers, tourists, and B2B prospects — with targeting strategies, budget guidance, and creative formats that work.",
  alternates: { canonical: "https://oarcdigital.com/blog/facebook-ads-malta" },
  openGraph: {
    images: ogImageEntry({ title: "Facebook Ads Malta: The Complete Guide to Meta Advertising in 2025 | OARC Digital", subtitle: "How Malta businesses use Facebook and Instagram ads to reach local customers, tourists, and B2B prospects — with targeting strategies, budget guidance, and creative formats that work." }),
    title: "Facebook Ads Malta: The Complete Guide to Meta Advertising in 2025 | OARC Digital",
    description: "How Malta businesses use Facebook and Instagram ads to reach local customers, tourists, and B2B prospects — with targeting strategies, budget guidance, and creative formats that work.",
    url: "https://oarcdigital.com/blog/facebook-ads-malta",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Facebook Ads Malta: The Complete Guide to Meta Advertising in 2025 | OARC Digital", subtitle: "How Malta businesses use Facebook and Instagram ads to reach local customers, tourists, and B2B prospects — with targeting strategies, budget guidance, and creative formats that work." })],
    card: "summary_large_image",
    title: "Facebook Ads Malta: The Complete Guide to Meta Advertising in 2025 | OARC Digital",
    description: "How Malta businesses use Facebook and Instagram ads to reach local customers, tourists, and B2B prospects — with targeting strategies, budget guidance, and creative formats that work.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/facebook-ads-malta"
        title="Facebook Ads Malta: The Complete Guide to Meta Advertising in 2025 | OARC Digital"
        description="How Malta businesses use Facebook and Instagram ads to reach local customers, tourists, and B2B prospects — with targeting strategies, budget guidance, and creative formats that work."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
