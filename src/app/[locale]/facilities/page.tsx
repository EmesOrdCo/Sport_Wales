import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Ein Cyfleusterau' : 'Our Facilities';
  const description = isWelsh
    ? 'Mae Chwaraeon Cymru yn berchen ac yn gweithredu dwy ganolfan genedlaethol yng Nghymru – un yn y gogledd ac un yn y de.'
    : 'Sport Wales owns and operates two national centres in Wales – one in the north and one in the south.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/facilities`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/facilities`,
      languages: {
        'en': '/en/facilities',
        'cy': '/cy/facilities',
      },
    },
  };
}

export default async function FacilitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Ein Cyfleusterau' : 'Our Facilities', url: `https://www.sport.wales/${locale}/facilities` },
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Ein Cyfleusterau' : 'Our Facilities'}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-4">
              {isWelsh
                ? 'Mae Chwaraeon Cymru yn berchen ac yn gweithredu dwy ganolfan genedlaethol yng Nghymru – un yn y gogledd ac un yn y de.'
                : 'Sport Wales owns and operates two national centres in Wales – one in the north and one in the south.'}
            </p>
            <div className="space-y-4 text-lg text-white/80 leading-relaxed">
              <p>
                {isWelsh
                  ? 'Mae Gogledd Cymru yn gartref i Plas Menai, y Ganolfan Awyr Agored Genedlaethol i Gymru sydd wedi\'i lleoli\'n berffaith ar gyfer yr antur awyr agored gorau. Wedi\'i leoli ar lannau Afon Menai, yn gyfleus rhwng Bangor a Chaernarfon, ar arfordir Gogledd Cymru. Mae\'r Ganolfan dim ond taith fer mewn car o Barc Cenedlaethol Eryri ac mae\'n edrych dros Ynys Môn.'
                  : 'North Wales is home to Plas Menai, the National Outdoor Centre for Wales is perfectly situated for the ultimate outdoor adventure. Situated on the banks of the Menai Strait, conveniently placed between Bangor and Caernarfon, on the North Wales coast. The Centre is only a short drive from the Snowdonia National Park and overlooks the Isle of Anglesey.'}
              </p>
              <p>
                {isWelsh
                  ? 'Wedi\'i leoli yn Sophia Gardens, mae\'r Ganolfan Genedlaethol yng Nghaerdydd yn gartref Chwaraeon Cymru.'
                  : 'Based in Sophia Gardens, the National Centre in Cardiff is the home of Sport Wales.'}
              </p>
              <p>
                {isWelsh
                  ? 'Mae\'n ganolfan o chwaraeon perfformiad uchel a chwaraeon cymunedol gyda gwasanaethau a chyfleusterau ar gyfer athletwyr Cymreig blaenllaw, swyddfeydd ar gyfer cyrff llywodraethu cenedlaethol, ac ystod o gyfleusterau mynediad cyhoeddus.'
                  : 'A hub of high performance and community sport the centre has services and facilities for top Welsh athletes, offices for national governing bodies, and a range of public access facilities.'}
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

      {/* Plas Menai Featured Card */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <a
            href="https://www.plasmenai.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] hover:shadow-2xl transition-all duration-500"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left side - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-display font-bold !text-white mb-4">
                  Plas Menai
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  {isWelsh
                    ? 'Os ydych chi\'n chwilio am antur awyr agored, mae gan Plas Menai y cyfan. Dyma\'r Ganolfan Awyr Agored Genedlaethol i Gymru ac mae wedi\'i lleoli ar lannau Afon Menai yng Ngogledd Cymru.'
                    : 'If it\'s outdoor adventure you\'re after, Plas Menai has got it all. It is The National Outdoor Centre for Wales and is situated on the banks of the Menai Strait in North Wales.'}
                </p>
                <span className="inline-flex items-center gap-2 text-[#B91C3C] font-semibold group-hover:gap-4 transition-all">
                  {isWelsh ? 'Dysgwch fwy am y Ganolfan Awyr Agored Genedlaethol' : 'Find out more about the National Outdoor Centre'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>

              {/* Right side - Image placeholder */}
              <div className="relative min-h-[250px] lg:min-h-0 bg-gradient-to-br from-[#1E3A5F] to-[#0F172A]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-16 h-16 text-white/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-white/50 text-sm">{isWelsh ? 'Adeilad Canolfan Awyr Agored Plas Menai' : 'Plas Menai Outdoor Centre Building'}</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-12">
            {isWelsh ? 'Newyddion Diweddaraf' : 'Latest News'}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* News Article 1 */}
            <Link
              href="/news"
              className="group block bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                <svg className="w-12 h-12 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#B91C3C] transition-colors">
                  {isWelsh ? 'Blwyddyn mewn chwaraeon Cymru – 2025 wedi\'i ail-chwarae' : 'A year in Welsh sport – 2025 replayed'}
                </h3>
                <p className="text-[#64748B] text-sm mb-4">
                  {isWelsh
                    ? 'Gadewch i ni gael cipolwg ar rai o\'r uchafbwyntiau sydd wedi siapio chwaraeon Cymru.'
                    : 'Let\'s have a peek at just some of the highlights that have shaped Welsh sport.'}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C3C] group-hover:gap-3 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* News Article 2 */}
            <Link
              href="/news"
              className="group block bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                <svg className="w-12 h-12 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#B91C3C] transition-colors">
                  {isWelsh ? 'Y gwirfoddolwyr sy\'n helpu chwaraeon cymunedol i ffynnu ledled Cymru' : 'The volunteers helping community sport to thrive across Wales'}
                </h3>
                <p className="text-[#64748B] text-sm mb-4">
                  {isWelsh
                    ? 'Rydym yn dathlu rhai gwirfoddolwyr anhygoel ac yn gofyn iddynt beth mae gwirfoddoli yn ei roi iddynt yn ôl.'
                    : 'We are celebrating some amazing volunteers and asking them what volunteering gives them in return.'}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C3C] group-hover:gap-3 transition-all">
                  {isWelsh ? 'Cwrdd â\'r gwirfoddolwyr' : 'Meet the volunteers'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* News Article 3 */}
            <Link
              href="/news"
              className="group block bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                <svg className="w-12 h-12 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#B91C3C] transition-colors">
                  {isWelsh ? 'Mae Iori yn cymryd yr awenau yng nghlwb marchogaeth Ceredigion diolch i Grant y Loteri Genedlaethol' : 'Iori takes the reins at Ceredigion horse-riding club thanks to National Lottery Grant'}
                </h3>
                <p className="text-[#64748B] text-sm mb-4">
                  {isWelsh
                    ? 'Mae cryfder a hyder Iori yn codi gyda chyfarpar newydd a ddarparwyd gan y cyllid.'
                    : 'Iori\'s strength and confidence soars with new equipment provided by the funding.'}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C3C] group-hover:gap-3 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
