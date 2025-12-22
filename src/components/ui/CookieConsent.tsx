'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

const translations = {
  en: {
    title: 'We use cookies',
    description: 'We use cookies to improve your experience on our website. By browsing this website, you agree to our use of cookies.',
    accept: 'Accept all',
    reject: 'Reject non-essential',
    manage: 'Manage preferences',
    learnMore: 'Learn more',
    essential: 'Essential cookies',
    essentialDesc: 'Required for the website to function properly.',
    analytics: 'Analytics cookies',
    analyticsDesc: 'Help us understand how visitors interact with our website.',
    marketing: 'Marketing cookies',
    marketingDesc: 'Used to deliver relevant advertisements.',
    save: 'Save preferences',
  },
  cy: {
    title: 'Rydym yn defnyddio cwcis',
    description: 'Rydym yn defnyddio cwcis i wella eich profiad ar ein gwefan. Trwy bori\'r wefan hon, rydych yn cytuno i\'n defnydd o gwcis.',
    accept: 'Derbyn pob un',
    reject: 'Gwrthod rhai nad ydynt yn hanfodol',
    manage: 'Rheoli dewisiadau',
    learnMore: 'Dysgu mwy',
    essential: 'Cwcis hanfodol',
    essentialDesc: 'Yn angenrheidiol i\'r wefan weithio\'n iawn.',
    analytics: 'Cwcis dadansoddeg',
    analyticsDesc: 'Yn ein helpu i ddeall sut mae ymwelwyr yn rhyngweithio â\'n gwefan.',
    marketing: 'Cwcis marchnata',
    marketingDesc: 'Yn cael eu defnyddio i ddarparu hysbysebion perthnasol.',
    save: 'Cadw dewisiadau',
  },
};

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export function CookieConsent() {
  const locale = useLocale() as 'en' | 'cy';
  const t = translations[locale];
  
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, can't be changed
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { essential: true, analytics: true, marketing: true };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    const essentialOnly = { essential: true, analytics: false, marketing: false };
    localStorage.setItem('cookie-consent', JSON.stringify(essentialOnly));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-description"
    >
      <div className="container max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl border border-sw-gray-200 overflow-hidden">
          {!showPreferences ? (
            /* Main Banner */
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <h2 id="cookie-title" className="text-lg font-heading font-bold text-sw-navy mb-2">
                    {t.title}
                  </h2>
                  <p id="cookie-description" className="text-sw-gray-600 text-sm mb-4">
                    {t.description}{' '}
                    <Link href="/privacy" className="text-sw-teal hover:underline">
                      {t.learnMore}
                    </Link>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="px-4 py-2 text-sm font-medium text-sw-gray-600 border border-sw-gray-300 rounded-lg hover:bg-sw-gray-50 transition-colors"
                  >
                    {t.manage}
                  </button>
                  <button
                    onClick={handleRejectNonEssential}
                    className="px-4 py-2 text-sm font-medium text-sw-navy border border-sw-navy rounded-lg hover:bg-sw-navy hover:text-white transition-colors"
                  >
                    {t.reject}
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-2 text-sm font-medium text-white bg-sw-red rounded-lg hover:bg-sw-red/90 transition-colors"
                  >
                    {t.accept}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Preferences Panel */
            <div className="p-6 md:p-8">
              <h2 className="text-lg font-heading font-bold text-sw-navy mb-6">
                {t.manage}
              </h2>
              
              <div className="space-y-4 mb-6">
                {/* Essential - Always on */}
                <div className="flex items-start gap-4 p-4 bg-sw-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-sw-navy">{t.essential}</h3>
                    <p className="text-sm text-sw-gray-600">{t.essentialDesc}</p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="sr-only"
                      aria-label={t.essential}
                    />
                    <div className="w-11 h-6 bg-sw-teal rounded-full">
                      <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow"></div>
                    </div>
                  </div>
                </div>

                {/* Analytics */}
                <div className="flex items-start gap-4 p-4 bg-sw-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-sw-navy">{t.analytics}</h3>
                    <p className="text-sm text-sw-gray-600">{t.analyticsDesc}</p>
                  </div>
                  <button
                    onClick={() => setPreferences((p) => ({ ...p, analytics: !p.analytics }))}
                    className="relative w-11 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-sw-teal focus:ring-offset-2"
                    style={{ backgroundColor: preferences.analytics ? '#1E6B7D' : '#E0E0E0' }}
                    role="switch"
                    aria-checked={preferences.analytics}
                    aria-label={t.analytics}
                  >
                    <div
                      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${
                        preferences.analytics ? 'right-0.5' : 'left-0.5'
                      }`}
                    ></div>
                  </button>
                </div>

                {/* Marketing */}
                <div className="flex items-start gap-4 p-4 bg-sw-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-sw-navy">{t.marketing}</h3>
                    <p className="text-sm text-sw-gray-600">{t.marketingDesc}</p>
                  </div>
                  <button
                    onClick={() => setPreferences((p) => ({ ...p, marketing: !p.marketing }))}
                    className="relative w-11 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-sw-teal focus:ring-offset-2"
                    style={{ backgroundColor: preferences.marketing ? '#1E6B7D' : '#E0E0E0' }}
                    role="switch"
                    aria-checked={preferences.marketing}
                    aria-label={t.marketing}
                  >
                    <div
                      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${
                        preferences.marketing ? 'right-0.5' : 'left-0.5'
                      }`}
                    ></div>
                  </button>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="px-4 py-2 text-sm font-medium text-sw-gray-600 border border-sw-gray-300 rounded-lg hover:bg-sw-gray-50 transition-colors"
                >
                  {locale === 'cy' ? 'Yn ôl' : 'Back'}
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2 text-sm font-medium text-white bg-sw-red rounded-lg hover:bg-sw-red/90 transition-colors"
                >
                  {t.save}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

