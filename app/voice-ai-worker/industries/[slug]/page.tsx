import { redirect } from "next/navigation";

export default async function LegacyIndustryRoute({ params }: { params: Promise<{ slug: string }> }) {
  redirect(`/voice-ai-worker/${(await params).slug}`);
}