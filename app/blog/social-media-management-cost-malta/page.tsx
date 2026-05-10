import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "How Much Does Social Media Management Cost in Malta? (2026 Guide)",
  description: "Real pricing for social media management in Malta. Freelancers vs agencies, what you actually get, and how to know if you're being overcharged. Updated 2026.",
  alternates: { canonical: "https://oarcdigital.com/blog/social-media-management-cost-malta" },
  openGraph: {
    images: ogImageEntry({ title: "How Much Does Social Media Management Cost in Malta? (2026 Guide)", subtitle: "Real pricing for social media management in Malta. Freelancers vs agencies, what you actually get, and how to know if you're being overcharged. Updated 2026." }),
    title: "How Much Does Social Media Management Cost in Malta? (2026 Guide)",
    description: "Real pricing for social media management in Malta. Freelancers vs agencies, what you actually get, and how to know if you're being overcharged. Updated 2026.",
    url: "https://oarcdigital.com/blog/social-media-management-cost-malta",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "How Much Does Social Media Management Cost in Malta? (2026 Guide)", subtitle: "Real pricing for social media management in Malta. Freelancers vs agencies, what you actually get, and how to know if you're being overcharged. Updated 2026." })],
    card: "summary_large_image",
    title: "How Much Does Social Media Management Cost in Malta? (2026 Guide)",
    description: "Real pricing for social media management in Malta. Freelancers vs agencies, what you actually get, and how to know if you're being overcharged. Updated 2026.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/social-media-management-cost-malta"
        title="How Much Does Social Media Management Cost in Malta? (2026 Guide)"
        description="Real pricing for social media management in Malta. Freelancers vs agencies, what you actually get, and how to know if you're being overcharged. Updated 2026."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
