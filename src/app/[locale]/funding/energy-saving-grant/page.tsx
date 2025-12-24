import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';
  
  const title = isWelsh ? 'Grant Arbed Ynni' : 'Energy Saving Grant';
  const description = isWelsh 
    ? 'Mae\'r Grant Arbed Ynni yn helpu clybiau chwaraeon yng Nghymru i wneud gwelliannau sy\'n lleihau costau ynni ac yn gwneud eu hadeiladau\'n fwy effeithlon.'
    : 'The Energy Saving Grant helps sports clubs in Wales make improvements that lower energy costs and make their buildings more efficient.';
  
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/funding/energy-saving-grant`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/funding/energy-saving-grant`,
      languages: {
        'en': '/en/funding/energy-saving-grant',
        'cy': '/cy/funding/energy-saving-grant',
      },
    },
  };
}

export default async function EnergySavingGrantPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Cyllid a Chefnogaeth' : 'Funding and Support', url: `https://www.sport.wales/${locale}/funding` },
    { name: isWelsh ? 'Grant Arbed Ynni' : 'Energy Saving Grant', url: `https://www.sport.wales/${locale}/funding/energy-saving-grant` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#FBBF24] via-[#F59E0B] to-[#FBBF24] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#DC2626]/20 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {isWelsh ? 'Hyd at £25,000' : 'Up to £25,000'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Grant Arbed Ynni' : 'Energy Saving Grant'}
            </h1>
          </div>
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120V60C360 20 720 0 1080 20C1260 30 1380 50 1440 60V120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            {/* What is the Energy Saving Grant? */}
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Beth yw\'r Grant Arbed Ynni?' : 'What is the Energy Saving Grant?'}
            </h2>
            <p className="text-lg text-[#334155] leading-relaxed mb-4">
              {isWelsh
                ? 'Mae\'r Grant Arbed Ynni yn helpu clybiau chwaraeon yng Nghymru i wneud gwelliannau sy\'n lleihau costau ynni ac yn gwneud eu hadeiladau\'n fwy effeithlon.'
                : 'The Energy Saving Grant helps sports clubs in Wales make improvements that lower energy costs and make their buildings more efficient.'}
            </p>
            <p className="text-lg text-[#334155] leading-relaxed mb-12">
              {isWelsh
                ? 'Gallwch wneud cais am hyd at £25,000 i wella\'ch clwbdy neu ystafelloedd newid a lleihau eich costau rhedeg.'
                : 'You can apply for up to £25,000 to improve your clubhouse or changing rooms and reduce your running costs.'}
            </p>

            {/* What can you get funding for? */}
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Beth allwch chi gael cyllid ar ei gyfer?' : 'What can you get funding for?'}
            </h2>
            <p className="text-lg text-[#334155] mb-4">
              {isWelsh ? 'Gallwch wneud cais am gyllid ar gyfer:' : 'You can apply for funding for:'}
            </p>
            <ul className="space-y-3 mb-6">
              {[
                isWelsh ? 'Paneli solar a batris storio' : 'Solar panels and storage batteries',
                isWelsh ? 'Inswleiddio (waliau, toeau, ac ati)' : 'Insulation (walls, roofs, etc.)',
                isWelsh ? 'Ffenestri a drysau newydd' : 'New windows and doors',
                isWelsh ? 'Goleuadau (heb gynnwys llifoleuadau na goleuadau ar gyfer ardaloedd chwarae)' : 'Lighting (not including floodlights or lighting for playing areas)',
                isWelsh ? 'Systemau gwresogi a dŵr poeth gwell (nid ar gyfer dibenion arlwyo yn unig)' : 'Better heating and hot water systems (not for catering-only purposes)',
                isWelsh ? 'Systemau dŵr cynaliadwy (e.e. cynaeafu dŵr glaw / tyllau turio)' : 'Sustainable water systems (e.g rainwater harvesting / boreholes)',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F59E0B] flex-shrink-0 mt-2.5"></div>
                  <span className="text-lg text-[#334155]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-[#334155] mb-4">
              {isWelsh 
                ? 'Dyma ragor o wybodaeth am y pethau y gallwch gael cyllid ar eu cyfer.'
                : 'Here\'s more information about the things you can get funding for.'}
            </p>
            <p className="text-lg text-[#334155] mb-12">
              {isWelsh 
                ? 'Eisiau cyllid ar gyfer rhywbeth arall? Edrychwch ar ein grantiau eraill.'
                : 'Want funding for something else? Check out our other grants.'}
            </p>

            {/* When can you apply? */}
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Pryd allwch chi wneud cais?' : 'When can you apply?'}
            </h2>
            <p className="text-lg text-[#334155] leading-relaxed mb-8">
              {isWelsh
                ? 'Mae ceisiadau\'n agor ddydd Mercher 21ain Mai, 2025 am 10am. Cyflwynwch Fynegiant o Ddiddordeb cyn gynted â phosibl (dim hwyrach na dydd Llun 23 Mehefin, 5pm) ac os ydych yn gymwys byddwch yn cael gwahoddiad i Gam 1.'
                : 'Applications open on Wednesday 21st May, 2025 at 10am. Submit an Expression of Interest as soon as possible (no later than Monday 23 June, 5pm) and if you\'re eligible you\'ll be invited to Stage 1 of the application.'}
            </p>

            {/* Stage 1 */}
            <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Cam 1' : 'Stage 1'}
            </h3>
            <p className="text-lg text-[#334155] mb-4">
              {isWelsh
                ? 'Dywedwch wrthym am eich clwb, pa uwchraddiadau rydych am eu gwneud, a faint o gyllid sydd ei angen arnoch.'
                : 'Tell us about your club, what upgrades you want to make, and how much funding you need.'}
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#F59E0B] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">
                  {isWelsh ? 'Agor: Dydd Mercher 21ain Mai, 10am' : 'Open: Wednesday 21st May, 10am'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#F59E0B] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">
                  {isWelsh ? 'Cau: Dydd Mercher 25ain Mehefin, 3pm' : 'Close: Wednesday 25th June, 3pm'}
                </span>
              </li>
            </ul>

            {/* Stage 2 */}
            <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Cam 2' : 'Stage 2'}
            </h3>
            <p className="text-lg text-[#334155] mb-4">
              {isWelsh
                ? 'Os cewch wahoddiad, cwblhewch eich cais. Bydd angen arolwg ynni arnoch i\'ch arwain ar yr hyn sydd angen cyllid arnoch ar ei gyfer.'
                : 'If invited, complete your application. You\'ll need an energy survey to guide you on what you need funding for.'}
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#F59E0B] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">
                  {isWelsh ? 'Agor: Dydd Mercher 16eg Gorffennaf, 10am' : 'Open: Wednesday 16th July, 10am'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#F59E0B] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">
                  {isWelsh ? 'Dyddiad Cau: Dydd Mercher 1af Hydref, 3pm' : 'Close Date: Wednesday 1st October, 3pm'}
                </span>
              </li>
            </ul>
            <p className="text-lg text-[#334155] mb-12">
              {isWelsh
                ? 'Os yw eich cais yn aflwyddiannus ar y cam hwn, bydd Chwaraeon Cymru yn talu 50% o gostau eich arolwg ynni.'
                : 'If your application is unsuccessful at this stage, Sport Wales will pay 50% of your energy survey costs.'}
            </p>

            {/* Who can apply? */}
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Pwy all wneud cais?' : 'Who can apply?'}
            </h2>
            <p className="text-lg text-[#334155] mb-4">
              {isWelsh ? 'Gallwch wneud cais os:' : 'You can apply if:'}
            </p>
            <ul className="space-y-3 mb-12">
              {[
                isWelsh ? 'Rydych yn glwb chwaraeon dielw neu grŵp cymunedol yng Nghymru' : 'You\'re a not-for-profit sports club or community group in Wales',
                isWelsh ? 'Rydych yn berchen ar eich adeilad neu mae gennych o leiaf 7 mlynedd yn weddill ar eich les' : 'You own your building or have at least 7 years remaining on your lease',
                isWelsh ? 'Nid yw eich prosiect wedi dechrau eto' : 'Your project hasn\'t started yet',
                isWelsh ? 'Gallwch ddechrau\'r prosiect erbyn 31 Mawrth 2026' : 'You can start the project by 31 March 2026',
                isWelsh ? 'Gallwch ei orffen o fewn 12 mis o gael y grant' : 'You can finish it within 12 months of getting the grant',
                isWelsh ? 'Gallwch dalu o leiaf 20% o gost y prosiect (mae hyn yn cynnwys yr arolwg ynni)' : 'You can pay at least 20% of the project cost (this includes the energy survey)',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#14B8A6] flex-shrink-0 mt-2.5"></div>
                  <span className="text-lg text-[#334155]">{item}</span>
                </li>
              ))}
            </ul>

            {/* How to apply? */}
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Sut i wneud cais?' : 'How to apply?'}
            </h2>
            <ul className="space-y-3 mb-6">
              {[
                isWelsh ? 'Cwblhewch y ffurflen Mynegiant o Ddiddordeb cyn gynted â phosibl' : 'Complete the Expression of Interest form as soon as possible',
                isWelsh ? 'Cael ymateb o fewn 2 diwrnod gwaith' : 'Get a response within 2 working days',
                isWelsh ? 'Cwblhewch eich ffurflen gais Cam 1 erbyn 25 Mehefin 2025, 3pm' : 'Complete your Stage 1 application form by 25 June 2025, 3pm',
                isWelsh ? 'Os cewch wahoddiad, archebwch a chwblhewch arolwg ynni. Byddwn yn eich helpu gyda hyn.' : 'If invited, book and complete an energy survey. We will help you with this.',
                isWelsh ? 'Defnyddiwch eich arolwg i helpu i arwain eich cais' : 'Use your survey to help guide your application',
                isWelsh ? 'Cwblhewch eich cais llawn erbyn 1 Hydref 2025' : 'Complete your full application by 1 October 2025',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F59E0B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-lg text-[#334155]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-[#334155] mb-4">
              {isWelsh
                ? 'Gallwch wneud cais yn Gymraeg neu Saesneg – bydd y ddwy iaith yn cael eu trin yn gyfartal.'
                : 'You can apply in English or Welsh – both will be treated equally.'}
            </p>
            <p className="text-lg text-[#334155] mb-12">
              {isWelsh
                ? 'Darllenwch ein telerau ac amodau ar gyfer grantiau cyn gwneud cais.'
                : 'Read our terms and conditions for grants before applying.'}
            </p>

            {/* How is funding awarded? */}
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Sut mae cyllid yn cael ei ddyfarnu?' : 'How is funding awarded?'}
            </h2>
            <ul className="space-y-3 mb-12">
              {[
                isWelsh ? 'Mae grantiau hyd at £25,000' : 'Grants are up to £25,000',
                isWelsh ? 'Bydd ceisiadau gyda\'r effaith fwyaf yn cael eu blaenoriaethu.' : 'Applications with the biggest impact will be prioritised.',
                isWelsh ? 'Rhaid i\'ch clwb dalu o leiaf 20% o\'r gost gyfan (yn cynnwys cost yr arolwg ynni)' : 'Your club must pay at least 20% of the total cost (includes the energy survey cost)',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F59E0B] flex-shrink-0 mt-2.5"></div>
                  <span className="text-lg text-[#334155]">{item}</span>
                </li>
              ))}
            </ul>

            {/* Need help? */}
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Angen help?' : 'Need help?'}
            </h2>
            <p className="text-lg text-[#334155] mb-6">
              {isWelsh
                ? 'Rydym yma i\'ch cefnogi. Os oes gennych unrhyw gwestiynau neu os oes angen help arnoch, gallwch gysylltu â ni:'
                : 'We\'re here to support you. If you have any questions or need help, you can contact us:'}
            </p>
            <div className="space-y-4">
              <p className="text-lg text-[#334155]">
                <strong>{isWelsh ? 'E-bost:' : 'Email:'}</strong>{' '}
                <a href="mailto:energy@sport.wales" className="text-[#F59E0B] hover:underline">
                  energy@sport.wales
                </a>
              </p>
              <p className="text-lg text-[#334155]">
                <strong>{isWelsh ? 'Ffôn:' : 'Phone:'}</strong>{' '}
                <a href="tel:03003003102" className="text-[#F59E0B] hover:underline">
                  0300 3003102
                </a>
                {' '}
                {isWelsh ? '(Llun i Gwener: 10am - 12:30pm a 1:15pm – 4pm)' : '(Monday to Friday: 10am - 12:30pm and 1:15pm – 4pm)'}
              </p>
              <p className="text-lg text-[#334155]">
                <strong>{isWelsh ? 'Ceisiadau Presennol:' : 'Existing Applications:'}</strong>{' '}
                <a href="https://www.sport.wales/login/" target="_blank" rel="noopener noreferrer" className="text-[#F59E0B] hover:underline">
                  {isWelsh ? 'Mewngofnodwch i gael mynediad at eich cais.' : 'Log in to access your application.'}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-12 bg-[#F59E0B]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://www.sport.wales/grants-and-funding/energy-saving-grant/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-4 px-8 rounded-full bg-white text-[#0F172A] font-semibold hover:bg-[#F8FAFC] transition-colors"
            >
              {isWelsh ? 'Gwneud Cais Nawr' : 'Apply Now'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <span className="text-white font-medium">
              {isWelsh ? 'Mynegiant o Ddiddordeb' : 'Expression of Interest'}
            </span>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="group p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3 group-hover:text-[#F59E0B] transition-colors">
                {isWelsh 
                  ? 'Beth all eich clwb chwaraeon gael cyllid ar ei gyfer gyda\'r Grant Arbed Ynni?'
                  : 'What can your sports club get funding for with the Energy Saving Grant?'}
              </h3>
              <p className="text-[#64748B] mb-4">
                {isWelsh
                  ? 'Dyma 7 uwchraddiad clyfar y gall eich clwb eu hariannu gyda...'
                  : 'Here are 7 smart upgrades your club can fund with...'}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[#F59E0B] font-semibold hover:gap-3 transition-all">
                {isWelsh ? 'Darllen Mwy' : 'Read More'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="group p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3 group-hover:text-[#F59E0B] transition-colors">
                {isWelsh 
                  ? 'Beth mae clybiau chwaraeon yng Nghymru yn ei ddweud am y Grant Arbed Ynni?'
                  : 'What are sports clubs in Wales saying about the Energy Saving Grant?'}
              </h3>
              <p className="text-[#64748B] mb-4">
                {isWelsh
                  ? 'Dyma rai o brofiadau a chyngor y...'
                  : 'Here are some of the experiences and advice of the...'}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[#F59E0B] font-semibold hover:gap-3 transition-all">
                {isWelsh ? 'Darllen Mwy' : 'Read More'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Funding Options */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <Link 
              href="/funding/be-active-wales"
              className="group p-6 rounded-2xl bg-[#DC2626] hover:bg-[#B91C3C] transition-colors"
            >
              <h3 className="text-xl font-display font-bold !text-white mb-3">
                {isWelsh ? 'Cronfa Cymru Actif' : 'Be Active Wales Fund'}
              </h3>
              <p className="text-white/80 mb-4">
                {isWelsh
                  ? 'Grantiau hyd at £50,000 ar gyfer offer neu gyrsiau hyfforddi...'
                  : 'Grants up to £50,000 for equipment or coaching courses...'}
              </p>
              <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                {isWelsh ? 'Gwneud Cais Nawr' : 'Apply now'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link 
              href="/funding/crowdfunder"
              className="group p-6 rounded-2xl bg-[#1E3A5F] hover:bg-[#0F172A] transition-colors"
            >
              <h3 className="text-xl font-display font-bold !text-white mb-3">
                {isWelsh ? 'Lle i Chwaraeon - Crowdfunder' : 'A Place for Sport - Crowdfunder'}
              </h3>
              <p className="text-white/80 mb-4">
                {isWelsh
                  ? 'Cael hyd at £15,000 i wella\'ch cyfleusterau'
                  : 'Get up to £15,000 to improve your facilities'}
              </p>
              <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                {isWelsh ? 'Dechrau codi arian torfol' : 'Start crowdfunding'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
