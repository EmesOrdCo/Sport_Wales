import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Cefnogaeth i Glybiau' : 'Club Support';
  const description = isWelsh
    ? 'Cês offer canllawiau Chwaraeon Cymru ar gyfer clybiau a sefydliadau chwaraeon.'
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
    { name: isWelsh ? 'Cyllid a Chymorth' : 'Funding and Support', url: `https://www.sport.wales/${locale}/funding` },
    { name: isWelsh ? 'Cefnogaeth i Glybiau' : 'Club Support', url: `https://www.sport.wales/${locale}/club-support` },
  ];

  const supportCategories = [
    {
      title: isWelsh ? 'Rheoli Eich Clwb Chwaraeon' : 'Managing Your Sports Club',
      description: isWelsh
        ? 'Canllawiau ar sefydlu a rhedeg eich clwb yn effeithiol.'
        : 'Guidance on setting up and running your club effectively.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      color: 'from-[#B91C3C] to-[#991B1B]',
      href: '#managing',
    },
    {
      title: isWelsh ? 'Pobl yn Eich Clwb' : 'People in Your Club',
      description: isWelsh
        ? 'Sut i recriwtio a chadw gwirfoddolwyr ac aelodau.'
        : 'How to recruit and retain volunteers and members.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-[#B91C3C] to-[#991B1B]',
      href: '#people',
    },
    {
      title: isWelsh ? 'Cyfleusterau Clwb' : 'Club Facilities',
      description: isWelsh
        ? 'Gwybodaeth am gyfleusterau a lleoliadau ar gyfer eich clwb.'
        : 'Information about facilities and venues for your club.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'from-[#F59E0B] to-[#D97706]',
      href: '#facilities',
    },
    {
      title: isWelsh ? 'Cyllid y Clwb' : 'Club Finances',
      description: isWelsh
        ? 'Sut i reoli cyllid eich clwb a dod o hyd i gyllid.'
        : 'How to manage your club finances and find funding.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-[#6366F1] to-[#4F46E5]',
      href: '#finances',
    },
    {
      title: isWelsh ? 'Hyrwyddo Eich Clwb' : 'Promoting Your Club',
      description: isWelsh
        ? 'Awgrymiadau ar farchnata a hyrwyddo eich clwb.'
        : 'Tips on marketing and promoting your club.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      color: 'from-[#EC4899] to-[#DB2777]',
      href: '#promoting',
    },
    {
      title: isWelsh ? 'Dogfennau Defnyddiol' : 'Useful Documents',
      description: isWelsh
        ? 'Templedi a dogfennau i helpu rhedeg eich clwb.'
        : 'Templates and documents to help run your club.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'from-[#0EA5E9] to-[#0284C7]',
      href: '#documents',
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
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Cefnogaeth i Glybiau' : 'Club Support'}
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

      {/* Introduction */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#0F172A] mb-6 uppercase">
              {isWelsh ? 'Cymorth i Glybiau Chwaraeon a Gwirfoddolwyr yng Nghymru' : 'Help for Sports Clubs and Volunteers in Wales'}
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed mb-6">
              {isWelsh
                ? 'Yma cewch ddod o hyd i gês offer canllawiau Chwaraeon Cymru ar gyfer clybiau a sefydliadau chwaraeon.'
                : 'Here you\'ll find Sport Wales\' kitbag of guidance for sports clubs and organisations.'}
            </p>
            <p className="text-lg text-[#64748B] leading-relaxed mb-6">
              {isWelsh
                ? 'Mae ganddo bopeth o sut i drefnu eich cyllid, sut i recriwtio gwirfoddolwyr, sut i hyrwyddo eich clwb, sefydlu cyfansoddiad ac is-bwyllgorau. A llawer mwy.'
                : 'It has everything from how to sort out your finances, how to recruit volunteers, how to promote your club, setting up a constitution and subcommittees. And so much more.'}
            </p>
            <p className="text-lg text-[#64748B] leading-relaxed mb-6">
              {isWelsh
                ? 'P\'un a ydych chi newydd ddechrau fel clwb newydd sbon neu eich bod eisoes yn ffynnu gyda channoedd o aelodau, bydd ein canllawiau syml yn helpu i\'ch cefnogi.'
                : 'Whether you are just starting out as a brand new club or you are already thriving with hundreds of members, our simple guides will help support you.'}
            </p>
            <p className="text-lg text-[#64748B] leading-relaxed">
              {isWelsh
                ? 'Gydag offer cynllunio, lawrlwythiadau templedi dogfennau, disgrifiadau swyddi gwirfoddolwyr enghreifftiol, dyma eich siop un stop ar gyfer arweiniad.'
                : 'With planning tools, template document downloads, example volunteer job descriptions, it is your one stop shop for guidance.'}
            </p>
          </div>
        </div>
      </section>

      {/* Support Categories Grid */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {supportCategories.map((category, index) => (
              <a
                key={index}
                href={category.href}
                className="group relative overflow-hidden rounded-3xl bg-white border border-[#E2E8F0] hover:shadow-2xl transition-all duration-500"
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="text-[#94A3B8] group-hover:scale-110 transition-transform duration-500">
                    {category.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#B91C3C] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-[#64748B] text-sm mb-4">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#B91C3C] font-semibold text-sm">
                    {isWelsh ? 'Darllen Mwy' : 'Read More'}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Funding and Support CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Link href="/funding" className="group block">
                <h2 className="text-3xl lg:text-4xl font-display font-bold !text-white mb-4 group-hover:text-[#B91C3C] transition-colors">
                  {isWelsh ? 'Cyllid a Chymorth' : 'Funding and Support'}
                </h2>
                <p className="text-lg text-white/80 mb-6">
                  {isWelsh
                    ? 'Buddsoddi mewn chwaraeon llawr gwlad a chymunedol, yn ogystal ag athletwyr Cymru.'
                    : 'Investing in grassroots and community sport, as well as Welsh athletes.'}
                </p>
                <span className="inline-flex items-center gap-2 text-[#B91C3C] font-semibold">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
            
            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#334155] flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 text-white/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-white/50 text-sm">{isWelsh ? 'Delwedd CMS' : 'CMS Image'}</p>
                  <p className="text-white/30 text-xs mt-1">{isWelsh ? 'Grŵp o oedolion yn ymarfer' : 'A group of older adults exercising'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
