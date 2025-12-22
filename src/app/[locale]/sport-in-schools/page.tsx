import { setRequestLocale, getTranslations } from 'next-intl/server';
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

  const programmes = [
    {
      title: 'Citbag',
      description: isWelsh
        ? 'Adnoddau chwaraeon a gweithgarwch am ddim i ysgolion ac athrawon. Mae platfform dwyieithog Citbag yn llawn syniadau ar gyfer athrawon sy\'n cyflwyno iechyd corfforol a lles yn yr ysgol.'
        : 'Free sport and activity resources for schools and teachers. Sport Wales\' bilingual Citbag platform is full of ideas for teachers delivering physical health and well-being in school.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'from-[#B91C3C] to-[#991B1B]',
      cta: isWelsh ? 'Mynediad Citbag am ddim' : 'Access Citbag for free',
      link: 'https://citbag.sport.wales',
      external: true,
    },
    {
      title: isWelsh ? 'Llysgenhadon Ifanc' : 'Young Ambassadors',
      description: isWelsh
        ? 'Ar hyn o bryd, mae mwy na 3000 o Lysgenhadon Ifanc mewn ysgolion, colegau a phrifysgolion ledled Cymru. Mae\'r rhaglen yn creu arweinwyr chwaraeon ifanc sy\'n ysbrydoli eraill.'
        : 'Currently, there are more than 3000 Young Ambassadors in schools, colleges and universities across Wales. The programme creates young sport leaders who inspire others.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      color: 'from-[#14B8A6] to-[#0D9488]',
      cta: isWelsh ? 'Dysgu mwy' : 'Learn more',
      link: '/sport-in-schools#young-ambassadors',
      external: false,
    },
    {
      title: isWelsh ? 'Llythrennedd Corfforol' : 'Physical Literacy',
      description: isWelsh
        ? 'Rydym eisiau rhoi\'r sgiliau a\'r hyder i bob person gymryd rhan mewn chwaraeon. Mae llythrennedd corfforol yn rhoi\'r sylfeini ar gyfer bywyd actif.'
        : 'We want to give every person the skills and confidence to take part in sport. Physical literacy provides the foundations for an active life.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'from-[#F59E0B] to-[#D97706]',
      cta: isWelsh ? 'Dysgu mwy' : 'Learn more',
      link: '/sport-in-schools#physical-literacy',
      external: false,
    },
  ];

  const stats = [
    { value: '3,000+', label: isWelsh ? 'Llysgenhadon Ifanc' : 'Young Ambassadors' },
    { value: '1,500+', label: isWelsh ? 'Ysgolion yn defnyddio Citbag' : 'Schools using Citbag' },
    { value: '120,000', label: isWelsh ? 'Ymatebion Arolwg Chwaraeon Ysgol' : 'School Sport Survey responses' },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F59E0B]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#14B8A6]/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {isWelsh ? 'Chwaraeon mewn Ysgolion' : 'Sport in Schools'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Ysbrydoli\'r Genhedlaeth Nesaf' : 'Inspiring the Next Generation'}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {isWelsh
                ? 'Rydym yn cefnogi ysgolion, athrawon a phobl ifanc i ddatblygu cariad gydol oes at chwaraeon a gweithgarwch corfforol.'
                : 'We support schools, teachers and young people to develop a lifelong love of sport and physical activity.'}
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

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-[#F8FAFC] to-white border border-[#E2E8F0]">
                <div className="text-3xl lg:text-4xl font-display font-bold text-[#14B8A6] mb-2">
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

      {/* Programmes Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Ein Rhaglenni' : 'Our Programmes'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Adnoddau ar gyfer Ysgolion' : 'Resources for Schools'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Mae gennym amrywiaeth o raglenni ac adnoddau i helpu athrawon i gyflwyno chwaraeon a gweithgarwch corfforol o ansawdd uchel.'
                : 'We have a range of programmes and resources to help teachers deliver high-quality sport and physical activity.'}
            </p>
          </div>

          <div className="space-y-8">
            {programmes.map((programme, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white border border-[#E2E8F0] hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Icon/Visual Section */}
                  <div className={`bg-gradient-to-br ${programme.color} p-8 lg:p-12 flex items-center justify-center`}>
                    <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-white">
                      {programme.icon}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:col-span-2 p-8 lg:p-12">
                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-[#0F172A] mb-4">
                      {programme.title}
                    </h3>
                    <p className="text-lg text-[#64748B] leading-relaxed mb-6">
                      {programme.description}
                    </p>
                    {programme.external ? (
                      <a
                        href={programme.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#0F172A] text-white font-semibold hover:bg-[#1E293B] transition-colors"
                      >
                        {programme.cta}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={programme.link as any}
                        className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#0F172A] text-white font-semibold hover:bg-[#1E293B] transition-colors"
                      >
                        {programme.cta}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Young Ambassadors Section */}
      <section id="young-ambassadors" className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-[#14B8A6] font-semibold text-sm uppercase tracking-wider mb-4">
                {isWelsh ? 'Llysgenhadon Ifanc' : 'Young Ambassadors'}
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh ? 'Arweinwyr Chwaraeon y Dyfodol' : 'Future Sport Leaders'}
              </h2>
              <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
                {isWelsh
                  ? 'Mae\'r rhaglen Llysgenhadon Ifanc yn grymuso pobl ifanc i arwain, ysbrydoli a dylanwadu ar chwaraeon yn eu hysgolion a\'u cymunedau.'
                  : 'The Young Ambassadors programme empowers young people to lead, inspire and influence sport in their schools and communities.'}
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  isWelsh ? 'Datblygu sgiliau arwain' : 'Develop leadership skills',
                  isWelsh ? 'Ysbrydoli cyfoedion i fod yn actif' : 'Inspire peers to be active',
                  isWelsh ? 'Creu cyfleoedd chwaraeon newydd' : 'Create new sport opportunities',
                  isWelsh ? 'Cynrychioli llais pobl ifanc' : 'Represent the voice of young people',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#64748B]">
                    <div className="w-6 h-6 rounded-full bg-[#14B8A6]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#14B8A6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-[#14B8A6] to-[#0D9488] p-8 lg:p-10 text-white">
                <div className="text-6xl lg:text-7xl font-display font-bold mb-4">
                  10+
                </div>
                <p className="text-xl text-white/90 mb-2">
                  {isWelsh ? 'mlynedd o\'r rhaglen' : 'years of the programme'}
                </p>
                <p className="text-white/70 leading-relaxed">
                  {isWelsh
                    ? 'Dathlwyd pen-blwydd deg mlynedd y rhaglen Llysgenhadon Ifanc yng Nghymru mewn digwyddiad arbennig.'
                    : 'The ten year anniversary of the Young Ambassadors programme in Wales was marked at a special event.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Physical Literacy Section */}
      <section id="physical-literacy" className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#F59E0B]/10 p-6 text-center">
                  <svg className="w-8 h-8 text-[#F59E0B] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-semibold text-[#0F172A]">{isWelsh ? 'Hyder' : 'Confidence'}</p>
                </div>
                <div className="rounded-2xl bg-[#14B8A6]/10 p-6 text-center">
                  <svg className="w-8 h-8 text-[#14B8A6] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <p className="font-semibold text-[#0F172A]">{isWelsh ? 'Cymhwysedd' : 'Competence'}</p>
                </div>
                <div className="rounded-2xl bg-[#B91C3C]/10 p-6 text-center">
                  <svg className="w-8 h-8 text-[#B91C3C] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <p className="font-semibold text-[#0F172A]">{isWelsh ? 'Cymhelliant' : 'Motivation'}</p>
                </div>
                <div className="rounded-2xl bg-[#6366F1]/10 p-6 text-center">
                  <svg className="w-8 h-8 text-[#6366F1] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <p className="font-semibold text-[#0F172A]">{isWelsh ? 'Gwybodaeth' : 'Knowledge'}</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block text-[#F59E0B] font-semibold text-sm uppercase tracking-wider mb-4">
                {isWelsh ? 'Llythrennedd Corfforol' : 'Physical Literacy'}
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh ? 'Y Sylfeini ar gyfer Bywyd Actif' : 'The Foundations for an Active Life'}
              </h2>
              <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
                {isWelsh
                  ? 'Mae llythrennedd corfforol yn golygu bod gan unigolyn y cymhelliant, yr hyder, y cymhwysedd corfforol, y wybodaeth a\'r ddealltwriaeth i werthfawrogi a chymryd cyfrifoldeb am gymryd rhan mewn gweithgareddau corfforol am oes.'
                  : 'Physical literacy means that an individual has the motivation, confidence, physical competence, knowledge and understanding to value and take responsibility for engagement in physical activities for life.'}
              </p>
              <p className="text-lg text-[#64748B] leading-relaxed">
                {isWelsh
                  ? 'Rydym eisiau rhoi\'r sgiliau a\'r hyder i bob person gymryd rhan mewn chwaraeon a gweithgarwch corfforol.'
                  : 'We want to give every person the skills and confidence to take part in sport and physical activity.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Sport Survey */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[#14B8A6] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Arolwg Chwaraeon Ysgol' : 'School Sport Survey'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
              {isWelsh ? 'Un o Arolygon Mwyaf y Byd o Bobl Ifanc' : 'One of the World\'s Biggest Surveys of Young People'}
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              {isWelsh
                ? 'Mae\'r Arolwg Chwaraeon Ysgol yn rhoi llais i bobl ifanc ar chwaraeon a lles. Mae\'n ein helpu i ddeall beth sy\'n gweithio a beth sydd angen newid.'
                : 'The School Sport Survey gives young people a voice on sport and wellbeing. It helps us understand what works and what needs to change.'}
            </p>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#14B8A6] text-white font-semibold hover:bg-[#0D9488] transition-colors"
            >
              {isWelsh ? 'Gweld y canlyniadau' : 'View the results'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
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
              {isWelsh ? 'Angen Cymorth?' : 'Need Support?'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Os hoffech chi ddysgu mwy am ein rhaglenni ysgol neu sut gallwn ni gefnogi eich ysgol, cysylltwch â ni.'
                : 'If you would like to learn more about our school programmes or how we can support your school, get in touch.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
              >
                {isWelsh ? 'Cysylltu â ni' : 'Contact us'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="https://citbag.sport.wales"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full border-2 border-[#E2E8F0] text-[#0F172A] font-semibold hover:border-[#B91C3C] hover:text-[#B91C3C] transition-colors"
              >
                {isWelsh ? 'Ewch i Citbag' : 'Visit Citbag'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

