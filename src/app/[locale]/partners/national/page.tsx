import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Partneriaid Cenedlaethol' : 'National Partners';
  const description = isWelsh
    ? 'Yma yn Chwaraeon Cymru, rydym yn gweithio ar y cyd gyda\'n Partneriaid Cenedlaethol i\'n helpu i drawsnewid Cymru yn Genedl Actif.'
    : 'Here at Sport Wales, we work collaboratively with our National Partners to help us transform Wales into an Active Nation.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/partners/national`,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/partners/national`,
      languages: {
        'en': '/en/partners/national',
        'cy': '/cy/partners/national',
      },
    },
  };
}

export default async function NationalPartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Partneriaid' : 'Partners', url: `https://www.sport.wales/${locale}/partners` },
    { name: isWelsh ? 'Partneriaid Cenedlaethol' : 'National Partners', url: `https://www.sport.wales/${locale}/partners/national` },
  ];

  const nationalPartners = [
    { name: 'Welsh Sports Association (WSA)', nameWelsh: 'Cymdeithas Chwaraeon Cymru (WSA)' },
    { name: 'Disability Sport Wales', nameWelsh: 'Chwaraeon Anabledd Cymru' },
    { name: 'Black Swimming Association (BSA)', nameWelsh: 'Cymdeithas Nofio Du (BSA)' },
    { name: 'StreetGames', nameWelsh: 'StreetGames' },
    { name: 'The Urdd', nameWelsh: 'Yr Urdd' },
    { name: 'The Outdoor Partnership', nameWelsh: 'Y Bartneriaeth Awyr Agored' },
    { name: 'Colegau Cymru', nameWelsh: 'Colegau Cymru' },
    { name: 'GirlGuiding Cymru', nameWelsh: 'GirlGuiding Cymru' },
    { name: 'BME Sport Cymru (WCVA)', nameWelsh: 'BME Sport Cymru (WCVA)' },
    { name: 'UDOIT! Dance Foundation', nameWelsh: 'Sefydliad Dawns UDOIT!' },
    { name: 'Youth Sport Trust', nameWelsh: 'Ymddiriedolaeth Chwaraeon Ieuenctid' },
    { name: 'Leadership Skills Foundation', nameWelsh: 'Sefydliad Sgiliau Arweinyddiaeth' },
    { name: 'Sported Foundation', nameWelsh: 'Sefydliad Sported' },
    { name: "Boys' and Girls' Clubs of Wales", nameWelsh: 'Clybiau Bechgyn a Merched Cymru' },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#B91C3C] opacity-10 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[#B91C3C] opacity-10 blur-2xl"></div>
        </div>

        <div className="container relative z-10">
          {/* Breadcrumbs */}
          <nav className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">{isWelsh ? 'Hafan' : 'Home'}</Link></li>
              <li>/</li>
              <li><Link href="/partners" className="hover:text-white transition-colors">{isWelsh ? 'Partneriaid' : 'Partners'}</Link></li>
              <li>/</li>
              <li><span className="text-white">{isWelsh ? 'Partneriaid Cenedlaethol' : 'National Partners'}</span></li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Partneriaid Cenedlaethol' : 'National Partners'}
            </h1>
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-6">
              {isWelsh
                ? 'Yma yn Chwaraeon Cymru, rydym yn gweithio ar y cyd gyda\'n Partneriaid Cenedlaethol i\'n helpu i drawsnewid Cymru yn Genedl Actif. Cenedl lle gall pawb (ac rydym yn golygu pawb) elwa o fuddion gydol oes a mwynhau cymryd rhan mewn Chwaraeon.'
                : 'Here at Sport Wales, we work collaboratively with our National Partners to help us transform Wales into an Active Nation. A nation where everyone (and, we mean everyone) can reap the lifelong benefits and find enjoyment from participating in Sport.'}
            </p>
            <h2 className="text-2xl lg:text-3xl font-display font-bold !text-white mb-4">
              {isWelsh ? 'Pam mae angen ein Partneriaid Cenedlaethol arnom i gyflawni hyn?' : 'Why do we need our National Partners to achieve this?'}
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              {isWelsh
                ? 'Mae ein Partneriaid Cenedlaethol yn hanfodol i strategaeth Chwaraeon Cymru. Gan weithio ar hyd a lled y wlad, mae eu rhwydweithiau helaeth yn ei gwneud yn haws cael cyrhaeddiad ehangach i gymunedau. Maent yn chwarae rhan annatod wrth ein helpu i gael gwared ar rwystrau, gan wneud chwaraeon yn fwy cynhwysol fel y gall pawb elwa.'
                : 'Our National Partners are vital to the Sport Wales strategy. Working across the length and breadth of the country, their extensive networks make it easier to gain a wider reach into communities. They play an integral role in helping us remove barriers, making sport more inclusive so everyone can gain.'}
            </p>
          </div>
        </div>

        {/* Wave effect */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Find out about our National Partners */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-12">
            {isWelsh ? 'Dysgwch am ein Partneriaid Cenedlaethol' : 'Find out about our National Partners'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {nationalPartners.map((partner, index) => (
              <div
                key={index}
                className="group block p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-[#F1F5F9] rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-display font-bold text-[#0F172A] group-hover:text-[#B91C3C] transition-colors">
                  {isWelsh ? partner.nameWelsh : partner.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Want to help us achieve an Active Nation CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Eisiau ein helpu i gyflawni Cenedl Actif?' : 'Want to help us achieve an Active Nation?'}
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-4">
              {isWelsh
                ? 'Mae Chwaraeon Cymru eisiau gwahodd sgwrs a chefnogi cyfleoedd cydweithio gwirioneddol.'
                : 'Sport Wales wants to invite conversation and support genuine collaboration opportunities.'}
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              {isWelsh
                ? 'Os gallwch ein helpu yn ein Gweledigaeth ar gyfer Chwaraeon, yna rydym am glywed gennych. Cysylltwch ag ni ac e-bostiwch ni ar '
                : 'If you can help us in our Vision for Sport, then we want to hear from you. Please get in touch and email us on '}
              <a href="mailto:communications@sport.wales" className="text-[#B91C3C] hover:underline">
                communications@sport.wales
              </a>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/vision"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
              >
                {isWelsh ? 'Gweledigaeth ar gyfer Chwaraeon' : 'Vision for Sport'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                {isWelsh ? 'Cysylltu â ni' : 'Contact Us'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

