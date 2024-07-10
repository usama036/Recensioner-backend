import invobloxLogo from "./extensions/logo.svg";
import invogamesLogo from "./extensions/invogamesLogo.png";
import invoteamsLogo from "./extensions/InvoTeams-icon.png";
const brands = {
  "cms.invoteams.com": {
    title: "InvoTeams Dashboard",
    workplace: "Your Remote Development Partner",
    subtitle: "Log in to your InvoTeams account",
    welcomeTitle: "Welcome to InvoTeams!",
    headerSubtitle:
      "All the users who have access to the InvoTeams admin panel",
    logo: invoteamsLogo,
  },
  "cms.invogames.com": {
    title: "invoGames Dashboard",
    workplace: "Embark on a thrilling gaming adventure with InvoGames",
    subtitle: "Log in to your invoGames account",
    welcomeTitle: "Welcome to invoGames!",
    headerSubtitle:
      "All the users who have access to the invoGames admin panel",
    logo: invogamesLogo,
  },
  "cms.invoblox.com": {
    title: "invoBlox Dashboard",
    workplace: "Blockchain Development Services",
    subtitle: "Log in to your invoBlox account",
    welcomeTitle: "Welcome to invoBlox!",
    headerSubtitle: "All the users who have access to the invoBlox admin panel",
    logo: invobloxLogo,
  },
  "localhost:1337": {
    title: "ModApk Dashboard",
    workplace: "Welcome to modapk",
    subtitle: "Log in to your local account",
    welcomeTitle: "Welcome to local!",
    headerSubtitle: "All the users who have access to the local admin panel",
    logo: invobloxLogo,
  },
};
const config = {
  // Replace the Strapi logo in auth (login) views
  auth: {
    logo: brands[window.location.host].logo,
  },
  // Replace the favicon
  head: {
    favicon: brands[window.location.host].logo,
  },
  // Replace the Strapi logo in the main navigation
  menu: {
    logo: brands[window.location.host].logo,
  },
  // Extend the translations
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title":
        brands[window.location.host].title,
      "app.components.LeftMenu.navbrand.workplace":
        brands[window.location.host].workplace,

      "Auth.form.welcome.subtitle": brands[window.location.host].subtitle,
      "Auth.form.welcome.title": brands[window.location.host].welcomeTitle,
      "Settings.permissions.users.listview.header.subtitle":
        brands[window.location.host].headerSubtitle,
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
