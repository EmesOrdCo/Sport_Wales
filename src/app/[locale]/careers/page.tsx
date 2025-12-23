import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Gyrfaoedd' : 'Careers';
  const description = isWelsh
    ? 'Ymunwch â Chwaraeon Cymru. Darganfyddwch gyfleoedd gyrfa cyffrous a helpwch ni i wneud Cymru\'n genedl fwy actif.'
    : 'Join Sport Wales. Discover exciting career opportunities and help us make Wales a more active nation.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/careers`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/careers`,
      languages: {
        'en': '/en/careers',
        'cy': '/cy/careers',
      },
    },
  };
}

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Gyrfaoedd' : 'Careers', url: `https://www.sport.wales/${locale}/careers` },
  ];

  const benefits = [
    {
      title: isWelsh ? '33 Diwrnod o Wyliau' : '33 Days Annual Leave',
      description: isWelsh ? '33 diwrnod o wyliau blynyddol' : '33 days annual leave',
    },
    {
      title: isWelsh ? 'Prynu Diwrnodau Ychwanegol' : 'Purchase Additional Days',
      description: isWelsh ? 'Opsiwn i brynu 5 diwrnod ychwanegol y flwyddyn' : 'Option to purchase 5 additional days per year',
    },
    {
      title: isWelsh ? 'Gweithio Hyblyg' : 'Flexible Working',
      description: isWelsh ? 'Cyfleoedd gweithio hyblyg, gan gynnwys amser hyblyg (lle bo hynny\'n berthnasol)' : 'Flexible working opportunities, including flexi-time (where applicable)',
    },
    {
      title: isWelsh ? 'Cynllun Pensiwn' : 'Pension Scheme',
      description: isWelsh ? 'Cynllun Pensiwn Llywodraeth Leol neu Scottish Widows' : 'Local Government or Scottish Widows Pension Scheme',
    },
    {
      title: isWelsh ? 'Dysgu a Datblygu' : 'Learning & Development',
      description: isWelsh ? 'Cyfleoedd dysgu a datblygu cynhwysfawr' : 'Comprehensive learning and development opportunities',
    },
    {
      title: isWelsh ? 'Defnyddio\'r Gampfa' : 'On-site Gym',
      description: isWelsh ? 'Defnyddio\'r gym ar y safle yn y Ganolfan Genedlaethol yng Nghaerdydd' : 'Use of on-site gym at the National Centre in Cardiff',
    },
    {
      title: isWelsh ? 'Rhaglen Gymorth i Weithwyr' : 'Employee Assistance',
      description: isWelsh ? 'Rhaglen Gymorth i Weithwyr (Cwnsela)' : 'Employee Assistance (Counselling) Programme',
    },
    {
      title: isWelsh ? 'Aelodaeth Clwb Chwaraeon' : 'Sport & Leisure Club',
      description: isWelsh ? 'Aelodaeth Clwb Chwaraeon a Hamdden Gwasanaeth Sifil' : 'Civil Service Sport & Leisure Club Membership',
    },
    {
      title: isWelsh ? 'Cynllun Beicio i\'r Gwaith' : 'Cycle to Work',
      description: isWelsh ? 'Cynllun Beicio i\'r Gwaith' : 'Cycle to Work Scheme',
    },
    {
      title: isWelsh ? 'Parcio a Sied Beiciau' : 'Parking & Bike Shed',
      description: isWelsh ? 'Maes parcio a sied beiciau am ddim' : 'Free car park and bike shed',
    },
  ];

  const behaviours = [
    {
      title: isWelsh ? 'Dysgu Gyda\'n Gilydd' : 'Learn Together',
      description: isWelsh ? 'Archwilio, profi ac adolygu\'n gyson.' : 'Constantly exploring, testing and reviewing.',
    },
    {
      title: isWelsh ? 'Cyflawni Gyda\'n Gilydd' : 'Deliver Together',
      description: isWelsh ? 'Rhannu canlyniadau, meithrin perthnasoedd agored a gonest, darparu adborth cadarn, gwella perfformiad yn gyson.' : 'Sharing outcomes, nurturing open and honest relationships, providing robust feedback, constantly improving performance.',
    },
    {
      title: isWelsh ? 'Dathlu Gyda\'n Gilydd' : 'Celebrate Together',
      description: isWelsh ? 'Cydnabod ein llwyddiannau cyfun trwy bartneriaethau effeithiol.' : 'Recognising our shared successes through effective partnerships.',
    },
    {
      title: isWelsh ? 'Gweithredu gydag Uniondeb' : 'Acting with Integrity',
      description: isWelsh ? 'Deall a pharchu diwylliant a gwerthoedd ein gilydd. Hyrwyddo cydraddoldeb ac amrywiaeth.' : 'Understanding and respecting each other\'s culture and values. Promoting equality and diversity.',
    },
    {
      title: isWelsh ? 'Ychwanegu Gwerth' : 'Adding Value',
      description: isWelsh ? 'Sicrhau\'r cymysgedd optimwm o gefnogaeth, her, buddsoddiad, sgiliau ac arbenigedd i gyflawni ein canlyniadau cyfun.' : 'Ensuring the optimum mix of support, challenge, investment, skills and expertise to achieve our shared outcomes.',
    },
    {
      title: isWelsh ? 'Annog Arloesi' : 'Encouraging Innovation',
      description: isWelsh ? 'Croesawu syniadau a dulliau newydd a chefnogi uchelgais a meddwl ffres. Peidio ag ofni teimlo\'n anghyfforddus.' : 'Welcoming new ideas and approaches and supporting ambition and fresh thinking. Not being afraid to feel uncomfortable.',
    },
  ];

  const values = [
    {
      title: isWelsh ? 'Angerdd' : 'Passion',
      description: isWelsh
        ? 'Rydym yn angerddol am chwaraeon ac am wneud gwahaniaeth i fywydau pobl.'
        : 'We are passionate about sport and making a difference to people\'s lives.',
    },
    {
      title: isWelsh ? 'Cydweithio' : 'Collaboration',
      description: isWelsh
        ? 'Rydym yn gweithio gyda\'n gilydd ac mewn partneriaeth ag eraill i gyflawni ein nodau.'
        : 'We work together and in partnership with others to achieve our goals.',
    },
    {
      title: isWelsh ? 'Rhagoriaeth' : 'Excellence',
      description: isWelsh
        ? 'Rydym yn ymdrechu am ragoriaeth ym mhopeth a wnawn.'
        : 'We strive for excellence in everything we do.',
    },
    {
      title: isWelsh ? 'Cynhwysiant' : 'Inclusion',
      description: isWelsh
        ? 'Rydym wedi ymrwymo i sicrhau bod chwaraeon yn hygyrch i bawb.'
        : 'We are committed to making sport accessible to everyone.',
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center overflow-hidden bg-mesh bg-grid"
        aria-labelledby="careers-hero-heading"
      >
        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        
        {/* Animated gradient orbs - More red emphasis */}
        <div className="absolute top-10 -left-20 w-[500px] h-[500px] orb orb-crimson animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-10 right-0 w-[400px] h-[400px] orb orb-crimson animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 orb orb-amber animate-float" style={{ animationDelay: '1s' }}></div>

        {/* Content */}
        <div className="relative z-10 container pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <div className="stagger-children">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
                {isWelsh ? 'Gyrfaoedd' : 'Careers'}
              </div>

              {/* Headline */}
              <h1 
                id="careers-hero-heading"
                className="mb-6 lg:mb-8"
              >
                <span className="block text-white drop-shadow-lg">{isWelsh ? 'Ymunwch' : 'Join'}</span>
                <span className="block text-[#DC2626]">{isWelsh ? 'Ein Tîm' : 'Our Team'}</span>
              </h1>

              {/* Description */}
              <p className="text-lg lg:text-xl text-white/80 max-w-lg mb-8 lg:mb-10 leading-relaxed">
                {isWelsh
                  ? 'Helpwch ni i wneud Cymru\'n genedl fwy actif, iachach. Mae gennym tua 160 o staff ledled Cymru sy\'n gweithio i wireddu ein gweledigaeth.'
                  : 'Help us make Wales a more active, healthier nation. We have around 160 staff across Wales working to deliver our vision.'}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link href="/vacancies" className="btn btn-primary">
                  {isWelsh ? 'Gweld Swyddi Gwag' : 'View Vacancies'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/about" className="btn btn-ghost">
                  {isWelsh ? 'Amdanom Ni' : 'About Us'}
                </Link>
              </div>
            </div>

            {/* Right Column - CEO Quote Card */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Main Quote Card - Dark with red accents */}
                <div className="rounded-3xl p-8 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] border border-white/10 shadow-2xl">
                  {/* Quote/Mission Statement */}
                  <div>
                    <svg className="w-10 h-10 text-[#DC2626] mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <blockquote className="text-xl lg:text-2xl text-white font-display leading-relaxed mb-4">
                      {isWelsh
                        ? 'Yn Chwaraeon Cymru mae gennym ffocws ar bobl, dysgu a chyflawni. Rydym yn gwerthfawrogi ein pobl - eu hamrywiaeth a\'u profiadau gwahanol. Rydym yn croesawu syniadau newydd, gan ddysgu\'n gyson am bobl, cymunedau, technoleg a sefydliadau y gallwn weithio gyda nhw i alluogi chwaraeon yng Nghymru i ffynnu. Rydym yn falch o\'n gwaith, yn gwerthfawrogi ein staff a\'n hymrwymiad i genedlaethau\'r dyfodol yng Nghymru.'
                        : 'At Sport Wales we have a focus on people, learning and delivery. We value our people - their diversity and their different experiences. We welcome new ideas, constantly learning about people, communities, technology and organisations we can work with to enable sport in Wales to thrive. We take pride in our work, value our staff and our commitment to future generations of Wales.'}
                    </blockquote>
                    <p className="text-white/70 text-sm">
                      {isWelsh ? '— Brian Davies, Prif Weithredwr, Chwaraeon Cymru' : '— Brian Davies, Sport Wales CEO'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/50">
            <span className="text-xs uppercase tracking-widest">{isWelsh ? 'Sgroliwch' : 'Scroll'}</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce"></div>
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

      {/* Current Vacancies CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="rounded-3xl bg-gradient-to-br from-[#B91C3C] to-[#991B1B] p-8 lg:p-12 text-white overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl"></div>
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                  {isWelsh ? 'Swyddi Gwag Presennol' : 'Current Vacancies'}
                </h2>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  {isWelsh
                    ? 'Edrychwch ar ein swyddi gwag presennol a dewch o hyd i\'ch swydd ddelfrydol yn Chwaraeon Cymru.'
                    : 'Browse our current vacancies and find your ideal role at Sport Wales.'}
                </p>
                <Link
                  href="/vacancies"
                  className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-white text-[#B91C3C] font-semibold hover:bg-white/90 transition-colors"
                >
                  {isWelsh ? 'Gweld swyddi gwag' : 'View vacancies'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="text-center lg:text-right">
                <div className="inline-grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-3xl font-display font-bold mb-1">160+</div>
                    <p className="text-sm text-white/80">{isWelsh ? 'Staff' : 'Staff'}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-3xl font-display font-bold mb-1">3</div>
                    <p className="text-sm text-white/80">{isWelsh ? 'Swyddfeydd' : 'Offices'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#14B8A6] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Ein Gwerthoedd' : 'Our Values'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Beth Sy\'n Ein Gyrru' : 'What Drives Us'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Mae ein gwerthoedd yn sail i bopeth a wnawn ac yn diffinio sut rydym yn gweithio.'
                : 'Our values underpin everything we do and define how we work.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white border border-[#E2E8F0]">
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#64748B] text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Buddion' : 'Benefits'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Buddion yn Chwaraeon Cymru' : 'Benefits at Sport Wales'}
            </h2>
            <p className="text-lg text-[#64748B] mb-6">
              {isWelsh
                ? 'Mae gennym uchelgeisiau beiddgar ar gyfer chwaraeon yng Nghymru ac rydym yn gwybod y bydd ein pobl yn allweddol i\'w cyflawni. Dyna pam rydym yn darparu pecyn buddion amrywiol. Rydym yn gefnogwyr mawr o gydbwysedd bywyd gwaith ac rydym yn hyrwyddo hynny.'
                : 'We have bold ambitions for sport in Wales and we know that our people will be key to achieving them. That\'s why we provide a varied benefits package. We are big supporters of a work life balance and we promote that.'}
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B91C3C] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-display font-bold text-[#0F172A] mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-[#64748B] text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
            <p className="text-[#64748B] mb-4">
              {isWelsh
                ? 'Gallwch ddysgu mwy am ein polisi cyflog a buddion eraill yn ein llawlyfr staff. Mae ein graddfeydd cyflog ar gael i\'w gweld yma.'
                : 'You can find out more about our pay policy and other benefits in our staff handbook. Our pay scales are available to view here.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.sport.wales/staff-handbook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B91C3C] hover:underline font-medium"
              >
                {isWelsh ? 'Llawlyfr staff' : 'Staff handbook'}
              </a>
              <a
                href="https://www.sport.wales/pay-scales"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B91C3C] hover:underline font-medium"
              >
                {isWelsh ? 'Ein graddfeydd cyflog ar gael i\'w gweld yma' : 'Our pay scales are available to view here'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* More about our Recruitment Process */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Mwy am ein Broses Recriwtio' : 'More about our Recruitment Process'}
            </h2>

            {/* Our Strategy */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                {isWelsh ? 'Ein Strategaeth' : 'Our Strategy'}
              </h3>
              <p className="text-[#64748B] mb-4">
                {isWelsh
                  ? 'Rydym am wneud effaith sylweddol ledled Cymru. Mae Strategaeth Chwaraeon Cymru yn nodi sut y bydd Chwaraeon Cymru yn chwarae ei ran wrth wneud Gweledigaeth Chwaraeon yng Nghymru yn realiti. Rydym am i bawb fwynhau\'r buddion o chwaraeon.'
                  : 'We want to make a significant impact across Wales. The Sport Wales Strategy sets out how Sport Wales will play its part in making the Vision for Sport in Wales a reality. We want everyone to enjoy the benefits of sport.'}
              </p>
              <Link
                href="/about"
                className="text-[#B91C3C] hover:underline font-medium inline-flex items-center gap-2"
              >
                {isWelsh ? 'Gallwch weld ein strategaeth yma' : 'You can view our strategy here'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Training and Development */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                {isWelsh ? 'Hyfforddi a Datblygu' : 'Training and Development'}
              </h3>
              <p className="text-[#64748B]">
                {isWelsh
                  ? 'Mae Chwaraeon Cymru yn hyrwyddo dysgu a gwelliant parhaus yn gryf. Ar eich diwrnod cyntaf o waith, byddwch yn dechrau ar raglen sefydlu wedi\'i theilwra ac fe\'ch cynigir yr holl hyfforddiant hanfodol i\'ch helpu i lwyddo yn eich rôl.'
                  : 'Sport Wales strongly advocates continuous learning and improvement. On your very first day of work, you will embark on a tailored induction programme and will be offered all the essential training to get you started in your role.'}
              </p>
            </div>

            {/* Equality, Diversity & Inclusion */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                {isWelsh ? 'Cydraddoldeb, Amrywiaeth a Chynhwysiant' : 'Equality, Diversity & Inclusion'}
              </h3>
              <p className="text-[#64748B] mb-4">
                {isWelsh
                  ? 'Mae Cydraddoldeb, Amrywiaeth a Chynhwysiant wrth galon popeth a wnawn yn Chwaraeon Cymru. Er mwyn galluogi Chwaraeon yng Nghymru i ffynnu, mae\'n hanfodol bod ein gweithlu yn adlewyrchu\'r boblogaeth ehangach yn llawn.'
                  : 'Equality, Diversity & Inclusion is at the heart of everything we do at Sport Wales. To enable Sport in Wales to thrive, it\'s vital that our workforce is fully representative of the wider population.'}
              </p>
              <p className="text-[#64748B] mb-4">
                {isWelsh
                  ? 'Mae blaenoriaeth strategol allweddol yw amrywio ein gweithlu ymhellach. Mae pawb yn Chwaraeon Cymru yn dod â rhywbeth gwahanol, ac felly byddwch chi. Mae ein hymrwymiad i recriwtio a denu talent amrywiol yn ymestyn i bob rhan o\'n proses recriwtio.'
                  : 'A key strategic priority is to further diversify our workforce. Everyone at Sport Wales brings something different, and so will you. Our commitment to recruiting and attracting diverse talent extends to every part of our recruitment process.'}
              </p>
              <p className="text-[#64748B] mb-4">
                {isWelsh
                  ? 'Rydym yn gyflogwr Hyderus ar Anabledd sy\'n tanysgrifio i\'r cynllun cyfweliad gwarantedig. Rydym am eich cefnogi gydag addasiadau trwy ein proses i sicrhau y gallwch fod ar eich gorau. Gallai\'r rhain gynnwys addasiadau i\'r cyfweliad, amser estynedig, neu ddarparu offer penodol.'
                  : 'We are a Disability Confident employer subscribing to the guaranteed interview scheme. We want to support you with adjustments through our process to make sure you can be at your best. These could include adjustments to the interview, extended time, or providing specific equipment.'}
              </p>
              <p className="text-[#64748B] mb-4">
                {isWelsh
                  ? 'Rydym hefyd yn cydnabod y gall y "bwlch hyder" effeithio\'n andwyol ar amrywiaeth y ceiswyr y clywn oddi wrthynt. Mae ymchwil yn dangos bod dynion yn aml yn gwneud cais am swyddi hyd yn oed pan fyddant ond yn bodloni 60% o\'r meini prawf a restrir, tra bod menywod yn aml yn aros nes bodloni 100%. Rydym yn eich annog i wneud cais os ydych yn meddwl y gallwch wneud y rôl yn llwyddiannus.'
                  : 'We also recognise that the "confidence gap" may adversely impact the diversity of applicants we hear from. Research indicates that men often apply for jobs even where they only meet 60% of the listed criteria, while women often wait until they meet 100%. We encourage you to apply if you think you can do the role successfully.'}
              </p>
              <Link
                href="/governance"
                className="text-[#B91C3C] hover:underline font-medium inline-flex items-center gap-2"
              >
                {isWelsh ? 'Mae ein cynllun cydraddoldeb strategol yn amlinellu ein hymrwymiad i amrywiaeth a chynhwysiant a\'n hamcanion' : 'Our strategic equality plan outlines our commitment to diversity and inclusion and our objectives'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Behaviours */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh ? 'Ymddygiadau' : 'Behaviours'}
              </h3>
              <p className="text-[#64748B] mb-6">
                {isWelsh
                  ? 'Yn Chwaraeon Cymru, mae ein hymddygiadau yn rhan hanfodol o\'r ffordd rydym yn gweithio - mae\'r ffordd rydym yn cyflawni mor bwysig â\'r hyn rydym yn ei gyflawni. Mae gennym set o ymddygiadau cytunedig y disgwylir i ni eu harddangos.'
                  : 'At Sport Wales, our behaviours are a critical part of the way we work - the way we deliver is as important as what we deliver. We have an agreed set of behaviours that we expect to see demonstrated by everyone.'}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {behaviours.map((behaviour, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-white border border-[#E2E8F0]">
                    <h4 className="text-xl font-display font-bold text-[#0F172A] mb-2">
                      {behaviour.title}
                    </h4>
                    <p className="text-[#64748B] text-sm">
                      {behaviour.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Artificial Intelligence */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                {isWelsh ? 'Deallusrwydd Artiffisial' : 'Artificial Intelligence'}
              </h3>
              <p className="text-[#64748B] mb-4">
                {isWelsh
                  ? 'Gall offer Deallusrwydd Artiffisial (AI) fel Chat GPT, Copilot a Gemini fod o help mewn gwahanol gamau o wneud cais am swydd. Gallwch ddefnyddio AI fel offeryn i ymchwilio i Chwaraeon Cymru a\'r swydd rydych chi\'n gwneud cais amdani.'
                  : 'Artificial Intelligence (AI) tools such as Chat GPT, Copilot and Gemini, can be helpful in various stages of applying for a job. You could use AI as a tool to research Sport Wales and the job you\'re applying for.'}
              </p>
              <p className="text-[#64748B] font-semibold mb-2">
                {isWelsh ? 'Ni ddylech ddefnyddio offer AI i:' : 'You must not use AI tools to:'}
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#64748B] mb-4 ml-4">
                <li>{isWelsh ? 'Gorliwio cymwysterau' : 'Exaggerate qualifications'}</li>
                <li>{isWelsh ? 'Camgynrychioli eich profiad' : 'Misrepresent your experience'}</li>
                <li>{isWelsh ? 'Copïo a gludo ymatebion generig heb eu golygu' : 'Copy and paste generic responses without editing them'}</li>
              </ul>
              <p className="text-[#64748B]">
                {isWelsh
                  ? 'Yn Chwaraeon Cymru, gallwn ddefnyddio AI i gynhyrchu syniadau ar gyfer Hysbysebion Swyddi, Disgrifiadau Swyddi, asesiadau, a chwestiynau cyfweliad, ond ni fyddwn byth yn defnyddio offer AI i wneud penderfyniadau dewis neu recriwtio.'
                  : 'At Sport Wales, we may use AI to generate ideas for Job Adverts, Job Descriptions, assessments, and interview questions, but we will never use AI tools to make selection or hiring decisions.'}
              </p>
            </div>

            {/* Your Data */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                {isWelsh ? 'Eich Data' : 'Your Data'}
              </h3>
              <p className="text-[#64748B] mb-4">
                {isWelsh
                  ? 'Rydym yn deall y byddwn, yn ystod eich cais, yn gofyn i chi rannu gwybodaeth bersonol sensitif. Mae Chwaraeon Cymru wedi ymrwymo i barchu eich preifatrwydd, ac mae\'r holl wybodaeth bersonol a ddarperir yn ystod y broses hon yn cael ei thrin yn unol â\'n polisi preifatrwydd.'
                  : 'We understand that during your application, we\'ll ask you to share sensitive, personal information. Sport Wales is committed to respecting your privacy, and all personal information provided during this process is handled in accordance with our privacy policy.'}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/privacy-policy"
                  className="text-[#B91C3C] hover:underline font-medium inline-flex items-center gap-2"
                >
                  {isWelsh ? 'Polisi Preifatrwydd' : 'Privacy Policy'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="https://www.sport.wales/application-form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B91C3C] hover:underline font-medium inline-flex items-center gap-2"
                >
                  {isWelsh ? 'Gweld a lawrlwytho ein ffurflen gais' : 'View and download our application form'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Careers Guide */}
            <div className="text-center">
              <a
                href="https://www.sport.wales/careers-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
              >
                {isWelsh ? 'Darllen ein Canllaw Gyrfaoedd' : 'Read our Careers Guide'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pay Scale */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://www.sport.wales/pay-scale"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 rounded-2xl bg-gradient-to-br from-[#F8FAFC] to-white border-2 border-[#E2E8F0] hover:border-[#B91C3C] transition-all duration-300"
              >
                <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#B91C3C] transition-colors">
                  {isWelsh ? 'Graddfa Gyflog' : 'Pay Scale'}
                </h3>
                <p className="text-[#64748B] mb-4">
                  {isWelsh ? 'Pa fuddion y gallwch eu disgwyl?' : 'What benefits can you expect?'}
                </p>
                <span className="inline-flex items-center gap-2 text-[#B91C3C] font-medium group-hover:gap-3 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-[#14B8A6] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Ein Lleoliadau' : 'Our Locations'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              {isWelsh ? 'Ble Rydym yn Gweithio' : 'Where We Work'}
            </h2>
            <p className="text-lg text-white/80">
              {isWelsh
                ? 'Mae gennym swyddfeydd ledled Cymru.'
                : 'We have offices across Wales.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: isWelsh ? 'Caerdydd' : 'Cardiff',
                role: isWelsh ? 'Prif Swyddfa' : 'Head Office',
                address: 'Sophia Gardens, Cardiff, CF11 9SW',
              },
              {
                name: isWelsh ? 'Glannau Dyfrdwy' : 'Deeside',
                role: isWelsh ? 'Swyddfa Ranbarthol' : 'Regional Office',
                address: 'Deeside, North Wales',
              },
              {
                name: isWelsh ? 'Caernarfon' : 'Caernarfon',
                role: isWelsh ? 'Swyddfa Ranbarthol' : 'Regional Office',
                address: 'Caernarfon, Gwynedd',
              },
            ].map((location, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white text-center">
                <h3 className="text-xl font-display font-bold mb-1">{location.name}</h3>
                <p className="text-[#14B8A6] text-sm mb-2">{location.role}</p>
                <p className="text-white/60 text-sm">{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[#14B8A6] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Cwestiynau?' : 'Questions?'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Hoffech Chi Ddysgu Mwy?' : 'Want to Learn More?'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Os oes gennych unrhyw gwestiynau am weithio yn Chwaraeon Cymru, cysylltwch â ni.'
                : 'If you have any questions about working at Sport Wales, get in touch.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/vacancies"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
              >
                {isWelsh ? 'Gweld swyddi gwag' : 'View vacancies'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full border-2 border-[#E2E8F0] text-[#0F172A] font-semibold hover:border-[#B91C3C] hover:text-[#B91C3C] transition-colors"
              >
                {isWelsh ? 'Cysylltu â ni' : 'Contact us'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

