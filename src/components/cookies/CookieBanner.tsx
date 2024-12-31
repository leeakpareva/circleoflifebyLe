import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Settings } from 'lucide-react';
import { CookieSettings } from './CookieSettings';

interface CookieBannerProps {
  onAcceptAll: () => void;
  onAcceptSelected: (preferences: any) => void;
  onRejectAll: () => void;
}

export function CookieBanner({ onAcceptAll, onAcceptSelected, onRejectAll }: CookieBannerProps) {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <Cookie size={24} className="text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Cookie Preferences</h3>
              <p className="mt-1 text-slate-600 max-w-3xl">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                Please select your preferences below.
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowSettings(false)}
            className="text-slate-400 hover:text-slate-500"
          >
            <X size={20} />
          </button>
        </div>

        <AnimatePresence mode="wait">
          {showSettings ? (
            <CookieSettings
              onAcceptSelected={onAcceptSelected}
              onCancel={() => setShowSettings(false)}
            />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-6 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onAcceptAll}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="flex items-center space-x-2 bg-slate-100 text-slate-700 px-6 py-2 rounded-lg hover:bg-slate-200 transition-colors"
              >
                <Settings size={18} />
                <span>Cookie Settings</span>
              </button>
              <button
                onClick={onRejectAll}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Reject All
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}