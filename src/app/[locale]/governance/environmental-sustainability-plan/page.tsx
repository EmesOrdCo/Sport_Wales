import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Cynllun Cynaliadwyedd Amgylcheddol' : 'Environmental Sustainability Plan';
  const description = isWelsh
    ? 'Mae Chwaraeon Cymru wedi ymrwymo\'n llwyr i chwarae ein rhan wrth fynd i\'r afael â\'r argyfyngau hinsawdd a natur.'
    : 'Sport Wales is wholly committed to playing our part in tackling the climate and nature emergencies.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/governance/environmental-sustainability-plan`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/governance/environmental-sustainability-plan`,
      languages: {
        'en': '/en/governance/environmental-sustainability-plan',
        'cy': '/cy/governance/environmental-sustainability-plan',
      },
    },
  };
}

export default async function EnvironmentalSustainabilityPlanPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Polisïau a Llywodraethu' : 'Policies and Governance', url: `https://www.sport.wales/${locale}/governance` },
    { name: isWelsh ? 'Cynllun Cynaliadwyedd Amgylcheddol' : 'Environmental Sustainability Plan', url: `https://www.sport.wales/${locale}/governance/environmental-sustainability-plan` },
  ];

  const planSections = [
    {
      number: '1',
      title: isWelsh ? 'Effaith Newid Hinsawdd' : 'Impact of Climate Change',
      href: '#',
    },
    {
      number: '2',
      title: isWelsh ? 'Newid Hinsawdd a Chwaraeon' : 'Climate Change and Sport',
      href: '#',
    },
    {
      number: '3',
      title: isWelsh ? 'Cyd-destun Deddfwriaethol a Pholisi' : 'Legislative and Policy Context',
      href: '#',
    },
    {
      number: '4',
      title: isWelsh ? 'Ble rydyn ni nawr?' : 'Where are we now?',
      href: '#',
    },
    {
      number: '5',
      title: isWelsh ? 'Ein cynllun ar gyfer y dyfodol' : 'Our plan for the future',
      href: '#',
    },
    {
      number: '6',
      title: isWelsh ? 'Ein ffyrdd o weithio' : 'Our ways of working',
      href: '#',
    },
    {
      number: '7',
      title: isWelsh ? 'Geirfa Termau' : 'Glossary of Terms',
      href: '#',
    },
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {isWelsh ? 'Polisïau a Llywodraethu' : 'Policies and Governance'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Cynllun Cynaliadwyedd Amgylcheddol' : 'Environmental Sustainability Plan'}
            </h1>
            <div className="space-y-4 text-lg text-white/90 leading-relaxed">
              <p>
                {isWelsh
                  ? 'Y Weledigaeth ar gyfer Chwaraeon yng Nghymru yw y gall pawb gael mwynhad gydol oes o chwaraeon. Mae\'r argyfwng hinsawdd yn fygythiad sylweddol i wireddu\'r Weledigaeth.'
                  : 'The Vision for Sport in Wales is that everyone can have a lifetime enjoyment of sport. The climate emergency poses a significant threat to realising the Vision.'}
              </p>
              <p>
                {isWelsh
                  ? 'Rydym eisoes yn gweld cynnydd yn amlder llifogydd i gaeau a lleoedd chwarae eraill, gan amharu ar amserlenni chwaraeon a chyda\'r potensial i effeithio\'n andwyol ar gyfranogiad. Mae cyfnodau o wres eithafol ac ansawdd aer gwael yn arwain at gemau wedi\'u canslo, gwaethygu cyflyrau iechyd presennol a/neu berffformiad athletwyr is.'
                  : 'We are already seeing increases in the frequency of flooding to pitches and other playing surfaces, disrupting sporting schedules and with the potential to adversely impact participation. Periods of extreme heat and poor air quality are leading to cancelled fixtures, an exacerbation of existing health conditions and/or impaired athlete performance. The impact will be felt across the breadth of sports at both a community and high-performance level.'}
              </p>
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

      {/* Foreword Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Rhagair' : 'Foreword'}
            </h2>
            <div className="prose prose-lg max-w-none text-[#475569] space-y-6">
              <p>
                {isWelsh
                  ? 'Mae Chwaraeon Cymru wedi ymrwymo\'n llwyr i chwarae ein rhan wrth fynd i\'r afael â\'r argyfyngau hinsawdd a natur a gwireddu uchelgais Llywodraeth Cymru ar gyfer sector cyhoeddus Cymru sero net erbyn 2030.'
                  : 'Sport Wales is wholly committed to playing our part in tackling the climate and nature emergencies and realising the Welsh Government ambition for a net zero Welsh public sector by 2030.'}
              </p>
              <p>
                {isWelsh
                  ? 'Mae Chwaraeon Cymru eisoes yn cymryd camau trwy ganolbwyntio ar ffynonellau ynni adnewyddadwy, gosod paneli ynni solar a system pwmp gwres o\'r ddaear arloesol ym Mhlas Menai, Canolfan Awyr Agored Genedlaethol Cymru. Rydym yn cydnabod bod llawer mwy i\'w wneud ac wedi datblygu ein Cynllun Cynaliadwyedd Amgylcheddol cyntaf mewn partneriaeth â\'r Carbon Trust, gan ymgynghori â\'n staff a\'n rhanddeiliaid.'
                  : 'Sport Wales are already taking steps by focusing on renewable energy sources, installing solar energy panels and an innovative ground source heat pump system at Plas Menai, the National Outdoor Centre for Wales. We recognise that there is much more to do and have developed our first Environmental Sustainability Plan in partnership with the Carbon Trust, consulting with our staff and our stakeholders.'}
              </p>
              <p>
                {isWelsh
                  ? 'Fel y sefydliad cenedlaethol sy\'n gyfrifol am ddatblygu a hyrwyddo chwaraeon a gweithgarwch corfforol yng Nghymru, rydym yn cydnabod bod gennym rôl arweiniol i\'w chwarae. Nod ein Cynllun nid yn unig yw lleihau ein hôl troed carbon sefydliadol ein hunain a chyfrannu at fioamrywiaeth well ond hefyd cefnogi\'r sector i wneud gwelliannau.'
                  : 'As the national organisation responsible for developing and promoting sport and physical activity in Wales, we recognise that we have a leading role to play. Our Plan is not only aimed at reducing our own organisational carbon footprint and contributing to enhanced biodiversity but also supporting the sector to make improvements. We know that working with and learning from colleagues within sport will amplify the positive environmental impact and contribution to net zero far beyond our own organisational boundary.'}
              </p>
              <p className="font-semibold">
                {isWelsh
                  ? 'Mae ein Cynllun yn canolbwyntio ar bum thema allweddol:'
                  : 'Our Plan is centred around five key themes:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{isWelsh ? 'Ein Pobl' : 'Our People'}</li>
                <li>{isWelsh ? 'Ein Partneriaid' : 'Our Partners'}</li>
                <li>{isWelsh ? 'Ein Lleoedd' : 'Our Places'}</li>
                <li>{isWelsh ? 'Ein Caffael' : 'Our Procurement'}</li>
                <li>{isWelsh ? 'Ein Prosesau' : 'Our Processes'}</li>
              </ul>
              <p>
                {isWelsh
                  ? 'Credwn y bydd canolbwyntio ein gweithredoedd ar y pum maes hyn yn lleihau ein hôl troed carbon ein hunain a\'r sector chwaraeon ehangach yn sylweddol. Yn unol â\'n gwerthoedd, byddwn yn mabwysiadu dull dysgu drwy gydol cyfnod y Cynllun hwn.'
                  : 'We believe that focusing our actions on these five areas will significantly reduce both our own carbon footprint and that of the wider sporting sector. In line with our values, we will adopt a learning approach throughout the period of this Plan. The Plan sets the direction, but we recognise the need to remain agile, responding to new and emerging technologies, ideas, and ways of working – some of which might not yet exist. We will review and refresh the Plan throughout the period, challenging ourselves to maximise opportunities and deliver actions at pace.'}
              </p>
              <p>
                {isWelsh
                  ? 'Rydym yn gyffrous am ein rôl wrth gyflawni sero net ar draws y sector cyhoeddus yng Nghymru erbyn 2030 ac wedi\'n hegni gan y cyfle i gydweithio â phartneriaid ar draws chwaraeon, dosbarthwyr y Loteri ac eraill yn y sector cyhoeddus. Rydym hefyd am chwarae ein rhan wrth wella bioamrywiaeth. Bydd ein gweithredoedd nawr yn sicrhau ein bod yn cyflawni amgylchedd lle gall chwaraeon barhau i ffynnu ar gyfer cenedlaethau\'r dyfodol.'
                  : 'We are excited about our role in delivering net zero across the Welsh public sector by 2030 and energised by the opportunity to collaborate with partners across sport, Lottery distributors and other public sector bodies. We also want to play our part in enhancing biodiversity. Our actions now will ensure that we deliver an environment in which sport can continue to thrive for future generations.'}
              </p>
              <p className="font-bold">
                Brian Davies, {isWelsh ? 'Prif Swyddog Gweithredol Dros Dro' : 'Acting Chief Executive Officer'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carbon Trust Partnership */}
      <section className="py-8 lg:py-12 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#64748B] mb-4">
              {isWelsh ? 'Datblygwyd mewn partneriaeth â Carbon Trust' : 'Developed in partnership with Carbon Trust'}
            </p>
            <div className="bg-white rounded-xl p-8 inline-block">
              <div className="w-48 h-16 bg-gradient-to-r from-[#E2E8F0] to-[#F1F5F9] rounded flex items-center justify-center">
                <span className="text-[#64748B] text-sm">{isWelsh ? 'Logo Carbon Trust' : 'Carbon Trust logo'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Sections */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {planSections.map((section, index) => (
              <Link
                key={index}
                href={section.href as any}
                className="group block bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-[#B91C3C]/20 to-[#B91C3C]/20 flex items-center justify-center">
                  <span className="text-4xl font-display font-bold text-[#B91C3C]">{section.number}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#B91C3C] transition-colors">
                    {section.number}. {section.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C3C] group-hover:gap-3 transition-all">
                    {isWelsh ? 'Darllen Mwy' : 'Read More'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Policies and Governance CTA */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <Link
            href="/governance"
            className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] hover:shadow-2xl transition-all duration-500"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left side - Content */}
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl lg:text-4xl font-display font-bold !text-white mb-4">
                  {isWelsh ? 'Polisïau a Llywodraethu' : 'Policies and Governance'}
                </h2>
                <p className="text-white/80 leading-relaxed mb-8">
                  {isWelsh
                    ? 'Ni yw\'r sefydliad cenedlaethol sy\'n gyfrifol am ddatblygu a hyrwyddo chwaraeon a gweithgarwch corfforol yng Nghymru. Fel corff a noddir gan Lywodraeth Cymru rydym yn rhwym wrth reolau a chyfrifoldebau llywodraethu da ac mae gennym nifer o ddyletswyddau y mae\'n ofynnol i ni eu cyflawni...'
                    : 'We are the national organisation responsible for developing and promoting sport and physical activity in Wales. As a Welsh Government sponsored body we are bound by rules and responsibilities of good governance and we have a number of duties we are obligated…'}
                </p>
                <span className="inline-flex items-center gap-2 text-[#B91C3C] font-semibold group-hover:gap-4 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>

              {/* Right side - Image placeholder */}
              <div className="relative min-h-[300px] lg:min-h-0 bg-gradient-to-br from-[#1E3A5F] to-[#0F172A]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-20 h-20 text-white/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-white/50 text-sm">{isWelsh ? 'Canolfan Genedlaethol Chwaraeon Cymru Caerdydd' : 'Sport Wales National Centre Cardiff Building'}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

