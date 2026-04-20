import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "MVP Software Development Services | SaaS & Enterprise | OARC Digital Malta",
  description: "Build your software MVP in 8-12 weeks with Malta's leading development team. SaaS platforms, enterprise tools, API products. React, Node.js, AWS. Get a free consultation.",
  alternates: { canonical: "https://oarcdigital.com/services/mvp-development/for-software" },
  openGraph: {
    title: "MVP Software Development Services | SaaS & Enterprise | OARC Digital Malta",
    description: "Build your software MVP in 8-12 weeks with Malta's leading development team. SaaS platforms, enterprise tools, API products. React, Node.js, AWS. Get a free consultation.",
    url: "https://oarcdigital.com/services/mvp-development/for-software",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP Software Development Services | SaaS & Enterprise | OARC Digital Malta",
    description: "Build your software MVP in 8-12 weeks with Malta's leading development team. SaaS platforms, enterprise tools, API products. React, Node.js, AWS. Get a free consultation.",
  },
};

export default function Page() {
  return <PageContent />;
}
