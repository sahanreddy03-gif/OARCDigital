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

    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, [isOpen, popupDismissed]);

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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-[9998]"
          >
            {/* Proactive Popup */}
            <AnimatePresence>
              {showPopup && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute bottom-full right-0 mb-3"
                >
                  <div 
                    className="relative px-4 py-3 text-[13px] text-white max-w-[200px]"
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
                    <span>I can roast your website for free 🔥</span>
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

            {/* Floating Button */}
            <motion.button
              onClick={handleOpenChat}
              whileHover={{ y: -1 }}
              className="flex items-center gap-2.5 h-[42px] px-4"
              style={{
                backgroundColor: 'rgba(18, 18, 26, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '21px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                transition: 'border-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              }}
              data-testid="button-open-chat"
            >
              {/* Pulse dot */}
              <div className="relative">
                <div 
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: '#22c55e' }}
                />
                <div 
                  className="absolute inset-0 w-1.5 h-1.5 rounded-full animate-ping"
                  style={{ backgroundColor: '#22c55e', opacity: 0.75 }}
                />
              </div>
              <span 
                className="text-[13px] font-medium"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
              >
                Chat with ARC
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ARCWidget;