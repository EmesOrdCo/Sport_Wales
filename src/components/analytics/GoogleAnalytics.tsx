'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

// Replace with your actual GA4 Measurement ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export function GoogleAnalytics() {
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check cookie consent on mount
    const checkConsent = () => {
      const consent = localStorage.getItem('cookie-consent');
      if (consent) {
        try {
          const preferences: CookiePreferences = JSON.parse(consent);
          setAnalyticsConsent(preferences.analytics === true);
        } catch {
          setAnalyticsConsent(false);
        }
      }
    };

    checkConsent();

    // Listen for consent changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookie-consent') {
        checkConsent();
      }
    };

    // Also listen for custom event from CookieConsent component
    const handleConsentUpdate = () => {
      checkConsent();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('cookie-consent-updated', handleConsentUpdate);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cookie-consent-updated', handleConsentUpdate);
    };
  }, []);

  // Don't render anything if no consent or already loaded
  if (!analyticsConsent || isLoaded) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => setIsLoaded(true)}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}

// Helper function to track page views (can be used in pages)
export function trackPageView(url: string) {
  const consent = localStorage.getItem('cookie-consent');
  if (consent) {
    try {
      const preferences: CookiePreferences = JSON.parse(consent);
      if (preferences.analytics && typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', GA_MEASUREMENT_ID, {
          page_path: url,
        });
      }
    } catch {
      // Consent not valid
    }
  }
}

// Helper function to track events
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  const consent = localStorage.getItem('cookie-consent');
  if (consent) {
    try {
      const preferences: CookiePreferences = JSON.parse(consent);
      if (preferences.analytics && typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value,
        });
      }
    } catch {
      // Consent not valid
    }
  }
}

