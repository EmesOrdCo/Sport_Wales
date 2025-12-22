import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sport.wales';
  const lastModified = new Date();

  // Define all pages with both language versions
  const pages = [
    '',           // Homepage
    '/about',     // About page
    '/news',      // News page
    '/contact',   // Contact page
    '/funding',   // Funding page
    '/search',    // Search page
  ];

  // Generate sitemap entries for both languages
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // English pages
  pages.forEach((page) => {
    sitemapEntries.push({
      url: `${baseUrl}/en${page}`,
      lastModified,
      changeFrequency: page === '' ? 'daily' : 'weekly',
      priority: page === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en${page}`,
          cy: `${baseUrl}/cy${page}`,
        },
      },
    });
  });

  // Welsh pages
  pages.forEach((page) => {
    sitemapEntries.push({
      url: `${baseUrl}/cy${page}`,
      lastModified,
      changeFrequency: page === '' ? 'daily' : 'weekly',
      priority: page === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en${page}`,
          cy: `${baseUrl}/cy${page}`,
        },
      },
    });
  });

  return sitemapEntries;
}

