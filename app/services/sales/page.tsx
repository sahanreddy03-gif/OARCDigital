import type { Metadata } from "next";
import Link from "next/link";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry } from "@/lib/seo/ogImageUrl";

const TITLE = 'Sales Systems Malta | Follow-Up That Closes | OARC';
const DESCRIPTION =
  'Sales systems for Malta teams—speed-to-lead, CRM hygiene, and AI-assisted follow-up so enquiries become revenue.';
const CANONICAL = 'https://oarcdigital.com/services/sales';

const FAQS = [
    {
      question: 'What sales systems does OARC build in Malta?',
      answer: 'Follow-up cadences, CRM workflows, and AI-assisted qualification/booking.',
    },
    {
      question: 'Can AI call leads instantly?',
      answer: 'Yes via Voice AI Worker for sales / AI SDR.',
    },
    {
      question: 'Do you train human sales teams too?',
      answer: 'Process and scripts yes; we are not a motivational seminar shop.',
    },
    {
      question: 'How do you measure?',
      answer: 'Meetings booked, opportunities moved—agreed KPIs, no vanity.',
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
        path='/services/sales'
        title={TITLE}
        description={DESCRIPTION}
        faqs={FAQS}
      />
      <main style={{ background:"#0E0D0C", color:"#F2EFE9", fontFamily:"var(--font-space-grotesk,'Space Grotesk',sans-serif)", minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", padding:"3rem 22px" }}>
        <div style={{ fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:10, letterSpacing:".26em", textTransform:"uppercase" as const, color:"rgba(242,239,233,.45)", marginBottom:"1.5rem", display:"flex", alignItems:"center", gap:".65rem" }}>
          <span style={{ display:"block", width:24, height:1, background:"#E02B20", flexShrink:0 }} />
          Sales — dept 02
        </div>
        <h1 style={{ fontWeight:700, fontSize:"clamp(2.8rem,12vw,4.6rem)", lineHeight:.94, letterSpacing:"-.035em", maxWidth:"16ch" }}>
          Sales systems Malta — close more of what you already earn
        </h1>
        <p style={{ fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:"11.5px", lineHeight:1.85, color:"rgba(242,239,233,.6)", marginTop:"1.4rem", maxWidth:"38ch" }}>
          Speed-to-lead, pipeline and offer strategy, founder story and sales reels, trust and proof, instant qualify and book — and the team training to make it stick.
        </p>
        <Link
          href="/contact"
          style={{ display:"inline-flex", alignItems:"center", gap:".8rem", marginTop:"1.8rem", fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontWeight:700, fontSize:"11px", letterSpacing:".18em", textTransform:"uppercase", color:"#0E0D0C", background:"#E02B20", textDecoration:"none", padding:"1.05rem 1.5rem", borderRadius:4 }}
        >
          Talk to the sales team
        </Link>
        <section style={{ marginTop:"3.5rem", maxWidth:"720px" }} aria-label="Frequently asked questions">
          <h2 style={{ fontSize:"clamp(1.4rem,4vw,1.9rem)", fontWeight:700, letterSpacing:"-.02em", marginBottom:"1rem" }}>Questions owners ask</h2>
        <details style={{borderTop:"1px solid rgba(242,239,233,.12)",padding:"1rem 0"}}>
          <summary style={{cursor:"pointer",fontWeight:600,fontSize:"1.05rem"}}>What sales systems does OARC build in Malta?</summary>
          <p style={{marginTop:".75rem",fontFamily:"var(--font-space-mono,'Space Mono',monospace)",fontSize:"12px",lineHeight:1.75,color:"rgba(242,239,233,.7)",maxWidth:"62ch"}}>Follow-up cadences, CRM workflows, and AI-assisted qualification/booking.</p>
        </details>
        <details style={{borderTop:"1px solid rgba(242,239,233,.12)",padding:"1rem 0"}}>
          <summary style={{cursor:"pointer",fontWeight:600,fontSize:"1.05rem"}}>Can AI call leads instantly?</summary>
          <p style={{marginTop:".75rem",fontFamily:"var(--font-space-mono,'Space Mono',monospace)",fontSize:"12px",lineHeight:1.75,color:"rgba(242,239,233,.7)",maxWidth:"62ch"}}>Yes via Voice AI Worker for sales / AI SDR.</p>
        </details>
        <details style={{borderTop:"1px solid rgba(242,239,233,.12)",padding:"1rem 0"}}>
          <summary style={{cursor:"pointer",fontWeight:600,fontSize:"1.05rem"}}>Do you train human sales teams too?</summary>
          <p style={{marginTop:".75rem",fontFamily:"var(--font-space-mono,'Space Mono',monospace)",fontSize:"12px",lineHeight:1.75,color:"rgba(242,239,233,.7)",maxWidth:"62ch"}}>Process and scripts yes; we are not a motivational seminar shop.</p>
        </details>
        <details style={{borderTop:"1px solid rgba(242,239,233,.12)",padding:"1rem 0"}}>
          <summary style={{cursor:"pointer",fontWeight:600,fontSize:"1.05rem"}}>How do you measure?</summary>
          <p style={{marginTop:".75rem",fontFamily:"var(--font-space-mono,'Space Mono',monospace)",fontSize:"12px",lineHeight:1.75,color:"rgba(242,239,233,.7)",maxWidth:"62ch"}}>Meetings booked, opportunities moved—agreed KPIs, no vanity.</p>
        </details>
        </section>
      </main>
    </>
  );
}
