import type { Metadata } from "next";
import Link from "next/link";
import FlagshipShell from "@/components/flagship/FlagshipShell";
import { Arrow, WaForm, WaIcon, waLink } from "@/components/flagship/parts";
import { LOCALE_INFO, SITE, hasTwins, localeAlternates, localeHref, localeUrl } from "@/lib/i18n/twins";
import { NAP } from "@/lib/seo/nap";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

// Maltese twin of /ai. PATH is the ENGLISH path.
const LOCALE = "mt" as const;
const PATH = "/ai";
const URL = localeUrl(LOCALE, PATH);
const HOME = localeHref(LOCALE, "/");
const TITLE = "Sistemi tal-AI għan-Negozji f'Malta | OARC Digital";
const DESCRIPTION =
  "Sistemi tal-AI għan-negozji f'Malta: iwieġbu kull talba, jibbukkjaw u jieħdu ħsieb l-amministrazzjoni, fuq il-websajt u WhatsApp. Pjan b'xejn fi 48 siegħa.";
const OG = { title: "Sistemi tal-AI, mibnija madwar in-negozju tiegħek", subtitle: "Imwaqqfa u mmexxija mit-tim ta' OARC f'Malta.", eyebrow: "Sistemi tal-AI" };

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: localeAlternates(LOCALE, PATH),
  openGraph: { images: ogImageEntry(OG), title: TITLE, description: DESCRIPTION, url: URL, type: "website", locale: LOCALE_INFO[LOCALE].og },
  twitter: { images: [ogImageUrl(OG)], card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const BLUEPRINT = "Hello OARC. In-negozju tiegħi jismu {x}. Jekk jogħġobkom ibagħtuli l-pjan tal-AI b'xejn tiegħi.";
const PRICE = waLink("Hello OARC. Jekk jogħġobkom ibagħtuli l-prezz tagħkom għal sistema tal-AI. In-negozju tiegħi hu: ");
const BUSINESS_NAME = "Isem in-negozju tiegħek";

// The directory at the top of the page, in the same order as the English page.
// Each row: short name, one short line, and the name used in the structured data.
// An industry with a Maltese page (listed in lib/i18n/twins.ts) links to /mt/ai/...;
// every other one keeps its English address and is marked hrefLang="en".
const INDUSTRY_TEXT: { slug: string; name: string; line: string; schema: string }[] = [
  { slug: "real-estate", name: "Proprjetà", line: "Aġenziji u maniġers tal-proprjetà", schema: "Sistema tal-AI għall-aġenziji tal-proprjetà" },
  { slug: "law-firms", name: "Ditti legali", line: "Avukati, nutara, liġi korporattiva", schema: "Sistema tal-AI għad-ditti legali" },
  { slug: "clinics", name: "Kliniċi", line: "Tobba, dentisti u speċjalisti", schema: "Sistema tal-AI għall-kliniċi u l-isptarijiet privati" },
  { slug: "hotels", name: "Lukandi", line: "Lukandi u guesthouses", schema: "Sistema tal-AI għal-lukandi" },
  { slug: "restaurants", name: "Ristoranti", line: "Ristoranti, kafetteriji u bars", schema: "Sistema tal-AI għar-ristoranti" },
  { slug: "casinos", name: "Każinojiet", line: "Każinò, lukanda u poker room", schema: "Sistemi tal-AI u marketing għall-każinojiet" },
  { slug: "tourism", name: "Turiżmu", line: "Tours, dgħajjes u attivitajiet", schema: "Sistema tal-AI għan-negozji tat-turiżmu" },
  { slug: "education", name: "Skejjel", line: "Skejjel, kulleġġi u privat", schema: "Sistema tal-AI għall-iskejjel u l-kulleġġi" },
  { slug: "igaming-operators", name: "Operaturi iGaming", line: "Każinojiet online u sportsbooks", schema: "Sistema tal-AI għall-operaturi tal-iGaming" },
  { slug: "igaming-suppliers", name: "Fornituri iGaming", line: "Pjattaformi u studios", schema: "Sistema tal-AI għall-fornituri tal-iGaming" },
  { slug: "igaming-affiliates", name: "Affiljati iGaming", line: "Websajts tar-reviews u midja", schema: "Sistema tal-AI għall-affiljati tal-iGaming" },
  { slug: "business-admin", name: "Amministrazzjoni", line: "Fatturi, kontijiet u fajls", schema: "Sistema tal-AI għall-amministrazzjoni tan-negozju" },
];

const INDUSTRIES = INDUSTRY_TEXT.map((c) => {
  const path = `/ai/${c.slug}`;
  const twin = hasTwins(path);
  return { ...c, twin, href: twin ? localeHref(LOCALE, path) : path, url: localeUrl(twin ? LOCALE : "en", path) };
});

// Maltese counts: 2 to 10 take the plural, 11 to 19 take "-il" and the singular, 20 and over the singular.
function systemsCount(n: number): string {
  if (n >= 2 && n <= 10) return `${n} sistemi`;
  if (n >= 11 && n <= 19) return `${n}-il sistema`;
  return `${n} sistema`;
}

const jobs = [
  { h: "Twieġeb.", p: "Chat fuq il-websajt, WhatsApp, telefon, email u messaġġi fuq is-social media. Lejl u nhar, mill-informazzjoni tiegħek stess.", we: "L-ebda talba ma tistenna sa filgħodu." },
  { h: "Tibbukkja.", p: "Tieħu l-appuntamenti, tibgħat it-tfakkiriet u tbiddel il-bookings meta jinbidlu l-pjanijiet.", we: "Inqas nies li ma jiġux. Kalendarju aktar mimli." },
  { h: "Tbigħ.", p: "Taqbad kull lead, tistaqsi l-mistoqsijiet it-tajba, tagħmel il-follow-up u tħejji l-kwotazzjoni.", we: "L-ebda lead ma jibred." },
  { h: "Tieħu ħsieb l-amministrazzjoni.", p: "Dokumenti, fatturi, data entry u r-rapport ta' kull ġimgħa, isiru waħedhom.", we: "Sigħat lura, kull ġimgħa." },
  { h: "Taf x'qed jiġri.", p: "Skrin wieħed jurik x'daħal, x'sar u fejn hemm bżonnok.", we: "Tara kollox." },
];

const tools = [
  "Il-websajt tiegħek", "WhatsApp", "Telefonati", "Email", "Messaġġi fuq Instagram u Facebook", "Google Calendar", "Outlook",
  "HubSpot", "Salesforce", "Is-CRM tiegħek", "Google Sheets u Excel", "Shopify", "WordPress", "Is-sistema tal-bookings tiegħek", "Il-cash register jew il-POS tiegħek", "Is-software tal-kontabilità tiegħek",
];

const control = [
  { h: "Int tagħmel ir-regoli.", p: "X'tista' tgħid, x'tista' tagħmel, u x'jeħtieġ dejjem l-OK tiegħek." },
  { h: "Meta mhix ċerta, tistaqsi.", p: "Tgħaddi l-konverżazzjoni lil persuna, bl-istorja kollha, biex ħadd ma jkollu għalfejn jirrepeti ruħu." },
  { h: "Tista' tara kollox.", p: "Kull messaġġ u kull azzjoni jinżammu f'rekord li tista' taqrah." },
  { h: "Persuna tista' tidħol.", p: "It-tim tiegħek jista' jieħu f'idejh kull konverżazzjoni f'kull ħin." },
  { h: "Ittestjata qabel tmur live.", p: "L-ewwel nippruvawha fuq mistoqsijiet veri min-negozju tiegħek, u nirranġaw fejn tiżbalja." },
  { h: "Tista' titfiha.", p: "Is-sistema hija tiegħek. Klikk waħda twaqqafha." },
];

const terms: [string, string][] = [
  ["Aġent tal-AI", "Software li jagħmel xogħol għalik. Mhux jiċċettja biss."],
  ["LLM", "Il-moħħ tal-AI li jaqra u jikteb, bħal dak wara ChatGPT."],
  ["Knowledge base", "L-informazzjoni tiegħek stess. L-AI twieġeb minn hawn, mhux billi taqta'."],
  ["Awtomazzjoni", "Passi li jsiru waħedhom, fl-ordni t-tajjeb."],
  ["Integrazzjoni", "Kif l-għodod tiegħek jitkellmu ma' xulxin."],
  ["CRM", "Lista waħda ta' kull klijent u kull lead."],
  ["Human handoff", "Il-mument meta persuna tapprova jew tieħu f'idejha."],
  ["Guardrails", "Regoli li l-AI ma tistax tikser."],
  ["Alluċinazzjoni", "Meta l-AI tivvinta xi ħaġa. Sistemi tajbin jinbnew biex iwaqqfu dan."],
  ["Audit log", "Rekord ta' kull ma għamlet l-AI."],
  ["GDPR", "Il-liġi tal-UE li tipproteġi d-data personali."],
  ["Voice AI", "AI li twieġeb it-telefon u titkellem bħal persuna."],
];

const reasons = [
  { h: "L-ewwel niġu għandek.", p: "L-iżviluppaturi tagħna jżuruk, jaraw kif tassew timxi l-ġimgħa tiegħek, u jibnu fuq hekk." },
  { h: "Sistema, mhux chatbot.", p: "Websajt, WhatsApp, telefon, bookings, CRM u amministrazzjoni, jaħdmu bħala ħaġa waħda." },
  { h: "Taħdem ma' dak li għandek.", p: "HubSpot, Salesforce jew l-għodod tiegħek stess. M'għandekx għalfejn tibdel kollox." },
  { h: "Inmexxuha miegħek.", p: "Inżommu għajnejna fuqha, nirranġawha u ntejbuha kull xahar. Qatt ma tibqa' waħdek biha." },
  { h: "AI u marketing f'tim wieħed.", p: "L-istess aġenzija ġġib it-talbiet u tibni s-sistema li tweġibhom." },
  { h: "Tista' tiltaqa' magħna.", p: "Aħna f'Birkirkara. Nies veri, wiċċ imb wiċċ, f'Malta." },
];

const included = [
  "Mappa tal-ġimgħa tiegħek u ta' fejn jintilef il-ħin",
  "Chat tal-AI fuq il-websajt tiegħek",
  "AI fuq WhatsApp u l-messaġġi tas-social media",
  "Voice AI li twieġeb it-telefon",
  "AI li taqra u tissortja l-emails tiegħek",
  "Bookings, tfakkiriet u bdil ta' ħinijiet",
  "Ġbir tal-leads u follow-up",
  "Kwotazzjonijiet u proposti mħejjija għalik",
  "Is-CRM tiegħek imqabbad u dejjem aġġornat",
  "Dokumenti, fatturi u data entry",
  "Dashboard waħda għal kollox",
  "Regoli, approvazzjonijiet u rekord sħiħ",
  "Taħriġ għat-tim tiegħek",
  "Kura, kontrolli u titjib kull xahar",
];

const faqs = [
  { question: "X'inhi sistema tal-AI għal negozju?", answer: "Huwa software li jagħmel ix-xogħlijiet ta' kuljum għalik: iwieġeb it-talbiet, jibbukkja l-appuntamenti, jagħmel il-follow-up tal-leads u jieħu ħsieb l-amministrazzjoni. Huwa mqabbad mal-websajt, WhatsApp, it-telefon, l-email u l-lista tal-klijenti tiegħek, biex ix-xogħlijiet isiru waħedhom, lejl u nhar, waqt li t-tim tiegħek jibqa' fil-kontroll." },
  { question: "X'se tagħmel eżattament għan-negozju tiegħi?", answer: "Dan jiddependi min-negozju tiegħek. Ibgħatilna isem in-negozju tiegħek u fi 48 siegħa tirċievi pjan tal-AI b'xejn: mappa tax-xogħlijiet li l-AI tista' tneħħi minn fuq it-tim tiegħek, u liema wieħed nibnu l-ewwel." },
  { question: "Se taħdem mal-għodod li diġà nuża?", answer: "Iva, fil-biċċa l-kbira tal-każi. Inqabbduha mal-websajt, WhatsApp, it-telefon, l-email, il-kalendarju u l-lista tal-klijenti tiegħek, inklużi HubSpot, Salesforce u sistemi magħmula apposta. M'għandekx għalfejn tibdel kollox." },
  { question: "Kemm iddum biex tkun live?", answer: "Inwaqqfu l-ewwel sistema tiegħek fi 72 siegħa. Sistemi akbar b'ħafna konnessjonijiet jieħdu aktar żmien, u tirċievi d-dati qabel nibdew." },
  { question: "Kemm tiswa sistema tal-AI f'Malta?", answer: "Jiddependi minn kemm xogħlijiet tagħmel u ma' kemm għodod titqabbad. Inżuruk, naraw kif taħdem u mbagħad nagħtuk prezz. Biex tibda, ibgħatilna isem in-negozju tiegħek fuq WhatsApp." },
  { question: "X'jiġri meta l-AI ma tkunx taf it-tweġiba?", answer: "Ma toqgħodx taqta'. Tgħaddi l-konverżazzjoni lil persuna mit-tim tiegħek, bl-istorja kollha, biex il-klijent ma jkollux għalfejn jirrepeti ruħu." },
  { question: "Persuna tista' tieħu f'idejha f'kull ħin?", answer: "Iva. It-tim tiegħek jista' jidħol f'kull konverżazzjoni f'kull ħin, u tista' titfi s-sistema bi klikk waħda." },
  { question: "Se tgħid affarijiet żbaljati lill-klijenti tiegħi?", answer: "Nibnuha biex twieġeb mill-informazzjoni tiegħek stess, b'regoli li ma tistax tikser, u nittestjawha fuq mistoqsijiet veri min-negozju tiegħek qabel tmur live. Kull ħaġa li ma tkunx ċerta dwarha tgħaddi għand persuna." },
  { question: "Hija chatbot?", answer: "Le. Chatbot jiċċettja biss. Sistema tal-AI tagħmel ix-xogħol ukoll: tibbukkja l-appuntament, taġġorna l-lista tal-klijenti tiegħek, tibgħat it-tfakkira u tħejji l-kwotazzjoni." },
  { question: "Titkellem bil-Malti u b'lingwi oħra?", answer: "Tista' twieġeb bl-Ingliż u bil-Malti, u bil-lingwi l-oħra li jużaw il-klijenti tiegħek. Nittestjaw kull lingwa miegħek qabel ma tmur live." },
  { question: "Min jieħu ħsiebha wara li tmur live?", answer: "Aħna. Niċċekkjawha, nirranġawha u ntejbuha kull xahar, u t-tim tiegħek jista' jiltaqa' magħna wiċċ imb wiċċ f'Malta." },
  { question: "Għandi bżonn staff tekniku?", answer: "Le. Nibnuha, inqabbduha u nmexxuha miegħek. It-tim tiegħek irid ikun jaf biss kif jaqra d-dashboard u meta għandu jidħol." },
  { question: "Nista' nibda bi ftit?", answer: "Iva. Ħafna negozji jibdew b'xogħol wieħed, bħal li twieġeb it-talbiet jew li tieħu l-bookings, u jżidu aktar meta jarawha taħdem." },
  { question: "Għandkom sistemi tal-AI għall-industrija tiegħi?", answer: "Iva. Għandna sistemi għall-proprjetà, ditti legali, kliniċi, lukandi, ristoranti, turiżmu, skejjel, iGaming u amministrazzjoni ġenerali tan-negozju, u nibnu għal kull industrija oħra wkoll." },
  { question: "Fejn tinsab OARC Digital?", answer: `${NAP.streetAddressShort}, ${NAP.addressLocality} ${NAP.postalCode}, Malta. Tista' tiltaqa' mat-tim wiċċ imb wiċċ. WhatsApp ${NAP.phoneDisplay}. Email ${NAP.email}.` },
];

// Same order as the English structured data: every industry, then casinos last.
const SCHEMA_LIST = [...INDUSTRIES.filter((c) => c.slug !== "casinos"), ...INDUSTRIES.filter((c) => c.slug === "casinos")];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${URL}#page`,
      name: "Sistemi tal-AI skont l-industrija",
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
        { "@type": "ListItem", position: 2, name: "Sistemi tal-AI", item: URL },
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
  "Chat fuq il-websajt", "WhatsApp", "Telefonati", "Email", "Bookings", "Tfakkiriet", "Follow-up tal-leads", "Kwotazzjonijiet", "CRM",
  "Fatturi", "Rapporti", "Dashboards",
];

function Bar() {
  return (
    <div className="bset">
      <em>AI għal</em>
      {bar.map((b) => <span key={b}>{b}</span>)}
    </div>
  );
}

export default function AiHubPageMt() {
  return (
    <FlagshipShell accent="#2440F0" accentSoft="#D6E0FF" navTheme="dark" locale={LOCALE} langPath={PATH}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div id="top">
        {/* 1 · the promise and the free blueprint */}
        <section className="hero dark">
          <div className="wrap">
            <h1>
              <span className="kick">{"Sistemi tal-AI għan-negozji f'Malta"}</span>
              <span className="big">AI mibnija <i className="mk">għall-industrija tiegħek.</i></span>
            </h1>
            <p className="hsub">Twieġeb, tibbukkja, tagħmel il-follow-up u tieħu ħsieb l-amministrazzjoni, lejl u nhar. Agħżel l-industrija tiegħek.</p>

            <div className="hgrid">
              <div className="ocard">
                <p className="otop"><span className="otag">{"B'xejn"}</span><span className="olim">Fi 48 siegħa</span></p>
                <h2>{"Il-pjan tal-AI tiegħek, b'xejn."}</h2>
                <p>{"L-industrija tiegħek mhix hawn? Nibnu s-sistema madwarek. Ibgħatilna isem in-negozju tiegħek u fi 48 siegħa tirċievi mappa tax-xogħlijiet li l-intelliġenza artifiċjali (AI) tista' tneħħi minn fuq it-tim tiegħek."}</p>
                <WaForm id="blueprint" message={BLUEPRINT} button="Irrid il-pjan tiegħi" placeholder={BUSINESS_NAME} label={BUSINESS_NAME} />
                <p className="onote"><span>Jiftaħ WhatsApp. Bla telefonati. Bla formoli twal.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-hero">Jew ikseb il-prezz tiegħek</a></p>
              </div>

              <nav className="dir" aria-label="Sistemi tal-AI skont l-industrija">
                <p className="dir-h"><span>Agħżel l-industrija tiegħek</span><span>{systemsCount(INDUSTRIES.length)}</span></p>
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
            <p className="lab" data-rv><b>01</b>{"X'tagħmel"}</p>
            <div className="shead" data-rv>
              <h2 className="h2">Ħames xogħlijiet. <i>Isiru għalik.</i></h2>
              <p className="lead">Mhux chatbot. Sistema waħda wara n-negozju tiegħek li twieġeb, tibbukkja, tbigħ, tieħu ħsieb l-amministrazzjoni u żżommok infurmat.</p>
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
                  <h3>Liema xogħol għandha tieħu l-AI l-ewwel?</h3>
                  <p>{"Insibuh aħna għalik. B'xejn, fi 48 siegħa."}</p>
                </div>
                <a className="btn btn-w" href="#top" data-testid="link-blueprint-jobs">Irrid il-pjan tiegħi <Arrow /></a>
              </article>
            </div>
            <p className="under" data-rv>
              {"Is-sistemi tal-AI jinbnew mit-tim tal-AI u t-teknoloġija ta' OARC Digital, "}<Link className="txt" href={HOME} data-testid="link-home-context">{"aġenzija diġitali u tal-AI f'Malta"}</Link>{". Għalhekk it-tim li jġiblek it-talbiet jibni wkoll is-sistema li tweġibhom."}
            </p>
          </div>
        </section>

        {/* 3 · works with what you use */}
        <section className="sec paper" id="tools">
          <div className="wrap">
            <p className="lab" data-rv><b>02</b>L-għodod tiegħek</p>
            <div className="shead" data-rv>
              <h2 className="h2">{"Taħdem ma' dak li "}<i>diġà tuża.</i></h2>
              <p className="lead">{"M'għandekx għalfejn tibdel kollox. Inqabbdu l-għodod li għandek u nġegħluhom jaħdmu flimkien."}</p>
            </div>
            <ul className="chips big" data-rv>
              {tools.map((it) => <li key={it}>{it}</li>)}
              <li className="on">Tiegħek ukoll</li>
            </ul>
          </div>
        </section>

        {/* 5 · you stay in control */}
        <section className="sec dark" id="control">
          <div className="wrap">
            <p className="lab" data-rv><b>03</b>Sigurtà</p>
            <div className="shead" data-rv>
              <h2 className="h2">{"Int tibqa' "}<i>fil-kontroll.</i></h2>
              <p className="lead">L-AI tagħmel ix-xogħol. In-nies jieħdu d-deċiżjonijiet li jgħoddu. Hekk nibnu kull sistema.</p>
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
            <p className="lab" data-rv><b>04</b>Il-kliem, spjegat</p>
            <div className="shead" data-rv>
              <h2 className="h2">Il-kliem tal-AI. <i>Bil-Malti sempliċi.</i></h2>
              <p className="lead">{"Bla kliem tqil. Hawn xi jfisser tassew il-kliem li tibqa' tisma'."}</p>
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
            <p className="lab" data-rv><b>05</b>Għaliex aħna</p>
            <div className="shead" data-rv>
              <h2 className="h2">Għaliex OARC Digital <i>{"għall-AI f'Malta."}</i></h2>
              <p className="lead">Ma nbigħulekx software u nitilqu. Nibnuh madwar in-negozju tiegħek u nmexxuh miegħek.</p>
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
            <p className="lab" data-rv><b>06</b>Il-pakkett</p>
            <div className="shead" data-rv>
              <h2 className="h2">In-negozju kollu tiegħek. <i>Imqabbad.</i></h2>
              <p className="lead">Pakkett wieħed. Tim wieħed. Kull kanal jitwieġeb u kull xogħol jiġi segwit.</p>
            </div>
            <div className="pack" data-rv>
              <div>
                <p className="otop"><span className="otag">Kollox inkluż</span></p>
                <h3>Il-pakkett Sistema tal-AI Sħiħa.</h3>
                <p className="pp">{"Tweġibiet, bookings, bejgħ u amministrazzjoni, mibnija madwar kif taħdem int. Il-prezz jiddependi minn kemm xogħlijiet tagħmel u ma' xiex titqabbad."}</p>
                <div className="pbtns">
                  <a className="btn btn-w" href={PRICE} target="_blank" rel="noopener" data-testid="link-price-package"><WaIcon />Ikseb il-prezz tiegħek</a>
                  <a className="btn btn-o" href="#top" data-testid="link-blueprint-package">{"Irrid il-pjan b'xejn tiegħi"}</a>
                </div>
              </div>
              <ul className="chk">{included.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
            <p className="under" data-rv>
              Għandek bżonn assistent wieħed biss? Ara <Link className="txt" href="/ai-agents" hrefLang="en">l-aġenti tal-AI</Link> tagħna u <Link className="txt" href="/voice-ai-worker" hrefLang="en">il-voice AI worker</Link> li jwieġeb it-telefon tiegħek.
              Għandek bżonn il-websajt li taħdem fuqha? Ara <Link className="txt" href={localeHref(LOCALE, "/aeo/web-development-agency-malta")}>il-websajts</Link>.
            </p>
          </div>
        </section>

        {/* 9 · how it starts */}
        <section className="sec paper" id="start">
          <div className="wrap">
            <p className="lab" data-rv><b>07</b>Kif tibda</p>
            <div className="shead" data-rv>
              <h2 className="h2">Ibda <i>{"b'messaġġ wieħed."}</i></h2>
              <p className="lead">{"Bla laqgħa x'tibbukkja. Bla formola x'timla. Isem in-negozju tiegħek biss."}</p>
            </div>
            <ol className="tl">
              <li data-rv><p className="when">Illum</p><h3>Ibgħatilna isem in-negozju tiegħek fuq WhatsApp.</h3><p>Dak biss għandna bżonn biex nibdew.</p></li>
              <li data-rv><p className="when">Fi 48 siegħa</p><h3>{"Tirċievi l-pjan tal-AI tiegħek, b'xejn."}</h3><p>{"Ix-xogħlijiet li l-AI tista' tneħħi minn fuq it-tim tiegħek, u liema wieħed nibnu l-ewwel."}</p></li>
              <li data-rv><p className="when">Imbagħad</p><h3>Inżuruk u nibnu.</h3><p>Niġu għandek, naraw kif timxi l-ġimgħa tiegħek u nwaqqfu l-ewwel sistema tiegħek fi 72 siegħa.</p></li>
              <li data-rv><p className="when">Kull xahar</p><h3>Inmexxuha miegħek.</h3><p>Niċċekkjawha, intejbuha u nżidu x-xogħol li jmiss meta tkun lest.</p></li>
            </ol>
          </div>
        </section>

        {/* 10 · questions */}
        <section className="sec" id="faq">
          <div className="wrap">
            <p className="lab" data-rv><b>08</b>Qabel tistaqsi</p>
            <div className="shead" data-rv>
              <h2 className="h2">Mistoqsijiet dwar <i>l-AI għan-negozju tiegħek.</i></h2>
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

        {/* 11 · close */}
        <section className="fin dark">
          <div className="wrap">
            <h2 className="h2" data-rv>Ħalli l-AI tagħmel <i>ix-xogħol tedjanti.</i></h2>
            <WaForm id="blueprint2" message={BLUEPRINT} button="Irrid il-pjan tiegħi" placeholder={BUSINESS_NAME} label={BUSINESS_NAME} />
            <p className="onote"><span>{"B'xejn. Fi 48 siegħa. Jiftaħ WhatsApp."}</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-close">Jew ikseb il-prezz tiegħek</a></p>
            <p className="home">{"Id-dipartiment tal-AI u t-teknoloġija huwa wieħed mit-8 dipartimenti ta' OARC Digital. Issibna hawn: "}{NAP.streetAddressShort}, {NAP.addressLocality} {NAP.postalCode}.</p>
          </div>
        </section>
      </div>
    </FlagshipShell>
  );
}
