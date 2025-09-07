export default ({ env }) => [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "script-src": [
            "'self'",
            "https://76548850.mues-ai-script.pages.dev",
            "https://mues-ai-script.pages.dev",
            "https://mues.ai",
            "http://localhost:4173",
            "http://localhost:5173",
          ],
          "style-src": [
            "'self'",
            "https://mues.ai",
            "http://localhost:4173",
            "http://localhost:5173",
            "'unsafe-inline'",
          ],
          "img-src": [
            "'self'",
            "data:",
            "https://mues.ai",
            "https://ejzmwuipqrdcuupdxamd.supabase.co",
            "http://localhost:4173",
            "http://localhost:5173",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

// connect-src 'self' https: 'self' http: https: ws:;
// script-src 'self' https://76548850.mues-ai-script.pages.dev http://localhost:4173 'self' 'unsafe-inline';
// img-src 'self' data: blob: https://market-assets.strapi.io;media-src 'self' data: blob:;
// default-src 'self';
// base-uri 'self';
// font-src 'self' https: data:;form-action 'self';
// frame-ancestors 'self';object-src 'none';
// script-src-attr 'none';
// style-src 'self' https: 'unsafe-inline'
