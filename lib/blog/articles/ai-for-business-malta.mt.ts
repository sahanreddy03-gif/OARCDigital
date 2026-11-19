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
    "It-tweġiba fil-qosor: l-intelliġenza artifiċjali (AI) diġà tista' twieġeb it-telefonati u l-messaġġi tiegħek, tibbukkja lill-klijenti, tiġri wara l-leads u tieħu ħsieb ix-xogħol tal-karti. Lejl u nhar. Nafu, għax aħna nibnuha: l-AI tagħna tiffranka lill-aġenti ta' klijent tagħna fis-settur tal-proprjetà 30 minuta f'kull ewwel telefonata. Ma tiħux post in-nies tiegħek. Tneħħilhom ix-xogħol li jdejjaqhom.",
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
        "**Tieħu ħsieb ix-xogħol tal-karti.** Kwotazzjonijiet, fatturi, tfakkiriet, rapporti.",
        "**Tgħidlek x'ġara.** Rapport qasir kull ġimgħa, bi kliem sempliċi.",
      ],
    },
    { h2: "2. X'inhu aġent tal-AI? Huwa biss chatbot?" },
    {
      p: "Le. Chatbot iwieġeb il-mistoqsijiet. Aġent tal-AI jagħmel ix-xogħol. Itlob mejda lil chatbot u jgħidlek il-ħinijiet tal-ftuħ. Itlobha lil aġent tal-AI u jiċċekkja d-djarju, jibbukkja l-mejda u jibgħatlek konferma. Din hi d-differenza. Nibnu [aġenti tal-AI magħmulin apposta](/services/custom-ai-agents), xogħol wieħed kull darba.",
    },
    { h2: "3. L-AI hija biss għall-kumpaniji l-kbar?" },
    {
      p: "Le. In-negozji ż-żgħar jiggwadanjaw l-aktar, għax telefonata waħda mitlufa tweġġagħhom aktar. Grupp ta' lukandi jista' jitlef booking u lanqas iħossu. F'guesthouse b'għaxar kmamar, jinħass. Bl-AI, tim żgħir jasal fejn jasal tim kbir.",
    },
    { h2: "4. Liema xogħol għandi nagħti lill-AI l-ewwel?" },
    { p: "Ibda minn fejn qed titlef il-flus bħalissa. Għall-biċċa l-kbira tan-negozji f'Malta, dan ikun wieħed minn dawn:" },
    {
      ol: [
        "Telefonati u messaġġi li ħadd ma jwieġibhom wara l-ħin tax-xogħol.",
        "Talbiet li jdumu ġurnata jistennew tweġiba.",
        "Leads li ħadd ma jagħmel follow-up magħhom.",
        "Xogħol amministrattiv li jagħmlu l-aħjar nies tiegħek minflok ma jbigħu.",
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
      p: "Illum in-nies jistaqsu lill-AI \"min hu l-aħjar dentist qrib tiegħi?\" u jieħdu tweġiba waħda. Biex tkun int dik it-tweġiba, il-websajt tiegħek trid ikollha fatti ċari, ismek u l-indirizz tiegħek iridu jkunu l-istess kullimkien, u websajts li n-nies jafdawhom iridu jsemmuk. Fil-paġna tagħna [aġenzija tal-SEO f'Malta](/aeo/seo-agency-malta) nuruk kif nagħmlu dan.",
    },
    { h2: "12. Minn fejn nibda?" },
    {
      p: "Agħżel l-industrija tiegħek. Bnejna sistema tal-AI waħda għal kull tip ta' negozju, għax ditta legali u ristorant m'għandhomx l-istess problemi:",
    },
    {
      ul: [
        "[AI għall-lukandi](/ai/hotels)",
        "[AI għall-aġenziji tal-proprjetà](/ai/real-estate)",
        "[AI għad-ditti legali](/ai/law-firms)",
        "[AI għall-kliniċi](/ai/clinics)",
        "[AI għar-ristoranti](/ai/restaurants)",
        "[Każinojiet u lukandi b'każinò](/ai/casinos)",
        "[Is-sistemi kollha tal-AI skont l-industrija](/ai)",
      ],
    },
    { h2: "AI li diġà bnejna: riżultati veri ta' klijenti" },
    {
      p: "Din mhix teorija. Dawn huma sistemi tal-AI u apps li t-tim tagħna bena u jmexxi għal klijenti f'Malta u barra minn Malta. Kull waħda bdiet b'xogħol wieħed li kien qed itellef il-flus lin-negozju.",
    },
    { h3: "Proprjetà: Skyline" },
    {
      p: "Ix-xerrejja kienu jistaqsu l-istess mistoqsijiet, u l-aġenti kienu jibdew l-ewwel telefonata mingħajr ma jafu xejn. Għal Skyline bnejna app tat-talbiet li tistaqsi lil kull xerrej ftit mistoqsijiet intelliġenti u tagħti lill-aġent sommarju lest. Illum l-aġenti jiffrankaw 30 minuta f'kull ewwel telefonata, ix-xerrejja jistaqsu 40% inqas mistoqsijiet ripetuti, u 80% aktar talbiet jaslu lesti għal telefonata personali.",
    },
    { h3: "Servizz lill-klijenti: Meridian" },
    {
      p: "Il-mistoqsijiet kienu jidħlu minn kullimkien u jintilfu bejn persuna u oħra. Għal Meridian bnejna post wieħed għal kull mistoqsija tal-klijenti: kull waħda tiġi kklassifikata u tintbagħat lill-persuna t-tajba, bl-istorja kollha magħha. Il-klijenti mitlufin bejn persuna u oħra naqsu b'45%, u l-ħin biex klijent jasal għall-azzjoni t-tajba naqas bin-nofs.",
    },
    { h3: "Xogħol tal-karti: Aurum u Belgrave" },
    {
      p: "Għal Aurum bnejna app tad-dokumenti li ssib it-tweġibiet malajr u torbot kull dettall importanti mal-paġna li ġie minnha: il-ħin tar-reviżjoni manwali tad-dokumenti naqas b'40% u t-timijiet jiffrankaw 10 sigħat fil-ġimgħa. Għal Belgrave bnejna mill-ġdid il-mod kif it-tim jipprepara għat-talbiet tal-klijenti: 90% tat-talbiet issa jaslu għand il-persuna t-tajba mill-ewwel darba, u t-tim jiffranka 10 sigħat fil-ġimgħa.",
    },
    {
      stats: [
        { value: "30 min", label: "Iffrankati f'kull ewwel telefonata", client: "Skyline", href: "/our-work/skyline-first-response" },
        { value: "-45%", label: "Klijenti mitlufin bejn persuna u oħra", client: "Meridian", href: "/our-work/meridian-retail-response" },
        { value: "-40%", label: "Ħin ta' reviżjoni manwali tad-dokumenti", client: "Aurum", href: "/our-work/aurum-document-trail" },
        { value: "10 hrs", label: "Iffrankati kull ġimgħa fit-tħejjija għat-talbiet tal-klijenti", client: "Belgrave", href: "/our-work/belgrave-client-time" },
        { value: "90%", label: "Tat-talbiet tal-klijenti jaslu għand il-persuna t-tajba mill-ewwel", client: "Belgrave", href: "/our-work/belgrave-client-time" },
        { value: "-40%", label: "Stennija tal-kandidati għall-ewwel tweġiba", client: "Bluebridge", href: "/our-work/bluebridge-candidate-welcome" },
      ],
    },
    { h3: "L-AI f'kumpanija sħiħa: Northforge" },
    {
      p: "Northforge kellha testijiet tal-AI mxerrda fit-timijiet kollha, u ħadd ma kien responsabbli minnhom. Biddilnihom f'mod wieħed ta' ħidma li jista' jiġi ripetut, u tajna lil kull proġett tal-AI bniedem responsabbli u reviżjoni. Il-ħin biex jittieħdu deċiżjonijiet fuq it-testijiet tal-AI naqas b'30%, u l-proġetti mibgħuta lura għar-reviżjoni naqsu b'50%.",
    },
    { h2: "X'jgħidu l-klijenti tal-AI tagħna" },
    {
      quote: {
        text: "They looked at our work first. That was good because we did not need a random AI tool added to the business.",
        credit: "Francesco — Casumo",
        lang: "en",
      },
    },
    {
      quote: {
        text: "We were missing calls when everyone was busy. Tom helped answer the basic questions and pass the important ones to us.",
        credit: "Jonathan — Apex Dental",
        lang: "en",
      },
    },
    {
      quote: {
        text: "Simple questions could be handled quicker, and the more difficult ones still went to a person.",
        credit: "Samuel — Chief Executive Officer, IBB Hotels Collection",
        lang: "en",
      },
    },
    {
      quote: {
        text: "We had a lot of ideas about AI and did not know which ones were useful. OARC helped us choose where to start.",
        credit: "Daniel — Director, Excel Homes Real Estate",
        lang: "en",
      },
    },
    { h2: "Għaliex in-negozji jagħżlu lil OARC Digital għall-AI" },
    {
      ul: [
        "**Ippruvati fil-prattika.** Sistemi tal-AI u apps li diġà qed jaħdmu għal klijenti li nsemmuhom b'isimhom, b'riżultati li tista' taqra fuq il-[paġna tax-xogħol tagħna](/our-work).",
        "**Tim wieħed għal kollox.** In-nies li jibnu l-AI tiegħek jibnu wkoll il-brand, il-websajt u r-reklami tiegħek. 8 dipartimenti, u xejn ma jintilef bejn fornitur u ieħor.",
        "**Mibnija għall-industrija tiegħek.** Mhux għodda waħda bil-logo tiegħek fuqha.",
        "**Malajr.** Is-sistemi tal-AI għall-industriji jitwaqqfu għalik fi 72 siegħa.",
        "**Tipprova qabel tħallas.** Bħalissa l-ewwel xahar huwa b'xejn.",
        "**Titkellem bil-lingwa tal-klijenti tiegħek.** Bl-Ingliż, bil-Malti u bit-Taljan.",
        "**Ismijiet kbar jafdawna.** Casumo, IBB Hotels Collection, Ganado Advocates u Excel Homes Real Estate ħadmu magħna fuq l-AI.",
      ],
    },
    { note: "In-negozji li jirbħu l-ħames snin li ġejjin mhux se jkunu l-akbar. Se jkunu dawk li l-AI tagħhom twieġeb l-ewwel." },
  ],
  faqTitle: "Tweġibiet fil-qosor",
  faqs: [
    {
      q: "X'tista' tagħmel l-AI għal negozju żgħir f'Malta?",
      a: "L-AI tista' twieġeb it-telefonati u l-messaġġi lejl u nhar, tibbukkja lill-klijenti fil-kalendarju tiegħek, tagħmel il-follow-up ma' kull lead u tieħu ħsieb ix-xogħol tal-karti, bħal kwotazzjonijiet, fatturi u tfakkiriet. Tneħħi x-xogħol ripetittiv minn fuq it-tim tiegħek biex ikun jista' jieħu ħsieb il-klijenti.",
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
    {
      q: "OARC Digital bniet l-AI għal negozji veri?",
      a: "Iva. OARC Digital bniet app tat-talbiet li tiffranka lill-aġenti tal-proprjetà ta' Skyline 30 minuta f'kull ewwel telefonata, app tas-servizz lill-klijenti li għal Meridian naqqset b'45% il-klijenti li jintilfu bejn persuna u oħra, u app tad-dokumenti li tiffranka lit-timijiet ta' Aurum 10 sigħat fil-ġimgħa.",
    },
  ],
  closing: {
    title: "Ara x'tista' tagħmel l-AI fin-negozju tiegħek.",
    text: "Ibgħatilna isem in-negozju tiegħek. Fi 48 siegħa tirċievi pjan b'xejn: ix-xogħlijiet li l-AI tista' tneħħi l-ewwel minn fuq it-tim tiegħek, u kif jidher dan fl-industrija tiegħek.",
    contactLabel: "Ikkuntattjana",
  },
};

export default article;
