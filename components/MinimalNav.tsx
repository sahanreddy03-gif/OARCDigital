"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────────────────────
   MinimalNav — one static corner mark; panel opens on demand only.
   Zero idle cost: no scroll listeners, no framer-motion, no idle animation.
   Panel mounts only when open.
   ───────────────────────────────────────────────────────────────────────── */

/* Primary nav — shown large, editorial weight */
const PRIMARY = [
  { href: "/",          label: "Home" },
  { href: "/creative",  label: "Creative" },
  { href: "/ai-agents", label: "AI Agents" },
  { href: "/solutions", label: "Automation" },
  { href: "/our-work",  label: "Our Work" },
  { href: "/pricing",   label: "Pricing" },
];

/* Secondary nav — smaller, quieter */
const SECONDARY = [
  { href: "/why-us",    label: "Why Us" },
  { href: "/why-oarc",  label: "Why OARC" },
  { href: "/about",     label: "About" },
  { href: "/h360",      label: "H360" },
  { href: "/tools",     label: "Tools" },
  { href: "/contact",   label: "Contact" },
];

const SERVICE_GROUPS: { title: string; href: string; accent: string; items: { name: string; href: string }[] }[] = [
  {
    title: "Creative & Design",
    href: "/creative",
    accent: "#c4ff4d",
    items: [
      { name: "Social media creative", href: "/services/social-media-creative-management" },
      { name: "Ad creative",           href: "/services/ad-creative" },
      { name: "Branding",              href: "/services/branding" },
      { name: "Video production",      href: "/services/video-production" },
      { name: "Web design",            href: "/services/web-design" },
      { name: "Motion design",         href: "/services/motion-design" },
    ],
  },
  {
    title: "AI Agents",
    href: "/ai-agents",
    accent: "#c4ff4d",
    items: [
      { name: "Hire AI Employees",     href: "/services/hire-ai-employees" },
      { name: "AI SDR Agent",          href: "/services/ai-sdr-agent" },
      { name: "AI Support Specialist", href: "/services/ai-support-specialist" },
      { name: "AI Appointment Booker", href: "/services/ai-appointment-booker" },
      { name: "AI Consulting",         href: "/services/ai-consulting" },
      { name: "Revenue Automation",    href: "/services/revenue-automation" },
    ],
  },
  {
    title: "Growth",
    href: "/services",
    accent: "#c4ff4d",
    items: [
      { name: "Paid advertising",        href: "/services/paid-advertising" },
      { name: "SEO",                     href: "/services/seo-services" },
      { name: "Email marketing",         href: "/services/email-marketing" },
      { name: "Content marketing",       href: "/services/content-marketing" },
      { name: "Social management",       href: "/services/social-media-creative-management" },
    ],
  },
  {
    title: "Build",
    href: "/services/custom-software-development",
    accent: "#c4ff4d",
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

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); return; }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last  = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey) {
          if (active === first || !panelRef.current.contains(active)) { e.preventDefault(); last.focus(); }
        } else if (active === last || !panelRef.current.contains(active)) {
          e.preventDefault(); first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
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
      {/* ── Trigger — static corner mark, scrolls away with page ── */}
      <div
        className="absolute top-0 right-0 z-50"
        style={{
          paddingTop: "max(16px, env(safe-area-inset-top))",
          paddingRight: "max(18px, env(safe-area-inset-right))",
        }}
      >
        <button
          ref={triggerRef}
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="oarc-menu-panel"
          aria-label="Open menu"
          data-testid="button-menu-mark"
          className={`group relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ${
            isLight
              ? "text-zinc-600/50 hover:text-zinc-900 hover:bg-black/5"
              : "text-white/35 hover:text-white hover:bg-white/8"
          }`}
        >
          <span aria-hidden className="flex flex-col items-end gap-[6px]">
            <span className="block h-px w-[18px] bg-current transition-all duration-300 group-hover:w-5" />
            <span className="block h-px w-[12px] bg-current transition-all duration-300 group-hover:w-5" />
          </span>
        </button>
      </div>

      {/* ── Panel — mounts only when open ── */}
      {open && (
        <div
          id="oarc-menu-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-[10000]"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 oarc-mn-fade"
            style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
            onMouseDown={close}
          />

          {/* Sheet */}
          <div
            ref={panelRef}
            role="navigation"
            className="absolute inset-y-0 right-0 flex flex-col oarc-mn-slide overflow-y-auto"
            style={{
              width: "min(100vw, 520px)",
              background: "#080808",
              borderLeft: "1px solid rgba(255,255,255,0.07)",
              paddingTop: "max(0px, env(safe-area-inset-top))",
              paddingBottom: "max(32px, env(safe-area-inset-bottom))",
            }}
          >
            {/* Top bar — logo mark + close */}
            <div className="flex items-center justify-between px-7 sm:px-10 pt-6 pb-0">
              <Link
                href="/"
                onClick={close}
                aria-label="OARC Digital home"
                className="flex items-baseline gap-2 group"
              >
                <span
                  className="text-white font-bold tracking-[-0.02em] text-[13px]"
                  style={{ fontFamily: "var(--font-heatrobox, sans-serif)" }}
                >
                  OARC
                </span>
                <span
                  className="text-[7px] tracking-[0.4em] uppercase"
                  style={{ color: "rgba(196,255,77,0.5)" }}
                >
                  DIGITAL
                </span>
              </Link>

              <button
                onClick={close}
                aria-label="Close menu"
                data-testid="button-menu-close"
                className="flex h-10 w-10 items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/8 transition-colors"
              >
                <span aria-hidden className="relative block h-[14px] w-[14px]">
                  <span className="absolute inset-0 m-auto h-px w-full rotate-45 bg-current" />
                  <span className="absolute inset-0 m-auto h-px w-full -rotate-45 bg-current" />
                </span>
              </button>
            </div>

            {/* ── Primary destinations — editorial, large ── */}
            <nav aria-label="Primary" className="px-7 sm:px-10 pt-8 pb-2">
              <ul>
                {PRIMARY.map((l, i) => (
                  <li key={l.href} style={{ animationDelay: `${i * 35}ms` }} className="oarc-mn-item">
                    <Link
                      href={l.href}
                      onClick={close}
                      data-testid={`link-menu-${l.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      className="group flex items-center justify-between py-[10px] border-b border-white/[0.06] last:border-0"
                    >
                      <span className="text-[28px] sm:text-[32px] font-light tracking-[-0.02em] text-white/80 group-hover:text-white transition-colors duration-200 leading-none">
                        {l.label}
                      </span>
                      <span className="text-white/15 group-hover:text-[#c4ff4d] transition-colors duration-200 text-sm">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ── Secondary destinations — compact row ── */}
            <nav aria-label="Secondary" className="px-7 sm:px-10 pt-5 pb-6">
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {SECONDARY.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={close}
                    data-testid={`link-menu-${l.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="text-[13px] text-white/35 hover:text-white/80 transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* ── Services — 2-col grid ── */}
            <div
              className="mx-7 sm:mx-10 rounded-2xl p-6 sm:p-7"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[9px] tracking-[0.45em] uppercase text-white/25">Services</span>
                <Link
                  href="/services"
                  onClick={close}
                  data-testid="link-menu-all-services"
                  className="text-[11px] font-semibold text-[#c4ff4d]/70 hover:text-[#c4ff4d] transition-colors"
                >
                  All services →
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                {SERVICE_GROUPS.map((g) => (
                  <div key={g.title}>
                    <Link
                      href={g.href}
                      onClick={close}
                      className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-white/60 hover:text-[#c4ff4d] transition-colors mb-3"
                    >
                      {g.title}
                    </Link>
                    <ul className="space-y-[9px]">
                      {g.items.map((it) => (
                        <li key={it.name}>
                          <Link
                            href={it.href}
                            onClick={close}
                            className="block text-[12px] leading-snug text-white/30 hover:text-white/75 transition-colors duration-200"
                          >
                            {it.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* ── CTA ── */}
            <div className="px-7 sm:px-10 pt-5">
              <Link
                href="/contact"
                onClick={close}
                data-testid="button-menu-contact"
                className="flex items-center justify-between w-full rounded-2xl px-6 py-4 transition-all duration-200 group"
                style={{ background: "#c4ff4d" }}
              >
                <span className="text-[13px] font-bold tracking-wide text-black uppercase">
                  Start a project
                </span>
                <span className="text-black/60 group-hover:text-black group-hover:translate-x-0.5 transition-all text-sm">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Transitions */}
          <style>{`
            .oarc-mn-fade{animation:oarcMnFade .18s ease-out both}
            .oarc-mn-slide{animation:oarcMnSlide .3s cubic-bezier(.22,1,.36,1) both}
            .oarc-mn-item{animation:oarcMnItem .35s cubic-bezier(.22,1,.36,1) both}
            @keyframes oarcMnFade{from{opacity:0}to{opacity:1}}
            @keyframes oarcMnSlide{from{transform:translateX(32px);opacity:0}to{transform:translateX(0);opacity:1}}
            @keyframes oarcMnItem{from{transform:translateY(10px);opacity:0}to{transform:translateY(0);opacity:1}}
            @media(prefers-reduced-motion:reduce){
              .oarc-mn-fade,.oarc-mn-slide,.oarc-mn-item{animation:none}
            }
          `}</style>
        </div>
      )}
    </>
  );
}
