"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  ["What can be automated?", "CRM triggers, audience checks, message sequencing, task creation, suppression rules and reporting handoffs can be automated. Commercial claims, sensitive interventions and exceptions remain subject to your approval policy."],
  ["Does this replace our compliance or responsible-gaming team?", "No. It gives those teams a clearer operating surface. Your licence obligations, policies, risk decisions and final approvals remain with your people."],
  ["How do consent and suppression work?", "Every journey is scoped to the consent, channel, market and player status fields your systems expose. A withdrawal, exclusion or safety flag can stop downstream actions."],
  ["Can we start with one workflow?", "Yes. A contained lifecycle such as onboarding follow-up or dormant-account review is a sensible starting point before connecting additional systems."],
  ["Will OARC make performance promises?", "No. We define the workflow, its operating assumptions and the evidence your team can review. Outcomes depend on your product, data, policies and customer context."],
];

export default function RevenueAutomationClient() {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="ra-faq-list">{faqs.map(([question, answer], index) => <div className={`ra-faq-item ${open === index ? "is-open" : ""}`} key={question}><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}><span>{question}</span><ChevronDown size={19} aria-hidden="true" /></button>{open === index && <p>{answer}</p>}</div>)}</div>;
}