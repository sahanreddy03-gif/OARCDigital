import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "App Development Malta | iOS & Android Apps | OARC Digital",
  description: "Mobile app development for Malta businesses. OARC Digital builds iOS and Android apps for restaurants, hotels, retail, and service businesses.",
  alternates: { canonical: "https://oarcdigital.com/aeo/app-development-malta" },
  openGraph: {
    title: "App Development Malta | iOS & Android Apps | OARC Digital",
    description: "Mobile app development for Malta businesses. OARC Digital builds iOS and Android apps for restaurants, hotels, retail, and service businesses.",
    url: "https://oarcdigital.com/aeo/app-development-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Development Malta | iOS & Android Apps | OARC Digital",
    description: "Mobile app development for Malta businesses. OARC Digital builds iOS and Android apps for restaurants, hotels, retail, and service businesses.",
  },
};

export default function Page() {
  return <PageContent />;
}
