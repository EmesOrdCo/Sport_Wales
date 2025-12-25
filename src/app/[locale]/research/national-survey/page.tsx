import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Arolwg Cenedlaethol Cymru 2024-25' : 'National Survey for Wales 2024-25';
  const description = isWelsh
    ? 'Dyma\'r canfyddiadau allweddol o adran Chwaraeon a Ffordd o Fyw Actif Arolwg Cenedlaethol Cymru 2024-25'
    : 'Here are the key findings from the Sport & Active Lifestyles section of the National Survey for Wales 2024-25';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/research/national-survey`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/research/national-survey`,
      languages: {
        'en': '/en/research/national-survey',
        'cy': '/cy/research/national-survey',
      },
    },
  };
}

export default async function NationalSurveyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Ymchwil a Mewnwelediad' : 'Research and Insight', url: `https://www.sport.wales/${locale}/research` },
    { name: isWelsh ? 'Arolwg Cenedlaethol Cymru 2024-25' : 'National Survey for Wales 2024-25', url: `https://www.sport.wales/${locale}/research/national-survey` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#14B8A6] via-[#0D9488] to-[#14B8A6] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <Link 
              href="/research"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium mb-6 hover:bg-white/30 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {isWelsh ? 'Ymchwil a Mewnwelediad' : 'Research and Insight'}
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Arolwg Cenedlaethol Cymru 2024-25' : 'National Survey for Wales 2024-25'}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {isWelsh
                ? 'Dyma\'r canfyddiadau allweddol o adran Chwaraeon a Ffordd o Fyw Actif Arolwg Cenedlaethol Cymru 2024-25'
                : 'Here are the key findings from the Sport & Active Lifestyles section of the National Survey for Wales 2024-25'}
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

      {/* Main Content Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            {/* Headline Findings */}
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              Headline Findings:
            </h2>
            
            <p className="text-lg text-[#334155] leading-relaxed mb-8">
              The key findings from the Sport & Active Lifestyles section of the National Survey for Wales are presented below. More detail, such as population counts and geographies, can be found within the main sections of the report.
            </p>

            {/* Participation */}
            <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
              Participation:
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">59% of adults in Wales participated in sport and physical activity [1] during the last four weeks.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">35% of adults in Wales participated in sport and physical activity three or more times per week (Future Generations Indicator No. 38). This is lower than in 2022-23 when the percentage was 39%.</span>
              </li>
            </ul>

            {/* Level of Participation */}
            <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
              Level of Participation [2]:
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">79% of adults, who participate, do so non-competitively, for example for health or leisure.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">18% competed at an amateur level.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">2% competed at a professional or semi-professional level.</span>
              </li>
            </ul>

            {/* Demand */}
            <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
              Demand:
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">Overall, 35% of all adults said they wanted to participate in more sport and physical activity.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">27% of adults who had not participated in sport and physical activity in the last four weeks indicated they would like to participate. This equates to 11% of the total adult population in Wales.</span>
              </li>
            </ul>

            {/* Reasons that would encourage future participation */}
            <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
              Reasons that would encourage future participation:
            </h3>
            <p className="text-lg text-[#334155] leading-relaxed mb-4">
              Approximately three in ten adults (31%) had not participated in sport and physical activity in the last 4 weeks and had no demand to.
            </p>
            <p className="text-lg text-[#334155] leading-relaxed mb-4">
              Based on the adults who had participated in sport and physical activity or who had demand:
            </p>
            <p className="text-lg text-[#334155] leading-relaxed mb-4">
              The top three reasons that would encourage future participation were:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">'If I was less busy with work' (44%)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">'If there were more facilities, clubs or groups in my area' (41%)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">'If it cost less' (31%)</span>
              </li>
            </ul>

            {/* Sport Facilities */}
            <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
              Sport Facilities:
            </h3>
            <p className="text-lg text-[#334155] leading-relaxed mb-4">
              Based on the adults who had participated in sport and physical activity or who had demand:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">Almost four in every ten adults in Wales (38%) had used a sport or physical activity facility in their local area within the last 12 months.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">27% of those who had not used a sport or physical activity facility in their local area had wanted to.</span>
              </li>
            </ul>

            {/* Volunteering in sport */}
            <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
              Volunteering in sport:
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">Fewer than one in ten adults (9%) gave up time for free to help with a sporting activity in the last 12 months, i.e. they volunteered in sport.</span>
              </li>
            </ul>

            {/* Sport Spectating */}
            <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
              Sport Spectating:
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">37% of adults had attended at least one sport event as a spectator in the last 12 months.</span>
              </li>
            </ul>

            {/* Attitudes towards Physical Activity */}
            <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
              Attitudes towards Physical Activity:
            </h3>
            <p className="text-lg text-[#334155] leading-relaxed mb-4">
              Based on the adults who had participated in sport and physical activity or who had demand:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6] flex-shrink-0 mt-2.5"></div>
                <span className="text-lg text-[#334155]">85% agreed or agreed strongly that 'I have the opportunity to be physically active' and 'I have the confidence to be physically active' and similarly 84% agreed or strongly agreed with the statement 'I find physical activity enjoyable'.</span>
              </li>
            </ul>

            {/* Closing paragraph */}
            <p className="text-lg text-[#334155] leading-relaxed mb-4">
              This report will present the detailed findings from the Sport & Active Lifestyles section of the National Survey for Wales.
            </p>
            <p className="text-lg text-[#334155] leading-relaxed">
              For more information on methodology, please refer to the Introduction.
            </p>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
              <h2 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                {isWelsh ? 'Am ragor o wybodaeth' : 'For further information'}
              </h2>
              <p className="text-lg text-[#334155] mb-4">
                {isWelsh ? 'Cysylltwch â ni ar:' : 'Please contact us on:'}
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:insight@sport.wales" className="text-[#14B8A6] hover:underline font-medium text-lg">
                    insight@sport.wales
                  </a>
                </li>
                <li>
                  <a href="tel:03003003116" className="text-[#14B8A6] hover:underline font-medium text-lg">
                    0300 300 3116
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
