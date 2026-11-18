"use client";

// Maltese copy of components/contact/ContactForm.tsx.
// Same endpoint, same field names, same behaviour. Only the visible text is Maltese,
// plus one hidden field ("language") so the team knows which language the person wrote in.

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send } from "lucide-react";
import { NAP } from "@/lib/seo/nap";
import EnquiryNextSteps from "./EnquiryNextSteps";

type Status = "idle" | "sending" | "success" | "error";
type ContactFormProps = {
  funnelTheme?: string;
  submitLabel?: string;
  successMessage?: string;
};

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgavdlp";

export default function ContactForm({
  funnelTheme,
  submitLabel = "Ibgħat il-messaġġ",
  successMessage = "Il-messaġġ intbagħat. Inwieġbuk fi żmien 24 siegħa.",
}: ContactFormProps = {}) {
  const [status, setStatus] = useState<Status>("idle");
  const [sentName, setSentName] = useState("");
  const isBlueprintForm = funnelTheme !== undefined;
  const fieldClasses = isBlueprintForm
    ? "bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-[#c8102e]/60 focus:ring-1 focus:ring-[#c8102e]/30 transition-all"
    : "bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-[#ff914d]/50 focus:ring-1 focus:ring-[#ff914d]/30 transition-all";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSentName(String(data.get("name") ?? ""));
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="w-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10">
        <form onSubmit={handleSubmit} className="space-y-5" data-testid="form-contact">
          <input type="hidden" name="language" value="Maltese" />
          {funnelTheme ? <input type="hidden" name="starting_theme" value={funnelTheme} /> : null}
          {funnelTheme ? (
            <div className="border border-[#c8102e]/35 bg-[#c8102e]/10 px-4 py-3 text-sm text-[#f2efe9]">
              <span className="block font-mono text-[10px] uppercase tracking-[.16em] text-[#f2efe9]/50">Punt tat-tluq</span>
              <span className="mt-1 block font-semibold">{funnelTheme}</span>
            </div>
          ) : null}
          <div className="space-y-1.5">
            <label htmlFor="contact-name" className="text-sm font-medium text-zinc-300">
              Ismek *
            </label>
            <Input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="Maria Borg"
              autoComplete="name"
              disabled={status === "sending"}
              data-testid="input-name"
              className={fieldClasses}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-email" className="text-sm font-medium text-zinc-300">
              L-email tiegħek *
            </label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="maria@kumpanija.com"
              autoComplete="email"
              disabled={status === "sending"}
              data-testid="input-email"
              className={fieldClasses}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-company" className="text-sm font-medium text-zinc-300">
              Kumpanija <span className="text-zinc-500 font-normal">(jekk trid)</span>
            </label>
            <Input
              id="contact-company"
              name="company"
              type="text"
              placeholder="Borg Ltd"
              autoComplete="organization"
              disabled={status === "sending"}
              data-testid="input-company"
              className={fieldClasses}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="text-sm font-medium text-zinc-300">
              Għidilna dwar il-proġett tiegħek *
            </label>
            <Textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              minLength={10}
              placeholder="X'trid tibni, issewwi jew tkabbar?"
              disabled={status === "sending"}
              data-testid="input-message"
              className={`min-h-[120px] resize-none ${fieldClasses}`}
            />
          </div>

          <Button
            type="submit"
            disabled={status === "sending"}
            data-testid="button-submit-contact"
            className={isBlueprintForm
              ? "w-full bg-[#c8102e] text-[#f2efe9] font-bold py-6 rounded-xl shadow-lg shadow-[#c8102e]/20 hover:bg-[#a70d26] transition-colors"
              : "w-full bg-gradient-to-r from-[#ff914d] to-orange-500 text-black font-bold py-6 rounded-xl shadow-lg shadow-[#ff914d]/20"}
          >
            <span className="flex items-center justify-center gap-2">
              {status === "sending" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Qed jintbagħat...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {submitLabel}
                </>
              )}
            </span>
          </Button>

          {status === "success" && (
            <div className="rounded-xl border border-green-400/25 bg-green-400/5 p-4">
              <p
                role="status"
                data-testid="text-form-success"
                className="text-green-400 text-center text-sm font-medium"
              >
                {successMessage}
              </p>
              <EnquiryNextSteps
                name={sentName}
                topic={funnelTheme}
                lead="Trid tweġiba aktar malajr? Agħżel waħda:"
                className="mt-4 text-center"
              />
            </div>
          )}
          {status === "error" && (
            <p
              role="alert"
              data-testid="text-form-error"
              className="text-red-400 text-center text-sm font-medium"
            >
              Xi ħaġa marret ħażin. Iktbilna fuq {NAP.email}
            </p>
          )}

          <p className="text-xs text-center text-zinc-500">
            Meta tibgħat din il-formola, tkun qed taqbel mal-Politika tal-Privatezza tagħna.
          </p>
        </form>
      </div>
    </div>
  );
}
