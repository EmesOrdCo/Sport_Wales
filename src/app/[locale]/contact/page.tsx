import { setRequestLocale, getTranslations } from 'next-intl/server';
import { ContactForm } from '@/components/sections/ContactForm';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'navigation' });
  const isWelsh = locale === 'cy';
  
  const title = isWelsh ? 'Lleoliad a Chysylltu' : 'Location and Contact';
  const description = isWelsh 
    ? 'Cysylltwch â Chwaraeon Cymru. Darganfyddwch sut i gysylltu â ni drwy ffôn, e-bost, neu ymweld â\'n Canolfan Genedlaethol.'
    : 'Contact Sport Wales. Find out how to get in touch with us by phone, email, or visit our National Centre.';
  
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/contact`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        'en': '/en/contact',
        'cy': '/cy/contact',
      },
    },
  };
}

export default async function ContactPage({
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
    { name: isWelsh ? 'Lleoliad a Chysylltu' : 'Location and Contact', url: `https://www.sport.wales/${locale}/contact` },
  ];

  const contactMethods = [
    {
      title: isWelsh ? 'Ymholiadau Cyffredinol' : 'General Enquiries',
      description: isWelsh 
        ? 'Ar gyfer cwestiynau cyffredinol am Chwaraeon Cymru a\'n gwaith.'
        : 'For general questions about Sport Wales and our work.',
      email: 'info@sport.wales',
      phone: '0300 300 3111',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'bg-[#14B8A6]',
    },
    {
      title: isWelsh ? 'Ymholiadau\'r Cyfryngau' : 'Media Enquiries',
      description: isWelsh 
        ? 'Os ydych chi\'n newyddiadurwr eisiau gwybodaeth am ddatganiadau i\'r wasg.'
        : 'If you\'re a journalist wanting information about press releases.',
      email: 'media@sport.wales',
      phone: '0300 300 3105',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      color: 'bg-[#B91C3C]',
    },
    {
      title: isWelsh ? 'Canolfan Genedlaethol' : 'National Centre',
      description: isWelsh 
        ? 'Ymholiadau am archebu cyfleusterau yn y Ganolfan Genedlaethol.'
        : 'Enquiries about booking facilities at the National Centre.',
      email: 'nationalcentre@sport.wales',
      phone: '0300 300 3123',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'bg-[#F59E0B]',
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
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#14B8A6]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {isWelsh ? 'Lleoliad a Chysylltu' : 'Location & Contact'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Cysylltwch â Ni' : 'Get in Touch'}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {isWelsh
                ? 'Rydym yma i helpu. Cysylltwch â\'n tîm gydag unrhyw gwestiynau am ein gwaith, cyfleoedd cyllid, neu bartneriaeth.'
                : 'We\'re here to help. Reach out to our team with any questions about our work, funding opportunities, or partnership.'}
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

      {/* Contact Methods */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {contactMethods.map((method, index) => (
              <div 
                key={method.title}
                className="relative p-6 lg:p-8 rounded-2xl border border-[#E2E8F0] bg-white hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${method.color} flex items-center justify-center text-white mb-6`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-2">
                  {method.title}
                </h3>
                <p className="text-[#64748B] text-sm mb-6">
                  {method.description}
                </p>
                <div className="space-y-3">
                  <a 
                    href={`mailto:${method.email}`}
                    className="flex items-center gap-2 text-sm font-semibold text-[#0F172A] hover:text-[#B91C3C] transition-colors"
                  >
                    <svg className="w-4 h-4 text-[#64748B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {method.email}
                  </a>
                  {method.phone && (
                    <a 
                      href={`tel:${method.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 text-sm font-semibold text-[#0F172A] hover:text-[#B91C3C] transition-colors"
                    >
                      <svg className="w-4 h-4 text-[#64748B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {method.phone}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Form Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Location Info */}
            <div>
              <span className="inline-block text-[#14B8A6] font-semibold text-sm uppercase tracking-wider mb-4">
                {isWelsh ? 'Ein Lleoliad' : 'Our Location'}
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh ? 'Canolfan Genedlaethol Chwaraeon Cymru' : 'Sport Wales National Centre'}
              </h2>
              <p className="text-lg text-[#64748B] mb-8">
                {isWelsh
                  ? 'Mae ein canolfan genedlaethol wedi\'i lleoli yng Ngerddi Sophia, Caerdydd - cartref chwaraeon Cymru.'
                  : 'Our national centre is located in Sophia Gardens, Cardiff - the home of Welsh sport.'}
              </p>

              {/* Address Card */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E2E8F0] mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0F172A] flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#0F172A] mb-2">
                      {isWelsh ? 'Cyfeiriad' : 'Address'}
                    </h3>
                    <address className="not-italic text-[#64748B] leading-relaxed">
                      <p className="font-semibold text-[#0F172A]">Sport Wales National Centre</p>
                      <p>Sophia Gardens</p>
                      <p>Cardiff</p>
                      <p>CF11 9SW</p>
                      <p>{isWelsh ? 'Cymru, Y Deyrnas Unedig' : 'Wales, United Kingdom'}</p>
                    </address>
                  </div>
                </div>
              </div>

              {/* Phone Contact */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E2E8F0] mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#14B8A6] flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#0F172A] mb-2">
                      {isWelsh ? 'Ffôn' : 'Phone'}
                    </h3>
                    <div className="text-[#64748B] space-y-2">
                      <a href="tel:03003003111" className="flex items-center gap-2 text-[#0F172A] font-medium hover:text-[#B91C3C] transition-colors">
                        0300 300 3111
                        <span className="text-[#64748B] font-normal text-sm">({isWelsh ? 'Cyffredinol' : 'General'})</span>
                      </a>
                      <a href="tel:03003003105" className="flex items-center gap-2 text-[#0F172A] font-medium hover:text-[#B91C3C] transition-colors">
                        0300 300 3105
                        <span className="text-[#64748B] font-normal text-sm">({isWelsh ? 'Cyfryngau' : 'Media'})</span>
                      </a>
                      <a href="tel:03003003123" className="flex items-center gap-2 text-[#0F172A] font-medium hover:text-[#B91C3C] transition-colors">
                        0300 300 3123
                        <span className="text-[#64748B] font-normal text-sm">({isWelsh ? 'Canolfan Genedlaethol' : 'National Centre'})</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E2E8F0] mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F59E0B] flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#0F172A] mb-3">
                      {isWelsh ? 'Oriau Agor - Canolfan Genedlaethol' : 'Opening Hours - National Centre'}
                    </h3>
                    <div className="text-[#64748B] space-y-2">
                      <div className="flex justify-between gap-8">
                        <span className="font-medium text-[#0F172A]">{isWelsh ? 'Llun - Gwener' : 'Mon - Fri'}</span>
                        <span>06:30 – 22:30</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span className="font-medium text-[#0F172A]">{isWelsh ? 'Sadwrn - Sul' : 'Sat - Sun'}</span>
                        <span>07:00 – 21:30</span>
                      </div>
                      <div className="pt-2 mt-2 border-t border-[#E2E8F0]">
                        <p className="text-sm text-[#64748B]">
                          <span className="font-medium text-[#0F172A]">{isWelsh ? 'Derbynfa' : 'Reception'}:</span>{' '}
                          {isWelsh ? 'Llun-Gwe 08:00-21:30, Sad-Sul 08:15-21:30' : 'Mon-Fri 08:00-21:30, Sat-Sun 08:15-21:30'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-[#E2E8F0]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.4075675073627!2d-3.1903!3d51.4878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1cb8742c46f5%3A0x89b81a2b6f4e00e0!2sSophia%20Gardens%2C%20Cardiff!5e0!3m2!1sen!2suk!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={isWelsh ? 'Map o Ganolfan Genedlaethol Chwaraeon Cymru' : 'Map of Sport Wales National Centre'}
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
                {isWelsh ? 'Anfonwch Neges' : 'Send a Message'}
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh ? 'Cysylltwch â Ni' : 'Contact Us'}
              </h2>
              <p className="text-lg text-[#64748B] mb-8">
                {isWelsh
                  ? 'Llenwch y ffurflen isod a byddwn yn ymateb cyn gynted â phosibl.'
                  : 'Fill out the form below and we\'ll get back to you as soon as possible.'}
              </p>
              
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E2E8F0]">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* National Centre Facilities */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Ein Cyfleusterau' : 'Our Facilities'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Canolfan Genedlaethol Chwaraeon Cymru' : 'Sport Wales National Centre'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Mae\'r Ganolfan Genedlaethol yn cynnig cyfleusterau chwaraeon o\'r radd flaenaf ar gyfer athletwyr, clybiau, a\'r cyhoedd.'
                : 'The National Centre offers world-class sports facilities for athletes, clubs, and the public.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
                title: isWelsh ? 'Campfa' : 'Gym',
                description: isWelsh ? 'Offer ffitrwydd modern a chyflawn' : 'Modern, fully equipped fitness equipment',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: isWelsh ? 'Pwll Nofio' : 'Swimming Pool',
                description: isWelsh ? '50m pwll nofio a 25m pwll hyfforddi' : '50m pool and 25m training pool',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: isWelsh ? 'Neuaddau Chwaraeon' : 'Sports Halls',
                description: isWelsh ? 'Sawl neuadd aml-bwrpas' : 'Multiple multipurpose halls',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: isWelsh ? 'Ystafelloedd Cyfarfod' : 'Meeting Rooms',
                description: isWelsh ? 'Ar gael i\'w harchebu' : 'Available for hire',
              },
            ].map((facility, index) => (
              <div key={index} className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="w-12 h-12 rounded-xl bg-[#B91C3C]/10 flex items-center justify-center text-[#B91C3C] mb-4">
                  {facility.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2">
                  {facility.title}
                </h3>
                <p className="text-sm text-[#64748B]">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="mailto:nationalcentre@sport.wales"
              className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
            >
              {isWelsh ? 'Ymholiadau Archebu' : 'Booking Enquiries'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-[#F59E0B] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Dilynwch Ni' : 'Follow Us'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Cadwch mewn Cysylltiad' : 'Stay Connected'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Dilynwch ni ar y cyfryngau cymdeithasol am y newyddion diweddaraf.'
                : 'Follow us on social media for the latest news and updates.'}
            </p>
            
            <div className="flex items-center justify-center gap-4">
              {[
                { name: 'Facebook', href: 'https://www.facebook.com/SportWales', icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
                { name: 'Twitter', href: 'https://twitter.com/Sport_Wales', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                { name: 'Instagram', href: 'https://www.instagram.com/sportwales/', icon: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.055.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z' },
                { name: 'LinkedIn', href: 'https://www.linkedin.com/company/sport-wales', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { name: 'YouTube', href: 'https://www.youtube.com/user/sportwales', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#F1F5F9] hover:bg-[#0F172A] flex items-center justify-center text-[#64748B] hover:text-white transition-all duration-300"
                  aria-label={`${social.name} (${isWelsh ? 'yn agor mewn ffenestr newydd' : 'opens in new window'})`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
