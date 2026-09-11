import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Bot, Workflow } from "lucide-react";
import Layout from "@/components/layout/Layout";
import JsonLd from "@/components/JsonLd";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
import { SITE_BASE } from "@/lib/seo/sitemapHelpers";
import { getLocationProfile } from "@/lib/seo/locationData";
import { historicalMatrixLocations } from "@/shared/historicalProgrammaticInventory";
import {
  MALTA_PRIORITY_LOCATION_SLUGS,
  MONEY_AGENT_HUB_LINKS,
} from "@/lib/seo/hubDiscoveryLinks";

const title = "Digital Marketing & AI Services Across Malta | OARC Digital";
const description =
  "Explore OARC Digital services for businesses across 49 Malta localities, with local market context, industry expertise, and practical growth systems.";
const canonical = `${SITE_BASE}/malta`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: "website",
    images: ogImageEntry({ title, subtitle: description }),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImageUrl({ title, subtitle: description })],
  },
};

const locations = historicalMatrixLocations.map((slug) => {
  const profile = getLocationProfile(slug);
  if (!profile) {
    throw new Error(`Missing historical Malta location profile: ${slug}`);
  }
  return profile;
});

const priorityLocations = MALTA_PRIORITY_LOCATION_SLUGS.map((slug) => {
  const profile = getLocationProfile(slug);
  if (!profile) {
    throw new Error(`Missing priority Malta location profile: ${slug}`);
  }
  return profile;
});

const locationSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description,
  url: canonical,
  mainEntity: {
    "@type": "ItemList",
    name: "OARC Digital Malta locality guides",
    numberOfItems: locations.length,
    itemListElement: locations.map((location, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${location.name} digital services`,
      url: `${SITE_BASE}/malta/${location.slug}`,
    })),
  },
};

const priorityLocationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Priority Malta markets for OARC Digital",
  description:
    "Highest-priority Malta locality hubs from the ranked discovery set — Valletta through Attard.",
  numberOfItems: priorityLocations.length,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  itemListElement: priorityLocations.map((location, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: `${location.name} digital services`,
    url: `${SITE_BASE}/malta/${location.slug}`,
  })),
};

const moneyHubSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AI, automation, and growth hubs for Malta businesses",
  description:
    "Money and agent hubs that pair with Malta locality pages for discovery within a few clicks.",
  numberOfItems: MONEY_AGENT_HUB_LINKS.filter((l) => l.href !== "/malta").length,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  itemListElement: MONEY_AGENT_HUB_LINKS.filter((l) => l.href !== "/malta").map(
    (link, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: link.label,
      url: `${SITE_BASE}${link.href}`,
    }),
  ),
};

export default function MaltaPage() {
  return (
    <Layout>
      <JsonLd id="malta-locality-collection" data={locationSchema} />
      <JsonLd id="malta-priority-markets" data={priorityLocationSchema} />
      <JsonLd id="malta-money-hubs" data={moneyHubSchema} />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">
                49 Malta localities
              </span>
            </div>
            <h1 className="max-w-4xl text-4xl md:text-6xl font-bold leading-tight mb-6">
              Local digital growth systems, built for businesses across Malta
            </h1>
            <p className="max-w-3xl text-lg md:text-xl text-zinc-300 leading-relaxed">
              Find OARC Digital services by locality, then explore the exact
              industry and service combination that matches your market. Every
              guide uses local business context rather than treating Malta as
              one generic audience.
            </p>
          </div>
        </section>

        <section
          className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20"
          data-testid="malta-priority-markets"
        >
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-600 mb-3">
              Start here
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Priority Malta markets
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These localities carry the strongest commercial demand in our
              ranked Malta set. Open a hub for local context, then branch into
              industry and service guides from there.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {priorityLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/malta/${location.slug}`}
                className="group rounded-2xl border bg-card p-5 transition-colors hover:border-orange-400/70"
                data-testid={`malta-priority-${location.slug}`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-bold">{location.name}</h3>
                  <ArrowRight className="w-4 h-4 text-orange-500 transition-transform group-hover:translate-x-1" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {location.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section
          className="border-t bg-zinc-50 dark:bg-zinc-900/40"
          data-testid="malta-money-hubs"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-600 mb-3">
                AI · automation · growth
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Systems that pair with every locality
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Locality hubs explain the market. These money hubs explain how
                OARC ships creative, AI agents, automation, and SEO for Malta
                operators — within a few clicks of any priority town page.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {MONEY_AGENT_HUB_LINKS.filter((l) => l.href !== "/malta").map(
                (link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group rounded-2xl border bg-card p-6 transition-colors hover:border-orange-400/70"
                    data-testid={`malta-hub-${link.href.replace(/[^a-z0-9]+/gi, "-")}`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        {link.href.includes("ai") ||
                        link.href.includes("automation") ? (
                          link.href.includes("automation") ? (
                            <Workflow className="w-5 h-5 text-orange-500" />
                          ) : (
                            <Bot className="w-5 h-5 text-orange-500" />
                          )
                        ) : (
                          <ArrowRight className="w-5 h-5 text-orange-500" />
                        )}
                        <h3 className="text-xl font-bold">{link.label}</h3>
                      </div>
                      <ArrowRight className="w-5 h-5 text-orange-500 transition-transform group-hover:translate-x-1" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {link.href === "/ai-agents" &&
                        "AI employees for sales, support, booking, and ops — plus Voice AI Worker on the phone."}
                      {link.href === "/services/ai-staff" &&
                        "Role-based AI staff for Malta teams that need coverage with human handoff."}
                      {link.href === "/services/automation" &&
                        "Workflow and CRM automation so follow-ups and handoffs finish without copy-paste."}
                      {link.href === "/solutions" &&
                        "Creative + AI + automation under one Birkirkara team for revenue work."}
                      {link.href === "/creative" &&
                        "Brand, social, and video systems that sell — connected to agents when demand arrives."}
                      {link.href === "/services/seo-services" &&
                        "Organic + AEO/GEO SEO for Malta SMBs that need durable discovery, not vanity traffic."}
                    </p>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-600 mb-3">
              Choose your locality
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Malta market guides
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Each locality hub explains the audience, commercial pressures,
              landmarks, nearby markets, and opportunities shaping demand in
              that part of Malta.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/malta/${location.slug}`}
                className="group rounded-2xl border bg-card p-6 transition-colors hover:border-orange-400/70"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold">{location.name}</h3>
                  <ArrowRight className="w-5 h-5 text-orange-500 transition-transform group-hover:translate-x-1" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {location.shortDescription}
                </p>
                <p className="text-xs font-medium text-foreground">
                  Focus: {location.primaryIndustries.slice(0, 3).join(" · ")}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t bg-zinc-950 text-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a plan for your Malta market?
            </h2>
            <p className="text-zinc-300 max-w-2xl mx-auto mb-8">
              Tell us where you operate, who you need to reach, and what growth
              is blocked. We will map the right creative, media, automation,
              and AI system around it.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
            >
              Start a conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}