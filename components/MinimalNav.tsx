"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────────────────────
   MinimalNav — replaces the traditional header everywhere.
   • One small static menu mark in the top-right corner (absolute, scrolls
     away with the page — never floats/follows).
   • Zero idle cost: plain markup + CSS, no animation loops, no scroll
     listeners, no framer-motion. Panel content mounts only when opened.
   ───────────────────────────────────────────────────────────────────────── */

const MAIN_LINKS = [
  { href: "/",          label: "Home" },
  { href: "/why-us",    label: "Why Us" },
  { href: "/why-oarc",  label: "Why Choose OARC" },
  { href: "/about",     label: "About" },
  { href: "/creative",  label: "Creative" },
  { href: "/ai-agents", label: "AI Agents" },
  { href: "/h360",      label: "H360 — Restaurants" },
  { href: "/solutions", label: "Automation" },
  { href: "/our-work",  label: "Our Work" },
  { href: "/pricing",   label: "Pricing" },
  { href: "/tools",     label: "Tools" },
  { href: "/contact",   label: "Contact" },
];

const SERVICE_GROUPS: { title: string; href: string; items: { name: string; href: string }[] }[] = [
  {
    title: "Creative & Design",
    href: "/creative",
    items: [
      { name: "Social media creative", href: "/services/social-media-creative-management" },
      { name: "Ad creative",           href: "/services/ad-creative" },
      { name: "Branding",              href: "/services/branding" },
      { name: "Video production",      href: "/services/video-production" },
      { name: "Web design",            href: "/services/web-design" },
      { name: "Motion design",         href: "/services/motion-design" },
      { name: "Email creative",        href: "/services/email-creative" },
      { name: "Illustration",          href: "/services/illustration" },
    ],
  },
  {
    title: "AI Agents",
    href: "/ai-agents",
    items: [
      { name: "Hire AI Employees",     href: "/services/hire-ai-employees" },
      { name: "AI SDR Agent",          href: "/services/ai-sdr-agent" },
      { name: "AI Support Specialist", href: "/services/ai-support-specialist" },
      { name: "AI Appointment Booker", href: "/services/ai-appointment-booker" },
      { name: "AI Data Analyst",       href: "/services/ai-data-analyst" },
      { name: "AI Admin Agent",        href: "/services/ai-admin-agent" },
      { name: "AI Consulting",         href: "/services/ai-consulting" },
      { name: "Revenue Automation",    href: "/services/revenue-automation" },
      { name: "Automation solutions",  href: "/services/automation" },
    ],
  },
  {
    title: "Growth",
    href: "/services",
    items: [
      { name: "Social media management", href: "/services/social-media-creative-management" },
      { name: "Paid advertising",        href: "/services/paid-advertising" },
      { name: "SEO",                     href: "/services/seo-services" },
      { name: "Email marketing",         href: "/services/email-marketing" },
      { name: "Content marketing",       href: "/services/content-marketing" },
    ],
  },
  {
    title: "Build",
    href: "/services/custom-software-development",
    items: [
      { name: "Custom software",     href: "/services/custom-software-development" },
      { name: "Mobile applications", href: "/services/mobile-apps-development" },
      { name: "Web development",     href: "/services/web-apps-development" },
    ],
  },
];

export default function MinimalNav({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  /* Escape closes + focus management — listeners exist only while open */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      /* focus trap — keep Tab cycling inside the panel */
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey) {
          if (active === first || !panelRef.current.contains(active)) {
            e.preventDefault();
            last.focus();
          }
        } else if (active === last || !panelRef.current.contains(active)) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    /* move focus into the panel */
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    /* lock body scroll while open */
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      triggerRef.current?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  const isLight = theme === "light";

  return (
    <>
      {/* static corner mark — absolute, scrolls away with the hero */}
      <div
        className="absolute top-0 right-0 z-50"
        style={{ paddingTop: "max(14px, env(safe-area-inset-top))", paddingRight: "max(16px, env(safe-area-inset-right))" }}
      >
        <button
          ref={triggerRef}
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="oarc-menu-panel"
          aria-label="Open menu"
          data-testid="button-menu-mark"
          className={`group flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 ${
            isLight
              ? "text-zinc-500/60 hover:text-zinc-800 hover:bg-zinc-900/5"
              : "text-white/40 hover:text-white hover:bg-white/10"
          }`}
        >
          {/* two quiet lines — the subtle mark */}
          <span aria-hidden className="flex flex-col items-end gap-[5px]">
            <span className={`block h-px w-5 ${isLight ? "bg-current" : "bg-current"}`} />
            <span className="block h-px w-3.5 bg-current transition-all duration-200 group-hover:w-5" />
          </span>
        </button>
      </div>

      {/* panel — mounts only when opened */}
      {open && (
        <div
          id="oarc-menu-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-[10000]"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/70 oarc-mn-fade" onMouseDown={close} />

          {/* sheet */}
          <div
            ref={panelRef}
            className="absolute inset-y-0 right-0 w-full sm:w-[440px] md:w-[560px] overflow-y-auto bg-[#0a0a0a] border-l border-white/10 oarc-mn-slide"
            style={{ paddingTop: "max(20px, env(safe-area-inset-top))", paddingBottom: "max(28px, env(safe-area-inset-bottom))" }}
          >
            <div className="px-7 sm:px-9">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[9px] tracking-[0.5em] uppercase text-white/25">Menu</span>
                <button
                  onClick={close}
                  aria-label="Close menu"
                  data-testid="button-menu-close"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <span aria-hidden className="relative block h-4 w-4">
                    <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 rotate-45 bg-current" />
                    <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 -rotate-45 bg-current" />
                  </span>
                </button>
              </div>

              {/* main destinations */}
              <nav aria-label="Primary">
                <ul className="mb-9 space-y-0.5">
                  {MAIN_LINKS.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={close}
                        data-testid={`link-menu-${l.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                        className="block py-2 text-xl sm:text-2xl font-light text-white/85 hover:text-[#c4ff4d] transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* services groups */}
              <div className="border-t border-white/10 pt-7">
                <p className="text-[9px] tracking-[0.5em] uppercase text-white/25 mb-6">Services</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
                  {SERVICE_GROUPS.map((g) => (
                    <div key={g.title}>
                      <Link
                        href={g.href}
                        onClick={close}
                        className="block text-sm font-semibold text-white mb-2.5 hover:text-[#c4ff4d] transition-colors"
                      >
                        {g.title}
                      </Link>
                      <ul className="space-y-1.5">
                        {g.items.map((it) => (
                          <li key={it.name}>
                            <Link
                              href={it.href}
                              onClick={close}
                              className="block text-[13px] text-white/45 hover:text-white transition-colors"
                            >
                              {it.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <Link
                  href="/services"
                  onClick={close}
                  data-testid="link-menu-all-services"
                  className="mt-7 inline-block text-sm font-semibold text-[#c4ff4d] hover:text-white transition-colors"
                >
                  Browse all services →
                </Link>
              </div>

              {/* contact CTA */}
              <div className="mt-9 border-t border-white/10 pt-7">
                <Link
                  href="/contact"
                  onClick={close}
                  data-testid="button-menu-contact"
                  className="block w-full rounded-full bg-[#c4ff4d] px-6 py-3.5 text-center text-sm font-semibold text-black hover:bg-[#b5ef3d] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* lightweight CSS-only entry transitions */}
          <style>{`
            .oarc-mn-fade{animation:oarcMnFade .2s ease-out}
            .oarc-mn-slide{animation:oarcMnSlide .28s cubic-bezier(.22,1,.36,1)}
            @keyframes oarcMnFade{from{opacity:0}to{opacity:1}}
            @keyframes oarcMnSlide{from{transform:translateX(24px);opacity:0}to{transform:translateX(0);opacity:1}}
            @media (prefers-reduced-motion: reduce){
              .oarc-mn-fade,.oarc-mn-slide{animation:none}
            }
          `}</style>
        </div>
      )}
    </>
  );
}
