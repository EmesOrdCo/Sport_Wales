import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';
import { getNewsArticles } from '@/lib/content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'news' });
  const isWelsh = locale === 'cy';
  
  const title = t('title');
  const description = isWelsh 
    ? 'Y newyddion diweddaraf am chwaraeon yng Nghymru, straeon nodwedd, ac effaith ein buddsoddiad.'
    : 'The latest news about sport in Wales, feature stories, and the impact of our investment.';
  
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales'}`,
      description,
      url: `https://www.sport.wales/${locale}/news`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/news`,
      languages: {
        'en': '/en/news',
        'cy': '/cy/news',
      },
    },
  };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'news' });

  const isWelsh = locale === 'cy';

  // Fetch articles from CMS (or fallback to mock data)
  const { articles } = await getNewsArticles(locale as 'en' | 'cy', 1, 20);

  const breadcrumbItems = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: t('title'), url: `https://www.sport.wales/${locale}/news` },
  ];

  // Transform CMS articles to match page structure
  const newsArticles = articles.map(article => ({
    id: article.id,
    slug: article.slug,
    title: {
      en: article.title,
      cy: article.title, // In real implementation, you'd have separate translations
    },
    excerpt: {
      en: article.excerpt,
      cy: article.excerpt,
    },
    date: article.date.split('T')[0], // Extract date part
    category: { 
      en: article.category || 'News', 
      cy: article.category || 'Newyddion' 
    },
    featured: article.featured || false,
  }));

  // Sort: featured first, then by date
  const sortedArticles = [...newsArticles].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const featuredArticle = sortedArticles.find(a => a.featured) || sortedArticles[0];
  const otherArticles = sortedArticles.filter(a => !a.featured || a.id !== featuredArticle?.id).slice(0, 5);

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              {isWelsh ? 'Newyddion a Digwyddiadau' : 'News & Events'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold !text-white mb-6">
              {isWelsh ? 'Newyddion, Nodweddion a Digwyddiadau' : 'News, Features and Events'}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {isWelsh
                ? 'Y straeon diweddaraf am chwaraeon yng Nghymru, o\'r gymuned i\'r llwyfan rhyngwladol.'
                : 'The latest stories about sport in Wales, from the community to the international stage.'}
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

      {/* Media Enquiries Section */}
      <section className="py-8 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-lg font-display font-bold text-[#123F56] mb-1">
                {isWelsh ? 'Ymholiadau\'r Cyfryngau' : 'Media Enquiries'}
              </h2>
              <p className="text-sm text-[#64748B]">
                {isWelsh
                  ? 'Os ydych chi\'n newyddiadurwr eisiau gwybodaeth, cysylltwch â thîm cyfathrebu Chwaraeon Cymru.'
                  : 'If you\'re a journalist wanting information, contact the Sport Wales communications team.'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:03003003105" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#123F56] hover:text-[#E11D2E] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0300 300 3105
              </a>
              <a 
                href="mailto:media@sport.wales" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#123F56] hover:text-[#E11D2E] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                media@sport.wales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12 lg:py-16 bg-white">
          <div className="container">
            <Link 
              href={`/news/${featuredArticle.slug}` as any}
              className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#123F56] to-[#1E4A62] hover:shadow-2xl transition-all duration-500"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#E11D2E] blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#E11D2E] blur-3xl"></div>
              </div>
              
              <div className="relative z-10 p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="inline-block bg-[#E11D2E] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                        {isWelsh ? 'Stori Nodwedd' : 'Featured Story'}
                      </span>
                      <span className="text-white/60 text-sm">
                        {new Date(featuredArticle.date).toLocaleDateString(isWelsh ? 'cy-GB' : 'en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl lg:text-4xl font-display font-bold !text-white mb-4 group-hover:text-[#F4B400] transition-colors">
                      {featuredArticle.title[isWelsh ? 'cy' : 'en']}
                    </h2>
                    
                    <p className="text-lg !text-white/80 max-w-2xl mb-8">
                      {featuredArticle.excerpt[isWelsh ? 'cy' : 'en']}
                    </p>
                    
                    <span className="inline-flex items-center gap-2 text-[#E11D2E] font-semibold group-hover:gap-4 transition-all">
                      {t('readMore')}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-12 lg:py-20 bg-[#F8FAFC]">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#123F56]">
              {isWelsh ? 'Mwy o Straeon' : 'More Stories'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {otherArticles.map((article) => (
              <article key={article.id} className="group">
                <Link
                  href={`/news/${article.slug}` as any}
                  className="block h-full"
                >
                  <div className="h-full rounded-2xl bg-white border border-[#E2E8F0] overflow-hidden hover:shadow-xl hover:border-transparent transition-all duration-300">
                    {/* Image Placeholder */}
                    <div className="relative aspect-video bg-gradient-to-br from-[#123F56] via-[#1E4A62] to-[#334155] overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-16 h-16 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="absolute inset-0 bg-[#E11D2E]/0 group-hover:bg-[#E11D2E]/10 transition-colors" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category & Date */}
                      <div className="flex items-center gap-3 text-sm mb-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                          article.category.en === 'Feature' 
                            ? 'bg-[#E11D2E]/10 text-[#E11D2E]' 
                            : article.category.en === 'Funding'
                            ? 'bg-[#E11D2E]/10 text-[#E11D2E]'
                            : article.category.en === 'Impact Story'
                            ? 'bg-[#F4B400]/10 text-[#F4B400]'
                            : article.category.en === 'Resources'
                            ? 'bg-[#F4B400]/10 text-[#F4B400]'
                            : article.category.en === 'Research'
                            ? 'bg-[#F4B400]/10 text-[#F4B400]'
                            : 'bg-[#E11D2E]/10 text-[#E11D2E]'
                        }`}>
                          {article.category[isWelsh ? 'cy' : 'en']}
                        </span>
                        <time dateTime={article.date} className="text-[#94A3B8]">
                          {new Date(article.date).toLocaleDateString(isWelsh ? 'cy-GB' : 'en-GB', {
                            day: 'numeric',
                            month: 'short',
                          })}
                        </time>
                      </div>

                      <h3 className="text-lg font-display font-bold text-[#123F56] mb-3 group-hover:text-[#E11D2E] transition-colors line-clamp-2">
                        {article.title[isWelsh ? 'cy' : 'en']}
                      </h3>
                      <p className="text-[#64748B] text-sm line-clamp-2 mb-4">
                        {article.excerpt[isWelsh ? 'cy' : 'en']}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E11D2E] group-hover:gap-3 transition-all">
                        {t('readMore')}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
