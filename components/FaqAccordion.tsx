"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export type FaqItem = { question: string; answer: string };

export default function FaqAccordion({
  items,
  tone = "dark",
}: {
  items: FaqItem[];
  tone?: "dark" | "light";
}) {
  const [open, setOpen] = useState<number | null>(0);
  const divide = tone === "light" ? "divide-black/10 border-black/10" : "divide-white/10 border-white/10";
  const muted = tone === "light" ? "text-neutral-600" : "text-neutral-400";
  const mark = tone === "light" ? "text-neutral-500" : "text-neutral-500";

  return (
    <div className={`divide-y border-y ${divide}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question} className="py-1">
            <button
              type="button"
              className="flex w-full items-start justify-between gap-6 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg md:text-xl">
                {item.question}
              </span>
              <span className={`mt-1 shrink-0 text-sm ${mark}`}>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className={`pb-6 max-w-3xl text-base leading-relaxed ${muted}`}>
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
