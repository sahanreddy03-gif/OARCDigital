import type { AiSystemContent } from "@/lib/ai-systems/types";

// Maltese twin of lib/ai-systems/hotels.ts (/mt/ai/hotels).
// Same structure, same numbers, same icons, same source links.
const hotels: AiSystemContent = {
  slug: "hotels",
  name: "Lukandi",
  barLabel: "AI għal-lukandi",
  business: "lukanda",
  metaTitle: "Sistema tal-AI għal-Lukandi f'Malta | OARC Digital",
  metaDescription:
    "Is-sistema tal-AI għal-lukandi f'Malta. Twieġeb lil kull mistieden 24/7, iġġib prenotazzjonijiet diretti u tħejji l-kwotazzjonijiet. Tiddeċiedi int.",
  updated: "2026-11-16",
  serviceType: "Sistema tal-AI u awtomazzjoni għal-lukandi u l-guesthouses",
  schemaDescription:
    "Sistema tal-AI mibnija madwar kull lukanda, guesthouse u appartament bis-servizz f'Malta. Twieġeb lill-mistednin 24/7 fuq iċ-chat u t-telefon, tbiddel it-talbiet fi prenotazzjonijiet diretti, tabbozza kwotazzjonijiet għal gruppi u avvenimenti, tlesti kollox għall-wasliet, tbigħ l-extras li tagħżel il-lukanda, titlob reċensjoni lil kull mistieden u tabbozza t-tweġibiet, u tagħmel ix-xogħol tal-uffiċċju bħall-kontribuzzjoni ambjentali. Il-maniġer tal-lukanda jiddeċiedi kull rata, skont, rifużjoni u eċċezzjoni. Imwaqqfa u mmexxija mit-tim ta' OARC Digital f'Malta.",
  hub: {
    title: "Lukandi u guesthouses",
    body: "Kull mistieden jieħu tweġiba f'inqas minn minuta. Aktar prenotazzjonijiet diretti. Kwotazzjonijiet għall-gruppi fl-istess jum. Jiddeċiedi l-maniġer tiegħek.",
    gain: "Lukandi, guesthouses u appartamenti bis-servizz",
  },

  lightAreas: true,

  hero: {
    pill: "Inwaqqfuha għalik fi 72 siegħa",
    kicker: "Fl-aħħar, għandek",
    h1Before: "Sistema waħda sħiħa tal-AI mibnija madwar",
    h1Highlight: "il-lukanda tiegħek.",
    sub: "Aġenti tal-intelliġenza artifiċjali (AI), imħarrġa fuq il-lukanda tiegħek f'Malta, iwieġbu lil kull mistieden, lejl u nhar, u jibbukkjawh direttament miegħek. Is-sistema tabbozza l-kwotazzjonijiet tal-gruppi, tlesti kollox għall-wasliet u tieħu ħsieb ir-reċensjonijiet tiegħek. Ir-rati, ir-rifużjonijiet u l-eċċezzjonijiet jibqgħu f'idejn il-maniġer tiegħek.",
    primaryCta: "Ħu x-xahar b'xejn tiegħek",
    secondaryCta: "Ibbukkja telefonata ta' 20 minuta",
    note: "L-ewwel xahar b'xejn. Imwaqqfa u mmexxija mit-tim ta' OARC f'Malta.",
  },

  film: {
    title: "Ara grupp ta' tieġ, mill-ewwel messaġġ sal-iva tiegħek",
    scenes: [
      {
        clock: "Il-Ħamis · 22:50",
        caption: "Wedding planner tikteb ħafna wara li l-uffiċċju tal-bejgħ tiegħek ikun għalaq.",
        result: "Imwieġba f'45 sekonda",
        visual: {
          type: "chat",
          initials: "GR",
          name: "Giulia R.",
          origin: "WhatsApp · talba għal grupp",
          status: "Imwieġba",
          messages: [
            { from: "in", text: "Bonswa! Qed nippjana tieġ fl-Imdina. Għandkom 18-il kamra mill-14 sas-17 ta' Mejju, u ikla għal 40 persuna fl-14?", time: "22:50" },
            { from: "out", text: "Awguri, Giulia. Iva: 18-il kamra huma liberi, 6 b'veduta tal-baħar, u t-terrazzin huwa liberu fl-14.", time: "22:50" },
            { from: "in", text: "Tajjeb ħafna. Tistgħu tagħtuna 15% skont jekk nieħdu t-18 kollha?", time: "22:52" },
          ],
          done: { before: "18-il kamra miżmuma · ", strong: "il-15% għadda għand Mark", after: " · kwotazzjoni sal-10:00" },
        },
      },
      {
        clock: "Il-Ħamis · 22:53",
        caption: "Il-kwotazzjoni tinbena waħedha mir-rati tiegħek u mill-menu tal-avvenimenti.",
        result: "Abbozzata fi 3 minuti",
        visual: {
          type: "rows",
          title: "Kwotazzjoni għal grupp · Giulia R. · tieġ",
          hint: "Mir-rati tiegħek, 22:53",
          action: "tag",
          rows: [
            { badge: "18", title: "Kmamar · mill-14 sas-17 ta' Mejju", detail: "18-il kamra għal 3 iljieli bir-rata tiegħek għall-gruppi f'Mejju.", tag: "Bil-prezz" },
            { badge: "40", title: "Ikla ta' merħba · terrazzin", detail: "Menu B mill-pakkett tal-avvenimenti tiegħek, 14 ta' Mejju fit-20:00.", tag: "Bil-prezz" },
            { badge: "15%", top: true, title: "Skont mitlub", detail: "Il-limitu tiegħek għall-gruppi huwa 10%. Mark biss jista' jagħti aktar.", tag: "Jiddeċiedi Mark" },
          ],
        },
      },
      {
        clock: "Il-Ġimgħa · 08:40",
        caption: "Mark jiddeċiedi l-prezz, u mbagħad biss tintbagħat il-kwotazzjoni.",
        result: "Kwotazzjoni mibgħuta qabel id-09:00",
        visual: {
          type: "timeline",
          title: "Grupp ta' tieġ · 18-il kamra · 3 iljieli",
          subtitle: "Mill-14 sas-17 ta' Mejju 2027 · €10,980",
          steps: [
            { when: "08:40", title: "Mark japprova l-kwotazzjoni", detail: "10%, mhux 15%. Iżid drink ta' merħba b'xejn.", key: true, tag: "Approvata mill-maniġer tiegħek" },
            { when: "08:41", title: "Mibgħuta bit-Taljan", detail: "Bil-link tad-depożitu. Kmamar miżmuma għal 7 ijiem." },
            { when: "08:41", title: "Follow-up skedat", detail: "Ma weġbitx sat-Tlieta? L-aġent iċempel lil Giulia." },
          ],
        },
      },
    ],
  },

  dashboard: {
    title: "Il-lukanda kollha tiegħek fuq skrin wieħed.",
    body: "Kull filgħodu: min jasal illum, x'daħal matul il-lejl u x'qed jistenna l-iva tiegħek.",
    org: "Il-Lukanda Tiegħek",
    search: "Staqsi kwalunkwe ħaġa… “Kemm aħna mimlijin fi tmiem il-ġimgħa d-dieħla?”",
    initials: "MC",
    nav: [
      { label: "Illum" }, { label: "Talbiet", badge: "17" }, { label: "Wasliet" }, { label: "Gruppi u avvenimenti" },
      { label: "Talbiet tal-mistednin" }, { label: "Reċensjonijiet" }, { label: "Uffiċċju" }, { label: "Rapporti" },
    ],
    greeting: "Bonġu, Mark",
    status: "Qed taħdem · kull mistieden ingħata tweġiba matul il-lejl",
    kpis: [
      { label: "Ibbukkjati dirett matul il-lejl", value: "6", note: "€2,140 · bla kummissjoni" },
      { label: "Jaslu llum", value: "31", note: "26 għamlu check-in online" },
      { label: "Kwotazzjonijiet jistennewk", value: "3", note: "Lesti għall-iva tiegħek" },
      { label: "Depożiti mhux imħallsa", value: "€1,860", note: "3 tfakkiriet mibgħuta", alert: true },
    ],
    todoTitle: "Jeħtieġu lilek illum",
    todos: [
      { initials: "GR", title: "Grupp ta' tieġ · 18-il kamra · Mejju", detail: "Kwotazzjoni lesta. Il-planner talbet 15%. Il-limitu tiegħek huwa 10%.", tag: "Iddeċiedi", on: true },
      { initials: "TH", title: "Reċensjoni ta' 2 stilel · Tom H. · Kamra 214", detail: "Storbju mill-bar. Tweġiba abbozzata, l-offerta qed tistennik.", tag: "Approva" },
      { initials: "LK", title: "Check-out tard · Lena K. · Kamra 305", detail: "Titlob l-16:00. Ir-regola tiegħek tieqaf fis-14:00.", tag: "F'idejk" },
      { initials: "EC", title: "Kontribuzzjoni ambjentali · Ottubru", detail: "€4,218 fuq 2,812-il lejl ta' adulti. Lesta biex tirrapportaha u tħallasha.", tag: "Iċċekkja" },
    ],
    chartTitle: "Prenotazzjonijiet diretti din il-ġimgħa",
    bars: [
      { label: "Tne", h: 52 }, { label: "Tli", h: 46 }, { label: "Erb", h: 61 }, { label: "Ħam", h: 58 },
      { label: "Ġim", h: 74 }, { label: "Sib", h: 83 }, { label: "Ħad", h: 100 },
    ],
    chartFoot: { label: "Kummissjoni ffrankata", value: "€1,960" },
    chatFloat: {
      channel: "WhatsApp · mistieden ġdid",
      time: "01:52",
      incoming: "Hello, għandkom kamra għal żewġt iljieli mill-Ġimgħa? Żewġ adulti.",
      reply: "Iva. Kamra doppja bil-kolazzjon hija €138 kull lejl, ibbukkjata dirett. Inżommhielek?",
      receipt: "Imwieġeb f'40 sekonda · ibbukkjat dirett",
    },
    alertFloat: {
      label: "Għassa tar-reċensjonijiet · issa",
      title: "Reċensjoni ta' 2 stilel fuq Google",
      detail: "Tom H., Kamra 214: storbju mill-bar. Tweġiba abbozzata għal Mark.",
      tag: "Tweġiba lesta",
    },
  },

  worksWith: ["Il-PMS tiegħek", "Iċ-channel manager tiegħek", "Il-booking engine tiegħek", "WhatsApp", "Outlook u Gmail", "Telefonati", "Google Business Profile", "Instagram u Facebook"],

  pillars: {
    label: "Mibnija madwar il-lukanda tiegħek",
    title: "Il-lukanda tiegħek. Il-mistednin tiegħek. Il-mod kif taħdem int.",
    items: [
      { icon: "network", title: "Kull mistieden f'konverżazzjoni waħda", body: "WhatsApp, email, telefonati, messaġġi mis-siti tal-prenotazzjonijiet u reċensjonijiet. Storja waħda għal kull mistieden, mill-ewwel mistoqsija sal-check-out." },
      { icon: "workflow", title: "Taħdem mal-PMS tiegħek, mhux madwaru", body: "Il-front office iżomm is-sistemi li jaf. Is-sistema taħdem wara l-bank u tgħaddi dak li jkun lest." },
      { icon: "check", title: "Ir-regoli tiegħek, id-deċiżjoni tiegħek", body: "Tikkwota mir-rati u mir-regoli tal-lukanda tiegħek. Kull ħaġa barra minnhom tmur għand il-maniġer tiegħek." },
    ],
  },

  agents: {
    label: "Il-front office tal-AI tiegħek",
    title: "Tliet aġenti tal-AI. Imħarrġa fuq il-lukanda tiegħek. Imqajmin fit-3 ta' filgħodu.",
    intro: "Jiċċettjaw fuq WhatsApp, bl-email u fuq il-websajt tiegħek, u jwieġbu u jagħmlu telefonati. Kull wieħed jaf il-kmamar, ir-rati u r-regoli tal-lukanda tiegħek. Il-prezzijiet u l-eċċezzjonijiet jibqgħu f'idejn it-tim tiegħek.",
    note: "Iwieġbu, jibbukkjaw u jfakkru. Qatt ma joffru prezz, skont jew rifużjoni barra mir-regoli tiegħek. Persuna tista' tieħu f'idejha kwalunkwe chat jew telefonata.",
    items: [
      {
        name: "Aġent tal-prenotazzjonijiet",
        title: "Ibiddel il-mistoqsijiet fi prenotazzjonijiet diretti.",
        points: [
          "Iwieġeb fuq WhatsApp, bl-email, fuq il-websajt tiegħek u fuq it-telefon f'inqas minn minuta, lejl u nhar.",
          "Jiċċekkja x'hemm liberu, jagħti r-rata diretta tiegħek u jibgħat il-link tal-prenotazzjoni tiegħek.",
          "Jieħu t-talbiet għal gruppi u avvenimenti u jabbozza l-kwotazzjoni għall-maniġer tiegħek.",
        ],
        channels: ["WhatsApp", "Telefonati bil-vuċi", "Email", "Websajt"],
        result: "L-ebda talba ma tistenna sa filgħodu",
      },
      {
        name: "Aġent tal-mistednin",
        title: "Jieħu ħsieb kull mistieden, mill-prenotazzjoni sal-check-out.",
        points: [
          "Jistaqsi l-ħin tal-wasla, joffri trasport u jiġbor id-dettalji taċ-check-in qabel ma jasal il-mistieden.",
          "Joffri l-extras li tagħżel int, fil-mument it-tajjeb, bil-lingwa tal-mistieden.",
          "Jgħaddi kull talba lit-tim it-tajjeb u jġib persuna fuq il-linja meta mistieden ikollu bżonn.",
        ],
        channels: ["WhatsApp", "Telefonati bil-vuċi", "SMS", "Email"],
        result: "Il-mistednin lesti qabel ma jaslu",
      },
      {
        name: "Aġent tar-reċensjonijiet",
        title: "Iġiblek aktar reċensjonijiet u aktar mistednin li jerġgħu jiġu.",
        points: [
          "Jitlob reċensjoni lil kull mistieden wara li jagħmel check-out.",
          "Jinduna b'mistieden mhux kuntent fl-istess jum u jabbozza t-tweġiba għall-maniġer tiegħek.",
          "Jistieden lura lill-mistednin tal-passat b'offerta li tapprova int, jekk ikunu qablu li jisimgħu mingħandek.",
        ],
        channels: ["Email", "WhatsApp", "Telefonati bil-vuċi"],
        result: "Il-ħażin jinqabad, it-tajjeb jinxtered",
      },
    ],
  },

  jobs: {
    label: "Dak kollu li tagħmel",
    title: "Sistema waħda. Dsatax-il xogħol, mill-ewwel messaġġ sal-check-out.",
    items: [
      { icon: "chat", title: "Twieġeb lil kull mistieden, 24/7", body: "WhatsApp, email, il-websajt tiegħek, Instagram u t-telefon. Bil-lingwa tal-mistieden, f'inqas minn minuta.", gain: "L-ebda prenotazzjoni mitlufa minħabba tweġiba tard" },
      { icon: "euro", title: "Tbiddel it-talbiet fi prenotazzjonijiet diretti", body: "Tiċċekkja x'hemm liberu, tagħti r-rata diretta tiegħek u tibgħat il-link tal-prenotazzjoni tiegħek. Il-mistieden jibbukkja miegħek.", gain: "Bla kummissjoni lis-siti tal-prenotazzjonijiet" },
      { icon: "users", title: "Tikkwota għal gruppi, tiġijiet u avvenimenti", body: "Tiċċekkja l-kmamar, tibni l-kwotazzjoni mir-rati u mill-menu tal-avvenimenti tiegħek, u tibgħatha malli l-maniġer tiegħek jgħid iva.", gain: "Kwotazzjonijiet mibgħuta fl-istess jum" },
      { icon: "phone", title: "Twieġeb it-telefon", body: "Aġent bil-vuċi jwieġeb bil-lejl u fl-eqqel taċ-check-in. Iwieġeb, jibbukkja u jgħaddi lil min iċempel lit-tim tiegħek.", gain: "L-ebda telefonata ma tispiċċa voicemail" },
      { icon: "chart", title: "Tbigħ l-extras qabel il-wasla", body: "Upgrades, kolazzjon, trasport, spa u check-out tard, offruti ftit jiem qabel ma jasal il-mistieden.", gain: "Aktar infiq f'kull soġġorn" },
      { icon: "plane", title: "Tibgħat kull messaġġ ta' qabel il-wasla", body: "Ħin tal-wasla, direzzjonijiet, parkeġġ, trasport u spjegazzjoni tal-kontribuzzjoni ambjentali, bil-lingwa tal-mistieden.", gain: "L-ebda sorpriża fir-reception" },
      { icon: "badge", title: "Tlesti ċ-check-in qabel il-wasla", body: "Tiġbor online l-ismijiet, id-dettalji tal-passaport u l-ħinijiet tal-wasla, u timla l-karta tar-reġistrazzjoni tiegħek.", gain: "L-ebda kju fir-reception" },
      { icon: "inbox", title: "Tieħu ħsieb it-talbiet waqt is-soġġorn", body: "Xugamani, taxi, mejda għall-ikel, check-out aktar tard. Kull talba tmur għand it-tim it-tajjeb.", gain: "Il-mistednin jitolbu darba biss" },
      { icon: "pen", title: "Titlob reċensjoni lil kull mistieden", body: "Wara ċ-check-out, kull mistieden jirċievi ringrazzjament u link biex jagħtik reċensjoni fuq Google.", gain: "Aktar reċensjonijiet, kull ġimgħa" },
      { icon: "shield", title: "Taqbad ir-reċensjonijiet ħżiena kmieni", body: "Tinduna b'mistieden mhux kuntent jew b'reċensjoni baxxa fl-istess jum, tabbozza t-tweġiba u tgħarraf lill-maniġer tiegħek.", gain: "Solvuta qabel ma tinfirex" },
      { icon: "refresh", title: "Terġa' tbigħ il-kmamar ikkanċellati", body: "Meta kamra tinħeles, toffriha lill-mistednin li staqsew għal dawk id-dati u ma sabux post.", gain: "Inqas iljieli vojta" },
      { icon: "link", title: "Twieġeb il-messaġġi mis-siti tal-prenotazzjonijiet", body: "Il-mistoqsijiet tal-mistednin li jaslu mis-siti tal-prenotazzjonijiet jieħdu tweġiba malajr, mill-fatti tiegħek stess.", gain: "L-ebda messaġġ ma jibqa' jistenna" },
      { icon: "card", title: "Tiġri wara d-depożiti u l-bilanċi", body: "Tibgħat links għall-ħlas, tfakkar lill-mistednin qabel l-iskadenza tiegħek u turik x'għadu mhux imħallas.", gain: "Il-flus jidħlu qabel il-wasla" },
      { icon: "receipt", title: "Taħdem il-kontribuzzjoni ambjentali", body: "Tgħodd l-iljieli ta' kull mistieden adult, tapplika l-limitu massimu, tpoġġiha f'linja għaliha fuq il-kont u żżomm it-totali lesti.", gain: "L-ebda kalkolu bl-idejn" },
      { icon: "building", title: "Tmexxi ċ-check-ins tal-appartamenti", body: "Kodiċi tal-bieb, regoli tad-dar, tindif bejn soġġorn u ieħor u tfakkiriet taċ-check-out, mibgħuta fil-ħin għal kull unità.", gain: "Inqas xogħol tal-uffiċċju għal kull appartament" },
      { icon: "repeat", title: "Iġġib lura l-mistednin tal-passat", body: "Offerti għall-kamra u d-dati favoriti tagħhom, mibgħuta lil mistednin tal-passat li qablu li jisimgħu mingħandek.", gain: "Jerġgħu jibbukkjaw, dirett" },
      { icon: "calendar", title: "Iżżomm għajnejha fuq kull data importanti", body: "Tiġdid tal-liċenzji, dati tal-kuntratti, dati tar-rilaxx tal-allotments u r-rati tal-istaġun li jmiss.", gain: "Xejn ma jiskadi b'sorpriża" },
      { icon: "trending", title: "Tgħinek tinstab fuq Google u fit-tweġibiet tal-AI", body: "SEO għal Google, flimkien max-xogħol li jgħin lil ChatGPT u Gemini jirrakkomandaw il-lukanda tiegħek.", gain: "Il-mistednin isibu lilek l-ewwel" },
      { icon: "sun", title: "Tinforma lill-maniġer tiegħek kull filgħodu", body: "Wasliet, tluq, VIPs, ilmenti miftuħa, kwotazzjonijiet jistennew u messaġġi li ħadd ma wieġeb.", gain: "Tibda l-ġurnata taf kollox" },
    ],
  },

  spotlights: [
    {
      label: "Prenotazzjonijiet diretti",
      title: "Jistaqsu f'nofsillejl. Jibbukkjaw miegħek.",
      points: [
        "Twieġeb fuq WhatsApp, bl-email, fuq il-websajt tiegħek u fuq Instagram, bil-lingwa tal-mistieden.",
        "Tiċċekkja x'hemm liberu, tagħti r-rata diretta tiegħek stess u toffri l-extras li tagħżel int.",
        "Tibgħat il-link tal-prenotazzjoni tiegħek. Il-mistieden jibbukkja miegħek, u l-ebda kummissjoni ma tmur għand sit tal-prenotazzjonijiet.",
      ],
      visual: {
        type: "chat",
        initials: "LB",
        name: "Luca B.",
        origin: "Chat tal-websajt · mistieden ġdid",
        status: "Ibbukkjat",
        messages: [
          { from: "in", text: "Hello! Għandkom kamra doppja għal żewġt iljieli mit-23 ta' April? B'veduta tal-baħar jekk jista' jkun.", time: "23:58" },
          { from: "out", text: "Hello Luca, iva. Ir-rata diretta tagħna b'veduta tal-baħar hija €156 kull lejl bil-kolazzjon. Inżommhielek?", time: "23:58" },
          { from: "in", text: "Iva, grazzi. Tistgħu tiġu għalina mill-ajruport ukoll?", time: "00:01" },
        ],
        slots: ["Karozza · €30", "Minivan · €45"],
        done: { before: "Ibbukkjat dirett · ", strong: "€342 bit-trasport", after: " · bla kummissjoni lis-siti" },
      },
    },
    {
      label: "Qabel ma jaslu",
      title: "Kull mistieden lest qabel ma jasal.",
      points: [
        "Ġimgħa qabel, tistaqsi l-ħin tal-wasla u toffri trasport.",
        "Tiġbor id-dettalji taċ-check-in online, biex ir-reception tgħaddi biss iċ-ċavetta.",
        "Ftit jiem qabel il-wasla, toffri l-upgrades u l-extras li tagħżel int.",
      ],
      visual: {
        type: "timeline",
        title: "Emma u James W. · 3 iljieli",
        subtitle: "Jaslu fit-18 ta' April · Kamra 312",
        steps: [
          { when: "Jum −7", title: "Mitlub il-ħin tal-wasla", detail: "Jaslu fid-21:35. Trasport mill-ajruport ibbukkjat, €35." },
          { when: "Jum −5", title: "Check-in lest online", detail: "Ismijiet, passaporti u firma miġbura." },
          { when: "Jum −3", title: "Offrut upgrade b'veduta tal-baħar", detail: "€25 aktar kull lejl. Qalu iva.", key: true, tag: "+€75 f'extras mibjugħa" },
          { when: "Jum −1", title: "Mibgħuta l-aħħar dettalji", detail: "Direzzjonijiet, parkeġġ u spjegazzjoni tal-kontribuzzjoni ambjentali." },
          { when: "Wasla", title: "Iċ-ċavetta lesta fir-reception", detail: "Bla formoli, bla kju. Dritt 'il fuq għal veduta tal-baħar." },
        ],
      },
    },
    {
      label: "Reċensjonijiet",
      title: "Reċensjoni ħażina maqbuda qabel il-kolazzjon.",
      points: [
        "Taqra kull reċensjoni ġdida malli tidħol u tgħarraf lill-maniġer tiegħek bil-ħżiena l-ewwel.",
        "Tabbozza kull tweġiba bil-vuċi tal-lukanda tiegħek. Kull offerta lill-mistieden tistenna l-iva tal-maniġer tiegħek.",
        "Kull mistieden jirċievi ringrazzjament wara ċ-check-out u link biex iħalli reċensjoni.",
      ],
      visual: {
        type: "rows",
        title: "Reċensjonijiet ġodda · dalgħodu",
        hint: "Iċċekkjati fis-06:00",
        action: "tag",
        rows: [
          { badge: "2★", top: true, title: "Tom H. · Kamra 214", detail: "Storbju mill-bar sa tard. Tweġiba u offerta abbozzati.", tag: "Għal Mark" },
          { badge: "4★", title: "Karl M. · Kamra 330", detail: "Wifi bil-mod fit-tielet sular. Tweġiba abbozzata, il-manutenzjoni mgħarrfa.", tag: "Irrevedi" },
          { badge: "5★", title: "Sophie L. · Kamra 118", detail: "Ħabbet il-kolazzjon u l-pixxina. Ringrazzjament mibgħut.", tag: "Imwieġba" },
          { badge: "5★", title: "Rita u Joe C. · Kamra 405", detail: "Soġġorn tal-anniversarju. Tweġiba abbozzata bil-Malti.", tag: "Irrevedi" },
        ],
      },
    },
    {
      label: "Kanċellazzjonijiet",
      title: "Kamra tiġi kkanċellata. Għoxrin minuta wara, terġa' tinbiegħ.",
      points: [
        "Meta prenotazzjoni tiġi kkanċellata, issib il-mistednin li staqsew għal dawk id-dati u ma sabux post.",
        "Iċċemplilhom jew tibgħatilhom messaġġ, tagħti r-rata tiegħek stess u tibgħat il-link tal-prenotazzjoni.",
        "It-tim tiegħek jara min ħa l-kamra u b'liema rata.",
      ],
      visual: {
        type: "chat",
        initials: "MF",
        name: "Maria F.",
        origin: "Telefonata bil-vuċi · 1 min 30 sek",
        status: "Imċempla",
        messages: [
          { from: "out", text: "Hello Maria, jien l-assistent tal-AI tal-lukanda. Għadha kif inħelset kamra mit-2 sal-4 ta' Mejju. Għadek interessata?", time: "16:04" },
          { from: "in", text: "Iva! Hemm waħda b'veduta tal-baħar?", time: "16:04" },
          { from: "out", text: "Iva: b'veduta tal-baħar €148 kull lejl, jew b'gallarija €165. Liema tixtieq?", time: "16:05" },
        ],
        slots: ["Veduta tal-baħar · €148", "Gallarija · €165"],
        done: { before: "Kamra mibjugħa mill-ġdid · ", strong: "€330 għal żewġt iljieli", after: " · imħallsa fl-16:20" },
      },
    },
    {
      label: "Staqsi kwalunkwe ħaġa",
      title: "Staqsiha bħalma tistaqsi lill-maniġer ta' billejl tiegħek.",
      points: [
        "Ikteb mistoqsija bi kliem sempliċi. It-tweġiba tiġi mill-prenotazzjonijiet, ir-rati u l-messaġġi tiegħek stess.",
        "L-ebda rapport x'tiġbed. L-ebda skrin tal-PMS x'tfittex fih.",
      ],
      visual: {
        type: "ask",
        questions: [
          { q: "Kemm aħna mimlijin fi tmiem il-ġimgħa d-dieħla?", summary: "Il-Ġimgħa aħna 86% mimlijin u s-Sibt 94%. Fadal 14-il lejl ta' kmamar x'jinbiegħu.", rows: [["Il-Ġimgħa", "62 minn 72 kamra · 10 liberi"], ["Is-Sibt", "68 minn 72 kamra · 4 liberi"], ["Ibbukkjati dirett", "39 minn 130 lejl ta' kmamar"], ["Lista ta' stennija", "3 mistednin staqsew għas-Sibt"]] },
          { q: "Liema kwotazzjonijiet għall-gruppi għadhom miftuħa?", summary: "4 kwotazzjonijiet miftuħa, b'valur ta' €46,650. 3 qed jistennew l-iva tiegħek.", rows: [["Tieġ · 18-il kamra · Mejju", "Tistenna lilek · mitlub 15%"], ["Konferenza · 30 kamra · April", "Tistenna lilek"], ["Skola tal-lingwi · 24 kamra · Frar", "Tistenna lilek"], ["Borg Holdings · 10 kmamar · Marzu", "Mibgħuta · follow-up it-Tlieta"]] },
          { q: "Kemm iċċarġjajna kontribuzzjoni ambjentali f'Ottubru?", summary: "€4,218 fuq 2,812-il lejl ta' adulti. Ir-rapport lest.", rows: [["Iljieli ta' adulti ċċarġjati", "2,812 × €1.50"], ["Mistednin fil-limitu ta' €22.50", "6 soġġorni twal"], ["Imħallsa fiċ-check-out", "€4,083"], ["Għad iridu jinġabru", "€135 · 9 mistednin fil-lukanda"]] },
          { q: "Dwar xiex ilmentaw il-mistednin dan ix-xahar?", summary: "12-il ilment. L-aktar li jissemma huwa l-istorbju mill-bar.", rows: [["Storbju mill-bar", "5 · kmamar li jagħtu fuq it-terrazzin"], ["Wifi bil-mod fit-tielet sular", "3 · irranġat fl-14 ta' Novembru"], ["Kju għall-kolazzjon fid-09:00", "2"], ["Kamra sħuna wisq", "2"]] },
        ],
      },
    },
  ],

  areas: {
    label: "Kull parti tal-lukanda tiegħek",
    title: "Kmamar, gruppi, ristorant, spa. Kollox.",
    intro: "Tbigħ x'tbigħ, is-sistema tieħu ħsieb it-tweġibiet, it-tfakkiriet u l-formoli. It-tim tiegħek jieħu ħsieb il-merħba.",
    colA: "Ix-xogħol tiegħek",
    colB: "Is-sistema tagħmel",
    colC: "Int tagħmel",
    items: [
      { name: "Kmamar u prenotazzjonijiet diretti", system: "Twieġeb kull talba, tagħti r-rata diretta tiegħek, tibgħat il-link tal-prenotazzjoni u tikkonferma d-depożitu.", you: "Tiffissa r-rati u r-regoli." },
      { name: "Gruppi, tiġijiet u avvenimenti", system: "Tiċċekkja l-kmamar, tibni l-kwotazzjoni mir-rati u mill-menu tal-avvenimenti tiegħek, u tibqa' ssegwi sakemm jidħol id-depożitu.", you: "Tapprova l-prezz." },
      { name: "Kumpaniji u konferenzi", system: "Issegwi r-rati tal-kuntratti u l-blokki tal-kmamar, tiġri wara l-listi tal-kmamar u tibgħat il-fattura lill-kumpanija t-tajba.", you: "Tirbaħ il-klijent." },
      { name: "Tour operators u allotments", system: "Iżżomm għajnejha fuq id-dati tar-rilaxx tal-allotments u t-termini tal-kuntratti, u tgħidlek liema kmamar jiġu lura għall-bejgħ.", you: "Tinnegozja l-kuntratt." },
      { name: "Ristorant u bar", system: "Tieħu l-prenotazzjonijiet tal-imwejjed mill-mistednin u minn nies minn barra, u tgħaddi n-noti dwar id-dieta lill-kċina.", you: "Tmexxi s-sala." },
      { name: "Spa, pixxina u extras", system: "Toffri trattamenti, day passes u trasport qabel il-wasla, u tibbukkjahom fid-djarju t-tajjeb.", you: "Tagħżel x'tbigħ." },
      { name: "Appartamenti bis-servizz u kirjiet qosra", system: "Tibgħat il-kodiċi tal-bieb u r-regoli tad-dar, tibbukkja t-tindif bejn soġġorn u ieħor u tiċċekkja li kull unità tkun lesta.", you: "Iżżid aktar unitajiet." },
      { name: "Lukandi boutique u guesthouses", system: "Tagħti lil tim żgħir uffiċċju tal-prenotazzjonijiet li qatt ma jagħlaq: tweġibiet, prenotazzjonijiet, wasliet u reċensjonijiet.", you: "Iżżomm l-attenzjoni personali." },
    ],
  },

  wins: {
    label: "Il-mistednin tiegħek iħossuha l-ewwel",
    title: "Jirbħu huma, tirbaħ int.",
    items: [
      { title: "Tweġiba f'nofsillejl.", body: "Koppja tistaqsi dwar kamra ftit qabel nofsillejl. F'minuta jirċievu prezz u link biex jibbukkjaw. Jibbukkjaw miegħek, mhux mal-lukanda ta' ħdejk." },
      { title: "Dritt għall-kamra.", body: "Id-dettalji taċ-check-in ikunu lesti qabel ma jaslu. Jiġbru ċavetta, mhux formola." },
      { title: "Mismugħ fl-istess jum.", body: "Mistieden mhux kuntent bl-istorbju. Il-maniġer tiegħek ikun jaf sal-kolazzjon u jmexxih għal kamra kwieta qabel l-ikel ta' nofsinhar. Imur lura d-dar bi storja aħjar." },
    ],
  },

  live: {
    label: "Kif tibda",
    h2Before: "Inwaqqfuha għalik fi",
    h2Em: "72 siegħa.",
    body: "Niġu aħna, inqabbdu s-sistemi tiegħek u nwaqqfu kollox. Xejn ġdid x'jitgħallem it-tim tiegħek.",
    steps: [
      { when: "Illum", title: "Telefonata ta' 20 minuta", body: "Dwar kif taħdem il-lukanda tiegħek u fejn qed jintilfu l-prenotazzjonijiet u s-sigħat." },
      { when: "72 siegħa", title: "L-ewwel sistema tiegħek tkun live", body: "Ġeneralment: kull talba fuq WhatsApp, email u l-websajt tiegħek imwieġba, lejl u nhar." },
      { when: "Ġimgħa 2", title: "Is-sistemi tiegħek imqabbda", body: "Kmamar, rati, prenotazzjonijiet u messaġġi tal-mistednin f'post wieħed." },
      { when: "Kull ġimgħa", title: "Tikber miegħek", body: "Titgħallem il-lukanda tiegħek, u x-xogħol li jmiss jibda jaħdem." },
    ],
  },

  ways: {
    label: "Ibda minn fejn trid",
    title: "Xogħol wieħed jew il-lukanda kollha. Tagħżel int.",
    items: [
      { title: "Solvi xogħol wieħed", body: "Agħżel l-unika ħaġa li qed tiswik l-aktar u nawtomatizzaw dik biss.", example: "Eżempju: twieġeb kull talba fuq WhatsApp u l-websajt bil-lejl." },
      { title: "Aqbad ma' dak li tuża", body: "Żomm il-PMS, iċ-channel manager u l-booking engine tiegħek. Aħna naqbdu magħhom.", example: "Eżempju: il-prenotazzjonijiet diretti jidħlu fil-PMS tiegħek bid-depożitu mniżżel." },
      { title: "Is-sistema sħiħa", body: "Dak kollu li hawn f'din il-paġna, mibni madwar il-lukanda tiegħek, imfassal għalik u mieħud ħsiebu minna.", example: "Eżempju: talbiet, gruppi, wasliet, reċensjonijiet u x-xogħol tal-uffiċċju f'post wieħed." },
      { title: "Għadek m'intix ċert?", body: "Ħafna lukandi mhumiex. Inħarsu lejn il-ġimgħa tiegħek u nuruk fejn qed jintilfu l-prenotazzjonijiet u s-sigħat.", example: "B'xejn. Tieħu 20 minuta." },
    ],
  },

  offer: {
    label: "Offerta għal żmien limitat",
    title: "L-ewwel xahar tiegħek b'xejn.",
    body: "Inwaqqfuha fi 72 siegħa u nmexxuha miegħek għal xahar. L-ewwel tara, fil-lukanda tiegħek stess, il-mistednin imwieġba, il-prenotazzjonijiet diretti u s-sigħat li tagħtik lura.",
    cta: "Ħu x-xahar b'xejn tiegħek",
    secondaryCta: "Ibbukkja telefonata ta' 20 minuta",
    listLabel: "X'tieħu",
    items: [
      { strong: "L-ewwel xahar b'xejn.", rest: "Araha taħdem mal-mistednin tiegħek stess qabel tiddeċiedi." },
      { strong: "Imwaqqfa għalik fi 72 siegħa.", rest: "Inqabbdu l-WhatsApp, l-inboxes u s-sistema tal-prenotazzjonijiet tiegħek. Int ma tibdel xejn." },
      { strong: "Is-sistema hija tiegħek.", rest: "Mibnija madwar il-lukanda tiegħek, bil-kmamar, ir-rati u r-regoli tiegħek." },
      { strong: "Immexxija minna.", rest: "Nieħdu ħsiebha u ntejbuha kull ġimgħa, fl-istaġun għoli u f'dak baxx." },
      { strong: "Ibda fiż-żgħir.", rest: "L-ewwel xogħol wieħed, bħat-talbiet ta' billejl. Żid li jmiss meta l-ewwel ikun ħallas għalih innifsu." },
    ],
  },

  calc: {
    label: "In-numri tiegħek",
    title: "Il-kummissjoni li tista' żżomm.",
    mode: "percent",
    inputs: [
      { label: "Prenotazzjonijiet fis-sena mis-siti tal-prenotazzjonijiet", value: 1500 },
      { label: "Sehem li tista' ġġib dirett (%)", value: 10, max: 100 },
      { label: "Kummissjoni fuq prenotazzjoni medja (€)", value: 70 },
    ],
    out1: "Prenotazzjonijiet li jistgħu jiġu dirett kull sena",
    out2: "Kummissjoni li żżomm int",
    footnote: "Nassumu li prenotazzjoni diretta ma tħallasx kummissjoni lis-siti tal-prenotazzjonijiet. Mhux kull mistieden se jaqleb, mela ibdel in-numri biex jaqblu mal-lukanda tiegħek.",
  },

  trust: {
    label: "Tibqa' fit-tmun int",
    title: "Is-sistema tħejji. Il-maniġer tiegħek jiddeċiedi.",
    items: [
      { icon: "scale", title: "Prezzijiet biss mir-regoli tiegħek", body: "Qatt ma toffri prezz, skont jew rifużjoni li ma ffissajtx int. L-eċċezzjonijiet u l-ilmenti jmorru għand persuna." },
      { icon: "lock", title: "Id-data tal-mistednin tibqa' privata", body: "Il-lukanda tiegħek ikollha s-sistema privata tagħha. Id-dettalji tal-mistednin jintużaw biss għal-lukanda tiegħek u jiġu ttrattati skont il-GDPR." },
      { icon: "eye", title: "Kull kelma tiġi rreġistrata", body: "Kull messaġġ, telefonata u prenotazzjoni jiġu rreġistrati, biex dejjem tkun tista' tara x'intqal u x'sar." },
      { icon: "users", title: "Tim f'Malta", body: "It-tim ta' OARC f'Birkirkara jwaqqafha, jgħallimha l-kmamar, ir-rati u r-regoli tal-lukanda tiegħek, u jwieġeb it-telefon." },
    ],
  },

  facts: {
    label: "Għaliex issa",
    title: "Regoli ġodda fl-2026. Kollha jispiċċaw fuq l-iskrivanija tiegħek.",
    items: [
      { n: "€1.50", l: "Kontribuzzjoni ambjentali kull lejl għal kull mistieden ta' 18-il sena jew aktar, mill-1 ta' Lulju 2026. Tidher fuq il-kont bħala linja għaliha.", src: { label: "Malta Tourism Authority: kontribuzzjoni ambjentali", href: "https://mta.com.mt/environmental-contribution/" } },
      { n: "€22.50", l: "L-aktar li jħallas mistieden għal kull żjara. Mhijiex soġġetta għall-VAT jew għal kummissjoni.", src: { label: "Malta Tourism Authority: kontribuzzjoni ambjentali", href: "https://mta.com.mt/environmental-contribution/" } },
      { n: "Ġunju 2026", l: "Regolamenti ġodda dwar l-akkomodazzjoni turistika fis-seħħ mill-15 ta' Ġunju. L-istandards tal-lukandi issa jsegwu l-kriterji tal-2025 sal-2030.", src: { label: "Ċirkolari tal-MTA dwar l-Avviż Legali 92 tal-2026", href: "https://mta.com.mt/notices/circular-tourism-accommodation-2026-collective.pdf" } },
    ],
  },

  faq: [
    { q: "X'inhi, eżattament?", a: "Sistema waħda tal-AI mibnija madwar il-lukanda tiegħek. Twieġeb lil kull mistieden, tbiddel it-talbiet fi prenotazzjonijiet diretti, tabbozza kwotazzjonijiet għal gruppi u avvenimenti, tlesti kollox għall-wasliet, tbigħ l-extras li tagħżel int, tieħu ħsieb ir-reċensjonijiet tiegħek u tagħmel ix-xogħol tal-uffiċċju. It-tim ta' OARC f'Malta jwaqqafha u jmexxiha miegħek." },
    { q: "Tiffissa l-prezzijiet jew tagħti rifużjonijiet?", a: "Le. Tagħti biss ir-rati u l-offerti tiegħek stess. L-iskontijiet, ir-rifużjonijiet, l-eċċezzjonijiet u l-ilmenti dejjem imorru għand il-maniġer jew il-front office tiegħek." },
    { q: "Tagħti parir legali jew dwar it-taxxa?", a: "Le. Taħdem ċifri bħall-kontribuzzjoni ambjentali mill-prenotazzjonijiet tiegħek stess u żżommhom fl-ordni. Il-maniġer jew l-accountant tiegħek jiċċekkjahom u jiddeċiedi." },
    { q: "Se tieħu post ir-receptionists jew it-tim tal-prenotazzjonijiet tagħna?", a: "Le. Tieħu l-mistoqsijiet ripetuti, il-messaġġi ta' billejl u l-mili tal-formoli, biex il-front office tiegħek ikun jista' jieħu ħsieb il-mistednin li għandu quddiemu." },
    { q: "Id-data tal-mistednin tinżamm privata?", a: "Iva. Kull lukanda għandha s-sistema privata tagħha. Id-dettalji tal-mistednin jintużaw biss għal-lukanda tiegħek u jiġu ttrattati skont il-GDPR." },
    { q: "Taħdem mal-PMS u ċ-channel manager tagħna?", a: "Iva. Inqabbduha mal-PMS, iċ-channel manager, il-booking engine u l-inboxes li diġà tuża. Jekk ma teżistix konnessjoni, nibnu waħda." },
    { q: "Tassew se ġġib aktar prenotazzjonijiet diretti?", a: "Twieġeb lil kull mistieden malajr, tagħti r-rata diretta tiegħek u tibgħat il-link tal-prenotazzjoni tiegħek stess, biex inqas nies jispiċċaw fuq sit tal-prenotazzjonijiet waqt li jkunu qed jistennew. Ma tistax twaqqaf lill-mistednin milli jużaw is-siti tal-prenotazzjonijiet, u r-rati u l-websajt tiegħek xorta jgħoddu." },
    { q: "Tista' tagħmel ħaġa waħda biss?", a: "Iva. Tista' tibda b'xogħol wieħed, bħal li twieġeb kull talba bil-lejl, u żżid li jmiss meta l-ewwel ikun ħallas għalih innifsu." },
    { q: "Kemm iddum biex tibda taħdem?", a: "Inwaqqfu l-ewwel sistema tiegħek fi 72 siegħa, ġeneralment biex twieġeb kull talba fuq il-WhatsApp, l-email u l-websajt tiegħek. Il-bqija jitqabbad fil-ġimgħat ta' wara." },
    { q: "L-aġenti tal-AI jċemplu lill-mistednin?", a: "Iva. Aġent bil-vuċi jwieġeb it-telefon tiegħek u jċempel lill-mistednin dwar ħinijiet tal-wasla, depożiti mhux imħallsa u kmamar li nħelsu. Qatt ma joffri prezz barra mir-regoli tiegħek, u t-tim tiegħek jista' jieħu f'idejh kwalunkwe telefonata." },
    { q: "U jekk tiżbalja f'xi ħaġa?", a: "Twieġeb biss mill-kmamar, ir-rati u r-regoli tal-lukanda tiegħek stess, u tgħaddi lit-tim tiegħek kull ħaġa li ma tkunx ċerta minnha. Kull messaġġ u telefonata jiġu rreġistrati, biex tkun tista' tara x'intqal. Jekk ikun hemm xi ħaġa x'tinbidel, jibdilha t-tim ta' OARC f'Malta." },
    { q: "Kemm tiswa?", a: "Bħalissa l-ewwel xahar huwa b'xejn. Wara jiddependi mid-daqs tal-lukanda tiegħek u minn dak li tixgħel. Staqsina u nagħtuk prezz għal-lukanda tiegħek." },
    { q: "Kemm hi l-kontribuzzjoni ambjentali f'Malta?", a: "Mill-1 ta' Lulju 2026, €1.50 kull lejl għal kull mistieden li jkollu 18-il sena jew aktar fil-bidu taż-żjara, sa €22.50 għal kull persuna għal kull żjara. Il-limitu jkopri wkoll żjara maqsuma bejn Malta u Għawdex. Trid tiġi ċċarġjata separatament mir-rata tal-kamra, bħala linja għaliha fuq il-fattura jew l-irċevuta, u mhijiex soġġetta għall-VAT jew għal kummissjoni." },
    { q: "Min jieħu ħsieb il-kontribuzzjoni ambjentali f'Malta?", a: "L-awtorità responsabbli hija l-Malta Tourism Authority. Xi xogħol operattiv u ta' koordinazzjoni ġie ddelegat lill-Malta Hotels and Restaurants Association (MHRA). Il-lukandi, u s-siti u l-aġenti li jieħdu l-prenotazzjonijiet, jistgħu jiġu ordnati jaħdmu mal-MHRA biex jiġbruha, jirrapportawha u jgħadduha." },
    { q: "X'inhuma r-Regolamenti l-ġodda ta' Malta dwar l-Akkomodazzjoni Turistika?", a: "L-Avviż Legali 92 tal-2026, fis-seħħ mill-15 ta' Ġunju 2026. Jiġbru erba' settijiet eqdem ta' regoli f'wieħed, u jkopru lukandi, guesthouses, hostels u kirjiet għal żmien qasir. L-istandards tal-lukandi issa jsegwu l-kriterji tal-Hotel Stars Union għall-2025 sal-2030, u l-lukandi eżistenti huma mistennija jibdew jadattaw." },
  ],

  cta: {
    titleBefore: "Żomm il-mistednin li jistaqsu lilek l-ewwel.",
    titleEm: "U l-kummissjoni.",
    body: "Ħu l-ewwel xahar b'xejn tiegħek. Inwaqqfuha għalik fi 72 siegħa.",
    button: "Ħu x-xahar b'xejn tiegħek",
    secondary: "Ibbukkja telefonata ta' 20 minuta",
  },

  sources: [
    { label: "Malta Tourism Authority: kontribuzzjoni ambjentali", href: "https://mta.com.mt/environmental-contribution/" },
    { label: "Ċirkolari tal-MTA: Regolamenti dwar l-Akkomodazzjoni Turistika, 2026", href: "https://mta.com.mt/notices/circular-tourism-accommodation-2026-collective.pdf" },
    { label: "Avviż Legali 92 tal-2026 (legislation.mt)", href: "https://legislation.mt/eli/ln/2026/92/eng" },
  ],
  related: [
    { label: "Marketing għal-lukandi f'Malta", href: "/industries/hotels" },
    { label: "Voice AI għall-ospitalità", href: "/voice-ai-worker/hospitality" },
    { label: "Prenotazzjonijiet diretti jew siti tal-prenotazzjonijiet", href: "/aeo/hotel-marketing-malta" },
    { label: "AI għar-ristoranti", href: "/ai/restaurants" },
  ],
  disclaimer: "OARC Digital · Malta. OARC Digital mhijiex konsulent tat-taxxa u ma tagħtix parir legali jew dwar it-taxxa. L-ismijiet u ċ-ċifri fuq l-iskrins huma minn kont demo.",
};

export default hotels;
