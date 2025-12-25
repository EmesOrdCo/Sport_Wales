import { setRequestLocale } from 'next-intl/server';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Lleoliad a Chysylltiadau' : 'Location and Contacts';
  const description = isWelsh
    ? 'Mae gennym tua 160 o staff ledled Cymru gyda\'n prif swyddfa yng Nghaerdydd a\'n swyddfeydd rhanbarthol yn Glannau Dyfrdwy a Chaernarfon.'
    : 'We have around 160 staff based across Wales with our head office in Cardiff and our regional offices in Deeside and Caernarfon.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/contact`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        'en': '/en/contact',
        'cy': '/cy/contact',
      },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Lleoliad a Chysylltiadau' : 'Location and Contacts', url: `https://www.sport.wales/${locale}/contact` },
  ];

  const locations = [
    {
      name: isWelsh ? 'Canolfan Genedlaethol Chwaraeon Cymru' : 'Sport Wales National Centre',
      location: isWelsh ? 'Caerdydd' : 'Cardiff',
      address: 'Sophia Garden Cardiff CF11 9SW',
      email: 'nationalcentre@sport.wales',
      phone: '0300 3003123',
      description: isWelsh
        ? 'Wedi\'i leoli yn Sophia Gardens, mae\'r Ganolfan Genedlaethol yng Nghaerdydd yn gartref Chwaraeon Cymru. Mae\'n ganolfan o chwaraeon perfformiad uchel a chwaraeon cymunedol gyda gwasanaethau a chyfleusterau ar gyfer athletwyr Cymreig blaenllaw, swyddfeydd ar gyfer cyrff llywodraethu cenedlaethol, ac ystod o gyfleusterau mynediad cyhoeddus.'
        : 'Based in Sophia Gardens, the National Centre in Cardiff is the home of Sport Wales. A hub of high performance and community sport the centre has services and facilities for top Welsh athletes, offices for national governing bodies, and a range of public access facilities.',
    },
    {
      name: 'Plas Menai',
      location: isWelsh ? 'Gogledd Cymru' : 'North Wales',
      address: isWelsh ? 'Canolfan Awyr Agored Genedlaethol Chwaraeon Cymru, Caernarfon Gwynedd LL55 1UE' : 'Sport Wales National Outdoor Centre, Caernarfon Gwynedd LL55 1UE',
      phone: '0300 300 3112',
      description: isWelsh
        ? 'Mae Gogledd Cymru yn gartref i Plas Menai, y Ganolfan Awyr Agored Genedlaethol i Gymru sydd wedi\'i lleoli\'n berffaith ar gyfer yr antur awyr agored gorau. Wedi\'i leoli ar lannau Afon Menai, yn gyfleus rhwng Bangor a Chaernarfon, ar arfordir Gogledd Cymru.'
        : 'North Wales is home to Plas Menai, the National Outdoor Centre for Wales is perfectly situated for the ultimate outdoor adventure. Situated on the banks of the Menai Strait, conveniently placed between Bangor and Caernarfon, on the North Wales coast.',
      externalUrl: 'https://www.plasmenai.co.uk/',
    },
    {
      name: isWelsh ? 'Swyddfa Ranbarthol Gogledd Ddwyrain' : 'North East Regional Office',
      location: isWelsh ? 'Glannau Dyfrdwy' : 'Deeside',
      address: isWelsh ? 'Canolfan Hamdden Glannau Dyfrdwy, Ffordd Caer, Gorllewin Queen Ferry, Glannau Dyfrdwy CH5 1SA' : 'Deeside Leisure Centre Chester Road West Queen ferry Deeside CH5 1SA',
      phone: '0300 3003103',
      description: isWelsh
        ? 'Swyddfa ranbarthol Chwaraeon Cymru yng Ngogledd Ddwyrain Cymru.'
        : 'Sport Wales regional office in North East Wales.',
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
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#14B8A6]/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {isWelsh ? 'Lleoliad a Chysylltiadau' : 'Location and Contacts'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Lleoliad a Chysylltiadau' : 'Location and Contacts'}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-4">
              {isWelsh
                ? 'Mae gennym tua 160 o staff ledled Cymru gyda\'n prif swyddfa yng Nghaerdydd a\'n swyddfeydd rhanbarthol yn Glannau Dyfrdwy a Chaernarfon.'
                : 'We have around 160 staff based across Wales with our head office in Cardiff and our regional offices in Deeside and Caernarfon.'}
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              {isWelsh
                ? 'Mae Chwaraeon Cymru yn berchen ac yn gweithredu dwy ganolfan genedlaethol yng Nghymru – un yn y gogledd ac un yn y de.'
                : 'Sport Wales owns and operates two national centres in Wales – one in the north and one in the south.'}
            </p>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 max-w-xl">
              <p className="text-white/90 text-sm">
                {isWelsh
                  ? 'Ar gyfer ymholiadau sy\'n ymwneud ag adrannau a staff Chwaraeon Cymru, ffoniwch '
                  : 'For enquiries related to Sport Wales departments and staff, call '}
                <span className="font-bold text-white">0300 3003111</span>.
              </p>
              <p className="text-white/90 text-sm mt-2">
                {isWelsh
                  ? 'Ar gyfer pob ymholiad ganolfan arall gweler y manylion isod.'
                  : 'For all other centre enquiries see the details below.'}
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

      {/* Getting To Sport Wales National Centre */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-8">
              {isWelsh ? 'Cyrraedd Canolfan Genedlaethol Chwaraeon Cymru' : 'Getting To Sport Wales National Centre'}
            </h2>

            {/* Active Travel */}
            <div className="mb-8">
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#B91C3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {isWelsh ? 'Teithio Gweithredol' : 'Active Travel'}
              </h3>
              <p className="text-[#475569] mb-3">
                {isWelsh
                  ? 'Gallwch ddod o hyd i wybodaeth ac adnoddau i helpu cynllunio eich taith ar feic, trên, bws neu gerdded '
                  : 'You can find information and resources to help plan your journey by bike, train, bus or walking '}
                <a href="https://www.traveline.cymru/" target="_blank" rel="noopener noreferrer" className="text-[#B91C3C] hover:underline">
                  {isWelsh ? 'yma' : 'here'}
                </a>.
              </p>
              <p className="text-[#475569] mb-3">
                {isWelsh
                  ? 'Mae lleoedd parcio beiciau wrth brif fynedfa\'r ganolfan.'
                  : 'There are locations for cycle parking at the main entrance of the centre.'}
              </p>
              <p className="text-[#475569]">
                {isWelsh
                  ? 'Mae llwybrau beicio ym mhob cyfeiriad. Mae gwefan Cyngor Caerdydd yn cynnwys adnoddau i helpu cynllunio eich taith.'
                  : 'There are cycle trails in each direction. The Cardiff Council website has resources to help plan your journey.'}
                {' '}
                <a href="https://www.cardiff.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-[#B91C3C] hover:underline">
                  {isWelsh ? 'Gwefan Cyngor Caerdydd' : 'Cardiff Council website'}
                </a>
              </p>
            </div>

            {/* Train */}
            <div className="mb-8">
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#B91C3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                {isWelsh ? 'Trên' : 'Train'}
              </h3>
              <p className="text-[#475569]">
                {isWelsh
                  ? 'Mae gwasanaethau trên yn rhedeg o Orsaf Ganolog Caerdydd, mae\'r orsaf 15 munud o gerdded o\'r Ganolfan Genedlaethol. Gellir dod o hyd i ragor o wybodaeth ar '
                  : 'Train services run from Cardiff Central Station, the station is a 15 minute walk from the National Centre. More information can be found on '}
                <a href="https://www.traveline.cymru/" target="_blank" rel="noopener noreferrer" className="text-[#B91C3C] hover:underline">
                  {isWelsh ? 'gwefan Traveline Cymru' : 'Traveline Cymru\'s website'}
                </a>.
              </p>
            </div>

            {/* Car Parking */}
            <div>
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#B91C3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                {isWelsh ? 'Parcio Car' : 'Car Parking'}
              </h3>
              <p className="text-[#475569]">
                {isWelsh
                  ? 'Mae maes parcio gyda pharcio anableddau o flaen Canolfan Genedlaethol Chwaraeon Cymru, mae parcio ar sail cyntaf i\'r cyntaf ac yn rhad ac am ddim wrth ddefnyddio\'r ganolfan.'
                  : 'There is a car park with disabled parking at the front of Sport Wales National Centre, parking is on a first come first serve basis and is free while using the centre.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-12 text-center">
            {isWelsh ? 'Ein Lleoliadau' : 'Our Locations'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E2E8F0] hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-3">
                  {location.name}
                </h3>
                <p className="text-[#64748B] text-sm font-medium mb-4">
                  {location.location}
                </p>
                <div className="space-y-3 mb-6">
                  <p className="text-[#475569] text-sm">
                    {location.address}
                  </p>
                  {location.email && (
                    <a href={`mailto:${location.email}`} className="block text-[#B91C3C] text-sm hover:underline">
                      {location.email}
                    </a>
                  )}
                  <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="block text-[#B91C3C] text-sm hover:underline font-medium">
                    {location.phone}
                  </a>
                </div>
                <p className="text-[#64748B] text-sm mb-6 leading-relaxed">
                  {location.description}
                </p>
                {location.externalUrl ? (
                  <a
                    href={location.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-[#B91C3C] text-white text-sm font-semibold hover:bg-[#991B1B] transition-colors"
                  >
                    {isWelsh ? 'Ymweld â\'r wefan' : 'Visit website'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2 px-4 rounded-full border-2 border-[#E2E8F0] text-[#0F172A] text-sm font-semibold hover:border-[#B91C3C] hover:text-[#B91C3C] transition-colors"
                  >
                    {isWelsh ? 'Gweld ar Google Maps' : 'Find on Google Maps'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Enquiries */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Ar gyfer ymholiadau cyfryngau' : 'For media enquiries'}
            </h2>
            <p className="text-lg text-[#64748B] mb-6">
              {isWelsh
                ? 'Os oes gennych ymholiad cyfryngau, cysylltwch â\'n tîm cyfathrebu.'
                : 'If you have a media enquiry please contact our communications team.'}
            </p>
            <a 
              href="mailto:communications@sport.wales"
              className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
            >
              {isWelsh ? 'Cysylltwch â\'n tîm cyfathrebu' : 'Contact our communications team'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
