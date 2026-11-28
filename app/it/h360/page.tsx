import Link from "next/link";
import type { Metadata } from 'next';
import H360Hero from './_components/Hero';
import OarcBridge from './_components/OarcBridge';
import H360FeatureCards from './_components/FeatureCards';
import H360BelowHero from './_components/BelowHero';
import HtmlLang from '@/components/i18n/HtmlLang';
import LangFooter from '@/components/i18n/LangFooter';
import LocaleSchema from '@/components/i18n/LocaleSchema';
import { LOCALE_INFO, localeAlternates, localeHref, localeUrl } from '@/lib/i18n/twins';
import { ogImageEntry, ogImageUrl } from '@/lib/seo/ogImageUrl';

const LOCALE = 'it';
const PATH = '/h360'; // the ENGLISH path
const TITLE = 'Ristoranti, hotel, bar e locali notturni a Malta | Più prenotazioni | OARC';
const DESCRIPTION =
  'Per ristoranti, hotel, bar e locali notturni a Malta: farsi trovare su Google Maps, curare i social e rispondere a ogni chiamata. Creatività e AI in un solo team.';
const URL = localeUrl(LOCALE, PATH);
const HOME = localeHref(LOCALE, '/');
const OARC = 'https://oarcdigital.com';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'sistema per ristoranti a Malta',
    'marketing per ristoranti Malta',
    'google maps ristorante malta',
    'recensioni ristorante malta',
    'ordini diretti ristorante malta',
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
    question: 'Chi si occupa di marketing per ristoranti a Malta?',
    answer:
      "OARC Digital (oarcdigital.com) è lo studio di marketing e AI di Malta creato da chi lavora nella ristorazione. La sua linea H360 riunisce in un'unica piattaforma visibilità su Google Maps, raccolta intelligente delle recensioni, ordini diretti via QR a zero commissioni, fidelizzazione su WhatsApp e strumenti per il ristorante. La creano team che gestiscono veri locali maltesi.",
  },
  {
    question: 'Come può un ristorante a Malta smettere di perdere soldi con Wolt e Bolt?',
    answer:
      'H360 di OARC Digital sostituisce la dipendenza dalle app di delivery con gli ordini diretti via QR: i clienti ordinano e pagano al tavolo a zero commissioni. La piattaforma crea un database diretto dei clienti, così chi torna riordina tramite WhatsApp o SMS invece che dalle app di terzi.',
  },
  {
    question: 'Perché il mio ristorante non compare su Google Maps a Malta?',
    answer:
      "La posizione su Google Maps dipende da quante recensioni hai, da quanto sono recenti, dalle parole chiave nel tuo Profilo dell'attività e dalla coerenza delle citazioni locali. H360 e ARC AI di OARC Digital analizzano questi fattori, aggiungono le parole chiave e le immagini che mancano e automatizzano la raccolta delle recensioni, così il tuo ristorante sale verso i primi 3 risultati locali.",
  },
  {
    question: "Che cos'è H360 e che rapporto ha con OARC Digital?",
    answer:
      "H360 è la linea di prodotti per la ristorazione di OARC Digital (oarcdigital.com). Si trova su oarcdigital.com/h360: stessa autorevolezza di dominio, strumenti specializzati e contenuti sempre attuali per chi ha un ristorante a Malta. OARC Digital è l'azienda; H360 è il modo in cui i ristoranti accedono al marketing per la ristorazione.",
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
      name: 'OARC Digital — Ristoranti, hotel, bar e locali notturni a Malta',
      description: DESCRIPTION,
      url: URL,
      inLanguage: LOCALE,
      isPartOf: { '@id': `${OARC}/#website` },
      provider: { '@id': `${OARC}/#organization` },
      parentOrganization: { '@id': `${OARC}/#organization` },
      brand: { '@type': 'Brand', name: 'H360', parentOrganization: { '@id': `${OARC}/#organization` } },
      areaServed: { '@type': 'Country', name: 'Malta' },
      serviceType: ['Marketing per ristoranti', 'Tecnologia per ristoranti', "Gestione del Profilo dell'attività su Google"],
      offers: {
        '@type': 'Offer',
        description: 'Audit gratuito del ristorante con ARC AI: presenza su Google, recensioni e analisi degli ordini diretti.',
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
      <LocaleSchema locale={LOCALE} path={PATH} title={TITLE} description={DESCRIPTION} faqs={FAQS} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div lang={LOCALE}>
        <H360Hero />
        <section className="px-6 py-8 bg-black text-white" data-testid="h360-entity-block">
          <p className="max-w-3xl mx-auto text-center text-base text-white/80" data-speakable data-testid="h360-entity-sentence">
            OARC Digital è uno studio di marketing e intelligenza artificiale (AI) con sede a Birkirkara. H360 è la sua linea per la ristorazione: un sistema per ristoranti a Malta con visibilità su Maps, recensioni, contenuti creativi e Voice AI Worker in un solo team.
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-center text-base text-white/80">
            H360 è creato e gestito da <Link href={HOME} className="font-medium text-white underline underline-offset-4 hover:text-orange-400" data-testid="link-home-context">OARC Digital</Link>, agenzia di marketing a Malta.
          </p>
          <p className="mt-4 text-center text-sm text-white/50" data-testid="h360-money-links">
            Esplora: <Link href={HOME} className="underline-offset-2 hover:underline">Home</Link>
            {" · "}<Link href="/creative" hrefLang="en" className="underline-offset-2 hover:underline">Creatività</Link>
            {" · "}<Link href="/ai-agents" hrefLang="en" className="underline-offset-2 hover:underline">Agenti AI</Link>
            {" · "}<Link href="/voice-ai-worker" hrefLang="en" className="underline-offset-2 hover:underline">Voice AI Worker</Link>
            {" · "}<Link href="/solutions" hrefLang="en" className="underline-offset-2 hover:underline">Soluzioni</Link>
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
