import type { Metadata } from "next";
import PageContent from "./PageContent";

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
  return <PageContent />;
}
