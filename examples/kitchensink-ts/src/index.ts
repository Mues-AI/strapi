import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  //register(/* { strapi }: { strapi: Core.Strapi } */) {},
  register({ strapi }: { strapi: Core.Strapi }) {
    // Log all requests
    strapi.server.use(async (ctx, next) => {
      // Log request
      console.log(`[REQUEST] ${ctx.method} ${ctx.url}`);

      // Log request headers related to Mues
      const muesHeaders = Object.keys(ctx.request.headers)
        .filter((key) => key.toLowerCase().includes('mues'))
        .reduce((obj, key) => {
          obj[key] = ctx.request.headers[key];
          return obj;
        }, {});

      if (Object.keys(muesHeaders).length > 0) {
        console.log('[MUES HEADERS]', muesHeaders);
      }

      // Log request body if it's related to Mues
      if (
        ctx.request.body &&
        (ctx.url.toLowerCase().includes('mues') ||
          JSON.stringify(ctx.request.body).toLowerCase().includes('mues'))
      ) {
        console.log('[MUES REQUEST BODY]', ctx.request.body);
      }

      // Continue with the request
      await next();

      // Log response status
      console.log(`[RESPONSE] ${ctx.method} ${ctx.url} - ${ctx.status}`);

      // Log response body if it's related to Mues
      if (
        ctx.body &&
        (ctx.url.toLowerCase().includes('mues') ||
          JSON.stringify(ctx.body).toLowerCase().includes('mues'))
      ) {
        console.log('[MUES RESPONSE BODY]', ctx.body);
      }
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};
