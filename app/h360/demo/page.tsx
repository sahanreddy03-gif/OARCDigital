import type { Metadata } from 'next';
import DemoContent from './DemoContent';
import { ogImageEntry, ogImageUrl } from '@/lib/seo/ogImageUrl';

const TITLE = 'Free Restaurant Diagnosis | ARC AI Audit — H360 Malta';
const DESCRIPTION =
  'Get a free ARC AI restaurant audit for your Malta venue — Google Maps gaps, review velocity, and delivery-app margin leaks. H360.';
const URL = 'https://oarcdigital.com/h360/demo';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'H360',
    images: ogImageEntry({
      title: TITLE,
      subtitle: DESCRIPTION,
    }),
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
  },
};

export default function H360DemoPage() {
  return <DemoContent />;
}
