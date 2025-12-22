/**
 * Strapi CMS Integration Utilities
 * 
 * This file provides utilities for connecting to a Strapi headless CMS.
 * Configure STRAPI_URL in your environment variables to enable.
 */

// Types for Strapi API responses
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiMedia {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
    url: string;
  };
}

export interface StrapiLocalizedContent {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    locale: 'en' | 'cy';
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
    featuredImage?: {
      data: StrapiMedia | null;
    };
    localizations?: {
      data: Array<{
        id: number;
        attributes: {
          locale: 'en' | 'cy';
          slug: string;
        };
      }>;
    };
  };
}

// Strapi configuration
const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

/**
 * Get the full URL for a Strapi media asset
 */
export function getStrapiMediaUrl(media: StrapiMedia | null): string | null {
  if (!media) return null;
  
  const { url } = media.attributes;
  
  // If it's already an absolute URL, return as-is
  if (url.startsWith('http')) {
    return url;
  }
  
  // Otherwise, prepend the Strapi URL
  return `${STRAPI_URL}${url}`;
}

/**
 * Build headers for Strapi API requests
 */
function getHeaders(): HeadersInit {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  if (STRAPI_API_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
  }
  
  return headers;
}

/**
 * Generic fetch function for Strapi API
 */
export async function fetchFromStrapi<T>(
  endpoint: string,
  options?: {
    locale?: 'en' | 'cy';
    populate?: string | string[];
    filters?: Record<string, unknown>;
    sort?: string | string[];
    pagination?: {
      page?: number;
      pageSize?: number;
    };
  }
): Promise<StrapiResponse<T>> {
  // Build query parameters
  const params = new URLSearchParams();
  
  if (options?.locale) {
    params.append('locale', options.locale);
  }
  
  if (options?.populate) {
    if (Array.isArray(options.populate)) {
      options.populate.forEach((p, i) => params.append(`populate[${i}]`, p));
    } else {
      params.append('populate', options.populate);
    }
  }
  
  if (options?.filters) {
    Object.entries(options.filters).forEach(([key, value]) => {
      params.append(`filters[${key}]`, String(value));
    });
  }
  
  if (options?.sort) {
    if (Array.isArray(options.sort)) {
      options.sort.forEach((s, i) => params.append(`sort[${i}]`, s));
    } else {
      params.append('sort', options.sort);
    }
  }
  
  if (options?.pagination) {
    if (options.pagination.page) {
      params.append('pagination[page]', String(options.pagination.page));
    }
    if (options.pagination.pageSize) {
      params.append('pagination[pageSize]', String(options.pagination.pageSize));
    }
  }
  
  const queryString = params.toString();
  const url = `${STRAPI_URL}/api/${endpoint}${queryString ? `?${queryString}` : ''}`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: getHeaders(),
      next: {
        revalidate: 60, // Revalidate every 60 seconds
      },
    });
    
    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
    }
    
    return response.json();
  } catch (error) {
    console.error(`Failed to fetch from Strapi: ${url}`, error);
    throw error;
  }
}

// ============================================
// Content Type Specific Functions
// ============================================

/**
 * Fetch all news articles
 */
export async function getNewsArticles(locale: 'en' | 'cy', page = 1, pageSize = 10) {
  return fetchFromStrapi<StrapiLocalizedContent[]>('articles', {
    locale,
    populate: ['featuredImage', 'localizations'],
    sort: ['publishedAt:desc'],
    pagination: { page, pageSize },
  });
}

/**
 * Fetch a single news article by slug
 */
export async function getNewsArticleBySlug(slug: string, locale: 'en' | 'cy') {
  const response = await fetchFromStrapi<StrapiLocalizedContent[]>('articles', {
    locale,
    filters: { slug: { $eq: slug } },
    populate: ['featuredImage', 'localizations'],
  });
  
  return response.data[0] || null;
}

/**
 * Fetch all funding opportunities
 */
export async function getFundingOpportunities(locale: 'en' | 'cy') {
  return fetchFromStrapi<StrapiLocalizedContent[]>('funding-opportunities', {
    locale,
    populate: ['featuredImage', 'localizations'],
    sort: ['priority:asc'],
  });
}

/**
 * Fetch a page by its slug
 */
export async function getPageBySlug(slug: string, locale: 'en' | 'cy') {
  const response = await fetchFromStrapi<StrapiLocalizedContent[]>('pages', {
    locale,
    filters: { slug: { $eq: slug } },
    populate: ['featuredImage', 'localizations', 'seo'],
  });
  
  return response.data[0] || null;
}

/**
 * Search content across multiple content types
 */
export async function searchContent(query: string, locale: 'en' | 'cy') {
  // This would use Strapi's full-text search or a custom search endpoint
  // Implementation depends on your Strapi search configuration
  const [articles, pages] = await Promise.all([
    fetchFromStrapi<StrapiLocalizedContent[]>('articles', {
      locale,
      filters: {
        $or: [
          { title: { $containsi: query } },
          { content: { $containsi: query } },
        ],
      },
      populate: ['featuredImage'],
      pagination: { pageSize: 10 },
    }),
    fetchFromStrapi<StrapiLocalizedContent[]>('pages', {
      locale,
      filters: {
        $or: [
          { title: { $containsi: query } },
          { content: { $containsi: query } },
        ],
      },
      pagination: { pageSize: 10 },
    }),
  ]);
  
  return {
    articles: articles.data,
    pages: pages.data,
  };
}

// ============================================
// Utility Functions
// ============================================

/**
 * Get the alternate locale slug for a content item
 */
export function getAlternateSlug(
  content: StrapiLocalizedContent,
  targetLocale: 'en' | 'cy'
): string | null {
  if (content.attributes.locale === targetLocale) {
    return content.attributes.slug;
  }
  
  const localization = content.attributes.localizations?.data.find(
    (loc) => loc.attributes.locale === targetLocale
  );
  
  return localization?.attributes.slug || null;
}

/**
 * Check if Strapi is available
 */
export async function isStrapiAvailable(): Promise<boolean> {
  try {
    const response = await fetch(`${STRAPI_URL}/api`, {
      method: 'HEAD',
      next: { revalidate: 300 }, // Check every 5 minutes
    });
    return response.ok;
  } catch {
    return false;
  }
}

