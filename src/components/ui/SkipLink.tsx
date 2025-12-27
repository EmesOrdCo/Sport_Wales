'use client';

import { useTranslations } from 'next-intl';

export function SkipLink() {
  const t = useTranslations('header');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      className="skip-link"
      aria-label={t('skipToContent') || 'Skip to main content'}
    >
      {t('skipToContent') || 'Skip to main content'}
    </a>
  );
}
