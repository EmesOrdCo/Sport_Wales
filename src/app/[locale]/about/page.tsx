import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'navigation' });
  const isWelsh = locale === 'cy';
  
  const title = t('whatIsSportWales');
  const description = isWelsh 
    ? 'Dysgwch am Chwaraeon Cymru, y sefydliad cenedlaethol sy\'n gyfrifol am ddatblygu a hyrwyddo chwaraeon yng Nghymru ers 1972.'
    : 'Learn about Sport Wales, the national organisation responsible for developing and promoting sport in Wales since 1972.';
  
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/about`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        'en': '/en/about',
        'cy': '/cy/about',
      },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'navigation' });

  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: t('whatIsSportWales'), url: `https://www.sport.wales/${locale}/about` },
  ];

  const executiveTeam = [
    {
      name: 'Brian Davies',
      role: isWelsh ? 'Prif Weithredwr' : 'Chief Executive Officer',
    },
    {
      name: 'Graham Williams',
      role: isWelsh ? 'Cyfarwyddwr Deallusrwydd Chwaraeon a Datblygu Gwasanaethau' : 'Director of Sport Intelligence and Service Development',
    },
    {
      name: 'Emma Wilkins',
      role: isWelsh ? 'Cyfarwyddwr Cyllid a Gwasanaethau Busnes' : 'Director of Finance and Business Services',
    },
    {
      name: 'Owen Lewis',
      role: isWelsh ? 'Cyfarwyddwr System Chwaraeon' : 'Director of Sport System',
    },
  ];

  const responsibilities = [
    {
      title: isWelsh ? 'Rôl Ymgynghorol' : 'Advisory Role',
      description: isWelsh 
        ? 'Gwasanaethu fel y prif ymgynghorydd ar faterion chwaraeon i Lywodraeth Cymru.'
        : 'Serving as the main adviser on sporting matters to the Welsh Government.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: isWelsh ? 'Dosbarthu Cyllid' : 'Funding Distribution',
      description: isWelsh 
        ? 'Dyrannu cronfeydd y Loteri Genedlaethol i chwaraeon elît a llawr gwlad yng Nghymru.'
        : 'Allocating National Lottery funds to both elite and grassroots sports in Wales.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: isWelsh ? 'Partneriaethau' : 'Partnerships',
      description: isWelsh 
        ? 'Cydweithio gyda sefydliadau amrywiol i ddarparu a datblygu chwaraeon ledled Cymru.'
        : 'Collaborating with various organisations to deliver and develop sport across Wales.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#B91C3C]/20 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {isWelsh ? 'Ers 1972' : 'Since 1972'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {t('whatIsSportWales')}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {isWelsh
                ? 'Ni yw\'r sefydliad cenedlaethol sy\'n gyfrifol am ddatblygu a hyrwyddo chwaraeon a gweithgarwch corfforol yng Nghymru. Fe\'n sefydlwyd gan Siarter Frenhinol ar 4 Chwefror 1972.'
                : 'We are the national organisation responsible for developing and promoting sport and physical activity in Wales. Established by Royal Charter on 4 February 1972.'}
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

      {/* Vision Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
                {isWelsh ? 'Ein Gweledigaeth' : 'Our Vision'}
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh 
                  ? 'Cenedl Iachach a Mwy Actif' 
                  : 'A Healthier and More Active Nation'}
              </h2>
              <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
                {isWelsh
                  ? 'Ein gweledigaeth yw gweld cenedl iachach a mwy actif, lle mae pob person ifanc yn cael dechrau gwych mewn bywyd, gan eu galluogi i fwynhau oes o chwaraeon.'
                  : 'Our vision is to see a healthier and more active nation, where every young person has a great start in life, enabling them to enjoy a lifetime of sport.'}
              </p>
              <p className="text-lg text-[#64748B] leading-relaxed">
                {isWelsh
                  ? 'Ein nod yw rhoi\'r gefnogaeth sydd ei hangen ar ein hathletwyr mwyaf addawol i gystadlu\'n llwyddiannus ar lwyfan y byd.'
                  : 'We aim to provide our most promising athletes with the support they need to compete successfully on the world stage.'}
              </p>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-[#B91C3C] to-[#991B1B] p-8 lg:p-10 text-white">
                <svg className="w-12 h-12 text-white/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-xl lg:text-2xl font-display leading-relaxed mb-4">
                  {isWelsh 
                    ? '"Rydym am i Gymru fod yn genedl fwy egnïol ac iachach."'
                    : '"We want Wales to be a more active, healthier nation."'}
                </blockquote>
                <p className="text-white/70 text-sm">
                  — Sport Wales
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Ein Cyfrifoldebau' : 'Our Responsibilities'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Yr Hyn a Wnawn' : 'What We Do'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Rydym yn gweithio mewn partneriaeth gyda nifer o sefydliadau gwahanol sy\'n darparu a datblygu chwaraeon ledled Cymru.'
                : 'We work in partnership with a number of different organisations that deliver and develop sport across Wales.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {responsibilities.map((item, index) => (
              <div 
                key={index}
                className="p-6 lg:p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#B91C3C]/10 flex items-center justify-center text-[#B91C3C] mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#64748B]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[#F59E0B] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Arweinyddiaeth' : 'Leadership'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Tîm Gweithredol Chwaraeon Cymru' : 'Sport Wales Executive Team'}
            </h2>
            <p className="text-lg text-[#64748B]">
              {isWelsh
                ? 'Mae\'r tîm Gweithredol yn gyfrifol am weithredu ein strategaeth a\'n cynllun busnes, yn ogystal ag elfennau amrywiol o ryngweithio â\'r Llywodraeth a datblygu sefydliadol.'
                : 'The Executive team has responsibility for implementing our strategy and business plan, as well as the various elements of Government interaction and organisational development.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executiveTeam.map((member, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0F172A] to-[#334155] mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-[#64748B]">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
                {isWelsh ? 'Bwrdd Chwaraeon Cymru' : 'Sport Wales Board'}
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
                {isWelsh ? 'Ein Llywodraethu' : 'Our Governance'}
              </h2>
              <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
                {isWelsh
                  ? 'Mae ein Bwrdd yn amrywiol, yn ceisio adlewyrchu\'r cymunedau y mae\'n eu gwasanaethu, ac yn dod â chyfoeth o brofiad o weithio gyda chymunedau sy\'n tan-gyfranogi ac athletwyr elitaidd.'
                  : 'Our Board is diverse, seeking to reflect the communities it serves, and brings a wealth of experience of working with under-participating communities and elite athletes.'}
              </p>
              <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
                {isWelsh
                  ? 'Caiff aelodau eu penodi i fwrdd Chwaraeon Cymru gan Lywodraeth Cymru.'
                  : 'Members are appointed to Sport Wales\' board by the Welsh Government.'}
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  isWelsh ? 'Hyrwyddo manteision chwaraeon a gweithgarwch corfforol' : 'Promote the benefits of sport and physical activity',
                  isWelsh ? 'Herio Chwaraeon Cymru i gwrdd â\'i nodau' : 'Challenge Sport Wales to meet its aims and objectives',
                  isWelsh ? 'Gweithredu er safonau uchel mewn cyllid cyhoeddus' : 'Act in a way that promotes high standards in public finance',
                  isWelsh ? 'Sicrhau llywodraethu effeithiol a rheoli risg' : 'Ensure effective governance and risk management',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#64748B]">
                    <div className="w-6 h-6 rounded-full bg-[#B91C3C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#B91C3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-[#B91C3C] to-[#991B1B] p-8 lg:p-10 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold">{isWelsh ? 'Siarter Frenhinol' : 'Royal Charter'}</h3>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed mb-6">
                  {isWelsh
                    ? 'Sefydlwyd Chwaraeon Cymru gan Siarter Frenhinol ar 4 Chwefror 1972 gyda\'r nod o "feithrin a darparu cyfleusterau ar gyfer gwybodaeth ac arfer chwaraeon a hamdden corfforol y cyhoedd cyffredinol".'
                    : 'Sport Wales was established by Royal Charter on 4 February 1972 with the aim of "fostering and providing facilities for the sport and physical recreation knowledge and practice of the general public".'}
                </p>
                <p className="text-sm text-white/70">
                  {isWelsh
                    ? 'Fel y prif ymgynghorydd ar faterion chwaraeon i Lywodraeth Cymru, darperir Llythyr Cylch Gorchwyl i ni sy\'n nodi blaenoriaethau\'r gyllideb.'
                    : 'As the main adviser on sporting matters to the Welsh Government, Sport Wales is provided with a Remit Letter detailing budget priorities.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 lg:py-24 bg-[#0F172A]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
                {isWelsh ? 'Ein Lleoliadau' : 'Our Locations'}
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold !text-white mb-6">
                {isWelsh ? 'Ble Rydym Wedi\'n Lleoli?' : 'Where Are We Located?'}
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                {isWelsh
                  ? 'Mae gennym tua 160 o staff ledled Cymru gyda\'n prif swyddfa yng Nghaerdydd a swyddfeydd rhanbarthol yng Nglannau Dyfrdwy a Chaernarfon.'
                  : 'We have around 160 staff across Wales with our head office in Cardiff and regional offices in Deeside and Caernarfon.'}
              </p>
              
              <div className="space-y-4">
                {[
                  { 
                    name: isWelsh ? 'Prif Swyddfa - Caerdydd' : 'Head Office - Cardiff',
                    address: 'Sport Wales National Centre, Sophia Gardens, Cardiff, CF11 9SW',
                  },
                  { 
                    name: isWelsh ? 'Swyddfa Ranbarthol - Glannau Dyfrdwy' : 'Regional Office - Deeside',
                    address: 'Deeside, North Wales',
                  },
                  { 
                    name: isWelsh ? 'Swyddfa Ranbarthol - Caernarfon' : 'Regional Office - Caernarfon',
                    address: 'Caernarfon, Gwynedd',
                  },
                ].map((office, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                    <div className="w-10 h-10 rounded-lg bg-[#B91C3C]/20 flex items-center justify-center text-[#B91C3C] flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{office.name}</h3>
                      <p className="text-sm text-white/60">{office.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-[#1E293B] to-[#334155] p-8 lg:p-10 border border-white/10">
                <div className="text-center">
                  <div className="text-6xl lg:text-7xl font-display font-bold text-[#B91C3C] mb-2">
                    160+
                  </div>
                  <p className="text-white/70 text-lg mb-8">
                    {isWelsh ? 'Staff ledled Cymru' : 'Staff across Wales'}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    <div>
                      <div className="text-2xl font-bold text-white">3</div>
                      <p className="text-xs text-white/50">{isWelsh ? 'Swyddfeydd' : 'Offices'}</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">1972</div>
                      <p className="text-xs text-white/50">{isWelsh ? 'Sefydlwyd' : 'Founded'}</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">50+</div>
                      <p className="text-xs text-white/50">{isWelsh ? 'Mlynedd' : 'Years'}</p>
                    </div>
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
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Cysylltwch â Ni' : 'Get in Touch'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Hoffech Chi Ddysgu Mwy?' : 'Want to Learn More?'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Os hoffech chi ddysgu mwy am ein gwaith neu sut gallwn ni eich helpu, cysylltwch â ni.'
                : 'If you\'d like to learn more about our work or how we can help you, get in touch.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
              >
                {isWelsh ? 'Cysylltu â ni' : 'Contact us'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/news"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full border-2 border-[#E2E8F0] text-[#0F172A] font-semibold hover:border-[#B91C3C] hover:text-[#B91C3C] transition-colors"
              >
                {isWelsh ? 'Darllenwch ein newyddion' : 'Read our news'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
