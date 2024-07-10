// "use strict";
// /**
//  * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
//  * to customize this model
//  */
// module.exports = {
//   async beforeCreate(event) {
//     const { data } = event.params;
//     const { description } = data;
//     if (description && description?.length > 0) {
//       data.rawDesc = description;
//     }
//   },
//   async beforeUpdate(event) {
//     const { data } = event.params;
//     const { description } = data;
//     if (description && description?.length > 0) {
//       data.rawDesc = description;
//     }
//   },
// };
