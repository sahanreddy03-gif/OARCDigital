import type { ReactNode } from "react";
import Layout from "@/components/layout/Layout";
import type { Locale } from "@/lib/i18n/twins";
import HtmlLang from "./HtmlLang";
import LangFooter from "./LangFooter";

/**
 * Page frame for a translated page that does NOT use the flagship shell (the flagship
 * shell does the same job itself when it gets a `locale`). The site menu stays, the
 * content is marked with its language, and the translated footer replaces the English one.
 */
export default function LocalePage({
  locale,
  path,
  navTheme = "dark",
  children,
}: {
  locale: Locale;
  /** The ENGLISH path of this page, for example "/contact". */
  path: string;
  navTheme?: "dark" | "light";
  children: ReactNode;
}) {
  return (
    <Layout navTheme={navTheme} showFooter={false}>
      <meta httpEquiv="content-language" content={locale} />
      <HtmlLang locale={locale} />
      <div lang={locale}>{children}</div>
      <LangFooter locale={locale} path={path} />
    </Layout>
  );
}
