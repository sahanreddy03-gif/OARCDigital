import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import LocaleSchema from "@/components/i18n/LocaleSchema";
import { LOCALE_INFO, localeAlternates, localeUrl } from "@/lib/i18n/twins";
import { buildOffer } from "@/lib/schema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


const TITLE = "Agenzia di Marketing Digitale a Malta | OARC Digital";
const SCHEMA_NAME = "Agenzia di marketing digitale a Malta";
const DESCRIPTION =
  "Agenzia di marketing digitale a Malta. Il tuo unico partner di crescita digitale a €500 al mese. Siamo a Birkirkara e veniamo da te. Nessun contratto.";
const PATH = "/aeo/digital-marketing-agency-malta"; // the ENGLISH path
const URL = localeUrl("it", PATH);

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: localeAlternates("it", PATH),
  openGraph: { images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
 title: TITLE, description: DESCRIPTION, url: URL, type: "website", locale: LOCALE_INFO.it.og },
  twitter: { images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
 card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  {
    question: "Venite davvero da noi?",
    answer:
      "Sì. Ti incontriamo nella tua sede, pianifichiamo con te di persona e giriamo sul posto, come ogni agenzia di alto livello. Questa pagina è solo il modo più veloce per contattarci.",
  },
  {
    question: "Come fa un team completo a costare €500 al mese?",
    answer:
      "Strumenti migliori hanno reso il lavoro più veloce. Quasi tutte le agenzie si sono tenute il risparmio. Noi lo passiamo a te. Hai comunque persone esperte, di persona.",
  },
  {
    question: "Paghiamo già un’agenzia €2,000 o più. Perché cambiare?",
    answer:
      "Tieni lo stesso budget e ottieni di più: un team completo, la parte tecnologica e una quota maggiore dei tuoi soldi che va in pubblicità. Mandaci la tua ultima fattura e ti mostriamo cosa compra con noi.",
  },
  {
    question: "C’è un contratto?",
    answer: "No. Resta perché funziona. Disdici in qualsiasi mese, e tutto quello che abbiamo creato resta tuo.",
  },
  {
    question: "Quanto presto possiamo iniziare?",
    answer: "Oggi. Parlaci della tua attività e il tuo strategist ti chiama il giorno stesso per fissare una visita.",
  },
  {
    question: "Con chi parlerò?",
    answer: "Con il tuo strategist. Una sola persona che conosce la tua attività e guida il tuo team per te.",
  },
  {
    question: "Non ho foto né video. È un problema?",
    answer: "No. La nostra troupe viene da te.",
  },
  {
    question: "Il sistema AI è un chatbot?",
    answer:
      "No. È il sistema dietro la tua attività: il tuo sito web, WhatsApp, le prenotazioni, il CRM e l’amministrazione, collegati e al lavoro insieme. I nostri sviluppatori vengono da te, mappano come lavori e lo costruiscono con te.",
  },
  {
    question: "Di chi sono i contenuti, il sito web e gli account pubblicitari?",
    answer: "Tuoi. Sempre.",
  },
  {
    question: "Cosa non è incluso?",
    answer:
      "Il tuo budget pubblicitario, che paghi direttamente a Meta e Google. Ti avvisiamo sempre prima che qualcos’altro abbia un costo extra.",
  },
  {
    question: "Con quali attività lavorate?",
    answer:
      "Ristoranti, hotel, cliniche, negozi, agenzie immobiliari, servizi professionali, gruppi e brand, in tutta Malta.",
  },
  {
    question: "Dove si trova OARC Digital?",
    answer: `${NAP.streetAddress}, ${NAP.addressLocality} ${NAP.postalCode}, Malta. WhatsApp ${NAP.phoneDisplay}. Email ${NAP.email}. Scopri di più su OARC Digital.`,
  },
];

const offers = [
  {
    name: "Il tuo partner di crescita digitale",
    priceFrom: 500,
    unitText: "MONTH",
    description:
      "Strategia, riprese video, social, annunci, un sito web e follow-up delle richieste. Disdici in qualsiasi mese. Il budget pubblicitario si paga a Meta e Google, non a OARC.",
  },
];

const features = [
  { name: "Visita strategica mensile" },
  { name: "Post social, reel e annunci" },
  { name: "Annunci su Meta e Google" },
  { name: "Follow-up delle richieste" },
];

// LocaleSchema emits the page, breadcrumb, service and FAQ nodes. The English page also
// declares its price and its four capabilities on the service (through RouteSchema), so the
// same data is added here to the same service node (`@id`), in Italian. Price, currency and
// unit are exactly the English ones.
const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#service`,
  name: SCHEMA_NAME,
  url: URL,
  inLanguage: "it",
  offers: offers.map(buildOffer),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `${SCHEMA_NAME} — servizi inclusi`,
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
    path.join(process.cwd(), "app/it/aeo/digital-marketing-agency-malta/oarc-team.html"),
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
        locale="it"
        path={PATH}
        title={TITLE}
        description={DESCRIPTION}
        serviceName={SCHEMA_NAME}
        faqs={faqs}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
      <PageContent
        css={claude.css}
        markup={claude.markup}
        script={claude.script}
        scopeClass={SCOPE_CLASS}
      />
    </>
  );
}
