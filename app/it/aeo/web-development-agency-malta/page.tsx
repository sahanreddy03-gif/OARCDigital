import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import LocaleSchema from "@/components/i18n/LocaleSchema";
import { LOCALE_INFO, localeAlternates, localeUrl } from "@/lib/i18n/twins";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

// Italian twin of /aeo/web-development-agency-malta. PATH is the ENGLISH path.
const PATH = "/aeo/web-development-agency-malta";
const TITLE = "Web Agency a Malta | Realizzazione siti web | OARC Digital";
const DESCRIPTION =
  "Web agency a Malta. Realizziamo siti web di ogni tipo, 2D, 3D o interattivi, fatti per vendere e farsi trovare su Google e sull'AI. Piano gratuito in 48 ore.";
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
  { question: "Cosa fa una web agency?", answer: "Una web agency progetta, disegna e realizza il tuo sito web, e si assicura che funzioni su ogni telefono e computer. In OARC Digital scriviamo anche i testi, facciamo le foto e i video, prepariamo il sito per farsi trovare su Google e sull'AI e lo colleghiamo a moduli, prenotazioni e WhatsApp." },
  { question: "Quanto costa un sito web a Malta?", answer: "Dipende dal tipo di sito e da quanto è grande. Un sito semplice, un negozio online e un sito 3D sono lavori molto diversi. Non usiamo listini fissi. Scrivici il nome della tua attività su WhatsApp e ti mandiamo un prezzo." },
  { question: "Quanto tempo serve per realizzare un sito web?", answer: "La maggior parte dei siti va online in settimane, non in mesi. Un sito piccolo è più veloce, mentre un negozio online o una web app richiedono più tempo. Ricevi le date di ogni passo prima di iniziare." },
  { question: "Quale piattaforma devo scegliere?", answer: "WordPress se il tuo team pubblica spesso. Webflow per i siti dove il design conta e che cambiano in fretta. Shopify per i negozi online. Uno sviluppo su misura con Next.js per velocità, 3D, web app e tutto ciò che è speciale. Te ne consigliamo una dopo aver capito la tua attività." },
  { question: "Il sito sarà mio?", answer: "Sì. Il dominio, il sito e i contenuti sono tuoi. Non hai nessun vincolo." },
  { question: "Posso modificare il sito da solo?", answer: "Sì. Prepariamo una schermata di modifica semplice e formiamo il tuo team, così puoi cambiare testi, foto e prezzi senza chiamare uno sviluppatore." },
  { question: "La SEO è inclusa?", answer: "Sì. Ogni sito che realizziamo è pronto per farsi trovare: pagine veloci, titoli chiari, etichette schema, una sitemap e un file llms.txt, così Google e gli strumenti AI come ChatGPT e Gemini possono leggerlo. La SEO continuativa dopo il lancio è un servizio a parte." },
  { question: "Potete rifare il mio sito senza farmi perdere le posizioni su Google?", answer: "Sì. Prima di spostare qualsiasi cosa, elenchiamo ogni pagina del tuo vecchio sito e puntiamo ogni vecchio link alla sua nuova pagina. Dopo il lancio controlliamo che Google trovi ancora tutto." },
  { question: "Realizzate siti 3D e interattivi?", answer: "Sì. Realizziamo siti con oggetti 3D che puoi ruotare, scene che si muovono mentre scorri e storie interattive. E facciamo in modo che si carichino in fretta anche su un telefono." },
  { question: "Il mio sito può ricevere prenotazioni e pagamenti?", answer: "Sì. Realizziamo negozi online, sistemi di prenotazione e pagamenti con carta, e li colleghiamo al tuo calendario, al tuo magazzino e alla tua lista clienti." },
  { question: "Cos'è l'assistenza clienti AI sul sito?", answer: "È un assistente sul tuo sito che risponde ai visitatori giorno e notte, usando le tue informazioni: i tuoi servizi, gli orari di apertura e le domande più comuni. Quando non è sicuro, passa la conversazione a te." },
  { question: "Scrivete voi i testi e fate voi le foto?", answer: "Sì. I nostri copywriter, i designer e la troupe video lavorano nello stesso team dei nostri sviluppatori, quindi non ricevi un design vuoto da riempire." },
  { question: "Vi occupate di hosting e assistenza dopo il lancio?", answer: "Sì. Configuriamo l'hosting nell'UE, il lucchetto SSL e i backup giornalieri, e offriamo un piano di assistenza per aggiornamenti e modifiche dopo il lancio." },
  { question: "Cosa c'è nel piano gratuito per il sito web?", answer: "Un piano per il tuo sito: cosa deve dire, che aspetto deve avere, quale tipo di sito è adatto alla tua attività e cosa gli serve per portare richieste. Se hai già un sito, controlliamo anche la sua velocità e come lo vedono Google e l'AI. Lo ricevi su WhatsApp entro 48 ore." },
  { question: "Dove si trova OARC Digital?", answer: `${NAP.streetAddressShort}, ${NAP.addressLocality} ${NAP.postalCode}, Malta. Puoi incontrare il team di persona. WhatsApp ${NAP.phoneDisplay}. Email ${NAP.email}.` },
];

export default function Page() {
  return (
    <>
      <LocaleSchema
        locale="it"
        path={PATH}
        title={TITLE}
        description={DESCRIPTION}
        serviceName="Realizzazione siti web a Malta"
        serviceType="Sviluppo web"
        faqs={faqs}
      />
      <PageContent faqs={faqs} />
    </>
  );
}
