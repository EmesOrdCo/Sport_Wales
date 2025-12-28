import { setRequestLocale, getTranslations } from 'next-intl/server';
import { SearchForm } from '@/components/sections/SearchForm';
import { Link } from '@/i18n/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';
  
  return {
    title: isWelsh ? 'Chwilio | Chwaraeon Cymru' : 'Search | Sport Wales',
    description: isWelsh 
      ? 'Chwilio am wybodaeth ar wefan Chwaraeon Cymru'
      : 'Search for information on the Sport Wales website',
  };
}

// Mock search index - in production this would query a real search service
const searchIndex = {
  en: [
    { 
      title: 'Be Active Wales Fund', 
      excerpt: 'Grants up to £50,000 for sports clubs, community groups, and organisations to help more people be active more often.',
      url: '/funding/be-active-wales',
      category: 'Funding',
      keywords: ['grants', 'funding', 'money', 'application', 'sports clubs', 'community']
    },
    { 
      title: 'Energy Saving Grant', 
      excerpt: 'Funding to help sports clubs reduce energy costs and become more environmentally sustainable.',
      url: '/funding/energy-saving-grant',
      category: 'Funding',
      keywords: ['energy', 'sustainability', 'green', 'environment', 'solar', 'LED']
    },
    { 
      title: 'A Place for Sport - Crowdfunder', 
      excerpt: 'Match funding for community sports facility improvements through Crowdfunder campaigns.',
      url: '/funding/crowdfunder',
      category: 'Funding',
      keywords: ['crowdfunding', 'facilities', 'improvements', 'match funding']
    },
    { 
      title: 'Sport in Schools', 
      excerpt: 'Resources, research, and programmes supporting physical education and sport in Welsh schools.',
      url: '/sport-in-schools',
      category: 'Education',
      keywords: ['schools', 'education', 'PE', 'physical education', 'children', 'young people', 'teachers']
    },
    { 
      title: 'School Sport Survey', 
      excerpt: 'Research tracking participation, enjoyment, and attitudes towards sport among school children in Wales.',
      url: '/research/school-sport-survey',
      category: 'Research',
      keywords: ['survey', 'research', 'data', 'statistics', 'participation']
    },
    { 
      title: 'Community and Grassroots Sport', 
      excerpt: 'Support for sports clubs, volunteers, and community organisations across Wales.',
      url: '/community-grassroots',
      category: 'Community',
      keywords: ['clubs', 'volunteers', 'community', 'grassroots', 'local']
    },
    { 
      title: 'Club Support', 
      excerpt: 'Guidance and resources to help sports clubs thrive - from governance to funding.',
      url: '/club-support',
      category: 'Community',
      keywords: ['clubs', 'support', 'guidance', 'governance', 'volunteers']
    },
    { 
      title: 'Performance Sport', 
      excerpt: 'Supporting Welsh athletes to achieve success on the world stage.',
      url: '/performance-sport',
      category: 'Elite Sport',
      keywords: ['elite', 'athletes', 'performance', 'olympics', 'commonwealth', 'medals']
    },
    { 
      title: 'The Sport Wales Institute', 
      excerpt: 'Sports science, medicine, and support services for elite Welsh athletes.',
      url: '/institute',
      category: 'Elite Sport',
      keywords: ['institute', 'science', 'medicine', 'performance', 'athletes', 'support']
    },
    { 
      title: 'Partners', 
      excerpt: 'Working with national governing bodies and partners to develop sport in Wales.',
      url: '/partners',
      category: 'Partners',
      keywords: ['partners', 'ngb', 'governing bodies', 'organisations']
    },
    { 
      title: 'National Partners', 
      excerpt: 'Our national partners helping to deliver an active nation.',
      url: '/partners/national',
      category: 'Partners',
      keywords: ['national partners', 'organisations', 'sports']
    },
    { 
      title: 'Research and Insight', 
      excerpt: 'Data, statistics, and research on sport and physical activity in Wales.',
      url: '/research',
      category: 'Research',
      keywords: ['research', 'data', 'statistics', 'insight', 'survey']
    },
    { 
      title: 'Welsh Sport and The National Lottery', 
      excerpt: 'How National Lottery funding has transformed sport in Wales.',
      url: '/national-lottery',
      category: 'About',
      keywords: ['lottery', 'funding', 'national lottery', 'history']
    },
    { 
      title: 'What is Sport Wales?', 
      excerpt: 'Learn about Sport Wales - the national organisation for sport in Wales.',
      url: '/about/what-is-sport-wales',
      category: 'About',
      keywords: ['about', 'sport wales', 'organisation', 'who we are']
    },
    { 
      title: 'The Vision and Our Strategy', 
      excerpt: 'Our vision for an active nation where everyone can enjoy sport for life.',
      url: '/about/vision-and-strategy',
      category: 'About',
      keywords: ['vision', 'strategy', 'mission', 'goals', 'active nation']
    },
    { 
      title: 'Careers at Sport Wales', 
      excerpt: 'Join our team and help make Wales a more active nation.',
      url: '/careers',
      category: 'About',
      keywords: ['jobs', 'careers', 'vacancies', 'employment', 'work']
    },
    { 
      title: 'Contact Us', 
      excerpt: 'Get in touch with Sport Wales - find our locations and contact details.',
      url: '/contact',
      category: 'Contact',
      keywords: ['contact', 'phone', 'email', 'address', 'location']
    },
    { 
      title: 'Our Facilities', 
      excerpt: 'Sport Wales National Centre Cardiff and Plas Menai - world-class sporting facilities.',
      url: '/facilities',
      category: 'Facilities',
      keywords: ['facilities', 'national centre', 'plas menai', 'cardiff', 'venue', 'hire']
    },
    { 
      title: 'CLIP - Community Learning Information Platform', 
      excerpt: 'Free online courses and resources for sports coaches and volunteers.',
      url: '/clip',
      category: 'Education',
      keywords: ['clip', 'learning', 'courses', 'training', 'coaches', 'volunteers']
    },
    { 
      title: 'Policies and Governance', 
      excerpt: 'Our policies, governance framework, and strategic plans.',
      url: '/governance',
      category: 'Governance',
      keywords: ['policies', 'governance', 'equality', 'sustainability', 'strategy']
    },
  ],
  cy: [
    { 
      title: 'Cronfa Cymru Actif', 
      excerpt: 'Grantiau hyd at £50,000 i glybiau chwaraeon, grwpiau cymunedol a sefydliadau i helpu mwy o bobl i fod yn actif yn amlach.',
      url: '/funding/be-active-wales',
      category: 'Cyllid',
      keywords: ['grantiau', 'cyllid', 'arian', 'cais', 'clybiau chwaraeon', 'cymunedol']
    },
    { 
      title: 'Grant Arbed Ynni', 
      excerpt: 'Cyllid i helpu clybiau chwaraeon leihau costau ynni a dod yn fwy cynaliadwy yn amgylcheddol.',
      url: '/funding/energy-saving-grant',
      category: 'Cyllid',
      keywords: ['ynni', 'cynaliadwyedd', 'gwyrdd', 'amgylchedd', 'solar', 'LED']
    },
    { 
      title: 'Lle i Chwaraeon - Crowdfunder', 
      excerpt: 'Arian cyfatebol ar gyfer gwelliannau i gyfleusterau chwaraeon cymunedol trwy ymgyrchoedd Crowdfunder.',
      url: '/funding/crowdfunder',
      category: 'Cyllid',
      keywords: ['cyllido torfol', 'cyfleusterau', 'gwelliannau', 'arian cyfatebol']
    },
    { 
      title: 'Chwaraeon mewn Ysgolion', 
      excerpt: 'Adnoddau, ymchwil a rhaglenni sy\'n cefnogi addysg gorfforol a chwaraeon mewn ysgolion Cymru.',
      url: '/sport-in-schools',
      category: 'Addysg',
      keywords: ['ysgolion', 'addysg', 'AG', 'addysg gorfforol', 'plant', 'pobl ifanc', 'athrawon']
    },
    { 
      title: 'Arolwg Chwaraeon Ysgol', 
      excerpt: 'Ymchwil sy\'n olrhain cyfranogiad, mwynhad ac agweddau tuag at chwaraeon ymhlith plant ysgol yng Nghymru.',
      url: '/research/school-sport-survey',
      category: 'Ymchwil',
      keywords: ['arolwg', 'ymchwil', 'data', 'ystadegau', 'cyfranogiad']
    },
    { 
      title: 'Chwaraeon Cymunedol a Llawr Gwlad', 
      excerpt: 'Cefnogaeth i glybiau chwaraeon, gwirfoddolwyr a sefydliadau cymunedol ledled Cymru.',
      url: '/community-grassroots',
      category: 'Cymuned',
      keywords: ['clybiau', 'gwirfoddolwyr', 'cymuned', 'llawr gwlad', 'lleol']
    },
    { 
      title: 'Cefnogaeth i Glybiau', 
      excerpt: 'Arweiniad ac adnoddau i helpu clybiau chwaraeon ffynnu - o lywodraethu i gyllid.',
      url: '/club-support',
      category: 'Cymuned',
      keywords: ['clybiau', 'cefnogaeth', 'arweiniad', 'llywodraethu', 'gwirfoddolwyr']
    },
    { 
      title: 'Chwaraeon Perfformiad', 
      excerpt: 'Cefnogi athletwyr Cymru i gyflawni llwyddiant ar lwyfan y byd.',
      url: '/performance-sport',
      category: 'Chwaraeon Elitaidd',
      keywords: ['elitaidd', 'athletwyr', 'perfformiad', 'olympaidd', 'cymanwlad', 'medalau']
    },
    { 
      title: 'Sefydliad Chwaraeon Cymru', 
      excerpt: 'Gwasanaethau gwyddoniaeth chwaraeon, meddygaeth a chefnogaeth i athletwyr elitaidd Cymru.',
      url: '/institute',
      category: 'Chwaraeon Elitaidd',
      keywords: ['sefydliad', 'gwyddoniaeth', 'meddygaeth', 'perfformiad', 'athletwyr', 'cefnogaeth']
    },
    { 
      title: 'Partneriaid', 
      excerpt: 'Gweithio gyda chyrff llywodraethu cenedlaethol a phartneriaid i ddatblygu chwaraeon yng Nghymru.',
      url: '/partners',
      category: 'Partneriaid',
      keywords: ['partneriaid', 'cyrff llywodraethu', 'sefydliadau']
    },
    { 
      title: 'Ymchwil a Mewnwelediad', 
      excerpt: 'Data, ystadegau ac ymchwil ar chwaraeon a gweithgarwch corfforol yng Nghymru.',
      url: '/research',
      category: 'Ymchwil',
      keywords: ['ymchwil', 'data', 'ystadegau', 'mewnwelediad', 'arolwg']
    },
    { 
      title: 'Chwaraeon Cymru a\'r Loteri Genedlaethol', 
      excerpt: 'Sut mae cyllid y Loteri Genedlaethol wedi trawsnewid chwaraeon yng Nghymru.',
      url: '/national-lottery',
      category: 'Amdanom',
      keywords: ['loteri', 'cyllid', 'loteri genedlaethol', 'hanes']
    },
    { 
      title: 'Beth yw Chwaraeon Cymru?', 
      excerpt: 'Dysgwch am Chwaraeon Cymru - y sefydliad cenedlaethol ar gyfer chwaraeon yng Nghymru.',
      url: '/about/what-is-sport-wales',
      category: 'Amdanom',
      keywords: ['amdanom', 'chwaraeon cymru', 'sefydliad', 'pwy ydym ni']
    },
    { 
      title: 'Y Weledigaeth a\'n Strategaeth', 
      excerpt: 'Ein gweledigaeth ar gyfer cenedl actif lle gall pawb fwynhau chwaraeon am oes.',
      url: '/about/vision-and-strategy',
      category: 'Amdanom',
      keywords: ['gweledigaeth', 'strategaeth', 'cenhadaeth', 'nodau', 'cenedl actif']
    },
    { 
      title: 'Gyrfaoedd yn Chwaraeon Cymru', 
      excerpt: 'Ymunwch â\'n tîm a helpwch i wneud Cymru yn genedl fwy actif.',
      url: '/careers',
      category: 'Amdanom',
      keywords: ['swyddi', 'gyrfaoedd', 'swyddi gwag', 'cyflogaeth', 'gwaith']
    },
    { 
      title: 'Cysylltu â Ni', 
      excerpt: 'Cysylltwch â Chwaraeon Cymru - dewch o hyd i\'n lleoliadau a\'n manylion cyswllt.',
      url: '/contact',
      category: 'Cyswllt',
      keywords: ['cyswllt', 'ffôn', 'ebost', 'cyfeiriad', 'lleoliad']
    },
    { 
      title: 'Ein Cyfleusterau', 
      excerpt: 'Canolfan Genedlaethol Chwaraeon Cymru Caerdydd a Phlas Menai - cyfleusterau chwaraeon o\'r radd flaenaf.',
      url: '/facilities',
      category: 'Cyfleusterau',
      keywords: ['cyfleusterau', 'canolfan genedlaethol', 'plas menai', 'caerdydd', 'lleoliad', 'llogi']
    },
    { 
      title: 'CLIP - Platfform Gwybodaeth Dysgu Cymunedol', 
      excerpt: 'Cyrsiau ac adnoddau ar-lein am ddim i hyfforddwyr chwaraeon a gwirfoddolwyr.',
      url: '/clip',
      category: 'Addysg',
      keywords: ['clip', 'dysgu', 'cyrsiau', 'hyfforddiant', 'hyfforddwyr', 'gwirfoddolwyr']
    },
    { 
      title: 'Polisïau a Llywodraethu', 
      excerpt: 'Ein polisïau, fframwaith llywodraethu a\'n cynlluniau strategol.',
      url: '/governance',
      category: 'Llywodraethu',
      keywords: ['polisïau', 'llywodraethu', 'cydraddoldeb', 'cynaliadwyedd', 'strategaeth']
    },
  ]
};

// Simple search function - matches against title, excerpt, and keywords
function performSearch(query: string, locale: string): typeof searchIndex.en {
  const normalizedQuery = query.toLowerCase().trim();
  const index = locale === 'cy' ? searchIndex.cy : searchIndex.en;
  
  if (!normalizedQuery) return [];
  
  // Split query into words for better matching
  const queryWords = normalizedQuery.split(/\s+/);
  
  // Score each result
  const scoredResults = index.map(item => {
    let score = 0;
    const titleLower = item.title.toLowerCase();
    const excerptLower = item.excerpt.toLowerCase();
    const keywordsLower = item.keywords.join(' ').toLowerCase();
    
    // Exact title match - highest score
    if (titleLower === normalizedQuery) score += 100;
    
    // Title contains query
    if (titleLower.includes(normalizedQuery)) score += 50;
    
    // Each word match in title
    queryWords.forEach(word => {
      if (titleLower.includes(word)) score += 20;
      if (excerptLower.includes(word)) score += 10;
      if (keywordsLower.includes(word)) score += 15;
    });
    
    return { ...item, score };
  });
  
  // Filter out zero scores and sort by score
  return scoredResults
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10); // Limit to top 10 results
}

// Popular searches
const popularSearches = {
  en: ['Funding', 'Grants', 'Schools', 'Clubs', 'Careers', 'Contact'],
  cy: ['Cyllid', 'Grantiau', 'Ysgolion', 'Clybiau', 'Gyrfaoedd', 'Cyswllt']
};

// Categories for browsing
const browseCategories = {
  en: [
    { name: 'Funding & Grants', url: '/funding', icon: '💰' },
    { name: 'Sport in Schools', url: '/sport-in-schools', icon: '🏫' },
    { name: 'Community Sport', url: '/community-grassroots', icon: '🏃' },
    { name: 'Research & Data', url: '/research', icon: '📊' },
    { name: 'Elite Sport', url: '/performance-sport', icon: '🏅' },
    { name: 'About Us', url: '/about/what-is-sport-wales', icon: 'ℹ️' },
  ],
  cy: [
    { name: 'Cyllid a Grantiau', url: '/funding', icon: '💰' },
    { name: 'Chwaraeon mewn Ysgolion', url: '/sport-in-schools', icon: '🏫' },
    { name: 'Chwaraeon Cymunedol', url: '/community-grassroots', icon: '🏃' },
    { name: 'Ymchwil a Data', url: '/research', icon: '📊' },
    { name: 'Chwaraeon Elitaidd', url: '/performance-sport', icon: '🏅' },
    { name: 'Amdanom Ni', url: '/about/what-is-sport-wales', icon: 'ℹ️' },
  ]
};

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
  const results = query ? performSearch(query, locale) : [];
  const categories = isWelsh ? browseCategories.cy : browseCategories.en;
  const popular = isWelsh ? popularSearches.cy : popularSearches.en;

  const breadcrumbs = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Chwilio' : 'Search', url: `https://www.sport.wales/${locale}/search` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      
      {/* Hero Search Section */}
      <section className="relative bg-gradient-to-br from-[#123F56] to-[#0F172A] text-white py-16 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#E11D2E] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F4B400] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 !text-white">
              {isWelsh ? 'Chwilio' : 'Search'}
            </h1>
            <p className="text-lg text-white/80 mb-8">
              {isWelsh 
                ? 'Chwiliwch am wybodaeth, cyllid, adnoddau a mwy yn Gymraeg neu Saesneg'
                : 'Find information, funding, resources and more in Welsh or English'
              }
            </p>
            
            <SearchForm initialQuery={query || ''} variant="hero" autoFocus={!query} />
            
            {/* Popular Searches */}
            {!query && (
              <div className="mt-6">
                <p className="text-sm text-white/60 mb-3">
                  {isWelsh ? 'Chwiliadau poblogaidd:' : 'Popular searches:'}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {popular.map((term) => (
                    <Link
                      key={term}
                      href={`/search?q=${encodeURIComponent(term)}`}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors"
                    >
                      {term}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results / Browse Section */}
      <section className="py-12 md:py-16 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {query ? (
              /* Search Results */
              <>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[#64748B]">
                    {results.length > 0 ? (
                      <>
                        <span className="font-semibold text-[#0F172A]">{results.length}</span>
                        {isWelsh ? ' canlyniad ar gyfer ' : ' results for '}
                        <span className="font-semibold text-[#0F172A]">&ldquo;{query}&rdquo;</span>
                      </>
                    ) : (
                      <>
                        {isWelsh ? 'Dim canlyniadau ar gyfer ' : 'No results for '}
                        <span className="font-semibold text-[#0F172A]">&ldquo;{query}&rdquo;</span>
                      </>
                    )}
                  </p>
                  
                  {/* Language hint */}
                  <p className="text-sm text-[#94A3B8]">
                    {isWelsh 
                      ? 'Gallwch chwilio yn Gymraeg neu Saesneg'
                      : 'You can search in Welsh or English'
                    }
                  </p>
                </div>

                {results.length > 0 ? (
                  <div className="space-y-4">
                    {results.map((result, index) => (
                      <Link
                        key={index}
                        href={result.url as any}
                        className="block bg-white rounded-xl p-6 shadow-sm border border-[#E2E8F0] hover:border-[#123F56] hover:shadow-md transition-all group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <span className="inline-block px-2 py-0.5 bg-[#123F56]/10 text-[#123F56] text-xs font-medium rounded mb-2">
                              {result.category}
                            </span>
                            <h2 className="text-lg font-semibold text-[#0F172A] group-hover:text-[#E11D2E] transition-colors mb-2">
                              {result.title}
                            </h2>
                            <p className="text-[#64748B] text-sm line-clamp-2">
                              {result.excerpt}
                            </p>
                            <span className="text-xs text-[#94A3B8] mt-2 block">
                              sport.wales{result.url}
                            </span>
                          </div>
                          <svg className="w-5 h-5 text-[#94A3B8] group-hover:text-[#E11D2E] transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  /* No Results */
                  <div className="bg-white rounded-xl p-8 text-center border border-[#E2E8F0]">
                    <svg className="w-16 h-16 mx-auto mb-4 text-[#CBD5E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h2 className="text-xl font-semibold text-[#0F172A] mb-2">
                      {isWelsh ? 'Dim canlyniadau wedi\'u canfod' : 'No results found'}
                    </h2>
                    <p className="text-[#64748B] mb-6">
                      {isWelsh 
                        ? 'Rhowch gynnig ar eiriau allweddol gwahanol neu pori\'r categorïau isod'
                        : 'Try different keywords or browse the categories below'
                      }
                    </p>
                    
                    <div className="text-left max-w-md mx-auto bg-[#F8FAFC] rounded-lg p-4">
                      <h3 className="font-semibold text-[#0F172A] mb-2">
                        {isWelsh ? 'Awgrymiadau chwilio:' : 'Search tips:'}
                      </h3>
                      <ul className="text-[#64748B] space-y-1 text-sm">
                        <li>• {isWelsh ? 'Gwiriwch eich sillafu' : 'Check your spelling'}</li>
                        <li>• {isWelsh ? 'Defnyddiwch eiriau allweddol mwy cyffredinol' : 'Use more general keywords'}</li>
                        <li>• {isWelsh ? 'Rhowch gynnig ar dermau gwahanol' : 'Try different terms'}</li>
                        <li>• {isWelsh ? 'Chwiliwch yn Gymraeg neu Saesneg' : 'Search in Welsh or English'}</li>
                      </ul>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Browse Categories (no search query) */
              <>
                <h2 className="text-2xl font-heading font-bold text-[#0F172A] mb-6 text-center">
                  {isWelsh ? 'Pori yn ôl Categori' : 'Browse by Category'}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.url as any}
                      className="bg-white rounded-xl p-6 shadow-sm border border-[#E2E8F0] hover:border-[#123F56] hover:shadow-md transition-all text-center group"
                    >
                      <span className="text-3xl mb-3 block">{category.icon}</span>
                      <h3 className="font-semibold text-[#0F172A] group-hover:text-[#E11D2E] transition-colors">
                        {category.name}
                      </h3>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-white border-t border-[#E2E8F0]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-heading font-bold text-[#0F172A] mb-3">
              {isWelsh ? 'Methu dod o hyd i\'r hyn rydych chi\'n chwilio amdano?' : 'Can\'t find what you\'re looking for?'}
            </h2>
            <p className="text-[#64748B] mb-6">
              {isWelsh 
                ? 'Mae ein tîm yma i helpu. Cysylltwch â ni a gallwn eich cyfeirio i\'r lle cywir.'
                : 'Our team is here to help. Get in touch and we can point you in the right direction.'
              }
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#123F56] text-white font-semibold rounded-full hover:bg-[#0F172A] transition-colors"
            >
              {isWelsh ? 'Cysylltu â Ni' : 'Contact Us'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
