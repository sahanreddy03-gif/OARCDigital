import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "How to Get Your Malta Business on Page 1 of Google | Local SEO Guide 2025",
  description: "The complete guide to ranking #1 on Google in Malta. Learn Local SEO strategies, Google Business Profile optimization, and how to beat competitors in Paceville, Sliema, and Valletta.",
  alternates: { canonical: "https://oarcdigital.com/blog/seo-malta-complete-guide" },
  openGraph: {
    images: ogImageEntry({ title: "How to Get Your Malta Business on Page 1 of Google | Local SEO Guide 2025", subtitle: "The complete guide to ranking #1 on Google in Malta. Learn Local SEO strategies, Google Business Profile optimization, and how to beat competitors in Paceville, Sliema, and Valletta." }),
    title: "How to Get Your Malta Business on Page 1 of Google | Local SEO Guide 2025",
    description: "The complete guide to ranking #1 on Google in Malta. Learn Local SEO strategies, Google Business Profile optimization, and how to beat competitors in Paceville, Sliema, and Valletta.",
    url: "https://oarcdigital.com/blog/seo-malta-complete-guide",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "How to Get Your Malta Business on Page 1 of Google | Local SEO Guide 2025", subtitle: "The complete guide to ranking #1 on Google in Malta. Learn Local SEO strategies, Google Business Profile optimization, and how to beat competitors in Paceville, Sliema, and Valletta." })],
    card: "summary_large_image",
    title: "How to Get Your Malta Business on Page 1 of Google | Local SEO Guide 2025",
    description: "The complete guide to ranking #1 on Google in Malta. Learn Local SEO strategies, Google Business Profile optimization, and how to beat competitors in Paceville, Sliema, and Valletta.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/seo-malta-complete-guide"
        title="How to Get Your Malta Business on Page 1 of Google | Local SEO Guide 2025"
        description="The complete guide to ranking #1 on Google in Malta. Learn Local SEO strategies, Google Business Profile optimization, and how to beat competitors in Paceville, Sliema, and Valletta."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
