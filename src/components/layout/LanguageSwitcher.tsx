'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { setLanguagePreference } from '@/lib/languagePreference';

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark';
}

export function LanguageSwitcher({ variant = 'light' }: LanguageSwitcherProps) {
  const t = useTranslations('header');
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    // Save the user's language preference (functionality cookie)
    setLanguagePreference(newLocale);
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div 
      className={`flex items-center gap-0.5 p-1 rounded-full ${
        variant === 'dark' 
          ? 'border border-white/20' 
          : 'border border-[#E2E8F0]'
      }`}
      role="group" 
      aria-label={t('language')}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
            locale === loc
              ? 'bg-white text-[#123F56] shadow-sm'
              : variant === 'dark'
                ? 'text-white/70 hover:text-white'
                : 'text-[#64748B] hover:text-[#123F56]'
          }`}
          aria-current={locale === loc ? 'true' : undefined}
          aria-label={loc === 'en' ? 'Switch to English' : 'Newid i Gymraeg'}
        >
          {loc === 'en' ? 'EN' : 'CY'}
        </button>
      ))}
    </div>
  );
}
