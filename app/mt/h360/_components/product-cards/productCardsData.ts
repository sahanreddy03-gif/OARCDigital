/**
 * Il-prodotti ta' H360 bil-Malti.
 * L-ordni, l-indirizzi, il-kuluri u l-ismijiet tal-prodotti (tab) jiġu mill-fajl bl-Ingliż:
 * hawn jinbidel it-test biss. Kard bla traduzzjoni tibqa' bl-Ingliż minflok tisparixxi.
 */
import { PRODUCT_CARDS as EN_CARDS } from '@/app/h360/_components/product-cards/productCardsData';
import type { ProductCardData } from '@/app/h360/_components/product-cards/productCardsData';

export type {
  BrainProductId,
  ProductCardData,
  ProductVisualId,
} from '@/app/h360/_components/product-cards/productCardsData';

type CardText = Pick<ProductCardData, 'entry' | 'headline' | 'wedge' | 'guestGain' | 'result'>;

const TEXT: Record<string, CardText> = {
  'google-visibility': {
    entry: 'Il-paġna tiegħek fuq Google hija antika. In-nies ifittxu — u ma jsibukx.',
    headline: "Idher l-ewwel fuq Google Maps f'Malta.",
    wedge: "Mhux ritratti biss — SEO + AEO + tfittxija bl-AI + kliem ewlieni miktub minn copywriter + data ta' ARC. Il-posts fuq il-profil ta' Google huma biss il-ponta tal-iceberg.",
    guestGain: 'Bil-ġuħ u fil-qrib — isibuk fuq Maps u jidħlu.',
    result: '847 tfittxija → 37 telefonata din il-ġimgħa',
  },
  'voice-ai': {
    entry: "It-telefon idoqq waqt is-servizz. Il-voicemail jimtela. Il-klijenti jmorru għand ta' ħdejk.",
    headline: 'L-AI twieġeb kull telefonata — tibbukkja l-imwejjed, titgħallem il-menu tiegħek u qatt ma torqod.',
    wedge: "Mhux skript ta' call centre — OARC tħarreġ moħħ għar-ristoranti ta' Malta. Kontroll mid-dashboard. Tgħaddi lil persuna meta jkun hemm bżonn.",
    guestGain: "Iċemplu fis-2 ta' filgħodu — leħen ħelu jwieġeb, jibbukkjalhom u jibgħatilhom konferma.",
    result: '24/7 · l-ebda telefonata tal-booking mitlufa',
  },
  'google-reviews': {
    entry: 'Il-kompetituri għandhom 200 review. Int għandek 12.',
    headline: "Nibdlu kull klijent f'review tajba fuq Google — fil-ħin it-tajjeb, bi strateġija personalizzata u b'awtomazzjoni intelliġenti.",
    wedge: "Bla POS. Bla terminal ta' Sunday. QR fuq il-mejda — għafsa waħda u r-review lesta.",
    guestGain: 'Jafdawk qabel ma jpoġġu bilqiegħda — ir-reviews diġà kkonvinċewhom.',
    result: "3× aktar reviews f'90 jum",
  },
  social: {
    entry: 'Ritratti ħżiena. L-ebda post. L-ebda reklam. Il-kompetituri jidhru aħjar online.',
    headline: 'Vidjows, posts fuq is-social media u reklami mħallsa — nagħmluhom aħna għalik.',
    wedge: "Mhux posts ġeneriċi ta' aġenzija — kontenut lest għar-ristorant tiegħek kull ġimgħa, flimkien ma' reklami mħallsa.",
    guestGain: 'Jaraw l-ikel tiegħek kif inhu tassew — u jibbukkjaw għandek qabel għand kompetitur.',
    result: 'Idher professjonali online mingħajr ma tqabbad aġenzija',
  },
  website: {
    entry: 'Mingħajr websajt, TripAdvisor jirrakkonta l-istorja tiegħek.',
    headline: "Il-menu tiegħek online f'10 minuti. Google isibek.",
    wedge: "Mhux websajt DIY fuq Wix — websajt vera ta' ristorant, mibnija għal Google u għal min jgħaddi minn quddiem.",
    guestGain: 'Il-menu, il-ħinijiet u d-direzzjonijiet bil-lingwa tagħhom qabel ma jaslu.',
    result: '1 minn kull 5 viżitaturi jidħol mill-bieb',
  },
  'venue-360': {
    entry: 'Menu fuq il-karta. Kċina bl-għajjat. Is-sid isir jaf tard wisq.',
    headline: 'Menu diġitali. Skrin fil-kċina. Dashboard għas-sid. Kollox awtomatiku.',
    wedge: "Mhux tnax-il għodda li ma jitkellmux ma' xulxin — menu, kċina u sid f'sistema waħda.",
    guestGain: 'Ikel aktar malajr, inqas żbalji — jitilqu kuntenti u jerġgħu jiġu.',
    result: 'Menu · Kċina · Sid — sors wieħed tal-verità',
  },
  booking: {
    entry: 'Telefonati mitlufa waqt is-servizz = imwejjed vojta llejla.',
    headline: 'Il-klijenti jibbukkjaw mill-mowbajl. Int tara min ġej.',
    wedge: "Mhux il-miżati għal kull cover ta' OpenTable — jieħu post in-notebook, jimblokka l-ħinijiet, bla bookings doppji.",
    guestGain: "Jibbukkjaw fis-2 ta' filgħodu minn Instagram — bla ġiri wara t-telefon waqt is-servizz tiegħek.",
    result: 'Min ġej illejla — fuq il-mowbajl tiegħek',
  },
  order: {
    entry: 'Wolt tieħu 30% minn kull ordni.',
    headline: "Żomm 100% ta' kull ordni. Żero kummissjoni.",
    wedge: "La Wolt u lanqas Bolt — skennja, ordna, u l-kċina tipprintjaha. M'hemmx bżonn ta' POS.",
    guestGain: 'Jordnaw mill-mejda — bla ma joqogħdu jxejru lill-wejter.',
    result: 'Iżżomm €52 — mhux €36.40',
  },
  pay: {
    entry: 'Il-klijenti jistennew 15-il minuta għall-kont.',
    headline: "Il-klijenti jħallsu mill-mejda f'sekondi.",
    wedge: "Mhux terminals ta' Sunday ta' €250 — kartuna b'QR fuq il-mejda. Daqshekk.",
    guestGain: 'Iħallsu meta jkunu lesti — jitilqu bla ma jistennew 15-il minuta għall-kont.',
    result: 'L-imwejjed iduru aktar malajr · iżżomm il-marġni kollu',
  },
  stamp: {
    entry: 'Il-kards tat-timbri tal-karta jintilfu. L-istaff jinsa jittimbra.',
    headline: "Kul 8 darbiet, it-8 ikla b'xejn — awtomatikament.",
    wedge: 'La kards tal-karta u lanqas staff jiskennja l-mowbajls — it-timbri jiżdiedu waħedhom.',
    guestGain: "L-ikla b'xejn iħossuha mistħoqqa — jiġru wara l-aħħar timbru.",
    result: "It-8 ikla b'xejn · bla tfixkil",
  },
  pass: {
    entry: "Ħadd ma jniżżel app ta' ristorant.",
    headline: 'Il-loyalty card fil-wallet tal-mowbajl tagħhom.',
    wedge: "Mhux app ta' ristorant wieħed — Apple Wallet u Google Wallet, premjijiet ma' kull żjara.",
    guestGain: "Il-loyalty card diġà fuq il-mowbajl tagħhom — xejn x'iniżżlu.",
    result: 'Il-klijenti jerġgħu jiġu — bla ma jniżżlu app',
  },
  send: {
    entry: 'Il-klijenti jiġu darba — imbagħad jinsewk.',
    headline: "Ġib il-klijenti lura b'WhatsApp.",
    wedge: 'Mhux messaġġi ġeneriċi lil kulħadd — follow-ups intelliġenti li jibdlu lil min jiġi l-ewwel darba fi klijent regolari.',
    guestGain: 'WhatsApp personali — mhux spam.',
    result: "Maria terġa' tordna → issir klijenta regolari",
  },
  text: {
    entry: 'Klijent jieqaf jiġi. Ma tistax tilħqu.',
    headline: 'Ibgħat messaġġ lill-klijenti li waqfu jiġu.',
    wedge: "Bla upload ta' listi ta' numri — il-klijent jagħti l-kunsens bil-wallet pass. SMS li tassew jaqrawh.",
    guestGain: 'SMS qasir li jiftħuh — mhux email oħra injorata.',
    result: 'Messaġġi biex jerġgħu jiġu → jerġgħu jibbukkjaw',
  },
  event: {
    entry: 'Mużika live nhar il-Ġimgħa — 12-il persuna biss jafu.',
    headline: 'Imla s-sala fil-lejla tal-avveniment.',
    wedge: "La miżati ta' Eventbrite u lanqas ir-reach ta' Facebook — RSVPs, tfakkiriet u limitu ta' postijiet.",
    guestGain: 'Link waħda — jaraw il-lejla, jikkonfermaw u jirċievu tfakkira.',
    result: '60% inqas no-shows',
  },
  analytics: {
    entry: 'Bla POS? Ma tafx kemm daħħalt illum.',
    headline: 'Ikteb it-total tal-lum. Ara x-xejra.',
    wedge: 'Bla integrazzjoni mal-POS — "Illum daħħalt €1,200" huwa biżżejjed għalina.',
    guestGain: "Iljieli aktar bla xkiel — ikollok l-istokk u l-istaff lesti għax kont taf x'ġej.",
    result: 'Xejriet mibnija minn numru wieħed fl-għeluq',
  },
  recipe: {
    entry: "Taħseb li l-għaġin iħallilek marġni ta' 70%. Mhux hekk.",
    headline: 'Ara l-profitt veru fuq kull platt.',
    wedge: "Mhux għodod Amerikani ta' $199 fix-xahar — daħħal l-ingredjenti darba u ara l-ispiża vera tal-ikel.",
    guestGain: "Prezzijiet ġusti fuq il-menu — m'intix tissussidja platt li qed jitlef il-flus.",
    result: 'Neħħi l-platti li qed jitilfulek il-flus',
  },
  inventory: {
    entry: "Tispiċċalek il-mozzarella f'nofs is-servizz.",
    headline: 'Qatt ma tispiċċa bla l-aktar platt li jinbiegħ.',
    wedge: "Mhux software tal-istokk ta' $169 fix-xahar — 3 mistoqsijiet fl-għeluq, 30 sekonda.",
    guestGain: "Il-platt favorit tagħhom ikun fuq il-menu — ma jkunx spiċċa f'nofs is-servizz.",
    result: "Ngħidulek x'għandek tordna għada",
  },
  staff: {
    entry: 'Min qed jaħdem is-Sibt? Oqgħod fittex fuq WhatsApp.',
    headline: 'Ir-roster tal-istaff fuq WhatsApp. Iva jew le.',
    wedge: "Mhux app tar-roster ta' €3 għal kull ħaddiem — roster fuq WhatsApp, ikkonfermat b'għafsa waħda.",
    guestGain: 'Servizz aktar malajr — it-tim it-tajjeb ikun fis-sala.',
    result: 'Sostitut għal min jimrad jinstab fi ftit minuti',
  },
  'floor-plan': {
    entry: "Min jilqa' l-klijenti ma jafx liema mejda hija vojta.",
    headline: 'Kull mejda fuq mappa. Aħdar: vojta. Aħmar: mimlija.',
    wedge: "Mhux software tal-imwejjed ta' €200 fix-xahar — mappa live tas-sala, għafsa waħda biex tpoġġi l-klijenti.",
    guestGain: "Ipoġġu bilqiegħda aktar malajr — inqas stennija mal-bieb nhar ta' Ġimgħa mimli.",
    result: "L-imwejjed iduru aktar malajr, mingħajr prezzijiet ta' kumpaniji kbar",
  },
};

export const PRODUCT_CARDS: ProductCardData[] = EN_CARDS.map((card) => ({
  ...card,
  ...TEXT[card.id],
}));
