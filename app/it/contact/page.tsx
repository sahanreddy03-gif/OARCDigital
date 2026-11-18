import type { Metadata } from "next";
import LocaleSchema, { type LocaleFaq } from "@/components/i18n/LocaleSchema";
import { LOCALE_INFO, localeAlternates, localeUrl } from "@/lib/i18n/twins";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";

const PATH = "/contact"; // the ENGLISH path
const URL = localeUrl("it", PATH);

const TITLE = "Contatta OARC Digital a Malta | Prenota una Chiamata";
const DESCRIPTION =
  "Contatta OARC Digital a Birkirkara, Malta: chiama il +356 7971 1799 o prenota una chiamata per creatività, agenti AI, H360 o SEO. Anche su WhatsApp.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: localeAlternates("it", PATH),
  openGraph: {
    images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    locale: LOCALE_INFO.it.og,
  },
  twitter: {
    images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

// The same seven questions the English page sends to search engines, in the same order.
const FAQS: readonly LocaleFaq[] = [
  {
    question: "Come posso contattare OARC Digital?",
    answer: `Scrivi su WhatsApp o chiama il ${NAP.phoneDisplay}, manda un'email a ${NAP.email}, oppure passa in ufficio: Level 1, The Brewhouse, Central Business District, ${NAP.addressLocality} ${NAP.postalCode}, Malta. L'ufficio è aperto dalle 09:00 alle 18:00, dal lunedì al venerdì.`,
  },
  {
    question: "Dove si trova l'ufficio di OARC Digital a Malta?",
    answer: `La sede di OARC Digital è al Level 1, The Brewhouse, Central Business District, ${NAP.addressLocality} ${NAP.postalCode}, Malta. The Brewhouse è nel cuore del CBD, con parcheggio in Triq Mikiel Anton Vassalli e a 4 minuti a piedi dall'interscambio degli autobus del CBD.`,
  },
  {
    question: "In quanto tempo risponde OARC alle richieste?",
    answer:
      "Alle richieste che arrivano in orario d'ufficio (dalle 09:00 alle 18:00, dal lunedì al venerdì, ora di Malta) rispondiamo entro 2 ore lavorative. Ai messaggi fuori orario rispondiamo la mattina lavorativa successiva. La chiamata di analisi di 30 minuti viene di solito fissata entro 48 ore dal primo messaggio.",
  },
  {
    question: "La prima chiamata è gratuita?",
    answer:
      "Sì. Il primo incontro è un'analisi gratuita di 30 minuti: troviamo l'opportunità più importante nel modo in cui oggi acquisisci clienti, ti diciamo se OARC è davvero il partner giusto per te e ti spieghiamo quanto costerebbe lavorare insieme. Senza alcun obbligo di proseguire.",
  },
  {
    question: "Cosa devo preparare per la prima chiamata?",
    answer:
      "Il tuo obiettivo principale per i prossimi 90 giorni, quanto spendi oggi al mese in marketing (va bene anche una cifra indicativa), i canali che usi adesso e gli accessi agli strumenti di analisi attivi (GA4, Meta, CRM). Se non li hai, porta le tue domande: la chiamata funziona anche senza numeri.",
  },
  {
    question: "Posso venire in ufficio senza appuntamento?",
    answer: `Sì: Level 1, The Brewhouse, ${NAP.addressLocality} CBD, dalle 09:00 alle 18:00, dal lunedì al venerdì. Ti consigliamo di avvisarci prima al ${NAP.phoneDisplay}, così trovi in sede lo specialista giusto per il tuo progetto.`,
  },
  {
    question: "Qual è il numero di telefono di OARC Digital?",
    answer: `Chiama o scrivi su WhatsApp al ${NAP.phoneDisplay} per creatività, agenti AI, H360 per l'ospitalità o SEO.`,
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            url: URL,
            inLanguage: "it",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["[data-speakable]"],
            },
          }),
        }}
      />
      <LocaleSchema locale="it" path={PATH} title={TITLE} description={DESCRIPTION} faqs={FAQS} />
      <PageContent />
    </>
  );
}
