import { redirect } from "next/navigation";

export default async function LegacyIndustryRoute({ params }: { params: Promise<{ slug: string }> }) {
  redirect(`/tom/${(await params).slug}`);
}