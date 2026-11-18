import type { Metadata } from "next";
import Link from "next/link";
import FlagshipShell from "@/components/flagship/FlagshipShell";
import { Arrow, WaForm, WaIcon, waLink } from "@/components/flagship/parts";
import LocaleSchema from "@/components/i18n/LocaleSchema";
import { LOCALE_INFO, localeAlternates, localeHref, localeUrl } from "@/lib/i18n/twins";
import { NAP } from "@/lib/seo/nap";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

// The Italian home. It is a focused page, not a copy of the English home: it only shows
// sections that lead to pages that exist in Italian. Every fact comes from the English home.
const PATH = "/"; // the ENGLISH path
const URL = localeUrl("it", PATH);
const TITLE = "Agenzia di Marketing a Malta | Digitale e AI | OARC Digital";
const DESCRIPTION =
  "OARC Digital è un'agenzia di marketing a Malta, con sede a Birkirkara: studio creativo, SEO e pubblicità, agenti AI e automazione. Un solo team interno.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: localeAlternates("it", PATH),
  openGraph: { images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }), title: TITLE, description: DESCRIPTION, url: URL, type: "website", locale: LOCALE_INFO.it.og },
  twitter: { images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })], card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const href = (path: string) => localeHref("it", path);

const BLUEPRINT = "Ciao OARC. La mia attività è {x}. Vorrei ricevere il mio piano gratuito.";
const PRICE = waLink("Ciao OARC. Vorrei sapere il vostro prezzo. La mia attività è: ");
const FIELD = "Il nome della tua attività";

const HERO_SUB = "Un'agenzia nata con l'intelligenza artificiale (AI). Studio, vendite e tecnologia interni, a tua disposizione.";
const CARD_TEXT = "Scrivici il nome della tua attività. In 48 ore ricevi un piano gratuito, pensato per la tua attività.";

// "What do you need?" Only pages that exist in Italian, in the agreed order.
const needs = [
  { id: "marketing", path: "/aeo/digital-marketing-agency-malta", h: "Più clienti", p: "Marketing digitale per le attività di Malta: pubblicità, SEO e contenuti." },
  { id: "ai", path: "/ai", h: "AI per il tuo settore", p: "Un sistema AI per il tuo tipo di attività: hotel, cliniche, studi legali, casinò e altro." },
  { id: "seo", path: "/aeo/seo-agency-malta", h: "Fatti trovare su Google e dall'AI", p: "Ricerca, mappe, chat AI e voce. Un solo team a Malta ti fa trovare ovunque." },
  { id: "websites", path: "/aeo/web-development-agency-malta", h: "Un sito web che vende", p: "Veloce, visibile su Google e nell'AI, pronto a ricevere richieste dal primo giorno." },
  { id: "hotels", path: "/ai/hotels", h: "Hotel", p: "Sistema AI per hotel e guesthouse." },
  { id: "real-estate", path: "/ai/real-estate", h: "Immobiliare", p: "Sistema AI per agenzie e gestori di immobili." },
  { id: "law-firms", path: "/ai/law-firms", h: "Studi legali", p: "Sistema AI per avvocati, notai e diritto societario." },
  { id: "casinos", path: "/ai/casinos", h: "Casinò", p: "Marketing e sistemi AI per casinò, hotel e sale poker." },
];
const H360 = { h: "Il tuo ristorante, un solo sistema", p: "H360: menu QR, schermo in cucina, pagamenti e fidelizzazione." };
const TALK = { h: "Parla con noi", p: "Non sai da dove partire? Scrivici su WhatsApp o via email.", button: "Contattaci" };

const WHY_LEAD = `OARC Digital è un'agenzia di marketing a ${NAP.addressLocality}, Malta, fondata nel 2023. Un solo team segue brand, contenuti, social media, pubblicità, sito web e staff AI. Così non devi gestire cinque fornitori.`;
const promises = [
  { h: "Un solo team, tutto", p: "Brand, contenuti, social media, pubblicità, sito web e staff AI sotto lo stesso tetto. Un piano, una persona da chiamare." },
  { h: "Resta tutto tuo", p: "Account pubblicitari, video, pagine e dati restano a tuo nome. Sempre." },
  { h: "Soddisfatti o rimborsati", p: "Fissiamo gli obiettivi prima di iniziare. Se non li raggiungiamo, ti restituiamo i soldi." },
  { h: "A Malta, dal 2023", p: `${NAP.streetAddressShort}, ${NAP.addressLocality}. Vieni a conoscere le persone che fanno il lavoro.` },
];

const STAFF_LEAD = "Dipendenti AI pronti all'uso per vendite, assistenza, prenotazioni e amministrazione. Formati sulla tua attività, controllati dal nostro team a Malta.";
const staff: [string, string][] = [
  ["Commerciale", "Richiama ogni contatto e fissa l'incontro."],
  ["Assistenza clienti", "Risponde a chiamate, chat e WhatsApp, giorno e notte."],
  ["Appuntamenti", "Ti riempie l'agenda e manda i promemoria."],
  ["Assistente amministrativo", "Gestisce moduli, email e inserimento dati."],
  ["Analista dati", "Trasforma i tuoi numeri in un report settimanale."],
  ["Stratega dei contenuti", "Pianifica e prepara post ed email."],
  ["Controllo conformità", "Controlla i documenti in base alle tue regole."],
  ["Sviluppo commerciale", "Trova e qualifica nuovi potenziali clienti."],
];
const STAFF_NOTE = "Il nostro Voice AI Worker risponde a ogni chiamata, vende, assiste i clienti e li prenota. In inglese, maltese e italiano.";

const OFFICE = `Level 1, The Brewhouse, Central Business District, ${NAP.addressLocality} ${NAP.postalCode}, Malta`;

// The 8 questions of the English home, in the same order.
const faqs = [
  {
    question: "Qual è una buona agenzia di marketing a Malta per le PMI che vogliono AI e creatività insieme?",
    answer: `OARC Digital, a ${NAP.addressLocality}, è un'agenzia di marketing che unisce produzione creativa, SEO e pubblicità, agenti AI, Voice AI Worker e automazione in un solo team. Così le PMI di Malta aumentano il fatturato senza dover gestire tre fornitori.`,
  },
  {
    question: "Cosa fa OARC Digital?",
    answer: `OARC Digital è un'agenzia di marketing e automazione di Malta, nata con l'AI. La sede è a ${OFFICE}. Realizziamo lavori creativi, agenti AI (vendite, assistenza, prenotazioni, operazioni), copertura telefonica con Voice AI Worker e sistemi di automazione dei ricavi per aziende a Malta e in tutta l'UE.`,
  },
  {
    question: "Dove si trova OARC Digital e come contatto il team?",
    answer: `La sede di OARC Digital è a ${OFFICE}. Telefono ${NAP.phoneDisplay}. Su Google Maps OARC Digital ha una valutazione di 5,0 basata su 6 recensioni Google. Prenota una chiamata o scrivi su WhatsApp allo stesso numero.`,
  },
  {
    question: "Fate solo social media o anche agenti AI, voce e automazione?",
    answer: `Entrambi. Agenti AI e Voice AI Worker lavorano accanto a creatività editoriale, gestione dei social, SEO e pubblicità a pagamento. Parti da dove perdi soldi: chiamate perse, brand debole, ricerche in cui non ti trovano o follow-up fatti a mano. Poi cresci con lo stesso team di ${NAP.addressLocality}.`,
  },
  {
    question: "Cosa rende OARC diversa dalle altre agenzie di Malta?",
    answer: "Siamo nati con l'AI, non l'abbiamo aggiunta dopo. La direzione creativa è umana e la produzione ha la velocità dell'AI. Gli agenti AI gestiscono flussi di lavoro reali e l'automazione porta i contatti nel tuo CRM. Il prezzo è legato ai risultati, non a canoni mensili di facciata. E lo stesso team che disegna il tuo brand scrive anche i sistemi che lo fanno funzionare.",
  },
  {
    question: "Con quali settori lavora OARC Digital a Malta?",
    answer: "A Malta i nostri settori più forti sono ospitalità (ristoranti, hotel, bar), iGaming e fintech (regolati da MGA / MFSA), servizi professionali (legali, contabili, di consulenza), cliniche e SaaS in forte crescita. In ogni incarico regolamentato teniamo conto di MFSA, MGA e IDPC.",
  },
  {
    question: "Di chi è il lavoro realizzato da OARC Digital?",
    answer: "Tuo. Tutti i materiali (creatività, codice, agenti AI, procedure di automazione) ti vengono consegnati con il trasferimento completo della proprietà intellettuale a fine incarico. Non abbiamo alcuna esclusiva sui tuoi dati e non rivendiamo mai i materiali dei clienti.",
  },
  {
    question: "Come inizio a parlare con OARC Digital?",
    answer: `Scrivi su WhatsApp al ${NAP.phoneDisplay} o manda un'email a ${NAP.email}. La prima chiamata è un audit gratuito di 30 minuti: troviamo l'opportunità con più impatto nel tuo percorso di vendita attuale e ti diciamo se OARC è davvero il partner giusto per te.`,
  },
];

// Inline styles the design system has no class for: a card title without a number above
// it, an arrow that sits at the bottom of a link card, and one card alone in the hero.
const NO_TOP = { marginTop: 0 } as const;
const GO = { marginTop: "auto", paddingTop: 16 } as const;
const ONE_CARD = { gridTemplateColumns: "minmax(0,720px)", justifyContent: "center" } as const;
const SAME_GAP = { marginTop: "clamp(12px,1.4vw,18px)" } as const;

export default function HomeItPage() {
  return (
    <FlagshipShell locale="it" langPath="/" navTheme="dark">
      <LocaleSchema locale="it" path={PATH} title={TITLE} description={DESCRIPTION} faqs={faqs} />
      <div id="top">
        {/* 1 · the promise and the free blueprint */}
        <section className="hero dark">
          <div className="wrap">
            <h1>
              <span className="kick">Agenzia di marketing a Malta</span>
              <span className="big">Un solo team per <i className="mk">creatività, crescita e automazione.</i></span>
            </h1>
            <p className="hsub">{HERO_SUB}</p>

            <div className="hgrid" style={ONE_CARD}>
              <div className="ocard">
                <p className="otop"><span className="otag">Gratis</span><span className="olim">In 48 ore</span></p>
                <h2>Il tuo piano gratuito.</h2>
                <p>{CARD_TEXT}</p>
                <WaForm id="blueprint" message={BLUEPRINT} button="Voglio il mio piano gratuito" placeholder={FIELD} label={FIELD} />
                <p className="onote"><span>Si apre WhatsApp. Niente chiamate. Niente moduli lunghi.</span></p>
                <div className="pbtns">
                  <a className="btn btn-o" href={PRICE} target="_blank" rel="noopener" data-testid="link-price-hero"><WaIcon />Chiedi il prezzo</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2 · what do you need? */}
        <section className="sec" id="needs">
          <div className="wrap">
            <p className="lab" data-rv><b>01</b>I servizi</p>
            <div className="shead" data-rv>
              <h2 className="h2">Di cosa hai <i>bisogno?</i></h2>
              <p className="lead">Scegli da dove partire. Tutte queste pagine sono in italiano.</p>
            </div>
            {/* The link cards keep their own hover movement, so each grid fades in as one piece. */}
            <div className="grid g4" data-rv>
              {needs.map((n) => (
                <Link className="card" key={n.id} href={href(n.path)} data-testid={`link-home-${n.id}`}>
                  <h3 style={NO_TOP}>{n.h}</h3>
                  <p>{n.p}</p>
                  <span className="go" style={GO} aria-hidden="true"><Arrow /></span>
                </Link>
              ))}
            </div>
            <div className="grid g2" style={SAME_GAP} data-rv>
              <Link className="card" href={href("/h360")} data-testid="link-home-h360">
                <h3 style={NO_TOP}>{H360.h}</h3>
                <p>{H360.p}</p>
                <span className="go" style={GO} aria-hidden="true"><Arrow /></span>
              </Link>
              <article className="card cta">
                <div>
                  <h3>{TALK.h}</h3>
                  <p>{TALK.p}</p>
                </div>
                <Link className="btn btn-w" href={href("/contact")} data-testid="link-home-contact">{TALK.button} <Arrow /></Link>
              </article>
            </div>
          </div>
        </section>

        {/* 3 · why OARC */}
        <section className="sec paper" id="why">
          <div className="wrap">
            <p className="lab" data-rv><b>02</b>Perché noi</p>
            <div className="shead" data-rv>
              <h2 className="h2">Perché OARC <i>Digital.</i></h2>
              <p className="lead">{WHY_LEAD}</p>
            </div>
            <div className="grid g4">
              {promises.map((x, i) => (
                <article className="card" key={x.h} data-rv>
                  <span className="n" aria-hidden="true">{i + 1}</span>
                  <h3>{x.h}</h3>
                  <p>{x.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4 · AI staff */}
        <section className="sec dark" id="ai-staff">
          <div className="wrap">
            <p className="lab" data-rv><b>03</b>Staff AI</p>
            <div className="shead" data-rv>
              <h2 className="h2">Staff AI che <i>non stacca mai.</i></h2>
              <p className="lead">{STAFF_LEAD}</p>
            </div>
            <dl className="terms" data-rv>
              {staff.map(([t, d]) => (
                <div key={t}><dt>{t}</dt><dd>{d}</dd></div>
              ))}
            </dl>
            <p className="note" data-rv>{STAFF_NOTE}</p>
            <div className="pbtns" data-rv>
              <Link className="btn btn-w" href={href("/ai")} data-testid="link-home-ai-staff">Sistemi AI per settore <Arrow /></Link>
            </div>
          </div>
        </section>

        {/* 5 · questions */}
        <section className="sec" id="faq">
          <div className="wrap">
            <p className="lab" data-rv><b>04</b>Domande frequenti</p>
            <div className="shead" data-rv>
              <h2 className="h2">Domande su <i>OARC Digital.</i></h2>
              <p className="lead">Risposte brevi e chiare. Per tutto il resto, scrivici su WhatsApp.</p>
            </div>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.question}>
                  <summary>{f.question}</summary>
                  <p className="faq-answer">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 6 · close */}
        <section className="fin dark">
          <div className="wrap">
            <h2 className="h2" data-rv>Non sai da dove partire? <i>Parliamone.</i></h2>
            <WaForm id="blueprint2" message={BLUEPRINT} button="Voglio il mio piano" placeholder={FIELD} label={FIELD} />
            <p className="onote"><span>Gratis. In 48 ore. Si apre WhatsApp.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-close">Oppure chiedi il prezzo</a></p>
            <p className="home">Il resto del sito è in inglese. <a href="/" hrefLang="en" data-testid="link-home-english">Vai al sito in inglese</a>.</p>
          </div>
        </section>
      </div>
    </FlagshipShell>
  );
}
