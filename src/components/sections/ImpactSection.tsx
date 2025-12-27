'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function ImpactSection() {
  const locale = useLocale();
  const isWelsh = locale === 'cy';

  // Real content from Sport Wales section pages
  const impactAreas = [
    {
      title: isWelsh ? 'Chwaraeon Cymunedol' : 'Community Sport',
      // Real: From Club Support page - "Sport Wales' kitbag of guidance for sports clubs and organisations"
      description: isWelsh 
        ? "Pecyn offer Chwaraeon Cymru o arweiniad ar gyfer clybiau chwaraeon a sefydliadau, gan gynnwys cefnogaeth ar gyfer gwirfoddolwyr."
        : "Sport Wales' kitbag of guidance for sports clubs and organisations, including support for volunteers.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      link: '/community-sport',
      color: 'bg-[#B91C3C]',
    },
    {
      title: isWelsh ? 'Chwaraeon mewn Ysgolion' : 'Sport in Schools',
      // Real: From Sport in Schools page - references Citbag, Young Ambassadors, Physical Literacy
      description: isWelsh 
        ? "Adnoddau Citbag am ddim ar gyfer athrawon, rhaglen Llysgenhadon Ifanc, a llythrennedd corfforol i bob plentyn."
        : "Free Citbag resources for teachers, Young Ambassadors programme, and physical literacy for every child.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      link: '/sport-in-schools',
      color: 'bg-[#B91C3C]',
    },
    {
      title: isWelsh ? 'Chwaraeon Perfformiad' : 'Performance Sport',
      // Real: From Performance Sport page - Welsh athletes, Sport Wales Institute, Paris 2024
      description: isWelsh 
        ? "Cefnogi athletwyr Cymreig i gynrychioli Tîm GB, Sefydliad Chwaraeon Cymru, a gwyddoniaeth perfformiad."
        : "Supporting Welsh athletes to represent Team GB, Sport Wales Institute, and performance science.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      link: '/performance-sport',
      color: 'bg-[#F59E0B]',
    },
  ];

  // Real impact stats from Sport Wales SROI study
  const impactStats = [
    {
      value: '£4.44',
      label: isWelsh ? 'adenillion am bob £1 a fuddsoddir' : 'return for every £1 invested',
    },
    {
      value: '£5.89bn',
      label: isWelsh ? 'gwerth cymdeithasol cyfan i Gymru' : 'total social value to Wales',
    },
    {
      value: '£1m+',
      label: isWelsh ? 'wedi\'i godi drwy Crowdfunder' : 'raised through Crowdfunder',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="impact-heading">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
            {isWelsh ? 'Ein Gwaith' : 'Our Work'}
          </span>
          <h2 id="impact-heading" className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
            {isWelsh ? 'Gwneud Gwahaniaeth Ledled Cymru' : 'Making a Difference Across Wales'}
          </h2>
          <p className="text-lg text-[#64748B]">
            {isWelsh 
              ? 'O chwaraeon cymunedol i berfformiad elît, rydym yn gweithio i sicrhau bod pawb yng Nghymru yn gallu mwynhau manteision bod yn actif.'
              : 'From community sport to elite performance, we work to ensure everyone in Wales can enjoy the benefits of being active.'
            }
          </p>
        </div>

        {/* Impact Stats - Real data from SROI study */}
        <div className="grid grid-cols-3 gap-4 lg:gap-8 mb-12 lg:mb-16">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center p-4 lg:p-6 rounded-2xl bg-[#F8FAFC]">
              <div className="text-2xl lg:text-4xl font-display font-bold text-[#B91C3C] mb-1">
                {stat.value}
              </div>
              <p className="text-xs lg:text-sm text-[#64748B]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Areas Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {impactAreas.map((area, index) => (
            <Link 
              key={index}
              href={area.link as any}
              className="group block p-6 lg:p-8 rounded-2xl border border-[#E2E8F0] bg-white hover:border-transparent hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${area.color} flex items-center justify-center text-white mb-6`}>
                {area.icon}
              </div>
              
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3 group-hover:text-[#B91C3C] transition-colors">
                {area.title}
              </h3>
              
              <p className="text-[#64748B] mb-4">
                {area.description}
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
      </div>
    </section>
  );
}
