/**
 * Content Provider Abstraction
 * 
 * This module provides a unified interface for fetching content,
 * whether from Strapi CMS or fallback mock data.
 */

import {
  getNewsArticles as getStrapiNewsArticles,
  getNewsArticleBySlug as getStrapiNewsArticleBySlug,
  getFundingOpportunities as getStrapiFundingOpportunities,
  isStrapiAvailable,
} from './strapi';

// ============================================
// Content Types
// ============================================

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  date: string;
  image?: string;
  imageAlt?: string;
  author?: string;
  featured?: boolean;
}

export interface FundingOpportunity {
  id: string;
  slug: string;
  title: string;
  description: string;
  maxAmount?: string;
  href: string;
  color: string;
  status?: 'Open' | 'Closed' | 'Coming Soon';
  deadlineDate?: string;
  applicationLink?: string;
}

// ============================================
// Mock Data (fallback when CMS is unavailable)
// ============================================

const mockNewsArticles: Record<'en' | 'cy', NewsArticle[]> = {
  en: [
    {
      id: '1',
      slug: 'year-in-welsh-sport-2025',
      title: 'A year in Welsh sport – 2025 replayed',
      excerpt: "Let's have a peek at just some of the highlights that have shaped Welsh sport.",
      category: 'Featured Story',
      date: '2025-12-20',
    },
    {
      id: '2',
      slug: 'volunteers-helping-community-sport',
      title: 'The volunteers helping community sport to thrive across Wales',
      excerpt: 'We are celebrating some amazing volunteers and asking them what volunteering gives them in return.',
      category: 'Feature',
      date: '2025-12-18',
    },
    {
      id: '3',
      slug: 'iori-horse-riding-club',
      title: 'Iori takes the reins at Ceredigion horse-riding club thanks to National Lottery Grant',
      excerpt: "Iori's strength and confidence soars with new equipment provided by the funding.",
      category: 'Impact Story',
      date: '2025-12-15',
    },
    {
      id: '4',
      slug: 'foundations-framework-wales',
      title: 'Foundations Framework Wales: A Good Practice Guide',
      excerpt: "To help us achieve strong foundations for young people's lifelong journey with physical activity and sport.",
      category: 'Resources',
      date: '2025-12-10',
    },
    {
      id: '5',
      slug: 'be-active-wales-fund-update',
      title: 'Be Active Wales Fund: Over 500 projects funded in 2025',
      excerpt: 'The Be Active Wales Fund has supported hundreds of community sports projects this year.',
      category: 'Funding',
      date: '2025-12-05',
    },
    {
      id: '6',
      slug: 'school-sport-survey-results',
      title: 'School Sport Survey reveals encouraging trends',
      excerpt: 'New data shows more children are enjoying sport and physical activity in Welsh schools.',
      category: 'Research',
      date: '2025-12-01',
    },
  ],
  cy: [
    {
      id: '1',
      slug: 'blwyddyn-chwaraeon-cymru-2025',
      title: 'Blwyddyn yn chwaraeon Cymru – 2025 yn cael ei hailchwarae',
      excerpt: 'Gadewch i ni gael cipolwg ar rai o\'r uchafbwyntiau sydd wedi siapio chwaraeon Cymru.',
      category: 'Stori dan Sylw',
      date: '2025-12-20',
    },
    {
      id: '2',
      slug: 'gwirfoddolwyr-helpu-chwaraeon',
      title: 'Y gwirfoddolwyr yn helpu chwaraeon cymunedol i ffynnu ar draws Cymru',
      excerpt: 'Rydym yn dathlu rhai gwirfoddolwyr anhygoel ac yn gofyn iddynt beth mae gwirfoddoli yn ei roi iddynt yn ôl.',
      category: 'Nodwedd',
      date: '2025-12-18',
    },
    {
      id: '3',
      slug: 'iori-clwb-marchogaeth',
      title: 'Iori yn cymryd yr awenau yng nghlwb marchogaeth Ceredigion diolch i Grant y Loteri Genedlaethol',
      excerpt: 'Mae cryfder a hyder Iori yn esgyn gydag offer newydd a ddarparwyd gan y cyllid.',
      category: 'Stori Effaith',
      date: '2025-12-15',
    },
    {
      id: '4',
      slug: 'fframwaith-sylfeini-cymru',
      title: 'Fframwaith Sylfeini Cymru: Canllaw Arferion Da',
      excerpt: 'I\'n helpu i sicrhau sylfeini cryf ar gyfer taith gydol oes pobl ifanc gyda gweithgarwch corfforol a chwaraeon.',
      category: 'Adnoddau',
      date: '2025-12-10',
    },
    {
      id: '5',
      slug: 'cronfa-cymru-actif-diweddariad',
      title: 'Cronfa Cymru Actif: Dros 500 o brosiectau wedi\'u hariannu yn 2025',
      excerpt: 'Mae Cronfa Cymru Actif wedi cefnogi cannoedd o brosiectau chwaraeon cymunedol eleni.',
      category: 'Cyllid',
      date: '2025-12-05',
    },
    {
      id: '6',
      slug: 'arolwg-chwaraeon-ysgol',
      title: 'Mae Arolwg Chwaraeon Ysgol yn datgelu tueddiadau calonogol',
      excerpt: 'Mae data newydd yn dangos bod mwy o blant yn mwynhau chwaraeon a gweithgarwch corfforol yn ysgolion Cymru.',
      category: 'Ymchwil',
      date: '2025-12-01',
    },
  ],
};

const mockFundingOpportunities: Record<'en' | 'cy', FundingOpportunity[]> = {
  en: [
    {
      id: '1',
      slug: 'be-active-wales-fund',
      title: 'Be Active Wales Fund',
      description: 'Supporting grassroots sport and physical activity projects across Wales.',
      maxAmount: '£50,000',
      href: '/funding/be-active-wales',
      color: 'bg-sw-teal',
    },
    {
      id: '2',
      slug: 'crowdfunder',
      title: 'A Place for Sport - Crowdfunder',
      description: 'Match funding for community sports facility improvements.',
      maxAmount: '£15,000',
      href: '/funding/crowdfunder',
      color: 'bg-sw-navy',
    },
  ],
  cy: [
    {
      id: '1',
      slug: 'cronfa-cymru-actif',
      title: 'Cronfa Cymru Actif',
      description: 'Cefnogi prosiectau chwaraeon a gweithgarwch corfforol llawr gwlad ledled Cymru.',
      maxAmount: '£50,000',
      href: '/funding/cronfa-cymru-actif',
      color: 'bg-sw-teal',
    },
    {
      id: '2',
      slug: 'codi-arian-torfol',
      title: 'Lle i Chwaraeon - Codi Arian Torfol',
      description: 'Cyllid cyfatebol ar gyfer gwelliannau i gyfleusterau chwaraeon cymunedol.',
      maxAmount: '£15,000',
      href: '/funding/codi-arian-torfol',
      color: 'bg-sw-navy',
    },
  ],
};

// ============================================
// Content Provider Functions
// ============================================

/**
 * Get news articles from CMS or fallback to mock data
 */
export async function getNewsArticles(
  locale: 'en' | 'cy',
  page = 1,
  pageSize = 10
): Promise<{ articles: NewsArticle[]; total: number }> {
  // Check if Strapi is available
  const strapiAvailable = await isStrapiAvailable();
  
  if (strapiAvailable) {
    try {
      const response = await getStrapiNewsArticles(locale, page, pageSize);
      
      if (!response?.data) {
        throw new Error('Invalid response from Strapi');
      }
      
      // Transform Strapi response to our format
      // Strapi v5 returns data directly, v4 uses attributes wrapper
      const articles = response.data.map((item: any) => {
        // Handle both Strapi v4 (with attributes) and v5 (without attributes) formats
        const data = item.attributes || item;
        
        // Handle rich text content (can be array or string)
        let contentText = '';
        if (Array.isArray(data.content)) {
          // Extract text from rich text structure
          contentText = data.content
            .map((block: any) => {
              if (block.type === 'paragraph' && block.children) {
                return block.children.map((child: any) => child.text || '').join('');
              }
              return '';
            })
            .join('\n\n');
        } else {
          contentText = data.content || '';
        }

        // Handle image - check both v4 and v5 formats
        const featuredImage = data.featuredImage;
        let imageUrl = null;
        let imageAlt = '';
        
        if (featuredImage) {
          // v5 format: featuredImage.data.attributes.url or featuredImage.url
          if (featuredImage.data?.attributes?.url) {
            imageUrl = featuredImage.data.attributes.url;
            imageAlt = featuredImage.data.attributes.alternativeText || '';
          } else if (featuredImage.data?.url) {
            imageUrl = featuredImage.data.url;
            imageAlt = featuredImage.data.alternativeText || '';
          } else if (featuredImage.url) {
            imageUrl = featuredImage.url;
            imageAlt = featuredImage.alternativeText || '';
          } else if (featuredImage.attributes?.url) {
            imageUrl = featuredImage.attributes.url;
            imageAlt = featuredImage.attributes.alternativeText || '';
          }
        }

        return {
          id: String(item.id),
          slug: data.slug,
          title: data.title,
          excerpt: data.excerpt || '',
          content: contentText,
          category: data.category || 'News',
          date: data.publishedAt || data.createdAt,
          image: imageUrl,
          imageAlt: imageAlt,
          author: data.author || 'Sport Wales',
          featured: data.featured || false,
        };
      });
      
      return {
        articles,
        total: response.meta.pagination?.total || articles.length,
      };
    } catch (error) {
      console.error('Failed to fetch from Strapi, using mock data:', error);
      // Return empty array with 0 total to trigger fallback
      return { articles: [], total: 0 };
    }
  }
  
  // Fallback to mock data
  const allArticles = mockNewsArticles[locale];
  const start = (page - 1) * pageSize;
  const articles = allArticles.slice(start, start + pageSize);
  
  return {
    articles,
    total: allArticles.length,
  };
}

/**
 * Get a single news article by slug
 */
export async function getNewsArticleBySlug(
  slug: string,
  locale: 'en' | 'cy'
): Promise<NewsArticle | null> {
  const strapiAvailable = await isStrapiAvailable();
  
  if (strapiAvailable) {
    try {
      const article = await getStrapiNewsArticleBySlug(slug, locale);
      
      if (article) {
        // Handle both Strapi v4 and v5 formats
        const data = (article as any).attributes || article;
        const featuredImage = data.featuredImage;
        let imageUrl = null;
        let imageAlt = '';
        
        if (featuredImage) {
          if (featuredImage.data?.attributes?.url) {
            imageUrl = featuredImage.data.attributes.url;
            imageAlt = featuredImage.data.attributes.alternativeText || '';
          } else if (featuredImage.data?.url) {
            imageUrl = featuredImage.data.url;
            imageAlt = featuredImage.data.alternativeText || '';
          } else if (featuredImage.url) {
            imageUrl = featuredImage.url;
            imageAlt = featuredImage.alternativeText || '';
          } else if (featuredImage.attributes?.url) {
            imageUrl = featuredImage.attributes.url;
            imageAlt = featuredImage.attributes.alternativeText || '';
          }
        }
        
        // Convert rich text content to HTML
        let contentText = '';
        if (Array.isArray(data.content)) {
          // Extract text from rich text structure and convert to HTML
          contentText = data.content
            .map((block: any) => {
              if (block.type === 'paragraph' && block.children) {
                const text = block.children.map((child: any) => child.text || '').join('');
                return `<p>${text}</p>`;
              }
              if (block.type === 'heading' && block.children) {
                const level = block.level || 2;
                const text = block.children.map((child: any) => child.text || '').join('');
                return `<h${level}>${text}</h${level}>`;
              }
              return '';
            })
            .join('');
        } else if (typeof data.content === 'string') {
          contentText = data.content;
        } else {
          // Fallback to excerpt if content is in unexpected format
          contentText = `<p>${data.excerpt || ''}</p>`;
        }
        
        return {
          id: String(article.id),
          slug: data.slug,
          title: data.title,
          excerpt: data.excerpt || '',
          content: contentText,
          category: data.category || 'News',
          date: data.publishedAt || data.createdAt,
          image: imageUrl,
          imageAlt: imageAlt,
          author: data.author || 'Sport Wales',
          featured: data.featured || false,
        };
      }
    } catch (error) {
      console.error('Failed to fetch from Strapi:', error);
    }
  }
  
  // Fallback to mock data
  return mockNewsArticles[locale].find((a) => a.slug === slug) || null;
}

/**
 * Get funding opportunities from CMS or fallback to mock data
 */
export async function getFundingOpportunities(
  locale: 'en' | 'cy'
): Promise<FundingOpportunity[]> {
  const strapiAvailable = await isStrapiAvailable();
  
  if (strapiAvailable) {
    try {
      const response = await getStrapiFundingOpportunities(locale);
      
      return response.data.map((item: any) => {
        // Handle both Strapi v4 and v5 formats
        const data = item.attributes || item;
        
        // Determine color based on status
        const getColorByStatus = (status?: string) => {
          if (status === 'Closed') return 'bg-sw-gray';
          if (status === 'Coming Soon') return 'bg-sw-navy';
          return 'bg-sw-teal';
        };
        
        return {
          id: String(item.id),
          slug: data.slug,
          title: data.title,
          description: data.description || data.excerpt || '',
          maxAmount: data.maxAmount || undefined,
          href: data.applicationLink || `/funding/${data.slug}`,
          color: getColorByStatus(data.status),
          status: data.status || 'Open',
          deadlineDate: data.deadlineDate || undefined,
          applicationLink: data.applicationLink || undefined,
        };
      }).filter((opp) => opp.status === 'Open' || !opp.status); // Only show open opportunities by default
    } catch (error) {
      console.error('Failed to fetch from Strapi, using mock data:', error);
    }
  }
  
  return mockFundingOpportunities[locale];
}

