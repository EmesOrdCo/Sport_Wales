import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Cyhoeddiadau Allweddol' : 'Key Publications';
  const description = isWelsh
    ? 'Yma cewch ddod o hyd i\'n llyfrgell o ddogfennau a chyhoeddiadau allweddol.'
    : 'Here you will find our library of key documents and publications.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/key-publications`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/key-publications`,
      languages: {
        'en': '/en/key-publications',
        'cy': '/cy/key-publications',
      },
    },
  };
}

export default async function KeyPublicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Cyhoeddiadau Allweddol' : 'Key Publications', url: `https://www.sport.wales/${locale}/key-publications` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {isWelsh ? 'Dogfennau' : 'Documents'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Cyhoeddiadau Allweddol' : 'Key Publications'}
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              {isWelsh
                ? 'Yma cewch ddod o hyd i\'n llyfrgell o ddogfennau a chyhoeddiadau allweddol. Gallwch weld yr adroddiadau yn Gymraeg.'
                : 'Here you will find our library of key documents and publications. You can view the reports in Cymraeg.'}
            </p>
            <p className="text-lg text-white/90 leading-relaxed mt-4">
              {isWelsh
                ? 'Am ragor o wybodaeth cysylltwch â ni ar '
                : 'For more information contact us on '}
              <a href="mailto:info@sport.wales" className="text-[#B91C3C] hover:underline">info@sport.wales</a>
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

      {/* Annual Review and Accounts */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Adolygiad Blynyddol a Chyfrifon' : 'Annual Review and Accounts'}
            </h2>
            <div className="space-y-3">
              <a href="#" className="block p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all">
                <span className="font-semibold text-[#0F172A]">Sport Wales Annual Review and Accounts 2024/25</span>
                <span className="text-[#64748B] text-sm ml-2">[PDF, 18.3MB]</span>
              </a>
              <a href="#" className="block p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all">
                <span className="font-semibold text-[#0F172A]">Sport Wales Lottery Annual Review and Accounts 2024/25</span>
                <span className="text-[#64748B] text-sm ml-2">[PDF, 11.4MB]</span>
              </a>
              <a href="#" className="block p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all">
                <span className="font-semibold text-[#0F172A]">Sport Wales Annual Review and Accounts 2023/24</span>
                <span className="text-[#64748B] text-sm ml-2">[PDF, 13.8MB]</span>
              </a>
              <a href="#" className="block p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all">
                <span className="font-semibold text-[#0F172A]">Sport Wales Lottery Annual Review and Accounts 2023/24</span>
                <span className="text-[#64748B] text-sm ml-2">[PDF 19.8MB]</span>
              </a>
              <a href="#" className="block p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all">
                <span className="font-semibold text-[#0F172A]">Sport Wales Annual Review and Accounts 2022/23</span>
              </a>
              <a href="#" className="block p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all">
                <span className="font-semibold text-[#0F172A]">Sport Wales Lottery Annual Review and Accounts 2022/23</span>
              </a>
              <a href="#" className="block p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all">
                <span className="font-semibold text-[#0F172A]">Sport Wales Annual Review and Accounts 2021/22</span>
              </a>
              <a href="#" className="block p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all">
                <span className="font-semibold text-[#0F172A]">Sport Wales Lottery Annual Review and Accounts 2021/22</span>
              </a>
              <a href="#" className="block p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all">
                <span className="font-semibold text-[#0F172A]">Sport Wales Annual Review and Accounts 2020/21</span>
              </a>
              <a href="#" className="block p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all">
                <span className="font-semibold text-[#0F172A]">Sport Wales Lottery Annual Review and Accounts 2020/21</span>
              </a>
              <a href="#" className="block p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all">
                <span className="font-semibold text-[#0F172A]">Sport Wales Annual Review and Accounts 2019/20</span>
              </a>
              <a href="#" className="block p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all">
                <span className="font-semibold text-[#0F172A]">Sport Wales Lottery Annual Review and Accounts 2019/20</span>
              </a>
              <a href="#" className="block p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all">
                <span className="font-semibold text-[#0F172A]">Sport Wales Integrated Annual Report 2020/21</span>
              </a>
              <a href="#" className="block p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all">
                <span className="font-semibold text-[#0F172A]">Sport Wales Integrated Annual Report 2019/20</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Partnership Annual Report */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Adroddiad Blynyddol Partneriaeth Gymdeithasol' : 'Social Partnership Annual Report'}
            </h2>
            <div className="space-y-3">
              <a href="#" className="block p-4 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all">
                <span className="font-semibold text-[#0F172A]">Sport Wales Social Partnership Annual Report 2024/25</span>
                <span className="text-[#64748B] text-sm ml-2">[DOCx, 64.07KB]</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Welsh Language */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Y Gymraeg' : 'Welsh Language'}
            </h2>
            <div className="space-y-3">
              <a href="#" className="block p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all">
                <span className="font-semibold text-[#0F172A]">Sport Wales Welsh Language Standards</span>
              </a>
              <a href="#" className="block p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all">
                <span className="font-semibold text-[#0F172A]">Welsh Language Standards Report 2024-2025</span>
              </a>
              <a href="#" className="block p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all">
                <span className="font-semibold text-[#0F172A]">Welsh Language Standards Annual Report 2022-23</span>
              </a>
              <p className="text-[#64748B] p-4">
                {isWelsh
                  ? 'Mae adroddiad Safonau\'r Gymraeg ar gyfer 2020-21 yn ymddangos yn yr Adroddiad Blynyddol Integredig 2020-21. Mae adroddiad Safonau\'r Gymraeg ar gyfer 2021-22 yn ymddangos yn Adolygiad Blynyddol a Chyfrifon Chwaraeon Cymru 2021-22.'
                  : 'The Welsh Language Standards report for 2020-21 features within the Integrated Annual Report 2020-21. The Welsh Language Standards report for 2021-22 features within the Sport Wales Annual Review and Accounts 2021-22.'}
              </p>
              <a href="#" className="block p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all">
                <span className="font-semibold text-[#0F172A]">Welsh Language Standards Annual Report 2019/20</span>
              </a>
              <a href="#" className="block p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all">
                <span className="font-semibold text-[#0F172A]">Welsh Language Standards Annual Report 2018/19</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Review of Sport Wales */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Adolygiad o Chwaraeon Cymru' : 'Review of Sport Wales'}
            </h2>
            <p className="text-[#64748B] mb-8">
              {isWelsh
                ? 'Mae\'r adran hon yn cynnwys dogfennau sy\'n olrhain cynnydd yn erbyn gweithredoedd o\'r adolygiad.'
                : 'This section includes documents that track progress against actions from the review.'}
            </p>
            <div className="space-y-3">
              <a href="#" className="block p-4 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all">
                <span className="font-semibold text-[#0F172A]">Sport Wales Review – An Independent Report</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Royal Charter */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Siarter Frenhinol' : 'Royal Charter'}
            </h2>
            <p className="text-[#475569] mb-6">
              {isWelsh
                ? 'Sefydlwyd Chwaraeon Cymru gan '
                : 'Sport Wales was established by '}
              <a href="#" className="text-[#B91C3C] font-semibold hover:underline">
                {isWelsh ? 'Siarter Frenhinol' : 'Royal Charter'}
              </a>
              {isWelsh
                ? ' ar 4 Chwefror 1972, gyda\'r amcanion o "feithrin gwybodaeth ac arfer chwaraeon a hamdden corfforol ymhlith y cyhoedd yn gyffredinol yng Nghymru a darparu cyfleusterau ar eu cyfer".'
                : ' on 4 February 1972, with the objectives of "fostering the knowledge and practice of sport and physical recreation among the public at large in Wales and the provision of facilities thereto".'}
            </p>
          </div>
        </div>
      </section>

      {/* Grant Terms and Conditions */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Grant Chwaraeon Cymru – Telerau ac Amodau' : 'Sport Wales Grant – Terms and Conditions'}
            </h2>
            <p className="text-[#475569] mb-6">
              {isWelsh
                ? 'Cyn i chi wneud cais am grant Chwaraeon Cymru, dylech ddarllen copi o\'n Telerau ac Amodau.'
                : 'Before you apply for a Sport Wales grant, you should read a copy of our Terms and Conditions.'}
            </p>
            <a href="#" className="block p-4 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all max-w-md">
              <span className="font-semibold text-[#0F172A]">{isWelsh ? 'Telerau ac Amodau' : 'Terms and Conditions'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Concerns and Complaints Policy */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Polisi Pryderon a Chwynion Chwaraeon Cymru' : 'Sport Wales Concerns and Complaints Policy'}
            </h2>
            <a href="#" className="block p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all max-w-md">
              <span className="font-semibold text-[#0F172A]">{isWelsh ? 'Polisi Pryderon a Chwynion Chwaraeon Cymru' : 'Sport Wales Concerns and Complaints Policy'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Appeals Procedure */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Gweithdrefn Apelio yn Erbyn Penderfyniadau Buddsoddi' : 'Appeals Procedure Against Investment Decisions'}
            </h2>
            <a href="#" className="block p-4 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all max-w-md">
              <span className="font-semibold text-[#0F172A]">{isWelsh ? 'Gweithdrefn Apelio yn Erbyn Penderfyniadau Buddsoddi' : 'Appeals Procedure Against Investment Decisions'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Related Cards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl">
            {/* Board Members Card */}
            <Link
              href="/governance"
              className="group block bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                <svg className="w-12 h-12 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <p className="text-sm text-[#64748B] mb-2">{isWelsh ? 'Am Fwrdd Chwaraeon Cymru' : 'About the Sport Wales Board'}</p>
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#B91C3C] transition-colors">
                  {isWelsh ? 'Aelodau\'r Bwrdd' : 'Board Members'}
                </h3>
                <p className="text-[#64748B] text-sm mb-4">
                  {isWelsh
                    ? 'Mae aelodau\'n cael eu penodi i fwrdd Chwaraeon Cymru gan Lywodraeth Cymru.'
                    : 'Members are appointed to Sport Wales\' board by the Welsh Government.'}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C3C] group-hover:gap-3 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Our Duties Card */}
            <Link
              href="/governance"
              className="group block bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                <svg className="w-12 h-12 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <p className="text-sm text-[#64748B] mb-2">{isWelsh ? 'Mwy o Wybodaeth' : 'More Information'}</p>
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#B91C3C] transition-colors">
                  {isWelsh ? 'Ein Dyletswyddau' : 'Our Duties'}
                </h3>
                <p className="text-[#64748B] text-sm mb-4">
                  {isWelsh
                    ? 'Rydym eisiau galluogi chwaraeon yng Nghymru i ffynnu fel y gall pawb fod yn egnïol a mwynhau chwaraeon gydol oes.'
                    : 'We want to enable sport in Wales to thrive so that everyone can be active and have a lifelong enjoyment of sport.'}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C3C] group-hover:gap-3 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Freedom of Information Card */}
            <Link
              href="/freedom-of-information"
              className="group block bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                <svg className="w-12 h-12 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#B91C3C] transition-colors">
                  {isWelsh ? 'Rhyddid Gwybodaeth' : 'Freedom of Information'}
                </h3>
                <p className="text-[#64748B] text-sm mb-4">
                  {isWelsh
                    ? 'Gall unrhyw berson ofyn am wybodaeth yn ysgrifenedig gan Chwaraeon Cymru. Rhaid i ni ddarparu ymateb o fewn 20 diwrnod gwaith.'
                    : 'Any person can request information in writing from Sport Wales. We must provide a response within 20 working days.'}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C3C] group-hover:gap-3 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

