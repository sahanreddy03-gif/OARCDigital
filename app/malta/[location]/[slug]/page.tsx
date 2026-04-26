// /malta/[location]/[service] — kept services only.
// Archived service slugs are 410'd by middleware before reaching this route.

import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import JsonLd from '@/components/JsonLd';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { buildLocationServiceContent } from '@/lib/seo/generateUniquePageContent';
import { getLocationProfile } from '@/lib/seo/locationData';
import restore from '@/.local/seo/restore.json';
import { NAP } from "@/lib/seo/nap";

export async function generateStaticParams() {
  return (restore as { kept: { locationServices: { location: string; service: string }[] } }).kept
    .locationServices.map(({ location, service }) => ({ location, slug: service }));
}

export async function generateMetadata({ params }: { params: { location: string; slug: string } }): Promise<Metadata> {
  const c = buildLocationServiceContent(params.location, params.slug);
  if (!c) return { title: 'Service Not Found | OARC Digital' };
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: c.canonical },
    openGraph: { title: c.title, description: c.description, url: c.canonical, type: 'website' },
    twitter: { card: 'summary_large_image', title: c.title, description: c.description },
  };
}

export default function LocationServicePage({ params }: { params: { location: string; slug: string } }) {
  const c = buildLocationServiceContent(params.location, params.slug);
  if (!c) notFound();

  const loc = getLocationProfile(params.location)!;

  return (
    <Layout>
      <JsonLd id={`location-${params.location}-${params.slug}`} data={c.schema} />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-950 text-white py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06),transparent_50%)]"></div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <Link href={`/malta/${params.location}`} className="hover:text-white transition-colors">{loc.name}</Link>
            </div>

            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-green-500" />
                <span className="text-green-500 font-semibold uppercase tracking-wider text-sm">
                  {c.hero.eyebrow}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {c.hero.h1.split(loc.name)[0]}<span className="text-green-500">{loc.name}</span>
              </h1>

              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                {c.hero.intro}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" data-testid="button-cta-hero">
                    {c.cta} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href={`tel:${NAP.phoneE164}`}>
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Phone className="mr-2 w-4 h-4" /> Call Us Now
                  </Button>
                </a>
              </div>

              <p className="text-sm text-zinc-500 mt-6">
                Packages from <span className="text-zinc-300 font-semibold">€{c.pricingFromEUR.toLocaleString()}/month</span>
              </p>
            </div>
          </div>
        </section>

        {/* Why this service in this location */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why this matters in {loc.name}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.whyHere}</p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What you get from <span style={{ fontFamily: 'var(--font-heatrobox)' }}>OARC Digital</span> in {loc.name}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {c.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-card border hover-elevate transition-all">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">{index + 1}</span>
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Process</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              How we deliver for {loc.name} businesses — built around the realities of the {loc.primaryIndustries[0]} and {loc.primaryIndustries[1] ?? loc.primaryIndustries[0]} markets here.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {c.process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-card p-6 rounded-lg border h-full hover-elevate transition-all">
                    <div className="text-5xl font-bold text-green-500/20 mb-3">0{index + 1}</div>
                    <h3 className="text-xl font-bold mb-2">{step.step}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                  {index < c.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-green-500/30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to grow your business in {loc.name}?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Senior team. Month-to-month contracts. Built for the realities of {loc.shortDescription}.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  <Mail className="mr-2 w-4 h-4" /> Get Free Consultation
                </Button>
              </Link>
              <a href={`tel:${NAP.phoneE164}`}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  <Phone className="mr-2 w-4 h-4" /> {NAP.phoneDisplay}
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {c.faqs.map((faq, i) => (
                <div key={i} className="bg-card p-6 rounded-lg border">
                  <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
