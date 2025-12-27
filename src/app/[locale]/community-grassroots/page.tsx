import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Chwaraeon Cymunedol a Llawr Gwlad' : 'Community and Grassroots Sport';
  const description = isWelsh
    ? 'Cefnogi clybiau chwaraeon cymunedol a mudiadau llawr gwlad ledled Cymru i ffynnu.'
    : 'Supporting community sports clubs and grassroots organisations across Wales to thrive.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/community-grassroots`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/community-grassroots`,
      languages: {
        'en': '/en/community-grassroots',
        'cy': '/cy/community-grassroots',
      },
    },
  };
}

export default async function CommunityGrassrootsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Chwaraeon Cymunedol a Llawr Gwlad' : 'Community and Grassroots Sport', url: `https://www.sport.wales/${locale}/community-grassroots` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#123F56] via-[#1E4A62] to-[#123F56] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#E11D2E]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#F4B400]/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-8">
              {isWelsh ? 'Chwaraeon Cymunedol a Llawr Gwlad' : 'Community and Grassroots Sport'}
            </h1>
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                {isWelsh
                  ? 'Mae chwaraeon cymunedol a llawr gwlad wrth wraidd ein gwaith. Rydym am i chwaraeon yng Nghymru ffynnu yn ein parciau, ein hysgolion, ein pentrefi, ein trefi a\'n dinasoedd. Rydym wedi ymrwymo i\'r Weledigaeth ar gyfer Chwaraeon yng Nghymru – \'cenedl actif lle gall pawb fwynhau chwaraeon gydol oes\'.'
                  : 'Community and grassroots sport is at the very heart of our work. We want sport in Wales to thrive in our parks, our schools, our villages, our towns and our cities. We are committed to the Vision for Sport in Wales – \'an active nation where everyone can have a lifelong enjoyment of sport\'.'}
              </p>
              <p>
                {isWelsh
                  ? 'Rydym eisiau i bawb gael y cyfle i gymryd rhan mewn ystod eang o chwaraeon ac i ddatblygu\'r sgiliau a\'r hyder i barhau i wneud hynny am oes.'
                  : 'We want everyone to have the opportunity of taking part in a wide range of sports and to develop the skills and confidence to continue doing so for a lifetime.'}
              </p>
              <p>
                {isWelsh
                  ? 'Rydym am gyrraedd pob cymuned, yn enwedig y rhai â\'r cyfraddau anactif uchaf.'
                  : 'We want to reach all communities, especially those with the highest rates of inactivity.'}
              </p>
              <p>
                {isWelsh
                  ? 'Mae llawer o ffyrdd rydym yn cefnogi chwaraeon cymunedol a llawr gwlad. O fuddsoddi mewn cyrff llywodraethu ac awdurdodau lleol i ddarparu gweithgarwch; darparu grantiau i glybiau; buddsoddi mewn adnoddau a all helpu i gael pobl yn actif; a mesur y cyfraddau cyfranogiad diweddaraf.'
                  : 'There are lots of ways we are supporting community and grassroots sport. From investing in governing bodies and local authorities to deliver activity; providing grants to clubs; investing in resources that can help get people active; and measuring the latest rates of participation.'}
              </p>
              <p className="font-semibold text-white">
                {isWelsh
                  ? 'Archwiliwch ragor o\'n gwaith mewn chwaraeon cymunedol a llawr gwlad.'
                  : 'Explore more of our work in community and grassroots sport.'}
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

      {/* Club Support Featured Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
            {/* Left side - Red background with content */}
            <div className="bg-gradient-to-br from-[#E11D2E] to-[#E11D2E] p-8 lg:p-12 flex flex-col justify-between min-h-[400px]">
              <div>
                <p className="text-white/90 text-sm font-semibold uppercase tracking-wider mb-4">
                  {isWelsh ? 'Adnodd Allweddol ar gyfer Clybiau Cymunedol a Gwirfoddolwyr' : 'Key Resource for Community Clubs and Volunteers'}
                </p>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
                  {isWelsh ? 'Cefnogaeth i Glybiau' : 'Club Support'}
                </h2>
                <p className="text-lg text-white/90 leading-relaxed mb-8">
                  {isWelsh
                    ? 'Yma cewch ddod o hyd i gês offer canllawiau Chwaraeon Cymru ar gyfer clybiau a sefydliadau chwaraeon.'
                    : 'Here you\'ll find Sport Wales\' kitbag of guidance for sports clubs and organisations.'}
                </p>
              </div>
              <div>
                <Link
                  href="/club-support"
                  className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-white text-[#123F56] font-semibold hover:bg-white/90 transition-colors"
                >
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right side - Image placeholder (CMS editable) */}
            <div className="relative min-h-[400px] lg:min-h-0 bg-gradient-to-br from-[#123F56] to-[#123F56]">
              {/* Placeholder for CMS image - showing rugby youth team */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-24 h-24 text-white/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-white/50 text-sm">{isWelsh ? 'Delwedd CMS' : 'CMS Image'}</p>
                  <p className="text-white/30 text-xs mt-1">{isWelsh ? 'Tîm chwaraeon ieuenctid' : 'Youth sports team'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CMS Articles Section - Highlighted Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#123F56] mb-4">
              {isWelsh ? 'Cynnwys Wedi\'i Amlygu - Chwaraeon Cymunedol a Llawr Gwlad' : 'Highlighted Content - Community and Grassroots Sport'}
            </h2>
          </div>

          {/* CMS Placeholder Articles */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                  <div className="text-center p-6">
                    <svg className="w-12 h-12 text-[#94A3B8] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm text-[#94A3B8]">{isWelsh ? 'Delwedd Erthygl' : 'Article Image'}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="h-6 bg-[#E2E8F0] rounded mb-3 w-3/4"></div>
                  <div className="h-4 bg-[#F1F5F9] rounded mb-2"></div>
                  <div className="h-4 bg-[#F1F5F9] rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center p-8 bg-white rounded-2xl border-2 border-dashed border-[#E2E8F0]">
            <p className="text-[#64748B] font-medium">
              {isWelsh ? 'Golygu o\'r CMS' : 'Editable from CMS'}
            </p>
            <p className="text-sm text-[#94A3B8] mt-1">
              {isWelsh ? 'Bydd erthyglau\'n cael eu tynnu o\'r system rheoli cynnwys' : 'Articles will be pulled from the content management system'}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#123F56] to-[#1E4A62]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[#F4B400] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Cychwyn Arni' : 'Get Started'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Angen Cefnogaeth ar gyfer eich Clwb?' : 'Need Support for Your Club?'}
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              {isWelsh
                ? 'P\'un a ydych chi\'n chwilio am gyllid, cyngor llywodraethu neu adnoddau dysgu, rydym yma i helpu.'
                : 'Whether you\'re looking for funding, governance advice or learning resources, we\'re here to help.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/funding"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#E11D2E] text-white font-semibold hover:bg-[#E11D2E] transition-colors"
              >
                {isWelsh ? 'Gweld Opsiynau Cyllid' : 'View Funding Options'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
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

