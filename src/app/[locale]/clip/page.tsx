'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function CLIPPage() {
  const t = useTranslations('common');
  const locale = useLocale();
  const isWelsh = locale === 'cy';

  const learningThemes = [
    {
      title: isWelsh ? 'Cyfathrebu a Digidol' : 'Communications and Digital',
      description: isWelsh
        ? 'Ar gyfer dysgu am bynciau gan gynnwys cyfryngau cymdeithasol, marchnata a\'r cyfryngau.'
        : 'For learning on topics including social media, marketing and media.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: 'bg-[#3B82F6]',
      href: '/clip/communications-and-digital',
      requiresLogin: false,
    },
    {
      title: isWelsh ? 'Taclo Digidol' : 'Tackle Digital',
      description: isWelsh
        ? 'Mae\'r pecyn cymorth hwn yn darparu gwybodaeth ymarferol i helpu\'ch sefydliad i gynyddu ei hyder digidol.'
        : 'This toolkit provides relevant and practical information and guidance to help your organisation increase its digital confidence.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'bg-[#10B981]',
      requiresLogin: true,
    },
    {
      title: isWelsh ? 'Mewnwelediadau, Ymchwil a Materion Cyhoeddus' : 'Insights, Research and Public Affairs',
      description: isWelsh
        ? 'Ar gyfer dysgu sut i ddefnyddio mewnwelediadau, gwella\'ch ymchwil ac eirioli chwaraeon i eraill.'
        : 'For learning about how to use insights, improve your research and advocating sport to others.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'bg-[#8B5CF6]',
      requiresLogin: true,
    },
    {
      title: isWelsh ? 'Datblygiad Athletwyr' : 'Athlete Development',
      description: isWelsh
        ? 'Ar gyfer dysgu am bynciau gan gynnwys datblygiad athletwyr, cyfranogiad a gwrth-gyffuriau.'
        : 'For learning on topics including athlete development, participation and anti-doping.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'bg-[#F59E0B]',
      requiresLogin: true,
    },
  ];

  const benefits = [
    isWelsh ? 'Mynediad ar unwaith i ystod o adnoddau dysgu.' : 'Instant access to a range of learning resources.',
    isWelsh ? 'Sesiynau hyfforddi ar-lein rheolaidd, gyda\'r cyfle i ddylanwadu ar syniadau sesiynau yn y dyfodol.' : 'Regular online training sessions, with the opportunity to influence future session ideas.',
    isWelsh ? 'Mynediad at arbenigwyr o wahanol feysydd.' : 'Access to experts from different fields.',
    isWelsh ? 'Cyfleoedd rhwydweithio.' : 'Networking opportunities.',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#6366F1]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              CLIP
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Croeso i CLIP' : 'Welcome to CLIP'}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {isWelsh
                ? 'Adnodd Dysgu Chwaraeon Cymru - eich porth i ddysgu, datblygu a rhwydweithio yn y sector chwaraeon.'
                : 'A Sport Wales Learning Resource - your gateway to learning, development and networking in the sports sector.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/clip/login"
                className="btn btn-primary"
              >
                {isWelsh ? 'Mewngofnodi i CLIP' : 'Login to CLIP'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/clip/login"
                className="btn btn-secondary border-white/30 text-white hover:bg-white/10"
              >
                {isWelsh ? 'Cofrestru ar gyfer CLIP' : 'Register for CLIP'}
              </Link>
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

      {/* What to Expect */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-[#6366F1] font-semibold text-sm uppercase tracking-wider mb-4">
                {isWelsh ? 'Beth i\'w Ddisgwyl' : 'What to Expect'}
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh ? 'Beth allwch chi ei ddisgwyl o CLIP' : 'What you can expect from CLIP'}
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6366F1]/10 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-[#6366F1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-[#334155]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                {isWelsh ? 'Cofrestrwch Nawr a Dechrau Dysgu' : 'Register Now and Start Learning'}
              </h3>
              <p className="text-[#64748B] mb-6">
                {isWelsh
                  ? 'Mae CLIP ar gael ar hyn o bryd i staff Chwaraeon Cymru a phartneriaid a ariennir gan Chwaraeon Cymru.'
                  : 'CLIP is currently available for Sport Wales staff and funded partners of Sport Wales.'}
              </p>
              <p className="text-[#64748B] mb-6">
                {isWelsh
                  ? 'I gofrestru a chael mynediad i CLIP, defnyddiwch y ddolen isod.'
                  : 'To register and access CLIP, use the link below.'}
              </p>
              <Link
                href="/clip/login"
                className="btn btn-primary w-full justify-center"
              >
                {isWelsh ? 'Mewngofnodi neu Gofrestru' : 'Login or Register'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <p className="text-sm text-[#94A3B8] mt-4 text-center">
                {isWelsh ? 'Am wybodaeth bellach cysylltwch â: ' : 'For further information contact: '}
                <a href="mailto:communications@sport.wales" className="text-[#6366F1] hover:underline">
                  communications@sport.wales
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Themes */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-[#6366F1] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Themâu Dysgu' : 'Learning Themes'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Archwilio\'r Adnoddau' : 'Explore the Resources'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Mae dysgu CLIP wedi\'i rannu\'n nifer o themâu. Cliciwch y blychau isod i archwilio\'r adnoddau.'
                : 'CLIP learning is split into a number of themes. Click the boxes below to explore the resources.'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {learningThemes.map((theme, index) => {
              const CardContent = (
                <>
                  <div className={`w-14 h-14 rounded-xl ${theme.color} flex items-center justify-center text-white mb-6`}>
                    {theme.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                    {theme.title}
                  </h3>
                  <p className="text-[#64748B] mb-4">
                    {theme.description}
                  </p>
                  {theme.requiresLogin ? (
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F1F5F9] text-sm font-medium text-[#64748B]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      {isWelsh ? 'Mewngofnodi i weld cynnwys' : 'Login to view content'}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#3B82F6]">
                      {isWelsh ? 'Archwilio' : 'Explore'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  )}
                </>
              );

              if (theme.href) {
                return (
                  <Link
                    key={index}
                    href={theme.href}
                    className="group p-6 lg:p-8 bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#3B82F6] hover:shadow-xl transition-all duration-300 block"
                  >
                    {CardContent}
                  </Link>
                );
              }

              return (
                <div
                  key={index}
                  className="p-6 lg:p-8 bg-white rounded-2xl border border-[#E2E8F0]"
                >
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Barod i Ddechrau Dysgu?' : 'Ready to Start Learning?'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Ymunwch â channoedd o weithwyr proffesiynol chwaraeon sydd eisoes yn defnyddio CLIP i ddatblygu eu sgiliau.'
                : 'Join hundreds of sports professionals already using CLIP to develop their skills.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.sport.wales/clip/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {isWelsh ? 'Ewch i CLIP' : 'Go to CLIP'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link href="/contact" className="btn btn-secondary">
                {isWelsh ? 'Cysylltu â Ni' : 'Contact Us'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

