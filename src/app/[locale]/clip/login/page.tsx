'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export default function CLIPLoginPage() {
  const locale = useLocale();
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'CLIP' : 'CLIP', url: `https://www.sport.wales/${locale}/clip` },
    { name: isWelsh ? 'Mewngofnodi' : 'Login', url: `https://www.sport.wales/${locale}/clip/login` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {isWelsh ? 'Mewngofnodi' : 'Login'}
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Mewngofnodi i CLIP' : 'Login to CLIP'}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {isWelsh
                ? 'Mewngofnodi i\'ch cyfrif i fwynhau profiad llawn Chwaraeon Cymru'
                : 'Log in to your account to enjoy the full Sport Wales experience'}
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

      {/* Login Form Section */}
      <section className="py-16 lg:py-24 bg-white">
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

              <div className="mt-8 pt-8 border-t border-[#E2E8F0]">
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-4">
                  {isWelsh ? 'Cofrestrwch Nawr a Dechrau Dysgu' : 'Register Now and Start Learning'}
                </h3>
                <p className="text-[#64748B] mb-4">
                  {isWelsh
                    ? 'Mae CLIP ar gael ar hyn o bryd i staff Chwaraeon Cymru a phartneriaid a ariennir gan Chwaraeon Cymru.'
                    : 'CLIP is currently available for Sport Wales staff and funded partners of Sport Wales.'}
                </p>
                <p className="text-[#64748B] mb-6">
                  {isWelsh
                    ? 'I gofrestru a chael mynediad i CLIP, defnyddiwch y ddolen isod.'
                    : 'To register and access CLIP, use the link below.'}
                </p>
                <a
                  href="https://www.sport.wales/clip/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center"
                >
                  {isWelsh ? 'Cofrestru ar gyfer CLIP' : 'Register for CLIP'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <p className="text-sm text-[#94A3B8] mt-4 text-center">
                  {isWelsh ? 'Am wybodaeth bellach neu ymholiadau cysylltwch â: ' : 'For further information or enquiries contact: '}
                  <a href="mailto:communications@sport.wales" className="text-[#6366F1] hover:underline">
                    communications@sport.wales
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

