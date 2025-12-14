import { useCookieConsent } from '@/contexts/CookieConsentContext';
import { Link } from 'wouter';
import { Cookie, Settings, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function CookieConsentBanner() {
  const { showBanner, acceptAll, rejectAll, openPreferences, closeBanner } = useCookieConsent();

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
          data-testid="cookie-banner"
        >
          <div className="max-w-4xl mx-auto bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative">
            <button
              onClick={closeBanner}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              aria-label="Close cookie banner"
              data-testid="cookie-close"
            >
              <X className="w-4 h-4 text-white/70" />
            </button>
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4ade80]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-[#4ade80]" />
                </div>
                
                <div className="flex-1 pr-8">
                  <h3 className="text-lg font-bold text-white mb-2">
                    We value your privacy
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    We use cookies to enhance your browsing experience, analyze site traffic, and serve 
                    personalized content. By clicking "Accept All", you consent to our use of cookies. 
                    You can manage your preferences or reject non-essential cookies.
                  </p>
                  <p className="text-white/50 text-xs">
                    Read our{' '}
                    <Link href="/cookie-policy" className="text-[#4ade80] hover:underline">Cookie Policy</Link>
                    {' '}and{' '}
                    <Link href="/privacy-policy" className="text-[#4ade80] hover:underline">Privacy Policy</Link>
                    {' '}for more information.
                  </p>
                </div>
              </div>

              {/* Action Buttons - Equal prominence as required by GDPR */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={rejectAll}
                  className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-lg transition-colors"
                  data-testid="cookie-reject-all"
                >
                  Reject All
                </button>
                <button
                  onClick={openPreferences}
                  className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                  data-testid="cookie-manage"
                >
                  <Settings className="w-4 h-4" />
                  Manage Preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 px-6 py-3 bg-[#4ade80] hover:bg-[#5aff6d] text-black font-bold rounded-lg transition-colors"
                  data-testid="cookie-accept-all"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
