'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { Logo } from '@/components/ui/Logo';

export function Header() {
  const t = useTranslations('header');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isHome = pathname === '/';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg' 
          : isHome 
            ? 'bg-transparent' 
            : 'bg-white/95 backdrop-blur-xl'
      }`}
      role="banner"
    >
      <div className="container">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center group transition-transform duration-300 hover:scale-[1.02]"
            aria-label={t('logoAlt')}
          >
            <Logo variant={isScrolled || !isHome ? 'light' : 'dark'} />
          </Link>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Menu Button - Always Visible */}
            <button
              onClick={toggleMenu}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                isScrolled || !isHome
                  ? 'text-[#0F172A] hover:bg-[#F1F5F9] border border-[#E2E8F0]'
                  : 'text-white hover:bg-white/10 border border-white/20'
              }`}
              aria-expanded={isMenuOpen}
              aria-controls="main-navigation"
              aria-label={isMenuOpen ? t('closeMenu') : t('menu')}
            >
              {isMenuOpen ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="hidden sm:inline">{locale === 'cy' ? 'Cau' : 'Close'}</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <span className="hidden sm:inline">{locale === 'cy' ? 'Dewislen' : 'Menu'}</span>
                </>
              )}
            </button>

            {/* Search Button */}
            <Link
              href="/search"
              className={`flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200 ${
                isScrolled || !isHome
                  ? 'text-[#334155] hover:bg-[#F1F5F9]'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={t('search')}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>

            {/* Language Switcher */}
            <LanguageSwitcher variant={isScrolled || !isHome ? 'light' : 'dark'} />

            {/* CTA Button - Desktop */}
            <Link
              href="/funding"
              className="hidden lg:flex btn btn-primary text-sm py-2.5 px-5"
            >
              {locale === 'cy' ? 'Gwneud Cais' : 'Apply for Funding'}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
}
