import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';
  
  const title = isWelsh ? 'Addysg ac Athrawon' : 'Education & Teachers';
  const description = isWelsh 
    ? 'Adnoddau a rhaglenni ar gyfer athrawon ac ysgolion i gefnogi chwaraeon a gweithgarwch corfforol mewn addysg.'
    : 'Resources and programmes for teachers and schools to support sport and physical activity in education.';
  
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/education-and-teachers`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/education-and-teachers`,
      languages: {
        'en': '/en/education-and-teachers',
        'cy': '/cy/education-and-teachers',
      },
    },
  };
}

export default async function EducationAndTeachersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Chwaraeon mewn Ysgolion' : 'Sport in Schools', url: `https://www.sport.wales/${locale}/sport-in-schools` },
    { name: isWelsh ? 'Addysg ac Athrawon' : 'Education & Teachers', url: `https://www.sport.wales/${locale}/education-and-teachers` },
  ];

  const resources = [
    {
      title: isWelsh ? 'Adnoddau Dwyieithog' : 'Bilingual Resources',
      description: isWelsh
        ? 'Adnoddau chwaraeon a gweithgarwch corfforol am ddim i ysgolion ac athrawon mewn dwy iaith.'
        : 'Free sport and physical activity resources for schools and teachers in both languages.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      color: 'bg-[#E11D2E]',
    },
    {
      title: isWelsh ? 'Rhaglenni Hyfforddi' : 'Training Programmes',
      description: isWelsh
        ? 'Cyrsiau hyfforddi i helpu athrawon i gefnogi chwaraeon a gweithgarwch corfforol yn yr ysgol.'
        : 'Training courses to help teachers support sport and physical activity in school.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'bg-[#E11D2E]',
    },
    {
      title: isWelsh ? 'Rhaglenni Ysgolion' : 'School Programmes',
      description: isWelsh
        ? 'Rhaglenni arbennig ar gyfer ysgolion i hyrwyddo chwaraeon a gweithgarwch corfforol ymhlith plant.'
        : 'Special programmes for schools to promote sport and physical activity among children.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'bg-[#F4B400]',
    },
    {
      title: isWelsh ? 'Cymorth a Chyngor' : 'Support & Guidance',
      description: isWelsh
        ? 'Cymorth ac arweiniad i athrawon ac ysgolion ar sut i integreiddio chwaraeon yn eu gwaith.'
        : 'Support and guidance for teachers and schools on how to integrate sport into their work.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: 'bg-[#E11D2E]',
    },
  ];

  const programmes = [
    {
      title: isWelsh ? 'Arolwg Chwaraeon Ysgol 2022' : 'School Sport Survey 2022',
      description: isWelsh
        ? 'Un o\'r arolygon mwyaf yn y byd o bobl ifanc, bydd Arolwg Chwaraeon Ysgol 2022 yn rhoi llais i bobl ifanc ar chwaraeon a lles.'
        : 'One of the world\'s biggest surveys of young people, the 2022 School Sport Survey will give young people a voice on sport and wellbeing.',
    },
    {
      title: isWelsh ? 'Llysgenhadon Ifanc' : 'Young Ambassadors',
      description: isWelsh
        ? 'Ar hyn o bryd, mae mwy na 3000 o Llysgenhadon Ifanc mewn ysgolion, colegau a phrifysgolion ledled Cymru. Rhaglen sy\'n creu arweinwyr chwaraeon ifanc sy\'n ysbrydoli eraill.'
        : 'Currently, there are more than 3000 Young Ambassadors in schools, colleges and universities across Wales. Programme that creates young sport leaders who inspire others.',
    },
    {
      title: 'Citbag',
      description: isWelsh
        ? 'Adnoddau chwaraeon a gweithgarwch corfforol am ddim i ysgolion ac athrawon. Platfform dwyieithog llawn syniadau ar gyfer athrawon sy\'n cyflwyno iechyd corfforol a lles yn yr ysgol.'
        : 'Free sport and physical activity resources for schools and teachers. Bilingual platform full of ideas for teachers delivering physical health and well-being in school.',
      link: 'https://citbag.sport.wales',
      external: true,
    },
    {
      title: isWelsh ? 'Arolwg Chwaraeon Ysgol 2018' : 'School Sport Survey 2018',
      description: isWelsh
        ? 'Dod o hyd i ddata Arolwg Chwaraeon Ysgol mwyaf diweddar yma. Mae\'r Arolwg Chwaraeon Ysgol yn rhoi llais i blant ledled Cymru am chwaraeon.'
        : 'Find the most recent School Sport Survey data here. The School Sport Survey gives children across Wales a voice on sport.',
    },
  ];

  return (
    <>
      {/* Structured Data */}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {isWelsh ? 'Ar gyfer Athrawon ac Ysgolion' : 'For Teachers & Schools'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Addysg ac Athrawon' : 'Education & Teachers'}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {isWelsh
                ? 'Adnoddau a rhaglenni i gefnogi athrawon ac ysgolion i hyrwyddo chwaraeon a gweithgarwch corfforol mewn addysg.'
                : 'Resources and programmes to support teachers and schools to promote sport and physical activity in education.'}
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

      {/* Resources Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#E11D2E] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Ein Adnoddau' : 'Our Resources'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#123F56] mb-4">
              {isWelsh ? 'Adnoddau i Athrawon ac Ysgolion' : 'Resources for Teachers & Schools'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Mae Chwaraeon Cymru yn darparu amrywiaeth o adnoddau i gefnogi athrawon ac ysgolion.'
                : 'Sport Wales provides a range of resources to support teachers and schools.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {resources.map((resource, index) => (
              <div 
                key={index}
                className="p-6 lg:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${resource.color}/10 flex items-center justify-center text-${resource.color.replace('bg-', '')} mb-6`}>
                  {resource.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-[#123F56] mb-3">
                  {resource.title}
                </h3>
                <p className="text-[#64748B]">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#E11D2E] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Rhaglenni' : 'Programmes'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#123F56] mb-4">
              {isWelsh ? 'Rhaglenni Arbenigol' : 'Specialist Programmes'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Dysgwch am y rhaglenni sydd ar gael i ysgolion ac athrawon.'
                : 'Learn about the programmes available to schools and teachers.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {programmes.map((programme, index) => (
              <div 
                key={index}
                className="p-6 lg:p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-display font-bold text-[#123F56] mb-3">
                  {programme.title}
                </h3>
                <p className="text-[#64748B] mb-4">
                  {programme.description}
                </p>
                {programme.link ? (
                  <a
                    href={programme.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#E11D2E] font-semibold hover:underline"
                  >
                    {isWelsh ? 'Mynediad' : 'Access'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundations Framework Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl">
            <span className="inline-block text-[#E11D2E] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Fframwaith Sylfaenau' : 'Foundations Framework'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#123F56] mb-6">
              {isWelsh ? 'Fframwaith Sylfaenau Cymru: Canllaw Arfer Da' : 'Foundations Framework Wales: A Good Practice Guide'}
            </h2>
            <p className="text-xl text-[#64748B] mb-4 leading-relaxed">
              {isWelsh
                ? 'Er mwyn ein helpu i gyflawni gweithgareddau chwaraeon a chwaraeon diogel, hwyl a datblygiadol i blant oed 3-11 oed.'
                : 'Helping you deliver safe, fun, and developmental sport and physical activities for children aged 3-11.'}
            </p>
            <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
              {isWelsh
                ? 'Rydym i gyd eisiau i blant ddatblygu cariad gydol oes at fod yn weithgar.'
                : 'We all want children to develop a lifelong love of being active.'}
            </p>
            <p className="text-lg text-[#64748B] mb-12 leading-relaxed">
              {isWelsh
                ? 'Mae Fframwaith Sylfaenau Cymru yn ganllaw arfer da i bawb sydd yn cymryd rhan mewn trefnu, hyrwyddo a chyflwyno gweithgareddau corfforol a chwaraeon i blant oed 3-11 oed, mewn gosodiadau ysgol allgyrsiol, cymunedol a gwreiddiol.'
                : 'The Foundations Framework Wales is a good practice guide for all enablers across Wales involved in organising, promoting and delivering physical and sporting activities for children aged 3–11 years, in school extra-curricular, community and grassroots settings.'}
            </p>

            {/* Why has the Foundations Framework been developed? */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold text-[#123F56] mb-4">
                {isWelsh ? 'Pam mae\'r Fframwaith Sylfaenau wedi\'i ddatblygu?' : 'Why has the Foundations Framework been developed?'}
              </h3>
              <p className="text-lg text-[#64748B] mb-4 leading-relaxed">
                {isWelsh
                  ? 'Dylai pob plentyn fynd i fyny gan gael profiadau mewn chwaraeon a gweithgarwch corfforol sy\'n eu gosod ar gyfer mwynhad gydol oes o chwaraeon.'
                  : 'Every child should grow up having experiences in sport and physical activity that set them up for a lifelong enjoyment of sport.'}
              </p>
              <p className="text-lg text-[#64748B] mb-4 leading-relaxed font-semibold">
                {isWelsh
                  ? 'Fel cenedl, mae angen arnom wneud mwy yn brys i wella cyfranogiad plant mewn gweithgarwch corfforol a chwaraeon.'
                  : 'As a nation, we urgently need to do more to improve children\'s participation in physical activity and sport.'}
              </p>
              <p className="text-lg text-[#64748B] leading-relaxed">
                {isWelsh
                  ? 'Mae pwysigrwydd bod yn weithgar bob dydd wedi\'i nodi\'n glir gan y Prif Swyddogion Meddygol yn y DU, gan argymell bod plant a phobl ifanc yn cyfartaledd o leiaf 60 munud o weithgarwch corfforol cymedrol neu egnïol y dydd, ar draws yr wythnos.'
                  : 'The importance of being active every day has been stated clearly by the Chief Medical Officers in the UK, recommending children and young people average at least 60 minutes of moderate or vigorous physical activity a day, across the week.'}
              </p>
            </div>

            {/* Our National Picture */}
            <div className="mb-12 p-8 rounded-2xl bg-white border border-[#E2E8F0]">
              <h3 className="text-2xl font-display font-bold text-[#123F56] mb-6">
                {isWelsh ? 'Ein Darlun Cenedlaethol - Y Sefyllfa Bresennol' : 'Our National Picture - The Current State of Affairs'}
              </h3>
              <ul className="space-y-4 text-lg text-[#64748B] mb-6">
                <li className="flex items-start">
                  <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                  <span>{isWelsh ? 'Mae\'r gostyngiad mewn lefelau gweithgarwch corfforol yn dechrau cyn gynted ag oedran' : 'The decline in physical activity levels begins as early as age'} <strong>7</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                  <span>{isWelsh ? 'Dim ond' : 'Just'} <strong>22%</strong> {isWelsh ? 'o bobl ifanc 8-11 oed sy\'n cyrraedd canllawiau gweithgarwch corfforol.' : 'of 8–11-year-olds meet physical activity guidelines.'}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                  <span><strong>{isWelsh ? '1 mewn 4 o blant' : '1 in 4 children'}</strong> {isWelsh ? 'oed 4-5 (27.1%) yng Nghymru sy\'n ordewig neu dros bwysau.' : 'aged 4–5 (27.1%) in Wales are obese or overweight.'}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                  <span><strong>{isWelsh ? '1 mewn 3 o ddisgyblion' : '1 in 3 pupils'}</strong> {isWelsh ? '(31%) yng Nghymru nad ydynt yn hyderus wrth roi cynnig ar chwaraeon newydd.' : '(31%) in Wales are not confident trying new sports.'}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                  <span>{isWelsh ? 'Hyd yn oed o oedran ifanc, mae llawer o bobl ifanc yng Nghymru yn adrodd am' : 'Even from an early age, many young people in Wales report'} <strong>{isWelsh ? 'hyder a mwynhad isel' : 'low confidence and enjoyment'}</strong> {isWelsh ? 'mewn chwaraeon, ac nid ydynt bob amser yn teimlo bod ganddynt y sgiliau i gymryd rhan.' : 'in sport, and don\'t always feel that they have the skills to participate.'}</span>
                </li>
              </ul>
              <p className="text-lg text-[#64748B]">
                {isWelsh
                  ? 'Dyma pam y mae nifer o bartneriaid wedi dod at ei gilydd i greu Fframwaith Sylfaenau Cymru.'
                  : 'This is why numerous partners have come together to create the Foundations Framework Wales.'}
              </p>
            </div>

            {/* What do children want? */}
            <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-[#123F56] to-[#1E4A62] text-white">
              <h3 className="text-2xl font-display font-bold mb-6">
                {isWelsh ? 'Beth mae plant eisiau?' : 'What do children want?'}
              </h3>
              <p className="text-lg mb-6 text-white/90 leading-relaxed">
                {isWelsh
                  ? 'Mae plant yng Nghymru eisiau cyfleoedd chwaraeon sy\'n gynhwysol, sy\'n arwain o anghenion, diogel, hwyl a datblygiadol.'
                  : 'Children in Wales want sport opportunities that are inclusive, needs led, safe, enjoyable and developmental.'}
              </p>
              <ul className="space-y-4 text-lg text-white/90">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">"</span>
                  <span><strong>&quot;{isWelsh ? 'Rydw i eisiau dysgu sgiliau newydd a dysgu sut i chwarae\'r chwaraeon, yn ogystal â chael amser da&quot;' : 'I want to learn new skills and learn how to play the sport, as well as having a good time'}&quot;</strong> - {isWelsh ? 'Saul, 10 oed' : 'Saul, aged 10'}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">"</span>
                  <span><strong>&quot;{isWelsh ? 'Mae\'n bwysig iawn teimlo\'n ddiogel, croesawgar a chynhwysol&quot;' : 'It is really important to feel safe, welcomed and included'}&quot;</strong> - {isWelsh ? 'Lily, Sabine ac Ella, 11 oed' : 'Lily, Sabine and Ella, aged 11'}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">"</span>
                  <span><strong>&quot;{isWelsh ? 'Cefnogi pawb, nid dim ond y rhai sy\'n dda. Pawb i\'w drin yr un fath&quot;' : 'Supporting everyone, not just the ones that are good. Everyone to be treated equally'}&quot;</strong> - {isWelsh ? 'Disgyblion Blwyddyn 5, Ysgol Gynradd Maindee, Casnewydd' : 'Year 5 Pupils, Maindee Primary School, Newport'}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">"</span>
                  <span><strong>&quot;{isWelsh ? 'Y clwb chwaraeon perffaith yw os yw\'r hyfforddwyr yn garedig ac os yw\'r chwaraeon yn hwyl&quot;' : 'The perfect sports club is if the coaches are kind and if the sport is fun'}&quot;</strong> - {isWelsh ? 'Violet, 8 oed' : 'Violet, aged 8'}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">"</span>
                  <span><strong>&quot;{isWelsh ? 'Rydw i eisiau hyfforddwr sy\'n groesawgar, sy\'n gwenu arnaf ac sy\'n gwneud i mi deimlo\'n rhan o\'r gweithgaredd&quot;' : 'I want a coach who is welcoming, smiles at me and makes me feel involved'}&quot;</strong> - {isWelsh ? 'Thomas a Theo, 9 oed' : 'Thomas and Theo, aged 9'}</span>
                </li>
              </ul>
            </div>

            {/* The Three Foundations */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-[#123F56] mb-4">
                {isWelsh ? 'Y Tair Sylfaen' : 'The Three Foundations'}
              </h2>
              <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
                {isWelsh
                  ? 'Gadewch i ni edrych ar y tair maes sy\'n helpu i wneud cyfleoedd chwaraeon i blant yn ddiogel, hwyl a datblygiadol.'
                  : 'Let\'s take a look at the three areas that help make sporting opportunities for children safe, enjoyable and developmental.'}
              </p>

              {/* Foundation 1: Safe */}
              <div className="mb-10 p-8 rounded-2xl bg-white border-2 border-[#E11D2E]">
                <h3 className="text-2xl font-display font-bold text-[#123F56] mb-6">
                  {isWelsh ? 'Sylfaen 1: Diogel' : 'Foundation 1: Safe'}
                </h3>
                <p className="text-lg text-[#64748B] mb-6 font-semibold">
                  {isWelsh ? 'Mae plentyn angen...' : 'A child needs...'}
                </p>
                <p className="text-lg text-[#64748B] mb-4 italic">
                  {isWelsh ? 'Os ydych chi\'n rhedeg sesiwn neu weithgaredd, sgroliwch drwy\'r bocsys gwahanol i weld y pethau y dylech eu hystyried.' : 'If you are running a session or activity, scroll through the different boxes to see the things you should consider.'}
                </p>
                <ul className="space-y-4 text-[#64748B]">
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Fel hwylusydd, dylech gael gwybodaeth am bolisïau ac weithdrefnau diogelu a gwybod pwy yw\'r arweinydd diogelu penodedig ar gyfer eich sefydliad.' : 'As a facilitator, you should have knowledge of safeguarding policies and procedures and know who the designated safeguarding lead for your organisation is.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Mae hyn yn cynnwys sicrhau bod yr amgylchedd yn cyrraedd y safon diogelu gofynnol ac bod digon o hyfforddwyr i sicrhau arfer diogel.' : 'This includes ensuring the environment meets the required safeguarding standard and has a sufficient number of coaches to ensure safe practice.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Dylech greu amgylchedd lle gall plentyn wynebu heriau ac mae cyfle iddo ddod o hyd i atebion.' : 'You should create an environment where a child can face challenges and has the opportunity to come up with solutions.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Ystyriwch y heriau yn seiliedig ar anghenion datblygiadol a phrofiadau gorffennol y plentyn.' : 'Consider the challenges based on the developmental needs and past experiences of the child.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Dylai pob plentyn gael campwr: oedolyn sy\'n poeni am eu mynediad i chwaraeon. Felly, treuliwch amser i ddod i adnabod eich cyfranogwyr a rhoi cefnogaeth i blant pan fyddant yn wynebu heriau allanol neu\'n cael trafferth i gymryd rhan mewn chwaraeon a gweithgarwch corfforol.' : 'Every child should have a champion: an adult who cares about their access into sport. So, spend time getting to know your participants and provide support to children when they are facing external challenges or are struggling to participate in sport and physical activity.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Dylech sicrhau eich bod yn creu amgylchedd sy\'n caniatáu i blentyn deimlo\'n ddiogel i fynegi ei emosiynau am gymryd rhan yn eich gweithgaredd.' : 'You should ensure you create an environment which allows a child to feel safe to express their emotions about participating in your activity.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Byddwch yn groesawgar ac yn empathig i bawb.' : 'Be welcoming and empathetic to all.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Cymerwch amser i ddeall, dathlu a darparu ar gyfer amrywiaeth ac unigrywedd plant a\'u teuluoedd.' : 'Take time to understand, celebrate and cater for the diversity and uniqueness of children and their families.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Creuwch amgylchedd croesawgar lle mae plentyn a\'u oedolyn cyfrifol yn teimlo eu bod yn perthyn.' : 'Create a welcoming environment where a child and their responsible adult feel like they belong.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Dylech greu diwylliant cefnogol i bawb lle mae rôl oedolion cyfrifol yn cael eu croesawu a\'u parchu.' : 'You should create a supportive culture for all where the role of responsible adults is welcomed and respected.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Gwnewch hyn trwy fabwysiadu agwedd gyson i ymddygiad, adlewyrchu a chanmol ymddygiad positif ac annog cyfranogwyr i barchu pawb, bod yn wydn ac colli gydag urddas.' : 'Do this by adopting a consistent approach to behaviour, mirroring and praising positive behaviour and encouraging participants to respect everyone, be resilient and lose with dignity.'}</span>
                  </li>
                </ul>
              </div>

              {/* Foundation 2: Enjoyable */}
              <div className="mb-10 p-8 rounded-2xl bg-white border-2 border-[#F4B400]">
                <h3 className="text-2xl font-display font-bold text-[#123F56] mb-6">
                  {isWelsh ? 'Sylfaen 2: Hwyl' : 'Foundation 2: Enjoyable'}
                </h3>
                <p className="text-lg text-[#64748B] mb-6 font-semibold">
                  {isWelsh ? 'Mae plentyn angen...' : 'A child needs...'}
                </p>
                <p className="text-lg text-[#64748B] mb-4 italic">
                  {isWelsh ? 'Os ydych chi\'n rhedeg sesiwn neu weithgaredd yn uniongyrchol, sgroliwch drwy\'r bocsys gwahanol i weld y pethau y dylech eu hystyried.' : 'If you are directly running a session or activity, scroll through the different boxes to see the things you should consider.'}
                </p>
                <ul className="space-y-4 text-[#64748B]">
                  <li className="flex items-start">
                    <span className="font-semibold text-[#F4B400] mr-2">•</span>
                    <span>{isWelsh ? 'Dylech ddeall bod plant yn dysgu mewn gwahanol ffyrdd.' : 'You should understand that children learn in different ways.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#F4B400] mr-2">•</span>
                    <span>{isWelsh ? 'Dylai gweithgareddau fod yn gynhwysol, hygyrch ac addas i bawb.' : 'Activities should be inclusive, accessible and suitable for all.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#F4B400] mr-2">•</span>
                    <span>{isWelsh ? 'Dylid annog plant i gyfrannu at y gweithgareddau a theimlo\'n gyfforddus yn yr amgylchedd i rannu eu safbwyntiau.' : 'Children should be encouraged to contribute to the activities and feel comfortable in the environment to share their views.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#F4B400] mr-2">•</span>
                    <span>{isWelsh ? 'Dylech sylwi ar gyfathrebu llafar a di-lafar.' : 'You should take notice of both verbal and non-verbal communication.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#F4B400] mr-2">•</span>
                    <span>{isWelsh ? 'Dylai\'r gweithgareddau annog ymgysylltiad teuluol ac agwedd gymdeithasol chwaraeon.' : 'The activities should encourage family engagement and the social aspect of sport.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#F4B400] mr-2">•</span>
                    <span>{isWelsh ? 'Gan fod yn arweinydd hwyl, hapus ac addas, dylech sicrhau bod pob profiad yn brofiad gwych, fel bod plant eisiau dychwelyd dro ar ôl tro.' : 'Being a fun, happy and approachable leader, you should ensure every experience is a great experience, so children to want to return again and again.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#F4B400] mr-2">•</span>
                    <span>{isWelsh ? 'Heb weiddi neu ddefnyddio signalau garw, dylech ddarparu cyfarwyddiadau clir, cryno a chefnogi agwedd dawel sy\'n cynnal rheolaeth ac awdurdod.' : 'Without shouting or using harsh signals, you should provide clear, concise instructions and endorse a calm approach that maintains control and authority.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#F4B400] mr-2">•</span>
                    <span>{isWelsh ? 'Osgoi cyfnodau o anweithgarwch, fel ymarferion neu sesiynau lle mae plant angen ciwio i aros eu tro.' : 'Avoid periods of inactivity, such as drills or sessions where children need to queue to wait their turn.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#F4B400] mr-2">•</span>
                    <span>{isWelsh ? 'Gwnewch amser ar gyfer gweithgareddau anstrwythuredig yn ystod sesiynau i alluogi plant i chwarae a bod yn greadigol wrth ddysgu sgiliau newydd.' : 'Make time for unstructured activities during sessions to allow children to play and be creative while learning new skills.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#F4B400] mr-2">•</span>
                    <span>{isWelsh ? 'Darparwch ganmoliaeth, annog ac atgyfnerthiad positif.' : 'Provide praise, encouragement and positive reinforcement.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#F4B400] mr-2">•</span>
                    <span>{isWelsh ? 'Canolbwyntio ar y broses dros y canlyniad, gan gynnwys cydnabod gwaith caled plentyn, ei amcanion a\'i greadigrwydd.' : 'Focus on the process over the outcome, including recognising a child\'s hard work, intentions and creativity.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#F4B400] mr-2">•</span>
                    <span>{isWelsh ? 'Dylai eich gweithgareddau ddatblygu hyder, cymhelliant a gwydnwch plant, fel eu bod yn barod i roi cynnig ar weithgareddau newydd a derbyn heriau newydd.' : 'Your activities should develop the confidence, motivation and resilience of children, so they are willing to try new activities and embrace new challenges.'}</span>
                  </li>
                </ul>
              </div>

              {/* Foundation 3: Developmental */}
              <div className="mb-10 p-8 rounded-2xl bg-white border-2 border-[#E11D2E]">
                <h3 className="text-2xl font-display font-bold text-[#123F56] mb-6">
                  {isWelsh ? 'Sylfaen 3: Datblygiadol' : 'Foundation 3: Developmental'}
                </h3>
                <p className="text-lg text-[#64748B] mb-6 font-semibold">
                  {isWelsh ? 'Mae plentyn angen...' : 'A child needs...'}
                </p>
                <p className="text-lg text-[#64748B] mb-4 italic">
                  {isWelsh ? 'Os ydych chi\'n rhedeg sesiwn neu weithgaredd yn uniongyrchol, sgroliwch drwy\'r bocsys gwahanol i weld y pethau y dylech eu hystyried.' : 'If you are directly running a session or activity, scroll through the different boxes to see the things you should consider.'}
                </p>
                <ul className="space-y-4 text-[#64748B]">
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Dylai gweithgareddau gael eu siâp a\'u cyflwyno gan hyfforddwyr cymwysedig, gwirfoddolwyr, arweinwyr ac athrawon, sy\'n deall pwysigrwydd gweithgarwch corfforol i blant.' : 'Activities should be shaped and delivered by qualified coaches, volunteers, leaders and teachers, who understand the importance of physical activity for children.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Fel cyflwynydd, dylech ddarparu adborth ystyrlon, dealladwy a gofyn cwestiynau i\'r cyfranogwyr i wirio eu bod yn deall.' : 'As a deliverer, you should provide meaningful, understandable feedback and ask questions of the participants to check that they understand.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Dylech sicrhau bod plant yn gallu adeiladu amrywiaeth o sgiliau symud sylfaenol trwy amrywiaeth o weithgareddau corfforol a chwaraeon gwahanol.' : 'You should ensure that children are able to build a variety of fundamental movement skills through a range of different physical and sporting activities.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Gwnewch hyn trwy gynllunio rhaglenni sy\'n addas i ddatblygiad a chael gwybodaeth am sut y gall sgiliau trosglwyddadwy o wahanol chwaraeon fanteisio ar unigolyn.' : 'Do this by planning programmes which are developmentally appropriate and having knowledge about how transferable skills from different sports can benefit an individual.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Waeth beth yw\'r canlyniad perfformiad, dylech annog plant i gefnogi ei gilydd wrth iddynt archwilio eu symudiad o fewn gweithgarwch corfforol.' : 'Regardless of the performance outcome, you should encourage children to support each other while they explore their movement within physical activity.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Byddwch yn ymwybodol o deimladau, anghenion a risgiau cyfranogwyr wrth iddynt ddatblygu eu sgiliau.' : 'Be aware of the feelings, needs, and risks of participants while they are developing their skills.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Dylai strwythur eich gweithgareddau ganiatáu digon o amser i blant fod yn weithgar.' : 'The structure of your activities should allow ample time for children to be active.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Dylai eich amgylcheddau hyrwyddo symudiad dyddiol, a dylai hwyluswyr ddeall pwysigrwydd gweithgarwch corfforol rheolaidd i blant.' : 'Your environments should promote daily movement, and facilitators should understand the importance of regular physical activity for children.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Wrth gynllunio ac asesu eich gweithgareddau, dylech ystyried cam datblygiadol cymdeithasol, emosiynol, gwybyddol a chorfforol y plentyn.' : 'When planning and assessing your activities, you should take into consideration the child\'s stage of social, emotional, cognitive, and physical development.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Dylai eich gweithgareddau herio a chefnogi gallu a datblygiad cyfannol y plentyn.' : 'Your activities should challenge and support the ability and holistic development of the child.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Mae plant yn datblygu ar gyfraddau gwahanol. Felly, gwahaniaethwch eich gweithgareddau yn seiliedig ar anghenion datblygiadol y plentyn, nid yn seiliedig ar oedran.' : 'Children develop at different rates. So, differentiate your activities based on the developmental needs of the child, not based on age.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Dylai eich amgylchedd fod yn lle diogel lle gall plant wneud camgymeriadau a chael arweiniad ar sut i ddysgu ohonynt.' : 'Your environment should be a safe space where children can make mistakes and be guided on how to learn from them.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Darparwch brofiadau gwahanol i blant trwy gael eich gweithgareddau mewn amgylcheddau gwahanol gan ddefnyddio amrywiaeth o offer, gan ddefnyddio pob cyfle i symud a bod yn weithgar.' : 'Provide children with different experiences by having your activities in different environments using a range of equipment, using every opportunity to be moving and active.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Cynnwys y plant a\'u oedolyn cyfrifol wrth ddewis gweithgareddau.' : 'Involve the children and their responsible adult in the selection of activities.'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span>{isWelsh ? 'Mae angen i chi hefyd sicrhau eich bod yn dewis offer addas sy\'n cyfateb i lefelau datblygiadol a sgil y plentyn.' : 'You also need to make sure you are choosing suitable equipment matched to the child\'s developmental and skill levels.'}</span>
                  </li>
                </ul>
              </div>

              {/* Download PDF Link */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-[#123F56] to-[#1E4A62] text-white text-center">
                <h3 className="text-xl font-display font-bold mb-4">
                  {isWelsh ? 'Fframwaith Sylfaenau: Canllaw Arfer Da' : 'Foundations Framework: A Good Practice Guide'}
                </h3>
                <a
                  href="https://www.sport.wales/download/file/3222/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-white text-[#E11D2E] font-semibold hover:bg-[#F8FAFC] transition-colors"
                >
                  {isWelsh ? 'Lawrlwytho\'r PDF [4.02MB]' : 'Download the PDF [4.02MB]'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Making the Most of Me - Child Centred Approach Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <span className="inline-block text-[#E11D2E] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Dull Addysgu' : 'Teaching Approach'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#123F56] mb-6">
              {isWelsh ? 'Gwneud y Gorau o Fi: Dull Canolbwyntio ar Blentyn' : 'Making the Most of Me: A Child Centred Approach'}
            </h2>
            <p className="text-lg text-[#64748B] mb-4 leading-relaxed italic">
              {isWelsh
                ? 'Dull Canolbwyntio ar Blentyn i Weithgarwch Corfforol'
                : 'A Child Centred Approach to Physical Activity'}
            </p>

            {/* What is a Child Centred Approach? */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold text-[#123F56] mb-4">
                {isWelsh ? 'Beth yw Dull Canolbwyntio ar Blentyn?' : 'What is a Child Centred Approach?'}
              </h3>
              <p className="text-lg text-[#64748B] mb-4 leading-relaxed">
                {isWelsh
                  ? 'Mae Dull Canolbwyntio ar Blentyn yn galluogi plant a phobl ifanc i gymryd rheolaeth o\'u dysgu eu hunain.'
                  : 'A Child Centred Approach enables children and young people to take control of their own learning.'}
              </p>
              <ul className="space-y-3 text-lg text-[#64748B] mb-6">
                <li className="flex items-start">
                  <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                  <span>{isWelsh ? 'Mae sesiynau / gwersi yn cael eu trefnu o amgylch y plentyn a\'u hanghenion a\'u diddordebau personol.' : 'Sessions / lessons are organised around the child and their personal needs and interests.'}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                  <span>{isWelsh ? 'Mae Athrawon a Hyfforddwyr yno i ddarparu cefnogaeth a hwyluso dysgu\'r plentyn, ond plant sy\'n penderfynu cyfeiriad eu dysgu eu hunain gan ddilyn eu chwilfrydedd naturiol, diddordebau a phasiynau.' : 'Teachers and Coaches are there to provide support and facilitate the child\'s learning but children determine the direction of their own learning following their natural curiosities, interests and passions.'}</span>
                </li>
              </ul>
            </div>

            {/* Making The Most Of The Experience */}
            <div className="mb-12 p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h2 className="text-2xl font-display font-bold text-[#123F56] mb-6">
                {isWelsh ? 'Gwneud y Gorau o\'r Profiad' : 'Making The Most Of The Experience'}
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-display font-bold text-[#123F56] mb-4">
                  {isWelsh ? 'Pam mae Dull Canolbwyntio ar Blentyn yn bwysig?' : 'Why is a Child Centred Approach important?'}
                </h3>
                <p className="text-lg text-[#64748B] mb-4 leading-relaxed">
                  {isWelsh
                    ? 'Mae dull canolbwyntio ar blentyn yn ganolog i\'r cwricwlwm newydd. Bydd dull a reolir gan ddysgwyr yn galluogi dysgwyr i addasu a ffynnu drwy eu gweithredu mewn profiadau go iawn, perthnasol ac awdurdodol sy\'n seiliedig ar eu hanghenion, galluoedd a diddordebau.'
                    : 'A child centred approach is central to the new curriculum. A learner driven approach will enable learners to adapt and thrive by engaging them in real, relevant and authentic experiences that are based on their needs, abilities and interests.'}
                </p>
                <p className="text-lg text-[#64748B] leading-relaxed">
                  {isWelsh
                    ? 'Mae ethos y dull canolbwyntio ar blentyn hwn yn gwbl gyson â gweledigaeth Cwricwlwm i Gymru.'
                    : 'The ethos of this child centred approach is completely consistent with the vision of the Curriculum for Wales.'}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-display font-bold text-[#123F56] mb-4">
                  {isWelsh ? 'Beth yw buddion dull canolbwyntio ar blentyn?' : 'What are the benefits of a child centred approach?'}
                </h3>
                <p className="text-lg text-[#64748B] mb-4 italic">
                  {isWelsh ? 'Cyfeiriwch at yr adnoddau isod' : 'Refer to the resources below'}
                </p>
              </div>

              {/* Key Concepts Table */}
              <div className="mb-6 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#E2E8F0]">
                      <th className="px-4 py-3 text-left font-bold text-[#123F56] border border-[#CBD5E1]">{isWelsh ? 'Cysyniad' : 'Concept'}</th>
                      <th className="px-4 py-3 text-left font-bold text-[#123F56] border border-[#CBD5E1]">{isWelsh ? 'Disgrifiad' : 'Description'}</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#64748B]">
                    <tr>
                      <td className="px-4 py-3 border border-[#CBD5E1] font-semibold">RECIPE</td>
                      <td className="px-4 py-3 border border-[#CBD5E1]">{isWelsh ? 'Dewis, Her, Gwella' : 'Choice, Challenge, Improve'}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border border-[#CBD5E1] font-semibold">SMILES</td>
                      <td className="px-4 py-3 border border-[#CBD5E1]">{isWelsh ? 'Cyfeiriwch at yr adnodd isod - SMILES Factsheet' : 'Refer to the resource below - SMILES Factsheet'}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border border-[#CBD5E1] font-semibold">STEP</td>
                      <td className="px-4 py-3 border border-[#CBD5E1]">{isWelsh ? 'Cyfeiriwch at adnoddau Dragon Multi-Skills isod - Factsheet - Addasu Gweithgareddau, Factsheet - Llwyddiant i Bawb' : 'Refer to the Dragon Multi-Skills resources below - Factsheet - Adapting Activities, Factsheet - Success for All'}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border border-[#CBD5E1] font-semibold">{isWelsh ? 'Llythrennedd Corfforol' : 'Physical Literacy'}</td>
                      <td className="px-4 py-3 border border-[#CBD5E1]">
                        <p className="mb-2">{isWelsh ? 'Pwysigrwydd datblygu\'r plentyn cyfan i sicrhau mwynhad ac ymgysylltiad mae angen i ni ddatblygu Hyder, Cymhwyster, Cymhelliant, Gwybodaeth a Dealltwriaeth.' : 'The importance of developing the whole child to ensure enjoyment and engagement we need to develop Confidence, Competence Motivation, Knowledge and Understanding.'}</p>
                        <p>{isWelsh ? 'Os yw dysgwyr yn ymgysylltu pan fyddant yn gymhellol, hyderus, cymwys a gwybodus beth sy\'n digwydd pan fo un agwedd ar goll?' : 'If learners are engaged when they are motivated, confident, competent and knowledgeable what happens when one aspect is missing?'}</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border border-[#CBD5E1] font-semibold">{isWelsh ? 'Llais' : 'Voice'}</td>
                      <td className="px-4 py-3 border border-[#CBD5E1]">
                        <p className="mb-2">{isWelsh ? 'Dylai dewis cynnwys y cwricwlwm ystyried mewnbwn dysgwyr a dylai ddarparu cyfleoedd cynyddol i ddysgwyr helpu i gyfeirio eu dysgu wrth iddynt symud ymlaen.' : 'The selection of curriculum content should consider learners\' input and should provide increasing opportunities for learners to help direct their learning as they progress.'}</p>
                        <p className="mb-2">{isWelsh ? 'Dylid cymryd safbwyntiau dysgwyr am eu profiadau ac am beth, sut a ble maent yn dysgu o ddifri pan fydd cwricwlwm yn cael ei gynllunio.' : 'Learners\' views about their experiences and about what, how and where they learn should be taken seriously when a curriculum is being designed.'}</p>
                        <p>{isWelsh ? 'Mae cyfranogiad yn egwyddor allweddol o\'r UNCRC ac bydd galluogi cyfranogiad yn creu cwricwlwm deniadol sy\'n ymateb i ddiddordebau, anghenion a blaenoriaethau dysgwyr.' : 'Participation is a key principle of the UNCRC and enabling participation will create an engaging curriculum that responds to learners\' interests, needs and priorities.'}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Making The Most Of It - Practice Section */}
            <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-[#123F56] to-[#1E4A62] text-white">
              <h2 className="text-2xl font-display font-bold mb-6">
                {isWelsh ? 'Gwneud y Gorau Ohono' : 'Making The Most Of It'}
              </h2>
              <h3 className="text-xl font-display font-bold mb-4 text-white/90">
                {isWelsh ? 'Dull canolbwyntio ar blentyn mewn ymarfer' : 'A Child centred approach in practice'}
              </h3>
              
              {/* Checklist */}
              <div className="mb-6">
                <p className="text-white/90 mb-4">
                  {isWelsh ? 'Sicrhau cyfleoedd ar gyfer:' : 'Ensure opportunities for:'}
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-white/90">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{isWelsh ? 'Addasu' : 'Adaptation'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{isWelsh ? 'Dewis' : 'Choice'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{isWelsh ? 'Gwneud penderfyniadau' : 'Decision Making'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{isWelsh ? 'Datblygu Sgiliau' : 'Development of Skills'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{isWelsh ? 'Hwyl' : 'Fun'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{isWelsh ? 'Annibyniaeth' : 'Independence'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{isWelsh ? 'Cyfranogiad' : 'Participation'}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{isWelsh ? 'Her' : 'Challenge'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{isWelsh ? 'Cydweithio' : 'Collaboration'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{isWelsh ? 'Gwella' : 'Improvement'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{isWelsh ? 'Ymgysylltiad' : 'Involvement'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{isWelsh ? 'Perthnasoedd Cadarnhaol' : 'Positive Relationships'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{isWelsh ? 'Cwestiynau' : 'Questioning'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{isWelsh ? 'Cyfrifoldeb' : 'Responsibility'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{isWelsh ? 'Diogelwch' : 'Safety'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{isWelsh ? 'Sgafaldio' : 'Scaffolding'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{isWelsh ? 'Ymddiriedaeth' : 'Trust'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{isWelsh ? 'Defnydd o EDD' : 'Use of EDD (Explain, Demonstrate, Do)'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Making The Most Of What Is Available - Resources */}
            <div className="mb-12 p-8 rounded-2xl bg-white border border-[#E2E8F0]">
              <h2 className="text-2xl font-display font-bold text-[#123F56] mb-6">
                {isWelsh ? 'Gwneud y Gorau o\'r Hyn sydd ar Gael' : 'Making The Most Of What Is Available'}
              </h2>
              <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
                {isWelsh
                  ? 'Mae angen i ysgolion ac ymarferwyr dynnu ar yr arweiniad ac adnoddau sydd ar gael i benderfynu ar brofiadau, gwybodaeth a sgiliau penodol a fydd yn cefnogi eu dysgwyr penodol i wireddu pedwar diben Cwricwlwm i Gymru.'
                  : 'Schools and practitioners need to draw on the guidance and resources available to decide on what specific experiences, knowledge and skill will support their specific learners to realise the four purposes of the Curriculum for Wales.'}
              </p>
              <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
                {isWelsh
                  ? 'Mae addysgu a dysgu da yn golygu defnyddio cymysgedd o ddulliau gan gynnwys addysgu uniongyrchol, datrys problemau, yn ogystal â meddwl creadigol a beirniadol.'
                  : 'Good teaching and learning means employing a blend of approaches including direct teaching, problem solving, as well as creative and critical thinking.'}
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-display font-bold text-[#123F56] mb-4">
                  {isWelsh ? 'Pa adnoddau sydd ar gael i\'m cefnogi?' : 'What resources are available to support me?'}
                </h3>
                <ul className="space-y-2 text-lg text-[#64748B] mb-4">
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span><strong>{isWelsh ? 'Modiwlau Gymnasteg' : 'Gymnastics Modules'}</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span><strong>{isWelsh ? 'Chwarae i Ddysgu' : 'Play to Learn'}</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span><strong>{isWelsh ? 'Dragon Sgiliau Lluosog' : 'Dragon Multi Skills'}</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span><strong>{isWelsh ? 'Dragon Chwaraeon' : 'Dragon Sport'}</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span><strong>{isWelsh ? 'Dawns' : 'Dance'}</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span><strong>{isWelsh ? 'Symudiad Creadigol' : 'Creative Movement'}</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span><strong>{isWelsh ? 'Gwneud Ystremp' : 'Making a Splash'}</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                    <span><strong>{isWelsh ? 'Ffitrwydd sy\'n Gysylltiedig ag Iechyd' : 'Health Related Fitness'}</strong></span>
                  </li>
                </ul>
                <p className="text-[#64748B] italic mb-6">
                  {isWelsh
                    ? 'Os nad oes gennych fynediad at yr adnoddau hyn, e-bostiwch'
                    : 'If you haven\'t got access to these resources, email'}{' '}
                  <a href="mailto:communications@sport.wales" className="text-[#E11D2E] font-semibold hover:underline">
                    communications@sport.wales
                  </a>
                </p>

                {/* Warm Ups */}
                <div className="mb-6">
                  <h4 className="text-lg font-display font-bold text-[#123F56] mb-3">
                    {isWelsh ? 'Ymgynhesu' : 'Warm Ups'}
                  </h4>
                  <p className="text-[#64748B] italic mb-3">
                    {isWelsh ? 'Cyfeiriwch at yr adnoddau a restrir isod' : 'Refer to the resources listed below'}
                  </p>
                  <ul className="space-y-2 text-[#64748B]">
                    <li className="flex items-start">
                      <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                      <span>{isWelsh ? 'Dragon Sgiliau Lluosog - Crazy Capers' : 'Dragon Multi-Skills - Crazy Capers'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                      <span>{isWelsh ? 'Gymnasteg - Thread the Needle' : 'Gymnastics - Thread the Needle'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                      <span>{isWelsh ? 'Gymnasteg - Lily Pads' : 'Gymnastics - Lily Pads'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                      <span>{isWelsh ? 'Gymnasteg - Sunbathing Crabs' : 'Gymnastics - Sunbathing Crabs'}</span>
                    </li>
                  </ul>
                </div>

                {/* Skill Development */}
                <div className="mb-6">
                  <h4 className="text-lg font-display font-bold text-[#123F56] mb-3">
                    {isWelsh ? 'Datblygu Sgiliau' : 'Skill Development'}
                  </h4>
                  <p className="text-[#64748B] italic mb-3">
                    {isWelsh ? 'Cyfeiriwch at yr adnoddau a restrir isod' : 'Refer to the resources listed below'}
                  </p>
                  <ul className="space-y-2 text-[#64748B]">
                    <li className="flex items-start">
                      <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                      <span>{isWelsh ? 'Cardiau Sgiliau Technegol - Traed Cyflym' : 'Technical Skill Cards - Fast Feet'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                      <span>{isWelsh ? 'Cardiau Sgiliau Technegol - Safle Barod' : 'Technical Skill Cards - Ready Position'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                      <span>{isWelsh ? 'Cardiau Sgiliau Technegol - Ymatebion Cyflym' : 'Technical Skill Cards - Rapid Reactions'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                      <span>{isWelsh ? 'Cardiau Sgiliau Technegol - Taflu o dan Ysgwydd' : 'Technical Skill Cards - Under Arm Throw'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                      <span>{isWelsh ? 'Cardiau Sgiliau Technegol - Osgoi' : 'Technical Skill Cards - Dodging'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                      <span>{isWelsh ? 'Gymnasteg - Neidio Broga' : 'Gymnastics - Frog Jumping'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                      <span>{isWelsh ? 'Gymnasteg - Siâp Puck' : 'Gymnastics - Puck Shape'}</span>
                    </li>
                  </ul>
                </div>

                {/* Creativity */}
                <div className="mb-6">
                  <h4 className="text-lg font-display font-bold text-[#123F56] mb-3">
                    {isWelsh ? 'Creadigrwydd' : 'Creativity'}
                  </h4>
                  <p className="text-[#64748B] italic mb-3">
                    {isWelsh ? 'Cyfeiriwch at yr adnodd isod' : 'Refer to the resource below'}
                  </p>
                  <ul className="space-y-2 text-[#64748B] mb-4">
                    <li className="flex items-start">
                      <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                      <span>{isWelsh ? 'Dawns (KS2) - Creadigrwydd' : 'Dance (KS2) - Creativity'}</span>
                    </li>
                  </ul>
                  <p className="text-[#64748B] leading-relaxed">
                    {isWelsh
                      ? 'Dylid annog dysgwyr i fod yn greadigol ym mhob agwedd ar eu dysgu, gan gynnwys ethos traws-groesi integredig Cwricwlwm i Gymru, sy\'n annog ysgolion, ymarferwyr a dysgwyr i fabwysiadu\'r agwedd hon ag agweddau a ystyrir yn draddodiadol fel nad ydynt yn greadigol, er enghraifft chwaraeon neu gemau tîm. Trwy feddwl yn greadigol bydd dysgwyr yn fwy ymgysylltiedig ac yn fwy cymhellol gan addasu gweithgareddau i gwrdd â\'u hanghenion, galluoedd a diddordebau. Bydd hyn yn eu helpu i gynnal cyfranogiad tymor hir.'
                      : 'Learners should be encouraged to be creative in all aspects of their learning, including the integrated cross cutting ethos of the Curriculum for Wales, prompts schools, practitioners and learners to take this approach with aspects traditionally viewed as not creative for example sports or team games. By thinking creatively learners will be more engaged and motivated adapting activities to meet their needs, abilities and interests. This will help them sustain long term participation.'}
                  </p>
                  <p className="text-[#64748B] leading-relaxed mt-2">
                    {isWelsh
                      ? 'Mae dawns yn elfen allweddol o\'r maes dysgu a phrofiadau celfyddydau mynegiannol.'
                      : 'Dance is a key element of the expressive arts area of learning and experience.'}
                  </p>
                </div>

                {/* Health and Well-being */}
                <div className="mb-6">
                  <h4 className="text-lg font-display font-bold text-[#123F56] mb-3">
                    {isWelsh ? 'Iechyd a Llesiant' : 'Health and Well-being'}
                  </h4>
                  <p className="text-[#64748B] leading-relaxed mb-3">
                    {isWelsh
                      ? 'Iechyd a llesiant yw\'r maes dysgu a phrofiadau lle y bydd ymarferwyr yn darganfod llawer o\'r agweddau y maent yn eu cysylltu ag ef ac yn eu hadnabod fel addysg gorfforol.'
                      : 'Health and wellbeing is the area of learning and experience where practitioners will find many of the aspects that they associate with and recognise as physical education.'}
                  </p>
                  <p className="text-[#64748B] italic mb-3">
                    {isWelsh ? 'Cyfeiriwch at yr adnoddau isod' : 'Refer to the resources below'}
                  </p>
                  <ul className="space-y-2 text-[#64748B]">
                    <li className="flex items-start">
                      <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                      <span>{isWelsh ? 'Iechyd, Ffitrwydd a Llesiant' : 'Health, Fitness and Well-Being'}</span>
                    </li>
                  </ul>
                </div>

                {/* Mini Games */}
                <div className="mb-6">
                  <h4 className="text-lg font-display font-bold text-[#123F56] mb-3">
                    {isWelsh ? 'Gemau Bach' : 'Mini Games'}
                  </h4>
                  <p className="text-[#64748B] italic mb-3">
                    {isWelsh ? 'Cyfeiriwch at adnoddau Dragon Sgiliau Lluosog isod' : 'Refer to the Dragon Multi-Skills resources below'}
                  </p>
                  <ul className="space-y-2 text-[#64748B]">
                    <li className="flex items-start">
                      <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                      <span>{isWelsh ? 'Fi i ti i fi' : 'Me to you to me'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                      <span>{isWelsh ? 'Rygbi Rounders' : 'Rugby Rounders'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                      <span>{isWelsh ? 'Pen i Ben' : 'End to End'}</span>
                    </li>
                  </ul>
                </div>

                {/* Leading the Learning */}
                <div>
                  <h4 className="text-lg font-display font-bold text-[#123F56] mb-3">
                    {isWelsh ? 'Arwain y Dysgu' : 'Leading the Learning'}
                  </h4>
                  <p className="text-[#64748B] italic mb-3">
                    {isWelsh ? 'Cyfeiriwch at yr adnodd isod' : 'Refer to the resource below'}
                  </p>
                  <ul className="space-y-2 text-[#64748B]">
                    <li className="flex items-start">
                      <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                      <span>{isWelsh ? 'Dawns (KS3) - Rolau Amgen' : 'Dance (KS3) - Alternative Roles'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Making The Most Out Of Reflection */}
            <div className="mb-12 p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h2 className="text-2xl font-display font-bold text-[#123F56] mb-6">
                {isWelsh ? 'Gwneud y Gorau o Adfyfyrio' : 'Making The Most Out Of Reflection'}
              </h2>
              <p className="text-lg font-semibold text-[#123F56] mb-4">
                {isWelsh ? 'Cyflwynydd:' : 'Deliverer:'}
              </p>
              <ul className="space-y-3 text-lg text-[#64748B]">
                <li className="flex items-start">
                  <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                  <span>{isWelsh ? 'Beth wnaethom ni a pham?' : 'What did we do and why?'}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                  <span>{isWelsh ? 'Beth aeth yn dda?' : 'What went well?'}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                  <span>{isWelsh ? 'Beth ni aeth mor dda?' : 'What didn\'t go as well?'}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                  <span>{isWelsh ? 'Beth rwyf wedi\'i ddysgu?' : 'What have I learned?'}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-[#E11D2E] mr-2">•</span>
                  <span>{isWelsh ? 'Beth fyddwn i\'n ei wneud yn wahanol y tro nesaf a pham?' : 'What would I do differently next time and why?'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[#E11D2E] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Dysgu Mwy' : 'Learn More'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#123F56] mb-4">
              {isWelsh ? 'Chwaraeon mewn Ysgolion' : 'Sport in Schools'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Dysgwch fwy am ein gwaith i gefnogi chwaraeon mewn ysgolion yng Nghymru.'
                : 'Learn more about our work to support sport in schools in Wales.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/sport-in-schools" 
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#E11D2E] text-white font-semibold hover:bg-[#E11D2E] transition-colors"
              >
                {isWelsh ? 'Chwaraeon mewn Ysgolion' : 'Sport in Schools'}
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

