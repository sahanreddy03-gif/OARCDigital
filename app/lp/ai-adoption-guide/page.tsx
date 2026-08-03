import { getGuideBySlug } from '@/lib/lp/guidesContent';
import GuideLandingPage, { guideMetadata } from '@/components/lp/GuideLandingPage';
import { notFound } from 'next/navigation';

const SLUG = 'ai-adoption-guide';

export function generateMetadata() {
  const guide = getGuideBySlug(SLUG);
  if (!guide) return {};
  return guideMetadata(guide);
}

export default function AiAdoptionGuidePage() {
  const guide = getGuideBySlug(SLUG);
  if (!guide) notFound();
  return <GuideLandingPage guide={guide} />;
}
