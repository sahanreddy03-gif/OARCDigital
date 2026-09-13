import type { ReactNode } from "react";
import { Manrope, DM_Serif_Display } from "next/font/google";
import "../premium-work.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-premium-manrope", display: "swap" });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-premium-serif", display: "swap" });

export default function OurWorkLayout({ children }: { children: ReactNode }) {
  return <div className={`${manrope.variable} ${dmSerif.variable} premium-work-root`}>{children}</div>;
}