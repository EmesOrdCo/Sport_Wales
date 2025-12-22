import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Chwaraeon Perfformiad' : 'Performance Sport';
  const description = isWelsh
    ? 'Cefnogi athletwyr Cymru i gystadlu ar lwyfan y byd. Sefydliad Chwaraeon Cymru, gwyddoniaeth perfformiad, a mwy.'
    : 'Supporting Welsh athletes to compete on the world stage. Sport Wales Institute, performance science, and more.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/performance-sport`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/performance-sport`,
      languages: {
        'en': '/en/performance-sport',
        'cy': '/cy/performance-sport',
      },
    },
  };
}

export default async function PerformanceSportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Chwaraeon Perfformiad' : 'Performance Sport', url: `https://www.sport.wales/${locale}/performance-sport` },
  ];

  const services = [
    {
      title: isWelsh ? 'Sefydliad Perfformiad Cymru' : 'Welsh Institute of Performance Science',
      description: isWelsh
        ? 'Mae Sefydliad Gwyddoniaeth Perfformiad Cymru (WIPS) yn cael ei arwain gan Brifysgol Abertawe mewn cydweithrediad â phartneriaid eraill i gefnogi athletwyr Cymru.'
        : 'The Welsh Institute of Performance Science (WIPS) is led by Swansea University in collaboration with other partners to support Welsh athletes.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: 'bg-[#6366F1]',
    },
    {
      title: isWelsh ? 'Gwybodaeth Gwrth-Gyffuriau' : 'Anti-Doping Information',
      description: isWelsh
        ? 'Mae Chwaraeon Cymru wedi ymrwymo i wneud popeth o fewn ei allu i sicrhau bod athletwyr Cymru yn ymwybodol o\'u cyfrifoldebau.'
        : 'Sport Wales is committed to doing everything it can to make sure Welsh athletes are aware of their responsibilities.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'bg-[#B91C3C]',
    },
    {
      title: isWelsh ? 'Panel Athletwyr' : 'Athlete Panel',
      description: isWelsh
        ? 'Rydym yma i gynrychioli safbwyntiau athletwyr ar draws chwaraeon Cymru, ac i fod yn lle lle gallwch rannu eich syniadau.'
        : 'We are here to represent the views of athletes across Welsh sport, and to be a place where you can share your ideas.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'bg-[#14B8A6]',
    },
  ];

  const supportAreas = [
    {
      title: isWelsh ? 'Gwyddoniaeth Chwaraeon' : 'Sport Science',
      items: [
        isWelsh ? 'Ffisioleg' : 'Physiology',
        isWelsh ? 'Biomecaneg' : 'Biomechanics',
        isWelsh ? 'Seicoleg' : 'Psychology',
        isWelsh ? 'Dadansoddi Perfformiad' : 'Performance Analysis',
      ],
    },
    {
      title: isWelsh ? 'Meddygaeth Chwaraeon' : 'Sport Medicine',
      items: [
        isWelsh ? 'Ffisiotherapi' : 'Physiotherapy',
        isWelsh ? 'Adsefydlu Anafiadau' : 'Injury Rehabilitation',
        isWelsh ? 'Gofal Meddygol' : 'Medical Care',
        isWelsh ? 'Iechyd Meddwl' : 'Mental Health',
      ],
    },
    {
      title: isWelsh ? 'Cryfder a Chyflyru' : 'Strength & Conditioning',
      items: [
        isWelsh ? 'Rhaglenni Hyfforddi' : 'Training Programmes',
        isWelsh ? 'Datblygu Athletwyr' : 'Athlete Development',
        isWelsh ? 'Adfer' : 'Recovery',
        isWelsh ? 'Maeth' : 'Nutrition',
      ],
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#6366F1]/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {isWelsh ? 'Chwaraeon Perfformiad' : 'Performance Sport'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Cefnogi Athletwyr Cymru' : 'Supporting Welsh Athletes'}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {isWelsh
                ? 'Rydym yn darparu cefnogaeth i\'n hathletwyr mwyaf addawol i gystadlu\'n llwyddiannus ar lwyfan y byd.'
                : 'We provide support to our most promising athletes to compete successfully on the world stage.'}
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

      {/* Paris 2024 Feature */}
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
                  {isWelsh ? 'Athletwyr Cymru' : 'Welsh Athletes'}
                </span>
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                  {isWelsh ? 'Athletwyr Olympaidd Cymru ym Mharis 2024' : 'Welsh Olympic Athletes at Paris 2024'}
                </h2>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  {isWelsh
                    ? 'Gadewch i ni eich cyflwyno i\'r athletwyr Cymreig a gynrychiolodd Tîm GB ym Mharis 2024.'
                    : 'Let us introduce you to the Welsh athletes who represented Team GB at Paris 2024.'}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-display font-bold mb-1">30+</div>
                  <p className="text-sm text-white/80">{isWelsh ? 'Athletwyr Cymreig' : 'Welsh Athletes'}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-display font-bold mb-1">15+</div>
                  <p className="text-sm text-white/80">{isWelsh ? 'Chwaraeon' : 'Sports'}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="flex justify-center mb-1">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="13" r="7" fill="currentColor"/>
                      <path d="M12 6L13.5 10.5L18 12L13.5 13.5L12 18L10.5 13.5L6 12L10.5 10.5L12 6Z" fill="white" opacity="0.9"/>
                      <rect x="10" y="2" width="4" height="3" rx="0.5" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="text-sm text-white/80">{isWelsh ? 'Medalau' : 'Medals'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#14B8A6] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Ein Gwasanaethau' : 'Our Services'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Cefnogi Rhagoriaeth' : 'Supporting Excellence'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Rydym yn darparu amrywiaeth o wasanaethau i gefnogi athletwyr Cymru ar eu taith i ragoriaeth.'
                : 'We provide a range of services to support Welsh athletes on their journey to excellence.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 lg:p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#64748B]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sport Wales Institute */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-[#6366F1] font-semibold text-sm uppercase tracking-wider mb-4">
                {isWelsh ? 'Sefydliad Chwaraeon Cymru' : 'Sport Wales Institute'}
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh ? 'Cefnogaeth o\'r Radd Flaenaf' : 'World-Class Support'}
              </h2>
              <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
                {isWelsh
                  ? 'Mae Sefydliad Chwaraeon Cymru yn darparu cefnogaeth gwyddoniaeth chwaraeon, meddygaeth chwaraeon a chryfder a chyflyru o\'r radd flaenaf i athletwyr Cymru.'
                  : 'The Sport Wales Institute provides world-class sport science, sport medicine and strength and conditioning support to Welsh athletes.'}
              </p>
              <p className="text-lg text-[#64748B] leading-relaxed">
                {isWelsh
                  ? 'Rydym yn gweithio mewn partneriaeth â chyrff llywodraethu cenedlaethol i sicrhau bod gan athletwyr fynediad at y gefnogaeth orau bosibl.'
                  : 'We work in partnership with national governing bodies to ensure athletes have access to the best possible support.'}
              </p>
            </div>

            <div className="space-y-6">
              {supportAreas.map((area, index) => (
                <div key={index} className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <h3 className="text-lg font-display font-bold text-[#0F172A]">
                    {area.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-2 mt-8">
                    {area.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-[#64748B]">
                        <svg className="w-4 h-4 text-[#14B8A6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Doping Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-[#B91C3C] flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Chwaraeon Glân' : 'Clean Sport'}
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              {isWelsh
                ? 'Mae Chwaraeon Cymru wedi ymrwymo i wneud popeth o fewn ei allu i sicrhau bod athletwyr Cymru yn ymwybodol o\'u cyfrifoldebau o ran gwrth-gyffuriau a\'u bod yn cystadlu\'n lân.'
                : 'Sport Wales is committed to doing everything it can to make sure Welsh athletes are aware of their anti-doping responsibilities and compete clean.'}
            </p>
            <a
              href="https://ukad.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-white text-[#0F172A] font-semibold hover:bg-white/90 transition-colors"
            >
              {isWelsh ? 'Gwybodaeth UKAD' : 'UKAD Information'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Cysylltwch â Ni' : 'Get in Touch'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Ydych Chi\'n Athletwr?' : 'Are You an Athlete?'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Os ydych chi\'n athletwr sy\'n chwilio am gefnogaeth, neu\'n gorff llywodraethu sy\'n chwilio am bartneriaeth, cysylltwch â ni.'
                : 'If you\'re an athlete looking for support, or a governing body looking for partnership, get in touch.'}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
            >
              {isWelsh ? 'Cysylltu â ni' : 'Contact us'}
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

