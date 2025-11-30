module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'global::root-redirect',
    config: {},
  },
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            's3.eu-north-1.amazonaws.com',
            '*.s3.eu-north-1.amazonaws.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            's3.eu-north-1.amazonaws.com',
            '*.s3.eu-north-1.amazonaws.com',
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
  'strapi::favicon',
  'strapi::public',
];
