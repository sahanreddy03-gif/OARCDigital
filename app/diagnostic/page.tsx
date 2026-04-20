import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Diagnostic Tool | OARC Digital",
  description: "Discover hidden revenue leaks and strategic opportunities with our AI-powered business diagnostic tool.",
  openGraph: {
    title: "Business Diagnostic Tool | OARC Digital",
    description: "Discover hidden revenue leaks and strategic opportunities with our AI-powered business diagnostic tool.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Diagnostic Tool | OARC Digital",
    description: "Discover hidden revenue leaks and strategic opportunities with our AI-powered business diagnostic tool.",
  },
};

import Layout from "@/components/layout/Layout";
import CortexContainer from "@/components/Cortex/CortexContainer";
export default function Page() {
  return (
    <Layout>
      
      <div className="pt-20">
        <CortexContainer />
      </div>
    </Layout>
  );
}
