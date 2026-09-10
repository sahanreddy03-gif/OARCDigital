import { redirect } from "next/navigation";
export default async function LegacyNestedIndustryRoute({ params }: { params: Promise<{ slug: string }> }) { redirect(`/voice-ai-worker/${(await params).slug}`); }
