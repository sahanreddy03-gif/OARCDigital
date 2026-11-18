import type { AiSystemContent } from "@/lib/ai-systems/types";

// Maltese twin of lib/ai-systems/law-firms.ts. Same structure, numbers, icons and sources.
const lawFirms: AiSystemContent = {
  slug: "law-firms",
  name: "Ditti legali",
  barLabel: "AI għad-ditti legali",
  business: "ditta legali",
  metaTitle: "Sistema tal-AI għad-Ditti Legali f'Malta | OARC Digital",
  metaDescription:
    "Is-sistema tal-AI għad-ditti legali f'Malta, mibnija madwar id-ditta tiegħek. Tiffajlja kull dokument, issegwi kull skadenza u tħejji l-abbozzi. Int tapprova.",
  updated: "2026-11-14",
  serviceType: "Sistema tal-AI u awtomazzjoni legali għad-ditti legali",
  schemaDescription:
    "Sistema tal-intelliġenza artifiċjali (AI) mibnija madwar kull ditta legali f'Malta. Twieġeb lill-klijenti ġodda 24/7, tagħmel il-verifiki fuq il-klijenti, tirċievi u tiffajlja kull dokument, issegwi l-iskadenzi tal-qorti, tal-permessi u tas-sottomissjonijiet, tabbozza mit-templates tad-ditta stess, tħejji applikazzjonijiet għal permessi, sottomissjonijiet tal-kumpaniji u denunzji tal-VAT u tat-taxxa, tirreġistra l-ħin u toħroġ il-kontijiet. Avukat bil-warrant japprova kollox. Imwaqqfa u mmexxija mit-tim ta' OARC Digital f'Malta.",
  hub: {
    title: "Ditti legali",
    body: "Kull dokument tal-klijenti ffajljat. Kull skadenza segwita. L-ewwel abbozzi bi kliem id-ditta tiegħek. Avukat japprova.",
    gain: "Permessi, kumpaniji, proprjetà, taxxa u tilwim",
  },

  proof: { line: "Qed taħdem f'10 ditti legali u tal-kontabilità f'Malta", short: "F'10 ditti f'Malta" },
  lightAreas: true,

  hero: {
    pill: "Inwaqqfuha għalik fi 72 siegħa",
    kicker: "Fl-aħħar, għandek",
    h1Before: "Sistema sħiħa tal-AI mibnija madwar",
    h1Highlight: "id-ditta legali tiegħek.",
    sub: "Aġenti tal-intelliġenza artifiċjali (AI) imħarrġa fuq id-ditta tiegħek iwieġbu lill-klijenti ġodda, jiġbru kull dokument u jżommu għajnejhom fuq kull skadenza. Is-sistema tabbozza mit-templates tiegħek u tirreġistra l-ħin tiegħek. Xejn ma joħroġ mid-ditta mingħajr l-iva ta' avukat.",
    primaryCta: "Ikseb ix-xahar b'xejn tiegħek",
    secondaryCta: "Ibbukkja telefonata ta' 20 minuta",
    note: "L-ewwel xahar b'xejn. Imwaqqfa u mmexxija mit-tim ta' OARC f'Malta.",
  },

  film: {
    title: "Ara klijent wieħed, mill-ewwel messaġġ sal-approvazzjoni tiegħek",
    scenes: [
      {
        clock: "It-Tlieta · 21:42",
        caption: "Klijent ġdid jikteb. L-uffiċċju tiegħek magħluq.",
        result: "Imwieġeb f'40 sekonda",
        visual: {
          type: "chat",
          initials: "RS",
          name: "Rafael S.",
          origin: "WhatsApp · klijent ġdid",
          status: "Imwieġeb",
          messages: [
            { from: "in", text: "Bonswa, għandi bżonn għajnuna biex inġedded il-permess tax-xogħol tiegħi. Jiskadi f'April.", time: "21:42" },
            { from: "out", text: "Bonswa Rafael. Nistgħu ngħinuk. Huwa l-istess xogħol u l-istess employer li hemm fuq il-permess tiegħek?", time: "21:42" },
            { from: "in", text: "Iva, l-istess xogħol, ma' Camilleri Trading.", time: "21:44" },
          ],
          done: { before: "Fajl miftuħ · ", strong: "ebda kunflitt ta' interess", after: " · link għad-dokumenti mibgħut" },
        },
      },
      {
        clock: "It-Tlieta · 21:47",
        caption: "Jibgħat id-dokumenti mill-mowbajl. Kull wieħed jinqara, jingħata isem u jiġi ffajljat.",
        result: "Ħadd ma kellu jiġri warajh",
        visual: {
          type: "rows",
          title: "R. Santos · tiġdid tal-permess tax-xogħol",
          hint: "Imtellgħa llum, 21:47",
          action: "tag",
          rows: [
            { badge: "PDF", title: "Passaport", detail: "Validu sal-2031. L-isem jaqbel mal-kuntratt.", tag: "Iffajljat" },
            { badge: "PDF", title: "Kuntratt tax-xogħol", detail: "Iffirmat miż-żewġ naħat. Is-salarju u s-sigħat inqraw.", tag: "Iffajljat" },
            { badge: "JPG", top: true, title: "Kuntratt tal-kera", detail: "Ir-ritratt skur wisq biex jinqara. Il-klijent intalab jibgħat ieħor.", tag: "Mitlub mill-ġdid" },
          ],
        },
      },
      {
        clock: "L-Erbgħa · 08:41",
        caption: "Taqraha. Tapprovaha. Imbagħad biss tintbagħat.",
        result: "Xejn ma joħroġ mingħajr l-iva ta' avukat",
        visual: {
          type: "timeline",
          title: "Tiġdid tal-permess tax-xogħol · R. Santos",
          subtitle: "Il-permess jiskadi fit-30 ta' April 2027",
          steps: [
            { when: "08:41", title: "Dr Anna tapprova l-applikazzjoni", detail: "Żewġ bidliet żgħar. It-tnejn irreġistrati.", key: true, tag: "Approvata minn avukat" },
            { when: "08:42", title: "Mibgħuta", detail: "Il-klijent infurmat fl-istess minuta, bil-Portugiż." },
            { when: "08:42", title: "L-iskadenza li jmiss imniżżla", detail: "It-tiġdid li jmiss diġà qiegħed fid-djarju." },
          ],
        },
      },
    ],
  },

  dashboard: {
    title: "Id-ditta kollha tiegħek fuq skrin wieħed.",
    body: "Kull filgħodu: x'ġie ffajljat matul il-lejl, x'inhu dovut, u x'qed jistenna l-firma tiegħek.",
    org: "Id-Ditta Tiegħek",
    search: "Staqsi kwalunkwe ħaġa… “Liema permessi jiskadu qabel Ġunju?”",
    initials: "AB",
    nav: [
      { label: "Illum" }, { label: "Klijenti ġodda", badge: "6" }, { label: "Każijiet" }, { label: "Dokumenti" },
      { label: "Skadenzi" }, { label: "Abbozzi" }, { label: "Ħin u kontijiet" }, { label: "Rapporti" },
    ],
    greeting: "Bonġu, Anna",
    status: "Qed taħdem · kollox iffajljat matul il-lejl",
    kpis: [
      { label: "Dokumenti ffajljati matul il-lejl", value: "126", note: "Bl-isem, issortjati, marbuta" },
      { label: "Skadenzi fl-14-il jum li ġejjin", value: "9", note: "Kollha assenjati" },
      { label: "Abbozzi jistennewk", value: "5", note: "Lesti għar-reviżjoni" },
      { label: "Ħin mhux iffatturat", value: "€4,300", note: "3 fatturi abbozzati", alert: true },
    ],
    todoTitle: "Jeħtiġuk illum",
    todos: [
      { initials: "RS", title: "Permess tax-xogħol se jiskadi · R. Santos", detail: "Il-pakkett tat-tiġdid lest. Dokument wieħed nieqes, il-klijent intalab.", tag: "Irrevedi", on: true },
      { initials: "BH", title: "Klijent ġdid · Borg Holdings Ltd", detail: "Il-verifiki tal-identità u tal-kumpanija saru. L-ittra ta' ingaġġ abbozzata.", tag: "Iffirma" },
      { initials: "BV", title: "Qorti · Ħam 09:30 · Borg vs Vella", detail: "Ġabra ta' dokumenti mibnija minn 214-il email u 38 dokument.", tag: "Lesta" },
      { initials: "CT", title: "Denunzja tal-VAT · Camilleri Trading", detail: "Iċ-ċifri meħuda mill-fatturi. Dovuta fi 6 ijiem.", tag: "Iċċekkja" },
    ],
    chartTitle: "Sigħat irreġistrati din il-ġimgħa",
    bars: [
      { label: "Tne", h: 62 }, { label: "Tli", h: 74 }, { label: "Erb", h: 58 }, { label: "Ħam", h: 86 }, { label: "Ġim", h: 100 },
    ],
    chartFoot: { label: "Maqbuda mingħajr timesheet", value: "31 siegħa" },
    chatFloat: {
      channel: "WhatsApp · klijent ġdid",
      time: "21:42",
      incoming: "Bonswa, għandi bżonn għajnuna biex inġedded il-permess tax-xogħol tiegħi. Jiskadi x-xahar id-dieħel.",
      reply: "Nista' niftaħ il-fajl tiegħek illum. Jekk jogħġbok ibgħat ritratt tal-karta tar-residenza u tal-kuntratt tiegħek.",
      receipt: "Imwieġeb f'40 sek · fajl miftuħ",
    },
    alertFloat: {
      label: "Għassa tal-Iskadenzi · issa",
      title: "Risposta dovuta fi 6 ijiem",
      detail: "Borg vs Vella. L-abbozz lest biex Dr Anna tirrevedih.",
      tag: "Abbozz lest",
    },
  },

  worksWith: ["Outlook u Gmail", "WhatsApp", "Word u Excel", "SharePoint u OneDrive", "Is-software tad-ditta tiegħek", "Is-software tal-kontijiet tiegħek", "Fajls tal-karta skennjati", "Telefonati"],

  pillars: {
    label: "Mibnija madwar id-ditta tiegħek",
    title: "Id-ditta tiegħek. Il-fajls tiegħek. Il-mod kif taħdem int.",
    items: [
      { icon: "folder", title: "Kull fajl f'post wieħed", body: "Emails, kuntratti, karti tal-qorti, skens u ritratti minn WhatsApp. Issortjati skont il-klijent u l-każ, u jinstabu f'sekondi." },
      { icon: "workflow", title: "Taħdem ġol-għodod li diġà tuża", body: "L-avukati tiegħek jibqgħu f'Outlook, Word u s-software li jafu. Is-sistema taħdem fl-isfond." },
      { icon: "scale", title: "Dejjem jiffirma avukat", body: "Is-sistema tħejji. Int tiddeċiedi. Xejn ma jmur għand klijent, qorti jew awtorità mingħajr l-iva ta' avukat." },
    ],
  },

  agents: {
    label: "Ir-reception tal-AI tiegħek",
    title: "Tliet aġenti tal-AI. Imħarrġa fuq id-ditta tiegħek. Lanqas kelma ta' parir legali.",
    intro: "Jiċċettjaw fuq WhatsApp u bl-email, u jċemplu. Kull wieħed jaf is-servizzi tiegħek, it-tariffi tiegħek u kif titkellem id-ditta tiegħek. Il-liġi tibqa' f'idejn l-avukati tiegħek.",
    note: "Jiġbru, ifakkru u jibbukkjaw. Qatt ma jagħtu parir. Avukat jista' jidħol fi kwalunkwe chat jew telefonata.",
    items: [
      {
        name: "Aġent tal-ewwel kuntatt",
        title: "Iwieġeb lil kull klijent ġdid.",
        points: [
          "Iwieġeb fuq WhatsApp, bl-email, fuq il-websajt tiegħek u fuq it-telefon f'inqas minn minuta, lejl u nhar.",
          "Jistaqsi x'inhu l-każ, bil-lingwa tal-klijent, kif kienet tagħmel segretarja tajba.",
          "Jagħmel il-verifika ta' kunflitt ta' interess u jibbukkja l-ewwel laqgħa fid-djarju tal-avukat it-tajjeb.",
        ],
        channels: ["WhatsApp", "Telefonati bil-vuċi", "Email", "Websajt"],
        result: "Ebda klijent ma jmur għand ditta oħra",
      },
      {
        name: "Aġent tad-dokumenti",
        title: "Jiġbor kull dokument.",
        points: [
          "Jibgħat lil kull klijent link privat u lista ta' x'għandu jibgħat.",
          "Jaqra kull dokument, jagħtih isem u jiffajljah fil-każ it-tajjeb.",
          "Jibgħat messaġġ jew iċempel lill-klijent meta jkun hemm xi ħaġa nieqsa jew li ma tinqarax.",
        ],
        channels: ["Link privat", "WhatsApp", "Telefonati bil-vuċi"],
        result: "Fajls sħaħ, bla ġiri wara ħadd",
      },
      {
        name: "Aġent tal-iskadenzi",
        title: "Iżomm għajnejh fuq kull data.",
        points: [
          "Isegwi d-dati tal-qorti, l-iskadenzi tal-permessi, is-sottomissjonijiet u t-tiġdid.",
          "Jgħarraf lill-avukat it-tajjeb ġimgħat qabel, imbagħad mill-ġdid, imbagħad lil partner.",
          "Iċempel jew jibgħat messaġġ lill-klijent meta permess ikun se jiskadi jew tkun meħtieġa firma, u jibbukkja l-laqgħa.",
        ],
        channels: ["Telefonati bil-vuċi", "WhatsApp", "Il-kalendarju tiegħek"],
        result: "Xejn ma jiskadi b'sorpriża",
      },
    ],
  },

  jobs: {
    label: "Dak kollu li tagħmel",
    title: "Sistema waħda. Għoxrin biċċa xogħol magħmula għalik.",
    items: [
      { icon: "chat", title: "Twieġeb lil kull klijent ġdid, 24/7", body: "WhatsApp, email, il-websajt tiegħek u t-telefon. Tistaqsi x'inhu l-każ u tibbukkja l-ewwel laqgħa.", gain: "Ebda klijent ma jmur għand ditta oħra" },
      { icon: "badge", title: "Tagħmel il-verifiki fuq il-klijenti", body: "Tiġbor l-ID u l-prova tal-indirizz, tiċċekkja jekk hemmx kunflitti ta' interess u tħejji l-fajl tad-due diligence biex tapprovah int.", gain: "Klijent ġdid f'ġurnata, mhux f'ġimgħa" },
      { icon: "inbox", title: "Tirċievi kull dokument", body: "Il-klijenti jtellgħu jew jgħaddu kwalunkwe ħaġa. Is-sistema taqraha, tagħtiha isem u tiffajljaha fil-każ it-tajjeb.", gain: "Daqshekk issortjar tal-inboxes" },
      { icon: "search", title: "Issib kollox f'sekondi", body: "Staqsi bi kliem sempliċi. Tfittex f'kull kuntratt, email, ittra u sken li għandha d-ditta tiegħek.", gain: "Sigħat ta' tiftix, spiċċaw" },
      { icon: "pen", title: "Tabbozza mit-templates tiegħek", body: "Ittri ta' ingaġġ, ftehimiet, kuntratti tal-kera, prokuri u ittri, bil-kliem tad-ditta tiegħek stess.", gain: "L-ewwel abbozz f'minuti" },
      { icon: "eye", title: "Tiċċekkja l-kuntratti", body: "Taqra kuntratt li jidħol u timmarka x'inhu nieqes jew mhux tas-soltu meta mqabbel mal-istandard tad-ditta tiegħek.", gain: "Par għajnejn ieħor fuq kull paġna" },
      { icon: "clock", title: "Issegwi kull skadenza", body: "Dati tal-qorti, termini għas-sottomissjonijiet, skadenzi tal-permessi, tiġdid u denunzji annwali. It-tfakkiriet jibdew ġimgħat qabel.", gain: "Ebda paniku fl-aħħar minuta" },
      { icon: "plane", title: "Tħejji l-applikazzjonijiet għall-permessi", body: "Permessi tax-xogħol, ta' residenza u ta' student. Tiċċekkja kull passaport, kuntratt u ċertifikat u timla l-formoli.", gain: "Aktar applikazzjonijiet għal kull avukat" },
      { icon: "building", title: "Iżżomm il-kumpaniji konformi", body: "Denunzji annwali, reġistri u riżoluzzjonijiet, imħejjija, bi tfakkiriet qabel id-data tal-għeluq.", gain: "Ebda penali għal dewmien" },
      { icon: "receipt", title: "Tħejji d-denunzji tal-VAT u tat-taxxa", body: "Tieħu ċ-ċifri mill-fatturi u mill-istatements u tibni d-denunzja biex tiċċekkjaha int.", gain: "Jum is-sottomissjoni jkun jum kwiet" },
      { icon: "file", title: "Tieħu ħsieb il-karti tal-proprjetà u tal-vetturi", body: "Issegwi d-dati tal-konvenju, tiġbor id-dokumenti u tħejji l-formoli tat-trasferiment u tar-reġistrazzjoni.", gain: "Fajls fl-ordni, kull darba" },
      { icon: "gavel", title: "Tibni l-fajl tat-tilwima", body: "Tbiddel mijiet ta' emails u dokumenti fi kronoloġija u f'ġabra ta' dokumenti, u telenka x'inhu nieqes.", gain: "Jiem ta' tħejjija f'siegħa" },
      { icon: "book", title: "Issib il-liġi", body: "Tfittex fil-liġijiet ta' Malta u fix-xogħol li d-ditta tiegħek għamlet fil-passat, u turi s-sors ta' kull tweġiba.", gain: "Ir-riċerka tibda bit-tweġiba" },
      { icon: "languages", title: "Tittraduċi", body: "Abbozzi ta' traduzzjoni bil-Malti, bl-Ingliż, bit-Taljan u b'lingwi oħra, lesti biex tiċċekkjahom int.", gain: "Il-klijenti jaqrawha bil-lingwa tagħhom" },
      { icon: "euro", title: "Tirreġistra l-ħin u toħroġ il-kontijiet", body: "Taqbad il-ħin mill-emails, mit-telefonati u mid-dokumenti tiegħek, tabbozza l-fattura u tiġri wara dak li għadu ma tħallasx.", gain: "Iffattura kull siegħa li taħdem" },
      { icon: "card", title: "Iżżomm il-kotba", body: "Tqabbel il-pagamenti mal-fatturi, tissortja l-irċevuti u żżomm ir-rekords f'posthom għall-accountant tiegħek.", gain: "Kotba dejjem aġġornati" },
      { icon: "refresh", title: "Iżżomm lill-klijenti aġġornati", body: "Il-klijenti jirċievu aġġornament ċar f'kull pass u jistgħu jistaqsu fejn wasal il-fajl tagħhom, f'kull ħin.", gain: "Inqas telefonati ta' “hemm xi aħbar?”" },
      { icon: "phone", title: "Iċċempel u tfakkar lill-klijenti", body: "Aġent bil-vuċi jċempel lill-klijenti dwar dokumenti neqsin, permessi li se jiskadu u laqgħat.", gain: "Daqshekk tiġru wara xulxin bit-telefon" },
      { icon: "trending", title: "Tgħin lid-ditta tiegħek tinstab fuq Google u fit-tweġibiet tal-AI", body: "SEO għal Google, flimkien max-xogħol li jgħin lil ChatGPT u Gemini jirrakkomandaw id-ditta tiegħek.", gain: "Il-klijenti ġodda jsibu lilek l-ewwel" },
      { icon: "sun", title: "Tinforma lil kull avukat kull filgħodu", body: "L-iskadenzi tal-lum, l-abbozzi li jridu jiġu riveduti, il-fajls li qed jistennew lil klijent u x-xogħol mhux iffatturat.", gain: "Tibda l-ġurnata taf kollox" },
    ],
  },

  spotlights: [
    {
      label: "Portal tal-klijenti",
      title: "Il-klijenti jibagħtuh darba. Jiffajlja ruħu waħdu.",
      points: [
        "Kull klijent jirċievi link privat. Jitfa' fih ritratti, PDFs, skens jew voice notes mill-mowbajl.",
        "Is-sistema taqra kull fajl, tagħtih isem, tiffajljah fil-każ it-tajjeb u tgħarraf lill-avukat it-tajjeb.",
        "Jekk ikun hemm xi ħaġa nieqsa jew li ma tinqarax, tistaqsi lill-klijent fl-istess minuta. Int ma tiġri wara ħadd.",
      ],
      visual: {
        type: "rows",
        title: "R. Santos · tiġdid tal-permess tax-xogħol",
        hint: "Imtellgħa llum, 21:47",
        action: "tag",
        rows: [
          { badge: "PDF", title: "Passaport", detail: "Validu sal-2031. L-isem jaqbel mal-kuntratt.", tag: "Iffajljat" },
          { badge: "PDF", title: "Kuntratt tax-xogħol", detail: "Iffirmat miż-żewġ naħat. Is-salarju u s-sigħat inqraw.", tag: "Iffajljat" },
          { badge: "JPG", top: true, title: "Kuntratt tal-kera", detail: "Ir-ritratt skur wisq biex jinqara. Il-klijent intalab jibgħat ieħor.", tag: "Mitlub mill-ġdid" },
          { badge: "–", title: "Assigurazzjoni tas-saħħa", detail: "Għadha ma ntbagħtitx. It-tfakkira tmur għada fid-09:00.", tag: "Nieqsa" },
        ],
      },
    },
    {
      label: "Skadenzi",
      title: "Kull skadenza, ġimgħat qabel.",
      points: [
        "Taqra d-dati minn avviżi tal-qorti, kuntratti, permessi u rekords tal-kumpaniji.",
        "Tfakkar lill-avukat it-tajjeb kmieni, imbagħad mill-ġdid, imbagħad tgħarraf lil partner.",
        "Tħejji x-xogħol qabel id-data. L-iskadenza ssir firma, mhux ġirja tal-aħħar minuta.",
      ],
      visual: {
        type: "timeline",
        title: "Tiġdid tal-permess tax-xogħol · R. Santos",
        subtitle: "Il-permess jiskadi fit-30 ta' April 2027",
        steps: [
          { when: "Jum −90", title: "Il-klijent u min iħaddmu infurmati x'inhu meħtieġ", detail: "Lista mibgħuta fuq WhatsApp bil-Portugiż." },
          { when: "Jum −75", title: "Id-dokumenti waslu u ġew iċċekkjati", detail: "5 minn 6 tajbin. Ritratt wieħed mitlub mill-ġdid." },
          { when: "Jum −60", title: "L-applikazzjoni lesta għalik", detail: "Il-formoli mimlija. Qed tistenna r-reviżjoni ta' Dr Anna.", key: true, tag: "Lesta għar-reviżjoni" },
          { when: "Jum −58", title: "Mibgħuta wara l-approvazzjoni tiegħek", detail: "Il-klijent infurmat fl-istess minuta." },
          { when: "Deċiżjoni", title: "Il-klijent aġġornat, l-iskadenza li jmiss imniżżla", detail: "It-tiġdid li jmiss diġà qiegħed fid-djarju." },
        ],
      },
    },
    {
      label: "Klijenti ġodda",
      title: "Kull klijent ġdid imwieġeb f'sekondi.",
      points: [
        "Twieġeb fuq WhatsApp, bl-email, fuq il-websajt tiegħek u fuq it-telefon, bil-lingwa tal-klijent.",
        "Tistaqsi dak li kienet tistaqsi segretarja tajba. Qatt ma tagħti parir legali.",
        "Tiftaħ il-fajl, tagħmel il-verifika ta' kunflitt ta' interess u tibbukkja l-laqgħa.",
      ],
      visual: {
        type: "chat",
        initials: "MG",
        name: "Marco G.",
        origin: "Talba mill-websajt tiegħek",
        status: "Imwieġeb",
        messages: [
          { from: "in", text: "Bonswa. Qed nixtri flat fil-Gżira u rrid avukat jiċċekkjali l-konvenju.", time: "20:52" },
          { from: "out", text: "Bonswa Marco. Nistgħu ngħinuk. Hemm data għall-iffirmar, u ntgħażel nutar?", time: "20:52" },
          { from: "in", text: "Niffirmaw nhar il-Ġimgħa li ġej. In-nutar magħżul.", time: "20:54" },
          { from: "out", text: "Fhimt. Dr Anna tista' tirrevedih qabel dakinhar. Tiġik tajba telefonata għada?", time: "20:54" },
        ],
        slots: ["Tli 09:30", "Tli 16:00"],
        done: { before: "Telefonata bbukkjata ma' Dr Anna · ", strong: "Tli 09:30", after: " · fajl miftuħ, ebda kunflitt ta' interess" },
      },
    },
    {
      label: "Abbozzar",
      title: "L-ewwel abbozzi f'minuti. Bi kliem id-ditta tiegħek.",
      points: [
        "Titgħallem it-templates tiegħek, il-klawżoli tiegħek u kif tikteb id-ditta tiegħek.",
        "Kull bidla mill-istandard tiegħek tiġi mmarkata, biex ir-reviżjoni tieħu minuti.",
        "Xejn ma jintbagħat qabel ma japprovah avukat.",
      ],
      visual: {
        type: "rows",
        title: "Abbozzi jistennewk",
        hint: "Magħmula mit-templates tiegħek stess",
        action: "tag",
        rows: [
          { badge: "01", top: true, title: "Ittra ta' ingaġġ · Borg Holdings Ltd", detail: "It-tariffi u l-ambitu mimlija mill-ewwel telefonata.", tag: "Irrevedi" },
          { badge: "02", title: "Kuntratt tal-kera · ħanut fil-Mosta", detail: "It-template tiegħek. Tliet klawżoli mibdula, kull waħda mmarkata.", tag: "Irrevedi" },
          { badge: "03", title: "Tweġiba għal ittra · Vella", detail: "Mibnija mill-fajl. Kull fatt marbut mad-dokument tiegħu.", tag: "Irrevedi" },
          { badge: "04", title: "Prokura · Santos", detail: "B'żewġ lingwi. Id-dettalji meħuda mill-passaport.", tag: "Irrevedi" },
        ],
      },
    },
    {
      label: "Staqsi kwalunkwe ħaġa",
      title: "Staqsiha bħalma tistaqsi lill-aqwa skrivan tiegħek.",
      points: [
        "Ikteb mistoqsija bi kliem sempliċi. It-tweġiba tiġi mill-fajls tiegħek stess, b'link għad-dokument.",
        "Ebda folders x'tqalleb fihom. Ebda “min għandu dak il-fajl?”",
      ],
      visual: {
        type: "ask",
        questions: [
          { q: "Liema permessi jiskadu qabel Ġunju?", summary: "11-il permess jiskadu qabel Ġunju. It-tiġdid beda għalihom kollha.", rows: [["R. Santos · permess tax-xogħol", "30 ta' Apr · lest għar-reviżjoni"], ["L. Okafor · permess tax-xogħol", "12 ta' Mej · dokument wieħed nieqes"], ["P. Sharma · student", "20 ta' Mej · qed nistennew l-ittra tal-iskola"], ["D. Reyes · permess tax-xogħol", "28 ta' Mej · mibgħut"], ["+ 7 oħra", "Arahom kollha"]] },
          { q: "X'ftehimna ma' Borg Holdings dwar it-tariffi?", summary: "Ittra ta' ingaġġ iffirmata fl-14 ta' Marzu. Misjuba f'2 sekondi.", rows: [["Rata fis-siegħa", "Klawżola 4 tal-ittra ffirmata"], ["Kontijiet", "Kull xahar · 30 jum biex jitħallsu"], ["Limitu fuq it-tariffi", "Miftiehem għall-fażi 1"], ["Kopja ffirmata", "Iftaħ id-dokument"]] },
          { q: "X'inhu dovut din il-ġimgħa?", summary: "9 skadenzi din il-ġimgħa. 7 lesti għar-reviżjoni.", rows: [["Tne · Denunzja tal-VAT, Camilleri Trading", "Lesta biex tiċċekkjaha"], ["Tli · Denunzja annwali, Borg Holdings", "Lesta biex tiffirmaha"], ["Ħam · Qorti, Borg vs Vella", "Il-ġabra tad-dokumenti lesta"], ["Ġim · Jiskadi l-konvenju, flat fil-Gżira", "In-nutar imfakkar"], ["+ 5 oħra", "Arahom kollha"]] },
          { q: "Kemm hemm ħin mhux iffatturat?", summary: "€4,300 ta' xogħol irreġistrat u li għadu ma ġiex iffatturat.", rows: [["Borg Holdings Ltd", "€1,850 · fattura abbozzata"], ["Camilleri Trading", "€1,200 · fattura abbozzata"], ["R. Santos", "€450 · tariffa fissa, stadju 2"], ["4 każijiet iżgħar", "€800"]] },
        ],
      },
    },
  ],

  areas: {
    label: "Kull servizz li toffri",
    title: "Ix-xogħol ta' rutina, lest. F'kull qasam tal-prattika.",
    intro: "Il-biċċa l-kbira tax-xogħol legali hija passi, formoli u dati. Dawk tagħmilhom is-sistema. L-avukati tiegħek jaħsbu.",
    colA: "Ix-xogħol tiegħek",
    colB: "Is-sistema tagħmel",
    colC: "Int tagħmel",
    items: [
      { name: "Permessi tax-xogħol u ta' residenza", system: "Tiċċekkja kull dokument, timla l-applikazzjoni, issegwi d-deċiżjoni u tibda kull tiġdid xhur qabel.", you: "Tagħti parir lill-klijent u tapprova l-fajl." },
      { name: "Studenti u rilokazzjoni", system: "Tiġbor l-ittri tal-iskola, l-assigurazzjoni u l-prova tal-fondi, u żżomm lill-istudent aġġornat bil-lingwa tiegħu.", you: "Tieħu ħsieb il-każijiet diffiċli." },
      { name: "Kumpaniji u xogħol korporattiv", system: "Tħejji l-pakketti tal-inkorporazzjoni, id-denunzji annwali, ir-reġistri u r-riżoluzzjonijiet, u żżomm għajnejha fuq kull data ta' sottomissjoni.", you: "Tistruttura l-ftehim." },
      { name: "VAT, taxxa u żamma tal-kotba", system: "Tissortja l-fatturi u l-irċevuti, tħejji d-denunzji tal-VAT u tat-taxxa fuq id-dħul, u tqabbel il-pagamenti.", you: "Tiċċekkja n-numri u tiffirma." },
      { name: "Proprjetà", system: "Issegwi d-dati tal-konvenju, tiġbor id-dokumenti u żżomm lix-xerrej, lill-bejjiegħ u lin-nutar mexjin flimkien.", you: "Tirrevedi t-termini u tipproteġi lill-klijent." },
      { name: "Kuntratti u ftehimiet", system: "Tabbozza mit-templates tiegħek, tqabbel il-verżjonijiet u timmarka kull klawżola li hija differenti mill-istandard tiegħek.", you: "Tinnegozja." },
      { name: "Tilwim u qorti", system: "Tibni l-kronoloġija u l-ġabra tad-dokumenti mill-fajl, issegwi d-dati tal-qorti u tabbozza l-ittri ta' rutina.", you: "Tittratta l-kawża." },
      { name: "Vetturi u reġistrazzjonijiet", system: "Tħejji l-formoli tat-trasferiment u tar-reġistrazzjoni u tiċċekkja li d-dokumenti jkunu kompluti qabel jidħlu.", you: "Tapprova." },
      { name: "Impjiegi u reklutaġġ", system: "Tiċċekkja d-dokumenti tal-ħaddiema li ġejjin minn barra, tħejji l-kuntratti u żżomm il-fajls ta' min iħaddem fl-ordni.", you: "Tagħti parir lil min iħaddem." },
    ],
  },

  wins: {
    label: "Il-klijenti tiegħek iħossuha l-ewwel",
    title: "Ir-rebħa tagħhom hija r-rebħa tiegħek.",
    items: [
      { title: "Tweġiba llejla, mhux il-ġimgħa d-dieħla.", body: "Klijent inkwetat jikteb fid-9 ta' filgħaxija. Jirċievi tweġiba, lista ta' x'għandu jibgħat u ħin għal-laqgħa. Jieqaf ifittex ditta oħra." },
      { title: "Daqshekk “hemm xi aħbar?”", body: "Il-klijenti jaraw fejn wasal il-fajl tagħhom f'kull pass. Jafdawk aktar u jċemplulek inqas." },
      { title: "Jintbagħat darba biss.", body: "Klijent itella' dokument darba waħda, mill-mowbajl. Ħadd ma jerġa' jitlobhulu." },
    ],
  },

  live: {
    label: "Kif tibda",
    h2Before: "Inwaqqfuha għalik fi",
    h2Em: "72 siegħa.",
    body: "Niġu għandek, inqabbdu l-għodod tiegħek u nwaqqfu kollox. Xejn ġdid x'jitgħallmu l-avukati tiegħek.",
    steps: [
      { when: "Illum", title: "Telefonata ta' 20 minuta", body: "Dwar kif taħdem id-ditta tiegħek u fejn imorru s-sigħat." },
      { when: "72 siegħa", title: "L-ewwel sistema tiegħek tkun qed taħdem", body: "Normalment: kull talba ġdida mwieġba u kull dokument li jidħol iffajljat." },
      { when: "Ġimgħa 2", title: "Il-fajls tiegħek imqabbda", body: "Klijenti, każijiet, templates u skadenzi f'post wieħed." },
      { when: "Kull ġimgħa", title: "Tikber miegħek", body: "Issir taf id-ditta tiegħek, u tibda taħdem il-biċċa xogħol li jmiss." },
    ],
  },

  ways: {
    label: "Ibda minn fejn trid",
    title: "Biċċa xogħol waħda jew id-ditta kollha. Tagħżel int.",
    items: [
      { title: "Solvi biċċa xogħol waħda", body: "Agħżel il-ħaġa li tiekollok l-aktar sigħat u aħna nawtomatizzaw dik biss.", example: "Eżempju: tiġbor u tiffajlja kull dokument tal-klijenti." },
      { title: "Qabbadha ma' dak li tuża", body: "Żomm is-software tad-ditta, Outlook u l-pakkett tal-kontijiet. Aħna nqabbduha magħhom.", example: "Eżempju: il-ħin irreġistrat jidħol fis-software tal-fatturi tiegħek." },
      { title: "Is-sistema sħiħa", body: "Dak kollu li hemm f'din il-paġna, mibni madwar id-ditta tiegħek, personalizzat u mieħud ħsiebu minna.", example: "Eżempju: l-ewwel kuntatt, dokumenti, skadenzi, abbozzi u kontijiet f'post wieħed." },
      { title: "Għadek m'intix ċert?", body: "Il-biċċa l-kbira tad-ditti mhumiex. Inħarsu lejn il-ġimgħa tiegħek u nuruk fejn imorru s-sigħat.", example: "B'xejn. Tieħu 20 minuta." },
    ],
  },

  offer: {
    label: "Offerta għal żmien limitat",
    title: "L-ewwel xahar tiegħek b'xejn.",
    body: "Inwaqqfuha fi 72 siegħa u nħaddmuha miegħek għal xahar. L-ewwel tara fuq id-ditta tiegħek stess id-dokumenti ffajljati, l-iskadenzi maqbuda fil-ħin u s-sigħat li tagħtik lura.",
    cta: "Ikseb ix-xahar b'xejn tiegħek",
    secondaryCta: "Ibbukkja telefonata ta' 20 minuta",
    listLabel: "X'tieħu",
    items: [
      { strong: "L-ewwel xahar b'xejn.", rest: "Taraha taħdem fuq il-fajls tiegħek stess qabel ma tiddeċiedi." },
      { strong: "Imwaqqfa għalik fi 72 siegħa.", rest: "Inqabbdu l-email, id-dokumenti u l-kalendarju tiegħek. Int ma tbiddel xejn." },
      { strong: "Is-sistema hija tiegħek.", rest: "Mibnija madwar id-ditta tiegħek, bit-templates tiegħek u bil-mod kif taħdem int." },
      { strong: "Immexxija minna.", rest: "Nippersonalizzawha, nieħdu ħsiebha u ntejbuha kull ġimgħa." },
      { strong: "Ibda fiż-żgħir.", rest: "L-ewwel biċċa xogħol waħda. Żid dik li jmiss biss meta l-ewwel waħda tkun ħallset għaliha nfisha." },
    ],
  },

  calc: {
    label: "In-numri tiegħek",
    title: "Kemm jiswew is-sigħat tal-admin tiegħek.",
    mode: "times",
    factor: 46,
    inputs: [
      { label: "Avukati fid-ditta tiegħek", value: 6 },
      { label: "Sigħat tal-admin li kull wieħed jitlef fil-ġimgħa", value: 5 },
      { label: "Rata medja fis-siegħa (€)", value: 120 },
    ],
    out1: "Sigħat li tista' tikseb lura kull sena",
    out2: "Kemm jiswew dawk is-sigħat bir-rata tiegħek",
    footnote: "Il-kalkolu jassumi 46 ġimgħa tax-xogħol fis-sena. Mhux kull siegħa ffrankata ssir siegħa ffatturata, għalhekk ibdel in-numri biex jaqblu mad-ditta tiegħek.",
  },

  trust: {
    label: "Int tibqa' fil-kmand",
    title: "Is-sistema tħejji. Avukat jiddeċiedi.",
    items: [
      { icon: "scale", title: "Avukat jiffirma kollox", body: "Xejn ma jasal għand klijent, qorti jew awtorità mingħajr l-approvazzjoni ta' avukat. Is-sistema qatt ma tagħti parir legali." },
      { icon: "lock", title: "Is-sigrieti tal-klijenti jibqgħu sigrieti", body: "Id-ditta tiegħek tieħu s-sistema privata tagħha. Il-fajls tiegħek qatt ma jitħalltu ma' dawk ta' ditta oħra u jiġu ttrattati skont il-GDPR." },
      { icon: "book", title: "Kull tweġiba turi s-sors tagħha", body: "Meta tikkwota liġi, klawżola jew data, torbotha mad-dokument li ġiet minnu. Biex tiċċekkja tieħu sekondi." },
      { icon: "users", title: "Tim f'Malta", body: "It-tim ta' OARC f'Birkirkara jwaqqafha, jgħallimha t-templates tiegħek u jwieġeb it-telefon." },
    ],
  },

  facts: {
    label: "Għaliex issa",
    title: "Ix-xogħol legali jimxi bl-arloġġ. Kull terminu jista' jintilef.",
    items: [
      { n: "20 jum", l: "Biex tippreżenta risposta ġuramentata f'kawża ċivili. Iż-żmien jibda jgħodd minn dakinhar li tiġi notifikat.", src: { label: "Code of Organization and Civil Procedure, art. 158", href: "https://legislation.mt/eli/cap/12/eng" } },
      { n: "4 ijiem", l: "Jiem tax-xogħol biex tibgħat lil Jobsplus il-formola tal-ingaġġ għal kull ħaddiem ġdid.", src: { label: "Jobsplus, Lulju 2025", href: "https://jobsplus.gov.mt/media/gwld3ous/submission-of-engagement-and-termination-10-07-2025.pdf" } },
      { n: "5 snin", l: "Kemm iridu jinżammu r-rekords tad-due diligence tal-klijenti. Kull fajl irid ikun jista' jinstab.", src: { label: "FIAU Implementing Procedures", href: "https://fiaumalta.org/app/uploads/2025/11/27.01.2017-Implementing-Procedures-Part-I.pdf" } },
    ],
  },

  faq: [
    { q: "X'inhi, eżattament?", a: "Sistema waħda tal-AI mibnija madwar id-ditta legali tiegħek. Twieġeb lill-klijenti ġodda, tirċievi u tiffajlja kull dokument, issegwi kull skadenza, tabbozza mit-templates tiegħek, tħejji applikazzjonijiet u sottomissjonijiet, tirreġistra l-ħin u toħroġ il-kontijiet. It-tim ta' OARC f'Malta jwaqqafha u jħaddimha miegħek." },
    { q: "Tagħti parir legali?", a: "Le. Tħejji x-xogħol. Avukat jirrevedi u japprova kollox qabel ma joħroġ mid-ditta." },
    { q: "Se tieħu post l-avukati jew l-iskrivani tagħna?", a: "Le. Tieħu f'idejha l-issortjar, il-ġiri wara n-nies, il-mili tal-formoli u l-ewwel abbozzi, biex in-nies tiegħek iqattgħu ħinhom fuq il-klijenti u fuq il-liġi." },
    { q: "L-informazzjoni tal-klijenti tinżamm kunfidenzjali?", a: "Iva. Kull ditta għandha s-sistema privata tagħha. Il-fajls tiegħek jintużaw biss għad-ditta tiegħek u jiġu ttrattati skont il-GDPR." },
    { q: "Il-klijenti jistgħu jtellgħu d-dokumenti huma stess?", a: "Iva. Kull klijent jirċievi link privat. Jibgħat ritratti, PDFs jew skens mill-mowbajl, u s-sistema tiffajlja kull wieħed fil-każ it-tajjeb u tgħarraf lill-avukat it-tajjeb." },
    { q: "Taħdem mas-software tal-ġestjoni tad-ditta tagħna?", a: "Iva. Inqabbduha mal-email, mal-ħażna tad-dokumenti u mas-software tad-ditta u tal-kontijiet li diġà tuża. Jekk ma teżistix konnessjoni, nibnuha aħna." },
    { q: "Taf il-liġi ta' Malta?", a: "Taħdem mil-liġijiet ippubblikati ta' Malta u mit-templates u l-fajls tad-ditta tiegħek stess, u turi s-sors ta' kull tweġiba. L-avukati tiegħek jiċċekkjaw kollox qabel ma jintuża." },
    { q: "Id-ditti legali jistgħu jużaw l-AI?", a: "Iva. F'Ottubru 2025 is-CCBE, li tirrappreżenta l-kmamar tal-avukati u s-soċjetajiet legali tal-Ewropa, ippubblikat gwida dwar l-AI ġenerattiva għall-avukati. Il-punti ewlenin tagħha huma s-sigriet professjonali lejn il-klijent, l-iċċekkjar ta' kull riżultat u li l-avukat jibqa' responsabbli. Din is-sistema hija mibnija fuq dawk ir-regoli." },
    { q: "Tista' tagħmel ħaġa waħda biss?", a: "Iva. Ħafna ditti jibdew b'biċċa xogħol waħda, bħall-ġbir u l-iffajljar tad-dokumenti tal-klijenti, u jżidu dik li jmiss meta l-ewwel waħda tkun ħallset għaliha nfisha." },
    { q: "Kemm iddum biex tibda taħdem?", a: "Inwaqqfu l-ewwel sistema tiegħek fi 72 siegħa. Il-bqija tiġi mqabbda fil-ġimgħat ta' wara." },
    { q: "L-aġenti tal-AI jċemplu lill-klijenti?", a: "Iva. Aġent bil-vuċi jċempel lill-klijenti dwar dokumenti neqsin, permessi li se jiskadu u laqgħat, u jibbukkja l-appuntament. Qatt ma jagħti parir legali, u avukat jista' jidħol fi kwalunkwe telefonata." },
    { q: "U jekk tiżbalja f'xi ħaġa?", a: "Xejn ma jasal għand klijent, qorti jew awtorità qabel ma avukat ikun qrah u approvah. Kull abbozz juri s-sorsi tiegħu, u kull azzjoni tiġi rreġistrata. Jekk ikun hemm bżonn tinbidel xi ħaġa, it-tim ta' OARC f'Malta jibdilha." },
    { q: "Kemm tiswa?", a: "Bħalissa l-ewwel xahar huwa b'xejn. Wara jiddependi mid-daqs tad-ditta tiegħek u minn dak li tattiva. Staqsina u nagħtuk prezz għad-ditta tiegħek." },
  ],

  cta: {
    titleBefore: "Agħti lill-avukati tiegħek is-sigħat tagħhom lura.",
    titleEm: "Minn din il-ġimgħa.",
    body: "Ikseb l-ewwel xahar b'xejn tiegħek. Inwaqqfuha għalik fi 72 siegħa.",
    button: "Ikseb ix-xahar b'xejn tiegħek",
    secondary: "Ibbukkja telefonata ta' 20 minuta",
  },

  sources: [
    { label: "Code of Organization and Civil Procedure (Cap. 12)", href: "https://legislation.mt/eli/cap/12/eng" },
    { label: "Jobsplus: formoli tal-ingaġġ u tat-terminazzjoni", href: "https://jobsplus.gov.mt/media/gwld3ous/submission-of-engagement-and-termination-10-07-2025.pdf" },
    { label: "FIAU Implementing Procedures, Part I", href: "https://fiaumalta.org/app/uploads/2025/11/27.01.2017-Implementing-Procedures-Part-I.pdf" },
    { label: "Gwida tas-CCBE dwar l-AI ġenerattiva għall-avukati", href: "https://eucrim.eu/news/ccbe-issues-guidance-on-generative-ai-use-in-legal-practice/" },
  ],
  related: [
    { label: "Awtomazzjoni tan-negozju", href: "/automation" },
    { label: "Voice AI għad-ditti legali", href: "/voice-ai-worker/legal" },
    { label: "Aġent tal-AI għall-admin", href: "/services/ai-admin-agent" },
    { label: "AI għall-aġenziji tal-proprjetà", href: "/ai/real-estate" },
  ],
  disclaimer: "OARC Digital · Malta. OARC Digital mhijiex ditta legali u ma tagħtix parir legali. L-ismijiet u ċ-ċifri fuq l-iskrins huma minn kont demo.",
};

export default lawFirms;
