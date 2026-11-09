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
    if (document.documentElement.dataset.oarcTeam === "on") return;
    document.documentElement.dataset.oarcTeam = "on";
    const el = document.createElement("script");
    el.text = script;
    document.body.appendChild(el);
  }, [script]);

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
