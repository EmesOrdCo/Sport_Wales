import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';
  
  const title = isWelsh ? 'Lle i Chwaraeon - Crowdfunder' : 'A Place for Sport - Crowdfunder';
  const description = isWelsh 
    ? 'Codi arian torfol i wella\'ch cyfleusterau - gallwn addo hyd at £15,000.'
    : 'Get up to £15,000 to improve your facilities through crowdfunding.';
  
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/funding/crowdfunder`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/funding/crowdfunder`,
      languages: {
        'en': '/en/funding/crowdfunder',
        'cy': '/cy/funding/crowdfunder',
      },
    },
  };
}

export default async function CrowdfunderPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Cyllid a Chefnogaeth' : 'Funding and Support', url: `https://www.sport.wales/${locale}/funding` },
    { name: isWelsh ? 'Lle i Chwaraeon - Crowdfunder' : 'A Place for Sport - Crowdfunder', url: `https://www.sport.wales/${locale}/funding/crowdfunder` },
  ];

  const fundDetails = [
    {
      title: isWelsh ? 'Swm y Grant' : 'Grant Amount',
      value: isWelsh ? 'Hyd at £15,000' : 'Up to £15,000',
      description: isWelsh 
        ? 'Gallwn addo hyd at £15,000 tuag at eich ymgyrch codi arian torfol.'
        : 'We can pledge up to £15,000 towards your crowdfunding campaign.',
    },
    {
      title: isWelsh ? 'Sut Mae\'n Gweithio?' : 'How Does It Work?',
      value: isWelsh ? 'Codi Arian Torfol' : 'Crowdfunding',
      description: isWelsh 
        ? 'Chi\'n codi arian gan eich cymuned, ac rydym yn addo arian cyfatebol i\'ch helpu i gyrraedd eich targed.'
        : 'You raise money from your community, and we pledge match funding to help you reach your target.',
    },
    {
      title: isWelsh ? 'Pryd Mae Ar Agor?' : 'When Is It Open?',
      value: isWelsh ? 'Drwy\'r Flwyddyn' : 'All Year Round',
      description: isWelsh 
        ? 'Mae\'r gronfa ar agor drwy\'r flwyddyn - gallwch wneud cais unrhyw bryd.'
        : 'The fund is open all year round - you can apply at any time.',
    },
  ];

  const eligibilityCriteria = [
    {
      title: isWelsh ? 'Prosiect Cyfleuster' : 'Facility Project',
      description: isWelsh 
        ? 'Rhaid i\'ch prosiect fod yn ymwneud â gwella neu ddatblygu cyfleuster chwaraeon.'
        : 'Your project must be related to improving or developing a sports facility.',
    },
    {
      title: isWelsh ? 'Lleoliad' : 'Location',
      description: isWelsh 
        ? 'Rhaid i\'r cyfleuster fod wedi\'i leoli yng Nghymru.'
        : 'The facility must be located in Wales.',
    },
    {
      title: isWelsh ? 'Ymgyrch Crowdfunder' : 'Crowdfunder Campaign',
      description: isWelsh 
        ? 'Rhaid i chi greu ymgyrch ar Crowdfunder.co.uk a chodi o leiaf 25% o\'ch targed gan eich cymuned.'
        : 'You must create a campaign on Crowdfunder.co.uk and raise at least 25% of your target from your community.',
    },
  ];

  const steps = [
    {
      number: '1',
      title: isWelsh ? 'Creu Eich Ymgyrch' : 'Create Your Campaign',
      description: isWelsh 
        ? 'Ewch i Crowdfunder.co.uk a chreu ymgyrch ar gyfer eich prosiect cyfleuster.'
        : 'Go to Crowdfunder.co.uk and create a campaign for your facility project.',
    },
    {
      number: '2',
      title: isWelsh ? 'Gwneud Cais am Gefnogaeth' : 'Apply for Support',
      description: isWelsh 
        ? 'Cyflwynwch gais i Chwaraeon Cymru am addewid arian cyfatebol.'
        : 'Submit an application to Sport Wales for a match funding pledge.',
    },
    {
      number: '3',
      title: isWelsh ? 'Codi Arian' : 'Raise Funds',
      description: isWelsh 
        ? 'Hyrwyddwch eich ymgyrch a chodwch arian gan eich cymuned.'
        : 'Promote your campaign and raise funds from your community.',
    },
    {
      number: '4',
      title: isWelsh ? 'Derbyn Eich Addewid' : 'Receive Your Pledge',
      description: isWelsh 
        ? 'Pan fyddwch yn cyrraedd eich targed, byddwn yn rhyddhau ein haddewid.'
        : 'When you reach your target, we\'ll release our pledge.',
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#0F4C5C] via-[#0A3D4E] to-[#0F4C5C] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#14B8A6]/20 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              {isWelsh ? 'Ar Agor Drwy\'r Flwyddyn' : 'Open All Year Round'}
            </span>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white">
                Crowdfunder.co.uk
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Lle i Chwaraeon - Crowdfunder' : 'A Place for Sport - Crowdfunder'}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {isWelsh
                ? 'Codi arian torfol i wella\'ch cyfleusterau - gallwn addo hyd at £15,000 tuag at eich prosiect.'
                : 'Get up to £15,000 to improve your facilities through crowdfunding.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.crowdfunder.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
              >
                {isWelsh ? 'Dechrau Codi Arian Torfol' : 'Start Crowdfunding'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
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
                <div className="text-2xl font-display font-bold text-[#0F4C5C] mb-3">
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

      {/* How It Works Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Sut Mae\'n Gweithio?' : 'How Does It Work?'}
            </h2>
            <p className="text-lg text-[#64748B] mb-12">
              {isWelsh
                ? 'Dilynwch y camau hyn i gael mynediad at gyllid Crowdfunder:'
                : 'Follow these steps to access Crowdfunder funding:'}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-white border border-[#E2E8F0]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#0F4C5C] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-[#0F172A] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#64748B]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Meini Prawf Cymhwysedd' : 'Eligibility Criteria'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Er mwyn cymhwyso ar gyfer cyllid Crowdfunder, rhaid i\'ch prosiect fodloni\'r meini prawf canlynol:'
                : 'To qualify for Crowdfunder funding, your project must meet the following criteria:'}
            </p>

            <div className="space-y-4">
              {eligibilityCriteria.map((criterion, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#0F4C5C]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#0F4C5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
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

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Barod i Ddechrau?' : 'Ready to Get Started?'}
            </h2>
            <p className="text-lg text-white/80 mb-8">
              {isWelsh
                ? 'Crëwch eich ymgyrch ar Crowdfunder heddiw a dechreuwch godi arian ar gyfer eich cyfleuster.'
                : 'Create your campaign on Crowdfunder today and start raising funds for your facility.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://www.crowdfunder.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-4 px-8 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
              >
                {isWelsh ? 'Dechrau Codi Arian Torfol' : 'Start Crowdfunding'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
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

