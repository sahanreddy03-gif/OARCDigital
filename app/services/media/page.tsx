import type { Metadata } from "next";
import Link from "next/link";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry } from "@/lib/seo/ogImageUrl";

const TITLE = 'Paid Media Malta | Ad Spend That Pays | OARC';
const DESCRIPTION =
  'Paid media for Malta businesses—Meta/Google and beyond—with creative and landing paths that aim for revenue, not just cheap clicks.';
const CANONICAL = 'https://oarcdigital.com/services/media';

const FAQS = [
    {
      question: 'Do you manage Meta and Google ads in Malta?',
      answer: 'Yes—as paid media with creative and conversion paths.',
    },
    {
      question: 'How do you avoid wasting spend?',
      answer: 'Offer clarity, tracking, creative testing, and fast lead response.',
    },
    {
      question: 'Can AI help after the click?',
      answer: 'Yes—agents for follow-up.',
    },
    {
      question: 'Is this the same as /services/paid-advertising?',
      answer: 'Related sibling—align messaging and prefer the URL that matches the buyer query; we avoid cannibalising the same intent across both.',
    }
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: CANONICAL, type: "website", siteName: "OARC Digital", images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }) },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  other: { "geo.region": "MT", "geo.placename": "Malta" },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path='/services/media'
        title={TITLE}
        description={DESCRIPTION}
        faqs={FAQS}
      />
      <main style={{ background:"#0E0D0C", color:"#F2EFE9", fontFamily:"var(--font-space-grotesk,'Space Grotesk',sans-serif)", minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", padding:"3rem 22px" }}>
        <div style={{ fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:10, letterSpacing:".26em", textTransform:"uppercase" as const, color:"rgba(242,239,233,.45)", marginBottom:"1.5rem", display:"flex", alignItems:"center", gap:".65rem" }}>
          <span style={{ display:"block", width:24, height:1, background:"#E02B20", flexShrink:0 }} />
          Media — dept 03
        </div>
        <h1 style={{ fontWeight:700, fontSize:"clamp(2.8rem,12vw,4.6rem)", lineHeight:.94, letterSpacing:"-.035em", maxWidth:"16ch" }}>
          Paid media Malta — make ad spend pay for customers
        </h1>
        <p style={{ fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:"11.5px", lineHeight:1.85, color:"rgba(242,239,233,.6)", marginTop:"1.4rem", maxWidth:"38ch" }}>
          Meta, Google, TikTok, YouTube and out-of-home — flighted testing, spend to platforms, every euro traced to revenue.
        </p>
        <Link
          href="/contact"
          style={{ display:"inline-flex", alignItems:"center", gap:".8rem", marginTop:"1.8rem", fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontWeight:700, fontSize:"11px", letterSpacing:".18em", textTransform:"uppercase", color:"#0E0D0C", background:"#E02B20", textDecoration:"none", padding:"1.05rem 1.5rem", borderRadius:4 }}
        >
          Talk to the media team
        </Link>
        <section style={{ marginTop:"3.5rem", maxWidth:"720px" }} aria-label="Frequently asked questions">
          <h2 style={{ fontSize:"clamp(1.4rem,4vw,1.9rem)", fontWeight:700, letterSpacing:"-.02em", marginBottom:"1rem" }}>Questions owners ask</h2>
        <details style={{borderTop:"1px solid rgba(242,239,233,.12)",padding:"1rem 0"}}>
          <summary style={{cursor:"pointer",fontWeight:600,fontSize:"1.05rem"}}>Do you manage Meta and Google ads in Malta?</summary>
          <p style={{marginTop:".75rem",fontFamily:"var(--font-space-mono,'Space Mono',monospace)",fontSize:"12px",lineHeight:1.75,color:"rgba(242,239,233,.7)",maxWidth:"62ch"}}>Yes—as paid media with creative and conversion paths.</p>
        </details>
        <details style={{borderTop:"1px solid rgba(242,239,233,.12)",padding:"1rem 0"}}>
          <summary style={{cursor:"pointer",fontWeight:600,fontSize:"1.05rem"}}>How do you avoid wasting spend?</summary>
          <p style={{marginTop:".75rem",fontFamily:"var(--font-space-mono,'Space Mono',monospace)",fontSize:"12px",lineHeight:1.75,color:"rgba(242,239,233,.7)",maxWidth:"62ch"}}>Offer clarity, tracking, creative testing, and fast lead response.</p>
        </details>
        <details style={{borderTop:"1px solid rgba(242,239,233,.12)",padding:"1rem 0"}}>
          <summary style={{cursor:"pointer",fontWeight:600,fontSize:"1.05rem"}}>Can AI help after the click?</summary>
          <p style={{marginTop:".75rem",fontFamily:"var(--font-space-mono,'Space Mono',monospace)",fontSize:"12px",lineHeight:1.75,color:"rgba(242,239,233,.7)",maxWidth:"62ch"}}>Yes—agents for follow-up.</p>
        </details>
        <details style={{borderTop:"1px solid rgba(242,239,233,.12)",padding:"1rem 0"}}>
          <summary style={{cursor:"pointer",fontWeight:600,fontSize:"1.05rem"}}>Is this the same as /services/paid-advertising?</summary>
          <p style={{marginTop:".75rem",fontFamily:"var(--font-space-mono,'Space Mono',monospace)",fontSize:"12px",lineHeight:1.75,color:"rgba(242,239,233,.7)",maxWidth:"62ch"}}>Related sibling—align messaging and prefer the URL that matches the buyer query; we avoid cannibalising the same intent across both.</p>
        </details>
        </section>
      </main>
    </>
  );
}
