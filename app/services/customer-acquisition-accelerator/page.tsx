import { permanentRedirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Acquisition Accelerator | OARC Digital",
  description: "This page has moved. See our customer acquisition service.",
  alternates: { canonical: "https://oarcdigital.com/services/customer-acquisition" },
  robots: { index: false, follow: true },
};

export default function Page() {
  permanentRedirect("/services/customer-acquisition");
}
