import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';
  
  const title = isWelsh ? 'Lle i Chwaraeon - Crowdfunder' : 'A Place for Sport - Crowdfunder';
  const description = isWelsh 
    ? 'Mae Lle i Chwaraeon yn gronfa gan Chwaraeon Cymru. Mae\'n helpu clybiau chwaraeon i godi arian drwy Crowdfunder i wella eu cyfleusterau.'
    : 'A Place for Sport is a fund by Sport Wales. It helps sports clubs raise money through Crowdfunder to improve their facilities.';
  
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/funding/crowdfunder`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/funding/crowdfunder`,
      languages: {
        'en': '/en/funding/crowdfunder',
        'cy': '/cy/funding/crowdfunder',
      },
    },
  };
}

export default async function CrowdfunderPage({
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
    { name: isWelsh ? 'Lle i Chwaraeon - Crowdfunder' : 'A Place for Sport - Crowdfunder', url: `https://www.sport.wales/${locale}/funding/crowdfunder` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#1E3A5F] via-[#0F172A] to-[#1E3A5F] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {isWelsh ? 'Hyd at £15,000' : 'Up to £15,000'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Lle i Chwaraeon - Crowdfunder' : 'A Place for Sport - Crowdfunder'}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {isWelsh
                ? 'Codwch arian i wella\'r cyfleusterau yn eich clwb chwaraeon.'
                : 'Raise money to improve the facilities at your sports club.'}
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

      {/* Main Content Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            {/* What is A Place for Sport? */}
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Beth yw Lle i Chwaraeon?' : 'What is A Place for Sport?'}
            </h2>
            <p className="text-lg text-[#334155] leading-relaxed mb-4">
              {isWelsh
                ? 'Mae Lle i Chwaraeon yn gronfa gan Chwaraeon Cymru. Mae\'n helpu clybiau chwaraeon i godi arian drwy '
                : 'A Place for Sport is a fund by Sport Wales. It helps sports clubs raise money through '}
              <a href="https://www.crowdfunder.co.uk/" target="_blank" rel="noopener noreferrer" className="text-[#1E3A5F] underline hover:no-underline">
                Crowdfunder
              </a>
              {isWelsh ? ' i wella eu cyfleusterau.' : ' to improve their facilities.'}
            </p>
            <p className="text-lg text-[#334155] leading-relaxed mb-12">
              {isWelsh
                ? 'Os bydd eich clwb yn dechrau tudalen codi arian ar Crowdfunder, gallai Chwaraeon Cymru gefnogi hyd at 60% o\'ch targed hyd at uchafswm o £15,000.'
                : 'If your club starts a fundraising page on Crowdfunder, Sport Wales could support up to 60% of your target up to a maximum of £15,000.'}
            </p>

            {/* What is Crowdfunder? */}
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Beth yw Crowdfunder?' : 'What is Crowdfunder?'}
            </h2>
            <p className="text-lg text-[#334155] leading-relaxed mb-4">
              {isWelsh
                ? 'Gwefan yw Crowdfunder lle mae pobl yn rhoi arian i gefnogi achosion da. Gallwch greu tudalen codi arian ar gyfer eich clwb a\'i rhannu gyda\'ch aelodau a\'ch cymuned leol.'
                : 'Crowdfunder is a website where people donate money to support good causes. You can create a fundraising page for your club and share it with your members and local community.'}
            </p>
            <p className="text-lg text-[#334155] mb-4">
              {isWelsh ? 'I annog pobl i roi, gallwch gynnig gwobrau, fel:' : 'To encourage people to donate, you can offer rewards, like:'}
            </p>
            <ul className="space-y-2 mb-12">
              {[
                isWelsh ? 'Hetiau neu grysau-t clwb' : 'Club hats or t-shirts',
                isWelsh ? 'Byrddau hysbysebu neu nawdd' : 'Advertising boards or sponsorship',
                isWelsh ? 'Mynediad am ddim neu ddiod am ddim' : 'Free entry or a free drink',
                isWelsh ? 'Prisiau am ddim neu ostyngol mewn busnesau lleol' : 'Free or discounted prices at local businesses',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1E3A5F] flex-shrink-0 mt-2.5"></div>
                  <span className="text-lg text-[#334155]">{item}</span>
                </li>
              ))}
            </ul>

            {/* What can you raise money for? */}
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Beth allwch chi godi arian ar ei gyfer?' : 'What can you raise money for?'}
            </h2>
            <p className="text-lg text-[#334155] leading-relaxed mb-4">
              {isWelsh
                ? 'Gallwch godi arian i wella cyfleusterau eich clwb neu brynu offer \'oddi ar y cae\'.'
                : 'You can raise money to improve your club\'s facilities or buy \'off-field\' equipments.'}
            </p>
            <p className="text-lg text-[#334155] mb-4">
              {isWelsh ? 'Mae rhai enghreifftiau\'n cynnwys:' : 'Some examples include:'}
            </p>
            <ul className="space-y-2 mb-6">
              {[
                isWelsh ? 'Trwsio neu uwchraddio ystafelloedd newid, toiledau, neu gawodydd' : 'Fixing or upgrading changing rooms, toilets, or showers',
                isWelsh ? 'Adnewyddu eich clwbdy' : 'Renovating your clubhouse',
                isWelsh ? 'Gwella ardaloedd cegin neu far' : 'Improving kitchen or bar areas',
                isWelsh ? 'Ychwanegu raciau beic neu storfa' : 'Adding bike racks or storage',
                isWelsh ? 'Gwneud eich gofod yn fwy hygyrch (gyda rampiau neu lifftiau)' : 'Making your space more accessible (with ramps or lifts)',
                isWelsh ? 'Trwsio ffensys, neu ychwanegu standiau a seddi' : 'Fixing fences, or adding stands and seating',
                isWelsh ? 'Prynu sgorfyrddau neu offer fideo' : 'Buying scoreboards or video equipment',
                isWelsh ? 'Offer cynnal a chadw caeau' : 'Pitch maintenance tools',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1E3A5F] flex-shrink-0 mt-2.5"></div>
                  <span className="text-lg text-[#334155]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-[#334155] mb-12">
              {isWelsh
                ? 'Os ydych yn chwilio am gyllid ar gyfer offer chwaraeon neu gyrsiau hyfforddi, rhowch gynnig ar '
                : 'If you are looking for funding for sports equipment or coaching courses, try the '}
              <Link href="/funding/be-active-wales" className="text-[#1E3A5F] underline hover:no-underline">
                {isWelsh ? 'Cronfa Cymru Actif.' : 'Be Active Wales Fund.'}
              </Link>
            </p>

            {/* Who can apply? */}
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Pwy all wneud cais?' : 'Who can apply?'}
            </h2>
            <p className="text-lg text-[#334155] mb-4">
              {isWelsh ? 'Gallwch wneud cais os:' : 'You can apply if:'}
            </p>
            <ul className="space-y-2 mb-4">
              {[
                isWelsh ? 'Rydych yn glwb chwaraeon dielw neu grŵp cymunedol' : 'You are a not-for-profit sports club or community group',
                isWelsh ? 'Mae eich clwb wedi\'i leoli yng Nghymru, ac yn fuddiol i bobl sy\'n byw yng Nghymru' : 'Your club is based in Wales, and benefits people living in Wales',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#B91C3C] flex-shrink-0 mt-2.5"></div>
                  <span className="text-lg text-[#334155]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-[#334155] mb-12">
              {isWelsh ? 'Gwelwch ' : 'See '}
              <a href="https://www.crowdfunder.co.uk/funds/a-place-for-sport" target="_blank" rel="noopener noreferrer" className="text-[#1E3A5F] underline hover:no-underline">
                {isWelsh ? 'fanylion cymhwysedd llawn' : 'full eligibility details'}
              </a>
              {isWelsh ? ' ar Crowdfunder.' : ' on Crowdfunder.'}
            </p>

            {/* What do you need to receive money from Sport Wales? */}
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Beth sydd ei angen arnoch i dderbyn arian gan Chwaraeon Cymru?' : 'What do you need to receive money from Sport Wales?'}
            </h2>
            <p className="text-lg text-[#334155] mb-4">
              {isWelsh ? 'I dderbyn arian gan Chwaraeon Cymru, rhaid i chi:' : 'To receive money from Sport Wales, you must:'}
            </p>
            <ul className="space-y-2 mb-6">
              {[
                isWelsh ? 'Codi o leiaf 25% o\'ch targed cyfan.' : 'Raise at least 25% of your total target.',
                isWelsh ? 'Cael rhoddion gan nifer lleiaf o gefnogwyr gwahanol. (Mae\'r nifer hwn yn dibynnu ar eich targed.)' : 'Get donations from a minimum number of different supporters. (This number depends on your target.)',
                isWelsh ? 'Cyrraedd eich targed cyfan erbyn dyddiad cau penodol.' : 'Reach your target total by a set deadline.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1E3A5F] flex-shrink-0 mt-2.5"></div>
                  <span className="text-lg text-[#334155]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-[#334155] mb-12">
              {isWelsh ? 'Defnyddiwch y ' : 'Use the '}
              <a href="https://www.crowdfunder.co.uk/funds/a-place-for-sport" target="_blank" rel="noopener noreferrer" className="text-[#1E3A5F] underline hover:no-underline">
                {isWelsh ? 'Cyfrifiannell Crowdfunder' : 'Crowdfunder Calculator'}
              </a>
              {isWelsh ? ' i weld faint sydd angen i chi ei godi a faint o bobl sydd angen rhoi.' : ' to see how much you need to raise and how many people need to donate.'}
            </p>
          </div>
        </div>
      </section>

      {/* Crowdfunder Calculator CTA */}
      <section className="py-12 bg-[#1E3A5F]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://www.crowdfunder.co.uk/funds/a-place-for-sport"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-4 px-8 rounded-full bg-white text-[#1E3A5F] font-semibold hover:bg-[#F8FAFC] transition-colors"
            >
              {isWelsh ? 'Cyfrifiannell Crowdfunder' : 'Crowdfunder Calculator'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Sut i Wneud Cais' : 'How to Apply'}
            </h2>

            {/* Step 1 */}
            <div className="mb-8">
              <p className="text-xl font-bold text-[#0F172A] mb-2">
                {isWelsh ? 'Cam 1: Llenwch y Ffurflen Mynegiant o Ddiddordeb' : 'Step 1: Fill in the Expression of Interest Form'}
              </p>
              <p className="text-lg text-[#334155]">
                {isWelsh
                  ? 'Dywedwch wrthym am eich prosiect trwy gwblhau\'r ffurflen ar-lein.'
                  : 'Tell us about your project by completing the online form.'}
              </p>
            </div>

            {/* Step 2 */}
            <div className="mb-8">
              <p className="text-xl font-bold text-[#0F172A] mb-2">
                {isWelsh ? 'Cam 2: Aros am Ymateb' : 'Step 2: Wait for a Response'}
              </p>
              <p className="text-lg text-[#334155]">
                {isWelsh
                  ? 'Ein nod yw ymateb o fewn 2 ddiwrnod gwaith.'
                  : 'We aim to reply within 2 working days.'}
              </p>
            </div>

            {/* Step 3 */}
            <div className="mb-8">
              <p className="text-xl font-bold text-[#0F172A] mb-2">
                {isWelsh ? 'Cam 3: Creu eich tudalen Crowdfunder' : 'Step 3: Create your Crowdfunder page'}
              </p>
              <p className="text-lg text-[#334155] mb-4">
                {isWelsh
                  ? 'Byddwch yn cael gwahoddiad i greu tudalen Crowdfunder sy\'n cynnwys:'
                  : 'You\'ll be invited to create a Crowdfunder page that includes:'}
              </p>
              <ul className="space-y-2">
                {[
                  isWelsh ? 'Disgrifiad byr o\'r prosiect' : 'A short description of the project',
                  isWelsh ? 'Fideo syml' : 'A simple video',
                  isWelsh ? 'Lluniau' : 'Photos',
                  isWelsh ? 'Gwobrau i gefnogwyr' : 'Rewards for supporters',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1E3A5F] flex-shrink-0 mt-2.5"></div>
                    <span className="text-lg text-[#334155]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 4 */}
            <div className="mb-8">
              <p className="text-xl font-bold text-[#0F172A] mb-2">
                {isWelsh ? 'Cam 4: Dechrau codi arian' : 'Step 4: Start fundraising'}
              </p>
              <ul className="space-y-2">
                {[
                  isWelsh ? 'Rhannwch ef yn eich cymuned leol' : 'Share it in your local community',
                  isWelsh ? 'Postiwch ar y cyfryngau cymdeithasol' : 'Post on social media',
                  isWelsh ? 'Cynnal digwyddiadau, gemau neu weithgareddau eraill' : 'Host events, matches or other activities',
                  isWelsh ? 'Gofynnwch i bobl roi a lledaenu\'r gair' : 'Ask people to donate and spread the word',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1E3A5F] flex-shrink-0 mt-2.5"></div>
                    <span className="text-lg text-[#334155]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-lg text-[#334155] mb-12">
              <a href="https://www.sport.wales/content-vault/how-to-apply-for-a-place-for-sport-x-crowdfunder/" target="_blank" rel="noopener noreferrer" className="text-[#1E3A5F] underline hover:no-underline">
                {isWelsh ? 'Dyma ganllaw cam wrth gam defnyddiol i\'ch helpu i wneud cais.' : 'Here\'s a handy step-by-step guide to help you apply.'}
              </a>
            </p>

            {/* How funding is awarded */}
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Sut mae cyllid yn cael ei ddyfarnu' : 'How funding is awarded'}
            </h2>
            <p className="text-lg text-[#334155] mb-4">
              {isWelsh
                ? 'Unwaith y byddwch yn cyrraedd eich nod cyllid a tharged cefnogwyr y cytunwyd arno, gallai Chwaraeon Cymru roi:'
                : 'Once you meet your agreed funding goal and supporters target, Sport Wales could give:'}
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#1E3A5F] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">
                  {isWelsh
                    ? '50% o\'ch cyfanswm – os yw eich prosiect yn debygol o lwyddo ar Crowdfunder'
                    : '50% of your total – if your project is likely to succeed on Crowdfunder'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#1E3A5F] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">
                  {isWelsh
                    ? '60% o\'ch cyfanswm – os yw eich prosiect yn targedu grwpiau sydd heb gynrychiolaeth ddigonol neu mewn ardal o amddifadedd uchel (yn seiliedig ar Fynegai Amddifadedd Lluosog Cymru – MALlC)'
                    : '60% of your total – if your project targets under-represented groups or is in a high-deprivation area (based on the '}
                  {!isWelsh && (
                    <a href="https://statswales.gov.wales/Catalogue/Community-Safety-and-Social-Inclusion/Welsh-Index-of-Multiple-Deprivation" target="_blank" rel="noopener noreferrer" className="text-[#1E3A5F] underline hover:no-underline">
                      Welsh Index of Multiple Deprivation
                    </a>
                  )}
                  {!isWelsh && ' – WIMD)'}
                </span>
              </li>
            </ul>
            <p className="text-lg text-[#334155] font-semibold">
              {isWelsh
                ? 'Pwysig: Bydd angen i chi fodloni\'r holl amodau a nodir gan Chwaraeon Cymru, megis targedau codi arian a nifer y cefnogwyr, i dderbyn arian o Lle i Chwaraeon.'
                : 'Important: You will need to meet all conditions set out by Sport Wales, such as fundraising targets and number of supporters, to receive money from A Place for Sport.'}
            </p>
          </div>
        </div>
      </section>

      {/* Expression of Interest CTA */}
      <section className="py-12 bg-[#1E3A5F]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://www.sport.wales/grants-and-funding/crowdfunder/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-4 px-8 rounded-full bg-white text-[#1E3A5F] font-semibold hover:bg-[#F8FAFC] transition-colors"
            >
              {isWelsh ? 'Llenwch Ffurflen Mynegiant o Ddiddordeb' : 'Fill out Expression of Interest Form'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Angen help?' : 'Need help?'}
            </h2>
            <p className="text-lg text-[#334155] mb-6">
              {isWelsh
                ? 'Rydym yma i\'ch cefnogi. Os oes gennych gwestiynau neu os oes angen help:'
                : 'We\'re here to support you. If you have questions or need help:'}
            </p>
            <div className="space-y-4 mb-6">
              <p className="text-lg text-[#334155]">
                <strong>{isWelsh ? 'E-bost:' : 'Email:'}</strong>{' '}
                <a href="mailto:aplaceforsport@sport.wales" className="text-[#1E3A5F] hover:underline">
                  aplaceforsport@sport.wales
                </a>
              </p>
              <p className="text-lg text-[#334155]">
                <strong>{isWelsh ? 'Ffôn:' : 'Phone:'}</strong>{' '}
                <a href="tel:03003003102" className="text-[#1E3A5F] hover:underline">
                  0300 300 3102
                </a>
                {' '}
                {isWelsh ? '(Dyddiau\'r wythnos: 10am – 12:30pm a 1:15pm – 4pm)' : '(Weekdays: 10am – 12:30pm and 1:15pm – 4pm)'}
              </p>
            </div>
            <p className="text-lg text-[#334155] mb-12">
              {isWelsh
                ? 'Os nad ydym ar gael, gallwch adael neges neu geisio eto yn ddiweddarach.'
                : 'If we\'re unavailable, you can leave a message or try again later.'}
            </p>

            {/* Useful links */}
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Dolenni defnyddiol' : 'Useful links'}
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#1E3A5F] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">
                  {isWelsh ? 'Gwyliwch y ' : 'Watch the '}
                  <a href="https://www.youtube.com/watch?v=example" target="_blank" rel="noopener noreferrer" className="text-[#1E3A5F] underline hover:no-underline">
                    {isWelsh ? 'weminar am brosiect Lle i Chwaraeon Holywell Town FC' : 'webinar about Holywell Town FC\'s A Place for Sport project'}
                  </a>
                  .
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#1E3A5F] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">
                  {isWelsh ? 'Ewch i\'r ' : 'Visit the '}
                  <a href="https://help.crowdfunder.co.uk/" target="_blank" rel="noopener noreferrer" className="text-[#1E3A5F] underline hover:no-underline">
                    {isWelsh ? 'Canolfan Gymorth Crowdfunder' : 'Crowdfunder Help Centre'}
                  </a>
                  {isWelsh ? ' ar-lein 24/7' : ' online 24/7'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#1E3A5F] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">
                  {isWelsh ? 'Darllenwch y ' : 'Read the '}
                  <a href="https://help.crowdfunder.co.uk/hc/en-us/categories/360001180418-Creating-a-Project" target="_blank" rel="noopener noreferrer" className="text-[#1E3A5F] underline hover:no-underline">
                    {isWelsh ? 'canllawiau ar sut i greu a hyrwyddo prosiect Crowdfunder' : 'guides on how to create and promote a Crowdfunder project'}
                  </a>
                </span>
              </li>
            </ul>
            <p className="text-lg text-[#334155]">
              <a href="https://www.sport.wales/grants-and-funding/crowdfunder/" target="_blank" rel="noopener noreferrer" className="text-[#1E3A5F] underline hover:no-underline font-semibold">
                {isWelsh ? 'Llenwch y Ffurflen Mynegiant o Ddiddordeb' : 'Fill out the Expression of Interest Form'}
              </a>
              {isWelsh ? ' i ddechrau eich cais heddiw' : ' to start your application today'}
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { name: 'Bala Golf Youth Club' },
              { name: 'Beechwood Bowls Club - Irrigation System' },
              { name: 'Crickhowell FC - Development Fund' },
            ].map((story, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-[#E2E8F0] rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-[#94A3B8]">{isWelsh ? 'Delwedd' : 'Image'}</span>
                </div>
                <h3 className="text-lg font-display font-bold text-[#0F172A] group-hover:text-[#1E3A5F] transition-colors">
                  {story.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="group p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3 group-hover:text-[#1E3A5F] transition-colors">
                {isWelsh 
                  ? 'Sut i wneud cais am Lle i Chwaraeon x Crowdfunder'
                  : 'How to apply for A Place for Sport x Crowdfunder'}
              </h3>
              <p className="text-[#64748B] mb-4">
                {isWelsh
                  ? 'Dyma ein canllaw cam wrth gam ar gyfer sut i wneud cais a...'
                  : 'Here\'s our step-by-step guide for how to apply and...'}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[#1E3A5F] font-semibold hover:gap-3 transition-all">
                {isWelsh ? 'Darllen Mwy' : 'Read More'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="group p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3 group-hover:text-[#1E3A5F] transition-colors">
                {isWelsh 
                  ? 'Crowdfunder - Cwestiynau Cyffredin'
                  : 'Crowdfunder - FAQ\'s'}
              </h3>
              <p className="text-[#64748B] mb-4">
                {isWelsh
                  ? 'Dyma\'r atebion i gwestiynau cyffredin...'
                  : 'Here are the answers to frequently asked questions...'}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[#1E3A5F] font-semibold hover:gap-3 transition-all">
                {isWelsh ? 'Darllen Mwy' : 'Read More'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Funds */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <h2 className="text-2xl font-display font-bold text-[#0F172A] mb-8">
            {isWelsh ? 'Ein Cronfeydd Eraill' : 'Our Other Funds'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href="/funding/be-active-wales"
              className="group block p-6 rounded-2xl bg-[#DC2626] hover:bg-[#B91C3C] transition-colors"
            >
              <h3 className="text-xl font-display font-bold !text-white mb-3">
                {isWelsh ? 'Cronfa Cymru Actif' : 'Be Active Wales Fund'}
              </h3>
              <p className="text-white/80 mb-4">
                {isWelsh
                  ? 'Grantiau hyd at £50,000 ar gyfer offer neu gyrsiau hyfforddi'
                  : 'Grants up to £50,000 for equipment or coaching courses'}
              </p>
              <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                {isWelsh ? 'Darllen Mwy' : 'Read More'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link 
              href="/funding/energy-saving-grant"
              className="group block p-6 rounded-2xl bg-[#F59E0B] hover:bg-[#D97706] transition-colors"
            >
              <h3 className="text-xl font-display font-bold !text-white mb-3">
                {isWelsh ? 'Grant Arbed Ynni' : 'Energy Saving Grant'}
              </h3>
              <p className="text-white/80 mb-4">
                {isWelsh
                  ? 'Grantiau hyd at £25,000 ar gyfer gwelliannau arbed ynni'
                  : 'Grants up to £25,000 for energy-saving improvements'}
              </p>
              <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                {isWelsh ? 'Darllen Mwy' : 'Read More'}
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
