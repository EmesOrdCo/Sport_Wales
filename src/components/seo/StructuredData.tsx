'use client';

import Script from 'next/script';

interface OrganizationSchemaProps {
  locale: string;
}

export function OrganizationSchema({ locale }: OrganizationSchemaProps) {
  const isWelsh = locale === 'cy';
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentOrganization',
    name: isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales',
    alternateName: isWelsh ? 'Sport Wales' : 'Chwaraeon Cymru',
    url: 'https://www.sport.wales',
    logo: 'https://www.sport.wales/logo.svg',
    description: isWelsh 
      ? 'Ni yw\'r sefydliad cenedlaethol sy\'n gyfrifol am ddatblygu a hyrwyddo chwaraeon a gweithgarwch corfforol yng Nghymru.'
      : 'We are the national organisation responsible for developing and promoting sport and physical activity in Wales.',
    foundingDate: '1972',
    areaServed: {
      '@type': 'Country',
      name: 'Wales',
      sameAs: 'https://en.wikipedia.org/wiki/Wales',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sophia Gardens',
      addressLocality: 'Cardiff',
      addressRegion: 'Wales',
      postalCode: 'CF11 9SW',
      addressCountry: 'GB',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+44-300-300-3111',
        contactType: 'customer service',
        availableLanguage: ['English', 'Welsh'],
      },
    ],
    sameAs: [
      'https://www.facebook.com/sportwales',
      'https://twitter.com/sportwales',
      'https://www.instagram.com/sport_wales',
      'https://www.linkedin.com/company/sport-wales',
      'https://www.youtube.com/sportwales',
    ],
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

interface WebsiteSchemaProps {
  locale: string;
}

export function WebsiteSchema({ locale }: WebsiteSchemaProps) {
  const isWelsh = locale === 'cy';
  
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: isWelsh ? 'Chwaraeon Cymru' : 'Sport Wales',
    url: `https://www.sport.wales/${locale}`,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `https://www.sport.wales/${locale}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: isWelsh ? 'cy' : 'en',
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  locale: string;
}

export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = 'Sport Wales',
  locale,
}: ArticleSchemaProps) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: author,
      url: 'https://www.sport.wales',
    },
    publisher: {
      '@type': 'Organization',
      name: locale === 'cy' ? 'Chwaraeon Cymru' : 'Sport Wales',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.sport.wales/logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.sport.wales',
    },
    inLanguage: locale === 'cy' ? 'cy' : 'en',
  };

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
}

interface FundingSchemaProps {
  name: string;
  description: string;
  maxAmount?: string;
  locale: string;
}

export function FundingSchema({
  name,
  description,
  maxAmount,
  locale,
}: FundingSchemaProps) {
  const fundingSchema = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentService',
    name,
    description,
    provider: {
      '@type': 'GovernmentOrganization',
      name: locale === 'cy' ? 'Chwaraeon Cymru' : 'Sport Wales',
      url: 'https://www.sport.wales',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Wales',
    },
    ...(maxAmount && {
      offers: {
        '@type': 'Offer',
        price: maxAmount,
        priceCurrency: 'GBP',
      },
    }),
  };

  return (
    <Script
      id="funding-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(fundingSchema) }}
    />
  );
}

interface FAQSchemaProps {
  questions: Array<{ question: string; answer: string }>;
}

export function FAQSchema({ questions }: FAQSchemaProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

interface EventSchemaProps {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: {
    name: string;
    address: string;
  };
  image?: string;
  locale: string;
}

export function EventSchema({
  name,
  description,
  startDate,
  endDate,
  location,
  image,
  locale,
}: EventSchemaProps) {
  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name,
    description,
    startDate,
    endDate: endDate || startDate,
    location: {
      '@type': 'Place',
      name: location.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: location.address,
        addressCountry: 'GB',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: locale === 'cy' ? 'Chwaraeon Cymru' : 'Sport Wales',
      url: 'https://www.sport.wales',
    },
    ...(image && { image }),
    inLanguage: locale === 'cy' ? 'cy' : 'en',
  };

  return (
    <Script
      id="event-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
    />
  );
}

