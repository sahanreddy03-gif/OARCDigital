import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-white/5">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-faq-title">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-white/10 rounded-xl overflow-hidden"
            data-testid={`faq-item-${index}`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
              data-testid={`button-faq-${index}`}
            >
              <span className="font-semibold text-lg pr-4" data-testid={`faq-question-${index}`}>
                {item.question}
              </span>
              <ChevronDown
                className={`flex-shrink-0 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                size={20}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 text-gray-400" data-testid={`faq-answer-${index}`}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
