'use strict';

/**
 * arg-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::arg-blog.arg-blog');
