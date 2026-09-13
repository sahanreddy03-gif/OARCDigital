"use client";

type Logo = {
  name: string;
  src: string;
  opticalScale?: number;
};

const MIXED_LOGOS: Logo[] = [
  { name: "Kreta", src: "/brand-logos/recreated/kreta.svg" },
  { name: "BrewDog", src: "/brand-logos/normalized/brewdog.png", opticalScale: 1.08 },
  { name: "32Red", src: "/brand-logos/normalized/32red.png", opticalScale: 1.06 },
  { name: "The Alchemist", src: "/brand-logos/recreated/alchemist.svg" },
  { name: "Palino", src: "/brand-logos/normalized/palino.png", opticalScale: 1.02 },
  { name: "Cafe del Mar", src: "/brand-logos/recreated/cafe-del-mar.svg" },
  { name: "Betsson", src: "/brand-logos/normalized/betsson.png" },
  { name: "Dirty Martini", src: "/brand-logos/normalized/dirtymartini.png", opticalScale: 1.06 },
  { name: "Louisiana Mama", src: "/brand-logos/recreated/louisiana-mama.svg" },
  { name: "Dishoom", src: "/brand-logos/normalized/dishoom.png" },
  { name: "BetVictor", src: "/brand-logos/recreated/betvictor.svg" },
  { name: "Festival Republic", src: "/brand-logos/normalized/festivalrepublic.png", opticalScale: 1.02 },
  { name: "JA Resorts", src: "/brand-logos/normalized/jaresorts.png", opticalScale: 1.02 },
  { name: "Bolt", src: "/brand-logos/normalized/bolt.png", opticalScale: 1.05 },
  { name: "Kilimanjaro Live", src: "/brand-logos/normalized/kilimanjaro.png", opticalScale: 0.96 },
  { name: "LEON", src: "/brand-logos/normalized/leon.png", opticalScale: 1.05 },
  { name: "eCabs", src: "/brand-logos/normalized/ecabs.png" },
  { name: "Premier Inn", src: "/brand-logos/recreated/premier-inn.svg" },
  { name: "Malmaison", src: "/brand-logos/normalized/malmaison.png", opticalScale: 1.05 },
  { name: "LeoVegas", src: "/brand-logos/normalized/leovegas.png" },
  { name: "Slug & Lettuce", src: "/brand-logos/normalized/sluglettuce.png", opticalScale: 0.94 },
  { name: "Nero", src: "/brand-logos/normalized/nero.png", opticalScale: 1.04 },
  { name: "Revolut", src: "/brand-logos/normalized/revolut.png" },
  { name: "TONI&GUY", src: "/brand-logos/normalized/toniguy.png" },
  { name: "The Hoxton", src: "/brand-logos/recreated/the-hoxton.svg" },
  { name: "Skyscanner", src: "/brand-logos/normalized/skyscanner.png" },
  { name: "Turtle Bay", src: "/brand-logos/normalized/turtlebay.png", opticalScale: 1.02 },
  { name: "SumUp", src: "/brand-logos/normalized/sumup.png", opticalScale: 1.04 },
  { name: "Wahaca", src: "/brand-logos/normalized/wahaca.png", opticalScale: 1.02 },
  { name: "tabby", src: "/brand-logos/recreated/tabby.svg" },
  { name: "Zizzi", src: "/brand-logos/normalized/zizzi.png", opticalScale: 1.04 },
  { name: "talabat", src: "/brand-logos/normalized/talabat.png" },
  { name: "Unibet", src: "/brand-logos/recreated/unibet.svg" },
  { name: "Wise", src: "/brand-logos/normalized/wise.png", opticalScale: 1.06 },
  { name: "Wolt", src: "/brand-logos/normalized/wolt.png", opticalScale: 1.05 },
];

const LOGO_ROWS = [
  MIXED_LOGOS.filter((_, index) => index % 2 === 0),
  MIXED_LOGOS.filter((_, index) => index % 2 === 1),
] as const;

function LogoMark({ logo, logoIndex }: { logo: Logo; logoIndex: number }) {
  return (
    <span className="brand-wall-logo" key={`${logo.name}-${logoIndex}`}>
      <img
        className="brand-wall-mark"
        src={logo.src}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        style={{ "--brand-optical-scale": logo.opticalScale ?? 1 } as React.CSSProperties}
      />
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
    <div className="brand-strip" data-testid={`logo-row-${rowIndex}`}>
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
      id="trusted-brands"
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
              padding:clamp(12px,1.7vw,22px) 0;
              border-top:1px solid rgba(245,245,243,.08);
              border-bottom:1px solid rgba(245,245,243,.08);
            }
            .brand-wall{
              display:grid;
              gap:0;
              width:100%;
              -webkit-mask-image:linear-gradient(90deg,transparent 0,#000 6%,#000 94%,transparent 100%);
              mask-image:linear-gradient(90deg,transparent 0,#000 6%,#000 94%,transparent 100%);
            }
            .brand-strip{
              position:relative;
              overflow:hidden;
              min-width:0;
              width:100%;
            }
            .brand-strip + .brand-strip{
              border-top:1px solid rgba(245,245,243,.07);
            }
            .brand-wall-viewport{
              position:relative;
              min-width:0;
              width:100%;
              overflow:hidden;
              padding:clamp(14px,1.7vw,22px) 0;
            }
            .brand-wall-track{
              display:flex;
              width:max-content;
              align-items:center;
              gap:clamp(22px,3vw,46px);
              will-change:transform;
            }
            .brand-wall-track-forward{
              animation:brand-wall-forward 58s linear infinite;
            }
            .brand-wall-track-reverse{
              animation:brand-wall-reverse 62s linear infinite;
            }
            .brand-wall-logo{
              display:flex;
              flex:0 0 clamp(190px,16vw,248px);
              width:clamp(190px,16vw,248px);
              height:clamp(66px,6vw,82px);
              align-items:center;
              justify-content:center;
              padding:0 clamp(16px,1.5vw,22px);
            }
            .brand-wall-mark{
              display:block;
              width:auto;
              height:clamp(36px,3.25vw,46px);
              max-width:clamp(148px,13vw,188px);
              object-fit:contain;
              transform:scale(var(--brand-optical-scale,1));
              transform-origin:center;
              opacity:.72;
              filter:brightness(0) grayscale(1) invert(1);
              transition:opacity .25s ease;
            }
            .brand-wall-logo:hover .brand-wall-mark{
              opacity:.96;
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
                padding:8px 0;
              }
              .brand-wall{
                -webkit-mask-image:linear-gradient(90deg,transparent 0,#000 4%,#000 96%,transparent 100%);
                mask-image:linear-gradient(90deg,transparent 0,#000 4%,#000 96%,transparent 100%);
              }
              .brand-wall-viewport{
                padding:10px 0;
              }
              .brand-wall-track{
                gap:16px;
              }
              .brand-wall-logo{
                flex-basis:174px;
                width:174px;
                height:60px;
                padding:0 14px;
              }
              .brand-wall-mark{
                height:34px;
                max-width:142px;
              }
            }
          `,
        }}
      />
    </section>
  );
}