import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'navigation' });
  const isWelsh = locale === 'cy';
  
  const title = t('visionStrategy');
  const description = isWelsh 
    ? 'Mae\'r Weledigaeth ar gyfer Chwaraeon a Strategaeth Chwaraeon Cymru yn mynd law yn llaw.'
    : 'The Vision for Sport and the Sport Wales Strategy go hand in hand.';
  
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
    { name: t('visionStrategy'), url: `https://www.sport.wales/${locale}/about/vision-and-strategy` },
  ];

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#123F56] via-[#1E4A62] to-[#123F56] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#E11D2E]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#E11D2E]/20 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {t('visionStrategy')}
            </h1>
            <p className="text-xl lg:text-2xl font-semibold text-white/90">
              {isWelsh
                ? 'Mae\'r Weledigaeth ar gyfer Chwaraeon a Strategaeth Chwaraeon Cymru yn mynd law yn llaw.'
                : 'The Vision for Sport and the Sport Wales Strategy go hand in hand.'}
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

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <div className="prose prose-lg max-w-none text-[#475569] space-y-6">
              <p>
                {isWelsh
                  ? 'Yng Nghymru, mae gennym Weledigaeth glir i greu cenedl actif lle gall pawb gael mwynhad gydol oes o chwaraeon. Crëwyd y Weledigaeth hon gan ac ar gyfer pobl Cymru, gan arwain pawb sy\'n gweithio, gwirfoddoli, cefnogi neu lywodraethu chwaraeon yma.'
                  : 'In Wales, we have a clear Vision to create an active nation where everyone can have a lifetime enjoyment of sport. This Vision was created by and for the people of Wales, guiding all those who work, volunteer, support or govern sport here.'}
              </p>
              <p>
                {isWelsh
                  ? 'Nid yw\'n eiddo i un sefydliad. Mae\'r Weledigaeth ar gyfer Chwaraeon yn gosod uchelgais i bawb. Mae\'n gofyn i chwaraeon ymuno â meysydd eraill, oherwydd gellir gweld gwobrau cenedl actif mewn sawl ffurf wahanol, gan gyffwrdd â phob cymuned yng Nghymru.'
                  : 'It is not owned by one organisation. The Vision for Sport sets an ambition for everyone. It asks that sport joins forces with other areas, because the rewards of an active nation can be seen in many different forms, touching every community in Wales.'}
              </p>
              <p>
                {isWelsh
                  ? 'I helpu i gyflawni hyn, mae Chwaraeon Cymru wedi datblygu strategaeth sy\'n dangos sut byddwn yn cefnogi\'r Weledigaeth.'
                  : 'To help achieve this, Sport Wales has developed a strategy that shows how we\'ll support the Vision.'}
              </p>
              <p>
                {isWelsh
                  ? 'Yn Chwaraeon Cymru, gwyddom fod angen newidiadau mawr i wneud Cymru yn lle lle gall pawb fod yn actif am oes. Mae ein strategaeth, a gefnogir gan ein cynllun busnes, yn arwain sut rydym yn bwriadu chwarae ein rhan wrth gyflawni\'r newidiadau sydd eu hangen i wireddu\'r Weledigaeth ar gyfer Chwaraeon.'
                  : 'At Sport Wales, we know that big changes are needed to make Wales a place where everyone can be active for life. Our strategy, supported by our business plan, guides how we plan to play our part in delivering the changes needed to realise the Vision for Sport.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Strategy Cards */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Vision for Sport Card */}
            <Link
              href="/vision"
              className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#123F56] to-[#1E4A62] hover:shadow-2xl transition-all duration-500"
            >
              <div className="p-8 lg:p-10">
                <h3 className="text-2xl lg:text-3xl font-display font-bold !text-white mb-4">
                  {isWelsh ? 'Gweledigaeth ar gyfer Chwaraeon' : 'Vision for Sport'}
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  {isWelsh
                    ? 'Cenedl actif lle gall pawb gael mwynhad gydol oes...'
                    : 'An active nation where everyone can have a lifelong…'}
                </p>
                <span className="inline-flex items-center gap-2 text-[#E11D2E] font-semibold group-hover:gap-4 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
              {/* Image placeholder */}
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#123F56]/50 to-transparent"></div>
            </Link>

            {/* Sport Wales Strategy Card */}
            <Link
              href="/about/vision-and-strategy"
              className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#123F56] to-[#1E4A62] hover:shadow-2xl transition-all duration-500"
            >
              <div className="p-8 lg:p-10">
                <h3 className="text-2xl lg:text-3xl font-display font-bold !text-white mb-4">
                  {isWelsh ? 'Strategaeth Chwaraeon Cymru' : 'Sport Wales Strategy'}
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  {isWelsh
                    ? 'Sut byddwn yn rhyddhau manteision chwaraeon i bawb.'
                    : 'How we will unleash the benefits of sport for everyone.'}
                </p>
                <span className="inline-flex items-center gap-2 text-[#E11D2E] font-semibold group-hover:gap-4 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
              {/* Image placeholder */}
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#123F56]/50 to-transparent"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#123F56] mb-8">
              {isWelsh ? 'Y Weledigaeth a\'r Strategaeth ar waith (5m 15s)' : 'The Vision and Strategy in action (5m 15s)'}
            </h2>
            
            <p className="text-[#64748B] mb-6">
              <a href="#" className="text-[#E11D2E] hover:underline">
                {isWelsh ? 'Gwyliwch gyda disgrifiad sain (8m 37s)' : 'Watch with audio description (8m 37s)'}
              </a>
            </p>

            {/* Video Placeholder */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#123F56]">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Play button */}
                <button className="w-20 h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors group">
                  <svg className="w-8 h-8 text-[#123F56] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              {/* Image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#123F56] to-[#123F56] flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 text-white/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <p className="text-white/50 text-sm">{isWelsh ? 'Bachgen yn dal bat criced bach yn chwarae criced bwrdd' : 'A boy holding a small cricket bat playing table cricket'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Duties Notice */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl">
            <p className="text-lg text-[#475569] leading-relaxed">
              {isWelsh
                ? 'Mae Chwaraeon Cymru yn sefydliad a ariennir yn gyhoeddus, ac felly rhaid iddo adrodd ar nifer o ddyletswyddau craidd. Dyma\'r dyletswyddau cyhoeddus hyn.'
                : 'Sport Wales is a publicly funded organisation, and as such, it must report on a number of core duties. Here are these public duties.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

