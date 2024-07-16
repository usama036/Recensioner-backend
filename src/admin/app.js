import invobloxLogo from "./extensions/logo.svg";

import './custom.css';

const config = {
  // Replace the Strapi logo in auth (login) views
  auth: {
    logo:  invobloxLogo,
  },
  // Replace the favicon
  head: {
    favicon: invobloxLogo,
  },
  // Replace the Strapi logo in the main navigation
  menu: {
    logo: invobloxLogo,
  },
  // Extend the translations
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title":"Recensioner Dashboard",
      "app.components.LeftMenu.navbrand.workplace":"Welcome to Recensioner App",


      "Auth.form.welcome.subtitle": "Log in to your Recensioner App account",
      "Auth.form.welcome.title":" Welcome to Recensioner App",
      "Settings.permissions.users.listview.header.subtitle":
        "All the users who have access to the local admin panel"
    },
    // fr: {
    //     'Auth.form.email.label': 'test',
    //     Users: 'Utilisateurs',
    //     City: 'CITY (FRENCH)',
    //     // Customize the label of the Content Manager table.
    //     Id: 'ID french',
    //   },
  },
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
