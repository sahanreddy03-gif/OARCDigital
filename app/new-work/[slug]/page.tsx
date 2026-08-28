/* OARC Design Reminder — New Work detail routes preserve the curated Premium Work record, source boundary, and evidence language. */
import type { Metadata } from "next";
import WorkCase from "@/components/premium-work/WorkCase";
import { CLIENT_CASE_STUDIES } from "@/lib/data/premium-work/clientCaseStudies";
import { getHreflangAlternates } from "@/lib/seo/discoveryTags";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

export function generateStaticParams() {
  return Object.keys(CLIENT_CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = CLIENT_CASE_STUDIES[slug];
  if (!story) return { title: "New Work record | OARC Digital" };
  const title = `${story.name} — New Work | OARC Digital`;
  const description = story.intro;
  return {
    title,
    description,
    alternates: getHreflangAlternates(`/new-work/${slug}`),
    openGraph: { title, description, url: `https://oarcdigital.com/new-work/${slug}`, type: "article", images: ogImageEntry({ title: story.name, subtitle: story.intro }) },
    twitter: { card: "summary_large_image", title, description, images: [ogImageUrl({ title: story.name, subtitle: story.intro })] },
  };
}

export default function NewWorkCasePage() {
  return <WorkCase />;
}
