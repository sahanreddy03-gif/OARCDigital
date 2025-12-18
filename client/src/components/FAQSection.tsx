import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { createFAQSchema } from "@/utils/structuredData";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  showExpandAll?: boolean;
  className?: string;
  schemaId?: string;
  darkMode?: boolean;
}

export default function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle,
  showExpandAll = true,
  className,
  schemaId = "faq-schema",
  darkMode = false,
}: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<string[]>(["faq-0"]);
  const allItemValues = faqs.map((_, index) => `faq-${index}`);

  const handleExpandAll = () => {
    setOpenItems(allItemValues);
  };

  const handleCollapseAll = () => {
    setOpenItems([]);
  };

  const isAllExpanded = openItems.length === faqs.length;

  const faqSchema = createFAQSchema(faqs);

  return (
    <>
      <Helmet>
        <script type="application/ld+json" id={schemaId}>
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section
        className={cn(
          "py-16 md:py-24 px-4",
          darkMode ? "bg-[#0a0f0e]" : "bg-[#f5f0e6]",
          className
        )}
        data-testid="section-faq"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={cn(
                "text-3xl md:text-4xl font-bold mb-4",
                darkMode ? "text-white" : "text-[#1a2e29]"
              )}
              data-testid="heading-faq"
            >
              {title}
            </h2>
            {subtitle && (
              <p
                className={cn(
                  "text-lg max-w-2xl mx-auto",
                  darkMode ? "text-white/70" : "text-[#1a2e29]/70"
                )}
              >
                {subtitle}
              </p>
            )}
          </div>

          {showExpandAll && faqs.length > 1 && (
            <div className="flex justify-end mb-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={isAllExpanded ? handleCollapseAll : handleExpandAll}
                className={cn(
                  "text-sm font-medium",
                  darkMode
                    ? "text-white/60 hover:text-white hover:bg-white/10"
                    : "text-[#1a2e29]/60 hover:text-[#1a2e29] hover:bg-[#1a2e29]/5"
                )}
                data-testid="button-expand-collapse-all"
              >
                {isAllExpanded ? "Collapse All" : "Expand All"}
              </Button>
            </div>
          )}

          <Accordion
            type="multiple"
            value={openItems}
            onValueChange={setOpenItems}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className={cn(
                  "rounded-lg border-0",
                  darkMode
                    ? "bg-white/5 backdrop-blur-sm"
                    : "bg-white shadow-sm"
                )}
                data-testid={`accordion-item-${index}`}
              >
                <AccordionTrigger
                  className={cn(
                    "px-6 py-5 text-left text-base md:text-lg font-semibold hover:no-underline group [&>svg]:text-[#ff914d] [&>svg]:h-5 [&>svg]:w-5",
                    darkMode ? "text-white" : "text-[#1a2e29]"
                  )}
                  data-testid={`accordion-trigger-${index}`}
                >
                  <span className="flex-1 pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent
                  className={cn(
                    "px-6 pb-6 pt-0 text-base leading-relaxed",
                    darkMode ? "text-white/80" : "text-[#1a2e29]/80"
                  )}
                  data-testid={`accordion-content-${index}`}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}

export const generateServiceFAQs = (
  serviceName: string,
  serviceType: string,
  customFaqs?: FAQItem[]
): FAQItem[] => {
  const baseFaqs: FAQItem[] = [
    {
      question: `What makes OARC Digital's ${serviceName} different from other agencies?`,
      answer: `We combine AI-powered automation with human creativity to deliver results 3x faster. Our Malta-based team provides premium service with transparent pricing and measurable outcomes.`,
    },
    {
      question: `How long does it take to see results from ${serviceName}?`,
      answer: `Most clients see initial results within 2-4 weeks. Full campaign optimization typically takes 60-90 days for maximum ROI impact.`,
    },
    {
      question: `What is the pricing for ${serviceName}?`,
      answer: `We offer flexible pricing based on your needs. Contact us for a custom quote tailored to your business goals and budget.`,
    },
    {
      question: `Do you offer a guarantee for your ${serviceName}?`,
      answer: `Yes, we offer a satisfaction guarantee. If you're not happy with our work in the first 30 days, we'll refund your investment.`,
    },
    {
      question: `Can I integrate ${serviceName} with my existing systems?`,
      answer: `Absolutely. We specialize in seamless integration with your current tech stack, CRM, and marketing platforms.`,
    },
  ];

  return customFaqs ? [...customFaqs, ...baseFaqs] : baseFaqs;
};
