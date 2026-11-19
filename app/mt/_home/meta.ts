// Title, description and the 8 schema questions of the Maltese home.
// The questions mirror the English home (lib/seo/pillarSchemaConfig.ts, entry "/").
import { NAP } from "@/lib/seo/nap";

export const TITLE = "Aġenzija tal-Marketing f'Malta | Diġitali u AI | OARC Digital";
export const DESCRIPTION =
  "OARC Digital hija aġenzija tal-marketing f'Malta, ibbażata f'Birkirkara: studjo kreattiv, SEO u reklami, aġenti tal-AI u awtomazzjoni. Tim wieħed in-house.";

const OFFICE = `Level 1, The Brewhouse, Central Business District, ${NAP.addressLocality} ${NAP.postalCode}, Malta`;

export const faqs = [
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
    answer: `It-tnejn. L-aġenti tal-AI u l-Voice AI Worker jaħdmu spalla ma' spalla mal-kreattività editorjali, il-ġestjoni tas-social media, l-SEO u r-reklami mħallsa. Ibda minn fejn qed titlef il-flus: telefonati mitlufa, brand dgħajjef, tfittxijiet fejn ma jsibukx, jew follow-up li jsir bl-idejn. Imbagħad ikber mal-istess tim f'${NAP.addressLocality}.`,
  },
  {
    question: "X'jagħmel lil OARC differenti minn aġenziji oħra f'Malta?",
    answer: "L-AI ilha magħna mill-bidu. Ma żidnihiex wara. Id-direzzjoni kreattiva hija umana, u l-produzzjoni għandha l-veloċità tal-AI. L-aġenti tal-AI jieħdu ħsieb xogħol reali, u l-awtomazzjoni ddaħħal il-leads fis-CRM tiegħek. Il-prezz huwa marbut mar-riżultati, mhux ma' ħlas fiss ta' kull xahar li jidher sabiħ biss. U l-istess tim li jiddisinja l-brand tiegħek jikteb ukoll is-sistemi li jħaddmuh.",
  },
  {
    question: "Ma' liema industriji taħdem OARC Digital f'Malta?",
    answer: "F'Malta, l-oqsma tagħna l-aktar b'saħħithom huma l-ospitalità (ristoranti, lukandi, bars), l-iGaming u l-fintech (regolati mill-MGA / MFSA), is-servizzi professjonali (legali, kontabilità, konsulenza), il-kliniċi u s-SaaS li qed jikber malajr. F'kull xogħol regolat inżommu f'moħħna l-MFSA, l-MGA u l-IDPC.",
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
