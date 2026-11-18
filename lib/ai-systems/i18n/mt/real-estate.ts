import type { AiSystemContent } from "@/lib/ai-systems/types";

// Maltese twin of lib/ai-systems/real-estate.ts (/mt/ai/real-estate).
// Same structure, numbers, icons and source links as the English file.

const realEstateMt: AiSystemContent = {
  slug: "real-estate",
  name: "Aġenziji tal-proprjetà",
  barLabel: "AI għall-proprjetà",
  business: "aġenzija tal-proprjetà",
  metaTitle: "Sistema tal-AI għall-Aġenziji tal-Proprjetà f'Malta | OARC",
  metaDescription:
    "Is-sistema tal-AI mibnija madwar l-aġenzija tal-proprjetà tiegħek f'Malta. Twieġeb għal kull talba 24/7, issib sidien lesti jbigħu u ssegwi kull kirja.",
  updated: "2026-11-14",
  serviceType: "Sistema tal-AI u awtomazzjoni għall-aġenziji tal-bejgħ u tal-kiri tal-proprjetà",
  schemaDescription:
    "Sistema tal-AI mibnija madwar kull aġenzija tal-bejgħ jew tal-kiri tal-proprjetà f'Malta. Twieġeb għal kull talba 24/7, tikkwalifika l-leads, tibbukkja l-viewings, issegwi l-kirjiet u l-iskadenzi tal-avviż, issib sidien lesti jbigħu jew jikru, tikteb ir-reklami tal-proprjetajiet, tmexxi t-tiġdid tal-kirjiet, u tieħu ħsieb it-tiswijiet, il-kera u l-karti. Imwaqqfa u mmexxija mit-tim ta' OARC Digital f'Malta.",
  hub: {
    title: "Aġenziji tal-proprjetà",
    body: "Kull talba mwieġba f'inqas minn minuta. Kull kirja segwita. Kull filgħodu, lista ta' sidien lesti jbigħu jew jikru.",
    gain: "Bejgħ, kiri u ġestjoni tal-proprjetà",
  },

  proof: { line: "Qed taħdem fi 8 aġenziji tal-proprjetà f'Malta", short: "Fi 8 aġenziji f'Malta" },

  hero: {
    pill: "Inwaqqfuha għalik fi 72 siegħa",
    kicker: "Fl-aħħar, għandek",
    h1Before: "Sistema waħda sħiħa tal-AI mibnija madwar",
    h1Highlight: "l-aġenzija tal-proprjetà tiegħek.",
    sub: "Aġenti tal-intelliġenza artifiċjali (AI) imħarrġin fuq l-aġenzija tiegħek iwieġbu, iċemplu u jsegwu kull lead. Is-sistema ssegwi kull kirja, issib sidien lesti jbigħu jew jikru u tagħmel il-karti. L-aġenti tiegħek juru d-djar u jagħlqu l-ftehimiet.",
    primaryCta: "Ħu x-xahar b'xejn tiegħek",
    secondaryCta: "Ibbukkja telefonata ta' 20 minuta",
    note: "L-ewwel xahar b'xejn. Imwaqqfa u mmexxija mit-tim ta' OARC f'Malta.",
  },

  film: {
    title: "Araha taħdem: lejl wieħed, għodwa waħda",
    scenes: [
      {
        clock: "Il-Ħadd · 23:14",
        caption: "Kerrej jistaqsi dwar appartament. L-uffiċċju tiegħek magħluq.",
        result: "Imwieġeb fi 38 sekonda. Viewing ibbukkjat.",
        visual: {
          type: "chat",
          initials: "SK",
          name: "Sofia K.",
          origin: "WhatsApp · talba ġdida",
          status: "Imwieġba",
          messages: [
            { from: "in", text: "Hello! L-appartament b'2 kmamar tas-sodda f'Tas-Sliema għadu disponibbli mill-1 ta' Diċembru? Il-baġit tiegħi hu ta' €1,400.", time: "23:14" },
            { from: "out", text: "Hello Sofia, iva, għadu. Nista' nurihulek il-Ħamis fis-6pm jew is-Sibt fil-11am. Liema jaqbillek?", time: "23:14" },
            { from: "in", text: "Il-Ħamis fis-6pm, jekk jogħġbok.", time: "23:16" },
          ],
          done: { before: "Viewing ibbukkjat ma' Daniel · ", strong: "Ħam 18:00", after: " · it-tnejn imfakkrin" },
        },
      },
      {
        clock: "It-Tnejn · 10:02",
        caption: "Lead tax-xahar l-ieħor siket. L-aġent tal-AI tiegħek iċempillu.",
        result: "Lura fil-pipeline tiegħek",
        visual: {
          type: "chat",
          initials: "JR",
          name: "James R.",
          origin: "Telefonata · 1 min 40 sek",
          status: "Ċempilnielu",
          messages: [
            { from: "out", text: "Hello James, jien l-assistent tal-AI tal-aġenzija tiegħek. Kont staqsejt dwar appartamenti b'2 kmamar tas-sodda f'Tas-Sliema. Għadek tfittex?", time: "10:02" },
            { from: "in", text: "Iva, imma l-baġit tiegħi tela' għal €1,800.", time: "10:02" },
            { from: "out", text: "Mela għandi tlieta ġodda. Tista' Maria turik tnejn l-Erbgħa fil-5:30pm?", time: "10:03" },
          ],
          done: { before: "Viewing ibbukkjat ma' Maria · ", strong: "Erb 17:30", after: " · noti miżmuma" },
        },
      },
      {
        clock: "It-Tlieta · 07:30",
        caption: "L-aġenti tiegħek jiftħu lista waħda: lil liema sidien iċemplu l-ewwel, u għaliex.",
        result: "4 sidien lesti jbigħu jew jikru",
        visual: {
          type: "rows",
          title: "Il-lista tat-telefonati tal-lum",
          hint: "Skont kemm huma lesti",
          action: "call",
          rows: [
            { badge: "92", top: true, title: "Robert C. · 3 kmamar tas-sodda, Tas-Sliema", detail: "Xtara fl-2016. Talab valutazzjoni x-xahar l-ieħor." },
            { badge: "88", title: "Sid fuq Facebook Marketplace · 2 kmamar tas-sodda, il-Gżira", detail: "Ilu jirreklama waħdu mill-Ħadd. Għad m'għandux aġenzija." },
            { badge: "84", title: "Anna V. · 2 kmamar tas-sodda, l-Imsida", detail: "Il-kirja tal-kerrej tagħha tintemm fi 90 jum." },
          ],
        },
      },
    ],
  },

  dashboard: {
    title: "L-aġenzija kollha tiegħek fuq skrin wieħed.",
    body: "Kull filgħodu: x'daħal matul il-lejl, fejn hemm bżonnok, u lil min iċċempel l-ewwel.",
    org: "L-Aġenzija Tiegħek",
    search: "Staqsi kwalunkwe ħaġa… “Liema kirjiet jintemmu f'Marzu?”",
    initials: "MA",
    nav: [
      { label: "Illum" }, { label: "Talbiet", badge: "23" }, { label: "Kirjiet" }, { label: "Sidien" },
      { label: "Proprjetajiet" }, { label: "Viewings" }, { label: "Kera u tiswijiet" }, { label: "Rapporti" },
    ],
    greeting: "Bonġu, Maria",
    status: "Qed taħdem · kollox iċċekkjat matul il-lejl",
    kpis: [
      { label: "Talbiet imwieġba", value: "23", note: "Kollha fi żmien minuta" },
      { label: "Kirjiet li jintemmu fi 90 jum", value: "11", note: "Is-sidien u l-kerrejja mistoqsijin" },
      { label: "Sidien lesti jbigħu jew jikru", value: "4", note: "Fuq il-lista tat-telefonati tal-lum" },
      { label: "Kera mhux imħallsa", value: "€1,950", note: "2 tfakkiriet mibgħuta", alert: true },
    ],
    todoTitle: "Hemm bżonnok illum",
    todos: [
      { initials: "JP", title: "Kerrej sejjer · App. 7, San Ġiljan", detail: "Fis-suq minn dalgħodu. Intbagħat lil 9 persuni li diġà qed ifittxu.", tag: "Fis-suq", on: true },
      { initials: "RC", title: "Sid jista' jbigħ · 3 kmamar tas-sodda, Tas-Sliema", detail: "Xtara fl-2016, talab valutazzjoni x-xahar l-ieħor.", tag: "Ċempel illum" },
      { initials: "LK", title: "Viewing · Ħam 18:00 · studio fil-Gżira", detail: "Ibbukkjat fuq WhatsApp, 23:14. Iż-żewġ naħat imfakkra.", tag: "Ibbukkjat" },
      { initials: "DM", title: "Tnixxija rrappurtata · 2 kmamar tas-sodda, l-Imsida", detail: "Plamer ibbukkjat għall-10:00. Il-kerrej u s-sid infurmati.", tag: "Meħud ħsiebha" },
    ],
    chartTitle: "Talbiet din il-ġimgħa",
    bars: [
      { label: "Tne", h: 46 }, { label: "Tli", h: 58 }, { label: "Erb", h: 40 }, { label: "Ħam", h: 72 },
      { label: "Ġim", h: 64 }, { label: "Sib", h: 88 }, { label: "Ħad", h: 100 },
    ],
    chartFoot: { label: "Medja tal-ewwel tweġiba", value: "38 sek" },
    chatFloat: {
      channel: "WhatsApp · talba ġdida",
      time: "23:14",
      incoming: "Hello, l-appartament b'2 kmamar tas-sodda f'Tas-Sliema għadu disponibbli minn Diċembru?",
      reply: "Iva, għadu. Nista' nurihulek Ħam 18:00 jew Sib 11:00. Liema jaqbillek?",
      receipt: "Imwieġeb fi 38 sek · viewing ibbukkjat",
    },
    alertFloat: {
      label: "Radar tal-kirjiet · issa",
      title: "Kerrej sejjer f'Marzu",
      detail: "App. 7, San Ġiljan · €1,450. Fis-suq qabel ma jkun jaf ħaddieħor.",
      tag: "Fis-suq · mibgħut lil 9",
    },
  },

  worksWith: ["WhatsApp", "Gmail u Outlook", "Telefonati", "Excel u Google Sheets", "Is-CRM tiegħek", "Portali tal-proprjetà", "Facebook u Instagram"],

  pillars: {
    label: "Mibnija madwarek",
    title: "L-aġenzija tiegħek. Id-data tiegħek. Il-mod kif taħdem int.",
    items: [
      { icon: "network", title: "Tgħaqqad id-data kollha tiegħek", body: "Kirjiet, proprjetajiet, klijenti, WhatsApp, email u spreadsheets. Post wieħed, dejjem aġġornat." },
      { icon: "workflow", title: "Taħdem bil-mod kif taħdem int", body: "L-aġenti tiegħek iżommu l-għodod li jafu. Is-sistema taħdem fl-isfond u tgħaddilhom dak li hu lest." },
      { icon: "trending", title: "Tikber miegħek", body: "Kull ġimgħa titgħallem aktar dwar l-aġenzija tiegħek. Ibda b'biċċa xogħol waħda u żid oħra meta l-ewwel waħda tkun ħallset għaliha nfisha." },
    ],
  },

  agents: {
    label: "It-tim tal-bejgħ tal-AI tiegħek",
    title: "Tliet aġenti tal-AI. Imħarrġin fuq l-aġenzija tiegħek. Jaħdmu fuq kull lead.",
    intro: "Jiktbu fuq WhatsApp u jċemplu. Kull wieħed jaf il-proprjetajiet tiegħek, il-prezzijiet tiegħek u kif titkellem l-aġenzija tiegħek.",
    note: "Jgħaddu kollox lill-aġent tiegħek malli jkun hemm bżonn ta' persuna, u l-aġent tiegħek jista' jidħol f'kull chat jew telefonata.",
    items: [
      {
        name: "Aġent tal-leads",
        title: "Jaqbad kull lead.",
        points: [
          "Iwieġeb fuq WhatsApp, il-portali, il-websajt tiegħek, Facebook u Instagram f'inqas minn minuta.",
          "Iżomm għajnejh fuq Facebook, Instagram u l-marketplaces għal sidien u proprjetajiet li għad m'għandekx.",
          "Jistaqsi dwar il-baġit, id-dati u l-bżonn ta' permess, imbagħad jgħaddilek lil dawk li huma lesti.",
        ],
        channels: ["WhatsApp", "Portali", "Facebook u Instagram", "Websajt"],
        result: "L-ebda lead ma jintilef",
      },
      {
        name: "Aġent tal-follow-up",
        title: "Ma jħalli l-ebda lead jibred.",
        points: [
          "Jibgħat messaġġi u jċempel lil kull lead sakemm jgħid iva, le jew mhux issa.",
          "Jiftakar x'riedet kull persuna u jerġa' jiktbilha meta titla' fis-suq dar li taqbel magħha.",
          "Ifakkar lill-klijenti dwar il-viewings, id-dokumenti u l-iskadenzi tal-kirjiet.",
        ],
        channels: ["Telefonati", "WhatsApp", "Email"],
        result: "Leads qodma jsiru viewings",
      },
      {
        name: "Aġent tal-bejgħ",
        title: "Iwassal sal-ftehim.",
        points: [
          "Iċempel lura lill-leads l-aktar sħan fi ftit minuti u jibbukkja l-viewing jew il-valutazzjoni fid-djarju tal-aġent tiegħek.",
          "Jibgħat il-passi li jmiss, jiġri wara l-karti u jżomm liż-żewġ naħat aġġornati.",
          "Jgħid lill-aġent tiegħek eżatt min hu lest jiffirma llum.",
        ],
        channels: ["Telefonati", "WhatsApp", "Il-kalendarju tiegħek"],
        result: "L-aġenti tiegħek jagħlqu biss",
      },
    ],
  },

  jobs: {
    label: "Dak kollu li tagħmel",
    title: "Sistema waħda. Dsatax-il biċċa xogħol magħmula għalik.",
    items: [
      { icon: "chat", title: "Twieġeb għal kull talba, 24/7", body: "WhatsApp, portali, il-websajt tiegħek, Facebook u t-telefon. Bil-lingwa tal-klijent.", gain: "L-ebda lead ma jibred" },
      { icon: "filter", title: "Tikkwalifika kull lead", body: "Baġit, data tad-dħul, min se joqgħod hemm, bżonn ta' permess. Il-leads is-sħan imorru dritt għand l-aġent tiegħek.", gain: "L-aġenti jkellmu biss lil min hu lest" },
      { icon: "calendar", title: "Tibbukkja kull viewing", body: "Issib ħin, tikkonfermah, tfakkar liż-żewġ naħat u tibdlu meta jinbidlu l-pjanijiet.", gain: "Inqas nies li ma jiġux" },
      { icon: "clock", title: "Taf liema appartamenti se jitbattlu", body: "Issegwi kull tmiem ta' kirja u l-iskadenza tal-avviż ta' 3 xhur, u tistaqsi lill-kerrej u lis-sid minn kmieni.", gain: "Tasal l-ewwel" },
      { icon: "userPlus", title: "Issib sidien lesti jbigħu jew jikru", body: "Kull filgħodu, lista ta' min iċċempel l-ewwel, bir-raġuni għaliex kull sid x'aktarx jiċċaqlaq.", gain: "Aktar proprjetajiet mill-kompetituri tiegħek" },
      { icon: "refresh", title: "Tqajjem il-kuntatti l-qodma tiegħek", body: "Tibgħat messaġġ lil min staqsa qabel, lil kerrejja u lil xerrejja, b'xi ħaġa li taqbel magħhom illum.", gain: "Negozju minn nies li diġà taf" },
      { icon: "phone", title: "Iċċempel lill-leads tiegħek", body: "Aġent bil-vuċi jċempel lill-leads il-ġodda u lil dawk li siktu, iwieġeb mill-proprjetajiet tiegħek u jibbukkja l-viewing.", gain: "Leads milħuqin fi ftit minuti" },
      { icon: "search", title: "Iżżomm għajnejha fuq Facebook, Instagram u Marketplace", body: "Tinnota sidien li qed jirreklamaw waħedhom u proprjetajiet li għad m'għandekx.", gain: "Proprjetajiet li l-kompetituri ma jarawx" },
      { icon: "trending", title: "Tgħinek tinstab fuq Google u fit-tweġibiet tal-AI", body: "SEO għal Google, flimkien max-xogħol li jgħin lil ChatGPT u Gemini jirrakkomandaw l-aġenzija tiegħek.", gain: "Aktar nies isibu lilek l-ewwel" },
      { icon: "link", title: "Tqabbel kull proprjetà ġdida", body: "Malli appartament jitla' online, jintbagħat lil kull min diġà qed ifittex wieħed bħalu.", gain: "Mikri qabel ma jiġi rreklamat" },
      { icon: "pen", title: "Tikteb ir-reklami tal-proprjetajiet", body: "Deskrizzjonijiet bl-istil tal-aġenzija tiegħek, bl-Ingliż u bil-lingwi li jitkellmu l-klijenti tiegħek.", gain: "Reklami lesti fi ftit minuti" },
      { icon: "image", title: "Tagħmel ir-ritratti u r-reklami jbigħu", body: "Ittejjeb ir-ritratti, tarma kmamar vojta, u toħloq reklami u vidjows qosra għal kull proprjetà.", gain: "Aktar klikks, aktar viewings" },
      { icon: "euro", title: "Tivvaluta proprjetà fi ftit minuti", body: "Rapport ċar tal-prezz minn prezzijiet lokali reali, biex tidħol għal-laqgħa ppreparat.", gain: "Is-sid jagħżel lilek" },
      { icon: "repeat", title: "Tmexxi t-tiġdid u r-reviżjoni tal-kera", body: "Tistaqsi xhur qabel, tabbozza t-tiġdid u tissuġġerixxi reviżjoni tal-kera fil-limitu tal-liġi.", gain: "Żomm kull kerrej tajjeb" },
      { icon: "wrench", title: "Tieħu ħsieb it-tiswijiet", body: "Tieħu t-talba, tpoġġi l-emerġenzi l-ewwel, tibbukkja l-kuntrattur u żżomm lil kulħadd infurmat.", gain: "Kerrejja kalmi, sidien kuntenti" },
      { icon: "card", title: "Tiġri wara l-kera u l-fatturi", body: "Tfakkiriet bil-ħlewwa qabel id-data tal-ħlas, aktar sodi wara, u fatturi mibgħuta fil-ħin.", gain: "Flus deħlin, fil-ħin" },
      { icon: "file", title: "Tagħmel il-karti", body: "Kirjiet, reġistrazzjoni fil-limitu ta' 30 jum, dati tal-konvenju u verifiki tal-klijenti.", gain: "L-ebda skadenza ma tintilef" },
      { icon: "chart", title: "Tirrapporta lil kull sid", body: "Rapport ta' kull xahar b'dak kollu li sar għall-proprjetà tiegħu, mibgħut mingħajr ma jiktbu ħadd.", gain: "Is-sidien jibqgħu miegħek" },
      { icon: "sun", title: "Tinfurmak kull filgħodu", body: "X'ġara matul il-lejl: proprjetajiet ġodda, bidliet fil-prezzijiet, proġetti ġodda u lil min iċċempel l-ewwel.", gain: "Dejjem pass 'il quddiem" },
    ],
  },

  spotlights: [
    {
      label: "Talbiet",
      title: "Kull talba mwieġba fi ftit sekondi. Lejl u nhar.",
      points: [
        "Twieġeb fuq WhatsApp, il-portali, il-websajt tiegħek u t-telefon, bil-lingwa tal-klijent.",
        "Tistaqsi l-mistoqsijiet it-tajba: baġit, data tad-dħul, min se joqgħod hemm u bżonn ta' permess.",
        "Tibbukkja l-viewing, tfakkar lil kulħadd, u tibqa' ssegwi sakemm jiffirmaw.",
      ],
      visual: {
        type: "chat",
        initials: "SK",
        name: "Sofia K.",
        origin: "Talba minn portal tal-proprjetà",
        status: "Imwieġba",
        messages: [
          { from: "in", text: "Hello! Qed infittex appartament b'2 kmamar tas-sodda f'Tas-Sliema jew fil-Gżira mill-1 ta' Diċembru, baġit ta' madwar €1,400.", time: "23:14" },
          { from: "out", text: "Hello Sofia, għandi tnejn li jaqblu. Kemm-il persuna se tgħix hemm, u se jkollok bżonn il-kuntratt għal permess ta' residenza?", time: "23:14" },
          { from: "in", text: "Aħna tnejn. Iva, għall-permess tiegħi.", time: "23:16" },
          { from: "out", text: "Perfett. Nista' nurihomlok it-tnejn nhar il-Ħamis. Liema ħin jaqbillek?", time: "23:16" },
        ],
        slots: ["Ħam 18:00", "Sib 11:00"],
        done: { before: "Viewing ibbukkjat ma' Daniel · ", strong: "Ħam 18:00", after: " · it-tnejn imfakkrin" },
      },
    },
    {
      label: "Sidien u proprjetajiet",
      title: "Is-sid li jmiss diġà qiegħed fil-mowbajl tiegħek.",
      points: [
        "Kull filgħodu tagħti lill-aġenti tiegħek lista ta' min iċemplu l-ewwel: sidien li x'aktarx ibigħu jew jikru, bir-raġuni.",
        "Tinnota xerrejja tal-passat li jistgħu jbigħu, kirjiet li waslu biex jintemmu u proġetti ġodda fl-istadju tal-permessi.",
        "Tipprepara l-valutazzjoni, biex l-aġent tiegħek jidħol bil-prezz it-tajjeb.",
      ],
      visual: {
        type: "rows",
        title: "Il-lista tat-telefonati tal-lum",
        hint: "Skont kemm huma lesti",
        action: "call",
        rows: [
          { badge: "92", top: true, title: "Robert C. · 3 kmamar tas-sodda, Tas-Sliema", detail: "Xtara fl-2016. Talab valutazzjoni x-xahar l-ieħor." },
          { badge: "84", title: "Anna V. · 2 kmamar tas-sodda, l-Imsida", detail: "Il-kirja tal-kerrej tagħha tintemm fi 90 jum. Għadha ma qalitx jekk hix se ġġedded." },
          { badge: "77", title: "Mark B. · villa fis-Swieqi", detail: "Jgħix barra minn Malta. Fetaħ l-aħħar żewġ rapporti tas-sidien li bgħattlu." },
          { badge: "71", title: "Proġett ġdid · il-Gżira", detail: "Applikazzjoni tal-ippjanar għal 8 appartamenti ppreżentata din il-ġimgħa." },
        ],
      },
    },
    {
      label: "Kirjiet u tiġdid",
      title: "Qatt aktar ma titlef skadenza ta' kirja.",
      points: [
        "Issegwi kull tmiem ta' kirja u l-iskadenza tal-avviż ta' 3 xhur tas-sid.",
        "Tistaqsi lill-kerrej u lis-sid xhur qabel, u tabbozza t-tiġdid.",
        "Jekk il-kerrej sejjer, l-appartament jitla' fis-suq dakinhar stess u jintbagħat lil min diġà qed ifittex.",
      ],
      visual: {
        type: "timeline",
        title: "App. 7, San Ġiljan · 2 kmamar tas-sodda · €1,450",
        subtitle: "Il-kirja tintemm fit-28 ta' Frar 2027",
        steps: [
          { when: "Jum −120", title: "Is-sid mistoqsi: iġġedded, tirrevedi l-kera jew tieħu l-post lura?", detail: "Mibgħuta fuq WhatsApp bil-lingwa tas-sid." },
          { when: "Jum −120", title: "Il-kerrej mistoqsi: se tibqa' jew se titlaq?", detail: "Tweġiba: se jitlaq f'Marzu." },
          { when: "Jum −119", title: "Fis-suq qabel ma jkun jaf ħaddieħor", detail: "Ritratti bbukkjati. Intbagħat lil 9 persuni li diġà qed ifittxu.", key: true, tag: "Fis-suq · mibgħut lil 9" },
          { when: "Jum −90", title: "L-iskadenza tal-avviż tas-sid", detail: "Milħuqa. Xejn ma jiġġedded bi żball." },
          { when: "Jum +30", title: "Kirja ġdida rreġistrata fil-ħin", detail: "Fil-limitu ta' 30 jum. Fattura mibgħuta." },
        ],
      },
    },
    {
      label: "Staqsi kwalunkwe ħaġa",
      title: "Staqsiha bħalma tistaqsi lill-aqwa aġent tiegħek.",
      points: [
        "Ikteb jew għid mistoqsija bi kliem sempliċi. It-tweġiba tiġi mid-data tiegħek stess.",
        "L-ebda rapport x'tibni, l-ebda spreadsheet x'tfittex.",
      ],
      visual: {
        type: "ask",
        questions: [
          { q: "Liema kirjiet jintemmu f'Marzu?", summary: "7 kirjiet jintemmu f'Marzu. Is-sidien ġew mistoqsijin dwarhom kollha.", rows: [["App. 7, San Ġiljan", "Kerrej sejjer · fis-suq"], ["Flat 3, Tas-Sliema", "Tiġġedded +3%"], ["App. 12, l-Imsida", "Is-sid qed jiddeċiedi"], ["Studio 2, il-Gżira", "Tiġġedded"], ["+ 3 oħra", "Arahom kollha"]] },
          { q: "Min staqsa dwar 2 kmamar tas-sodda f'Tas-Sliema?", summary: "14-il persuna fl-aħħar 30 jum. 9 għadhom ifittxu.", rows: [["Sofia K.", "€1,400 · mill-1 ta' Diċ"], ["James R.", "€1,600 · minn Jan"], ["Ana P. u Luca M.", "€1,300 · jeħtieġu permess"], ["Tomasz W.", "€1,500 · minn Frar"], ["+ 10 oħra", "Arahom kollha"]] },
          { q: "Liema sidien ilhom ma jisimgħu mingħandna?", summary: "23 sid ilhom 6 xhur bla kuntatt. Messaġġ ta' kuntatt lest biex jintbagħat.", rows: [["Mark B.", "Villa fis-Swieqi · 8 xhur"], ["Carmen F.", "2 kmamar tas-sodda, Birkirkara · 7 xhur"], ["Paul Z.", "3 kmamar tas-sodda, il-Mellieħa · 6 xhur"], ["Rita G.", "Studio f'Tas-Sliema · 6 xhur"], ["+ 19 oħra", "Arahom kollha"]] },
          { q: "Kif mar kull aġent din il-ġimgħa?", summary: "52 viewing ibbukkjat, 9 kirjiet miftiehma, 3 proprjetajiet ġodda miksuba.", rows: [["Daniel", "18-il viewing · 4 kirjiet"], ["Maria", "15-il viewing · 3 kirjiet · 2 proprjetajiet ġodda"], ["Kurt", "12-il viewing · 2 kirjiet · proprjetà ġdida 1"], ["Ix-xift ta' billejl (is-sistema)", "41 talba mwieġba"]] },
        ],
      },
    },
  ],

  areas: {
    label: "Kull tip ta' proprjetà",
    title: "Bejgħ, kiri, kummerċjali. Kollox.",
    intro: "Ikun x'ikun għandek fil-kotba tiegħek, is-sistema tiġri wara kulħadd u l-aġenti tiegħek jagħlqu l-ftehim.",
    colA: "Ix-xogħol tiegħek",
    colB: "X'tagħmel is-sistema",
    colC: "X'jagħmel l-aġent tiegħek",
    items: [
      { name: "Kiri fit-tul", system: "Twieġeb għat-talbiet, tibbukkja l-viewings, issegwi kull tmiem ta' kirja u kull data tal-avviż, tabbozza t-tiġdid, tirreġistra l-kirja u tiġri wara l-kera.", you: "Juri l-appartament u jiffirma mal-kerrej." },
      { name: "Bejgħ", system: "Issib sidien lesti jbigħu, tipprepara l-valutazzjoni, tqabbel ix-xerrejja, issegwi wara kull viewing u żżomm għajnejha fuq id-dati tal-konvenju.", you: "Jirbaħ il-fiduċja tas-sid u jagħlaq il-bejgħ." },
      { name: "Kiri għal żmien qasir", system: "Twieġeb lill-mistednin bil-lingwa tagħhom, tieħu ħsieb il-messaġġi taċ-check-in, tibbukkja t-tindif u t-tiswijiet, u tirrapporta d-dħul lis-sid.", you: "Ikabbar in-numru ta' djar li timmaniġġja." },
      { name: "Kummerċjali", system: "Issegwi t-termini tal-kirjiet, id-dati meta kirja tista' tinqata' kmieni u r-reviżjonijiet tal-kera għal ħwienet u uffiċċji, u tgħidlek min qed ifittex spazju.", you: "Jinnegozja t-termini." },
      { name: "Żviluppi ġodda", system: "Taqbad kull talba mir-reklami u mill-websajt, tibgħat il-pjanti u l-prezzijiet, u żżomm lix-xerrejja aġġornati saċ-ċwievet.", you: "Jiltaqa' max-xerrejja s-serji." },
      { name: "Ġestjoni tal-proprjetà", system: "Tieħu t-talbiet għat-tiswija, tibbukkja l-kuntratturi, tiġbor il-kera u tibgħat rapport ta' kull xahar lil kull sid.", you: "Iżomm lis-sidien għal snin sħaħ." },
    ],
  },

  wins: {
    label: "Il-klijenti tiegħek iħossuha l-ewwel",
    title: "Meta jirbħu huma, tirbaħ int.",
    items: [
      { title: "Tweġiba f'inqas minn minuta.", body: "Fil-11 ta' billejl, nhar ta' Ħadd, kerrej jistaqsi dwar appartament. Jieħu tweġiba u ħin għall-viewing. L-aġenzija tiegħek hi dik li jiftakar." },
      { title: "Sidien li dejjem jafu.", body: "Kull sid jirċievi rapport ta' kull xahar mingħajr ma jistaqsi. Jieqaf iċempel biex jiċċekkja. Jieqaf ukoll ifittex aġenziji oħra." },
      { title: "Id-dar it-tajba, l-ewwel.", body: "Xerrejja u kerrejja jisimgħu b'dar li taqbel magħhom malli titla' fis-suq. Ħafna ftehimiet jingħalqu qabel ma joħroġ ir-reklam." },
    ],
  },

  live: {
    label: "Kif tibda",
    h2Before: "Inwaqqfuha għalik fi",
    h2Em: "72 siegħa.",
    body: "Niġu, ngħaqqdu l-għodod tiegħek u nwaqqfu kollox aħna. L-aġenti tiegħek m'għandhom xejn ġdid x'jitgħallmu.",
    steps: [
      { when: "Illum", title: "Telefonata ta' 20 minuta", body: "Dwar kif taħdem l-aġenzija tiegħek u fejn titlef ħin u negozju." },
      { when: "72 siegħa", title: "L-ewwel sistema tiegħek tkun qed taħdem", body: "Kull talba fuq il-WhatsApp u l-websajt tiegħek imwieġba, 24/7." },
      { when: "Ġimgħa 2", title: "Id-data kollha tiegħek magħquda", body: "Kirjiet, proprjetajiet, sidien u klijenti f'post wieħed." },
      { when: "Kull ġimgħa", title: "Tikber miegħek", body: "Titgħallem aktar, u tibda l-biċċa xogħol ta' wara." },
    ],
  },

  ways: {
    label: "Ibda minn fejn trid",
    title: "Biċċa xogħol waħda jew l-aġenzija kollha. Tagħżel int.",
    items: [
      { title: "Irranġa biċċa xogħol waħda", body: "Agħżel il-ħaġa li l-aktar qed tiswielek u nawtomatizzaw dik biss.", example: "Eżempju: tweġiba għal kull talba fuq WhatsApp billejl." },
      { title: "Qabbadha ma' dak li tuża", body: "Żomm is-CRM, il-portali u l-websajt tiegħek. Aħna nqabbduha magħhom.", example: "Eżempju: leads ġodda mill-portali jidħlu dritt fis-CRM tiegħek, diġà kkwalifikati." },
      { title: "Is-sistema sħiħa", body: "Dak kollu li hawn f'din il-paġna, mibni madwar l-aġenzija tiegħek, adattat għalik u meħud ħsiebu minna.", example: "Eżempju: talbiet, kirjiet, sidien, kera u rapporti f'post wieħed." },
      { title: "Għadek m'intix ċert?", body: "Il-biċċa l-kbira tal-aġenziji mhumiex. Inħarsu lejn il-ġimgħa tiegħek u nuruk fejn qed jintilfu l-flus.", example: "B'xejn. Tieħu 20 minuta." },
    ],
  },

  offer: {
    label: "Offerta għal żmien limitat",
    title: "L-ewwel xahar tiegħek b'xejn.",
    body: "Inwaqqfuha fi 72 siegħa u nħaddmuha miegħek għal xahar. L-ewwel tara, fl-aġenzija tiegħek stess, il-leads, il-viewings u s-sigħat li tiffranka.",
    cta: "Ħu x-xahar b'xejn tiegħek",
    secondaryCta: "Ibbukkja telefonata ta' 20 minuta",
    listLabel: "X'tieħu",
    items: [
      { strong: "L-ewwel xahar b'xejn.", rest: "Araha taħdem fuq il-leads tiegħek stess qabel tiddeċiedi." },
      { strong: "Imwaqqfa għalik fi 72 siegħa.", rest: "Aħna ngħaqqdu l-WhatsApp, il-websajt u l-inboxes tiegħek. Int ma tibdel xejn." },
      { strong: "Xejn ġdid x'titgħallem.", rest: "Taħdem permezz tal-WhatsApp, l-email u s-CRM li diġà tuża." },
      { strong: "Mibnija għalik, immexxija minna.", rest: "Nadattawha għall-aġenzija tiegħek u nieħdu ħsiebha kull ġimgħa." },
      { strong: "Ibda bil-ftit.", rest: "L-ewwel biċċa xogħol waħda. Żid oħra biss meta l-ewwel tkun ħallset għaliha nfisha." },
    ],
  },

  calc: {
    label: "In-numri tiegħek",
    title: "Daħħal in-numri tiegħek.",
    mode: "percent",
    inputs: [
      { label: "Kirjiet li timmaniġġja", value: 150 },
      { label: "Kerrejja li jitilqu kull sena (%)", value: 40, max: 100 },
      { label: "Kera medja fix-xahar (€)", value: 1200 },
    ],
    out1: "Appartamenti li jridu jerġgħu jinkrew kull sena",
    out2: "Kummissjonijiet tal-kiri li tista' taqbad meta tasal l-ewwel",
    footnote: "Nassumu kera ta' xahar bħala kummissjoni għal kull kirja: nofs minn kull naħa, kif isir is-soltu f'Malta.",
  },

  trust: {
    label: "Int tibqa' fil-kontroll",
    title: "Hi tagħmel ix-xogħol. Int tieħu d-deċiżjonijiet.",
    items: [
      { icon: "eye", title: "Persuna tapprova dak li jgħodd", body: "Prezzijiet, kuntratti u offerti qatt ma joħorġu mingħajr l-iva tal-aġent tiegħek." },
      { icon: "lock", title: "Id-data tiegħek tibqa' tiegħek", body: "Tintuża biss għall-aġenzija tiegħek u tiġi ttrattata skont il-GDPR. Jekk titlaq, teħodha miegħek." },
      { icon: "users", title: "Tim f'Malta", body: "It-tim ta' OARC f'Birkirkara jwaqqafha, iħaddimha miegħek u jwieġeb it-telefon." },
      { icon: "check", title: "Turi x'għamlet", body: "Kull messaġġ u kull azzjoni jiġu rreġistrati, biex dejjem tista' tara x'għamlet u għaliex." },
    ],
  },

  facts: {
    label: "Għaliex issa",
    title: "L-aġenzija l-aktar mgħaġġla tieħu l-appartament.",
    items: [
      { n: "70,589", l: "Kuntratti tal-kera f'Malta. Kull wieħed għandu skadenza.", src: { label: "Ċifri tal-Awtorità tad-Djar, l-ewwel nofs tal-2025 (BusinessNow)", href: "https://businessnow.mt/more-than-70000-active-rental-contracts-with-the-housing-authority-in-the-first-half-of-2025/" } },
      { n: "3 xhur", l: "L-avviż li jrid jagħti s-sid. Jekk ma jagħtihx fil-ħin, il-kirja tiġġedded għal sena.", src: { label: "Att dwar Kirjiet Residenzjali Privati, Kap. 604", href: "https://legislation.mt/eli/cap/604/eng" } },
      { n: "68%", l: "Tat-talbiet mill-websajt lil aġenziji kbar fl-Istati Uniti ma ħadux tweġiba fi żmien 24 siegħa.", src: { label: "Studju ta' Pied Piper, 2026", href: "https://www.floridarealtors.org/news-media/news-articles/2026/10/real-estate-inquiries-often-fail-reach-agents" } },
    ],
  },

  faq: [
    { q: "X'inhi, eżattament?", a: "Sistema waħda tal-AI mibnija madwar l-aġenzija tiegħek. Twieġeb għal kull talba, tibbukkja l-viewings, issegwi kull kirja, issib sidien lesti jbigħu jew jikru, tikteb ir-reklami tal-proprjetajiet tiegħek, tieħu ħsieb it-tiswijiet u l-kera, u tagħmel il-karti. It-tim ta' OARC f'Malta jwaqqafha u jħaddimha miegħek." },
    { q: "Se tieħu post l-aġenti tiegħi?", a: "Le. Tagħmel il-ġiri wara n-nies, l-admin u x-xift ta' billejl, biex l-aġenti tiegħek iqattgħu l-ġurnata fuq viewings, sidien u għeluq ta' ftehimiet." },
    { q: "L-aġenti tiegħi jridu jitgħallmu software ġdid?", a: "Le. Taħdem permezz tal-WhatsApp, l-email, l-ispreadsheets u s-CRM li diġà tuża." },
    { q: "Tista' tagħmel ħaġa waħda biss?", a: "Iva. Ħafna aġenziji jibdew b'biċċa xogħol waħda, bħal tweġiba għal kull talba billejl, u jżidu oħra meta l-ewwel tkun ħallset għaliha nfisha." },
    { q: "Taħdem mas-CRM tagħna u mal-portali tal-proprjetà?", a: "Iva. Inqabbduha mas-CRM, il-portali, il-websajt u l-inboxes li diġà għandek. Jekk xi ħaġa m'għandhiex konnessjoni lesta, nibnuha aħna." },
    { q: "Kemm iddum biex tibda taħdem?", a: "Inwaqqfu l-ewwel sistema tiegħek fi 72 siegħa, normalment biex twieġeb għal kull talba fuq il-WhatsApp u l-websajt tiegħek. Il-bqija jitqabbad fil-ġimgħat ta' wara." },
    { q: "L-aġenti tal-AI tassew iċemplu lin-nies?", a: "Iva. Aġent bil-vuċi jċempel lill-leads il-ġodda u lil dawk li siktu, iwieġeb mill-proprjetajiet tiegħek stess u jibbukkja l-viewing fid-djarju tal-aġent tiegħek. L-aġent tiegħek jista' jidħol f'kull telefonata." },
    { q: "Tista' ssib leads fuq Facebook u Instagram?", a: "Iva. Twieġeb għat-talbiet li jidħlu minn Facebook u Instagram, u żżomm għajnejha fuq ir-reklami pubbliċi fuq Facebook Marketplace u l-portali għal sidien li qed jirreklamaw waħedhom." },
    { q: "Minn liema numru twieġeb?", a: "Minn tiegħek. Twieġeb min-numru tal-WhatsApp, l-email u l-websajt tal-aġenzija tiegħek stess, biex il-klijenti jibqgħu jkellmu lill-aġenzija tiegħek." },
    { q: "X'jiġri jekk tiżbalja?", a: "Kull messaġġ u kull azzjoni jiġu rreġistrati, biex tkun tista' tara x'għamlet u għaliex. Prezzijiet, kuntratti u offerti qatt ma joħorġu mingħajr l-iva tal-aġent tiegħek. Jekk ikun hemm xi ħaġa li trid tinbidel, jibdilha t-tim ta' OARC f'Malta." },
    { q: "X'jiġri mid-data tagħna?", a: "Tibqa' tiegħek u tintuża biss għall-aġenzija tiegħek, skont il-GDPR. Jekk titlaq, teħodha miegħek." },
    { q: "Kemm tiswa?", a: "Bħalissa l-ewwel xahar hu b'xejn. Wara jiddependi mid-daqs tal-aġenzija tiegħek u minn x'tixgħel. Staqsina u nagħtuk prezz għall-aġenzija tiegħek." },
    { q: "Sa meta sid f'Malta jrid jgħid li kirja mhux se tiġġedded?", a: "Għal kirja fit-tul, mill-inqas tliet xhur qabel ma tintemm, b'ittra rreġistrata. Inkella l-kirja tiġġedded għal sena oħra." },
    { q: "Kemm hemm żmien biex tirreġistra kirja f'Malta?", a: "30 jum mill-bidu tal-kirja. It-tariffa tal-Awtorità tad-Djar hija €10 jekk fil-ħin u €120 jekk tard. Kirja li mhix irreġistrata mhix valida." },
    { q: "Kemm tista' togħla l-kera kull sena f'Malta?", a: "Għal kirja residenzjali privata fit-tul, iż-żieda ta' kull sena ma tistax tkun aktar mill-bidla fl-Indiċi uffiċjali tal-Prezzijiet tal-Proprjetà, u qatt aktar minn 5%." },
  ],

  cta: {
    titleBefore: "Il-lead li jmiss jiktiblek illejla.",
    titleEm: "Ħalli jsib aġent lest.",
    body: "Ħu l-ewwel xahar b'xejn tiegħek. Inwaqqfuha għalik fi 72 siegħa.",
    button: "Ħu x-xahar b'xejn tiegħek",
    secondary: "Ibbukkja telefonata ta' 20 minuta",
  },

  sources: [
    { label: "BusinessNow: 70,589 kuntratt tal-kera", href: "https://businessnow.mt/more-than-70000-active-rental-contracts-with-the-housing-authority-in-the-first-half-of-2025/" },
    { label: "Att dwar Kirjiet Residenzjali Privati (Kap. 604)", href: "https://legislation.mt/eli/cap/604/eng" },
    { label: "Awtorità tad-Djar: reġistrazzjoni tal-kirjiet, 30 jum", href: "https://rentregistration.mt/notice/" },
    { label: "Studju ta' Pied Piper, irrappurtat minn Florida Realtors", href: "https://www.floridarealtors.org/news-media/news-articles/2026/10/real-estate-inquiries-often-fail-reach-agents" },
  ],
  related: [
    { label: "Marketing tal-proprjetà f'Malta", href: "/industries/real-estate" },
    { label: "Aġent tal-proprjetà tal-AI", href: "/services/ai-real-estate-agent" },
    { label: "Voice AI għall-proprjetà", href: "/voice-ai-worker/real-estate" },
    { label: "AI għad-ditti legali", href: "/ai/law-firms" },
  ],
  disclaimer: "OARC Digital · Malta. L-ismijiet u ċ-ċifri fuq l-iskrins huma minn kont demo. Din il-paġna hija informazzjoni, mhux parir legali.",
};

export default realEstateMt;
