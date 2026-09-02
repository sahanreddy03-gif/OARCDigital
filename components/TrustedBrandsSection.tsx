"use client";

type Logo = {
  name: string;
  src?: string;
  textMark?: string;
};

const MIXED_LOGOS: Logo[] = [
  { name: "Kreta", src: "/brand-logos/normalized/kreta.png" },
  { name: "BrewDog", src: "/brand-logos/normalized/brewdog.png" },
  { name: "32Red", src: "/brand-logos/normalized/32red.png" },
  { name: "The Alchemist", src: "/brand-logos/normalized/alchemist.png" },
  { name: "Palino", src: "/brand-logos/normalized/palino.png" },
  { name: "Cafe del Mar", src: "/brand-logos/normalized/cafedelmar.png" },
  { name: "Betsson", src: "/brand-logos/normalized/betsson.png" },
  { name: "Dirty Martini", src: "/brand-logos/normalized/dirtymartini.png" },
  { name: "Louisiana Mama", textMark: "LOUISIANA MAMA" },
  { name: "Dishoom", src: "/brand-logos/normalized/dishoom.png" },
  { name: "BetVictor", src: "/brand-logos/normalized/betvictor.png" },
  { name: "Festival Republic", src: "/brand-logos/normalized/festivalrepublic.png" },
  { name: "MCW", src: "/brand-logos/normalized/mcw.png" },
  { name: "JA Resorts", src: "/brand-logos/normalized/jaresorts.png" },
  { name: "Bolt", src: "/brand-logos/normalized/bolt.png" },
  { name: "Kilimanjaro Live", src: "/brand-logos/normalized/kilimanjaro.png" },
  { name: "LEON", src: "/brand-logos/normalized/leon.png" },
  { name: "eCabs", src: "/brand-logos/normalized/ecabs.png" },
  { name: "Premier Inn", src: "/brand-logos/normalized/premierinn.png" },
  { name: "Malmaison", src: "/brand-logos/normalized/malmaison.png" },
  { name: "LeoVegas", src: "/brand-logos/normalized/leovegas.png" },
  { name: "Slug & Lettuce", src: "/brand-logos/normalized/sluglettuce.png" },
  { name: "Nero", src: "/brand-logos/normalized/nero.png" },
  { name: "Revolut", src: "/brand-logos/normalized/revolut.png" },
  { name: "TONI&GUY", src: "/brand-logos/normalized/toniguy.png" },
  { name: "The Hoxton", src: "/brand-logos/normalized/thehoxton.png" },
  { name: "Skyscanner", src: "/brand-logos/normalized/skyscanner.png" },
  { name: "Turtle Bay", src: "/brand-logos/normalized/turtlebay.png" },
  { name: "SumUp", src: "/brand-logos/normalized/sumup.png" },
  { name: "Wahaca", src: "/brand-logos/normalized/wahaca.png" },
  { name: "tabby", src: "/brand-logos/normalized/tabby.png" },
  { name: "Zizzi", src: "/brand-logos/normalized/zizzi.png" },
  { name: "talabat", src: "/brand-logos/normalized/talabat.png" },
  { name: "Unibet", src: "/brand-logos/normalized/unibet.png" },
  { name: "Wise", src: "/brand-logos/normalized/wise.png" },
  { name: "Wolt", src: "/brand-logos/normalized/wolt.png" },
];

const LOGO_ROWS = [
  MIXED_LOGOS.filter((_, index) => index % 2 === 0),
  MIXED_LOGOS.filter((_, index) => index % 2 === 1),
] as const;

function LogoMark({ logo, logoIndex }: { logo: Logo; logoIndex: number }) {
  return (
    <span className="brand-wall-logo" key={`${logo.name}-${logoIndex}`}>
      {logo.src ? (
        <img
          className="brand-wall-mark"
          src={logo.src}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
        />
      ) : (
        <b className="brand-wall-text-mark" aria-hidden="true">
          {logo.textMark}
        </b>
      )}
    </span>
  );
}

function LogoRow({
  logos,
  direction,
  rowIndex,
}: {
  logos: readonly Logo[];
  direction: "forward" | "reverse";
  rowIndex: number;
}) {
  const ticker = [...logos, ...logos];

  return (
    <div
      className={`brand-strip brand-strip-${direction}`}
      data-testid={`logo-row-${rowIndex}`}
    >
      <div className="brand-wall-viewport">
        <div
          className={`brand-wall-track brand-wall-track-${direction}`}
          aria-hidden="true"
          data-testid={`logo-marquee-${rowIndex}`}
        >
          {ticker.map((logo, logoIndex) => (
            <LogoMark logo={logo} logoIndex={logoIndex} key={`${logo.name}-${logoIndex}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TrustedBrandsSection() {
  return (
    <section
      className="trusted-brands-section"
      data-testid="section-trust-strip"
      aria-label="Selected brand marks"
    >
      <div className="brand-wall" aria-hidden="true">
        <LogoRow logos={LOGO_ROWS[0]} direction="forward" rowIndex={0} />
        <LogoRow logos={LOGO_ROWS[1]} direction="reverse" rowIndex={1} />
      </div>

      <ul className="sr-only" aria-label="Brand names">
        {MIXED_LOGOS.map((logo) => (
          <li key={logo.name}>{logo.name}</li>
        ))}
      </ul>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .trusted-brands-section{
              position:relative;
              width:100%;
              max-width:100%;
              overflow-x:hidden;
              background:#0B0C0D;
              padding:clamp(16px,2.2vw,28px) 0;
            }
            .brand-wall{
              display:grid;
              gap:0;
              width:100%;
            }
            .brand-strip{
              position:relative;
              overflow:hidden;
              min-width:0;
              width:100%;
              border-top:1px solid rgba(245,245,243,.18);
              border-bottom:1px solid rgba(245,245,243,.18);
              background:#0B0C0D;
            }
            .brand-strip-forward{
              background:#0B0C0D;
            }
            .brand-strip-reverse{
              background:#0B0C0D;
            }
            .brand-wall-viewport{
              position:relative;
              min-width:0;
              width:100%;
              overflow:hidden;
              padding:clamp(16px,2.1vw,28px) 0;
            }
            .brand-wall-track{
              display:flex;
              width:max-content;
              align-items:center;
              gap:clamp(28px,4vw,68px);
              will-change:transform;
            }
            .brand-wall-track-forward{
              animation:brand-wall-forward 50s linear infinite;
            }
            .brand-wall-track-reverse{
              animation:brand-wall-reverse 54s linear infinite;
            }
            .brand-wall-logo{
              display:flex;
              flex:0 0 clamp(176px,18vw,280px);
              width:clamp(176px,18vw,280px);
              height:clamp(68px,7vw,96px);
              align-items:center;
              justify-content:center;
              padding:0 clamp(12px,1.4vw,24px);
            }
            .brand-wall-mark{
              display:block;
              width:auto;
              height:clamp(34px,4vw,52px);
              max-width:100%;
              object-fit:contain;
              filter:brightness(0) grayscale(1) invert(1);
              opacity:.88;
            }
            .brand-wall-text-mark{
              display:flex;
              align-items:center;
              justify-content:center;
              width:100%;
              height:clamp(34px,4vw,52px);
              overflow:hidden;
              color:#F5F5F3;
              font:800 clamp(14px,1.55vw,22px)/1 var(--font-space-grotesk, sans-serif);
              letter-spacing:-.08em;
              text-align:center;
              white-space:nowrap;
            }
            @keyframes brand-wall-forward{
              from{transform:translate3d(-50%,0,0)}
              to{transform:translate3d(0,0,0)}
            }
            @keyframes brand-wall-reverse{
              from{transform:translate3d(0,0,0)}
              to{transform:translate3d(-50%,0,0)}
            }
            @media(prefers-reduced-motion:reduce){
              .brand-wall-track{
                animation:none;
                transform:none;
              }
            }
            @media(max-width:640px){
              .trusted-brands-section{
                padding:10px 0;
              }
              .brand-wall{
                gap:0;
              }
              .brand-wall-viewport{
                padding:12px 0;
              }
              .brand-wall-track{
                gap:28px;
              }
              .brand-wall-logo{
                flex-basis:160px;
                width:160px;
                height:64px;
                padding:0 12px;
              }
              .brand-wall-mark{
                height:36px;
              }
              .brand-wall-text-mark{
                height:36px;
                font-size:15px;
              }
            }
          `,
        }}
      />
    </section>
  );
}