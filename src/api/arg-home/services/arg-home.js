'use strict';

/**
 * arg-home service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::arg-home.arg-home');
