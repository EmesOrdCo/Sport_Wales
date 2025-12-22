import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Polisïau a Llywodraethu' : 'Policies and Governance';
  const description = isWelsh
    ? 'Ein polisïau, cynlluniau strategol a dogfennau llywodraethu allweddol.'
    : 'Our policies, strategic plans and key governance documents.';

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
    { name: isWelsh ? 'Polisïau a Llywodraethu' : 'Policies and Governance', url: `https://www.sport.wales/${locale}/governance` },
  ];

  const strategicPlans = [
    {
      title: isWelsh ? 'Cynllun Cynaliadwyedd Amgylcheddol' : 'Environmental Sustainability Plan',
      description: isWelsh
        ? 'Mae Chwaraeon Cymru wedi ymrwymo\'n llwyr i chwarae ein rhan wrth fynd i\'r afael â\'r argyfyngau hinsawdd a natur.'
        : 'Sport Wales is wholly committed to playing our part in tackling the climate and nature emergencies.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-[#10B981]',
    },
    {
      title: isWelsh ? 'Cynllun Cydraddoldeb Strategol 2024-2028' : 'Strategic Equality Plan 2024-2028',
      description: isWelsh
        ? 'Mae ein Cynllun Cydraddoldeb Strategol yn canolbwyntio\'n gyntaf ar y camau y gall Chwaraeon Cymru eu cymryd o fewn ein sefydliad ein hunain.'
        : 'Our Strategic Equality Plan is initially focused on the actions that Sport Wales can take within our own organisation.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'bg-[#6366F1]',
    },
  ];

  const governanceResources = [
    {
      title: isWelsh ? 'Amrywiaeth y Bwrdd' : 'Board Diversity',
      description: isWelsh
        ? 'Credwn ei bod yn bwysig bod ein penderfynwyr yn cael eu tynnu o wahanol gefndiroedd gyda phrofiadau gwahanol.'
        : 'We believe it is important that our decision-makers are drawn from different backgrounds with different experiences.',
    },
    {
      title: isWelsh ? 'Fframwaith Llywodraethu ac Arweinyddiaeth' : 'Governance and Leadership Framework',
      description: isWelsh
        ? 'Wedi\'i gynllunio i helpu sefydliadau i ddatblygu strwythurau cadarn a datblygu ymddygiadau arweinyddiaeth o ansawdd uchel.'
        : 'Designed to help organisations develop solid structures and develop high quality leadership behaviours.',
    },
    {
      title: isWelsh ? 'Cyhoeddiadau Allweddol' : 'Key Publications',
      description: isWelsh
        ? 'Yma fe welwch ein llyfrgell o ddogfennau a chyhoeddiadau allweddol.'
        : 'Here you will find our library of key documents and publications.',
    },
  ];

  const manifestoPoints = [
    {
      number: '01',
      title: isWelsh ? 'Buddsoddi mewn Chwaraeon' : 'Invest in Sport',
      description: isWelsh
        ? 'Cynyddu buddsoddiad mewn chwaraeon cymunedol a llawr gwlad.'
        : 'Increase investment in community and grassroots sport.',
    },
    {
      number: '02',
      title: isWelsh ? 'Cyfleusterau Chwaraeon' : 'Sport Facilities',
      description: isWelsh
        ? 'Diogelu a gwella cyfleusterau chwaraeon ledled Cymru.'
        : 'Protect and improve sport facilities across Wales.',
    },
    {
      number: '03',
      title: isWelsh ? 'Chwaraeon mewn Ysgolion' : 'Sport in Schools',
      description: isWelsh
        ? 'Sicrhau bod gan bob plentyn fynediad at chwaraeon o ansawdd uchel yn yr ysgol.'
        : 'Ensure every child has access to high-quality sport in school.',
    },
    {
      number: '04',
      title: isWelsh ? 'Iechyd a Lles' : 'Health and Wellbeing',
      description: isWelsh
        ? 'Defnyddio chwaraeon i wella iechyd corfforol a meddyliol.'
        : 'Use sport to improve physical and mental health.',
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#6366F1]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#10B981]/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {isWelsh ? 'Polisïau a Llywodraethu' : 'Policies & Governance'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Rhedeg Chwaraeon Cymru' : 'Running Welsh Sport'}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {isWelsh
                ? 'Ein polisïau, cynlluniau strategol a dogfennau llywodraethu allweddol sy\'n arwain ein gwaith.'
                : 'Our policies, strategic plans and key governance documents that guide our work.'}
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

      {/* Strategic Plans */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#10B981] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Cynlluniau Strategol' : 'Strategic Plans'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Ein Hymrwymiadau' : 'Our Commitments'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Mae\'r cynlluniau hyn yn amlinellu ein hymrwymiadau i gynaliadwyedd, cydraddoldeb ac arferion da.'
                : 'These plans outline our commitments to sustainability, equality and good practice.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {strategicPlans.map((plan, index) => (
              <div
                key={index}
                className="p-8 lg:p-10 rounded-3xl bg-white border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${plan.color} flex items-center justify-center text-white mb-6`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                  {plan.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed">
                  {plan.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#B91C3C] to-[#991B1B]">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-white/70 font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Maniffesto 2026' : 'Manifesto 2026'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              {isWelsh ? 'Sut Gall Chwaraeon Helpu Cymru i Ffynnu' : 'How Sport Can Help Wales Thrive'}
            </h2>
            <p className="text-lg text-white/80">
              {isWelsh
                ? 'Pedwar argymhelliad yr hoffem i bleidiau gwleidyddol eu cynnwys yn eu maniffesto etholiad 2026.'
                : 'Four recommendations we would like political parties to include in their 2026 election manifesto.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {manifestoPoints.map((point, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-display font-bold text-white/30 mb-4">
                  {point.number}
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Resources */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <span className="inline-block text-[#6366F1] font-semibold text-sm uppercase tracking-wider mb-4">
                {isWelsh ? 'Adnoddau Llywodraethu' : 'Governance Resources'}
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh ? 'Cefnogi Arferion Da' : 'Supporting Good Practice'}
              </h2>
              <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
                {isWelsh
                  ? 'Dyma adnoddau i helpu sefydliadau chwaraeon i weithredu gyda\'r safonau uchaf o lywodraethu.'
                  : 'Here are resources to help sport organisations operate with the highest standards of governance.'}
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

            <div>
              <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 lg:p-10 text-white sticky top-8">
                <h3 className="text-2xl font-display font-bold mb-6">
                  {isWelsh ? 'Siarter Frenhinol' : 'Royal Charter'}
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  {isWelsh
                    ? 'Sefydlwyd Chwaraeon Cymru gan Siarter Frenhinol ar 4 Chwefror 1972 gyda\'r nod o "feithrin a darparu cyfleusterau ar gyfer adnabyddiaeth ac arfer chwaraeon a hamdden corfforol y cyhoedd cyffredinol".'
                    : 'Sport Wales was established by Royal Charter on 4 February 1972 with the aim of "fostering and providing facilities for the sport and physical recreation knowledge and practice of the general public".'}
                </p>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10">
                  <div className="text-3xl">🏛️</div>
                  <div>
                    <div className="text-2xl font-display font-bold">1972</div>
                    <p className="text-sm text-white/70">{isWelsh ? 'Sefydlwyd' : 'Established'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Dysgu Mwy' : 'Learn More'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Hoffech Chi Ddysgu Mwy?' : 'Want to Learn More?'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Os hoffech chi ddysgu mwy am ein polisïau a\'n llywodraethu, cysylltwch â ni.'
                : 'If you\'d like to learn more about our policies and governance, get in touch.'}
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
                href="/about"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full border-2 border-[#E2E8F0] text-[#0F172A] font-semibold hover:border-[#B91C3C] hover:text-[#B91C3C] transition-colors"
              >
                {isWelsh ? 'Dysgu amdanom ni' : 'Learn about us'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

