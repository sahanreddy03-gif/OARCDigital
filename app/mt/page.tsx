import type { Metadata } from "next";
import Link from "next/link";
import FlagshipShell from "@/components/flagship/FlagshipShell";
import { Arrow, WaForm, WaIcon, waLink } from "@/components/flagship/parts";
import LocaleSchema from "@/components/i18n/LocaleSchema";
import { LOCALE_INFO, localeAlternates, localeHref, localeUrl } from "@/lib/i18n/twins";
import { NAP } from "@/lib/seo/nap";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

// The Maltese home. It is a focused page, not a copy of the English home: it only shows
// sections that lead to pages that exist in Maltese. Every fact comes from the English home.
const PATH = "/"; // the ENGLISH path
const URL = localeUrl("mt", PATH);
const TITLE = "Aġenzija tal-Marketing f'Malta | Diġitali u AI | OARC Digital";
const DESCRIPTION =
  "OARC Digital hija aġenzija tal-marketing f'Malta, ibbażata f'Birkirkara: studio kreattiv, SEO u reklami, aġenti tal-AI u awtomazzjoni. Tim wieħed in-house.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: localeAlternates("mt", PATH),
  openGraph: { images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }), title: TITLE, description: DESCRIPTION, url: URL, type: "website", locale: LOCALE_INFO.mt.og },
  twitter: { images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })], card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const href = (path: string) => localeHref("mt", path);

const BLUEPRINT = "Bonġu OARC. In-negozju tiegħi huwa {x}. Nixtieq nirċievi l-pjan b'xejn tiegħi.";
const PRICE = waLink("Bonġu OARC. Nixtieq inkun naf il-prezz tagħkom. In-negozju tiegħi huwa: ");
const FIELD = "Isem in-negozju tiegħek";

const FREE = "B'xejn";
const HERO_SUB = "Aġenzija mibnija fuq l-intelliġenza artifiċjali (AI). Studio, bejgħ u teknoloġija in-house, għad-dispożizzjoni tiegħek.";
const CARD_TITLE = "Il-pjan b'xejn tiegħek.";
const CARD_TEXT = "Ibgħatilna isem in-negozju tiegħek. Fi 48 siegħa tirċievi pjan b'xejn, magħmul għan-negozju tiegħek.";

// "What do you need?" Only pages that exist in Maltese, in the agreed order.
const NEEDS_START = "X'għandek ";
const needs = [
  { id: "marketing", path: "/aeo/digital-marketing-agency-malta", h: "Aktar klijenti", p: "Marketing diġitali għan-negozji f'Malta: reklami, SEO u kontenut." },
  { id: "ai", path: "/ai", h: "AI għall-industrija tiegħek", p: "Sistema waħda tal-AI għat-tip ta' negozju tiegħek: lukandi, kliniċi, ditti legali, każinojiet u aktar." },
  { id: "seo", path: "/aeo/seo-agency-malta", h: "Isibuk fuq Google u fl-AI", p: "Tfittxija, mapep, chats tal-AI u vuċi. Tim wieħed f'Malta jiżgura li jsibuk kullimkien." },
  { id: "websites", path: "/aeo/web-development-agency-malta", h: "Websajt li tbigħ", p: "Veloċi, tinstab fuq Google u fl-AI, u lesta tilqa' talbiet mill-ewwel jum." },
  { id: "hotels", path: "/ai/hotels", h: "Lukandi", p: "Sistema tal-AI għal-lukandi u l-guesthouses." },
  { id: "real-estate", path: "/ai/real-estate", h: "Proprjetà", p: "Sistema tal-AI għall-aġenziji u l-maniġers tal-proprjetà." },
  { id: "law-firms", path: "/ai/law-firms", h: "Ditti legali", p: "Sistema tal-AI għall-avukati, in-nutara u x-xogħol korporattiv." },
  { id: "casinos", path: "/ai/casinos", h: "Każinojiet", p: "Marketing u sistemi tal-AI għall-każinò, il-lukanda u l-poker room." },
];
const H360 = { h: "Ir-ristorant tiegħek fuq sistema waħda", p: "H360: menus bil-QR, skrin għall-kċina, ħlasijiet u lealtà." };
const TALK = { h: "Kellimna", p: "Ma tafx minn fejn tibda? Iktbilna fuq WhatsApp jew bl-email.", button: "Ikkuntattjana" };

const WHY_LEAD = `OARC Digital hija aġenzija tal-marketing f'${NAP.addressLocality}, Malta, imwaqqfa fl-2023. Tim wieħed jieħu ħsieb il-brand, il-kontenut, is-social media, ir-reklami, il-websajt u l-istaff tal-AI tiegħek. Hekk ma jkollokx għalfejn tmexxi ħames fornituri.`;
const promises = [
  { h: "Tim wieħed, kollox", p: "Brand, kontenut, social media, reklami, websajt u staff tal-AI taħt saqaf wieħed. Pjan wieħed, persuna waħda li ċċemplilha." },
  { h: "Kollox jibqa' tiegħek", p: "Il-kontijiet tar-reklami, il-filmati, il-paġni u d-data jibqgħu f'ismek. Dejjem." },
  { h: "Garanzija ta' flusek lura", p: "Naqblu fuq il-miri qabel nibdew. Jekk ma nilħquhomx, tieħu flusek lura." },
  { h: "Lokali, mill-2023", p: `${NAP.streetAddressShort}, ${NAP.addressLocality}. Ejja ltaqa' man-nies li jagħmlu x-xogħol.` },
];

const STAFF_LEAD = "Impjegati tal-AI lesti għall-bejgħ, l-appoġġ, il-bookings u l-amministrazzjoni. Imħarrġin fuq in-negozju tiegħek u ċċekkjati mit-tim tagħna f'Malta.";
const staff: [string, string][] = [
  ["Rappreżentant tal-bejgħ", "Iċempel lura lil kull klijent potenzjali u jibbukkja l-laqgħa."],
  ["Appoġġ għall-klijenti", "Iwieġeb telefonati, chat u WhatsApp, lejl u nhar."],
  ["Appuntamenti", "Jimla l-kalendarju tiegħek u jibgħat ir-reminders."],
  ["Assistent amministrattiv", "Jieħu ħsieb il-formoli, l-emails u d-data entry."],
  ["Analista tad-data", "Ibiddel in-numri tiegħek f'rapport ta' kull ġimgħa."],
  ["Strateġista tal-kontenut", "Jippjana u jabbozza posts u emails."],
  ["Kontroll tal-konformità", "Jiċċekkja d-dokumenti skont ir-regoli tiegħek."],
  ["Żvilupp tan-negozju", "Isib u jikkwalifika klijenti potenzjali ġodda."],
];
const STAFF_NOTE = "Il-Voice AI Worker tagħna jwieġeb kull telefonata, ibigħ, jgħin lill-klijenti u jibbukkjahom. Bl-Ingliż, bil-Malti u bit-Taljan.";

const OFFICE = `Level 1, The Brewhouse, Central Business District, ${NAP.addressLocality} ${NAP.postalCode}, Malta`;

// The 8 questions of the English home, in the same order.
const faqs = [
  {
    question: "Liema hi aġenzija tal-marketing tajba f'Malta għan-negozji żgħar u medji li jridu l-AI flimkien mal-kreattività?",
    answer: `OARC Digital, f'${NAP.addressLocality}, hija aġenzija tal-marketing li tgħaqqad il-produzzjoni kreattiva, l-SEO u r-reklami, l-aġenti tal-AI, il-Voice AI Worker u l-awtomazzjoni taħt tim wieħed. Hekk in-negozji żgħar u medji f'Malta jkabbru d-dħul mingħajr ma jkollhom jimmaniġġjaw tliet fornituri.`,
  },
  {
    question: "X'tagħmel OARC Digital?",
    answer: `OARC Digital hija aġenzija tal-marketing u tal-awtomazzjoni f'Malta, mibnija fuq l-AI. Tinsab f'${OFFICE}. Nagħmlu xogħol kreattiv, aġenti tal-AI (bejgħ, appoġġ, bookings, operazzjonijiet), il-Voice AI Worker li jwieġeb it-telefon, u sistemi li jawtomatizzaw id-dħul, għal negozji f'Malta u madwar l-UE.`,
  },
  {
    question: "Fejn tinsab OARC Digital u kif nikkuntattja lit-tim?",
    answer: `L-uffiċċju ewlieni ta' OARC Digital jinsab f'${OFFICE}. Telefon ${NAP.phoneDisplay}. Fuq Google Maps, OARC Digital għandha rating ta' 5.0, ibbażat fuq 6 reviews ta' Google. Ibbukkja telefonata jew ibgħat WhatsApp fuq l-istess numru.`,
  },
  {
    question: "Tagħmlu biss social media, jew anke aġenti tal-AI, vuċi u awtomazzjoni?",
    answer: `It-tnejn. L-aġenti tal-AI u l-Voice AI Worker jaħdmu spalla ma' spalla mal-kreattività editorjali, il-ġestjoni tas-social media, l-SEO u r-reklami mħallsa. Ibda minn fejn qed titlef il-flus: telefonati mitlufa, brand dgħajjef, tfittxijiet fejn ma jsibukx, jew follow-up li jsir bl-idejn. Imbagħad kabbar mal-istess tim f'${NAP.addressLocality}.`,
  },
  {
    question: "X'jagħmel lil OARC differenti minn aġenziji oħra f'Malta?",
    answer: "L-AI ilha magħna mill-bidu. Ma żidnihiex wara. Id-direzzjoni kreattiva hija umana, u l-produzzjoni għandha l-veloċità tal-AI. L-aġenti tal-AI jieħdu ħsieb xogħol reali, u l-awtomazzjoni ddaħħal il-leads fis-CRM tiegħek. Il-prezz huwa marbut mar-riżultati, mhux ma' ħlas fiss ta' kull xahar li jidher sabiħ biss. U l-istess tim li jiddisinja l-brand tiegħek jikteb ukoll is-sistemi li jħaddmuh.",
  },
  {
    question: "Ma' liema industriji taħdem OARC Digital f'Malta?",
    answer: "F'Malta, l-oqsma l-aktar b'saħħithom tagħna huma l-ospitalità (ristoranti, lukandi, bars), l-iGaming u l-fintech (regolati mill-MGA / MFSA), is-servizzi professjonali (legali, kontabilità, konsulenza), il-kliniċi u s-SaaS li qed jikber malajr. F'kull xogħol regolat inżommu f'moħħna l-MFSA, l-MGA u l-IDPC.",
  },
  {
    question: "Ta' min hu x-xogħol li tagħmel OARC Digital?",
    answer: "Tiegħek. L-assi kollha (xogħol kreattiv, kodiċi, aġenti tal-AI, proċeduri tal-awtomazzjoni) jingħatawlek bi trasferiment sħiħ tal-proprjetà intellettwali meta jintemm ix-xogħol. Ma nżommu l-ebda esklużività fuq id-data tiegħek u qatt ma nerġgħu nbigħu l-assi tal-klijenti.",
  },
  {
    question: "Kif nibda nitkellem ma' OARC Digital?",
    answer: `Ibgħat WhatsApp fuq ${NAP.phoneDisplay} jew email lil ${NAP.email}. L-ewwel telefonata hija awditu b'xejn ta' 30 minuta: insibu l-akbar opportunità fil-proċess tal-bejgħ li għandek illum u ngħidulek jekk OARC hijiex tassew l-għażla t-tajba għalik.`,
  },
];

const CLOSE_NOTE = "B'xejn. Fi 48 siegħa. Jinfetaħ WhatsApp.";

// Inline styles the design system has no class for: a card title without a number above
// it, an arrow that sits at the bottom of a link card, and one card alone in the hero.
const NO_TOP = { marginTop: 0 } as const;
const GO = { marginTop: "auto", paddingTop: 16 } as const;
const ONE_CARD = { gridTemplateColumns: "minmax(0,720px)", justifyContent: "center" } as const;
const SAME_GAP = { marginTop: "clamp(12px,1.4vw,18px)" } as const;

export default function HomeMtPage() {
  return (
    <FlagshipShell locale="mt" langPath="/" navTheme="dark">
      <LocaleSchema locale="mt" path={PATH} title={TITLE} description={DESCRIPTION} faqs={faqs} />
      <div id="top">
        {/* 1 · the promise and the free blueprint */}
        <section className="hero dark">
          <div className="wrap">
            <h1>
              <span className="kick">{"Aġenzija tal-marketing f'Malta"}</span>
              <span className="big">Tim wieħed <i className="mk">għall-kreattività, it-tkabbir u l-awtomazzjoni.</i></span>
            </h1>
            <p className="hsub">{HERO_SUB}</p>

            <div className="hgrid" style={ONE_CARD}>
              <div className="ocard">
                <p className="otop"><span className="otag">{FREE}</span><span className="olim">Fi 48 siegħa</span></p>
                <h2>{CARD_TITLE}</h2>
                <p>{CARD_TEXT}</p>
                <WaForm id="blueprint" message={BLUEPRINT} button="Irrid il-pjan b'xejn tiegħi" placeholder={FIELD} label={FIELD} />
                <p className="onote"><span>Jinfetaħ WhatsApp. Bla telefonati. Bla formoli twal.</span></p>
                <div className="pbtns">
                  <a className="btn btn-o" href={PRICE} target="_blank" rel="noopener" data-testid="link-price-hero"><WaIcon />Ikseb il-prezz tiegħek</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2 · what do you need? */}
        <section className="sec" id="needs">
          <div className="wrap">
            <p className="lab" data-rv><b>01</b>Is-servizzi</p>
            <div className="shead" data-rv>
              <h2 className="h2">{NEEDS_START}<i>bżonn?</i></h2>
              <p className="lead">Agħżel minn fejn tibda. Dawn il-paġni kollha huma bil-Malti.</p>
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
            <p className="lab" data-rv><b>02</b>Għaliex aħna</p>
            <div className="shead" data-rv>
              <h2 className="h2">Għaliex OARC <i>Digital.</i></h2>
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
            <p className="lab" data-rv><b>03</b>Staff tal-AI</p>
            <div className="shead" data-rv>
              <h2 className="h2">Staff tal-AI li <i>qatt ma jieqaf.</i></h2>
              <p className="lead">{STAFF_LEAD}</p>
            </div>
            <dl className="terms" data-rv>
              {staff.map(([t, d]) => (
                <div key={t}><dt>{t}</dt><dd>{d}</dd></div>
              ))}
            </dl>
            <p className="note" data-rv>{STAFF_NOTE}</p>
            <div className="pbtns" data-rv>
              <Link className="btn btn-w" href={href("/ai")} data-testid="link-home-ai-staff">Sistemi tal-AI skont l-industrija <Arrow /></Link>
            </div>
          </div>
        </section>

        {/* 5 · questions */}
        <section className="sec" id="faq">
          <div className="wrap">
            <p className="lab" data-rv><b>04</b>Mistoqsijiet frekwenti</p>
            <div className="shead" data-rv>
              <h2 className="h2">Mistoqsijiet dwar <i>OARC Digital.</i></h2>
              <p className="lead">Tweġibiet qosra u ċari. Għal kull ħaġa oħra, staqsina fuq WhatsApp.</p>
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
            <h2 className="h2" data-rv>Ma tafx minn fejn tibda? <i>Ejja nitkellmu.</i></h2>
            <WaForm id="blueprint2" message={BLUEPRINT} button="Irrid il-pjan tiegħi" placeholder={FIELD} label={FIELD} />
            <p className="onote"><span>{CLOSE_NOTE}</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-close">Jew ikseb il-prezz tiegħek</a></p>
            <p className="home">Il-bqija tal-websajt hija bl-Ingliż. <a href="/" hrefLang="en" data-testid="link-home-english">Mur fuq il-websajt bl-Ingliż</a>.</p>
          </div>
        </section>
      </div>
    </FlagshipShell>
  );
}
