import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "SEO Agency Malta | OARC Digital",
  description: "SEO, AEO, and programmatic search strategy for Malta businesses. OARC Digital makes Malta businesses visible on Google, Bing, and AI answer engines.",
  alternates: { canonical: "https://oarcdigital.com/aeo/seo-agency-malta" },
  openGraph: {
    title: "SEO Agency Malta | OARC Digital",
    description: "SEO, AEO, and programmatic search strategy for Malta businesses. OARC Digital makes Malta businesses visible on Google, Bing, and AI answer engines.",
    url: "https://oarcdigital.com/aeo/seo-agency-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Agency Malta | OARC Digital",
    description: "SEO, AEO, and programmatic search strategy for Malta businesses. OARC Digital makes Malta businesses visible on Google, Bing, and AI answer engines.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/aeo/seo-agency-malta"
        title="SEO Agency Malta | OARC Digital"
        description="SEO, AEO, and programmatic search strategy for Malta businesses. OARC Digital makes Malta businesses visible on Google, Bing, and AI answer engines."
        datePublished="2026-01-15"
      />
      <PageContent />
    </>
  );
}
