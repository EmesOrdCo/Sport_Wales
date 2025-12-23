import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Cefnogaeth i Glybiau' : 'Club Support';
  const description = isWelsh
    ? 'Pecyn offer Chwaraeon Cymru o arweiniad ar gyfer clybiau chwaraeon a sefydliadau.'
    : 'Sport Wales\' kitbag of guidance for sports clubs and organisations.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/club-support`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/club-support`,
      languages: {
        'en': '/en/club-support',
        'cy': '/cy/club-support',
      },
    },
  };
}

export default async function ClubSupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Cefnogaeth i Glybiau' : 'Club Support', url: `https://www.sport.wales/${locale}/club-support` },
  ];

  const supportAreas = [
    {
      title: isWelsh ? 'Rhedeg Eich Clwb' : 'Running Your Club',
      description: isWelsh
        ? 'Cyngor ar sut i redeg clwb chwaraeon llwyddiannus, o gofrestru i gyllid.'
        : 'Advice on how to run a successful sports club, from registration to finance.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'bg-[#B91C3C]',
      items: [
        isWelsh ? 'Strwythur clwb' : 'Club structure',
        isWelsh ? 'Rheoli cyllid' : 'Financial management',
        isWelsh ? 'Yswiriant' : 'Insurance',
        isWelsh ? 'Polisïau a gweithdrefnau' : 'Policies and procedures',
      ],
    },
    {
      title: isWelsh ? 'Gwirfoddolwyr' : 'Volunteers',
      description: isWelsh
        ? 'Sut i recriwtio, hyfforddi a chadw gwirfoddolwyr yn eich clwb.'
        : 'How to recruit, train and retain volunteers in your club.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'bg-[#14B8A6]',
      items: [
        isWelsh ? 'Recriwtio gwirfoddolwyr' : 'Recruiting volunteers',
        isWelsh ? 'Hyfforddiant a datblygiad' : 'Training and development',
        isWelsh ? 'Cydnabod gwirfoddolwyr' : 'Recognising volunteers',
        isWelsh ? 'Cadw gwirfoddolwyr' : 'Retaining volunteers',
      ],
    },
    {
      title: isWelsh ? 'Hyfforddi' : 'Coaching',
      description: isWelsh
        ? 'Adnoddau i gefnogi hyfforddwyr yn eich clwb.'
        : 'Resources to support coaches in your club.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      color: 'bg-[#F59E0B]',
      items: [
        isWelsh ? 'Cymwysterau hyfforddi' : 'Coaching qualifications',
        isWelsh ? 'Datblygu hyfforddwyr' : 'Coach development',
        isWelsh ? 'Adnoddau hyfforddi' : 'Coaching resources',
        isWelsh ? 'Mentora' : 'Mentoring',
      ],
    },
    {
      title: isWelsh ? 'Diogelu' : 'Safeguarding',
      description: isWelsh
        ? 'Sicrhau bod eich clwb yn ddiogel i bawb.'
        : 'Ensuring your club is safe for everyone.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'bg-[#6366F1]',
      items: [
        isWelsh ? 'Polisi diogelu' : 'Safeguarding policy',
        isWelsh ? 'Gwiriadau DBS' : 'DBS checks',
        isWelsh ? 'Hyfforddiant diogelu' : 'Safeguarding training',
        isWelsh ? 'Adrodd pryderon' : 'Reporting concerns',
      ],
    },
    {
      title: isWelsh ? 'Marchnata a Chyfathrebu' : 'Marketing & Communications',
      description: isWelsh
        ? 'Sut i hyrwyddo eich clwb a chyfathrebu gydag aelodau.'
        : 'How to promote your club and communicate with members.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      color: 'bg-[#EC4899]',
      items: [
        isWelsh ? 'Cyfryngau cymdeithasol' : 'Social media',
        isWelsh ? 'Gwefannau' : 'Websites',
        isWelsh ? 'Cyfathrebu mewnol' : 'Internal communications',
        isWelsh ? 'Recriwtio aelodau' : 'Member recruitment',
      ],
    },
    {
      title: isWelsh ? 'Cyllid' : 'Funding',
      description: isWelsh
        ? 'Cyfleoedd cyllido sydd ar gael i glybiau chwaraeon.'
        : 'Funding opportunities available to sports clubs.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-[#10B981]',
      items: [
        isWelsh ? 'Cronfa Cymru Actif' : 'Be Active Wales Fund',
        isWelsh ? 'Crowdfunder' : 'Crowdfunder',
        isWelsh ? 'Grant Arbed Ynni' : 'Energy Saving Grant',
        isWelsh ? 'Ffynonellau cyllid eraill' : 'Other funding sources',
      ],
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F59E0B]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {isWelsh ? 'Cefnogaeth i Glybiau' : 'Club Support'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Eich Pecyn Offer Clwb' : 'Your Club Kitbag'}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {isWelsh
                ? 'Yma fe welwch becyn offer Chwaraeon Cymru o arweiniad ar gyfer clybiau chwaraeon a sefydliadau.'
                : 'Here you\'ll find Sport Wales\' kitbag of guidance for sports clubs and organisations.'}
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

      {/* Support Areas Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Adnoddau' : 'Resources'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Popeth Sydd Ei Angen Arnoch' : 'Everything You Need'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Rydym wedi creu amrywiaeth o adnoddau i\'ch helpu i redeg clwb chwaraeon llwyddiannus.'
                : 'We\'ve created a range of resources to help you run a successful sports club.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {supportAreas.map((area, index) => (
              <div
                key={index}
                className="p-6 lg:p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${area.color} flex items-center justify-center text-white mb-6`}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                  {area.title}
                </h3>
                <p className="text-[#64748B] mb-4 text-sm">
                  {area.description}
                </p>
                <ul className="space-y-2">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#64748B]">
                      <svg className="w-4 h-4 text-[#14B8A6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section - Individuals and Families */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
                {isWelsh ? 'Cychwyn Arni' : 'Getting Started'}
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh ? 'I Unigolion a Theuluoedd' : 'For Individuals and Families'}
              </h2>
              <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
                {isWelsh
                  ? "Dylai chwaraeon a gweithgarwch corfforol fod ar gyfer pawb. P'un a ydych eisoes yn hynod o chwaraeon ac yn cymryd rhan mewn ymarfer corff, neu'n edrych i gymryd eich camau cyntaf i gael ffit, mae yna wahanol ffyrdd y gallwn eich helpu i gymryd rhan."
                  : "Sport and physical activity should be for everyone. Whether you're already quite sporty and take part in exercise or looking to take your first steps to getting fit, there are different ways we could help you take part."}
              </p>
              <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
                {isWelsh
                  ? 'Gallwch ddod o hyd i glybiau a sefydliadau yn eich ardal, dysgu am gyfleoedd chwaraeon ar gyfer plant ac oedolion, neu gael cymorth i ddechrau gyda chwaraeon a gweithgarwch corfforol.'
                  : 'You can find clubs and organisations in your area, learn about sport opportunities for children and adults, or get support to get started with sport and physical activity.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
                >
                  {isWelsh ? 'Cael Cymorth' : 'Get Help'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/facilities"
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-full border-2 border-[#E2E8F0] text-[#0F172A] font-semibold hover:border-[#B91C3C] hover:text-[#B91C3C] transition-colors"
                >
                  {isWelsh ? 'Darganfod Cyfleusterau' : 'Find Facilities'}
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: isWelsh ? 'Clybiau Lleol' : 'Local Clubs',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                },
                {
                  title: isWelsh ? 'Chwaraeon Plant' : 'Children\'s Sport',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                },
                {
                  title: isWelsh ? 'Ymarfer Corff' : 'Physical Activity',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: isWelsh ? 'Cyfleusterau' : 'Facilities',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#B91C3C]/10 flex items-center justify-center text-[#B91C3C] mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-[#0F172A]">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sport in the Community Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <span className="inline-block text-[#14B8A6] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Chwaraeon yn y Gymuned' : 'Sport in the Community'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Chwaraeon Cymunedol' : 'Sport in the Community'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
              {isWelsh
                ? 'Mae Chwaraeon Cymru yn cefnogi chwaraeon yn y gymuned gyda buddsoddiad trwy grantiau, adnoddau i helpu hyfforddwyr a gwirfoddolwyr, a gweithio gyda llawer o bartneriaid ym mhob cornel o\'r wlad.'
                : 'Sport Wales supports sport in the community with investment through grants, resources to helps coaches and volunteers, and working with lots of partners in every corner of the country.'}
            </p>

            {/* Club Support */}
            <div className="mb-8 p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                {isWelsh ? 'Cefnogaeth Clybiau' : 'Club Support'}
              </h3>
              <p className="text-lg text-[#64748B] mb-4">
                {isWelsh
                  ? 'Yma fe welwch becyn offer Chwaraeon Cymru o arweiniad ar gyfer clybiau chwaraeon a sefydliadau.'
                  : 'Here you\'ll find Sport Wales\' kitbag of guidance for sports clubs and organisations.'}
              </p>
            </div>

            {/* Highlighted Resources */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                  {isWelsh ? 'Cyllid a Chymorth' : 'Funding and Support'}
                </h3>
                <p className="text-[#64748B] mb-4">
                  {isWelsh
                    ? 'Buddsoddi mewn chwaraeon gwreiddiol a chymunedol, yn ogystal ag athletwyr Cymru.'
                    : 'Investing in grassroots and community sport, as well as Welsh athletes.'}
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                  {isWelsh ? 'Llythrennedd Corfforol' : 'Physical Literacy'}
                </h3>
                <p className="text-[#64748B] mb-4">
                  {isWelsh
                    ? 'Rydym eisiau rhoi i bob person y sgiliau a\'r hyder i gymryd rhan mewn chwaraeon.'
                    : 'We want to give every person the skills and confidence to take part in sport.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BeActiveWales Campaign */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="rounded-3xl bg-gradient-to-br from-[#B91C3C] to-[#991B1B] p-8 lg:p-12 text-white overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl"></div>
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
                  #BeActiveWales
                </span>
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                  {isWelsh ? 'Ymgyrch #CymruActif' : '#BeActiveWales Campaign'}
                </h2>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  {isWelsh
                    ? '#CymruActif - yn helpu i gadw\'r genedl yn ffit ac yn iach. Ymunwch â\'r ymgyrch a helpu i hyrwyddo chwaraeon yn eich cymuned.'
                    : '#BeActiveWales - helping to keep the nation fit and healthy. Join the campaign and help promote sport in your community.'}
                </p>
              </div>

              <div className="text-center lg:text-right">
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-lg text-white/90 font-semibold">{isWelsh ? 'Byddwch yn actif!' : 'Be Active!'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIP Learning Resource */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-[#6366F1] font-semibold text-sm uppercase tracking-wider mb-4">
                CLIP
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh ? 'Adnodd Dysgu Chwaraeon Cymru' : 'Sport Wales Learning Resource'}
              </h2>
              <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
                {isWelsh
                  ? 'Croeso i CLIP - Adnodd Dysgu Chwaraeon Cymru. Mae defnyddwyr yn cael mynediad at gynnwys unigryw a digwyddiadau, cronfa ddata erthyglau am lawer o bynciau yn ymwneud â chwaraeon a llawer mwy.'
                  : 'Welcome to CLIP - A Sport Wales Learning Resource. Users get access to unique content and events, a database of articles about many sport-related topics and much more.'}
              </p>
              <Link
                href="/clip"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#6366F1] text-white font-semibold hover:bg-[#4F46E5] transition-colors"
              >
                {isWelsh ? 'Ewch i CLIP' : 'Visit CLIP'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-[#6366F1] to-[#4F46E5] p-8 lg:p-10 text-white">
              <h3 className="text-2xl font-display font-bold mb-6">{isWelsh ? 'Beth Gewch Chi' : 'What You Get'}</h3>
              <ul className="space-y-4">
                {[
                  isWelsh ? 'Cynnwys unigryw' : 'Unique content',
                  isWelsh ? 'Digwyddiadau a gweminarau' : 'Events and webinars',
                  isWelsh ? 'Cronfa ddata erthyglau' : 'Article database',
                  isWelsh ? 'Adnoddau hyfforddi' : 'Training resources',
                  isWelsh ? 'Cymunedau ymarfer' : 'Communities of practice',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[#14B8A6] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Angen Cymorth?' : 'Need Help?'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Rydym Yma i Helpu' : 'We\'re Here to Help'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Os oes gennych unrhyw gwestiynau am redeg eich clwb, cysylltwch â ni.'
                : 'If you have any questions about running your club, get in touch.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
              >
                {isWelsh ? 'Cysylltu â ni' : 'Contact us'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/funding"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full border-2 border-[#E2E8F0] text-[#0F172A] font-semibold hover:border-[#B91C3C] hover:text-[#B91C3C] transition-colors"
              >
                {isWelsh ? 'Gweld cyfleoedd cyllido' : 'View funding opportunities'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

