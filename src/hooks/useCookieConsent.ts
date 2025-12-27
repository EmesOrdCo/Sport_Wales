'use client';

import { useState, useEffect, useCallback } from 'react';

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
};

export function useCookieConsent() {
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);
  const [hasConsented, setHasConsented] = useState(false);

  // Load preferences from localStorage
  useEffect(() => {
    const loadPreferences = () => {
      const consent = localStorage.getItem('cookie-consent');
      if (consent) {
        try {
          const parsed: CookiePreferences = JSON.parse(consent);
          setPreferences(parsed);
          setHasConsented(true);
        } catch {
          setPreferences(DEFAULT_PREFERENCES);
          setHasConsented(false);
        }
      } else {
        setHasConsented(false);
      }
    };

    loadPreferences();

    // Listen for changes
    const handleConsentUpdate = () => {
      loadPreferences();
    };

    window.addEventListener('cookie-consent-updated', handleConsentUpdate);
    window.addEventListener('storage', (e) => {
      if (e.key === 'cookie-consent') {
        loadPreferences();
      }
    });

    return () => {
      window.removeEventListener('cookie-consent-updated', handleConsentUpdate);
    };
  }, []);

  // Update preferences
  const updatePreferences = useCallback((newPreferences: Partial<CookiePreferences>) => {
    const updated = { ...preferences, ...newPreferences };
    localStorage.setItem('cookie-consent', JSON.stringify(updated));
    setPreferences(updated);
    setHasConsented(true);
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: updated }));
  }, [preferences]);

  // Accept all cookies
  const acceptAll = useCallback(() => {
    const allAccepted = { essential: true, analytics: true, marketing: true };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setHasConsented(true);
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: allAccepted }));
  }, []);

  // Reject non-essential cookies
  const rejectNonEssential = useCallback(() => {
    const essentialOnly = { essential: true, analytics: false, marketing: false };
    localStorage.setItem('cookie-consent', JSON.stringify(essentialOnly));
    setPreferences(essentialOnly);
    setHasConsented(true);
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: essentialOnly }));
  }, []);

  // Check if a specific type of cookie is allowed
  const isAllowed = useCallback((type: keyof CookiePreferences) => {
    return preferences[type] === true;
  }, [preferences]);

  // Reset consent (for testing or user request)
  const resetConsent = useCallback(() => {
    localStorage.removeItem('cookie-consent');
    setPreferences(DEFAULT_PREFERENCES);
    setHasConsented(false);
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: null }));
  }, []);

  return {
    preferences,
    hasConsented,
    updatePreferences,
    acceptAll,
    rejectNonEssential,
    isAllowed,
    resetConsent,
  };
}

