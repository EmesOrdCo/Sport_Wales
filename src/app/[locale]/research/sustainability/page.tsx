import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh 
    ? 'Ymgynghoriad Cynaliadwyedd Amgylcheddol mewn Chwaraeon a Gweithgarwch Corfforol' 
    : 'Environmental Sustainability in Sport and Physical Activity Consultation';
  const description = isWelsh
    ? 'Mae Sport England, sportscotland a Chwaraeon Cymru yn ymwybodol iawn o\'r argyfwng hinsawdd ac yn gweithio gyda\'i gilydd ar gynaliadwyedd amgylcheddol.'
    : 'Sport England, sportscotland and Sport Wales are acutely aware of the climate emergency and are working together on environmental sustainability.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/research/sustainability`,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/research/sustainability`,
      languages: {
        'en': '/en/research/sustainability',
        'cy': '/cy/research/sustainability',
      },
    },
  };
}

export default async function SustainabilityConsultationPage({
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
    { name: isWelsh ? 'Ymgynghoriad Cynaliadwyedd Amgylcheddol' : 'Environmental Sustainability Consultation', url: `https://www.sport.wales/${locale}/research/sustainability` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#123F56] via-[#1E4A62] to-[#334155] overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#E11D2E] opacity-10 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[#E11D2E] opacity-10 blur-2xl"></div>
        </div>

        <div className="container relative z-10">
          {/* Breadcrumbs */}
          <nav className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">{isWelsh ? 'Hafan' : 'Home'}</Link></li>
              <li>/</li>
              <li><Link href="/research" className="hover:text-white transition-colors">{isWelsh ? 'Ymchwil a Mewnwelediad' : 'Research and Insight'}</Link></li>
              <li>/</li>
              <li><span className="text-white">{isWelsh ? 'Ymgynghoriad Cynaliadwyedd Amgylcheddol' : 'Environmental Sustainability Consultation'}</span></li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold !text-white mb-6">
              {isWelsh 
                ? 'Ymgynghoriad Cynaliadwyedd Amgylcheddol mewn Chwaraeon a Gweithgarwch Corfforol' 
                : 'Environmental Sustainability in Sport and Physical Activity Consultation'}
            </h1>
          </div>
        </div>

        {/* Wave effect */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            {/* Consultation Findings – Executive Summary */}
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#123F56] mb-6">
              Consultation Findings – Executive Summary
            </h2>

            <p className="text-[#475569] leading-relaxed mb-6">
              Following the launch of our Environmental Sustainability Plan, Sport Wales wanted to better understand from the sport and physical activity sector what is needed to accelerate action on environmental sustainability. We undertook a collaborative piece of work with Sport England and <strong>sport</strong>scotland to gather insight on current actions, challenges and support needed.
            </p>

            <p className="text-[#475569] leading-relaxed mb-6">
              The consultation was carried out by the <strong>Useful Group</strong> who held interviews and focus groups with a range of organisations and developed an online survey for grassroots clubs.
            </p>

            <p className="text-[#475569] leading-relaxed mb-6">
              The summary below sets out what we heard from you about what you're already doing, the environmental impacts and challenges that you're grappling with and the barriers to taking action. We will continue to work in collaboration with partners through the Sport Environment and Climate Coalition to directly respond to some of the challenges identified through the consultation. One example of this is <strong>'The Resource Hub'</strong> which brings together the most up-to-date knowledge on sports sustainability with practical documents and resources that can support you to take action.
            </p>

            <p className="text-[#475569] leading-relaxed mb-8">
              We are grateful to all those who took part in the consultation and will look forward to working with you on this agenda in the coming months and years.
            </p>

            {/* Partner Logos */}
            <p className="text-sm text-[#64748B] italic mb-12">
              Sport Wales' logo, Sport England's logo, sportscotland's logo and useful project's logo
            </p>

            {/* Why this consultation matters */}
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#123F56] mb-6">
              Why this consultation matters
            </h2>

            <p className="text-[#475569] leading-relaxed mb-6">
              Extreme weather events and the energy crisis are already affecting all parts of society in Great Britain, and increasing awareness about the need for accelerated action to tackle climate change is becoming more widespread globally and locally.
            </p>

            <p className="text-[#475569] leading-relaxed mb-6">
              Sport England, <strong>sport</strong>scotland and Sport Wales are acutely aware that the sports and physical activity sector will be impacted by climate change and environmental quality (affecting people's ability to participate), as well as having an impact on the environment. We acknowledge we have considerable scope, opportunity, and obligation to create positive change. However, there is no shared understanding of the problem across our sector, how to get started, and where the sector can have the greatest impact. This consultation is a first step in addressing this.
            </p>

            <p className="text-[#475569] leading-relaxed mb-8">
              Sport England will use the findings from this consultation to develop a strategy for how it can support and influence the grassroots sports and physical activity sector to accelerate action on environmental sustainability. Sport Wales (who already has a sustainability strategy, the Sport Wales Environmental Sustainability Plan) and <strong>sport</strong>scotland will use the findings and insight to inform and prioritise the actions they take to support sports clubs/groups/organisations.
            </p>

            {/* Methodology */}
            <h3 className="text-xl font-display font-bold text-[#123F56] mb-4">
              Methodology
            </h3>

            <p className="text-[#475569] leading-relaxed mb-4">
              The consultation was undertaken from April-May 2023 utilising a combination of quantitative and qualitative approaches to understand current <strong>challenges, action, opportunities</strong> and <strong>support</strong> needed.
            </p>

            <ul className="list-disc list-inside space-y-2 text-[#475569] mb-6 ml-4">
              <li>An online survey, targeted at grassroots clubs/organisations/groups, had 475 responses from across GB and 76 different sports.</li>
              <li>19 online interviews were held with a range of leaders from within the Sports Councils, system partners / umbrella bodies, and governing bodies.</li>
              <li>6 online focus groups took place, with a total of 161 people attending from governing bodies and system partners / umbrella bodies, Local Authorities, and the owners and operators of the places and spaces where physical activity happens.</li>
            </ul>

            <p className="text-[#475569] leading-relaxed mb-12">
              The consultation was undertaken by Useful Projects (a sustainability consultancy, Social Enterprise and B Corp), supported by Right Formula and EcoIMPACT SPORTS.
            </p>

            {/* Action */}
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#123F56] mb-6">
              Action
            </h2>

            <p className="text-[#475569] leading-relaxed mb-6">
              There is increasing public <strong>awareness</strong> about climate change, and this was reflected in the consultation. The consultation has revealed the sports and physical activity sector already has good levels of knowledge about environmental impacts and how it will affect clubs/organisations/groups, and plenty of <strong>ambition</strong> to tackle the issues. 82% of survey respondents said they want their organisation to be ambitious on environmental sustainability.
            </p>

            <p className="text-[#475569] leading-relaxed mb-6">
              Whilst 62% of survey respondents said they have implemented some sort of environmental action; we believe this was particularly high because the survey was likely completed by the most engaged in the sector. During the interviews and focus groups, stakeholders generally felt that minimal action is being taken by grassroots clubs/groups, but that some NGBs have started.
            </p>

            <p className="text-[#475569] leading-relaxed mb-6">
              It appears that the ability to take action is inhibited by lack of money and capacity to implement changes - in a sector that is heavily reliant on volunteers and is cash-constrained.
            </p>

            <p className="text-[#475569] leading-relaxed mb-6">
              Some parts of the sector have been taking action to manage environmental impacts for many years, particularly sports that interface with <strong>water</strong> (either water quality, flooding or drought). Improving <strong>energy efficiency</strong> of buildings, <strong>communications</strong> to influence participant behaviours (e.g. the way they travel), and <strong>reuse/recycling</strong> initiatives were also commonly reported actions.
            </p>

            <p className="text-[#475569] leading-relaxed mb-6">
              The survey revealed that organisations that own their own facilities tended to have implemented more actions than those that don't. This is likely to be because they have more control over the facility and its operations. Clubs/organisations with more money have also tended to have actioned more.
            </p>

            <p className="text-[#475569] leading-relaxed mb-6">
              Nearly a quarter of survey respondents said they have assessed their impacts and put in place a formal Environmental Sustainability Policy, Action Plan or Strategy – but we are conscious that people that responded to a survey about environmental sustainability are likely to be more engaged with the agenda.
            </p>

            <p className="text-[#475569] leading-relaxed mb-6">
              25% of survey respondents said they have never tried to access sustainability advice. For those that have, they go to a wide range of sources for this, which could be viewed as being inefficient and could also lead to mixed messaging. Sports clubs tend to go to governing bodies for advice, or seek expertise within their membership. Community organisations said they tend to go to their local authority or another local sport or physical activity organisation for advice, highlighting the importance of local networks within a geographical area.
            </p>

            <p className="text-[#475569] leading-relaxed mb-6">
              Governing bodies tend to go to consultancies/charities, and the Sports Councils. These are important considerations for the support needed. The question for the Sports Councils, is, how can they influence the improvement of this?
            </p>

            <p className="text-[#475569] leading-relaxed mb-6">
              We asked about the drivers for action. 56% of survey respondents said <strong>moral and ethical reasons</strong> are the strongest reasons, closely followed by long term <strong>business resilience planning</strong> and <strong>saving money.</strong>
            </p>

            {/* Survey Results */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 lg:p-8 mb-8">
              <h4 className="text-lg font-display font-bold text-[#123F56] mb-4">
                Reasons for the organisation's level of environmental sustainability ambition
              </h4>
              <ul className="space-y-3 text-[#475569]">
                <li className="flex justify-between items-center">
                  <span>Moral/ethical environmental responsibility reasons</span>
                  <span className="font-bold text-[#E11D2E]">56%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Long term business resilience planning (e.g., protecting sports facilities)</span>
                  <span className="font-bold text-[#E11D2E]">49%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Saving money</span>
                  <span className="font-bold text-[#E11D2E]">44%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Members/stakeholder expectation</span>
                  <span className="font-bold text-[#E11D2E]">39%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Funding/investment requirement</span>
                  <span className="font-bold text-[#E11D2E]">33%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Other</span>
                  <span className="font-bold text-[#E11D2E]">11%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Not sure</span>
                  <span className="font-bold text-[#E11D2E]">5%</span>
                </li>
              </ul>
              <p className="text-sm text-[#64748B] italic mt-4">Source: Useful Group Survey November 2023</p>
            </div>

            <p className="text-[#475569] leading-relaxed mb-6">
              Survey respondents were asked what they see as the key environmental <strong>opportunities</strong> for their organisation, as a free form answer. The most popular responses were related to:
            </p>

            <ul className="list-disc list-inside space-y-2 text-[#475569] mb-6 ml-4">
              <li>Energy and carbon</li>
              <li>Travel</li>
              <li>Waste reduction and recycling</li>
            </ul>

            <p className="text-[#475569] leading-relaxed mb-6">
              This aligns with the key impacts sports and physical activity organisations/groups said they are having on the environment and are therefore key areas for support to be provided.
            </p>

            <p className="text-[#475569] leading-relaxed mb-12">
              Through the consultation, we have gathered several <strong>best practice case studies</strong> from organisations and groups who have taken action, which can be shared with the wider sector to help accelerate progress.
            </p>
          </div>
        </div>
      </section>

      {/* Key Findings Link */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl">
            <Link 
              href="/research/sustainability/key-findings"
              className="group block p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300"
            >
              <h3 className="text-2xl font-display font-bold text-[#123F56] mb-4 group-hover:text-[#E11D2E] transition-colors">
                Environmental Sustainability in Sport and Physical Activity - Key Findings
              </h3>
              <p className="text-[#64748B] mb-6">
                A wide range of environmental challenges are facing the sector. Many of these are common across all sports, but naturally, some sports face different issues to others.
              </p>
              <span className="inline-flex items-center gap-2 text-[#E11D2E] font-semibold group-hover:gap-3 transition-all">
                Read More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

