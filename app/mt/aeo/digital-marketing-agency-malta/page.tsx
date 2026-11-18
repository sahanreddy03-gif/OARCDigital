import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import LocaleSchema from "@/components/i18n/LocaleSchema";
import { LOCALE_INFO, SITE, localeAlternates, localeUrl } from "@/lib/i18n/twins";
import { buildOffer } from "@/lib/schema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


const TITLE = "Aġenzija tal-Marketing Diġitali f'Malta | OARC Digital";
const SCHEMA_NAME = "Aġenzija tal-Marketing Diġitali f'Malta";
const DESCRIPTION =
  "Aġenzija tal-marketing diġitali f'Malta. Sieħeb wieħed għat-tkabbir diġitali tiegħek, għal €500 fix-xahar. Niġu għandek f'Birkirkara. Bla kuntratt.";
const PATH = "/aeo/digital-marketing-agency-malta"; // the ENGLISH path
const URL = localeUrl("mt", PATH);

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: localeAlternates("mt", PATH),
  openGraph: { images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
 title: TITLE, description: DESCRIPTION, url: URL, type: "website", locale: LOCALE_INFO.mt.og },
  twitter: { images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
 card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  {
    question: "Tassew tiġu għandna?",
    answer:
      "Iva. Niltaqgħu miegħek għandek, nippjanaw miegħek wiċċ imb wiċċ u niffilmjaw fuq il-post, bħal kull aġenzija tal-ogħla livell. Din il-paġna hija biss l-aktar mod mgħaġġel biex tikkuntattjana.",
  },
  {
    question: "Kif jista' tim sħiħ jiswa €500 fix-xahar?",
    answer:
      "Għodod aħjar għamlu x-xogħol aktar malajr. Il-biċċa l-kbira tal-aġenziji żammew dak li ffrankaw. Aħna ngħadduh lilek. Xorta tieħu nies ta' esperjenza, wiċċ imb wiċċ.",
  },
  {
    question: "Diġà nħallsu aġenzija €2,000 jew aktar. Għaliex għandna nibdlu?",
    answer:
      "Żomm l-istess baġit u ħu aktar bih: tim sħiħ, in-naħa teknika, u aktar mill-flus tiegħek imorru fir-reklami. Ibgħatilna l-aħħar fattura tiegħek u nuruk x'tixtri biha magħna.",
  },
  {
    question: "Hemm kuntratt?",
    answer: "Le. Ibqa' għax jaħdem. Ikkanċella fi kwalunkwe xahar, u dak kollu li għamilna jibqa' tiegħek.",
  },
  {
    question: "Kemm nistgħu nibdew malajr?",
    answer:
      "Illum. Għidilna dwar in-negozju tiegħek u l-istrateġista tiegħek iċempillek fl-istess jum biex tiftiehmu fuq żjara.",
  },
  {
    question: "Ma' min se nitkellem?",
    answer: "Mal-istrateġista tiegħek. Persuna waħda li taf in-negozju tiegħek u tmexxi t-tim għalik.",
  },
  {
    question: "M'għandix ritratti jew vidjows. Hija problema?",
    answer: "Le. Il-crew tal-filming tagħna jiġi għandek.",
  },
  {
    question: "Is-sistema tal-AI hija chatbot?",
    answer:
      "Le. Hija s-sistema wara n-negozju tiegħek: il-websajt, WhatsApp, il-prenotazzjonijiet, is-CRM u l-admin, magħqudin u jaħdmu flimkien. Id-developers tagħna jżuruk, jimmappjaw kif taħdem u jibnuha miegħek.",
  },
  {
    question: "Ta' min huma l-kontenut, il-websajt u l-kontijiet tar-reklami?",
    answer: "Tiegħek. Dejjem.",
  },
  {
    question: "X'mhux inkluż?",
    answer:
      "Il-baġit tar-reklami tiegħek, li tħallsu direttament lil Meta u Google. Dejjem ngħidulek minn qabel jekk xi ħaġa oħra tkun tiswa aktar.",
  },
  {
    question: "Ma' liema negozji taħdmu?",
    answer:
      "Ristoranti, lukandi, kliniċi, ħwienet, proprjetà, servizzi professjonali, gruppi u brands, madwar Malta kollha.",
  },
  {
    question: "Fejn qiegħda OARC Digital?",
    answer: `${NAP.streetAddress}, ${NAP.addressLocality} ${NAP.postalCode}, Malta. WhatsApp ${NAP.phoneDisplay}. Email ${NAP.email}. Aktar dwar OARC Digital.`,
  },
];

const offers = [
  {
    name: "Is-sieħeb tiegħek għat-tkabbir diġitali",
    priceFrom: 500,
    unitText: "MONTH",
    description:
      "Strateġija, filming, social media, reklami, websajt u segwitu tat-talbiet. Ikkanċella fi kwalunkwe xahar. L-infiq fuq ir-reklami jitħallas lil Meta u Google, mhux lil OARC.",
  },
];

const features = [
  { name: "Żjara ta' strateġija kull xahar" },
  { name: "Posts, reels u reklami għas-social media" },
  { name: "Reklami fuq Meta u Google" },
  { name: "Segwitu tat-talbiet" },
];

// LocaleSchema emits the page, the breadcrumb, the service and the FAQs. It has no place
// for the price, so the offer and the list of what is included are added here on the same
// service node (same @id), with the same shape the English page gets from RouteSchema.
const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#service`,
  name: SCHEMA_NAME,
  description: DESCRIPTION,
  url: URL,
  inLanguage: "mt",
  areaServed: { "@type": "Country", name: "Malta" },
  provider: { "@type": "Organization", "@id": `${SITE}/#organization`, name: NAP.name, url: SITE },
  offers: offers.map(buildOffer),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `${SCHEMA_NAME}: x'jinkludi`,
    itemListElement: features.map((f) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: f.name, description: "" },
    })),
  },
};

// The design file is a self-contained page. It is rendered inside the site's
// normal header and footer, so its own top bar and footer are dropped and its
// styles are scoped to SCOPE_CLASS so they cannot restyle the site chrome.
const SCOPE_CLASS = "oarc-team"; // not exported: Next.js only allows known exports from page files

function scopeSelector(selector: string): string | null {
  const s = selector.trim();
  if (!s) return null;
  if (s === ":root" || s === "html" || s === "body") return `.${SCOPE_CLASS}`;
  if (/^(html|body)\b/.test(s)) return null; // e.g. body::before (safe-area bar for the old fixed top bar)
  if (s.startsWith(".js ")) return `.js .${SCOPE_CLASS} ${s.slice(4)}`; // .js is set on <html>
  return `.${SCOPE_CLASS} ${s}`;
}

function scopeCss(css: string): string {
  const src = css.replace(/\/\*[\s\S]*?\*\//g, "");
  let out = "";
  let i = 0;
  while (i < src.length) {
    const open = src.indexOf("{", i);
    if (open === -1) break;
    const head = src.slice(i, open).trim();
    // find the matching close brace
    let depth = 1;
    let j = open + 1;
    while (j < src.length && depth > 0) {
      if (src[j] === "{") depth++;
      else if (src[j] === "}") depth--;
      j++;
    }
    const body = src.slice(open + 1, j - 1);
    if (head.startsWith("@media") || head.startsWith("@supports")) {
      out += `${head}{${scopeCss(body)}}`;
    } else if (head.startsWith("@")) {
      out += `${head}{${body}}`; // @keyframes and other at-rules stay as they are
    } else {
      const selectors = head
        .split(",")
        .map(scopeSelector)
        .filter((v): v is string => Boolean(v));
      if (selectors.length) out += `${selectors.join(",")}{${body}}`;
    }
    i = j;
  }
  return out;
}

function loadClaudePage() {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "app/mt/aeo/digital-marketing-agency-malta/oarc-team.html"),
    "utf8",
  );
  const styleStart = raw.lastIndexOf("<style>");
  const styleEnd = raw.lastIndexOf("</style>");
  const scriptStart = raw.lastIndexOf("<script>");
  const scriptEnd = raw.lastIndexOf("</script>");
  const markup = raw
    .slice(styleEnd + "</style>".length, scriptStart)
    .replace('<script>document.documentElement.classList.add("js")</script>', "") // PageContent adds it after hydration (avoids an <html> class mismatch)
    .replace(/<header class="nav"[\s\S]*?<\/header>/, "") // site header replaces it
    .replace(/<footer class="foot"[\s\S]*?<\/footer>/, "") // site footer replaces it
    .replace('<main id="top">', '<div id="top">') // the site layout already provides <main>
    .replace("</main>", "</div>");
  const script = raw
    .slice(scriptStart + "<script>".length, scriptEnd)
    .replace("nav.classList.toggle(", "nav&&nav.classList.toggle("); // top bar removed above
  return {
    css: scopeCss(raw.slice(styleStart + "<style>".length, styleEnd)),
    markup,
    script,
  };
}

export default function Page() {
  const claude = loadClaudePage();
  return (
    <>
      <LocaleSchema
        locale="mt"
        path={PATH}
        title={TITLE}
        description={DESCRIPTION}
        serviceName={SCHEMA_NAME}
        faqs={faqs}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <PageContent
        css={claude.css}
        markup={claude.markup}
        script={claude.script}
        scopeClass={SCOPE_CLASS}
      />
    </>
  );
}
