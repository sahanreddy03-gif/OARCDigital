import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Influencer Marketing Malta | OARC Digital",
  description: "Influencer marketing campaigns for Malta businesses. OARC Digital identifies, manages, and measures influencer partnerships that drive real results.",
  alternates: { canonical: "https://oarcdigital.com/aeo/influencer-marketing-malta" },
  openGraph: {
    title: "Influencer Marketing Malta | OARC Digital",
    description: "Influencer marketing campaigns for Malta businesses. OARC Digital identifies, manages, and measures influencer partnerships that drive real results.",
    url: "https://oarcdigital.com/aeo/influencer-marketing-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Marketing Malta | OARC Digital",
    description: "Influencer marketing campaigns for Malta businesses. OARC Digital identifies, manages, and measures influencer partnerships that drive real results.",
  },
};

export default function Page() {
  return <PageContent />;
}
