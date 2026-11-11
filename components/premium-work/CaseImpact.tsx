import { getCaseGallery } from "@/lib/data/premium-work/caseGallery";
import { getCaseProof } from "@/lib/data/premium-work/caseProof";

/**
 * The proof sections of a case study: the headline numbers, what OARC
 * delivered, the brief set against what happened, and the real content
 * produced for the client.
 *
 * Shared by every page under /our-work/[slug], so a change here lands on all
 * of them. Each block renders only when its data exists, which is why a case
 * with no approved photographs simply has no grid rather than a broken one.
 */
export default function CaseImpact({ slug }: { slug: string }) {
  const proof = getCaseProof(slug);
  if (!proof) return null;

  const gallery = getCaseGallery(slug);
  const hasStats = proof.stats.length > 0;
  const hasBrief = proof.targets.length > 0;

  return (
    <>
      {hasStats && (
        <section className="case-impact" aria-labelledby="case-impact-title" data-testid="case-impact">
          <header>
            <p>THE RESULT</p>
            <h2 id="case-impact-title">
              What the work
              <br />
              <i>actually did.</i>
            </h2>
          </header>
          <dl className="case-impact-stats">
            {proof.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
          <p className="case-impact-source">
            Figures from OARC campaign and client reporting for {proof.client}.
          </p>
        </section>
      )}

      {proof.did.length > 0 && (
        <section className="case-scope" aria-labelledby="case-scope-title" data-testid="case-scope">
          <div className="case-scope-intro">
            <p>WHAT WE DID</p>
            <h2 id="case-scope-title">
              The work,
              <br />
              <i>in plain words.</i>
            </h2>
          </div>
          <ol className="case-scope-list">
            {proof.did.map((line, index) => (
              <li key={line}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <span>{line.replace(/^We /, "")}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {hasBrief && (
        <section className="case-ledger" aria-labelledby="case-ledger-title" data-testid="case-ledger">
          <header>
            <p>THE BRIEF, THEN THE OUTCOME</p>
            <h2 id="case-ledger-title">
              What we aimed for.
              <br />
              <i>What happened.</i>
            </h2>
          </header>
          <div className="case-ledger-columns">
            <article className="case-ledger-aim">
              <b>WHAT WE SET OUT TO DO</b>
              <ul>
                {proof.targets.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
            <article className="case-ledger-done">
              <b>WHAT THE WORK ACHIEVED</b>
              <ul>
                {proof.results.map((line) => (
                  <li key={line}>{line.replace(/^We /, "")}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      )}

      {gallery && (
        <section className="case-feed" aria-labelledby="case-feed-title" data-testid="case-feed">
          <div className="case-feed-intro">
            <p>THE CONTENT</p>
            <h2 id="case-feed-title">{gallery.heading}</h2>
            <span>{gallery.note}</span>
          </div>
          <div className="case-feed-grid">
            {gallery.items.map((item, index) => (
              <figure key={item.src}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
