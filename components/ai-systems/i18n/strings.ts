// Interface text of the industry AI system pages in Italian and Maltese.
// The English template (components/ai-systems/AiSystemPage.tsx and AiSystemClient.tsx)
// has these words written straight into the code; the language copies read them from here.
// Page content (headings, body, FAQ) lives in lib/ai-systems/i18n/<locale>/<slug>.ts.

import type { Locale } from "@/lib/i18n/twins";

export interface AiStrings {
  /** Label before the list of tools in the hero. */
  worksWith: string;
  /** Heading above the swipe rail. {n} = how many more jobs. */
  jobsMore: string;
  jobsHint: string;
  jobsPrev: string;
  jobsNext: string;
  /** Read out in place of the dashboard picture. */
  dashboardAria: string;
  faqLabel: string;
  faqTitle: string;
  /** Line above the two-field form. */
  leadIntro: string;
  sources: string;
  also: string;
  allSystems: string;
  /** Floating bar, used when the industry has no owner-confirmed count. */
  barLine: string;
  barShort: string;
  barCta: string;
  barCtaShort: string;
  barClose: string;
  /** Demo at the top. {k} = step, {n} = steps, {caption} = what happens. */
  filmStep: string;
  filmPlay: string;
  filmPause: string;
  formName: string;
  formContact: string;
  formSending: string;
  formSubmit: string;
  formSent: string;
  formError: string;
  /** Text pre-written into WhatsApp. {business} = c.business, a bare noun ("hotel", "studio legale"). */
  waDemo: string;
  waOffer: string;
  /** Thousands separator for the calculator. */
  thousands: string;
  /** How an amount in euro is written. {n} = the number. */
  money: string;
}

export const AI_STRINGS: Record<Locale, AiStrings> = {
  it: {
    worksWith: "Funziona con",
    jobsMore: "E altri {n}.",
    jobsHint: "Scorri per vederli tutti →",
    jobsPrev: "Scorri indietro",
    jobsNext: "Scorri avanti",
    dashboardAria: "La dashboard di OARC: i numeri di oggi, quello che aspetta te e la settimana finora",
    faqLabel: "Domande frequenti",
    faqTitle: "Risposte chiare.",
    leadIntro: "Oppure lasciaci il tuo numero e ti scriviamo noi.",
    sources: "Fonti",
    also: "Altro da OARC",
    allSystems: "Tutti i sistemi AI",
    barLine: "Lo configuriamo noi per te in 72 ore",
    barShort: "Pronto in 72 ore",
    barCta: "Richiedi il tuo mese gratuito",
    barCtaShort: "Mese gratuito",
    barClose: "Chiudi questa barra",
    filmStep: "Passo {k} di {n}: {caption}",
    filmPlay: "Avvia la demo",
    filmPause: "Metti in pausa la demo",
    formName: "Il tuo nome",
    formContact: "Telefono o email",
    formSending: "Invio in corso…",
    formSubmit: "Voglio il mio mese gratuito",
    formSent: "Ricevuto. Ti scriviamo oggi.",
    formError: "L'invio non è riuscito. Scrivici su WhatsApp.",
    waDemo: "Ciao OARC, vorrei prenotare una demo. La mia attività: {business}.",
    waOffer: "Ciao OARC, vorrei richiedere il primo mese gratuito del sistema AI. La mia attività: {business}, a Malta.",
    thousands: ".",
    money: "€{n}",
  },
  mt: {
    worksWith: "Taħdem ma'",
    jobsMore: "U {n} oħra.",
    jobsHint: "Żerżaq biex tarahom kollha →",
    jobsPrev: "Dawk ta' qabel",
    jobsNext: "Dawk li jmiss",
    dashboardAria: "Id-dashboard ta' OARC: in-numri tal-lum, dak li jeħtieġ lilek u l-ġimgħa s'issa",
    faqLabel: "Mistoqsijiet frekwenti",
    faqTitle: "Tweġibiet ċari.",
    leadIntro: "Jew ħallilna n-numru tiegħek u niktbulek aħna.",
    sources: "Sorsi",
    also: "Aktar minn OARC",
    allSystems: "Is-sistemi kollha tal-AI",
    barLine: "Inwaqqfuha għalik fi 72 siegħa",
    barShort: "Lesta fi 72 siegħa",
    barCta: "Ħu x-xahar b'xejn tiegħek",
    barCtaShort: "Xahar b'xejn",
    barClose: "Agħlaq din l-istrixxa",
    filmStep: "Pass {k} minn {n}: {caption}",
    filmPlay: "Kompli d-demo",
    filmPause: "Waqqaf id-demo",
    formName: "Ismek",
    formContact: "Telefon jew email",
    formSending: "Qed tintbagħat…",
    formSubmit: "Irrid ix-xahar b'xejn tiegħi",
    formSent: "Waslitilna. Niktbulek illum.",
    formError: "Ma ntbagħtitx. Ipprova fuq WhatsApp minflok.",
    waDemo: "Bonġu OARC, nixtieq nibbukkja demo. In-negozju tiegħi: {business}.",
    waOffer: "Bonġu OARC, nixtieq nieħu l-ewwel xahar b'xejn tas-sistema tal-AI. In-negozju tiegħi: {business}, f'Malta.",
    thousands: ",",
    money: "€{n}",
  },
};

/** Puts values into a string: fill("E altri {n}.", { n: 16 }) is "E altri 16.". */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (whole, key: string) => (key in values ? String(values[key]) : whole));
}

/** A whole number with the language's thousands separator. Written by hand so the server
 *  and the browser always print the same thing. */
export function formatNumber(n: number, locale: Locale): string {
  return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, AI_STRINGS[locale].thousands);
}

/** An amount in euro, written the way the language writes it. */
export function formatEuro(n: number, locale: Locale): string {
  return fill(AI_STRINGS[locale].money, { n: formatNumber(n, locale) });
}
