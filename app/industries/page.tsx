import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve in Malta | OARC Digital",
  description: "OARC Digital serves restaurants, hotels, healthcare, legal, professional services, construction, beauty, automotive, education, NGOs, iGaming, fintech, real estate, retail, ecommerce, fitness, wellness, and events across Malta. Pick your industry to see how we package the offer.",
  alternates: { canonical: "https://oarcdigital.com/industries" },
  openGraph: {
    images: ogImageEntry({ title: "Industries We Serve in Malta | OARC Digital", subtitle: "OARC Digital serves restaurants, hotels, healthcare, legal, professional services, construction, beauty, automotive, education, NGOs, iGaming, fintech, real estate, retail, ecommerce, fitness, wellness, and events across Malta. Pick your industry to see how we package the offer." }),
    title: "Industries We Serve in Malta | OARC Digital",
    description: "OARC Digital serves 19 industries across Malta with industry-specific marketing, video, and AI systems. Find your sector to see the packaged offer, common pain points, and the services that move the needle for businesses like yours.",
    url: "https://oarcdigital.com/industries",
  },
  twitter: {
    images: [ogImageUrl({ title: "Industries We Serve in Malta | OARC Digital", subtitle: "OARC Digital serves restaurants, hotels, healthcare, legal, professional services, construction, beauty, automotive, education, NGOs, iGaming, fintech, real estate, retail, ecommerce, fitness, wellness, and events across Malta. Pick your industry to see how we package the offer." })],
    card: "summary_large_image",
    title: "Industries We Serve in Malta | OARC Digital",
    description: "OARC Digital serves 19 industries across Malta with industry-specific marketing, video, and AI systems. Find your sector below.",
  },
};

// Industry Hub Index Page
// /industries — showcases all industry hubs

import Link from "next/link";
import {
  ArrowRight,
  UtensilsCrossed,
  Hotel,
  Coffee,
  Wine,
  Target,
  CreditCard,
  Home,
  ShoppingBag,
  ShoppingCart,
  Dumbbell,
  Sparkles,
  PartyPopper,
  Stethoscope,
  Scale,
  Briefcase,
  HardHat,
  Scissors,
  Car,
  GraduationCap,
  HeartHandshake,
  type LucideIcon,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


type Industry = { slug: string; name: string; description: string; icon: LucideIcon; caseStudyCount: number };

// Live case-study counts derived from app/case-studies/ subdirectories.
// Update this map when new case studies are published.
const industries: Industry[] = [
  { slug: 'restaurants', name: 'Restaurants', description: 'Social media, video, branding, and AI for Malta restaurants', icon: UtensilsCrossed, caseStudyCount: 1 },
  { slug: 'hotels', name: 'Hotels', description: 'Direct booking campaigns, property video, and guest automation', icon: Hotel, caseStudyCount: 1 },
  { slug: 'cafes', name: 'Cafes', description: 'Brand identity, content strategy, and local advertising for cafes', icon: Coffee, caseStudyCount: 0 },
  { slug: 'bars', name: 'Bars & Nightlife', description: 'Event promotion, atmosphere content, and reputation management', icon: Wine, caseStudyCount: 0 },
  { slug: 'igaming', name: 'iGaming', description: 'Compliant creative, AI outreach, and B2B marketing for operators', icon: Target, caseStudyCount: 6 },
  { slug: 'fintech', name: 'Fintech', description: 'Trust-building branding, lead nurturing, and B2B automation', icon: CreditCard, caseStudyCount: 1 },
  { slug: 'real-estate', name: 'Real Estate', description: 'Property video, lead generation, and international buyer campaigns', icon: Home, caseStudyCount: 3 },
  { slug: 'retail', name: 'Retail', description: 'Product content, e-commerce strategy, and foot traffic campaigns', icon: ShoppingBag, caseStudyCount: 2 },
  { slug: 'ecommerce', name: 'Ecommerce & DTC', description: 'Shopify builds, Klaviyo lifecycle, paid social, and Plus migrations for DTC brands', icon: ShoppingCart, caseStudyCount: 0 },
  { slug: 'fitness', name: 'Fitness', description: 'Member acquisition, transformation content, and retention automation', icon: Dumbbell, caseStudyCount: 2 },
  { slug: 'wellness', name: 'Wellness', description: 'Authentic brand storytelling, SEO, and online booking optimisation', icon: Sparkles, caseStudyCount: 1 },
  { slug: 'events', name: 'Events', description: 'Ticket sales campaigns, event content, and audience building', icon: PartyPopper, caseStudyCount: 0 },
  { slug: 'healthcare-clinics', name: 'Healthcare Clinics', description: 'Compliant patient acquisition, online booking, and recall automation', icon: Stethoscope, caseStudyCount: 1 },
  { slug: 'legal-services', name: 'Law Firms', description: 'Practice-area SEO, partner content, and B2B instruction pipelines', icon: Scale, caseStudyCount: 0 },
  { slug: 'professional-services', name: 'Professional Services', description: 'Advisory thought leadership, partner-led pipeline, and brand systems', icon: Briefcase, caseStudyCount: 4 },
  { slug: 'construction', name: 'Construction & Property', description: 'Development microsites, drone documentation, and B2B contractor pipeline', icon: HardHat, caseStudyCount: 1 },
  { slug: 'beauty-wellness', name: 'Beauty & Med Spas', description: 'Local Meta and Google, mid-week column fills, and rebook automation', icon: Scissors, caseStudyCount: 4 },
  { slug: 'automotive', name: 'Automotive', description: 'Inventory marketing, service-bay automation, and walkaround video', icon: Car, caseStudyCount: 0 },
  { slug: 'education', name: 'Education', description: 'Open-day funnels, international student acquisition, and campus film', icon: GraduationCap, caseStudyCount: 0 },
  { slug: 'nonprofits-ngos', name: 'Non-Profits & NGOs', description: 'Donor acquisition, Google Ad Grants, and ethical impact storytelling', icon: HeartHandshake, caseStudyCount: 0 },
];

// CollectionPage + ItemList JSON-LD for the master industries hub.
const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://oarcdigital.com/industries#collection',
  name: 'Industries We Serve in Malta',
  url: 'https://oarcdigital.com/industries',
  description: 'OARC Digital serves 19 industries across Malta with industry-specific marketing, video, and AI systems.',
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: industries.length,
    itemListElement: industries.map((ind, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://oarcdigital.com/industries/${ind.slug}`,
      name: ind.name,
    })),
  },
};

export default function Page() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-950 text-white py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,145,77,0.08),transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto px-6 md:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors" data-testid="link-breadcrumb-home">Home</Link>
              <span>/</span>
              <span className="text-white">Industries</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
              Industry-Specific Marketing for Malta Businesses
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-8">
              Generic marketing rarely lands. We build sector-specific systems for {industries.length} industries across Malta — each with its own buyer, its own regulator, and its own pain points.
            </p>
            <a href="https://wa.me/35679711799" target="_blank" rel="noopener noreferrer" data-testid="link-hero-whatsapp">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" data-testid="button-find-industry">
                Find Your Industry <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </section>

        {/* Industry Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Industries We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <Link key={ind.slug} href={`/industries/${ind.slug}`} data-testid={`link-industry-${ind.slug}`}>
                    <div className="p-6 rounded-md bg-card border border-border hover-elevate h-full">
                      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-md bg-orange-500/10 text-orange-500">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2" data-testid={`text-industry-name-${ind.slug}`}>{ind.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{ind.description}</p>
                      <div className="flex items-center justify-between gap-3 text-sm">
                        <span className="text-xs text-muted-foreground" data-testid={`text-case-study-count-${ind.slug}`}>
                          {ind.caseStudyCount === 0
                            ? 'New sector — case studies coming'
                            : `${ind.caseStudyCount} case stud${ind.caseStudyCount === 1 ? 'y' : 'ies'}`}
                        </span>
                        <span className="font-medium" style={{ color: '#ff914d' }}>
                          See how we help →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See Your Industry?</h2>
            <p className="text-muted-foreground mb-8">
              We work with businesses across all sectors in Malta. Get in touch and we'll show you what we can do for your specific business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/35679711799" target="_blank" rel="noopener noreferrer" data-testid="link-cta-whatsapp">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" data-testid="button-cta-whatsapp">
                  WhatsApp Us <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <Link href="/contact" data-testid="link-cta-contact">
                <Button size="lg" variant="outline" data-testid="button-cta-contact">Contact Us</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
