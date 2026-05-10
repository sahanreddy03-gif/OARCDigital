import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "PJAZZA — Malta's Live Shopping Marketplace | OARC Digital",
  description: "OARC Digital's own product: PJAZZA, Malta's first live commerce marketplace. Watch it live, buy it now. 12 sectors, 24+ founding businesses at maltaverse.live/pjazza.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/pjazza" },
  openGraph: {
    images: ogImageEntry({ title: "PJAZZA — Malta's Live Shopping Marketplace | OARC Digital", subtitle: "OARC Digital's own product: PJAZZA, Malta's first live commerce marketplace. Watch it live, buy it now. 12 sectors, 24+ founding businesses at maltaverse.live/pjazza." }),
    title: "PJAZZA — Malta's Live Shopping Marketplace | OARC Digital",
    description: "OARC Digital's own product: PJAZZA, Malta's first live commerce marketplace. Watch it live, buy it now. 12 sectors, 24+ founding businesses at maltaverse.live/pjazza.",
    url: "https://oarcdigital.com/case-studies/pjazza",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "PJAZZA — Malta's Live Shopping Marketplace | OARC Digital", subtitle: "OARC Digital's own product: PJAZZA, Malta's first live commerce marketplace. Watch it live, buy it now. 12 sectors, 24+ founding businesses at maltaverse.live/pjazza." })],
    card: "summary_large_image",
    title: "PJAZZA — Malta's Live Shopping Marketplace | OARC Digital",
    description: "OARC Digital's own product: PJAZZA, Malta's first live commerce marketplace. Watch it live, buy it now. 12 sectors, 24+ founding businesses at maltaverse.live/pjazza.",
  },
};

export default function Page() {
  return <PageContent />;
}
