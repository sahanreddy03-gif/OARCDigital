import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import LocaleSchema from "@/components/i18n/LocaleSchema";
import { LOCALE_INFO, localeAlternates, localeUrl } from "@/lib/i18n/twins";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

// Maltese twin of /aeo/seo-agency-malta. PATH is the ENGLISH path.
const PATH = "/aeo/seo-agency-malta";
const TITLE = "Aġenzija tal-SEO f'Malta | Tfittxijiet li jġibu klijenti | OARC";
const DESCRIPTION =
  "Aġenzija tal-SEO f'Malta. Intellgħu n-negozju tiegħek fuq nett f'Google, Google Maps u fit-tweġibiet tal-AI bħal ChatGPT u Gemini. Pjan b'xejn fi 48 siegħa.";
const URL = localeUrl("mt", PATH);

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: localeAlternates("mt", PATH),
  openGraph: { images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }), title: TITLE, description: DESCRIPTION, url: URL, type: "website", locale: LOCALE_INFO.mt.og },
  twitter: { images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })], card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "X'tagħmel aġenzija tal-SEO?", answer: "Aġenzija tal-SEO tara li n-negozju tiegħek jinstab meta n-nies ifittxu. Għand OARC Digital dan ifisser erba' xogħlijiet: nirranġaw il-websajt tiegħek, insibu l-kliem li jiktbu l-klijenti tiegħek, niktbu l-paġni u l-artikli li jwiġbuhom, u naraw li websajts ta' fiduċja u għodod tal-intelliġenza artifiċjali (AI) isemmuk. Kull xahar tirċievi rapport bil-miktub." },
  { question: "Kemm jiswa l-SEO f'Malta?", answer: "Jiddependi mill-industrija tiegħek, minn kemm huma b'saħħithom il-kompetituri tiegħek u minn kemm-il post trid tinstab fih. Ma nużawx listi ta' prezzijiet fissi, għax ħanut żgħir u grupp ta' lukandi jeħtieġu xogħol differenti ħafna. Ibgħatilna isem in-negozju tiegħek fuq WhatsApp u nibagħtulek prezz." },
  { question: "Kemm idum l-SEO biex jaħdem?", answer: "Tiswijiet żgħar jistgħu jidhru fi ftit ġimgħat. Pożizzjonijiet b'saħħithom u stabbli s-soltu jieħdu ftit xhur, għax Google jeħtieġ iż-żmien biex jafda websajt. Min iwiegħdek riżultati sal-ġimgħa d-dieħla qed jobsor biss." },
  { question: "Tistgħu tiggarantixxu l-ewwel post fuq Google?", answer: "Le. Ħadd ma jista', u oqgħod attent minn min jgħid li jista'. Google jiddeċiedi l-ordni, mhux l-aġenziji. Li nwiegħdu huwa x-xogħol kollu, magħmul sew, u rapport ċar li juri x'inbidel." },
  { question: "X'inhi d-differenza bejn SEO, AEO u GEO?", answer: "L-SEO jtella' l-websajt tiegħek fuq nett f'Google u Bing. L-AEO, answer engine optimisation, jara li kliemek jintgħażel bħala t-tweġiba waħdanija mill-AI ta' Google u mill-assistenti tal-vuċi. Il-GEO, generative engine optimisation, jara li chats tal-AI bħal ChatGPT, Gemini u Perplexity jirrakkomandaw in-negozju tiegħek b'ismu. Għandhom l-istess bażi, għalhekk immexxuhom bħala pjan wieħed." },
  { question: "Kif inġiegħel lil ChatGPT jirrakkomanda n-negozju tiegħi?", answer: "L-għodod tal-AI jirrakkomandaw negozji li jistgħu jsibu, jifhmu u jafdaw. Għalhekk il-websajt tiegħek teħtieġ fatti ċari u tweġibiet ċari, ismek, l-indirizz u n-numru tat-telefon iridu jkunu l-istess kullimkien, u websajts ta' fiduċja u reċensjonijiet iridu jsemmuk. Aħna nieħdu ħsieb it-tlieta li huma, imbagħad kull xahar niċċekkjaw x'jgħidu dwarek l-għodod tal-AI." },
  { question: "Kif inkun naf jekk l-AI ssemmix in-negozju tiegħi?", answer: "Itlobna l-pjan tar-ranking b'xejn. Nistaqsu lil ChatGPT, Gemini u Perplexity il-mistoqsijiet li jistaqsu l-klijenti tiegħek, u nuruk lil min jirrakkomandaw illum u fejn qiegħed int." },
  { question: "Tagħmlu SEO bil-Malti kif ukoll bl-Ingliż?", answer: "Iva. Nirriċerkaw it-tfittxijiet kemm bl-Ingliż kif ukoll bil-Malti, għax in-nies f'Malta jużaw it-tnejn. Ħafna aġenziji jħarsu biss lejn l-Ingliż." },
  { question: "Taħdmu mal-industrija tiegħi?", answer: "Iva. Nibnu pjan separat għal kull industrija: ristoranti, lukandi, kliniċi, proprjetà, ditti legali, ħwienet, iGaming, fintech, kostruzzjoni, skejjel, turiżmu u aktar. Jekk għandek klijenti li jfittxu, nistgħu ngħinuhom isibuk." },
  { question: "Għandi bżonn websajt ġdida għall-SEO?", answer: "Mhux dejjem. L-ewwel niċċekkjaw il-websajt tiegħek. Ħafna drabi tkun teħtieġ biss tiswija. Jekk tkun bil-mod wisq jew qadima wisq biex titla' fir-riżultati, it-tim tal-web tagħna jista' jibniha mill-ġdid." },
  { question: "Konsulent tal-SEO jew aġenzija tal-SEO: liema aħjar?", answer: "Konsulent huwa persuna waħda li tagħti parir. Aġenzija tagħmel ix-xogħol ukoll. Għand OARC Digital il-pjan tiegħek jitwettaq minn kittieba, żviluppaturi tal-web, tim tal-films u inġiniera tal-AI f'tim wieħed, biex xejn ma jibqa' jistenna lil ħaddieħor." },
  { question: "X'hemm fil-pjan tar-ranking b'xejn?", answer: "Fejn tinsab illum fuq Google u Google Maps, x'jgħidu dwarek ChatGPT, Gemini u Perplexity, it-tfittxijiet li jiktbu l-klijenti tiegħek, x'jagħmlu aħjar l-eqreb kompetituri tiegħek, u l-ewwel 5 tiswijiet tiegħek, f'ordni. Tirċevih fuq WhatsApp fi żmien 48 siegħa." },
  { question: "Fejn tinsab OARC Digital?", answer: `${NAP.streetAddressShort}, ${NAP.addressLocality} ${NAP.postalCode}, Malta. Tista' tiltaqa' mat-tim personalment. WhatsApp ${NAP.phoneDisplay}. Email ${NAP.email}.` },
];

export default function Page() {
  return (
    <>
      <LocaleSchema
        locale="mt"
        path={PATH}
        title={TITLE}
        description={DESCRIPTION}
        serviceName="Aġenzija tal-SEO f'Malta"
        serviceType="Ottimizzazzjoni għall-magni tat-tiftix (SEO, AEO u GEO)"
        faqs={faqs}
      />
      <PageContent faqs={faqs} />
    </>
  );
}
