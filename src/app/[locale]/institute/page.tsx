'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function InstitutePage() {
  const locale = useLocale();
  const isWelsh = locale === 'cy';

  const services = [
    {
      title: isWelsh ? 'Therapi Meinwe Meddal' : 'Soft Tissue Therapy',
      description: isWelsh
        ? 'Therapi Meinwe Meddal yw rheoli, trin ac adfer meinweoedd meddal y corff...'
        : 'Soft Tissue Therapy is the management, manipulation and rehabilitation of the soft tissues of the body…',
    },
    {
      title: isWelsh ? 'Ffisiotherapi Perfformiad' : 'Performance Physiotherapy',
      description: isWelsh
        ? 'Mae ein Ffisiotherapyddion Chwaraeon yn allweddol yn y paratoi ar gyfer athletwyr. Maent yn gweithio ar y cyd o fewn...'
        : 'Our Sport Physiotherapists are instrumental in an athlete\'s preparation. They work collaboratively within…',
    },
    {
      title: isWelsh ? 'Ffisioleg Perfformiad' : 'Performance Physiology',
      description: isWelsh
        ? 'Ffisioleg perfformiad yw\'r wyddoniaeth o sut mae ymarfer corff yn newid strwythur a swyddogaeth...'
        : 'Performance physiology is the science of how physical exercise changes the structure and function of…',
    },
    {
      title: isWelsh ? 'Seicoleg Perfformiad' : 'Performance Psychology',
      description: isWelsh
        ? 'Mae gennym dîm ymroddedig ac angerddol o Seicolegwyr Perfformiad yn gweithio gyda chwaraeon i alluogi athletwyr...'
        : 'We have a dedicated and passionate team of Performance Psychologists working with sports to enable athletes,…',
    },
    {
      title: isWelsh ? 'Maetheg Perfformiad' : 'Performance Nutrition',
      description: isWelsh
        ? 'Beth yw Maetheg Perfformiad? Ein nod cyffredinol fel tîm maetheg perfformiad yw helpu athletwyr...'
        : 'What is Performance Nutrition? Our overarching aim as a performance nutrition team is to help athletes…',
    },
    {
      title: isWelsh ? 'Cryfder a Chyflyriad' : 'Strength and Conditioning',
      description: isWelsh
        ? 'Pwrpas cryfder a chyflyriad yw gwella perfformiad a lleihau\'r risg o anaf drwy...'
        : 'The purpose of strength and conditioning is to improve performance and reduce the risk of injury through…',
    },
    {
      title: isWelsh ? 'Ymgynghoriaeth Meddygaeth Chwaraeon' : 'Sports Medicine Consultancy',
      description: isWelsh
        ? 'Mae ein meddygon meddygaeth chwaraeon yn arbenigwyr ym mhroblemau salwch cyffredinol yn ogystal â\'r feddygol...'
        : 'Our sports medicine doctors are experts in the management of general illness as well as the medical…',
    },
    {
      title: isWelsh ? 'Ffordd o Fyw Perfformiad' : 'Performance Lifestyle',
      description: isWelsh
        ? 'Mae ein tîm ymroddedig o gynghorwyr Ffordd o Fyw Perfformiad yn gweithio gydag athletwyr i gefnogi eu datblygiad personol a...'
        : 'Our dedicated team of Performance Lifestyle advisors work with athletes to support their personal and…',
    },
    {
      title: isWelsh ? 'Dadansoddi Perfformiad' : 'Performance Analysis',
      description: isWelsh
        ? 'Mae ein tîm o Ddadansoddwyr Perfformiad yn darparu gwybodaeth wrthrychol i hyfforddwyr ac athletwyr sy\'n eu helpu...'
        : 'Our team of Performance Analysts provide objective information to coaches and athletes that helps them…',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#123F56] via-[#1E4A62] to-[#123F56] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#E11D2E] opacity-10 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[#E11D2E] opacity-10 blur-2xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Sefydliad Chwaraeon Cymru' : 'The Sport Wales Institute'}
            </h1>
            <div className="space-y-4 text-lg text-white/80 leading-relaxed">
              <p>
                {isWelsh
                  ? 'Mae Sefydliad Chwaraeon Cymru yn dîm o weithwyr proffesiynol, o bob math o ddisgyblaethau, yn gweithio gyda\'i gilydd i helpu athletwyr Cymreig i sicrhau llwyddiant ar y llwyfan byd - yn ogystal ag yn eu bywydau y tu allan i chwaraeon.'
                  : 'The Sport Wales Institute is a team of professionals, from across lots of disciplines, working together to help Welsh athletes achieve success on the world stage - as well as in their lives outside sport.'}
              </p>
              <p>
                {isWelsh
                  ? 'Mae ein tîm yn cynnwys ymarferwyr gwyddoniaeth a meddygaeth a chynghorwyr perfformiad, ynghyd â chynorthwywyr o Sefydliad Gwyddoniaeth Perfformiad Cymru (WIPS).'
                  : 'Our team is made up of science & medicine practitioners and performance advisors, together with assistants from the Welsh Institute of Performance Science (WIPS).'}
              </p>
              <p>
                {isWelsh
                  ? 'Mae ein hymarferwyr wedi gweithio ledled y byd, mewn gemau aml-chwaraeon mawr ac mewn gwersylloedd hyfforddi rhyngwladol. Gan ddarparu cefnogaeth i gyrff llywodraethu cenedlaethol chwaraeon, helpodd gwaith y tîm Cymru i gyflawni ei Gemau\'r Gymanwlad mwyaf llwyddiannus erioed yn 2018 pan ddychwelodd adref gyda 36 medal – 10 aur, 12 arian a 14 efydd.'
                  : 'Our practitioners have worked all over the world, at major multi-sport games and at international training camps. Providing support to national governing bodies of sport, the team\'s work helped Wales achieve its most successful Commonwealth Games ever in 2018 when it returned home with 36 medals – 10 gold, 12 silver and 14 bronze.'}
              </p>
              <p>
                {isWelsh
                  ? 'Mae\'r tîm hefyd yn cefnogi athletwyr Prydeinig ar Raglenni Dosbarth Byd UK Sport sydd wedi\'u lleoli yng Nghymru, neu pan fyddant yn dychwelyd i Gymru, i gyflawni yn y Gemau Olympaidd a Pharalympaidd.'
                  : 'The team also support British athletes on UK Sport World Class Programmes based in Wales, or when they return to Wales, to deliver at Olympic and Paralympic Games.'}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120V60C360 20 720 0 1080 20C1260 30 1380 50 1440 60V120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Strength & Conditioning Featured */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="container">
          <div className="bg-gradient-to-br from-[#123F56] to-[#1E4A62] rounded-2xl p-8 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl lg:text-2xl font-display font-bold !text-white mb-4">
                  {isWelsh
                    ? 'Dewch yn hyfforddwr cryfder a chyflyriad cymwys'
                    : 'Become a qualified strength & conditioning trainer'}
                </h3>
                <p className="text-white/80 mb-4">
                  {isWelsh
                    ? 'Gwella eich gallu i wella galluoedd corfforol athletwyr. Cymhwyster a gydnabyddir yn genedlaethol ac sydd wedi\'i sybsideiddio\'n drwm gan Chwaraeon Cymru ar gyfer hyfforddwyr neu athrawon AG sy\'n gweithio yn System Chwaraeon Cymru.'
                    : 'Enhance your ability to improve athlete\'s physical capabilities. A nationally recognised qualification and has been heavily subsidised by Sport Wales for coaches or PE teachers working in the Welsh Sporting System.'}
                </p>
                <Link
                  href="/institute/strength-conditioning-course"
                  className="inline-flex items-center gap-2 text-[#E11D2E] font-semibold hover:gap-3 transition-all"
                >
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="bg-white/10 rounded-xl p-6 flex items-center justify-center min-h-[150px]">
                <svg className="w-16 h-16 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#123F56] mb-12">
            {isWelsh ? 'Sefydliad Chwaraeon Cymru - Ein Gwasanaethau' : 'The Sport Wales Institute - Our Services'}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href="/institute"
                className="group p-6 lg:p-8 bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#E11D2E] hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-display font-bold text-[#123F56] mb-3 group-hover:text-[#E11D2E] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#64748B] mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E11D2E] group-hover:gap-3 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WIPS and WIPAHS Featured Links */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* WIPS */}
            <Link
              href="/institute/wips"
              className="group block bg-gradient-to-br from-[#123F56] to-[#1E4A62] rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl lg:text-2xl font-display font-bold !text-white mb-3">
                {isWelsh ? 'Sefydliad Gwyddoniaeth Perfformiad Cymru' : 'Welsh Institute of Performance Science'}
              </h3>
              <p className="text-white/80 mb-4">
                {isWelsh
                  ? 'Mae Sefydliad Gwyddoniaeth Perfformiad Cymru (WIPS)...'
                  : 'The Welsh Institute of Performance Science (WIPS)…'}
              </p>
              <span className="inline-flex items-center gap-2 text-[#E11D2E] font-semibold group-hover:gap-3 transition-all">
                {isWelsh ? 'Darllen Mwy' : 'Read More'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            {/* WIPAHS */}
            <Link
              href="/institute/wipahs"
              className="group block bg-gradient-to-br from-[#123F56] to-[#1E4A62] rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl lg:text-2xl font-display font-bold !text-white mb-3">
                {isWelsh ? 'Sefydliad Gweithgarwch Corfforol, Iechyd a Chwaraeon Cymru' : 'Welsh Institute of Physical Activity, Health & Sport'}
              </h3>
              <p className="text-white/80 mb-4">
                {isWelsh
                  ? 'Mae Sefydliad Gweithgarwch Corfforol, Iechyd a Chwaraeon Cymru...'
                  : 'The Welsh Institute of Physical Activity, Health and…'}
              </p>
              <span className="inline-flex items-center gap-2 text-[#E11D2E] font-semibold group-hover:gap-3 transition-all">
                {isWelsh ? 'Darllen Mwy' : 'Read More'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#123F56] mb-8">
              {isWelsh ? 'Ein Dull' : 'Our approach'}
            </h2>
            <div className="prose prose-lg max-w-none text-[#475569] space-y-6">
              <p>
                {isWelsh
                  ? 'Ein dull ni yw trin pob unigolyn fel person, cyn iddynt fod yn athletwr neu bencampwr. Er bod ennill yn bwysig, mae lles a lles yn dod yn gyntaf.'
                  : 'Our approach is to treat every individual as a person, before they are an athlete or champion. While winning is important, wellbeing and welfare comes first.'}
              </p>
              <p>
                {isWelsh
                  ? 'Mae gennym yr un athroniaeth ar ein cyfer ni a\'n staff. Rydym yn buddsoddi mewn datblygiad personol i gefnogi twf pob unigolyn i gyflawni gwasanaeth gwell i chwaraeon Cymru yn y pen draw.'
                  : 'We have the same philosophy for ourselves and our staff. We invest in personal development to support the growth of every individual to ultimately deliver a better service for Welsh sport.'}
              </p>
              <p>
                {isWelsh
                  ? 'Mae ein holl ddisgyblaethau – seicoleg, ffisioleg, maetheg, cryfder a chyflyriad, ffisiotherapi, ffordd o fyw perfformiad, dadansoddi perfformiad, meddygaeth chwaraeon – yn gweithio gyda\'i gilydd yn agos i sicrhau bod ein gwaith yn gyfannol.'
                  : 'All our disciplines – psychology, physiology, nutrition, strength and conditioning, physiotherapy, performance lifestyle, performance analysis, sports medicine – work together closely to ensure our work is holistic.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#123F56] mb-8">
              {isWelsh ? 'Cyfleoedd' : 'Opportunities'}
            </h2>
            <div className="prose prose-lg max-w-none text-[#475569] space-y-6">
              <p>
                {isWelsh
                  ? 'Rydym yn cynnal rhaglen leoli Interniaeth Myfyrwyr flynyddol ar gyfer y rhai sy\'n ymgymryd ag addysg ôl-raddedig berthnasol. Mae ein rhaglen fel arfer yn rhedeg o fis Hydref i fis Awst. Os hoffech wneud cais i fod yn rhan o\'n carfan nesaf, siaradwch â\'ch arweinydd cwrs ôl-raddedig.'
                  : 'We run an annual Student Internship placement programme for those undertaking relevant postgraduate education. Our programme usually runs from October to August. If you would like to apply to be part of our next cohort, please speak to your postgraduate course lead.'}
              </p>
              <p>
                {isWelsh
                  ? 'Ar gyfer swyddi gwag, ewch i\'n tudalennau recriwtio lle gallwch gofrestru ar gyfer rhybuddion swyddi.'
                  : 'For job vacancies, please visit our recruitment pages where you can sign up for job alerts.'}
              </p>
              <p className="text-[#64748B] italic">
                {isWelsh
                  ? 'Sylwch nad ydym yn gallu cynnig profiad gwaith.'
                  : 'Please note we are not able to offer work experience.'}
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#E11D2E] text-white font-semibold hover:bg-[#E11D2E] transition-colors"
              >
                {isWelsh ? 'Gweld Swyddi Gwag' : 'View Job Vacancies'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News - Performance Sport */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#123F56] mb-12">
            {isWelsh ? 'Newyddion Diweddaraf - Chwaraeon Perfformiad' : 'Latest News - Performance Sport'}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* News Article 1 */}
            <Link
              href="/news"
              className="group block bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                <svg className="w-12 h-12 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-[#123F56] mb-2 group-hover:text-[#E11D2E] transition-colors">
                  {isWelsh ? 'Blwyddyn mewn chwaraeon Cymru – 2025 wedi\'i ail-chwarae' : 'A year in Welsh sport – 2025 replayed'}
                </h3>
                <p className="text-[#64748B] text-sm mb-4">
                  {isWelsh
                    ? 'Gadewch i ni gael cipolwg ar rai o\'r uchafbwyntiau sydd wedi siapio chwaraeon Cymru.'
                    : 'Let\'s have a peek at just some of the highlights that have shaped Welsh sport.'}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E11D2E] group-hover:gap-3 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* News Article 2 */}
            <Link
              href="/news"
              className="group block bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                <svg className="w-12 h-12 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-[#123F56] mb-2 group-hover:text-[#E11D2E] transition-colors">
                  {isWelsh ? 'Sut y bydd £3.3m yn cael ei wario ar welliannau cyfleusterau chwaraeon' : 'How £3.3m will be spent on sports facility improvements'}
                </h3>
                <p className="text-[#64748B] text-sm mb-4">
                  {isWelsh
                    ? 'Mae Chwaraeon Cymru yn buddsoddi £3.3m o arian Llywodraeth Cymru mewn 37 o brosiectau i wella cyfleusterau chwaraeon...'
                    : 'Sport Wales is investing £3.3m of Welsh Government funding into 37 projects to improve sports facilities…'}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E11D2E] group-hover:gap-3 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* News Article 3 */}
            <Link
              href="/news"
              className="group block bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                <svg className="w-12 h-12 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-[#123F56] mb-2 group-hover:text-[#E11D2E] transition-colors">
                  {isWelsh ? 'Sut mae chwaraeon yng Nghymru yn creu amgylcheddau gwell i fenywod a merched' : 'How sport in Wales is creating better environments for women and girls'}
                </h3>
                <p className="text-[#64748B] text-sm mb-4">
                  {isWelsh
                    ? 'Rydym wedi dod yn bell ond mae mwy i\'w wneud o hyd i sicrhau bod gan fenywod a merched lwyfan cyfartal...'
                    : 'We have come a long way but there\'s still more to do to make sure that women and girls have a level…'}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E11D2E] group-hover:gap-3 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

