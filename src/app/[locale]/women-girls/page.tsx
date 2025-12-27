import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';
  
  const title = isWelsh ? 'Merched a Merched Ifanc' : 'Women & Girls';
  const description = isWelsh 
    ? 'Cefnogaeth a rhaglenni ar gyfer merched a merched ifanc mewn chwaraeon yng Nghymru.'
    : 'Support and programmes for women and girls in sport in Wales.';
  
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/women-girls`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/women-girls`,
      languages: {
        'en': '/en/women-girls',
        'cy': '/cy/women-girls',
      },
    },
  };
}

export default async function WomenGirlsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Merched a Merched Ifanc' : 'Women & Girls', url: `https://www.sport.wales/${locale}/women-girls` },
  ];

  const focusAreas = [
    {
      title: isWelsh ? 'Cynyddu Cyfranogiad' : 'Increasing Participation',
      description: isWelsh
        ? 'Rydym yn gweithio i gynyddu nifer y merched a merched ifanc sy\'n cymryd rhan mewn chwaraeon ac ymarfer corff.'
        : 'We work to increase the number of women and girls taking part in sport and physical activity.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'bg-[#E11D2E]',
    },
    {
      title: isWelsh ? 'Arweinyddiaeth' : 'Leadership',
      description: isWelsh
        ? 'Cefnogi merched i gymryd rôl arweinyddol mewn chwaraeon, gan gynnwys hyfforddi, rheolaeth, a gweinyddu.'
        : 'Supporting women to take leadership roles in sport, including coaching, management, and administration.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'bg-[#E11D2E]',
    },
    {
      title: isWelsh ? 'Chwaraeon Elît' : 'Elite Sport',
      description: isWelsh
        ? 'Cefnogi merched a merched ifanc i gystadlu ar lwyfan y byd ac i gyflawni eu potensial llawn.'
        : 'Supporting women and girls to compete on the world stage and reach their full potential.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: 'bg-[#F4B400]',
    },
    {
      title: isWelsh ? 'Hygyrchedd ac Inclusio' : 'Accessibility & Inclusion',
      description: isWelsh
        ? 'Sicrhau bod chwaraeon yn hygyrch ac yn gynhwysol i ferched a merched ifanc o bob cefndir.'
        : 'Ensuring sport is accessible and inclusive to women and girls from all backgrounds.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: 'bg-[#E11D2E]',
    },
  ];

  const programmes = [
    {
      title: isWelsh ? 'Rhaglenni Arbenigol' : 'Specialist Programmes',
      description: isWelsh
        ? 'Rhaglenni sydd wedi\'u cynllunio\'n benodol ar gyfer merched a merched ifanc mewn chwaraeon.'
        : 'Programmes specifically designed for women and girls in sport.',
    },
    {
      title: isWelsh ? 'Cymorth Ariannol' : 'Financial Support',
      description: isWelsh
        ? 'Gwybodaeth am gefnogaeth ariannol sydd ar gael i gefnogi merched a merched ifanc mewn chwaraeon.'
        : 'Information on financial support available to support women and girls in sport.',
    },
    {
      title: isWelsh ? 'Adnoddau a Hyfforddiant' : 'Resources & Training',
      description: isWelsh
        ? 'Adnoddau a chyrsiau hyfforddi ar gyfer hyrwyddo chwaraeon merched a merched ifanc.'
        : 'Resources and training courses for promoting women and girls\' sport.',
    },
  ];

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#E11D2E] via-[#E11D2E] to-[#E11D2E] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#E11D2E]/20 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              {isWelsh ? 'Cefnogaeth ac Inclusio' : 'Support & Inclusion'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Merched a Merched Ifanc' : 'Women & Girls'}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {isWelsh
                ? 'Rydym yn gweithio i gynyddu cyfranogiad merched a merched ifanc mewn chwaraeon ac i gefnogi merched i gymryd rôl arweinyddol mewn chwaraeon yng Nghymru.'
                : 'We work to increase participation of women and girls in sport and to support women to take leadership roles in sport in Wales.'}
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

      {/* Focus Areas Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#E11D2E] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Ein Ffocws' : 'Our Focus'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#123F56] mb-4">
              {isWelsh ? 'Sut Rydym Yn Cefnogi Merched a Merched Ifanc' : 'How We Support Women & Girls'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Mae Chwaraeon Cymru yn gweithio ar draws meysydd gwahanol i gefnogi merched a merched ifanc mewn chwaraeon.'
                : 'Sport Wales works across different areas to support women and girls in sport.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {focusAreas.map((area, index) => (
              <div 
                key={index}
                className="p-6 lg:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${area.color}/10 flex items-center justify-center text-${area.color.replace('bg-', '')} mb-6`}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-[#123F56] mb-3">
                  {area.title}
                </h3>
                <p className="text-[#64748B]">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#E11D2E] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Rhaglenni a Gwasanaethau' : 'Programmes & Services'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#123F56] mb-4">
              {isWelsh ? 'Rhaglenni a Chymorth' : 'Programmes & Support'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Dysgwch am y rhaglenni a\'r gwasanaethau sydd ar gael i gefnogi merched a merched ifanc mewn chwaraeon.'
                : 'Learn about the programmes and services available to support women and girls in sport.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {programmes.map((programme, index) => (
              <div 
                key={index}
                className="p-6 lg:p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-display font-bold text-[#123F56] mb-3">
                  {programme.title}
                </h3>
                <p className="text-[#64748B]">
                  {programme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[#E11D2E] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Dysgu Mwy' : 'Learn More'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#123F56] mb-4">
              {isWelsh ? 'Cysylltwch â Ni' : 'Get in Touch'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Os hoffech chi ddysgu mwy am ein gwaith i gefnogi merched a merched ifanc mewn chwaraeon, cysylltwch â ni.'
                : 'If you would like to learn more about our work to support women and girls in sport, get in touch.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#E11D2E] text-white font-semibold hover:bg-[#E11D2E] transition-colors"
              >
                {isWelsh ? 'Cysylltu â Ni' : 'Contact Us'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/funding"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full border-2 border-[#E2E8F0] text-[#123F56] font-semibold hover:border-[#E11D2E] hover:text-[#E11D2E] transition-colors"
              >
                {isWelsh ? 'Cyfleoedd Cyllid' : 'Funding Opportunities'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

