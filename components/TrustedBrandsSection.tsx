"use client";

type Logo = {
  name: string;
  src: string;
};

type LogoRail = {
  id: string;
  label: string;
  note: string;
  logos: Logo[];
  tone: "client" | "reference";
};

const LOGO_RAILS: LogoRail[] = [
  {
    id: "clients",
    label: "Named client work",
    note: "Colour marks are kept to the public client records.",
    tone: "client",
    logos: [
      { name: "Kreta", src: "/brand-logos/clients/kreta.png" },
      { name: "Louisiana Mama", src: "/brand-logos/clients/louisiana-mama.png" },
      { name: "MCW", src: "/brand-logos/clients/mcw.png" },
    ],
  },
  {
    id: "hospitality",
    label: "Hospitality & F&B",
    note: "Sector references from the supplied corrected set.",
    tone: "reference",
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
    note: "Relevant category context, not an implied client list.",
    tone: "reference",
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
    note: "A separate UK hospitality and leisure reference row.",
    tone: "reference",
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

const BG = "#f0fff4";

function LogoRail({ rail, index }: { rail: LogoRail; index: number }) {
  const ticker = [...rail.logos, ...rail.logos];

  return (
    <div className={`logo-rail logo-rail-${rail.tone}`} data-testid={`logo-rail-${rail.id}`}>
      <div className="logo-rail-heading">
        <span>{rail.label}</span>
        <small>{rail.note}</small>
      </div>
      <div className="logo-rail-viewport">
        <div
          className="logo-rail-track"
          style={{ animationDelay: `${index * -1.7}s` }}
          aria-hidden="true"
          data-testid={`logo-marquee-${rail.id}`}
        >
          {ticker.map((logo, logoIndex) => (
            <span className="logo-tile" key={`${logo.name}-${logoIndex}`}>
              <img src={logo.src} alt="" loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </div>
      <p className="sr-only">{rail.logos.map((logo) => logo.name).join(", ")}.</p>
    </div>
  );
}

export default function TrustedBrandsSection() {
  return (
    <section
      className="relative overflow-hidden py-9 md:py-12"
      style={{ backgroundColor: BG }}
      data-testid="section-trust-strip"
      aria-labelledby="trust-strip-title"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-7 flex flex-col gap-2 md:mb-9 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              Selected context
            </p>
            <h2 id="trust-strip-title" className="mt-2 text-2xl font-medium tracking-[-0.05em] text-zinc-950 md:text-3xl">
              The rooms we understand.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
            A considered index of public client work and category context. Not every mark below is a client relationship.
          </p>
        </div>
        <div className="space-y-5 md:space-y-6">
          {LOGO_RAILS.map((rail, index) => (
            <LogoRail key={rail.id} rail={rail} index={index} />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .logo-rail{min-width:0}
        .logo-rail-heading{display:flex;align-items:baseline;gap:12px;margin-bottom:8px;padding-left:2px}
        .logo-rail-heading span{color:#3f443f;font:700 9px/1.2 var(--font-space-mono,monospace);letter-spacing:.14em;text-transform:uppercase}
        .logo-rail-heading small{color:#8a908b;font:400 10px/1.4 var(--font-space-mono,monospace)}
        .logo-rail-client .logo-rail-heading span{color:#708b19}
        .logo-rail-viewport{position:relative;overflow:hidden;padding:2px 0}
        .logo-rail-viewport:before,.logo-rail-viewport:after{content:"";position:absolute;top:0;bottom:0;width:48px;z-index:2;pointer-events:none}
        .logo-rail-viewport:before{left:0;background:linear-gradient(90deg,${BG},transparent)}
        .logo-rail-viewport:after{right:0;background:linear-gradient(270deg,${BG},transparent)}
        .logo-rail-track{display:flex;width:max-content;align-items:center;animation:logo-rail-right 34s linear infinite;will-change:transform}
        .logo-rail-client .logo-rail-track{animation-duration:26s}
        .logo-rail-uk .logo-rail-track{animation-duration:31s}
        .logo-tile{display:flex;align-items:center;justify-content:center;flex:0 0 144px;height:53px;margin-right:10px;border:1px solid rgba(17,19,15,.1);background:rgba(255,255,255,.48);border-radius:3px}
        .logo-rail-client .logo-tile{flex-basis:184px;height:68px;background:rgba(255,255,255,.8);border-color:rgba(17,19,15,.14)}
        .logo-tile img{display:block;width:100%;height:100%;object-fit:contain}
        .logo-rail-reference .logo-tile img{opacity:.76}
        @keyframes logo-rail-right{from{transform:translateX(-50%)}to{transform:translateX(0)}}
        @media(prefers-reduced-motion:reduce){.logo-rail-track{animation:none;transform:none}}
        @media(max-width:640px){.logo-rail-heading{display:block}.logo-rail-heading small{display:block;margin-top:4px}.logo-tile{flex-basis:118px;height:48px;margin-right:7px}.logo-rail-client .logo-tile{flex-basis:148px;height:58px}}
      ` }} />
    </section>
  );
}
