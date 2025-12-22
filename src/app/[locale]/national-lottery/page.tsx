'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function NationalLotteryPage() {
  const locale = useLocale();
  const isWelsh = locale === 'cy';

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#FBBF24] opacity-10 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[#F472B6] opacity-10 blur-2xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5 text-[#FBBF24]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              {isWelsh ? 'Y Loteri Genedlaethol' : 'National Lottery'}
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh 
                ? 'Chwaraeon Cymru a\'r Loteri Genedlaethol' 
                : 'Welsh Sport and The National Lottery'}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {isWelsh
                ? 'Ers 1994, mae mwy na £356 miliwn o gyllid y Loteri Genedlaethol wedi\'i fuddsoddi yng nghwaraeon Cymru drwy Chwaraeon Cymru.'
                : 'Since 1994, more than £356m of National Lottery funding has been invested into Welsh sport through Sport Wales.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/funding" className="btn btn-primary">
                {isWelsh ? 'Gwneud Cais am Gyllid' : 'Apply for Funding'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="https://www.national-lottery.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary border-white/30 text-white hover:bg-white/10"
              >
                {isWelsh ? 'Ymweld â\'r Loteri Genedlaethol' : 'Visit National Lottery'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* How National Lottery has shaped sport */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
                {isWelsh ? 'Ein Heffaith' : 'Our Impact'}
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh 
                  ? 'Sut mae\'r Loteri Genedlaethol wedi siapio chwaraeon yng Nghymru?' 
                  : 'How has the National Lottery shaped sport in Wales?'}
              </h2>
              <div className="space-y-4 text-lg text-[#334155]">
                <p>
                  {isWelsh
                    ? 'Heb y cyllid hwn, byddai chwaraeon yng Nghymru yn edrych yn wahanol iawn ac ni fyddai wedi gwneud yr un effaith.'
                    : "Without this funding, sport in Wales would look very different and it wouldn't have made the same impact."}
                </p>
                <p>
                  {isWelsh
                    ? 'Ond diolch i chwaraewyr y Loteri Genedlaethol, mae mwy na £30 miliwn yn cael ei godi bob wythnos ar gyfer achosion da, gan gynnwys y cyllid hanfodol i chwaraeon yng Nghymru.'
                    : "But thanks to National Lottery players, more than £30 million is raised every week for good causes, including the vital funding into sport in Wales."}
                </p>
                <p>
                  {isWelsh
                    ? 'Felly, os ydych chi wedi chwarae\'r Loteri Genedlaethol, rydych chi wedi helpu i wneud gwahaniaeth i blant, cymunedau, hyfforddwyr, clybiau ac athletwyr Cymru. Ac mae\'n fwy na thebyg bod prosiect yn agos atoch chi sy\'n elwa o\'r cyllid hwn.'
                    : "So, if you have played the National Lottery, you've helped make a difference to the children, communities, coaches, clubs and athletes of Wales. And it's more than likely there's a project near you that has benefited from this funding."}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] rounded-3xl p-8 lg:p-10 text-center">
                <div className="text-6xl lg:text-7xl font-display font-bold text-white mb-4">
                  £356m+
                </div>
                <p className="text-xl text-white/90 mb-6">
                  {isWelsh 
                    ? 'wedi\'i fuddsoddi yng nghwaraeon Cymru ers 1994' 
                    : 'invested into Welsh sport since 1994'}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold text-white">£30m+</div>
                    <p className="text-sm text-white/80">
                      {isWelsh ? 'bob wythnos i achosion da' : 'weekly for good causes'}
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold text-white">30+</div>
                    <p className="text-sm text-white/80">
                      {isWelsh ? 'mlynedd o gefnogaeth' : 'years of support'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FBBF24] text-[#0F172A] mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Diolch i Chwaraewyr y Loteri Genedlaethol' : 'Thank You to National Lottery Players'}
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {isWelsh
                ? 'Mae pob tocyn yn helpu i gefnogi chwaraeon yng Nghymru. Diolch am wneud gwahaniaeth i\'n cymunedau, ein clybiau a\'n athletwyr.'
                : "Every ticket helps support sport in Wales. Thank you for making a difference to our communities, our clubs and our athletes."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/funding" className="btn btn-primary">
                {isWelsh ? 'Gwneud Cais am Gyllid' : 'Apply for Funding'}
              </Link>
              <Link href="/news" className="btn btn-secondary border-white/30 text-white hover:bg-white/10">
                {isWelsh ? 'Gweld Newyddion' : 'View News'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

