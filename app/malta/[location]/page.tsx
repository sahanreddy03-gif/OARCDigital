import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Quote } from 'lucide-react';
import { notFound } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import JsonLd from '@/components/JsonLd';
import { locationServices } from '@/shared/seoConfig';
import { buildLocationHubContent, getServiceProfile } from '@/lib/seo/generateUniquePageContent';
// Tier 1/2 restore allowlist — single source of truth for what we statically
// render (Task #51 / #52). Anything outside this list is 410'd by middleware.
import restore from '@/.local/seo/restore.json';

const serviceCatalog = locationServices.map((slug) => {
  const svc = getServiceProfile(slug);
  return {
    slug,
    name: svc?.name ?? slug,
    desc: svc?.description.split('—')[0].trim() ?? '',
  };
});

export async function generateStaticParams() {
  return (restore as { kept: { locationHubs: { location: string }[] } }).kept.locationHubs;
}

export async function generateMetadata({ params }: { params: { location: string } }): Promise<Metadata> {
  const c = buildLocationHubContent(params.location, serviceCatalog);
  if (!c) return { title: 'Location Not Found | OARC Digital' };
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: c.canonical },
    openGraph: { title: c.title, description: c.description, url: c.canonical, type: 'website' },
    twitter: { card: 'summary_large_image', title: c.title, description: c.description },
  };
}

export default function LocationHubPage({ params }: { params: { location: string } }) {
  const c = buildLocationHubContent(params.location, serviceCatalog);
  if (!c) notFound();

  return (
    <Layout>
      <JsonLd id={`malta-${params.location}-hub`} data={c.schema} />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">{c.hero.eyebrow.replace('Malta — ', '')}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">{c.hero.eyebrow}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {c.hero.h1}
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              {c.hero.intro}
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About {c.hero.eyebrow.replace('Malta — ', '')}</h2>
          <p className="text-muted-foreground leading-relaxed mb-12">{c.whyHere}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold mb-4">Local Challenges</h3>
              <ul className="space-y-3">
                {c.challenges.map((item, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed">• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Marketing Opportunities</h3>
              <ul className="space-y-3">
                {c.opportunities.map((item, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed">• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Per-location case-study hook + Maltese testimonial — required by
              Task #52 to give every restored URL a unique social-proof block. */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 bg-card" data-testid={`block-case-study-${params.location}`}>
              <div className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-3">Recent Result</div>
              <h3 className="text-lg font-bold mb-3 leading-snug">{c.caseStudyHook.headline}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{c.caseStudyHook.outcome}</p>
              <div className="text-sm font-semibold text-orange-600 dark:text-orange-400">{c.caseStudyHook.metric}</div>
            </div>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 bg-card" data-testid={`block-testimonial-${params.location}`}>
              <Quote className="w-6 h-6 text-orange-500 mb-3" />
              <p className="text-foreground leading-relaxed mb-4 italic">&ldquo;{c.testimonial.quote}&rdquo;</p>
              <div className="text-sm">
                <div className="font-semibold text-foreground">{c.testimonial.author}</div>
                <div className="text-muted-foreground">{c.testimonial.role} · {c.testimonial.business}</div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-8">Services Available in {c.hero.eyebrow.replace('Malta — ', '')}</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {c.services.map((service) => (
              <Link
                key={service.slug}
                href={`/malta/${params.location}/${service.slug}`}
                className="group p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-orange-500/50 transition-all"
                data-testid={`link-service-${service.slug}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold mb-1">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-orange-500 mt-1 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-zinc-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to grow your business in {c.hero.eyebrow.replace('Malta — ', '')}?</h2>
            <p className="text-zinc-300 mb-6">OARC Digital — Malta&apos;s First Creative + AI Systems Agency. Month-to-month contracts. Senior team on every account.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors" data-testid="link-contact-cta">
              Start a Conversation
            </Link>
            <p className="text-zinc-500 text-sm mt-4">hello@oarcdigital.com · +356 7971 1799</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
