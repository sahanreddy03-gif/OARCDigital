import type { Metadata } from "next";
import ServiceIndustryClient, { serviceMap, industryMap } from "./ServiceIndustryClient";

export async function generateStaticParams() {
  const serviceSlugs = Object.keys(serviceMap);
  const industries = Object.keys(industryMap);
  return serviceSlugs.flatMap((serviceSlug) =>
    industries.map((industry) => ({ serviceSlug, industry }))
  );
}

export async function generateMetadata({ params }: { params: { serviceSlug: string; industry: string } }): Promise<Metadata> {
  const service = serviceMap[params.serviceSlug];
  const ind = industryMap[params.industry];
  if (!service || !ind) {
    return { title: "Page Not Found | OARC Digital" };
  }
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
