'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { NewsArticle } from '@/lib/content';
import { getCategoryDisplay, getCategoryColor } from '@/lib/categoryTranslations';

// Mock news data - fallback when CMS data not provided
const mockNewsArticles = [
  {
    id: '1',
    slug: 'year-in-welsh-sport-2025',
    title: {
      en: 'A year in Welsh sport – 2025 replayed',
      cy: 'Blwyddyn yn chwaraeon Cymru – 2025 yn cael ei hailchwarae',
    },
    excerpt: {
      en: "Let's have a peek at just some of the highlights that have shaped Welsh sport this year.",
      cy: 'Gadewch i ni gael cipolwg ar rai o\'r uchafbwyntiau sydd wedi siapio chwaraeon Cymru.',
    },
    category: { en: 'News', cy: 'Newyddion' },
    date: '2025-12-20',
    featured: true,
    image: '/images/news/year-in-sport-2025.webp',
  },
  {
    id: '2',
    slug: 'volunteers-helping-community-sport',
    title: {
      en: 'The volunteers helping community sport thrive',
      cy: 'Y gwirfoddolwyr yn helpu chwaraeon cymunedol i ffynnu',
    },
    excerpt: {
      en: 'Celebrating amazing volunteers and asking them what volunteering gives them in return.',
      cy: 'Yn dathlu gwirfoddolwyr anhygoel ac yn gofyn iddynt beth mae gwirfoddoli yn ei roi iddynt.',
    },
    category: { en: 'Feature', cy: 'Nodwedd' },
    date: '2025-12-18',
    featured: false,
    image: '/images/community-sport.png',
  },
  {
    id: '3',
    slug: 'iori-horse-riding-club',
    title: {
      en: 'Iori takes the reins thanks to National Lottery',
      cy: 'Iori yn cymryd yr awenau diolch i\'r Loteri Genedlaethol',
    },
    excerpt: {
      en: "Iori's strength and confidence soars with new equipment provided by the funding.",
      cy: "Mae cryfder a hyder Iori yn esgyn gydag offer newydd a ddarparwyd gan y cyllid.",
    },
    category: { en: 'Impact Story', cy: 'Stori Effaith' },
    date: '2025-12-15',
    featured: false,
    image: '/images/hero-judo.png',
  },
];

interface NewsSectionProps {
  articles?: NewsArticle[];
}

export function NewsSection({ articles }: NewsSectionProps = {}) {
  const t = useTranslations('news');
  const locale = useLocale();
  const isWelsh = locale === 'cy';

  // Transform CMS articles or use mock data
  const newsArticles = articles && articles.length > 0
    ? articles.slice(0, 3).map((article) => ({
        id: article.id,
        slug: article.slug,
        title: {
          en: article.title,
          cy: article.title, // In bilingual setup, this would come from locale-specific content
        },
        excerpt: {
          en: article.excerpt,
          cy: article.excerpt,
        },
        category: {
          en: article.category || 'News',
          cy: article.category || 'Newyddion',
        },
        date: article.date.split('T')[0],
        featured: article.featured || false,
        image: article.image || '/images/hero-judo.png',
      }))
    : mockNewsArticles;

  // Find featured article first, then use first article as fallback
  const featured = newsArticles.find((a: any) => a.featured) || newsArticles[0];
  const others = newsArticles.filter((a: any) => !a.featured || a.id === featured?.id).slice(1, 3);

  return (
    <section 
      className="section bg-[#F8FAFC] relative overflow-hidden"
      aria-labelledby="news-heading"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-50">
        <svg viewBox="0 0 400 800" fill="none" className="w-full h-full">
          <circle cx="400" cy="200" r="300" fill="url(#newsGradient)" fillOpacity="0.1"/>
          <defs>
            <linearGradient id="newsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E11D2E"/>
              <stop offset="100%" stopColor="#123F56"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 lg:mb-16">
          <div>
            <span className="badge badge-teal mb-4">
              {isWelsh ? 'Diweddariadau' : 'Latest Updates'}
            </span>
            <h2 id="news-heading">
              {t('title')}
            </h2>
          </div>
          <Link 
            href="/news"
            className="btn btn-outline self-start md:self-auto"
          >
            {t('viewAllNews')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Featured Article */}
          {featured && (
            <article className="lg:row-span-2 group">
              <Link href={`/news/${featured.slug}` as any} className="block h-full">
                <div className="relative h-full card overflow-hidden">
                  {/* Featured Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={featured.image} 
                      alt={featured.title.en}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative h-full min-h-[400px] lg:min-h-[500px] p-6 lg:p-8 flex flex-col justify-end">
                    <div className="mb-auto">
                      <span className="badge bg-[#F4B400] text-[#123F56]">
                        {t('featuredStory')}
                      </span>
                    </div>
                    
                    <div>
                      <span className="text-white/60 text-sm mb-3 block">
                        {new Date(featured.date).toLocaleDateString(isWelsh ? 'cy-GB' : 'en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-bold !text-white mb-3 group-hover:text-[#F4B400] transition-colors">
                        {featured.title[isWelsh ? 'cy' : 'en']}
                      </h3>
                      <p className="text-white/70 line-clamp-2">
                        {featured.excerpt[isWelsh ? 'cy' : 'en']}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          )}

          {/* Other Articles */}
          {others.map((article) => (
            <article key={article.id} className="group">
              <Link href={`/news/${article.slug}` as any} className="block">
                <div className="card p-6 lg:p-8 h-full flex flex-col bg-white hover:bg-[#FAFAFA] transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category.en)}`}>
                      {getCategoryDisplay(article.category.en, isWelsh ? 'cy' : 'en')}
                    </span>
                    <span className="text-sm text-[#94A3B8]">
                      {new Date(article.date).toLocaleDateString(isWelsh ? 'cy-GB' : 'en-GB', {
                        day: 'numeric',
                        month: 'short',
                      })}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#123F56] mb-3 group-hover:text-[#E11D2E] transition-colors line-clamp-2">
                    {article.title[isWelsh ? 'cy' : 'en']}
                  </h3>
                  <p className="text-[#64748B] text-sm flex-grow line-clamp-2 mb-4">
                    {article.excerpt[isWelsh ? 'cy' : 'en']}
                  </p>
                  
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#123F56] group-hover:text-[#E11D2E] transition-colors">
                    {t('readMore')}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
