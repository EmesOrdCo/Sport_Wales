import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Chwaraeon mewn Ysgolion' : 'Sport in Schools';
  const description = isWelsh
    ? 'Adnoddau a rhaglenni i gefnogi chwaraeon a gweithgarwch corfforol mewn ysgolion ledled Cymru.'
    : 'Resources and programmes to support sport and physical activity in schools across Wales.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/sport-in-schools`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/sport-in-schools`,
      languages: {
        'en': '/en/sport-in-schools',
        'cy': '/cy/sport-in-schools',
      },
    },
  };
}

export default async function SportInSchoolsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Chwaraeon mewn Ysgolion' : 'Sport in Schools', url: `https://www.sport.wales/${locale}/sport-in-schools` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#123F56] via-[#1E4A62] to-[#123F56] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F4B400]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#E11D2E]/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            {/* Funding and Support link */}
            <Link 
              href="/funding"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6 hover:bg-white/20 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {isWelsh ? 'Cyllid a Chymorth' : 'Funding and Support'}
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-8">
              {isWelsh ? 'Chwaraeon mewn Ysgolion' : 'Sport in Schools'}
            </h1>
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                {isWelsh
                  ? 'Mae ysgolion yn chwarae rhan hanfodol wrth gael pobl ifanc yn actif a meithrin mwynhad gydol oes o chwaraeon.'
                  : 'Schools play a vital role in getting young people active and building a lifelong enjoyment of sport.'}
              </p>
              <p>
                {isWelsh
                  ? 'Trwy chwaraeon cwricwlaidd ac allgyrsiol, dylai fod cyfleoedd drwy gydol y dydd ar gyfer cyfranogiad.'
                  : 'Through curricular and extra-curricular sport, there should be opportunities throughout the day for participation.'}
              </p>
              <p>
                {isWelsh
                  ? 'Mae ein gwaith gydag ysgolion yn cynnwys darparu adnoddau, cynnal ymchwil a chefnogi rhaglenni.'
                  : 'Our work with schools includes providing resources, conducting research and supporting programmes.'}
              </p>
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

      {/* Featured Content - School Sport Survey */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <Link 
            href="/research/school-sport-survey"
            className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#123F56] to-[#1E4A62] hover:shadow-2xl transition-all duration-500"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#E11D2E] blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#F4B400] blur-3xl"></div>
            </div>
            
            <div className="relative z-10 p-8 lg:p-12">
              <span className="inline-block text-[#E11D2E] text-sm font-semibold uppercase tracking-wider mb-4">
                {isWelsh ? 'Cynnwys Nodwedd' : 'Featured Content'}
              </span>
              
              <h2 className="text-2xl lg:text-4xl font-display font-bold !text-white mb-4 group-hover:text-[#E11D2E] transition-colors">
                {isWelsh ? 'Arolwg Chwaraeon Ysgol 2022' : 'School Sport Survey 2022'}
              </h2>
              
              <p className="text-lg !text-white/80 max-w-2xl mb-8">
                {isWelsh
                  ? 'Un o arolygon mwyaf y byd o bobl ifanc, bydd Arolwg Chwaraeon Ysgol 2022 yn rhoi llais i bobl ifanc ar chwaraeon a lles.'
                  : 'One of the world\'s biggest surveys of young people, the 2022 School Sport Survey will give young people a voice on sport and wellbeing.'}
              </p>
              
              <span className="inline-flex items-center gap-2 text-[#E11D2E] font-semibold group-hover:gap-4 transition-all">
                {isWelsh ? 'Darllen mwy' : 'Read more'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Citbag Featured Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
            {/* Left side - Content */}
            <div className="bg-gradient-to-br from-[#E11D2E] to-[#E11D2E] p-8 lg:p-12 flex flex-col justify-between min-h-[350px]">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
                  Citbag
                </h2>
                <p className="text-lg text-white/90 leading-relaxed mb-8">
                  {isWelsh
                    ? 'Adnoddau chwaraeon a gweithgarwch am ddim i ysgolion ac athrawon'
                    : 'Free sport and activity resources for schools and teachers'}
                </p>
              </div>
              <div>
                <a
                  href="https://citbag.sport.wales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-white text-[#123F56] font-semibold hover:bg-white/90 transition-colors"
                >
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right side - Image placeholder */}
            <div className="relative min-h-[350px] lg:min-h-0 bg-gradient-to-br from-[#123F56] to-[#123F56]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-24 h-24 text-white/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <p className="text-white/50 text-sm">{isWelsh ? 'Delwedd CMS' : 'CMS Image'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Programme Cards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Young Ambassadors */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#E11D2E] to-[#E11D2E] flex items-center justify-center">
                <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-[#123F56] mb-3 group-hover:text-[#E11D2E] transition-colors">
                  {isWelsh ? 'Llysgenhadon Ifanc' : 'Young Ambassadors'}
                </h3>
                <p className="text-[#64748B] mb-4">
                  {isWelsh
                    ? 'Ar hyn o bryd, mae mwy na 3000 o Lysgenhadon Ifanc mewn ysgolion, colegau a phrifysgolion ledled Cymru'
                    : 'Currently, there are more than 3000 Young Ambassadors in schools, colleges and universities across Wales'}
                </p>
                <Link
                  href="/sport-in-schools/young-ambassadors"
                  className="inline-flex items-center gap-2 text-[#E11D2E] font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Physical Literacy */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#F4B400] to-[#F4B400] flex items-center justify-center">
                <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-[#123F56] mb-3 group-hover:text-[#F4B400] transition-colors">
                  {isWelsh ? 'Llythrennedd Corfforol' : 'Physical Literacy'}
                </h3>
                <p className="text-[#64748B] mb-4">
                  {isWelsh
                    ? 'Rydym eisiau rhoi\'r sgiliau a\'r hyder i bob person gymryd rhan mewn chwaraeon.'
                    : 'We want to give every person the skills and confidence to take part in sport.'}
                </p>
                <Link
                  href="/sport-in-schools/physical-literacy"
                  className="inline-flex items-center gap-2 text-[#F4B400] font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  {isWelsh ? 'Dysgu mwy' : 'Learn more'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Citbag */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#E11D2E] to-[#E11D2E] flex items-center justify-center">
                <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-[#123F56] mb-3 group-hover:text-[#E11D2E] transition-colors">
                  Citbag
                </h3>
                <p className="text-[#64748B] mb-4">
                  {isWelsh
                    ? 'Adnoddau chwaraeon a gweithgarwch am ddim i ysgolion ac athrawon'
                    : 'Free sport and activity resources for schools and teachers'}
                </p>
                <a
                  href="https://citbag.sport.wales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#E11D2E] font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  {isWelsh ? 'Mynediad Citbag am ddim' : 'Access Citbag for free'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CMS Articles Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
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
                  <span className="inline-flex items-center gap-2 text-[#E11D2E] font-semibold text-sm">
                    {isWelsh ? 'Darllen Mwy' : 'Read More'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center p-8 bg-white rounded-2xl border-2 border-dashed border-[#E2E8F0]">
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
