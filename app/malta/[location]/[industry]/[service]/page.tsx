// Programmatic Location × Industry × Service Pages
// SEO powerhouse: [Service] for [Industry] in [Malta Location]
// Route: /malta/:location/:industry/:service


import Layout from '@/components/layout/Layout';
import JsonLd from '@/components/JsonLd';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { maltaLocations as validLocations, maltaIndustries as validIndustries, locationServices as validServices } from '@/shared/seoConfig';


// Malta locations with SEO-optimized data
const locationNames: Record<string, { name: string; description: string }> = {
  'valletta': { name: 'Valletta', description: 'the historic capital city' },
  'sliema': { name: 'Sliema', description: 'the bustling commercial hub' },
  'st-julians': { name: 'St. Julians', description: 'the vibrant entertainment district' },
  'mosta': { name: 'Mosta', description: 'the central Malta town' },
  'birkirkara': { name: 'Birkirkara', description: "Malta's largest town" },
  'qormi': { name: 'Qormi', description: "the artisan's city" },
  'hamrun': { name: 'Hamrun', description: 'the industrial heart' },
  'naxxar': { name: 'Naxxar', description: 'the northern Malta town' },
  'zabbar': { name: 'Zabbar', description: 'the southern heritage town' },
  'attard': { name: 'Attard', description: 'the garden village' },
  'mdina': { name: 'Mdina', description: 'the Silent City' },
  'rabat': { name: 'Rabat', description: 'the historic gateway town' },
  'marsaskala': { name: 'Marsaskala', description: 'the southern seaside town' },
  'marsaxlokk': { name: 'Marsaxlokk', description: 'the fishing village' },
  'birgu': { name: 'Birgu', description: 'the historic Three Cities' },
  'san-gwann': { name: 'San Gwann', description: 'the northern residential hub' },
  'msida': { name: 'Msida', description: 'the university town' },
  'gzira': { name: 'Gzira', description: 'the waterfront town' },
  'swieqi': { name: 'Swieqi', description: 'the modern residential area' },
  'mellieha': { name: 'Mellieha', description: 'the northern coastal village' },
  'bugibba': { name: 'Bugibba', description: 'the tourist resort town' },
  'san-pawl-il-bahar': { name: "St. Paul's Bay", description: 'the northern bay town' },
  'zejtun': { name: 'Zejtun', description: 'the historic southern town' },
  'zurrieq': { name: 'Zurrieq', description: 'the southern Malta town' },
  'paola': { name: 'Paola', description: 'the central southern town' },
  'tarxien': { name: 'Tarxien', description: 'the ancient heritage town' },
  'fgura': { name: 'Fgura', description: 'the southern residential town' },
  'balzan': { name: 'Balzan', description: 'the leafy central village' },
  'floriana': { name: 'Floriana', description: 'the grand harbour gateway' },
  'marsa': { name: 'Marsa', description: 'the harbour industrial town' },
  'luqa': { name: 'Luqa', description: 'the airport gateway town' },
  'gudja': { name: 'Gudja', description: 'the southern Malta village' },
  'birzebbuga': { name: 'Birzebbuga', description: 'the southern bay village' },
  'kirkop': { name: 'Kirkop', description: 'the southern Malta village' },
  'siggiewi': { name: 'Siggiewi', description: 'the western Malta town' },
  'mqabba': { name: 'Mqabba', description: 'the southern Malta village' },
  'lija': { name: 'Lija', description: 'the charming central village' },
  'iklin': { name: 'Iklin', description: 'the northern residential village' },
  'santa-venera': { name: 'Santa Venera', description: 'the central Malta town' },
  'pieta': { name: 'Pieta', description: 'the harbour town' },
  'pembroke': { name: 'Pembroke', description: 'the northern coastal town' },
  'ghaxaq': { name: 'Ghaxaq', description: 'the southern Malta village' },
  'xghajra': { name: 'Xghajra', description: 'the eastern coastal village' },
  'kalkara': { name: 'Kalkara', description: 'the Three Cities harbour village' },
  'isla': { name: 'Isla', description: 'the historic Senglea peninsula' },
  'bormla': { name: 'Bormla', description: 'the historic Cospicua city' },
  'cospicua': { name: 'Cospicua', description: 'the historic Three Cities' },
  'san-lawrenz': { name: 'San Lawrenz', description: 'the Gozo village' },
  'swatar': { name: 'Swatar', description: 'the residential suburb' },
};

// Industry display names and context
const industryData: Record<string, { name: string; plural: string; context: string; painPoint: string }> = {
  'restaurant': {
    name: 'Restaurant',
    plural: 'restaurants',
    context: 'food and dining',
    painPoint: 'standing out in a crowded dining market and converting social media attention into table bookings',
  },
  'hotel': {
    name: 'Hotel',
    plural: 'hotels',
    context: 'hospitality and accommodation',
    painPoint: 'filling rooms consistently and building direct booking channels to reduce OTA commission dependency',
  },
  'cafe': {
    name: 'Cafe',
    plural: 'cafes',
    context: 'cafe and coffee culture',
    painPoint: 'building a loyal local following and driving consistent daily footfall',
  },
  'bar': {
    name: 'Bar',
    plural: 'bars',
    context: 'bar and nightlife',
    painPoint: 'building a loyal customer base and promoting events and offers at the right time',
  },
  'spa-wellness': {
    name: 'Spa & Wellness',
    plural: 'spa and wellness businesses',
    context: 'wellness and beauty',
    painPoint: 'consistently filling appointment books and retaining clients long-term',
  },
  'gym-fitness': {
    name: 'Gym & Fitness',
    plural: 'gyms and fitness studios',
    context: 'fitness and health',
    painPoint: 'reducing member churn and driving new membership sign-ups consistently',
  },
  'retail': {
    name: 'Retail',
    plural: 'retail businesses',
    context: 'retail and shopping',
    painPoint: 'competing with online shopping and driving consistent foot traffic and sales',
  },
  'real-estate': {
    name: 'Real Estate',
    plural: 'real estate agencies',
    context: 'property and real estate',
    painPoint: 'generating quality property leads and building authority in a competitive Malta market',
  },
  'igaming': {
    name: 'iGaming',
    plural: 'iGaming companies',
    context: 'iGaming and online gaming',
    painPoint: 'standing out in a heavily regulated market while building brand authority and attracting top talent',
  },
  'fintech': {
    name: 'Fintech',
    plural: 'fintech companies',
    context: 'financial technology',
    painPoint: 'building credibility and trust in a regulated industry while driving qualified B2B leads',
  },
  'healthcare': {
    name: 'Healthcare',
    plural: 'healthcare providers',
    context: 'healthcare and medical services',
    painPoint: 'attracting new patients consistently and building trust and authority in the local community',
  },
  'law-firm': {
    name: 'Law Firm',
    plural: 'law firms',
    context: 'legal services',
    painPoint: 'generating qualified enquiries from the right type of clients and building a credible professional profile',
  },
  'car-dealership': {
    name: 'Car Dealership',
    plural: 'car dealerships',
    context: 'automotive and vehicle sales',
    painPoint: 'generating qualified test drive bookings and maintaining a strong presence in a high-consideration purchase market',
  },
  'construction': {
    name: 'Construction',
    plural: 'construction companies',
    context: 'construction and property development',
    painPoint: 'winning tenders and building a strong reputation for quality and reliability in Malta',
  },
  'ecommerce': {
    name: 'E-commerce',
    plural: 'e-commerce businesses',
    context: 'online retail and e-commerce',
    painPoint: 'driving qualified traffic, reducing cart abandonment, and building repeat purchase behaviour',
  },
};

// Service display names and deliverables
const serviceNames: Record<string, { name: string; description: string; deliverable: string }> = {
  'social-media-creative-management': {
    name: 'Social Media Management',
    description: 'Instagram, TikTok, Facebook and LinkedIn management with content creation, scheduling, and community management',
    deliverable: 'content calendar, posting schedule, monthly analytics report',
  },
  'digital-marketing': {
    name: 'Digital Marketing',
    description: 'Multi-channel digital marketing combining SEO, paid advertising, email, and content strategy',
    deliverable: 'campaign strategy, channel management, performance dashboard',
  },
  'branding-services': {
    name: 'Branding',
    description: 'Brand identity, logo design, brand guidelines, and full visual identity systems',
    deliverable: 'brand identity pack, logo files, brand guidelines document',
  },
  'web-design': {
    name: 'Web Design',
    description: 'Custom, mobile-first website design and development optimised for conversions and local SEO',
    deliverable: 'fully responsive website, SEO setup, analytics integration',
  },
  'video-production': {
    name: 'Video Production',
    description: 'Professional video production for social media, advertising, brand films, and product showcases',
    deliverable: 'edited video content, vertical and horizontal cuts, thumbnail assets',
  },
  'ai-copywriting': {
    name: 'AI Copywriting',
    description: 'AI-powered copywriting for websites, ads, social media captions, email campaigns, and product descriptions',
    deliverable: 'brand voice guide, copy assets, ad copy variations',
  },
  'hire-ai-employees': {
    name: 'AI Employees',
    description: 'Custom AI agents for customer service, sales, data analysis, appointment booking, and admin automation',
    deliverable: 'deployed AI agent, integration setup, performance monitoring',
  },
  'revenue-automation': {
    name: 'Revenue Automation',
    description: 'End-to-end revenue automation combining AI, CRM integration, lead nurturing, and conversion optimisation',
    deliverable: 'automation workflows, CRM setup, revenue dashboard',
  },
  'paid-advertising': {
    name: 'Paid Advertising',
    description: 'Meta Ads and Google Ads management with creative production, targeting optimisation, and transparent reporting',
    deliverable: 'campaign setup, ad creatives, weekly performance report',
  },
  'ai-consulting': {
    name: 'AI Consulting',
    description: 'Strategic AI adoption consulting — from readiness assessment to implementation roadmap and staff training',
    deliverable: 'AI audit report, roadmap document, implementation support',
  },
};

export async function generateStaticParams() {
  return validLocations.flatMap((location) =>
    validIndustries.flatMap((industry) =>
      validServices.map((service) => ({ location, industry, service }))
    )
  );
}

export async function generateMetadata({ params }: { params: { location: string; industry: string; service: string } }): Promise<Metadata> {
  const loc = locationNames[params.location];
  const ind = industryData[params.industry];
  const svc = serviceNames[params.service];
  if (!loc || !ind || !svc) return { title: 'Not Found | OARC Digital' };
  const title = `${svc.name} for ${ind.plural} in ${loc.name}, Malta | OARC Digital`;
  const description = `OARC Digital provides ${svc.name.toLowerCase()} for ${ind.plural} in ${loc.name}. ${ind.painPoint.charAt(0).toUpperCase() + ind.painPoint.slice(1)} — we solve it.`;
  const canonical = `https://oarcdigital.com/malta/${params.location}/${params.industry}/${params.service}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function IndustryLocationServicePage({ params }: { params: { location: string; industry: string; service: string } }) {
  const { location, industry, service } = params;

  const loc = locationNames[location];
  const ind = industryData[industry];
  const svc = serviceNames[service];

  if (!loc || !ind || !svc) notFound();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Which agency provides ${svc.name.toLowerCase()} for ${ind.plural} in ${loc.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `OARC Digital provides ${svc.name.toLowerCase()} for ${ind.plural} in ${loc.name} and across Malta. Contact hello@oarcdigital.com or call +356 7971 1799.`,
        },
      },
      {
        '@type': 'Question',
        name: `How much does ${svc.name.toLowerCase()} cost for a ${ind.name.toLowerCase()} in Malta?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `OARC Digital ${svc.name.toLowerCase()} packages for ${ind.plural} start from 297 EUR per month. Contact us for a scoped proposal based on your specific needs.`,
        },
      },
      {
        '@type': 'Question',
        name: `Why do ${ind.plural} in ${loc.name} need ${svc.name.toLowerCase()}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${ind.plural.charAt(0).toUpperCase() + ind.plural.slice(1)} in ${loc.name} face the challenge of ${ind.painPoint}. Professional ${svc.name.toLowerCase()} from OARC Digital addresses this directly with a strategy built for the Malta market.`,
        },
      },
    ],
  };

  return (
    <Layout>
      <JsonLd id={`faq-schema-${location}-${industry}-${service}`} data={faqSchema} />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <span className="text-white">{loc.name}</span>
              <span>/</span>
              <span className="text-white">{ind.name}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">
                {loc.name} · {ind.name}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {svc.name} for {ind.plural.charAt(0).toUpperCase() + ind.plural.slice(1)} in {loc.name}
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              OARC Digital helps {ind.plural} in {loc.name}, {loc.description}, grow through professional{' '}
              {svc.name.toLowerCase()}. We understand the Malta market — and the specific challenges facing{' '}
              {ind.context} businesses here.
            </p>
          </div>
        </section>

        {/* Problem + Delivery */}
        <section className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <div className="bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">
              The Challenge for {ind.plural.charAt(0).toUpperCase() + ind.plural.slice(1)} in {loc.name}
            </h2>
            <p className="text-foreground">
              Most {ind.plural} in {loc.name} struggle with {ind.painPoint}. OARC Digital exists to solve exactly
              this — with a strategy that combines creative quality and AI technology, built specifically for the
              Malta market.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">What We Deliver</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold mb-2 text-lg">{svc.name}</h3>
              <p className="text-muted-foreground">{svc.description}</p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold mb-2 text-lg">What You Get</h3>
              <p className="text-muted-foreground">
                {svc.deliverable.charAt(0).toUpperCase() + svc.deliverable.slice(1)}.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Common Questions</h2>
          <div className="space-y-4 mb-12">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold mb-2">{faq.name}</h3>
                <p className="text-muted-foreground">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-zinc-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Ready to grow your {ind.name.toLowerCase()} in {loc.name}?
            </h2>
            <p className="text-zinc-300 mb-6">
              OARC Digital — Malta's First Creative + AI Systems Agency. Month-to-month contracts. Senior team on
              every account.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Start a Conversation
            </a>
            <p className="text-zinc-500 text-sm mt-4">hello@oarcdigital.com · +356 7971 1799</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
