import type { Metadata } from "next";
import LocaleSchema, { type LocaleFaq } from "@/components/i18n/LocaleSchema";
import { LOCALE_INFO, localeAlternates, localeUrl } from "@/lib/i18n/twins";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";

const PATH = "/contact"; // the ENGLISH path
const URL = localeUrl("mt", PATH);

const TITLE = "Ikkuntattja lil OARC Digital f'Malta | Ibbukkja Telefonata";
const DESCRIPTION =
  "Ikkuntattja lil OARC Digital f'Birkirkara: ċempel fuq +356 7971 1799 jew ibbukkja telefonata dwar kreattività, aġenti tal-AI, H360 jew SEO. Anke b'WhatsApp.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: localeAlternates("mt", PATH),
  openGraph: {
    images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    locale: LOCALE_INFO.mt.og,
  },
  twitter: {
    images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

// The same seven questions the English page sends to search engines, in the same order.
const FAQS: readonly LocaleFaq[] = [
  {
    question: "Kif nista' nikkuntattja lil OARC Digital?",
    answer: `Ibgħat messaġġ fuq WhatsApp jew ċempel fuq ${NAP.phoneDisplay}, ibgħat email lil ${NAP.email}, jew ejja l-uffiċċju: Level 1, The Brewhouse, Central Business District, ${NAP.addressLocality} ${NAP.postalCode}, Malta. L-uffiċċju jkun miftuħ minn 09:00 sa 18:00, mit-Tnejn sal-Ġimgħa.`,
  },
  {
    question: "Fejn jinsab l-uffiċċju ta' OARC Digital f'Malta?",
    answer: `L-uffiċċju ewlieni ta' OARC Digital jinsab f'Level 1, The Brewhouse, Central Business District, ${NAP.addressLocality} ${NAP.postalCode}, Malta. The Brewhouse jinsab fil-qalba tas-CBD, b'parkeġġ fi Triq Mikiel Anton Vassalli u 4 minuti mixi mill-interchange tal-karozzi tal-linja tas-CBD.`,
  },
  {
    question: "Kemm iddum OARC biex twieġeb it-talbiet?",
    answer:
      "It-talbiet li jaslu fil-ħin tal-uffiċċju (minn 09:00 sa 18:00, mit-Tnejn sal-Ġimgħa, ħin ta' Malta) jitwieġbu fi żmien sagħtejn tax-xogħol. Il-messaġġi li jaslu barra minn dan il-ħin jitwieġbu filgħodu fil-jum tax-xogħol ta' wara. It-telefonata ta' analiżi ta' 30 minuta normalment tiġi skedata fi żmien 48 siegħa mill-ewwel messaġġ.",
  },
  {
    question: "L-ewwel telefonata hija b'xejn?",
    answer:
      "Iva. L-ewwel konverżazzjoni hija analiżi b'xejn ta' 30 minuta. Fiha nsibu l-akbar opportunità fil-mod kif bħalissa qed iġġib il-klijenti, ngħidulek jekk OARC hix tassew is-sieħeb it-tajjeb għalik, u nispjegawlek kemm jiswa li naħdmu flimkien. M'għandek l-ebda obbligu li tkompli.",
  },
  {
    question: "X'għandi nħejji għall-ewwel telefonata?",
    answer:
      "L-għan ewlieni tan-negozju tiegħek għad-90 jum li ġejjin, kemm qed tonfoq fuq il-marketing kull xahar (ċifra bejn wieħed u ieħor biżżejjed), il-kanali li qed tuża bħalissa, u kull aċċess attiv li għandek għall-analytics (GA4, Meta, CRM). Jekk m'għandekx dawn, ġib il-mistoqsijiet tiegħek: it-telefonata tirnexxi xorta mingħajr numri.",
  },
  {
    question: "Nista' niġi l-uffiċċju mingħajr appuntament?",
    answer: `Iva: Level 1, The Brewhouse, ${NAP.addressLocality} CBD, minn 09:00 sa 18:00, mit-Tnejn sal-Ġimgħa. Nirrakkomandaw li tibbukkja minn qabel fuq ${NAP.phoneDisplay}, biex l-ispeċjalista t-tajjeb ikun fl-uffiċċju għall-proġett tiegħek.`,
  },
  {
    question: "X'inhu n-numru tat-telefon ta' OARC Digital?",
    answer: `Ċempel jew ibgħat WhatsApp fuq ${NAP.phoneDisplay} dwar kreattività, aġenti tal-AI, H360 għall-ospitalità jew SEO.`,
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            url: URL,
            inLanguage: "mt",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["[data-speakable]"],
            },
          }),
        }}
      />
      <LocaleSchema locale="mt" path={PATH} title={TITLE} description={DESCRIPTION} faqs={FAQS} />
      <PageContent />
    </>
  );
}
