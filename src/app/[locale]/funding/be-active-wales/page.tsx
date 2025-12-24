import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';
  
  const title = isWelsh ? 'Cronfa Cymru Actif' : 'Be Active Wales Fund';
  const description = isWelsh 
    ? 'Darparu cyllid y Loteri Genedlaethol i helpu clybiau chwaraeon a grwpiau cymunedol yng Nghymru i gael mwy o bobl yn actif.'
    : 'Providing National Lottery funding to help sports clubs and community groups in Wales to get more people active.';
  
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/funding/be-active-wales`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/funding/be-active-wales`,
      languages: {
        'en': '/en/funding/be-active-wales',
        'cy': '/cy/funding/be-active-wales',
      },
    },
  };
}

export default async function BeActiveWalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Cyllid a Chefnogaeth' : 'Funding and Support', url: `https://www.sport.wales/${locale}/funding` },
    { name: isWelsh ? 'Cronfa Cymru Actif' : 'Be Active Wales Fund', url: `https://www.sport.wales/${locale}/funding/be-active-wales` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#DC2626] via-[#B91C3C] to-[#DC2626] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#F59E0B]/20 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {isWelsh ? '£300 - £50,000' : '£300 - £50,000'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Cronfa Cymru Actif' : 'Be Active Wales Fund'}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {isWelsh
                ? 'Darparu cyllid y Loteri Genedlaethol i helpu clybiau chwaraeon a grwpiau cymunedol yng Nghymru i gael mwy o bobl yn actif.'
                : 'Providing National Lottery funding to help sports clubs and community groups in Wales to get more people active.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.sport.wales/grants-and-funding/beactivewalesfund/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-white text-[#DC2626] font-semibold hover:bg-[#F8FAFC] transition-colors"
              >
                {isWelsh ? 'Gwneud Cais Nawr' : 'Apply Now'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link 
                href="/funding"
                className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-colors"
              >
                {isWelsh ? 'Cyfleoedd Cyllid Eraill' : 'Other Funding Opportunities'}
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

      {/* About the Fund Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Am y Gronfa' : 'About the Fund'}
            </h2>
            <p className="text-lg text-[#334155] leading-relaxed">
              {isWelsh
                ? 'Mae Cronfa Cymru Actif yn grant a gefnogir gan y Loteri Genedlaethol, sy\'n cynnig grantiau o £300 i £50,000 i glybiau chwaraeon dielw a grwpiau cymunedol ledled Cymru i annog mwy o bobl i gymryd rhan mewn chwaraeon.'
                : 'The Be Active Wales Fund is a grant supported by the National Lottery, offering grants from £300 to £50,000 to not-for-profit sports clubs and community groups across Wales to encourage more people to participate in sport.'}
            </p>
          </div>
        </div>
      </section>

      {/* What can you get funding for? */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Beth allwch chi gael cyllid ar ei gyfer?' : 'What can you get funding for?'}
            </h2>
            <ul className="space-y-4">
              {[
                isWelsh ? 'Offer i helpu mwy o bobl i gymryd rhan mewn chwaraeon' : 'Equipment to help more people take part in sport',
                isWelsh ? 'Cyrsiau hyfforddi (hyd at lefel 2) sy\'n uwchsgilio hyfforddwyr a gwirfoddolwyr' : 'Coaching courses (up to level 2) that upskill coaches and volunteers',
                isWelsh ? 'Cyrsiau hyfforddi lefel mynediad, megis Cymorth Cyntaf neu Ddyfarnu' : 'Entry-level training courses, such as First Aid or Officiating',
                isWelsh ? 'Llogi lleoliad ar gyfer timau newydd yn unig (am uchafswm o ddeg wythnos)' : 'Venue hire for new teams only (for a maximum of ten weeks)',
                isWelsh ? 'Prosiectau gwella caeau' : 'Pitch improvement projects',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#DC2626] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg text-[#334155]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who can apply? */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Pwy all wneud cais?' : 'Who can apply?'}
            </h2>
            <ul className="space-y-4">
              {[
                isWelsh ? 'Clybiau chwaraeon dielw neu grwpiau cymunedol yng Nghymru' : 'Not-for-profit sports clubs or community groups in Wales',
                isWelsh ? 'Rhaid i brosiectau ddigwydd yng Nghymru ac yn bennaf o fudd i drigolion Cymru' : 'Projects must take place in Wales and primarily benefit Welsh residents',
                isWelsh ? 'Ni ddylai prosiectau fod wedi cychwyn nac yn cynnwys eitemau a brynwyd ymlaen llaw' : 'Projects should not have commenced or include pre-purchased items',
                isWelsh ? 'Dylai prosiectau anelu at gynyddu cyfranogiad mewn chwaraeon' : 'Projects should aim to increase sports participation',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#14B8A6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg text-[#334155]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How is funding awarded? */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Sut mae cyllid yn cael ei ddyfarnu?' : 'How is funding awarded?'}
            </h2>
            <div className="space-y-6 text-lg text-[#334155]">
              <p>
                {isWelsh
                  ? 'Mae grantiau\'n amrywio rhwng £300 a £50,000. Rhaid i glybiau gyfrannu o leiaf 10% o gyfanswm cost y prosiect.'
                  : 'Grants range between £300 and £50,000. Clubs must contribute at least 10% of the total project cost.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 lg:p-8 rounded-2xl bg-white border border-[#E2E8F0]">
                <div className="text-sm font-semibold text-[#64748B] uppercase tracking-wider mb-2">
                  {isWelsh ? 'Grantiau £300 - £25,000' : 'Grants £300 - £25,000'}
                </div>
                <div className="text-3xl font-display font-bold text-[#DC2626] mb-3">
                  {isWelsh ? 'Hyd at 90%' : 'Up to 90%'}
                </div>
                <p className="text-[#64748B]">
                  {isWelsh
                    ? 'Mae Chwaraeon Cymru yn ariannu hyd at 90% o gostau\'r prosiect'
                    : 'Sport Wales funds up to 90% of project costs'}
                </p>
              </div>

              <div className="p-6 lg:p-8 rounded-2xl bg-white border border-[#E2E8F0]">
                <div className="text-sm font-semibold text-[#64748B] uppercase tracking-wider mb-2">
                  {isWelsh ? 'Grantiau £25,001 - £50,000' : 'Grants £25,001 - £50,000'}
                </div>
                <div className="text-3xl font-display font-bold text-[#DC2626] mb-3">
                  {isWelsh ? 'Hyd at 80%' : 'Up to 80%'}
                </div>
                <p className="text-[#64748B]">
                  {isWelsh
                    ? 'Mae Chwaraeon Cymru yn ariannu hyd at 80% o gostau\'r prosiect'
                    : 'Sport Wales funds up to 80% of project costs'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help? */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Angen help?' : 'Need help?'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#DC2626]/10 flex items-center justify-center text-[#DC2626]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#64748B] uppercase tracking-wider">
                      {isWelsh ? 'E-bost' : 'Email'}
                    </div>
                    <a href="mailto:beactivewales@sport.wales" className="text-[#DC2626] font-semibold hover:underline">
                      beactivewales@sport.wales
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#DC2626]/10 flex items-center justify-center text-[#DC2626]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#64748B] uppercase tracking-wider">
                      {isWelsh ? 'Ffôn' : 'Phone'}
                    </div>
                    <a href="tel:03003003102" className="text-[#DC2626] font-semibold hover:underline">
                      0300 3003102
                    </a>
                    <p className="text-sm text-[#64748B] mt-1">
                      {isWelsh ? 'Llun - Gwener: 10am - 12:30pm a 1:15pm – 4pm' : 'Monday to Friday: 10am - 12:30pm and 1:15pm – 4pm'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Barod i Wneud Cais?' : 'Ready to Apply?'}
            </h2>
            <p className="text-lg text-white/80 mb-8">
              {isWelsh
                ? 'Dewch o hyd i ragor o wybodaeth am y gronfa ac ewch ati i wneud cais heddiw.'
                : 'Find out more about the fund and get started with your application today.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://www.sport.wales/grants-and-funding/beactivewalesfund/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-4 px-8 rounded-full bg-[#DC2626] text-white font-semibold hover:bg-[#B91C3C] transition-colors"
              >
                {isWelsh ? 'Gwneud Cais Nawr' : 'Apply Now'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link 
                href="/funding"
                className="inline-flex items-center gap-2 py-4 px-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-colors"
              >
                {isWelsh ? 'Cyfleoedd Cyllid Eraill' : 'Other Funding Options'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
