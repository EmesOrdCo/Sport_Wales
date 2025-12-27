import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  const title = isWelsh ? 'Chwaraeon Cymru a\'r Loteri Genedlaethol' : 'Welsh Sport and The National Lottery';
  const description = isWelsh
    ? 'Ers 1994, mae mwy na £356 miliwn o gyllid y Loteri Genedlaethol wedi\'i fuddsoddi yng nghwaraeon Cymru drwy Chwaraeon Cymru.'
    : 'Since 1994, more than £356m of National Lottery funding has been invested into Welsh sport through Sport Wales.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/national-lottery`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/national-lottery`,
      languages: {
        'en': '/en/national-lottery',
        'cy': '/cy/national-lottery',
      },
    },
  };
}

export default async function NationalLotteryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Chwaraeon Cymru a\'r Loteri Genedlaethol' : 'Welsh Sport and The National Lottery', url: `https://www.sport.wales/${locale}/national-lottery` },
  ];

  const lotteryStories = [
    {
      title: isWelsh
        ? 'Mae Iori yn cymryd yr awenau yng nghlwb marchogaeth Ceredigion diolch i Grant y Loteri Genedlaethol'
        : 'Iori takes the reins at Ceredigion horse-riding club thanks to National Lottery Grant',
      description: isWelsh
        ? 'Mae cryfder a hyder Iori yn cynyddu gydag offer newydd a ddarparwyd gan y cyllid.'
        : 'Iori\'s strength and confidence soars with new equipment provided by the funding.',
    },
    {
      title: isWelsh
        ? 'Y cynllun beicio cymunedol sy\'n cael mwy o fenywod ar eu beiciau'
        : 'The community cycling scheme getting more women on their bikes',
      description: isWelsh
        ? 'Wedi\'i lansio yn 2011, nod Breeze yw cau\'r bwlch rhwng y rhywiau mewn beicio.'
        : 'Launched in 2011, Breeze aims to close cycling\'s gender gap.',
    },
    {
      title: isWelsh
        ? 'Mae Tennis Bwrdd yn helpu\'r goroeswr strôc Andy i adlamu\'n ôl'
        : 'Table Tennis helps stroke survivor Andy bounce back',
      description: isWelsh
        ? 'Diolch i denis bwrdd mae Andy wedi ailadeiladu ei hyder a dod o hyd i le lle mae\'n perthyn.'
        : 'Thanks to table tennis Andy has rebuilt his confidence and found a place where he belongs.',
    },
    {
      title: isWelsh
        ? 'O\'r dibyn i lwyddiant – y clwb tennis sy\'n gwasanaethu adfywiad cymunedol'
        : 'From the brink to breakthrough – the tennis club serving up a community revival',
      description: isWelsh
        ? 'Roedd Clwb Tennis Pen-y-ffordd ar fin chwalu. Ond helpodd cyllid y Loteri Genedlaethol eu hachub.'
        : 'Pen-y-ffordd Tennis Club was on the brink of collapse. But National Lottery funding helped save them.',
    },
    {
      title: isWelsh
        ? 'Sut mae campfa leol yn Sir Benfro yn helpu menywod i heneiddio\'n dda'
        : 'How a local gym in Pembrokeshire is helping women to age well',
      description: isWelsh
        ? 'Yn Hwlffordd, mae Janice Morgan, 72 oed, ac Eva Hayes, 67 oed, yn profi bod mynd yn hŷn...'
        : 'In Haverfordwest, 72-year-old Janice Morgan and 67-year-old Eva Hayes are proving that getting older…',
    },
    {
      title: isWelsh
        ? 'Marchogaeth y tonnau i lesiant: Sut mae Therapi Syrffio yn cefnogi iechyd meddwl'
        : 'Riding the waves to wellness: How Surf Therapy supports mental health',
      description: isWelsh
        ? 'Ar #DiwrnodIechydMeddwlYByd, mae stori Laurence yn dangos sut mae\'r cefnfor yn cefnogi llesiant yng Nghymru.'
        : 'On #WorldMentalHealthDay, Laurence\'s story shows how the ocean is supporting well-being in Wales.',
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#123F56] via-[#1E4A62] to-[#123F56] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F4B400]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#E11D2E]/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              {isWelsh ? 'Y Loteri Genedlaethol' : 'National Lottery'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Chwaraeon Cymru a\'r Loteri Genedlaethol' : 'Welsh Sport and The National Lottery'}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {isWelsh
                ? 'Mae\'r Loteri Genedlaethol wedi bod yn newidiwr gêm i chwaraeon Cymru – gan wella miloedd o fywydau drwy ei chyllid ar gyfer clybiau llawr gwlad, athletwyr elît, lleoliadau chwaraeon eiconig, a gwaith Chwaraeon Cymru a\'n partneriaid.'
                : 'The National Lottery has been a game changer for Welsh sport – improving thousands of lives through its funding for grassroots clubs, elite athletes, iconic sporting venues, and the work of Sport Wales and our partners.'}
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

      {/* How National Lottery has shaped sport */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#123F56] mb-8">
              {isWelsh 
                ? 'Sut mae\'r Loteri Genedlaethol wedi siapio chwaraeon yng Nghymru?' 
                : 'How has the National Lottery shaped sport in Wales?'}
            </h2>
            <div className="space-y-6 text-lg text-[#334155]">
              <p>
                {isWelsh
                  ? <>Ers 1994, mae mwy na £356 miliwn o gyllid y <a href="https://www.national-lottery.co.uk/" target="_blank" rel="noopener noreferrer" className="text-[#E11D2E] hover:underline">Loteri Genedlaethol</a> wedi\'i fuddsoddi yng nghwaraeon Cymru drwy Chwaraeon Cymru.</>
                  : <>Since 1994, more than £356m of <a href="https://www.national-lottery.co.uk/" target="_blank" rel="noopener noreferrer" className="text-[#E11D2E] hover:underline">National Lottery</a> funding has been invested into Welsh sport through Sport Wales.</>}
              </p>
              <p>
                {isWelsh
                  ? 'Heb y cyllid hwn, byddai chwaraeon yng Nghymru yn edrych yn wahanol iawn ac ni fyddai wedi gwneud yr un effaith.'
                  : "Without this funding, sport in Wales would look very different and it wouldn't have made the same impact."}
              </p>
              <p>
                {isWelsh
                  ? 'Ond diolch i chwaraewyr y Loteri Genedlaethol, mae mwy na £30 miliwn yn cael ei godi bob wythnos ar gyfer achosion da, gan gynnwys y cyllid hanfodol i chwaraeon yng Nghymru.'
                  : "But thanks to National Lottery players, more than £30 million is raised every week for good causes, including the vital funding into sport in Wales."}
              </p>
              <p>
                {isWelsh
                  ? 'Felly, os ydych chi wedi chwarae\'r Loteri Genedlaethol, rydych chi wedi helpu i wneud gwahaniaeth i blant, cymunedau, hyfforddwyr, clybiau ac athletwyr Cymru. Ac mae\'n fwy na thebyg bod prosiect yn agos atoch chi sy\'n elwa o\'r cyllid hwn.'
                  : "So, if you have played the National Lottery, you've helped make a difference to the children, communities, coaches, clubs and athletes of Wales. And it's more than likely there's a project near you that has benefited from this funding."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Video Placeholder */}
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-[#123F56] to-[#1E4A62]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-colors">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white/70 text-sm">{isWelsh ? 'Delwedd Fideo CMS' : 'CMS Video Image'}</p>
                  <p className="text-white/50 text-xs mt-1">Lauren Price</p>
                </div>
              </div>
            </div>

            {/* Audio Description Link */}
            <div className="mt-6 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#E11D2E] font-semibold hover:underline"
              >
                {isWelsh ? 'Gwyliwch y fideo gyda disgrifiad sain' : 'Watch the video with audio description'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What has the National Lottery funded section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#123F56] mb-8">
              {isWelsh ? 'Beth mae\'r Loteri Genedlaethol wedi\'i ariannu yng nghwaraeon Cymru?' : 'What has the National Lottery funded in Welsh sport?'}
            </h2>

            {/* First three grants */}
            <div className="mb-12">
              <h3 className="text-xl font-display font-bold text-[#123F56] mb-6">
                {isWelsh ? 'Y tri grant cyntaf o\'r Loteri Genedlaethol a ddyfarnwyd gan Chwaraeon Cymru:' : 'First three National Lottery grants awarded by Sport Wales:'}
              </h3>
              <ul className="space-y-4 text-[#334155]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2.5 bg-[#F4B400] rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>{isWelsh ? 'Ionawr 1995' : 'January 1995'}</strong> - {isWelsh 
                      ? 'Derbyniodd Cyngor Bwrdeistref Sirol Wrecsam £151,455 i wneud gwelliannau yng Nghanolfan Chwaraeon Darland.'
                      : 'Wrexham County Borough Council received £151,455 to make improvements at Darland Sports Centre.'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2.5 bg-[#F4B400] rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>{isWelsh ? 'Ebrill 1995' : 'April 1995'}</strong> - {isWelsh 
                      ? 'Derbyniodd Clwb Rhwyfo Llandaf £153,206 ar gyfer ailddatblygu\'r clwb.'
                      : 'Llandaff Rowing Club received £153,206 for clubhouse redevelopment in April 1995'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2.5 bg-[#F4B400] rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>{isWelsh ? 'Ebrill 1995' : 'April 1995'}</strong> - {isWelsh 
                      ? 'Derbyniodd Clwb Ieuenctid Canolog Caerdydd £95,192 ar gyfer aml-chwaraeon ac offer yn ystod adleoli i Sblot.'
                      : 'Cardiff Central Youth Club received £95,192 for multi-sports and equipment during a relocation to Splott in April 1995'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Smallest grant */}
            <div className="mb-12">
              <h3 className="text-xl font-display font-bold text-[#123F56] mb-4">
                {isWelsh ? 'Y grant lleiaf o\'r Loteri Genedlaethol a ddyfarnwyd gan Chwaraeon Cymru:' : 'Smallest National Lottery grant awarded by Sport Wales:'}
              </h3>
              <p className="text-[#334155]">
                {isWelsh 
                  ? 'Dyfarnwyd £17 i Glwb Bowlio Brenhinol Rhymni ar gyfer cwrs hyfforddi yn Ebrill 2009'
                  : '£17 was awarded to Rhymney Royal Bowls Club for a coaching course in April 2009'}
              </p>
            </div>

            {/* Largest grant */}
            <div className="mb-12">
              <h3 className="text-xl font-display font-bold text-[#123F56] mb-4">
                {isWelsh ? 'Y grant mwyaf o\'r Loteri Genedlaethol a ddyfarnwyd yng Nghymru:' : 'Largest National Lottery grant awarded in Wales:'}
              </h3>
              <p className="text-[#334155]">
                {isWelsh 
                  ? '£46.3 miliwn i helpu adeiladu Stadiwm y Mileniwm (Stadiwm Principality bellach) yn 1997'
                  : '£46.3 million to help build the Millennium Stadium (now Principality Stadium) in 1997'}
              </p>
            </div>

            {/* Community and Grassroots Sport */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold text-[#123F56] mb-6">
                {isWelsh ? 'Chwaraeon Cymunedol a Llawr Gwlad' : 'Community and Grassroots Sport'}
              </h3>
              <div className="space-y-4 text-[#334155]">
                <p>
                  {isWelsh 
                    ? 'Mae miliynau o bunnoedd wedi\'u rhoi i glybiau chwaraeon, sefydliadau a phrosiectau ledled Cymru. Mae hynny diolch i chwaraewyr y Loteri Genedlaethol.'
                    : 'Millions of pounds have been given to sports clubs, organisations and projects across Wales. That is thanks to players of the National Lottery.'}
                </p>
                <p>
                  {isWelsh 
                    ? 'O helpu i dalu am offer i ariannu cyrsiau fel y gall gwirfoddolwyr ddod yn hyfforddwyr cymwys, mae\'r Loteri Genedlaethol wedi gwella miloedd o fywydau ac wedi galluogi clybiau chwaraeon yng Nghymru i ffynnu.'
                    : 'From helping to pay for equipment to funding courses so that volunteers can become qualified coaches, the National Lottery has improved thousands of lives and enabled sports clubs in Wales to thrive.'}
                </p>
                <p>
                  {isWelsh 
                    ? 'Os ydych chi\'n un o\'r clybiau neu sefydliadau sydd wedi elwa o gyllid y Loteri Genedlaethol, gwaeddwch am y pethau gwych rydych chi wedi gallu eu gwneud diolch i gyllid y loteri.'
                    : 'If you are one of the clubs or organisations who have benefitted from National Lottery funding, shout about the great things you\'ve been able to do thanks to lottery funding.'}
                </p>
              </div>
            </div>

            {/* Elite Sport */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold text-[#123F56] mb-6">
                {isWelsh ? 'Chwaraeon Elît' : 'Elite Sport'}
              </h3>
              <div className="space-y-4 text-[#334155]">
                <p>
                  {isWelsh 
                    ? 'Ers i gyllid y loteri gael ei gyflwyno i chwaraeon elît yn 1997 – yn dilyn helfa fedalau siomedig yn y Gemau Olympaidd 1996 - mae llawer o athletwyr Cymreig wedi cael eu cefnogi gan y Loteri Genedlaethol, o Tanni Grey-Thompson yn y nawdegau hwyr a\'r noughties i seren ddisgleirio Paris 2024, Emma Finucane.'
                    : 'Since lottery funding was introduced into elite sport in 1997 – following a disappointing medal haul at the 1996 Olympics - many Welsh athletes have been supported by The National Lottery, from Tanni Grey-Thompson in the late nineties and noughties to the emerging superstar of Paris 2024, Emma Finucane.'}
                </p>
                <p>
                  {isWelsh 
                    ? 'Mae Rhaglen Dosbarth Byd UK Sport a ariennir gan y Loteri Genedlaethol yn caniatáu i athletwyr Cymreig, gan gynnwys Emma, hyfforddi\'n llawn amser, cael mynediad at hyfforddwyr gorau\'r byd ac elwa o gefnogaeth feddygol arloesol.'
                    : 'UK Sport\'s National Lottery-funded World Class Programme allows Welsh athletes, including Emma, to train full time, have access to the world\'s best coaches and benefit from pioneering medical support.'}
                </p>
                <p>
                  {isWelsh 
                    ? 'Nid yn unig mae\'r Loteri Genedlaethol yn ariannu athletwyr elît Cymreig yn uniongyrchol, ond mae\'n cefnogi\'r clybiau llawr gwlad y maent yn dod ohonynt, a hefyd yn buddsoddi mewn creu\'r cyfleusterau chwaraeon o\'r radd flaenaf lle maent yn hyfforddi ac yn perfformio.'
                    : 'Not only does the National Lottery directly fund elite Welsh athletes, but it supports the grassroots clubs through which they emerge, and also invests into creating the world-class sporting facilities where they train and perform.'}
                </p>
              </div>
            </div>

            {/* Partners */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold text-[#123F56] mb-6">
                {isWelsh ? 'Partneriaid' : 'Partners'}
              </h3>
              <div className="space-y-4 text-[#334155]">
                <p>
                  {isWelsh 
                    ? 'Diolch i chwaraewyr y Loteri Genedlaethol, mae Chwaraeon Cymru yn gallu buddsoddi mewn cyrff llywodraethu cenedlaethol arloesol, partneriaid cenedlaethol ac awdurdodau lleol.'
                    : 'Thanks to players of the National Lottery, Sport Wales is able to invest in innovative national governing bodies, national partners and local authorities.'}
                </p>
                <p>
                  {isWelsh 
                    ? 'Ar gyfer 2024/25, mae Chwaraeon Cymru wedi ymrwymo mwy na £10 miliwn o arian y Loteri Genedlaethol i bartneriaid. Mae\'r rhain yn cynnwys Cyrff Llywodraethu Cenedlaethol, Awdurdodau Lleol, Partneriaid Cenedlaethol, Partneriaethau Chwaraeon ac eraill.'
                    : 'For 2024/25, Sport Wales has committed more than £10million of National Lottery money to partners. These include National Governing Bodies, Local Authorities, National Partners, Sports Partnerships and others.'}
                </p>
                <p>
                  {isWelsh 
                    ? 'Mae\'r holl sefydliadau hyn ac eraill yn helpu i greu cenedl actif lle gall pawb fwynhau chwaraeon gydol oes.'
                    : 'All of these organisations and others are helping to create an active nation where everyone can have a lifelong enjoyment of sport.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lottery Stories Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {lotteryStories.map((story, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9] flex items-center justify-center">
                  <div className="text-center p-6">
                    <svg className="w-12 h-12 text-[#94A3B8] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm text-[#94A3B8]">{isWelsh ? 'Delwedd CMS' : 'CMS Image'}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-display font-bold text-[#123F56] mb-2 group-hover:text-[#E11D2E] transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-[#64748B] text-sm mb-4">
                    {story.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#E11D2E] font-semibold text-sm group-hover:gap-3 transition-all">
                    {isWelsh ? 'Darllen Mwy' : 'Read More'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center p-8 bg-[#F8FAFC] rounded-2xl border-2 border-dashed border-[#E2E8F0]">
            <p className="text-[#64748B] font-medium">
              {isWelsh ? 'Golygu o\'r CMS' : 'Editable from CMS'}
            </p>
            <p className="text-sm text-[#94A3B8] mt-1">
              {isWelsh ? 'Bydd erthyglau\'n cael eu tynnu o\'r system rheoli cynnwys' : 'Articles will be pulled from the content management system'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
