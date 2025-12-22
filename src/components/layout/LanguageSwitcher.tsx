'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark';
}

export function LanguageSwitcher({ variant = 'light' }: LanguageSwitcherProps) {
  const t = useTranslations('header');
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div 
      className={`lang-switch ${variant === 'dark' ? 'lang-switch-dark' : ''}`}
      role="group" 
      aria-label={t('language')}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`lang-switch-btn ${locale === loc ? 'active' : ''}`}
          aria-current={locale === loc ? 'true' : undefined}
          aria-label={loc === 'en' ? 'Switch to English' : 'Newid i Gymraeg'}
        >
          {loc === 'en' ? 'EN' : 'CY'}
        </button>
      ))}
    </div>
  );
}
