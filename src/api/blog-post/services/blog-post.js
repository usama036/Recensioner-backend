"use strict";

/**
 * blog-post service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::blog-post.blog-post");
// ({ strapi }) =>  ({
//    async find(ctx) {
//     // return strapi.entityService.findOne('api::restaurant.restaurant', entityId, this.getFetchParams(params));
//     return  await strapi.entityService.findMany('api::blog-post.blog-post', {
//   populate: [ 'writer', 'writer.image', 'categories', 'seo'],
// });
//   },

//   async findOne(entityId, params = {}) {
//     // return strapi.entityService.findOne('api::restaurant.restaurant', entityId, this.getFetchParams(params));
//     return  await strapi.entityService.findOne('api::blog-post.blog-post', entityId, {
//   populate: [ 'writer', 'writer.image', 'categories', 'seo'],
// });
//   }
// }));
