import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'navigation' });
  const isWelsh = locale === 'cy';
  
  const title = t('whatIsSportWales');
  const description = isWelsh 
    ? 'Dysgwch am Chwaraeon Cymru, y sefydliad cenedlaethol sy\'n gyfrifol am ddatblygu a hyrwyddo chwaraeon yng Nghymru ers 1972.'
    : 'Learn about Sport Wales, the national organisation responsible for developing and promoting sport in Wales since 1972.';
  
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/about/what-is-sport-wales`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/about/what-is-sport-wales`,
      languages: {
        'en': '/en/about/what-is-sport-wales',
        'cy': '/cy/about/what-is-sport-wales',
      },
    },
  };
}

export default async function WhatIsSportWalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'navigation' });

  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: t('whatIsSportWales'), url: `https://www.sport.wales/${locale}/about` },
    { name: t('whatIsSportWales'), url: `https://www.sport.wales/${locale}/about/what-is-sport-wales` },
  ];

  const responsibilities = [
    {
      title: isWelsh ? 'Rôl Ymgynghorol' : 'Advisory Role',
      description: isWelsh 
        ? 'Gwasanaethu fel y prif ymgynghorydd ar faterion chwaraeon i Lywodraeth Cymru.'
        : 'Serving as the main adviser on sporting matters to the Welsh Government.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: isWelsh ? 'Dosbarthu Cyllid' : 'Funding Distribution',
      description: isWelsh 
        ? 'Dyrannu cronfeydd y Loteri Genedlaethol i chwaraeon elît a llawr gwlad yng Nghymru.'
        : 'Allocating National Lottery funds to both elite and grassroots sports in Wales.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: isWelsh ? 'Partneriaethau' : 'Partnerships',
      description: isWelsh 
        ? 'Cydweithio gyda sefydliadau amrywiol i ddarparu a datblygu chwaraeon ledled Cymru.'
        : 'Collaborating with various organisations to deliver and develop sport across Wales.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
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
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#14B8A6]/20 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {isWelsh ? 'Ers 1972' : 'Since 1972'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {t('whatIsSportWales')}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {isWelsh
                ? 'Ni yw\'r sefydliad cenedlaethol sy\'n gyfrifol am ddatblygu a hyrwyddo chwaraeon a gweithgarwch corfforol yng Nghymru. Fe\'n sefydlwyd gan Siarter Frenhinol ar 4 Chwefror 1972.'
                : 'We are the national organisation responsible for developing and promoting sport and physical activity in Wales. Established by Royal Charter on 4 February 1972.'}
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

      {/* Working in Partnership Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Gweithio mewn Partneriaeth' : 'Working in Partnership'}
            </h2>
            <p className="text-lg text-[#64748B] mb-4 leading-relaxed">
              {isWelsh
                ? 'Rydym yn gweithio mewn partneriaeth gyda nifer o sefydliadau gwahanol sy\'n darparu a datblygu chwaraeon ledled Cymru.'
                : 'We work in partnership with a number of different organisations that deliver and develop sport across Wales.'}
            </p>
            <p className="text-lg text-[#64748B] leading-relaxed">
              {isWelsh
                ? 'Mae cyflawni ein gweledigaeth ar gyfer y sector fel cyfanrif yn golygu bod rhaid i ni herio a chefnogi ein partneriaid yn briodol i sicrhau bod pob ceiniog o arian cyhoeddus yn gwneud yr effaith gorau posibl. Mae ein partneriaid yn cynnwys cyrff llywodraethu cenedlaethol, awdurdodau lleol, y sector trydydd, a mwy.'
                : 'Delivering our vision for the sector as a whole means that we must properly challenge and support our partners to ensure that every penny of public money makes the best possible impact. Our partners include national governing bodies, local authorities, the third sector, and more.'}
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#14B8A6] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Ein Cyfrifoldebau' : 'Our Responsibilities'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Yr Hyn a Wnawn' : 'What We Do'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Rydym yn gweithio mewn partneriaeth gyda nifer o sefydliadau gwahanol sy\'n darparu a datblygu chwaraeon ledled Cymru.'
                : 'We work in partnership with a number of different organisations that deliver and develop sport across Wales.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {responsibilities.map((item, index) => (
              <div 
                key={index}
                className="p-6 lg:p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6] mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#64748B]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Bwrdd Chwaraeon Cymru' : 'Sport Wales Board'}
            </h2>
            <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
              {isWelsh
                ? 'Mae ein Bwrdd yn amrywiol, yn ceisio adlewyrchu\'r cymunedau y mae\'n eu gwasanaethu, ac yn dod â chyfoeth o brofiad o weithio gyda chymunedau sy\'n tan-gyfranogi ac athletwyr elitaidd.'
                : 'Our Board is diverse, seeking to reflect the communities it serves, and brings a wealth of experience of working with under-participating communities and elite athletes.'}
            </p>
            <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
              {isWelsh
                ? 'Mae\'n cynnwys unigolion o wahanol sectorau, gan gynnwys addysg, iechyd, busnes ac wrth gwrs chwaraeon.'
                : 'It includes individuals from different sectors, including education, health, business and of course sport.'}
            </p>
            <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
              {isWelsh
                ? 'Mae rhagor o wybodaeth am ein Bwrdd ar gael drwy ddarllen ein '
                : 'More information about our Board is available by reading our '}
              <Link 
                href="/governance"
                className="text-[#B91C3C] hover:underline font-semibold"
              >
                {isWelsh ? 'tudalen Aelodau\'r Bwrdd' : 'Board Members page'}
              </Link>
              {isWelsh ? '.' : '.'}
            </p>
          </div>
        </div>
      </section>

      {/* Executive Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Tîm Gweithredol Chwaraeon Cymru' : 'Sport Wales Executive'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
              {isWelsh
                ? 'Mae\'r tîm Gweithredol yn gyfrifol am weithredu ein strategaeth a\'n cynllun busnes, yn ogystal ag elfennau amrywiol o ryngweithio â\'r Llywodraeth a datblygu sefydliadol:'
                : 'The Executive team has responsibility for implementing our strategy and business plan, as well as the various elements of Government interaction and organisational development:'}
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                <p className="font-semibold text-[#0F172A] mb-1">
                  {isWelsh ? 'Prif Weithredwr' : 'CEO'}
                </p>
                <p className="text-[#64748B]">Brian Davies</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                <p className="font-semibold text-[#0F172A] mb-1">
                  {isWelsh ? 'Cyfarwyddwr Deallusrwydd Chwaraeon a Datblygu Gwasanaethau' : 'Director Sport Intelligence and Service Development'}
                </p>
                <p className="text-[#64748B]">Graham Williams</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                <p className="font-semibold text-[#0F172A] mb-1">
                  {isWelsh ? 'Cyfarwyddwr Cyllid a Gwasanaethau Busnes' : 'Director Finance and Business Services'}
                </p>
                <p className="text-[#64748B]">Emma Wilkins</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                <p className="font-semibold text-[#0F172A] mb-1">
                  {isWelsh ? 'Cyfarwyddwr System Chwaraeon' : 'Director Sport System'}
                </p>
                <p className="text-[#64748B]">Owen Lewis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Royal Charter Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Siarter Frenhinol' : 'Royal Charter'}
            </h2>
            <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
              {isWelsh
                ? 'Sefydlwyd Chwaraeon Cymru gan Siarter Frenhinol ar 4 Chwefror 1972 gyda\'r nod o "feithrin a darparu cyfleusterau ar gyfer gwybodaeth ac arfer chwaraeon a hamdden corfforol y cyhoedd cyffredinol yng Nghymru".'
                : 'Sport Wales was established by Royal Charter on 4 February 1972 with the aim of "fostering and providing facilities for the sport and physical recreation knowledge and practice of the general public in Wales".'}
            </p>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Ble Rydym Wedi\'n Lleoli?' : 'Where Are We Located?'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
              {isWelsh
                ? 'Mae gennym tua 160 o staff ledled Cymru gyda\'n prif swyddfa yng Nghaerdydd a swyddfeydd rhanbarthol yng Nglannau Dyfrdwy a Chaernarfon.'
                : 'We have around 160 staff across Wales with our head office in Cardiff and regional offices in Deeside and Caernarfon.'}
            </p>
            <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
              {isWelsh
                ? 'I gysylltu ag unrhyw un o\'n swyddfeydd, cysylltwch â ni.'
                : 'To contact any of our offices, please contact us.'}
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

      {/* Key Publications Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4">
                    {isWelsh ? 'Cyhoeddiadau Allweddol' : 'Key Publications'}
                  </h2>
                  <p className="text-white/80 mb-6">
                    {isWelsh
                      ? 'Yma cewch ddod o hyd i\'n llyfrgell o ddogfennau a chyhoeddiadau allweddol.'
                      : 'Here you will find our library of key documents and publications.'}
                  </p>
                  <Link 
                    href="/governance"
                    className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-white text-[#0F172A] font-semibold hover:bg-white/90 transition-colors"
                  >
                    {isWelsh ? 'Darllen Mwy' : 'Read More'}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Dysgu Mwy' : 'Learn More'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Hoffech Chi Ddysgu Mwy?' : 'Want to Learn More?'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Dysgwch am ein gweledigaeth a\'n strategaeth, neu darllenwch am ein cyfleusterau a\'n gwaith.'
                : 'Learn about our vision and strategy, or read about our facilities and work.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/about/vision-and-strategy" 
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
              >
                {isWelsh ? 'Gweledigaeth a Strategaeth' : 'Vision and Strategy'}
              </Link>
              <Link 
                href="/facilities"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full border-2 border-[#E2E8F0] text-[#0F172A] font-semibold hover:border-[#B91C3C] hover:text-[#B91C3C] transition-colors"
              >
                {isWelsh ? 'Ein Cyfleusterau' : 'Our Facilities'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

