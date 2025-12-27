import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Gweledigaeth ar gyfer Chwaraeon' : 'Vision for Sport';
  const description = isWelsh
    ? 'Cenedl actif lle gall pawb fwynhau chwaraeon gydol oes.'
    : 'An active nation where everyone can have a lifelong enjoyment of sport.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/vision`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/vision`,
      languages: {
        'en': '/en/vision',
        'cy': '/cy/vision',
      },
    },
  };
}

export default async function VisionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Gweledigaeth ar gyfer Chwaraeon' : 'Vision for Sport', url: `https://www.sport.wales/${locale}/vision` },
  ];

  const visionPillars = [
    {
      title: isWelsh ? 'Cenedl Actif' : 'Active Nation',
      description: isWelsh
        ? 'Y weledigaeth yw creu cenedl actif. Rydym am i gymaint o bobl â phosibl gael eu hysbrydoli i fod yn actif trwy chwaraeon.'
        : 'The vision is to create an active nation. We want as many people as possible to be inspired to be active through sport.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      ),
    },
    {
      title: isWelsh ? 'Pawb' : 'Everyone',
      description: isWelsh
        ? 'Mae\'r weledigaeth ar gyfer pawb. O bobl nad ydynt yn gweld eu hunain yn chwaraeon i bobl sy\'n ennill medalau, o bob cymuned yng Nghymru.'
        : 'The vision is for everyone. From people who don\'t see themselves as sporty to people who win medals, from every community in Wales.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: isWelsh ? 'Gydol Oes' : 'Lifelong',
      description: isWelsh
        ? 'Mae\'r weledigaeth ar gyfer oes, mae\'n ymateb i anghenion pobl ar wahanol gyfnodau o\'u bywyd.'
        : 'The vision is for life, it responds to the needs of people at different stages of their life.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: isWelsh ? 'Mwynhad' : 'Enjoyment',
      description: isWelsh
        ? 'Mae\'r weledigaeth yn canolbwyntio ar greu ystod eang o brofiadau cadarnhaol fel y gall pawb fwynhau chwaraeon.'
        : 'The vision focuses on creating a wide range of positive experiences so everyone can enjoy sport.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
    },
  ];

  const wellbeingGoals = [
    {
      number: 1,
      title: isWelsh ? 'Cymru Lewyrchus' : 'A Prosperous Wales',
      color: 'bg-[#B91C3C]',
    },
    {
      number: 2,
      title: isWelsh ? 'Cymru Gydnerth' : 'A Resilient Wales',
      color: 'bg-[#B91C3C]',
    },
    {
      number: 3,
      title: isWelsh ? 'Cymru Iachach' : 'A Healthier Wales',
      color: 'bg-[#F59E0B]',
    },
    {
      number: 4,
      title: isWelsh ? 'Cymru Fwy Cyfartal' : 'A More Equal Wales',
      color: 'bg-[#B91C3C]',
    },
    {
      number: 5,
      title: isWelsh ? 'Cymru o Gymunedau Cydlynus' : 'A Wales of Cohesive Communities',
      color: 'bg-[#B91C3C]',
    },
    {
      number: 6,
      title: isWelsh ? 'Cymru â Diwylliant Bywiog a\'r Gymraeg yn Ffynnu' : 'A Wales of Vibrant Culture and Thriving Welsh Language',
      color: 'bg-[#B91C3C]',
    },
    {
      number: 7,
      title: isWelsh ? 'Cymru sy\'n Gyfrifol yn Fyd-eang' : 'A Globally Responsible Wales',
      color: 'bg-[#B91C3C]',
    },
  ];

  const participationTypes = [
    {
      title: isWelsh ? 'Cymryd Rhan' : 'Participate',
      subtitle: isWelsh ? 'Bod yn gyfranogwr' : 'Being a participant',
      description: isWelsh ? 'Unrhyw un sy\'n cymryd rhan, ar ba bynnag lefel.' : 'Anyone who takes part, at whatever level.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      ),
    },
    {
      title: isWelsh ? 'Cefnogi' : 'Support',
      subtitle: isWelsh ? 'Bod yn gefnogwr neu riant' : 'Being a fan or a parent',
      description: isWelsh ? 'Unrhyw un sy\'n helpu drwy fod yno, cyfrannu amser, egni ac ymdrech.' : 'Anyone who helps by being there, contributing time, energy and effort.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: isWelsh ? 'Cyflawni' : 'Deliver',
      subtitle: isWelsh ? 'Bod yn wirfoddolwr neu hyfforddwr' : 'Being a volunteer or coach',
      description: isWelsh ? 'Unrhyw un sy\'n helpu drwy greu cyfleoedd i eraill.' : 'Anyone who helps by creating opportunities for others.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: isWelsh ? 'Llwyddo' : 'Succeed',
      subtitle: isWelsh ? 'Bod y gorau y gallwch fod' : 'Being the best you can be',
      description: isWelsh ? 'Unrhyw un sy\'n cyflawni llwyddiant personol.' : 'Anyone who achieves personal success.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
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
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              {isWelsh ? 'Gweledigaeth ar gyfer Chwaraeon' : 'Vision for Sport'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Gweledigaeth ar gyfer Chwaraeon' : 'Vision for Sport'}
            </h1>
            <p className="text-2xl md:text-3xl text-[#B91C3C] font-display font-bold mb-6">
              {isWelsh
                ? 'Cenedl actif lle gall pawb fwynhau chwaraeon gydol oes.'
                : 'An active nation where everyone can have a lifelong enjoyment of sport.'}
            </p>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              {isWelsh
                ? 'Mae\'r Weledigaeth ar gyfer Chwaraeon yn ceisio trawsnewid Cymru yn genedl actif yn dilyn sgyrsiau â phobl o bob rhan o\'r wlad.'
                : 'The Vision for Sport seeks to transform Wales into an active nation following conversations with individuals from every part of the country.'}
            </p>
            <p className="text-lg text-white/70 font-medium">
              {isWelsh
                ? 'Darganfyddwch am y Weledigaeth ar gyfer Chwaraeon a sut y gall gyfrannu at ddyfodol Cymru'
                : 'Find out about the Vision for Sport and how it can contribute to the future of Wales'}
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

      {/* What is the Vision */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Beth yw\'r Weledigaeth ar gyfer Chwaraeon?' : 'What is the Vision for Sport?'}
            </h2>
            <p className="text-xl text-[#64748B]">
              {isWelsh
                ? 'Cenedl actif lle gall pawb fwynhau chwaraeon gydol oes.'
                : 'An active nation where everyone can have a lifelong enjoyment of sport.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {visionPillars.map((pillar, index) => (
              <div
                key={index}
                className="p-6 lg:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#B91C3C] flex items-center justify-center text-white mx-auto mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[#64748B] text-sm">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Beth yw\'r genhadaeth?' : 'What is the mission?'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold !text-white">
              {isWelsh
                ? 'Drwy wneud hyn gallwn ryddhau buddion chwaraeon i bawb.'
                : 'By doing this we can unleash the benefits of sport for everyone.'}
            </h2>
          </div>
        </div>
      </section>

      {/* 7 Wellbeing Goals */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Y 7 nod llesiant' : 'The 7 wellbeing goals'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {wellbeingGoals.map((goal, index) => (
              <div
                key={index}
                className={`${goal.color} rounded-2xl p-6 text-white ${index === 6 ? 'lg:col-start-2' : ''}`}
              >
                <div className="text-4xl font-bold mb-2">#{goal.number}</div>
                <h3 className="text-lg font-display font-bold">
                  {goal.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* You and the Vision */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Chi a\'r Weledigaeth' : 'You and the Vision'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Mae mwy nag un ffordd o fod yn rhan o\'r Weledigaeth.'
                : 'There\'s more than one way to be a part of the Vision.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {participationTypes.map((type, index) => (
              <div
                key={index}
                className="p-6 lg:p-8 rounded-2xl bg-white border border-[#E2E8F0] text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#B91C3C]/10 flex items-center justify-center text-[#B91C3C] mx-auto mb-6">
                  {type.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-1">
                  {type.title}
                </h3>
                <p className="text-[#B91C3C] font-semibold text-sm mb-3">
                  {type.subtitle}
                </p>
                <p className="text-[#64748B] text-sm">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achieving the Vision */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh ? 'Cyflawni\'r Weledigaeth' : 'Achieving the Vision'}
              </h2>
              <p className="text-lg text-[#64748B] mb-6">
                {isWelsh ? 'Bydd cyflawni hyn yn golygu y gallwn...' : 'Achieving this will mean we can…'}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2.5 bg-[#B91C3C] rounded-full flex-shrink-0"></span>
                  <span className="text-[#64748B]">
                    {isWelsh
                      ? 'Gwella llesiant, hunanhyder a chymhelliant pobl i gymryd rhan a llwyddo drwy weithgareddau sy\'n hwyl ac yn gynaliadwy.'
                      : 'Improve people\'s well-being, self-confidence and motivation to participate and succeed through activities that are fun and sustainable.'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2.5 bg-[#B91C3C] rounded-full flex-shrink-0"></span>
                  <span className="text-[#64748B]">
                    {isWelsh
                      ? 'Rhoi\'r sgiliau i bobl gyrraedd eu potensial a chyflawni eu nodau.'
                      : 'Provide people with the skills to reach their potential and achieve their goals.'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2.5 bg-[#B91C3C] rounded-full flex-shrink-0"></span>
                  <span className="text-[#64748B]">
                    {isWelsh
                      ? 'Cefnogi cymunedau i ffynnu a bod yn fwy cysylltiedig drwy greu cyfleoedd i bawb ymuno.'
                      : 'Support communities to flourish and be better connected by creating opportunities for everyone to join in.'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2.5 bg-[#B91C3C] rounded-full flex-shrink-0"></span>
                  <span className="text-[#64748B]">
                    {isWelsh
                      ? 'Hyrwyddo Cymru i\'r byd drwy ein rhagoriaeth chwaraeon.'
                      : 'Promote Wales to the world through our sporting excellence.'}
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-lg text-[#64748B] mb-6">
                {isWelsh ? 'Byddwn yn gweithio yn y ffordd orau bosibl i...' : 'We will work in the best way possible to…'}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2.5 bg-[#B91C3C] rounded-full flex-shrink-0"></span>
                  <span className="text-[#64748B]">
                    {isWelsh
                      ? 'Gweithio, buddsoddi, dysgu a llwyddo gyda\'n gilydd.'
                      : 'Work, invest, learn and succeed together.'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2.5 bg-[#B91C3C] rounded-full flex-shrink-0"></span>
                  <span className="text-[#64748B]">
                    {isWelsh
                      ? 'Creu profiadau sy\'n groesawgar, yn hwyl ac yn ddiogel.'
                      : 'Create experiences that are welcoming, fun and safe.'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2.5 bg-[#B91C3C] rounded-full flex-shrink-0"></span>
                  <span className="text-[#64748B]">
                    {isWelsh
                      ? 'Datblygu cyfleoedd sy\'n lleol, yn weladwy ac yn ysbrydoledig.'
                      : 'Develop opportunities that are local, visible and inspiring.'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2.5 bg-[#B91C3C] rounded-full flex-shrink-0"></span>
                  <span className="text-[#64748B]">
                    {isWelsh
                      ? 'Sicrhau bod chwaraeon yn hygyrch, yn gynhwysol ac yn fforddiadwy, heb adael neb ar ôl.'
                      : 'Ensure that sport is accessible, inclusive and affordable, leaving no one behind.'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Together We Can */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Gyda\'n gilydd gallwn' : 'Together we can'}
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              {isWelsh
                ? 'Mae\'r Weledigaeth hon ar gyfer Chwaraeon yn perthyn i, ac angen cefnogaeth, pawb yng Nghymru i sicrhau ei llwyddiant. O\'r rhai sy\'n ymwneud yn uniongyrchol â chwaraeon i eraill sy\'n helpu i ddarparu gwasanaethau cyhoeddus fel iechyd, addysg, adnoddau naturiol a datblygiad economaidd.'
                : 'This Vision for Sport belongs to and needs the support of everyone in Wales to ensure its success. From those directly involved in sport to others helping deliver public services such as health, education, natural resources and economic development.'}
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              {isWelsh
                ? 'Os ydych chi\'n gwneud gwaith cymunedol, yn magu teulu neu\'n rhedeg busnes – gallwn ni i gyd rannu\'r weledigaeth hon a chwarae ein rhan.'
                : 'If you carry out community work, raise a family or run a business – we can all share this vision and play our part.'}
            </p>
            <p className="text-xl text-[#B91C3C] font-semibold">
              {isWelsh
                ? 'Drwy ddod at ein gilydd, gall pobl o bob oed a phob cymuned ryddhau buddion chwaraeon i bawb.'
                : 'By coming together, people of all ages and all communities can unleash the benefits of sport for everyone.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

