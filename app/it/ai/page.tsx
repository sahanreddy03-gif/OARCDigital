import type { Metadata } from "next";
import Link from "next/link";
import FlagshipShell from "@/components/flagship/FlagshipShell";
import { Arrow, WaForm, WaIcon, waLink } from "@/components/flagship/parts";
import { LOCALE_INFO, SITE, hasTwins, localeAlternates, localeHref, localeUrl } from "@/lib/i18n/twins";
import { NAP } from "@/lib/seo/nap";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

// Italian twin of /ai. PATH is the ENGLISH path.
const LOCALE = "it" as const;
const PATH = "/ai";
const URL = localeUrl(LOCALE, PATH);
const HOME = localeHref(LOCALE, "/");
const TITLE = "Sistemi AI per Aziende a Malta, per Settore | OARC Digital";
const DESCRIPTION =
  "Sistemi AI per aziende a Malta: l'AI risponde alle richieste, prenota e sbriga l'amministrazione, collegata a sito web e WhatsApp. Piano gratuito in 48 ore.";
const OG = { title: "Sistemi AI, costruiti intorno alla tua attività", subtitle: "Creati e gestiti dal team di OARC a Malta.", eyebrow: "Sistemi AI" };

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: localeAlternates(LOCALE, PATH),
  openGraph: { images: ogImageEntry(OG), title: TITLE, description: DESCRIPTION, url: URL, type: "website", locale: LOCALE_INFO[LOCALE].og },
  twitter: { images: [ogImageUrl(OG)], card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const BLUEPRINT = "Ciao OARC. La mia attività è {x}. Vorrei ricevere il mio piano AI gratuito.";
const PRICE = waLink("Ciao OARC. Vorrei sapere il prezzo di un sistema AI. La mia attività è: ");
const BUSINESS_NAME = "Il nome della tua attività";

// The directory at the top of the page, in the same order as the English page.
// Each row: short name, one short line, and the name used in the structured data.
// An industry with an Italian page (listed in lib/i18n/twins.ts) links to /it/ai/...;
// every other one keeps its English address and is marked hrefLang="en".
const INDUSTRY_TEXT: { slug: string; name: string; line: string; schema: string }[] = [
  { slug: "real-estate", name: "Immobiliare", line: "Agenzie e gestori immobiliari", schema: "Sistema AI per agenzie immobiliari" },
  { slug: "law-firms", name: "Studi legali", line: "Avvocati, notai, societario", schema: "Sistema AI per studi legali" },
  { slug: "clinics", name: "Cliniche", line: "Medici, dentisti e specialisti", schema: "Sistema AI per cliniche e ospedali privati" },
  { slug: "hotels", name: "Hotel", line: "Hotel e guest house", schema: "Sistema AI per hotel" },
  { slug: "restaurants", name: "Ristoranti", line: "Ristoranti, caffè e bar", schema: "Sistema AI per ristoranti" },
  { slug: "casinos", name: "Casinò", line: "Casinò, hotel e sala poker", schema: "Sistemi AI e marketing per casinò" },
  { slug: "tourism", name: "Turismo", line: "Tour, barche e attività", schema: "Sistema AI per attività turistiche" },
  { slug: "education", name: "Scuole", line: "Scuole, istituti e lezioni private", schema: "Sistema AI per scuole e istituti" },
  { slug: "igaming-operators", name: "Operatori iGaming", line: "Casinò online e bookmaker", schema: "Sistema AI per operatori iGaming" },
  { slug: "igaming-suppliers", name: "Fornitori iGaming", line: "Piattaforme e game studio", schema: "Sistema AI per fornitori iGaming" },
  { slug: "igaming-affiliates", name: "Affiliati iGaming", line: "Siti di recensioni e media", schema: "Sistema AI per affiliati iGaming" },
  { slug: "business-admin", name: "Amministrazione", line: "Fatture, bollette e documenti", schema: "Sistema AI per l'amministrazione aziendale" },
];

const INDUSTRIES = INDUSTRY_TEXT.map((c) => {
  const path = `/ai/${c.slug}`;
  const twin = hasTwins(path);
  return { ...c, twin, href: twin ? localeHref(LOCALE, path) : path, url: localeUrl(twin ? LOCALE : "en", path) };
});

const jobs = [
  { h: "Risponde.", p: "Chat sul sito, WhatsApp, telefono, email e messaggi social. Giorno e notte, con le tue informazioni.", we: "Nessuna richiesta aspetta fino al mattino." },
  { h: "Prenota.", p: "Prende gli appuntamenti, manda i promemoria e sposta le prenotazioni quando i piani cambiano.", we: "Meno appuntamenti saltati. Un'agenda più piena." },
  { h: "Vende.", p: "Raccoglie ogni contatto, fa le domande giuste, lo ricontatta e prepara il preventivo.", we: "Nessun contatto si raffredda." },
  { h: "Sbriga l'amministrazione.", p: "Documenti, fatture, inserimento dati e report settimanale, fatti da soli.", we: "Ore recuperate, ogni settimana." },
  { h: "Sa cosa succede.", p: "Un solo schermo mostra cosa è arrivato, cosa è stato fatto e dove servi tu.", we: "Vedi tutto." },
];

const tools = [
  "Il tuo sito web", "WhatsApp", "Telefonate", "Email", "Messaggi Instagram e Facebook", "Google Calendar", "Outlook",
  "HubSpot", "Salesforce", "Il tuo CRM", "Google Sheets ed Excel", "Shopify", "WordPress", "Il tuo sistema di prenotazione", "La tua cassa o il POS", "Il tuo software di contabilità",
];

const control = [
  { h: "Le regole le fai tu.", p: "Cosa può dire, cosa può fare e cosa richiede sempre il tuo OK." },
  { h: "Quando non è sicuro, chiede.", p: "Passa la conversazione a una persona, con tutto lo storico, così nessuno deve ripetersi." },
  { h: "Puoi vedere tutto.", p: "Ogni messaggio e ogni azione restano in un registro che puoi leggere." },
  { h: "Una persona può intervenire.", p: "Il tuo team può prendere in mano qualsiasi conversazione in qualsiasi momento." },
  { h: "Testato prima di partire.", p: "Prima lo proviamo con domande vere della tua attività e correggiamo ciò che sbaglia." },
  { h: "Puoi spegnerlo.", p: "Il sistema è tuo. Un clic e si ferma." },
];

const terms: [string, string][] = [
  ["Agente AI", "Un software che svolge un compito per te. Non si limita a chattare."],
  ["LLM", "Il cervello AI che legge e scrive, come quello dietro ChatGPT."],
  ["Knowledge base", "Le tue informazioni. L'AI risponde da qui, senza tirare a indovinare."],
  ["Automazione", "Passaggi che partono da soli, nell'ordine giusto."],
  ["Integrazione", "Il modo in cui i tuoi strumenti si parlano."],
  ["CRM", "Un'unica lista di tutti i clienti e di tutti i contatti."],
  ["Passaggio a una persona", "Il momento in cui una persona approva o subentra."],
  ["Guardrail", "Regole che l'AI non può infrangere."],
  ["Allucinazione", "Quando l'AI si inventa qualcosa. I buoni sistemi sono costruiti per impedirlo."],
  ["Audit log", "Un registro di tutto ciò che l'AI ha fatto."],
  ["GDPR", "La legge europea che protegge i dati personali."],
  ["AI vocale", "AI che risponde al telefono e parla come una persona."],
];

const reasons = [
  { h: "Prima veniamo da te.", p: "I nostri sviluppatori vengono a trovarti, guardano come va davvero la tua settimana e costruiscono su quello." },
  { h: "Un sistema, non un chatbot.", p: "Sito web, WhatsApp, telefono, prenotazioni, CRM e amministrazione, che lavorano come una cosa sola." },
  { h: "Funziona con ciò che hai.", p: "HubSpot, Salesforce o i tuoi strumenti. Non devi cambiare tutto." },
  { h: "Lo gestiamo con te.", p: "Lo controlliamo, lo sistemiamo e lo miglioriamo ogni mese. Non resti mai da solo." },
  { h: "AI e marketing in un solo team.", p: "La stessa agenzia porta le richieste e costruisce il sistema che risponde." },
  { h: "Puoi incontrarci.", p: "Siamo a Birkirkara. Persone vere, dal vivo, a Malta." },
];

const included = [
  "Una mappa della tua settimana e di dove perdi tempo",
  "Chat AI sul tuo sito web",
  "AI su WhatsApp e nei messaggi social",
  "AI vocale che risponde al telefono",
  "AI che legge e ordina le tue email",
  "Prenotazioni, promemoria e spostamenti",
  "Raccolta dei contatti e follow-up",
  "Preventivi e proposte preparati per te",
  "Il tuo CRM collegato e sempre aggiornato",
  "Documenti, fatture e inserimento dati",
  "Un'unica dashboard per tutto",
  "Regole, approvazioni e un registro completo",
  "Formazione per il tuo team",
  "Cura, controlli e miglioramenti ogni mese",
];

const faqs = [
  { question: "Che cos'è un sistema AI per un'azienda?", answer: "È un software che svolge per te i compiti di ogni giorno: risponde alle richieste, prende gli appuntamenti, ricontatta i potenziali clienti e sbriga l'amministrazione. È collegato a sito web, WhatsApp, telefono, email e lista clienti, così i compiti si fanno da soli, giorno e notte, mentre il tuo team mantiene il controllo." },
  { question: "Cosa farà esattamente per la mia attività?", answer: "Dipende dalla tua attività. Mandaci il nome della tua attività e in 48 ore ricevi un piano AI gratuito: una mappa dei compiti che l'AI può togliere al tuo team e quale costruire per primo." },
  { question: "Funziona con gli strumenti che uso già?", answer: "Sì, nella maggior parte dei casi. Ci colleghiamo a sito web, WhatsApp, telefono, email, calendario e lista clienti, compresi HubSpot, Salesforce e i sistemi su misura. Non devi cambiare tutto." },
  { question: "Quanto ci vuole perché sia attivo?", answer: "Attiviamo il tuo primo sistema in 72 ore. I sistemi più grandi, con tanti collegamenti, richiedono più tempo, e ricevi le date prima di iniziare." },
  { question: "Quanto costa un sistema AI a Malta?", answer: "Dipende da quanti compiti svolge e da quanti strumenti collega. Veniamo da te, vediamo come lavori e poi ti diamo un prezzo. Per iniziare, mandaci su WhatsApp il nome della tua attività." },
  { question: "Cosa succede quando l'AI non conosce la risposta?", answer: "Non tira a indovinare. Passa la conversazione a una persona del tuo team, con tutto lo storico, così il cliente non deve ripetere nulla." },
  { question: "Una persona può subentrare in qualsiasi momento?", answer: "Sì. Il tuo team può entrare in qualsiasi conversazione in qualsiasi momento, e puoi spegnere il sistema con un clic." },
  { question: "Dirà cose sbagliate ai miei clienti?", answer: "Lo costruiamo perché risponda con le tue informazioni, con regole che non può infrangere, e prima di attivarlo lo proviamo con domande vere della tua attività. Tutto ciò di cui non è sicuro passa a una persona." },
  { question: "È un chatbot?", answer: "No. Un chatbot chatta e basta. Un sistema AI fa anche il lavoro: fissa l'appuntamento, aggiorna la lista clienti, manda il promemoria e prepara il preventivo." },
  { question: "Parla maltese e altre lingue?", answer: "Può rispondere in inglese e in maltese, e nelle altre lingue che usano i tuoi clienti. Proviamo ogni lingua con te prima del lancio." },
  { question: "Chi lo segue dopo il lancio?", answer: "Noi. Lo controlliamo, lo sistemiamo e lo miglioriamo ogni mese, e il tuo team può incontrarci di persona a Malta." },
  { question: "Mi serve personale tecnico?", answer: "No. Lo costruiamo, lo colleghiamo e lo gestiamo con te. Al tuo team basta saper leggere la dashboard e sapere quando intervenire." },
  { question: "Posso iniziare in piccolo?", answer: "Sì. La maggior parte delle attività parte da un solo compito, come rispondere alle richieste o prendere le prenotazioni, e ne aggiunge altri quando vede che funziona." },
  { question: "Avete sistemi AI per il mio settore?", answer: "Sì. Abbiamo sistemi per agenzie immobiliari, studi legali, cliniche, hotel, ristoranti, turismo, scuole, iGaming e amministrazione aziendale, e costruiamo anche per qualsiasi altro settore." },
  { question: "Dove si trova OARC Digital?", answer: `${NAP.streetAddressShort}, ${NAP.addressLocality} ${NAP.postalCode}, Malta. Puoi incontrare il team di persona. WhatsApp ${NAP.phoneDisplay}. Email ${NAP.email}.` },
];

// Same order as the English structured data: every industry, then casinos last.
const SCHEMA_LIST = [...INDUSTRIES.filter((c) => c.slug !== "casinos"), ...INDUSTRIES.filter((c) => c.slug === "casinos")];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${URL}#page`,
      name: "Sistemi AI per settore",
      url: URL,
      description: DESCRIPTION,
      inLanguage: LOCALE,
      about: { "@id": `${SITE}/#organization` },
      translationOfWork: { "@type": "CollectionPage", "@id": `${localeUrl("en", PATH)}#page`, inLanguage: "en" },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: SCHEMA_LIST.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.schema,
          url: c.url,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "OARC Digital", item: localeUrl(LOCALE, "/") },
        { "@type": "ListItem", position: 2, name: "Sistemi AI", item: URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      inLanguage: LOCALE,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

const bar = [
  "Chat sul sito", "WhatsApp", "Telefonate", "Email", "Prenotazioni", "Promemoria", "Follow-up dei contatti", "Preventivi", "CRM",
  "Fatture", "Report", "Dashboard",
];

function Bar() {
  return (
    <div className="bset">
      <em>AI per</em>
      {bar.map((b) => <span key={b}>{b}</span>)}
    </div>
  );
}

export default function AiHubPageIt() {
  return (
    <FlagshipShell accent="#2440F0" accentSoft="#D6E0FF" navTheme="dark" locale={LOCALE} langPath={PATH}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div id="top">
        {/* 1 · the promise and the free blueprint */}
        <section className="hero dark">
          <div className="wrap">
            <h1>
              <span className="kick">Sistemi AI per aziende a Malta</span>
              <span className="big">AI costruita per <i className="mk">il tuo settore.</i></span>
            </h1>
            <p className="hsub">{"Risponde, prenota, segue i contatti e sbriga l'amministrazione, giorno e notte. Scegli il tuo settore."}</p>

            <div className="hgrid">
              <div className="ocard">
                <p className="otop"><span className="otag">Gratis</span><span className="olim">In 48 ore</span></p>
                <h2>Il tuo piano AI gratuito.</h2>
                <p>{"Non c'è il tuo settore? Lo costruiamo intorno a te. Mandaci il nome della tua attività e in 48 ore ricevi una mappa dei compiti che l'intelligenza artificiale (AI) può togliere al tuo team."}</p>
                <WaForm id="blueprint" message={BLUEPRINT} button="Voglio il mio piano" placeholder={BUSINESS_NAME} label={BUSINESS_NAME} />
                <p className="onote"><span>Si apre WhatsApp. Niente chiamate. Niente moduli lunghi.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-hero">Oppure chiedi il prezzo</a></p>
              </div>

              <nav className="dir" aria-label="Sistemi AI per settore">
                <p className="dir-h"><span>Scegli il tuo settore</span><span>{INDUSTRIES.length} sistemi</span></p>
                {INDUSTRIES.map((c) => (
                  <Link key={c.slug} href={c.href} hrefLang={c.twin ? undefined : "en"} data-testid={`link-ai-${c.slug}`}>
                    <b>{c.name}</b>
                    <small>{c.line}</small>
                    <Arrow />
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </section>

        <div className="band lt" aria-hidden="true">
          <div className="brun"><Bar /><Bar /></div>
        </div>

        {/* 2 · what it does */}
        <section className="sec" id="jobs">
          <div className="wrap">
            <p className="lab" data-rv><b>01</b>Cosa fa</p>
            <div className="shead" data-rv>
              <h2 className="h2">Cinque compiti. <i>Fatti per te.</i></h2>
              <p className="lead">{"Non è un chatbot. È un unico sistema dietro la tua attività che risponde, prenota, vende, sbriga l'amministrazione e ti tiene informato."}</p>
            </div>
            <div className="grid g3">
              {jobs.map((x, i) => (
                <article className="card" key={x.h} data-rv>
                  <span className="n" aria-hidden="true">{i + 1}</span>
                  <h3>{x.h}</h3>
                  <p>{x.p}</p>
                  <p className="we">{x.we}</p>
                </article>
              ))}
              <article className="card cta" data-rv>
                <div>
                  <h3>{"Quale compito affidare per primo all'AI?"}</h3>
                  <p>Lo mappiamo noi per te. Gratis, in 48 ore.</p>
                </div>
                <a className="btn btn-w" href="#top" data-testid="link-blueprint-jobs">Voglio il mio piano <Arrow /></a>
              </article>
            </div>
            <p className="under" data-rv>
              {"I sistemi AI sono costruiti dal team AI e tecnologia di OARC Digital, un'"}<Link className="txt" href={HOME} data-testid="link-home-context">agenzia digitale e AI a Malta</Link>{". Così il team che ti porta le richieste costruisce anche il sistema che risponde."}
            </p>
          </div>
        </section>

        {/* 3 · works with what you use */}
        <section className="sec paper" id="tools">
          <div className="wrap">
            <p className="lab" data-rv><b>02</b>I tuoi strumenti</p>
            <div className="shead" data-rv>
              <h2 className="h2">Funziona con ciò che <i>usi già.</i></h2>
              <p className="lead">Non devi cambiare tutto. Colleghiamo gli strumenti che hai e li facciamo lavorare insieme.</p>
            </div>
            <ul className="chips big" data-rv>
              {tools.map((it) => <li key={it}>{it}</li>)}
              <li className="on">Anche i tuoi</li>
            </ul>
          </div>
        </section>

        {/* 5 · you stay in control */}
        <section className="sec dark" id="control">
          <div className="wrap">
            <p className="lab" data-rv><b>03</b>Sicurezza</p>
            <div className="shead" data-rv>
              <h2 className="h2">Il controllo <i>resta a te.</i></h2>
              <p className="lead">{"L'AI fa il lavoro. Le persone prendono le decisioni che contano. Ogni sistema che costruiamo funziona così."}</p>
            </div>
            <ul className="why">
              {control.map((r) => (
                <li key={r.h} data-rv><h3>{r.h}</h3><p>{r.p}</p></li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6 · the words */}
        <section className="sec" id="words">
          <div className="wrap">
            <p className="lab" data-rv><b>04</b>Le parole, spiegate</p>
            <div className="shead" data-rv>
              <h2 className="h2">{"Le parole dell'AI. "}<i>In italiano semplice.</i></h2>
              <p className="lead">Niente gergo. Ecco cosa significano davvero le parole che continui a sentire.</p>
            </div>
            <dl className="terms" data-rv>
              {terms.map(([t, d]) => (
                <div key={t}><dt>{t}</dt><dd>{d}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        {/* 7 · why OARC */}
        <section className="sec paper" id="why">
          <div className="wrap">
            <p className="lab" data-rv><b>05</b>Perché noi</p>
            <div className="shead" data-rv>
              <h2 className="h2">Perché OARC Digital per <i>{"l'AI a Malta."}</i></h2>
              <p className="lead">Non ti vendiamo un software per poi sparire. Lo costruiamo intorno alla tua attività e lo gestiamo con te.</p>
            </div>
            <div className="grid g3">
              {reasons.map((r) => (
                <article className="card" key={r.h} data-rv>
                  <h3 style={{ marginTop: 0 }}>{r.h}</h3>
                  <p>{r.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 8 · the package */}
        <section className="sec" id="package">
          <div className="wrap">
            <p className="lab" data-rv><b>06</b>Il pacchetto</p>
            <div className="shead" data-rv>
              <h2 className="h2">Tutta la tua attività. <i>Collegata.</i></h2>
              <p className="lead">Un pacchetto. Un team. Ogni canale ha una risposta e ogni compito è tracciato.</p>
            </div>
            <div className="pack" data-rv>
              <div>
                <p className="otop"><span className="otag">Tutto incluso</span></p>
                <h3>Il pacchetto Sistema AI Completo.</h3>
                <p className="pp">Risposte, prenotazioni, vendite e amministrazione, costruite su come lavori tu. Il prezzo dipende da quanti compiti svolge e da cosa collega.</p>
                <div className="pbtns">
                  <a className="btn btn-w" href={PRICE} target="_blank" rel="noopener" data-testid="link-price-package"><WaIcon />Chiedi il prezzo</a>
                  <a className="btn btn-o" href="#top" data-testid="link-blueprint-package">Voglio il mio piano gratuito</a>
                </div>
              </div>
              <ul className="chk">{included.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
            <p className="under" data-rv>
              Ti serve un solo aiutante? Guarda i nostri <Link className="txt" href="/ai-agents" hrefLang="en">agenti AI</Link>{" e l'"}<Link className="txt" href="/voice-ai-worker" hrefLang="en">assistente AI vocale</Link> che risponde al tuo telefono.
              Ti serve il sito web su cui farlo lavorare? Guarda i <Link className="txt" href={localeHref(LOCALE, "/aeo/web-development-agency-malta")}>siti web</Link>.
            </p>
          </div>
        </section>

        {/* 9 · how it starts */}
        <section className="sec paper" id="start">
          <div className="wrap">
            <p className="lab" data-rv><b>07</b>Come si parte</p>
            <div className="shead" data-rv>
              <h2 className="h2">Si parte da <i>un messaggio.</i></h2>
              <p className="lead">Nessuna riunione da fissare. Nessun modulo da compilare. Solo il nome della tua attività.</p>
            </div>
            <ol className="tl">
              <li data-rv><p className="when">Oggi</p><h3>Scrivici su WhatsApp il nome della tua attività.</h3><p>È tutto ciò che ci serve per iniziare.</p></li>
              <li data-rv><p className="when">In 48 ore</p><h3>Ricevi il tuo piano AI gratuito.</h3><p>{"I compiti che l'AI può togliere al tuo team e quale costruire per primo."}</p></li>
              <li data-rv><p className="when">Poi</p><h3>Veniamo da te e costruiamo.</h3><p>Veniamo a trovarti, vediamo come va la tua settimana e attiviamo il tuo primo sistema in 72 ore.</p></li>
              <li data-rv><p className="when">Ogni mese</p><h3>Lo gestiamo con te.</h3><p>Lo controlliamo, lo miglioriamo e aggiungiamo il compito successivo quando sei pronto.</p></li>
            </ol>
          </div>
        </section>

        {/* 10 · questions */}
        <section className="sec" id="faq">
          <div className="wrap">
            <p className="lab" data-rv><b>08</b>Prima che tu lo chieda</p>
            <div className="shead" data-rv>
              <h2 className="h2">Domande <i>{"sull'AI per la tua attività."}</i></h2>
              <p className="lead">Risposte brevi e dirette. Per tutto il resto, scrivici su WhatsApp.</p>
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

        {/* 11 · close */}
        <section className="fin dark">
          <div className="wrap">
            <h2 className="h2" data-rv>{"Lascia all'AI "}<i>il lavoro ripetitivo.</i></h2>
            <WaForm id="blueprint2" message={BLUEPRINT} button="Voglio il mio piano" placeholder={BUSINESS_NAME} label={BUSINESS_NAME} />
            <p className="onote"><span>Gratis. In 48 ore. Si apre WhatsApp.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-close">Oppure chiedi il prezzo</a></p>
            <p className="home">AI e tecnologia è uno degli 8 reparti di OARC Digital. Ci trovi qui: {NAP.streetAddressShort}, {NAP.addressLocality} {NAP.postalCode}.</p>
          </div>
        </section>
      </div>
    </FlagshipShell>
  );
}
