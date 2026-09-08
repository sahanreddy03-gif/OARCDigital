import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/layout/Layout";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates } from "@/lib/seo/discoveryTags";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
import TomDigitalTwin from "./TomDigitalTwin";
import { tomBriefPages, type TomBriefPage } from "./tom-v2-data";

const pageBySlug = Object.fromEntries(tomBriefPages.map((page) => [page.slug, page]));

type TomBlock = TomBriefPage["blocks"][number];

function getBlock(page: TomBriefPage, number: number) {
  return page.blocks.find((block) => block.number === number);
}

function getField(block: TomBlock | undefined, key: string) {
  return ((block?.fields ?? {}) as Record<string, string>)[key] ?? "";
}

function parseButtons(value: string) {
  return [...value.matchAll(/\[([^\]]+)\]/g)].map((match) => match[1]);
}

function splitValueLine(value: string) {
  const match = value.match(/^(.+?)\.\s+(So .+)$/);
  return match ? { body: `${match[1]}.`, value: match[2] } : { body: value, value: "" };
}

function parseSimulation(caption: string) {
  const leftMarker = caption.indexOf("Left panel —");
  const rightMarker = caption.indexOf(" Right panel —");
  if (leftMarker === -1 || rightMarker === -1) {
    return { voice: [], work: [], note: caption };
  }

  const left = caption.slice(leftMarker, rightMarker).replace(/^Left panel —[^>]+>\s*/, "");
  const right = caption.slice(rightMarker).replace(/^ Right panel —[^>]+>\s*/, "");
  return {
    voice: left.split(/\s+>\s+/).map((line) => line.trim()).filter(Boolean),
    work: right.split(/\s+>\s+/).map((line) => line.trim()).filter(Boolean),
    note: caption.slice(0, leftMarker).replace(/[. ]+$/, "").trim(),
  };
}

export function generateStaticParams() {
  return tomBriefPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const page = pageBySlug[(await params).slug] ?? tomBriefPages[0];
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: getHreflangAlternates(`/tom/${page.slug}`),
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://oarcdigital.com/tom/${page.slug}`,
      type: "website",
      images: ogImageEntry({ title: page.metaTitle, subtitle: page.metaDescription }),
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [ogImageUrl({ title: page.metaTitle, subtitle: page.metaDescription })],
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const page = pageBySlug[(await params).slug];
  if (!page) notFound();

  const hero = getBlock(page, 1);
  const missed = getBlock(page, 2);
  const handles = getBlock(page, 3);
  const moment = getBlock(page, 4);
  const trace = getBlock(page, 5);
  const team = getBlock(page, 6);
  const limits = getBlock(page, 7);
  const force = getBlock(page, 8);
  const close = getBlock(page, 9);
  const heroButtons = parseButtons(getField(hero, "buttons"));
  const closeButtons = parseButtons(getField(close, "buttons"));
  const simulation = parseSimulation(getField(moment, "caption above"));
  const valueItems = handles?.list.map((item) => splitValueLine(item.body)) ?? [];
  const agentStations = force?.list.map((agent) => agent.name) ?? [];

  return (
    <Layout navTheme="dark" showMobileNav>
      <RouteSchema
        type="service"
        path={`/tom/${page.slug}`}
        title={page.metaTitle}
        description={page.metaDescription}
        serviceType="Managed AI workforce"
        audience={[page.name]}
      />
      <main className="tom-page">
        <section className="tom-industry-hero">
          <div className="tom-industry-hero-art" aria-hidden="true">
            <TomDigitalTwin
              room={page.name}
              stations={agentStations}
              focus="LIVE WORKFLOW"
            />
          </div>
          <div className="tom-wrap">
            <p className="tom-kicker" style={{ color: "#8fd6ae" }}>{getField(hero, "kicker")}</p>
            <h1 className="tom-display">{getField(hero, "headline")}</h1>
            <p className="tom-lead">{getField(hero, "lead")}</p>
            <div className="tom-actions">
              <Link className="tom-button tom-button--red" href="/tom/start">
                {heroButtons[0] ?? "Give him one job"} ↗
              </Link>
              <a className="tom-button" href="#moment">
                {heroButtons[1] ?? "See him work"} ↓
              </a>
            </div>
          </div>
        </section>

        <section className="tom-missed">
          <div className="tom-wrap">
            <p className="tom-kicker" style={{ color: "#f5f5f3" }}>{getField(missed, "kicker")}</p>
            <p>{getField(missed, "statement (display type)") || getField(missed, "body")}</p>
            <p className="tom-value-line">{getField(missed, "sub-line (mono)")}</p>
          </div>
        </section>

        <section className="tom-section">
          <div className="tom-wrap">
            <h2 className="tom-display">{getField(handles, "headline")}</h2>
            <p className="tom-copy">{getField(handles, "lead")}</p>
            <div className="tom-value-list">
              {valueItems.map((item) => (
                <article key={item.body}>
                  <p>{item.body}</p>
                  {item.value && <strong>{item.value}</strong>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tom-section tom-light" id="moment">
          <div className="tom-wrap">
            <h2 className="tom-display">{getField(moment, "headline")}</h2>
            <div className="tom-split">
              <div className="tom-panel">
                <h3>THE VOICE / WHAT THE CUSTOMER HEARS</h3>
                <div className="tom-log">
                  {simulation.voice.map((line) => <div key={line}>{line}</div>)}
                </div>
              </div>
              <div className="tom-panel">
                <h3>THE WORK / SAME SECOND / BEHIND</h3>
                <div className="tom-log">
                  {simulation.work.map((line) => <div key={line}>{line}</div>)}
                </div>
              </div>
            </div>
            <p className="tom-simulation-note">{getField(moment, "caption below") || simulation.note}</p>
          </div>
        </section>

        <section className="tom-section">
          <div className="tom-wrap">
            <h2 className="tom-display">{getField(trace, "headline")}</h2>
            <p className="tom-copy tom-copy--large">{getField(trace, "body")}</p>
            <p className="tom-value-line">{getField(trace, "value line (mono)")}</p>
          </div>
        </section>

        <section className="tom-section tom-light">
          <div className="tom-wrap">
            <h2 className="tom-display">{getField(team, "headline")}</h2>
            <p className="tom-copy">{getField(team, "body")}</p>
            <p className="tom-copy" style={{ marginTop: "2rem" }}>{getField(team, "body 2")}</p>
            <p className="tom-value-line">{getField(team, "value line (mono)")}</p>
          </div>
        </section>

        <section className="tom-section tom-limits">
          <div className="tom-wrap">
            <h2 className="tom-display">{getField(limits, "headline")}</h2>
            <p className="tom-copy">{getField(limits, "lead")}</p>
            <ul className="tom-list">
              {limits?.list.map((item) => <li key={item.body}>{item.body}</li>)}
            </ul>
          </div>
        </section>

        <section className="tom-section tom-force">
          <div className="tom-wrap">
            <p className="tom-kicker" style={{ color: "#8fd6ae" }}>{getField(force, "kicker")}</p>
            <h2 className="tom-display">{getField(force, "headline")}</h2>
            <div className="tom-card-grid">
              {force?.list.map((agent) => (
                <article className="tom-card" key={agent.name}>
                  <strong>AGENT / ACTIVE</strong>
                  <h3>{agent.name}</h3>
                  <p>{agent.body}</p>
                  {agent.value && <small>VALUE / {agent.value}</small>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tom-section">
          <div className="tom-wrap">
            <p className="tom-kicker">{getField(close, "kicker")}</p>
            <p className="tom-copy">{getField(close, "body")}</p>
            <p className="tom-display tom-punch">{getField(close, "punch (display type)")}</p>
            <h2 className="tom-display">{getField(close, "close headline")}</h2>
            <p className="tom-lead">{getField(close, "close lead")}</p>
            <div className="tom-actions">
              <Link className="tom-button tom-button--red" href="/tom/start">
                {closeButtons[0] ?? "Start with one problem"} ↗
              </Link>
              <Link className="tom-button" href="/tom">
                {closeButtons[1] ?? "See him in another industry"} ↓
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}