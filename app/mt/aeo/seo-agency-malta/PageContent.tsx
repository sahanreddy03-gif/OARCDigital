import Link from "next/link";
import FlagshipShell from "@/components/flagship/FlagshipShell";
import { Arrow, SearchIcon, WaForm, WaIcon, waLink } from "@/components/flagship/parts";
import { NAP } from "@/lib/seo/nap";

interface Faq { question: string; answer: string; }
interface Props { faqs: Faq[]; }

const BLUEPRINT = "Hello OARC. In-negozju tiegħi huwa {x}. Jekk jogħġobkom ibagħtuli l-pjan tar-ranking b'xejn tiegħi.";
const PRICE = waLink("Hello OARC. Jekk jogħġobkom ibagħtuli l-prezz tagħkom għall-SEO. In-negozju tiegħi huwa: ");
const FIELD = "Isem in-negozju tiegħek";

// The seven places people search. `what` says it in one line, `we` says what OARC does there.
const places = [
  { name: "Google Search", what: "Xi ħadd jikteb dak li jeħtieġ u jagħżel mill-ewwel ftit riżultati.", we: "Intellgħu l-paġni tiegħek fuq nett għall-kliem li jġib il-klijenti." },
  { name: "Google Maps", what: "It-tfittxija “near me”. L-ewwel 3 postijiet fuq il-mappa jieħdu l-biċċa l-kbira tat-telefonati.", we: "Nibnu l-Google Business Profile tiegħek, ir-reċensjonijiet tiegħek u l-paġni lokali tiegħek." },
  { name: "Tweġibiet tal-AI fuq Google", what: "Illum Google jikteb it-tweġiba tiegħu stess 'il fuq mir-riżultati. Jisimhom AI Overviews u AI Mode.", we: "Nagħmlu l-websajt tiegħek sors li l-AI ta' Google tikkwota." },
  { name: "Chats tal-AI", what: "ChatGPT, Gemini, Perplexity, Claude, Copilot, Grok u Meta AI. In-nies jistaqsuhom lil min għandhom iqabbdu.", we: "Naraw li jkunu jafuk, jafdawk u jsemmu ismek." },
  { name: "Tfittxija bil-vuċi", what: "Siri, Google Assistant u Alexa jaqraw tweġiba waħda, mhux għaxra.", we: "Niktbu tweġibiet qosra u ċari li vuċi tista' taqrahom." },
  { name: "Tfittxija fuq vidjo u social media", what: "YouTube, TikTok u Instagram illum huma magni tat-tiftix, l-aktar għax-xerrejja żgħażagħ.", we: "Nagħtu titli, captions u tags lill-vidjows tiegħek biex in-nies isibuhom." },
  { name: "Magni tat-tiftix u mapep oħra", what: "Bing, Apple Maps, DuckDuckGo u Brave. Ħafna għodod tal-AI jaqraw lil dawn, mhux lil Google.", we: "Nelenkawk u nivverifikawk fuq kull waħda, bl-istess dettalji kullimkien." },
];

const terms = [
  { abbr: "SEO", full: "Ottimizzazzjoni għall-magni tat-tiftix", text: "Inwasslu l-websajt tiegħek fuq nett f'Google u Bing." },
  { abbr: "Lokali", full: "SEO lokali", text: "Indaħħluk fl-ewwel 3 fuq il-mappa meta jfittex xi ħadd fil-qrib." },
  { abbr: "AEO", full: "Ottimizzazzjoni għall-magni tat-tweġibiet", text: "Naraw li kliemek jintgħażel bħala t-tweġiba waħdanija, mill-AI ta' Google u mill-assistenti tal-vuċi." },
  { abbr: "GEO", full: "Ottimizzazzjoni għall-magni ġenerattivi", text: "Naraw li chats tal-AI bħal ChatGPT u Gemini jirrakkomandaw in-negozju tiegħek b'ismu." },
];

const pains = [
  { h: "Qiegħed fit-tieni paġna. Ħadd ma jħares hemm.", p: "Kważi kull klikk imur fuq l-ewwel paġna. It-tieni paġna hija fejn jibqgħu moħbija n-negozji tajbin.", fix: "L-ewwel paġna għat-tfittxijiet li jħallsu." },
  { h: "Il-kompetitur tiegħek jidher l-ewwel. Kull darba.", p: "Mhuwiex aħjar minnek. Sempliċement Google jifhmu aktar faċilment.", fix: "Nistudjawh. Imbagħad ngħadduh." },
  { h: "Tistaqsi lil ChatGPT. Isemmi lil ħaddieħor.", p: "L-AI tista' tirrakkomanda biss negozju li taf bih u li tafdah. Bħalissa, dak mhuwiex int.", fix: "Inġiegħlu lill-AI ssemmi ismek." },
  { h: "Ħallast għall-SEO. Ħadt rapport.", p: "Paġni sħaħ ta' ċarts, u l-ebda klijent ġdid x'turi.", fix: "Nirrappurtaw talbiet, mhux ċarts." },
];

const steps = [
  { h: "Nirranġaw il-websajt tiegħek.", p: "Veloċità, kif tidher fuq il-mowbajl, links miksura, u t-tikketti moħbija (jisimhom schema) li jgħidu lil Google u lill-AI x'tagħmel." },
  { h: "Insibu l-kliem li jiktbu l-klijenti tiegħek.", p: "Data vera tat-tfittxijiet, bl-Ingliż u bil-Malti. Bla tbassir." },
  { h: "Niktbu dak li jistaqsu n-nies.", p: "Paġni u artikli li jwieġbu mistoqsijiet veri. Miktuba min-nies, iċċekkjati mad-data." },
  { h: "Naraw li l-AI tkun tafek.", p: "Fatti ċari, tweġibiet ċari u l-istess dettalji kullimkien, biex ChatGPT, Gemini u Perplexity ikunu jistgħu jikkwotawk." },
  { h: "Inġiegħlu websajts ta' fiduċja jitkellmu dwarek.", p: "Stampa Maltija, direttorji u msieħba. Links veri biss. L-ebda trikk li jġiblek kastig aktar tard." },
  { h: "Nuruk in-numri.", p: "Rapport bil-miktub kull xahar: il-pożizzjonijiet tiegħek, il-viżitaturi tiegħek u t-talbiet tiegħek. Bi kliem sempliċi." },
];

const channels = [
  { group: "Il-websajt tiegħek", items: ["Paġni tas-servizzi", "Paġni tal-lokalitajiet", "Artikli u gwidi", "Mistoqsijiet u tweġibiet"] },
  { group: "Google", items: ["Posts fil-Business Profile", "Ritratti", "Reċensjonijiet u tweġibiet", "Mistoqsijiet u tweġibiet"] },
  { group: "Vidjo", items: ["YouTube", "YouTube Shorts", "TikTok", "Instagram Reels"] },
  { group: "Social media", items: ["LinkedIn", "Facebook", "Instagram", "X", "Pinterest", "Threads"] },
  { group: "Komunitajiet", items: ["Reddit", "Quora", "Medium", "Substack"] },
  { group: "Mapep u listi", items: ["Bing Places", "Apple Maps", "Clutch", "Yellow Pages Malta", "Direttorji tal-industrija"] },
  { group: "Aħbarijiet u stampa", items: ["Websajts tal-aħbarijiet Maltin", "Stampa tas-settur", "Podcasts", "Blogs tal-imsieħba"] },
];

const industries = [
  "Ristoranti u kafetteriji", "Lukandi u guest houses", "Kliniċi u dentisti", "Proprjetà", "Ditti legali", "Akkawntants",
  "Ħwienet u ħwienet online", "iGaming", "Fintech", "Kostruzzjoni u snajja'", "Skejjel u korsijiet", "Turiżmu u attivitajiet",
  "Sbuħija u wellness", "Gyms u fitness", "Bejgħ u kiri ta' karozzi", "Teknoloġija u software", "Avvenimenti u tiġijiet",
];

const reasons = [
  { h: "Mibni għall-AI mill-ewwel jum.", p: "Kull paġna li nagħmlu tinkiteb biex Google u l-AI jkunu jistgħu jikkwotawha. Ħafna aġenziji jżidu dan aktar tard, jekk qatt." },
  { h: "Ingliż u Malti.", p: "Ħafna aġenziji jistudjaw biss it-tfittxijiet bl-Ingliż. Aħna nistudjaw it-tnejn, għax il-klijenti tiegħek jużaw it-tnejn." },
  { h: "Tim wieħed. 8 dipartimenti.", p: "Kittieba, tim tal-films, żviluppaturi tal-web u inġiniera tal-AI taħt saqaf wieħed f'Birkirkara. Xejn ma jintbagħat barra minn Malta." },
  { h: "Data vera minn Malta.", p: "Mhux pjan ta' Londra mwaħħal fuq il-Belt Valletta. Naħdmu minn dak li n-nies f'Malta verament ifittxu." },
  { h: "Links veri biss.", p: "Stampa, imsieħba u direttorji ta' fiduċja. L-ebda link farm. Xejn li jpoġġi l-websajt tiegħek f'riskju." },
  { h: "Persuna tikteb ir-rapport tiegħek.", p: "Strateġista jispjegalek x'ġara u x'ġej. Dejjem tista' tiltaqa' magħna personalment." },
];

const included = [
  "Check sħiħ tal-websajt, u t-tiswijiet",
  "Mappa tal-keywords bl-Ingliż u bil-Malti",
  "Google Business Profile, mibni u mmaniġġjat",
  "Sistema tar-reċensjonijiet: itlob, iġbor, wieġeb",
  "Paġni tas-servizzi u paġni tal-lokalitajiet",
  "Artikli ġodda kull xahar, miktuba min-nies",
  "Viżibbiltà fl-AI: ChatGPT, Gemini, Perplexity, Claude, Copilot",
  "Tweġibiet għat-tfittxija bil-vuċi għal Siri, Google u Alexa",
  "Schema u fajl llms.txt, biex l-AI tkun tista' taqrak",
  "Listi fuq Bing Places u Apple Maps",
  "Links mill-istampa u minn direttorji ta' fiduċja",
  "Set-up tat-tfittxija fuq YouTube u social media",
  "Il-kompetituri tiegħek segwiti, kull xahar",
  "Rapport ta' paġna waħda: pożizzjonijiet, viżitaturi, talbiet",
];

const bar = [
  "Google Search", "Google Maps", "AI Overviews", "ChatGPT", "Gemini", "Perplexity", "Claude", "Copilot", "Grok",
  "Siri", "Alexa", "Google Assistant", "YouTube", "TikTok", "Bing", "Apple Maps",
];

function Bar() {
  return (
    <div className="bset">
      <em>Tinstab fuq</em>
      {bar.map((b) => <span key={b}>{b}</span>)}
    </div>
  );
}

export default function SEOAgencyMalta({ faqs }: Props) {
  return (
    <FlagshipShell locale="mt" langPath="/aeo/seo-agency-malta">
      <div id="top">
        {/* 1 · the promise and the free blueprint */}
        <section className="hero">
          <div className="wrap">
            <h1>
              <span className="kick">{"Aġenzija tal-SEO f'Malta"}</span>
              <span className="big">{"Intellgħu n-negozju tiegħek fuq nett f'"}<i className="mk">Google</i> u fl-<i className="mk">AI.</i></span>
            </h1>
            <p className="hsub">{"Tfittxija, mapep, chats tal-intelliġenza artifiċjali (AI) u vuċi. Tim wieħed f'Malta jara li jsibuk f'kollha."}</p>

            <div className="hgrid">
              <div className="ocard">
                <p className="otop"><span className="otag">{"B'xejn"}</span><span className="olim">Fi 48 siegħa</span></p>
                <h2>{"Il-pjan tar-ranking b'xejn tiegħek."}</h2>
                <p>{"Ibgħatilna isem in-negozju tiegħek. Fi 48 siegħa tirċievi pjan li juri fejn tinsab illum, u kif titla' fuq nett."}</p>
                <WaForm id="blueprint" message={BLUEPRINT} button="Irrid il-pjan tiegħi" placeholder={FIELD} label={FIELD} />
                <p className="onote"><span>Jiftaħ WhatsApp. Bla telefonata. Bla formola twila.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-hero">Jew ikseb il-prezz tiegħek</a></p>
              </div>

              <div className="screens" aria-hidden="true">
                <div className="scr">
                  <b>Tfittxija</b>
                  <div className="q"><SearchIcon />{"l-aħjar f'Malta"}</div>
                  <div className="row you"><i>1</i>In-negozju tiegħek</div>
                  <div className="row"><i>2</i>Xi ħadd ieħor</div>
                </div>
                <div className="scr">
                  <b>Chat tal-AI</b>
                  <div className="bub">{"Lil min għandi nċempel f'Malta?"}</div>
                  <div className="bub ai">Nibda <u>bin-negozju tiegħek</u>. Ara għaliex.</div>
                </div>
                <div className="scr s-hide">
                  <b>Mapep</b>
                  <div className="q"><SearchIcon />near me</div>
                  <div className="row you"><i>A</i>In-negozju tiegħek · Miftuħ issa</div>
                  <div className="row"><i>B</i>Xi ħadd ieħor</div>
                </div>
                <div className="scr s-hide">
                  <b>Vuċi</b>
                  <div className="wave">{Array.from({ length: 18 }, (_, i) => <span key={i} />)}</div>
                  <div className="row you"><i>1</i>“L-ewwel tweġiba hija n-negozju tiegħek.”</div>
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
            <p className="lab" data-rv><b>01</b>Fejn ifittxu n-nies</p>
            <div className="shead" data-rv>
              <h2 className="h2">{"In-nies m'għadhomx ifittxu "}<i>fuq Google biss.</i></h2>
              <p className="lead">Il-klijent tiegħek li jmiss jistaqsi lil mowbajl, lil mappa jew lil chat tal-AI. Aħna naraw li jsibuk fis-7 postijiet kollha.</p>
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
                  <h3>Ma tafx fejn qiegħed?</h3>
                  <p>{"Niċċekkjaw is-7 kollha għalik. B'xejn, fi 48 siegħa."}</p>
                </div>
                <a className="btn btn-w" href="#top" data-testid="link-blueprint-places">Irrid il-pjan tiegħi <Arrow /></a>
              </article>
            </div>
            <p className="under" data-rv>
              OARC Digital hija <Link className="txt" href="/mt" data-testid="link-home-context">{"aġenzija tal-marketing f'Malta"}</Link>{" b'servizz sħiħ. "}
              Għalhekk l-SEO tiegħek jiġi ppjanat flimkien mal-kontenut tiegħek, mal-websajt tiegħek u mar-reklami tiegħek.
            </p>
          </div>
        </section>

        {/* 3 · the four words, in plain Maltese */}
        <section className="sec paper" id="words">
          <div className="wrap">
            <p className="lab" data-rv><b>02</b>Il-kliem, spjegat</p>
            <div className="shead" data-rv>
              <h2 className="h2">SEO, AEO, GEO. <i>Bi kliem sempliċi.</i></h2>
              <p className="lead">{"Erba' kelmiet qosra. Kull waħda hija mod differenti kif tinstab."}</p>
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
            <p className="after" data-rv>{"Ħafna aġenziji jbigħulek waħda. Int teħtieġ l-erbgħa li huma, f'pjan wieħed."}</p>
          </div>
        </section>

        {/* 4 · sound familiar */}
        <section className="sec" id="familiar">
          <div className="wrap">
            <p className="lab" data-rv><b>03</b>Il-problema</p>
            <div className="shead" data-rv>
              <h2 className="h2 il">{"Tinstema' "}<i>familjari?</i></h2>
              <p className="lead">Jekk in-nies ma jsibukx, isibu lil ħaddieħor. Daqshekk sempliċi.</p>
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
            <p className="lab" data-rv><b>04</b>{"X'nagħmlu"}</p>
            <div className="shead" data-rv>
              <h2 className="h2">Il-metodu tal-SEO tagħna. <i>6 passi.</i></h2>
              <p className="lead">{"L-istess sitt passi għal kull negozju. Il-pjan ta' ġewwa fihom isir apposta għan-negozju tiegħek."}</p>
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
            <p className="lab" data-rv><b>05</b>Fejn nippubblikaw</p>
            <div className="shead" data-rv>
              <h2 className="h2">Inpoġġuk fejn <i>qegħdin il-klijenti tiegħek.</i></h2>
              <p className="lead">{"Kontenut organiku, mhux imħallas, mibni fuq data vera tat-tfittxijiet, fuq kull kanal li jgħodd. M'hemmx bżonn baġit għar-reklami."}</p>
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
            <p className="lab" data-rv><b>06</b>L-industrija tiegħek</p>
            <div className="shead" data-rv>
              <h2 className="h2">Pjan mibni <i>għall-industrija tiegħek.</i></h2>
              <p className="lead">{"In-nies ifittxu ristorant b'mod differenti ħafna minn ditta legali. Għalhekk kull pjan huwa differenti."}</p>
            </div>
            <ul className="chips big" data-rv>
              {industries.map((it) => <li key={it}>{it}</li>)}
              <li className="on">Tiegħek ukoll</li>
            </ul>
            <p className="under" data-rv>
              Trid li l-AI twieġeb lill-klijenti tiegħek ukoll? Ara <Link className="txt" href="/mt/ai">is-sistemi tal-AI tagħna għal kull industrija</Link>.
            </p>
          </div>
        </section>

        {/* 8 · why OARC */}
        <section className="sec dark" id="why">
          <div className="wrap">
            <p className="lab" data-rv><b>07</b>Għaliex aħna</p>
            <div className="shead" data-rv>
              <h2 className="h2">Għaliex OARC Digital <i>{"għall-SEO f'Malta."}</i></h2>
              <p className="lead">{"Hawnhekk it-tfittxija mhijiex xogħol sekondarju. Hija mibnija f'kull ħaġa li nagħmlu."}</p>
            </div>
            <ul className="why">
              {reasons.map((r) => (
                <li key={r.h} data-rv><h3>{r.h}</h3><p>{r.p}</p></li>
              ))}
            </ul>
            <div className="stat" data-rv>
              <b>9,600+</b>
              <p>
                {"darbiet li t-tweġibiet tal-AI ta' Google wrew il-paġni tagħna stess minn Mejju 2026. Nittestjaw kollox fuqna stess l-ewwel."}
                <small>Sors: il-Google Search Console tagħna stess, minn Mejju sa Novembru 2026.</small>
              </p>
            </div>
          </div>
        </section>

        {/* 9 · the package */}
        <section className="sec" id="package">
          <div className="wrap">
            <p className="lab" data-rv><b>08</b>Il-pakkett</p>
            <div className="shead" data-rv>
              <h2 className="h2">{"Ħu f'idejk it-tfittxija. "}<i>Kollha kemm hi.</i></h2>
              <p className="lead">Pakkett wieħed. Tim wieħed. Kull post fejn ifittxu n-nies, kopert.</p>
            </div>
            <div className="pack" data-rv>
              <div>
                <p className="otop"><span className="otag">Kollox inkluż</span></p>
                <h3>Il-pakkett Search Domination.</h3>
                <p className="pp">Google, Maps, chats tal-AI u vuċi, magħmula għalik kull xahar. Il-prezz jiddependi mill-industrija tiegħek u mill-kompetituri tiegħek.</p>
                <div className="pbtns">
                  <a className="btn btn-w" href={PRICE} target="_blank" rel="noopener" data-testid="link-price-package"><WaIcon />Ikseb il-prezz tiegħek</a>
                  <a className="btn btn-o" href="#top" data-testid="link-blueprint-package">{"Irrid il-pjan b'xejn tiegħi"}</a>
                </div>
              </div>
              <ul className="chk">{included.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
            <p className="under" data-rv>
              {"Trid it-tim kollu tal-marketing, mhux it-tfittxija biss? Ara l-offerta tagħna ta' "}<Link className="txt" href="/mt/aeo/digital-marketing-agency-malta">{"aġenzija tal-marketing diġitali f'Malta"}</Link>.{" "}
              Teħtieġ biss in-naħa teknika? Ara <Link className="txt" href="/services/seo-services">is-servizzi tal-SEO</Link>.
            </p>
          </div>
        </section>

        {/* 10 · how it starts */}
        <section className="sec paper" id="start">
          <div className="wrap">
            <p className="lab" data-rv><b>09</b>Kif nibdew</p>
            <div className="shead" data-rv>
              <h2 className="h2">Ibda <i>{"b'messaġġ wieħed."}</i></h2>
              <p className="lead">{"L-ebda laqgħa x'tibbukkja. L-ebda formola x'timla. Isem in-negozju tiegħek biss."}</p>
            </div>
            <ol className="tl">
              <li data-rv><p className="when">Illum</p><h3>Ibgħatilna isem in-negozju tiegħek fuq WhatsApp.</h3><p>Dak biss neħtieġu biex nibdew.</p></li>
              <li data-rv><p className="when">Fi 48 siegħa</p><h3>{"Tirċievi l-pjan b'xejn tiegħek."}</h3><p>{"Fejn tinsab fuq Google u Maps, x'tgħid dwarek l-AI, u l-ewwel 5 tiswijiet tiegħek."}</p></li>
              <li data-rv><p className="when">L-ewwel ġimgħa</p><h3>Naqblu dwar il-pjan.</h3><p>{"Niġu għandek, jew tiġi għandna f'"}{NAP.addressLocality}. Tara l-prezz qabel ma jibda xejn.</p></li>
              <li data-rv><p className="when">Kull xahar</p><h3>{"Titla'."}</h3><p>Kontenut ġdid, pożizzjonijiet aħjar u rapport wieħed ċar.</p></li>
            </ol>
          </div>
        </section>

        {/* 11 · questions */}
        <section className="sec" id="faq">
          <div className="wrap">
            <p className="lab" data-rv><b>10</b>Qabel ma tistaqsi</p>
            <div className="shead" data-rv>
              <h2 className="h2">Mistoqsijiet dwar <i>{"l-SEO f'Malta."}</i></h2>
              <p className="lead">Tweġibiet qosra u diretti. Staqsina kull ħaġa oħra fuq WhatsApp.</p>
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
            <h2 className="h2" data-rv>Tħallix lill-kompetitur tiegħek <i>ikun it-tweġiba.</i></h2>
            <WaForm id="blueprint2" message={BLUEPRINT} button="Irrid il-pjan tiegħi" placeholder={FIELD} label={FIELD} />
            <p className="onote"><span>{"B'xejn. Fi 48 siegħa. Jiftaħ WhatsApp."}</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-close">Jew ikseb il-prezz tiegħek</a></p>
            <p className="home">
              {"It-tfittxija hija wieħed mit-8 dipartimenti ta' OARC Digital. Issibna hawn: "}{NAP.streetAddressShort}, {NAP.addressLocality} {NAP.postalCode}.
            </p>
          </div>
        </section>
      </div>
    </FlagshipShell>
  );
}
