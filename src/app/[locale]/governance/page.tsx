import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Polisïau a Llywodraethu' : 'Policies and Governance';
  const description = isWelsh
    ? 'Ni yw\'r sefydliad cenedlaethol sy\'n gyfrifol am ddatblygu a hyrwyddo chwaraeon a gweithgarwch corfforol yng Nghymru.'
    : 'We are the national organisation responsible for developing and promoting sport and physical activity in Wales.';

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

export default async function PoliciesAndGovernancePage({
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

  const featuredCards = [
    {
      title: isWelsh ? 'Amrywiaeth y Bwrdd' : 'Board Diversity',
      description: isWelsh
        ? 'Credwn ei bod yn bwysig bod ein penderfynwyr yn dod o gefndiroedd gwahanol gyda...'
        : 'We believe it is important that our decision-makers are drawn from different backgrounds with different…',
      href: '#',
    },
    {
      title: isWelsh ? 'Fframwaith Llywodraethu ac Arweinyddiaeth' : 'Governance and Leadership Framework',
      description: isWelsh
        ? 'Wedi\'i gynllunio i helpu sefydliadau i ddatblygu strwythurau cadarn a datblygu ymddygiadau arweinyddiaeth o ansawdd uchel.'
        : 'Designed to help organisations develop solid structures and develop high quality leadership behaviours.',
      href: '#',
    },
    {
      title: isWelsh ? 'Cyhoeddiadau Allweddol' : 'Key Publications',
      description: isWelsh
        ? 'Yma fe welwch ein llyfrgell o ddogfennau a chyhoeddiadau allweddol.'
        : 'Here you will find our library of key documents and publications.',
      href: '#',
    },
  ];

  const newsArticles = [
    {
      title: isWelsh ? 'Sut gall chwaraeon helpu Cymru i ffynnu: Argymhellion Maniffesto ar gyfer 2026 a thu hwnt' : 'How sport can help Wales thrive: Manifesto Recommendations for 2026 and beyond',
      description: isWelsh
        ? 'Pedwar argymhelliad yr hoffem i bleidiau gwleidyddol eu cynnwys yn eu maniffestos etholiad 2026.'
        : 'Four recommendations we would like political parties to include in their 2026 election manifestos.',
      linkText: isWelsh ? 'Darllenwch yr argymhellion maniffesto' : 'Read the manifesto recommendations',
      href: '#',
    },
    {
      title: isWelsh ? 'Rhoi llais i bobl ifanc mewn diogelu' : 'Giving young people a voice in safeguarding',
      description: isWelsh
        ? 'Darganfyddwch pam y dylech gynnwys pobl ifanc mewn penderfyniadau diogelu yn eich clwb neu sefydliad chwaraeon.'
        : 'Find out why you should involve young people in safeguarding decisions at your sports club or organisation.',
      linkText: isWelsh ? 'Darllen Mwy' : 'Read More',
      href: '#',
    },
    {
      title: isWelsh ? 'Wythnos Hinsawdd Cymru 2023: Beth mae Chwaraeon Cymru yn ei wneud i fynd i\'r afael â newid hinsawdd?' : 'Wales Climate Week 2023: What is Sport Wales doing to tackle climate change?',
      description: isWelsh
        ? 'Rydym wedi ymrwymo i helpu\'r genedl i gyflawni sero net erbyn 2030 a chreu...'
        : 'We\'re committed to helping the nation achieve net zero by 2030 and creating a greener, stronger and…',
      linkText: isWelsh ? 'Darllen Mwy' : 'Read More',
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
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {isWelsh ? 'Polisïau a Llywodraethu' : 'Policies and Governance'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Polisïau a Llywodraethu' : 'Policies and Governance'}
            </h1>
            <div className="space-y-4 text-lg text-white/90 leading-relaxed">
              <p>
                {isWelsh
                  ? 'Ni yw\'r sefydliad cenedlaethol sy\'n gyfrifol am ddatblygu a hyrwyddo chwaraeon a gweithgarwch corfforol yng Nghymru.'
                  : 'We are the national organisation responsible for developing and promoting sport and physical activity in Wales.'}
              </p>
              <p>
                {isWelsh
                  ? 'Fel corff a noddir gan Lywodraeth Cymru rydym yn rhwym wrth reolau a chyfrifoldebau llywodraethu da ac mae gennym nifer o ddyletswyddau y mae\'n ofynnol i ni eu cyflawni.'
                  : 'As a Welsh Government sponsored body we are bound by rules and responsibilities of good governance and we have a number of duties we are obligated to meet.'}
              </p>
              <p>
                {isWelsh
                  ? 'Mae\'r adran hon yn darparu gwybodaeth am ein dyletswyddau, llywodraethu Chwaraeon Cymru ac adnoddau a chefnogaeth ar gyfer y sector chwaraeon yng Nghymru.'
                  : 'This section provides information on our duties, the governance of Sport Wales and resources and support for the sport sector in Wales.'}
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

      {/* Environmental Sustainability Plan Featured Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <Link
            href="/governance/environmental-sustainability-plan"
            className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] hover:shadow-2xl transition-all duration-500"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left side - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-display font-bold !text-white mb-4">
                  {isWelsh ? 'Cynllun Cynaliadwyedd Amgylcheddol' : 'Environmental Sustainability Plan'}
                </h2>
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  {isWelsh
                    ? 'Mae Chwaraeon Cymru wedi ymrwymo\'n llwyr i chwarae ein rhan wrth fynd i\'r afael â\'r argyfyngau hinsawdd a natur.'
                    : 'Sport Wales is wholly committed to playing our part in tackling the climate and nature emergencies.'}
                </p>
                <span className="inline-flex items-center gap-2 text-[#B91C3C] font-semibold group-hover:gap-4 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>

              {/* Right side - Image placeholder */}
              <div className="relative min-h-[250px] lg:min-h-[300px] bg-gradient-to-br from-[#1E3A5F] to-[#0F172A]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-20 h-20 text-white/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-white/50 text-sm">{isWelsh ? 'Paneli solar ar adeilad' : 'Solar panels on a building'}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Strategic Equality Plan Featured Section */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container">
          <Link
            href="/governance/strategic-equality-plan"
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
                    <p className="text-white/50 text-sm">{isWelsh ? 'Canolfan Genedlaethol Chwaraeon Cymru Caerdydd' : 'Sport Wales National Centre Cardiff Building'}</p>
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-display font-bold !text-white mb-4">
                  {isWelsh ? 'Cynllun Cydraddoldeb Strategol 2024-2028' : 'Strategic Equality Plan 2024-2028'}
                </h2>
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  {isWelsh
                    ? 'Mae ein Cynllun Cydraddoldeb Strategol i ddechrau yn canolbwyntio ar y camau gweithredu y gall Chwaraeon Cymru eu cymryd o fewn ein sefydliad ein hunain. Fodd bynnag, ein huchelgais yw gwneud y mwyaf o\'r ysgogiadau sydd ar gael i ni i gefnogi mynd i\'r afael ag anghydraddoldeb o fewn y sector.'
                    : 'Our Strategic Equality Plan is initially focused on the actions that Sport Wales can take within our own organisation. However, our ambition is to maximise the levers available to us to support tackling inequality within the sector.'}
                </p>
                <span className="inline-flex items-center gap-2 text-[#B91C3C] font-semibold group-hover:gap-4 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#0F172A] mb-8">
            {isWelsh ? 'Cynnwys Dan Sylw - Polisïau a Llywodraethu' : 'Featured Content - Policies and Governance'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {featuredCards.map((card, index) => (
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

          {/* Explore All Link */}
          <div className="mt-12 text-center">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-[#B91C3C] font-semibold hover:gap-3 transition-all"
            >
              {isWelsh ? 'Archwilio Pob Polisi a Llywodraethu' : 'Explore All Policies and Governance'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#0F172A] mb-8">
            {isWelsh ? 'Newyddion Diweddaraf - Polisïau a Llywodraethu' : 'Latest News - Policies and Governance'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {newsArticles.map((article, index) => (
              <Link
                key={index}
                href={article.href as any}
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
                    {article.title}
                  </h3>
                  <p className="text-[#64748B] text-sm mb-4">
                    {article.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C3C] group-hover:gap-3 transition-all">
                    {article.linkText}
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

      {/* CMS Articles Placeholder */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="bg-white rounded-2xl border-2 border-dashed border-[#E2E8F0] p-12 text-center">
            <svg className="w-16 h-16 text-[#94A3B8] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <h3 className="text-xl font-display font-bold text-[#64748B] mb-2">
              {isWelsh ? 'Golygadwy o\'r CMS' : 'Editable from CMS'}
            </h3>
            <p className="text-[#94A3B8]">
              {isWelsh
                ? 'Bydd erthyglau ychwanegol yn ymddangos yma pan gânt eu hychwanegu drwy\'r CMS'
                : 'Additional articles will appear here when added through the CMS'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
