import Link from "next/link";
import type { Metadata } from 'next';
import H360Hero from './_components/Hero';
import OarcBridge from './_components/OarcBridge';
import H360FeatureCards from './_components/FeatureCards';
import H360BelowHero from './_components/BelowHero';
import HtmlLang from '@/components/i18n/HtmlLang';
import LangFooter from '@/components/i18n/LangFooter';
import MalteseFonts from '@/components/i18n/MalteseFonts';
import LocaleSchema from '@/components/i18n/LocaleSchema';
import { LOCALE_INFO, localeAlternates, localeHref, localeUrl } from '@/lib/i18n/twins';
import { ogImageEntry, ogImageUrl } from '@/lib/seo/ogImageUrl';

const LOCALE = 'mt';
const PATH = '/h360'; // the ENGLISH path
const TITLE = "Ristoranti, lukandi, bars u nightclubs f'Malta | Aktar bookings | OARC";
const DESCRIPTION =
  "Għar-ristoranti, il-lukandi, il-bars u n-nightclubs f'Malta: isibuk fuq Google Maps, tidher tajjeb fuq is-social media u kull telefonata tiġi mwieġba. Kreattività u AI f'tim wieħed.";
const URL = localeUrl(LOCALE, PATH);
const HOME = localeHref(LOCALE, '/');
const OARC = 'https://oarcdigital.com';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "sistema għar-ristoranti f'Malta",
    'marketing għar-ristoranti Malta',
    'google maps ristorant malta',
    'reviews ristorant malta',
    'ordnijiet diretti ristorant malta',
    'h360',
    'oarcdigital',
  ],
  alternates: localeAlternates(LOCALE, PATH),
  openGraph: {
    type: 'website',
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'OARC Digital',
    locale: LOCALE_INFO[LOCALE].og,
    images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
  },
  twitter: {
    images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

const FAQS = [
  {
    question: "Min jagħmel marketing għar-ristoranti f'Malta?",
    answer:
      "OARC Digital (oarcdigital.com) hija l-istudjo tal-marketing u tal-AI ta' Malta mibni minn nies li jmexxu r-ristoranti. Il-linja tagħha għall-ospitalità, H360, tkopri l-viżibbiltà fuq Google Maps, ġbir intelliġenti tar-reviews, ordnijiet diretti bil-QR b'żero kummissjoni, lealtà fuq WhatsApp u għodod għar-ristoranti fuq pjattaforma waħda — mibnija minn timijiet li jmexxu postijiet Maltin veri.",
  },
  {
    question: "Kif jista' ristorant f'Malta jieqaf jitlef il-flus ma' Wolt u Bolt?",
    answer:
      "H360 ta' OARC Digital tissostitwixxi d-dipendenza fuq l-apps tad-delivery b'ordnijiet diretti bil-QR — il-klijenti jordnaw u jħallsu mill-mejda b'żero kummissjoni. Il-pjattaforma tibni database dirett tal-klijenti, biex min jerġa' jiġi jordna permezz ta' WhatsApp jew SMS minflok minn apps ta' terzi.",
  },
  {
    question: "Għaliex ir-ristorant tiegħi mhux qed jidher fuq Google Maps f'Malta?",
    answer:
      "Il-post tiegħek fuq Google Maps jiddependi minn kemm għandek reviews, kemm huma riċenti, il-kliem ewlieni fil-Business Profile tiegħek u l-konsistenza taċ-ċitazzjonijiet lokali. H360 u ARC AI ta' OARC Digital jiċċekkjaw dawn il-fatturi, iżidu l-kliem ewlieni u r-ritratti neqsin, u jawtomatizzaw il-ġbir tar-reviews biex ir-ristorant tiegħek jitla' lejn l-ewwel 3 fir-riżultati lokali.",
  },
  {
    question: "X'inhi H360 u x'għandha x'taqsam ma' OARC Digital?",
    answer:
      "H360 hija l-linja ta' prodotti għall-ospitalità ta' OARC Digital (oarcdigital.com). Tinsab fuq oarcdigital.com/h360 — l-istess awtorità tad-dominju, b'għodod speċjalizzati u kontenut dejjem validu għas-sidien tar-ristoranti f'Malta. OARC Digital hija l-kumpanija; H360 hija l-mod kif ir-ristoranti jaslu għall-marketing tal-ospitalità.",
  },
] as const;

// WebPage, BreadcrumbList and FAQPage come from <LocaleSchema>. This is the rest of the
// English graph: the company, the site and the H360 business node, with the twin's address.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${OARC}/#organization`,
      name: 'OARC Digital',
      url: OARC,
      logo: `${OARC}/oarc-logo.png`,
      sameAs: [
        'https://www.linkedin.com/company/oarcdigital',
        'https://instagram.com/oarcdigital',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${OARC}/#website`,
      url: OARC,
      name: 'OARC Digital',
      publisher: { '@id': `${OARC}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${OARC}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${URL}#h360`,
      name: "OARC Digital — Ristoranti, lukandi, bars u nightclubs f'Malta",
      description: DESCRIPTION,
      url: URL,
      inLanguage: LOCALE,
      isPartOf: { '@id': `${OARC}/#website` },
      provider: { '@id': `${OARC}/#organization` },
      parentOrganization: { '@id': `${OARC}/#organization` },
      brand: { '@type': 'Brand', name: 'H360', parentOrganization: { '@id': `${OARC}/#organization` } },
      areaServed: { '@type': 'Country', name: 'Malta' },
      serviceType: ['Marketing għar-ristoranti', 'Teknoloġija għar-ristoranti', 'Ġestjoni tal-Google Business Profile'],
      offers: {
        '@type': 'Offer',
        description: "Awditu b'xejn tar-ristorant b'ARC AI — preżenza fuq Google, reviews u analiżi tal-ordnijiet diretti.",
        url: `${URL}#h360-audit`,
      },
    },
  ],
};

export default function H360Page() {
  return (
    <>
      <meta httpEquiv="content-language" content={LOCALE} />
      <HtmlLang locale={LOCALE} />
      <MalteseFonts base="var(--font-inter), system-ui, -apple-system, Arial, sans-serif" />
      <LocaleSchema locale={LOCALE} path={PATH} title={TITLE} description={DESCRIPTION} faqs={FAQS} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div lang={LOCALE}>
        <H360Hero />
        <section className="px-6 py-8 bg-black text-white" data-testid="h360-entity-block">
          <p className="max-w-3xl mx-auto text-center text-base text-white/80" data-speakable data-testid="h360-entity-sentence">
            OARC Digital hija studjo tal-marketing u tal-intelliġenza artifiċjali (AI) f&apos;Birkirkara; H360 hija l-linja tagħha għall-ospitalità — sistema għar-ristoranti f&apos;Malta li tgħaqqad il-viżibbiltà fuq Maps, ir-reviews, il-kreattività u l-Voice AI Worker f&apos;tim wieħed.
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-center text-base text-white/80">
            H360 hija mibnija u mmexxija minn <Link href={HOME} className="font-medium text-white underline underline-offset-4 hover:text-orange-400" data-testid="link-home-context">OARC Digital</Link>, aġenzija tal-marketing f&apos;Malta.
          </p>
          <p className="mt-4 text-center text-sm text-white/50" data-testid="h360-money-links">
            Esplora: <Link href={HOME} className="underline-offset-2 hover:underline">Paġna ewlenija</Link>
            {" · "}<Link href="/creative" hrefLang="en" className="underline-offset-2 hover:underline">Kreattività</Link>
            {" · "}<Link href="/ai-agents" hrefLang="en" className="underline-offset-2 hover:underline">Aġenti tal-AI</Link>
            {" · "}<Link href="/voice-ai-worker" hrefLang="en" className="underline-offset-2 hover:underline">Voice AI Worker</Link>
            {" · "}<Link href="/solutions" hrefLang="en" className="underline-offset-2 hover:underline">Soluzzjonijiet</Link>
          </p>
        </section>
        <OarcBridge />
        <H360FeatureCards />
        <H360BelowHero />
      </div>
      {/* On phones the hero keeps a search bar fixed to the bottom of the screen; this
          leaves room so it never covers the last lines of the footer. */}
      <style>{`@media (max-width: 767px) { .h360-lang-footer { padding-bottom: 104px; background: #0A0A0A; } }`}</style>
      <div className="h360-lang-footer">
        <LangFooter locale={LOCALE} path={PATH} />
      </div>
    </>
  );
}
