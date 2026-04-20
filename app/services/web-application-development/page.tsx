import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Web Application Development | React, Next.js, Vue | OARC Digital",
  description: "Build high-performance web applications that convert. Custom SaaS platforms, e-commerce sites, and enterprise portals built with React, Next.js, and modern tech.",
  alternates: { canonical: "https://oarcdigital.com/services/web-application-development" },
  openGraph: {
    title: "Web Application Development | React, Next.js, Vue | OARC Digital",
    description: "Build high-performance web applications that convert. Custom SaaS platforms, e-commerce sites, and enterprise portals built with React, Next.js, and modern tech.",
    url: "https://oarcdigital.com/services/web-application-development",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Application Development | React, Next.js, Vue | OARC Digital",
    description: "Build high-performance web applications that convert. Custom SaaS platforms, e-commerce sites, and enterprise portals built with React, Next.js, and modern tech.",
  },
};

export default function Page() {
  return <PageContent />;
}
