'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export default function CommunicationsAndDigitalPage() {
  const locale = useLocale();
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'CLIP' : 'CLIP', url: `https://www.sport.wales/${locale}/clip` },
    { name: isWelsh ? 'Cyfathrebu a Digidol' : 'Communications and Digital', url: `https://www.sport.wales/${locale}/clip/communications-and-digital` },
  ];

  const mainSections = [
    {
      title: isWelsh ? 'Beth i\'w Ddisgwyl' : 'What to Expect',
      items: [
        {
          title: isWelsh ? 'Croeso i sianel Caffi CLIP!' : 'Welcome to the Caffi CLIP channel!',
          description: isWelsh ? 'Beth i\'w ddisgwyl' : 'What to expect',
          content: isWelsh
            ? 'Mae\'r sianel Caffi CLIP yn lle i rannu syniadau, gofyn cwestiynau a chael cefnogaeth gan gydweithwyr ar draws sector chwaraeon Cymru.'
            : 'The Caffi CLIP channel is a place to share ideas, ask questions and get support from colleagues across the Welsh sport sector.',
        },
        {
          title: isWelsh ? 'Sesiynau Bwrdd Sain' : 'Sounding board sessions',
          description: isWelsh ? 'Beth i\'w ddisgwyl' : 'What to expect',
          content: isWelsh
            ? 'Sesiynau rheolaidd lle gallwch rannu eich syniadau a\'ch profiadau gyda gweithwyr proffesiynol eraill yn y sector.'
            : 'Regular sessions where you can share your ideas and experiences with other professionals in the sector.',
        },
      ],
    },
    {
      title: isWelsh ? 'Cynnwys ac SEO' : 'Content & SEO',
      items: [
        {
          title: isWelsh ? 'A yw eich cynnwys yn effeithiol?' : 'Is your content effective?',
          description: isWelsh ? 'Sut i wybod a yw eich cynnwys yn gweithio' : 'How do you know if your content is working?',
          content: isWelsh
            ? 'Mae yna sawl ffordd o fesur effeithiolrwydd cynnwys. Yn y rhan hon, byddwn yn edrych ar sut i ddefnyddio data i wella eich strategaeth gyfathrebu.'
            : 'There are many ways to measure content effectiveness. In this section, we\'ll look at how to use data to improve your communications strategy.',
        },
        {
          title: isWelsh ? 'Awgrymiadau ar gyfer SEO' : 'Top tips for SEO',
          description: isWelsh ? 'Sicrhau bod eich tudalennau wedi\'u hadeiladu gyda chyfrifoldeb' : 'Ensuring your pages are built with consideration',
          content: isWelsh
            ? 'Mae Optimizeio Peiriannau Chwilio (SEO) yn hanfodol i sicrhau bod pobl yn dod o hyd i\'ch cynnwys. Dyma rai awgrymiadau i helpu chi i wella eich safle SEO.'
            : 'Search Engine Optimization (SEO) is essential to ensure people find your content. Here are some tips to help you improve your site\'s SEO.',
        },
      ],
    },
    {
      title: isWelsh ? 'Adnoddau' : 'Resources',
      items: [
        {
          title: isWelsh ? 'Cefnogaeth Iaith Gymraeg' : 'Welsh Language Support',
          description: isWelsh ? 'Adnoddau ar gyfer cyfathrebu dwyieithog' : 'Resources for bilingual communications',
          content: isWelsh
            ? 'Mae Chwaraeon Cymru yn cefnogi defnydd o\'r Gymraeg yn eich cyfathrebu. Dyma adnoddau i\'ch helpu i greu cynnwys dwyieithog effeithiol.'
            : 'Sport Wales supports the use of Welsh in your communications. Here are resources to help you create effective bilingual content.',
        },
        {
          title: isWelsh ? 'Pecynnau Offer a Thempledi' : 'Toolkits and Templates',
          description: isWelsh ? 'Adnoddau ymarferol i\'ch helpu' : 'Practical resources to help you',
          content: isWelsh
            ? 'Dewch o hyd i becynnau offer, templedi a chanllawiau i\'ch helpu i greu cynnwys cyfathrebu proffesiynol.'
            : 'Find toolkits, templates and guides to help you create professional communications content.',
        },
      ],
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#3B82F6]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              CLIP
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Cyfathrebu a Digidol' : 'Communications and Digital'}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {isWelsh
                ? 'Ar gyfer dysgu am bynciau gan gynnwys cyfryngau cymdeithasol, marchnata a\'r cyfryngau.'
                : 'For learning on topics including social media, marketing and media.'}
            </p>
            <Link
              href="/clip"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {isWelsh ? 'Yn ôl i CLIP' : 'Back to CLIP'}
            </Link>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120V60C360 20 720 0 1080 20C1260 30 1380 50 1440 60V120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-[#E2E8F0]">
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#0F172A] mb-2">
                {isWelsh ? 'Mewngofnodi i\'ch cyfrif' : 'Log in to your account'}
              </h2>
              <p className="text-[#64748B] mb-8">
                {isWelsh
                  ? 'Mae CLIP ar gael i staff Chwaraeon Cymru a phartneriaid a ariennir. Os nad ydych chi\'n berchen ar gyfrif, gallwch gofrestru isod.'
                  : 'CLIP is available for Sport Wales staff and funded partners. If you don\'t have an account, you can register below.'}
              </p>
              
              <form action="https://www.sport.wales/clip/" method="post" className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#334155] mb-2">
                    {isWelsh ? 'Cyfeiriad E-bost' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent text-[#0F172A]"
                    placeholder={isWelsh ? 'eich@e-bost.cymru' : 'your@email.com'}
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-[#334155] mb-2">
                    {isWelsh ? 'Cyfrinair' : 'Password'}
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent text-[#0F172A]"
                    placeholder={isWelsh ? 'Eich cyfrinair' : 'Your password'}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="remember"
                      className="w-4 h-4 rounded border-[#E2E8F0] text-[#6366F1] focus:ring-2 focus:ring-[#6366F1]"
                    />
                    <span className="text-sm text-[#64748B]">
                      {isWelsh ? 'Cofio fi?' : 'Remember me?'}
                    </span>
                  </label>
                  <a
                    href="https://www.sport.wales/clip/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#6366F1] hover:underline"
                  >
                    {isWelsh ? 'Anghofio Cyfrinair?' : 'Forgot Password?'}
                  </a>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 btn btn-primary justify-center"
                  >
                    {isWelsh ? 'Mewngofnodi' : 'Login'}
                  </button>
                  <a
                    href="https://www.sport.wales/clip/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn btn-secondary justify-center"
                  >
                    {isWelsh ? 'Cofrestru ar gyfer CLIP' : 'Register for CLIP'}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div>
            {mainSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className={sectionIndex > 0 ? 'mt-24 lg:mt-32' : ''}>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#0F172A] mb-12 lg:mb-16">
                  {section.title}
                </h2>
                <div className="mt-8 lg:mt-12 pb-24 lg:pb-32">
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="relative p-6 lg:p-8 bg-white rounded-2xl border border-[#E2E8F0] hover:shadow-xl transition-all duration-300"
                    >
                      {/* Locked icon - top right corner of the card box */}
                      <div className="absolute top-4 right-4">
                        <svg className="w-6 h-6 text-[#B91C3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-[#3B82F6] flex items-center justify-center text-white mb-8">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-display font-bold text-[#0F172A] mb-4">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#14B8A6] font-medium mb-4">
                        {item.description}
                      </p>
                      <p className="text-[#64748B]">
                        {item.content}
                      </p>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Angen Mwy o Gymorth?' : 'Need More Help?'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Os oes gennych gwestiynau am gyfathrebu neu ddigidol, cysylltwch â\'n tîm cyfathrebu.'
                : 'If you have questions about communications or digital, get in touch with our communications team.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:communications@sport.wales"
                className="btn btn-primary"
              >
                {isWelsh ? 'Cysylltu â Ni' : 'Contact Us'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <Link href="/clip" className="btn btn-secondary">
                {isWelsh ? 'Yn ôl i CLIP' : 'Back to CLIP'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

