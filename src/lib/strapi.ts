/**
 * Strapi CMS Integration Utilities
 * 
 * This file provides utilities for connecting to a Strapi headless CMS.
 * Configure STRAPI_URL in your environment variables to enable.
 */

// Import SSRF protection
import { isSafeUrl } from './security/url-validation';

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

// Strapi v5 uses direct properties, v4 uses attributes wrapper
export interface StrapiLocalizedContent {
  id: number;
  documentId?: string;
  // Strapi v5 format (direct properties)
  title?: string;
  slug?: string;
  content?: string | any[];
  excerpt?: string;
  locale?: 'en' | 'cy';
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  featuredImage?: StrapiMedia | null | {
    data?: StrapiMedia | null;
  };
  localizations?: Array<{
    id: number;
    locale?: 'en' | 'cy';
    slug?: string;
    attributes?: {
      locale: 'en' | 'cy';
      slug: string;
    };
  }>;
  // Strapi v4 format (with attributes wrapper)
  attributes?: {
    title: string;
    slug: string;
    content: string | any[];
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
 * Includes SSRF protection
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
  // SSRF protection: Validate Strapi URL before making request
  if (!isSafeUrl(STRAPI_URL)) {
    throw new Error('SSRF protection: Strapi URL is not safe');
  }

  // Build query parameters
  const params = new URLSearchParams();
  
  if (options?.locale) {
    params.append('locale', options.locale);
  }
  
  if (options?.populate) {
    if (Array.isArray(options.populate)) {
      // For Strapi v5, use indexed format: populate[0]=field1&populate[1]=field2
      // Or use populate=* for all fields
      if (options.populate.length === 0 || options.populate.includes('*')) {
        params.append('populate', '*');
      } else {
        options.populate.forEach((p, i) => {
          params.append(`populate[${i}]`, String(p));
        });
      }
    } else if (options.populate === '*') {
      params.append('populate', '*');
    } else {
      params.append('populate[0]', String(options.populate));
    }
  }
  
  if (options?.filters) {
    // Handle nested filters for Strapi v5 (e.g., filters[slug][$eq]=value)
    Object.entries(options.filters).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        // Handle nested filter objects like { slug: { $eq: 'value' } }
        Object.entries(value as Record<string, unknown>).forEach(([op, opValue]) => {
          params.append(`filters[${key}][${op}]`, String(opValue));
        });
      } else {
        params.append(`filters[${key}]`, String(value));
      }
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
    populate: '*', // Populate all relations for Strapi v5
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
    populate: '*', // Populate all relations for Strapi v5
  });
  
  return response.data[0] || null;
}

/**
 * Fetch all funding opportunities
 */
export async function getFundingOpportunities(locale: 'en' | 'cy') {
  return fetchFromStrapi<StrapiLocalizedContent[]>('funding-opportunities', {
    locale,
    populate: '*', // Populate all relations for Strapi v5
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
    populate: '*', // Populate all relations for Strapi v5
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
  // Handle both v4 (with attributes) and v5 (direct properties) formats
  const data = content.attributes || content;
  const currentLocale = data.locale;
  
  if (currentLocale === targetLocale) {
    return data.slug || null;
  }
  
  // Handle localizations in both formats
  const localizations = data.localizations;
  if (localizations) {
    // v4 format: { data: [...] }
    const locs = Array.isArray(localizations) ? localizations : localizations.data || [];
    const localization = locs.find((loc: any) => {
      const locData = loc.attributes || loc;
      return locData.locale === targetLocale;
    });
    
    if (localization) {
      const locData = localization.attributes || localization;
      return (locData && typeof locData === 'object' && 'slug' in locData) ? (locData.slug ?? null) : null;
    }
  }
  
  return null;
}

/**
 * Check if Strapi is available
 */
export async function isStrapiAvailable(): Promise<boolean> {
  try {
    // SSRF protection: Validate Strapi URL before making request
    if (!isSafeUrl(STRAPI_URL)) {
      return false;
    }

    // Try to fetch articles endpoint to verify Strapi is running
    const response = await fetch(`${STRAPI_URL}/api/articles?pagination[limit]=1`, {
      method: 'GET',
      headers: getHeaders(),
      next: { revalidate: 300 }, // Check every 5 minutes
    });
    return response.ok;
  } catch {
    return false;
  }
}

