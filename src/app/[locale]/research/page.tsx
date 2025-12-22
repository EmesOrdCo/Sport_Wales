import { setRequestLocale, getTranslations } from 'next-intl/server';
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

  const researchAreas = [
    {
      title: isWelsh ? 'Arolygon ac Olrheinwyr' : 'Surveys & Trackers',
      description: isWelsh
        ? 'Gan gynnwys yr Arolwg Chwaraeon Ysgol a\'r Arolwg Chwaraeon a Ffordd o Fyw Actif.'
        : 'Including the School Sport Survey and the Sport and Active Lifestyles Survey.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'bg-[#B91C3C]',
      items: [
        isWelsh ? 'Arolwg Chwaraeon Ysgol' : 'School Sport Survey',
        isWelsh ? 'Arolwg Chwaraeon a Ffordd o Fyw Actif' : 'Sport and Active Lifestyles Survey',
        isWelsh ? 'Arolwg Cenedlaethol Cymru 2024-25' : 'National Survey for Wales 2024-25',
      ],
    },
    {
      title: isWelsh ? 'Adolygiadau a Gwerthusiad' : 'Reviews & Evaluation',
      description: isWelsh
        ? 'Gan gynnwys Adenillion Cymdeithasol ar Fuddsoddiad ac Addysg Actif.'
        : 'Including Social Return on Investment and Active Education.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-[#14B8A6]',
      items: [
        isWelsh ? 'Adenillion Cymdeithasol ar Fuddsoddiad (SROI)' : 'Social Return on Investment (SROI)',
        isWelsh ? 'Gwerthusiad Addysg Actif' : 'Active Education Evaluation',
        isWelsh ? 'Effaith ar Iechyd a Lles' : 'Health and Wellbeing Impact',
      ],
    },
    {
      title: isWelsh ? 'Mewnwelediad Ansoddol' : 'Qualitative Insight',
      description: isWelsh
        ? 'Gan gynnwys yr adroddiad am y rhwystrau i gyfranogiad.'
        : 'Including the report about the barriers to participation.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'bg-[#F59E0B]',
      items: [
        isWelsh ? 'Rhwystrau i Gyfranogiad' : 'Barriers to Participation',
        isWelsh ? 'Cymhelliant i Fod yn Actif' : 'Motivation to be Active',
        isWelsh ? 'Profiadau Cymunedol' : 'Community Experiences',
      ],
    },
    {
      title: isWelsh ? 'Ymchwil Ein Partneriaid' : 'Our Partners\' Research',
      description: isWelsh
        ? 'Gan gynnwys gwaith gan StreetGames a\'r SLC.'
        : 'Including work by StreetGames and SLC.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: 'bg-[#6366F1]',
      items: [
        'StreetGames',
        isWelsh ? 'Ymchwil SLC' : 'SLC Research',
        isWelsh ? 'Astudiaethau Partneriaeth' : 'Partnership Studies',
      ],
    },
  ];

  const keyStats = [
    {
      value: '£4.44',
      label: isWelsh ? 'adenillion am bob £1 a fuddsoddir mewn chwaraeon' : 'return for every £1 invested in sport',
    },
    {
      value: '£5.89bn',
      label: isWelsh ? 'gwerth cymdeithasol cyfan i Gymru' : 'total social value to Wales',
    },
    {
      value: '120,000+',
      label: isWelsh ? 'pobl ifanc yn ymateb i\'r Arolwg Chwaraeon Ysgol' : 'young people respond to School Sport Survey',
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#14B8A6]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {isWelsh ? 'Ymchwil a Mewnwelediad' : 'Research & Insight'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Deall Chwaraeon yng Nghymru' : 'Understanding Sport in Wales'}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {isWelsh
                ? 'Mae ein tîm Ymchwil a Mewnwelediad yn casglu a rheoli data ar weithgarwch chwaraeon yng Nghymru, gan helpu i lunio\'r dyfodol.'
                : 'Our Research and Insight team collects and manages data on sporting activity in Wales, helping to shape the future.'}
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

      {/* Key Stats */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {keyStats.map((stat, index) => (
              <div key={index} className="text-center p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-[#F8FAFC] to-white border border-[#E2E8F0]">
                <div className="text-3xl lg:text-4xl font-display font-bold text-[#B91C3C] mb-2">
                  {stat.value}
                </div>
                <p className="text-sm lg:text-base text-[#64748B]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-[#14B8A6] font-semibold text-sm uppercase tracking-wider mb-4">
                {isWelsh ? 'Ein Gwaith' : 'Our Work'}
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh ? 'Mwy na Dim ond Rhifau' : 'More Than Just Numbers'}
              </h2>
              <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
                {isWelsh
                  ? 'Ein dwy arolwg cyfranogiad chwaraeon mawr yng Nghymru - yr Arolwg Chwaraeon Ysgol a\'r Arolwg Chwaraeon a Ffordd o Fyw Actif - yn darparu darlun clir o gynnydd a\'r gwaith sydd ei angen.'
                  : 'Our two major sport participation surveys in Wales - the School Sport Survey and the Sport and Active Lifestyles Survey - provide the sector with a clear picture of progress and the work that is required.'}
              </p>
              <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
                {isWelsh
                  ? 'Yn bell o fod yn brosesu rhifau yn unig, mae ein tîm yn ein helpu i ddeall cymhelliant pobl i gymryd rhan mewn chwaraeon a\'r rhwystrau sy\'n eu hatal yn aml.'
                  : 'Far from just crunching numbers, our team helps us to understand people\'s motivations to take part in sport and the barriers that often prevent them.'}
              </p>
              <p className="text-lg text-[#64748B] leading-relaxed">
                {isWelsh
                  ? 'Rydym yn rhannu ein canfyddiadau ar draws y sector fel y gallwn i gyd wneud penderfyniadau gwell ar sail tystiolaeth.'
                  : 'We share our findings across the sector so that we can all make better evidence-based decisions.'}
              </p>
            </div>

            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 lg:p-10 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#14B8A6] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold !text-white">{isWelsh ? 'Ystadegau Swyddogol' : 'Official Statistics'}</h3>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed">
                  {isWelsh
                    ? 'Rydym yn gyflenwr ystadegau swyddogol, sy\'n golygu bod ein data yn cydymffurfio â lefelau uchel o ansawdd ac arfer da.'
                    : 'We are a supplier of official statistics, meaning that our data complies to high levels of quality and good practice.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Ein Meysydd Ymchwil' : 'Our Research Areas'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Beth Rydym yn ei Astudio' : 'What We Study'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Mae ein hymchwil yn cwmpasu amrywiaeth eang o bynciau i helpu i ddeall chwaraeon a gweithgarwch corfforol yng Nghymru.'
                : 'Our research covers a wide range of topics to help understand sport and physical activity in Wales.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="p-6 lg:p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${area.color} flex items-center justify-center text-white mb-6`}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                  {area.title}
                </h3>
                <p className="text-[#64748B] mb-4">
                  {area.description}
                </p>
                <ul className="space-y-2">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#64748B]">
                      <svg className="w-4 h-4 text-[#14B8A6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured: National Survey */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="rounded-3xl bg-gradient-to-br from-[#B91C3C] to-[#991B1B] p-8 lg:p-12 text-white overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl"></div>
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
                  {isWelsh ? 'Dan Sylw' : 'Featured'}
                </span>
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                  {isWelsh ? 'Arolwg Cenedlaethol Cymru 2024-25' : 'National Survey for Wales 2024-25'}
                </h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  {isWelsh
                    ? 'Dyma\'r canfyddiadau allweddol o adran Chwaraeon a Ffordd o Fyw Actif Arolwg Cenedlaethol Cymru 2024-25.'
                    : 'Here are the key findings from the Sport & Active Lifestyles section of the National Survey for Wales 2024-25.'}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-display font-bold mb-1">53%</div>
                  <p className="text-sm text-white/80">{isWelsh ? 'oedolion yn actif' : 'adults active'}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-display font-bold mb-1">2.4m</div>
                  <p className="text-sm text-white/80">{isWelsh ? 'pobl yng Nghymru' : 'people in Wales'}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-display font-bold mb-1">32%</div>
                  <p className="text-sm text-white/80">{isWelsh ? 'yn anactif' : 'inactive'}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-display font-bold mb-1">15%</div>
                  <p className="text-sm text-white/80">{isWelsh ? 'yn weddol actif' : 'fairly active'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[#14B8A6] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Cysylltwch â Ni' : 'Get in Touch'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Am Ragor o Wybodaeth' : 'For Further Information'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Os hoffech chi ddysgu mwy am ein hymchwil neu gael mynediad at ddata, cysylltwch â\'n tîm Mewnwelediad.'
                : 'If you would like to learn more about our research or access data, please contact our Insight team.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:insight@sport.wales"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                insight@sport.wales
              </a>
              <a
                href="tel:03003003116"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full border-2 border-[#E2E8F0] text-[#0F172A] font-semibold hover:border-[#B91C3C] hover:text-[#B91C3C] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0300 300 3116
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

