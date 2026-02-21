import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, Clock, Users } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import speakerImg from "@assets/Register_here_1771630453152.png";

const COMPANY_SIZES = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-1000 employees",
  "1000+ employees",
];

export default function WebinarSection() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    companySize: "",
    jobTitle: "",
  });

  const mutation = useMutation({
    mutationFn: async (data: typeof form) => {
      const res = await apiRequest("POST", "/api/webinar-register", data);
      return res.json();
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({ title: "You're registered!", description: "Check your email for the webinar details." });
    },
    onError: () => {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.companyName || !form.companySize || !form.jobTitle) return;
    mutation.mutate(form);
  };

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0a2a1a 0%, #0d3320 40%, #113d28 70%, #0a2a1a 100%)" }}>
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(200, 255, 200, 0.15), transparent 50%), radial-gradient(circle at 80% 20%, rgba(200, 255, 200, 0.1), transparent 40%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-400/70 font-semibold mb-6" data-testid="text-webinar-label">
              LIVE WEBINAR
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] mb-6" data-testid="text-webinar-headline">
              <span className="text-emerald-200/80 italic font-serif" style={{ fontFamily: "'EB Garamond', Georgia, serif" }}>
                It starts right here:
              </span>{" "}
              <span className="text-white">
                claim your seat
              </span>
            </h2>

            <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-lg">
              All substance, no hype. You'll walk away with clear starting points and a better understanding of how to move from curiosity to practical, day-to-day AI use.
            </p>

            <div className="space-y-2 mb-10">
              <p className="flex items-center gap-2 text-emerald-400 font-semibold" data-testid="text-webinar-date">
                <Calendar className="w-4 h-4" />
                Date: Monday, March 2nd, 2026
              </p>
              <p className="flex items-center gap-2 text-emerald-400 font-semibold" data-testid="text-webinar-time">
                <Clock className="w-4 h-4" />
                Time: 7:00 PM CET
              </p>
            </div>

            <div className="mb-8">
              <img
                src={speakerImg}
                alt="AI Webinar Speakers - Everyone uses AI, few win with it"
                className="rounded-2xl w-full max-w-md shadow-2xl shadow-black/40"
                data-testid="img-webinar-speakers"
              />
            </div>

            <p className="text-sm text-white/30">
              Having trouble registering? Reach out to us at{" "}
              <a href="mailto:hello@oarcdigital.com" className="underline hover:text-white/50 transition-colors">
                hello@oarcdigital.com
              </a>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 md:p-10"
                style={{ background: "linear-gradient(145deg, #c8f25e 0%, #b8e44e 50%, #a8d63e 100%)" }}
                data-testid="form-webinar"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={(e) => updateField("firstName", e.target.value)}
                      placeholder="What's your first name?"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-zinc-300/50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-800 transition-colors text-sm"
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={(e) => updateField("lastName", e.target.value)}
                      placeholder="What's your last name?"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-zinc-300/50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-800 transition-colors text-sm"
                      data-testid="input-last-name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-2">
                      Business Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="What's your email address?"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-zinc-300/50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-800 transition-colors text-sm"
                      data-testid="input-webinar-email"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={form.companyName}
                      onChange={(e) => updateField("companyName", e.target.value)}
                      placeholder="What's your company name?"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-zinc-300/50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-800 transition-colors text-sm"
                      data-testid="input-company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-2">
                      Company Size
                    </label>
                    <select
                      value={form.companySize}
                      onChange={(e) => updateField("companySize", e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-zinc-300/50 text-zinc-900 focus:outline-none focus:border-zinc-800 transition-colors text-sm appearance-none"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}
                      data-testid="select-company-size"
                    >
                      <option value="">Select the size of your...</option>
                      {COMPANY_SIZES.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      value={form.jobTitle}
                      onChange={(e) => updateField("jobTitle", e.target.value)}
                      placeholder="What's your role?"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-zinc-300/50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-800 transition-colors text-sm"
                      data-testid="input-job-title"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="px-8 py-3.5 bg-zinc-900 text-white font-semibold rounded-full hover:bg-zinc-800 transition-colors disabled:opacity-50 flex items-center gap-2 text-sm"
                    data-testid="button-register-webinar"
                  >
                    {mutation.isPending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Registering...
                      </>
                    ) : (
                      "Register Now"
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl p-10 text-center"
                style={{ background: "linear-gradient(145deg, #c8f25e 0%, #b8e44e 50%, #a8d63e 100%)" }}
                data-testid="webinar-success"
              >
                <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">
                  You're in!
                </h3>
                <p className="text-zinc-700 mb-2">
                  Your seat is reserved for <strong>March 2nd at 7:00 PM CET</strong>.
                </p>
                <p className="text-zinc-500 text-sm">
                  We'll send you a reminder and the joining link before the webinar.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}