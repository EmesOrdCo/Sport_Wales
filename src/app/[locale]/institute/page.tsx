'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function InstitutePage() {
  const locale = useLocale();
  const isWelsh = locale === 'cy';

  const services = [
    {
      title: isWelsh ? 'Gwyddoniaeth Chwaraeon' : 'Sport Science',
      description: isWelsh
        ? 'Cefnogaeth wyddonol arbenigol gan gynnwys ffisioleg, biomecaneg a dadansoddi perfformiad.'
        : 'Expert scientific support including physiology, biomechanics and performance analysis.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: isWelsh ? 'Meddygaeth Chwaraeon' : 'Sports Medicine',
      description: isWelsh
        ? 'Gofal meddygol a ffisiotherapi arbenigol i helpu athletwyr i berfformio ar eu gorau a gwella o anafiadau.'
        : 'Specialist medical care and physiotherapy to help athletes perform at their best and recover from injuries.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: isWelsh ? 'Cryfder a Chyflyriad' : 'Strength & Conditioning',
      description: isWelsh
        ? 'Rhaglenni hyfforddi personol i wella cryfder, pŵer, cyflymder a dygnwch athletwyr.'
        : 'Personalised training programmes to improve athletes\' strength, power, speed and endurance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: isWelsh ? 'Seicoleg Perfformiad' : 'Performance Psychology',
      description: isWelsh
        ? 'Cefnogaeth seicolegol i helpu athletwyr i reoli pwysau, adeiladu hyder a pherfformio dan straen.'
        : 'Psychological support to help athletes manage pressure, build confidence and perform under stress.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: isWelsh ? 'Maetheg Perfformiad' : 'Performance Nutrition',
      description: isWelsh
        ? 'Cyngor maetheg arbenigol i sicrhau bod athletwyr yn cael y tanwydd cywir ar gyfer hyfforddiant a chystadlu.'
        : 'Expert nutrition advice to ensure athletes are properly fuelled for training and competition.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: isWelsh ? 'Ffordd o Fyw Perfformiad' : 'Performance Lifestyle',
      description: isWelsh
        ? 'Cefnogaeth i helpu athletwyr i gydbwyso eu gyrfa chwaraeon gydag addysg, gwaith a bywyd personol.'
        : 'Support to help athletes balance their sporting career with education, work and personal life.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#B91C3C] via-[#991B1B] to-[#7F1D1D] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white opacity-5 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-white opacity-5 blur-2xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {isWelsh ? 'Cefnogaeth Athletwyr' : 'Athlete Support'}
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-6">
              {isWelsh ? 'Sefydliad Chwaraeon Cymru' : 'Sport Wales Institute'}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {isWelsh
                ? 'Yn cefnogi athletwyr Cymreig i gyrraedd eu potensial llawn drwy wyddoniaeth chwaraeon, meddygaeth a gwasanaethau perfformiad o\'r radd flaenaf.'
                : 'Supporting Welsh athletes to reach their full potential through world-class sports science, medicine and performance services.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/performance-sport" className="btn btn-primary bg-white text-[#B91C3C] hover:bg-white/90">
                {isWelsh ? 'Chwaraeon Perfformiad' : 'Performance Sport'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contact" className="btn btn-secondary border-white/30 text-white hover:bg-white/10">
                {isWelsh ? 'Cysylltu â Ni' : 'Contact Us'}
              </Link>
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

      {/* About Institute */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
                {isWelsh ? 'Amdanom Ni' : 'About Us'}
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh ? 'Cefnogi Llwyddiant Athletwyr Cymru' : "Supporting Welsh Athletes' Success"}
              </h2>
              <p className="text-lg text-[#64748B]">
                {isWelsh
                  ? 'Mae Sefydliad Chwaraeon Cymru yn darparu gwasanaethau gwyddoniaeth chwaraeon, meddygaeth a pherfformiad i athletwyr Cymreig sy\'n cystadlu ar y llwyfan rhyngwladol. Rydym yn gweithio\'n agos gyda chyrff llywodraethu cenedlaethol a phartneriaid perfformiad i sicrhau bod athletwyr yn cael y gefnogaeth orau bosibl.'
                  : "The Sport Wales Institute provides sports science, medicine and performance services to Welsh athletes competing on the international stage. We work closely with national governing bodies and performance partners to ensure athletes receive the best possible support."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Ein Gwasanaethau' : 'Our Services'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Cefnogaeth Gynhwysfawr' : 'Comprehensive Support'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Rydym yn cynnig ystod eang o wasanaethau i helpu athletwyr i berfformio ar eu gorau.'
                : 'We offer a wide range of services to help athletes perform at their best.'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 lg:p-8 bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#B91C3C]/10 flex items-center justify-center text-[#B91C3C] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#64748B]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team GB / Welsh Athletes */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
                {isWelsh ? 'Ein Heffaith' : 'Our Impact'}
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh ? 'Cefnogi Athletwyr Cymru ar y Llwyfan Byd-eang' : 'Supporting Welsh Athletes on the World Stage'}
              </h2>
              <div className="space-y-4 text-lg text-[#334155]">
                <p>
                  {isWelsh
                    ? 'Mae athletwyr Cymreig yn cystadlu\'n llwyddiannus ar draws ystod eang o chwaraeon Olympaidd, Paralympaidd a\'r Gymanwlad.'
                    : 'Welsh athletes compete successfully across a wide range of Olympic, Paralympic and Commonwealth sports.'}
                </p>
                <p>
                  {isWelsh
                    ? 'Mae Sefydliad Chwaraeon Cymru yn chwarae rhan allweddol yn y llwyddiant hwn, gan ddarparu\'r gefnogaeth wyddonol a meddygol sy\'n galluogi athletwyr i gyrraedd eu potensial llawn.'
                    : 'The Sport Wales Institute plays a key role in this success, providing the scientific and medical support that enables athletes to reach their full potential.'}
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-2xl p-8 lg:p-10 text-center text-white">
              <div className="text-5xl lg:text-6xl font-display font-bold mb-4">🇬🇧</div>
              <h3 className="text-2xl font-display font-bold mb-4">Team GB & ParalympicsGB</h3>
              <p className="text-white/80">
                {isWelsh
                  ? 'Mae athletwyr Cymreig yn cynrychioli Prydain Fawr yn y Gemau Olympaidd a Pharalympaidd, gyda chefnogaeth gan Sefydliad Chwaraeon Cymru.'
                  : 'Welsh athletes represent Great Britain at the Olympic and Paralympic Games, supported by the Sport Wales Institute.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Eisiau Gwybod Mwy?' : 'Want to Know More?'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Cysylltwch â ni i ddysgu mwy am ein gwasanaethau a sut gallwn gefnogi athletwyr Cymreig.'
                : 'Contact us to learn more about our services and how we can support Welsh athletes.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                {isWelsh ? 'Cysylltu â Ni' : 'Contact Us'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/performance-sport" className="btn btn-secondary">
                {isWelsh ? 'Chwaraeon Perfformiad' : 'Performance Sport'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

