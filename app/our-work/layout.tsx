import type { ReactNode } from "react";
import localFont from "next/font/local";
import "../premium-work.css";
import Layout from "@/components/layout/Layout";

const manrope = localFont({ src: [{ path: "../fonts/manrope.woff2", weight: "200 800", style: "normal" }], variable: "--font-premium-manrope", display: "swap" });
const dmSerif = localFont({ src: [{ path: "../fonts/dm-serif-display.woff2", weight: "400", style: "normal" }], variable: "--font-premium-serif", display: "swap", adjustFontFallback: "Times New Roman" });

export default function OurWorkLayout({ children }: { children: ReactNode }) {
  return <Layout navTheme="light"><div className={`${manrope.variable} ${dmSerif.variable} premium-work-root`}>{children}</div></Layout>;
}