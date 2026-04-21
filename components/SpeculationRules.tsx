"use client";

import { useEffect } from "react";

const PRERENDER_URLS = [
  "/",
  "/services",
  "/our-work",
  "/contact",
  "/pricing",
  "/ai-agents",
  "/automation",
  "/blog",
];

export default function SpeculationRules() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (
      !HTMLScriptElement.supports ||
      !HTMLScriptElement.supports("speculationrules")
    ) {
      return;
    }
    if (document.getElementById("oarc-speculation-rules")) return;

    const script = document.createElement("script");
    script.type = "speculationrules";
    script.id = "oarc-speculation-rules";
    script.textContent = JSON.stringify({
      prerender: [
        {
          source: "list",
          urls: PRERENDER_URLS,
          eagerness: "moderate",
        },
      ],
    });
    document.head.appendChild(script);
  }, []);

  return null;
}
