"use client";

type Logo = {
  name: string;
  src?: string;
  textMark?: string;
  scale?: number;
};

const MIXED_LOGOS: Logo[] = [
  { name: "Kreta", src: "/brand-logos/clients/kreta.png" },
  { name: "BrewDog", src: "/brand-logos/hospitality/brewdog.png" },
  { name: "32Red", src: "/brand-logos/sectors/32red.png" },
  { name: "The Alchemist", src: "/brand-logos/uk/alchemist.png" },
  { name: "Palino", src: "/brand-logos/clients/palino.png" },
  { name: "Cafe del Mar", src: "/brand-logos/hospitality/cafedelmar.png" },
  { name: "Betsson", src: "/brand-logos/sectors/betsson.png" },
  { name: "Dirty Martini", src: "/brand-logos/uk/dirtymartini.png" },
  { name: "Louisiana Mama", textMark: "LOUISIANA MAMA" },
  { name: "Dishoom", src: "/brand-logos/hospitality/dishoom.png" },
  { name: "BetVictor", src: "/brand-logos/sectors/betvictor.png" },
  { name: "Festival Republic", src: "/brand-logos/uk/festivalrepublic.png" },
  { name: "MCW", src: "/brand-logos/clients/mcw.png", scale: 1.45 },
  { name: "JA Resorts", src: "/brand-logos/hospitality/jaresorts.png" },
  { name: "Bolt", src: "/brand-logos/sectors/bolt.png" },
  { name: "Kilimanjaro Live", src: "/brand-logos/uk/kilimanjaro.png" },
  { name: "LEON", src: "/brand-logos/hospitality/leon.png" },
  { name: "eCabs", src: "/brand-logos/sectors/ecabs.png" },
  { name: "Premier Inn", src: "/brand-logos/uk/premierinn.png" },
  { name: "Malmaison", src: "/brand-logos/hospitality/malmaison.png" },
  { name: "LeoVegas", src: "/brand-logos/sectors/leovegas.png" },
  { name: "Slug & Lettuce", src: "/brand-logos/uk/sluglettuce.png" },
  { name: "Nero", src: "/brand-logos/hospitality/nero.png" },
  { name: "Revolut", src: "/brand-logos/sectors/revolut.png" },
  { name: "TONI&GUY", src: "/brand-logos/uk/toniguy.png" },
  { name: "The Hoxton", src: "/brand-logos/hospitality/thehoxton.png" },
  { name: "Skyscanner", src: "/brand-logos/sectors/skyscanner.png" },
  { name: "Turtle Bay", src: "/brand-logos/hospitality/turtlebay.png" },
  { name: "SumUp", src: "/brand-logos/sectors/sumup.png" },
  { name: "Wahaca", src: "/brand-logos/hospitality/wahaca.png" },
  { name: "tabby", src: "/brand-logos/sectors/tabby.png" },
  { name: "Zizzi", src: "/brand-logos/hospitality/zizzi.png" },
  { name: "talabat", src: "/brand-logos/sectors/talabat.png" },
  { name: "Unibet", src: "/brand-logos/sectors/unibet.png" },
  { name: "Wise", src: "/brand-logos/sectors/wise.png" },
  { name: "Wolt", src: "/brand-logos/sectors/wolt.png" },
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
          src={logo.src}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          style={{ transform: `scale(${logo.scale ?? 1})` }}
        />
      ) : (
        <b className="brand-wall-text-mark">{logo.textMark}</b>
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
              padding:clamp(10px,1.5vw,18px) 0;
            }
            .brand-wall{
              display:grid;
              gap:clamp(6px,0.8vw,10px);
              width:100%;
            }
            .brand-strip{
              position:relative;
              overflow:hidden;
              min-width:0;
              width:100%;
              border:1px solid rgba(245,245,243,.18);
              background:#deded9;
            }
            .brand-strip-forward{
              background:#deded9;
            }
            .brand-strip-reverse{
              background:#deded9;
            }
            .brand-wall-viewport{
              position:relative;
              min-width:0;
              width:100%;
              overflow:hidden;
              padding:clamp(8px,1vw,14px) 0;
            }
            .brand-wall-track{
              display:flex;
              width:max-content;
              align-items:center;
              gap:clamp(12px,1.5vw,24px);
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
              flex:0 0 clamp(150px,16vw,258px);
              width:clamp(150px,16vw,258px);
              height:clamp(56px,5.6vw,82px);
              align-items:center;
              justify-content:center;
              box-sizing:border-box;
              padding:clamp(8px,1vw,14px) clamp(14px,1.8vw,26px);
              border:1px solid rgba(11,12,13,.12);
              border-radius:10px;
              background:#F5F5F3;
              box-shadow:0 2px 0 rgba(11,12,13,.08), inset 0 0 0 1px rgba(255,255,255,.42);
            }
            .brand-wall-logo img{
              display:block;
              width:92%;
              height:82%;
              object-fit:contain;
              filter:brightness(0) grayscale(1);
              opacity:.82;
            }
            .brand-wall-text-mark{
              display:block;
              font:800 clamp(15px,1.75vw,26px)/.9 var(--font-space-grotesk, sans-serif);
              letter-spacing:-.08em;
              text-align:center;
              white-space:nowrap;
              color:#0B0C0D;
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
                gap:6px;
              }
              .brand-wall-viewport{
                padding:7px 0;
              }
              .brand-wall-track{
                gap:12px;
              }
              .brand-wall-logo{
                flex-basis:144px;
                width:144px;
                height:58px;
                padding:8px 12px;
                border-radius:8px;
              }
              .brand-wall-text-mark{
                font-size:15px;
              }
            }
          `,
        }}
      />
    </section>
  );
}