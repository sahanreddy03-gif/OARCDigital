import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Video Production Malta | OARC Digital",
  description: "Professional video production for Malta businesses. Social media content, brand films, ads, and corporate video — strategy-led, not just camera-led.",
  alternates: { canonical: "https://oarcdigital.com/aeo/video-production-malta" },
  openGraph: {
    title: "Video Production Malta | OARC Digital",
    description: "Professional video production for Malta businesses. Social media content, brand films, ads, and corporate video — strategy-led, not just camera-led.",
    url: "https://oarcdigital.com/aeo/video-production-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Production Malta | OARC Digital",
    description: "Professional video production for Malta businesses. Social media content, brand films, ads, and corporate video — strategy-led, not just camera-led.",
  },
};

export default function Page() {
  return <PageContent />;
}
