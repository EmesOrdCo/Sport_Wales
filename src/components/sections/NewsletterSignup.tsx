'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';

const translations = {
  en: {
    title: 'Stay updated',
    subtitle: 'Get the latest sport news and funding opportunities delivered to your inbox.',
    placeholder: 'Enter your email',
    button: 'Subscribe',
    subscribing: 'Subscribing...',
    success: 'Thank you for subscribing!',
    successDesc: "You'll receive our next newsletter soon.",
    error: 'Something went wrong. Please try again.',
    privacy: 'We respect your privacy. Unsubscribe at any time.',
  },
  cy: {
    title: 'Cadwch yn gyfredol',
    subtitle: 'Cael y newyddion chwaraeon diweddaraf a chyfleoedd cyllid yn uniongyrchol i\'ch mewnflwch.',
    placeholder: 'Rhowch eich e-bost',
    button: 'Tanysgrifio',
    subscribing: 'Yn tanysgrifio...',
    success: 'Diolch am danysgrifio!',
    successDesc: 'Byddwch yn derbyn ein cylchlythyr nesaf yn fuan.',
    error: 'Aeth rhywbeth o\'i le. Rhowch gynnig arall.',
    privacy: 'Rydym yn parchu eich preifatrwydd. Dad-danysgrifiwch unrhyw bryd.',
  },
};

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'dark';
}

export function NewsletterSignup({ variant = 'default' }: NewsletterSignupProps) {
  const locale = useLocale() as 'en' | 'cy';
  const t = translations[locale];
  
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setStatus('loading');
    
    // Simulate API call - in production, this would submit to your newsletter service
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  const isDark = variant === 'dark';
  const isCompact = variant === 'compact';

  if (status === 'success') {
    return (
      <div className={`rounded-xl p-6 md:p-8 text-center ${isDark ? 'bg-sw-navy/50' : 'bg-sw-teal/10'}`}>
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sw-teal/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-sw-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`text-xl font-heading font-bold mb-2 ${isDark ? 'text-white' : 'text-sw-navy'}`}>
          {t.success}
        </h3>
        <p className={isDark ? 'text-white/70' : 'text-sw-gray-600'}>
          {t.successDesc}
        </p>
      </div>
    );
  }

  if (isCompact) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="newsletter-email-compact" className="sr-only">
            {t.placeholder}
          </label>
          <input
            type="email"
            id="newsletter-email-compact"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.placeholder}
            required
            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-sw-teal ${
              isDark
                ? 'bg-white/10 border-white/20 text-white placeholder-white/50'
                : 'bg-white border-sw-gray-300 text-sw-black placeholder-sw-gray-400'
            }`}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-sw-red text-white font-semibold rounded-lg hover:bg-sw-red/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === 'loading' ? t.subscribing : t.button}
        </button>
      </form>
    );
  }

  return (
    <div className={`rounded-2xl p-8 md:p-12 ${isDark ? 'bg-sw-navy' : 'bg-gradient-to-br from-sw-teal/10 to-sw-navy/5'}`}>
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${isDark ? 'bg-sw-red' : 'bg-sw-teal'}`}>
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Title */}
        <h2 className={`text-2xl md:text-3xl font-heading font-bold mb-3 ${isDark ? 'text-white' : 'text-sw-navy'}`}>
          {t.title}
        </h2>
        <p className={`mb-8 ${isDark ? 'text-white/70' : 'text-sw-gray-600'}`}>
          {t.subtitle}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="flex-1">
            <label htmlFor="newsletter-email" className="sr-only">
              {t.placeholder}
            </label>
            <input
              type="email"
              id="newsletter-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.placeholder}
              required
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-sw-teal transition-shadow ${
                isDark
                  ? 'bg-white/10 border-white/20 text-white placeholder-white/50'
                  : 'bg-white border-sw-gray-300 text-sw-black placeholder-sw-gray-400'
              }`}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-8 py-3 bg-sw-red text-white font-semibold rounded-lg hover:bg-sw-red/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? t.subscribing : t.button}
          </button>
        </form>

        {/* Error message */}
        {status === 'error' && (
          <p className="mt-4 text-sm text-red-500">{t.error}</p>
        )}

        {/* Privacy note */}
        <p className={`mt-4 text-xs ${isDark ? 'text-white/50' : 'text-sw-gray-400'}`}>
          {t.privacy}
        </p>
      </div>
    </div>
  );
}


