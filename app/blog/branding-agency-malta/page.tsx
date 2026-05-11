import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "What a Branding Agency in Malta Actually Does (And What to Expect)",
  description: "Logo vs brand. What Malta businesses get wrong about branding, what a branding agency actually delivers, what it costs, and how to know if you need one.",
  alternates: { canonical: "https://oarcdigital.com/blog/branding-agency-malta" },
  openGraph: {
    images: ogImageEntry({ title: "What a Branding Agency in Malta Actually Does (And What to Expect)", subtitle: "Logo vs brand. What Malta businesses get wrong about branding, what a branding agency actually delivers, what it costs, and how to know if you need one." }),
    title: "What a Branding Agency in Malta Actually Does (And What to Expect)",
    description: "Logo vs brand. What Malta businesses get wrong about branding, what a branding agency actually delivers, what it costs, and how to know if you need one.",
    url: "https://oarcdigital.com/blog/branding-agency-malta",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "What a Branding Agency in Malta Actually Does (And What to Expect)", subtitle: "Logo vs brand. What Malta businesses get wrong about branding, what a branding agency actually delivers, what it costs, and how to know if you need one." })],
    card: "summary_large_image",
    title: "What a Branding Agency in Malta Actually Does (And What to Expect)",
    description: "Logo vs brand. What Malta businesses get wrong about branding, what a branding agency actually delivers, what it costs, and how to know if you need one.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/branding-agency-malta"
        title="What a Branding Agency in Malta Actually Does (And What to Expect)"
        description="Logo vs brand. What Malta businesses get wrong about branding, what a branding agency actually delivers, what it costs, and how to know if you need one."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
