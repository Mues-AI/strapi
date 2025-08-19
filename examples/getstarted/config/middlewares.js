'use strict';

const responseHandlers = require('./src/response-handlers');

module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'script-src': [
            "'self'",
            'https://76548850.mues-ai-script.pages.dev',
            'https://mues-ai-script.pages.dev',
            'https://mues.ai',
            'http://localhost:4173',
            'http://localhost:5173',
          ],
          'style-src': [
            "'self'",
            'https://mues.ai',
            'http://localhost:4173',
            'http://localhost:5173',
            "'unsafe-inline'",
          ],
          'img-src': [
            "'self'",
            'data:',
            'https://mues.ai',
            'https://ejzmwuipqrdcuupdxamd.supabase.co',
            'http://localhost:4173',
            'http://localhost:5173',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  // 'strapi::compression',
  // 'strapi::ip',
  {
    name: 'strapi::responses',
    config: {
      handlers: responseHandlers,
    },
  },
  'strapi::favicon',
  'strapi::public',
  {
    name: 'global::test-middleware',
    config: {
      foo: 'bar',
    },
  },
  {
    resolve: './src/custom/middleware.js',
    config: {},
  },
];
