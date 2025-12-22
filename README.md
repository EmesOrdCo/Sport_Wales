# Sport Wales Website

A modern, bilingual (Welsh/English) corporate website for Sport Wales built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Bilingual Support**: Full Welsh (Cymraeg) and English language support with equal prominence
- **WCAG 2.2 AA Accessibility**: Fully accessible with keyboard navigation, screen reader support, and proper ARIA labels
- **Mobile-First Responsive Design**: Works seamlessly from 320px to 4K+ displays
- **SEO Optimized**: Complete SEO implementation with meta tags, XML sitemaps, and structured data (Schema.org)
- **Modern Design**: Contemporary, distinctive design with Sport Wales branding
- **CMS Ready**: Integration with Strapi headless CMS for content management

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository:
```bash
cd sport-wales-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
sport-wales-website/
├── public/                 # Static assets
│   ├── robots.txt         # Search engine instructions
│   ├── manifest.json      # PWA manifest
│   └── *.svg              # Logo and icon files
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── [locale]/      # Localized pages (en/cy)
│   │   │   ├── about/     # About page
│   │   │   ├── contact/   # Contact page
│   │   │   ├── funding/   # Funding page
│   │   │   ├── news/      # News page
│   │   │   ├── search/    # Search page
│   │   │   ├── layout.tsx # Root layout with header/footer
│   │   │   └── page.tsx   # Homepage
│   │   ├── globals.css    # Global styles and design system
│   │   └── sitemap.ts     # Dynamic XML sitemap generation
│   ├── components/
│   │   ├── layout/        # Header, Footer, Navigation
│   │   ├── sections/      # Page sections (Hero, News, etc.)
│   │   ├── seo/           # SEO components (StructuredData)
│   │   └── ui/            # Reusable UI components
│   ├── i18n/              # Internationalization configuration
│   ├── lib/               # Utility functions
│   │   ├── strapi.ts      # Strapi CMS integration
│   │   └── content.ts     # Content provider abstraction
│   └── middleware.ts      # Locale detection and routing
├── messages/              # Translation files
│   ├── en.json           # English translations
│   └── cy.json           # Welsh translations
└── package.json
```

## 🌐 Bilingual URLs

The website uses language prefixes in URLs:

- English: `/en/about`, `/en/news`, `/en/funding`
- Welsh: `/cy/amdanom`, `/cy/newyddion`, `/cy/cyllid`

Language switching is available via the header toggle and maintains page context.

## 🎨 Design System

The design system is defined in `src/app/globals.css` using CSS custom properties:

### Colors
- Primary Red: `#E03A3E`
- Primary Gold: `#F5B335`
- Primary Navy: `#2A4B6E`
- Primary Teal: `#1E6B7D`

### Typography
- Headings: Playfair Display (serif)
- Body: Outfit (sans-serif)

### Usage
```css
/* Using CSS variables */
.element {
  color: var(--color-primary-red);
  font-family: var(--font-family-heading);
}

/* Using Tailwind classes (configured) */
<div className="text-sw-red font-heading">
```

## 📱 Responsive Breakpoints

- Mobile: 320px - 639px
- Tablet: 640px - 1023px
- Desktop: 1024px - 1279px
- Large Desktop: 1280px+

## ♿ Accessibility

This website meets WCAG 2.2 Level AA standards:

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Focus Indicators**: Visible focus states on all interactive elements
- **Skip Links**: "Skip to main content" link for screen reader users

## 🔍 SEO Features

- Dynamic meta tags per page
- Open Graph and Twitter Card support
- XML sitemap at `/sitemap.xml`
- robots.txt at `/robots.txt`
- Structured data (Schema.org JSON-LD):
  - Organization
  - Website with SearchAction
  - Breadcrumbs
  - Articles
  - Funding/Government Services

## 📝 Content Management (Strapi)

The website is designed to integrate with Strapi CMS. To set up:

### 1. Install Strapi

```bash
# Create a new Strapi project
npx create-strapi-app@latest strapi-cms --quickstart
```

### 2. Configure Content Types

Create the following content types in Strapi:

#### Articles
- title (Text)
- slug (UID, based on title)
- content (Rich Text)
- excerpt (Text)
- featuredImage (Media)
- publishedAt (DateTime)
- locale (Enumeration: en, cy)

#### Funding Opportunities
- title (Text)
- slug (UID)
- description (Text)
- content (Rich Text)
- maxAmount (Text)
- priority (Number)
- locale (Enumeration: en, cy)

#### Pages
- title (Text)
- slug (UID)
- content (Rich Text)
- seo (Component: SEO fields)
- locale (Enumeration: en, cy)

### 3. Enable i18n

1. Go to Settings > Internationalization
2. Add Welsh (cy) locale
3. Enable i18n for each content type

### 4. Configure API Access

1. Go to Settings > API Tokens
2. Create a new token with read access
3. Add to `.env.local`:

```env
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-api-token
```

### 5. Using the Content API

The website automatically falls back to mock data when Strapi is unavailable. To fetch CMS content:

```typescript
import { getNewsArticles, getFundingOpportunities } from '@/lib/content';

// In a server component
const { articles, total } = await getNewsArticles('en', 1, 10);
const funding = await getFundingOpportunities('cy');
```

## 🛠 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
```

### Adding a New Page

1. Create a folder in `src/app/[locale]/your-page/`
2. Add `page.tsx` with your component
3. Add translations to `messages/en.json` and `messages/cy.json`
4. Update navigation in `Header.tsx` and `Footer.tsx`
5. Add to sitemap in `src/app/sitemap.ts`

### Adding Translations

1. Add keys to `messages/en.json`:
```json
{
  "yourSection": {
    "title": "Your Title",
    "description": "Your description"
  }
}
```

2. Add Welsh translations to `messages/cy.json`:
```json
{
  "yourSection": {
    "title": "Eich Teitl",
    "description": "Eich disgrifiad"
  }
}
```

3. Use in components:
```typescript
const t = await getTranslations({ locale, namespace: 'yourSection' });
return <h1>{t('title')}</h1>;
```

## 🚀 Deployment

### Build

```bash
npm run build
```

### Environment Variables

Ensure all production environment variables are set:

- `STRAPI_URL` - Production Strapi URL
- `STRAPI_API_TOKEN` - Production API token
- `NEXT_PUBLIC_SITE_URL` - Production website URL

### Hosting Requirements

Per the tender requirements:
- UK-based hosting
- ISO 27001 certified
- HTTPS enabled
- CDN recommended for performance

Recommended platforms:
- Vercel (with UK region)
- AWS (London region)
- Azure (UK South)

## 📄 License

Copyright © 2025 Sport Wales. All rights reserved.

## 📞 Support

For technical support, contact the development team.

For content queries, contact info@sport.wales.
