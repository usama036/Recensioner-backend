// "use strict";
// const readingTime = require("reading-time");
// /**
//  * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
//  * to customize this model
//  */
// module.exports = {
//   async beforeCreate(event) {
//     // const { data, where, select, populate } = event.params;
//     const { data } = event.params;
//     const { post, summary } = data;
//     if (post && post?.length > 0) {
//       data.rawPost = post;
//       data.readingTime =
//         readingTime(post, { wordsPerMinute: 600 })?.text || null;
//     }
//     if (summary && summary?.length > 0) {
//       data.rawSummary = summary;
//     }
//   },
//   async beforeUpdate(event) {
//     const { data } = event.params;
//     const { post, summary } = data;
//     if (post && post?.length > 0) {
//       data.rawPost = post;
//       data.readingTime =
//         readingTime(post, { wordsPerMinute: 600 })?.text || null;
//     }
//     if (summary && summary?.length > 0) {
//       data.rawSummary = summary;
//     }
//   },
// };
