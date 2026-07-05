"use client";

import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { X, Phone, Sparkles } from 'lucide-react';
import { usePathname } from "next/navigation";
import { ARCChat } from './ARCChat';
import { NAP } from "@/lib/seo/nap";

const PHONE_NUMBER = NAP.phoneE164;

export function ARCWidget() {
  const location = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupDismissed, setPopupDismissed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [initialPrompt, setInitialPrompt] = useState<string | null>(null);
  const [contextMode, setContextMode] = useState<'default' | 'h360'>('default');

  // Global open hook: any element on the page can call
  //   window.dispatchEvent(new CustomEvent('arc:open', { detail: { prompt?: string } }))
  // to launch ARC and (optionally) seed the first user message.
  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<{ prompt?: string; contextMode?: 'default' | 'h360' }>;
      const path = window.location.pathname;

      /** H360 is its own flow — audit scroll, not full-screen chat overlay. */
      if (path.startsWith('/h360') || custom.detail?.contextMode === 'h360') {
        const target =
          document.getElementById('h360-audit') ??
          document.getElementById('h360-try') ??
          document.getElementById('product-faq');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.location.href = '/h360#h360-audit';
        }
        return;
      }

      if (custom.detail?.prompt) setInitialPrompt(custom.detail.prompt);
      else setInitialPrompt(null);
      setContextMode('default');
      setIsOpen(true);
      setShowPopup(false);
      setPopupDismissed(true);
      try { sessionStorage.setItem('arc-popup-seen-v2', 'true'); } catch { /* ignore */ }
    };
    window.addEventListener('arc:open', handler as EventListener);
    return () => window.removeEventListener('arc:open', handler as EventListener);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen || popupDismissed) return;
    
    const hasSeenPopup = sessionStorage.getItem('arc-popup-seen-v2');
    if (hasSeenPopup) return;

    const showTimer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(showTimer);
  }, [isOpen, popupDismissed]);

  useEffect(() => {
    if (!showPopup) return;

    const hideTimer = setTimeout(() => {
      setShowPopup(false);
      setPopupDismissed(true);
      sessionStorage.setItem('arc-popup-seen-v2', 'true');
    }, 8000);

    return () => clearTimeout(hideTimer);
  }, [showPopup]);

  const handleOpenChat = () => {
    setIsOpen(true);
    setShowPopup(false);
    setPopupDismissed(true);
    sessionStorage.setItem('arc-popup-seen-v2', 'true');
  };

  const handleCloseChat = () => {
    setIsOpen(false);
    setContextMode('default');
    setInitialPrompt(null);
  };

  const handleDismissPopup = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPopup(false);
    setPopupDismissed(true);
    sessionStorage.setItem('arc-popup-seen-v2', 'true');
  };

  // Only show call button on landing pages
  const isLandingPage = ['/solutions', '/creative', '/ai-agents'].includes(location);
  // On Contact page the floating launcher is hidden (the page has its own
  // "Launch AI Strategist" CTA which dispatches `arc:open`), but the chat
  // panel still mounts when triggered.
  // H360 is its own site — no OARC floating launcher on /h360/*
  const isH360 = location.startsWith('/h360');
  const hideFloatingButton = location === '/contact' || isH360;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <ARCChat
            onClose={handleCloseChat}
            isMobile={isMobile}
            initialPrompt={initialPrompt}
            contextMode={contextMode}
          />
        )}
      </AnimatePresence>

      {/* Call Button - Above ARC - Only on landing pages */}
      <AnimatePresence>
        {!isOpen && isLandingPage && (
          <m.a
            href={`tel:${PHONE_NUMBER}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0.1 }}
            className="fixed bottom-24 right-6 z-[9997] cursor-pointer group"
            data-testid="link-call-float"
            aria-label="Call OARC"
          >
            <m.div 
              whileHover={{ scale: 1.05 }}
              className="relative w-10 h-10 bg-zinc-900/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 shadow-lg transition-all hover:border-white/20"
            >
              <Phone className="w-4 h-4 text-white/70" aria-hidden="true" />
              <span className="sr-only">Call OARC</span>
            </m.div>
          </m.a>
        )}
      </AnimatePresence>

      {/* ARC Chat Button */}
      <AnimatePresence>
        {!isOpen && !hideFloatingButton && (
          <m.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-[9998] cursor-pointer group"
            onClick={handleOpenChat}
            data-testid="button-open-chat"
          >
            {/* Proactive Popup */}
            <AnimatePresence>
              {showPopup && (
                <m.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute bottom-full right-0 mb-3"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div 
                    className="relative px-4 py-3 text-[13px] text-white whitespace-nowrap"
                    style={{
                      backgroundColor: '#1a1a24',
                      border: '1px solid #2a2a34',
                      borderRadius: '12px',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
                    }}
                  >
                    <button
                      onClick={handleDismissPopup}
                      className="absolute top-1 right-1.5 text-gray-500 hover:text-white transition-colors text-xs"
                      data-testid="button-dismiss-popup"
                    >
                      <X size={14} />
                    </button>
                    <span className="pr-4">Give me your problem. I'll solve it today.</span>
                    {/* Triangle pointer */}
                    <div 
                      className="absolute -bottom-2 right-6 w-0 h-0"
                      style={{
                        borderLeft: '8px solid transparent',
                        borderRight: '8px solid transparent',
                        borderTop: '8px solid #1a1a24'
                      }}
                    />
                  </div>
                </m.div>
              )}
            </AnimatePresence>

            {/* Premium black orb — AI spark + ARC */}
            <m.div
              whileHover={{ scale: 1.06 }}
              className="relative w-16 h-16 rounded-full flex flex-col items-center justify-center gap-0.5"
              style={{
                backgroundColor: '#000000',
                border: '1px solid rgba(255,255,255,0.18)',
                boxShadow: '0 6px 32px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.06) inset',
              }}
            >
              <Sparkles size={13} className="text-white opacity-80" strokeWidth={1.5} />
              <span className="text-[11px] font-bold text-white tracking-[0.14em] uppercase leading-none">ARC</span>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ARCWidget;