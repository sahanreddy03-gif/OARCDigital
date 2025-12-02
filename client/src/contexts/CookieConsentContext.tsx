import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CookiePreferences {
  necessary: boolean; // Always true, cannot be disabled
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export interface CookieConsentContextType {
  hasConsented: boolean;
  preferences: CookiePreferences;
  showBanner: boolean;
  showPreferences: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: Partial<CookiePreferences>) => void;
  openPreferences: () => void;
  closePreferences: () => void;
  closeBanner: () => void;
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const CONSENT_KEY = 'oarc_cookie_consent';
const CONSENT_DATE_KEY = 'oarc_consent_date';
const CONSENT_EXPIRY_DAYS = 365;

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [hasConsented, setHasConsented] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem(CONSENT_KEY);
    const consentDate = localStorage.getItem(CONSENT_DATE_KEY);
    
    if (storedConsent && consentDate) {
      const daysSinceConsent = (Date.now() - parseInt(consentDate)) / (1000 * 60 * 60 * 24);
      
      if (daysSinceConsent < CONSENT_EXPIRY_DAYS) {
        try {
          const parsedPrefs = JSON.parse(storedConsent);
          setPreferences({ ...defaultPreferences, ...parsedPrefs, necessary: true });
          setHasConsented(true);
          setShowBanner(false);
        } catch {
          setShowBanner(true);
        }
      } else {
        localStorage.removeItem(CONSENT_KEY);
        localStorage.removeItem(CONSENT_DATE_KEY);
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const saveToStorage = (prefs: CookiePreferences) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs));
    localStorage.setItem(CONSENT_DATE_KEY, Date.now().toString());
  };

  const acceptAll = () => {
    const allEnabled: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allEnabled);
    setHasConsented(true);
    setShowBanner(false);
    setShowPreferences(false);
    saveToStorage(allEnabled);
  };

  const rejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(onlyNecessary);
    setHasConsented(true);
    setShowBanner(false);
    setShowPreferences(false);
    saveToStorage(onlyNecessary);
  };

  const savePreferences = (prefs: Partial<CookiePreferences>) => {
    const newPrefs: CookiePreferences = {
      ...preferences,
      ...prefs,
      necessary: true,
    };
    setPreferences(newPrefs);
    setHasConsented(true);
    setShowBanner(false);
    setShowPreferences(false);
    saveToStorage(newPrefs);
  };

  const openPreferences = () => {
    setShowPreferences(true);
  };

  const closePreferences = () => {
    setShowPreferences(false);
  };

  const closeBanner = () => {
    setShowBanner(false);
  };

  return (
    <CookieConsentContext.Provider
      value={{
        hasConsented,
        preferences,
        showBanner,
        showPreferences,
        acceptAll,
        rejectAll,
        savePreferences,
        openPreferences,
        closePreferences,
        closeBanner,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}
