import Link from "next/link";
import FlagshipShell from "@/components/flagship/FlagshipShell";
import { Arrow, SearchIcon, WaForm, WaIcon, waLink } from "@/components/flagship/parts";
import { NAP } from "@/lib/seo/nap";

interface Faq { question: string; answer: string; }
interface Props { faqs: Faq[]; }

const BLUEPRINT = "Ciao OARC. La mia attività è {x}. Vorrei ricevere il piano gratuito per il mio sito web.";
const PRICE = waLink("Ciao OARC. Vorrei sapere il vostro prezzo per un sito web. La mia attività è: ");
const NAME = "Il nome della tua attività";

// Every kind of website, in one plain line, with who usually wants it.
const types = [
  { h: "Sito semplice", p: "Poche pagine chiare che dicono chi sei e come contattarti.", who: "Artigiani, cliniche, studi legali" },
  { h: "Landing page", p: "Una pagina con un solo compito: portarti la richiesta.", who: "Pubblicità, offerte, lanci" },
  { h: "Negozio online", p: "Vendi i tuoi prodotti e incassi online.", who: "Negozi, moda, alimentari" },
  { h: "Sito con prenotazioni", p: "Le persone scelgono un orario e prenotano, senza telefonare.", who: "Saloni, cliniche, ristoranti, tour" },
  { h: "Portfolio", p: "I tuoi lavori migliori, mostrati al meglio.", who: "Architetti, fotografi, designer" },
  { h: "Area riservata", p: "Contenuti che vede solo chi ha fatto l'accesso.", who: "Palestre, scuole, coach" },
  { h: "Sito di annunci", p: "Tanti annunci che le persone possono cercare e filtrare.", who: "Immobili, auto, lavoro" },
  { h: "Web app o portale", p: "I clienti accedono e fanno le loro cose, come in un'app.", who: "Finanza, iGaming, logistica" },
  { h: "Sito multilingue", p: "Un solo sito che parla a ogni visitatore nella sua lingua.", who: "Turismo, immobiliare, export" },
  { h: "Sito 3D", p: "Oggetti e spazi che le persone possono ruotare ed esplorare.", who: "Lusso, auto, yacht, immobili" },
  { h: "Storia interattiva", p: "Un sito che si muove e si svela mentre scorri.", who: "Brand, lanci, eventi" },
];

const jobs = [
  { h: "Racconta la tua storia.", p: "Niente template. Le tue parole, le tue immagini e il tuo video, fatti per te.", fix: "Solo tuo." },
  { h: "Si fa trovare.", p: "Costruito dalla prima riga per posizionarsi su Google e farsi leggere dall'AI.", fix: "SEO, AEO e GEO incluse." },
  { h: "Risponde.", p: "Un assistente AI risponde ai visitatori giorno e notte, con le tue informazioni.", fix: "Nessun visitatore resta in attesa." },
  { h: "Raccoglie la richiesta.", p: "Moduli intelligenti, link di prenotazione e WhatsApp, in ogni pagina.", fix: "I visitatori diventano clienti." },
];

const free = [
  "Modulo contatti AI che fa le domande giuste",
  "Link di prenotazione, collegato al tuo calendario",
  "Assistenza clienti AI, addestrata sulla tua attività",
  "Pulsanti WhatsApp e chiamata in ogni pagina",
  "Configurazione per Google e AI: schema, sitemap, llms.txt",
  "Tracciamento su ogni pulsante, così sai cosa funziona",
  "Lucchetto SSL, hosting configurato e backup giornalieri",
  "Formazione, così lo modifichi da solo",
];

const platforms = [
  { h: "WordPress", p: "Ideale se il tuo team pubblica spesso. Facile da modificare." },
  { h: "Webflow", p: "Ideale per i siti dove il design conta e che cambiano in fretta." },
  { h: "Shopify", p: "Ideale per i negozi online, a Malta e all'estero." },
  { h: "Su misura (Next.js)", p: "Ideale per velocità, 3D, web app e tutto ciò che è speciale." },
];

const terms: [string, string][] = [
  ["Core Web Vitals", "I tre punteggi di Google per velocità e comodità. Costruiamo per superarli."],
  ["Responsive", "Si adatta da solo a telefono, tablet e portatile."],
  ["Accessibilità (WCAG)", "Possono usarlo anche le persone con disabilità."],
  ["SSL", "Il lucchetto. I dati dei visitatori restano privati."],
  ["CMS", "La schermata semplice dove cambi da solo testi e foto."],
  ["Schema", "Etichette nascoste che dicono a Google e all'AI cos'è ogni cosa."],
  ["llms.txt", "Un breve file che dice agli strumenti AI cosa fa la tua attività."],
  ["CDN", "Il sito arriva da un server vicino a ogni visitatore, così si carica in fretta."],
  ["Analytics", "Conta i tuoi visitatori e cosa fanno."],
  ["Tracciamento delle conversioni", "Conta richieste e vendite, e da dove arrivano."],
  ["Collegamento al CRM", "Ogni richiesta finisce da sola nella tua lista clienti."],
  ["Gateway di pagamento", "Incassa i pagamenti con carta in sicurezza."],
  ["Consenso ai cookie (GDPR)", "Chiede il permesso prima di tracciare. È legge UE."],
  ["WebGL", "Vero 3D dentro il browser, senza installare niente."],
];

const industries = [
  "Ristoranti e caffè", "Hotel e guest house", "Cliniche e dentisti", "Agenzie immobiliari", "Studi legali", "Commercialisti",
  "Negozi e negozi online", "iGaming", "Fintech", "Edilizia e artigiani", "Scuole e corsi", "Turismo e attività",
  "Bellezza e benessere", "Palestre e fitness", "Concessionarie e autonoleggi", "Tecnologia e software", "Eventi e matrimoni",
];

const reasons = [
  { h: "Un solo team fa tutto.", p: "Copywriter, designer, troupe video, sviluppatori e ingegneri AI. Non devi ingaggiare cinque aziende." },
  { h: "I testi li scriviamo noi.", p: "E facciamo anche le foto e i video. Non ricevi un design vuoto da riempire." },
  { h: "Fatto per farsi trovare dalla prima riga.", p: "La ricerca si pianifica prima del design, non si aggiunge alla fine." },
  { h: "Tieni le tue posizioni su Google.", p: "Quando spostiamo un vecchio sito, ogni vecchio link punta alla sua nuova pagina." },
  { h: "È tuo.", p: "Il tuo dominio, il tuo sito, i tuoi contenuti. Puoi modificarlo da solo." },
  { h: "Puoi incontrarci.", p: "Siamo a Birkirkara. Veniamo noi da te, o vieni tu da noi." },
];

const flags = [
  "Di chi sono il sito e il dominio a lavoro finito?",
  "Posso cambiare testi e foto da solo?",
  "Farsi trovare su Google e sull'AI è incluso?",
  "Chi se ne occupa dopo il lancio?",
];

const included = [
  "Piano e mappa delle pagine",
  "Testi scritti per te",
  "Design su misura: 2D, 3D o interattivo",
  "Foto e video",
  "Realizzato sulla piattaforma giusta per te",
  "Pensato prima per il telefono",
  "Configurazione SEO, AEO e GEO",
  "Modulo contatti AI",
  "Sistema di prenotazione",
  "Assistenza clienti AI",
  "Pulsanti WhatsApp e chiamata",
  "Tracciamento e una dashboard semplice",
  "Hosting configurato, SSL e backup",
  "Vecchi link spostati, le posizioni restano",
  "Formazione per il tuo team",
  "Un piano di assistenza dopo il lancio",
];

const bar = [
  "Siti semplici", "Landing page", "Negozi online", "Siti con prenotazioni", "Web app", "Portali clienti", "Siti 3D",
  "Siti interattivi", "Siti multilingue", "WordPress", "Shopify", "Webflow", "Next.js",
];

function Bar() {
  return (
    <div className="bset">
      <em>Realizziamo</em>
      {bar.map((b) => <span key={b}>{b}</span>)}
    </div>
  );
}

export default function WebDevelopmentAgencyMaltaIt({ faqs }: Props) {
  return (
    <FlagshipShell accent="#0B0B0B" accentSoft="#D5D5FF" locale="it" langPath="/aeo/web-development-agency-malta">
      <div id="top">
        {/* 1 · the promise and the free blueprint */}
        <section className="hero">
          <div className="wrap">
            <h1>
              <span className="kick">Web agency e realizzazione siti web a Malta</span>
              <span className="big">Ogni sito che puoi immaginare. <i className="mk">Fatto per vendere.</i></span>
            </h1>
            <p className="hsub">{"2D, 3D, interattivo o semplice. Veloce, trovato su Google e dall'intelligenza artificiale (AI), e pronto a ricevere richieste dal primo giorno."}</p>

            <div className="hgrid">
              <div className="ocard">
                <p className="otop"><span className="otag">Gratis</span><span className="olim">In 48 ore</span></p>
                <h2>Il piano gratuito per il tuo sito web.</h2>
                <p>Scrivici il nome della tua attività. In 48 ore ricevi un piano per il tuo sito web: cosa deve dire, che aspetto deve avere e cosa gli serve per vendere.</p>
                <WaForm id="blueprint" message={BLUEPRINT} button="Voglio il mio piano" placeholder={NAME} label={NAME} />
                <p className="onote"><span>Apre WhatsApp. Niente chiamate. Niente moduli lunghi.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-hero">Oppure chiedi il prezzo</a></p>
              </div>

              <div className="screens" aria-hidden="true">
                <div className="scr">
                  <b>3D e interattivo</b>
                  <span className="cube"><i /><i /><i /><i /><i /><i /></span>
                </div>
                <div className="scr">
                  <b>Assistenza AI</b>
                  <div className="bub">Siete aperti la domenica?</div>
                  <div className="bub ai">Sì, dalle 9 alle 17. <u>Ti prenoto?</u></div>
                </div>
                <div className="scr s-hide">
                  <b>Prenotazioni</b>
                  <div className="row"><i>1</i>Ven 16:00</div>
                  <div className="row you"><i>2</i>Sab 10:30 · Prenotato</div>
                </div>
                <div className="scr s-hide">
                  <b>Ti trovano</b>
                  <div className="q"><SearchIcon />vicino a me</div>
                  <div className="row you"><i>1</i>La tua attività</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="band" aria-hidden="true">
          <div className="brun"><Bar /><Bar /></div>
        </div>

        {/* 2 · every kind of website */}
        <section className="sec" id="types">
          <div className="wrap">
            <p className="lab" data-rv><b>01</b>Cosa realizziamo</p>
            <div className="shead" data-rv>
              <h2 className="h2">Ogni tipo di sito web. <i>Fatto per la tua attività.</i></h2>
              <p className="lead">Futuristico o minimal, piccolo o enorme. Scegliamo il tipo adatto a ciò che vendi.</p>
            </div>
            <div className="grid g4">
              {types.map((t) => (
                <article className="card" key={t.h} data-rv>
                  <h3 style={{ marginTop: 0 }}>{t.h}</h3>
                  <p>{t.p}</p>
                  <p className="we">{t.who}</p>
                </article>
              ))}
              <article className="card cta" data-rv>
                <div>
                  <h3>Non sai quale scegliere?</h3>
                  <p>Te lo diciamo noi, gratis, in 48 ore.</p>
                </div>
                <a className="btn btn-w" href="#top" data-testid="link-blueprint-types">Voglio il mio piano <Arrow /></a>
              </article>
            </div>
            <p className="under" data-rv>
              I siti web sono realizzati dal team web di <Link className="txt" href="/it" data-testid="link-home-context">OARC Digital</Link>, agenzia digitale e AI a Malta.
              Così il tuo sito, il tuo marketing e i tuoi strumenti AI sono fatti per lavorare insieme.
            </p>
          </div>
        </section>

        {/* 3 · beautiful is not enough */}
        <section className="sec paper" id="jobs">
          <div className="wrap">
            <p className="lab" data-rv><b>02</b>Cosa deve fare</p>
            <div className="shead" data-rv>
              <h2 className="h2">Bello <i>non basta.</i></h2>
              <p className="lead">Un sito stupendo che nessuno trova è un manifesto in una stanza chiusa a chiave. Ogni sito che realizziamo fa quattro lavori.</p>
            </div>
            <div className="grid g4">
              {jobs.map((x, i) => (
                <article className="card pain" key={x.h} data-rv>
                  <span className="n" aria-hidden="true">{i + 1}</span>
                  <h3 style={{ marginTop: 16 }}>{x.h}</h3>
                  <p>{x.p}</p>
                  <span className="fix">{x.fix}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4 · included free */}
        <section className="sec" id="included">
          <div className="wrap">
            <p className="lab" data-rv><b>03</b>Incluso in ogni sito</p>
            <div className="shead" data-rv>
              <h2 className="h2">Gli extra che gli altri fanno pagare. <i>Inclusi.</i></h2>
              <p className="lead">Il tuo sito deve lavorare per te dal primo giorno. Per questo li trovi in ogni sito che realizziamo.</p>
            </div>
            <ul className="chips big" data-rv>
              {free.map((it) => <li key={it}>{it}</li>)}
            </ul>
            <p className="under" data-rv>
              Vuoi salire su Google dopo il lancio? Guarda la nostra pagina <Link className="txt" href="/it/aeo/seo-agency-malta">agenzia SEO a Malta</Link>.
              {" Vuoi che l'AI gestisca una parte più grande della tua attività? Guarda i nostri "}<Link className="txt" href="/it/ai">sistemi AI</Link>.
            </p>
          </div>
        </section>

        {/* 5 · platforms */}
        <section className="sec paper" id="platforms">
          <div className="wrap">
            <p className="lab" data-rv><b>04</b>Le piattaforme che usiamo</p>
            <div className="shead" data-rv>
              <h2 className="h2">Lo strumento giusto <i>per il tuo sito.</i></h2>
              <p className="lead">Non siamo legati a una sola piattaforma. Scegliamo quella adatta alla tua attività.</p>
            </div>
            <div className="grid g4">
              {platforms.map((x) => (
                <article className="card" key={x.h} data-rv>
                  <h3 style={{ marginTop: 0 }}>{x.h}</h3>
                  <p>{x.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6 · the tech in plain words */}
        <section className="sec" id="tech">
          <div className="wrap">
            <p className="lab" data-rv><b>05</b>La tecnologia, spiegata</p>
            <div className="shead" data-rv>
              <h2 className="h2">Le parole del web. <i>In parole semplici.</i></h2>
              <p className="lead">Le sentirai da ogni web agency. Ecco cosa vuol dire davvero ognuna.</p>
            </div>
            <dl className="terms" data-rv>
              {terms.map(([t, d]) => (
                <div key={t}><dt>{t}</dt><dd>{d}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        {/* 7 · every industry */}
        <section className="sec paper" id="industries">
          <div className="wrap">
            <p className="lab" data-rv><b>06</b>Il tuo settore</p>
            <div className="shead" data-rv>
              <h2 className="h2">Un sito fatto per <i>il tuo settore.</i></h2>
              <p className="lead">A un hotel servono prenotazioni. A uno studio legale serve fiducia. A un negozio serve un checkout veloce. Costruiamo in base a ciò che fanno i tuoi clienti.</p>
            </div>
            <ul className="chips big" data-rv>
              {industries.map((it) => <li key={it}>{it}</li>)}
              <li className="on">Anche il tuo</li>
            </ul>
          </div>
        </section>

        {/* 8 · why OARC */}
        <section className="sec dark" id="why">
          <div className="wrap">
            <p className="lab" data-rv><b>07</b>Perché noi</p>
            <div className="shead" data-rv>
              <h2 className="h2">Perché OARC Digital per <i>il tuo sito.</i></h2>
              <p className="lead">Non ti consegniamo un design per poi sparire. Costruiamo ciò che ti porta clienti.</p>
            </div>
            <ul className="why">
              {reasons.map((r) => (
                <li key={r.h} data-rv><h3>{r.h}</h3><p>{r.p}</p></li>
              ))}
            </ul>
            <div className="stat flags" data-rv>
              <b>4</b>
              <div>
                <p>domande da fare a qualsiasi web agency a Malta prima di firmare:</p>
                <ul>{flags.map((f) => <li key={f}>{f}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        {/* 9 · the package */}
        <section className="sec" id="package">
          <div className="wrap">
            <p className="lab" data-rv><b>08</b>Il pacchetto</p>
            <div className="shead" data-rv>
              <h2 className="h2">Il sito completo. <i>Ci pensiamo noi.</i></h2>
              <p className="lead">Un pacchetto. Un team. Dalla prima idea al giorno in cui va online, e anche dopo.</p>
            </div>
            <div className="pack k" data-rv>
              <div>
                <p className="otop"><span className="otag">Tutto incluso</span></p>
                <h3>Il pacchetto Website Domination.</h3>
                <p className="pp">Testi, design, video, sviluppo, ricerca e AI: facciamo tutto noi. Il prezzo dipende dal tipo di sito e da quanto è grande.</p>
                <div className="pbtns">
                  <a className="btn btn-y" href={PRICE} target="_blank" rel="noopener" data-testid="link-price-package"><WaIcon />Chiedi il prezzo</a>
                  <a className="btn btn-o" href="#top" data-testid="link-blueprint-package">Voglio il mio piano gratuito</a>
                </div>
              </div>
              <ul className="chk">{included.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
            <p className="under" data-rv>
              Vuoi tutto il team di marketing ogni mese, sito incluso? Guarda la nostra offerta <Link className="txt" href="/it/aeo/digital-marketing-agency-malta">agenzia di marketing digitale a Malta</Link>.
              Ti serve solo rinfrescare il design? Guarda <Link className="txt" href="/services/web-design">web design</Link>.
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
              <li data-rv><p className="when">Oggi</p><h3>Scrivici su WhatsApp il nome della tua attività.</h3><p>Ci serve solo questo per iniziare.</p></li>
              <li data-rv><p className="when">In 48 ore</p><h3>Ricevi il tuo piano gratuito.</h3><p>Cosa deve dire il tuo sito, che aspetto deve avere e cosa gli serve per vendere.</p></li>
              <li data-rv><p className="when">Poi</p><h3>Progettiamo e realizziamo.</h3><p>Lo vedi crescere e approvi ogni passo. Ricevi le date e il prezzo prima di iniziare.</p></li>
              <li data-rv><p className="when">Giorno del lancio</p><h3>Va online.</h3><p>Spostiamo tutto, puntiamo i vecchi link alle nuove pagine e formiamo il tuo team a {NAP.addressLocality} o da te.</p></li>
            </ol>
          </div>
        </section>

        {/* 11 · questions */}
        <section className="sec" id="faq">
          <div className="wrap">
            <p className="lab" data-rv><b>10</b>Prima che tu lo chieda</p>
            <div className="shead" data-rv>
              <h2 className="h2">Domande sui <i>siti web a Malta.</i></h2>
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
            <h2 className="h2" data-rv>Fai del tuo sito il tuo <i>miglior venditore.</i></h2>
            <WaForm id="blueprint2" message={BLUEPRINT} button="Voglio il mio piano" placeholder={NAME} label={NAME} />
            <p className="onote"><span>Gratis. In 48 ore. Apre WhatsApp.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-close">Oppure chiedi il prezzo</a></p>
            <p className="home">Il web è uno degli 8 reparti di OARC Digital. Ci trovi in {NAP.streetAddressShort}, {NAP.addressLocality} {NAP.postalCode}.</p>
          </div>
        </section>
      </div>
    </FlagshipShell>
  );
}
