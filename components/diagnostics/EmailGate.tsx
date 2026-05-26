"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { Mail, Lock, CheckCircle2, ArrowRight } from "lucide-react";

interface EmailGateProps {
  toolName: string;
  rowsHidden: number;
  onUnlock?: (email: string) => void;
}

export default function EmailGate({ toolName, rowsHidden, onUnlock }: EmailGateProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Enter a valid work email so we can send the full report.");
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || "Diagnostics user",
          contact: email.trim(),
          service: `Diagnostics — ${toolName}`,
          source: `/diagnostics — ${toolName}`,
        }),
      });
      const data = await res.json();
      if (!res.ok || data?.error) throw new Error(data?.error || "Submit failed");
      setStatus("success");
      onUnlock?.(email.trim());
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Submit failed. Try again or WhatsApp us.");
    }
  };

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-[#c4ff4d]/30 bg-[#c4ff4d]/5 p-6 text-center"
        data-testid={`gate-success-${toolName.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <CheckCircle2 className="h-8 w-8 text-[#c4ff4d] mx-auto mb-3" />
        <p className="text-white font-semibold mb-1">Full report on the way</p>
        <p className="text-sm text-zinc-400">
          The complete {toolName} workbook is heading to your inbox in the next few minutes. Check
          your spam folder if you do not see it within ten.
        </p>
      </div>
    );
  }

  return (
    <m.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6"
      data-testid={`gate-form-${toolName.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex items-start gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-[#c4ff4d]/10 flex items-center justify-center flex-shrink-0">
          <Lock className="h-5 w-5 text-[#c4ff4d]" />
        </div>
        <div>
          <p className="text-white font-semibold mb-1">
            {rowsHidden} more rows behind the wall
          </p>
          <p className="text-sm text-zinc-400">
            Drop your work email and we will send the full {toolName} workbook — every issue,
            every fix, every euro figure. No sales follow-up unless you ask for one.
          </p>
        </div>
      </div>
      <form onSubmit={submit} className="space-y-3">
        <div className="grid sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            data-testid="input-gate-name"
            className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#c4ff4d]/50"
          />
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              data-testid="input-gate-email"
              className="w-full rounded-lg bg-black/40 border border-white/10 pl-10 pr-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#c4ff4d]/50"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          data-testid="button-unlock-report"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#c4ff4d] px-5 py-3 text-sm font-semibold text-black transition-all hover:shadow-lg hover:shadow-[#c4ff4d]/25 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending…" : `Send me the full ${toolName} workbook`}
          <ArrowRight className="h-4 w-4" />
        </button>
        {status === "error" && errorMsg && (
          <p className="text-xs text-red-400" data-testid="text-gate-error">{errorMsg}</p>
        )}
        <p className="text-[10px] text-zinc-500">
          We email it once, file the lead, and that is it. GDPR rules apply — unsubscribe in one
          click from the email itself.
        </p>
      </form>
    </m.div>
  );
}
