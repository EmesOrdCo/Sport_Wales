'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isWelsh = locale === 'cy';

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden bg-mesh bg-grid"
      aria-labelledby="hero-heading"
    >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>
      
      {/* Animated gradient orbs - More red emphasis */}
      <div className="absolute top-10 -left-20 w-[500px] h-[500px] orb orb-crimson animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] orb orb-crimson animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 orb orb-amber animate-float" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="relative z-10 container pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="stagger-children">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
              {isWelsh ? 'Croeso i Chwaraeon Cymru' : 'Welcome to Sport Wales'}
            </div>

            {/* Headline */}
            <h1 
              id="hero-heading"
              className="mb-6 lg:mb-8"
            >
              <span className="block text-white drop-shadow-lg">{isWelsh ? 'Galluogi' : 'Enabling'}</span>
              <span className="block text-[#DC2626]">{isWelsh ? 'Chwaraeon' : 'Sport'}</span>
              <span className="block text-white drop-shadow-lg">{isWelsh ? 'i Ffynnu' : 'to Thrive'}</span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-white/80 max-w-lg mb-8 lg:mb-10 leading-relaxed">
              {t('description')}
            </p>

            {/* CTAs - Now mission-focused */}
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="btn btn-primary">
                {isWelsh ? 'Sut Rydym yn Helpu' : 'How We Help'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/news" className="btn btn-ghost">
                {isWelsh ? 'Ein Straeon' : 'Our Stories'}
              </Link>
            </div>
          </div>

          {/* Right Column - Mission Focus Card */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main Mission Card - Dark with red accents */}
              <div className="rounded-3xl p-8 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] border border-white/10 shadow-2xl">
                {/* Quote/Mission Statement */}
                <div className="mb-6">
                  <svg className="w-10 h-10 text-[#DC2626] mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <blockquote className="text-xl lg:text-2xl text-white font-display leading-relaxed mb-4">
                    {isWelsh 
                      ? 'Rydym am i Gymru fod yn genedl fwy egnïol ac iachach.'
                      : 'We want Wales to be a more active, healthier nation.'
                    }
                  </blockquote>
                  <p className="text-white/70 text-sm">
                    {isWelsh
                      ? 'Ein cenhadaeth yw sicrhau bod pawb yng Nghymru yn gallu mwynhau manteision chwaraeon a gweithgarwch corfforol.'
                      : 'Our mission is to ensure everyone in Wales can enjoy the benefits of sport and physical activity.'
                    }
                  </p>
                </div>

                {/* Impact highlights - people focused */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <ImpactCard 
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    }
                    label={isWelsh ? 'Cymunedau' : 'Communities'} 
                    description={isWelsh ? 'Ledled Cymru' : 'Across Wales'}
                  />
                  <ImpactCard 
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    }
                    label={isWelsh ? 'Lles' : 'Wellbeing'} 
                    description={isWelsh ? 'Corff a Meddwl' : 'Body & Mind'}
                  />
                  <ImpactCard 
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    }
                    label={isWelsh ? 'Perfformiad' : 'Performance'} 
                    description={isWelsh ? 'O Lawr Gwlad i Elît' : 'Grassroots to Elite'}
                  />
                  <ImpactCard 
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    }
                    label={isWelsh ? 'Dysgu' : 'Learning'} 
                    description={isWelsh ? 'Adnoddau a Hyfforddiant' : 'Resources & Training'}
                  />
                </div>
              </div>

              {/* Floating accent - Now crimson/red - Top right */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[#B91C3C] to-[#DC2626] rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                      {isWelsh ? 'Ein Heffaith' : 'Our Impact'}
                    </p>
                    <p className="text-sm font-bold text-white">
                      {isWelsh ? 'Gwneud Gwahaniaeth' : 'Making a Difference'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-widest">{isWelsh ? 'Sgroliwch' : 'Scroll'}</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce"></div>
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
  );
}

function ImpactCard({ icon, label, description }: { icon: React.ReactNode; label: string; description: string }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
      <div className="w-8 h-8 rounded-lg bg-[#DC2626]/20 flex items-center justify-center text-[#DC2626] flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{label}</p>
        <p className="text-xs text-white/60">{description}</p>
      </div>
    </div>
  );
}
