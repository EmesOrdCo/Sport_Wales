import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';
  
  const title = isWelsh ? 'Cefnogaeth i Athletwyr' : 'Support for Athletes';
  const description = isWelsh 
    ? 'Darganfyddwch y gefnogaeth sydd ar gael i athletwyr Cymru, gan gynnwys gwyddoniaeth chwaraeon, hyfforddiant, a mwy.'
    : 'Discover the support available to Welsh athletes, including sport science, training, and more.';
  
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/support-for-athletes`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/support-for-athletes`,
      languages: {
        'en': '/en/support-for-athletes',
        'cy': '/cy/support-for-athletes',
      },
    },
  };
}

export default async function SupportForAthletesPage({
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
    { name: isWelsh ? 'Cefnogaeth i Athletwyr' : 'Support for Athletes', url: `https://www.sport.wales/${locale}/support-for-athletes` },
  ];

  const supportAreas = [
    {
      title: isWelsh ? 'Gwyddoniaeth Chwaraeon' : 'Sport Science',
      description: isWelsh
        ? 'Cefnogaeth wyddonol ar gyfer athletwyr elît, gan gynnwys ffisioleg, biomecaneg, seicoleg, a dadansoddi perfformiad.'
        : 'Scientific support for elite athletes, including physiology, biomechanics, psychology, and performance analysis.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: 'bg-[#6366F1]',
    },
    {
      title: isWelsh ? 'Hyfforddiant a Datblygiad' : 'Training & Development',
      description: isWelsh
        ? 'Rhaglenni hyfforddi a datblygiad i helpu athletwyr i gyflawni eu potensial llawn.'
        : 'Training and development programmes to help athletes reach their full potential.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'bg-[#B91C3C]',
    },
    {
      title: isWelsh ? 'Cefnogaeth Ariannol' : 'Financial Support',
      description: isWelsh
        ? 'Gwybodaeth am gefnogaeth ariannol sydd ar gael i athletwyr elît Cymru.'
        : 'Information on financial support available to elite Welsh athletes.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-[#F59E0B]',
    },
    {
      title: isWelsh ? 'Cefnogaeth Iechyd Meddwl' : 'Mental Health Support',
      description: isWelsh
        ? 'Adnoddau a chefnogaeth ar gyfer iechyd meddwl athletwyr ac ymarferwyr.'
        : 'Resources and support for athlete and coach mental health.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'bg-[#EC4899]',
    },
  ];

  const services = [
    {
      title: isWelsh ? 'Rhaglen Ysgoloriaeth Athletwyr Talentog' : 'Talented Athlete Scholarship Scheme',
      description: isWelsh
        ? 'Mae\'r Rhaglen Ysgoloriaeth Athletwyr Talentog (TASS) wedi bod yn cefnogi athletwyr talentog ers 2005.'
        : 'The Talented Athlete Scholarship Scheme (TASS) has been supporting talented athletes since 2005.',
    },
    {
      title: isWelsh ? 'Sefydliad Gwyddoniaeth Perfformiad Cymru' : 'Welsh Institute of Performance Science',
      description: isWelsh
        ? 'Mae Sefydliad Gwyddoniaeth Perfformiad Cymru (WIPS) yn cael ei arwain gan Brifysgol Abertawe mewn cydweithrediad â phartneriaid eraill i gefnogi athletwyr Cymru.'
        : 'The Welsh Institute of Performance Science (WIPS) is led by Swansea University in collaboration with other partners to support Welsh athletes.',
    },
    {
      title: isWelsh ? 'Panel Athletwyr' : 'Athlete Panel',
      description: isWelsh
        ? 'Rydym yma i gynrychioli safbwyntiau athletwyr ar draws chwaraeon Cymru, ac i fod yn lle lle gallwch rannu eich syniadau.'
        : 'We are here to represent the views of athletes across Welsh sport, and to be a place where you can share your ideas.',
    },
    {
      title: isWelsh ? 'Gwybodaeth Gwrth-Gyffuriau' : 'Anti-Doping Information',
      description: isWelsh
        ? 'Mae Chwaraeon Cymru wedi ymrwymo i wneud popeth o fewn ei allu i sicrhau bod athletwyr Cymru yn ymwybodol o\'u cyfrifoldebau.'
        : 'Sport Wales is committed to doing everything it can to make sure Welsh athletes are aware of their responsibilities.',
    },
  ];

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              {isWelsh ? 'Cefnogaeth Elît' : 'Elite Support'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Cefnogaeth i Athletwyr' : 'Support for Athletes'}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {isWelsh
                ? 'Rydym yn darparu ystod eang o wasanaethau cefnogi i athletwyr Cymru i\'w helpu i gyflawni eu potensial llawn ar lwyfan y byd.'
                : 'We provide a wide range of support services to Welsh athletes to help them reach their full potential on the world stage.'}
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

      {/* Support Areas Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Meysydd Cefnogaeth' : 'Support Areas'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Sut Rydym Yn Cefnogi Athletwyr' : 'How We Support Athletes'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Mae Chwaraeon Cymru yn darparu cefnogaeth eang i athletwyr Cymru ar draws meysydd gwahanol.'
                : 'Sport Wales provides comprehensive support to Welsh athletes across different areas.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {supportAreas.map((area, index) => (
              <div 
                key={index}
                className="p-6 lg:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${area.color}/10 flex items-center justify-center text-${area.color.replace('bg-', '')} mb-6`}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                  {area.title}
                </h3>
                <p className="text-[#64748B]">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Ein Gwasanaethau' : 'Our Services'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Gwasanaethau a Rhaglenni' : 'Services & Programmes'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Dysgwch am y gwasanaethau a\'r rhaglenni penodol sydd ar gael i athletwyr Cymru.'
                : 'Learn about the specific services and programmes available to Welsh athletes.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-6 lg:p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl transition-all duration-300"
              >
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

      {/* Travel Guidance Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#F59E0B] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Arweiniad Teithio' : 'Travel Guidance'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Arweiniad Teithio ar gyfer Athletwyr' : 'Elite Travel Guidance'}
            </h2>
            <p className="text-lg text-[#64748B] mb-6">
              {isWelsh
                ? 'Mae Chwaraeon Cymru yn darparu arweiniad ar deithio ryngwladol ar gyfer athletwyr a staff sy\'n cystadlu ar lwyfan y byd.'
                : 'Sport Wales provides guidance on international travel for athletes and staff competing on the world stage.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: isWelsh ? 'Cynllunio a Gofalwch' : 'Planning and Contingency',
                description: isWelsh
                  ? 'Mae\'n bwysig cwblhau pob cynllunio sefyllfa ar gyfer athletwyr neu aelod staff sy\'n datblygu symptomau neu\'n dod i gysylltiad ag unigolion sy\'n sâl.'
                  : 'It is important to complete all scenario planning for athletes or staff members developing symptoms or coming into contact with individuals who are unwell.',
              },
              {
                title: isWelsh ? 'Dychwelyd i Gymru' : 'Return to Wales',
                description: isWelsh
                  ? 'Wrth gynllunio teithio rhyngwladol, mae\'n hanfodol bod y canllawiau cyfredol ar gyfer dychwelyd i Gymru o deithio rhyngwladol yn cael eu hystyried.'
                  : 'When planning international travel, it is vital that current guidance for returning to Wales from international travel is considered.',
              },
              {
                title: isWelsh ? 'Yswiriant' : 'Insurance',
                description: isWelsh
                  ? 'Mae\'r farchnad yswiriant wedi newid yn sylweddol yn ystod pandemig COVID-19 a dylai pawb fod yn ymwybodol o\'r newidiadau hyn.'
                  : 'The insurance market has changed dramatically during the COVID-19 pandemic and all should be aware of these changes.',
              },
              {
                title: isWelsh ? 'Asesu Risg Teithio' : 'Travel Risk Assessment',
                description: isWelsh
                  ? 'Mae\'r chwaraeon yn ofynnol i ysgrifennu asesiad risg teithio penodol ar gyfer pob trip a gynlluniwyd.'
                  : 'The sport is required to write a specific travel risk assessment for each planned trip.',
              },
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white border border-[#E2E8F0]"
              >
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#64748B]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-white border border-[#E2E8F0]">
            <p className="text-[#64748B]">
              {isWelsh
                ? 'Am ragor o wybodaeth am arweiniad teithio, cysylltwch â\'n tîm cefnogaeth athletwyr.'
                : 'For further information on travel guidance, please contact our athlete support team.'}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Dysgu Mwy' : 'Learn More'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Chwaraeon Perfformiad' : 'Performance Sport'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Dysgwch fwy am ein gwaith i gefnogi chwaraeon perfformiad yng Nghymru.'
                : 'Learn more about our work to support performance sport in Wales.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/performance-sport" 
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
              >
                {isWelsh ? 'Chwaraeon Perfformiad' : 'Performance Sport'}
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full border-2 border-[#E2E8F0] text-[#0F172A] font-semibold hover:border-[#B91C3C] hover:text-[#B91C3C] transition-colors"
              >
                {isWelsh ? 'Cysylltu â Ni' : 'Contact Us'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

