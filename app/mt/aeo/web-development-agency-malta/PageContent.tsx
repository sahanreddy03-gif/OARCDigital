import Link from "next/link";
import FlagshipShell from "@/components/flagship/FlagshipShell";
import { Arrow, SearchIcon, WaForm, WaIcon, waLink } from "@/components/flagship/parts";
import { NAP } from "@/lib/seo/nap";

interface Faq { question: string; answer: string; }
interface Props { faqs: Faq[]; }

const BLUEPRINT = "Hello OARC. In-negozju tiegħi huwa {x}. Jekk jogħġobkom ibagħtuli l-pjan b'xejn għall-websajt tiegħi.";
const PRICE = waLink("Hello OARC. Jekk jogħġobkom ibagħtuli l-prezz tagħkom għal websajt. In-negozju tiegħi huwa: ");
const NAME = "Isem in-negozju tiegħek";

// Every kind of website, in one plain line, with who usually wants it.
const types = [
  { h: "Websajt sempliċi", p: "Ftit paġni ċari li jgħidu min int u kif isibuk.", who: "Nies tas-sengħa, kliniċi, ditti legali" },
  { h: "Landing page", p: "Paġna waħda b'xogħol wieħed: iġġiblek it-talba.", who: "Reklami, offerti, tnedijiet" },
  { h: "Ħanut online", p: "Tbigħ il-prodotti tiegħek u titħallas online.", who: "Ħwienet, moda, ikel" },
  { h: "Websajt għall-prenotazzjonijiet", p: "In-nies jagħżlu ħin u jibbukkjaw, mingħajr telefonata.", who: "Salons, kliniċi, ristoranti, tours" },
  { h: "Portfolio", p: "L-aqwa xogħol tiegħek, muri bl-isbaħ mod.", who: "Periti, fotografi, disinjaturi" },
  { h: "Żona għall-membri", p: "Kontenut li jarawh biss dawk li jidħlu bil-login.", who: "Gyms, skejjel, coaches" },
  { h: "Websajt tal-listings", p: "Ħafna oġġetti li n-nies jistgħu jfittxu u jiffiltraw.", who: "Proprjetà, karozzi, impjiegi" },
  { h: "Web app jew portal", p: "Il-klijenti jidħlu bil-login u jagħmlu l-affarijiet tagħhom, bħal f'app.", who: "Finanzi, iGaming, loġistika" },
  { h: "Ħafna lingwi", p: "Websajt waħda li tkellem lil kull viżitatur bil-lingwa tiegħu.", who: "Turiżmu, proprjetà, esportazzjoni" },
  { h: "Websajt 3D", p: "Oġġetti u spazji li n-nies jistgħu jdawru u jesploraw.", who: "Lussu, karozzi, jottijiet, proprjetà" },
  { h: "Storja interattiva", p: "Websajt li tiċċaqlaq u tinkixef waqt li tiskrollja.", who: "Brands, tnedijiet, avvenimenti" },
];

const jobs = [
  { h: "Tirrakkonta l-istorja tiegħek.", p: "L-ebda template. Kliemek, ir-ritratti tiegħek u l-filmat tiegħek, magħmulin għalik.", fix: "Unika għalik." },
  { h: "Tinstab.", p: "Mibnija mill-ewwel linja biex titla' fuq Google u tinqara mill-AI.", fix: "SEO, AEO u GEO inklużi." },
  { h: "Twieġeb.", p: "Assistent tal-AI jwieġeb lill-viżitaturi lejl u nhar, bl-informazzjoni tiegħek stess.", fix: "L-ebda viżitatur ma jibqa' jistenna." },
  { h: "Tieħu t-talba.", p: "Formoli intelliġenti, links għall-prenotazzjoni u WhatsApp, f'kull paġna.", fix: "Il-viżitaturi jsiru klijenti." },
];

const free = [
  "Formola tal-AI li tistaqsi l-mistoqsijiet it-tajbin",
  "Link għall-prenotazzjoni, imqabbad mal-kalendarju tiegħek",
  "Appoġġ għall-klijenti bl-AI, imħarreġ fuq in-negozju tiegħek",
  "Buttuni tal-WhatsApp u tat-telefonati f'kull paġna",
  "Setup għal Google u l-AI: schema, sitemap, llms.txt",
  "Tracking fuq kull buttuna, biex tkun taf x'jaħdem",
  "Katnazz SSL, setup tal-hosting u backups kuljum",
  "Taħriġ, biex tkun tista' tibdilha int stess",
];

const platforms = [
  { h: "WordPress", p: "L-aħjar meta t-tim tiegħek jippubblika spiss. Faċli biex tibdilha." },
  { h: "Webflow", p: "L-aħjar għal websajts iffukati fuq id-disinn li jinbidlu malajr." },
  { h: "Shopify", p: "L-aħjar għal ħwienet online, f'Malta u barra minn Malta." },
  { h: "Bini apposta (Next.js)", p: "L-aħjar għall-veloċità, it-3D, il-web apps u kull ħaġa speċjali." },
];

const terms: [string, string][] = [
  ["Core Web Vitals", "It-tliet punteġġi ta' Google għall-veloċità u l-kumdità. Nibnu biex ngħaddu minnhom."],
  ["Responsive", "Tadatta ruħha waħedha għal mowbajl, tablet u laptop."],
  ["Aċċessibbiltà (WCAG)", "Jistgħu jużawha wkoll persuni b'diżabilità."],
  ["SSL", "Il-katnazz. Id-data tal-viżitaturi tibqa' privata."],
  ["CMS", "L-iskrin sempliċi fejn tibdel kliemek u r-ritratti tiegħek int stess."],
  ["Schema", "Tikketti moħbijin li jgħidu lil Google u lill-AI x'inhi kull ħaġa."],
  ["llms.txt", "Fajl qasir li jgħid lill-għodod tal-AI x'jagħmel in-negozju tiegħek."],
  ["CDN", "Il-websajt tiegħek tasal minn server qrib kull viżitatur, biex tiftaħ malajr."],
  ["Analytics", "Jgħodd il-viżitaturi tiegħek u x'jagħmlu."],
  ["Conversion tracking", "Jgħodd it-talbiet u l-bejgħ, u minn fejn ġew."],
  ["Rabta mas-CRM", "Kull talba tidħol waħedha fil-lista tal-klijenti tiegħek."],
  ["Payment gateway", "Jieħu l-ħlasijiet bil-kard b'mod sigur."],
  ["Kunsens għall-cookies (GDPR)", "Jitlob permess qabel it-tracking. Hija liġi tal-UE."],
  ["WebGL", "3D veru ġol-browser, mingħajr ma tinstalla xejn."],
];

const industries = [
  "Ristoranti u kafetteriji", "Lukandi u guest houses", "Kliniċi u dentisti", "Aġenziji tal-proprjetà", "Ditti legali", "Accountants",
  "Ħwienet u ħwienet online", "iGaming", "Fintech", "Kostruzzjoni u sengħat", "Skejjel u korsijiet", "Turiżmu u attivitajiet",
  "Sbuħija u benesseri", "Gyms u fitness", "Bejgħ u kiri tal-karozzi", "Teknoloġija u software", "Avvenimenti u tiġijiet",
];

const reasons = [
  { h: "Tim wieħed jagħmel kollox.", p: "Kittieba, disinjaturi, crew tal-filmati, developers u inġiniera tal-AI. M'għandekx għalfejn tqabbad ħames kumpaniji." },
  { h: "Il-kliem niktbuh aħna.", p: "U nieħdu r-ritratti u niġbdu l-filmati. Ma tirċevix disinn vojt biex timlieh int." },
  { h: "Mibnija biex tinstab mill-ewwel linja.", p: "It-tfittxija tiġi ppjanata qabel jibda d-disinn, mhux miżjuda fl-aħħar." },
  { h: "Iżżomm postok fuq Google.", p: "Meta nċaqilqu websajt antika, kull link antik jiġi ppuntat lejn il-paġna l-ġdida tiegħu." },
  { h: "Hija tiegħek.", p: "Id-dominju tiegħek, il-websajt tiegħek, il-kontenut tiegħek. Tista' tibdilha int stess." },
  { h: "Tista' tiltaqa' magħna.", p: "Aħna f'Birkirkara. Niġu għandek, jew tiġi għandna." },
];

const flags = [
  "Ta' min huma l-websajt u d-dominju meta jkunu lesti?",
  "Nista' nibdel il-kliem u r-ritratti jien stess?",
  "Li ninstab fuq Google u l-AI huwa inkluż?",
  "Min jieħu ħsiebha wara t-tnedija?",
];

const included = [
  "Pjan u mappa tal-paġni",
  "Kliem miktub għalik",
  "Disinn apposta: 2D, 3D jew interattiv",
  "Ritratti u filmati",
  "Mibnija fuq il-pjattaforma t-tajba għalik",
  "Magħmula l-ewwel għall-mowbajl",
  "Setup tal-SEO, AEO u GEO",
  "Formola tal-AI għat-talbiet",
  "Sistema tal-prenotazzjonijiet",
  "Appoġġ għall-klijenti bl-AI",
  "Buttuni tal-WhatsApp u tat-telefonati",
  "Tracking u dashboard sempliċi",
  "Setup tal-hosting, SSL u backups",
  "Links antiki mċaqilqin, biex iżżomm postok fuq Google",
  "Taħriġ għat-tim tiegħek",
  "Pjan ta' manutenzjoni wara t-tnedija",
];

const bar = [
  "Websajts sempliċi", "Landing pages", "Ħwienet online", "Websajts għall-prenotazzjonijiet", "Web apps", "Portali għall-klijenti", "Websajts 3D",
  "Websajts interattivi", "Ħafna lingwi", "WordPress", "Shopify", "Webflow", "Next.js",
];

function Bar() {
  return (
    <div className="bset">
      <em>Nibnu</em>
      {bar.map((b) => <span key={b}>{b}</span>)}
    </div>
  );
}

export default function WebDevelopmentAgencyMaltaMt({ faqs }: Props) {
  return (
    <FlagshipShell accent="#0B0B0B" accentSoft="#D5D5FF" locale="mt" langPath="/aeo/web-development-agency-malta">
      <div id="top">
        {/* 1 · the promise and the free blueprint */}
        <section className="hero">
          <div className="wrap">
            <h1>
              <span className="kick">{"Żvilupp ta' websajts f'Malta"}</span>
              <span className="big">{"Kull websajt li tista' timmaġina. "}<i className="mk">Mibnija biex tbigħ.</i></span>
            </h1>
            <p className="hsub">2D, 3D, interattiva jew sempliċi. Veloċi, tinstab fuq Google u mill-intelliġenza artifiċjali (AI), u lesta biex tieħu t-talbiet mill-ewwel jum.</p>

            <div className="hgrid">
              <div className="ocard">
                <p className="otop"><span className="otag">{"B'xejn"}</span><span className="olim">Fi 48 siegħa</span></p>
                <h2>{"Il-pjan b'xejn għall-websajt tiegħek."}</h2>
                <p>{"Ibgħatilna isem in-negozju tiegħek. Fi 48 siegħa tirċievi pjan għall-websajt tiegħek: x'għandha tgħid, kif għandha tidher u x'teħtieġ biex tbigħ."}</p>
                <WaForm id="blueprint" message={BLUEPRINT} button="Irrid il-pjan tiegħi" placeholder={NAME} label={NAME} />
                <p className="onote"><span>Jiftaħ WhatsApp. L-ebda telefonata. L-ebda formola twila.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-hero">Jew ikseb il-prezz tiegħek</a></p>
              </div>

              <div className="screens" aria-hidden="true">
                <div className="scr">
                  <b>3D u interattiv</b>
                  <span className="cube"><i /><i /><i /><i /><i /><i /></span>
                </div>
                <div className="scr">
                  <b>Appoġġ bl-AI</b>
                  <div className="bub">Tiftħu l-Ħadd?</div>
                  <div className="bub ai">Iva, mid-9 sal-5. <u>Nibbukkjalek?</u></div>
                </div>
                <div className="scr s-hide">
                  <b>Prenotazzjoni</b>
                  <div className="row"><i>1</i>Ġim 16:00</div>
                  <div className="row you"><i>2</i>Sib 10:30 · Ibbukkjat</div>
                </div>
                <div className="scr s-hide">
                  <b>Tinstab</b>
                  <div className="q"><SearchIcon />qrib tiegħi</div>
                  <div className="row you"><i>1</i>In-negozju tiegħek</div>
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
            <p className="lab" data-rv><b>01</b>{"X'nibnu"}</p>
            <div className="shead" data-rv>
              <h2 className="h2">{"Kull tip ta' websajt. "}<i>Magħmula għan-negozju tiegħek.</i></h2>
              <p className="lead">Futuristika jew minimali, żgħira jew enormi. Nagħżlu t-tip li jgħodd għal dak li tbigħ.</p>
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
                  <h3>Mhux ċert liema waħda?</h3>
                  <p>{"Ngħidulek aħna, b'xejn, fi 48 siegħa."}</p>
                </div>
                <a className="btn btn-w" href="#top" data-testid="link-blueprint-types">Irrid il-pjan tiegħi <Arrow /></a>
              </article>
            </div>
            <p className="under" data-rv>
              {"Il-websajts jinbnew mit-tim tal-web ta' "}<Link className="txt" href="/mt" data-testid="link-home-context">OARC Digital</Link>{", aġenzija diġitali u tal-AI f'Malta."}
              {" Għalhekk il-websajt, il-marketing u l-għodod tal-AI tiegħek huma magħmulin biex jaħdmu flimkien."}
            </p>
          </div>
        </section>

        {/* 3 · beautiful is not enough */}
        <section className="sec paper" id="jobs">
          <div className="wrap">
            <p className="lab" data-rv><b>02</b>{"X'għandha tagħmel"}</p>
            <div className="shead" data-rv>
              <h2 className="h2">Sabiħa <i>mhux biżżejjed.</i></h2>
              <p className="lead">{"Websajt tal-għaġeb li ħadd ma jsibha hija poster f'kamra msakkra. Kull websajt li nibnu tagħmel erba' xogħlijiet."}</p>
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
            <p className="lab" data-rv><b>03</b>{"Inkluż ma' kull websajt"}</p>
            <div className="shead" data-rv>
              <h2 className="h2">L-extras li band&apos;oħra tħallas għalihom. <i>Inklużi.</i></h2>
              <p className="lead">{"Il-websajt tiegħek għandha taħdem għalik mill-ewwel jum. Għalhekk dawn jiġu ma' kull waħda li nibnu."}</p>
            </div>
            <ul className="chips big" data-rv>
              {free.map((it) => <li key={it}>{it}</li>)}
            </ul>
            <p className="under" data-rv>
              {"Trid titla' aktar fuq Google wara t-tnedija? Ara l-paġna tagħna "}<Link className="txt" href="/mt/aeo/seo-agency-malta">{"aġenzija tal-SEO f'Malta"}</Link>.
              {" Trid li l-AI tmexxi aktar min-negozju tiegħek? Ara "}<Link className="txt" href="/mt/ai">is-sistemi tal-AI</Link> tagħna.
            </p>
          </div>
        </section>

        {/* 5 · platforms */}
        <section className="sec paper" id="platforms">
          <div className="wrap">
            <p className="lab" data-rv><b>04</b>Il-pjattaformi li nibnu fuqhom</p>
            <div className="shead" data-rv>
              <h2 className="h2">L-għodda t-tajba <i>għall-websajt tiegħek.</i></h2>
              <p className="lead">{"M'aħniex marbutin ma' pjattaforma waħda. Nagħżlu dik li tgħodd għan-negozju tiegħek."}</p>
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
            <p className="lab" data-rv><b>05</b>It-teknoloġija, spjegata</p>
            <div className="shead" data-rv>
              <h2 className="h2">Kliem tal-web. <i>Bi kliem sempliċi.</i></h2>
              <p className="lead">{"Se tismagħhom minn kull aġenzija tal-web. Hawn x'tfisser tassew kull kelma."}</p>
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
            <p className="lab" data-rv><b>06</b>L-industrija tiegħek</p>
            <div className="shead" data-rv>
              <h2 className="h2">Websajt mibnija <i>għall-industrija tiegħek.</i></h2>
              <p className="lead">Lukanda teħtieġ prenotazzjonijiet. Ditta legali teħtieġ fiduċja. Ħanut jeħtieġ checkout veloċi. Nibnu għal dak li jagħmlu l-klijenti tiegħek.</p>
            </div>
            <ul className="chips big" data-rv>
              {industries.map((it) => <li key={it}>{it}</li>)}
              <li className="on">Tiegħek ukoll</li>
            </ul>
          </div>
        </section>

        {/* 8 · why OARC */}
        <section className="sec dark" id="why">
          <div className="wrap">
            <p className="lab" data-rv><b>07</b>Għaliex aħna</p>
            <div className="shead" data-rv>
              <h2 className="h2">Għaliex OARC Digital <i>għall-websajt tiegħek.</i></h2>
              <p className="lead">Ma nagħtukx disinn u nitilqu. Nibnu dak li jġiblek il-klijenti.</p>
            </div>
            <ul className="why">
              {reasons.map((r) => (
                <li key={r.h} data-rv><h3>{r.h}</h3><p>{r.p}</p></li>
              ))}
            </ul>
            <div className="stat flags" data-rv>
              <b>4</b>
              <div>
                <p>{"mistoqsijiet li għandek tistaqsi lil kull aġenzija tal-iżvilupp tal-websajts f'Malta qabel tiffirma:"}</p>
                <ul>{flags.map((f) => <li key={f}>{f}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        {/* 9 · the package */}
        <section className="sec" id="package">
          <div className="wrap">
            <p className="lab" data-rv><b>08</b>Il-pakkett</p>
            <div className="shead" data-rv>
              <h2 className="h2">Il-websajt kollha. <i>Nagħmluha aħna.</i></h2>
              <p className="lead">Pakkett wieħed. Tim wieħed. Mill-ewwel idea sal-jum li tmur online, u wara wkoll.</p>
            </div>
            <div className="pack k" data-rv>
              <div>
                <p className="otop"><span className="otag">Kollox inkluż</span></p>
                <h3>Il-pakkett Website Domination.</h3>
                <p className="pp">{"Kliem, disinn, filmati, bini, tfittxija u AI, nagħmluhom aħna għalik. Il-prezz jiddependi mit-tip ta' websajt u minn kemm hi kbira."}</p>
                <div className="pbtns">
                  <a className="btn btn-y" href={PRICE} target="_blank" rel="noopener" data-testid="link-price-package"><WaIcon />Ikseb il-prezz tiegħek</a>
                  <a className="btn btn-o" href="#top" data-testid="link-blueprint-package">{"Irrid il-pjan b'xejn tiegħi"}</a>
                </div>
              </div>
              <ul className="chk">{included.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
            <p className="under" data-rv>
              Trid it-tim kollu tal-marketing kull xahar, bil-websajt inkluża? Ara l-offerta tagħna <Link className="txt" href="/mt/aeo/digital-marketing-agency-malta">{"aġenzija tal-marketing diġitali f'Malta"}</Link>.
              {" Għandek bżonn biss disinn aġġornat? Ara "}<Link className="txt" href="/services/web-design">web design</Link>.
            </p>
          </div>
        </section>

        {/* 10 · how it starts */}
        <section className="sec paper" id="start">
          <div className="wrap">
            <p className="lab" data-rv><b>09</b>Kif tibda</p>
            <div className="shead" data-rv>
              <h2 className="h2">Ibda <i>{"b'messaġġ wieħed."}</i></h2>
              <p className="lead">{"L-ebda laqgħa x'tibbukkja. L-ebda formola x'timla. Isem in-negozju tiegħek biss."}</p>
            </div>
            <ol className="tl">
              <li data-rv><p className="when">Illum</p><h3>Ibgħatilna isem in-negozju tiegħek fuq WhatsApp.</h3><p>Dak biss għandna bżonn biex nibdew.</p></li>
              <li data-rv><p className="when">Fi 48 siegħa</p><h3>{"Tirċievi l-pjan b'xejn tiegħek."}</h3><p>{"X'għandha tgħid il-websajt tiegħek, kif għandha tidher, u x'teħtieġ biex tbigħ."}</p></li>
              <li data-rv><p className="when">Imbagħad</p><h3>Niddisinjaw u nibnu.</h3><p>Taraha tikber u tapprova kull pass. Tirċievi d-dati u l-prezz qabel ma nibdew.</p></li>
              <li data-rv><p className="when">Jum it-tnedija</p><h3>Tmur online.</h3><p>{`Inċaqilqu kollox, nippuntaw il-links l-antiki lejn il-paġni l-ġodda u nħarrġu lit-tim tiegħek f'${NAP.addressLocality} jew għandek.`}</p></li>
            </ol>
          </div>
        </section>

        {/* 11 · questions */}
        <section className="sec" id="faq">
          <div className="wrap">
            <p className="lab" data-rv><b>10</b>Qabel ma tistaqsi</p>
            <div className="shead" data-rv>
              <h2 className="h2">Mistoqsijiet dwar <i>{"websajts f'Malta."}</i></h2>
              <p className="lead">Tweġibiet qosra u ċari. Staqsina kull ħaġa oħra fuq WhatsApp.</p>
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
            <h2 className="h2" data-rv>Agħmel il-websajt tiegħek <i>l-aqwa bejjiegħa tiegħek.</i></h2>
            <WaForm id="blueprint2" message={BLUEPRINT} button="Irrid il-pjan tiegħi" placeholder={NAME} label={NAME} />
            <p className="onote"><span>{"B'xejn. Fi 48 siegħa. Jiftaħ WhatsApp."}</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-close">Jew ikseb il-prezz tiegħek</a></p>
            <p className="home">{"Il-web huwa wieħed mit-8 dipartimenti ta' OARC Digital. Issibna hawn: "}{NAP.streetAddressShort}, {NAP.addressLocality} {NAP.postalCode}.</p>
          </div>
        </section>
      </div>
    </FlagshipShell>
  );
}
