'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { FundingOpportunity } from '@/lib/content';

interface FundingSectionProps {
  opportunities?: FundingOpportunity[];
}

export function FundingSection({ opportunities }: FundingSectionProps = {}) {
  const t = useTranslations('funding');
  const locale = useLocale();
  const isWelsh = locale === 'cy';

  // Use CMS data if provided, otherwise use translations
  const fundingCards = opportunities && opportunities.length > 0 
    ? opportunities.slice(0, 3).map((opp, index) => {
        const gradients = [
          'from-[#B91C3C] to-[#991B1B]',
          'from-[#14B8A6] to-[#0F766E]',
          'from-[#0F172A] to-[#1E293B]',
        ];
        const accentColors = ['#F59E0B', '#F59E0B', '#14B8A6'];
        const iconClasses = ['text-white', 'text-white', 'text-[#14B8A6]'];
        
        return {
          title: opp.title,
          description: opp.description,
          amount: opp.maxAmount || (isWelsh ? 'Hyd at £25,000' : 'Up to £25,000'),
          href: opp.href,
          gradient: gradients[index] || gradients[0],
          accentColor: accentColors[index] || accentColors[0],
          iconClass: iconClasses[index] || iconClasses[0],
          iconIndex: index,
          // Include original opportunity data for status/deadline display
          originalOpp: opp,
        };
      })
    : [
        {
          title: t('beActiveWales'),
          description: t('beActiveDescription'),
          amount: '£50,000',
          href: '/funding/be-active-wales',
          gradient: 'from-[#B91C3C] to-[#991B1B]',
          accentColor: '#F59E0B',
          iconClass: 'text-white',
          iconIndex: 0,
        },
        {
          title: t('crowdfunder'),
          description: t('crowdfunderDescription'),
          amount: '£15,000',
          href: '/funding',
          gradient: 'from-[#0F172A] to-[#1E293B]',
          accentColor: '#14B8A6',
          iconClass: 'text-[#14B8A6]',
          iconIndex: 2,
        },
        {
          title: t('energySavingGrant'),
          description: t('energySavingDescription'),
          amount: isWelsh ? 'Hyd at £25,000' : 'Up to £25,000',
          href: '/funding',
          gradient: 'from-[#14B8A6] to-[#0F766E]',
          accentColor: '#F59E0B',
          iconClass: 'text-white',
          iconIndex: 1,
        },
      ];
  
  const getIcon = (index: number, iconClass: string) => {
    if (index === 0) {
      return (
        <svg className={`w-5 h-5 ${iconClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    }
    if (index === 1) {
      return (
        <svg className={`w-5 h-5 ${iconClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    }
    return (
      <svg className={`w-5 h-5 ${iconClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    );
  };

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
          {fundingCards.map((card, index) => (
            <div key={index} className="group">
              <div className={`relative h-full rounded-2xl bg-gradient-to-br ${card.gradient} p-6 lg:p-8 overflow-hidden`}>
                {/* Background Pattern */}
                {index === 0 && (
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                      <circle cx="300" cy="50" r="150" stroke="white" strokeWidth="1"/>
                      <circle cx="300" cy="50" r="100" stroke="white" strokeWidth="1"/>
                    </svg>
                  </div>
                )}
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-lg ${card.iconClass === 'text-[#14B8A6]' ? 'bg-[#14B8A6]/20' : 'bg-white/20'} flex items-center justify-center`}>
                      {getIcon(card.iconIndex, card.iconClass)}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className={`text-sm mb-4 flex-grow ${card.iconClass === 'text-[#14B8A6]' ? 'text-white/60' : 'text-white/70'}`}>
                    {card.description}
                  </p>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className={`text-xs uppercase tracking-wider ${card.iconClass === 'text-[#14B8A6]' ? 'text-white/40' : 'text-white/60'}`}>
                      {isWelsh ? 'Hyd at' : card.amount.includes('Up to') ? 'Up to' : ''}
                    </span>
                    <span className="text-2xl font-bold" style={{ color: card.accentColor }}>
                      {card.amount.replace(isWelsh ? 'Hyd at ' : 'Up to ', '')}
                    </span>
                  </div>
                  
                  {card.originalOpp && (
                    <>
                      {card.originalOpp.deadlineDate && (
                        <div className="mb-3 text-xs text-white/60">
                          {isWelsh ? 'Dyddiad cau:' : 'Deadline:'} {new Date(card.originalOpp.deadlineDate).toLocaleDateString(isWelsh ? 'cy-GB' : 'en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </div>
                      )}
                      {card.originalOpp.status && card.originalOpp.status !== 'Open' && (
                        <div className="mb-3">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            card.originalOpp.status === 'Coming Soon' 
                              ? 'bg-[#F59E0B]/20 text-[#F59E0B]'
                              : 'bg-white/20 text-white'
                          }`}>
                            {card.originalOpp.status === 'Coming Soon' 
                              ? (isWelsh ? 'Yn Dod' : 'Coming Soon')
                              : (isWelsh ? 'Wedi Cau' : 'Closed')}
                          </span>
                        </div>
                      )}
                    </>
                  )}

                  <Link 
                    href={card.href as any}
                    className={`inline-flex items-center gap-2 text-sm font-semibold text-white hover:transition-colors`}
                    style={{ 
                      '--hover-color': card.accentColor 
                    } as React.CSSProperties}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = card.accentColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'white';
                    }}
                  >
                    {index === 1 && card.iconIndex === 2 ? t('startCrowdfunding') : t('applyNow')}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
