import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";

function readServiceContent(service: string): any | null {
  try {
    const p = path.join(process.cwd(), "client", "public", "content", "services", `${service}.json`);
    const raw = fs.readFileSync(p, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: { serviceSlug: string } }): Promise<Metadata> {
  const content = readServiceContent(params.serviceSlug);
  const title = content?.meta?.title || "Service | OARC Digital";
  const description = content?.meta?.description || "";
  const canonical = `https://oarcdigital.com/services/${params.serviceSlug}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function Page({ params }: { params: { serviceSlug: string } }) {
  const content = readServiceContent(params.serviceSlug);
  if (!content) notFound();
  return <ServiceDetailClient service={params.serviceSlug} content={content} />;
}
