import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Ystadegau' : 'Statistics';
  const description = isWelsh
    ? 'Mae Chwaraeon Cymru yn gynhyrchydd Ystadegau Swyddogol, yn gyfrifol am gasglu, llunio, prosesu, dadansoddi, dehongli a lledaenu ystadegau.'
    : 'Sport Wales is a producer of Official Statistics, responsible for collecting, compiling, processing, analysing, interpreting and disseminating statistics.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/research/statistics`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/research/statistics`,
      languages: {
        'en': '/en/research/statistics',
        'cy': '/cy/research/statistics',
      },
    },
  };
}

export default async function StatisticsPage({
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
    { name: isWelsh ? 'Ystadegau' : 'Statistics', url: `https://www.sport.wales/${locale}/research/statistics` },
  ];

  const previousReports = [
    {
      title: 'Sport & Active Lifestyles Survey: State of the Nation Report 2024-25',
      href: '#',
      note: '[PDF 1.73MB]',
    },
    {
      title: 'Sport & Active Lifestyles Survey: State of the Nation Report 2022-23',
      href: '#',
      corrections: [
        {
          label: 'Correction Notice:',
          text: "On page 14, the last sentence of paragraph 4 should read 'This is a difference of 105,000 adults' and not '40,000 adults' as originally stated.",
        },
        {
          label: '',
          text: 'On page 31, Table 11, the number of adults for Quintile 3 is 153,000 and not 152,000 as originally stated.',
        },
      ],
    },
    {
      title: 'Sport & Active Lifestyles Survey: State of the Nation Report 2021-22',
      href: '#',
    },
    {
      title: 'Sport & Active Lifestyles Survey: State of the Nation Report 2019-20',
      href: '#',
    },
    {
      title: 'Sport & Active Lifestyles Survey: State of the Nation Report 2018-19',
      href: '#',
    },
    {
      title: 'Sport & Active Lifestyles Survey: State of the Nation Report 2017-18',
      href: '#',
    },
    {
      title: 'Sport & Active Lifestyles Survey: State of the Nation Report 2016-17',
      href: '#',
    },
  ];

  return (
    <>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-8">
              {isWelsh ? 'Ystadegau' : 'Statistics'}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {isWelsh
                ? 'Mae Chwaraeon Cymru yn gynhyrchydd Ystadegau Swyddogol, yn gyfrifol am gasglu, llunio, prosesu, dadansoddi, dehongli a lledaenu ystadegau yn unol â\'r egwyddorion a nodir yn y Cod Ymarfer ar gyfer Ystadegau Swyddogol.'
                : 'Sport Wales is a producer of Official Statistics, responsible for collecting, compiling, processing, analysing, interpreting and disseminating statistics in line with the principles set out in the Code of Practice for Official Statistics.'}
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

      {/* Upcoming Releases */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#E11D2E] mb-8">
              {isWelsh ? 'Datganiadau sydd ar y gweill' : 'Upcoming releases'}
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2.5 bg-[#E11D2E] rounded-full flex-shrink-0"></span>
                <p className="text-lg text-[#123F56]">
                  <a href="#" className="text-[#E11D2E] hover:underline">
                    {isWelsh ? 'Chwaraeon a Ffordd o Fyw Actif' : 'Sport & Active Lifestyles'}
                  </a>
                  {' – '}
                  {isWelsh 
                    ? 'Adroddiad Cyflwr y Genedl: Dyddiad Rhyddhau Wedi\'i Drefnu - Hydref 2027'
                    : 'State of the Nation Report: Scheduled Release Date - Autumn 2027'}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Previous Releases */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#E11D2E] mb-12">
              {isWelsh ? 'Datganiadau blaenorol' : 'Previous releases'}
            </h2>

            {/* The National Survey for Wales */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold text-[#123F56] mb-6">
                {isWelsh ? 'Arolwg Cenedlaethol Cymru' : 'The National Survey for Wales'}
              </h3>
              <p className="text-lg text-[#64748B] mb-4">
                <a href="https://gov.wales/national-survey-wales" target="_blank" rel="noopener noreferrer" className="text-[#E11D2E] hover:underline">
                  {isWelsh ? 'Arolwg Cenedlaethol Cymru' : 'The National Survey for Wales'}
                </a>
                {' '}
                {isWelsh 
                  ? 'yw astudiaeth o oedolion ledled Cymru.'
                  : 'is a study of adults across Wales.'}
              </p>
              <p className="text-lg text-[#64748B] mb-8">
                {isWelsh
                  ? 'O 2016-17 ymlaen, mae\'r Arolwg Cenedlaethol yn disodli Arolwg Cenedlaethol 2012-15, Arolwg Iechyd Cymru, Arolwg Oedolion Actif, Arolwg y Celfyddydau yng Nghymru, ac Arolwg Hamdden Awyr Agored Cymru, fel y cytunwyd gan y Cabinet yn 2014.'
                  : 'From 2016-17 onwards, the National Survey replaces the 2012-15 National Survey, the Welsh Health Survey, Active Adults Survey, Arts in Wales Survey, and Welsh Outdoor Recreation Survey, as agreed by Cabinet in 2014.'}
              </p>

              <ul className="space-y-4">
                {previousReports.map((report, index) => (
                  <li key={index}>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 mt-2.5 bg-[#E11D2E] rounded-full flex-shrink-0"></span>
                      <div>
                        <a href={report.href} className="text-lg text-[#E11D2E] hover:underline">
                          {report.title}
                          {report.note && <span className="text-[#64748B]"> {report.note}</span>}
                        </a>
                        {report.corrections && (
                          <ul className="mt-2 space-y-2 ml-4">
                            {report.corrections.map((correction, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="w-2 h-2 mt-2.5 bg-[#E11D2E] rounded-full flex-shrink-0"></span>
                                <p className="text-[#64748B]">
                                  {correction.label && <span className="font-bold text-[#123F56]">{correction.label}</span>}
                                  {' '}{correction.text}
                                </p>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research and Insight CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
            {/* Left side - Content */}
            <div className="bg-[#123F56] p-8 lg:p-12 flex flex-col justify-between min-h-[350px]">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold !text-white mb-4">
                  {isWelsh ? 'Ymchwil a Mewnwelediad' : 'Research and Insight'}
                </h2>
                <p className="text-lg text-white/80 italic">
                  {isWelsh 
                    ? 'Darganfyddwch arferion chwaraeon ein cenedl.'
                    : 'Find out the sporting habits of our nation.'}
                </p>
              </div>
              <div>
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#E11D2E] text-white font-semibold hover:bg-[#E11D2E] transition-colors"
                >
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                </Link>
              </div>
            </div>

            {/* Right side - Image placeholder */}
            <div className="relative min-h-[350px] lg:min-h-0 bg-gradient-to-br from-[#E2E8F0] to-[#CBD5E1]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-24 h-24 text-[#94A3B8] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[#64748B]">{isWelsh ? 'Delwedd CMS' : 'CMS Image'}</p>
                  <p className="text-[#94A3B8] text-sm mt-1">{isWelsh ? 'Plant yn neidio ar offer chwaraeon' : 'Children jumping on sports equipment'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
