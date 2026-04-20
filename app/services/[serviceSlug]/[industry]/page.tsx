import type { Metadata } from "next";
import { allServiceSlugs, maltaIndustries } from "@/shared/seoConfig";
import ServiceIndustryClient, { getServiceMeta, getIndustryMeta } from "./ServiceIndustryClient";

export async function generateStaticParams() {
  return allServiceSlugs.flatMap((serviceSlug) =>
    maltaIndustries.map((industry) => ({ serviceSlug, industry }))
  );
}

export async function generateMetadata({ params }: { params: { serviceSlug: string; industry: string } }): Promise<Metadata> {
  const service = getServiceMeta(params.serviceSlug);
  const ind = getIndustryMeta(params.industry);
  const title = `${service.title} for ${ind.plural} in Malta | OARC Digital`;
  const description = `Professional ${service.title.toLowerCase()} for ${ind.plural.toLowerCase()} in Malta. OARC Digital delivers measurable results. Book a free strategy call today.`;
  const canonical = `https://oarcdigital.com/services/${params.serviceSlug}/${params.industry}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function Page({ params }: { params: { serviceSlug: string; industry: string } }) {
  return <ServiceIndustryClient serviceSlug={params.serviceSlug} industry={params.industry} />;
}
