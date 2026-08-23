"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { m } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { workEvidenceLedger } from "@/data/workEvidence";

const heroImage = "/attached_assets/IMG_0605_1775068068190.jpeg";
const platformImage = "/attached_assets/screenshot-1775068037591.png";
const marketplaceImage = "/attached_assets/IMG_0610_1775068068190.jpeg";

export default function PjazzaCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const evidence = workEvidenceLedger.pjazza;

  return (
    <Layout navTheme="light" showFooter={false}>
      <article className="pjazza-page">
        <div className="pjazza-frame">
          <header className="pjazza-topline">
            <Link href="/our-work" className="pjazza-back" data-testid="button-back-our-work">
              <ArrowLeft size={16} strokeWidth={1.4} />
              Selected work
            </Link>
            <span>Case study 01 / 01</span>
          </header>

          <section className="pjazza-hero" aria-labelledby="pjazza-title">
            <m.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="pjazza-hero-copy"
            >
              <p className="pjazza-kicker">OARC-owned product</p>
              <h1 id="pjazza-title">PJAZZA</h1>
              <p className="pjazza-hero-statement">A live shopping marketplace for Malta.</p>
              <p className="pjazza-hero-summary">
                PJAZZA is OARC Digital&apos;s own product. Its public site describes it as Malta&apos;s
                live shopping marketplace.
              </p>
              <a
                href={evidence.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pjazza-primary-link"
                data-testid="link-pjazza-live"
              >
                Visit the public product
                <ExternalLink size={17} strokeWidth={1.45} />
              </a>
            </m.div>

            <m.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="pjazza-hero-media"
            >
              <img
                src={heroImage}
                alt="PJAZZA marketplace interface shown on a mobile screen"
                fetchPriority="high"
              />
              <span className="pjazza-media-note">Approved project media</span>
            </m.div>
          </section>

          <section className="pjazza-context" aria-labelledby="project-context-title">
            <p className="pjazza-section-label">The context</p>
            <div>
              <h2 id="project-context-title">
                A first-party product story, not a borrowed client claim.
              </h2>
              <p>
                OARC presents PJAZZA as its own product. This case study is designed so that
                visitors can inspect the public product directly, rather than relying on
                unverified performance language or anonymous testimonials.
              </p>
            </div>
          </section>

          <section className="pjazza-proof" aria-labelledby="public-proof-title">
            <div className="pjazza-proof-heading">
              <p className="pjazza-section-label">What the public site lists</p>
              <h2 id="public-proof-title">Simple facts, linked to the product.</h2>
              <p>
                These details are repeated exactly from the public PJAZZA page. No date,
                performance result, or additional feature is stated here without a supplied source.
              </p>
            </div>
            <ul className="pjazza-fact-list">
              {evidence.verifiedFacts.map((fact, index) => (
                <li key={fact}>
                  <span>0{index + 1}</span>
                  {fact}
                </li>
              ))}
            </ul>
            <a
              href={evidence.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pjazza-source-link"
              data-testid="link-pjazza-source"
            >
              Read the public product page
              <ArrowRight size={18} strokeWidth={1.4} />
            </a>
          </section>

          <section className="pjazza-media-story" aria-label="PJAZZA product media">
            <figure className="pjazza-platform-shot">
              <img src={platformImage} alt="PJAZZA marketplace home screen on desktop" loading="lazy" />
              <figcaption>Marketplace interface</figcaption>
            </figure>
            <div className="pjazza-media-copy">
              <p className="pjazza-section-label">The work</p>
              <h2>Show the product. Let people judge the product.</h2>
              <p>
                The evidence-led approach keeps the story close to what can be seen and
                verified: a real product, its public destination, and the supplied interface
                visuals that frame the experience.
              </p>
              <Link href="/our-work" className="pjazza-back-link">
                Back to selected work
                <ArrowRight size={17} strokeWidth={1.4} />
              </Link>
            </div>
          </section>

          <figure className="pjazza-wide-media">
            <img src={marketplaceImage} alt="PJAZZA marketplace browse screen" loading="lazy" />
            <figcaption>Approved project media / PJAZZA</figcaption>
          </figure>

          <footer className="pjazza-footer">
            <span>OARC Digital</span>
            <span>Evidence-led work / PJAZZA</span>
          </footer>
        </div>
      </article>

      <style jsx>{`
        .pjazza-page {
          --pjazza-ivory: #f2efe9;
          --pjazza-ink: #0e0d0c;
          --pjazza-muted: #74716c;
          --pjazza-line: rgba(14, 13, 12, 0.15);
          min-height: 100vh;
          overflow: hidden;
          background: var(--pjazza-ivory);
          color: var(--pjazza-ink);
          font-family: var(--font-bricolage, "Bricolage Grotesque", sans-serif);
        }

        .pjazza-frame {
          max-width: 1440px;
          margin: 0 auto;
          padding: 28px clamp(24px, 4.3vw, 62px) 0;
        }

        .pjazza-topline,
        .pjazza-section-label,
        .pjazza-media-note,
        .pjazza-platform-shot figcaption,
        .pjazza-wide-media figcaption,
        .pjazza-footer {
          color: var(--pjazza-muted);
          font-family: var(--font-space-mono, "Space Mono", monospace);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .pjazza-topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 17px;
          border-bottom: 1px solid var(--pjazza-line);
        }

        .pjazza-back,
        .pjazza-back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--pjazza-ink);
          font-family: inherit;
          font-size: 14px;
          letter-spacing: -0.02em;
          text-decoration: none;
        }

        .pjazza-hero {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(340px, 1.1fr);
          align-items: end;
          gap: clamp(40px, 9vw, 145px);
          padding: clamp(64px, 10vw, 145px) clamp(0px, 4.3vw, 62px) clamp(82px, 11vw, 150px);
        }

        .pjazza-kicker {
          margin: 0 0 24px;
          color: var(--pjazza-muted);
          font-family: var(--font-space-mono, "Space Mono", monospace);
          font-size: 10px;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .pjazza-hero h1,
        .pjazza-context h2,
        .pjazza-proof h2,
        .pjazza-media-copy h2 {
          margin: 0;
          font-family: var(--font-instrument-serif, "Instrument Serif", Georgia, serif);
          font-weight: 400;
          letter-spacing: -0.06em;
          line-height: 0.92;
        }

        .pjazza-hero h1 {
          font-size: clamp(66px, 10vw, 142px);
        }

        .pjazza-hero-statement {
          max-width: 530px;
          margin: 23px 0 0;
          font-size: clamp(27px, 3.1vw, 46px);
          letter-spacing: -0.055em;
          line-height: 0.98;
        }

        .pjazza-hero-summary,
        .pjazza-context p,
        .pjazza-proof-heading p,
        .pjazza-media-copy p {
          max-width: 480px;
          color: var(--pjazza-muted);
          font-size: 17px;
          letter-spacing: -0.028em;
          line-height: 1.35;
        }

        .pjazza-hero-summary {
          margin: 25px 0 30px;
        }

        .pjazza-primary-link {
          display: inline-flex;
          align-items: center;
          gap: 30px;
          padding: 15px 20px 15px 22px;
          border-radius: 999px;
          color: var(--pjazza-ivory);
          background: var(--pjazza-ink);
          font-size: 14px;
          text-decoration: none;
          transition: gap 220ms ease, background 220ms ease;
        }

        .pjazza-primary-link:hover {
          gap: 38px;
          background: #2b2824;
        }

        .pjazza-hero-media {
          position: relative;
          overflow: hidden;
          border-radius: 27px;
          aspect-ratio: 0.92 / 1;
          background: #dbd8d0;
        }

        .pjazza-hero-media img,
        .pjazza-platform-shot img,
        .pjazza-wide-media img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .pjazza-hero-media img {
          object-position: center;
        }

        .pjazza-media-note {
          position: absolute;
          left: 17px;
          bottom: 15px;
          padding: 8px 10px;
          color: var(--pjazza-ink);
          background: var(--pjazza-ivory);
          border-radius: 999px;
          font-size: 8px;
        }

        .pjazza-context,
        .pjazza-proof {
          display: grid;
          grid-template-columns: minmax(170px, 0.5fr) minmax(0, 1.5fr);
          gap: 32px;
          padding: clamp(62px, 8vw, 112px) clamp(0px, 4.3vw, 62px);
          border-top: 1px solid var(--pjazza-line);
        }

        .pjazza-context h2,
        .pjazza-proof h2,
        .pjazza-media-copy h2 {
          max-width: 720px;
          font-size: clamp(40px, 5.5vw, 76px);
        }

        .pjazza-context p {
          margin: 30px 0 0;
        }

        .pjazza-proof {
          grid-template-columns: minmax(0, 1fr) minmax(280px, 0.7fr);
          align-items: end;
        }

        .pjazza-proof-heading p {
          margin: 26px 0 0;
        }

        .pjazza-fact-list {
          display: grid;
          gap: 0;
          margin: 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid var(--pjazza-line);
        }

        .pjazza-fact-list li {
          display: flex;
          gap: 22px;
          padding: 18px 0;
          border-bottom: 1px solid var(--pjazza-line);
          font-size: clamp(19px, 2.3vw, 29px);
          letter-spacing: -0.05em;
        }

        .pjazza-fact-list span {
          color: var(--pjazza-muted);
          font-family: var(--font-space-mono, "Space Mono", monospace);
          font-size: 10px;
          letter-spacing: 0.09em;
        }

        .pjazza-source-link {
          grid-column: 1 / -1;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          width: fit-content;
          gap: 36px;
          margin-top: 8px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--pjazza-ink);
          color: var(--pjazza-ink);
          font-size: 15px;
          text-decoration: none;
        }

        .pjazza-media-story {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(260px, 0.78fr);
          gap: clamp(46px, 10vw, 160px);
          align-items: center;
          padding: clamp(70px, 10vw, 150px) clamp(0px, 4.3vw, 62px);
          border-top: 1px solid var(--pjazza-line);
        }

        .pjazza-platform-shot {
          margin: 0;
        }

        .pjazza-platform-shot img {
          aspect-ratio: 1.2 / 1;
          border-radius: 23px;
          object-position: top;
        }

        .pjazza-platform-shot figcaption,
        .pjazza-wide-media figcaption {
          display: block;
          margin-top: 12px;
        }

        .pjazza-media-copy p {
          margin: 29px 0;
        }

        .pjazza-back-link {
          gap: 20px;
          padding-bottom: 6px;
          border-bottom: 1px solid var(--pjazza-ink);
        }

        .pjazza-wide-media {
          position: relative;
          margin: 0;
        }

        .pjazza-wide-media img {
          aspect-ratio: 2 / 0.9;
          border-radius: 27px;
          object-position: top;
        }

        .pjazza-footer {
          display: flex;
          justify-content: space-between;
          margin-top: clamp(72px, 10vw, 142px);
          padding: 24px 0 35px;
          border-top: 1px solid var(--pjazza-line);
        }

        @media (max-width: 760px) {
          .pjazza-frame {
            padding-top: 23px;
          }

          .pjazza-hero,
          .pjazza-context,
          .pjazza-proof,
          .pjazza-media-story {
            grid-template-columns: 1fr;
          }

          .pjazza-hero {
            gap: 48px;
            padding-top: 63px;
            padding-bottom: 77px;
          }

          .pjazza-hero h1 {
            font-size: clamp(66px, 20vw, 94px);
          }

          .pjazza-hero-media {
            aspect-ratio: 1 / 1.08;
          }

          .pjazza-context,
          .pjazza-proof {
            gap: 28px;
          }

          .pjazza-proof {
            padding-bottom: 72px;
          }

          .pjazza-source-link {
            grid-column: auto;
            width: 100%;
          }

          .pjazza-media-story {
            gap: 41px;
          }

          .pjazza-platform-shot img,
          .pjazza-wide-media img {
            border-radius: 20px;
          }

          .pjazza-wide-media img {
            aspect-ratio: 1.1 / 1;
          }

          .pjazza-footer {
            display: grid;
            gap: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pjazza-primary-link {
            transition: none;
          }
        }
      `}</style>
    </Layout>
  );
}