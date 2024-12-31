import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Toggle } from '../shared/Toggle';

interface CookieSettingsProps {
  onAcceptSelected: (preferences: any) => void;
  onCancel: () => void;
}

export function CookieSettings({ onAcceptSelected, onCancel }: CookieSettingsProps) {
  const [preferences, setPreferences] = useState({
    analytics: false,
    functional: false,
    necessary: true,
  });

  const handleToggle = (key: string) => {
    if (key === 'necessary') return; // Cannot toggle necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const handleSave = () => {
    onAcceptSelected(preferences);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mt-6"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
          <div>
            <h4 className="font-medium text-slate-900">Necessary Cookies</h4>
            <p className="text-sm text-slate-600">Required for the website to function properly</p>
          </div>
          <Toggle enabled={true} disabled={true} />
        </div>

        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
          <div>
            <h4 className="font-medium text-slate-900">Analytics Cookies</h4>
            <p className="text-sm text-slate-600">Help us improve our website by collecting usage information</p>
          </div>
          <Toggle
            enabled={preferences.analytics}
            onChange={() => handleToggle('analytics')}
          />
        </div>

        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
          <div>
            <h4 className="font-medium text-slate-900">Functional Cookies</h4>
            <p className="text-sm text-slate-600">Enable enhanced functionality and personalization</p>
          </div>
          <Toggle
            enabled={preferences.functional}
            onChange={() => handleToggle('functional')}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end space-x-4">
        <button
          onClick={onCancel}
          className="text-slate-600 hover:text-slate-900 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Save Preferences
        </button>
      </div>
    </motion.div>
  );
}