import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
  {
    question: "Liema hi aġenzija tal-marketing tajba f'Malta għal negozji żgħar u medji li jridu AI u kreattività flimkien?",
    answer:
      "OARC Digital f'Birkirkara hija aġenzija tal-marketing li tgħaqqad produzzjoni kreattiva, SEO u reklami, aġenti tal-AI, kopertura tat-telefon b'Voice AI Worker, u awtomazzjoni taħt tim wieħed. Hekk in-negozji ż-żgħar u l-medji f'Malta jkabbru d-dħul bla ma joqogħdu jiġru wara tliet fornituri.",
  },
  {
    question: "X'tagħmel eżattament OARC Digital?",
    answer:
      "OARC Digital hija l-aġenzija kreattiva u tal-awtomazzjoni ta' Malta mibnija fuq l-AI, f'The Brewhouse, Birkirkara CBD. Nieħdu ħsieb il-kreattività tal-brand, tas-social media u tal-vidjo; inħaddmu aġenti tal-AI għall-bejgħ, l-appoġġ u l-prenotazzjonijiet; inwieġbu t-telefonati b'Voice AI Worker; u nqabbdu l-awtomazzjoni biex il-leads isiru xogħol ibbukkjat. Kollox jitkejjel fuq id-dħul, mhux fuq likes fiergħa.",
  },
  {
    question: "Fejn tinsab OARC Digital u kif nista' nikkuntattjakom?",
    answer:
      "OARC Digital tinsab f'Level 1, The Brewhouse, Zone 2, Central Business District, Mdina Road, Birkirkara CBD 2010, Malta. Ċempel jew ibgħat WhatsApp fuq +356 7971 1799, ibgħat email lil hello@oarcdigital.com, jew ibbukkja mill-paġna tal-kuntatt. Fuq Google Maps, OARC Digital għandha rating ta' 5.0 minn 6 reviews fuq Google.",
  },
  {
    question: "Tagħmlu social media biss, jew anke aġenti tal-AI, vuċi u awtomazzjoni?",
    answer:
      "It-tnejn, u aktar. Is-sidien li jeħtieġu Instagram u film tal-brand jibdew mill-Kreattività. Is-sidien li jitilfu telefonati wara l-ħin tax-xogħol jibdew minn Voice AI Worker jew mill-aġenti tal-AI. Is-sidien li qed jegħrqu fil-follow-up manwali jibdew mis-Soluzzjonijiet / awtomazzjoni. Tim wieħed f'Birkirkara jkopri l-kreattività, l-istaff tal-AI, il-vuċi u s-sistemi.",
  },
  {
    question: "X'differenza hemm bejn aġenzija mibnija fuq l-AI u aġenzija diġitali normali f'Malta?",
    answer:
      "Aġenzija klassika tbigħ il-kanali maqsumin, kull wieħed għalih. OARC tagħtik direzzjoni kreattiva umana bi produzzjoni bil-ħeffa tal-AI, flimkien ma' impjegati tal-AI li jwieġbu, jibbukkjaw u jagħmlu l-follow-up, u workflows li jdaħħlu l-leads fis-CRM tiegħek. Hekk il-kreattività, l-aġenti u l-operat jaqsmu brief wieħed, u għat-tkabbir hemm responsabbli wieħed biss.",
  },
  {
    question: "Min għandu jqabbad lil OARC u min għandu jibqa' ma' freelancer?",
    answer:
      "Qabbad lil OARC meta l-kaos fil-kanali jew id-domanda mitlufa qed jiswewlek aktar minn retainer: ġranet vojta f'nofs il-ġimgħa, reklami li ma jġibux klijenti, ranking li jeħel, telefon li ħadd ma jwieġbu wara s-6pm. Ibqa' ma' freelancer jekk għandek bżonn biċċa xogħol waħda biss u l-istrateġija diġà għandek. Aħna magħmulin għal sidien li jridu li l-kreattività, l-AI u l-awtomazzjoni jkunu responsabbli flimkien.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm text-muted-foreground italic mb-3">
            Għax it-trasparenza hija parti mill-proċess tagħna.
          </p>
          <p className="text-xs uppercase tracking-wider font-bold text-primary mb-4">
            Mistoqsijiet frekwenti
          </p>
          <h2 className="font-bold font-display mb-4" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', letterSpacing: '-0.03em', lineHeight: '1.15' }}>
            Mistoqsijiet tal-<span className="italic font-bold">klijenti u l-imsieħba tagħna</span>
          </h2>
          <p className="text-base text-muted-foreground">
            {"Dak kollu li għandek tkun taf dwar kif taħdem ma' OARC Digital"}
          </p>
        </div>

        <p
          className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto text-center"
          data-testid="home-entity-sentence"
          data-speakable
        >
          {"OARC Digital hija aġenzija diġitali u tal-marketing f'Birkirkara, Malta, għas-sidien li jeħtieġu kreattività, SEO u reklami, aġenti tal-AI, Voice AI Worker u awtomazzjoni tad-dħul taħt saqaf wieħed. Mhix aġenzija tas-social media biss u mhix reseller ta' chatbots."}
        </p>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              data-testid={`faq-item-${index}`}
              className="border border-border/50 rounded-lg px-6 hover-elevate hover:border-primary/60 hover:shadow-[0_0_15px_rgba(0,255,156,0.15)] transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-bold hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="mt-10 text-sm text-muted-foreground text-center" data-testid="home-money-links">
          Skopri:{" "}
          <Link href="/creative" hrefLang="en" className="text-primary underline-offset-2 hover:underline">Kreattività</Link>
          {" · "}
          <Link href="/ai-agents" hrefLang="en" className="text-primary underline-offset-2 hover:underline">Aġenti tal-AI</Link>
          {" · "}
          <Link href="/agent-economy" hrefLang="en" className="text-primary underline-offset-2 hover:underline">Ekonomija tal-aġenti</Link>
          {" · "}
          <Link href="/solutions" hrefLang="en" className="text-primary underline-offset-2 hover:underline">Soluzzjonijiet</Link>
          {" · "}
          <Link href="/voice-ai-worker" hrefLang="en" className="text-primary underline-offset-2 hover:underline">Voice AI Worker</Link>
          {" · "}
          <Link href="/mt/h360" className="text-primary underline-offset-2 hover:underline">H360</Link>
          {" · "}
          <Link href="/why-oarc" hrefLang="en" className="text-primary underline-offset-2 hover:underline">Għaliex OARC</Link>
        </p>
      </div>
    </section>
  );
}
