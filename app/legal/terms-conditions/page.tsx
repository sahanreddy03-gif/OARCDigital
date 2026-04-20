import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Terms & Conditions | OARC Digital - Service Agreement",
  description: "Read the Terms & Conditions governing the use of OARC Digital's website and services. Includes service scope, payments, intellectual property, and liability.",
  alternates: { canonical: "https://oarcdigital.com/terms-conditions" },
  openGraph: {
    title: "Terms & Conditions | OARC Digital - Service Agreement",
    description: "Read the Terms & Conditions governing the use of OARC Digital's website and services. Includes service scope, payments, intellectual property, and liability.",
    url: "https://oarcdigital.com/terms-conditions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | OARC Digital - Service Agreement",
    description: "Read the Terms & Conditions governing the use of OARC Digital's website and services. Includes service scope, payments, intellectual property, and liability.",
  },
};

export default function Page() {
  return <PageContent />;
}
