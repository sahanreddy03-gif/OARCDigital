import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import LocaleSchema from "@/components/i18n/LocaleSchema";
import { LOCALE_INFO, localeAlternates, localeUrl } from "@/lib/i18n/twins";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

// Italian twin of /aeo/seo-agency-malta. PATH is the ENGLISH path.
const PATH = "/aeo/seo-agency-malta";
const TITLE = "Agenzia SEO a Malta | Le ricerche che portano clienti | OARC";
const DESCRIPTION =
  "Agenzia SEO a Malta. Portiamo la tua attività in cima a Google, Google Maps e alle risposte AI come ChatGPT e Gemini. Piano gratuito in 48 ore.";
const URL = localeUrl("it", PATH);

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: localeAlternates("it", PATH),
  openGraph: { images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }), title: TITLE, description: DESCRIPTION, url: URL, type: "website", locale: LOCALE_INFO.it.og },
  twitter: { images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })], card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "Cosa fa un'agenzia SEO?", answer: "Un'agenzia SEO fa trovare la tua attività quando le persone cercano. In OARC Digital questo vuol dire quattro lavori: sistemiamo il tuo sito web, troviamo le parole che scrivono i tuoi clienti, scriviamo le pagine e gli articoli che rispondono a quelle ricerche, e facciamo in modo che siti affidabili e strumenti di intelligenza artificiale (AI) parlino di te. Ogni mese ricevi un report scritto." },
  { question: "Quanto costa la SEO a Malta?", answer: "Dipende dal tuo settore, da quanto sono forti i tuoi concorrenti e dal numero di posti in cui vuoi farti trovare. Non usiamo listini fissi, perché un piccolo negozio e un gruppo di hotel hanno bisogno di lavori molto diversi. Scrivici il nome della tua attività su WhatsApp e ti mandiamo un prezzo." },
  { question: "Quanto tempo ci vuole perché la SEO funzioni?", answer: "Le piccole correzioni si possono vedere in poche settimane. Posizioni forti e stabili richiedono di solito qualche mese, perché Google ha bisogno di tempo per fidarsi di un sito web. Chi ti promette risultati entro la settimana prossima tira a indovinare." },
  { question: "Potete garantire il primo posto su Google?", answer: "No. Nessuno può farlo, e fai attenzione a chi dice di poterlo fare. L'ordine lo decide Google, non le agenzie. Noi promettiamo tutto il lavoro, fatto bene, e un report chiaro che mostra cosa si è mosso." },
  { question: "Che differenza c'è tra SEO, AEO e GEO?", answer: "La SEO porta il tuo sito web in cima a Google e Bing. L'AEO, answer engine optimisation (ottimizzazione per i motori di risposta), fa scegliere le tue parole come l'unica risposta dall'AI di Google e dagli assistenti vocali. La GEO, generative engine optimisation (ottimizzazione per i motori generativi), fa sì che chat AI come ChatGPT, Gemini e Perplexity consiglino la tua attività per nome. Hanno la stessa base, quindi le gestiamo come un unico piano." },
  { question: "Come faccio a farmi consigliare da ChatGPT?", answer: "Gli strumenti AI consigliano le attività che riescono a trovare, a capire e di cui si fidano. Quindi il tuo sito web deve avere fatti chiari e risposte chiare, il tuo nome, indirizzo e telefono devono essere uguali ovunque, e siti affidabili e recensioni devono parlare di te. Noi sistemiamo tutte e tre le cose, poi ogni mese controlliamo cosa dicono di te gli strumenti AI." },
  { question: "Come faccio a sapere se l'AI parla della mia attività?", answer: "Chiedici il piano di posizionamento gratuito. Facciamo a ChatGPT, Gemini e Perplexity le domande che fanno i tuoi clienti, e ti mostriamo chi consigliano oggi e a che punto sei tu." },
  { question: "Fate SEO anche in maltese, oltre che in inglese?", answer: "Sì. Studiamo le ricerche in inglese, in maltese e in italiano, perché a Malta le persone non cercano in una lingua sola. Molte agenzie guardano solo l'inglese." },
  { question: "Lavorate con il mio settore?", answer: "Sì. Costruiamo un piano diverso per ogni settore: ristoranti, hotel, cliniche, immobiliare, studi legali, negozi, iGaming, fintech, edilizia, scuole, turismo e altri ancora. Se hai clienti che cercano, possiamo aiutarli a trovarti." },
  { question: "Mi serve un sito web nuovo per fare SEO?", answer: "Non sempre. Prima controlliamo il tuo sito web. Spesso basta sistemarlo. Se è troppo lento o troppo vecchio per posizionarsi, il nostro team web può rifarlo." },
  { question: "Consulente SEO o agenzia SEO: cosa è meglio?", answer: "Un consulente è una persona sola che dà consigli. Un'agenzia fa anche il lavoro. In OARC Digital il tuo piano viene portato avanti da copywriter, sviluppatori web, una troupe video e ingegneri AI in un unico team, così niente resta fermo ad aspettare qualcun altro." },
  { question: "Cosa c'è nel piano di posizionamento gratuito?", answer: "Dove sei oggi su Google e Google Maps, cosa dicono di te ChatGPT, Gemini e Perplexity, le ricerche che fanno i tuoi clienti, cosa fanno meglio i tuoi concorrenti più vicini e le tue prime 5 correzioni, in ordine. Lo ricevi su WhatsApp entro 48 ore." },
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
        serviceName="Agenzia SEO a Malta"
        serviceType="Ottimizzazione per i motori di ricerca (SEO, AEO e GEO)"
        faqs={faqs}
      />
      <PageContent faqs={faqs} />
    </>
  );
}
