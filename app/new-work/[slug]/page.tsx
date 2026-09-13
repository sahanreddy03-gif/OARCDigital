import { permanentRedirect } from "next/navigation";

export default async function LegacyNewWorkCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  permanentRedirect(`/our-work/${slug}`);
}
