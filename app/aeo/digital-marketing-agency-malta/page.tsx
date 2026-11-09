import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


const TITLE = "Digital Marketing Agency Malta | €500 a month team | OARC";
const DESCRIPTION =
  "A digital marketing agency in Malta. Your whole social marketing team for €500 a month. We come to you in Birkirkara. No contract.";
const URL = "https://oarcdigital.com/aeo/digital-marketing-agency-malta";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
 title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
 card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  {
    question: "Do you really come to us?",
    answer:
      "Yes. We meet you at your place, plan with you in person and film on location, like any high-end agency. The ask box on this page is just the fastest way to start.",
  },
  {
    question: "Is it really cheaper than hiring someone?",
    answer:
      "Yes. Malta’s minimum wage in 2026 is €229.44 a week, about €994 a month, before any employer costs. Your whole team is €500 a month, and nobody needs a desk, a laptop or holidays covered.",
  },
  {
    question: "How can a whole team cost €500 a month?",
    answer:
      "Better tools made the work faster. Most agencies kept the savings. We pass them to you. You still get experienced people, in person.",
  },
  {
    question: "We already pay an agency €2,000 or more. Why switch?",
    answer:
      "Keep your budget and get more for it: the whole team, the tech side, and more of your money going into ads. Send us your last invoice and we’ll show you what it buys with us.",
  },
  {
    question: "Is there a contract?",
    answer: "No. Stay because it works. Cancel any month, and everything we made stays yours.",
  },
  {
    question: "How fast can we start?",
    answer: "Today. Send us anything, and your first piece is back in 48 hours, free.",
  },
  {
    question: "Who will I deal with?",
    answer: "Your strategist. One person who knows your business and runs your team for you.",
  },
  {
    question: "I don’t have photos or videos. Is that a problem?",
    answer: "No. Our film crew comes to you.",
  },
  {
    question: "Is the AI system a chatbot?",
    answer:
      "No. It’s the system behind your business: your website, WhatsApp, bookings, CRM and admin, connected and working together. Our developers visit you, map how you work and build it with you.",
  },
  {
    question: "Who owns the content, the website and the ad accounts?",
    answer: "You do. Always.",
  },
  {
    question: "What isn’t included?",
    answer:
      "Your ad budget, which you pay to Meta and Google directly. We’ll always tell you before anything else costs extra.",
  },
  {
    question: "Can you train my own staff?",
    answer:
      "Yes. Your team can show your staff the tools and the playbooks we use for you. Ask about it when we meet.",
  },
  {
    question: "What is the live results screen?",
    answer:
      "An extra that’s coming soon: your own screen with every number, live. Until then, you get a one-page report every month.",
  },
  {
    question: "Which businesses do you work with?",
    answer:
      "Restaurants, hotels, clinics, shops, real estate, professional services, groups and brands, across Malta.",
  },
  {
    question: "Where is OARC Digital?",
    answer: `${NAP.streetAddress}, ${NAP.addressLocality} ${NAP.postalCode}, Malta. WhatsApp ${NAP.phoneDisplay}. Email ${NAP.email}.`,
  },
];

const offers = [
  {
    name: "Your whole marketing team",
    priceFrom: 500,
    unitText: "MONTH",
    description:
      "Strategy, filming, social, ads, a website and enquiry follow-up. Cancel any month. Ad spend is paid to Meta and Google, not to OARC.",
  },
];

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
    path.join(process.cwd(), "app/aeo/digital-marketing-agency-malta/oarc-team.html"),
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
      <RouteSchema
        type="service"
        path="/aeo/digital-marketing-agency-malta"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "Monthly strategy visit" },
          { name: "Social posts, reels and ads" },
          { name: "Meta and Google ads" },
          { name: "Enquiry follow-up" },
        ]}
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
