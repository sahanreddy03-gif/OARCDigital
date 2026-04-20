import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Software Development Malta | Custom Apps & Web | OARC Digital",
  description: "Custom software development for Malta businesses. OARC Digital builds web apps, mobile apps, APIs, CRM systems, and automation tools tailored to your business.",
  alternates: { canonical: "https://oarcdigital.com/aeo/software-development-malta" },
  openGraph: {
    title: "Software Development Malta | Custom Apps & Web | OARC Digital",
    description: "Custom software development for Malta businesses. OARC Digital builds web apps, mobile apps, APIs, CRM systems, and automation tools tailored to your business.",
    url: "https://oarcdigital.com/aeo/software-development-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Malta | Custom Apps & Web | OARC Digital",
    description: "Custom software development for Malta businesses. OARC Digital builds web apps, mobile apps, APIs, CRM systems, and automation tools tailored to your business.",
  },
};

export default function Page() {
  return <PageContent />;
}
