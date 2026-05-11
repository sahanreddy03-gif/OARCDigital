import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "FitnessPro Network Social Media Campaign | OARC Digital",
  description: "How OARC Digital created impactful social media campaigns for FitnessPro Network, driving engagement and membership growth.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/fitnesspro-network" },
  openGraph: {
    images: ogImageEntry({ title: "FitnessPro Network Social Media Campaign | OARC Digital", subtitle: "How OARC Digital created impactful social media campaigns for FitnessPro Network, driving engagement and membership growth." }),
    title: "FitnessPro Network Social Media Campaign | OARC Digital",
    description: "How OARC Digital created impactful social media campaigns for FitnessPro Network, driving engagement and membership growth.",
    url: "https://oarcdigital.com/case-studies/fitnesspro-network",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "FitnessPro Network Social Media Campaign | OARC Digital", subtitle: "How OARC Digital created impactful social media campaigns for FitnessPro Network, driving engagement and membership growth." })],
    card: "summary_large_image",
    title: "FitnessPro Network Social Media Campaign | OARC Digital",
    description: "How OARC Digital created impactful social media campaigns for FitnessPro Network, driving engagement and membership growth.",
  },
};

export default function Page() {
  return <PageContent />;
}
