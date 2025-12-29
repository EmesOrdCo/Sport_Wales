export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::rateLimit',
    config: {
      interval: 15 * 60 * 1000, // 15 minutes
      timeWait: 15 * 60 * 1000, // 15 minutes
      max: 5, // 5 requests per interval
      // Apply rate limiting to admin authentication endpoints
      skip: (request: any) => {
        // Skip rate limiting for non-auth endpoints
        return !request.url.includes('/admin/auth');
      },
    },
  },
  {
    name: 'global::auth-logging',
    config: {
      enabled: true,
    },
  },
];
