'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function FundingSection() {
  const t = useTranslations('funding');
  const locale = useLocale();
  const isWelsh = locale === 'cy';

  return (
    <section 
      className="py-16 lg:py-24 bg-[#F8FAFC] relative overflow-hidden"
      aria-labelledby="funding-heading"
    >
      <div className="container">
        {/* Section Header - Reframed as support, not main focus */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="inline-block text-[#14B8A6] font-semibold text-sm uppercase tracking-wider mb-4">
            {isWelsh ? 'Cefnogaeth a Chyllid' : 'Support & Funding'}
          </span>
          <h2 id="funding-heading" className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
            {isWelsh 
              ? 'Adnoddau i Helpu Chi Lwyddo' 
              : 'Resources to Help You Succeed'}
          </h2>
          <p className="text-lg text-[#64748B]">
            {isWelsh
              ? 'Rydym yn darparu amrywiaeth o adnoddau, cefnogaeth a chyllid i helpu clybiau, sefydliadau ac unigolion i ddatblygu chwaraeon yn eu cymunedau.'
              : 'We provide a range of resources, support and funding to help clubs, organisations and individuals develop sport in their communities.'}
          </p>
        </div>

        {/* Funding Cards - More balanced layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Be Active Wales Fund */}
          <div className="group">
            <div className="relative h-full rounded-2xl bg-gradient-to-br from-[#B91C3C] to-[#991B1B] p-6 lg:p-8 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                  <circle cx="300" cy="50" r="150" stroke="white" strokeWidth="1"/>
                  <circle cx="300" cy="50" r="100" stroke="white" strokeWidth="1"/>
                </svg>
              </div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {t('beActiveWales')}
                </h3>
                <p className="text-white/70 text-sm mb-4 flex-grow">
                  {t('beActiveDescription')}
                </p>
                
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xs text-white/60 uppercase tracking-wider">
                    {isWelsh ? 'Hyd at' : 'Up to'}
                  </span>
                  <span className="text-2xl font-bold text-[#F59E0B]">£50,000</span>
                </div>

                <Link 
                  href="/funding/be-active-wales"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#F59E0B] transition-colors"
                >
                  {t('applyNow')}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Crowdfunder Card */}
          <div className="group">
            <div className="relative h-full rounded-2xl bg-[#0F172A] p-6 lg:p-8 overflow-hidden">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#14B8A6]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#14B8A6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-bold !text-white mb-2">
                {t('crowdfunder')}
              </h3>
              <p className="text-white/60 text-sm mb-4 flex-grow">
                {t('crowdfunderDescription')}
              </p>
              
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-xs text-white/40 uppercase">{isWelsh ? 'Hyd at' : 'Up to'}</span>
                <span className="text-2xl font-bold text-[#14B8A6]">£15,000</span>
              </div>

              <Link 
                href="/funding"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#14B8A6] transition-colors"
              >
                {t('startCrowdfunding')}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Energy Saving Grant Card */}
          <div className="group">
            <div className="relative h-full rounded-2xl bg-gradient-to-br from-[#14B8A6] to-[#0F766E] p-6 lg:p-8 overflow-hidden">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-bold !text-white mb-2">
                {t('energySavingGrant')}
              </h3>
              <p className="text-white/70 text-sm mb-4 flex-grow">
                {t('energySavingDescription')}
              </p>
              
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-xs text-white/60 uppercase tracking-wider">
                  {isWelsh ? 'Hyd at' : 'Up to'}
                </span>
                <span className="text-2xl font-bold text-[#F59E0B]">£25,000</span>
              </div>

              <Link 
                href="/funding/energy-saving-grant"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#F59E0B] transition-colors"
              >
                {t('applyNow')}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link 
            href="/funding"
            className="inline-flex items-center gap-2 text-[#B91C3C] font-semibold hover:gap-3 transition-all"
          >
            {isWelsh ? 'Gweld yr holl gyfleoedd cyllid' : 'View all funding opportunities'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
