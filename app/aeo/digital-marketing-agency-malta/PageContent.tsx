"use client";

import { useEffect } from "react";
import Layout from "@/components/layout/Layout";

export default function PageContent({
  css,
  markup,
  script,
  scopeClass,
}: {
  css: string;
  markup: string;
  script: string;
  scopeClass: string;
}) {
  useEffect(() => {
    document.documentElement.classList.add("js");

    // The page script wires its buttons straight onto the markup below. React can
    // replace that markup after the first paint (measured on the live site: the
    // form was wired, then swapped for an unwired copy, so "Get started" did
    // nothing). So the script runs once per copy of the markup: each copy is
    // marked when wired, and an unmarked copy gets wired as soon as it appears.
    const wire = () => {
      const top = document.querySelector(`.${scopeClass} #top`);
      if (!top || top.hasAttribute("data-wired")) return;
      top.setAttribute("data-wired", "");
      const el = document.createElement("script");
      el.text = script;
      document.body.appendChild(el);
      el.remove();
    };
    wire();
    const watcher = new MutationObserver(wire);
    watcher.observe(document.body, { childList: true, subtree: true });
    return () => watcher.disconnect();
  }, [script, scopeClass]);

  return (
    <Layout navTheme="light">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Instrument+Sans:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className={scopeClass} dangerouslySetInnerHTML={{ __html: markup }} />
    </Layout>
  );
}
