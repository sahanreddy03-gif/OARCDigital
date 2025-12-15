import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

// --- Validation Consumer Schema ---
const contactSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    workEmail: z.string().email("Please enter a valid work email"),
    companyName: z.string().min(1, "Company name is required"),
    interest: z.string().optional(),
    message: z.string().min(10, "Please provide a bit more detail (min 10 chars)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorDetails, setErrorDetails] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
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
                    message: data.message,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to submit form");
            }

            setIsSuccess(true);
            reset();
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
                className="text-center p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
            >
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                <p className="text-zinc-400 mb-6">
                    Our AI agents are analyzing your request. A human Strategist will respond within 24 hours.
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
        <div className="w-full max-w-lg mx-auto bg-white/5 backdrop-blur-lg border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden">
            {/* Decorative Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
            </div>

            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Start Talking</h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* Full Name */}
                    <div className="space-y-1.5">
                        <label htmlFor="fullName" className="text-sm font-medium text-zinc-300">Full Name *</label>
                        <Input
                            id="fullName"
                            placeholder="John Doe"
                            data-testid="input-fullname"
                            {...register("fullName")}
                            className={`bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 transition-all ${errors.fullName ? 'border-red-500/50' : ''}`}
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
                            className={`bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 transition-all ${errors.workEmail ? 'border-red-500/50' : ''}`}
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
                            className={`bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 transition-all ${errors.companyName ? 'border-red-500/50' : ''}`}
                        />
                        {errors.companyName && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.companyName.message}</p>}
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                        <label htmlFor="companyName" className="text-sm font-medium text-zinc-300">How can we help? *</label>
                        <Textarea
                            id="message"
                            placeholder="Tell us about your project goals..."
                            data-testid="input-message"
                            {...register("message")}
                            className={`min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 transition-all ${errors.message ? 'border-red-500/50' : ''}`}
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
                        className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-bold py-6 rounded-xl relative overflow-hidden group"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit Request"}
                        </span>
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out pointer-events-none" />
                    </Button>

                    <p className="text-xs text-center text-zinc-500">
                        By submitting this form, you agree to our Privacy Policy.
                    </p>
                </form>
            </div>
        </div>
    );
}
