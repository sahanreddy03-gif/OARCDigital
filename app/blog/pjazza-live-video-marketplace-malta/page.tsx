import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "PJAZZA — Malta's First Live Video Marketplace | OARC Digital",
  description: "PJAZZA is Malta's first live video marketplace. Businesses go live, customers discover and buy in real time. Launching May 2026. Powered by OARC Digital and Maltaverse.",
  alternates: { canonical: "https://oarcdigital.com/blog/pjazza-live-video-marketplace-malta" },
  openGraph: {
    images: ogImageEntry({ title: "PJAZZA — Malta's First Live Video Marketplace | OARC Digital", subtitle: "PJAZZA is Malta's first live video marketplace. Businesses go live, customers discover and buy in real time. Launching May 2026. Powered by OARC Digital and Maltaverse." }),
    title: "PJAZZA — Malta's First Live Video Marketplace | OARC Digital",
    description: "PJAZZA is Malta's first live video marketplace. Businesses go live, customers discover and buy in real time. Launching May 2026. Powered by OARC Digital and Maltaverse.",
    url: "https://oarcdigital.com/blog/pjazza-live-video-marketplace-malta",
    type: "website",
  },
  twitter: {
    images: [ogImageUrl({ title: "PJAZZA — Malta's First Live Video Marketplace | OARC Digital", subtitle: "PJAZZA is Malta's first live video marketplace. Businesses go live, customers discover and buy in real time. Launching May 2026. Powered by OARC Digital and Maltaverse." })],
    card: "summary_large_image",
    title: "PJAZZA — Malta's First Live Video Marketplace | OARC Digital",
    description: "PJAZZA is Malta's first live video marketplace. Businesses go live, customers discover and buy in real time. Launching May 2026. Powered by OARC Digital and Maltaverse.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/pjazza-live-video-marketplace-malta"
        title="PJAZZA — Malta's First Live Video Marketplace | OARC Digital"
        description="PJAZZA is Malta's first live video marketplace. Businesses go live, customers discover and buy in real time. Launching May 2026. Powered by OARC Digital and Maltaverse."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
