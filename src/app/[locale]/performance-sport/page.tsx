import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Chwaraeon Perfformiad' : 'Performance Sport';
  const description = isWelsh
    ? 'Chwaraeon lefel uchaf yng Nghymru.'
    : 'Top level sport in Wales.';

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

  const performanceCards = [
    {
      title: isWelsh ? 'Sefydliad Gwyddoniaeth Perfformiad Cymru' : 'Welsh Institute of Performance Science',
      description: isWelsh
        ? 'Mae Sefydliad Gwyddoniaeth Perfformiad Cymru (WIPS) yn cael ei arwain gan Brifysgol Abertawe mewn cydweithrediad â...'
        : 'The Welsh Institute of Performance Science (WIPS) is led by Swansea University in collaboration with…',
      href: '/performance-sport/wips',
    },
    {
      title: isWelsh ? 'Gwybodaeth ac Adnoddau Gwrth-Gyffuriau' : 'Anti-Doping Information and Resources',
      description: isWelsh
        ? 'Mae Chwaraeon Cymru wedi ymrwymo i wneud popeth o fewn ei allu i sicrhau bod athletwyr Cymru yn ymwybodol o\'u cyfrifoldebau...'
        : 'Sport Wales is committed to doing everything it can to make sure Welsh athletes are aware of their responsibilities…',
      href: '/performance-sport/anti-doping',
    },
    {
      title: isWelsh ? 'Panel Athletwyr' : 'Athlete Panel',
      description: isWelsh
        ? 'Rydym yma i gynrychioli safbwyntiau athletwyr ar draws chwaraeon Cymru, ac i fod yn lle lle gallwch rannu...'
        : 'We are here to represent the views of athletes across Welsh sport, and to be a place where you can share…',
      href: '/performance-sport/athlete-panel',
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section with Featured Welsh Olympic Athletes */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#123F56] via-[#1E4A62] to-[#123F56] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#E11D2E]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#E11D2E]/20 blur-3xl"></div>
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
              {isWelsh ? 'Chwaraeon Perfformiad' : 'Performance Sport'}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-4">
              {isWelsh
                ? 'O ran chwaraeon elît yng Nghymru, rydym am i athletwyr gyrraedd eu llawn botensial. Nid yn unig yn eu chwaraeon, ond fel pobl hefyd. Rydym yn ymroddedig i greu amgylcheddau ffyniannus sy\'n eu helpu i dyfu, aros yn iach, a dod yn bobl pencampwyr.'
                : 'When it comes to elite sport in Wales, we want athletes to reach their full potential. Not just in their sport, but as people too. We are dedicated to creating thriving environments that help them grow, stay healthy, and become champion people.'}
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              {isWelsh
                ? 'Rydym yn buddsoddi mewn partneriaid, yn cynnig grantiau i athletwyr talentog ac wedi helpu i adeiladu cyfleusterau hyfforddi a chystadlu gwerth miliynau o bunnoedd.'
                : 'We invest in partners, offer grants to talented athletes and have helped build multi-million pound training and competition facilities.'}
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

      {/* Welsh Olympic Athletes at Paris 2024 Featured Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <Link
            href="/performance-sport/welsh-olympic-athletes"
            className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#123F56] to-[#1E4A62] hover:shadow-2xl transition-all duration-500"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image placeholder */}
              <div className="aspect-video lg:aspect-auto relative bg-gradient-to-br from-[#1E4A62] to-[#334155] flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 text-white/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-white/50 text-sm">{isWelsh ? 'Delwedd CMS' : 'CMS Image'}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-display font-bold !text-white mb-4 group-hover:text-[#E11D2E] transition-colors">
                  {isWelsh ? 'Athletwyr Olympaidd Cymru ym Mharis 2024' : 'Welsh Olympic Athletes at Paris 2024'}
                </h2>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {isWelsh
                    ? 'Gadewch i ni eich cyflwyno i\'r athletwyr Cymreig a gynrychiolodd Tîm GB ym Mharis 2024.'
                    : 'Let us introduce you to the Welsh athletes who will represent Team GB at Paris 2024.'}
                </p>
                <span className="inline-flex items-center gap-2 text-[#E11D2E] font-semibold group-hover:gap-3 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Performance Sport Cards Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {performanceCards.map((card, index) => (
              <Link
                key={index}
                href={card.href as any}
                className="group p-6 lg:p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <h3 className="text-xl font-display font-bold text-[#123F56] mb-3 group-hover:text-[#E11D2E] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[#64748B] mb-4">
                  {card.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[#E11D2E] font-semibold text-sm group-hover:gap-3 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* CMS Articles Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          {/* CMS Placeholder Articles */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {[
              {
                title: isWelsh ? 'Blwyddyn mewn chwaraeon Cymru – 2025 yn ail-chwarae' : 'A year in Welsh sport – 2025 replayed',
                description: isWelsh
                  ? 'Gadewch i ni edrych ar rai o\'r uchafbwyntiau sydd wedi siapio chwaraeon Cymru.'
                  : 'Let\'s have a peek at just some of the highlights that have shaped Welsh sport.',
              },
              {
                title: isWelsh ? 'Sut y bydd £3.3m yn cael ei wario ar welliannau i gyfleusterau chwaraeon' : 'How £3.3m will be spent on sports facility improvements',
                description: isWelsh
                  ? 'Mae Chwaraeon Cymru yn buddsoddi £3.3m o gyllid Llywodraeth Cymru mewn 37 prosiect i wella cyfleusterau chwaraeon...'
                  : 'Sport Wales is investing £3.3m of Welsh Government funding into 37 projects to improve sports facilities…',
              },
              {
                title: isWelsh ? 'Sut mae chwaraeon yng Nghymru yn creu amgylcheddau gwell i fenywod a merched' : 'How sport in Wales is creating better environments for women and girls',
                description: isWelsh
                  ? 'Rydym wedi dod yn bell ond mae mwy i\'w wneud eto i sicrhau bod gan fenywod a merched lefel...'
                  : 'We have come a long way but there\'s still more to do to make sure that women and girls have a level…',
              },
            ].map((article, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                  <div className="text-center p-6">
                    <svg className="w-12 h-12 text-[#94A3B8] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm text-[#94A3B8]">{isWelsh ? 'Delwedd Erthygl' : 'Article Image'}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-display font-bold text-[#123F56] mb-2 group-hover:text-[#E11D2E] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[#64748B] text-sm mb-4">
                    {article.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#E11D2E] font-semibold text-sm group-hover:gap-3 transition-all">
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
