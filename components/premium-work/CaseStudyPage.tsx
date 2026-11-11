import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getCaseGallery } from "@/lib/data/premium-work/caseGallery";
import { getCaseProof } from "@/lib/data/premium-work/caseProof";
import { bookingUrl, whatsappUrl } from "@/lib/utm";

/**
 * One case study, in one plain flow:
 * client + headline + picture, services, intro, the challenge, what we did,
 * how it works, results with three big numbers, closing line, next project.
 * Everything is said once. Shared by every page under /our-work/[slug].
 */

type CaseStory = {
  name: string;
  title: string[];
  intro: string;
  image?: string;
  journeyImage?: string;
  heroAlt?: string;
  record: string;
  facts: string[];
  chapters: { label: string; title: string; body: string }[];
  stages: { name: string; moment: string; system: string; value: string }[];
  closeTitle: string;
  closeText: string;
  liveRecord?: { links: { label: string; url: string }[] };
};

type Picture = { src: string; alt: string };

export type NextCase = { slug: string; name: string; headline: string; image?: string };

export default function CaseStudyPage({
  slug,
  story,
  next,
  diagram,
  extraPictures,
}: {
  slug: string;
  story: CaseStory;
  next?: NextCase;
  diagram?: Picture;
  extraPictures?: Picture[];
}) {
  const proof = getCaseProof(slug);
  const gallery = getCaseGallery(slug);
  const headline = story.title.join(" ");
  const [challenge, work, outcome] = story.chapters;
  const brandLink = story.liveRecord?.links.find((link) => /^https?:/.test(link.url) && !link.url.includes("oarcdigital.com"));

  // Pictures, each used once: hero, then one beside the work, then the rest as a grid.
  const used = new Set<string>(story.image ? [story.image] : []);
  const pool: Picture[] = [
    ...(story.journeyImage ? [{ src: story.journeyImage, alt: `${story.name}: from the work` }] : []),
    ...(gallery?.items ?? []),
    ...(extraPictures ?? []),
  ].filter((item) => {
    if (used.has(item.src)) return false;
    used.add(item.src);
    return true;
  });
  const workPicture = pool[0];
  const morePictures = pool.slice(1, 7);
  // Stats already carry the three headline claims; list only the others.
  const moreClaims = proof ? proof.results.slice(0, 12) : [];

  return (
    <article className="cs" data-testid="case-study">
      <header className="cs-hero">
        <h1>
          <span className="cs-client">{story.name}</span>
          <span className="cs-headline">{headline}</span>
        </h1>
        {story.image ? (
          <figure className="cs-hero-picture">
            <img src={story.image} alt={story.heroAlt ?? `${story.name}: from the work`} decoding="async" fetchPriority="high" />
          </figure>
        ) : (
          <div className="cs-hero-plain" role="img" aria-label={`${story.name} launch campaign by OARC Digital`}>
            <span>{story.name}</span>
          </div>
        )}
      </header>

      <section className="cs-intro" aria-label="Summary">
        <div className="cs-services">
          <p>( Services )</p>
          <ul>
            {story.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          {brandLink && (
            <a href={brandLink.url} target="_blank" rel="noopener noreferrer">
              {brandLink.label} <ArrowUpRight size={14} />
            </a>
          )}
        </div>
        <div className="cs-lede">
          <p>{story.intro}</p>
        </div>
      </section>

      {challenge && (
        <section className="cs-block">
          <h2>{challenge.title}</h2>
          <p>{challenge.body}</p>
        </section>
      )}

      {work && (
        <section className="cs-block">
          <h2>{work.title}</h2>
          {proof && proof.did.length >= 3 ? (
            <ul className="cs-did">
              {proof.did.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          ) : (
            <p>{work.body}</p>
          )}
          {workPicture && (
            <figure className="cs-picture">
              <img src={workPicture.src} alt={workPicture.alt} loading="lazy" decoding="async" />
            </figure>
          )}
        </section>
      )}

      <section className="cs-block">
        <h2>How it works</h2>
        <ol className="cs-steps">
          {story.stages.map((stage, index) => (
            <li key={stage.name}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <div>
                <strong>{stage.moment}</strong>
                <span>{stage.system}</span>
              </div>
            </li>
          ))}
        </ol>
        {diagram && (
          <figure className="cs-picture cs-picture-diagram">
            <img src={diagram.src} alt={diagram.alt} loading="lazy" decoding="async" />
          </figure>
        )}
      </section>

      {morePictures.length > 0 && (
        <section className="cs-gallery" aria-label={`${story.name}: pictures from the work`}>
          {morePictures.map((item) => (
            <figure key={item.src}>
              <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
            </figure>
          ))}
        </section>
      )}

      {outcome && (
        <section className="cs-results" data-testid="case-results">
          <h2>{outcome.title}</h2>
          {proof && proof.stats.length > 0 && (
            <dl className="cs-stats">
              {proof.stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.value}</dt>
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </dl>
          )}
          {moreClaims.length > 0 && (
            <ul className="cs-claims">
              {moreClaims.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          )}
        </section>
      )}

      <section className="cs-close">
        <h2>{story.closeTitle}</h2>
        <p>{story.closeText}</p>
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
        </div>
      </section>

      {next && (
        <Link href={`/our-work/${next.slug}`} className="cs-next" data-testid="case-next">
          <div>
            <p>Next project</p>
            <strong>{next.name}</strong>
            <span>{next.headline}</span>
            <em>
              View work <ArrowUpRight size={16} />
            </em>
          </div>
          {next.image && <img src={next.image} alt={`${next.name}: next project`} loading="lazy" decoding="async" />}
        </Link>
      )}
    </article>
  );
}
