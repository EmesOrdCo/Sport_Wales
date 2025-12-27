import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema, FundingSchema } from '@/components/seo/StructuredData';

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

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: t('fundingSupport'), url: `https://www.sport.wales/${locale}/funding` },
  ];

  const fundingOptions = [
    {
      branding: 'CymruActif\nBeActiveWales',
      title: isWelsh ? 'Cronfa Cymru Actif' : 'Be Active Wales Fund',
      description: isWelsh 
        ? 'Grantiau hyd at £50,000 ar gyfer offer neu gyrsiau hyfforddi'
        : 'Grants up to £50,000 for equipment or coaching courses',
      cta: isWelsh ? 'Gwneud cais nawr' : 'Apply now',
      ctaStyle: 'bg-white text-[#DC2626] hover:bg-gray-100',
      href: '/funding/be-active-wales',
      bgColor: 'bg-[#DC2626]',
      textColor: 'text-white',
      titleColor: 'text-[#0F172A]',
    },
    {
      branding: 'Grant Arbed Ynni\nEnergy Saving Grant',
      brandingIcon: (
        <svg className="w-8 h-8 text-[#0F172A]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: isWelsh ? 'Grant Arbed Ynni' : 'Energy Saving Grant',
      description: isWelsh 
        ? 'Grantiau hyd at £25,000 ar gyfer gwelliannau arbed ynni'
        : 'Grants up to £25,000 for energy-saving improvements',
      cta: isWelsh ? 'Gwneud cais nawr' : 'Apply now',
      ctaStyle: 'bg-[#DC2626] text-white hover:bg-[#B91C3C]',
      href: '/funding/energy-saving-grant',
      bgColor: 'bg-[#F59E0B]',
      textColor: 'text-[#0F172A]',
      titleColor: 'text-[#0F172A]',
    },
    {
      branding: 'Crowdfunder.co.uk',
      brandingLogo: true,
      title: isWelsh ? 'Lle i Chwaraeon - Crowdfunder' : 'A Place for Sport - Crowdfunder',
      description: isWelsh 
        ? 'Cael hyd at £15,000 i wella\'ch cyfleusterau'
        : 'Get up to £15,000 to improve your facilities',
      cta: isWelsh ? 'Dechrau codi arian torfol' : 'Start crowdfunding',
      ctaStyle: 'bg-[#DC2626] text-white hover:bg-[#B91C3C]',
      href: '/funding/crowdfunder',
      bgColor: 'bg-[#1E3A5F]',
      textColor: 'text-white',
      titleColor: 'text-white',
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
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            {/* Help for Sports Clubs link */}
            <Link 
              href="/club-support"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6 hover:bg-white/20 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {isWelsh ? 'Help i Glybiau Chwaraeon' : 'Help for Sports Clubs'}
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {t('fundingSupport')}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-6">
              {isWelsh
                ? 'Rydym yn darparu cyllid i glybiau chwaraeon a grwpiau cymunedol. Gall ein tîm grantiau eich cefnogi gyda gwybodaeth. Gall awdurdodau lleol a\'ch corff llywodraethu chwaraeon hefyd eich helpu gyda chais am grant.'
                : 'We provide funding to sports clubs and community groups. Our grants team can support you with information. Local authorities and your governing body of sport can also help you with a grant application.'}
            </p>
            <div className="text-white/70">
              <p className="font-semibold text-white/90 mb-3">
                {isWelsh ? 'Rydym yn cefnogi ystod o anghenion cyllido fel:' : 'We support a range of funding needs such as:'}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#B91C3C] rounded-full"></span>
                  {isWelsh ? 'Sefydlu tîm newydd' : 'Setting up a new team'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#B91C3C] rounded-full"></span>
                  {isWelsh ? 'Uwchraddio eich cyfleusterau' : 'Upgrading your facilities'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#B91C3C] rounded-full"></span>
                  {isWelsh ? 'Cefnogaeth i athletwyr unigol' : 'Support for individual athletes'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#B91C3C] rounded-full"></span>
                  {isWelsh ? 'Mynd i\'r afael ag anghydraddoldebau' : 'Tackling inequalities'}
                </li>
              </ul>
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

      {/* Funding Options */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {fundingOptions.map((option, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Branding Header */}
                <div className={`${option.bgColor} p-8 min-h-[180px] flex items-center justify-center`}>
                  {option.brandingIcon ? (
                    <div className="flex items-center gap-3">
                      {option.brandingIcon}
                      <span className={`text-2xl font-bold ${option.textColor} whitespace-pre-line text-center leading-tight`}>
                        {option.branding}
                      </span>
                    </div>
                  ) : option.brandingLogo ? (
                    <div className="flex items-center gap-2">
                      <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span className="text-2xl font-bold text-white">
                        {option.branding}
                      </span>
                    </div>
                  ) : (
                    <span className={`text-3xl font-bold ${option.textColor} whitespace-pre-line text-center leading-tight font-display italic`}>
                      {option.branding}
                    </span>
                  )}
                </div>
                
                {/* Content */}
                <div className="bg-white p-6">
                  <h3 className={`text-xl font-display font-bold ${option.titleColor} mb-3`}>
                    {option.title}
                  </h3>
                  <p className="text-[#64748B] mb-6">
                    {option.description}
                  </p>
                  
                  <Link
                    href={option.href as any}
                    className={`inline-flex items-center gap-2 py-2.5 px-6 rounded-full font-semibold text-sm transition-colors ${option.ctaStyle}`}
                  >
                    {option.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When are our funds open? Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-12">
            {isWelsh ? 'Pryd mae ein cronfeydd ar agor?' : 'When are our funds open?'}
          </h2>

          <div className="space-y-12">
            {/* A Place for Sport - Crowdfunder */}
            <div>
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                {isWelsh ? 'Lle i Chwaraeon - Crowdfunder' : 'A Place for Sport - Crowdfunder'}
              </h3>
              <p className="text-lg text-[#B91C3C] font-semibold">
                {isWelsh ? 'Ar agor drwy\'r flwyddyn' : 'Open all year round'}
              </p>
            </div>

            {/* Be Active Wales Fund */}
            <div>
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh ? 'Cronfa Cymru Actif' : 'Be Active Wales Fund'}
              </h3>
              
              <div className="space-y-8">
                {/* Window 1 */}
                <div>
                  <h4 className="text-lg font-bold text-[#0F172A] mb-3">{isWelsh ? 'Ffenestr 1' : 'Window 1'}</h4>
                  <div className="space-y-1 text-[#334155]">
                    <p><span className="font-semibold">{isWelsh ? 'Agor:' : 'Open:'}</span> {isWelsh ? 'Mercher 2il Ebrill 2025, 9am' : 'Wednesday 2nd April 2025, 9am'}</p>
                    <p><span className="font-semibold">{isWelsh ? 'Dyddiad Cau Mynegi Diddordeb:' : 'Expression of Interest Closing Date:'}</span> {isWelsh ? 'Gwener 30ain Mai 2025, 9am' : 'Friday 30th May 2025, 9am'}</p>
                    <p><span className="font-semibold">{isWelsh ? 'Cau:' : 'Close:'}</span> {isWelsh ? 'Mercher 4ydd Mehefin 2025, 4pm' : 'Wednesday 4th June 2025, 4pm'}</p>
                  </div>
                </div>

                {/* Window 2 */}
                <div>
                  <h4 className="text-lg font-bold text-[#0F172A] mb-3">{isWelsh ? 'Ffenestr 2' : 'Window 2'}</h4>
                  <div className="space-y-1 text-[#334155]">
                    <p><span className="font-semibold">{isWelsh ? 'Agor:' : 'Open:'}</span> {isWelsh ? 'Mercher 9fed Gorffennaf 2025, 9am' : 'Wednesday 9th July 2025, 9am'}</p>
                    <p><span className="font-semibold">{isWelsh ? 'Dyddiad Cau Mynegi Diddordeb:' : 'Expression of Interest Closing Date:'}</span> {isWelsh ? 'Gwener 12fed Medi 2025, 9am' : 'Friday 12th September 2025, 9am'}</p>
                    <p><span className="font-semibold">{isWelsh ? 'Cau:' : 'Close:'}</span> {isWelsh ? 'Mercher 17eg Medi 2025, 4pm' : 'Wednesday 17th September 2025, 4pm'}</p>
                  </div>
                </div>

                {/* Window 3 */}
                <div>
                  <h4 className="text-lg font-bold text-[#0F172A] mb-3">{isWelsh ? 'Ffenestr 3' : 'Window 3'}</h4>
                  <div className="space-y-1 text-[#334155]">
                    <p><span className="font-semibold">{isWelsh ? 'Agor:' : 'Open:'}</span> {isWelsh ? 'Mercher 5ed Tachwedd 2025, 9am' : 'Wednesday 5th November 2025, 9am'}</p>
                    <p><span className="font-semibold">{isWelsh ? 'Dyddiad Cau Mynegi Diddordeb:' : 'Expression of Interest Closing Date:'}</span> {isWelsh ? 'Gwener 9fed Ionawr 2026, 9am' : 'Friday 9th January 2026, 9am'}</p>
                    <p><span className="font-semibold">{isWelsh ? 'Cau:' : 'Close:'}</span> {isWelsh ? 'Mercher 14eg Ionawr 2026, 4pm' : 'Wednesday 14th January 2026, 4pm'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Energy Saving Grant */}
            <div>
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh ? 'Grant Arbed Ynni' : 'Energy Saving Grant'}
              </h3>
              
              <div>
                <h4 className="text-lg font-bold text-[#0F172A] mb-3">{isWelsh ? 'Cam 1' : 'Stage 1'}</h4>
                <div className="space-y-1 text-[#334155]">
                  <p><span className="font-semibold">{isWelsh ? 'Agor:' : 'Open:'}</span> {isWelsh ? 'Mercher 21ain Mai, 10am' : 'Wednesday 21st May, 10am'}</p>
                  <p><span className="font-semibold">{isWelsh ? 'Cau:' : 'Close:'}</span> {isWelsh ? 'Mercher 25ain Mehefin, 3pm' : 'Wednesday 25th June, 3pm'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Club Support Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
            {/* Left side - Content */}
            <div className="bg-gradient-to-br from-[#B91C3C] to-[#0F766E] p-8 lg:p-12 flex flex-col justify-between min-h-[350px]">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
                  {isWelsh ? 'Cefnogaeth i Glybiau' : 'Club Support'}
                </h2>
                <p className="text-lg text-white/90 leading-relaxed mb-8">
                  {isWelsh
                    ? 'Yma cewch ddod o hyd i gês offer canllawiau Chwaraeon Cymru ar gyfer clybiau a sefydliadau chwaraeon.'
                    : 'Here you\'ll find Sport Wales\' kitbag of guidance for sports clubs and organisations.'}
                </p>
              </div>
              <div>
                <Link
                  href="/club-support"
                  className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-white text-[#0F172A] font-semibold hover:bg-white/90 transition-colors"
                >
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right side - Image placeholder */}
            <div className="relative min-h-[350px] lg:min-h-0 bg-gradient-to-br from-[#1E3A5F] to-[#0F172A]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-24 h-24 text-white/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-white/50 text-sm">{isWelsh ? 'Delwedd CMS' : 'CMS Image'}</p>
                  <p className="text-white/30 text-xs mt-1">{isWelsh ? 'Grŵp o oedolion yn ymarfer' : 'A group of older adults exercising'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted Content - CMS Articles */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A]">
              {isWelsh ? 'Cynnwys Wedi\'i Amlygu' : 'Highlighted Content'}
            </h2>
          </div>

          {/* CMS Placeholder Articles */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                  <div className="text-center p-6">
                    <svg className="w-12 h-12 text-[#94A3B8] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm text-[#94A3B8]">{isWelsh ? 'Delwedd Erthygl' : 'Article Image'}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="h-6 bg-[#E2E8F0] rounded mb-3 w-3/4"></div>
                  <div className="h-4 bg-[#F1F5F9] rounded mb-2"></div>
                  <div className="h-4 bg-[#F1F5F9] rounded w-5/6 mb-4"></div>
                  <span className="inline-flex items-center gap-2 text-[#B91C3C] font-semibold text-sm">
                    {isWelsh ? 'Darllen Mwy' : 'Read More'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center p-8 bg-[#F8FAFC] rounded-2xl border-2 border-dashed border-[#E2E8F0]">
            <p className="text-[#64748B] font-medium">
              {isWelsh ? 'Golygu o\'r CMS' : 'Editable from CMS'}
            </p>
            <p className="text-sm text-[#94A3B8] mt-1">
              {isWelsh ? 'Bydd erthyglau\'n cael eu tynnu o\'r system rheoli cynnwys' : 'Articles will be pulled from the content management system'}
            </p>
          </div>
        </div>
      </section>

      {/* Read More News Link */}
      <section className="py-8 bg-white border-t border-[#E2E8F0]">
        <div className="container">
          <div className="text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-[#B91C3C] font-semibold hover:gap-3 transition-all"
            >
              {isWelsh ? 'Darllen mwy o newyddion Chwaraeon Cymru' : 'Read more Sport Wales news'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
