import { permanentRedirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Acquisition Malta | Predictable Growth | OARC",
  description: "Customer acquisition systems for Malta businesses—tight offers, channels, and conversion paths aimed at steadier CPA discipline (no fake CPA promises).",
  alternates: { canonical: "https://oarcdigital.com/services/customer-acquisition" },
  robots: { index: false, follow: true },
};

export default function Page() {
  permanentRedirect("/services/customer-acquisition");
}
