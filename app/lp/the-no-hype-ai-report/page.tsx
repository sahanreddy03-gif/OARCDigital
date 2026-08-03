import { getGuideBySlug } from '@/lib/lp/guidesContent';
import GuideLandingPage, { guideMetadata } from '@/components/lp/GuideLandingPage';
import { notFound } from 'next/navigation';

const SLUG = 'the-no-hype-ai-report';

export function generateMetadata() {
  const guide = getGuideBySlug(SLUG);
  if (!guide) return {};
  return guideMetadata(guide);
}

export default function NoHypeAiReportPage() {
  const guide = getGuideBySlug(SLUG);
  if (!guide) notFound();
  return <GuideLandingPage guide={guide} />;
}
