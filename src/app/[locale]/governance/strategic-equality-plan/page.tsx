import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Cynllun Cydraddoldeb Strategol 2024-2028' : 'Strategic Equality Plan 2024-2028';
  const description = isWelsh
    ? 'Mae ein Cynllun Cydraddoldeb Strategol i ddechrau yn canolbwyntio ar y camau gweithredu y gall Chwaraeon Cymru eu cymryd o fewn ein sefydliad ein hunain.'
    : 'Our Strategic Equality Plan is initially focused on the actions that Sport Wales can take within our own organisation.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/governance/strategic-equality-plan`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/governance/strategic-equality-plan`,
      languages: {
        'en': '/en/governance/strategic-equality-plan',
        'cy': '/cy/governance/strategic-equality-plan',
      },
    },
  };
}

export default async function StrategicEqualityPlanPage({
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
    { name: isWelsh ? 'Cynllun Cydraddoldeb Strategol 2024-2028' : 'Strategic Equality Plan 2024-2028', url: `https://www.sport.wales/${locale}/governance/strategic-equality-plan` },
  ];

  const planSections = [
    {
      title: isWelsh ? 'Cynnydd ar y Cynllun Cydraddoldeb Strategol 2020-2024 a dysgu ar gyfer y dyfodol' : 'Progress on the Strategic Equality Plan 2020-2024 and learning for the future',
      href: '#',
    },
    {
      title: isWelsh ? 'Ein Dull' : 'Our Approach',
      href: '#',
    },
    {
      title: isWelsh ? 'Amcanion' : 'Objectives',
      href: '#',
    },
    {
      title: isWelsh ? 'Monitro ac Adrodd' : 'Monitoring and Reporting',
      href: '#',
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
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {isWelsh ? 'Polisïau a Llywodraethu' : 'Policies and Governance'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Cynllun Cydraddoldeb Strategol 2024-2028' : 'Strategic Equality Plan 2024-2028'}
            </h1>
            <div className="space-y-4 text-lg text-white/90 leading-relaxed">
              <p>
                {isWelsh
                  ? 'Y Weledigaeth ar gyfer Chwaraeon yng Nghymru yw ein bod yn "genedl actif lle gall pawb fwynhau chwaraeon gydol oes." Adeiladwyd y Weledigaeth yn dilyn sgyrsiau ag unigolion o bob rhan o Gymru. Mae\'n perthyn i bawb yng Nghymru ac mae angen eu cefnogaeth – gan weithio, buddsoddi, dysgu a llwyddo gyda\'n gilydd.'
                  : 'The Vision for Sport in Wales is that we are "an active nation where everyone can have a lifelong enjoyment of sport." The Vision was built following conversations with individuals from across Wales. It belongs to and needs the support of everyone in Wales – working, investing, learning and succeeding together.'}
              </p>
              <p>
                {isWelsh
                  ? 'Mae\'r Weledigaeth yn sail i\'n Strategaeth Chwaraeon Cymru ein hunain. Rydym am ddatgloi manteision chwaraeon i bawb yng Nghymru ac wedi llunio ein gwaith o amgylch chwe datganiad bwriad strategol.'
                  : 'The Vision underpins our own Sport Wales Strategy. We want to unleash the benefits of sport for everyone in Wales and have shaped our work around six strategic intent statements. These statements also act as our Wellbeing Objectives and demonstrate what you can expect to see from the work we deliver and the work that we are part of.'}
              </p>
              <p>
                {isWelsh
                  ? 'Mae ein Cynllun Cydraddoldeb Strategol i ddechrau yn canolbwyntio ar y camau gweithredu y gall Chwaraeon Cymru eu cymryd o fewn ein sefydliad ein hunain. Fodd bynnag, ein huchelgais yw gwneud y mwyaf o\'r ysgogiadau sydd ar gael i ni i gefnogi mynd i\'r afael ag anghydraddoldeb o fewn y sector.'
                  : 'Our Strategic Equality Plan is initially focused on the actions that Sport Wales can take within our own organisation. However, our ambition is to maximise the levers available to us to support tackling inequality within the sector. In particular, some of our sector-facing actions are centred around how we can best utilise investment and funding to address inequalities. As a learning organisation, we are committed to reviewing the balance and effectiveness of these actions throughout the life of the Strategic Equality Plan.'}
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

      {/* CEO Foreword Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-[#123F56] mb-8">
              {isWelsh ? 'Rhagair y Prif Swyddog Gweithredol' : 'CEO Foreword'}
            </h2>
            <div className="prose prose-lg max-w-none text-[#475569] space-y-6">
              <p>
                {isWelsh
                  ? 'Ers cyhoeddi ein Cynllun Cydraddoldeb Strategol yn 2020, mae pob un ohonom wedi profi cynnwrf a newid sylweddol o ganlyniad i bandemig Covid-19. Cafodd cyfleusterau chwaraeon a hamdden, gan gynnwys ein Canolfan Genedlaethol Chwaraeon Cymru ein hunain, eu cau am gyfnodau sylweddol, gan leihau cyfleoedd i bobl gael mynediad at chwaraeon a gweithgarwch corfforol.'
                  : 'Since the publication of our Strategic Equality Plan in 2020, all of us have experienced significant turmoil and change as a result of the Covid-19 pandemic. Sport and leisure facilities, including our own Sport Wales National Centre, were closed for significant periods, reducing opportunities for people to access sport and physical activity. Survey data indicates that, consequently, inequalities have widened in participation among men and women and between those who are well-off and those who are not.'}
              </p>
              <p>
                {isWelsh
                  ? 'Mae\'r pwysau costau byw parhaus yn gwaethygu anghydraddoldebau ymhellach, gan fygwth lleihau cyfranogiad ymhellach ar sail fforddiadwyedd.'
                  : 'The ongoing cost of living pressures are further exacerbating inequalities, threatening to further reduce participation on the grounds of affordability.'}
              </p>
              <p>
                {isWelsh
                  ? 'Fodd bynnag, tra bod yr amgylchedd macro yn cyflwyno heriau, rhaid i ni hefyd weld y cyfleoedd. Mae gan chwaraeon a gweithgarwch corfforol rôl allweddol i\'w chwarae wrth wella iechyd a lles corfforol a meddyliol y genedl. Rydym am gyflawni\'r Weledigaeth ar gyfer Chwaraeon yng Nghymru - cenedl actif lle gall pawb fwynhau chwaraeon gydol oes.'
                  : 'However, whilst the macro environment presents challenges, we must also see the opportunities. Sport and physical activity have a key role to play in improving the physical and mental health and wellbeing of the nation. We want to deliver the Vision for Sport in Wales - an active nation where everyone can have a lifelong enjoyment of sport. Sport can transcend boundaries, unite communities, and empower individuals to surpass their potential. We must remain resolute in using the power of sport to deliver an inclusive sport system, led by need and providing a great experience for all.'}
              </p>
              <p>
                {isWelsh
                  ? 'Rhaid i ni hefyd gydnabod bod mwy i\'w wneud o fewn ein sefydliad ein hunain. Rydym am ddatblygu a meithrin amgylchedd gwaith cynhwysol lle mae pobl yn teimlo eu bod yn cael eu parchu a\'u gwerthfawrogi am eu talentau unigol a\'r mewnwelediad y maent yn ei ddod â thrwy eu profiad byw eu hunain.'
                  : 'We must also recognise that there is more to do within our own organisation. We want to develop and foster an inclusive work environment where people feel respected and valued for their individual talents and the insight that they bring through their own lived experience.'}
              </p>
              <p>
                {isWelsh
                  ? 'Nid dogfen yn unig yw\'r cynllun hwn; mae\'n ymgorffori ein hymroddiad ar y cyd i hyrwyddo cydraddoldeb ym mhob agwedd o\'n gweithrediadau. Mae\'n adlewyrchu lleisiau ein staff a\'r cymunedau rydym yn eu gwasanaethu, gan fynegi ein gweledigaeth gyffredin ac yn adlewyrchu\'r daith yr ydym arni tuag at system chwaraeon fwy cynhwysol.'
                  : 'This plan is not merely a document; it embodies our collective dedication to championing equality in every facet of our operations. It reflects the voices of our staff and the communities we serve, articulating our shared vision and reflective of the journey we are on towards a more inclusive sport system.'}
              </p>
              <p>
                {isWelsh
                  ? 'Amrywiaeth yw ein cryfder, a chynhwysiant yw ein conglfaen. Trwy feithrin amgylchedd lle mae amrywiaeth yn cael ei ddathlu a chynhwysiant wedi\'i wreiddio yn ein harferion, rydym yn paratoi\'r ffordd ar gyfer tirwedd chwaraeon mwy bywiog, gwydn a chyfoethog.'
                  : 'Diversity is our strength, and inclusivity is our cornerstone. By fostering an environment where diversity is celebrated and inclusion is embedded into our practices, we pave the way for a more vibrant, resilient, and enriched sporting landscape.'}
              </p>
              <p>
                {isWelsh
                  ? 'Rwy\'n estyn fy niolch diffuant i bawb sydd wedi cyfrannu at lunio\'r Cynllun Cydraddoldeb Strategol hwn. Mae eich mewnwelediadau, safbwyntiau ac ymrwymiad wedi bod yn amhrisiadwy wrth lunio map ffordd ar gyfer y daith sy\'n adlewyrchu ethos cydraddoldeb a thegwch yn wirioneddol.'
                  : 'I extend my sincere thanks to all who have contributed to shaping this Strategic Equality Plan. Your insights, perspectives, and commitment have been invaluable in crafting a roadmap for the journey that truly reflects the ethos of equality and fairness.'}
              </p>
              <div className="mt-8">
                <p className="font-bold">Brian Davies</p>
                <p className="font-bold">{isWelsh ? 'Prif Swyddog Gweithredol' : 'Chief Executive Officer'}</p>
                <p className="font-bold">{isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sport Wales Strategy Link */}
      <section className="py-8 lg:py-12 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/about/vision-and-strategy"
              className="group block p-6 lg:p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300"
            >
              <h3 className="text-xl font-display font-bold text-[#123F56] mb-2 group-hover:text-[#E11D2E] transition-colors">
                {isWelsh ? 'Strategaeth Chwaraeon Cymru' : 'Sport Wales Strategy'}
              </h3>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E11D2E] group-hover:gap-3 transition-all">
                {isWelsh ? 'Darllen Mwy' : 'Read More'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Plan Sections */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {planSections.map((section, index) => (
              <Link
                key={index}
                href={section.href as any}
                className="group block bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-[#E11D2E]/20 to-[#E11D2E]/20 flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#E11D2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-display font-bold text-[#123F56] mb-2 group-hover:text-[#E11D2E] transition-colors">
                    {section.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E11D2E] group-hover:gap-3 transition-all">
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

      {/* Acknowledgements Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-[#123F56] mb-8">
              {isWelsh ? 'Cydnabyddiaethau' : 'Acknowledgements'}
            </h2>
            <div className="prose prose-lg max-w-none text-[#475569] space-y-6">
              <p>
                {isWelsh
                  ? 'Rydym yn ddiolchgar am gyfraniadau amhrisiadwy ein ffrindiau beirniadol. Mae eich adborth craff, cwestiynau heriol, a chefnogaeth ddiwyro wedi ein helpu i lunio map ffordd mwy uchelgeisiol a chynhwysfawr ar gyfer cydraddoldeb a chynhwysiant yn Chwaraeon Cymru.'
                  : 'We are grateful for the invaluable contributions of our critical friends. Your insightful feedback, challenging questions, and unwavering support have helped us shape a more ambitious and comprehensive roadmap for equality and inclusion at Sport Wales.'}
              </p>
              <p>
                {isWelsh
                  ? 'Rydym hefyd yn estyn ein diolch dyfnaf i bawb yn Chwaraeon Cymru sydd wedi neilltuo eu hamser a\'u harbenigedd i\'r ymdrech hanfodol hon.'
                  : 'We also extend our deepest gratitude to everyone at Sport Wales who has dedicated their time and expertise to this crucial endeavour.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policies and Governance CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <Link
            href="/governance"
            className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#123F56] to-[#1E4A62] hover:shadow-2xl transition-all duration-500"
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
                <span className="inline-flex items-center gap-2 text-[#E11D2E] font-semibold group-hover:gap-4 transition-all">
                  {isWelsh ? 'Darllen Mwy' : 'Read More'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>

              {/* Right side - Image placeholder */}
              <div className="relative min-h-[300px] lg:min-h-0 bg-gradient-to-br from-[#123F56] to-[#123F56]">
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

