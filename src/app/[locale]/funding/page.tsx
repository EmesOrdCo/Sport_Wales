import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema, FundingSchema } from '@/components/seo/StructuredData';
import { getFundingOpportunities } from '@/lib/content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'navigation' });
  const isWelsh = locale === 'cy';
  
  const title = t('fundingSupport');
  const description = isWelsh 
    ? 'Darganfyddwch gyfleoedd cyllid ar gyfer chwaraeon yng Nghymru, gan gynnwys Cronfa Cymru Actif a grantiau cyfalaf.'
    : 'Discover funding opportunities for sport in Wales, including Be Active Wales Fund and capital grants.';
  
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/funding`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/funding`,
      languages: {
        'en': '/en/funding',
        'cy': '/cy/funding',
      },
    },
  };
}

export default async function FundingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'navigation' });
  const funding = await getTranslations({ locale, namespace: 'funding' });

  const isWelsh = locale === 'cy';

  // Helper function to get icon component by type
  const getIconByType = (type: string, index: number) => {
    const iconClass = type === 'crowdfunder' ? 'w-6 h-6 text-[#14B8A6]' : 'w-6 h-6 text-white';
    
    if (type === 'be-active-wales' || index === 0) {
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    }
    if (type === 'energy-saving' || index === 1) {
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    }
    if (type === 'crowdfunder' || index === 2) {
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    }
    return (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  };

  // Helper to get gradient and accent by type/index
  const getStyleByType = (type: string, index: number) => {
    if (type === 'be-active-wales' || index === 0) {
      return { gradient: 'from-[#B91C3C] to-[#991B1B]', accentColor: '#F59E0B' };
    }
    if (type === 'energy-saving' || index === 1) {
      return { gradient: 'from-[#14B8A6] to-[#0F766E]', accentColor: '#F59E0B' };
    }
    if (type === 'crowdfunder' || index === 2) {
      return { gradient: 'from-[#0F172A] to-[#1E293B]', accentColor: '#14B8A6' };
    }
    return { gradient: 'from-[#0F172A] to-[#1E293B]', accentColor: '#14B8A6' };
  };

  // Fetch funding opportunities from CMS
  const cmsFundingOpportunities = await getFundingOpportunities(locale as 'en' | 'cy');
  
  // Transform CMS opportunities to match page structure
  const mainFundingOptions = cmsFundingOpportunities.length > 0 
    ? cmsFundingOpportunities.slice(0, 3).map((opp, index) => {
        const slugKey = opp.slug.toLowerCase();
        const styles = getStyleByType(slugKey, index);
        
        return {
          title: opp.title,
          description: opp.description,
          amount: opp.maxAmount || (isWelsh ? 'Hyd at £25,000' : 'Up to £25,000'),
          href: opp.href,
          gradient: styles.gradient,
          accentColor: styles.accentColor,
          icon: getIconByType(slugKey, index),
        };
      })
    : [
        // Fallback to hardcoded options if CMS returns no data
        {
          title: funding('beActiveWales'),
          description: funding('beActiveDescription'),
          amount: 'Up to £50,000',
          href: '/funding/be-active-wales',
          gradient: 'from-[#B91C3C] to-[#991B1B]',
          accentColor: '#F59E0B',
          icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
        },
        {
          title: funding('energySavingGrant'),
          description: funding('energySavingDescription'),
          amount: isWelsh ? 'Hyd at £25,000' : 'Up to £25,000',
          href: '/funding',
          gradient: 'from-[#14B8A6] to-[#0F766E]',
          accentColor: '#F59E0B',
          icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          ),
        },
        {
          title: funding('crowdfunder'),
          description: funding('crowdfunderDescription'),
          amount: isWelsh ? 'Hyd at £15,000' : 'Up to £15,000',
          href: '/funding/crowdfunder',
          gradient: 'from-[#0F172A] to-[#1E293B]',
          accentColor: '#14B8A6',
          icon: (
            <svg className="w-6 h-6 text-[#14B8A6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          ),
        },
      ];

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: t('fundingSupport'), url: `https://www.sport.wales/${locale}/funding` },
  ];

  // Real eligibility criteria from Sport Wales
  const eligibilityCriteria = [
    {
      title: isWelsh ? 'Lleoliad' : 'Location',
      description: isWelsh 
        ? 'Rhaid i\'r prosiect ddigwydd yng Nghymru ac yn bennaf o fudd i drigolion Cymru.'
        : 'Projects must take place in Wales and primarily benefit Welsh residents.',
    },
    {
      title: isWelsh ? 'Amseriad' : 'Timing',
      description: isWelsh 
        ? 'Ni ddylai\'r prosiect fod wedi cychwyn cyn gwneud cais.'
        : 'The project should not have commenced prior to application.',
    },
    {
      title: isWelsh ? 'Budd Cymunedol' : 'Community Benefit',
      description: isWelsh 
        ? 'Rhaid defnyddio\'r arian er budd cymunedol, nid ar gyfer ysgol benodol yn unig.'
        : 'Funds must be used for community benefit, not solely for a specific school.',
    },
    {
      title: isWelsh ? 'Cynyddu Cyfranogiad' : 'Increase Participation',
      description: isWelsh 
        ? 'Dylai\'r prosiect anelu at gynyddu cyfranogiad mewn chwaraeon a gweithgarwch corfforol.'
        : 'The project should aim to increase participation in sport and physical activity.',
    },
  ];

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <FundingSchema 
        name={funding('beActiveWales')}
        description={funding('beActiveDescription')}
        maxAmount="50000"
        locale={locale}
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 lg:pt-40 lg:pb-40 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#14B8A6]/20 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {isWelsh ? 'Cyfleoedd Cyllid' : 'Funding Opportunities'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {t('fundingSupport')}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {isWelsh
                ? 'Mae gennym amrywiaeth o gyfleoedd cyllid i gefnogi clybiau chwaraeon cymunedol a grwpiau dielw yng Nghymru.'
                : 'We have a range of funding opportunities to support not-for-profit sports clubs and community groups in Wales.'}
            </p>
          </div>
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120V60C360 20 720 0 1080 20C1260 30 1380 50 1440 60V120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Funding Options */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Grantiau ar Agor' : 'Open Grants'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Cyfleoedd Cyllid' : 'Funding Opportunities'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Dyma ein rhaglenni cyllid sydd ar agor i geisiadau.'
                : 'Here are our funding programmes currently open for applications.'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {mainFundingOptions.map((option, index) => (
              <article
                key={option.title}
                className="group relative"
              >
                <Link 
                  href={option.href as any}
                  className={`block h-full relative rounded-3xl bg-gradient-to-br ${option.gradient} p-8 lg:p-10 overflow-hidden hover:shadow-2xl transition-all duration-500`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                      <circle cx="350" cy="50" r="150" stroke="white" strokeWidth="1"/>
                      <circle cx="350" cy="50" r="100" stroke="white" strokeWidth="1"/>
                      <circle cx="350" cy="50" r="50" stroke="white" strokeWidth="1"/>
                    </svg>
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                        {option.icon}
                      </div>
                      <span className="text-5xl font-bold text-white/10">0{index + 1}</span>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-display font-bold !text-white mb-3 group-hover:text-white/90 transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-white/70 mb-6 flex-grow text-sm">
                      {option.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-white/20">
                      <div>
                        <span className="text-2xl font-bold" style={{ color: option.accentColor }}>
                          {option.amount}
                        </span>
                        {cmsFundingOpportunities[index]?.deadlineDate && (
                          <div className="text-xs text-white/60 mt-1">
                            {isWelsh ? 'Dyddiad cau:' : 'Deadline:'} {new Date(cmsFundingOpportunities[index].deadlineDate).toLocaleDateString(isWelsh ? 'cy-GB' : 'en-GB', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </div>
                        )}
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all">
                        {funding('applyNow')}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Club Support Section - Real from Sport Wales */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-[#14B8A6] font-semibold text-sm uppercase tracking-wider mb-4">
                {isWelsh ? 'Adnoddau' : 'Resources'}
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
                {funding('clubSupport')}
              </h2>
              <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
                {isWelsh
                  ? 'Yma fe welwch becyn offer Chwaraeon Cymru o arweiniad ar gyfer clybiau chwaraeon a sefydliadau.'
                  : 'Here you\'ll find Sport Wales\' kitbag of guidance for sports clubs and organisations.'}
              </p>
              <p className="text-[#64748B] mb-8">
                {isWelsh
                  ? 'Mae\'r adnoddau\'n cynnwys cyngor ar ddiogelu, rheoli ariannol, strategaethau hyrwyddo, a chefnogaeth gwirfoddolwyr.'
                  : 'Resources include safeguarding advice, financial management guidance, promotional strategies, and volunteer support.'}
              </p>
              
              <Link
                href="/club-support"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#14B8A6] text-white font-semibold hover:bg-[#0D9488] transition-colors"
              >
                {isWelsh ? 'Gweld adnoddau cefnogi clybiau' : 'View club support resources'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  title: isWelsh ? 'Diogelu' : 'Safeguarding',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                { 
                  title: isWelsh ? 'Cyllid' : 'Finance',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )
                },
                { 
                  title: isWelsh ? 'Hyrwyddo' : 'Promotion',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  )
                },
                { 
                  title: isWelsh ? 'Gwirfoddolwyr' : 'Volunteers',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white border border-[#E2E8F0] text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6] mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-[#0F172A]">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach to Investment Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-[#14B8A6] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Ein Dull' : 'Our Approach'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Ein Dull o Fuddsoddi' : 'Our Approach to Investment'}
            </h2>
            <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
              {isWelsh
                ? 'Beth rydym yn anelu at ei gyflawni trwy ein buddsoddiad.'
                : 'What we\'re aiming to achieve through our investment.'}
            </p>
            <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
              {isWelsh
                ? 'Rydym yn credu mewn cenedl wirioneddol weithgar lle mae gan bawb y cyfle i gymryd rhan mewn chwaraeon a mwynhau buddion bod yn weithgar yn gorfforol.'
                : 'We believe in a truly active nation where everyone has the opportunity to take part in sport and enjoy the benefits of being physically active.'}
            </p>
            <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
              {isWelsh
                ? 'Er mwyn ceisio cyflawni hyn, rydym yn buddsoddi cyllid Llywodraeth Cymru a\'r Loteri Genedlaethol i lawer o sefydliadau gwahanol ar draws y wlad, sy\'n cynllunio, rheoli a chyflwyno cyfleoedd o fewn cymunedau lleol Cymru.'
                : 'To try and achieve this we invest Welsh Government and National Lottery funding to many different organisations across the country, who plan, manage, and deliver opportunities within the local communities of Wales.'}
            </p>
            <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
              {isWelsh
                ? 'Rydym yn gwybod bod grwpiau penodol o bobl yn llai tebygol o gymryd rhan neu\'n cael mwy o anhawster i gael mynediad i gyfleoedd chwaraeon a gweithgarwch corfforol sy\'n addas iddynt. Gyda hyn mewn golwg, rydym yn ceisio sicrhau ein bod yn buddsoddi yn yr ardaloedd sydd eu hangen fwyaf, trwy\'r sefydliadau a fydd yn gallu creu\'r effaith fwyaf yn erbyn y Gweledigaeth ar gyfer Chwaraeon yng Nghymru, gyda chydraddoldebau ar flaen ein penderfyniadau.'
                : 'We know that certain groups of people are less likely to take part or will find it more difficult to access sport and physical activity opportunities that are right for them. With this in mind, we look to ensure that we invest into the areas that need it most, through the organisations that will be able to create the most impact against the Vision for Sport in Wales, with equalities at the forefront of our decision making.'}
            </p>

            {/* Types of Investment */}
            <div className="mb-8">
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh ? 'Y mathau o fuddsoddiad a chyllid rydym yn eu cynnig' : 'The types of investment and funding that we offer'}
              </h3>
              <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
                {isWelsh
                  ? 'Rydym yn gweithio mewn partneriaeth gyda sefydliadau sy\'n gyfrifol am lywio chwaraeon a darparu cyfleoedd cyfranogiad ar lefel genedlaethol ar draws y wlad. Rydym yn cynnig buddsoddiad blynyddol i\'r sefydliadau hyn i gefnogi eu gweithgaredd craidd. Rydym hefyd yn cynnig llifau ychwanegol o gyllid i gefnogi gweithgareddau penodol megis datblygu cyfleusterau.'
                  : 'We work in partnership with organisations responsible for governing sports and providing participation opportunities at a national level across the country. We offer annual investment to these organisations to support their core activity. We also offer additional streams of funding to support specific activities such as facility development.'}
              </p>
              <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
                {isWelsh
                  ? 'Rydym hefyd yn deall pwysigrwydd buddsoddi\'n uniongyrchol i\'r clybiau a\'r sefydliadau sy\'n cynnig cyfleoedd a gweithgareddau gwreiddiol. Gall clybiau a sefydliadau cymunedol wneud cais am amrywiaeth o opsiynau cyllid gwahanol i gefnogi gweithgareddau craidd a datblygu.'
                  : 'We also understand the importance of investing directly into the clubs and organisations who offer grassroots opportunities and activity. Community clubs and organisations can apply for a range of different funding options to support core and development activities.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0]">
                <div className="w-12 h-12 rounded-xl bg-[#B91C3C]/10 flex items-center justify-center text-[#B91C3C] mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                  {isWelsh ? 'Partneriaethau Strategol' : 'Strategic Partnerships'}
                </h3>
                <p className="text-[#64748B]">
                  {isWelsh
                    ? 'Rydym yn gweithio mewn partneriaeth gyda sefydliadau i ddatblygu a hyrwyddo chwaraeon, gan sicrhau bod buddsoddiadau yn cyfrannu at ein gweledigaeth ehangach ar gyfer chwaraeon yng Nghymru.'
                    : 'We work in strategic partnerships with organisations to develop and promote sport, ensuring investments contribute to our broader vision for sport in Wales.'}
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0]">
                <div className="w-12 h-12 rounded-xl bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6] mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                  {isWelsh ? 'Effaith Cadarnhaol' : 'Positive Impact'}
                </h3>
                <p className="text-[#64748B]">
                  {isWelsh
                    ? 'Mae pob buddsoddiad yn cael ei asesu ar sail y gwahaniaeth y gall ei wneud i chwaraeon yng Nghymru, gan ganolbwyntio ar gynyddu cyfranogiad a datblygu chwaraeon.'
                    : 'Every investment is assessed on the difference it can make to sport in Wales, focusing on increasing participation and developing sport.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section - Real criteria from Sport Wales */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#F59E0B] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Cymhwysedd' : 'Eligibility'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Meini Prawf Cymhwysedd' : 'Eligibility Criteria'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Mae\'r meini prawf canlynol yn berthnasol i\'n rhaglenni cyllid. Gwiriwch dudalen pob grant am fanylion penodol.'
                : 'The following criteria apply to our funding programmes. Check each grant page for specific details.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {eligibilityCriteria.map((criteria, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] flex-shrink-0">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                      {criteria.title}
                    </h3>
                    <p className="text-[#64748B]">
                      {criteria.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#F59E0B]/10 to-[#F59E0B]/5 border border-[#F59E0B]/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                  {isWelsh ? 'Nodyn Pwysig' : 'Important Note'}
                </h3>
                <p className="text-[#64748B]">
                  {isWelsh
                    ? 'Gall ffenestri ceisiadau gau\'n gynnar neu newid yn seiliedig ar nifer y ceisiadau a dderbynnir. Edrychwch ar dudalen pob grant am y dyddiadau cau diweddaraf.'
                    : 'Application windows may close early or change based on the number of applications received. Check each grant page for the latest deadlines.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 lg:py-24 bg-[#0F172A]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {isWelsh ? 'Cefnogaeth' : 'Support'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold !text-white mb-4">
              {isWelsh ? 'Angen Help?' : 'Need Help?'}
            </h2>
            <p className="text-white/70 text-lg mb-8">
              {isWelsh
                ? 'Os oes gennych unrhyw gwestiynau am ein cyfleoedd cyllid, mae ein tîm yma i helpu.'
                : 'If you have any questions about our funding opportunities, our team is here to help.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+443003003102" 
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-white text-[#0F172A] font-semibold hover:bg-[#F1F5F9] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0300 300 3102
              </a>
              <a 
                href="mailto:info@sport.wales"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@sport.wales
              </a>
            </div>
            <p className="text-white/50 text-sm mt-6">
              {isWelsh 
                ? 'Dydd Llun i Ddydd Gwener: 10am - 12:30pm a 1:15pm - 4pm'
                : 'Monday to Friday: 10am - 12:30pm and 1:15pm - 4pm'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
