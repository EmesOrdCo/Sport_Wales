import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Welsh and English with equal prominence
  locales: ['en', 'cy'],

  // Default to English, but both languages have equal status
  defaultLocale: 'en',

  // Use pathname-based routing: /en/... and /cy/...
  localePrefix: 'always',

  // Locale-specific pathnames for SEO
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      cy: '/amdanom'
    },
    '/about/what-is-sport-wales': {
      en: '/about/what-is-sport-wales',
      cy: '/amdanom/beth-yw-chwaraeon-cymru'
    },
    '/about/vision-and-strategy': {
      en: '/about/vision-and-strategy',
      cy: '/amdanom/gweledigaeth-a-strategaeth'
    },
    '/news': {
      en: '/news',
      cy: '/newyddion'
    },
    '/funding': {
      en: '/funding',
      cy: '/cyllid'
    },
    '/funding/be-active-wales': {
      en: '/funding/be-active-wales',
      cy: '/cyllid/cymru-actif'
    },
    '/contact': {
      en: '/contact',
      cy: '/cysylltu'
    },
    '/search': {
      en: '/search',
      cy: '/chwilio'
    },
    '/community-sport': {
      en: '/community-sport',
      cy: '/chwaraeon-cymunedol'
    },
    '/sport-in-schools': {
      en: '/sport-in-schools',
      cy: '/chwaraeon-mewn-ysgolion'
    },
    '/partners': {
      en: '/partners',
      cy: '/partneriaid'
    },
    '/performance-sport': {
      en: '/performance-sport',
      cy: '/chwaraeon-perfformiad'
    },
    '/research': {
      en: '/research',
      cy: '/ymchwil'
    },
    '/policies': {
      en: '/policies',
      cy: '/polisiau'
    },
    '/national-centre': {
      en: '/national-centre',
      cy: '/canolfan-genedlaethol'
    },
    '/support-for-athletes': {
      en: '/support-for-athletes',
      cy: '/cefnogaeth-i-athletwyr'
    },
    '/women-girls': {
      en: '/women-girls',
      cy: '/merched-a-merched-ifanc'
    },
    '/education-and-teachers': {
      en: '/education-and-teachers',
      cy: '/addysg-ac-athrawon'
    },
    '/club-support': {
      en: '/club-support',
      cy: '/club-support'
    },
    '/governance': {
      en: '/governance',
      cy: '/governance'
    },
    '/facilities': {
      en: '/facilities',
      cy: '/facilities'
    },
    '/institute': {
      en: '/institute',
      cy: '/institute'
    },
    '/clip': {
      en: '/clip',
      cy: '/clip'
    },
    '/careers': {
      en: '/careers',
      cy: '/careers'
    },
    '/national-lottery': {
      en: '/national-lottery',
      cy: '/national-lottery'
    },
    '/accessibility': {
      en: '/accessibility',
      cy: '/hygyrchedd'
    },
    '/privacy-policy': {
      en: '/privacy-policy',
      cy: '/polisi-preifatrwydd'
    },
    '/cookie-policy': {
      en: '/cookie-policy',
      cy: '/polisi-cwcis'
    },
    '/terms-conditions': {
      en: '/terms-conditions',
      cy: '/telerau-ac-amodau'
    },
    '/acceptable-use': {
      en: '/acceptable-use',
      cy: '/defnydd-derbyniol'
    },
    '/freedom-of-information': {
      en: '/freedom-of-information',
      cy: '/rhyddid-gwybodaeth'
    },
    '/vacancies': {
      en: '/vacancies',
      cy: '/swyddi-gwag'
    },
    '/clip/communications-and-digital': {
      en: '/clip/communications-and-digital',
      cy: '/clip/cyfathrebu-a-digidol'
    },
    '/clip/login': {
      en: '/clip/login',
      cy: '/clip/mewngofnodi'
    },
    '/vision': {
      en: '/vision',
      cy: '/gweledigaeth'
    }
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

