'use strict';

/**
 * barcode service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::barcode.barcode');
