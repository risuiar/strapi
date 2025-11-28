module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'global::root-redirect',
    config: {},
  },
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
