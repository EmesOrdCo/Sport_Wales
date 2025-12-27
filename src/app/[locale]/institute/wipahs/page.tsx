import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Sefydliad Gweithgarwch Corfforol, Iechyd a Chwaraeon Cymru' : 'Welsh Institute of Physical Activity, Health & Sport';
  const description = isWelsh
    ? 'Mae WIPAHS yn rhwydwaith o Brifysgolion Cymru a Chwaraeon Cymru ar draws Cymru.'
    : 'WIPAHS is a pan-Wales network of Welsh Universities and Sport Wales.';

  return {
    title,
    description,
  };
}

export default async function WIPAHSPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Sefydliad Chwaraeon Cymru' : 'The Sport Wales Institute', url: `https://www.sport.wales/${locale}/institute` },
    { name: isWelsh ? 'WIPAHS' : 'WIPAHS', url: `https://www.sport.wales/${locale}/institute/wipahs` },
  ];

  const strategicThemes = [
    { en: 'Mental Health and Well-being', cy: 'Iechyd Meddwl a Lles' },
    { en: 'Behaviour Change', cy: 'Newid Ymddygiad' },
    { en: 'Healthy Lifestyles', cy: 'Ffyrdd o Fyw Iach' },
    { en: 'Moving for Health', cy: 'Symud er Iechyd' },
    { en: 'Population Level Change', cy: 'Newid ar Lefel Poblogaeth' },
    { en: 'Health, Sport and Physical Activity Economics', cy: 'Economeg Iechyd, Chwaraeon a Gweithgarwch Corfforol' },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Sefydliad Gweithgarwch Corfforol, Iechyd a Chwaraeon Cymru' : 'Welsh Institute of Physical Activity, Health & Sport'}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {isWelsh
                ? 'Mae Sefydliad Gweithgarwch Corfforol, Iechyd a Chwaraeon Cymru (WIPAHS) yn rhwydwaith o Brifysgolion Cymru a Chwaraeon Cymru ar draws Cymru. Gydag aelodau wedi\'u lleoli ledled Cymru, rydym yn gallu manteisio ar ddiwylliant unigryw\'r genedl a\'i hystod ryfeddol o arbenigedd a diwydiant. Mae WIPAHS yn dod ag academyddion blaenllaw yn y byd ynghyd, gyda chynrychiolwyr o Chwaraeon Cymru a Llywodraeth Cymru, sy\'n ysgogol i ateb cwestiynau sy\'n seiliedig ar ymarfer, nodi cwestiynau ymchwil sylfaenol, a sicrhau bod canfyddiadau\'n cael eu hadlewyrchu mewn polisi Cymreig.'
                : 'The Welsh Institute of Physical Activity, Health and Sport (WIPAHS) is a pan-Wales network of Welsh Universities and Sport Wales. With members based across Wales, we are able to capitalise on the nation\'s unique culture and its remarkable range of expertise and industry. WIPAHS brings together world-leading academics, with representatives from Sport Wales and Welsh Government, who are driven to answer practice-based questions, identify fundamental research questions, and ensure that findings are reflected in Welsh policy.'}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120V60C360 20 720 0 1080 20C1260 30 1380 50 1440 60V120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Trosolwg' : 'Overview'}
            </h2>
            <div className="prose prose-lg max-w-none text-[#475569] space-y-6">
              <p>
                {isWelsh
                  ? 'Fel sefydliad sy\'n cael ei yrru gan ymarfer, mae WIPAHS yn gweithredu i ateb y cwestiynau a osodir gan bartneriaid sy\'n gweithio yn y maes, yn ogystal â lledaenu gwybodaeth yn eang ar draws amrywiaeth o gynulleidfaoedd. Mae WIPAHS yn ceisio defnyddio pŵer trawsnewidiol gweithgarwch corfforol a chwaraeon i wella bywydau pobl yng Nghymru. Yn y pen draw, cenhadaeth WIPAHS yw adeiladu capasiti ledled Cymru, hyfforddi gwyddonwyr y dyfodol a chynyddu cydweithrediadau strategol rhwng Chwaraeon Cymru, y byd academaidd, busnes a rhanddeiliaid.'
                  : 'As a practice-driven organisation, WIPAHS operates to answer the questions posed by partners working in the field, as well as widely disseminate knowledge across a diversity of audiences. WIPAHS seeks to use the transformative power of physical activity and sport to improve the lives of people in Wales. Ultimately, the mission of WIPAHS is to build capacity across Wales, training future scientists and increase strategic collaborations between Sport Wales, academia, business and stakeholders.'}
              </p>
              <p>
                {isWelsh
                  ? 'Ein nod yw creu cymdeithas iachach. I gyflawni hyn, mae eich mewnwelediad, mewnbwn a gwybodaeth yn hanfodol.'
                  : 'Our aim is to create a healthier society. To achieve this, your insight, input and knowledge is vital.'}
              </p>
              <p>
                {isWelsh
                  ? 'P\'un a ydych chi\'n edrych i hyrwyddo gweithgarwch corfforol, datblygu sylfeini chwaraeon neu wneud y mwyaf o iechyd ar draws y rhychwant oes, byddwn yn gweithio gyda chi i helpu i fynd i\'r afael â chwestiynau rydych chi wedi\'u nodi.'
                  : 'Whether you\'re looking to promote physical activity, develop sporting foundations or maximise health across the lifespan, we will work with you to help address questions you have identified.'}
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-8 p-6 bg-[#F8FAFC] border-l-4 border-[#B91C3C] rounded-r-lg">
              <p className="text-lg text-[#334155] italic">
                {isWelsh
                  ? 'Rydym yma i drosi ymchwil yn ymarfer, i ddod â gwybodaeth a phrofiad amrywiol ynghyd, ac i greu mewnwelediad sy\'n trawsnewid iechyd a lles ein poblogaeth. Byddwn yn helpu i ddod o hyd i\'r atebion os ydynt ar gael, neu\'n gweithio gyda chi i ddatblygu\'r dull gorau i\'w darganfod, os nad ydynt.'
                  : 'We are here to translate research into practice, to bring together diverse knowledge and experience, and to create insight that transforms the health and well-being of our population. We will help find the answers if they are available, or work with you to develop the best approach to discover them, if not.'}
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Strategic Themes */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Themâu Strategol' : 'Strategic Themes'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Mae ein gwaith wedi\'i strwythuro ar draws chwe thema strategol. Dyma nhw:'
                : 'Our work is structured across six strategic themes. These are:'}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {strategicThemes.map((theme, index) => (
                <div key={index} className="bg-white rounded-xl p-5 border border-[#E2E8F0] flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#B91C3C]/10 flex items-center justify-center text-[#B91C3C] font-bold">
                    {index + 1}
                  </div>
                  <span className="font-semibold text-[#0F172A]">
                    {isWelsh ? theme.cy : theme.en}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to get involved */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Sut i gymryd rhan' : 'How to get involved'}
            </h2>
            <p className="text-lg text-[#475569] mb-8">
              {isWelsh
                ? 'Os oes gennych ddiddordeb mewn trafod sut gallwch chi gymryd rhan a gweithio gyda ni, cwblhewch ein ffurflen mynegi diddordeb neu e-bostiwch gyda\'ch ymholiad a\'ch manylion cyswllt, a byddwn yn cysylltu â chi\'n fuan. Rydym yn awyddus i glywed gan bob math o sefydliadau ledled Cymru.'
                : 'If you are interested in discussing how you can get involved and work with us, please complete our expression of interest form or email with your enquiry and contact details, and we will get back to you soon. We are keen to hear from all types of organisations across Wales.'}
            </p>

            {/* Further Information */}
            <div className="mt-8">
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-4">
                {isWelsh ? 'Gwybodaeth Bellach' : 'Further Information'}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://wipahs.wales/" target="_blank" rel="noopener noreferrer" className="text-[#B91C3C] hover:underline font-semibold">
                    {isWelsh ? 'Gwefan WIPAHS' : 'WIPAHS Website'}
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/WIPAHS" target="_blank" rel="noopener noreferrer" className="text-[#B91C3C] hover:underline font-semibold">
                    {isWelsh ? 'Dilynwch WIPAHS ar Twitter' : 'Follow WIPAHS on Twitter'}
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/wipahs/" target="_blank" rel="noopener noreferrer" className="text-[#B91C3C] hover:underline font-semibold">
                    {isWelsh ? 'Cysylltwch â WIPAHS ar LinkedIn' : 'Connect with WIPAHS on LinkedIn'}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-12">
            {isWelsh ? 'Newyddion Diweddaraf - Chwaraeon Perfformiad' : 'Latest News - Performance Sport'}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <Link href="/news" className="group block bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                <svg className="w-12 h-12 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#B91C3C] transition-colors">
                  {isWelsh ? 'Blwyddyn mewn chwaraeon Cymru – 2025 wedi\'i ail-chwarae' : 'A year in Welsh sport – 2025 replayed'}
                </h3>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C3C]">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                </span>
              </div>
            </Link>
            <Link href="/news" className="group block bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                <svg className="w-12 h-12 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#B91C3C] transition-colors">
                  {isWelsh ? 'Sut y bydd £3.3m yn cael ei wario ar welliannau cyfleusterau chwaraeon' : 'How £3.3m will be spent on sports facility improvements'}
                </h3>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C3C]">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                </span>
              </div>
            </Link>
            <Link href="/news" className="group block bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                <svg className="w-12 h-12 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#B91C3C] transition-colors">
                  {isWelsh ? 'Sut mae chwaraeon yng Nghymru yn creu amgylcheddau gwell i fenywod a merched' : 'How sport in Wales is creating better environments for women and girls'}
                </h3>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C3C]">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Sport Wales Institute CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4">
                  {isWelsh ? 'Archwilio Sefydliad Chwaraeon Cymru' : 'Explore the Sport Wales Institute'}
                </h3>
                <p className="text-white/80 mb-6">
                  {isWelsh
                    ? 'Ein gwasanaeth o\'r radd flaenaf yn darparu cefnogaeth i athletwyr.'
                    : 'Our world-class service providing support for athletes.'}
                </p>
                <Link
                  href="/institute"
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-white text-[#0F172A] font-semibold hover:bg-white/90 transition-colors"
                >
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="bg-white/10 rounded-xl p-8 flex items-center justify-center min-h-[200px]">
                <svg className="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

