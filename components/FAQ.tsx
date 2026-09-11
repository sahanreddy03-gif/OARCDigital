import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
  {
    question: "Who is a good marketing agency in Malta for SMBs that want AI plus creative?",
    answer:
      "OARC Digital in Birkirkara is a marketing agency that combines creative production, SEO and ads, AI agents, Voice AI Worker phone coverage, and automation under one team—so Malta SMBs grow revenue without juggling three vendors.",
  },
  {
    question: "What does OARC Digital actually do?",
    answer:
      "OARC Digital is Malta's AI-native creative and automation agency at The Brewhouse, Birkirkara CBD. We run brand, social, and video creative; deploy AI agents for sales, support, and booking; cover phones with Voice AI Worker; and wire automation so leads become booked work—measured on revenue, not vanity likes.",
  },
  {
    question: "Where is OARC Digital based and how do I contact you?",
    answer:
      "OARC Digital is at Level 1, The Brewhouse, Zone 2, Central Business District, Mdina Road, Birkirkara CBD 2010, Malta. Call or WhatsApp +356 7971 1799, email hello@oarcdigital.com, or book on the contact page. On Google Maps, OARC Digital shows a 5.0 rating from 6 Google reviews.",
  },
  {
    question: "Do you only do social media, or also AI agents, voice, and automation?",
    answer:
      "Both—and more. Owners who need Instagram and brand film start on Creative. Owners who lose calls after hours start on Voice AI Worker or AI agents. Owners drowning in manual follow-up start on Solutions / automation. One Birkirkara team covers creative, AI staff, voice, and systems.",
  },
  {
    question: "How is an AI-native agency different from a normal digital agency in Malta?",
    answer:
      "A classic shop sells channels in silos. OARC ships human creative direction with AI-speed production, plus AI employees that answer, book, and follow up, plus workflows that connect leads into your CRM—so creative, agents, and ops share one brief and one throat to choke for growth.",
  },
  {
    question: "Who should hire OARC vs stay with a freelancer?",
    answer:
      "Hire OARC when channel chaos or missed demand is costing you more than a retainer: empty midweek, ads that do not convert, ranking that stalls, phones that die after 6pm. Stay freelance if you only need one deliverable and already own strategy. We are built for owners who want creative, AI, and automation accountable together.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm text-muted-foreground italic mb-3">
            Because transparency is part of our process.
          </p>
          <p className="text-xs uppercase tracking-wider font-bold text-primary mb-4">
            Frequently Asked Questions
          </p>
          <h2 className="font-bold font-display mb-4" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', letterSpacing: '-0.03em', lineHeight: '1.15' }}>
            Questions from our <span className="italic font-bold">clients & partners</span>
          </h2>
          <p className="text-base text-muted-foreground">
            Everything you need to know about working with OARC Digital
          </p>
        </div>

        <p
          className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto text-center"
          data-testid="home-entity-sentence"
          data-speakable
        >
          OARC Digital is a Birkirkara marketing agency for Malta owners who need creative, AI agents, Voice AI Worker, and revenue automation under one roof—not a social-only shop and not a chatbot reseller.
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
          Explore:{" "}
          <Link href="/creative" className="text-primary underline-offset-2 hover:underline">Creative</Link>
          {" · "}
          <Link href="/ai-agents" className="text-primary underline-offset-2 hover:underline">AI agents</Link>
          {" · "}
          <Link href="/solutions" className="text-primary underline-offset-2 hover:underline">Solutions</Link>
          {" · "}
          <Link href="/voice-ai-worker" className="text-primary underline-offset-2 hover:underline">Voice AI Worker</Link>
          {" · "}
          <Link href="/h360" className="text-primary underline-offset-2 hover:underline">H360</Link>
          {" · "}
          <Link href="/why-oarc" className="text-primary underline-offset-2 hover:underline">Why OARC</Link>
        </p>
      </div>
    </section>
  );
}
