import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Athletwyr Olympaidd Cymru ym Mharis 2024' : 'Welsh Olympic Athletes at Paris 2024';
  const description = isWelsh
    ? 'Gadewch i ni eich cyflwyno i genhedlaeth nesaf athletwyr Cymreig a fydd yn cynrychioli Tîm GB yng Ngemau Olympaidd yr haf hwn ym Mharis 2024.'
    : 'Let us introduce you to the next generation of Welsh athletes who will represent Team GB at this summer\'s Olympic Games in Paris 2024.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/performance-sport/welsh-olympic-athletes`,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/performance-sport/welsh-olympic-athletes`,
      languages: {
        'en': '/en/performance-sport/welsh-olympic-athletes',
        'cy': '/cy/performance-sport/welsh-olympic-athletes',
      },
    },
  };
}

export default async function WelshOlympicAthletesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Chwaraeon Perfformiad' : 'Performance Sport', url: `https://www.sport.wales/${locale}/performance-sport` },
    { name: isWelsh ? 'Athletwyr Olympaidd Cymru ym Mharis 2024' : 'Welsh Olympic Athletes at Paris 2024', url: `https://www.sport.wales/${locale}/performance-sport/welsh-olympic-athletes` },
  ];

  const athletesBySport = [
    {
      sport: isWelsh ? 'Athletau' : 'Athletics',
      athletes: ['Jeremiah Azu', 'Clara Evans'],
    },
    {
      sport: isWelsh ? 'Bocsio' : 'Boxing',
      athletes: ['Rosie Eccles'],
    },
    {
      sport: isWelsh ? 'Seiclo' : 'Cycling',
      athletes: [
        'Emma Finucane',
        'Joshua Tarling',
        'Ella-Maclean Howell',
        'Stephen Williams',
        'Elinor Barker',
        'Jess Roberts',
        'Anna Morris',
        'Lowri Thomas',
        isWelsh ? 'Megan Barker (Wrth Gefn)' : 'Megan Barker (Reserve)',
      ],
    },
    {
      sport: isWelsh ? 'Gymnasteg' : 'Gymnastics',
      athletes: ['Ruby Evans'],
    },
    {
      sport: isWelsh ? 'Hoci' : 'Hockey',
      athletes: ['Jacob Draper', 'Sarah Jones', 'Rupert Shipperley', 'Gareth Furlong'],
    },
    {
      sport: isWelsh ? 'Rhwyfo' : 'Rowing',
      athletes: [
        'Graeme Thomas',
        'Oliver Wynne-Griffith',
        'Eve Stewart',
        'Becky Wilde',
        'Tom Barras',
        'Harry Brightmore',
        'Matt Aldridge',
      ],
    },
    {
      sport: isWelsh ? 'Rygbi Saith Bob Ochr' : 'Rugby Sevens',
      athletes: ['Jasmine Joyce', 'Kayleigh Powell'],
    },
    {
      sport: isWelsh ? 'Hwylio' : 'Sailing',
      athletes: ['Chris Grube', 'Michael Beckett'],
    },
    {
      sport: isWelsh ? 'Nofio' : 'Swimming',
      athletes: ['Matt Richards', 'Medi Harris', 'Daniel Jervis', 'Hector Pardoe', 'Kieran Bird'],
    },
    {
      sport: isWelsh ? 'Tenis Bwrdd' : 'Table Tennis',
      athletes: ['Anna Hursey'],
    },
    {
      sport: 'Taekwondo',
      athletes: ['Jade Jones'],
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#123F56] via-[#1E4A62] to-[#334155] overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#E11D2E] opacity-10 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[#F4B400] opacity-10 blur-2xl"></div>
        </div>

        <div className="container relative z-10">
          {/* Breadcrumbs */}
          <nav className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">{isWelsh ? 'Hafan' : 'Home'}</Link></li>
              <li>/</li>
              <li><Link href="/performance-sport" className="hover:text-white transition-colors">{isWelsh ? 'Chwaraeon Perfformiad' : 'Performance Sport'}</Link></li>
              <li>/</li>
              <li><span className="text-white">{isWelsh ? 'Athletwyr Olympaidd Cymru ym Mharis 2024' : 'Welsh Olympic Athletes at Paris 2024'}</span></li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Athletwyr Olympaidd Cymru ym Mharis 2024' : 'Welsh Olympic Athletes at Paris 2024'}
            </h1>
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
              {isWelsh
                ? 'Gadewch i ni eich cyflwyno i genhedlaeth nesaf athletwyr Cymreig a fydd yn cynrychioli Tîm GB yng Ngemau Olympaidd yr haf hwn ym Mharis 2024.'
                : 'Let us introduce you to the next generation of Welsh athletes who will represent Team GB at this summer\'s Olympic Games in Paris 2024.'}
            </p>
          </div>
        </div>

        {/* Hero image placeholder */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-l from-[#123F56]/50 to-transparent flex items-center justify-center">
            <div className="text-center p-8">
              <svg className="w-24 h-24 text-white/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-white/30 text-sm">{isWelsh ? 'Delwedd CMS' : 'CMS Image'}</p>
            </div>
          </div>
        </div>

        {/* Wave effect */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* How did Welsh athletes perform */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <Link
            href="/news"
            className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#123F56] to-[#1E4A62] hover:shadow-2xl transition-all duration-500"
          >
            <div className="grid lg:grid-cols-2">
              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-display font-bold !text-white mb-4">
                  {isWelsh ? 'Sut wnaeth athletwyr Cymru ym Mharis 2024?' : 'How did Welsh athletes perform at Paris 2024?'}
                </h2>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {isWelsh
                    ? 'Am haf! Mae Paris 2024 ar ben efallai, ond bydd atgofion Olympiaid a Pharalympiaid Cymru yn aros yn y cof am amser hir. Mae 56 o athletwyr o Gymru wedi croesi\'r Sianel yr haf hwn ac wedi dychwelyd gyda 29 medal. Ond wrth gwrs, mae\'n...'
                    : 'What a summer it has been! Paris 2024 may be over, but the memories of Wales\' Olympians and Paralympians will live long in the memory. 56 athletes from Wales have crossed the Channel this summer and have returned with 29 medals. But of course, it\'s...'}
                </p>
                <span className="inline-flex items-center gap-2 text-[#E11D2E] font-semibold group-hover:gap-3 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>

              {/* Image placeholder */}
              <div className="aspect-video lg:aspect-auto relative bg-gradient-to-br from-[#1E4A62] to-[#334155] flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 text-white/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-white/50 text-sm">{isWelsh ? 'Delwedd CMS' : 'CMS Image'}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Athletes by Sport */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {athletesBySport.map((sportGroup, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E2E8F0]">
                <h3 className="text-xl font-display font-bold text-[#123F56] mb-4 pb-3 border-b border-[#E2E8F0]">
                  {sportGroup.sport}
                </h3>
                <ul className="space-y-2">
                  {sportGroup.athletes.map((athlete, athleteIndex) => (
                    <li key={athleteIndex} className="text-[#475569] hover:text-[#E11D2E] transition-colors cursor-pointer">
                      {athlete}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Paralympic link */}
          <div className="mt-12 text-center">
            <p className="text-lg text-[#475569]">
              <a href="#" className="text-[#E11D2E] hover:underline font-semibold">
                {isWelsh
                  ? 'Darganfyddwch pa athletwyr Cymreig sy\'n cynrychioli ParaGB yn y Gemau Paralympaidd ym Mharis.'
                  : 'Find out which Welsh athletes are representing ParaGB at the Paralympics in Paris.'}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#123F56] to-[#1E4A62] flex items-center justify-center relative overflow-hidden">
              {/* Video placeholder */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#E11D2E] flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-[#E11D2E] transition-colors">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/70">{isWelsh ? 'Medalau Gemau Paris 2024' : 'Medals of the 2024 Paris Games'}</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <a href="#" className="text-[#E11D2E] hover:underline text-sm font-medium">
                {isWelsh ? 'Gwyliwch fideo gyda disgrifiad sain' : 'Watch video with audio description'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <Link
              href="/national-lottery"
              className="group block p-6 lg:p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300"
            >
              <h3 className="text-xl font-display font-bold text-[#123F56] mb-3 group-hover:text-[#E11D2E] transition-colors">
                {isWelsh ? 'Sut mae\'r Loteri Genedlaethol yn cefnogi chwaraeon elît yng Nghymru' : 'How the National Lottery supports elite sport in Wales'}
              </h3>
              <p className="text-[#64748B] mb-4">
                {isWelsh
                  ? 'Heb gyllid gan y Loteri Genedlaethol, ni fyddai llawer o...'
                  : 'Without funding from the National Lottery, much of...'}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E11D2E] group-hover:gap-3 transition-all">
                {isWelsh ? 'Darllen Mwy' : 'Read More'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link
              href="/news"
              className="group block p-6 lg:p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300"
            >
              <h3 className="text-xl font-display font-bold text-[#123F56] mb-3 group-hover:text-[#E11D2E] transition-colors">
                {isWelsh ? 'Y Clybiau Cymunedol Lle Dechreuodd Breuddwydion Olympaidd' : 'The Community Clubs Where Olympic Dreams Began'}
              </h3>
              <p className="text-[#64748B] mb-4">
                {isWelsh
                  ? 'Pan fydd Olympiaid Cymru yn camu allan ar y llwyfan byd-eang...'
                  : 'When Wales\' Olympians step out onto the world stage...'}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E11D2E] group-hover:gap-3 transition-all">
                {isWelsh ? 'Darllen Mwy' : 'Read More'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Performance Sport CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#123F56] to-[#1E4A62]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Archwilio Chwaraeon Perfformiad' : 'Explore Performance Sport'}
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              {isWelsh
                ? 'Dysgwch fwy am sut mae Chwaraeon Cymru yn cefnogi athletwyr elît yng Nghymru.'
                : 'Learn more about how Sport Wales supports elite athletes in Wales.'}
            </p>
            <Link
              href="/performance-sport"
              className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#E11D2E] text-white font-semibold hover:bg-[#E11D2E] transition-colors"
            >
              {isWelsh ? 'Chwaraeon Perfformiad' : 'Performance Sport'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

