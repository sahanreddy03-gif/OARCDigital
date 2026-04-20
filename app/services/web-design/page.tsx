import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Web Design | Conversion-Focused Sites | OARC Digital",
  description: "Websites engineered for conversion. Performance-optimized, mobile-first, A/B tested. See real metrics from sites we've built.",
  alternates: { canonical: "https://oarcdigital.com/services/web-design" },
  openGraph: {
    title: "Web Design | Conversion-Focused Sites | OARC Digital",
    description: "Websites engineered for conversion. Performance-optimized, mobile-first, A/B tested. See real metrics from sites we've built.",
    url: "https://oarcdigital.com/services/web-design",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design | Conversion-Focused Sites | OARC Digital",
    description: "Websites engineered for conversion. Performance-optimized, mobile-first, A/B tested. See real metrics from sites we've built.",
  },
};

export default function Page() {
  return <PageContent />;
}
