import { setRequestLocale, getTranslations } from 'next-intl/server';
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

  const partnerCategories = [
    {
      title: isWelsh ? 'Partneriaid Cenedlaethol' : 'National Partners',
      description: isWelsh
        ? 'Mae ein Partneriaid Cenedlaethol yn hanfodol i Weledigaeth Chwaraeon Cymru. Rydym yn gweithio gyda chyrff llywodraethu cenedlaethol i ddatblygu eu chwaraeon yng Nghymru.'
        : 'Our National Partners are vital to the Sport Wales Vision. We work with national governing bodies to develop their sports in Wales.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: 'bg-[#B91C3C]',
    },
    {
      title: isWelsh ? 'Partneriaethau Chwaraeon' : 'Sport Partnerships',
      description: isWelsh
        ? 'Mae Partneriaethau Chwaraeon yn trawsnewid y ffordd y mae chwaraeon cymunedol yn cael ei greu, ei gyflawni, ei arwain a\'i gyllido.'
        : 'Sport Partnerships are transforming the way community sport is created, delivered, led, and funded.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'bg-[#14B8A6]',
    },
    {
      title: isWelsh ? 'Diogelu ar gyfer Partneriaid' : 'Safeguarding for Partners',
      description: isWelsh
        ? 'Mae gan bawb yng Nghymru yr hawl i gymryd rhan mewn chwaraeon diogel. Rydym yn darparu arweiniad a chefnogaeth i\'n partneriaid.'
        : 'Everyone in Wales has the right to participate in safe sport. We provide guidance and support to our partners.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'bg-[#F59E0B]',
    },
  ];

  const governanceResources = [
    {
      title: isWelsh ? 'Fframwaith Llywodraethu ac Arweinyddiaeth' : 'Governance and Leadership Framework',
      description: isWelsh
        ? 'Wedi\'i gynllunio i helpu sefydliadau i ddatblygu strwythurau cadarn a datblygu ymddygiadau arweinyddiaeth o ansawdd uchel.'
        : 'Designed to help organisations develop solid structures and develop high quality leadership behaviours.',
    },
    {
      title: isWelsh ? 'Amrywiaeth y Bwrdd' : 'Board Diversity',
      description: isWelsh
        ? 'Credwn ei bod yn bwysig bod ein penderfynwyr yn cael eu tynnu o wahanol gefndiroedd.'
        : 'We believe it is important that our decision-makers are drawn from different backgrounds.',
    },
    {
      title: isWelsh ? 'Cyhoeddiadau Allweddol' : 'Key Publications',
      description: isWelsh
        ? 'Yma fe welwch ein llyfrgell o ddogfennau a chyhoeddiadau allweddol.'
        : 'Here you will find our library of key documents and publications.',
    },
  ];

  const initiatives = [
    {
      title: isWelsh ? 'Menter Nofio Am Ddim' : 'Free Swimming Initiative',
      description: isWelsh
        ? 'Beth yw\'r Fenter Nofio Am Ddim yng Nghymru? Cafodd Nofio Am Ddim yng Nghymru ei lansio gyntaf yn 2003.'
        : 'What is the Free Swimming Initiative in Wales? Free Swimming in Wales was first launched in 2003.',
      color: 'bg-[#14B8A6]',
    },
    {
      title: 'CLIP',
      description: isWelsh
        ? 'Croeso i CLIP - Adnodd Dysgu Chwaraeon Cymru. Mae defnyddwyr yn cael mynediad at gynnwys unigryw a digwyddiadau.'
        : 'Welcome to CLIP - A Sport Wales Learning Resource. Users get access to unique content and events.',
      color: 'bg-[#6366F1]',
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {isWelsh ? 'Partneriaid' : 'Partners'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Gweithio Gyda\'n Gilydd' : 'Working Together'}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {isWelsh
                ? 'Rydym yn gweithio mewn partneriaeth gyda nifer o sefydliadau gwahanol sy\'n cyflawni a datblygu chwaraeon ledled Cymru.'
                : 'We work in partnership with a number of different organisations that deliver and develop sport across Wales.'}
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

      {/* Partner Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Ein Partneriaid' : 'Our Partners'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Sut Rydym yn Gweithio' : 'How We Work'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Mae cyflawni ein Gweledigaeth ar gyfer y sector cyfan yn golygu bod yn rhaid i ni herio a chefnogi ein partneriaid yn briodol.'
                : 'Delivering our Vision for the sector as a whole means that we must properly challenge and support our partners.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {partnerCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 lg:p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center text-white mb-6`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                  {category.title}
                </h3>
                <p className="text-[#64748B]">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="inline-block text-[#14B8A6] font-semibold text-sm uppercase tracking-wider mb-4">
                {isWelsh ? 'Llywodraethu' : 'Governance'}
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh ? 'Adnoddau ar gyfer Partneriaid' : 'Resources for Partners'}
              </h2>
              <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
                {isWelsh
                  ? 'Dyma wybodaeth ddefnyddiol i helpu ein sefydliadau partner i ymdrechu tuag at lywodraethu da.'
                  : 'Here is some useful information to help our partner organisations strive towards good governance.'}
              </p>

              <div className="space-y-4">
                {governanceResources.map((resource, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-white border border-[#E2E8F0]">
                    <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-[#64748B] text-sm">
                      {resource.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 lg:p-10 text-white">
                <h3 className="text-2xl font-display font-bold mb-4 !text-white">
                  {isWelsh ? 'Mewn Cydweithrediad' : 'In Partnership'}
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  {isWelsh
                    ? 'Ein partneriaid yw\'r allwedd i gyflawni ein gweledigaeth o genedl fwy actif, iachach.'
                    : 'Our partners are the key to delivering our vision of a more active, healthier nation.'}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold mb-1">60+</div>
                    <p className="text-xs text-white/70">{isWelsh ? 'Partneriaid Cenedlaethol' : 'National Partners'}</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold mb-1">22</div>
                    <p className="text-xs text-white/70">{isWelsh ? 'Awdurdod Lleol' : 'Local Authorities'}</p>
                  </div>
                </div>
              </div>

              {initiatives.map((initiative, index) => (
                <div key={index} className={`rounded-2xl ${initiative.color} p-6 text-white`}>
                  <h3 className="text-xl font-display font-bold mb-2">
                    {initiative.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {initiative.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Dod yn Bartner' : 'Become a Partner'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Hoffech Chi Weithio Gyda Ni?' : 'Want to Work With Us?'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Os hoffech chi ddysgu mwy am sut gallwn ni weithio gyda\'n gilydd, cysylltwch â ni.'
                : 'If you\'d like to learn more about how we can work together, get in touch.'}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
            >
              {isWelsh ? 'Cysylltu â ni' : 'Contact us'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

