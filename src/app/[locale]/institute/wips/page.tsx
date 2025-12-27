import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Sefydliad Gwyddoniaeth Perfformiad Cymru' : 'Welsh Institute of Performance Science';
  const description = isWelsh
    ? 'Mae Sefydliad Gwyddoniaeth Perfformiad Cymru (WIPS) yn cael ei arwain gan Brifysgol Abertawe mewn cydweithrediad â phartneriaid academaidd.'
    : 'The Welsh Institute of Performance Science (WIPS) is led by Swansea University in collaboration with academic partners.';

  return {
    title,
    description,
  };
}

export default async function WIPSPage({
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
    { name: isWelsh ? 'WIPS' : 'WIPS', url: `https://www.sport.wales/${locale}/institute/wips` },
  ];

  const examples = [
    {
      title: isWelsh ? 'Gwyliadwriaeth anafiadau yn rygbi merched ieuenctid Cymru' : 'Welsh injury surveillance in girl\'s youth rugby',
      description: isWelsh
        ? 'Mae arbenigwyr o WIPS/Prifysgol Bangor wedi cael eu cefnogi gan World Rugby ac Undeb Rygbi Cymru i sefydlu un o\'r astudiaethau ymchwil cyntaf yn y byd i fynd i\'r afael â\'r diffyg gwybodaeth risg anafiadau sydd ar gael mewn rygbi benywaidd ieuenctid, yn benodol yn y gêm gymunedol.'
        : 'Experts from WIPS/Bangor University have been supported by World Rugby and the Welsh Rugby Union to set up one of the first research studies worldwide to address the lack of injury risk information available in youth female rugby, specifically in the community game.',
    },
    {
      title: isWelsh ? 'Lles ac iechyd meddwl athletwyr elitaidd' : 'The wellbeing and mental health of elite athletes: a collective case study',
      description: isWelsh
        ? 'Ers yr Adroddiad Dyletswydd Gofal mewn Chwaraeon, a ryddhawyd yn 2017 gan Dame Tanni Gray-Thompson, mae sylw cynyddol wedi bod ar les ac iechyd meddwl athletwyr yn y DU. Bu ymchwilwyr ym Mhrifysgol Abertawe ac ymarferwyr yn nhîm seicoleg Chwaraeon Cymru yn gweithio gyda Jiwdo Cymru a Beicio Cymru i ddeall ffactorau allweddol sy\'n effeithio ar les ac iechyd meddwl athletwyr perfformiad.'
        : 'Since the Duty of Care in Sport Report, released in 2017 by Dame Tanni Gray-Thompson, there has been an increasing spotlight on the wellbeing and mental health of athletes in the UK. Researchers at Swansea University and practitioners in the Sport Wales psychology team worked with Welsh Judo and Welsh Cycling to understand key factors that affect the wellbeing and mental health of performance athletes.',
    },
    {
      title: isWelsh ? 'Y cychwyn nofio: mesur, pwysigrwydd a gwella' : 'The swimming start: measurement, importance and enhancement through pre-race interventions',
      description: isWelsh
        ? 'Nod Nofio Cymru ac arbenigwyr WIPS oedd penderfynu pa mor bwysig oedd y cychwyn oddi ar y blociau ar ddechrau ras i berfformiad nofio cyffredinol a sut i\'w wella. O ganlyniad i\'r ymchwil, mae hyfforddwyr wedi gallu deall manteision rhai strategaethau cyn-ras a\'u hintegreiddio ar sail unigol gyda nofwyr i wella eu perfformiad.'
        : 'Swim Wales and WIPS experts aimed to determine how important the start off the blocks at the beginning of a race was to overall swim performance and how to improve it. As a result of the research, coaches have been able to understand the benefits of some pre-race strategies and integrate them on an individual basis with swimmers to improve their performance.',
    },
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
              {isWelsh ? 'Sefydliad Gwyddoniaeth Perfformiad Cymru' : 'Welsh Institute of Performance Science'}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {isWelsh
                ? 'Mae Sefydliad Gwyddoniaeth Perfformiad Cymru (WIPS) yn cael ei arwain gan Brifysgol Abertawe mewn cydweithrediad â phartneriaid academaidd (Prifysgol Bangor, Prifysgol Caerdydd, Prifysgol Metropolitan Caerdydd a Phrifysgol De Cymru) yn cynnal prosiectau gwyddoniaeth perfformiad cymhwysol aml-ddisgyblaeth, blaenllaw yn y byd sy\'n gwella perfformiad athletwyr a busnesau Cymru. Mae\'n bartneriaeth tair ffordd rhwng Chwaraeon Cymru, gwyddonwyr chwaraeon academaidd blaenllaw Cymru a phartneriaid diwydiant perthnasol.'
                : 'The Welsh Institute of Performance Science (WIPS) is led by Swansea University in collaboration with academic partners (Bangor University, Cardiff University, Cardiff Metropolitan and University of South Wales) conducting multi-disciplinary, world-leading, applied performance science projects that enhance the performance of Welsh athletes and businesses. It is a three-way partnership between Sport Wales, Wales\' leading academic sport scientists and relevant industry partners.'}
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
                  ? 'Mae WIPS yn cynnal ymchwil effaith uchel yn unol â strategaethau Chwaraeon Cymru, gan annog a gwneud y mwyaf o\'r ymchwil, arloesedd a thechnoleg ddiweddaraf i helpu i wella perfformiad athletwyr ein cenedl.'
                  : 'WIPS conducts high impact research in line with Sport Wales strategies, encouraging and maximising the latest research, innovation and technology to help enhance the performance of our nation\'s athletes.'}
              </p>
              <p>
                {isWelsh
                  ? 'Cryfder sylweddol WIPS yw\'r perthnasoedd a grëwyd gyda diwydiant a\'r byd academaidd ym meysydd gwyddoniaeth chwaraeon, meddygaeth, gwyddoniaeth a pheirianneg i ddatblygu, profi a chyflawni arloesiadau sydd â manteision perfformiad o fewn chwaraeon elitaidd a meysydd ehangach fel iechyd a meddygaeth.'
                  : 'A significant strength of WIPS is the relationships created with industry and academia in the areas of sport science, medicine, science and engineering to develop, test and deliver innovations that have performance benefits within elite sport and wider domains such as health and medicine.'}
              </p>
              <p>
                {isWelsh
                  ? 'Mae hyn yn cael ei gydlynu trwy\'r bwrdd rheoli strategol a\'r grŵp llywio ymchwil sy\'n cynnwys arbenigwyr cydnabyddedig mewn Gwyddoniaeth a Meddygaeth Chwaraeon.'
                  : 'This is coordinated through the strategic management board and research steering group containing recognised specialists in Sport Science and Medicine; specifically coaching science, nutrition, strength and conditioning, performance physiology, youth sport, environmental physiology, sports medicine, biomechanics, performance analysis, Data Science, Talent ID and transfer, physiotherapy, disability sport, athlete health and wellbeing, sports ethics governance and integrity and psychology, and in conjunction with the Sport Wales Institute and national governing bodies.'}
              </p>
              <p>
                {isWelsh
                  ? 'Mae\'r ymchwil yn cael ei gefnogi gan grantiau Chwaraeon Cymru a Llywodraeth Cymru.'
                  : 'The research is supported by Sport Wales and Welsh Government grants.'}
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-8 p-6 bg-[#F8FAFC] border-l-4 border-[#B91C3C] rounded-r-lg">
              <p className="text-lg text-[#334155] italic mb-4">
                {isWelsh
                  ? '"Mae cydweithio â Sefydliad Gwyddoniaeth Perfformiad Cymru yn ein galluogi i fanteisio ar gymuned academaidd gref yng Nghymru i greu atebion ymarferol i helpu ein hathletwyr i ragori ar y llwyfan byd."'
                  : '"Collaborating with the Welsh Institute of Performance Science allows us to tap into a strong academic community in Wales to create practical solutions to help our athletes excel on the world stage."'}
              </p>
              <cite className="text-[#64748B] font-semibold not-italic">
                Brian Davies, {isWelsh ? 'Cyfarwyddwr Chwaraeon Elitaidd Chwaraeon Cymru' : 'Sport Wales\' Director of Elite Sport'}
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Examples of Support */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Enghreifftiau o gefnogaeth a ddarparwyd gan WIPS' : 'Examples of support provided by Welsh Institute of Performance Science'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Mae gweithio ar y cyd â\'r rhwydwaith ehangach o arbenigwyr eisoes wedi effeithio\'n gadarnhaol ar chwaraeon yng Nghymru.'
                : 'Working in collaboration with the wider network of specialists has already impacted positively on sport in Wales.'}
            </p>

            <div className="space-y-8">
              {examples.map((example, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E2E8F0]">
                  <h3 className="text-xl font-display font-bold text-[#0F172A] mb-4">
                    {index + 1}. {example.title}
                  </h3>
                  <p className="text-[#64748B] leading-relaxed">
                    {example.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future of WIPS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Dyfodol Sefydliad Gwyddoniaeth Perfformiad Cymru' : 'The future of the Welsh Institute of Performance Science'}
            </h2>
            <div className="prose prose-lg max-w-none text-[#475569] space-y-6">
              <p>
                {isWelsh
                  ? 'Nod WIPS yw datblygu gwyddoniaeth chwaraeon yng Nghymru ymhellach, hyfforddi gwyddonwyr chwaraeon y dyfodol, gwella\'r defnydd o wyddoniaeth mewn chwaraeon yng Nghymru, a chynyddu cydweithrediad rhwng chwaraeon Cymru, y byd academaidd a busnes.'
                  : 'WIPS aims to further develop sport science in Wales, train future sport scientists, enhance the application of science in Welsh sports, and increase collaboration between Welsh sport, academia and business.'}
              </p>
              <p>
                {isWelsh
                  ? 'I barhau i wella perfformiad Gemau\'r Gymanwlad Cymru ac i gynyddu nifer yr athletwyr Cymreig sy\'n ennill medalau yn y Gemau Olympaidd a Pharalympaidd mae angen cyfateb a rhagori ar gapasiti ymchwil perfformiad cystadleuwyr mewn cenhedloedd eraill.'
                  : 'To continue improving Wales\' Commonwealth Games performance and to increase the number of Welsh athletes winning medals at Olympic and Paralympic Games there is a need to match and exceed the performance research capacity of competitors in other nations.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to get involved */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Sut i gymryd rhan' : 'How to get involved'}
            </h2>
            <p className="text-lg text-[#475569] mb-6">
              {isWelsh
                ? 'Ydych chi\'n fusnes neu\'n academydd a all helpu ein hathletwyr i berfformio hyd yn oed yn well?'
                : 'Are you a business or academic who can help our athletes to perform even better?'}
            </p>
            <p className="text-lg text-[#475569] mb-8">
              {isWelsh ? 'Os felly, cysylltwch:' : 'If so, please get in touch:'}
            </p>

            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E2E8F0]">
              <p className="font-semibold text-[#0F172A]">Professor Liam Kilduff</p>
              <p className="text-[#64748B]">School of Sport and Exercise Sciences</p>
              <p className="text-[#64748B]">Swansea University</p>
              <p className="text-[#64748B] mt-2">+44 (01792) 513441</p>
            </div>

            {/* Further Information */}
            <div className="mt-12">
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-4">
                {isWelsh ? 'Gwybodaeth Bellach' : 'Further Information'}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.swansea.ac.uk/sport-science/wips/" target="_blank" rel="noopener noreferrer" className="text-[#B91C3C] hover:underline font-semibold">
                    {isWelsh ? 'Gwefan WIPS' : 'WIPS website'}
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/WIPSCymru" target="_blank" rel="noopener noreferrer" className="text-[#B91C3C] hover:underline font-semibold">
                    {isWelsh ? 'Dilynwch WIPS Cymru ar Twitter' : 'Follow WIPS Cymru on Twitter'}
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/wips-cymru/" target="_blank" rel="noopener noreferrer" className="text-[#B91C3C] hover:underline font-semibold">
                    {isWelsh ? 'Cysylltwch â ni ar LinkedIn' : 'Connect with us on LinkedIn'}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-12">
            {isWelsh ? 'Newyddion Diweddaraf - Chwaraeon Perfformiad' : 'Performance Sport - Latest News'}
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

