import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Llywodraethu' : 'Governance';
  const description = isWelsh
    ? 'Gwybodaeth ddefnyddiol i helpu ein sefydliadau partner i ymdrechu tuag at lywodraethu da.'
    : 'Useful information to help our partner organisations strive towards good governance.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/governance`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/governance`,
      languages: {
        'en': '/en/governance',
        'cy': '/cy/governance',
      },
    },
  };
}

export default async function GovernancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Partneriaid' : 'Partners', url: `https://www.sport.wales/${locale}/partners` },
    { name: isWelsh ? 'Llywodraethu' : 'Governance', url: `https://www.sport.wales/${locale}/governance` },
  ];

  const mainCards = [
    {
      title: isWelsh ? 'Fframwaith Llywodraethu ac Arweinyddiaeth' : 'Governance and Leadership Framework',
      description: isWelsh
        ? 'Wedi\'i gynllunio i helpu sefydliadau i ddatblygu strwythurau cadarn...'
        : 'Designed to help organisations develop solid structures...',
      href: '#',
    },
    {
      title: isWelsh ? 'Ein dull o fuddsoddi mewn partneriaid' : 'Our approach to partner investment',
      description: isWelsh
        ? 'Wedi\'i ddatblygu yn dilyn ymgysylltu â phartneriaid ac allweddol...'
        : 'Developed following engagement with partners and key...',
      href: '#',
    },
  ];

  const governanceCards = [
    {
      title: isWelsh ? 'Fframwaith Symud i Gynhwysiant' : 'Moving to Inclusion Framework',
      href: '#',
    },
    {
      title: isWelsh ? 'Canllawiau ar gyfer Cynhwysiant Trawsryweddol mewn Chwaraeon Domestig' : 'Guidance for Transgender Inclusion in Domestic Sport',
      href: '#',
    },
    {
      title: isWelsh ? 'Amrywiaeth y Bwrdd' : 'Board Diversity',
      href: '#',
    },
    {
      title: isWelsh ? 'Gwybodaeth ac Adnoddau Gwrth-Gyffuriau' : 'Anti-Doping Information and Resources',
      href: '#',
    },
    {
      title: isWelsh ? 'Diogelu ar gyfer Partneriaid' : 'Safeguarding for Partners',
      href: '#',
    },
    {
      title: isWelsh ? 'Cydnabod cyrff llywodraethu newydd neu ddisgyblaethau chwaraeon' : 'Recognition of new governing bodies or sport disciplines',
      href: '#',
    },
  ];

  const additionalCards = [
    {
      title: isWelsh ? 'Adrodd Pryderon Lefel Is neu Arfer Gwael' : 'Reporting Lower-Level Concerns or Poor Practice',
      href: '#',
    },
    {
      title: isWelsh ? 'Cynllunio Olyniaeth' : 'Succession Planning',
      href: '#',
    },
    {
      title: isWelsh ? 'Academi Llywodraethu Chwaraeon' : 'Sports Governance Academy',
      href: '#',
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#14B8A6]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {isWelsh ? 'Llywodraethu' : 'Governance'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Llywodraethu' : 'Governance'}
            </h1>
            <div className="space-y-4 text-xl text-white/80 leading-relaxed">
              <p>
                {isWelsh
                  ? 'Mae llywodraethu da yn sylfaen allweddol ar gyfer llwyddiant unrhyw sefydliad. Llywodraethu yw\'r fframwaith o strategaeth, rheoli risg, rheolaethau a phrosesau.'
                  : 'Good governance is a key foundation for the success of any organisation. Governance is the framework of strategy, risk management, controls and processes.'}
              </p>
              <p>
                {isWelsh
                  ? 'Yn bwysig, mae hefyd yn ymwneud ag arweinyddiaeth y sefydliad o ran diwylliant, gwerthoedd, moeseg a chywirdeb. Mewn sefydliad sy\'n cael ei lywodraethu\'n dda, mae\'r elfennau hyn yn sail i bopeth y mae\'r sefydliad yn ei wneud a sut mae\'n ei wneud.'
                  : 'Importantly, it also relates to the organisation\'s leadership in terms of culture, values, ethics and integrity. In a well-governed organisation, these elements underpin everything the organisation does and how it does it.'}
              </p>
              <p>
                {isWelsh
                  ? 'Mae llywodraethu da wedi\'i ddangos i fod yn gatalydd pwerus ar gyfer newid ac yn yrrwr perfformiad sefydliadol gwell, waeth beth fo\'r maint neu\'r strwythur.'
                  : 'Good governance has been shown to be a powerful catalyst for change and a driver of improved organisational performance, regardless of size or structure.'}
              </p>
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

      {/* Vision for Sport Featured Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <Link
            href="/vision"
            className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] hover:shadow-2xl transition-all duration-500"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left side - Image placeholder */}
              <div className="relative min-h-[250px] lg:min-h-[300px] bg-gradient-to-br from-[#1E3A5F] to-[#0F172A]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-20 h-20 text-white/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-white/50 text-sm">{isWelsh ? 'Delwedd CMS' : 'CMS Image'}</p>
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <p className="text-lg text-white/80 leading-relaxed mb-4">
                  {isWelsh
                    ? 'Y Weledigaeth ar gyfer Chwaraeon yng Nghymru yw bod yn genedl actif lle gall pawb fwynhau chwaraeon gydol oes. Mae ein strategaeth Galluogi Chwaraeon yng Nghymru i Ffynnu wedi\'i datblygu oherwydd ein bod am helpu...'
                    : 'The Vision for Sport in Wales is to be an active nation where everyone can have a lifelong enjoyment of sport. Our strategy Enabling Sport in Wales to Thrive has been developed because we want to help...'}
                </p>
                <span className="inline-flex items-center gap-2 text-[#B91C3C] font-semibold group-hover:gap-4 transition-all">
                  {isWelsh ? 'Y Weledigaeth ar gyfer Chwaraeon' : 'The Vision for Sport'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Main Cards Section */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {mainCards.map((card, index) => (
              <Link
                key={index}
                href={card.href as any}
                className="group block p-6 lg:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3 group-hover:text-[#B91C3C] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[#64748B] mb-4">
                  {card.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C3C] group-hover:gap-3 transition-all">
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

      {/* Governance Cards Grid */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {governanceCards.map((card, index) => (
              <Link
                key={index}
                href={card.href as any}
                className="group block bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#B91C3C] transition-colors">
                    {card.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C3C] group-hover:gap-3 transition-all">
                    {card.title}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Cards */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {additionalCards.map((card, index) => (
              <Link
                key={index}
                href={card.href as any}
                className="group block bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#B91C3C] transition-colors">
                    {card.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C3C] group-hover:gap-3 transition-all">
                    {card.title}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partners CTA */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <Link
            href="/partners"
            className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] hover:shadow-2xl transition-all duration-500"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left side - Content */}
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl lg:text-4xl font-display font-bold !text-white mb-4">
                  {isWelsh ? 'Partneriaid' : 'Partners'}
                </h2>
                <div className="space-y-4 text-white/80 leading-relaxed mb-8">
                  <p>
                    {isWelsh
                      ? 'Mae\'n cymryd ymdrech fawr i helpu chwaraeon yng Nghymru i ffynnu.'
                      : 'It takes a big effort to help sport in Wales thrive.'}
                  </p>
                  <p>
                    {isWelsh
                      ? 'O\'r gwirfoddolwyr sy\'n rhoi o\'u hamser fel y gall eraill gymryd rhan.'
                      : 'From the volunteers who give up their time so that others can take part.'}
                  </p>
                  <p>
                    {isWelsh
                      ? 'Y canolfannau hamdden, campfeydd a phyllau nofio sy\'n ganolfannau i gymunedau lleol...'
                      : 'The leisure centres, gyms and swimming pools that are hubs of local communities...'}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-[#14B8A6] font-semibold group-hover:gap-4 transition-all">
                  {isWelsh ? 'Partneriaid' : 'Partners'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>

              {/* Right side - Image placeholder */}
              <div className="relative min-h-[300px] lg:min-h-0 bg-gradient-to-br from-[#1E3A5F] to-[#0F172A]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-20 h-20 text-white/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p className="text-white/50 text-sm">{isWelsh ? 'Delwedd CMS' : 'CMS Image'}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
