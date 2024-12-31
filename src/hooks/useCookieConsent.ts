import { useState, useEffect } from 'react';

interface CookiePreferences {
  analytics: boolean;
  functional: boolean;
  necessary: boolean;
}

export function useCookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    analytics: false,
    functional: false,
    necessary: true, // Always required
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else {
      setPreferences(JSON.parse(consent));
    }
  }, []);

  const acceptAll = () => {
    const newPreferences = {
      analytics: true,
      functional: true,
      necessary: true,
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
    setShowBanner(false);
  };

  const acceptSelected = (selected: Partial<CookiePreferences>) => {
    const newPreferences = {
      ...preferences,
      ...selected,
      necessary: true, // Always required
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
    setShowBanner(false);
  };

  const rejectAll = () => {
    const newPreferences = {
      analytics: false,
      functional: false,
      necessary: true,
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
    setShowBanner(false);
  };

  return {
    showBanner,
    preferences,
    acceptAll,
    acceptSelected,
    rejectAll,
    setShowBanner,
  };
}