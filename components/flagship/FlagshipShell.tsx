"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import Layout from "@/components/layout/Layout";
import { FLAGSHIP_CSS } from "./flagshipCss";
import { waLink } from "./parts";

/**
 * Wrapper for the flagship service pages. The page content is plain server-rendered
 * markup passed in as children; this adds the shared look and two small behaviours:
 *
 * 1. `<form data-wa="Hi OARC. My business is {x}. ...">` opens WhatsApp with the typed
 *    business name dropped into the message. Without JavaScript the form still works:
 *    it is a normal GET to wa.me with the name as the message.
 * 2. Elements marked `data-rv` fade in when scrolled to. Only elements below the first
 *    screen are ever hidden, so nothing is lost if the script does not run.
 */
export default function FlagshipShell({
  children,
  accent,
  accentSoft,
}: {
  children: ReactNode;
  accent?: string;
  accentSoft?: string;
}) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const onSubmit = (e: Event) => {
      const form = (e.target as HTMLElement).closest<HTMLFormElement>("form[data-wa]");
      if (!form) return;
      e.preventDefault();
      const input = form.querySelector<HTMLInputElement>("input[name=text]");
      const value = (input?.value ?? "").trim();
      if (!value) {
        form.classList.add("bad");
        input?.focus();
        return;
      }
      form.classList.remove("bad");
      const message = (form.dataset.wa ?? "{x}").replace("{x}", value);
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      if (typeof w.gtag === "function") {
        w.gtag("event", "generate_lead", { method: "whatsapp", page: window.location.pathname });
      }
      window.open(waLink(message), "_blank", "noopener");
    };
    el.addEventListener("submit", onSubmit);

    let io: IntersectionObserver | null = null;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.remove("rv-wait");
            entry.target.classList.add("rv-in");
            io?.unobserve(entry.target);
          }
        },
        { rootMargin: "0px 0px -8% 0px" },
      );
      el.querySelectorAll<HTMLElement>("[data-rv]").forEach((node) => {
        if (node.getBoundingClientRect().top > window.innerHeight * 0.92) {
          node.classList.add("rv-wait");
          io?.observe(node);
        }
      });
    }

    return () => {
      el.removeEventListener("submit", onSubmit);
      io?.disconnect();
    };
  }, []);

  const style = {
    ...(accent ? { "--acc": accent } : {}),
    ...(accentSoft ? { "--acc-soft": accentSoft } : {}),
  } as CSSProperties;

  return (
    <Layout navTheme="light">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Instrument+Sans:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: FLAGSHIP_CSS }} />
      <div className="fs" ref={root} style={style}>
        {children}
      </div>
    </Layout>
  );
}
