import type { Metadata } from "next";
import Link from "next/link";
import FlagshipShell from "@/components/flagship/FlagshipShell";
import { Arrow, WaForm, WaIcon, waLink } from "@/components/flagship/parts";
import LocaleSchema from "@/components/i18n/LocaleSchema";
import { LOCALE_INFO, localeAlternates, localeUrl } from "@/lib/i18n/twins";
import { NAP } from "@/lib/seo/nap";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const PATH = "/ai/casinos";
const URL = localeUrl("mt", PATH);
const TITLE = "Marketing u Sistemi tal-AI għall-Każinojiet f'Malta | OARC";
const DESCRIPTION =
  "Sistemi magħmula apposta, app għall-istaff, bookings u marketing li jġib plejers u mistednin fil-każinojiet u l-lukandi f'Malta. Pjan b'xejn fi 48 siegħa.";
const OG = { title: "Sistemi u marketing għall-każinojiet f'Malta", subtitle: "Sistemi magħmula apposta, app għall-istaff, bookings u marketing, minn tim wieħed.", eyebrow: "Sistemi tal-AI" };

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: localeAlternates("mt", PATH),
  openGraph: { images: ogImageEntry(OG), title: TITLE, description: DESCRIPTION, url: URL, type: "website", locale: LOCALE_INFO.mt.og },
  twitter: { images: [ogImageUrl(OG)], card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const BLUEPRINT = "Hello OARC. L-isem tal-każinò jew tal-lukanda tagħna hu {x}. Jekk jogħġobkom ibagħtulna l-pjan b'xejn tagħna.";
const PRICE = waLink("Hello OARC. Jekk jogħġobkom ibagħtuli l-prezz tagħkom għal każinò jew lukanda b'każinò. L-istabbiliment tagħna hu: ");

const three = [
  { h: "Nibnulek is-sistemi.", p: "Software magħmul apposta għall-każinò u l-lukanda tiegħek: bookings, il-loyalty club tiegħek, app għall-istaff u dashboard wieħed ċar.", we: "Mibni madwar kif jaħdem tassew l-istabbiliment tiegħek." },
  { h: "Nimlewlek is-sala u l-kmamar.", p: "Kmamar tal-lukanda, postijiet tal-poker, imwejjed privati, mwejjed tar-ristorant u pakketti ta' soġġorn u logħob, ibbukkjati lejl u nhar.", we: "L-ebda talba ma tistenna sa filgħodu." },
  { h: "Inġibulek il-mistednin it-tajbin.", p: "Films, kontenut, social media u reklami li jilħqu lin-nies lokali, lit-turisti, lill-vjaġġaturi ta' livell għoli u lill-kumpaniji.", we: "F'Malta, madwar l-Ewropa u fl-Asja." },
];

const parts = [
  { h: "Is-sala tal-logħob", p: "Slots, imwejjed, il-kamra tal-poker u l-kmamar tal-VIP. Skedi, bookings u offerti f'post wieħed." },
  { h: "Il-lukanda", p: "Bookings diretti tal-kmamar, wasliet, messaġġi lill-mistednin u housekeeping, marbuta mal-każinò." },
  { h: "Ristoranti u barijiet", p: "Bookings tal-imwejjed, iljieli speċjali u noti dwar il-mistednin, biex plejer jieħu l-mejda t-tajba għall-ikla." },
  { h: "Avvenimenti u gruppi", p: "Iljieli għall-kumpaniji, konferenzi, turnamenti u festini privati, bi kwotazzjoni u segwitu malajr." },
];

// Kull logħba, min normalment jilgħabha, u kif OARC tilħaq lil dik il-folla.
const games = [
  { h: "Slots", p: "L-akbar folla fis-sala. Nies lokali u viżitaturi li jridu lejla barra faċli u soċjali.", we: "Offerti u turnamenti tas-slots, reklamati fejn ir-regoli jippermettu." },
  { h: "Roulette", p: "L-ewwel mejda klassika għal viżitatur ġdid.", we: "Kampanji għat-turisti u għall-mistednin tal-lukanda." },
  { h: "Blackjack", p: "Plejers li jħobbu l-ħila u logħba mgħaġġla.", we: "Offerti fuq l-imwejjed u ljieli biex titgħallem tilgħab." },
  { h: "Punto banco u baccarat", p: "L-ewwel għażla ta' ħafna plejers ta' livell għoli, l-aktar mill-Asja.", we: "Pakketti b'mejda privata, bil-lingwa tagħhom." },
  { h: "Poker tal-mejda", p: "Ultimate Texas Hold'em u logħob bi tliet karti, li jintlagħbu kontra l-każinò.", we: "Għal dawk li jħobbu l-poker u jridu logħba aktar mgħaġġla." },
  { h: "Cash games tal-poker", p: "Plejers regolari li jiġu lura kull ġimgħa.", we: "Komunità tal-poker: skeda, postijiet u aġġornamenti." },
  { h: "Turnamenti tal-poker", p: "Plejers li jivvjaġġaw madwar l-Ewropa għall-avveniment it-tajjeb.", we: "Paġni tat-turnamenti, satellites u booking tal-postijiet." },
  { h: "VIP u kmamar privati", p: "Mistednin ta' livell għoli li jistennew li tkun tafhom.", we: "Għodod għall-hosts tiegħek: min ġej u x'jogħġobhom." },
];

const bookings = [
  "Kmamar u suites tal-lukanda", "Postijiet fit-turnamenti tal-poker", "Postijiet fil-cash games", "Imwejjed privati u tal-VIP", "Imwejjed tar-ristorant", "Imwejjed tal-bar u tal-lounge",
  "Biljetti għall-avvenimenti", "Iljieli għall-kumpaniji u l-gruppi", "Trasferimenti mill-ajruport", "Birthdays u ċelebrazzjonijiet",
];

const offers = [
  { h: "Soġġorn u logħob", p: "Kamra, merħba u lejla fis-sala, mibjugħin bħala pakkett wieħed." },
  { h: "Ikla u logħob", p: "Ikla fir-ristorant tiegħek, imbagħad l-imwejjed. Booking wieħed." },
  { h: "Weekends tat-turnamenti", p: "It-turnament tal-poker, il-kamra u t-trasferiment, ibbukkjati flimkien." },
  { h: "Iljieli għall-kumpaniji", p: "Avvenimenti privati, vjaġġi ta' inċentiv u ljieli ta' konferenzi għan-negozji." },
  { h: "Ċelebrazzjonijiet", p: "Birthdays u ljieli kbar, ippjanati mat-tim tiegħek." },
  { h: "Weekends ta' livell għoli", p: "Għall-mistednin VIP u tal-junkets: is-suite, il-host, il-mejda privata u l-karozza, kollox irranġat qabel ma jaslu." },
];

const guests = [
  { h: "Nies lokali.", p: "Nies f'Malta li jridu lejla tajba barra. Kull reklam isegwi r-regoli ta' Malta dwar l-età." },
  { h: "Turisti li diġà qegħdin hawn.", p: "Nilħquhom fuq Google, Maps u fit-tweġibiet tal-intelliġenza artifiċjali (AI) meta jfittxu x'hemm x'tagħmel illejla." },
  { h: "Vjaġġaturi ta' livell għoli.", p: "Mistednin sinjuri fl-Ewropa u fl-Asja li jippjanaw vjaġġ madwar is-soġġorn, l-ikel u l-imwejjed." },
  { h: "Kumpaniji u gruppi.", p: "Vjaġġi ta' inċentiv, konferenzi u avvenimenti privati, milħuqa fuq LinkedIn u permezz tal-organizzaturi." },
  { h: "Plejers tal-poker.", p: "Plejers li jsegwu l-kalendarju Ewropew tat-turnamenti u jagħżlu fejn se jivvjaġġaw wara." },
  { h: "Il-mistednin tal-lukanda tiegħek.", p: "Diġà qegħdin fil-kmamar tiegħek. Nistednuhom jinżlu fis-sala fil-mument it-tajjeb." },
];

const app = [
  "Roster u tpartit tax-xiftijiet, approvati minn maniġer",
  "Avviżi, b'marka meta kull persuna tkun qrathom",
  "Chat skont id-dipartiment u skont ix-xift",
  "Kompiti u noti tal-handover",
  "Formoli għall-inċidenti u għall-manutenzjoni",
  "Talbiet għal-leave, payslips u dokumenti",
  "Taħriġ u r-regoli tal-post",
  "Traduzzjoni mibnija fl-app għal tim b'ħafna lingwi",
  "Taħdem fuq kull mowbajl",
];

const depts: [string, string][] = [
  ["Is-sala tal-logħob", "L-iskedi tal-imwejjed u tas-slots, l-istaff u n-noti tas-sala f'post wieħed."],
  ["Il-kamra tal-poker", "L-iskeda tat-turnamenti, il-booking tal-postijiet u l-listi ta' stennija."],
  ["VIP u hosts", "Min ġej, x'jogħġobhom u x'għandek tipprepara."],
  ["Cage u kaxxier", "Handovers tax-xiftijiet u checklists. Id-deċiżjonijiet dwar il-flus jibqgħu f'idejn in-nies tiegħek."],
  ["Loyalty club", "Reġistrazzjonijiet, livelli, offerti u messaġġi tal-birthday."],
  ["Ir-reception tal-lukanda", "Bookings diretti, wasliet u messaġġi lill-mistednin."],
  ["Housekeeping", "Kmamar lesti, talbiet tal-mistednin u tiswijiet."],
  ["Ristoranti u barijiet", "Bookings tal-imwejjed, iljieli speċjali u noti dwar il-mistednin."],
  ["Avvenimenti u gruppi", "Kwotazzjonijiet, skedi u segwitu."],
  ["Sorveljanza u sigurtà", "Reġistri tal-inċidenti u handovers tax-xiftijiet. Il-kameras jibqgħu fuq is-sistemi tiegħek."],
  ["HR u roster", "Rosters, tpartit, leave u taħriġ."],
  ["Compliance", "Checklists, rekords u tfakkiriet, lesti għat-tim tal-compliance tiegħek."],
];

const content = [
  "Film tal-istabbiliment", "Kopertura tat-turnamenti", "Stejjer tax-chef u tal-bar", "Tours tal-kmamar u tas-suites", "Reels u vidjows qosra", "Ritratti",
  "Social media, immexxija kull ġimgħa", "Google u Google Maps", "Tweġibiet tat-tiftix bl-AI", "Reklami fuq Meta, Google u LinkedIn", "Listi tal-ivvjaġġar u tal-avvenimenti", "Offerti lill-membri li taw il-kunsens",
];

const rules = [
  { h: "Adulti biss.", p: "Ir-reklami huma mmirati lejn l-adulti, u qatt lejn it-tfal." },
  { h: "L-ebda wegħda falza.", p: "Qatt ma nagħtu x'jifhem li l-logħob hu mod kif tagħmel il-flus jew kif issolvi problema." },
  { h: "Logħob responsabbli f'kollox.", p: "Kull reklam iġorr il-messaġġ tal-logħob responsabbli u fejn tista' ssib l-għajnuna." },
  { h: "L-awtoesklużjoni tiġi rispettata.", p: "In-nies li eskludew lilhom infushom qatt ma jiġu kkuntattjati. Il-listi tiegħek jiġu ċċekkjati f'kull kampanja." },
  { h: "L-ebda pressjoni fuq plejers f'riskju.", p: "Id-data tal-plejers qatt ma tintuża biex issir pressjoni fuq nies li juru sinjali ta' problema bil-logħob." },
  { h: "In-nies jiddeċiedu.", p: "L-AI qatt ma tiddeċiedi xejn dwar il-kont, il-limiti jew il-flus ta' plejer. Dawn tgħaddihom lit-tim tiegħek." },
];

const reasons = [
  { h: "Sistemi u marketing f'tim wieħed.", p: "L-aġenzija li ġġiblek il-mistednin tibni wkoll is-sistema li tibbukkjahom." },
  { h: "Naħdmu fl-istabbiliment tiegħek.", p: "It-tim tal-filming u l-iżviluppaturi tagħna jiġu għandek u jaraw kif jaħdem tassew kull xift." },
  { h: "Taħdem ma' dak li diġà għandek.", p: "Is-sistema tal-ġestjoni tal-każinò, is-sistema tal-bookings tal-lukanda, it-tills u s-CRM tiegħek. Niċċekkjawhom waħda waħda mat-tim tal-IT tiegħek." },
  { h: "Malta, l-Ewropa u l-Asja.", p: "Nafu l-folla lokali, u nippjanaw kampanji għall-mistednin barra minn Malta bil-lingwa tagħhom." },
  { h: "L-AI u n-nies flimkien.", p: "L-AI tagħmel ix-xogħol li jieħu l-ħin. It-tim tiegħek iżomm kull deċiżjoni li tgħodd." },
  { h: "Tista' tiltaqa' magħna.", p: "Qegħdin Birkirkara. Nies veri, wiċċ imb wiċċ, f'Malta." },
];

const included = [
  "Sistemi magħmula apposta għall-każinò u l-lukanda tiegħek",
  "App għall-istaff għal kull dipartiment",
  "Bookings ta' kmamar, imwejjed u postijiet",
  "AI li twieġeb lill-mistednin bil-lingwa tagħhom",
  "Għodod għal-loyalty club tiegħek",
  "Għodod għall-hosts tal-VIP tiegħek",
  "Pakketti u offerti, ippjanati miegħek",
  "Films, ritratti u vidjows qosra",
  "Social media, immexxija kull ġimgħa",
  "Google, Maps u t-tiftix bl-AI",
  "Reklami f'Malta, fl-Ewropa u fl-Asja",
  "Paġni għall-bejgħ lill-kumpaniji u lill-gruppi",
  "Dashboard wieħed u rapport kull xahar",
  "Taħriġ u kura kull xahar",
];

const faqs = [
  { question: "X'tagħmel OARC Digital għall-każinojiet f'Malta?", answer: "Tliet affarijiet. Nibnu sistemi magħmula apposta għall-każinò u l-lukanda tiegħek, inkluża app għall-istaff. Nieħdu bookings għal kmamar, postijiet tal-poker, imwejjed u pakketti, lejl u nhar. U nmexxu l-marketing li jġib il-mistednin: films, kontenut, social media u reklami. Tim wieħed jagħmel it-tlieta." },
  { question: "Taħdmu wkoll ma' lukandi b'każinò, ristoranti u barijiet?", answer: "Iva. Każinò normalment ikun parti minn stabbiliment akbar. Aħna ngħaqqdu s-sala tal-logħob, il-lukanda, ir-ristoranti, il-barijiet u t-tim tal-avvenimenti, biex mistieden ikun magħruf f'kollha kemm huma u pakkett wieħed ikun jista' jkoprihom kollha." },
  { question: "Tista' taħdem mas-sistema tal-ġestjoni tal-każinò u mas-sistema tal-bookings tal-lukanda tagħna?", answer: "Fil-biċċa l-kbira tal-każi iva. Nikkonnettjaw mal-għodod li diġà tuża, bħas-sistema tal-ġestjoni tal-każinò, is-sistema tal-bookings tal-lukanda, it-tills u s-CRM tiegħek. Niċċekkjawhom waħda waħda mat-tim tal-IT tiegħek qabel ma nwiegħdu xi ħaġa." },
  { question: "X'inhi l-app għall-istaff?", answer: "App waħda għat-tim kollu tiegħek. Fiha r-rosters u t-tpartit tax-xiftijiet, avviżi, chat skont id-dipartiment u skont ix-xift, kompiti u noti tal-handover, rapporti tal-inċidenti u taħriġ. Taħdem fuq kull mowbajl, bl-Ingliż, bil-Malti u bil-lingwi l-oħra li jitkellem it-tim tiegħek." },
  { question: "Kif iġġibu mistednin ta' livell għoli mill-Ewropa u mill-Asja?", answer: "Nippjanaw miegħek pakketti ta' soġġorn, ikla u logħob. Imbagħad inqegħduhom fejn dawk il-mistednin ifittxu: it-tiftix, it-tweġibiet tal-AI, is-social media, il-listi tal-ivvjaġġar u tal-avvenimenti, u reklami bil-lingwa tagħhom. Kull kampanja ssegwi r-regoli dwar ir-reklamar tal-logħob tal-pajjiż fejn tkun qed tidher." },
  { question: "Liema logħbiet tirreklamaw?", answer: "Kollha, kull waħda lill-folla tagħha: slots, roulette, blackjack, punto banco u baccarat, cash games tal-poker, turnamenti tal-poker u mwejjed tal-VIP. Plejer tas-slots u plejer tat-turnamenti tal-poker issibhom f'postijiet differenti, għalhekk kull logħba jkollha l-pjan tagħha." },
  { question: "Jistgħu l-mistednin jibbukkjaw post tal-poker, mejda jew kamra b'messaġġ wieħed?", answer: "Iva. Il-mistednin jistaqsu fuq WhatsApp, fuq il-websajt tiegħek, bit-telefon jew fuq is-social media. Is-sistema twieġeb bil-lingwa tagħhom, tiċċekkja x'hemm disponibbli u tibbukkjah, jew tgħaddih lit-tim tiegħek meta tkun meħtieġa persuna." },
  { question: "Ir-reklami tagħkom isegwu r-regoli ta' Malta dwar ir-reklamar tal-logħob?", answer: "Iva. Ir-reklami huma għall-adulti biss, qatt ma jwiegħdu rebħ, isemmu lid-detentur tal-liċenzja, iġorru l-messaġġ tal-logħob responsabbli u qatt ma jimmiraw lejn nies li eskludew lilhom infushom. It-tim tal-compliance tiegħek japprova kull kampanja qabel ma toħroġ." },
  { question: "Tiċċekkjaw il-lista tal-awtoesklużjoni qabel kampanja?", answer: "Iva. Qabel ma jintbagħat xi messaġġ lill-membri tiegħek, tiġi applikata l-lista tal-esklużjoni tiegħek, biex in-nies li eskludew lilhom infushom qatt ma jiġu kkuntattjati. Jitneħħew ukoll il-membri li għażlu li ma jirċevux marketing." },
  { question: "Min hu responsabbli jekk reklam jikser ir-regoli?", answer: "Skont ir-regoli ta' Malta, id-detentur tal-liċenzja jibqa' responsabbli għar-reklami tiegħu, anke meta jsiru minn aġenzija. Għalhekk xejn ma joħroġ qabel ma t-tim tal-compliance tiegħek ikun approvah." },
  { question: "L-AI tieħu deċiżjonijiet dwar il-plejers?", answer: "Le. L-AI twieġeb il-mistoqsijiet, tieħu l-bookings u tagħmel ix-xogħol amministrattiv. Kull ħaġa dwar il-kont, il-limiti, il-verifiki jew il-flus ta' plejer tmur għand it-tim tiegħek. In-nies jiddeċiedu." },
  { question: "Id-data tal-mistednin tagħna hi sigura?", answer: "Id-data tiegħek tibqa' tiegħek. Hi protetta taħt il-GDPR, jarawha biss in-nies li jeħtiġuha, u naħdmu taħt ftehim ta' kunfidenzjalità. Is-sistemi li nibnulek huma tiegħek ukoll." },
  { question: "Kemm jieħu żmien?", answer: "Assistent tal-bookings jew app għall-istaff jistgħu jibdew jaħdmu fi żmien ġimgħat. Sistemi akbar li jgħaqqdu ħafna dipartimenti jieħdu aktar żmien. Tirċievi d-dati ta' kull pass qabel ma nibdew." },
  { question: "Kemm tiswa?", answer: "Jiddependi mid-daqs tal-istabbiliment tiegħek u minn x'għandek bżonn li nibnu. Niġu nżuruk, naraw kif taħdem u mbagħad nagħtuk prezz. Biex tibda, ibgħatilna isem l-istabbiliment tiegħek fuq WhatsApp." },
  { question: "Taħdmu wkoll ma' każinojiet online?", answer: "Iva. Għandna sistemi tal-AI separati għall-operaturi tal-iGaming, għall-fornituri u għall-affiljati. Din il-paġna hi għall-każinojiet fiżiċi (land-based) u għal-lukandi ta' madwarhom." },
  { question: "X'hemm fil-pjan b'xejn?", answer: "Pjan għall-istabbiliment tiegħek: fejn qed jintilfu l-mistednin, fejn qed jintilef il-ħin tal-istaff, liema sistema għandha tinbena l-ewwel u lil liema mistednin għandek timmira. Tirċevih fuq WhatsApp fi żmien 48 siegħa." },
  { question: "Fejn tinsab OARC Digital?", answer: `${NAP.streetAddressShort}, ${NAP.addressLocality} ${NAP.postalCode}, Malta. Tista' tiltaqa' mat-tim wiċċ imb wiċċ. WhatsApp ${NAP.phoneDisplay}. Email ${NAP.email}.` },
];

const bar = [
  "Slots", "Roulette", "Blackjack", "Punto banco", "Baccarat", "Cash games tal-poker", "Turnamenti tal-poker", "Kmamar tal-VIP",
  "Kmamar tal-lukanda", "Ristoranti", "Barijiet", "Avvenimenti", "Loyalty club",
];

function Bar() {
  return (
    <div className="bset">
      <em>Nimlew</em>
      {bar.map((b) => <span key={b}>{b}</span>)}
    </div>
  );
}

export default function AiCasinosPageMt() {
  return (
    <FlagshipShell accent="#8C6A16" accentSoft="#F1E4BE" navTheme="dark" locale="mt" langPath={PATH}>
      <LocaleSchema
        locale="mt"
        path={PATH}
        title={TITLE}
        description={DESCRIPTION}
        serviceName="Marketing u sistemi tal-AI għall-każinojiet f'Malta"
        serviceType="Software magħmul apposta, app għall-istaff, bookings u marketing għall-każinojiet fiżiċi u l-lukandi b'każinò"
        faqs={faqs}
        crumbs={[["Sistemi tal-AI", "/ai"]]}
      />
      <div id="top">
        {/* 1 · the promise and the free blueprint */}
        <section className="hero dark">
          <div className="wrap">
            <h1>
              <span className="kick">{"Marketing u sistemi tal-AI għall-każinojiet f'Malta"}</span>
              <span className="big">Nimlewlek l-imwejjed <i className="mk">u l-kmamar.</i></span>
            </h1>
            <p className="hsub">{"Sistemi magħmula apposta, app għall-istaff u marketing għall-każinojiet f'Malta, u għal-lukandi, għar-ristoranti u għall-barijiet ta' madwarhom."}</p>

            <div className="hgrid">
              <div className="ocard">
                <p className="otop"><span className="otag">{"B'xejn"}</span><span className="olim">Fi 48 siegħa</span></p>
                <h2>{"Il-pjan b'xejn għall-każinò tiegħek."}</h2>
                <p>{"Ibgħatilna isem il-każinò jew il-lukanda tiegħek. Fi 48 siegħa tirċievi pjan: fejn qed jintilfu l-mistednin, fejn qed jintilef il-ħin tal-istaff, u x'għandu jinbena l-ewwel."}</p>
                <WaForm id="blueprint" message={BLUEPRINT} button="Irrid il-pjan tiegħi" placeholder="Isem il-każinò jew il-lukanda tiegħek" label="Isem il-każinò jew il-lukanda tiegħek" />
                <p className="onote"><span>Jiftaħ WhatsApp. L-ebda telefonata. L-ebda formola twila.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-hero">Jew ikseb il-prezz tiegħek</a></p>
              </div>

              <div className="screens" aria-hidden="true">
                <div className="scr">
                  <b>Kamra tal-poker · Is-Sibt</b>
                  <div className="row"><i>1</i>Turnament · 21:00</div>
                  <div className="row you"><i>2</i>Post 7 · Ibbukkjat</div>
                </div>
                <div className="scr">
                  <b>WhatsApp · 02:10</b>
                  <div className="bub">Żewġt iljieli, ikla u t-turnament?</div>
                  <div className="bub ai">Lest. <u>Kamra, mejda u post ibbukkjati.</u></div>
                </div>
                <div className="scr s-hide">
                  <b>App għall-istaff</b>
                  <div className="row"><i>1</i>{"Roster · Xift ta' bil-lejl"}</div>
                  <div className="row you"><i>2</i>Tpartit tax-xift approvat</div>
                </div>
                <div className="scr s-hide">
                  <b>Illejla</b>
                  <div className="kv"><span>Mistednin li ġejjin</span><b>Fuq il-lista</b></div>
                  <div className="kv"><span>Qed jistennew host</span><b>Ħadd</b></div>
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
            <p className="lab" data-rv><b>01</b>{"X'nagħmlu"}</p>
            <div className="shead" data-rv>
              <h2 className="h2">Tliet xogħlijiet. <i>Tim wieħed.</i></h2>
              <p className="lead">Ħafna aġenziji jmexxu biss ir-reklami tiegħek. Ħafna kumpaniji tas-software jibnu biss is-sistemi tiegħek. Aħna nagħmlu t-tnejn, u ngħaqqduhom.</p>
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
              {"Ix-xogħol għall-każinojiet jinqasam bejn it-8 dipartimenti kollha ta' "}<Link className="txt" href="/mt" data-testid="link-home-context">OARC Digital</Link>{", aġenzija diġitali u tal-AI f'Malta. "}
              Għalhekk is-sistemi, il-kontenut u r-reklami tiegħek jiġu minn tim wieħed.
            </p>
          </div>
        </section>

        {/* 3 · one property, many businesses */}
        <section className="sec paper" id="property">
          <div className="wrap">
            <p className="lab" data-rv><b>02</b>L-istabbiliment kollu</p>
            <div className="shead" data-rv>
              <h2 className="h2">Każinò qatt mhu <i>każinò biss.</i></h2>
              <p className="lead">Hu wkoll lukanda, ristoranti, barijiet u avvenimenti. Il-mistednin tiegħek jaraw post wieħed. Is-sistemi tiegħek għandhom jaraw mistieden wieħed.</p>
            </div>
            <div className="grid g4">
              {parts.map((x) => (
                <article className="card" key={x.h} data-rv>
                  <h3 style={{ marginTop: 0 }}>{x.h}</h3>
                  <p>{x.p}</p>
                </article>
              ))}
            </div>
            <p className="after" data-rv>Profil wieħed tal-mistieden fl-erbgħa li huma. Mistieden tal-lukanda jirċievi l-offerta t-tajba tal-każinò. Plejer jieħu l-mejda t-tajba għall-ikla.</p>
          </div>
        </section>

        {/* 4 · every game */}
        <section className="sec" id="games">
          <div className="wrap">
            <p className="lab" data-rv><b>03</b>Il-logħbiet</p>
            <div className="shead" data-rv>
              <h2 className="h2">Kull logħba għandha <i>l-folla tagħha.</i></h2>
              <p className="lead">{"Plejer tas-slots u plejer tat-turnamenti tal-poker issibhom f'postijiet differenti ħafna. Aħna nirreklamaw kull logħba lin-nies li jilagħbuha."}</p>
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
                  <h3>Liema logħba teħtieġ aktar plejers?</h3>
                  <p>{"Nippjanawha għalik. B'xejn, fi 48 siegħa."}</p>
                </div>
                <a className="btn btn-w" href="#top" data-testid="link-blueprint-games">Irrid il-pjan tiegħi <Arrow /></a>
              </article>
            </div>
          </div>
        </section>

        {/* 5 · bookings */}
        <section className="sec paper" id="bookings">
          <div className="wrap">
            <p className="lab" data-rv><b>04</b>Bookings</p>
            <div className="shead" data-rv>
              <h2 className="h2">Ibbukkjat <i>{"b'messaġġ wieħed."}</i></h2>
              <p className="lead">Il-mistednin jistaqsu fuq WhatsApp, fuq il-websajt tiegħek, bit-telefon jew fuq is-social media. Is-sistema twieġeb bil-lingwa tagħhom u tibbukkja.</p>
            </div>
            <ul className="chips big" data-rv>
              {bookings.map((it) => <li key={it}>{it}</li>)}
              <li className="on">{"Pakketti ta' soġġorn, ikla u logħob"}</li>
            </ul>
            <p className="under" data-rv>{"Kull ħaġa dwar il-kont, il-limiti jew il-flus ta' plejer tmur dritt għand it-tim tiegħek. In-nies jiddeċiedu. Is-sistema qatt."}</p>
          </div>
        </section>

        {/* 6 · offers */}
        <section className="sec" id="offers">
          <div className="wrap">
            <p className="lab" data-rv><b>05</b>Pakketti</p>
            <div className="shead" data-rv>
              <h2 className="h2">Nibnu l-offerti <i>miegħek.</i></h2>
              <p className="lead">{"Noqogħdu bilqiegħda mat-tim tiegħek u nippjanaw x'se jinbiegħ. Imbagħad inqegħduh quddiem in-nies it-tajbin."}</p>
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
            <p className="lab" data-rv><b>06</b>Il-mistednin tiegħek</p>
            <div className="shead" data-rv>
              <h2 className="h2">Il-mistednin it-tajbin. <i>Mill-postijiet it-tajbin.</i></h2>
              <p className="lead">Ma nagħmlux reklami biss. Inqegħdu l-offerta tiegħek fejn il-mistieden tiegħek li jmiss diġà qed ifittex.</p>
            </div>
            <ul className="why">
              {guests.map((r) => (
                <li key={r.h} data-rv><h3>{r.h}</h3><p>{r.p}</p></li>
              ))}
            </ul>
            <div className="stat" data-rv>
              <b>68.8%</b>
              <p>
                {"taż-żjarat fil-każinojiet f'Malta fl-2025 saru minn mistednin minn barra Malta. Għalhekk il-biċċa l-kbira tal-marketing tiegħek trid tilħaq lin-nies qabel ma jaslu."}
                <small>Sors: Malta Gaming Authority, Annual Report 2025.</small>
              </p>
            </div>
          </div>
        </section>

        {/* 8 · the staff app */}
        <section className="sec" id="staff-app">
          <div className="wrap">
            <p className="lab" data-rv><b>07</b>L-app għall-istaff</p>
            <div className="shead" data-rv>
              <h2 className="h2">App waħda <i>għat-tim kollu tiegħek.</i></h2>
              <p className="lead">{"Stabbiliment kbir jimxi b'ħafna nies, bix-xiftijiet, f'ħafna dipartimenti. Aħna nibnu app waħda li żżommhom kollha flimkien."}</p>
            </div>
            <div className="split" data-rv>
              <ul className="chk">{app.map((it) => <li key={it}>{it}</li>)}</ul>
              <div className="phone" aria-hidden="true">
                <div className="scrn">
                  <div className="bar"><b>{"Xift ta' bil-lejl"}</b><span>Sala</span></div>
                  <div className="pin">Illejla: turnament tal-poker, 21:00. Il-postijiet kollha meħuda.</div>
                  <div className="msg"><small>Pit 2</small>Mejda 6: jeħtieġ dealer, 22:00.</div>
                  <div className="msg me"><small>Maniġer tas-sala</small>Irranġat. Maria ġejja.</div>
                  <div className="msg"><small>Reception</small>Mistieden tas-suite jasal 23:30. Il-host lest?</div>
                  <div className="msg me"><small>Host tal-VIP</small>Lest. Il-karozza qiegħda fl-ajruport.</div>
                  <div className="tabs"><b>Chat</b><span>Roster</span><span>Kompiti</span><span>Aħbarijiet</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9 · every department */}
        <section className="sec paper" id="departments">
          <div className="wrap">
            <p className="lab" data-rv><b>08</b>Id-dipartimenti tiegħek</p>
            <div className="shead" data-rv>
              <h2 className="h2">Kull dipartiment. <i>Sistema waħda.</i></h2>
              <p className="lead">Kull parti tal-istabbiliment tiegħek tieħu dak li teħtieġ, u kollha jaqsmu l-istess informazzjoni.</p>
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
            <p className="lab" data-rv><b>09</b>Kontenut u reklami</p>
            <div className="shead" data-rv>
              <h2 className="h2">Niffilmjawh. Nippostjawh. <i>Inmexxu r-reklami.</i></h2>
              <p className="lead">{"It-tim tagħna jiġi fl-istabbiliment tiegħek. Ġurnata waħda ta' filming tagħtik ġimgħat ta' kontenut għal kull kanal."}</p>
            </div>
            <ul className="chips big" data-rv>
              {content.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
        </section>

        {/* 11 · by the rules */}
        <section className="sec dark" id="rules">
          <div className="wrap">
            <p className="lab" data-rv><b>10</b>Magħmul sew</p>
            <div className="shead" data-rv>
              <h2 className="h2">Magħmul sew. <i>Skont ir-regoli.</i></h2>
              <p className="lead">Il-logħob hu regolat, u r-reklamar tiegħu wkoll. Dak kollu li nagħmlu hu mibni biex isegwi r-regoli.</p>
            </div>
            <ul className="why">
              {rules.map((r) => (
                <li key={r.h} data-rv><h3>{r.h}</h3><p>{r.p}</p></li>
              ))}
            </ul>
            <p className="note" data-rv>
              {"Naħdmu skont il-Gaming Commercial Communications Regulations ta' Malta u l-gwida tal-Malta Gaming Authority. "}
              Kull reklam isemmi lid-detentur tal-liċenzja, u t-tim tal-compliance tiegħek japprova kull kampanja qabel ma toħroġ.
            </p>
          </div>
        </section>

        {/* 12 · why OARC */}
        <section className="sec paper" id="why">
          <div className="wrap">
            <p className="lab" data-rv><b>11</b>Għaliex aħna</p>
            <div className="shead" data-rv>
              <h2 className="h2">Għaliex OARC Digital <i>għall-każinò tiegħek.</i></h2>
              <p className="lead">Ma nbigħulekx software u nitilqu, u lanqas nippostjaw għalik u nittamaw. Nibnuh, nimlewh u nmexxuh miegħek.</p>
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
            <p className="lab" data-rv><b>12</b>Il-pakkett</p>
            <div className="shead" data-rv>
              <h2 className="h2">L-istabbiliment kollu tiegħek. <i>Kopert.</i></h2>
              <p className="lead">{"Pakkett wieħed. Tim wieħed. Sistemi, bookings u marketing għall-każinò u għal dak kollu ta' madwaru."}</p>
            </div>
            <div className="pack k" data-rv>
              <div>
                <p className="otop"><span className="otag">Kollox inkluż</span></p>
                <h3>Il-pakkett Full House.</h3>
                <p className="pp">{"Mibni madwar l-istabbiliment tiegħek u mmexxi mat-tim tiegħek. Il-prezz jiddependi mid-daqs tal-istabbiliment tiegħek u minn x'għandek bżonn."}</p>
                <div className="pbtns">
                  <a className="btn btn-y" href={PRICE} target="_blank" rel="noopener" data-testid="link-price-package"><WaIcon />Ikseb il-prezz tiegħek</a>
                  <a className="btn btn-o" href="#top" data-testid="link-blueprint-package">{"Irrid il-pjan b'xejn tiegħi"}</a>
                </div>
              </div>
              <ul className="chk">{included.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
            <p className="under" data-rv>
              Tmexxi lukanda jew ristorant mingħajr każinò? Ara s-sistemi tal-AI tagħna għal <Link className="txt" href="/mt/ai/hotels">lukandi</Link> u <Link className="txt" href="/ai/restaurants">ristoranti</Link>.
              Tmexxi każinò online? Ara <Link className="txt" href="/ai/igaming-operators">l-AI għall-operaturi tal-iGaming</Link>, jew <Link className="txt" href="/mt/ai">is-sistemi kollha tal-AI</Link>.
            </p>
          </div>
        </section>

        {/* 14 · how it starts */}
        <section className="sec paper" id="start">
          <div className="wrap">
            <p className="lab" data-rv><b>13</b>Kif tibda</p>
            <div className="shead" data-rv>
              <h2 className="h2">Ibda <i>{"b'messaġġ wieħed."}</i></h2>
              <p className="lead">{"L-ebda laqgħa x'tibbukkja. L-ebda formola x'timla. Isem l-istabbiliment tiegħek biss."}</p>
            </div>
            <ol className="tl">
              <li data-rv><p className="when">Illum</p><h3>Ibgħatilna isem l-istabbiliment tiegħek fuq WhatsApp.</h3><p>Dak biss neħtieġu biex nibdew.</p></li>
              <li data-rv><p className="when">Fi 48 siegħa</p><h3>{"Tirċievi l-pjan b'xejn tiegħek."}</h3><p>{"Fejn qed jintilfu l-mistednin, fejn qed jintilef il-ħin tal-istaff, u x'għandu jinbena l-ewwel."}</p></li>
              <li data-rv><p className="when">Imbagħad</p><h3>Niġu nżuruk u nippjanaw.</h3><p>Induru mal-istabbiliment flimkien mat-tim tiegħek, naqblu dwar il-pjan u l-offerti, u nagħtuk il-prezz u d-dati.</p></li>
              <li data-rv><p className="when">Kull xahar</p><h3>Inmexxuh miegħek.</h3><p>Kontenut ġdid, kampanji ġodda, kura tas-sistemi u rapport wieħed ċar.</p></li>
            </ol>
          </div>
        </section>

        {/* 15 · questions */}
        <section className="sec" id="faq">
          <div className="wrap">
            <p className="lab" data-rv><b>14</b>Qabel ma tistaqsi</p>
            <div className="shead" data-rv>
              <h2 className="h2">Mistoqsijiet <i>mit-timijiet tal-każinojiet.</i></h2>
              <p className="lead">Tweġibiet qosra u ċari. Kull ħaġa oħra staqsina fuq WhatsApp.</p>
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
            <h2 className="h2" data-rv>Żomm is-sala <i>mimlija.</i></h2>
            <WaForm id="blueprint2" message={BLUEPRINT} button="Irrid il-pjan tiegħi" placeholder="Isem il-każinò jew il-lukanda tiegħek" label="Isem il-każinò jew il-lukanda tiegħek" />
            <p className="onote"><span>{"B'xejn. Fi 48 siegħa. Jiftaħ WhatsApp."}</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-close">Jew ikseb il-prezz tiegħek</a></p>
            <p className="home">Issib lil OARC Digital hawn: {NAP.streetAddressShort}, {NAP.addressLocality} {NAP.postalCode}. {"Għall-adulti biss. Jekk jogħġbok ilgħab b'mod responsabbli."}</p>
          </div>
        </section>
      </div>
    </FlagshipShell>
  );
}
