"use client";

import { useEffect } from "react";

/**
 * The site's <html> tag says lang="en" for every page (one shared root layout). On a
 * translated page the content is already marked with its own `lang`; this also corrects the
 * <html> tag in the browser, for screen readers and browser translate prompts, and puts it
 * back when the visitor moves to an English page.
 */
export default function HtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    const el = document.documentElement;
    const before = el.lang;
    el.lang = locale;
    return () => {
      el.lang = before;
    };
  }, [locale]);
  return null;
}
