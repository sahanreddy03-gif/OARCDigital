import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CLIENT_CASE_STUDIES } from "@/lib/data/premium-work/clientCaseStudies";
import { getCaseFull, type FullCase, type FullPicture } from "@/lib/data/premium-work/caseFull";
import { getCaseProof, type CaseProof } from "@/lib/data/premium-work/caseProof";
import mediaFiles from "@/lib/data/premium-work/caseMedia.json";
import storyFiles from "@/lib/data/premium-work/caseStories.json";
import { bookingUrl, whatsappUrl } from "@/lib/utm";

type StoryBits = {
  name: string;
  title: string[];
  liveRecord?: { links: { label: string; url: string }[] };
};

type StorySection = { h: string; p: string[] };
type StoryFile = { title: string; sections: StorySection[] };
type MediaShot = { src: string; alt: string; frame?: FullPicture["frame"] };

const STORIES = storyFiles as Record<string, StoryFile>;
const MEDIA = mediaFiles as Record<string, MediaShot[]>;

function chaptersFor(slug: string): StorySection[] {
  if (slug === "tiffany") return [];
  const story = STORIES[slug];
  if (!story) return [];
  return story.sections.filter((section) => !/^(results|targets)$/i.test(section.h.trim()));
}

function RichText({ lines }: { lines: string[] }) {
  const nodes: ReactNode[] = [];
  let list: string[] = [];
  const flush = () => {
    if (list.length === 0) return;
    const items = list;
    list = [];
    nodes.push(
      <ul key={`list-${nodes.length}`}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>,
    );
  };
  for (const raw of lines) {
    // Story files are written in Markdown: keep link text, drop the link target.
    const line = raw.trim().replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");
    if (!line || line === "---") continue;
    const heading = line.match(/^#{1,6}\s+(.*)$/);
    if (heading) {
      flush();
      nodes.push(<h3 key={line}>{heading[1]}</h3>);
      continue;
    }
    const item = line.match(/^(?:\d+\.|[-•])\s+(.*)$/);
    if (item) {
      list.push(item[1]);
      continue;
    }
    flush();
    nodes.push(<p key={line}>{line}</p>);
  }
  flush();
  return <>{nodes}</>;
}

/** Words that keep their capital letter inside a sentence. */
const PROPER = /^(Google|Instagram|TikTok|Facebook|Meta|WhatsApp|Wolt|AI|OARC|PJAZZA)\b/;

/** "Google listing" stays, "Menu" becomes "menu", "We grew" becomes "we grew". */
function inSentence(text: string) {
  if (PROPER.test(text) || /^[A-Z]{2}/.test(text)) return text;
  return text.charAt(0).toLowerCase() + text.slice(1);
}

function joinList(items: string[]) {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

function questions(full: FullCase, proof: CaseProof) {
  const items = [...(full.faq ?? [])];
  if (items.length >= 3 || proof.results.length === 0) return items;
  const job = joinList(full.services.slice(0, 3).map(inSentence));
  const brand = proof.client.split(" - ").pop() ?? proof.client;
  items.push({
    q: `Can OARC Digital do the same for my business?`,
    a: `Yes. For ${brand} the work was ${job}, and ${inSentence(proof.results[0])} OARC Digital is in Birkirkara, Malta. Book a 20-minute call or send a WhatsApp message to start.`,
  });
  return items;
}

/**
 * Sort the claims into plain groups. Marketing work groups by what the reader
 * cares about (sales, reach, social, visits); apps and systems by what changed
 * for the team (time saved, fewer problems).
 */
const MARKETING_GROUPS: { label: string; test: RegExp }[] = [
  { label: "Bookings and sales", test: /booking|reservation|order|sales|sold|meals|calls|enquir|fans to|visitors to|people to the two shops|shoppers through|sellers|buyers to start|players back|return visits|came back|viewers back/i },
  { label: "Views and reach", test: /reach|views|viewers|watch|#1 on google/i },
  { label: "Social media", test: /follower|engagement|saves?\b|saved|share|vote|social|participation|interaction|stories/i },
  { label: "Visits", test: /visit|page|menu|taps|clicks|find|found|details/i },
];

const SYSTEM_GROUPS: { label: string; test: RegExp }[] = [
  { label: "Time saved", test: /faster|sooner|earlier|time|hours|minutes|half the time|twice as fast|3 times/i },
  { label: "Fewer problems", test: /\bcut\b|fewer|lost|error|delay|repeat|wasted|sent back|asking what happens/i },
];

function resultGroups(results: string[], system: boolean) {
  const rules = system ? SYSTEM_GROUPS : MARKETING_GROUPS;
  const groups = rules.map((rule) => ({ label: rule.label, lines: [] as string[] }));
  const rest: string[] = [];
  for (const line of results) {
    const index = rules.findIndex((rule) => rule.test.test(line));
    if (index >= 0) groups[index].lines.push(line);
    else rest.push(line);
  }
  if (rest.length > 0) groups.push({ label: system ? "Better results" : "More results", lines: rest });
  return groups.filter((group) => group.lines.length > 0);
}

/** Cases where OARC built an app or a system for the team. */
const SYSTEM_CASES = new Set([
  "data-foundation",
  "live-context",
  "meridian-retail-response",
  "cobalt-decision-thread",
  "skyline-first-response",
  "vela-signal-pipeline",
  "wellbridge-clear-path",
  "aurum-document-trail",
  "hearth-test-kitchen",
  "bluebridge-candidate-welcome",
  "northforge-adoption-ladder",
  "belgrave-client-time",
  "crownline-fresh-signal",
  "botanic-muse-field-notes",
]);

function frameClass(frame?: FullPicture["frame"]) {
  if (frame === "poster") return "cs-bleed cs-bleed-poster";
  if (frame === "feed") return "cs-bleed cs-bleed-feed";
  if (frame === "banner") return "cs-bleed cs-bleed-banner";
  return "cs-bleed";
}

function Bleed({ picture, eager = false }: { picture: FullPicture; eager?: boolean }) {
  return (
    <figure className={frameClass(picture.frame)}>
      <img
        src={picture.src}
        alt={picture.alt}
        decoding="async"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
      />
    </figure>
  );
}

export default function CaseStudyFull({ slug, story }: { slug: string; story: StoryBits }) {
  const full = getCaseFull(slug);
  const proof = getCaseProof(slug);
  if (!full || !proof) return null;

  const links = (story.liveRecord?.links ?? []).filter((link) => /^https?:/.test(link.url));
  const chapters = chaptersFor(slug);
  const library = MEDIA[slug] ?? [];
  const hero = full.afterSummary ?? library[0];
  const mid = full.afterBrief ?? library.find((picture) => picture.src !== hero?.src);
  const reserved = new Set<string>();
  if (hero?.src) reserved.add(hero.src);
  if (mid?.src) reserved.add(mid.src);
  if (chapters.length === 0) {
    if (full.afterGrew?.src) reserved.add(full.afterGrew.src);
    for (const block of full.blocks) {
      if (block.picture?.src) reserved.add(block.picture.src);
      if (block.pair?.src) reserved.add(block.pair.src);
    }
  }
  const gallery = library.filter((picture) => !reserved.has(picture.src));
  const faqs = questions(full, proof);
  const groups = resultGroups(proof.results, SYSTEM_CASES.has(slug));

  return (
    <article className="cs cs-full" data-testid="case-study">
      <header className="cs-hero">
        {/* The spaces keep the words apart for Google and screen readers; the spans are blocks on screen. */}
        <h1>
          <span className="cs-client">{story.name}</span>{" "}
          <span className="cs-headline">
            {(full.headline ?? story.title).map((line) => (
              <span className="cs-line" key={line}>
                {line}{" "}
              </span>
            ))}
          </span>
        </h1>
      </header>

      {hero && <Bleed picture={hero} eager />}

      <section className="cs-sheet" aria-label="Summary">
        <div className="cs-meta">
          <dl>
            <div>
              <dt>Client</dt>
              <dd>{proof.client}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{full.year}</dd>
            </div>
            <div>
              <dt>Industry</dt>
              <dd>{full.industry}</dd>
            </div>
            <div>
              <dt>Place</dt>
              <dd>{full.place}</dd>
            </div>
          </dl>
          <div className="cs-services">
            <p>Services</p>
            <ul>
              {full.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            {links.length > 0 && (
              <div className="cs-links">
                {links.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label} <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="cs-lede">
          {full.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="cs-block">
        <h2>{full.briefTitle}</h2>
        {full.brief.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      {mid && <Bleed picture={mid} />}

      {chapters.length > 0
        ? chapters.map((chapter) => (
            <section className="cs-block" key={chapter.h}>
              <h2>{chapter.h}</h2>
              <RichText lines={chapter.p} />
            </section>
          ))
        : full.blocks.map((block) => (
            <Fragment key={block.title}>
              <section className="cs-block">
                <h2>{block.title}</h2>
                {block.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
              {block.picture && block.pair ? (
                <div className="cs-pair">
                  <Bleed picture={block.picture} />
                  <Bleed picture={block.pair} />
                </div>
              ) : (
                block.picture && <Bleed picture={block.picture} />
              )}
              {block.film && (
                <figure className="cs-film">
                  <video controls playsInline preload="metadata" poster={block.film.poster} aria-label={block.film.label}>
                    <source src={block.film.src} type="video/mp4" />
                  </video>
                </figure>
              )}
            </Fragment>
          ))}

      <section className="cs-block">
        <h2>What we did</h2>
        <ul className="cs-did">
          {proof.did.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {chapters.length === 0 && (
        <section className="cs-block">
          <h2>{full.grewTitle}</h2>
          {full.grew.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      )}

      {chapters.length === 0 && full.afterGrew && <Bleed picture={full.afterGrew} />}

      {gallery.length > 0 && (
        <section className="cs-gallery" aria-label="Pictures from the work">
          {gallery.map((picture) => (
            <figure key={picture.src} className={picture.frame ? `cs-shot cs-shot-${picture.frame}` : "cs-shot"}>
              <img src={picture.src} alt={picture.alt} loading="lazy" decoding="async" />
            </figure>
          ))}
        </section>
      )}

      <section className="cs-results" data-testid="case-results">
        <h2>{full.resultTitle}</h2>
        <p>{full.resultBody ?? proof.results.join(" ")}</p>
        <dl className="cs-stats">
          {proof.stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
        <div className="cs-board" data-testid="case-board">
          {groups.map((group) => (
            <div key={group.label}>
              <h3>{group.label}</h3>
              <ul>
                {group.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Goals (proof.targets) are kept in the data but not shown: a goal next to a result reads as a miss. */}

      {faqs.length > 0 && (
        <section className="cs-block" aria-label="Questions">
          <h2>Questions</h2>
          {faqs.map((item) => (
            <div className="cs-qa" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </section>
      )}

      <section className="cs-close">
        <h2>{full.closeTitle}</h2>
        {full.close.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="cs-cta">
          <a href={bookingUrl(`/our-work/${slug}`)} target="_blank" rel="noopener noreferrer">
            Book a 20-minute call <ArrowUpRight size={16} />
          </a>
          <a
            className="cs-cta-alt"
            href={whatsappUrl(`/our-work/${slug}`, `Hi OARC Digital, I saw your ${story.name} work and want something like it.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp us <ArrowUpRight size={16} />
          </a>
          <Link href="/our-work">All the work <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <section className="cs-more" aria-label="More projects">
        <h2>More projects</h2>
        <div className="cs-more-grid">
          {full.moreSlugs.map((moreSlug) => {
            const item = CLIENT_CASE_STUDIES[moreSlug];
            if (!item) return null;
            return (
              <Link key={moreSlug} href={`/our-work/${moreSlug}`} className="cs-card">
                {item.image && <img src={item.image} alt={item.heroAlt ?? `${item.name} work`} loading="lazy" decoding="async" />}
                <strong>{item.name}</strong>
                <span>{item.title.join(" ")}</span>
              </Link>
            );
          })}
        </div>
      </section>
    </article>
  );
}
