import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Partneriaid' : 'Partners';
  const description = isWelsh
    ? 'Gweithio mewn partneriaeth i ddatblygu chwaraeon yng Nghymru. Partneriaid cenedlaethol, partneriaethau chwaraeon, a llywodraethu.'
    : 'Working in partnership to develop sport in Wales. National partners, sport partnerships, and governance.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/partners`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/partners`,
      languages: {
        'en': '/en/partners',
        'cy': '/cy/partners',
      },
    },
  };
}

export default async function PartnersPage({
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
  ];

  const partnerCards = [
    {
      title: isWelsh ? 'Partneriaethau Chwaraeon' : 'Sport Partnerships',
      description: isWelsh
        ? 'Mae Partneriaethau Chwaraeon yn trawsnewid y ffordd y mae chwaraeon cymunedol yn cael ei greu, ei gyflawni, ei arwain a\'i gyllido.'
        : 'Sport Partnerships are transforming the way community sport is created, delivered, led, and funded.',
      href: '#',
    },
    {
      title: isWelsh ? 'Menter Nofio Am Ddim' : 'Free Swimming Initiative',
      description: isWelsh
        ? 'Beth yw\'r Fenter Nofio Am Ddim yng Nghymru? Cafodd Nofio Am Ddim yng Nghymru ei lansio gyntaf yn 2003.'
        : 'What is the Free Swimming Initiative in Wales? Free Swimming in Wales was first launched in 2003.',
      href: '#',
    },
    {
      title: isWelsh ? 'Amrywiaeth y Bwrdd' : 'Board Diversity',
      description: isWelsh
        ? 'Credwn ei bod yn bwysig bod ein penderfynwyr yn cael eu tynnu o wahanol gefndiroedd gyda gwahanol...'
        : 'We believe it is important that our decision-makers are drawn from different backgrounds with different...',
      href: '#',
    },
    {
      title: isWelsh ? 'Cyhoeddiadau Allweddol' : 'Key Publications',
      description: isWelsh
        ? 'Yma fe welwch ein llyfrgell o ddogfennau a chyhoeddiadau allweddol.'
        : 'Here you will find our library of key documents and publications.',
      href: '#',
    },
    {
      title: isWelsh ? 'Diogelu ar gyfer Partneriaid' : 'Safeguarding for Partners',
      description: isWelsh
        ? 'Mae gan bawb yng Nghymru yr hawl i gymryd rhan mewn chwaraeon diogel. Mae rhai pobl ifanc, ac oedolion mewn perygl,...'
        : 'Everyone in Wales has the right to participate in safe sport. Some young people, and adults at risk,...',
      href: '#',
    },
    {
      title: isWelsh ? 'Fframwaith Llywodraethu ac Arweinyddiaeth' : 'Governance and Leadership Framework',
      description: isWelsh
        ? 'Wedi\'i gynllunio i helpu sefydliadau i ddatblygu strwythurau cadarn a datblygu ymddygiadau arweinyddiaeth o ansawdd uchel.'
        : 'Designed to help organisations develop solid structures and develop high quality leadership behaviours.',
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
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {isWelsh ? 'Partneriaid' : 'Partners'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Partneriaid' : 'Partners'}
            </h1>
            <div className="space-y-4 text-xl text-white/80 leading-relaxed">
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
                  ? 'Y canolfannau hamdden, campfeydd a phyllau nofio sy\'n ganolfannau i gymunedau lleol.'
                  : 'The leisure centres, gyms and swimming pools that are hubs of local communities.'}
              </p>
              <p>
                {isWelsh
                  ? 'Y gweinyddwyr, hyfforddwyr ac athrawon AG, heb y rhai ni fyddai chwaraeon.'
                  : 'The administrators, coaches and PE teachers, without whom there wouldn\'t be sport.'}
              </p>
              <p>
                {isWelsh
                  ? 'Mae\'r teulu chwaraeon yn enfawr ac mae Chwaraeon Cymru yn gweithio gyda llawer o sefydliadau a chyrff i helpu cefnogi swm sylweddol o\'r gweithgaredd hwn.'
                  : 'The sporting family is vast and Sport Wales works with lots of organisations and bodies to help support a significant amount of this activity.'}
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

      {/* Governance Featured Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <Link
            href="/governance"
            className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] hover:shadow-2xl transition-all duration-500"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left side - Content */}
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl lg:text-4xl font-display font-bold !text-white mb-4">
                  {isWelsh ? 'Llywodraethu' : 'Governance'}
                </h2>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  {isWelsh
                    ? 'Dyma wybodaeth ddefnyddiol i helpu ein sefydliadau partner i ymdrechu tuag at lywodraethu da.'
                    : 'Here is some useful information to help our partner organisations strive towards good governance.'}
                </p>
                <span className="inline-flex items-center gap-2 text-[#B91C3C] font-semibold group-hover:gap-4 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>

              {/* Right side - Image placeholder */}
              <div className="relative min-h-[250px] lg:min-h-0 bg-gradient-to-br from-[#1E3A5F] to-[#0F172A]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-20 h-20 text-white/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <p className="text-white/50 text-sm">{isWelsh ? 'Delwedd CMS' : 'CMS Image'}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* National Partners + CLIP Section */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* National Partners */}
            <Link
              href="/partners/national"
              className="group block p-6 lg:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300"
            >
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3 group-hover:text-[#B91C3C] transition-colors">
                {isWelsh ? 'Partneriaid Cenedlaethol' : 'National Partners'}
              </h3>
              <p className="text-[#64748B] mb-4">
                {isWelsh
                  ? 'Mae ein Partneriaid Cenedlaethol yn hanfodol i Weledigaeth Chwaraeon Cymru...'
                  : 'Our National Partners are vital to the Sport Wales Vision...'}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C3C] group-hover:gap-3 transition-all">
                {isWelsh ? 'Darllen Mwy' : 'Read More'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* CLIP */}
            <Link
              href="/clip"
              className="group block p-6 lg:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300"
            >
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3 group-hover:text-[#B91C3C] transition-colors">
                {isWelsh ? 'Croeso i CLIP - Adnodd Dysgu Chwaraeon Cymru' : 'Welcome to CLIP - A Sport Wales Learning Resource'}
              </h3>
              <p className="text-[#64748B] mb-4">
                {isWelsh
                  ? 'Mae defnyddwyr yn cael mynediad at gynnwys unigryw a digwyddiadau, a...'
                  : 'Users get access to unique content and events, a...'}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C3C] group-hover:gap-3 transition-all">
                {isWelsh ? 'Darllen Mwy' : 'Read More'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Cards Grid */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {partnerCards.map((card, index) => (
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
                  <p className="text-[#64748B] text-sm mb-4">
                    {card.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C3C] group-hover:gap-3 transition-all">
                    {isWelsh ? 'Darllen Mwy' : 'Read More'}
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

      {/* News Articles Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {/* Article 1 - Volunteers */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                <svg className="w-12 h-12 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#B91C3C] transition-colors">
                  {isWelsh 
                    ? 'Y gwirfoddolwyr sy\'n helpu chwaraeon cymunedol i ffynnu ledled Cymru' 
                    : 'The volunteers helping community sport to thrive across Wales'}
                </h3>
                <p className="text-[#64748B] text-sm mb-4">
                  {isWelsh
                    ? 'Rydym yn dathlu rhai gwirfoddolwyr anhygoel ac yn gofyn iddynt beth mae gwirfoddoli yn ei roi iddynt yn ôl.'
                    : 'We are celebrating some amazing volunteers and asking them what volunteering gives them in return.'}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C3C]">
                  {isWelsh ? 'Cwrdd â\'r gwirfoddolwyr' : 'Meet the volunteers'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Article 2 - Learning Programme */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                <svg className="w-12 h-12 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#B91C3C] transition-colors">
                  {isWelsh 
                    ? 'Chwaraeon Cymru yn cyhoeddi rhaglen ddysgu newydd ar gyfer y sector chwaraeon' 
                    : 'Sport Wales announces new sport sector learning programme'}
                </h3>
                <p className="text-[#64748B] text-sm mb-4">
                  {isWelsh
                    ? 'Bydd rhaglen fawr o ddysgu a datblygu ar gyfer sector chwaraeon Cymru yn dechrau ym mis Ionawr 2020,...'
                    : 'A major programme of learning and development for the Welsh sport sector will begin in January 2020,...'}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C3C]">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Article 3 - Young Ambassadors */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                <svg className="w-12 h-12 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#B91C3C] transition-colors">
                  {isWelsh 
                    ? 'Deg mlynedd o raglen Llysgenhadon Ifanc yn creu modelau rôl ysbrydoledig' 
                    : 'Ten years of Young Ambassadors programme creating inspirational role models'}
                </h3>
                <p className="text-[#64748B] text-sm mb-4">
                  {isWelsh
                    ? 'Bydd pen-blwydd deg mlynedd rhaglen Llysgenhadon Ifanc yng Nghymru yn cael ei nodi mewn digwyddiad arbennig...'
                    : 'The ten year anniversary of the Young Ambassadors programme in Wales will be marked at a special event...'}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C3C]">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl border-2 border-dashed border-[#E2E8F0]">
            <p className="text-[#64748B] font-medium">
              {isWelsh ? 'Golygu o\'r CMS' : 'Editable from CMS'}
            </p>
            <p className="text-sm text-[#94A3B8] mt-1">
              {isWelsh ? 'Bydd erthyglau\'n cael eu tynnu o\'r system rheoli cynnwys' : 'Articles will be pulled from the content management system'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
