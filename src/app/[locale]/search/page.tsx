import { setRequestLocale, getTranslations } from 'next-intl/server';
import { SearchForm } from '@/components/sections/SearchForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'header' });
  
  return {
    title: t('search'),
  };
}

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { locale } = await params;
  const { q: query } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'search' });

  const isWelsh = locale === 'cy';

  // Mock search results
  const mockResults = query ? [
    {
      title: isWelsh ? 'Cronfa Cymru Actif' : 'Be Active Wales Fund',
      excerpt: isWelsh 
        ? 'Grantiau hyd at £50,000 ar gyfer offer neu gyrsiau hyfforddi...'
        : 'Grants up to £50,000 for equipment or coaching courses...',
      url: '/funding/be-active-wales',
    },
    {
      title: isWelsh ? 'Chwaraeon mewn Ysgolion' : 'Sport in Schools',
      excerpt: isWelsh
        ? 'Darganfyddwch sut rydym yn cefnogi chwaraeon mewn ysgolion ar draws Cymru...'
        : 'Discover how we support sport in schools across Wales...',
      url: '/sport-in-schools',
    },
    {
      title: isWelsh ? 'Newyddion Diweddaraf' : 'Latest News',
      excerpt: isWelsh
        ? 'Cadwch i fyny â\'r newyddion diweddaraf o Chwaraeon Cymru...'
        : 'Keep up with the latest news from Sport Wales...',
      url: '/news',
    },
  ] : [];

  return (
    <>
      {/* Search Header */}
      <section className="bg-sw-gray-50 py-12 md:py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-sw-black mb-6 text-center">
              {isWelsh ? 'Chwilio' : 'Search'}
            </h1>
            <SearchForm initialQuery={query} />
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {query ? (
              <>
                <p className="text-sw-gray-600 mb-8">
                  {t('resultsFor')}: <strong className="text-sw-black">&ldquo;{query}&rdquo;</strong>
                </p>

                {mockResults.length > 0 ? (
                  <div className="space-y-6">
                    {mockResults.map((result, index) => (
                      <article key={index} className="border-b border-sw-gray-200 pb-6 last:border-0">
                        <a 
                          href={result.url}
                          className="block group"
                        >
                          <h2 className="text-xl font-heading font-bold text-sw-teal group-hover:underline mb-2">
                            {result.title}
                          </h2>
                          <p className="text-sw-gray-600 mb-2">
                            {result.excerpt}
                          </p>
                          <span className="text-sm text-sw-gray-400">
                            sport.wales{result.url}
                          </span>
                        </a>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-sw-gray-600 mb-4">
                      {t('noResults')} &ldquo;{query}&rdquo;
                    </p>
                    <div className="text-left max-w-md mx-auto">
                      <h3 className="font-semibold text-sw-black mb-2">{t('searchTips')}</h3>
                      <ul className="text-sw-gray-600 space-y-2">
                        <li>• {t('tryDifferentKeywords')}</li>
                        <li>• {t('checkSpelling')}</li>
                      </ul>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12 text-sw-gray-500">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p>{isWelsh ? 'Rhowch dermau chwilio i ddechrau' : 'Enter search terms to get started'}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

