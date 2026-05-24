import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function UnavailableModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleShow = () => setIsOpen(true);
    window.addEventListener('show-unavailable-modal', handleShow);
    return () => window.removeEventListener('show-unavailable-modal', handleShow);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-surface p-8 rounded-3xl shadow-2xl max-w-md w-full relative border border-outline-variant/20 text-center"
          >
            <button
              className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors p-2 rounded-full hover:bg-surface-container cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
            <div className="flex flex-col items-center gap-5 mt-2">
              <h2 className="text-title-xl font-bold text-on-surface">Feature Unavailable</h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                This website is in compliance for our subject <br/><strong className="text-on-surface">ISCC 16 - TECHNOPRENEURSHIP</strong>.
              </p>
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-on-surface text-surface font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-all active:scale-95 cursor-pointer shadow-md"
              >
                Understood
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
