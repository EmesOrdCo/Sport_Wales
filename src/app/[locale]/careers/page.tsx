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
      title: isWelsh ? 'Gwyliau Hael' : 'Generous Leave',
      description: isWelsh ? '30 diwrnod o wyliau blynyddol ynghyd â gwyliau cyhoeddus' : '30 days annual leave plus public holidays',
      icon: '🏖️',
    },
    {
      title: isWelsh ? 'Pensiwn' : 'Pension',
      description: isWelsh ? 'Cynllun pensiwn gyda chyfraniad cyflogwr hael' : 'Pension scheme with generous employer contribution',
      icon: '💰',
    },
    {
      title: isWelsh ? 'Gweithio Hyblyg' : 'Flexible Working',
      description: isWelsh ? 'Opsiynau gweithio hyblyg a hybrid' : 'Flexible and hybrid working options',
      icon: '🏠',
    },
    {
      title: isWelsh ? 'Dysgu a Datblygu' : 'Learning & Development',
      description: isWelsh ? 'Cyfleoedd hyfforddi a datblygu parhaus' : 'Continuous training and development opportunities',
      icon: '📚',
    },
    {
      title: isWelsh ? 'Lles' : 'Wellbeing',
      description: isWelsh ? 'Rhaglen lles a chefnogaeth iechyd meddwl' : 'Wellbeing programme and mental health support',
      icon: '💚',
    },
    {
      title: isWelsh ? 'Cyfleusterau Chwaraeon' : 'Sport Facilities',
      description: isWelsh ? 'Mynediad at gyfleusterau\'r Ganolfan Genedlaethol' : 'Access to National Centre facilities',
      icon: '🏋️',
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
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#14B8A6]/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {isWelsh ? 'Gyrfaoedd' : 'Careers'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Ymunwch â\'n Tîm' : 'Join Our Team'}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {isWelsh
                ? 'Helpwch ni i wneud Cymru\'n genedl fwy actif, iachach. Mae gennym dua 160 o staff ledled Cymru sy\'n gweithio i wireddu ein gweledigaeth.'
                : 'Help us make Wales a more active, healthier nation. We have around 160 staff across Wales working to deliver our vision.'}
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
                <a
                  href="https://sport.wales/careers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-white text-[#B91C3C] font-semibold hover:bg-white/90 transition-colors"
                >
                  {isWelsh ? 'Gweld swyddi gwag' : 'View vacancies'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
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
              {isWelsh ? 'Pam Gweithio i Ni' : 'Why Work for Us'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Rydym yn cynnig pecyn buddion cystadleuol i\'n staff.'
                : 'We offer a competitive benefits package to our staff.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 lg:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#64748B]">
                  {benefit.description}
                </p>
              </div>
            ))}
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
              <a
                href="https://sport.wales/careers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
              >
                {isWelsh ? 'Gweld swyddi gwag' : 'View vacancies'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
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

