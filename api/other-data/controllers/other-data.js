'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
const axios = require('axios');
const client = require('@mailchimp/mailchimp_marketing');

client.setConfig({
  apiKey: "3fc99ecfb672a8deffece980f971fad1-us1",
  server: "us1",
});
const list_id = "5a272ca50f"
module.exports = {
  async emailMarketing(ctx) {
    try{
      const response = await client.lists.addListMember(list_id, {
        email_address: ctx.query.email,
        status: "subscribed",
        tags: ['invoblox.com']
        // status: "pending",
      });
      console.log(response);
      return response
    }
    catch(err){
      console.log("Error: ", err);
      return  err
    }
  }
};
