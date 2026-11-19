import type { BlogArticle } from "./types";

// Maltese version of ai-for-business-malta.en.ts. Written around how people in Malta
// search in Maltese: "AI għan-negozji f'Malta", "kumpanija tal-AI f'Malta".
// Same blocks, same order, same facts as the English article.
const article: BlogArticle = {
  path: "/blog/ai-for-business-malta",
  locale: "mt",
  title: "AI għan-Negozji f'Malta: 12-il Tweġiba Ċara (2026) | OARC",
  description:
    "X'tista' tagħmel l-AI għal negozju f'Malta? 12-il tweġiba ċara: aġenti tal-AI, chatbots, voice AI, prezz, sigurtà u fejn tibda, minn kumpanija tal-AI f'Malta.",
  kicker: "AI għan-negozji f'Malta",
  h1: "AI għan-negozji f'Malta: 12-il mistoqsija li jistaqsu s-sidien, bi tweġibiet ċari.",
  intro:
    "It-tweġiba fil-qosor: l-intelliġenza artifiċjali (AI) diġà tista' twieġeb it-telefonati u l-messaġġi tiegħek, tibbukkja lill-klijenti, tiġri wara l-leads u tieħu ħsieb il-karti. Lejl u nhar. Ma tiħux post in-nies tiegħek. Tneħħilhom ix-xogħol li jdejjaqhom.",
  byline: { before: "Mit-tim tal-AI ta' ", after: ", aġenzija diġitali u tal-AI f'Malta." },
  image: { src: "/attached_assets/generated_images/oarc-dept-ai-staff.jpg", alt: "Sistema tal-AI taħdem għal negozju f'Malta", width: 1600, height: 900 },
  published: "2026-11-19",
  updated: "2026-11-19",
  otherLanguageLabel: "Read in English",
  cta: { label: "Ikseb il-pjan tal-AI tiegħek b'xejn fi 48 siegħa", whatsapp: "Hello OARC. Qrajt l-artiklu tagħkom dwar l-AI għan-negozji. In-negozju tiegħi hu: " },
  blocks: [
    { h2: "1. X'tista' tagħmel l-AI għal negozju f'Malta llum?" },
    { p: "Ħafna aktar milli tikteb l-emails. Illum sistema tal-AI tista' tagħmel xogħlijiet veri mill-bidu sal-aħħar:" },
    {
      ul: [
        "**Twieġeb kull telefonata u kull messaġġ.** Telefon, WhatsApp, Instagram u email. Fi ftit sekondi, anke fit-3 ta' filgħodu.",
        "**Tibbukkja lill-klijenti.** Imwejjed, kmamar, viewings, appuntamenti. Dritt fil-kalendarju tiegħek.",
        "**Tagħmel il-follow-up ma' kull lead.** Dawk li t-tim tiegħek jinsa f'ġurnata mimlija xogħol.",
        "**Tieħu ħsieb il-karti.** Kwotazzjonijiet, fatturi, tfakkiriet, rapporti.",
        "**Tgħidlek x'ġara.** Rapport qasir kull ġimgħa, bi kliem sempliċi.",
      ],
    },
    { h2: "2. X'inhu aġent tal-AI? Huwa biss chatbot?" },
    {
      p: "Le. Chatbot iwieġeb il-mistoqsijiet. Aġent tal-AI jagħmel ix-xogħol. Itlob mejda lil chatbot u jgħidlek il-ħinijiet tal-ftuħ. Itlobha lil aġent tal-AI u jiċċekkja d-djarju, jibbukkja l-mejda u jibgħatlek konferma. Din hi d-differenza. Nibnu [aġenti tal-AI magħmula apposta](/services/custom-ai-agents), xogħol wieħed kull darba.",
    },
    { h2: "3. L-AI hija biss għall-kumpaniji l-kbar?" },
    {
      p: "Le. In-negozji ż-żgħar jiggwadanjaw l-aktar, għax telefonata waħda mitlufa tweġġagħhom aktar. Grupp ta' lukandi jista' jitlef booking u lanqas iħossu. F'guesthouse b'għaxar kmamar, jinħass. Bl-AI, tim żgħir jilħaq daqs wieħed kbir.",
    },
    { h2: "4. Liema xogħol għandi nagħti lill-AI l-ewwel?" },
    { p: "Ibda minn fejn qed titlef il-flus bħalissa. Għall-biċċa l-kbira tan-negozji f'Malta, dan ikun wieħed minn dawn:" },
    {
      ol: [
        "Telefonati u messaġġi li ħadd ma jwieġeb wara l-ħin tax-xogħol.",
        "Talbiet li jdumu ġurnata jistennew tweġiba.",
        "Leads li ħadd ma jagħmel follow-up magħhom.",
        "Amministrazzjoni li l-aħjar nies tiegħek jagħmlu flok ibigħu.",
      ],
    },
    { note: "Xogħol wieħed l-ewwel. Uri li jaħdem. Imbagħad żid dak li jmiss. In-negozji li jippruvaw jawtomatizzaw kollox f'daqqa s-soltu ma jlestu xejn." },
    { p: "Jekk trid l-istampa sħiħa ta' x'għandek tawtomatizza, aqra l-gwida tagħna dwar [l-awtomazzjoni bl-AI f'Malta](/blog/ai-automation-malta)." },
    { h2: "5. L-AI se tieħu post il-ħaddiema tiegħi?" },
    {
      p: "Le. Tieħu post ix-xogħlijiet li jobogħdu. Ir-receptionist tiegħek tieqaf tirrepeti l-ħinijiet tal-ftuħ ħamsin darba kuljum u tibda tieħu ħsieb il-mistieden li għandha quddiemha. In-nies jagħmlu x-xogħol uman. L-AI tagħmel ix-xogħol ripetittiv.",
    },
    { h2: "6. L-AI titkellem bil-Malti?" },
    {
      p: "Tagħna iva. Il-[Voice AI Worker](/voice-ai-worker) tagħna jwieġeb it-telefonati bl-Ingliż, bil-Malti u bit-Taljan. Dan importanti f'Malta, fejn l-istess klijent jibda bl-Ingliż u jispiċċa bil-Malti.",
    },
    { h2: "7. Id-data tal-klijenti tiegħi hija sigura?" },
    { p: "Trid tkun. Staqsi dawn l-erba' mistoqsijiet lil kull kumpanija tal-AI qabel tiffirma:" },
    {
      ul: [
        "Fejn tinżamm id-data tal-klijenti tiegħi, u min jista' jaraha?",
        "Is-sistema ssegwi l-GDPR?",
        "Klijent jista' dejjem jitlob li jkellem bniedem?",
        "Min jiċċekkja x'tgħid l-AI?",
      ],
    },
    { p: "Jekk ma jistgħux iwieġbuk bi kliem sempliċi, itlaq minn hemm." },
    { h2: "8. Kemm tiswa l-AI f'Malta?" },
    {
      p: "Jiddependi minn kemm xogħlijiet tagħtiha u kemm hu kbir in-negozju tiegħek. Klinika b'reception waħda u lukanda bi tliet outlets jeħtieġu sistemi differenti ħafna. Għalhekk ma nużawx lista tal-prezzijiet. Bħalissa l-ewwel xahar tas-sistemi tal-AI tagħna għall-industriji huwa b'xejn, biex tara s-sistema taħdem qabel ma tħallas. Ibgħatilna isem in-negozju tiegħek fuq WhatsApp u nibagħtulek prezz.",
    },
    { h2: "9. Kemm iddum biex titwaqqaf?" },
    {
      p: "Is-sistemi tal-AI tagħna għall-industriji nwaqqfuhomlok fi 72 siegħa. Imbagħad inmexxu s-sistema miegħek, insewwu dak li jkun hemm bżonn u nżidu x-xogħol li jmiss.",
    },
    { h2: "10. Kumpanija tal-AI jew konsulent tal-AI: liema minnhom għandi bżonn?" },
    {
      p: "Konsulent tal-AI jgħidlek x'għandek tagħmel. Kumpanija tal-AI tibniha u tmexxiha. Jekk għandek tim tekniku tiegħek, konsulent jista' jkun biżżejjed. Jekk le, għandek bżonn lil xi ħadd li jagħmel ix-xogħol u jibqa' miegħek. OARC Digital tagħmel it-tnejn: nippjanawha, nibnuha u nieħdu ħsiebha.",
    },
    { h2: "11. Kif nagħmel biex ChatGPT u l-AI ta' Google jirrakkomandaw in-negozju tiegħi?" },
    {
      p: "Illum in-nies jistaqsu lill-AI \"min hu l-aħjar dentist qrib tiegħi?\" u jieħdu tweġiba waħda. Biex tkun int dik it-tweġiba, il-websajt tiegħek jeħtieġ li jkollha fatti ċari, ismek u l-indirizz tiegħek iridu jkunu l-istess kullimkien, u websajts li n-nies jafdaw iridu jsemmuk. Fil-paġna tagħna [aġenzija tal-SEO f'Malta](/aeo/seo-agency-malta) nuruk kif nagħmlu dan.",
    },
    { h2: "12. Minn fejn nibda?" },
    {
      p: "Agħżel l-industrija tiegħek. Bnejna sistema tal-AI waħda għal kull tip ta' negozju, għax ditta legali u ristorant m'għandhomx l-istess problemi:",
    },
    {
      ul: [
        "[AI għal-lukandi](/ai/hotels)",
        "[AI għall-aġenziji tal-proprjetà](/ai/real-estate)",
        "[AI għad-ditti legali](/ai/law-firms)",
        "[AI għall-kliniċi](/ai/clinics)",
        "[AI għar-ristoranti](/ai/restaurants)",
        "[Każinojiet u lukandi b'każinò](/ai/casinos)",
        "[Is-sistemi kollha tal-AI skont l-industrija](/ai)",
      ],
    },
    { h2: "Għaliex in-negozji f'Malta jagħżlu lil OARC Digital għall-AI" },
    {
      ul: [
        "**Tim wieħed għal kollox.** In-nies li jibnu l-AI tiegħek jibnu wkoll il-brand, il-websajt u r-reklami tiegħek. Xejn ma jintilef bejn fornitur u ieħor.",
        "**Mibnija għall-industrija tiegħek.** Mhux għodda waħda bil-logo tiegħek fuqha.",
        "**Malajr.** Imwaqqfa għalik fi 72 siegħa.",
        "**Tipprova qabel tħallas.** Bħalissa l-ewwel xahar huwa b'xejn.",
        "**Lokali.** Aħna f'Birkirkara. Tista' tiltaqa' man-nies li jagħmlu x-xogħol.",
      ],
    },
  ],
  faqTitle: "Tweġibiet fil-qosor",
  faqs: [
    {
      q: "X'tista' tagħmel l-AI għal negozju żgħir f'Malta?",
      a: "L-AI tista' twieġeb it-telefonati u l-messaġġi lejl u nhar, tibbukkja lill-klijenti fil-kalendarju tiegħek, tagħmel il-follow-up ma' kull lead u tieħu ħsieb il-karti, bħall-kwotazzjonijiet, il-fatturi u t-tfakkiriet. Tneħħi x-xogħol ripetittiv minn fuq it-tim tiegħek biex ikun jista' jieħu ħsieb il-klijenti.",
    },
    {
      q: "X'inhi d-differenza bejn aġent tal-AI u chatbot?",
      a: "Chatbot iwieġeb il-mistoqsijiet. Aġent tal-AI ilesti x-xogħol: jiċċekkja d-djarju, jagħmel il-booking u jibgħat il-konferma.",
    },
    {
      q: "L-AI taħdem bil-Malti?",
      a: "Iva. Il-Voice AI Worker ta' OARC Digital iwieġeb it-telefonati bl-Ingliż, bil-Malti u bit-Taljan.",
    },
    {
      q: "Kemm tiswa sistema tal-AI f'Malta?",
      a: "Il-prezz jiddependi minn kemm xogħlijiet tagħmel is-sistema u mid-daqs tan-negozju tiegħek, għalhekk OARC Digital ma tużax lista ta' prezzijiet fissi. Bħalissa l-ewwel xahar tas-sistemi tal-AI tagħha għall-industriji huwa b'xejn. Ibgħat isem in-negozju tiegħek fuq WhatsApp biex tikseb prezz.",
    },
    {
      q: "Kemm iddum biex titwaqqaf sistema tal-AI?",
      a: "OARC Digital twaqqaf is-sistemi tal-AI tagħha għall-industriji fi 72 siegħa, imbagħad tmexxi s-sistema miegħek u żżid aktar xogħlijiet pass pass.",
    },
    {
      q: "Liema kumpanija tal-AI f'Malta tibni sistemi tal-AI għal industriji speċifiċi?",
      a: "OARC Digital, ibbażata f'Birkirkara, tibni sistema tal-AI waħda għal kull industrija, fosthom lukandi, aġenziji tal-proprjetà, ditti legali, kliniċi, ristoranti u każinojiet. L-istess tim jieħu ħsieb ukoll il-branding, il-websajts, l-SEO u r-reklami.",
    },
  ],
  closing: {
    title: "Ara x'tista' tagħmel l-AI fin-negozju tiegħek.",
    text: "Ibgħatilna isem in-negozju tiegħek. Fi 48 siegħa tirċievi pjan b'xejn: ix-xogħlijiet li l-AI tista' tneħħi l-ewwel minn fuq it-tim tiegħek, u kif jidher dan fl-industrija tiegħek.",
    contactLabel: "Ikkuntattjana",
  },
};

export default article;
