import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';
  
  const title = isWelsh ? 'Canolfan Genedlaethol Chwaraeon Cymru' : 'Sport Wales National Centre';
  const description = isWelsh 
    ? 'Canolfan genedlaethol Chwaraeon Cymru yng Nghaerdydd. Cartref chwaraeon perfformiad uchel a chwaraeon cymunedol yng Nghymru.'
    : 'Sport Wales National Centre in Cardiff. Home of high performance and community sport in Wales.';
  
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/national-centre`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/national-centre`,
      languages: {
        'en': '/en/national-centre',
        'cy': '/cy/national-centre',
      },
    },
  };
}

export default async function NationalCentrePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Canolfan Genedlaethol' : 'National Centre', url: `https://www.sport.wales/${locale}/national-centre` },
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {isWelsh ? 'Caerdydd' : 'Cardiff'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Canolfan Genedlaethol Chwaraeon Cymru' : 'Sport Wales National Centre'}
            </h1>
          </div>
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120V60C360 20 720 0 1080 20C1260 30 1380 50 1440 60V120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Cyfleusterau' : 'Facilities'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {/* Main Arena */}
            <div className="p-6 lg:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                {isWelsh ? 'Prif Arena' : 'Main Arena'}
              </h3>
              <p className="text-[#64748B]">
                {isWelsh
                  ? 'Cynnal cystadlaethau rhyngwladol neu ddigwyddiadau sefydliadol yn ein prif ardal 10 cwrt gyda seddi i wylwyr. Addas ar gyfer pêl-fasged, pêl-rwyd, badminton, gymnasteg ac yn addas ar gyfer chwaraeon eraill.'
                  : 'Host international competitions or organisational events at our 10-court main area with spectator seating. Suitable for basketball, netball, badminton, gymnastics and adaptable for other sports.'}
              </p>
            </div>

            {/* Jubilee Hall */}
            <div className="p-6 lg:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                {isWelsh ? 'Neuadd Jiwbilî' : 'Jubilee Hall'}
              </h3>
              <p className="text-[#64748B]">
                {isWelsh
                  ? 'Archebwch y neuadd i chwarae pêl-fasged, pêl-rwyd, neu badminton yn ein neuadd chwaraeon llai.'
                  : 'Book the hall to play basketball, netball, or badminton in our smaller sports hall.'}
              </p>
            </div>

            {/* Fitness Studio */}
            <div className="p-6 lg:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                {isWelsh ? 'Stiwdio Ffitrwydd' : 'Fitness Studio'}
              </h3>
              <p className="text-[#64748B]">
                {isWelsh
                  ? 'Chwarae tennis bwrdd neu boccia yn ein stiwdio ffitrwydd.'
                  : 'Play table tennis or boccia in our fitness studio.'}
              </p>
            </div>

            {/* National Judo Centre */}
            <div className="p-6 lg:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                {isWelsh ? 'Canolfan Jiwdo Genedlaethol' : 'National Judo Centre'}
              </h3>
              <p className="text-[#64748B]">
                {isWelsh
                  ? 'Cartref Cymdeithas Jiwdo Cymru, mae\'r dojo pwrpasol hwn yn cynnig matiau o ansawdd uchel, seddi i wylwyr, ac amgylchedd pwrpasol ar gyfer hyfforddi a chystadlu.'
                  : 'Home to the Welsh Judo Association, this dedicated dojo offers high-quality mats, spectator seating, and a purpose-built environment for training and competition.'}
              </p>
            </div>

            {/* Meeting Rooms */}
            <div className="p-6 lg:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                {isWelsh ? 'Ystafelloedd Cyfarfod' : 'Meeting Rooms'}
              </h3>
              <p className="text-[#64748B]">
                {isWelsh
                  ? 'Dewiswch o ystod o fannau cyfarfod hyblyg, yn ddelfrydol ar gyfer gweithdai, diwrnodau hyfforddi, a chynadleddau. Wedi\'u cyfarparu\'n llawn gyda Microsoft Teams a chyfleusterau AV gydag opsiynau arlwyo ar gael.'
                  : 'Choose from a range of flexible meeting spaces, ideal for workshops, training days, and conferences. Fully equipped with Microsoft Teams and AV facilities with catering options available.'}
              </p>
            </div>

            {/* High Performance Area */}
            <div className="p-6 lg:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                {isWelsh ? 'Ardal Perfformiad Uchel' : 'High Performance Area'}
              </h3>
              <p className="text-[#64748B]">
                {isWelsh
                  ? 'Gofod hyfforddi arbenigol wedi\'i gadw ar gyfer athletwyr elît, yn cynnwys offer cryfder a chyflyru o\'r radd flaenaf i gefnogi perfformiad o\'r radd flaenaf. Defnyddiwyd gan Dîm Pêl-droed Menywod Denmarc.'
                  : 'A specialist training space reserved for elite athletes, featuring cutting-edge strength and conditioning equipment to support world-class performance. Used by the Denmark Women\'s Football Team.'}
              </p>
            </div>

            {/* Hockey Pitch */}
            <div className="p-6 lg:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                {isWelsh ? 'Cae Hoci' : 'Hockey Pitch'}
              </h3>
              <p className="text-[#64748B]">
                {isWelsh
                  ? 'Cartref Hoci Cymru. Chwarae ar ein cae hoci seiliedig ar ddŵr o safon ryngwladol, gyda llifoleuadau ac ardaloedd i wylwyr ar gyfer hyfforddiant neu gemau.'
                  : 'Home of Hoci Cymru. Play on our international-standard water-based hockey pitch, complete with floodlights and spectator areas for training or fixtures.'}
              </p>
            </div>

            {/* Grass Pitch */}
            <div className="p-6 lg:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                {isWelsh ? 'Cae Glaswellt' : 'Grass Pitch'}
              </h3>
              <p className="text-[#64748B]">
                {isWelsh
                  ? 'Cae glaswellt maint llawn ar gyfer rygbi neu bêl-droed. Defnyddiwyd yn flaenorol gan dimau rygbi\'r All Blacks a\'r Springboks.'
                  : 'A full-size grass pitch for rugby or football. Used previously by the All Blacks and the Springboks rugby teams.'}
              </p>
            </div>
          </div>

          {/* Booking CTA */}
          <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-2xl p-8 lg:p-10 text-center">
            <p className="text-lg text-white/90 mb-4">
              {isWelsh ? 'I archebu unrhyw un o\'r uchod, ffoniwch' : 'To book any of the above, please call'}
            </p>
            <a
              href="tel:03003003123"
              className="inline-flex items-center gap-2 text-2xl font-display font-bold text-white hover:text-[#B91C3C] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0300 3003123
            </a>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-12 text-center">
              {isWelsh ? 'Lleoliad a Chysylltiadau' : 'Location and Contact'}
            </h2>
            
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#E2E8F0] shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                    {isWelsh ? 'Canolfan Genedlaethol Chwaraeon Cymru' : 'Sport Wales National Centre'}
                  </h3>
                  <div className="space-y-3 text-[#64748B]">
                    <p className="text-[#334155]">
                      Sophia Gardens<br />
                      Cardiff<br />
                      CF11 9SW
                    </p>
                    <div>
                      <a href="mailto:nationalcentre@sport.wales" className="text-[#B91C3C] hover:underline">
                        nationalcentre@sport.wales
                      </a>
                    </div>
                    <div>
                      <a href="tel:03003003123" className="text-[#B91C3C] hover:underline font-medium">
                        0300 3003123
                      </a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-display font-bold text-[#0F172A] mb-4">
                    {isWelsh ? 'Parcio' : 'Parking'}
                  </h4>
                  <p className="text-[#64748B] mb-4">
                    {isWelsh
                      ? 'Mae maes parcio gyda pharcio anableddau o flaen Canolfan Genedlaethol Chwaraeon Cymru, mae parcio ar sail cyntaf i\'r cyntaf ac yn rhad ac am ddim wrth ddefnyddio\'r ganolfan.'
                      : 'There is a car park with disabled parking at the front of Sport Wales National Centre, parking is on a first come first serve basis and is free while using the centre.'}
                  </p>
                  <h4 className="text-lg font-display font-bold text-[#0F172A] mb-4">
                    {isWelsh ? 'Trên' : 'Train'}
                  </h4>
                  <p className="text-[#64748B]">
                    {isWelsh
                      ? 'Mae gwasanaethau trên yn rhedeg o Orsaf Ganolog Caerdydd, mae\'r orsaf 15 munud o gerdded o\'r Ganolfan Genedlaethol.'
                      : 'Train services run from Cardiff Central Station, the station is a 15 minute walk from the National Centre.'}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-[#E2E8F0]">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sophia+Gardens+Cardiff+CF11+9SW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
                >
                  {isWelsh ? 'Gweld ar Google Maps' : 'Find on Google Maps'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CMS Articles Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Newyddion' : 'News'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
              {isWelsh ? 'Y Diweddaraf o\'r Ganolfan' : 'Latest from the Centre'}
            </h2>
          </div>

          {/* CMS Placeholder Articles */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                  <div className="text-center p-6">
                    <svg className="w-12 h-12 text-[#94A3B8] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm text-[#94A3B8]">{isWelsh ? 'Delwedd Erthygl' : 'Article Image'}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="h-6 bg-[#E2E8F0] rounded mb-3 w-3/4"></div>
                  <div className="h-4 bg-[#F1F5F9] rounded mb-2"></div>
                  <div className="h-4 bg-[#F1F5F9] rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center p-8 bg-white rounded-2xl border-2 border-dashed border-[#E2E8F0]">
            <p className="text-[#64748B] font-medium">
              {isWelsh ? 'Golygu o\'r CMS' : 'Editable from CMS'}
            </p>
            <p className="text-sm text-[#94A3B8] mt-1">
              {isWelsh ? 'Bydd erthyglau\'n cael eu tynnu o\'r system rheoli cynnwys' : 'Articles will be pulled from the content management system'}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Archebwch Nawr' : 'Book Now'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold !text-white mb-4">
              {isWelsh ? 'Ymweld â\'r Ganolfan Genedlaethol' : 'Visit the National Centre'}
            </h2>
            <p className="text-lg text-white/80 mb-8">
              {isWelsh
                ? 'Gweler ein holl gyfleusterau a lleoliadau, neu cysylltwch â ni am ragor o wybodaeth.'
                : 'View all our facilities and locations, or contact us for more information.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/facilities" 
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
              >
                {isWelsh ? 'Ein Cyfleusterau' : 'Our Facilities'}
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
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

