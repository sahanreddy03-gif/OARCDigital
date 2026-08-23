"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { m } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { caseStudies } from "@/data/caseStudies";
import { buildOurWorkShellGraph } from "@/lib/schema/shellSchemas";

export default function PageContent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const proofStudy = caseStudies.pjazza;

  return (
    <Layout navTheme="light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOurWorkShellGraph()) }}
      />

      <div className="oarc-work-page">
        <header className="oarc-work-header">
          <Link href="/" className="oarc-work-wordmark" aria-label="OARC Digital home">
            <span className="oarc-work-wordmark-main">OARC</span>
            <span className="oarc-work-wordmark-sub">Digital</span>
          </Link>
        </header>

        <section className="oarc-work-index" aria-label="Work index">
          <span>Selected work</span>
          <span>01 / 01</span>
        </section>

        <section className="oarc-work-intro" aria-labelledby="work-page-title">
          <h1 id="work-page-title">
            We make clear, useful work
            <br />
            that gives ambitious brands
            <br />
            a real reason to be chosen.
          </h1>
          <p className="oarc-work-intro-copy">
            Selected products, campaigns, and systems made with care, clarity, and a point of view.
          </p>
        </section>

        <section className="oarc-work-feed" aria-label="Selected work">
          <m.article
            className="oarc-work-card"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={`/case-studies/${proofStudy.slug}`}
              className="oarc-work-card-link"
              aria-label={`View the ${proofStudy.brand} case study`}
              data-testid={`card-case-study-${proofStudy.slug}`}
            >
              <div className="oarc-work-media">
                <img
                  src={proofStudy.thumbnailImage}
                  alt={`${proofStudy.brand} project work`}
                  className="oarc-work-media-image"
                  fetchPriority="high"
                />
                <span className="oarc-work-media-index">01</span>
              </div>

              <div className="oarc-work-card-copy">
                <p className="oarc-work-card-category"># OARC PRODUCT</p>
                <h2>{proofStudy.brand}</h2>
                <p className="oarc-work-card-description">{proofStudy.description}.</p>
                <span className="oarc-work-card-cta">
                  View case study
                  <ArrowRight size={19} strokeWidth={1.35} />
                </span>
              </div>
            </Link>
          </m.article>
        </section>

        <footer className="oarc-work-footer">
          <span>OARC Digital</span>
          <span>Made in Malta / Working everywhere</span>
        </footer>
      </div>

      <style jsx>{`
        .oarc-work-page {
          --work-ivory: #f2efe9;
          --work-ink: #0e0d0c;
          --work-muted: #7d7a75;
          --work-line: rgba(14, 13, 12, 0.16);
          min-height: 100vh;
          overflow: hidden;
          color: var(--work-ink);
          background: var(--work-ivory);
          font-family: var(--font-bricolage, "Bricolage Grotesque", sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .oarc-work-header {
          max-width: 1440px;
          margin: 0 auto;
          padding: 29px clamp(24px, 4.3vw, 62px) 0;
        }

        .oarc-work-wordmark {
          display: inline-flex;
          align-items: baseline;
          width: fit-content;
          gap: 8px;
          color: var(--work-ink);
          text-decoration: none;
        }

        .oarc-work-wordmark-main {
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.08em;
        }

        .oarc-work-wordmark-sub,
        .oarc-work-index,
        .oarc-work-card-category,
        .oarc-work-footer {
          color: var(--work-muted);
          font-family: var(--font-space-mono, "Space Mono", monospace);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .oarc-work-wordmark-sub {
          font-size: 8px;
          letter-spacing: 0.18em;
        }

        .oarc-work-index {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1440px;
          margin: clamp(106px, 16vh, 194px) auto 0;
          padding: 16px clamp(24px, 4.3vw, 62px);
          border-top: 1px solid var(--work-line);
          border-bottom: 1px solid var(--work-line);
        }

        .oarc-work-intro {
          max-width: 1440px;
          margin: 0 auto;
          padding: clamp(64px, 10vw, 128px) clamp(24px, 8.5vw, 122px) clamp(68px, 9vw, 116px);
        }

        .oarc-work-intro h1 {
          max-width: 860px;
          margin: 0;
          font-family: var(--font-instrument-serif, "Instrument Serif", Georgia, serif);
          font-size: clamp(48px, 6.25vw, 90px);
          font-weight: 400;
          letter-spacing: -0.062em;
          line-height: 0.93;
        }

        .oarc-work-intro-copy {
          max-width: 365px;
          margin: 37px 0 0;
          color: var(--work-muted);
          font-size: 17px;
          letter-spacing: -0.035em;
          line-height: 1.28;
        }

        .oarc-work-feed {
          display: flex;
          max-width: 1440px;
          min-height: 720px;
          margin: 0 auto;
          padding: clamp(48px, 7vw, 100px) clamp(24px, 8.5vw, 122px) 140px;
        }

        .oarc-work-card {
          width: min(100%, 650px);
        }

        .oarc-work-card-link {
          display: block;
          color: var(--work-ink);
          text-decoration: none;
        }

        .oarc-work-media {
          position: relative;
          aspect-ratio: 1.2 / 1;
          overflow: hidden;
          border-radius: 27px;
          background: #d7d4ce;
        }

        .oarc-work-media-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 900ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .oarc-work-card-link:hover .oarc-work-media-image {
          transform: scale(1.035);
        }

        .oarc-work-media-index {
          position: absolute;
          right: 19px;
          bottom: 17px;
          display: grid;
          width: 36px;
          height: 36px;
          place-items: center;
          border-radius: 50%;
          color: var(--work-ink);
          background: var(--work-ivory);
          font-family: var(--font-space-mono, "Space Mono", monospace);
          font-size: 10px;
        }

        .oarc-work-card-copy {
          max-width: 570px;
          padding-top: 24px;
        }

        .oarc-work-card-category {
          margin: 0 0 14px;
          color: var(--work-muted);
          letter-spacing: 0.13em;
        }

        .oarc-work-card-copy h2 {
          margin: 0;
          font-size: clamp(25px, 3vw, 39px);
          font-weight: 500;
          letter-spacing: -0.06em;
          line-height: 0.95;
        }

        .oarc-work-card-description {
          max-width: 520px;
          margin: 12px 0 22px;
          font-size: clamp(22px, 2.8vw, 35px);
          letter-spacing: -0.06em;
          line-height: 0.98;
        }

        .oarc-work-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 28px;
          padding: 14px 20px 14px 21px;
          border-radius: 999px;
          color: var(--work-ivory);
          background: var(--work-ink);
          font-size: 14px;
          letter-spacing: -0.02em;
          transition: gap 220ms ease, background 220ms ease;
        }

        .oarc-work-card-link:hover .oarc-work-card-cta {
          gap: 35px;
          background: #2a2825;
        }

        .oarc-work-footer {
          display: flex;
          justify-content: space-between;
          max-width: 1440px;
          margin: 0 auto;
          padding: 24px clamp(24px, 4.3vw, 62px) 36px;
          border-top: 1px solid var(--work-line);
        }

        @media (max-width: 680px) {
          .oarc-work-header {
            padding-top: 24px;
          }

          .oarc-work-index {
            margin-top: 154px;
            padding-top: 13px;
            padding-bottom: 13px;
          }

          .oarc-work-intro {
            padding-top: 44px;
            padding-bottom: 62px;
          }

          .oarc-work-intro h1 {
            font-size: clamp(46px, 12.7vw, 65px);
            line-height: 0.92;
          }

          .oarc-work-intro-copy {
            margin-top: 29px;
            font-size: 16px;
          }

          .oarc-work-feed {
            min-height: 0;
            padding-top: 38px;
            padding-bottom: 96px;
          }

          .oarc-work-media {
            aspect-ratio: 1.04 / 1;
            border-radius: 23px;
          }

          .oarc-work-card-copy {
            padding-top: 20px;
          }

          .oarc-work-card-description {
            font-size: 28px;
          }

          .oarc-work-footer {
            display: grid;
            gap: 10px;
            padding-bottom: 28px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .oarc-work-media-image,
          .oarc-work-card-cta {
            transition: none;
          }
        }
      `}</style>
    </Layout>
  );
}