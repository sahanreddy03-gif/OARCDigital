import { useState, useEffect } from 'react';
import { useCookieConsent, CookiePreferences } from '@/contexts/CookieConsentContext';
import { Link } from 'wouter';
import { X, Cookie, Shield, BarChart3, Megaphone, Settings, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CookieCategoryProps {
  icon: typeof Shield;
  title: string;
  description: string;
  enabled: boolean;
  locked?: boolean;
  onChange?: (enabled: boolean) => void;
}

function CookieCategory({ icon: Icon, title, description, enabled, locked, onChange }: CookieCategoryProps) {
  return (
    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="text-white font-bold mb-1">{title}</h4>
            <p className="text-white/60 text-sm">{description}</p>
          </div>
        </div>
        
        {locked ? (
          <div className="px-3 py-1.5 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full flex-shrink-0">
            Always Active
          </div>
        ) : (
          <button
            onClick={() => onChange?.(!enabled)}
            className={`relative w-12 h-6 rounded-full transition-colors flex-shrink-0 ${
              enabled ? 'bg-[#4ade80]' : 'bg-white/20'
            }`}
            data-testid={`cookie-toggle-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <motion.div
              className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm"
              animate={{ left: enabled ? '1.625rem' : '0.125rem' }}
              transition={{ duration: 0.2 }}
            />
          </button>
        )}
      </div>
    </div>
  );
}

export function CookiePreferencesModal() {
  const { showPreferences, closePreferences, preferences, savePreferences, acceptAll, rejectAll } = useCookieConsent();
  
  const [localPrefs, setLocalPrefs] = useState<CookiePreferences>(preferences);

  useEffect(() => {
    setLocalPrefs(preferences);
  }, [preferences, showPreferences]);

  const handleSave = () => {
    savePreferences(localPrefs);
  };

  return (
    <AnimatePresence>
      {showPreferences && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10000]"
            onClick={closePreferences}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[90vh] bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl z-[10001] overflow-hidden flex flex-col"
            data-testid="cookie-preferences-modal"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#4ade80]/20 rounded-lg flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-[#4ade80]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Cookie Preferences</h2>
                  <p className="text-white/60 text-sm">Manage your cookie settings</p>
                </div>
              </div>
              <button
                onClick={closePreferences}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                data-testid="cookie-preferences-close"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <p className="text-white/70 text-sm mb-6">
                We use different types of cookies to optimize your experience on our website. 
                Click on the categories below to learn more and change your preferences. 
                Note that blocking some cookies may impact your experience.
              </p>

              <CookieCategory
                icon={Shield}
                title="Strictly Necessary"
                description="Essential cookies that enable basic website functionality. These cannot be disabled as they are required for the website to work properly."
                enabled={true}
                locked={true}
              />

              <CookieCategory
                icon={BarChart3}
                title="Analytics"
                description="Help us understand how visitors interact with our website by collecting information anonymously. This helps us improve our services."
                enabled={localPrefs.analytics}
                onChange={(enabled) => setLocalPrefs({ ...localPrefs, analytics: enabled })}
              />

              <CookieCategory
                icon={Megaphone}
                title="Marketing"
                description="Used to track visitors across websites to display relevant advertisements based on your interests and browsing behavior."
                enabled={localPrefs.marketing}
                onChange={(enabled) => setLocalPrefs({ ...localPrefs, marketing: enabled })}
              />

              <CookieCategory
                icon={Settings}
                title="Functional"
                description="Enable enhanced functionality and personalization, such as remembering your preferences and settings."
                enabled={localPrefs.functional}
                onChange={(enabled) => setLocalPrefs({ ...localPrefs, functional: enabled })}
              />

              <div className="pt-4 text-white/50 text-xs">
                For more information, read our{' '}
                <Link href="/cookie-policy" className="text-[#4ade80] hover:underline" onClick={closePreferences}>
                  Cookie Policy
                </Link>
                {' '}and{' '}
                <Link href="/privacy-policy" className="text-[#4ade80] hover:underline" onClick={closePreferences}>
                  Privacy Policy
                </Link>.
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/10 bg-black/20">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={rejectAll}
                  className="flex-1 px-4 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-lg transition-colors text-sm"
                  data-testid="cookie-preferences-reject"
                >
                  Reject All
                </button>
                <button
                  onClick={handleSave}
                  className="flex-1 px-4 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
                  data-testid="cookie-preferences-save"
                >
                  <Check className="w-4 h-4" />
                  Save Preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 px-4 py-2.5 bg-[#4ade80] hover:bg-[#5aff6d] text-black font-bold rounded-lg transition-colors text-sm"
                  data-testid="cookie-preferences-accept"
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
