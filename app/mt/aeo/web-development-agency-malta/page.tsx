import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import LocaleSchema from "@/components/i18n/LocaleSchema";
import { LOCALE_INFO, localeAlternates, localeUrl } from "@/lib/i18n/twins";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

// Maltese twin of /aeo/web-development-agency-malta. PATH is the ENGLISH path.
const PATH = "/aeo/web-development-agency-malta";
const TITLE = "Websajts f'Malta | Żvilupp ta' websajts | OARC Digital";
const DESCRIPTION =
  "Żvilupp ta' websajts f'Malta. Nibnu kull tip ta' websajt, 2D, 3D jew interattiva, magħmula biex tbigħ u tinstab fuq Google u l-AI. Pjan b'xejn fi 48 siegħa.";
const URL = localeUrl("mt", PATH);

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: localeAlternates("mt", PATH),
  openGraph: { images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
 title: TITLE, description: DESCRIPTION, url: URL, type: "website", locale: LOCALE_INFO.mt.og },
  twitter: { images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
 card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "X'tagħmel aġenzija tal-iżvilupp tal-websajts?", answer: "Aġenzija tal-iżvilupp tal-websajts tippjana, tiddisinja u tibni l-websajt tiegħek, u tiżgura li taħdem fuq kull mowbajl u kompjuter. F'OARC Digital niktbu wkoll il-kliem, nieħdu r-ritratti u niġbdu l-filmati, inħejju l-websajt biex tinstab fuq Google u l-AI, u nqabbduha mal-formoli, mal-prenotazzjonijiet u ma' WhatsApp." },
  { question: "Kemm tiswa websajt f'Malta?", answer: "Jiddependi mit-tip ta' websajt u minn kemm hi kbira. Websajt sempliċi, ħanut online u websajt 3D huma xogħlijiet differenti ħafna. Ma nużawx listi ta' prezzijiet fissi. Ibgħatilna isem in-negozju tiegħek fuq WhatsApp u nibagħtulek prezz." },
  { question: "Kemm iddum biex tinbena websajt?", answer: "Il-biċċa l-kbira tal-websajts ikunu online fi ftit ġimgħat, mhux xhur. Websajt żgħira tieħu inqas żmien, u ħanut online jew web app jieħdu aktar. Tirċievi d-dati ta' kull pass qabel ma nibdew." },
  { question: "Liema pjattaforma għandi nagħżel?", answer: "WordPress jekk it-tim tiegħek jippubblika spiss. Webflow għal websajts iffukati fuq id-disinn li jinbidlu malajr. Shopify għal ħwienet online. Bini apposta b'Next.js għall-veloċità, it-3D, il-web apps u kull ħaġa speċjali. Nirrakkomandawlek waħda wara li nifhmu n-negozju tiegħek." },
  { question: "Il-websajt se tkun tiegħi?", answer: "Iva. Id-dominju, il-websajt u l-kontenut huma tiegħek. M'intix marbut magħna." },
  { question: "Nista' nibdel il-websajt jien stess?", answer: "Iva. Inħejjulek skrin sempliċi għall-editjar u nħarrġu lit-tim tiegħek, biex tkun tista' tibdel il-kliem, ir-ritratti u l-prezzijiet mingħajr ma ċċempel lil developer." },
  { question: "L-SEO huwa inkluż?", answer: "Iva. Kull websajt li nibnu hija mħejjija biex tinstab: paġni veloċi, titli ċari, tikketti schema, sitemap u fajl llms.txt, biex Google u għodod tal-AI bħal ChatGPT u Gemini jkunu jistgħu jaqrawha. L-SEO kontinwu wara t-tnedija huwa servizz separat." },
  { question: "Tistgħu tiddisinjaw il-websajt tiegħi mill-ġdid mingħajr ma nitlef posti fuq Google?", answer: "Iva. Qabel ma nċaqilqu xi ħaġa, nagħmlu lista ta' kull paġna tal-websajt l-antika tiegħek u nippuntaw kull link antik lejn il-paġna l-ġdida tiegħu. Wara t-tnedija niċċekkjaw li Google għadu jsib kollox." },
  { question: "Tibnu websajts 3D u interattivi?", answer: "Iva. Nibnu websajts b'oġġetti 3D li tista' ddawwarhom, xeni li jiċċaqilqu waqt li tiskrollja u stejjer interattivi. Niżguraw ukoll li xorta jiftħu malajr fuq mowbajl." },
  { question: "Il-websajt tiegħi tista' tieħu prenotazzjonijiet u ħlasijiet?", answer: "Iva. Nibnu ħwienet online, sistemi tal-prenotazzjonijiet u ħlasijiet bil-kard, u nqabbduhom mal-kalendarju, mal-istokk u mal-lista tal-klijenti tiegħek." },
  { question: "X'inhu l-appoġġ għall-klijenti bl-AI fuq il-websajt?", answer: "Huwa assistent fuq il-websajt tiegħek li jwieġeb lill-viżitaturi lejl u nhar, bl-informazzjoni tiegħek stess: is-servizzi tiegħek, il-ħinijiet tal-ftuħ u l-mistoqsijiet komuni. Meta ma jkunx ċert, jgħaddi l-konversazzjoni lilek." },
  { question: "Tiktbu l-kliem u tieħdu r-ritratti intom?", answer: "Iva. Il-kittieba, id-disinjaturi u l-crew tal-filmati tagħna jaħdmu fl-istess tim mad-developers tagħna, allura ma tirċevix disinn vojt biex timlieh int." },
  { question: "Tieħdu ħsieb il-hosting u l-appoġġ wara t-tnedija?", answer: "Iva. Inħejju l-hosting fl-UE, il-katnazz SSL u backups kuljum, u noffru pjan ta' manutenzjoni għall-aġġornamenti u t-tibdil wara t-tnedija." },
  { question: "X'hemm fil-pjan b'xejn għall-websajt?", answer: "Pjan għall-websajt tiegħek: x'għandha tgħid, kif għandha tidher, liema tip ta' websajt jgħodd għan-negozju tiegħek u x'teħtieġ biex iġġiblek it-talbiet. Jekk diġà għandek websajt, niċċekkjaw ukoll il-veloċità tagħha u kif jarawha Google u l-AI. Tirċevih fuq WhatsApp fi żmien 48 siegħa." },
  { question: "Fejn jinsab OARC Digital?", answer: `${NAP.streetAddressShort}, ${NAP.addressLocality} ${NAP.postalCode}, Malta. Tista' tiltaqa' mat-tim wiċċ imb wiċċ. WhatsApp ${NAP.phoneDisplay}. Email ${NAP.email}.` },
];

export default function Page() {
  return (
    <>
      <LocaleSchema
        locale="mt"
        path={PATH}
        title={TITLE}
        description={DESCRIPTION}
        serviceName="Żvilupp ta' websajts f'Malta"
        serviceType="Żvilupp tal-web"
        faqs={faqs}
      />
      <PageContent faqs={faqs} />
    </>
  );
}
