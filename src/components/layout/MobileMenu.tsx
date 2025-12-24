'use client';

import { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const isWelsh = locale === 'cy';
  const menuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      firstFocusableRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigationSections = [
    {
      title: t('sportWalesFor'),
      subtitle: isWelsh ? 'Cefnogaeth a gwasanaethau' : 'Support & services',
      accent: '#B91C3C',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      links: [
        { href: '/community-grassroots', label: t('communityGrassroots') },
        { href: '/sport-in-schools', label: t('sportInSchools') },
        { href: '/partners', label: t('partners') },
        { href: '/performance-sport', label: t('performanceSport') },
      ],
    },
    {
      title: t('informationAbout'),
      subtitle: isWelsh ? 'Adnoddau a chanllawiau' : 'Resources & guidance',
      accent: '#14B8A6',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      links: [
        { href: '/national-lottery', label: t('welshSportLottery') },
        { href: '/national-centre', label: t('nationalCentre') },
        { href: '/funding', label: t('fundingSupport') },
        { href: '/research', label: t('researchInsight') },
        { href: '/governance', label: t('policiesGovernance') },
      ],
    },
    {
      title: isWelsh ? 'Amdanom Chwaraeon Cymru' : 'About Sport Wales',
      subtitle: isWelsh ? 'Ein stori' : 'Our story',
      accent: '#0F172A',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      links: [
        { href: '/about/what-is-sport-wales', label: t('whatIsSportWales') },
        { href: '/about/vision-and-strategy', label: t('visionStrategy') },
        { href: '/facilities', label: isWelsh ? 'Ein Cyfleusterau' : 'Our Facilities' },
        { href: '/institute', label: isWelsh ? 'Sefydliad Chwaraeon Cymru' : 'The Sport Wales Institute' },
        { href: '/careers', label: t('careers') },
      ],
    },
  ];

  return (
    <>
      {/* Backdrop with gradient */}
      <div
        className="fixed inset-0 z-40 animate-fade-in"
        style={{
          background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.85))',
          backdropFilter: 'blur(8px)',
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <nav
        ref={menuRef}
        id="main-navigation"
        className="fixed inset-x-0 top-20 lg:top-24 z-50 animate-slide-down"
        role="navigation"
        aria-label="Main navigation"
      >
        <div 
          className="max-h-[calc(100vh-5rem)] lg:max-h-[calc(100vh-6rem)] overflow-y-auto"
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div className="container py-10 lg:py-14">
            {/* Navigation Grid */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {navigationSections.map((section, sectionIndex) => (
                <div key={section.title} className="group/section">
                  {/* Section Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover/section:scale-110"
                      style={{ backgroundColor: `${section.accent}15`, color: section.accent }}
                    >
                      {section.icon}
                    </div>
                    <div>
                      <h2 
                        className="text-xl font-display font-bold tracking-tight"
                        style={{ color: section.accent }}
                      >
                        {section.title}
                      </h2>
                      <p className="text-sm text-[#64748B] mt-0.5">{section.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Links */}
                  <ul className="space-y-1 pl-16">
                    {section.links.map((link, linkIndex) => (
                      <li key={link.href}>
                        <Link
                          ref={sectionIndex === 0 && linkIndex === 0 ? firstFocusableRef : undefined}
                          href={link.href as any}
                          onClick={onClose}
                          className="group/link relative flex items-center py-2.5 transition-all duration-200"
                        >
                          {/* Hover indicator */}
                          <span 
                            className="absolute left-0 w-0 h-full rounded-r-full transition-all duration-300 group-hover/link:w-1"
                            style={{ backgroundColor: section.accent }}
                          />
                          
                          <span className="relative flex items-center gap-3 pl-4">
                            <span className="text-[15px] font-medium text-[#334155] group-hover/link:text-[#0F172A] transition-colors">
                              {link.label}
                            </span>
                          </span>
                          
                          {/* Arrow on hover */}
                          <svg 
                            className="w-4 h-4 ml-auto opacity-0 -translate-x-2 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0"
                            style={{ color: section.accent }}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Elegant Divider */}
            <div className="relative my-10 lg:my-14">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E2E8F0]"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-gradient-to-r from-white via-[#F8FAFC] to-white px-6">
                  <div className="w-2 h-2 rounded-full bg-[#B91C3C]"></div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Featured CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/funding"
                  onClick={onClose}
                  className="group inline-flex items-center gap-3 py-4 px-8 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #B91C3C 0%, #991B1B 100%)',
                    boxShadow: '0 10px 40px -10px rgba(185, 28, 60, 0.5)',
                  }}
                >
                  <span>{isWelsh ? 'Gwneud Cais am Gyllid' : 'Apply for Funding'}</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 py-3.5 px-6 rounded-xl font-medium text-[#334155] border-2 border-[#E2E8F0] hover:border-[#B91C3C] hover:text-[#B91C3C] transition-all duration-200"
                >
                  {isWelsh ? 'Cysylltu â Ni' : 'Contact Us'}
                </Link>
              </div>

              {/* Search */}
              <Link
                href="/search"
                onClick={onClose}
                className="group flex items-center gap-3 py-3 px-5 rounded-xl bg-[#F1F5F9] hover:bg-[#E2E8F0] transition-all duration-200"
              >
                <svg className="w-5 h-5 text-[#64748B] group-hover:text-[#B91C3C] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-sm font-medium text-[#64748B] group-hover:text-[#334155] transition-colors">
                  {isWelsh ? 'Chwilio...' : 'Search...'}
                </span>
                <kbd className="hidden sm:inline-flex items-center px-2 py-1 rounded bg-white text-[10px] font-mono text-[#94A3B8] border border-[#E2E8F0]">
                  ⌘K
                </kbd>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
