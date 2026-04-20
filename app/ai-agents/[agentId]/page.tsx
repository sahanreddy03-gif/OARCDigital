import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import { aiTeamMembers, agentRatings } from '@/components/ai/aiAgentsData';
import { createServiceSchema } from '@/utils/structuredData';
import { createBreadcrumbSchema, createAggregateRatingSchema } from '@/utils/advancedSchema';
import AIAgentDetailClient from './AIAgentDetailClient';

const agentOgImageUrl = (agentId: string) => `https://oarcdigital.com/agents/${agentId}.webp`;

export async function generateStaticParams() {
  return aiTeamMembers.map((agent) => ({ agentId: agent.id }));
}

export async function generateMetadata({ params }: { params: { agentId: string } }): Promise<Metadata> {
  const agent = aiTeamMembers.find((a) => a.id === params.agentId);
  if (!agent) return { title: 'Agent Not Found | OARC Digital' };

  const rating = agentRatings[agent.id];
  const titlePrefix = rating ? `${rating.ratingValue}\u2605 (${rating.reviewCount} reviews) \u2014 ` : '';
  const title = `${titlePrefix}${agent.name} AI ${agent.role} | OARC Digital Malta`;
  const description = `Deploy ${agent.name}, OARC Digital's AI ${agent.role} for Malta businesses. ${agent.description}`;
  const canonical = `https://oarcdigital.com/ai-agents/${agent.id}`;
  const ogTitle = `${agent.name} — ${agent.role} | OARC Digital AI Agents Malta`;
  const ogImage = agentOgImageUrl(agent.id);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      type: 'website',
      siteName: 'OARC Digital',
      images: [
        {
          url: ogImage,
          width: 320,
          height: 400,
          alt: agent.avatarAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [{ url: ogImage, alt: agent.avatarAlt }],
    },
  };
}

export default function AIAgentDetailPage({ params }: { params: { agentId: string } }) {
  const agent = aiTeamMembers.find((a) => a.id === params.agentId);
  if (!agent) notFound();

  const serviceSchema = createServiceSchema(
    `${agent.name} — AI ${agent.role}`,
    `Deploy ${agent.name}, OARC Digital's AI ${agent.role} for Malta businesses. ${agent.description}`,
    `AI ${agent.role}`
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'AI Agents', url: '/ai-agents' },
    { name: `${agent.name} — ${agent.role}`, url: `/ai-agents/${agent.id}` },
  ]);

  const rating = agentRatings[agent.id];
  const ratingSchema = rating
    ? createAggregateRatingSchema(
        `${agent.name} — AI ${agent.role}`,
        rating.ratingValue,
        rating.reviewCount,
        5,
        'Product'
      )
    : null;

  const schemas: object[] = [serviceSchema, breadcrumbSchema];
  if (ratingSchema) schemas.push(ratingSchema);

  return (
    <>
      <JsonLd id={`agent-schemas-${agent.id}`} data={schemas} />
      <AIAgentDetailClient agentId={agent.id} />
    </>
  );
}
