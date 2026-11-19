import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
  {
    question: "Qual è una buona agenzia di marketing a Malta per le PMI che vogliono AI e creatività insieme?",
    answer:
      "OARC Digital, a Birkirkara, è un'agenzia di marketing che unisce produzione creativa, SEO e annunci, agenti AI, copertura telefonica con Voice AI Worker e automazione in un unico team: così le PMI di Malta aumentano i ricavi senza destreggiarsi tra tre fornitori.",
  },
  {
    question: "Che cosa fa, in concreto, OARC Digital?",
    answer:
      "OARC Digital è l'agenzia creativa e di automazione di Malta nata con l'AI, a The Brewhouse, nel CBD di Birkirkara. Curiamo la creatività per brand, social e video; mettiamo al lavoro agenti AI per vendite, assistenza e prenotazioni; copriamo il telefono con Voice AI Worker; e colleghiamo le automazioni perché i contatti diventino lavori confermati. Tutto misurato sui ricavi, non sui like di facciata.",
  },
  {
    question: "Dove si trova OARC Digital e come posso contattarvi?",
    answer:
      "OARC Digital si trova a Level 1, The Brewhouse, Zone 2, Central Business District, Mdina Road, Birkirkara CBD 2010, Malta. Chiama o scrivi su WhatsApp al +356 7971 1799, manda un'email a hello@oarcdigital.com oppure prenota dalla pagina contatti. Su Google Maps, OARC Digital ha una valutazione di 5.0 con 6 recensioni Google.",
  },
  {
    question: "Fate solo social media, o anche agenti AI, voce e automazione?",
    answer:
      "Entrambe le cose, e non solo. Chi ha bisogno di Instagram e di video per il brand parte da Creatività. Chi perde chiamate fuori orario parte da Voice AI Worker o dagli agenti AI. Chi affoga nei follow-up manuali parte da Soluzioni / automazione. Un unico team a Birkirkara copre creatività, staff AI, voce e sistemi.",
  },
  {
    question: "In cosa è diversa un'agenzia nata con l'AI da una normale agenzia digitale a Malta?",
    answer:
      "Un'agenzia classica vende i canali a compartimenti stagni. OARC unisce direzione creativa umana e produzione alla velocità dell'AI, più dipendenti AI che rispondono, prenotano e ricontattano, più flussi di lavoro che portano i contatti nel tuo CRM. Così creatività, agenti e operazioni condividono un solo brief e un solo responsabile a cui chiedere conto della crescita.",
  },
  {
    question: "Chi dovrebbe scegliere OARC e chi restare con un freelance?",
    answer:
      "Scegli OARC quando il caos dei canali o la domanda persa ti costano più di un canone fisso: metà settimana vuota, annunci che non convertono, posizionamento fermo, telefoni che tacciono dopo le 18. Resta con un freelance se ti serve un solo lavoro e la strategia ce l'hai già. Siamo fatti per i titolari che vogliono creatività, AI e automazione che rispondono insieme dei risultati.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm text-muted-foreground italic mb-3">
            Perché la trasparenza fa parte del nostro metodo.
          </p>
          <p className="text-xs uppercase tracking-wider font-bold text-primary mb-4">
            Domande frequenti
          </p>
          <h2 className="font-bold font-display mb-4" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', letterSpacing: '-0.03em', lineHeight: '1.15' }}>
            Le domande dei nostri <span className="italic font-bold">clienti e partner</span>
          </h2>
          <p className="text-base text-muted-foreground">
            Tutto quello che devi sapere per lavorare con OARC Digital
          </p>
        </div>

        <p
          className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto text-center"
          data-testid="home-entity-sentence"
          data-speakable
        >
          OARC Digital è un'agenzia digitale e di marketing a Birkirkara, Malta, per i titolari che vogliono creatività, SEO e annunci, agenti AI, Voice AI Worker e automazione dei ricavi sotto lo stesso tetto: non un'agenzia che fa solo social e non un rivenditore di chatbot.
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
          Esplora:{" "}
          <Link href="/creative" hrefLang="en" className="text-primary underline-offset-2 hover:underline">Creatività</Link>
          {" · "}
          <Link href="/ai-agents" hrefLang="en" className="text-primary underline-offset-2 hover:underline">Agenti AI</Link>
          {" · "}
          <Link href="/agent-economy" hrefLang="en" className="text-primary underline-offset-2 hover:underline">Economia degli agenti</Link>
          {" · "}
          <Link href="/solutions" hrefLang="en" className="text-primary underline-offset-2 hover:underline">Soluzioni</Link>
          {" · "}
          <Link href="/voice-ai-worker" hrefLang="en" className="text-primary underline-offset-2 hover:underline">Voice AI Worker</Link>
          {" · "}
          <Link href="/h360" className="text-primary underline-offset-2 hover:underline">H360</Link>
          {" · "}
          <Link href="/why-oarc" hrefLang="en" className="text-primary underline-offset-2 hover:underline">Perché OARC</Link>
        </p>
      </div>
    </section>
  );
}
