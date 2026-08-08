import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "Sales Systems Malta — Close More Sales | OARC";
const DESCRIPTION =
  "OARC builds sales systems for Malta businesses: speed-to-lead flows, pipeline strategy, offer design, trust signals, and instant booking — so you close more, faster.";
const CANONICAL = "https://oarcdigital.com/services/sales";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: CANONICAL, type: "website", siteName: "OARC Digital" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  other: { "geo.region": "MT", "geo.placename": "Malta" },
};

export default function SalesPage() {
  return (
    <main style={{ background:"#0E0D0C", color:"#F2EFE9", fontFamily:"var(--font-space-grotesk,'Space Grotesk',sans-serif)", minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", padding:"3rem 22px" }}>
      <div style={{ fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:10, letterSpacing:".26em", textTransform:"uppercase" as const, color:"rgba(242,239,233,.45)", marginBottom:"1.5rem", display:"flex", alignItems:"center", gap:".65rem" }}>
        <span style={{ display:"block", width:24, height:1, background:"#E02B20", flexShrink:0 }} />
        Sales — dept 02
      </div>
      <h1 style={{ fontWeight:700, fontSize:"clamp(2.8rem,12vw,4.6rem)", lineHeight:.94, letterSpacing:"-.035em", maxWidth:"12ch" }}>
        Close more<br /><span style={{ color:"#E02B20" }}>sales.</span>
      </h1>
      <p style={{ fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:"11.5px", lineHeight:1.85, color:"rgba(242,239,233,.6)", marginTop:"1.4rem", maxWidth:"38ch" }}>
        Speed-to-lead, pipeline and offer strategy, founder story and sales reels, trust and proof, instant qualify and book — and the team training to make it stick. Full page coming soon.
      </p>
      <Link
        href="/contact"
        style={{ display:"inline-flex", alignItems:"center", gap:".8rem", marginTop:"1.8rem", fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontWeight:700, fontSize:"11px", letterSpacing:".18em", textTransform:"uppercase", color:"#0E0D0C", background:"#E02B20", textDecoration:"none", padding:"1.05rem 1.5rem", borderRadius:4 }}
      >
        Talk to the sales team
      </Link>
    </main>
  );
}
