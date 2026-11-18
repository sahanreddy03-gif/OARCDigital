import Link from "next/link";
import FlagshipShell from "@/components/flagship/FlagshipShell";
import { Arrow, SearchIcon, WaForm, WaIcon, waLink } from "@/components/flagship/parts";
import { NAP } from "@/lib/seo/nap";

interface Faq { question: string; answer: string; }
interface Props { faqs: Faq[]; }

const BLUEPRINT = "Ciao OARC. La mia attività è {x}. Per favore mandatemi il mio piano di posizionamento gratuito.";
const PRICE = waLink("Ciao OARC. Per favore mandatemi il vostro prezzo per la SEO. La mia attività è: ");
const FIELD = "Il nome della tua attività";

// The seven places people search. `what` says it in one line, `we` says what OARC does there.
const places = [
  { name: "Ricerca Google", what: "Qualcuno scrive ciò che gli serve e sceglie tra i primi risultati.", we: "Portiamo le tue pagine in cima per le parole che portano clienti." },
  { name: "Google Maps", what: "La ricerca “vicino a me”. I primi 3 posti sulla mappa ricevono la maggior parte delle chiamate.", we: "Curiamo il tuo Google Business Profile, le tue recensioni e le tue pagine locali." },
  { name: "Risposte AI su Google", what: "Ora Google scrive una sua risposta sopra i risultati. Si chiamano AI Overviews e AI Mode.", we: "Facciamo del tuo sito web una fonte che l’AI di Google cita." },
  { name: "Chat AI", what: "ChatGPT, Gemini, Perplexity, Claude, Copilot, Grok e Meta AI. Le persone chiedono a loro a chi rivolgersi.", we: "Facciamo in modo che ti conoscano, si fidino di te e facciano il tuo nome." },
  { name: "Ricerca vocale", what: "Siri, Assistente Google e Alexa leggono una sola risposta, non dieci.", we: "Scriviamo risposte brevi e chiare, che una voce può leggere ad alta voce." },
  { name: "Ricerca su video e social", what: "YouTube, TikTok e Instagram oggi sono motori di ricerca, soprattutto per i clienti più giovani.", we: "Diamo ai tuoi video titoli, didascalie e tag, così le persone li trovano." },
  { name: "Altri motori di ricerca e mappe", what: "Bing, Apple Maps, DuckDuckGo e Brave. Molti strumenti AI leggono questi, non Google.", we: "Ti inseriamo e ti verifichiamo su ognuno, con gli stessi dati ovunque." },
];

const terms = [
  { abbr: "SEO", full: "Ottimizzazione per i motori di ricerca", text: "Portare il tuo sito web in cima a Google e Bing." },
  { abbr: "Locale", full: "SEO locale", text: "Farti entrare nei primi 3 sulla mappa quando qualcuno cerca in zona." },
  { abbr: "AEO", full: "Ottimizzazione per i motori di risposta", text: "Far scegliere le tue parole come l’unica risposta, dall’AI di Google e dagli assistenti vocali." },
  { abbr: "GEO", full: "Ottimizzazione per i motori generativi", text: "Far sì che chat AI come ChatGPT e Gemini consiglino la tua attività per nome." },
];

const pains = [
  { h: "Sei a pagina 2. Lì non guarda nessuno.", p: "Quasi tutti i clic vanno alla prima pagina. A pagina 2 restano nascoste le attività valide.", fix: "Pagina 1 per le ricerche che rendono." },
  { h: "Il tuo concorrente esce per primo. Sempre.", p: "Non è migliore di te. È solo più facile da capire per Google.", fix: "Lo studiamo. Poi lo superiamo." },
  { h: "Chiedi a ChatGPT. Fa il nome di un altro.", p: "L’AI può consigliare solo un’attività che conosce e di cui si fida. Per ora, non sei tu.", fix: "Facciamo dire il tuo nome all’AI." },
  { h: "Hai pagato per la SEO. Hai avuto un report.", p: "Pagine di grafici, e nessun cliente nuovo in cambio.", fix: "Ti mostriamo richieste, non grafici." },
];

const steps = [
  { h: "Sistemiamo il tuo sito web.", p: "Velocità, versione per telefono, link rotti e le etichette nascoste (si chiamano schema) che dicono a Google e all’AI cosa fai." },
  { h: "Troviamo le parole che scrivono i tuoi clienti.", p: "Dati di ricerca veri, in inglese e in maltese. Niente ipotesi." },
  { h: "Scriviamo ciò che le persone chiedono.", p: "Pagine e articoli che rispondono a domande vere. Scritti da persone, verificati sui dati." },
  { h: "Ti facciamo conoscere dall’AI.", p: "Fatti chiari, risposte chiare e gli stessi dati ovunque, così ChatGPT, Gemini e Perplexity possono citarti." },
  { h: "Facciamo parlare di te i siti affidabili.", p: "Stampa maltese, directory e partner. Solo link veri. Nessun trucco che poi ti fa penalizzare." },
  { h: "Ti mostriamo i numeri.", p: "Un report scritto ogni mese: le tue posizioni, i tuoi visitatori e le tue richieste. In parole semplici." },
];

const channels = [
  { group: "Il tuo sito web", items: ["Pagine dei servizi", "Pagine per località", "Articoli e guide", "Domande e risposte"] },
  { group: "Google", items: ["Post su Business Profile", "Foto", "Recensioni e risposte", "Domande e risposte"] },
  { group: "Video", items: ["YouTube", "YouTube Shorts", "TikTok", "Instagram Reels"] },
  { group: "Social media", items: ["LinkedIn", "Facebook", "Instagram", "X", "Pinterest", "Threads"] },
  { group: "Community", items: ["Reddit", "Quora", "Medium", "Substack"] },
  { group: "Mappe e schede", items: ["Bing Places", "Apple Maps", "Clutch", "Yellow Pages Malta", "Directory di settore"] },
  { group: "Notizie e stampa", items: ["Siti di notizie maltesi", "Stampa di settore", "Podcast", "Blog dei partner"] },
];

const industries = [
  "Ristoranti e caffè", "Hotel e guest house", "Cliniche e dentisti", "Immobiliare", "Studi legali", "Commercialisti",
  "Negozi e negozi online", "iGaming", "Fintech", "Edilizia e artigiani", "Scuole e corsi", "Turismo e attività",
  "Bellezza e benessere", "Palestre e fitness", "Concessionarie e autonoleggi", "Tecnologia e software", "Eventi e matrimoni",
];

const reasons = [
  { h: "Pensato per l’AI dal primo giorno.", p: "Ogni pagina che creiamo è scritta perché Google e l’AI possano citarla. Quasi tutte le agenzie lo aggiungono dopo, se lo fanno." },
  { h: "Inglese e maltese.", p: "Quasi tutte le agenzie studiano solo le ricerche in inglese. Noi le studiamo in entrambe le lingue, perché i tuoi clienti le usano entrambe." },
  { h: "Un solo team. 8 reparti.", p: "Copywriter, una troupe video, sviluppatori web e ingegneri AI sotto lo stesso tetto a Birkirkara. Niente viene mandato all’estero." },
  { h: "Dati veri da Malta.", p: "Non un piano fatto per Londra e incollato su La Valletta. Lavoriamo su ciò che le persone a Malta cercano davvero." },
  { h: "Solo link veri.", p: "Stampa, partner e directory affidabili. Niente link farm. Niente che metta a rischio il tuo sito web." },
  { h: "Il tuo report lo scrive una persona.", p: "Uno strategist ti spiega cosa è successo e cosa viene dopo. Puoi sempre incontrarci di persona." },
];

const included = [
  "Controllo completo del sito web, con le correzioni",
  "Mappa delle parole chiave in inglese e in maltese",
  "Google Business Profile, creato e gestito",
  "Un sistema per le recensioni: chiedere, raccogliere, rispondere",
  "Pagine dei servizi e pagine per località",
  "Nuovi articoli ogni mese, scritti da persone",
  "Visibilità nell’AI: ChatGPT, Gemini, Perplexity, Claude, Copilot",
  "Risposte per la ricerca vocale di Siri, Google e Alexa",
  "Schema e un file llms.txt, così l’AI ti può leggere",
  "Schede su Bing Places e Apple Maps",
  "Link da stampa e directory affidabili",
  "Configurazione della ricerca su YouTube e social",
  "I tuoi concorrenti monitorati, ogni mese",
  "Un report di una pagina: posizioni, visitatori, richieste",
];

const bar = [
  "Ricerca Google", "Google Maps", "AI Overviews", "ChatGPT", "Gemini", "Perplexity", "Claude", "Copilot", "Grok",
  "Siri", "Alexa", "Assistente Google", "YouTube", "TikTok", "Bing", "Apple Maps",
];

function Bar() {
  return (
    <div className="bset">
      <em>Ti trovano su</em>
      {bar.map((b) => <span key={b}>{b}</span>)}
    </div>
  );
}

export default function SEOAgencyMalta({ faqs }: Props) {
  return (
    <FlagshipShell locale="it" langPath="/aeo/seo-agency-malta">
      <div id="top">
        {/* 1 · the promise and the free blueprint */}
        <section className="hero">
          <div className="wrap">
            <h1>
              <span className="kick">Agenzia SEO a Malta</span>
              <span className="big">Portiamo la tua attività in cima a <i className="mk">Google</i> e all’<i className="mk">AI.</i></span>
            </h1>
            <p className="hsub">Ricerca, mappe, chat di intelligenza artificiale (AI) e voce. Un solo team a Malta ti fa trovare ovunque.</p>

            <div className="hgrid">
              <div className="ocard">
                <p className="otop"><span className="otag">Gratis</span><span className="olim">In 48 ore</span></p>
                <h2>Il tuo piano di posizionamento gratuito.</h2>
                <p>Mandaci il nome della tua attività. In 48 ore ricevi un piano che mostra dove sei oggi, e come arrivare in cima.</p>
                <WaForm id="blueprint" message={BLUEPRINT} button="Voglio il mio piano" placeholder={FIELD} label={FIELD} />
                <p className="onote"><span>Si apre WhatsApp. Niente chiamate. Niente moduli lunghi.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-hero">Oppure chiedi il prezzo</a></p>
              </div>

              <div className="screens" aria-hidden="true">
                <div className="scr">
                  <b>Ricerca</b>
                  <div className="q"><SearchIcon />il migliore a Malta</div>
                  <div className="row you"><i>1</i>La tua attività</div>
                  <div className="row"><i>2</i>Qualcun altro</div>
                </div>
                <div className="scr">
                  <b>Chat AI</b>
                  <div className="bub">Chi devo chiamare a Malta?</div>
                  <div className="bub ai">Inizierei dalla <u>tua attività</u>. Ecco perché.</div>
                </div>
                <div className="scr s-hide">
                  <b>Mappe</b>
                  <div className="q"><SearchIcon />vicino a me</div>
                  <div className="row you"><i>A</i>La tua attività · Aperto ora</div>
                  <div className="row"><i>B</i>Qualcun altro</div>
                </div>
                <div className="scr s-hide">
                  <b>Voce</b>
                  <div className="wave">{Array.from({ length: 18 }, (_, i) => <span key={i} />)}</div>
                  <div className="row you"><i>1</i>“La prima risposta è la tua attività.”</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="band" aria-hidden="true">
          <div className="brun"><Bar /><Bar /></div>
        </div>

        {/* 2 · where people search now */}
        <section className="sec" id="places">
          <div className="wrap">
            <p className="lab" data-rv><b>01</b>Dove si cerca</p>
            <div className="shead" data-rv>
              <h2 className="h2">Oggi non si cerca <i>solo su Google.</i></h2>
              <p className="lead">Il tuo prossimo cliente chiede a un telefono, a una mappa o a una chat AI. Ti facciamo trovare in tutti e 7 i posti.</p>
            </div>
            <div className="grid g4">
              {places.map((pl, i) => (
                <article className="card" key={pl.name} data-rv>
                  <span className="n" aria-hidden="true">{i + 1}</span>
                  <h3>{pl.name}</h3>
                  <p>{pl.what}</p>
                  <p className="we">{pl.we}</p>
                </article>
              ))}
              <article className="card cta" data-rv>
                <div>
                  <h3>Non sai a che punto sei?</h3>
                  <p>Controlliamo tutti e 7 per te. Gratis, in 48 ore.</p>
                </div>
                <a className="btn btn-w" href="#top" data-testid="link-blueprint-places">Voglio il mio piano <Arrow /></a>
              </article>
            </div>
            <p className="under" data-rv>
              OARC Digital è un’<Link className="txt" href="/it" data-testid="link-home-context">agenzia di marketing a Malta</Link> a servizio completo.
              Così la tua SEO viene pianificata insieme ai tuoi contenuti, al tuo sito web e ai tuoi annunci.
            </p>
          </div>
        </section>

        {/* 3 · the four words, in plain Italian */}
        <section className="sec paper" id="words">
          <div className="wrap">
            <p className="lab" data-rv><b>02</b>Le parole, spiegate</p>
            <div className="shead" data-rv>
              <h2 className="h2">SEO, AEO, GEO. <i>In parole semplici.</i></h2>
              <p className="lead">Quattro parole brevi. Ognuna è un modo diverso di farsi trovare.</p>
            </div>
            <div className="grid g4">
              {terms.map((t) => (
                <article className="card term" key={t.abbr} data-rv>
                  <abbr title={t.full}>{t.abbr}</abbr>
                  <p className="full">{t.full}</p>
                  <p>{t.text}</p>
                </article>
              ))}
            </div>
            <p className="after" data-rv>Quasi tutte le agenzie te ne vendono una. A te servono tutte e quattro, in un unico piano.</p>
          </div>
        </section>

        {/* 4 · sound familiar */}
        <section className="sec" id="familiar">
          <div className="wrap">
            <p className="lab" data-rv><b>03</b>Il problema</p>
            <div className="shead" data-rv>
              <h2 className="h2 il">Ti suona <i>familiare?</i></h2>
              <p className="lead">Se le persone non ti trovano, trovano qualcun altro. È così semplice.</p>
            </div>
            <div className="grid g4">
              {pains.map((x) => (
                <article className="card pain" key={x.h} data-rv>
                  <h3>{x.h}</h3>
                  <p>{x.p}</p>
                  <span className="fix">{x.fix}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5 · the playbook */}
        <section className="sec paper" id="playbook">
          <div className="wrap">
            <p className="lab" data-rv><b>04</b>Cosa facciamo</p>
            <div className="shead" data-rv>
              <h2 className="h2">Il nostro metodo SEO. <i>6 passi.</i></h2>
              <p className="lead">Gli stessi sei passi per ogni attività. Il piano al loro interno è fatto per la tua.</p>
            </div>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.h} data-rv><div><h3>{s.h}</h3><p>{s.p}</p></div></li>
              ))}
            </ol>
          </div>
        </section>

        {/* 6 · every channel */}
        <section className="sec" id="channels">
          <div className="wrap">
            <p className="lab" data-rv><b>05</b>Dove pubblichiamo</p>
            <div className="shead" data-rv>
              <h2 className="h2">Ti mettiamo dove sono <i>i tuoi clienti.</i></h2>
              <p className="lead">Contenuti organici, non a pagamento, costruiti su dati di ricerca veri, su ogni canale che conta. Non serve un budget per la pubblicità.</p>
            </div>
            <div className="chgroups">
              {channels.map((c) => (
                <div className="chg" key={c.group} data-rv>
                  <h3>{c.group}</h3>
                  <ul className="chips">{c.items.map((it) => <li key={it}>{it}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7 · every industry */}
        <section className="sec paper" id="industries">
          <div className="wrap">
            <p className="lab" data-rv><b>06</b>Il tuo settore</p>
            <div className="shead" data-rv>
              <h2 className="h2">Un piano fatto per <i>il tuo settore.</i></h2>
              <p className="lead">Un ristorante si cerca in modo molto diverso da uno studio legale. Per questo ogni piano è diverso.</p>
            </div>
            <ul className="chips big" data-rv>
              {industries.map((it) => <li key={it}>{it}</li>)}
              <li className="on">Anche il tuo</li>
            </ul>
            <p className="under" data-rv>
              Vuoi che l’AI risponda anche ai tuoi clienti? Guarda i nostri <Link className="txt" href="/it/ai">sistemi AI per ogni settore</Link>.
            </p>
          </div>
        </section>

        {/* 8 · why OARC */}
        <section className="sec dark" id="why">
          <div className="wrap">
            <p className="lab" data-rv><b>07</b>Perché noi</p>
            <div className="shead" data-rv>
              <h2 className="h2">Perché OARC Digital per <i>la SEO a Malta.</i></h2>
              <p className="lead">Qui la ricerca non è un lavoro secondario. È dentro tutto quello che facciamo.</p>
            </div>
            <ul className="why">
              {reasons.map((r) => (
                <li key={r.h} data-rv><h3>{r.h}</h3><p>{r.p}</p></li>
              ))}
            </ul>
            <div className="stat" data-rv>
              <b>9.600+</b>
              <p>
                volte in cui le risposte AI di Google hanno mostrato le nostre pagine da maggio 2026. Proviamo tutto prima su di noi.
                <small>Fonte: la nostra Google Search Console, da maggio a novembre 2026.</small>
              </p>
            </div>
          </div>
        </section>

        {/* 9 · the package */}
        <section className="sec" id="package">
          <div className="wrap">
            <p className="lab" data-rv><b>08</b>Il pacchetto</p>
            <div className="shead" data-rv>
              <h2 className="h2">Prenditi la ricerca. <i>Tutta.</i></h2>
              <p className="lead">Un pacchetto. Un team. Ogni posto in cui le persone cercano, coperto.</p>
            </div>
            <div className="pack" data-rv>
              <div>
                <p className="otop"><span className="otag">Tutto incluso</span></p>
                <h3>Il pacchetto Search Domination.</h3>
                <p className="pp">Google, Maps, chat AI e voce, fatti per te ogni mese. Il prezzo dipende dal tuo settore e dai tuoi concorrenti.</p>
                <div className="pbtns">
                  <a className="btn btn-w" href={PRICE} target="_blank" rel="noopener" data-testid="link-price-package"><WaIcon />Chiedi il prezzo</a>
                  <a className="btn btn-o" href="#top" data-testid="link-blueprint-package">Voglio il mio piano gratuito</a>
                </div>
              </div>
              <ul className="chk">{included.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
            <p className="under" data-rv>
              Vuoi tutto il team di marketing, non solo la ricerca? Guarda l’offerta della nostra <Link className="txt" href="/it/aeo/digital-marketing-agency-malta">agenzia di marketing digitale a Malta</Link>.
              Ti serve solo la parte tecnica? Guarda i <Link className="txt" href="/services/seo-services">servizi SEO</Link>.
            </p>
          </div>
        </section>

        {/* 10 · how it starts */}
        <section className="sec paper" id="start">
          <div className="wrap">
            <p className="lab" data-rv><b>09</b>Come si inizia</p>
            <div className="shead" data-rv>
              <h2 className="h2">Inizia con <i>un messaggio.</i></h2>
              <p className="lead">Nessuna riunione da fissare. Nessun modulo da compilare. Solo il nome della tua attività.</p>
            </div>
            <ol className="tl">
              <li data-rv><p className="when">Oggi</p><h3>Scrivici su WhatsApp il nome della tua attività.</h3><p>È tutto ciò che ci serve per iniziare.</p></li>
              <li data-rv><p className="when">In 48 ore</p><h3>Ricevi il tuo piano gratuito.</h3><p>Dove sei su Google e Maps, cosa dice di te l’AI, e le tue prime 5 correzioni.</p></li>
              <li data-rv><p className="when">Settimana 1</p><h3>Concordiamo il piano.</h3><p>Veniamo noi da te, oppure vieni tu da noi a {NAP.addressLocality}. Vedi il prezzo prima che inizi qualsiasi cosa.</p></li>
              <li data-rv><p className="when">Ogni mese</p><h3>Sali.</h3><p>Nuovi contenuti, posizioni migliori e un report chiaro.</p></li>
            </ol>
          </div>
        </section>

        {/* 11 · questions */}
        <section className="sec" id="faq">
          <div className="wrap">
            <p className="lab" data-rv><b>10</b>Prima che tu lo chieda</p>
            <div className="shead" data-rv>
              <h2 className="h2">Domande sulla <i>SEO a Malta.</i></h2>
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

        {/* 12 · close */}
        <section className="fin dark">
          <div className="wrap">
            <h2 className="h2" data-rv>Non lasciare che la risposta <i>sia il tuo concorrente.</i></h2>
            <WaForm id="blueprint2" message={BLUEPRINT} button="Voglio il mio piano" placeholder={FIELD} label={FIELD} />
            <p className="onote"><span>Gratis. In 48 ore. Si apre WhatsApp.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-close">Oppure chiedi il prezzo</a></p>
            <p className="home">
              La ricerca è uno degli 8 reparti di OARC Digital.
              Ci trovi qui: {NAP.streetAddressShort}, {NAP.addressLocality} {NAP.postalCode}.
            </p>
          </div>
        </section>
      </div>
    </FlagshipShell>
  );
}
