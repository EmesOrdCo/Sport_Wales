import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { notFound } from 'next/navigation';
import { BreadcrumbSchema, ArticleSchema } from '@/components/seo/StructuredData';
import { ShareButtons } from '@/components/ui/ShareButtons';

// Mock news data - in production this would come from CMS
const newsArticles = [
  {
    id: '1',
    slug: 'year-in-welsh-sport-2025',
    title: {
      en: 'A year in Welsh sport – 2025 replayed',
      cy: 'Blwyddyn yn chwaraeon Cymru – 2025 yn cael ei hailchwarae',
    },
    excerpt: {
      en: "Let's have a peek at just some of the highlights that have shaped Welsh sport.",
      cy: 'Gadewch i ni gael cipolwg ar rai o\'r uchafbwyntiau sydd wedi siapio chwaraeon Cymru.',
    },
    content: {
      en: `<p>2025 has been an incredible year for Welsh sport. From grassroots initiatives to elite performance, our nation has shown the world what we're capable of.</p>
      
      <h2>Community Sport Thrives</h2>
      <p>This year saw record participation in community sport across Wales. The Be Active Wales Fund supported over 500 projects, helping thousands of people get active in their local communities.</p>
      
      <h2>Elite Success</h2>
      <p>Welsh athletes have excelled on the world stage, bringing home medals and inspiring the next generation of sports stars.</p>
      
      <h2>Investment in Facilities</h2>
      <p>Through our A Place for Sport initiative, we've helped communities improve their sporting facilities, creating better spaces for everyone to enjoy physical activity.</p>
      
      <h2>Looking Ahead</h2>
      <p>As we move into 2026, Sport Wales remains committed to our vision of enabling sport to thrive in Wales. Together, we're building a more active, healthier nation.</p>`,
      cy: `<p>Mae 2025 wedi bod yn flwyddyn anhygoel i chwaraeon Cymru. O fentrau llawr gwlad i berfformiad elitaidd, mae ein cenedl wedi dangos i'r byd beth rydym yn gallu ei wneud.</p>
      
      <h2>Chwaraeon Cymunedol yn Ffynnu</h2>
      <p>Eleni gwelwyd cyfranogiad record mewn chwaraeon cymunedol ledled Cymru. Cefnogodd Cronfa Cymru Actif dros 500 o brosiectau, gan helpu miloedd o bobl i fod yn actif yn eu cymunedau lleol.</p>
      
      <h2>Llwyddiant Elitaidd</h2>
      <p>Mae athletwyr Cymru wedi rhagori ar lwyfan y byd, gan ddod â medalau adref ac ysbrydoli'r genhedlaeth nesaf o sêr chwaraeon.</p>
      
      <h2>Buddsoddi mewn Cyfleusterau</h2>
      <p>Trwy ein menter Lle i Chwaraeon, rydym wedi helpu cymunedau i wella eu cyfleusterau chwaraeon, gan greu gofodau gwell i bawb fwynhau gweithgarwch corfforol.</p>
      
      <h2>Edrych Ymlaen</h2>
      <p>Wrth i ni symud i 2026, mae Chwaraeon Cymru yn parhau i fod yn ymrwymedig i'n gweledigaeth o alluogi chwaraeon i ffynnu yng Nghymru. Gyda'n gilydd, rydym yn adeiladu cenedl fwy actif, iachach.</p>`,
    },
    date: '2025-12-20',
    category: { en: 'Featured Story', cy: 'Stori dan Sylw' },
    author: 'Sport Wales',
  },
  {
    id: '2',
    slug: 'volunteers-helping-community-sport',
    title: {
      en: 'The volunteers helping community sport to thrive across Wales',
      cy: 'Y gwirfoddolwyr yn helpu chwaraeon cymunedol i ffynnu ar draws Cymru',
    },
    excerpt: {
      en: 'We are celebrating some amazing volunteers and asking them what volunteering gives them in return.',
      cy: 'Rydym yn dathlu rhai gwirfoddolwyr anhygoel ac yn gofyn iddynt beth mae gwirfoddoli yn ei roi iddynt yn ôl.',
    },
    content: {
      en: `<p>Behind every successful sports club, there are dedicated volunteers who give their time, energy, and passion to help others enjoy sport and physical activity.</p>
      
      <h2>Meet Our Volunteers</h2>
      <p>Across Wales, thousands of volunteers make sport happen. They coach, they organise, they fundraise, and they inspire.</p>
      
      <h2>Sarah's Story</h2>
      <p>"I started volunteering at my local running club five years ago," says Sarah from Cardiff. "What I get back is so much more than what I give. The friendships, the sense of community, seeing people achieve their goals – it's incredibly rewarding."</p>
      
      <h2>How You Can Get Involved</h2>
      <p>If you're interested in volunteering in sport, there are opportunities in every community across Wales. Whether you have an hour a week or more time to give, your contribution can make a real difference.</p>`,
      cy: `<p>Y tu ôl i bob clwb chwaraeon llwyddiannus, mae gwirfoddolwyr ymroddedig sy'n rhoi eu hamser, eu hegni, a'u hangerdd i helpu eraill i fwynhau chwaraeon a gweithgarwch corfforol.</p>
      
      <h2>Cwrdd â'n Gwirfoddolwyr</h2>
      <p>Ledled Cymru, mae miloedd o wirfoddolwyr yn gwneud i chwaraeon ddigwydd. Maent yn hyfforddi, yn trefnu, yn codi arian, ac yn ysbrydoli.</p>
      
      <h2>Stori Sarah</h2>
      <p>"Dechreuais wirfoddoli yn fy nghlwb rhedeg lleol bum mlynedd yn ôl," meddai Sarah o Gaerdydd. "Mae'r hyn rwy'n ei gael yn ôl gymaint yn fwy na'r hyn rwy'n ei roi. Y cyfeillgarwch, yr ymdeimlad o gymuned, gweld pobl yn cyflawni eu nodau – mae'n hynod wobrwyol."</p>
      
      <h2>Sut Gallwch Chi Gymryd Rhan</h2>
      <p>Os oes gennych ddiddordeb mewn gwirfoddoli mewn chwaraeon, mae cyfleoedd ym mhob cymuned ledled Cymru. P'un a oes gennych awr yr wythnos neu fwy o amser i'w roi, gall eich cyfraniad wneud gwahaniaeth gwirioneddol.</p>`,
    },
    date: '2025-12-18',
    category: { en: 'Feature', cy: 'Nodwedd' },
    author: 'Sport Wales',
  },
  {
    id: '3',
    slug: 'iori-horse-riding-club',
    title: {
      en: 'Iori takes the reins at Ceredigion horse-riding club thanks to National Lottery Grant',
      cy: 'Iori yn cymryd yr awenau yng nghlwb marchogaeth Ceredigion diolch i Grant y Loteri Genedlaethol',
    },
    excerpt: {
      en: "Iori's strength and confidence soars with new equipment provided by the funding.",
      cy: "Mae cryfder a hyder Iori yn esgyn gydag offer newydd a ddarparwyd gan y cyllid.",
    },
    content: {
      en: `<p>Ten-year-old Iori has always loved horses, but it wasn't until his local riding club received National Lottery funding that he was able to fully participate.</p>
      
      <h2>A Life-Changing Grant</h2>
      <p>The club received £8,500 through the Be Active Wales Fund to purchase specialist equipment for riders with disabilities. For Iori, who has cerebral palsy, this meant access to adaptive saddles and mounting blocks that make riding safe and enjoyable.</p>
      
      <h2>Building Confidence</h2>
      <p>"The change in Iori has been remarkable," says his mother, Elen. "His core strength has improved so much, and his confidence has soared. He talks about his riding lessons all week."</p>
      
      <h2>Supporting Inclusive Sport</h2>
      <p>This is just one example of how National Lottery funding is making sport more accessible for everyone in Wales. The Be Active Wales Fund supports projects that break down barriers to participation.</p>`,
      cy: `<p>Mae Iori, sy'n ddeg oed, bob amser wedi caru ceffylau, ond nid tan i'w glwb marchogaeth lleol dderbyn cyllid y Loteri Genedlaethol y gallai gymryd rhan yn llawn.</p>
      
      <h2>Grant sy'n Newid Bywydau</h2>
      <p>Derbyniodd y clwb £8,500 trwy Gronfa Cymru Actif i brynu offer arbenigol ar gyfer marchogion ag anableddau. I Iori, sydd â pharlys yr ymennydd, roedd hyn yn golygu mynediad at gyfrwyau addasol a blociau mowntio sy'n gwneud marchogaeth yn ddiogel ac yn bleserus.</p>
      
      <h2>Adeiladu Hyder</h2>
      <p>"Mae'r newid yn Iori wedi bod yn rhyfeddol," meddai ei fam, Elen. "Mae cryfder ei graidd wedi gwella cymaint, ac mae ei hyder wedi cynyddu'n aruthrol. Mae'n siarad am ei wersi marchogaeth trwy'r wythnos."</p>
      
      <h2>Cefnogi Chwaraeon Cynhwysol</h2>
      <p>Dyma un enghraifft yn unig o sut mae cyllid y Loteri Genedlaethol yn gwneud chwaraeon yn fwy hygyrch i bawb yng Nghymru. Mae Cronfa Cymru Actif yn cefnogi prosiectau sy'n chwalu rhwystrau i gyfranogiad.</p>`,
    },
    date: '2025-12-15',
    category: { en: 'Impact Story', cy: 'Stori Effaith' },
    author: 'Sport Wales',
  },
  {
    id: '4',
    slug: 'mams-with-prams-running-club',
    title: {
      en: 'Mams with prams: the running club helping parents stay active',
      cy: 'Mamau gyda phramiau: y clwb rhedeg sy\'n helpu rhieni i aros yn actif',
    },
    excerpt: {
      en: 'A running club in Pontypool is removing one of the biggest barriers to exercise for new parents – childcare.',
      cy: 'Mae clwb rhedeg ym Mhont-y-pŵl yn cael gwared ar un o\'r rhwystrau mwyaf i ymarfer corff i rieni newydd – gofal plant.',
    },
    content: {
      en: `<p>For many new parents, finding time to exercise feels impossible. Between feeding schedules, nap times, and the endless demands of caring for a baby, personal fitness often falls to the bottom of the priority list.</p>
      
      <h2>A Simple Solution</h2>
      <p>That's where Mams with Prams comes in. This Pontypool-based running club has found a simple but effective solution: bring the baby along.</p>
      
      <h2>More Than Just Running</h2>
      <p>"It's so much more than just a running club," says founder Emma, who started the group after struggling to find ways to exercise with her own newborn. "It's a support network. New mums can feel isolated, and this gives them a chance to get out, get moving, and meet others going through the same thing."</p>
      
      <h2>Growing Community</h2>
      <p>What started as a small group of three mums has grown to over 50 regular participants. The club welcomes parents of all fitness levels, from complete beginners to those looking to get back into running after pregnancy.</p>
      
      <h2>Supporting Active Parents</h2>
      <p>Sport Wales is proud to support initiatives like Mams with Prams that break down barriers to physical activity. Finding creative solutions to childcare challenges is key to helping more people in Wales stay active.</p>`,
      cy: `<p>I lawer o rieni newydd, mae dod o hyd i amser i ymarfer corff yn teimlo'n amhosibl. Rhwng amserlenni bwydo, amseroedd cysgu, a gofynion diddiwedd gofalu am fabi, mae ffitrwydd personol yn aml yn disgyn i waelod y rhestr flaenoriaeth.</p>
      
      <h2>Ateb Syml</h2>
      <p>Dyna lle mae Mamau gyda Phramiau yn dod i mewn. Mae'r clwb rhedeg hwn ym Mhont-y-pŵl wedi dod o hyd i ateb syml ond effeithiol: dewch â'r babi gyda chi.</p>
      
      <h2>Mwy na Rhedeg yn Unig</h2>
      <p>"Mae'n llawer mwy na dim ond clwb rhedeg," meddai'r sylfaenydd Emma, a ddechreuodd y grŵp ar ôl cael trafferth dod o hyd i ffyrdd o ymarfer corff gyda'i babi newydd-anedig ei hun. "Mae'n rhwydwaith cefnogi. Gall mamau newydd deimlo'n ynysig, ac mae hyn yn rhoi cyfle iddynt fynd allan, symud, a chwrdd ag eraill sy'n mynd trwy'r un peth."</p>
      
      <h2>Cymuned sy'n Tyfu</h2>
      <p>Mae'r hyn a ddechreuodd fel grŵp bach o dair mam wedi tyfu i dros 50 o gyfranogwyr rheolaidd. Mae'r clwb yn croesawu rhieni o bob lefel ffitrwydd, o ddechreuwyr llwyr i'r rhai sy'n edrych i ddychwelyd i redeg ar ôl beichiogrwydd.</p>
      
      <h2>Cefnogi Rhieni Actif</h2>
      <p>Mae Chwaraeon Cymru yn falch o gefnogi mentrau fel Mamau gyda Phramiau sy'n chwalu rhwystrau i weithgarwch corfforol. Mae dod o hyd i atebion creadigol i heriau gofal plant yn allweddol i helpu mwy o bobl yng Nghymru i aros yn actif.</p>`,
    },
    date: '2025-12-12',
    category: { en: 'Feature', cy: 'Nodwedd' },
    author: 'Sport Wales',
  },
];

function getArticleBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  const isWelsh = locale === 'cy';
  
  if (!article) {
    return { title: 'Article Not Found' };
  }
  
  const title = article.title[isWelsh ? 'cy' : 'en'];
  const description = article.excerpt[isWelsh ? 'cy' : 'en'];
  
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/news/${slug}`,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/news/${slug}`,
      languages: {
        'en': `/en/news/${slug}`,
        'cy': `/cy/news/${slug}`,
      },
    },
  };
}

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  
  const article = getArticleBySlug(slug);
  const isWelsh = locale === 'cy';
  const t = await getTranslations({ locale, namespace: 'news' });
  
  if (!article) {
    notFound();
  }
  
  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: t('title'), url: `https://www.sport.wales/${locale}/news` },
    { name: article.title[isWelsh ? 'cy' : 'en'], url: `https://www.sport.wales/${locale}/news/${slug}` },
  ];

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline={article.title[isWelsh ? 'cy' : 'en']}
        description={article.excerpt[isWelsh ? 'cy' : 'en']}
        image="https://www.sport.wales/placeholder-news.jpg"
        datePublished={article.date}
        author={article.author}
        locale={locale}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sw-navy to-sw-teal py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/70">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    {isWelsh ? 'Hafan' : 'Home'}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/news" className="hover:text-white transition-colors">
                    {t('title')}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white truncate max-w-[200px]">
                  {article.title[isWelsh ? 'cy' : 'en']}
                </li>
              </ol>
            </nav>
            
            {/* Category & Date */}
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-sw-red text-white px-3 py-1 rounded-full text-sm font-medium">
                {article.category[isWelsh ? 'cy' : 'en']}
              </span>
              <time dateTime={article.date} className="text-white/70 text-sm">
                {new Date(article.date).toLocaleDateString(isWelsh ? 'cy-GB' : 'en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
              {article.title[isWelsh ? 'cy' : 'en']}
            </h1>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Lead paragraph */}
            <p className="text-xl text-sw-gray-700 mb-8 leading-relaxed font-medium">
              {article.excerpt[isWelsh ? 'cy' : 'en']}
            </p>
            
            {/* Article body */}
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-heading prose-headings:text-sw-navy prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-p:text-sw-gray-700 prose-p:leading-relaxed
                prose-a:text-sw-teal prose-a:no-underline hover:prose-a:underline
                prose-strong:text-sw-navy"
              dangerouslySetInnerHTML={{ __html: article.content[isWelsh ? 'cy' : 'en'] }}
            />
            
            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-sw-gray-200">
              <h2 className="text-lg font-heading font-bold text-sw-navy mb-4">
                {isWelsh ? 'Rhannu\'r erthygl hon' : 'Share this article'}
              </h2>
              <ShareButtons 
                url={`https://www.sport.wales/${locale}/news/${slug}`}
                title={article.title[isWelsh ? 'cy' : 'en']}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Back to News */}
      <section className="py-8 bg-sw-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/news" 
              className="inline-flex items-center gap-2 text-sw-teal font-semibold hover:underline"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {isWelsh ? 'Yn ôl i Newyddion' : 'Back to News'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

