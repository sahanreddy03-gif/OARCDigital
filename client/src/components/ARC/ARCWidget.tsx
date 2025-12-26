import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ARCChat } from './ARCChat';

export function ARCWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupDismissed, setPopupDismissed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen || popupDismissed) return;
    
    const hasSeenPopup = sessionStorage.getItem('arc-popup-seen');
    if (hasSeenPopup) return;

    const showTimer = setTimeout(() => {
      setShowPopup(true);
    }, 20000);

    return () => clearTimeout(showTimer);
  }, [isOpen, popupDismissed]);

  useEffect(() => {
    if (!showPopup) return;

    const hideTimer = setTimeout(() => {
      setShowPopup(false);
      setPopupDismissed(true);
      sessionStorage.setItem('arc-popup-seen', 'true');
    }, 8000);

    return () => clearTimeout(hideTimer);
  }, [showPopup]);

  const handleOpenChat = () => {
    setIsOpen(true);
    setShowPopup(false);
    setPopupDismissed(true);
    sessionStorage.setItem('arc-popup-seen', 'true');
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  const handleDismissPopup = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPopup(false);
    setPopupDismissed(true);
    sessionStorage.setItem('arc-popup-seen', 'true');
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <ARCChat onClose={handleCloseChat} isMobile={isMobile} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.div
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
                <motion.div
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
                    <span className="pr-4">Ask me anything about growth</span>
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
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pulsing Rings */}
            <div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping opacity-20" style={{ animationDuration: '2s' }} />
            <div className="absolute inset-[-4px] bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-75 blur-sm group-hover:opacity-100 transition-opacity" />

            {/* Core Orb */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="relative w-14 h-14 bg-black rounded-full flex items-center justify-center border border-white/20 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/40 to-purple-900/40" />
              <span className="text-sm font-bold text-cyan-400 tracking-wider relative z-10">ARC</span>
              
              {/* Digital Noise Overlay */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ARCWidget;