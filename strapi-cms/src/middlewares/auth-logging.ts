/**
 * Authentication attempt logging middleware for Strapi
 * Logs all authentication attempts (successful and failed)
 */

export default (config: any, { strapi }: any) => {
  return async (ctx: any, next: any) => {
    // Only log authentication-related requests
    if (ctx.request.url.includes('/admin/auth')) {
      const ip = ctx.request.ip || ctx.request.headers['x-forwarded-for'] || 'unknown';
      const userAgent = ctx.request.headers['user-agent'] || 'unknown';
      const method = ctx.request.method;
      const path = ctx.request.url;

      // Log before processing
      const startTime = Date.now();

      try {
        await next();

        // Log after processing
        const success = ctx.response.status < 400;
        const userId = ctx.state?.user?.id || 'unknown';

        if (method === 'POST' && path.includes('/admin/auth')) {
          // Log authentication attempt
          strapi.log.info({
            type: success ? 'auth_success' : 'auth_failure',
            message: success
              ? `Successful authentication for user ${userId}`
              : `Failed authentication attempt from ${ip}`,
            ip,
            userAgent,
            userId: success ? userId : undefined,
            path,
            status: ctx.response.status,
            duration: Date.now() - startTime,
          });
        }
      } catch (error) {
        // Log failed authentication
        strapi.log.error({
          type: 'auth_failure',
          message: `Authentication error: ${error instanceof Error ? error.message : 'Unknown error'}`,
          ip,
          userAgent,
          path,
          error: error instanceof Error ? error.stack : String(error),
        });
        throw error;
      }
    } else {
      await next();
    }
  };
};

