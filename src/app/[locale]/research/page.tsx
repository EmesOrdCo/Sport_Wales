import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Ymchwil a Mewnwelediad' : 'Research and Insight';
  const description = isWelsh
    ? 'Ein tîm Ymchwil a Mewnwelediad sy\'n casglu a rheoli data ar weithgarwch chwaraeon yng Nghymru.'
    : 'Our Research and Insight team collects and manages data on sporting activity in Wales.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/research`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/research`,
      languages: {
        'en': '/en/research',
        'cy': '/cy/research',
      },
    },
  };
}

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Ymchwil a Mewnwelediad' : 'Research and Insight', url: `https://www.sport.wales/${locale}/research` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            {/* School Sport Survey link */}
            <Link 
              href="/research/school-sport-survey"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6 hover:bg-white/20 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {isWelsh ? 'Arolwg Chwaraeon Ysgol 2022' : 'School Sport Survey 2022'}
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-8">
              {isWelsh ? 'Ymchwil a Mewnwelediad' : 'Research and Insight'}
            </h1>
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                {isWelsh
                  ? 'Mae ein tîm Ymchwil a Mewnwelediad yn casglu a rheoli data ar weithgarwch chwaraeon yng Nghymru.'
                  : 'Our Research and Insight team collects and manages data on sporting activity in Wales.'}
              </p>
              <p>
                {isWelsh
                  ? 'Mae ein dwy brif arolwg cyfranogiad chwaraeon yng Nghymru - yr Arolwg Chwaraeon Ysgol a\'r Arolwg Chwaraeon a Ffordd o Fyw Actif - yn darparu darlun clir o gynnydd a\'r gwaith sydd ei angen i\'r sector.'
                  : 'Our two major sport participation surveys in Wales - the School Sport Survey and the Sport and Active Lifestyles Survey - provide the sector with a clear picture of progress and the work that is required.'}
              </p>
              <p>
                {isWelsh
                  ? 'Ymhell o fod yn brosesu rhifau yn unig, mae ein tîm yn ein helpu i ddeall cymhelliant pobl i gymryd rhan mewn chwaraeon a\'r rhwystrau sy\'n eu hatal yn aml. Rydym yn rhannu ein canfyddiadau ar draws y sector fel y gallwn i gyd wneud penderfyniadau gwell.'
                  : 'Far from just crunching numbers, our team helps us to understand people\'s motivations to take part in sport and the barriers that often prevent them. We share our findings across the sector so that we can all make better decisions.'}
              </p>
              <p>
                {isWelsh
                  ? 'Rydym yn gyflenwr ystadegau swyddogol, sy\'n golygu bod ein data yn cydymffurfio â lefelau uchel o ansawdd ac arfer da.'
                  : 'We are a supplier of official statistics, meaning that our data complies to high levels of quality and good practice.'}
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <h3 className="text-xl font-display font-bold !text-white mb-4">
                {isWelsh ? 'Am ragor o wybodaeth' : 'For further information'}
              </h3>
              <p className="text-white/80 mb-4">{isWelsh ? 'Cysylltwch â ni ar:' : 'Please contact us on:'}</p>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:insight@sport.wales" className="text-[#B91C3C] hover:underline font-medium">
                    insight@sport.wales
                  </a>
                </li>
                <li>
                  <a href="tel:03003003116" className="text-[#B91C3C] hover:underline font-medium">
                    0300 300 3116
                  </a>
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

      {/* Featured: National Survey for Wales */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <Link 
            href="/research/national-survey"
            className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] hover:shadow-2xl transition-all duration-500"
          >
            {/* Background pattern */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
            </div>
            
            <div className="relative z-10 p-8 lg:p-12">
              <h2 className="text-2xl lg:text-4xl font-display font-bold !text-white mb-4 group-hover:text-white/90 transition-colors">
                {isWelsh ? 'Arolwg Cenedlaethol Cymru 2024-25' : 'National Survey for Wales 2024-25'}
              </h2>
              
              <p className="text-lg !text-white/90 max-w-2xl mb-8">
                {isWelsh
                  ? 'Dyma\'r canfyddiadau allweddol o adran Chwaraeon a Ffordd o Fyw Actif Arolwg Cenedlaethol Cymru 2024-25'
                  : 'Here are the key findings from the Sport & Active Lifestyles section of the National Survey for Wales 2024-25'}
              </p>
              
              <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                {isWelsh ? 'Darllen Mwy' : 'Read More'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Four Research Category Cards */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Surveys & Trackers */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#B91C3C] to-[#991B1B] flex items-center justify-center">
                <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#B91C3C] transition-colors">
                  {isWelsh ? 'Arolygon ac Olrheinwyr' : 'Surveys & Trackers'}
                </h3>
                <p className="text-[#64748B] text-sm mb-4">
                  {isWelsh
                    ? 'Gan gynnwys yr Arolwg Chwaraeon Ysgol a\'r Arolwg Chwaraeon a...'
                    : 'Including the School Sport Survey and the Sport and...'}
                </p>
                <Link
                  href="/research/surveys"
                  className="inline-flex items-center gap-2 text-[#B91C3C] font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Reviews & Evaluation */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#B91C3C] to-[#991B1B] flex items-center justify-center">
                <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#B91C3C] transition-colors">
                  {isWelsh ? 'Adolygiadau a Gwerthusiad' : 'Reviews & Evaluation'}
                </h3>
                <p className="text-[#64748B] text-sm mb-4">
                  {isWelsh
                    ? 'Gan gynnwys Adenillion Cymdeithasol ar Fuddsoddiad ac Addysg Actif...'
                    : 'Including Social Return on Investment and Active Education...'}
                </p>
                <Link
                  href="/research/reviews"
                  className="inline-flex items-center gap-2 text-[#B91C3C] font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Qualitative Insight */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center">
                <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#F59E0B] transition-colors">
                  {isWelsh ? 'Mewnwelediad Ansoddol' : 'Qualitative Insight'}
                </h3>
                <p className="text-[#64748B] text-sm mb-4">
                  {isWelsh
                    ? 'Gan gynnwys yr adroddiad am y rhwystrau i symud ymlaen...'
                    : 'Including the report about the barriers to progressing...'}
                </p>
                <Link
                  href="/research/qualitative"
                  className="inline-flex items-center gap-2 text-[#F59E0B] font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Our Partners' Research */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#6366F1] to-[#4F46E5] flex items-center justify-center">
                <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#6366F1] transition-colors">
                  {isWelsh ? 'Ymchwil Ein Partneriaid' : 'Our Partners\' Research'}
                </h3>
                <p className="text-[#64748B] text-sm mb-4">
                  {isWelsh
                    ? 'Gan gynnwys gwaith gan StreetGames a\'r SLC.'
                    : 'Including work by StreetGames and SLC.'}
                </p>
                <Link
                  href="/research/partners"
                  className="inline-flex items-center gap-2 text-[#6366F1] font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Sustainability Consultation */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <div className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3 group-hover:text-[#B91C3C] transition-colors">
                  {isWelsh ? 'Ymgynghoriad Cynaliadwyedd Amgylcheddol mewn Chwaraeon a Gweithgarwch Corfforol' : 'Environmental Sustainability in Sport and Physical Activity Consultation'}
                </h3>
                <p className="text-[#64748B] mb-4">
                  {isWelsh
                    ? 'Mae Sport England, sportscotland a Chwaraeon Cymru yn ymwybodol iawn...'
                    : 'Sport England, sportscotland and Sport Wales are acutely...'}
                </p>
                <Link
                  href="/research/sustainability"
                  className="inline-flex items-center gap-2 text-[#B91C3C] font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
            {/* Left side - Content */}
            <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 lg:p-12 flex flex-col justify-between min-h-[350px]">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold !text-white mb-6">
                  {isWelsh ? 'Ystadegau' : 'Statistics'}
                </h2>
                <p className="text-lg text-white/90 leading-relaxed mb-8">
                  {isWelsh
                    ? 'Mae Chwaraeon Cymru yn gynhyrchydd Ystadegau Swyddogol, yn gyfrifol am gasglu, llunio, prosesu, dadansoddi, dehongli a lledaenu ystadegau yn unol â\'r egwyddorion a nodir yn...'
                    : 'Sport Wales is a producer of Official Statistics, responsible for collecting, compiling, processing, analysing, interpreting and disseminating statistics in line with the principles set out in...'}
                </p>
              </div>
              <div>
                <Link
                  href="/research/statistics"
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-white/50 text-sm">{isWelsh ? 'Delwedd CMS' : 'CMS Image'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CMS Articles Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
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
    </>
  );
}
