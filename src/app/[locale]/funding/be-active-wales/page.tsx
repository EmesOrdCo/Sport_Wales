import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const funding = await getTranslations({ locale, namespace: 'funding' });
  const isWelsh = locale === 'cy';
  
  const title = funding('beActiveWales');
  const description = funding('beActiveDescription');
  
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/funding/be-active-wales`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/funding/be-active-wales`,
      languages: {
        'en': '/en/funding/be-active-wales',
        'cy': '/cy/funding/be-active-wales',
      },
    },
  };
}

export default async function BeActiveWalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'navigation' });
  const funding = await getTranslations({ locale, namespace: 'funding' });

  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: t('fundingSupport'), url: `https://www.sport.wales/${locale}/funding` },
    { name: funding('beActiveWales'), url: `https://www.sport.wales/${locale}/funding/be-active-wales` },
  ];

  const fundDetails = [
    {
      title: isWelsh ? 'Swm y Grant' : 'Grant Amount',
      value: isWelsh ? 'Hyd at £50,000' : 'Up to £50,000',
      description: isWelsh 
        ? 'Mae grantiau ar gael hyd at £50,000 ar gyfer offer neu gyrsiau hyfforddi.'
        : 'Grants available up to £50,000 for equipment or coaching courses.',
    },
    {
      title: isWelsh ? 'Pwy All Wneud Cais?' : 'Who Can Apply?',
      value: isWelsh ? 'Grwpiau a Sefydliadau' : 'Groups and Organisations',
      description: isWelsh 
        ? 'Clybiau chwaraeon, sefydliadau chwaraeon, ac mwy sy\'n gweithio yng Nghymru.'
        : 'Sports clubs, sports organisations, and more working in Wales.',
    },
    {
      title: isWelsh ? 'Beth All ei Arianwch?' : 'What Can You Fund?',
      value: isWelsh ? 'Offer a Hyfforddiant' : 'Equipment & Training',
      description: isWelsh 
        ? 'Offer chwaraeon, cyrsiau hyfforddi, ac adnoddau eraill i helpu eich clwb neu sefydliad.'
        : 'Sports equipment, coaching courses, and other resources to help your club or organisation.',
    },
  ];

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
        ? 'Rhaid defnyddio\'r arian er budd cymunedol ac i gynyddu cyfranogiad mewn chwaraeon.'
        : 'Funds must be used for community benefit and to increase participation in sport.',
    },
  ];

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#B91C3C] via-[#991B1B] to-[#B91C3C] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#F59E0B]/20 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {isWelsh ? 'Hyd at £50,000' : 'Up to £50,000'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {funding('beActiveWales')}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {funding('beActiveDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/funding"
                className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-white text-[#B91C3C] font-semibold hover:bg-[#F8FAFC] transition-colors"
              >
                {isWelsh ? 'Gwneud Cais Nawr' : 'Apply Now'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/funding"
                className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-colors"
              >
                {isWelsh ? 'Cyfleoedd Cyllid Eraill' : 'Other Funding Opportunities'}
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120V60C360 20 720 0 1080 20C1260 30 1380 50 1440 60V120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Fund Details Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {fundDetails.map((detail, index) => (
              <div 
                key={index}
                className="p-6 lg:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]"
              >
                <div className="text-sm font-semibold text-[#64748B] uppercase tracking-wider mb-2">
                  {detail.title}
                </div>
                <div className="text-2xl font-display font-bold text-[#B91C3C] mb-3">
                  {detail.value}
                </div>
                <p className="text-[#64748B]">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Meini Prawf Cymhwysedd' : 'Eligibility Criteria'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Er mwyn cymhwyso ar gyfer y Gronfa Cymru Actif, rhaid i\'ch prosiect fodloni\'r meini prawf canlynol:'
                : 'To qualify for the Be Active Wales Fund, your project must meet the following criteria:'}
            </p>

            <div className="space-y-4">
              {eligibilityCriteria.map((criterion, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-white border border-[#E2E8F0]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#B91C3C]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#B91C3C] font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-[#0F172A] mb-2">
                        {criterion.title}
                      </h3>
                      <p className="text-[#64748B]">
                        {criterion.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Can Be Funded Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Beth All ei Arianwch?' : 'What Can Be Funded?'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: isWelsh ? 'Offer Chwaraeon' : 'Sports Equipment',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  ),
                },
                {
                  title: isWelsh ? 'Cyrsiau Hyfforddi' : 'Coaching Courses',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                },
                {
                  title: isWelsh ? 'Gwelliannau Cyfleusterau' : 'Facility Improvements',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                },
                {
                  title: isWelsh ? 'Gweithgareddau Cymunedol' : 'Community Activities',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#B91C3C]/10 flex items-center justify-center text-[#B91C3C] flex-shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#0F172A]">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Barod i Wneud Cais?' : 'Ready to Apply?'}
            </h2>
            <p className="text-lg text-white/80 mb-8">
              {isWelsh
                ? 'Dewch o hyd i ragor o wybodaeth am y gronfa ac ewch ati i wneud cais heddiw.'
                : 'Find out more about the fund and get started with your application today.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/funding" 
                className="inline-flex items-center gap-2 py-4 px-8 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
              >
                {isWelsh ? 'Gwneud Cais Nawr' : 'Apply Now'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/funding"
                className="inline-flex items-center gap-2 py-4 px-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-colors"
              >
                {isWelsh ? 'Cyfleoedd Cyllid Eraill' : 'Other Funding Options'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

