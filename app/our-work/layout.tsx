/** OARC Design Reminder — the canonical OARC Digital Work route retains the exact Premium Work typography and visual system without affecting other site routes. */
import type { ReactNode } from "react";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "../premium-work.css";

const premiumManrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-premium-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const premiumSerif = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-premium-serif",
  weight: "400",
});

export default function OurWorkLayout({ children }: { children: ReactNode }) {
  return <div className={`premium-work-root ${premiumManrope.variable} ${premiumSerif.variable}`}>{children}</div>;
}
