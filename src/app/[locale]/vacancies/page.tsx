import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Swyddi Gwag' : 'Vacancies';
  const description = isWelsh
    ? 'Edrychwch ar ein swyddi gwag presennol a chymwyswch ar-lein.'
    : 'Browse our current vacancies and apply online.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/vacancies`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/vacancies`,
      languages: {
        'en': '/en/vacancies',
        'cy': '/cy/vacancies',
      },
    },
  };
}

export default async function VacanciesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Gyrfaoedd' : 'Careers', url: `https://www.sport.wales/${locale}/careers` },
    { name: isWelsh ? 'Swyddi Gwag' : 'Vacancies', url: `https://www.sport.wales/${locale}/vacancies` },
  ];

  // Example vacancies - in a real implementation, this would come from a CMS or API
  const vacancies = [
    {
      id: 1,
      title: isWelsh ? 'Rheolwr Cymunedol' : 'Community Manager',
      department: isWelsh ? 'Cefnogaeth Chwaraeon' : 'Sport Support',
      location: isWelsh ? 'Caerdydd' : 'Cardiff',
      type: isWelsh ? 'Llawn Amser' : 'Full Time',
      closingDate: '2024-01-15',
      description: isWelsh
        ? 'Chwilio am reolwr cymunedol i arwain ein gwaith cefnogi chwaraeon yng nghymunedau ledled Cymru.'
        : 'Seeking a community manager to lead our work supporting sport in communities across Wales.',
    },
    {
      id: 2,
      title: isWelsh ? 'Uwch Ddatblygwr Chwaraeon' : 'Senior Sport Development Officer',
      department: isWelsh ? 'Datblygu Chwaraeon' : 'Sport Development',
      location: isWelsh ? 'Glannau Dyfrdwy' : 'Deeside',
      type: isWelsh ? 'Llawn Amser' : 'Full Time',
      closingDate: '2024-01-20',
      description: isWelsh
        ? 'Cyfle i arwain datblygiad chwaraeon mewn ysgolion a chlybiau yn y gogledd.'
        : 'Opportunity to lead sport development in schools and clubs in the north.',
    },
    {
      id: 3,
      title: isWelsh ? 'Cynorthwyydd Cyfathrebu' : 'Communications Assistant',
      department: isWelsh ? 'Cyfathrebu' : 'Communications',
      location: isWelsh ? 'Caerdydd' : 'Cardiff',
      type: isWelsh ? 'Rhan Amser' : 'Part Time',
      closingDate: '2024-01-18',
      description: isWelsh
        ? 'Cymorth i dîm cyfathrebu gyda chynnwys, cyfryngau cymdeithasol a chysylltiadau cyhoeddus.'
        : 'Supporting the communications team with content, social media and public relations.',
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#123F56] via-[#1E4A62] to-[#123F56] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#E11D2E]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#E11D2E]/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {isWelsh ? 'Swyddi Gwag' : 'Vacancies'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Swyddi Gwag Presennol' : 'Current Vacancies'}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {isWelsh
                ? 'Edrychwch ar ein swyddi gwag presennol a chymwyswch ar-lein. Mae gennym gyfleoedd cyffrous ar gyfer pobl sy\'n angerddol am chwaraeon.'
                : 'Browse our current vacancies and apply online. We have exciting opportunities for people passionate about sport.'}
            </p>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120V60C360 20 720 0 1080 20C1260 30 1380 50 1440 60V120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Vacancies List */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          {vacancies.length > 0 ? (
            <div className="space-y-6">
              {vacancies.map((vacancy) => (
                <div
                  key={vacancy.id}
                  className="p-6 lg:p-8 rounded-2xl border border-[#E2E8F0] hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h2 className="text-2xl font-display font-bold text-[#123F56]">
                          {vacancy.title}
                        </h2>
                        <span className="px-3 py-1 rounded-full bg-[#E11D2E]/10 text-[#E11D2E] text-sm font-medium">
                          {vacancy.department}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[#64748B] mb-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {vacancy.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {vacancy.type}
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {isWelsh ? 'Dyddiad cau:' : 'Closing date:'} {new Date(vacancy.closingDate).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })}
                        </div>
                      </div>
                      <p className="text-[#64748B] mb-4">{vacancy.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <a
                        href={`https://sport.wales/careers/apply/${vacancy.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#E11D2E] text-white font-semibold hover:bg-[#E11D2E] transition-colors"
                      >
                        {isWelsh ? 'Cymwys Nawr' : 'Apply Now'}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-[#64748B] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h2 className="text-2xl font-display font-bold text-[#123F56] mb-2">
                {isWelsh ? 'Dim Swyddi Gwag Ar Hyn o Bryd' : 'No Current Vacancies'}
              </h2>
              <p className="text-[#64748B] mb-6">
                {isWelsh
                  ? 'Nid oes gennym swyddi gwag ar hyn o bryd, ond mae croeso i chi gysylltu â ni i drafod cyfleoedd yn y dyfodol.'
                  : 'We don\'t have any current vacancies, but you\'re welcome to get in touch to discuss future opportunities.'}
              </p>
              <Link href="/contact" className="btn btn-primary">
                {isWelsh ? 'Cysylltu â Ni' : 'Contact Us'}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-[#E11D2E] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Sut i Wneud Cais' : 'How to Apply'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#123F56] mb-6">
              {isWelsh ? 'Y Broses Ymgeisio' : 'The Application Process'}
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E11D2E] text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-[#123F56] mb-2">
                      {isWelsh ? 'Dewiswch Swydd' : 'Choose a Role'}
                    </h3>
                    <p className="text-[#64748B]">
                      {isWelsh
                        ? 'Edrychwch drwy ein swyddi gwag a dewiswch y swydd sy\'n addas i\'ch sgiliau a\'ch profiad.'
                        : 'Browse through our vacancies and select the role that matches your skills and experience.'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E11D2E] text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-[#123F56] mb-2">
                      {isWelsh ? 'Cwblhewch y Ffurflen' : 'Complete the Form'}
                    </h3>
                    <p className="text-[#64748B]">
                      {isWelsh
                        ? 'Cwblhewch y ffurflen ymgeisio ar-lein gan gynnwys eich CV a llythyr cyflwyno.'
                        : 'Complete the online application form including your CV and covering letter.'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E11D2E] text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-[#123F56] mb-2">
                      {isWelsh ? 'Aros am Ymateb' : 'Await Response'}
                    </h3>
                    <p className="text-[#64748B]">
                      {isWelsh
                        ? 'Byddwn yn adolygu eich cais ac yn cysylltu â chi os bydd eich sgiliau yn addas ar gyfer y swydd.'
                        : 'We\'ll review your application and get in touch if your skills are a good fit for the role.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[#E11D2E] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Cwestiynau?' : 'Questions?'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#123F56] mb-4">
              {isWelsh ? 'Angen Mwy o Wybodaeth?' : 'Need More Information?'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Os oes gennych unrhyw gwestiynau am ein swyddi gwag neu\'r broses ymgeisio, cysylltwch â ni.'
                : 'If you have any questions about our vacancies or the application process, get in touch.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#E11D2E] text-white font-semibold hover:bg-[#E11D2E] transition-colors"
              >
                {isWelsh ? 'Yn ôl i Gyrfaoedd' : 'Back to Careers'}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full border-2 border-[#E2E8F0] text-[#123F56] font-semibold hover:border-[#E11D2E] hover:text-[#E11D2E] transition-colors"
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

