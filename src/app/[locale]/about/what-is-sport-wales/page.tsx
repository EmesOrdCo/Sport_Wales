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
    { name: t('whatIsSportWales'), url: `https://www.sport.wales/${locale}/about/what-is-sport-wales` },
  ];

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#123F56] via-[#1E4A62] to-[#123F56] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#E11D2E]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#E11D2E]/20 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {isWelsh ? 'Amdanom Ni' : 'About Us'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {t('whatIsSportWales')}
            </h1>
            <h2 className="text-2xl lg:text-3xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Ni yw Chwaraeon Cymru.' : 'We are Sport Wales.'}
            </h2>
            <div className="space-y-4 text-lg text-white/90 leading-relaxed">
              <p>
                {isWelsh
                  ? 'Rydym eisiau gweld cenedl iachach a mwy gweithgar. Rydym eisiau i bob person ifanc gael dechrau gwych mewn bywyd fel y gallant fynd ymlaen i fwynhau chwaraeon gydol oes.'
                  : 'We want to see a healthier and more active nation. We want every young person to have a great start in life so that they can go on to enjoy a lifetime of sport.'}
              </p>
              <p>
                {isWelsh
                  ? 'Ni yw\'r sefydliad cenedlaethol sy\'n gyfrifol am ddatblygu a hyrwyddo chwaraeon a gweithgarwch corfforol yng Nghymru.'
                  : 'We are the national organisation responsible for developing and promoting sport and physical activity in Wales.'}
              </p>
              <p>
                {isWelsh
                  ? 'Ni yw prif ymgynghorydd Llywodraeth Cymru ar bob mater yn ymwneud â chwaraeon ac rydym yn gweithio\'n agos gyda nhw wrth gyflawni\'r Weledigaeth ar gyfer Chwaraeon yng Nghymru.'
                  : 'We are the Welsh Government\'s lead adviser for all things in sport and we work closely with them in delivering the Vision for Sport in Wales.'}
              </p>
              <p>
                {isWelsh
                  ? 'Rydym hefyd yn dosbarthu grantiau\'r Loteri Genedlaethol i alluogi chwaraeon yng Nghymru i ffynnu.'
                  : 'We also distribute National Lottery grants to enable sport in Wales to flourish.'}
              </p>
              <p>
                {isWelsh
                  ? 'Rydym wedi ymrwymo i ddarparu\'r gefnogaeth sydd ei hangen ar ein hathletwyr mwyaf addawol i gystadlu\'n llwyddiannus ar y llwyfan byd.'
                  : 'We are committed to providing our most promising athletes with the support they need to compete successfully on the world stage.'}
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

      {/* Working in Partnership Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-[#123F56] mb-6">
              {isWelsh ? 'Gweithio mewn Partneriaeth' : 'Working in partnership'}
            </h3>
            <div className="prose prose-lg max-w-none text-[#475569] space-y-6">
              <p>
                {isWelsh
                  ? 'Rydym yn gweithio mewn partneriaeth gyda nifer o sefydliadau gwahanol sy\'n darparu a datblygu chwaraeon ledled Cymru.'
                  : 'We work in partnership with a number of different organisations that deliver and develop sport across Wales.'}
              </p>
              <p>
                {isWelsh
                  ? 'Mae cyflawni ein Gweledigaeth ar gyfer y sector cyfan yn golygu bod rhaid i ni herio a chefnogi ein partneriaid yn briodol i sicrhau bod pob ceiniog o arian cyhoeddus yn gwneud yr effaith gorau posibl. Mae ein partneriaid yn cael eu hannog i fod yn arloesol ac yn uchelgeisiol ac mae ein staff ar gael i\'w helpu i gyrraedd eu potensial.'
                  : 'Delivering our Vision for the sector as a whole means that we must properly challenge and support our partners to ensure that every penny of public money makes the best possible impact. Our partners are encouraged to be innovative and ambitious and our staff are on hand to help them achieve their potential.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where are we located Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-[#123F56] mb-6">
                {isWelsh ? 'Ble rydym wedi\'n lleoli?' : 'Where are we located?'}
              </h3>
              <div className="prose prose-lg max-w-none text-[#475569] space-y-6">
                <p>
                  {isWelsh
                    ? 'Mae gennym tua 160 o staff ledled Cymru gyda\'n prif swyddfa yng Nghaerdydd a swyddfeydd rhanbarthol yng Nglannau Dyfrdwy a Chaernarfon. I gysylltu ag unrhyw un o\'n swyddfeydd, '
                    : 'We have around 160 staff across Wales with our head office in Cardiff and regional offices in Deeside and Caernarfon. To contact any of our offices, please '}
                  <Link href="/contact" className="text-[#E11D2E] hover:underline font-semibold">
                    {isWelsh ? 'cysylltwch â ni' : 'contact us'}
                  </Link>
                  .
                </p>
              </div>
            </div>
            {/* Image placeholder */}
            <div className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 text-[#94A3B8] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[#64748B] text-sm">{isWelsh ? 'Llun o\'r awyr o gaeau Canolfan Genedlaethol Chwaraeon Cymru' : 'Aerial shot of Sport Wales National Centre pitches'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sport Wales Board Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-[#123F56] mb-6">
              {isWelsh ? 'Bwrdd Chwaraeon Cymru' : 'Sport Wales Board'}
            </h3>
            <div className="prose prose-lg max-w-none text-[#475569] space-y-6">
              <p>
                {isWelsh
                  ? 'Mae ein Bwrdd yn amrywiol, yn ceisio adlewyrchu\'r cymunedau y mae\'n eu gwasanaethu, ac yn dod â chyfoeth o brofiad o weithio gyda chymunedau sy\'n tan-gyfranogi ac athletwyr elitaidd. Mae\'n cynnwys unigolion o wahanol sectorau, gan gynnwys addysg, iechyd, busnes ac wrth gwrs chwaraeon. Mae rhagor o wybodaeth am ein Bwrdd ar gael drwy ddarllen ein '
                  : 'Our Board is diverse, seeking to reflect the communities it serves, and brings a wealth of experience of working with under-participating communities and elite athletes. It includes individuals from different sectors, including education, health, business and of course sport. More information about our Board is available by reading our '}
                <Link href="/governance" className="text-[#E11D2E] hover:underline font-semibold">
                  {isWelsh ? 'tudalen Aelodau\'r Bwrdd' : 'Board Members page'}
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sport Wales Executive Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-[#123F56] mb-6">
              {isWelsh ? 'Tîm Gweithredol Chwaraeon Cymru' : 'Sport Wales Executive'}
            </h3>
            <div className="prose prose-lg max-w-none text-[#475569] mb-8">
              <p>
                {isWelsh
                  ? 'Mae\'r tîm Gweithredol yn gyfrifol am weithredu ein strategaeth a\'n cynllun busnes, yn ogystal ag elfennau amrywiol o ryngweithio â\'r Llywodraeth a datblygu sefydliadol:'
                  : 'The Executive team has responsibility for implementing our strategy and business plan, as well as the various elements of Government interaction and organisational development:'}
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <p className="text-[#123F56]">
                  <span className="font-semibold">{isWelsh ? 'Prif Weithredwr' : 'CEO'}</span> – Brian Davies
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <p className="text-[#123F56]">
                  <span className="font-semibold">{isWelsh ? 'Cyfarwyddwr Deallusrwydd Chwaraeon a Datblygu Gwasanaethau' : 'Director Sport Intelligence and Service Development'}</span> – Graham Williams
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <p className="text-[#123F56]">
                  <span className="font-semibold">{isWelsh ? 'Cyfarwyddwr Cyllid a Gwasanaethau Busnes' : 'Director Finance and Business Services'}</span> – Emma Wilkins
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <p className="text-[#123F56]">
                  <span className="font-semibold">{isWelsh ? 'Cyfarwyddwr System Chwaraeon' : 'Director Sport System'}</span> – Owen Lewis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Royal Charter Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-[#123F56] mb-6">
              {isWelsh ? 'Siarter Frenhinol' : 'Royal Charter'}
            </h3>
            <div className="prose prose-lg max-w-none text-[#475569]">
              <p>
                {isWelsh
                  ? 'Sefydlwyd Chwaraeon Cymru gan Siarter Frenhinol ar 4 Chwefror 1972 gyda\'r nod o "feithrin a darparu cyfleusterau ar gyfer gwybodaeth ac arfer chwaraeon a hamdden corfforol y cyhoedd cyffredinol yng Nghymru".'
                  : 'Sport Wales was established by Royal Charter on 4 February 1972 with the aim of "fostering and providing facilities for the sport and physical recreation knowledge and practice of the general public in Wales".'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Publications Card */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <Link
            href="/key-publications"
            className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#123F56] to-[#1E4A62] hover:shadow-2xl transition-all duration-500 max-w-4xl"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left side - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-display font-bold !text-white mb-4">
                  {isWelsh ? 'Cyhoeddiadau Allweddol' : 'Key Publications'}
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  {isWelsh
                    ? 'Yma cewch ddod o hyd i\'n llyfrgell o ddogfennau a chyhoeddiadau allweddol.'
                    : 'Here you will find our library of key documents and publications.'}
                </p>
                <span className="inline-flex items-center gap-2 text-[#E11D2E] font-semibold group-hover:gap-4 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>

              {/* Right side - Image placeholder */}
              <div className="relative min-h-[200px] lg:min-h-0 bg-gradient-to-br from-[#123F56] to-[#123F56]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-16 h-16 text-white/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-white/50 text-sm">{isWelsh ? 'Adeilad Chwaraeon Cymru yn dangos logo' : 'Sport Wales building showing logo signage'}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
