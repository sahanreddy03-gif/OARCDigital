import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import RouteSchema from '@/components/RouteSchema';
import { SpeakableJsonLd } from '@/lib/seo/discoveryTags';
import { getHreflangAlternates } from '@/lib/seo/discoveryTags';
import { ogImageEntry, ogImageUrl } from '@/lib/seo/ogImageUrl';
import { SERVICE_SCHEMA_EXTRAS } from '@/lib/seo/serviceSchemaExtras';
import VoiceCompanyPage from '@/components/voice-products/VoiceCompanyPage';
import { getVoiceBrand } from '@/lib/voice-products/voiceProductBrands';

export function buildVoiceServiceMetadata(slug: string): Metadata {
  const brand = getVoiceBrand(slug);
  if (!brand) return { title: 'Voice AI | OARC Digital' };
  const title = `${brand.companyName} — ${brand.companyTag} | OARC Digital`;
  const description = brand.h1;
  const url = `https://oarcdigital.com${brand.path}`;
  return {
    title,
    description,
    keywords: [brand.companyName, 'voice ai malta', 'ai phone answering', 'oarcdigital', slug],
    alternates: getHreflangAlternates(brand.path),
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      images: ogImageEntry({ title: brand.companyName, subtitle: brand.hook, eyebrow: brand.eyebrow }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl({ title: brand.companyName, subtitle: brand.hook })],
    },
  };
}

export function VoiceServicePage({ slug }: { slug: string }) {
  const brand = getVoiceBrand(slug);
  if (!brand) notFound();
  const schema = SERVICE_SCHEMA_EXTRAS[slug];
  return (
    <>
      {schema && (
        <RouteSchema
          type="service"
          path={brand.path}
          title={schema.title}
          description={schema.description}
          features={schema.features}
          offers={schema.offers}
          faqs={schema.faqs}
        />
      )}
      <SpeakableJsonLd path={brand.path} />
      <VoiceCompanyPage brand={brand} />
    </>
  );
}
