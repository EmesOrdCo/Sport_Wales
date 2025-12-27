import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Arolwg Chwaraeon Ysgol 2022' : 'School Sport Survey 2022';
  const description = isWelsh
    ? 'Un o arolygon mwyaf y byd o bobl ifanc, rhoddodd Arolwg Chwaraeon Ysgol 2022 lais i bobl ifanc ar chwaraeon a lles yng Nghymru.'
    : 'One of the world\'s biggest surveys of young people, the 2022 School Sport Survey gave young people a voice on sport and wellbeing in Wales.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/research/school-sport-survey`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/research/school-sport-survey`,
      languages: {
        'en': '/en/research/school-sport-survey',
        'cy': '/cy/research/school-sport-survey',
      },
    },
  };
}

export default async function SchoolSportSurveyPage({
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
    { name: isWelsh ? 'Arolwg Chwaraeon Ysgol 2022' : 'School Sport Survey 2022', url: `https://www.sport.wales/${locale}/research/school-sport-survey` },
  ];

  const headlineResults = [
    {
      category: isWelsh ? 'Cenedl Actif' : 'Active Nation',
      color: 'bg-[#B91C3C]',
      stats: [
        {
          value: '39%',
          detail: isWelsh
            ? '(124,000) o ddisgyblion yn cymryd rhan mewn chwaraeon wedi\'u trefnu y tu allan i\'r cwricwlwm dair gwaith neu fwy yr wythnos – gostyngiad o 9 pwynt canran ers 2018.'
            : '(124,000) of pupils took part in organised sport outside of the curriculum three or more times a week – a 9-percentage-point decrease since 2018.',
        },
        {
          value: '36%',
          detail: isWelsh
            ? '(111,000) o ddisgyblion heb gyfranogiad mynych mewn chwaraeon wedi\'u trefnu y tu allan i\'r cwricwlwm – cynnydd o 8 pwynt canran ers 2018.'
            : '(111,000) of pupils reported \'no frequent participation\' in organised sport outside of the curriculum – an 8-percentage-point increase since 2018.',
        },
        {
          value: '56%',
          detail: isWelsh
            ? '(174,000) o ddisgyblion yn cymryd rhan mewn chwaraeon mewn clwb cymunedol o leiaf unwaith yr wythnos – gostyngiad o 9 pwynt canran ers 2018.'
            : '(174,000) of pupils took part in sport in a community club setting at least once a week – a 9-percentage-point decrease since 2018.',
        },
      ],
    },
    {
      category: isWelsh ? 'Pawb' : 'Everyone',
      color: 'bg-[#B91C3C]',
      stats: [
        {
          value: '60%',
          detail: isWelsh
            ? 'o ysgolion yn dweud bod ganddynt yr offer sy\'n galluogi cynnwys disgyblion anabl / disgyblion ag nam neu Anghenion Dysgu Ychwanegol (ADY).'
            : 'of schools state that they have the equipment which enables inclusion of disabled pupils / pupils with an impairment or Additional Learning Need (ALN).',
        },
        {
          value: '15pp',
          detail: isWelsh
            ? 'gwahaniaeth mewn cyfranogiad rhwng yr ardaloedd lleiaf a mwyaf difreintiedig – cynnydd o 2 bwynt canran ychwanegol ers 2018.'
            : 'difference in participation between the least and most deprived areas – an increase of an additional 2-percentage-points since 2018.',
        },
      ],
    },
    {
      category: isWelsh ? 'Gydol Oes' : 'Lifelong',
      color: 'bg-[#F59E0B]',
      stats: [
        {
          value: '93%',
          detail: isWelsh
            ? '(292,000) o ddisgyblion yng Nghymru â galw i wneud mwy o chwaraeon.'
            : '(292,000) of pupils in Wales had a demand to do more sport.',
        },
        {
          value: '56%',
          detail: isWelsh
            ? 'o ddisgyblion â galw heb ei ddiwallu am chwaraeon, sy\'n cyfateb i 175,000 o ddisgyblion.'
            : 'of pupils had unmet demand for sport, the equivalent of 175,000 pupils.',
        },
      ],
    },
    {
      category: isWelsh ? 'Mwynhad' : 'Enjoyment',
      color: 'bg-[#6366F1]',
      stats: [
        {
          value: '40%',
          detail: isWelsh
            ? 'o ddisgyblion yn mwynhau chwaraeon allgyrsiol \'llawer iawn\', o\'i gymharu â 57% yn mwynhau AG \'llawer iawn\' a 47% yn mwynhau chwaraeon clwb cymunedol \'llawer iawn\'.'
            : 'of pupils enjoyed extracurricular sport \'a lot\', compared to 57% enjoying PE \'a lot\' and 47% enjoying community club sport \'a lot\'.',
        },
        {
          value: '69%',
          detail: isWelsh
            ? 'o ddisgyblion yn dweud eu bod yn \'hyderus iawn\' neu\'n \'hyderus\' wrth roi cynnig ar chwaraeon newydd.'
            : 'of pupils stated that they were \'very confident\' or \'confident\' in trying new sports.',
        },
      ],
    },
  ];

  const fullResultsSections = [
    { num: '1', title: isWelsh ? 'Cyflwyniad' : 'Introduction' },
    { num: '2', title: isWelsh ? 'Y Weledigaeth ar gyfer Chwaraeon' : 'The Vision for Sport' },
    { num: '3', title: isWelsh ? 'Cenedl Actif' : 'Active Nation' },
    { num: '4', title: isWelsh ? 'Pawb' : 'Everyone' },
    { num: '5', title: isWelsh ? 'Gydol Oes' : 'Lifelong' },
    { num: '6', title: isWelsh ? 'Mwynhad' : 'Enjoyment' },
    { num: '7', title: isWelsh ? 'Atodiadau' : 'Appendices' },
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-8">
              {isWelsh ? 'Arolwg Chwaraeon Ysgol 2022' : 'School Sport Survey 2022'}
            </h1>
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                {isWelsh
                  ? 'Un o arolygon mwyaf y byd o bobl ifanc, rhoddodd Arolwg Chwaraeon Ysgol 2022 lais i bobl ifanc ar chwaraeon a lles yng Nghymru. Mae\'r arolwg yn rhoi mewnwelediad cyfoethog i ni a\'r sector i lefelau cyfranogiad, ymddygiadau ac agweddau.'
                  : 'One of the world\'s biggest surveys of young people, the 2022 School Sport Survey, gave young people a voice on sport and wellbeing in Wales. The survey gives us and the sector a rich insight into participation levels, behaviours and attitudes.'}
              </p>
              <p>
                {isWelsh
                  ? 'Eleni, roedd yr arolwg yn bwysicach nag erioed gan ei fod yn darparu mewnwelediad amhrisiadwy am effaith pandemig Covid-19 ar arferion gweithgarwch pobl ifanc.'
                  : 'This year, the survey was more important than ever as it provided invaluable insight about the impact of the Covid-19 pandemic on young people\'s activity habits.'}
              </p>
              <p>
                {isWelsh
                  ? 'Diolch i waith caled ysgolion, awdurdodau lleol, ac eraill ar draws y sector chwaraeon ac addysg, llwyddon ni i wrando ar leisiau dros 116,000 o ddisgyblion, a bron i 950 o athrawon.'
                  : 'Thanks to the hard work of schools, local authorities, and others across the sport and education sector, we were able to listen to the voices of over 116,000 pupils, and almost 950 teachers.'}
              </p>
              <p>
                {isWelsh
                  ? 'Mae dyfnder y dystiolaeth yn golygu y gallwn ni - a\'n partneriaid - wneud penderfyniadau mwy gwybodus am adnoddau buddsoddi yn y dyfodol. Gallwn ddadansoddi tueddiadau sy\'n dod i\'r amlwg a datblygu chwaraeon mewn fformat sy\'n cymell plant a phobl ifanc heddiw.'
                  : 'The depth of evidence means that we – and our partners – can make more informed decisions about future investment resources. We can analyse emerging trends and develop sport in a format that motivates children and young people today.'}
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://www.chwaraeon.cymru/ymchwil-a-gwybodaeth/arolwg-chwaraeon-ysgol/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#B91C3C] font-semibold hover:gap-3 transition-all"
              >
                {isWelsh ? 'Gweld yr adroddiad yn Gymraeg' : 'View the report in Cymraeg'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
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

      {/* Headline Results */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Canlyniadau Pennawdol' : 'Headline Results'}
            </h2>
          </div>

          <div className="space-y-8">
            {headlineResults.map((section, index) => (
              <div key={index} className="rounded-3xl overflow-hidden border border-[#E2E8F0]">
                <div className={`${section.color} px-8 py-4`}>
                  <h3 className="text-xl font-display font-bold text-white">
                    {section.category}
                  </h3>
                </div>
                <div className="p-8 bg-white">
                  <div className="space-y-6">
                    {section.stats.map((stat, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="text-3xl font-display font-bold text-[#0F172A] min-w-[80px]">
                          {stat.value}
                        </div>
                        <p className="text-[#64748B] leading-relaxed">
                          {stat.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-[#94A3B8] italic">
            {isWelsh
              ? 'Troednodyn: Mae galw heb ei ddiwallu yn cyfeirio at alw am unrhyw chwaraeon ymhlith disgyblion nad ydynt yn cymryd rhan mewn chwaraeon wedi\'u trefnu y tu allan i\'r cwricwlwm dair gwaith neu fwy yr wythnos'
              : 'Footnote: Unmet demand refers to demand for any sport among pupils not participating in organised sport outside of the curriculum three or more times a week'}
          </p>
        </div>
      </section>

      {/* Full Results */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Canlyniadau Llawn' : 'Full Results'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fullResultsSections.map((section, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#B91C3C]/10 flex items-center justify-center text-[#B91C3C] font-bold">
                    {section.num}
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#0F172A] group-hover:text-[#B91C3C] transition-colors">
                    {section.title}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-2 text-[#B91C3C] font-semibold text-sm group-hover:gap-3 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            ))}
          </div>

          {/* Download Links */}
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#0F172A] text-white font-semibold hover:bg-[#1E293B] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {isWelsh ? 'Lawrlwytho\'r adroddiad fel PDF' : 'Download report as PDF'}
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-full border-2 border-[#0F172A] text-[#0F172A] font-semibold hover:bg-[#0F172A] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {isWelsh ? 'Lawrlwytho\'r tablau data' : 'Download the data tables'}
            </a>
          </div>
        </div>
      </section>

      {/* School Reports */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6 uppercase">
              {isWelsh ? 'Adroddiadau Ysgol' : 'School Reports'}
            </h2>
            <div className="space-y-6 text-lg text-[#64748B] leading-relaxed">
              <p>
                {isWelsh
                  ? 'Derbyniodd ysgolion a gymerodd ran yn yr arolwg ac a oedd yn gymwys adroddiad unigol o\'u canlyniad yn ystod gwyliau\'r haf ysgol. Bydd yr adroddiad hwn wedi\'i anfon drwy\'r cyfeiriad e-bost canlynol:'
                  : 'Schools who participated in the survey and qualified received an individualised report of their result during the school summer holidays. This report will have been sent via the following email address:'}
                {' '}
                <span className="font-bold text-[#0F172A]">SCHOOLSPORTSURVEY@SNAPSURVEYS.COM</span>
              </p>
              <p>
                {isWelsh
                  ? 'Mae\'r adroddiadau\'n cynnwys data allweddol a all helpu eich ysgol i wella eu cynnig chwaraeon, a bydd yn eich helpu i ddeall tirwedd chwaraeon yn well ar gyfer pobl ifanc yn eich ysgol ac ar draws Cymru, ac yn eich cynorthwyo i wella bywydau eich disgyblion.'
                  : 'The reports contain key data that can help your school improve their sporting offer, and will help you better understand the sporting landscape for young people in your school and across Wales, and aid you in enhancing the lives of your pupils.'}
              </p>
              <p>
                {isWelsh
                  ? 'Mae\'r adroddiadau wedi\'u strwythuro o amgylch y Weledigaeth ar gyfer Chwaraeon yng Nghymru – \'cenedl actif lle gall pawb fwynhau chwaraeon gydol oes\'. Trwy ddefnyddio hyn fel sail i\'n hadroddiad, gallwch weld sut mae eich ysgol yn cyfrannu at y weledigaeth, a lle gallai fod cwmpas i wneud pethau\'n wahanol.'
                  : 'The reports have been structured around the Vision for Sport in Wales – \'an active nation where everyone can have lifelong enjoyment of sport\'. By using this as the basis for our report, you can see how your school contributes to the vision, and where there could be scope to do things differently.'}
              </p>
            </div>

            {/* Video Placeholder */}
            <div className="mt-8 aspect-video rounded-2xl bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center border border-[#E2E8F0]">
              <div className="text-center p-6">
                <svg className="w-16 h-16 text-[#94A3B8] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[#94A3B8]">{isWelsh ? 'Fideo yn esbonio eich adroddiad' : 'Video explaining your report'}</p>
              </div>
            </div>

            <p className="mt-6 text-[#64748B]">
              {isWelsh
                ? 'Os oeddech yn disgwyl derbyn adroddiad ond heb wneud, cysylltwch â'
                : 'If you expected to receive a report but have not, please contact'}
              {' '}
              <a href="mailto:schoolsportsurvey@snapsurveys.com" className="text-[#B91C3C] font-semibold hover:underline">
                schoolsportsurvey@snapsurveys.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Action Plan Templates */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Templedi Cynllun Gweithredu' : 'Action Plan Templates'}
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed mb-8">
              {isWelsh
                ? 'I gefnogi ysgolion i wneud y defnydd gorau o\'u canlyniadau arolwg, rydym wedi creu \'templed cynllun gweithredu\'. Gellir defnyddio\'r templed hwn i helpu ysgolion i greu cynlluniau ar gyfer darparu chwaraeon yn y dyfodol yn seiliedig ar eu canlyniadau 2022, yn ogystal ag i ysbrydoli syniadau ar sut i ymgysylltu ymhellach â disgyblion wrth ddeall eu hymddygiadau a\'u hagweddau tuag at chwaraeon.'
                : 'To support schools to make best use of their survey results, we have created an \'action plan template\'. This template can be used to help schools create plans for the future delivery of sport based on their 2022 results, as well as to inspire ideas of how to further engage pupils in understanding their behaviours and attitudes towards sport.'}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
            >
              {isWelsh ? 'Gweld y templed' : 'View the template'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 lg:py-24 bg-white">
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
                    ? 'Mae Chwaraeon Cymru yn gynhyrchydd Ystadegau Swyddogol, yn gyfrifol am gasglu, llunio, prosesu, dadansoddi, dehongli a lledaenu ystadegau yn unol â\'r egwyddorion a nodir yn y Cod Ymarfer ar gyfer Ystadegau Swyddogol.'
                    : 'Sport Wales is a producer of Official Statistics, responsible for collecting, compiling, processing, analysing, interpreting and disseminating statistics in line with the principles set out in the Code of Practice for Official Statistics.'}
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
                  <p className="text-white/30 text-xs mt-1">{isWelsh ? 'Dynes gyda clipfwrdd yn siarad â phlant' : 'Woman with clipboard talking to children'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

