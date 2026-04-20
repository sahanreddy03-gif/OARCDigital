import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve in Malta | OARC Digital",
  description: "OARC Digital serves businesses across restaurants, hotels, iGaming, fintech, real estate, retail, fitness, wellness, and events in Malta. Explore industry-specific marketing solutions.",
  alternates: { canonical: "https://oarcdigital.com/industries" },
  openGraph: {
    title: "Industries We Serve in Malta | OARC Digital",
    description: "OARC Digital serves businesses across restaurants, hotels, iGaming, fintech, real estate, retail, fitness, wellness, and events in Malta. Explore industry-specific marketing solutions.",
    url: "https://oarcdigital.com/industries",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve in Malta | OARC Digital",
    description: "OARC Digital serves businesses across restaurants, hotels, iGaming, fintech, real estate, retail, fitness, wellness, and events in Malta. Explore industry-specific marketing solutions.",
  },
};

// Industry Hub Index Page
// /industries — showcases all 11 industry hubs

import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const industries = [
  { slug: 'restaurants', name: 'Restaurants', description: 'Social media, video, branding, and AI for Malta restaurants', emoji: '🍽️' },
  { slug: 'hotels', name: 'Hotels', description: 'Direct booking campaigns, property video, and guest automation', emoji: '🏨' },
  { slug: 'cafes', name: 'Cafes', description: 'Brand identity, content strategy, and local advertising for cafes', emoji: '☕' },
  { slug: 'bars', name: 'Bars & Nightlife', description: 'Event promotion, atmosphere content, and reputation management', emoji: '🍸' },
  { slug: 'igaming', name: 'iGaming', description: 'Compliant creative, AI outreach, and B2B marketing for operators', emoji: '🎯' },
  { slug: 'fintech', name: 'Fintech', description: 'Trust-building branding, lead nurturing, and B2B automation', emoji: '💳' },
  { slug: 'real-estate', name: 'Real Estate', description: 'Property video, lead generation, and international buyer campaigns', emoji: '🏠' },
  { slug: 'retail', name: 'Retail', description: 'Product content, e-commerce strategy, and foot traffic campaigns', emoji: '🛍️' },
  { slug: 'fitness', name: 'Fitness', description: 'Member acquisition, transformation content, and retention automation', emoji: '💪' },
  { slug: 'wellness', name: 'Wellness', description: 'Authentic brand storytelling, SEO, and online booking optimisation', emoji: '🧘' },
  { slug: 'events', name: 'Events', description: 'Ticket sales campaigns, event content, and audience building', emoji: '🎪' },
];

export default function Page() {
  return (
    <Layout>
      

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-950 text-white py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,145,77,0.08),transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto px-6 md:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Industries</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
              Industry-Specific Marketing for Malta Businesses
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-8">
              Generic marketing doesn't work. We deliver strategies built specifically for your industry, your customers, and the Malta market.
            </p>
            <a href="https://wa.me/35679711799" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
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
              {industries.map((ind) => (
                <Link key={ind.slug} href={`/industries/${ind.slug}`}>
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-orange-500/40 hover:-translate-y-1 transition-all cursor-pointer h-full">
                    <div className="text-3xl mb-4">{ind.emoji}</div>
                    <h3 className="text-xl font-bold mb-2">{ind.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{ind.description}</p>
                    <span className="text-sm font-medium" style={{ color: '#ff914d' }}>
                      See how we help {ind.name.toLowerCase()} →
                    </span>
                  </div>
                </Link>
              ))}
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
              <a href="https://wa.me/35679711799" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  WhatsApp Us <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
