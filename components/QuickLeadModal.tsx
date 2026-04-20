"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QuickLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string | null;
  showPlanDropdown?: boolean;
  source?: string;
}

const planOptions = [
  { value: '', label: 'Select a plan (optional)' },
  { value: 'AI Chatbot', label: 'AI Chatbot' },
  { value: 'AI Voice Assistant', label: 'AI Voice Assistant' },
  { value: 'AI Workflow Agent', label: 'AI Workflow Agent' },
  { value: 'AI Operations Team', label: 'AI Operations Team' },
  { value: 'Enterprise', label: 'Enterprise' },
  { value: 'Just a consultation', label: 'Just a consultation' },
];

export default function QuickLeadModal({ 
  isOpen, 
  onClose, 
  planName = null, 
  showPlanDropdown = false,
  source = 'ai-agents'
}: QuickLeadModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: planName || '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || (!formData.email && !formData.phone)) {
      setError('Please provide your name and either email or phone number.');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('https://formspree.io/f/xblnedyl', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          plan: formData.plan || planName || 'Not specified',
          source: source,
          page: window.location.pathname,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', plan: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      setError('Something went wrong. Please try again or contact us directly.');
    }
    setIsSubmitting(false);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setError(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md bg-zinc-900 rounded-3xl p-8 border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            data-testid="button-close-lead-modal"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {!isSubmitted ? (
            <>
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#c4ff4d]/20 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-7 h-7 text-[#c4ff4d]" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {source === 'founding-client' ? 'Apply for Founding Client' : 'Get Started'}
                </h3>
                <p className="text-zinc-400 text-sm mt-2">
                  {planName && !showPlanDropdown 
                    ? `${planName} - We'll reach out shortly`
                    : "Quick details and we'll be in touch"}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-zinc-500 focus:border-[#c4ff4d] focus:outline-none transition-all"
                  required
                  data-testid="input-lead-name"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-zinc-500 focus:border-[#c4ff4d] focus:outline-none transition-all"
                  data-testid="input-lead-email"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-zinc-500 focus:border-[#c4ff4d] focus:outline-none transition-all"
                  data-testid="input-lead-phone"
                />
                
                {showPlanDropdown && (
                  <select
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:border-[#c4ff4d] focus:outline-none transition-all appearance-none cursor-pointer"
                    data-testid="select-lead-plan"
                  >
                    {planOptions.map((option) => (
                      <option key={option.value} value={option.value} className="bg-zinc-800">
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}

                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#c4ff4d] text-zinc-900 hover:bg-[#b5ef3d] py-6 rounded-xl font-bold text-base shadow-lg shadow-[#c4ff4d]/20"
                  data-testid="button-submit-lead"
                >
                  {isSubmitting ? 'Sending...' : (source === 'founding-client' ? 'Apply Now' : 'Get Started')} 
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>

              <p className="text-zinc-500 text-xs text-center mt-4">
                We'll respond within 2 hours during business hours.
              </p>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#c4ff4d]/20 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-[#c4ff4d]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
              <p className="text-zinc-400">We'll be in touch very soon.</p>
              <Button 
                onClick={handleClose}
                className="mt-6 bg-white/10 hover:bg-white/20 text-white px-8"
                data-testid="button-close-success"
              >
                Close
              </Button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
