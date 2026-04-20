import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "OARC Digital",
  description: "",
  alternates: { canonical: "https://oarcdigital.com/services/immersive-3d-ar" },
  openGraph: {
    title: "OARC Digital",
    description: "",
    url: "https://oarcdigital.com/services/immersive-3d-ar",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "OARC Digital",
    description: "",
  },
};

export default function Page() {
  return <PageContent />;
}
