import { getGuideBySlug } from '@/lib/lp/guidesContent';
import GuideLandingPage, { guideMetadata } from '@/components/lp/GuideLandingPage';
import { notFound } from 'next/navigation';

const SLUG = 'ai-tips-marketers-guide';

export function generateMetadata() {
  const guide = getGuideBySlug(SLUG);
  if (!guide) return {};
  return guideMetadata(guide);
}

export default function AiTipsMarketersGuidePage() {
  const guide = getGuideBySlug(SLUG);
  if (!guide) notFound();
  return <GuideLandingPage guide={guide} />;
}
