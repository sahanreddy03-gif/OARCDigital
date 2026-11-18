import type { Metadata } from "next";
import Link from "next/link";
import FlagshipShell from "@/components/flagship/FlagshipShell";
import { Arrow, WaForm, WaIcon, waLink } from "@/components/flagship/parts";
import LocaleSchema from "@/components/i18n/LocaleSchema";
import { LOCALE_INFO, localeAlternates, localeUrl } from "@/lib/i18n/twins";
import { NAP } from "@/lib/seo/nap";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const PATH = "/ai/casinos";
const URL = localeUrl("it", PATH);
const TITLE = "Marketing e Sistemi AI per Casinò a Malta | OARC Digital";
const DESCRIPTION =
  "Sistemi su misura, app per lo staff, prenotazioni e marketing che porta giocatori e ospiti nei casinò a Malta e nei loro hotel. Piano gratuito in 48 ore.";
const OG = { title: "Sistemi e marketing per casinò a Malta", subtitle: "Sistemi su misura, app per lo staff, prenotazioni e marketing, da un solo team.", eyebrow: "Sistemi AI" };

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: localeAlternates("it", PATH),
  openGraph: { images: ogImageEntry(OG), title: TITLE, description: DESCRIPTION, url: URL, type: "website", locale: LOCALE_INFO.it.og },
  twitter: { images: [ogImageUrl(OG)], card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const BLUEPRINT = "Ciao OARC. Il nostro casinò o hotel è {x}. Per favore inviateci il nostro piano gratuito.";
const PRICE = waLink("Ciao OARC. Vorrei ricevere il vostro prezzo per un casinò o un hotel con casinò. La nostra struttura è: ");

const three = [
  { h: "Costruiamo i tuoi sistemi.", p: "Software su misura per il tuo casinò e il tuo hotel: prenotazioni, club fedeltà, un’app per lo staff e una dashboard chiara.", we: "Costruito su come lavora davvero la tua struttura." },
  { h: "Riempiamo la sala e le camere.", p: "Camere d’hotel, posti al poker, tavoli privati, tavoli al ristorante e pacchetti soggiorno e gioco, prenotati giorno e notte.", we: "Nessuna richiesta aspetta fino al mattino." },
  { h: "Portiamo gli ospiti giusti.", p: "Video, contenuti, social media e annunci che raggiungono residenti, turisti, viaggiatori di fascia alta e aziende.", we: "A Malta, in Europa e in Asia." },
];

const parts = [
  { h: "La sala da gioco", p: "Slot, tavoli, sala poker e sale VIP. Orari, prenotazioni e offerte in un unico posto." },
  { h: "L’hotel", p: "Prenotazioni dirette delle camere, arrivi, messaggi agli ospiti e housekeeping, collegati al casinò." },
  { h: "Ristoranti e bar", p: "Prenotazioni dei tavoli, serate speciali e note sugli ospiti, così un giocatore trova il tavolo giusto per cena." },
  { h: "Eventi e gruppi", p: "Serate aziendali, conferenze, tornei e feste private, con preventivo e follow-up rapidi." },
];

// Ogni gioco, chi lo gioca di solito e come OARC raggiunge quel pubblico.
const games = [
  { h: "Slot", p: "Il pubblico più grande della sala. Residenti e visitatori che vogliono una serata facile e in compagnia.", we: "Offerte e tornei di slot, promossi dove le regole lo permettono." },
  { h: "Roulette", p: "Il classico primo tavolo per chi viene per la prima volta.", we: "Campagne per turisti e ospiti dell’hotel." },
  { h: "Blackjack", p: "Giocatori che amano l’abilità e un gioco veloce.", we: "Offerte ai tavoli e serate per imparare a giocare." },
  { h: "Punto banco e baccarat", p: "La prima scelta di molti giocatori di fascia alta, soprattutto dall’Asia.", we: "Pacchetti con tavolo privato, nella loro lingua." },
  { h: "Poker da tavolo", p: "Ultimate Texas Hold’em e giochi a tre carte, giocati contro il banco.", we: "Per gli appassionati di poker che vogliono un gioco più rapido." },
  { h: "Poker cash game", p: "Giocatori abituali che tornano ogni settimana.", we: "Una community del poker: programma, posti e aggiornamenti." },
  { h: "Tornei di poker", p: "Giocatori che girano l’Europa per l’evento giusto.", we: "Pagine dei tornei, satelliti e prenotazione dei posti." },
  { h: "VIP e sale private", p: "Ospiti di fascia alta che si aspettano di essere riconosciuti.", we: "Strumenti per i tuoi host: chi arriva e che cosa gli piace." },
];

const bookings = [
  "Camere e suite d’hotel", "Posti ai tornei di poker", "Posti ai cash game", "Tavoli privati e VIP", "Tavoli al ristorante", "Tavoli al bar e nella lounge",
  "Biglietti per eventi", "Serate aziendali e di gruppo", "Transfer dall’aeroporto", "Compleanni e feste",
];

const offers = [
  { h: "Soggiorno e gioco", p: "Una camera, un benvenuto e una serata in sala, venduti come un solo pacchetto." },
  { h: "Cena e gioco", p: "Cena nel tuo ristorante, poi i tavoli. Una sola prenotazione." },
  { h: "Weekend di torneo", p: "Il torneo di poker, la camera e il transfer, prenotati insieme." },
  { h: "Serate aziendali", p: "Eventi privati, viaggi incentive e serate dopo le conferenze per le aziende." },
  { h: "Feste", p: "Compleanni e grandi serate, organizzati con il tuo team." },
  { h: "Weekend di fascia alta", p: "Per ospiti VIP e junket: la suite, l’host, il tavolo privato e l’auto, tutto organizzato prima che atterrino." },
];

const guests = [
  { h: "Residenti.", p: "Persone a Malta che vogliono una bella serata fuori. Ogni annuncio rispetta le regole di Malta sull’età." },
  { h: "Turisti già a Malta.", p: "Trovati su Google, Maps e nelle risposte dell’intelligenza artificiale (AI), quando cercano che cosa fare stasera." },
  { h: "Viaggiatori di fascia alta.", p: "Ospiti facoltosi in Europa e in Asia che organizzano un viaggio intorno al soggiorno, alla cucina e ai tavoli." },
  { h: "Aziende e gruppi.", p: "Viaggi incentive, conferenze ed eventi privati, raggiunti su LinkedIn e tramite gli organizzatori." },
  { h: "Giocatori di poker.", p: "Giocatori che seguono il calendario europeo dei tornei e scelgono la prossima meta." },
  { h: "Gli ospiti del tuo hotel.", p: "Sono già nelle tue camere. Li invitiamo in sala al momento giusto." },
];

const app = [
  "Turni e cambi turno, approvati da un responsabile",
  "Avvisi, con una spunta quando ogni persona li ha letti",
  "Chat per reparto e per turno",
  "Compiti e note per il passaggio di consegne",
  "Moduli per segnalazioni e manutenzione",
  "Richieste di ferie, buste paga e documenti",
  "Formazione e regolamento interno",
  "Traduzione integrata per un team multilingue",
  "Funziona su qualsiasi telefono",
];

const depts: [string, string][] = [
  ["Sala da gioco", "Orari di tavoli e slot, personale e note di sala in un unico posto."],
  ["Sala poker", "Programma dei tornei, prenotazione dei posti e liste d’attesa."],
  ["VIP e host", "Chi arriva, che cosa gli piace e che cosa preparare."],
  ["Cage e cassa", "Passaggi di consegne e checklist. Le decisioni sul denaro restano alle tue persone."],
  ["Club fedeltà", "Iscrizioni, livelli, offerte e messaggi di compleanno."],
  ["Reception dell’hotel", "Prenotazioni dirette, arrivi e messaggi agli ospiti."],
  ["Housekeeping", "Camere pronte, richieste degli ospiti e riparazioni."],
  ["Ristoranti e bar", "Prenotazioni dei tavoli, serate speciali e note sugli ospiti."],
  ["Eventi e gruppi", "Preventivi, programmi e follow-up."],
  ["Sorveglianza e sicurezza", "Registro delle segnalazioni e passaggi di consegne. Le telecamere restano sui tuoi sistemi."],
  ["Risorse umane e turni", "Turni, cambi, ferie e formazione."],
  ["Compliance", "Checklist, registri e promemoria, pronti per il tuo team compliance."],
];

const content = [
  "Video della struttura", "Riprese dei tornei", "Storie di chef e bar", "Tour di camere e suite", "Reel e video brevi", "Foto",
  "Social media, gestiti ogni settimana", "Google e Google Maps", "Risposte nelle ricerche AI", "Annunci su Meta, Google e LinkedIn", "Portali di viaggi ed eventi", "Offerte ai soci che hanno dato il consenso",
];

const rules = [
  { h: "Solo adulti.", p: "Gli annunci sono rivolti agli adulti, e mai ai bambini." },
  { h: "Nessuna falsa promessa.", p: "Non lasciamo mai intendere che il gioco sia un modo per fare soldi o per risolvere un problema." },
  { h: "Gioco responsabile su tutto.", p: "Ogni annuncio riporta il messaggio sul gioco responsabile e dove trovare aiuto." },
  { h: "L’autoesclusione è rispettata.", p: "Chi si è autoescluso non viene mai contattato. Le tue liste vengono controllate in ogni campagna." },
  { h: "Nessuna pressione sui giocatori a rischio.", p: "I dati dei giocatori non vengono mai usati per fare pressione su chi mostra segni di un problema con il gioco." },
  { h: "Decidono le persone.", p: "L’AI non decide mai nulla sul conto, sui limiti o sul denaro di un giocatore. Passa tutto al tuo team." },
];

const reasons = [
  { h: "Sistemi e marketing in un solo team.", p: "L’agenzia che porta gli ospiti costruisce anche il sistema che li prenota." },
  { h: "Lavoriamo nella tua struttura.", p: "La nostra troupe e i nostri sviluppatori vengono da te e vedono come funziona davvero ogni turno." },
  { h: "Funziona con quello che hai già.", p: "Il tuo sistema di gestione del casinò, il sistema di prenotazione dell’hotel, le casse e il CRM. Li verifichiamo uno per uno con il tuo team IT." },
  { h: "Malta, Europa e Asia.", p: "Conosciamo il pubblico locale, e pianifichiamo campagne per gli ospiti all’estero nella loro lingua." },
  { h: "AI e persone insieme.", p: "L’AI fa il lavoro di routine. Il tuo team tiene ogni decisione che conta." },
  { h: "Puoi incontrarci.", p: "Siamo a Birkirkara. Persone vere, di persona, a Malta." },
];

const included = [
  "Sistemi su misura per il tuo casinò e il tuo hotel",
  "Un’app per lo staff per ogni reparto",
  "Prenotazioni di camere, tavoli e posti",
  "AI che risponde agli ospiti nella loro lingua",
  "Strumenti per il tuo club fedeltà",
  "Strumenti per i tuoi host VIP",
  "Pacchetti e offerte, pianificati con te",
  "Riprese, foto e video brevi",
  "Social media, gestiti ogni settimana",
  "Google, Maps e ricerche AI",
  "Annunci a Malta, in Europa e in Asia",
  "Pagine per le vendite ad aziende e gruppi",
  "Una dashboard e un report mensile",
  "Formazione e assistenza mensile",
];

const faqs = [
  { question: "Che cosa fa OARC Digital per i casinò a Malta?", answer: "Tre cose. Costruiamo sistemi su misura per il tuo casinò e il tuo hotel, compresa un’app per lo staff. Prendiamo prenotazioni per camere, posti al poker, tavoli e pacchetti, giorno e notte. E gestiamo il marketing che porta gli ospiti: video, contenuti, social media e annunci. Un solo team fa tutte e tre." },
  { question: "Lavorate anche con hotel con casinò, ristoranti e bar?", answer: "Sì. Di solito un casinò fa parte di una struttura più grande. Colleghiamo la sala da gioco, l’hotel, i ristoranti, i bar e il team eventi, così un ospite è riconosciuto in tutti e un solo pacchetto può coprirli tutti." },
  { question: "Funziona con il nostro sistema di gestione del casinò e con quello di prenotazione dell’hotel?", answer: "Nella maggior parte dei casi sì. Ci colleghiamo agli strumenti che usi già, come il sistema di gestione del casinò, il sistema di prenotazione dell’hotel, le casse e il CRM. Li verifichiamo uno per uno con il tuo team IT prima di promettere qualcosa." },
  { question: "Che cos’è l’app per lo staff?", answer: "Un’app sola per tutto il tuo team. Contiene turni e cambi turno, avvisi, chat per reparto e per turno, compiti e note per il passaggio di consegne, segnalazioni e formazione. Funziona su qualsiasi telefono, in inglese, in maltese e nelle altre lingue parlate dal tuo team." },
  { question: "Come portate ospiti di fascia alta dall’Europa e dall’Asia?", answer: "Pianifichiamo con te pacchetti soggiorno, cena e gioco. Poi li mettiamo dove quegli ospiti guardano: ricerche, risposte AI, social media, portali di viaggi ed eventi, e annunci nella loro lingua. Ogni campagna rispetta le regole sulla pubblicità del gioco del paese in cui esce." },
  { question: "Quali giochi promuovete?", answer: "Tutti, ognuno al suo pubblico: slot, roulette, blackjack, punto banco e baccarat, poker cash game, tornei di poker e tavoli VIP. Un giocatore di slot e un giocatore di tornei di poker si trovano in posti diversi, quindi ogni gioco ha il suo piano." },
  { question: "Gli ospiti possono prenotare un posto al poker, un tavolo o una camera con un solo messaggio?", answer: "Sì. Gli ospiti scrivono su WhatsApp, sul tuo sito web, al telefono o sui social media. Il sistema risponde nella loro lingua, controlla che cosa è libero e prenota, oppure passa la richiesta al tuo team quando serve una persona." },
  { question: "I vostri annunci rispettano le regole di Malta sulla pubblicità del gioco?", answer: "Sì. Gli annunci sono solo per adulti, non promettono mai vincite, indicano il titolare della licenza, riportano il messaggio sul gioco responsabile e non si rivolgono mai a chi si è autoescluso. Il tuo team compliance approva ogni campagna prima che esca." },
  { question: "Controllate la lista di autoesclusione prima di una campagna?", answer: "Sì. Prima che qualsiasi messaggio arrivi ai tuoi soci, viene applicata la tua lista di esclusione, così chi si è autoescluso non viene mai contattato. Vengono tolti anche i soci che hanno rifiutato il marketing." },
  { question: "Chi è responsabile se un annuncio viola le regole?", answer: "Secondo le regole di Malta, il titolare della licenza resta responsabile dei propri annunci, anche quando li realizza un’agenzia. Per questo non esce nulla finché il tuo team compliance non lo ha approvato." },
  { question: "L’AI prende decisioni sui giocatori?", answer: "No. L’AI risponde alle domande, prende le prenotazioni e sbriga il lavoro amministrativo. Tutto ciò che riguarda il conto, i limiti, i controlli o il denaro di un giocatore va al tuo team. Decidono le persone." },
  { question: "I dati dei nostri ospiti sono al sicuro?", answer: "I tuoi dati restano tuoi. Sono protetti dal GDPR, li vede solo chi ne ha bisogno e lavoriamo con un accordo di riservatezza. Anche i sistemi che costruiamo per te sono tuoi." },
  { question: "Quanto tempo ci vuole?", answer: "Un assistente per le prenotazioni o un’app per lo staff possono essere attivi nel giro di qualche settimana. I sistemi più grandi, che collegano molti reparti, richiedono più tempo. Ricevi le date di ogni passo prima di iniziare." },
  { question: "Quanto costa?", answer: "Dipende dalle dimensioni della tua struttura e da che cosa ti serve. Veniamo da te, vediamo come lavori e poi ti diamo un prezzo. Per iniziare, mandaci il nome della tua struttura su WhatsApp." },
  { question: "Lavorate anche con i casinò online?", answer: "Sì. Abbiamo sistemi AI separati per operatori iGaming, fornitori e affiliati. Questa pagina è per i casinò terrestri e per gli hotel che li circondano." },
  { question: "Che cosa c’è nel piano gratuito?", answer: "Un piano per la tua struttura: dove si perdono gli ospiti, dove si perde il tempo dello staff, quale sistema costruire per primo e a quali ospiti puntare. Lo ricevi su WhatsApp entro 48 ore." },
  { question: "Dove ha sede OARC Digital?", answer: `${NAP.streetAddressShort}, ${NAP.addressLocality} ${NAP.postalCode}, Malta. Puoi incontrare il team di persona. WhatsApp ${NAP.phoneDisplay}. Email ${NAP.email}.` },
];

const bar = [
  "Slot", "Roulette", "Blackjack", "Punto banco", "Baccarat", "Poker cash game", "Tornei di poker", "Sale VIP",
  "Camere d’hotel", "Ristoranti", "Bar", "Eventi", "Club fedeltà",
];

function Bar() {
  return (
    <div className="bset">
      <em>Riempiamo</em>
      {bar.map((b) => <span key={b}>{b}</span>)}
    </div>
  );
}

export default function AiCasinosPageIt() {
  return (
    <FlagshipShell accent="#8C6A16" accentSoft="#F1E4BE" navTheme="dark" locale="it" langPath={PATH}>
      <LocaleSchema
        locale="it"
        path={PATH}
        title={TITLE}
        description={DESCRIPTION}
        serviceName="Marketing e sistemi AI per casinò a Malta"
        serviceType="Software su misura, app per lo staff, prenotazioni e marketing per casinò terrestri e hotel con casinò"
        faqs={faqs}
        crumbs={[["Sistemi AI", "/ai"]]}
      />
      <div id="top">
        {/* 1 · the promise and the free blueprint */}
        <section className="hero dark">
          <div className="wrap">
            <h1>
              <span className="kick">Marketing e sistemi AI per casinò a Malta</span>
              <span className="big">Riempiamo i tuoi tavoli <i className="mk">e le tue camere.</i></span>
            </h1>
            <p className="hsub">Sistemi su misura, app per lo staff e marketing per i casinò a Malta, e per gli hotel, i ristoranti e i bar che li circondano.</p>

            <div className="hgrid">
              <div className="ocard">
                <p className="otop"><span className="otag">Gratis</span><span className="olim">In 48 ore</span></p>
                <h2>Il piano gratuito per il tuo casinò.</h2>
                <p>Mandaci il nome del tuo casinò o del tuo hotel. In 48 ore ricevi un piano: dove si perdono gli ospiti, dove si perde il tempo dello staff e che cosa costruire per primo.</p>
                <WaForm id="blueprint" message={BLUEPRINT} button="Voglio il mio piano" placeholder="Il nome del tuo casinò o hotel" label="Il nome del tuo casinò o hotel" />
                <p className="onote"><span>Si apre WhatsApp. Nessuna chiamata. Nessun modulo lungo.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-hero">Oppure chiedi il prezzo</a></p>
              </div>

              <div className="screens" aria-hidden="true">
                <div className="scr">
                  <b>Sala poker · Sabato</b>
                  <div className="row"><i>1</i>Torneo · 21:00</div>
                  <div className="row you"><i>2</i>Posto 7 · Prenotato</div>
                </div>
                <div className="scr">
                  <b>WhatsApp · 02:10</b>
                  <div className="bub">Due notti, cena e torneo?</div>
                  <div className="bub ai">Fatto. <u>Camera, tavolo e posto prenotati.</u></div>
                </div>
                <div className="scr s-hide">
                  <b>App per lo staff</b>
                  <div className="row"><i>1</i>Turni · Turno di notte</div>
                  <div className="row you"><i>2</i>Cambio turno approvato</div>
                </div>
                <div className="scr s-hide">
                  <b>Stasera</b>
                  <div className="kv"><span>Ospiti in arrivo</span><b>In lista</b></div>
                  <div className="kv"><span>In attesa di un host</span><b>Nessuno</b></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="band lt" aria-hidden="true">
          <div className="brun"><Bar /><Bar /></div>
        </div>

        {/* 2 · three jobs */}
        <section className="sec" id="jobs">
          <div className="wrap">
            <p className="lab" data-rv><b>01</b>Che cosa facciamo</p>
            <div className="shead" data-rv>
              <h2 className="h2">Tre lavori. <i>Un solo team.</i></h2>
              <p className="lead">Molte agenzie gestiscono solo i tuoi annunci. Molte software house costruiscono solo i tuoi sistemi. Noi facciamo entrambe le cose, e le colleghiamo.</p>
            </div>
            <div className="grid g3">
              {three.map((x, i) => (
                <article className="card" key={x.h} data-rv>
                  <span className="n" aria-hidden="true">{i + 1}</span>
                  <h3>{x.h}</h3>
                  <p>{x.p}</p>
                  <p className="we">{x.we}</p>
                </article>
              ))}
            </div>
            <p className="under" data-rv>
              Al lavoro per i casinò partecipano tutti e 8 i reparti di <Link className="txt" href="/it" data-testid="link-home-context">OARC Digital</Link>, agenzia digitale e AI a Malta.
              Così i tuoi sistemi, i tuoi contenuti e i tuoi annunci arrivano da un solo team.
            </p>
          </div>
        </section>

        {/* 3 · one property, many businesses */}
        <section className="sec paper" id="property">
          <div className="wrap">
            <p className="lab" data-rv><b>02</b>Tutta la struttura</p>
            <div className="shead" data-rv>
              <h2 className="h2">Un casinò non è mai <i>solo un casinò.</i></h2>
              <p className="lead">È anche un hotel, ristoranti, bar ed eventi. I tuoi ospiti vedono un posto solo. I tuoi sistemi dovrebbero vedere un ospite solo.</p>
            </div>
            <div className="grid g4">
              {parts.map((x) => (
                <article className="card" key={x.h} data-rv>
                  <h3 style={{ marginTop: 0 }}>{x.h}</h3>
                  <p>{x.p}</p>
                </article>
              ))}
            </div>
            <p className="after" data-rv>Un solo profilo ospite per tutti e quattro. Un ospite dell’hotel riceve l’offerta giusta del casinò. Un giocatore trova il tavolo giusto per cena.</p>
          </div>
        </section>

        {/* 4 · every game */}
        <section className="sec" id="games">
          <div className="wrap">
            <p className="lab" data-rv><b>03</b>I giochi</p>
            <div className="shead" data-rv>
              <h2 className="h2">Ogni gioco ha <i>il suo pubblico.</i></h2>
              <p className="lead">Un giocatore di slot e un giocatore di tornei di poker si trovano in posti molto diversi. Promuoviamo ogni gioco a chi lo gioca.</p>
            </div>
            <div className="grid g3">
              {games.map((g) => (
                <article className="card" key={g.h} data-rv>
                  <h3 style={{ marginTop: 0 }}>{g.h}</h3>
                  <p>{g.p}</p>
                  <p className="we">{g.we}</p>
                </article>
              ))}
              <article className="card cta" data-rv>
                <div>
                  <h3>Quale gioco ha bisogno di più giocatori?</h3>
                  <p>Lo pianifichiamo per te. Gratis, in 48 ore.</p>
                </div>
                <a className="btn btn-w" href="#top" data-testid="link-blueprint-games">Voglio il mio piano <Arrow /></a>
              </article>
            </div>
          </div>
        </section>

        {/* 5 · bookings */}
        <section className="sec paper" id="bookings">
          <div className="wrap">
            <p className="lab" data-rv><b>04</b>Prenotazioni</p>
            <div className="shead" data-rv>
              <h2 className="h2">Prenotato con <i>un solo messaggio.</i></h2>
              <p className="lead">Gli ospiti scrivono su WhatsApp, sul tuo sito web, al telefono o sui social media. Il sistema risponde nella loro lingua e prenota.</p>
            </div>
            <ul className="chips big" data-rv>
              {bookings.map((it) => <li key={it}>{it}</li>)}
              <li className="on">Pacchetti soggiorno, cena e gioco</li>
            </ul>
            <p className="under" data-rv>Tutto ciò che riguarda il conto, i limiti o il denaro di un giocatore va subito al tuo team. Decidono le persone. Il sistema mai.</p>
          </div>
        </section>

        {/* 6 · offers */}
        <section className="sec" id="offers">
          <div className="wrap">
            <p className="lab" data-rv><b>05</b>Pacchetti</p>
            <div className="shead" data-rv>
              <h2 className="h2">Costruiamo le offerte <i>con te.</i></h2>
              <p className="lead">Ci sediamo con il tuo team e pianifichiamo che cosa venderà. Poi lo mettiamo davanti alle persone giuste.</p>
            </div>
            <div className="grid g3">
              {offers.map((x) => (
                <article className="card" key={x.h} data-rv>
                  <h3 style={{ marginTop: 0 }}>{x.h}</h3>
                  <p>{x.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 7 · who we bring */}
        <section className="sec dark" id="guests">
          <div className="wrap">
            <p className="lab" data-rv><b>06</b>I tuoi ospiti</p>
            <div className="shead" data-rv>
              <h2 className="h2">Gli ospiti giusti. <i>Dai posti giusti.</i></h2>
              <p className="lead">Non facciamo solo annunci. Mettiamo la tua offerta dove il tuo prossimo ospite sta già guardando.</p>
            </div>
            <ul className="why">
              {guests.map((r) => (
                <li key={r.h} data-rv><h3>{r.h}</h3><p>{r.p}</p></li>
              ))}
            </ul>
            <div className="stat" data-rv>
              <b>68.8%</b>
              <p>
                delle visite ai casinò a Malta nel 2025 è stato di ospiti arrivati da fuori Malta. Quindi la maggior parte del tuo marketing deve raggiungere le persone prima che atterrino.
                <small>Fonte: Malta Gaming Authority, Annual Report 2025.</small>
              </p>
            </div>
          </div>
        </section>

        {/* 8 · the staff app */}
        <section className="sec" id="staff-app">
          <div className="wrap">
            <p className="lab" data-rv><b>07</b>L’app per lo staff</p>
            <div className="shead" data-rv>
              <h2 className="h2">Un’app per <i>tutto il tuo team.</i></h2>
              <p className="lead">Una grande struttura vive di tante persone, su turni, in tanti reparti. Costruiamo un’app sola che le tiene tutte insieme.</p>
            </div>
            <div className="split" data-rv>
              <ul className="chk">{app.map((it) => <li key={it}>{it}</li>)}</ul>
              <div className="phone" aria-hidden="true">
                <div className="scrn">
                  <div className="bar"><b>Turno di notte</b><span>Sala</span></div>
                  <div className="pin">Stasera: torneo di poker alle 21:00. Tutti i posti occupati.</div>
                  <div className="msg"><small>Pit 2</small>Al tavolo 6 serve un croupier alle 22:00.</div>
                  <div className="msg me"><small>Responsabile di sala</small>Coperto. Maria sta arrivando.</div>
                  <div className="msg"><small>Reception</small>Ospite della suite in arrivo alle 23:30. Host pronto?</div>
                  <div className="msg me"><small>Host VIP</small>Pronto. L’auto è all’aeroporto.</div>
                  <div className="tabs"><b>Chat</b><span>Turni</span><span>Compiti</span><span>Avvisi</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9 · every department */}
        <section className="sec paper" id="departments">
          <div className="wrap">
            <p className="lab" data-rv><b>08</b>I tuoi reparti</p>
            <div className="shead" data-rv>
              <h2 className="h2">Ogni reparto. <i>Un solo sistema.</i></h2>
              <p className="lead">Ogni parte della tua struttura riceve quello che le serve, e tutte condividono le stesse informazioni.</p>
            </div>
            <dl className="terms" data-rv>
              {depts.map(([t, d]) => (
                <div key={t}><dt>{t}</dt><dd>{d}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        {/* 10 · content and adverts */}
        <section className="sec" id="content">
          <div className="wrap">
            <p className="lab" data-rv><b>09</b>Contenuti e annunci</p>
            <div className="shead" data-rv>
              <h2 className="h2">Lo filmiamo. Lo pubblichiamo. <i>Gestiamo gli annunci.</i></h2>
              <p className="lead">La nostra troupe viene nella tua struttura. Una sola giornata di riprese ti dà settimane di contenuti per ogni canale.</p>
            </div>
            <ul className="chips big" data-rv>
              {content.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
        </section>

        {/* 11 · by the rules */}
        <section className="sec dark" id="rules">
          <div className="wrap">
            <p className="lab" data-rv><b>10</b>Fatto bene</p>
            <div className="shead" data-rv>
              <h2 className="h2">Fatto bene. <i>Secondo le regole.</i></h2>
              <p className="lead">Il gioco è regolamentato, e lo è anche la sua pubblicità. Tutto quello che facciamo è costruito per rispettare le regole.</p>
            </div>
            <ul className="why">
              {rules.map((r) => (
                <li key={r.h} data-rv><h3>{r.h}</h3><p>{r.p}</p></li>
              ))}
            </ul>
            <p className="note" data-rv>
              Lavoriamo secondo le Gaming Commercial Communications Regulations di Malta e le linee guida della Malta Gaming Authority.
              Ogni annuncio indica il titolare della licenza, e il tuo team compliance approva ogni campagna prima che esca.
            </p>
          </div>
        </section>

        {/* 12 · why OARC */}
        <section className="sec paper" id="why">
          <div className="wrap">
            <p className="lab" data-rv><b>11</b>Perché noi</p>
            <div className="shead" data-rv>
              <h2 className="h2">Perché OARC Digital per <i>il tuo casinò.</i></h2>
              <p className="lead">Non ti vendiamo un software per poi sparire, e non pubblichiamo post sperando che funzionino. Lo costruiamo, lo riempiamo e lo gestiamo con te.</p>
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

        {/* 13 · the package */}
        <section className="sec" id="package">
          <div className="wrap">
            <p className="lab" data-rv><b>12</b>Il pacchetto</p>
            <div className="shead" data-rv>
              <h2 className="h2">Tutta la tua struttura. <i>Coperta.</i></h2>
              <p className="lead">Un pacchetto. Un team. Sistemi, prenotazioni e marketing per il casinò e per tutto ciò che gli sta intorno.</p>
            </div>
            <div className="pack k" data-rv>
              <div>
                <p className="otop"><span className="otag">Tutto incluso</span></p>
                <h3>Il pacchetto Full House.</h3>
                <p className="pp">Costruito intorno alla tua struttura e gestito con il tuo team. Il prezzo dipende dalle dimensioni della tua struttura e da che cosa ti serve.</p>
                <div className="pbtns">
                  <a className="btn btn-y" href={PRICE} target="_blank" rel="noopener" data-testid="link-price-package"><WaIcon />Chiedi il prezzo</a>
                  <a className="btn btn-o" href="#top" data-testid="link-blueprint-package">Voglio il mio piano gratuito</a>
                </div>
              </div>
              <ul className="chk">{included.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
            <p className="under" data-rv>
              Gestisci un hotel o un ristorante senza casinò? Guarda i nostri sistemi AI per <Link className="txt" href="/it/ai/hotels">hotel</Link> e <Link className="txt" href="/ai/restaurants">ristoranti</Link>.
              Gestisci un casinò online? Guarda <Link className="txt" href="/ai/igaming-operators">l’AI per operatori iGaming</Link>, oppure <Link className="txt" href="/it/ai">tutti i sistemi AI</Link>.
            </p>
          </div>
        </section>

        {/* 14 · how it starts */}
        <section className="sec paper" id="start">
          <div className="wrap">
            <p className="lab" data-rv><b>13</b>Come si inizia</p>
            <div className="shead" data-rv>
              <h2 className="h2">Inizia con <i>un solo messaggio.</i></h2>
              <p className="lead">Nessuna riunione da fissare. Nessun modulo da compilare. Solo il nome della tua struttura.</p>
            </div>
            <ol className="tl">
              <li data-rv><p className="when">Oggi</p><h3>Mandaci su WhatsApp il nome della tua struttura.</h3><p>È tutto ciò che ci serve per iniziare.</p></li>
              <li data-rv><p className="when">In 48 ore</p><h3>Ricevi il tuo piano gratuito.</h3><p>Dove si perdono gli ospiti, dove si perde il tempo dello staff e che cosa costruire per primo.</p></li>
              <li data-rv><p className="when">Poi</p><h3>Veniamo da te e pianifichiamo.</h3><p>Visitiamo la struttura con il tuo team, concordiamo il piano e le offerte, e ti diamo il prezzo e le date.</p></li>
              <li data-rv><p className="when">Ogni mese</p><h3>Lo gestiamo con te.</h3><p>Nuovi contenuti, nuove campagne, cura dei sistemi e un report chiaro.</p></li>
            </ol>
          </div>
        </section>

        {/* 15 · questions */}
        <section className="sec" id="faq">
          <div className="wrap">
            <p className="lab" data-rv><b>14</b>Prima che tu chieda</p>
            <div className="shead" data-rv>
              <h2 className="h2">Le domande dei <i>team dei casinò.</i></h2>
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

        {/* 16 · close */}
        <section className="fin dark">
          <div className="wrap">
            <h2 className="h2" data-rv>Tieni la sala <i>piena.</i></h2>
            <WaForm id="blueprint2" message={BLUEPRINT} button="Voglio il mio piano" placeholder="Il nome del tuo casinò o hotel" label="Il nome del tuo casinò o hotel" />
            <p className="onote"><span>Gratis. In 48 ore. Si apre WhatsApp.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-close">Oppure chiedi il prezzo</a></p>
            <p className="home">Trovi OARC Digital in {NAP.streetAddressShort}, {NAP.addressLocality} {NAP.postalCode}. Solo per adulti. Per favore, gioca in modo responsabile.</p>
          </div>
        </section>
      </div>
    </FlagshipShell>
  );
}
