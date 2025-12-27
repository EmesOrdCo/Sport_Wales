'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function ExploreSection() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const isWelsh = locale === 'cy';

  const exploreCards = [
    {
      href: '/club-support',
      title: isWelsh ? 'Cefnogaeth i Glybiau' : 'Club Support',
      description: isWelsh 
        ? 'Adnoddau, canllawiau a chymorth i glybiau chwaraeon ledled Cymru.'
        : 'Resources, guidance and support for sports clubs across Wales.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'bg-[#B91C3C]',
      hoverColor: 'group-hover:bg-[#991B1B]',
    },
    {
      href: '/sport-in-schools',
      title: t('sportInSchools'),
      description: isWelsh 
        ? 'Citbag, Llysgenhadon Ifanc, a llythrennedd corfforol i bobl ifanc.'
        : 'Citbag, Young Ambassadors, and physical literacy for young people.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'bg-[#B91C3C]',
      hoverColor: 'group-hover:bg-[#991B1B]',
    },
    {
      href: '/performance-sport',
      title: t('performanceSport'),
      description: isWelsh 
        ? 'Cefnogi athletwyr Cymru i gystadlu ar y llwyfan rhyngwladol.'
        : 'Supporting Welsh athletes to compete on the international stage.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'bg-[#F59E0B]',
      hoverColor: 'group-hover:bg-[#D97706]',
    },
    {
      href: '/research',
      title: t('researchInsight'),
      description: isWelsh 
        ? 'Data, ystadegau ac ymchwil ar chwaraeon yng Nghymru.'
        : 'Data, statistics and research on sport in Wales.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m3 0V5a2 2 0 012-2h2a2 2 0 012 2v14m-4 0h4m-4 0H9m7 0v-6a2 2 0 012-2h2a2 2 0 012 2v6m-4 0h4" />
        </svg>
      ),
      color: 'bg-[#6366F1]',
      hoverColor: 'group-hover:bg-[#4F46E5]',
    },
    {
      href: '/partners',
      title: t('partners'),
      description: isWelsh 
        ? 'Gweithio mewn partneriaeth i ddatblygu chwaraeon ledled Cymru.'
        : 'Working in partnership to develop sport across Wales.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: 'bg-[#EC4899]',
      hoverColor: 'group-hover:bg-[#DB2777]',
    },
    {
      href: '/careers',
      title: t('careers'),
      description: isWelsh 
        ? 'Ymunwch â\'n tîm a helpwch i wneud gwahaniaeth.'
        : 'Join our team and help make a difference.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'bg-[#0F172A]',
      hoverColor: 'group-hover:bg-[#1E293B]',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F8FAFC]">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
            {isWelsh ? 'Archwilio' : 'Explore'}
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
            {isWelsh ? 'Darganfyddwch Chwaraeon Cymru' : 'Discover Sport Wales'}
          </h2>
          <p className="text-lg text-[#64748B]">
            {isWelsh
              ? 'O gefnogaeth i glybiau i chwaraeon perfformiad, dysgwch sut rydym yn helpu i wneud Cymru\'n genedl fwy egnïol.'
              : 'From club support to performance sport, learn how we\'re helping to make Wales a more active nation.'}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exploreCards.map((card) => (
            <Link
              key={card.href}
              href={card.href as any}
              className="group block p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-transparent hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-14 h-14 rounded-2xl ${card.color} ${card.hoverColor} flex items-center justify-center text-white transition-colors duration-300`}>
                  {card.icon}
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#B91C3C] transition-colors">
                {card.title}
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed mb-4">
                {card.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C3C] group-hover:gap-3 transition-all">
                {isWelsh ? 'Dysgu mwy' : 'Learn more'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* See All Link */}
        <div className="mt-10 text-center">
          <p className="text-[#64748B] mb-4">
            {isWelsh ? 'Eisiau gweld mwy?' : 'Want to see more?'}
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 py-3 px-8 rounded-full border-2 border-[#E2E8F0] text-[#0F172A] font-semibold hover:border-[#B91C3C] hover:text-[#B91C3C] transition-colors"
          >
            {isWelsh ? 'Dysgu am Chwaraeon Cymru' : 'Learn about Sport Wales'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
