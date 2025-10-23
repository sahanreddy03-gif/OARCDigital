import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do AI Employees work?",
    answer: "Our AI Employees are trained on your business processes and data to handle specific tasks like customer support, lead qualification, and administrative work. They integrate seamlessly with your existing tools and learn from each interaction to improve over time.",
  },
  {
    question: "What's included in the AI Creative service?",
    answer: "AI Creative includes video production, social media content, motion graphics, brand imagery, character design, voice generation, and website design. We combine AI technology with human oversight to ensure quality and brand alignment.",
  },
  {
    question: "How quickly can we see results?",
    answer: "Most clients see measurable improvements within 30-60 days. Initial setup and strategy development typically takes 1-2 weeks, followed by campaign launch and optimization. ROI varies by service but averages 320% within 6 months.",
  },
  {
    question: "Do you work with small businesses?",
    answer: "Yes! We work with businesses of all sizes. Our AI-powered approach allows us to deliver enterprise-level results at costs that work for growing companies. We offer flexible packages tailored to your budget and goals.",
  },
  {
    question: "What makes OARC different from other agencies?",
    answer: "We combine AI-certified talent, custom AI workflows, and guaranteed results. Unlike traditional agencies, we leverage AI to deliver faster, more cost-effective solutions without sacrificing quality. Our revenue-focused approach ensures every campaign drives measurable business outcomes.",
  },
  {
    question: "Can we customize the services to our needs?",
    answer: "Absolutely. Every engagement is customized to your specific goals, industry, and audience. We start with a discovery session to understand your needs, then build a tailored strategy using the right mix of our services.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-wider font-bold text-primary mb-4">
            Frequently Asked Questions
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight mb-4">
            Questions from our <span className="italic font-black">clients & partners</span>
          </h2>
          <p className="text-base text-muted-foreground">
            Everything you need to know about working with OARC Digital
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              data-testid={`faq-item-${index}`}
              className="border border-border/50 rounded-lg px-6 hover-elevate transition-all"
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
      </div>
    </section>
  );
}
