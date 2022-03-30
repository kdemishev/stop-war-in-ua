'use strict';

/**
 * manufactory service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::manufactory.manufactory');
