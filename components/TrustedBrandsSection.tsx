"use client";

type Logo = {
  name: string;
  src?: string;
  textMark?: string;
};

type LogoRail = {
  id: string;
  label: string;
  note: string;
  logos: Logo[];
  tone: "client" | "reference";
  duration: number;
  delay: number;
};

const LOGO_RAILS: LogoRail[] = [
  {
    id: "clients",
    label: "Named client work",
    note: "Verified public client records",
    tone: "client",
    duration: 30,
    delay: -4,
    logos: [
      { name: "Kreta", src: "/brand-logos/clients/kreta.png" },
      { name: "Palino", src: "/brand-logos/clients/palino.png" },
      { name: "Louisiana Mama", textMark: "LOUISIANA MAMA" },
      { name: "MCW", src: "/brand-logos/clients/mcw.png" },
    ],
  },
  {
    id: "hospitality",
    label: "Hospitality & F&B",
    note: "Sector reference",
    tone: "reference",
    duration: 44,
    delay: -13,
    logos: [
      { name: "BrewDog", src: "/brand-logos/hospitality/brewdog.png" },
      { name: "Cafe del Mar", src: "/brand-logos/hospitality/cafedelmar.png" },
      { name: "Dishoom", src: "/brand-logos/hospitality/dishoom.png" },
      { name: "JA Resorts", src: "/brand-logos/hospitality/jaresorts.png" },
      { name: "LEON", src: "/brand-logos/hospitality/leon.png" },
      { name: "Malmaison", src: "/brand-logos/hospitality/malmaison.png" },
      { name: "Nero", src: "/brand-logos/hospitality/nero.png" },
      { name: "The Hoxton", src: "/brand-logos/hospitality/thehoxton.png" },
      { name: "Turtle Bay", src: "/brand-logos/hospitality/turtlebay.png" },
      { name: "Wahaca", src: "/brand-logos/hospitality/wahaca.png" },
      { name: "Zizzi", src: "/brand-logos/hospitality/zizzi.png" },
    ],
  },
  {
    id: "sectors",
    label: "Mobility · fintech · iGaming",
    note: "Category context",
    tone: "reference",
    duration: 48,
    delay: -27,
    logos: [
      { name: "32Red", src: "/brand-logos/sectors/32red.png" },
      { name: "Betsson", src: "/brand-logos/sectors/betsson.png" },
      { name: "BetVictor", src: "/brand-logos/sectors/betvictor.png" },
      { name: "Bolt", src: "/brand-logos/sectors/bolt.png" },
      { name: "eCabs", src: "/brand-logos/sectors/ecabs.png" },
      { name: "LeoVegas", src: "/brand-logos/sectors/leovegas.png" },
      { name: "Revolut", src: "/brand-logos/sectors/revolut.png" },
      { name: "Skyscanner", src: "/brand-logos/sectors/skyscanner.png" },
      { name: "SumUp", src: "/brand-logos/sectors/sumup.png" },
      { name: "tabby", src: "/brand-logos/sectors/tabby.png" },
      { name: "talabat", src: "/brand-logos/sectors/talabat.png" },
      { name: "Unibet", src: "/brand-logos/sectors/unibet.png" },
      { name: "Wise", src: "/brand-logos/sectors/wise.png" },
      { name: "Wolt", src: "/brand-logos/sectors/wolt.png" },
    ],
  },
  {
    id: "uk",
    label: "UK leisure",
    note: "Category context",
    tone: "reference",
    duration: 40,
    delay: -8,
    logos: [
      { name: "The Alchemist", src: "/brand-logos/uk/alchemist.png" },
      { name: "Dirty Martini", src: "/brand-logos/uk/dirtymartini.png" },
      { name: "Festival Republic", src: "/brand-logos/uk/festivalrepublic.png" },
      { name: "Kilimanjaro Live", src: "/brand-logos/uk/kilimanjaro.png" },
      { name: "Premier Inn", src: "/brand-logos/uk/premierinn.png" },
      { name: "Slug & Lettuce", src: "/brand-logos/uk/sluglettuce.png" },
      { name: "TONI&GUY", src: "/brand-logos/uk/toniguy.png" },
    ],
  },
];

const BG = "#0B0C0D";

function LogoMark({ logo, logoIndex }: { logo: Logo; logoIndex: number }) {
  return (
    <span className="brand-wall-logo" key={`${logo.name}-${logoIndex}`}>
      {logo.src ? (
        <img
          src={logo.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <b className="brand-wall-text-mark">{logo.textMark}</b>
      )}
    </span>
  );
}

function LogoRail({ rail }: { rail: LogoRail }) {
  // Three identical passes keep the rail filled on wide screens while allowing
  // the animation to loop at exactly one pass without a visible jump.
  const ticker = [...rail.logos, ...rail.logos, ...rail.logos];

  return (
    <div
      className={`brand-wall-row brand-wall-row-${rail.tone}`}
      data-testid={`logo-rail-${rail.id}`}
    >
      <div className="brand-wall-row-meta">
        <p className="brand-wall-row-label">{rail.label}</p>
        <p className="brand-wall-row-note">{rail.note}</p>
      </div>

      <div className="brand-wall-viewport">
        <div
          className="brand-wall-track"
          style={{
            animationDuration: `${rail.duration}s`,
            animationDelay: `${rail.delay}s`,
          }}
          aria-hidden="true"
          data-testid={`logo-marquee-${rail.id}`}
        >
          {ticker.map((logo, logoIndex) => (
            <LogoMark logo={logo} logoIndex={logoIndex} key={`${logo.name}-${logoIndex}`} />
          ))}
        </div>
      </div>

      <p className="sr-only">
        {rail.note}: {rail.logos.map((logo) => logo.name).join(", ")}.
      </p>
    </div>
  );
}

export default function TrustedBrandsSection() {
  return (
    <section
      className="trusted-brands-section relative py-20 md:py-28"
      style={{ backgroundColor: BG }}
      data-testid="section-trust-strip"
      aria-labelledby="trust-strip-title"
    >
      <div className="brand-wall-shell">
        <div className="brand-wall-intro">
          <div>
            <p className="brand-wall-kicker">OARC / Selected context</p>
            <h2 id="trust-strip-title">Know the room. Then change it.</h2>
          </div>
          <p className="brand-wall-description">
            Named client work, followed by the categories and cultures we keep
            close. Every mark is labelled for what it is.
          </p>
        </div>

        <div className="brand-wall-rows">
          {LOGO_RAILS.map((rail) => (
            <LogoRail key={rail.id} rail={rail} />
          ))}
        </div>

        <p className="brand-wall-footnote">
          Client work first <span aria-hidden="true">·</span> category context after
        </p>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .trusted-brands-section{
              --wall-bg:${BG};
              color:#f5f5f3;
              overflow:clip;
            }
            .brand-wall-shell{
              width:min(100% - 40px, 1600px);
              margin:0 auto;
            }
            .brand-wall-intro{
              display:flex;
              align-items:flex-end;
              justify-content:space-between;
              gap:48px;
              padding-bottom:clamp(48px,7vw,88px);
            }
            .brand-wall-kicker,
            .brand-wall-row-label,
            .brand-wall-footnote{
              margin:0;
              color:#a9aca8;
              font:700 10px/1.3 var(--font-space-mono,monospace);
              letter-spacing:.16em;
              text-transform:uppercase;
            }
            .brand-wall-kicker{
              color:#f5f5f3;
              margin-bottom:18px;
            }
            .brand-wall-intro h2{
              max-width:620px;
              margin:0;
              color:#f5f5f3;
              font:800 clamp(2.25rem,5.3vw,5.6rem)/.92 var(--font-bricolage, var(--font-space-grotesk, sans-serif));
              letter-spacing:-.075em;
            }
            .brand-wall-description{
              max-width:310px;
              margin:0 0 3px;
              color:#8d928f;
              font:400 13px/1.55 var(--font-space-mono,monospace);
            }
            .brand-wall-rows{
              border-top:1px solid rgba(245,245,243,.18);
            }
            .brand-wall-row{
              display:grid;
              grid-template-columns:minmax(174px, .23fr) minmax(0, 1fr);
              align-items:center;
              gap:clamp(20px,4vw,72px);
              min-width:0;
              padding:25px 0;
              border-bottom:1px solid rgba(245,245,243,.12);
            }
            .brand-wall-row-client{
              padding-top:30px;
              padding-bottom:30px;
            }
            .brand-wall-row-label{
              color:#f5f5f3;
              letter-spacing:.1em;
            }
            .brand-wall-row-client .brand-wall-row-label{
              color:#f5f5f3;
            }
            .brand-wall-row-note{
              margin:7px 0 0;
              color:#707572;
              font:400 10px/1.4 var(--font-space-mono,monospace);
              letter-spacing:.02em;
            }
            .brand-wall-viewport{
              position:relative;
              min-width:0;
              overflow:hidden;
              padding:4px 0;
              box-shadow:inset 30px 0 24px -28px ${BG}, inset -30px 0 24px -28px ${BG};
            }
            .brand-wall-track{
              display:flex;
              width:max-content;
              align-items:center;
              gap:clamp(36px,5.4vw,96px);
              animation:brand-wall-marquee 42s linear infinite;
              will-change:transform;
            }
            .brand-wall-logo{
              display:flex;
              flex:0 0 clamp(118px,12vw,204px);
              width:clamp(118px,12vw,204px);
              height:clamp(40px,4.3vw,68px);
              align-items:center;
              justify-content:center;
            }
            .brand-wall-logo img{
              display:block;
              width:100%;
              height:100%;
              object-fit:contain;
              filter:grayscale(1) brightness(1.65) contrast(.94);
              opacity:.66;
            }
            .brand-wall-row-client .brand-wall-logo{
              flex-basis:clamp(148px,16vw,248px);
              width:clamp(148px,16vw,248px);
              height:clamp(48px,5.2vw,82px);
            }
            .brand-wall-row-client .brand-wall-logo img{
              opacity:.96;
              filter:grayscale(1) brightness(1.8) contrast(1.02);
            }
            .brand-wall-text-mark{
              display:block;
              color:#f5f5f3;
              font:800 clamp(13px,1.55vw,22px)/.9 var(--font-space-grotesk, sans-serif);
              letter-spacing:-.08em;
              text-align:center;
              white-space:nowrap;
            }
            .brand-wall-row-reference .brand-wall-text-mark{
              color:#b8bcb8;
            }
            .brand-wall-footnote{
              padding-top:20px;
              color:#636865;
              font-size:9px;
              letter-spacing:.1em;
            }
            .brand-wall-footnote span{
              padding:0 7px;
              color:#f5f5f3;
            }
            @keyframes brand-wall-marquee{
              from{transform:translate3d(-33.333333%,0,0)}
              to{transform:translate3d(0,0,0)}
            }
            @media(prefers-reduced-motion:reduce){
              .brand-wall-track{
                animation:none;
                transform:none;
              }
            }
            @media(max-width:760px){
              .brand-wall-shell{
                width:min(100% - 32px, 600px);
              }
              .brand-wall-intro{
                display:block;
                padding-bottom:52px;
              }
              .brand-wall-intro h2{
                max-width:420px;
                font-size:clamp(2.3rem,12vw,4rem);
              }
              .brand-wall-description{
                max-width:360px;
                margin-top:24px;
                font-size:11px;
              }
              .brand-wall-row{
                display:block;
                padding:22px 0;
              }
              .brand-wall-row-client{
                padding-top:27px;
                padding-bottom:27px;
              }
              .brand-wall-row-meta{
                display:flex;
                align-items:baseline;
                justify-content:space-between;
                gap:16px;
                margin-bottom:13px;
              }
              .brand-wall-row-note{
                margin:0;
                text-align:right;
              }
              .brand-wall-track{
                gap:32px;
              }
              .brand-wall-logo{
                flex-basis:126px;
                width:126px;
                height:44px;
              }
              .brand-wall-row-client .brand-wall-logo{
                flex-basis:154px;
                width:154px;
                height:54px;
              }
            }
            @media(max-width:420px){
              .brand-wall-row-meta{
                display:block;
              }
              .brand-wall-row-note{
                margin-top:6px;
                text-align:left;
              }
            }
          `,
        }}
      />
    </section>
  );
}