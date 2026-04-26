import Layout from "@/components/layout/Layout";
import RelatedLinks from "@/components/RelatedLinks";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";

import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";
import { NAP } from "@/lib/seo/nap";
const SCHEMA = SERVICE_SCHEMAS["database-design"];

const phases = [
  { title: "Domain modelling workshop (week 1)", detail: "We sit with founders and product owners to model the real-world entities, relationships, and lifecycle states. The output is a written Entity Relationship Diagram and a glossary your engineers will reference for years." },
  { title: "Schema design and migration plan (week 2)", detail: "Normalised relational schema in PostgreSQL by default, indexed for the queries you actually run. If you are migrating from MongoDB, MySQL, or a spreadsheet, we publish the migration script and rollback plan." },
  { title: "Performance baseline and query optimisation (weeks 3–4)", detail: "We benchmark every critical query, add the indexes that earn their keep, kill the ones that do not, and write read-replica strategy if your read:write ratio justifies it." },
  { title: "Backups, DR, and ongoing review (ongoing)", detail: "Point-in-time restore, off-region snapshots, documented restore drills, and a quarterly schema review as your product evolves." },
];

const stack = [
  { name: "PostgreSQL", role: "Default for almost every Malta SaaS, fintech, and operational system. Best-in-class reliability and SQL feature set." },
  { name: "MySQL / MariaDB", role: "Where existing systems already standardise on it. Strong for high-write transactional workloads." },
  { name: "Supabase / Neon / RDS", role: "Managed Postgres options — Supabase for fast prototyping with auth and edge functions, Neon for serverless branching, RDS or Cloud SQL for production scale." },
  { name: "Drizzle / Prisma / Kysely", role: "Typed ORM and query-builder layer matched to your team's preference and the product's data complexity." },
];

export default function DatabaseDesignContent() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link><span>/</span>
              <span className="text-white">Database Design</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Data Architecture</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Database Design for Malta-Based Software Teams</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              Schema design, normalisation, query optimisation, and managed Postgres operations — for Malta SaaS, fintech, and iGaming teams that need their data layer to scale without rewrites.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a database review <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Bad Schema Is the Most Expensive Mistake in SaaS</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Almost every painful migration we get called into starts with the same root cause: the original schema was designed by a generalist developer in week one of the build, before anyone really understood the domain. Two years later the product has shipped, the model is wrong, and changing it requires a coordinated migration across a live customer base, mobile clients, integrations, and analytics pipelines. The cost is rarely under €40,000.
            </p>
            <p className="text-foreground leading-relaxed">
              Spending two weeks on the schema at the start of a project — with someone who has shipped a dozen of these before — is the single highest-leverage investment a Malta software team can make. OARC Digital&apos;s data team has done exactly that for fintech, iGaming, hospitality booking platforms, and operational SaaS products built out of Malta and the wider EU.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">A 4-Week Engagement, Phase by Phase</h2>
            <div className="space-y-4">
              {phases.map((p, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border">
                  <div className="flex items-start gap-3 mb-2"><span className="text-orange-500 font-bold text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span><h3 className="font-bold">{p.title}</h3></div>
                  <p className="text-muted-foreground pl-8">{p.detail}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The Stack We Default To</h2>
            <div className="space-y-3">
              {stack.map((s) => (
                <div key={s.name} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{s.name}</div>
                  <div className="text-sm text-muted-foreground">{s.role}</div>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What Comes In Every Engagement</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {SCHEMA.features.map((f) => (
                <div key={f.name} className="flex items-start gap-3 p-4 rounded-xl bg-card border">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{f.name}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">GDPR, Audit, and Malta-Specific Compliance</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Malta-licensed iGaming operators, MFSA-supervised fintechs, and any business holding EU customer data have audit obligations the schema must support natively — soft deletes with retention windows, immutable audit trails on financial events, encrypted-at-rest sensitive columns, and data-residency controls that keep production data inside EU regions.
            </p>
            <p className="text-foreground leading-relaxed">
              We bake those requirements into the original schema rather than retrofitting them under audit pressure. The cost of doing it once at design time is roughly 1/20th of doing it later under regulatory deadline.
            </p>
          </section>
          <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Indexing and Query Plans That Actually Get Reviewed</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Most production databases we audit have between three and ten missing indexes that are quietly responsible for the slowest 1% of queries — the ones that show up as P99 latency spikes, dashboard timeouts, and customer-perceived slowness during busy hours. Adding the right indexes is the single highest-leverage performance intervention available, and the wrong indexes are the second highest. We review the actual query plan for every hot query, validate the indexing strategy against real production cardinalities, and document why each index exists so a future engineer does not delete it during a cleanup.
              </p>
              <p className="text-foreground leading-relaxed">
                Our review cadence is monthly for production databases over 100GB and quarterly for smaller ones. Each review surfaces new slow queries from pg_stat_statements or MySQL Performance Schema, recommends index changes, and flags emerging problems like table bloat, unused indexes consuming disk space, or missing partial indexes on growing nullable columns. Recommendations are delivered as written reports with explicit migration scripts, not vague consultancy memos.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Schema Migrations Without Downtime</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Schema migrations are where most Malta SaaS teams take their first real production outage. Adding a not-null column to a multi-million-row table, renaming a hot column, or dropping an enum value — these operations look harmless in a Drizzle or Prisma migration file but each one will lock the table for minutes if executed naively. We run every schema change through a documented zero-downtime migration playbook that includes shadow columns, dual-write windows, online index builds via pg_repack or gh-ost, and a rollback plan rehearsed on a staging dataset that matches production cardinality.
              </p>
              <p className="text-foreground leading-relaxed">
                Larger architectural decisions — sharding strategies, read-replica topologies, cache invalidation patterns, multi-region active-active versus active-passive — are documented in a written architecture decision record stored in the client's repository. Future engineers can read the record, understand the trade-offs, and either continue the chosen path or knowingly diverge from it rather than re-litigating the same decision every six months.
              </p>
            </section>
            <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Backups, Disaster Recovery, and the Restore Drill</h2>
            <p className="text-foreground leading-relaxed">
              Backups that have never been restored are not backups. Every database we operate is tested against its own restore plan once per quarter, with a written record of restore time and any drift discovered during the drill. Disaster-recovery topology is documented in the client's repository alongside the runbook and rehearsed annually with the client's engineering team so the playbook is muscle memory rather than a PDF nobody opens. Encryption-at-rest, encryption-in-transit, and key rotation policies are aligned to GDPR Article 32 and documented for procurement reviews.
            </p>
            </section>
            <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing</h2>
            <p className="text-muted-foreground mb-6">Three transparent tiers. No setup fees, no annual lock-in.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {SCHEMA.offers.map((offer) => (
                <div key={offer.name} className="rounded-xl border p-6 bg-card flex flex-col">
                  <h3 className="font-bold text-lg mb-1">{offer.name}</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-1">€{offer.priceFrom.toLocaleString()}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">{offer.unitText?.toLowerCase() ?? "project"}</p>
                  <p className="text-sm text-muted-foreground flex-1">{offer.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          <MaltaContextBlock slug="database-design" />
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {SCHEMA.faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital</h2>
            <TrustBlock slug="database-design" />
          </section>
          <RelatedLinks slug="/services/database-design" />
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Schema Bothering You?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">Bring us your current ER diagram or Prisma file — we will tell you in two hours whether it scales, and what to do about it if not.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Book the review <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
