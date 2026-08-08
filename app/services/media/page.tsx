import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "Paid Media Malta — Ad Spend That Pays | OARC";
const DESCRIPTION =
  "OARC manages paid media for Malta businesses on Meta, Google, TikTok and YouTube — flighted testing, 100% spend to platforms, and every euro tracked back to revenue.";
const CANONICAL = "https://oarcdigital.com/services/media";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: CANONICAL, type: "website", siteName: "OARC Digital" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  other: { "geo.region": "MT", "geo.placename": "Malta" },
};

export default function MediaPage() {
  return (
    <main style={{ background:"#0E0D0C", color:"#F2EFE9", fontFamily:"var(--font-space-grotesk,'Space Grotesk',sans-serif)", minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", padding:"3rem 22px" }}>
      <div style={{ fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:10, letterSpacing:".26em", textTransform:"uppercase" as const, color:"rgba(242,239,233,.45)", marginBottom:"1.5rem", display:"flex", alignItems:"center", gap:".65rem" }}>
        <span style={{ display:"block", width:24, height:1, background:"#E02B20", flexShrink:0 }} />
        Media — dept 03
      </div>
      <h1 style={{ fontWeight:700, fontSize:"clamp(2.8rem,12vw,4.6rem)", lineHeight:.94, letterSpacing:"-.035em", maxWidth:"12ch" }}>
        Ad spend that<br /><span style={{ color:"#E02B20" }}>pays.</span>
      </h1>
      <p style={{ fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:"11.5px", lineHeight:1.85, color:"rgba(242,239,233,.6)", marginTop:"1.4rem", maxWidth:"38ch" }}>
        Meta, Google, TikTok, YouTube and out-of-home — flighted testing, 100% spend straight to platforms, every euro traced to revenue. Full page coming soon.
      </p>
      <Link
        href="/contact"
        style={{ display:"inline-flex", alignItems:"center", gap:".8rem", marginTop:"1.8rem", fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontWeight:700, fontSize:"11px", letterSpacing:".18em", textTransform:"uppercase", color:"#0E0D0C", background:"#E02B20", textDecoration:"none", padding:"1.05rem 1.5rem", borderRadius:4 }}
      >
        Talk to the media team
      </Link>
    </main>
  );
}
