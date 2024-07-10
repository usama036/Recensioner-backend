"use strict";

/**
 *  blog-post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::blog-post.blog-post');

const uid = "api::blog-post.blog-post";

// see @urbandale's post for context: https://forum.strapi.io/t/strapi-v4-populate-media-and-dynamiczones-from-components/12670/26
const components = {
  featuredImage: true,
  writer: {
    populate: {
      image: true,
    },
  },
  categories: true,
  seo: true,

  //   Image: true, // get data for media item field called "Image"
  //   Content: {
  //     // a dynamic zone with different components,
  //     // and those components might have some repeatable sub-component too
  //     // We only seem to need to add the sub-components...
  //     populate: {
  //       Image: true, // media field called "Image"
  //       Buttons: {
  //         // repeatable sub-component called "Buttons" used in a dynamic zone component
  //         populate: {
  //           page: true, // the Button component has a relation to a page item, so populate that...
  //         },
  //       },
  //       Icons: true, // another repeatable sub-component used in a dynamic zone component
  //     },
  //   },
};

module.exports = createCoreController(uid);
//   ({ strapi }) => {
//   return {
//     async find(ctx) {
//       // overwrite default populate=* functionality
//       if (ctx.query.populate === "*") {
//         console.log("runnnnn");
//         const entity = await strapi.entityService.findMany(uid, {
//           ...ctx.query,
//           populate: components,
//         });
//         const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

//         return this.transformResponse(sanitizedEntity);
//       }
//       // maintain default functionality for all other request
//       return super.find(ctx);
//     },
//     async findOne(ctx) {
//       const { id } = ctx.request.params;

//       if (ctx.query.populate === "*") {
//         const entity = await strapi.entityService.findOne(uid, id, {
//           ...ctx.query,
//           populate: components,
//         });
//         const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

//         return this.transformResponse(sanitizedEntity);
//       }

//       return super.findOne(ctx);
//     },
//   };
// });
