import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'navigation' });
  const isWelsh = locale === 'cy';
  
  const title = t('visionStrategy');
  const description = isWelsh 
    ? 'Dysgwch am weledigaeth Chwaraeon Cymru a\'n strategaeth ar gyfer datblygu chwaraeon yng Nghymru.'
    : 'Learn about Sport Wales\' vision and strategy for developing sport in Wales.';
  
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/about/vision-and-strategy`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/about/vision-and-strategy`,
      languages: {
        'en': '/en/about/vision-and-strategy',
        'cy': '/cy/about/vision-and-strategy',
      },
    },
  };
}

export default async function VisionAndStrategyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'navigation' });

  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: t('whatIsSportWales'), url: `https://www.sport.wales/${locale}/about` },
    { name: t('visionStrategy'), url: `https://www.sport.wales/${locale}/about/vision-and-strategy` },
  ];

  return (
    <>
      {/* Structured Data */}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {isWelsh ? 'Ein Gweledigaeth' : 'Our Vision'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {t('visionStrategy')}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {isWelsh
                ? 'Ein gweledigaeth yw gweld cenedl iachach a mwy actif, lle mae pob person ifanc yn cael dechrau gwych mewn bywyd, gan eu galluogi i fwynhau oes o chwaraeon.'
                : 'Our vision is to see a healthier and more active nation, where every young person has a great start in life, enabling them to enjoy a lifetime of sport.'}
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

      {/* Vision Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
                {isWelsh ? 'Ein Gweledigaeth' : 'Our Vision'}
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh 
                  ? 'Cenedl Iachach a Mwy Actif' 
                  : 'A Healthier and More Active Nation'}
              </h2>
              <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
                {isWelsh
                  ? 'Ein gweledigaeth yw gweld cenedl iachach a mwy actif, lle mae pob person ifanc yn cael dechrau gwych mewn bywyd, gan eu galluogi i fwynhau oes o chwaraeon.'
                  : 'Our vision is to see a healthier and more active nation, where every young person has a great start in life, enabling them to enjoy a lifetime of sport.'}
              </p>
              <p className="text-lg text-[#64748B] leading-relaxed">
                {isWelsh
                  ? 'Ein nod yw rhoi\'r gefnogaeth sydd ei hangen ar ein hathletwyr mwyaf addawol i gystadlu\'n llwyddiannus ar lwyfan y byd.'
                  : 'We aim to provide our most promising athletes with the support they need to compete successfully on the world stage.'}
              </p>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-[#B91C3C] to-[#991B1B] p-8 lg:p-10 text-white">
                <svg className="w-12 h-12 text-white/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-xl lg:text-2xl font-display leading-relaxed mb-4">
                  {isWelsh 
                    ? '"Rydym am i Gymru fod yn genedl fwy egnïol ac iachach."'
                    : '"We want Wales to be a more active, healthier nation."'}
                </blockquote>
                <p className="text-white/70 text-sm">
                  — Sport Wales
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#14B8A6] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Ein Strategaeth' : 'Our Strategy'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh 
                ? 'Strategaeth Chwaraeon Cymru' 
                : 'Sport Wales Strategy'}
            </h2>
            <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
              {isWelsh
                ? 'Mae ein strategaeth yn esbonio sut y byddwn yn datblygu a hyrwyddo chwaraeon yng Nghymru. Ein nod yw ryddhau manteision chwaraeon i bawb.'
                : 'Our strategy explains how we will develop and promote sport in Wales. Our aim is to unleash the benefits of sport for everyone.'}
            </p>
            <p className="text-lg text-[#64748B] leading-relaxed">
              {isWelsh
                ? 'Mae ein strategaeth yn canolbwyntio ar gynyddu cyfranogiad, datblygu chwaraeon elît, a sicrhau bod pawb yn cael cyfle i fwynhau chwaraeon.'
                : 'Our strategy focuses on increasing participation, developing elite sport, and ensuring everyone has the opportunity to enjoy sport.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-[#B91C3C]/10 flex items-center justify-center text-[#B91C3C] mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                {isWelsh ? 'Gweledigaeth ar gyfer Chwaraeon' : 'Vision for Sport'}
              </h3>
              <p className="text-[#64748B] mb-4">
                {isWelsh
                  ? 'Cenedl actif lle gall pawb gael bywyd gydol oes mewn chwaraeon a gweithgarwch corfforol.'
                  : 'An active nation where everyone can have a lifelong involvement in sport and physical activity.'}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6] mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                {isWelsh ? 'Strategaeth Chwaraeon Cymru' : 'Sport Wales Strategy'}
              </h3>
              <p className="text-[#64748B] mb-4">
                {isWelsh
                  ? 'Sut byddwn yn ryddhau manteision chwaraeon i bawb.'
                  : 'How we will unleash the benefits of sport for everyone.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Public Duties Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Ein Dyletswyddau Cyhoeddus' : 'Our Public Duties'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
              {isWelsh
                ? 'Mae Chwaraeon Cymru yn sefydliad a ariennir yn gyhoeddus, ac felly mae\'n rhaid iddo adrodd ar nifer o ddyletswyddau craidd. Dyma\'r dyletswyddau cyhoeddus hynny.'
                : 'Sport Wales is a publicly funded organisation, and as such, it must report on a number of core duties. Here are these public duties.'}
            </p>
            <Link 
              href="/governance"
              className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
            >
              {isWelsh ? 'Gweld ein Dyletswyddau Cyhoeddus' : 'View Our Public Duties'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Dysgu Mwy' : 'Learn More'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Dysgwch Amdanom Ni' : 'Learn About Us'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Dysgwch fwy am Chwaraeon Cymru a\'n gwaith i ddatblygu chwaraeon yng Nghymru.'
                : 'Learn more about Sport Wales and our work to develop sport in Wales.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/about/what-is-sport-wales" 
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
              >
                {isWelsh ? 'Beth yw Chwaraeon Cymru?' : 'What is Sport Wales?'}
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full border-2 border-[#E2E8F0] text-[#0F172A] font-semibold hover:border-[#B91C3C] hover:text-[#B91C3C] transition-colors"
              >
                {isWelsh ? 'Amdanom Ni' : 'About Us'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

