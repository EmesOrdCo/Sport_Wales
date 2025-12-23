import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';
  
  const title = isWelsh ? 'Canolfan Genedlaethol Chwaraeon Cymru' : 'Sport Wales National Centre';
  const description = isWelsh 
    ? 'Canolfan genedlaethol Chwaraeon Cymru yng Nghaerdydd. Cartref chwaraeon perfformiad uchel a chwaraeon cymunedol yng Nghymru.'
    : 'Sport Wales National Centre in Cardiff. Home of high performance and community sport in Wales.';
  
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/national-centre`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/national-centre`,
      languages: {
        'en': '/en/national-centre',
        'cy': '/cy/national-centre',
      },
    },
  };
}

export default async function NationalCentrePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Canolfan Genedlaethol' : 'National Centre', url: `https://www.sport.wales/${locale}/national-centre` },
  ];

  const facilities = [
    {
      title: isWelsh ? 'Gweithdai Hyfforddi' : 'Training Facilities',
      description: isWelsh
        ? 'Cyfleusterau hyfforddi modern ar gyfer athletwyr elît a chwaraeon cymunedol.'
        : 'Modern training facilities for elite athletes and community sport.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: isWelsh ? 'Cyfleusterau Mynediad Cyhoeddus' : 'Public Access Facilities',
      description: isWelsh
        ? 'Ystod o gyfleusterau ar gael i\'r cyhoedd ar gyfer chwaraeon a gweithgarwch corfforol.'
        : 'A range of facilities available to the public for sport and physical activity.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: isWelsh ? 'Swyddfeydd' : 'Offices',
      description: isWelsh
        ? 'Swyddfeydd ar gyfer cyrff llywodraethu cenedlaethol a staff Chwaraeon Cymru.'
        : 'Offices for national governing bodies and Sport Wales staff.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {isWelsh ? 'Caerdydd' : 'Cardiff'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Canolfan Genedlaethol Chwaraeon Cymru' : 'Sport Wales National Centre'}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {isWelsh
                ? 'Wedi\'i leoli yn Sophia Gardens, mae\'r Ganolfan Genedlaethol yng Nghaerdydd yn gartref Chwaraeon Cymru. Mae\'n ganolfan o chwaraeon perfformiad uchel a chwaraeon cymunedol gyda gwasanaethau a chyfleusterau ar gyfer athletwyr Cymreig blaenllaw, swyddfeydd ar gyfer cyrff llywodraethu cenedlaethol, ac ystod o gyfleusterau mynediad cyhoeddus.'
                : 'Based in Sophia Gardens, the National Centre in Cardiff is the home of Sport Wales. A hub of high performance and community sport the centre has services and facilities for top Welsh athletes, offices for national governing bodies, and a range of public access facilities.'}
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

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Am y Ganolfan' : 'About the Centre'}
            </h2>
            <p className="text-lg text-[#64748B] mb-4 leading-relaxed">
              {isWelsh
                ? 'Mae Canolfan Genedlaethol Chwaraeon Cymru yn ganolfan modern sy\'n gwasanaethu athletwyr elît a chwaraeon cymunedol. Mae\'r ganolfan yn cynnwys cyfleusterau hyfforddi modern, swyddfeydd, ac adnoddau ar gyfer y cyhoedd.'
                : 'Sport Wales National Centre is a modern facility serving elite athletes and community sport. The centre includes modern training facilities, offices, and resources for the public.'}
            </p>
            <p className="text-lg text-[#64748B] leading-relaxed">
              {isWelsh
                ? 'Mae\'r ganolfan yn gartref i nifer o gyfrifoldebau pwysig Chwaraeon Cymru, gan gynnwys cefnogi athletwyr Cymreig, darparu swyddfeydd i gyfrifon llywodraethu cenedlaethol, ac agor cyfleusterau i\'r cyhoedd.'
                : 'The centre is home to many of Sport Wales\' important responsibilities, including supporting Welsh athletes, providing offices for national governing bodies, and opening facilities to the public.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {facilities.map((facility, index) => (
              <div 
                key={index}
                className="p-6 lg:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#B91C3C]/10 flex items-center justify-center text-[#B91C3C] mb-6">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                  {facility.title}
                </h3>
                <p className="text-[#64748B]">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-12 text-center">
              {isWelsh ? 'Lleoliad a Chysylltiadau' : 'Location and Contact'}
            </h2>
            
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#E2E8F0] shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                    {isWelsh ? 'Canolfan Genedlaethol Chwaraeon Cymru' : 'Sport Wales National Centre'}
                  </h3>
                  <div className="space-y-3 text-[#64748B]">
                    <p className="text-[#334155]">
                      Sophia Gardens<br />
                      Cardiff<br />
                      CF11 9SW
                    </p>
                    <div>
                      <a href="mailto:nationalcentre@sport.wales" className="text-[#B91C3C] hover:underline">
                        nationalcentre@sport.wales
                      </a>
                    </div>
                    <div>
                      <a href="tel:03003003123" className="text-[#B91C3C] hover:underline font-medium">
                        0300 3003123
                      </a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-display font-bold text-[#0F172A] mb-4">
                    {isWelsh ? 'Parcio' : 'Parking'}
                  </h4>
                  <p className="text-[#64748B] mb-4">
                    {isWelsh
                      ? 'Mae maes parcio gyda pharcio anableddau o flaen Canolfan Genedlaethol Chwaraeon Cymru, mae parcio ar sail cyntaf i\'r cyntaf ac yn rhad ac am ddim wrth ddefnyddio\'r ganolfan.'
                      : 'There is a car park with disabled parking at the front of Sport Wales National Centre, parking is on a first come first serve basis and is free while using the centre.'}
                  </p>
                  <h4 className="text-lg font-display font-bold text-[#0F172A] mb-4">
                    {isWelsh ? 'Trên' : 'Train'}
                  </h4>
                  <p className="text-[#64748B]">
                    {isWelsh
                      ? 'Mae gwasanaethau trên yn rhedeg o Orsaf Ganolog Caerdydd, mae\'r orsaf 15 munud o gerdded o\'r Ganolfan Genedlaethol.'
                      : 'Train services run from Cardiff Central Station, the station is a 15 minute walk from the National Centre.'}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-[#E2E8F0]">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sophia+Gardens+Cardiff+CF11+9SW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
                >
                  {isWelsh ? 'Gweld ar Google Maps' : 'Find on Google Maps'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </a>
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
              {isWelsh ? 'Mwy o Wybodaeth' : 'More Information'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Dysgwch Fwy' : 'Learn More'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Gweler ein holl gyfleusterau a lleoliadau, neu cysylltwch â ni am ragor o wybodaeth.'
                : 'View all our facilities and locations, or contact us for more information.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/facilities" 
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
              >
                {isWelsh ? 'Ein Cyfleusterau' : 'Our Facilities'}
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full border-2 border-[#E2E8F0] text-[#0F172A] font-semibold hover:border-[#B91C3C] hover:text-[#B91C3C] transition-colors"
              >
                {isWelsh ? 'Cysylltu â Ni' : 'Contact Us'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

