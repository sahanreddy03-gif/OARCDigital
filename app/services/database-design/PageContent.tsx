"use client";

import Layout from "@/components/layout/Layout";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";

import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";
import { NAP } from "@/lib/seo/nap";

const dataEngineeringHero = "/attached_assets/18_1763228440284.jpg";
const SCHEMA = SERVICE_SCHEMAS["database-design"];

const dbImageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  name: "Data engineering circuit board visualisation — database schema, pipeline, and query optimisation for Malta software teams",
  description: "PostgreSQL, MongoDB, and Snowflake data architecture for Malta SaaS, fintech, and iGaming teams — schema design, zero-downtime migrations, and production ETL pipelines that actually get reviewed.",
  url: "https://oarcdigital.com/attached_assets/18_1763228440284.jpg",
  width: 1200,
  height: 800,
  contentUrl: "https://oarcdigital.com/attached_assets/18_1763228440284.jpg",
};

const dbFaqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SCHEMA.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const phases = [
  { title: "Domain modelling workshop (week 1)", detail: "We sit with founders and product owners to model the real-world entities, relationships, and lifecycle states. The output is a written Entity Relationship Diagram and a glossary your engineers will reference for years." },
  { title: "Schema design and migration plan (week 2)", detail: "Normalised relational schema in PostgreSQL by default — or a document model in MongoDB where the access pattern truly justifies it — indexed for the queries you actually run. If you are migrating from MySQL, MongoDB, or a spreadsheet, we publish the migration script and rollback plan." },
  { title: "Performance baseline and query optimisation (weeks 3–4)", detail: "We benchmark every critical query, add the indexes that earn their keep, kill the ones that do not, and write read-replica strategy if your read:write ratio justifies it." },
  { title: "Data pipeline and warehouse wiring (weeks 4–6)", detail: "Where reporting matters, we wire ETL from the operational store into Snowflake or BigQuery, model it in dbt, and orchestrate the daily runs on Airflow or Dagster with alerting on freshness and row-count drift." },
  { title: "Backups, DR, and ongoing review (ongoing)", detail: "Point-in-time restore, off-region snapshots, documented restore drills, and a quarterly schema review as your product evolves." },
];

const stack = [
  { name: "PostgreSQL", role: "Default for almost every Malta SaaS, fintech, and operational system. Top-tier reliability and SQL feature set, with row-level security for multi-tenant isolation." },
  { name: "MongoDB", role: "Where the document shape genuinely varies per tenant or where rapid schema evolution beats join performance. We design the index strategy and the aggregation pipelines, not just the collections." },
  { name: "Snowflake / BigQuery", role: "Analytical warehouse layer for reporting, finance close, and AI feature stores. Modelled in dbt with tests, documented lineage, and EU-region storage." },
  { name: "MySQL / MariaDB", role: "Where existing systems already standardise on it. Strong for high-write transactional workloads." },
  { name: "Supabase / Neon / RDS", role: "Managed Postgres options — Supabase for fast prototyping with auth and edge functions, Neon for serverless branching, RDS or Cloud SQL for production scale." },
  { name: "Drizzle / Prisma / Kysely", role: "Typed ORM and query-builder layer matched to your team's preference and the product's data complexity." },
];

export default function DatabaseDesignContent() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dbImageObjectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dbFaqPageSchema) }}
      />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400 flex-wrap">
                <Link href="/" className="hover:text-white transition-colors" data-testid="link-breadcrumb-home">Home</Link><span>/</span>
                <Link href="/services" className="hover:text-white transition-colors" data-testid="link-breadcrumb-services">Services</Link><span>/</span>
                <Link href="/services/custom-software-development" className="hover:text-white transition-colors" data-testid="link-breadcrumb-parent">Custom Software</Link><span>/</span>
                <span className="text-white">Database &amp; Data Engineering</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Data Architecture &amp; Engineering</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-hero">Your Data Is Only Valuable If You Can Actually Use It.</h1>
              <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                PostgreSQL, MongoDB, and Snowflake. Schema design, query optimisation, zero-downtime migrations, and production ETL pipelines — for Malta SaaS, fintech, and iGaming teams that need their data layer to scale without rewrites.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" data-testid="button-book-review">Book a database review <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
                <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" data-testid="button-call"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
              </div>
              <p className="mt-6 text-xs text-zinc-500" data-testid="text-last-updated">Last updated: 10 May 2026</p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={dataEngineeringHero}
                alt="Data engineering and database architecture — schema design, query optimisation, and ETL pipelines for Malta SaaS and fintech software teams"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                loading="eager"
                data-testid="img-hero-data-engineering"
              />
            </div>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Bad Schema Is the Most Expensive Mistake in SaaS</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Almost every painful migration we get called into starts with the same root cause: the original schema was designed by a generalist developer in week one of the build, before anyone really understood the domain. Two years later the product has shipped, the model is wrong, and changing it requires a coordinated migration across a live customer base, mobile clients, integrations, and analytics pipelines. The cost is rarely under €40,000.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Spending two weeks on the schema at the start of a project — with someone who has shipped a dozen of these before — is the single highest-leverage investment a Malta software team can make. OARC Digital&apos;s data team has done exactly that for fintech, iGaming, hospitality booking platforms, and operational SaaS products built out of Malta and the wider EU.
            </p>
            <p className="text-foreground leading-relaxed">
              Database design and data engineering sit one layer below our broader <Link href="/services/custom-software-development" className="text-orange-600 underline underline-offset-4 hover:text-orange-700" data-testid="link-parent-service">custom software development</Link> practice. The full-product team builds the application; this team owns the schema, the indexes, the migrations, and the pipelines that move data from the operational store into Snowflake or BigQuery for reporting. You can hire either independently — most clients hire both.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">A Phased Engagement, Week by Week</h2>
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
              On PostgreSQL we read pg_stat_statements, auto_explain, and pg_stat_user_indexes. On MongoDB we read the explain plan output and the index intersection logs. On Snowflake we read query history and the warehouse-credit attribution per query so the finance team knows which dashboard is costing what. Each review surfaces new slow queries, recommends index changes, and flags emerging problems like table bloat, unused indexes consuming disk space, or missing partial indexes on growing nullable columns. Recommendations are delivered as written reports with explicit migration scripts, not vague consultancy memos.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Schema Migrations Without Downtime</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Schema migrations are where most Malta SaaS teams take their first real production outage. Adding a not-null column to a multi-million-row table, renaming a hot column, or dropping an enum value — these operations look harmless in a Drizzle or Prisma migration file but each one will lock the table for minutes if executed naively. We run every schema change through a documented zero-downtime migration playbook that includes shadow columns, dual-write windows, online index builds via pg_repack or gh-ost, and a rollback plan rehearsed on a staging dataset that matches production cardinality.
            </p>
            <p className="text-foreground leading-relaxed">
              Larger architectural decisions — sharding strategies, read-replica topologies, cache invalidation patterns, multi-region active-active versus active-passive — are documented in a written architecture decision record stored in the client&apos;s repository. Future engineers can read the record, understand the trade-offs, and either continue the chosen path or knowingly diverge from it rather than re-litigating the same decision every six months.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Data Pipelines and ETL Into the Warehouse</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Once the operational schema is healthy, the next bottleneck is reporting. Founders ask for a number, the analyst writes a query against the production read-replica, the query is slow, and someone copies the result into a spreadsheet that is out of date by Friday. The fix is a proper data pipeline: extract from the operational source, load into a dedicated analytical warehouse, and transform it into clean models a non-engineer can query.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Our default ETL stack is Fivetran or Airbyte for source connectors (PostgreSQL CDC, MongoDB change streams, Stripe, HubSpot, Google Analytics 4), Snowflake or BigQuery as the warehouse with EU-region storage, dbt for the transformation layer with tests and documentation, and Airflow or Dagster for orchestration. Every pipeline ships with row-count and freshness alerts wired into Slack or PagerDuty so a broken extract is caught before the Monday board meeting, not during it.
            </p>
            <p className="text-foreground leading-relaxed">
              For Malta clients with strict data residency, the entire pipeline is provisioned in EU regions — Snowflake on AWS Frankfurt, BigQuery in europe-west1, and orchestration on EU-region compute. We never ship customer PII through a US-region intermediate. Where the warehouse needs to feed back into the product (recommendation models, churn scores, AI feature stores), we build the reverse-ETL leg into Postgres or MongoDB so the application reads a single authoritative store.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Backups, Disaster Recovery, and the Restore Drill</h2>
            <p className="text-foreground leading-relaxed">
              Backups that have never been restored are not backups. Every database we operate is tested against its own restore plan once per quarter, with a written record of restore time and any drift discovered during the drill. Disaster-recovery topology is documented in the client&apos;s repository alongside the runbook and rehearsed annually with the client&apos;s engineering team so the playbook is muscle memory rather than a PDF nobody opens. Encryption-at-rest, encryption-in-transit, and key rotation policies are aligned to GDPR Article 32 and documented for procurement reviews.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing</h2>
            <p className="text-muted-foreground mb-6">Four transparent tiers. No setup fees, no annual lock-in.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
            <TrustBlock variant="visit" />
          </section>
          <section className="mb-8 p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
            <h2 className="text-xl font-bold mb-3">Database engineering vs AI data analyst — which problem are you solving?</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Database architecture and data engineering solve the <em>storage, movement, and retrieval</em> problem: how data is structured, how queries run at scale, how the schema evolves cleanly, and how operational data lands cleanly in the warehouse. It is engineering work that happens once — well — and then stays invisible. <strong className="text-foreground">AI data analysis</strong> solves the <em>insight</em> problem: extracting patterns, building dashboards, and answering business questions from data that is already stored and modelled.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              You need good database design first — a poorly structured schema produces ambiguous, unreliable analysis regardless of how sophisticated the analytics layer is. The OARC <strong className="text-foreground">AI Data Analyst</strong> is deployed after the schema is solid and the ETL is running, not instead of fixing them.
            </p>
            <Link href="/services/ai-data-analyst" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm" data-testid="link-ai-data-analyst">
              AI Data Analyst — extract insights from a well-designed schema <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Real-Time, Event Sourcing, and Change Data Capture</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Not every Malta SaaS needs event sourcing — but for the products that do, retrofitting it after the fact is a multi-month rewrite. The trigger conditions are specific: a product that needs a complete audit trail of every state change (MFSA-regulated fintech, MGA-licensed iGaming back-office, legal workflow tools), a system where multiple services need to react to the same business event without tight coupling, or a product whose reporting requires point-in-time replay of any user&apos;s account history. When one of those conditions applies we say so in the architecture doc and design the event model from week one.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The practical implementation uses Postgres as the event store (a single append-only events table with JSONB payload, aggregate_id, event_type, and version columns), with projections maintained as materialised views or in a separate read model. For teams already running Kafka or AWS EventBridge we wire the event stream there; for teams who do not need the operational overhead of a broker we use Postgres LISTEN/NOTIFY for low-latency internal events and defer the broker decision until volume justifies it. Change Data Capture with Debezium or Airbyte extracts the event stream into the warehouse for historical replay without touching the application code.
            </p>
            <p className="text-foreground leading-relaxed">
              Real-time features — live dashboards, collaborative editing, presence indicators, instant notification delivery — sit on a different pattern: Postgres logical replication feeding Supabase Realtime or a managed WebSocket layer (Ably, Pusher, or a custom Socket.io cluster), with the database as the source of truth and the WebSocket layer as the delivery mechanism. We choose between the two based on whether the client needs the broadcast guarantee of a message broker or the simpler latency characteristics of a database change stream.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">When NoSQL Is the Right Answer — and When It Is Not</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The decision between PostgreSQL and MongoDB is often made by whoever wrote the last line of code rather than by the access pattern. We impose a documented decision framework on every new system we architect.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              MongoDB earns its place in three situations: the document shape genuinely varies per record in ways that make a relational schema awkward (a CMS content model where different page types have entirely different field sets, a product catalogue with fifty different attribute schemas across category types, a user-generated form builder where each form is its own schema); a write-heavy ingestion workload where horizontal sharding across commodity nodes is cheaper than vertical scaling of a single Postgres instance; or an existing team with deep Mongo expertise and a product timeline too short to justify a skills transfer. Outside those three situations, Postgres wins — the query planner, the join performance, the transaction guarantees, the extension ecosystem (pgvector, TimescaleDB, PostGIS), and the row-level security for multi-tenant isolation are all better, and the operational complexity of a managed Postgres instance (Neon, Supabase, RDS) is now comparable to managed MongoDB Atlas.
            </p>
            <p className="text-foreground leading-relaxed">
              For Malta iGaming and fintech products, the compliance requirement almost always resolves the debate: financial events, player session records, and wallet transaction logs must be stored with ACID guarantees and auditable history. A document store does not provide the transaction semantics that a regulatory audit requires. Every Malta MGA or MFSA client we have worked with has Postgres as the core operational store, regardless of whether they also use MongoDB for a specific secondary workload.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Connection Pooling, Caching, and Scaling Without Over-Engineering</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The most common performance intervention we make on live Malta SaaS products is not schema design — it is connection management. A Next.js or Node application running on Vercel or similar serverless infrastructure opens a new database connection per function invocation. A busy product with 500 concurrent users hitting serverless endpoints can open 500 simultaneous Postgres connections; Postgres&apos;s default connection limit is 100. The application falls over, not because the database is slow but because it is exhausted of connections. The fix is PgBouncer in transaction mode as a connection pooler sitting between the application and the database — Neon and Supabase both provision this automatically, but the application code must be configured to connect through the pooler URL rather than directly.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Caching earns its place in one of two positions: at the query level using Redis or Upstash (for data that changes infrequently — plan features, pricing config, lookup tables — and is read on every request), and at the application level for aggregations that are expensive to recompute on every page load (a leaderboard, a monthly report totals row, a user&apos;s subscription status derived from multiple tables). We resist adding caching before it is needed because every cache adds a consistency surface — a cache that serves stale data after a mutation is a silent bug that manifests in support tickets, not in error logs. Our default is to add caching where profiling shows it is needed, document the invalidation strategy, and test the invalidation path in the CI suite.
            </p>
            <p className="text-foreground leading-relaxed">
              Horizontal scaling of the database — sharding, partitioning, or moving to a distributed SQL layer — is a decision we push as late as possible because the cost is real (operational complexity, distributed transaction overhead, cross-shard query limitations) and most Malta SaaS products do not reach the scale that justifies it in the first three years. Vertical scaling of a managed Postgres instance is linear and cheap up to roughly 64 cores and 256 GB RAM; most products hit product-market-fit problems long before they hit database infrastructure limits. We document the scaling ceiling of the chosen architecture during discovery and flag when a product is approaching it — so the decision is made with time to plan rather than under incident conditions.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Working with the OARC Data Team</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Data engineering engagements with OARC run in one of three models depending on where the client is in their product lifecycle.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Greenfield schema design:</strong> For a new product being built from scratch, we join the engineering team at the architecture phase — before any application code is written — and deliver a schema diagram, a written domain model, an initial Drizzle or Prisma migration, and a query performance plan. The engagement is typically two weeks and is priced as a fixed-fee deliverable. If OARC is building the full application, this work is included.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Schema rescue and optimisation:</strong> For a live product whose database has performance problems, migration anxiety, or an audit looming, we run a structured review: full schema audit, pg_stat_statements analysis, index coverage report, and a written remediation plan with risk-ranked recommendations. Execution of the remediation is scoped per item — clients choose which items to action immediately and which to defer. Most rescues pay for themselves in reduced infrastructure costs within ninety days.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Ongoing fractional data engineering:</strong> For products past product-market fit with a growing analytics function, a fractional data engineer embedded in the team — attending sprint planning, reviewing every schema migration before it ships, and evolving the warehouse models as the product changes — is the most cost-effective way to keep the data layer healthy without a full-time hire. Engagements run month-to-month with a two-week notice period; the retainer has to keep earning its place.
            </p>
            <p className="text-foreground leading-relaxed">
              All three models deliver the same documentation standard: an Entity Relationship Diagram kept current in the client&apos;s repository, architecture decision records for every major structural choice, and a migration log that shows every schema change, who approved it, when it ran, and what the rollback plan was. That documentation is not overhead — it is the asset that prevents the next team from repeating the last team&apos;s mistakes.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Soft Deletes, Audit Logs, and the Historical Record</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The distinction between what a database stores and what it must be able to prove it once stored is the central tension in compliant database design. Designing for both from the outset is significantly cheaper than retrofitting audit capability onto a database that was designed purely for application reads and writes.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              For Malta businesses operating under GDPR or sector-specific regulations, the historical database record is not optional — it is a compliance requirement. The database design must support both the right to erasure (Article 17 GDPR, which requires pseudonymisation or deletion of personal data on request) and the audit retention requirement (which requires the mutation history to be preserved). These two requirements appear to conflict, but are reconciled by separating the personal data columns from the audit log: the audit log records that a row changed, not the personal values that changed, so a GDPR erasure request can be fulfilled by zeroing the personal columns without destroying the audit trail of when and by whom the record was modified.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Hard deletes — a DELETE statement that removes a row permanently — are appropriate for truly disposable data: session tokens, temporary job queue entries, cached records. For business data (customers, orders, subscriptions, invoices), hard deletes are almost always the wrong choice. A customer who cancels their subscription is not a row to be deleted; they are a historical record whose cancellation reason, lifetime value, and final subscription state may be needed for churn analysis, regulatory audit, or reactivation in six months. We implement soft deletes using a deleted_at timestamp column: a row with deleted_at IS NOT NULL is logically deleted, filtered out of all application queries via a query builder default scope, but retained in the database and queryable for administrative and analytical purposes.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              For regulated Malta products (fintech, iGaming, healthcare), an audit log table records every mutation to business-critical tables: which row changed, which columns changed, what the before and after values were, which user made the change, and at what timestamp. The audit log is append-only — no application role has DELETE permission on the audit_log table — and is stored in a separate Postgres schema with its own backup schedule and a retention period set to match the regulatory requirement (seven years for MiFID II financial records, five years for MGA player records). The audit log is implemented using Postgres triggers rather than application-layer hooks so that mutations from database admin tools and migration scripts are captured alongside application mutations.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Schema Naming Conventions and the Documentation Contract</h2>
            <p className="text-foreground leading-relaxed mb-4">
              A database schema without naming conventions is a schema that accumulates inconsistency over time: some tables use snake_case, others use camelCase imported from an ORM default, some foreign keys are named user_id, others are userId, and a column called status in one table means something entirely different from a column called status in another. Three years in, new engineers spend the first week just decoding what the schema means rather than building features, and queries are written incorrectly because the column name does not communicate its meaning clearly enough to avoid ambiguity.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              OARC schemas follow a consistent convention documented in the architecture decision record: all identifiers in snake_case; table names in plural (users, events, subscriptions); primary keys always named id with UUID type; foreign keys named [referenced_table_singular]_id (user_id, subscription_id, tenant_id); boolean columns prefixed with is_ or has_ (is_active, has_verified_email); timestamp columns suffixed with _at (created_at, updated_at, deleted_at); enum-like status columns use a Postgres enum type rather than an unconstrained text column, with the enum values documented in the schema file. These conventions are enforced via a custom Drizzle lint rule checked in the CI pipeline — a column named userID or status without a corresponding enum type fails the lint step before it reaches the migration stage.
            </p>
            <p className="text-foreground leading-relaxed">
              Every table has a code comment block at the definition point explaining its business purpose, the lifecycle of a row (when rows are created, updated, and whether soft-delete is used), the cardinality of its relationships to adjacent tables, and any non-obvious constraints or business rules enforced at the database level. This is the schema as documentation: a new engineer should be able to read the schema file and understand the business model without asking anyone. We treat the schema comment block as a first-class deliverable, reviewed alongside the SQL in every pull request, and updated whenever the business logic the table represents changes.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Backup Strategy, Point-in-Time Recovery, and the Recovery Time Objective</h2>
            <p className="text-foreground leading-relaxed mb-4">
              A database backup that has never been tested is not a backup — it is a file that might be a backup. Every OARC database engagement includes a documented backup strategy with a tested recovery procedure: the Recovery Point Objective (RPO, the maximum data loss acceptable if the database is destroyed) and the Recovery Time Objective (RTO, the maximum time acceptable to restore service) are defined at project start and the backup configuration is validated against them. For a Malta fintech product under MFSA supervision, the RPO is typically one hour and the RTO is four hours — achievable with continuous WAL archiving and a documented runbook that a junior engineer can execute without senior intervention.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Neon provides continuous branching and point-in-time restore back to any second in the last 30 days on paid plans; Supabase provides daily PITR back to a configurable retention window. For self-hosted Postgres on Hetzner or DigitalOcean, we configure WAL-G with a remote destination (Hetzner Object Storage or AWS S3 EU-West) for continuous WAL archiving, producing a rolling PITR window with an RPO measured in seconds rather than hours. The base backup runs daily; the WAL files are shipped continuously; a restore to any point requires the most recent base backup plus the WAL files from that base backup to the target recovery time.
            </p>
            <p className="text-foreground leading-relaxed">
              The recovery procedure is documented in the runbook and tested quarterly: we provision a fresh Postgres instance, restore the most recent backup, apply WAL to a specific point in time, verify the row count and data integrity against the production snapshot, and document the actual recovery time. For every OARC client on a managed engineering retainer, the quarterly restore test result — timestamp of the backup used, timestamp of the target recovery point, actual recovery time, data integrity verification outcome — is included in the quarterly infrastructure report. A backup that takes 45 minutes to restore when the runbook says 30 minutes is a finding that triggers a configuration review before it becomes a production incident.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Index Design: The Difference Between a Fast Query and a Slow One</h2>
            <p className="text-foreground leading-relaxed mb-4">
              An unindexed foreign key is the most common performance problem in Malta SaaS applications we inherit. The pattern is consistent: the application is built with Drizzle or Prisma, the ORM generates the schema, foreign key columns are defined correctly, but no indexes are created on the foreign key columns — only on the primary key. A query that joins the orders table to the customers table on customer_id performs a sequential scan of the orders table if customer_id is not indexed, reading every row to find the matching orders. At 10,000 orders this is slow; at 1 million orders it causes user-visible timeouts on the customer order history page.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              We add indexes on every foreign key column as a minimum. Beyond that, the index design is driven by the query plan: we run EXPLAIN ANALYZE on the application&apos;s 20 most-executed queries (identified from the pg_stat_statements extension, enabled on every OARC-managed Postgres instance) and add composite indexes where the query plan shows a sequential scan on a large table with a filter that touches more than one column. A composite index on (tenant_id, created_at DESC) on the events table, for example, converts a full-table scan into a ten-millisecond index range scan for the typical &quot;show me the last 50 events for this tenant&quot; query that appears on every SaaS activity feed.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Partial indexes reduce index size and maintenance cost for common filter patterns. An events table that stores both &quot;processed&quot; and &quot;pending&quot; events, where the application only ever queries unprocessed events in its background worker, benefits from a partial index with a WHERE processed = false predicate — the index covers only the rows the application actually needs to scan, is an order of magnitude smaller than a full index on the status column, and is updated only when the processed flag changes rather than on every insert. We implement partial indexes wherever the query pattern justifies them, documented in the schema notes so the next engineer understands why the index has a WHERE clause.
            </p>
            <p className="text-foreground leading-relaxed">
              Index bloat is reviewed at the 90-day mark using the pgstattuple extension: indexes that are more than 30% bloated from UPDATE and DELETE churn are rebuilt with REINDEX CONCURRENTLY during a low-traffic window. Unused indexes — identified via pg_stat_user_indexes where idx_scan is zero after 30 days of production traffic — are candidates for removal; each unused index imposes a write overhead on every INSERT and UPDATE to the indexed table without providing any read benefit. The index review is included in the quarterly database health report delivered to clients on the ongoing engineering retainer.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Connection Pooling, PgBouncer, and the Cost of Naïve Connections</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Every Postgres connection is a separate operating system process on the database server, consuming approximately 5 to 10 MB of RAM at idle. A Malta SaaS product with 20 application server instances, each holding a pool of 10 connections to handle concurrent requests, presents 200 persistent connections to the database — which is fine on a large instance but exhausts the default connection limit on a Neon Free tier (100 connections) or an entry-level Supabase project (60 connections) the moment the product gets any real traffic. The application starts throwing &quot;too many connections&quot; errors at exactly the moment it should be handling its first surge of real users.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              PgBouncer, deployed as a connection pooler between the application servers and Postgres, multiplexes the application&apos;s logical connections over a smaller number of physical connections to the database. In transaction-mode pooling (the most aggressive setting), a physical connection is only held for the duration of a single transaction — between transactions, it is returned to the pool and available to other application connections. A product with 200 application connections may need only 20 to 30 physical connections to Postgres when the workload is primarily short transactions, which is the case for the overwhelming majority of Malta SaaS products (each API request reads or writes a handful of rows and commits immediately).
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Neon provides Pooler as a first-class feature on every project — the pooled connection string is available in the dashboard alongside the direct connection string, and we configure the application to use the pooled string for all application traffic and the direct string only for migration runs (which require session-mode features like advisory locks that are incompatible with transaction-mode pooling). Supabase provides Supavisor, their own connection pooler, on the same basis. For self-hosted Postgres on Hetzner or DigitalOcean, we deploy PgBouncer as a sidecar container alongside the application, configured in transaction mode with a pool size calculated from the database instance&apos;s connection limit minus headroom for monitoring tools and migration connections.
            </p>
            <p className="text-foreground leading-relaxed">
              The pooling configuration is documented in the architecture document alongside the reasoning for the pool size: the formula is (database max_connections - 10 for system use) divided by the number of environments pointing at the database (production, staging, CI), rounded down to the nearest 10. The pool size is reviewed at 90 days when real traffic patterns are established and adjusted if the pool utilisation metrics (available through PgBouncer&apos;s stats table) show the pool regularly saturated or chronically underutilised.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Reporting Schemas, Analytics, and the Separation of OLTP and OLAP</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The operational database (OLTP — Online Transaction Processing) is optimised for writes: normalised schema, short transactions, row-level locking, indexes on the columns that appear in WHERE clauses of the application&apos;s read queries. The analytics database (OLAP — Online Analytical Processing) is optimised for reads: denormalised or star-schema structure, columnar storage, and queries that scan millions of rows to produce aggregate metrics. Running heavy analytics queries against the OLTP database is the most common cause of production latency spikes we diagnose on Malta SaaS products that have started to grow — a 30-second report query that acquires shared locks on the transactions table while the application is trying to insert new transactions produces a queue of blocked writes that the end user experiences as a slow checkout.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              For early-stage Malta SaaS products, the analytics workload is handled by a read replica of the OLTP database — the replica receives WAL-based replication from the primary and the analytics queries run there, isolated from the write path. The read replica adds a few seconds of replication lag but does not share the primary&apos;s lock manager, so a long-running aggregate query cannot block application writes. Neon and Supabase both provision read replicas with one checkbox in the dashboard; the application connection string for analytics endpoints points at the replica URL rather than the primary.
            </p>
            <p className="text-foreground leading-relaxed">
              For products that outgrow read-replica analytics — typically at the point where the analyst team is running queries that take minutes, where historical data volume exceeds 100 GB, or where the reporting tool needs sub-second query response on aggregations across tens of millions of rows — we introduce a dedicated analytics store: Clickhouse (self-hosted on Hetzner EU for cost efficiency) or BigQuery (for teams already in the Google Cloud ecosystem). Event data is streamed from the OLTP database to the analytics store via a change-data-capture pipeline (Debezium for Postgres, native Neon CDC for Neon databases) and is queryable in the analytics store within seconds of being written to production. The OLTP database never runs a reporting query again.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Row-Level Security, Multi-Tenancy, and Data Isolation</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Multi-tenant SaaS products face a specific database security requirement: a query from tenant A must never return data belonging to tenant B, even if a bug in the application layer passes the wrong tenant ID in a filter. Application-layer tenant filtering is not sufficient on its own — it is a soft control, and a missed WHERE clause in one query path is a data breach. For Malta SaaS products handling personal data under GDPR, the consequence of a cross-tenant data leak is regulatory, not just reputational.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              We implement tenant isolation using Postgres Row Level Security (RLS) for products on Supabase, where RLS is the platform&apos;s native isolation mechanism. Every table in the schema has an RLS policy that restricts SELECT, INSERT, UPDATE, and DELETE to rows where the tenant_id column matches the current_setting(&apos;app.current_tenant_id&apos;) context variable set at the start of each database session. The application layer sets the context variable immediately after opening a connection, before any query runs. A query that omits the WHERE clause still returns only the current tenant&apos;s rows — the database enforces the isolation regardless of the application code path that reached it.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              For products on Neon or other Postgres hosts where RLS is not the primary isolation mechanism, we implement schema-level isolation (each tenant gets a dedicated Postgres schema, and the application connects using a role that has USAGE only on the current tenant&apos;s schema) or application-layer isolation with mandatory middleware enforcement (every route handler that touches the database passes through a middleware that injects the tenant ID into a Zod-validated query builder that cannot produce a query without a tenant_id predicate). The choice between approaches depends on the tenant count, the data sensitivity, and the query complexity — documented in the architecture decision record.
            </p>
            <p className="text-foreground leading-relaxed">
              For Malta iGaming and fintech products under MGA or MFSA supervision, the data isolation architecture is reviewed during the technical compliance audit. We produce a written isolation architecture document — the data flow diagram, the RLS policy definitions, the connection pool configuration, and the penetration test results for cross-tenant isolation — in a format suitable for submission to the regulatory body&apos;s technical reviewer. This document is produced as a standard deliverable on regulated-product engagements, not as an optional add-on.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Migration Safety: Zero-Downtime Schema Changes at Scale</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The migration strategy used in a development environment — run the migration, restart the app, move on — does not translate safely to a production database under live traffic. An ALTER TABLE that adds a not-null column without a default will lock the entire table for the duration of the operation on Postgres before version 11; on Postgres 12 and above it is safer, but still requires an ACCESS EXCLUSIVE lock that blocks all reads and writes for the lock acquisition time. For a table with 10 million rows on a busy Malta fintech platform, that lock acquisition can take 30 to 90 seconds — during which every request that touches the table times out.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              We implement zero-downtime migrations using the expand-contract pattern: the schema is expanded (new column added as nullable, old column left in place), the application code is deployed to write to both columns simultaneously, existing rows are backfilled in batches of 1,000 with a 50ms sleep between batches to avoid saturating the primary, the not-null constraint is then added using an ADD CONSTRAINT VALIDATE=false path (which validates without a table lock), and the old column is dropped only after the constraint is confirmed valid and the application code no longer reads from it. The entire sequence is a series of small, safe migrations rather than one large, risky one.
            </p>
            <p className="text-foreground leading-relaxed">
              For Malta products on Neon or Supabase, we use the platform&apos;s branching feature to test migrations against a copy of production data before the migration runs on production. The branch is created from the production snapshot, the migration is run, the application is deployed to a preview environment pointing at the branch, and the behaviour is verified before the migration is applied to production. This eliminates the class of migrations that work correctly on the seed data but fail on production data — usually because a constraint assumption made during development is violated by a real-world edge case in the production dataset that nobody thought to include in the seed.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Seeding, Test Data, and the Development Workflow</h2>
            <p className="text-foreground leading-relaxed mb-4">
              A schema without a seed script is a schema that engineers refuse to set up locally, which means they develop against shared staging environments, which means shared staging breaks constantly. Every OARC-designed schema ships with a deterministic seed script that creates a representative dataset: at least ten tenants with varying subscription plans and usage levels, customer records across all lifecycle states (trial, active, past_due, cancelled), a range of historical events covering the full date range the reporting queries need, and edge-case records that have previously caused bugs in production (null parent references, zero-value amounts, records created at the boundary between plan tiers). The seed runs in under thirty seconds on a cold Postgres instance and produces the same data on every run so test failures are reproducible.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Test data strategy matters more as the product matures. A young product with twenty customers can afford a small seed. A product with five thousand customers whose engineers are running queries against production for debugging — because staging does not have representative data — has a compliance problem (GDPR prohibits using production personal data in development without specific consent) and a quality problem (bugs that only manifest at scale are not caught before they reach production). We define the test data strategy in the architecture document, implement it in the seed script, and include a data-anonymisation export from production for engineering teams that need production-representative cardinalities without the personal data.
            </p>
            <p className="text-foreground leading-relaxed">
              For CI test suites, we provision a separate Postgres instance per test run using Neon&apos;s branch API or Supabase&apos;s branching feature — each test run gets a fresh database created from the seed script in under five seconds, the tests run in parallel without state leaking between test files, and the branch is deleted after the run. The CI database cost for this approach is typically under €15 per month for a product with a comprehensive test suite running on every pull request. The alternative — shared test database with fixture cleanup — produces flaky tests that lose the team&apos;s trust within three months and get disabled rather than fixed.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Pricing</h2>
            <p className="text-muted-foreground mb-6">Four transparent tiers. No setup fees, no lock-in.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Naming Conventions, Documentation Standards, and the Schema as Communication</h2>
            <p className="text-foreground leading-relaxed mb-4">
              A schema is not just a technical specification — it is a communication document read by engineers, product managers, analysts, and auditors. A schema where table names are inconsistently cased, foreign key column names do not match the tables they reference, and column names abbreviate inconsistently (usr_id in one table, user_id in another, uid in a third) is a liability even if it is technically correct. Every query written against it requires the author to look up the inconsistency rather than infer it. Every ERD generated from it is confusing rather than clarifying.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Our naming standard for Postgres schemas (the default for OARC-designed systems) uses snake_case throughout with no abbreviations unless the abbreviation is the industry standard term (e.g. iban, vat, mcc for merchant category code). Tables are named as plurals of the domain entity they represent — users, organisations, subscriptions, transactions — because SQL reads naturally as "select from users". Junction tables are named as combination of the two entities they join (user_organisation_memberships, not organisation_users or user_orgs). Boolean columns are prefixed with is_ or has_ so the column name reads as a question: is_active, has_consented, is_deleted. Timestamp columns are suffixed with _at: created_at, updated_at, deleted_at. The standard is documented in a one-page SCHEMA_CONVENTIONS.md file at the root of the repository so every engineer working on the system applies the same rules from day one.
            </p>
            <p className="text-foreground leading-relaxed">
              Column-level comments are added for any column whose purpose is not immediately obvious from the name: enum meanings, foreign-key semantics that deviate from the table name, business rules enforced at the database level. The Drizzle or Prisma schema file is treated as the canonical source of these comments, not the database introspection output, because the ORM file is reviewed in pull requests and the introspection output is not. Schema comments survive a pg_dump and are visible in tools like TablePlus, DBeaver, and the Supabase Table Editor — which means the analyst querying the database for a report and the backend engineer adding a feature are both working from the same documented understanding of what each column means.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The Database Review Deliverable: What You Get</h2>
            <p className="text-foreground leading-relaxed mb-4">
              A database review from OARC delivers four written artefacts, not a verbal briefing or a slide deck. The first is a <strong className="text-foreground">schema audit document</strong>: every table, its column count, its estimated row count from pg_stat_user_tables, the normalisation violations we found, the missing constraints (foreign keys referencing nothing, nullable columns that should not be nullable, columns that should be unique but are not), and a risk-ranked remediation list. Each item in the list is flagged as safe to apply with a migration script, requires a dual-write window, or requires a data backfill before the constraint can be added.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The second artefact is a <strong className="text-foreground">query performance report</strong>: the twenty slowest queries from pg_stat_statements over the review period, their execution plans, the indexes that are being used or bypassed, and specific index additions or query rewrites for each. The report distinguishes between queries that are slow because of missing indexes (fix: add an index, test in staging, deploy) and queries that are slow because the data model requires a full-table scan (fix: schema change, which requires a migration plan). The distinction matters because the fix complexity differs by an order of magnitude.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The third artefact is a <strong className="text-foreground">migration risk register</strong>: every schema change that could cause downtime if run naively, with a recommended zero-downtime execution plan for each. Adding a not-null column, removing an enum value, renaming a table, backfilling a new column from an existing one — each has a specific playbook that avoids locking the table during the operation. For a production system serving Malta customers during business hours, a five-minute lock on a high-write table is unacceptable; the migration plan accounts for that from the start.
            </p>
            <p className="text-foreground leading-relaxed">
              The fourth artefact is a <strong className="text-foreground">forward architecture document</strong>: given where the product is today and where the founder says it is going in the next twelve months, what schema and infrastructure decisions should be made now, what should be deferred, and what would need to change if a specific growth scenario materialises. This is not a prediction — it is a scenario map that lets the engineering team make informed decisions rather than reactionary ones. Clients typically refer to this document in sprint planning for the following six months.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">pgvector, TimescaleDB, and PostGIS — When Extensions Earn Their Place</h2>
            <p className="text-foreground leading-relaxed mb-4">
              PostgreSQL&apos;s extension ecosystem turns a single managed Postgres instance into a specialist database for several workload classes that would otherwise require a separate specialised system. Three extensions earn their place in Malta product stacks with enough frequency that we design for them from the start.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-foreground">pgvector</strong> adds a native vector column type and approximate nearest-neighbour search directly in Postgres. For SaaS products with an AI search or recommendation feature, pgvector means the vector index lives in the same database as the operational data — no Pinecone subscription, no eventual-consistency latency between the source record and its embedding, and no ETL pipeline to keep the vector store in sync. We design the embedding model selection, chunking strategy, and HNSW index parameters during architecture phase rather than after the feature is shipped. Neon and Supabase both support pgvector with no additional configuration.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-foreground">TimescaleDB</strong> adds time-series optimisations — automatic partitioning by time range, continuous aggregates, and data-retention policies — on top of standard Postgres. For Malta fintech platforms tracking account balance history, for iGaming back-offices recording player session and spin data, and for SaaS products with a time-series metrics dashboard, TimescaleDB stores the data in partitions that are automatically compressed and tiered to cheap storage after a configurable retention window. A twelve-month balance history table that would cause query timeouts in standard Postgres typically returns in milliseconds through a TimescaleDB continuous aggregate.
            </p>
            <p className="text-foreground leading-relaxed">
              <strong className="text-foreground">PostGIS</strong> adds geographic types, spatial indexes, and geometry functions to Postgres. For Malta real-estate platforms that need radius search around a location, for hospitality systems that map properties to their nearest beach or amenity, and for any logistics or delivery product serving the Maltese islands, PostGIS removes the need for a separate geospatial service. Distance queries, polygon containment, and route proximity are all first-class SQL operations with proper index support. The Maltese island geography — two main islands, five inhabited islands, one ferry terminal that counts as an address — has specific edge cases in Malta-standard coordinate systems that we document in the schema so future engineers do not re-discover them.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">High-Availability Topology and Read-Replica Strategy</h2>
            <p className="text-foreground leading-relaxed mb-4">
              A production database for a Malta SaaS product should survive one availability zone failure without human intervention. That means a primary with a synchronous standby (or a Neon/Supabase managed cluster that handles this transparently) and a documented failover time. For products where the RTO (recovery time objective) is under two minutes, we configure automatic failover; for products where the RPO (recovery point objective) is under one second, we configure synchronous replication rather than async. The distinction matters when the product handles financial events that must not be lost.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Read replicas earn their place when the read:write ratio exceeds roughly 10:1 and the primary is showing CPU pressure during reporting queries or dashboard loads. The wrong time to add a read replica is in response to a P1 incident — by then the application code needs to be aware of replica lag, the connection pooler needs to route reads to the replica, and the session-based operations (anything that checks the session immediately after writing to it) need primary-read overrides. We design the read-replica topology into the ORM configuration and the connection pooler setup from the beginning so adding a replica is a one-line config change rather than a two-week refactor.
            </p>
            <p className="text-foreground leading-relaxed">
              For products that genuinely need multi-region active-active (typically: a Malta product expanding to Singapore or the US with strict latency requirements), we document the architectural trade-offs of CockroachDB versus Postgres with pgEdge versus a two-region active-passive Neon configuration before recommending a path. Active-active across regions is a complexity tax paid in engineering time, operational overhead, and distributed transaction latency; the business case must justify it clearly before we recommend it. Most Malta products in the first three years of operation do not need it — and the ones that do typically discover the requirement from real user behaviour data, not from an architecture diagram written before launch.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Malta iGaming and Fintech — Schema Patterns We Have Shipped</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Malta hosts roughly 300 MGA-licensed iGaming operators and a growing cluster of MFSA-supervised fintechs and crypto-asset service providers. The data models for these regulated verticals have specific requirements that a generalist database consultant will miss and that we have shipped multiple times.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              For iGaming back-office systems, the critical patterns are: an immutable wallet-transaction ledger using an append-only insert model with a periodic balance materialisation; a player-session model that records every game round, spin, or hand as a separate event linked to the session and the round provider; responsible-gaming limit tables (deposit limits, session limits, loss limits, cool-off flags) with a soft-delete pattern that preserves the audit history of every limit change; and a bonus-engine schema that separates the bonus definition from the bonus award from the wagering-requirement progress tracking, each as a separate table, so disputes can be reconstructed from data rather than from memory.
            </p>
            <p className="text-foreground leading-relaxed">
              For MFSA-supervised fintechs, the equivalent critical patterns are: a double-entry accounting ledger built on Postgres with debit and credit as signed integers and constraint enforcement at the database layer (no application-level balance checks, ever); a transaction-state machine modelled as an enum column with a separate audit table recording every state transition with timestamp, actor, and reason; AML-flag and PEP-screening result storage as a separate table linked to the customer record, not as columns on the customer table (the schema must survive re-screening without data loss); and a data-residency enforcement pattern using Postgres tablespaces and schema-level permissions so EU customer data and non-EU customer data are stored in separate physical locations from the first migration.
            </p>
          </section>
          <RelatedServices slug="/services/database-design" />
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Schema or Pipeline Bothering You?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">Bring us your current ER diagram, Prisma file, or dbt project — we will tell you in two hours whether it scales, and what to do about it if not.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold" data-testid="button-book-review-cta">Book the review <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
