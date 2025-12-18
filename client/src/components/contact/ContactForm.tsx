import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle, Send } from "lucide-react";

const serviceOptions = [
  { value: "ai-consulting", label: "AI Consulting" },
  { value: "ai-employees", label: "AI Employees (Sales, Support, Admin, Data)" },
  { value: "ai-reservations", label: "AI Reservations & Booking" },
  { value: "api-integration", label: "API & Integration Services" },
  { value: "branding", label: "Branding & Identity" },
  { value: "content-social", label: "Content & Social Media" },
  { value: "cro", label: "Conversion & Funnel Optimization" },
  { value: "email-automation", label: "Email & Marketing Automation" },
  { value: "consultation", label: "General Consultation" },
  { value: "design-photography", label: "Graphic Design & Photography" },
  { value: "growth-strategy", label: "Growth Strategy" },
  { value: "lead-gen", label: "Lead Generation & Customer Acquisition" },
  { value: "mobile-app", label: "Mobile App Development" },
  { value: "mvp", label: "MVP Development" },
  { value: "paid-ads", label: "Paid Advertising" },
  { value: "seo", label: "SEO & Search Marketing" },
  { value: "video", label: "Video Production" },
  { value: "web-design", label: "Web Design" },
  { value: "white-label", label: "White Label Software" },
  { value: "other", label: "Other" },
];

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  workEmail: z.string().email("Please enter a valid work email"),
  companyName: z.string().min(1, "Company name is required"),
  serviceInterest: z.string().optional(),
  message: z.string().min(10, "Please provide a bit more detail (min 10 chars)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorDetails, setErrorDetails] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setErrorDetails(null);

    try {
      const response = await fetch("https://formspree.io/f/xblnedyl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: data.fullName,
          email: data.workEmail,
          company: data.companyName,
          service: data.serviceInterest || "Not specified",
          message: data.message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit form");
      }

      setIsSuccess(true);
      reset();
      setSelectedService("");
    } catch (error) {
      setErrorDetails(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl"
      >
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
        <p className="text-zinc-400 mb-6">
          Our team is reviewing your request. We'll be in touch within 24 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSuccess(false)}
          data-testid="button-send-another"
          className="border-white/20 text-white hover:bg-white/10"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
      {/* Animated border glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl" style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,145,77,0.1), transparent)',
          animation: 'shimmer 3s infinite',
        }} />
      </div>
      
      {/* Decorative Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }}
      />

      <div className="relative z-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Full Name */}
          <div className="space-y-1.5">
            <label htmlFor="fullName" className="text-sm font-medium text-zinc-300">Full Name *</label>
            <Input
              id="fullName"
              placeholder="John Doe"
              data-testid="input-fullname"
              {...register("fullName")}
              className={`bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-[#ff914d]/50 focus:ring-1 focus:ring-[#ff914d]/30 transition-all ${errors.fullName ? 'border-red-500/50' : ''}`}
            />
            {errors.fullName && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.fullName.message}</p>}
          </div>

          {/* Work Email */}
          <div className="space-y-1.5">
            <label htmlFor="workEmail" className="text-sm font-medium text-zinc-300">Work Email *</label>
            <Input
              id="workEmail"
              type="email"
              placeholder="john@company.com"
              data-testid="input-email"
              {...register("workEmail")}
              className={`bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-[#ff914d]/50 focus:ring-1 focus:ring-[#ff914d]/30 transition-all ${errors.workEmail ? 'border-red-500/50' : ''}`}
            />
            {errors.workEmail && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.workEmail.message}</p>}
          </div>

          {/* Company Name */}
          <div className="space-y-1.5">
            <label htmlFor="companyName" className="text-sm font-medium text-zinc-300">Company Name *</label>
            <Input
              id="companyName"
              placeholder="Acme Inc."
              data-testid="input-company"
              {...register("companyName")}
              className={`bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-[#ff914d]/50 focus:ring-1 focus:ring-[#ff914d]/30 transition-all ${errors.companyName ? 'border-red-500/50' : ''}`}
            />
            {errors.companyName && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.companyName.message}</p>}
          </div>

          {/* Service Interest - Optional Dropdown */}
          <div className="space-y-1.5">
            <label htmlFor="serviceInterest" className="text-sm font-medium text-zinc-300">Service Interest</label>
            <Select 
              value={selectedService} 
              onValueChange={(value) => {
                setSelectedService(value);
                setValue("serviceInterest", value);
              }}
            >
              <SelectTrigger 
                className="bg-white/5 border-white/10 text-white focus:border-[#ff914d]/50 focus:ring-1 focus:ring-[#ff914d]/30"
                data-testid="select-service"
              >
                <SelectValue placeholder="Select a service (optional)" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-white/10">
                {serviceOptions.map((option) => (
                  <SelectItem 
                    key={option.value} 
                    value={option.value}
                    className="text-white hover:bg-white/10 focus:bg-white/10 cursor-pointer"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Message - No asterisk */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-sm font-medium text-zinc-300">How can we help you?</label>
            <Textarea
              id="message"
              placeholder="Tell us about your project goals..."
              data-testid="input-message"
              {...register("message")}
              className={`min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-[#ff914d]/50 focus:ring-1 focus:ring-[#ff914d]/30 transition-all ${errors.message ? 'border-red-500/50' : ''}`}
            />
            {errors.message && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message.message}</p>}
          </div>

          {errorDetails && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2" data-testid="text-form-error">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              <p className="text-red-400 text-sm">{errorDetails}</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            data-testid="button-submit-contact"
            className="w-full bg-gradient-to-r from-[#ff914d] to-orange-500 hover:from-[#ff914d]/90 hover:to-orange-500/90 text-black font-bold py-6 rounded-xl relative overflow-hidden group/btn shadow-lg shadow-[#ff914d]/20"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Request
                </>
              )}
            </span>
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none" />
          </Button>

          <p className="text-xs text-center text-zinc-500">
            By submitting this form, you agree to our Privacy Policy.
          </p>
        </form>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
