import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import JsonLd from '@/components/JsonLd';
import { locationServices } from '@/shared/seoConfig';
import { buildLocationHubContent, getServiceProfile } from '@/lib/seo/generateUniquePageContent';
import restore from '@/.local/seo/restore.json';
import { NAP } from '@/lib/seo/nap';

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
            <p className="text-zinc-500 text-sm mt-4">{NAP.email} · {NAP.phoneDisplay}</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
