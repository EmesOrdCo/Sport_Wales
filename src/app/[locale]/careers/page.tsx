import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Gyrfaoedd' : 'Careers';
  const description = isWelsh
    ? 'Ymunwch â Chwaraeon Cymru. Darganfyddwch gyfleoedd gyrfa cyffrous a helpwch ni i wneud Cymru\'n genedl fwy actif.'
    : 'Join Sport Wales. Discover exciting career opportunities and help us make Wales a more active nation.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/careers`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/careers`,
      languages: {
        'en': '/en/careers',
        'cy': '/cy/careers',
      },
    },
  };
}

export default async function CareersPage({
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
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#B91C3C] opacity-10 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[#14B8A6] opacity-10 blur-2xl"></div>
        </div>

        <div className="container relative z-10">
          {/* Breadcrumbs */}
          <nav className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">{isWelsh ? 'Hafan' : 'Home'}</Link></li>
              <li>/</li>
              <li><span className="text-white">{isWelsh ? 'Gyrfaoedd' : 'Careers'}</span></li>
            </ol>
          </nav>

          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Gyrfaoedd' : 'Careers'}
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

      {/* Working for Sport Wales */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Gweithio i Chwaraeon Cymru' : 'Working for Sport Wales'}
            </h2>
            
            {/* Brian Davies Quote */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0] mb-8">
              <blockquote className="text-lg lg:text-xl text-[#334155] leading-relaxed mb-4">
                {isWelsh
                  ? 'Yn Chwaraeon Cymru mae gennym ffocws ar bobl, dysgu a chyflawni. Rydym yn gwerthfawrogi ein pobl - eu hamrywiaeth a\'u profiadau gwahanol. Rydym yn croesawu syniadau newydd, gan ddysgu\'n gyson am bobl, cymunedau, technoleg a sefydliadau y gallwn weithio gyda nhw i alluogi chwaraeon yng Nghymru i ffynnu. Rydym yn falch o\'n gwaith, yn gwerthfawrogi ein staff a\'n hymrwymiad i genedlaethau\'r dyfodol yng Nghymru.'
                  : 'At Sport Wales we have a focus on people, learning and delivery. We value our people - their diversity and their different experiences. We welcome new ideas, constantly learning about people, communities, technology and organisations we can work with to enable sport in Wales to thrive. We take pride in our work, value our staff and our commitment to future generations of Wales.'}
              </blockquote>
              <p className="text-[#64748B] font-semibold">
                {isWelsh ? '— Brian Davies, Prif Weithredwr Chwaraeon Cymru' : '— Brian Davies, Sport Wales CEO'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More about our Recruitment Process */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-12">
              {isWelsh ? 'Mwy am ein Proses Recriwtio' : 'More about our Recruitment Process'}
            </h2>

            {/* Our Strategy */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                {isWelsh ? 'Ein Strategaeth' : 'Our Strategy'}
              </h3>
              <p className="text-[#475569] mb-4">
                {isWelsh
                  ? 'Rydym am wneud effaith sylweddol ledled Cymru. Mae strategaeth Chwaraeon Cymru yn nodi sut y bydd Chwaraeon Cymru yn chwarae ei ran wrth wneud y Weledigaeth ar gyfer Chwaraeon yng Nghymru yn realiti. Rydym am i bawb fwynhau buddion oes o chwaraeon a\'n gweledigaeth yw Cymru actif, iach - ble bynnag rydych chi\'n byw. Rydym hefyd am weld ein hathletwyr yn cyrraedd eu llawn botensial.'
                  : 'We want to make a significant impact across Wales. The Sport Wales strategy sets out how Sport Wales will play its part in making the Vision for Sport in Wales a reality. We want everyone to enjoy the lifetime benefits for sport and our vision is of an active, healthy Wales – no matter where you live. We also want to see our athletes reaching their full potential.'}
              </p>
              <p className="text-[#475569]">
                {isWelsh ? 'Gallwch weld ein strategaeth ' : 'You can view our strategy '}
                <Link href="/about/vision-and-strategy" className="text-[#B91C3C] hover:underline font-semibold">
                  {isWelsh ? 'yma' : 'here'}
                </Link>.
              </p>
            </div>

            {/* Benefits at Sport Wales */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                {isWelsh ? 'Buddion yn Chwaraeon Cymru' : 'Benefits at Sport Wales'}
              </h3>
              <p className="text-[#475569] mb-6">
                {isWelsh
                  ? 'Mae gennym uchelgeisiau beiddgar ar gyfer chwaraeon yng Nghymru ac rydym yn gwybod y bydd ein pobl yn allweddol i\'w cyflawni. Dyna pam rydym yn darparu pecyn buddion amrywiol. Rydym yn gefnogwyr mawr o gydbwysedd rhwng bywyd a gwaith ac rydym yn cynnig ystod o ddulliau gweithio hyblyg.'
                  : 'We have bold ambitions for sport in Wales and we know that our people will be key to achieving them. That\'s why we provide a varied benefits package. We are big supporters of a work life balance and offer a range of flexible working approaches.'}
              </p>
              <ul className="space-y-2 text-[#475569] mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B91C3C] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {isWelsh ? '33 diwrnod o wyliau blynyddol' : '33 days annual leave'}
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B91C3C] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {isWelsh ? 'Opsiwn i brynu 5 diwrnod ychwanegol y flwyddyn' : 'Option to purchase 5 additional days per year'}
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B91C3C] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {isWelsh ? 'Cyfleoedd gweithio hyblyg, gan gynnwys amser hyblyg (lle bo hynny\'n berthnasol)' : 'Flexible working opportunities, including flexi-time (where applicable)'}
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B91C3C] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {isWelsh ? 'Cynllun Pensiwn Llywodraeth Leol neu Scottish Widows' : 'Local Government or Scottish Widows Pension Scheme'}
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B91C3C] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {isWelsh ? 'Cyfleoedd dysgu a datblygu cynhwysfawr' : 'Comprehensive learning and development opportunities'}
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B91C3C] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {isWelsh ? 'Defnyddio\'r gampfa ar y safle yn y Ganolfan Genedlaethol yng Nghaerdydd' : 'Use of on-site gym at the National Centre in Cardiff'}
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B91C3C] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {isWelsh ? 'Rhaglen Gymorth i Weithwyr (Cwnsela)' : 'Employee Assistance (Counselling) Programme'}
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B91C3C] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {isWelsh ? 'Aelodaeth Clwb Chwaraeon a Hamdden y Gwasanaeth Sifil' : 'Civil Service Sports & Leisure Club Membership'}
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B91C3C] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {isWelsh ? 'Cynllun Beicio i\'r Gwaith' : 'Cycle to Work Scheme'}
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B91C3C] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {isWelsh ? 'Maes parcio a sied beiciau am ddim' : 'Free car park and bike shed'}
                </li>
              </ul>
              <p className="text-[#475569]">
                {isWelsh
                  ? 'Gallwch ddysgu mwy am ein polisi cyflog a buddion eraill yn ein '
                  : 'You can find out more about our pay policy and other benefits in our '}
                <a href="#" className="text-[#B91C3C] hover:underline font-semibold">{isWelsh ? 'llawlyfr staff' : 'staff handbook'}</a>
                {isWelsh ? '. Mae ein graddfeydd cyflog ar gael i\'w gweld ' : '. Our pay scales are available to view '}
                <a href="#" className="text-[#B91C3C] hover:underline font-semibold">{isWelsh ? 'yma' : 'here'}</a>.
              </p>
            </div>

            {/* Training and Development */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                {isWelsh ? 'Hyfforddiant a Datblygiad' : 'Training and Development'}
              </h3>
              <p className="text-[#475569]">
                {isWelsh
                  ? 'Mae Chwaraeon Cymru yn hyrwyddo dysgu a gwelliant parhaus yn gryf. Ar eich diwrnod cyntaf o waith, byddwch yn dechrau ar raglen sefydlu wedi\'i theilwra ac fe\'ch cynigir yr holl hyfforddiant hanfodol i\'ch helpu i ddechrau. Mae ymuno â Chwaraeon Cymru yn golygu ymuno â diwylliant o ddysgu a datblygiad proffesiynol parhaus. Mae hyfforddiant swydd-benodol, gweithdai amser cinio, hyfforddi a mentora, gwella sgiliau\'r Gymraeg a chyfleoedd astudio hirdymor i gyd yn rhan o fod ar ein tîm.'
                  : 'Sport Wales strongly advocates continuous learning and improvement. On your very first day of work, you will embark on a tailored induction programme and will be offered all the essential training to get you started. Joining Sport Wales means joining a culture of learning and continuous professional development. Job specific training, lunchtime workshops, coaching and mentoring, improving Welsh language skills and long term study opportunities are all part of being on our team.'}
              </p>
            </div>

            {/* Equality, Diversity & Inclusion */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                {isWelsh ? 'Cydraddoldeb, Amrywiaeth a Chynhwysiant' : 'Equality, Diversity & Inclusion'}
              </h3>
              <p className="text-[#475569] mb-4">
                {isWelsh
                  ? 'Mae Cydraddoldeb, Amrywiaeth a Chynhwysiant wrth galon popeth a wnawn yn Chwaraeon Cymru. Er mwyn galluogi Chwaraeon yng Nghymru i ffynnu, mae\'n hanfodol bod ein gweithlu yn gynrychioliadol llawn o\'r boblogaeth ehangach.'
                  : 'Equality, Diversity & Inclusion is at the heart of everything we do at Sport Wales. To enable Sport in Wales to thrive, it\'s vital that our workforce is fully representative of the wider population.'}
              </p>
              <p className="text-[#475569] mb-4">
                {isWelsh
                  ? 'Blaenoriaeth strategol allweddol yw amrywio ein gweithlu ymhellach. Mae pawb yn Chwaraeon Cymru yn dod â rhywbeth gwahanol, ac felly byddwch chi. Mae ein hymrwymiad i recriwtio a denu talent amrywiol yn ymestyn i annog ceisiadau yn weithredol gan grwpiau sydd heb gynrychiolaeth ddigonol gan gynnwys pobl o leiafrifoedd ethnig, LHDTQ+ a phobl anabl. Rydym yn mabwysiadu arferion recriwtio cynhwysol gan gynnwys llunio rhestr fer ddall o ymgeiswyr.'
                  : 'A key strategic priority is to further diversify our workforce. Everyone at Sport Wales brings something different, and so will you. Our commitment to recruiting and attracting diverse talent extends to actively encouraging applications from underrepresented groups including ethnic minority, LGBTQ+ and disabled people. We adopt inclusive recruitment practices including blind shortlisting of candidates.'}
              </p>
              <p className="text-[#475569] mb-4">
                {isWelsh
                  ? 'Rydym yn gyflogwr Hyderus o ran Anabledd sy\'n tanysgrifio i\'r cynllun cyfweliad gwarantedig. Rydym am eich cefnogi gydag addasiadau trwy ein proses i sicrhau y gallwch fod ar eich gorau. Gallai\'r rhain gynnwys addasiadau hygyrchedd, person cymorth cyfweliad, technoleg gynorthwyol, amser ychwanegol ar gyfer asesiadau ysgrifenedig neu dasgau. Nid yw hon yn rhestr gyflawn, rydym am i chi allu perfformio ar eich gorau felly os oes angen unrhyw addasiadau arnoch cysylltwch â\'r cyswllt ar yr hysbyseb swydd a fydd yn gallu eich cynghori.'
                  : 'We are a Disability Confident employer subscribing to the guaranteed interview scheme. We want to support you with adjustments through our process to make sure you can be at your best. These could include accessibility adaptions, an interview support person, assistive technology, extra time for written assessments or tasks. This is not an exhaustive list, we want you to be able to perform at your best so if you need any adjustments to be made please email the contact on the job advert who will be able to advise you.'}
              </p>
              <p className="text-[#475569] mb-4">
                {isWelsh
                  ? 'Rydym hefyd yn cydnabod y gall y "bwlch hyder" effeithio\'n andwyol ar amrywiaeth y ceiswyr y clywn ganddynt. Mae ymchwil yn dangos bod dynion yn aml yn gwneud cais am swyddi hyd yn oed pan fyddant ond yn bodloni 60% o\'r meini prawf a restrir, tra bod menywod yn tueddu i wneud cais dim ond pan fyddant yn bodloni\'r holl feini prawf penodedig. Mae canlyniadau tebyg wedi\'u canfod mewn astudiaethau sy\'n ymwneud â grwpiau eraill sydd ar yr ymylon. Felly, os ydych chi\'n credu y gallech fod yn addas ar gyfer un o\'n rolau, hyd yn oed os nad ydych o reidrwydd yn bodloni pob pwynt o\'r disgrifiad swydd, peidiwch ag oedi – cyflwynwch gais!'
                  : 'We also recognise that the "confidence gap" may adversely impact the diversity of applicants we hear from. Research indicates that men often apply for jobs even where they only meet 60% of the listed criteria, whereas women tend only to apply when they fulfil all the specified criteria. Similar results have been found in studies relating to other marginalised groups. As such, if you believe you could be a good fit for one of our roles, even if you don\'t necessarily meet every point of the job description, please don\'t hesitate – submit an application!'}
              </p>
              <p className="text-[#475569]">
                {isWelsh
                  ? 'Mae ein cynllun cydraddoldeb strategol yn amlinellu ein hymrwymiad i amrywiaeth a chynhwysiant a\'n hamcanion.'
                  : 'Our strategic equality plan outlines our commitment to diversity and inclusion and our objectives.'}
              </p>
            </div>

            {/* Behaviours */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                {isWelsh ? 'Ymddygiadau' : 'Behaviours'}
              </h3>
              <p className="text-[#475569] mb-6">
                {isWelsh
                  ? 'Yn Chwaraeon Cymru, mae ein hymddygiadau yn rhan hanfodol o\'r ffordd rydym yn gweithio - mae\'r ffordd rydym yn cyflawni yr un mor bwysig â\'r hyn rydym yn ei gyflawni. Mae gennym set o ymddygiadau cytunedig y disgwylir iddynt gael eu harddangos gan weithwyr.'
                  : 'At Sport Wales, our behaviours are a critical part of the way we work - the way we deliver is as important as what we deliver. We have an agreed set of behaviours that we expect to see demonstrated by employees.'}
              </p>
              <ul className="space-y-4 text-[#475569]">
                <li>
                  <strong>{isWelsh ? 'Dysgu Gyda\'n Gilydd' : 'Learn Together'}</strong> - {isWelsh ? 'Archwilio, profi ac adolygu\'n gyson.' : 'Constantly exploring, testing and reviewing.'}
                </li>
                <li>
                  <strong>{isWelsh ? 'Cyflawni Gyda\'n Gilydd' : 'Deliver Together'}</strong> - {isWelsh ? 'Rhannu canlyniadau, meithrin perthnasoedd agored a gonest, darparu adborth cadarn, gwella perfformiad yn gyson.' : 'Sharing outcomes, nurturing open and honest relationships, providing robust feedback, constantly improving performance.'}
                </li>
                <li>
                  <strong>{isWelsh ? 'Dathlu Gyda\'n Gilydd' : 'Celebrate Together'}</strong> - {isWelsh ? 'Cydnabod ein llwyddiannau ar y cyd trwy bartneriaid effeithiol.' : 'Recognising our shared successes through effective partners.'}
                </li>
                <li>
                  <strong>{isWelsh ? 'Gweithredu gydag Uniondeb' : 'Acting with integrity'}</strong> - {isWelsh ? 'Deall a pharchu diwylliant a gwerthoedd ein gilydd. Hyrwyddo cydraddoldeb ac amrywiaeth.' : 'Understanding and respecting each other\'s culture and values. Promoting equality and diversity.'}
                </li>
                <li>
                  <strong>{isWelsh ? 'Ychwanegu Gwerth' : 'Adding Value'}</strong> - {isWelsh ? 'Sicrhau\'r cymysgedd gorau posibl o gefnogaeth, her, buddsoddiad, sgiliau ac arbenigedd i gyflawni ein canlyniadau ar y cyd.' : 'Ensuring the optimum mix of support, challenge, investment, skills and expertise to achieve our shared outcomes.'}
                </li>
                <li>
                  <strong>{isWelsh ? 'Annog Arloesi' : 'Encouraging Innovation'}</strong> - {isWelsh ? 'Croesawu syniadau a dulliau newydd a chefnogi uchelgais a meddwl ffres. Peidio ag ofni teimlo\'n anghyfforddus.' : 'Welcoming new ideas and approaches and supporting ambition and fresh thinking. Not being afraid to feel uncomfortable.'}
                </li>
              </ul>
            </div>

            {/* Artificial Intelligence */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                {isWelsh ? 'Deallusrwydd Artiffisial' : 'Artificial Intelligence'}
              </h3>
              <p className="text-[#475569] mb-4">
                {isWelsh
                  ? 'Gall offer Deallusrwydd Artiffisial (AI) fel Chat GPT, Copilot a Gemini, fod yn ddefnyddiol ar wahanol gamau o wneud cais am swydd. Gallech ddefnyddio AI fel offeryn i ymchwilio i Chwaraeon Cymru a\'r swydd rydych chi\'n gwneud cais amdani. Gallech hefyd ei ddefnyddio i drefnu eich meddyliau, mireinio eich ysgrifennu neu i\'ch helpu i baratoi ar gyfer cyfweliad. Rydym yn awyddus i ddod i\'ch adnabod chi fel person felly rhaid i chi sicrhau bod cynnwys a gynorthwyir gan AI yn cadw eich dilysrwydd.'
                  : 'Artificial Intelligence (AI) tools such as Chat GPT, Copilot and Gemini, can be helpful in various stages of applying for a job. You could use AI as a tool to research Sport Wales and the job you\'re applying for. You could also use it to organise your thoughts, refine your writing or to help you prepare for an interview. We are keen to get to know you as a person so you must ensure AI aided content maintains your authenticity.'}
              </p>
              <p className="text-[#475569] font-semibold mb-2">
                {isWelsh ? 'Ni ddylech ddefnyddio offer AI i:' : 'You must not use AI tools to:'}
              </p>
              <ul className="list-disc list-inside space-y-1 text-[#475569] mb-4 ml-4">
                <li>{isWelsh ? 'Gorliwio cymwysterau,' : 'Exaggerate qualifications,'}</li>
                <li>{isWelsh ? 'Camgynrychioli eich profiadau' : 'Misrepresent your experiences'}</li>
                <li>{isWelsh ? 'Copïo a gludo ymatebion generig heb eu golygu.' : 'Copy and paste generic responses without editing them.'}</li>
              </ul>
              <p className="text-[#475569]">
                {isWelsh
                  ? 'Yn Chwaraeon Cymru, efallai y byddwn yn defnyddio AI i gynhyrchu syniadau ar gyfer Hysbysebion Swyddi, Disgrifiadau Swyddi, asesiadau, a chwestiynau cyfweliad, ond ni fyddwn byth yn defnyddio offer AI i wneud penderfyniadau dethol neu recriwtio.'
                  : 'At Sport Wales, we may use AI to generate ideas for Job Adverts, Job Descriptions, assessments, and interview questions, but we will never use AI tools to make selection or hiring decisions.'}
              </p>
            </div>

            {/* Your Data */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                {isWelsh ? 'Eich Data' : 'Your Data'}
              </h3>
              <p className="text-[#475569] mb-4">
                {isWelsh
                  ? 'Rydym yn deall y byddwn, yn ystod eich cais, yn gofyn i chi rannu gwybodaeth bersonol sensitif. Mae Chwaraeon Cymru wedi ymrwymo i barchu eich preifatrwydd, a bydd yr holl wybodaeth bersonol a ddarperir yn ystod y broses gofrestru a chais yn cael ei chadw a\'i phrosesu yn unol â chofrestriad Chwaraeon Cymru o dan Ddeddf Diogelu Data 2018. Gallwch ddysgu mwy am sut mae Chwaraeon Cymru yn defnyddio gwybodaeth bersonol yn ein '
                  : 'We understand that during your application, we\'ll ask you to share sensitive, personal information. Sport Wales is committed to respecting your privacy, and all personal information provided during the registration and application process will be held and processed in accordance with Sport Wales\' registration under the Data Protection Act 2018. You can find out more about how Sport Wales uses personal information in our '}
                <Link href="/privacy-policy" className="text-[#B91C3C] hover:underline font-semibold">
                  {isWelsh ? 'Polisi Preifatrwydd' : 'Privacy Policy'}
                </Link>.
              </p>
              <p className="text-[#475569]">
                <a href="#" className="text-[#B91C3C] hover:underline font-semibold">
                  {isWelsh ? 'Gweld a lawrlwytho ein ffurflen gais.' : 'View and download our application form.'}
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
