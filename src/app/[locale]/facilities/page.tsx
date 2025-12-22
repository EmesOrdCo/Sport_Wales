'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function FacilitiesPage() {
  const locale = useLocale();
  const isWelsh = locale === 'cy';

  const facilities = [
    {
      name: isWelsh ? 'Canolfan Genedlaethol Chwaraeon Cymru' : 'Sport Wales National Centre',
      location: isWelsh ? 'Caerdydd' : 'Cardiff',
      description: isWelsh
        ? 'Mae Canolfan Genedlaethol Chwaraeon Cymru yn darparu cyfleusterau chwaraeon o safon fyd-eang ar gyfer athletwyr, clybiau a\'r gymuned. Mae\'r ganolfan yn cynnwys campfa, pwll nofio, neuaddau chwaraeon, ac ystafelloedd cyfarfod.'
        : 'The Sport Wales National Centre provides world-class sports facilities for athletes, clubs and the community. The centre includes a gym, swimming pool, sports halls, and meeting rooms.',
      features: [
        isWelsh ? 'Pwll nofio 50m' : '50m swimming pool',
        isWelsh ? 'Campfa o\'r radd flaenaf' : 'State-of-the-art gym',
        isWelsh ? 'Neuaddau chwaraeon amlbwrpas' : 'Multi-purpose sports halls',
        isWelsh ? 'Ystafelloedd cyfarfod a hyfforddi' : 'Meeting and training rooms',
      ],
      color: 'bg-[#B91C3C]',
      bookingInfo: isWelsh
        ? 'Mae cyfleusterau\'r Ganolfan Genedlaethol ar gael i\'w llogi ar gyfer digwyddiadau, hyfforddiant a gwersylloedd. Cysylltwch â ni am ragor o wybodaeth.'
        : 'National Centre facilities are available for hire for events, training and camps. Contact us for more information.',
    },
    {
      name: 'Plas Menai',
      location: isWelsh ? 'Gogledd Cymru' : 'North Wales',
      description: isWelsh
        ? 'Os yw antur awyr agored yn eich denu, mae gan Plas Menai y cyfan. Dyma\'r Ganolfan Awyr Agored Genedlaethol i Gymru ac mae wedi\'i lleoli ar lannau Afon Menai yng Ngogledd Cymru.'
        : "If it's outdoor adventure you're after, Plas Menai has got it all. It is The National Outdoor Centre for Wales and is situated on the banks of the Menai Strait in North Wales.",
      features: [
        isWelsh ? 'Hwylio a chaiacio' : 'Sailing and kayaking',
        isWelsh ? 'Dringo creigiau' : 'Rock climbing',
        isWelsh ? 'Beicio mynydd' : 'Mountain biking',
        isWelsh ? 'Llety ar y safle' : 'On-site accommodation',
      ],
      color: 'bg-[#14B8A6]',
      externalUrl: 'https://www.plasmenai.co.uk/',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#B91C3C] opacity-10 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[#14B8A6] opacity-10 blur-2xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {isWelsh ? 'Ein Cyfleusterau' : 'Our Facilities'}
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-6">
              {isWelsh ? 'Cyfleusterau o Safon Fyd-eang' : 'World-Class Facilities'}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {isWelsh
                ? 'O\'r Ganolfan Genedlaethol yng Nghaerdydd i Plas Menai yng Ngogledd Cymru, rydym yn darparu cyfleusterau rhagorol ar gyfer chwaraeon yng Nghymru.'
                : 'From the National Centre in Cardiff to Plas Menai in North Wales, we provide outstanding facilities for sport in Wales.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                {isWelsh ? 'Cysylltwch i Archebu' : 'Contact to Book'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="space-y-12 lg:space-y-16">
            {facilities.map((facility, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-14 h-14 rounded-xl ${facility.color} flex items-center justify-center text-white mb-6`}>
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="inline-block text-[#64748B] text-sm font-medium mb-2">
                    {facility.location}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-4">
                    {facility.name}
                  </h2>
                  <p className="text-lg text-[#334155] mb-6">
                    {facility.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {facility.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full ${facility.color}/10 flex items-center justify-center`}>
                          <svg className={`w-4 h-4 ${facility.color === 'bg-[#B91C3C]' ? 'text-[#B91C3C]' : 'text-[#14B8A6]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[#334155]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {facility.externalUrl ? (
                    <a
                      href={facility.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      {isWelsh ? 'Ymweld â\'r wefan' : 'Visit website'}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <Link href="/contact" className="btn btn-primary">
                      {isWelsh ? 'Cysylltwch i Archebu' : 'Contact to Book'}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  )}
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`aspect-[4/3] rounded-2xl ${facility.color} p-8 flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <p className="text-xl font-display font-bold">{facility.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-[#B91C3C] font-semibold text-sm uppercase tracking-wider mb-4">
              {isWelsh ? 'Archebu' : 'Booking'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0F172A] mb-6">
              {isWelsh ? 'Archebwch Ein Cyfleusterau' : 'Book Our Facilities'}
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              {isWelsh
                ? 'Mae cyfleusterau\'r Ganolfan Genedlaethol ar gael i\'w llogi ar gyfer digwyddiadau, hyfforddiant, gwersylloedd a mwy. P\'un a ydych yn glwb chwaraeon, yn dîm corfforaethol, neu\'n grŵp cymunedol, gallwn helpu.'
                : 'National Centre facilities are available for hire for events, training, camps and more. Whether you\'re a sports club, corporate team, or community group, we can help.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                {isWelsh ? 'Cysylltwch â Ni' : 'Contact Us'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:03003003102"
                className="btn btn-secondary"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0300 300 3102
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

