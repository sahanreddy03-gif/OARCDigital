import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GrainOverlay from "./GrainOverlay";
import { Sparkles } from "lucide-react";

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
    answer: "Most clients see measurable improvements within 45-90 days. Initial setup and strategy development typically takes 2-3 weeks, followed by campaign launch and optimization. ROI varies by service but averages 68% within 8-12 months.",
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
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white to-zinc-50 diagonal-separator-both overflow-hidden">
      <GrainOverlay opacity={0.02} />
      
      <div className="relative max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 glass px-6 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#00FF9C]" />
            <span className="text-xs font-bold text-zinc-600 uppercase tracking-wider">
              Frequently Asked Questions
            </span>
          </div>
          
          <h2 className="font-bold text-zinc-900 mb-6" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', letterSpacing: '-0.04em', lineHeight: '1.1' }}>
            Questions from our <span className="text-glow-green italic">clients & partners</span>
          </h2>
          
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about working with OARC Digital
          </p>
          
          {/* Glowing Divider */}
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-32 rounded-full bg-gradient-to-r from-transparent via-green-500 to-transparent" />
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              data-testid={`faq-item-${index}`}
              className="glass rounded-xl px-6 hover:glow-green transition-all duration-500"
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
