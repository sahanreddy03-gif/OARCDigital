"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send } from "lucide-react";
import { NAP } from "@/lib/seo/nap";

type Status = "idle" | "sending" | "success" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgavdlp";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

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
          <div className="space-y-1.5">
            <label htmlFor="contact-name" className="text-sm font-medium text-zinc-300">
              Your name *
            </label>
            <Input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="Jane Doe"
              autoComplete="name"
              disabled={status === "sending"}
              data-testid="input-name"
              className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-[#ff914d]/50 focus:ring-1 focus:ring-[#ff914d]/30 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-email" className="text-sm font-medium text-zinc-300">
              Your email *
            </label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="jane@company.com"
              autoComplete="email"
              disabled={status === "sending"}
              data-testid="input-email"
              className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-[#ff914d]/50 focus:ring-1 focus:ring-[#ff914d]/30 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-company" className="text-sm font-medium text-zinc-300">
              Company <span className="text-zinc-500 font-normal">(optional)</span>
            </label>
            <Input
              id="contact-company"
              name="company"
              type="text"
              placeholder="Acme Inc."
              autoComplete="organization"
              disabled={status === "sending"}
              data-testid="input-company"
              className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-[#ff914d]/50 focus:ring-1 focus:ring-[#ff914d]/30 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="text-sm font-medium text-zinc-300">
              Tell us about your project *
            </label>
            <Textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              minLength={10}
              placeholder="What are you trying to build, fix, or grow?"
              disabled={status === "sending"}
              data-testid="input-message"
              className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-[#ff914d]/50 focus:ring-1 focus:ring-[#ff914d]/30 transition-all resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={status === "sending"}
            data-testid="button-submit-contact"
            className="w-full bg-gradient-to-r from-[#ff914d] to-orange-500 text-black font-bold py-6 rounded-xl shadow-lg shadow-[#ff914d]/20"
          >
            <span className="flex items-center justify-center gap-2">
              {status === "sending" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </span>
          </Button>

          {status === "success" && (
            <p
              role="status"
              data-testid="text-form-success"
              className="text-green-400 text-center text-sm font-medium"
            >
              Message sent. We&apos;ll be in touch within 24 hours.
            </p>
          )}
          {status === "error" && (
            <p
              role="alert"
              data-testid="text-form-error"
              className="text-red-400 text-center text-sm font-medium"
            >
              Something went wrong. Email us at {NAP.email}
            </p>
          )}

          <p className="text-xs text-center text-zinc-500">
            By submitting this form, you agree to our Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
}
