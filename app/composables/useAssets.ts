import nuRenaissance from "@/assets/images/project-thumbnails/nu-renaissance-thumbnail-min.png";
import omnifood from "@/assets/images/project-thumbnails/omnifood-thumbnail-min.png";
import natours from "@/assets/images/project-thumbnails/natours-thumbnail-min.png";
import trillo from "@/assets/images/project-thumbnails/trillo-thumbnail-min.png";
import nexter from "@/assets/images/project-thumbnails/nexter-thumbnail-min.png";
import candyMuseum from "@/assets/images/project-thumbnails/candy-museum-thumbnail-min.png";
import phono from "@/assets/images/project-thumbnails/phono-thumbnail-min.png";
import grandmaSweets from "@/assets/images/project-thumbnails/grandma-sweets-thumbnail-min.png";

import colourGame from "@/assets/images/project-thumbnails/colourgame-app-thumbnail-min.png";
import forkify from "@/assets/images/project-thumbnails/forkify-app-thumbnail-min.png";
import pigGame from "@/assets/images/project-thumbnails/piggame-thumbnail-min.png";
import taskList from "@/assets/images/project-thumbnails/tasklist-app-thumbnail-min.png";
import astroTime from "@/assets/images/project-thumbnails/astrotime-thumbnail-min.png";
import passowrdGenerator from "@/assets/images/project-thumbnails/password-generator-app-thumbnail-min.png";
import budgety from "@/assets/images/project-thumbnails/budgety-app-thumbnail-min.png";
import bookList from "@/assets/images/project-thumbnails/booklist-app-thumbnail-min.png";

import winprecars from "@/assets/images/project-thumbnails/winprecars-thumbnail.png";
import blog from "@/assets/images/project-thumbnails/blog-app-thumbnail.png";
import uiCollection from "@/assets/images/project-thumbnails/ui-collection-thumbnail.png";
import musicApp from "@/assets/images/project-thumbnails/vue-music-app-thumbnail.png";
import pokedex from "@/assets/images/project-thumbnails/pokedex-pikachu.png";
import planets from "@/assets/images/project-thumbnails/planets-site-thumbnail.png";

import dadJokes from "@/assets/images/project-thumbnails/dadjokes-react-thumbnail.png";
import lightsOut from "@/assets/images/project-thumbnails/lights-out-thumbnail.png";

import archStudio from "@/assets/images/project-thumbnails/arch-studio-thumbnail.png";
import jobsDashboard from "@/assets/images/project-thumbnails/jobs-dashboard-ui-thumbnail.png";
import whitneyVanessa from "@/assets/images/project-thumbnails/whitney-vanessa-thumbnail.png";

type Thumbnail = {
  img: string;
  siteLink: string;
  githubLink: string;
  isFavourite: boolean;
};

const thumbnailCSS: Array<Thumbnail> = [
  {
    img: nuRenaissance,
    siteLink: " https://gilberttsurwa-nurenaissance.netlify.app",
    githubLink: "https://github.com/GillyRabutTsurwa/gilberttsurwa-nu-renaissance-website",
    isFavourite: false,
  },
  {
    img: omnifood,
    siteLink: "https://omnifood-gilberttsurwa-jonas.netlify.com/",
    githubLink: "https://github.com/GillyRabutTsurwa/omnifood-gilberttsurwa-jonas",
    isFavourite: true,
  },
  {
    img: natours,
    siteLink: "https://natours-gilberttsurwa-jonas.netlify.com",
    githubLink: "https://github.com/GillyRabutTsurwa/natours-jonas",
    isFavourite: true,
  },
  {
    img: trillo,
    siteLink: "https://trillo-gilberttsurwa-jonas.netlify.com/",
    githubLink: "https://github.com/GillyRabutTsurwa/trillo-jonas",
    isFavourite: false,
  },
  {
    img: nexter,
    siteLink: "https://nexter-gilberttsurwa-jonas.netlify.app",
    githubLink: "https://github.com/GillyRabutTsurwa/nexter-jonas",
    isFavourite: true,
  },
  {
    img: candyMuseum,
    siteLink: "https://candymuseum-gilberttsurwa-colt.netlify.app",
    githubLink: "https://github.com/GillyRabutTsurwa/candymuseum-colt",
    isFavourite: false,
  },
  {
    img: phono,
    siteLink: "https://first-deployed-website.netlify.com",
    githubLink: "https://github.com/GillyRabutTsurwa/phono-headphones-website",
    isFavourite: false,
  },
  {
    img: grandmaSweets,
    siteLink: "https://grandmassweets-gilberttsurwa-codeaddict.netlify.com",
    githubLink: "https://github.com/GillyRabutTsurwa/grandma-sweets-codeaddict",
    isFavourite: false,
  },
];
// =====================================
const thumbnailJavascript: Array<Thumbnail> = [
  {
    img: colourGame,
    siteLink: "https://colourgame-gilberttsurwa-colt.netlify.com",
    githubLink: "https://github.com/GillyRabutTsurwa/colourgame-app-colt",
    isFavourite: true,
  },
  {
    img: forkify,
    siteLink: "https://gilberttsurwaforkifyproject.netlify.app/",
    githubLink: "https://github.com/GillyRabutTsurwa/forkify-app-jonas",
    isFavourite: true,
  },
  {
    img: pigGame,
    siteLink: "https://piggame-gilberttsurwa-jonas.netlify.com/",
    githubLink: "https://github.com/GillyRabutTsurwa/piggame-app-jonas",
    isFavourite: false,
  },
  {
    img: taskList,
    siteLink: "https://tasklist-gilberttsurwa-brad.netlify.com",
    githubLink: "https://github.com/GillyRabutTsurwa/tasklist-app-brad",
    isFavourite: false,
  },
  {
    img: astroTime,
    siteLink: "https://astroclock-gilbertrabuttsurwa.netlify.com/",
    githubLink: "https://github.com/GillyRabutTsurwa/astroboy-clock",
    isFavourite: false,
  },
  {
    img: passowrdGenerator,
    siteLink: "https://passwordgenerator-gilberttsurwa-brad.netlify.com",
    githubLink: "https://github.com/GillyRabutTsurwa/password-generator-brad",
    isFavourite: false,
  },
  {
    img: budgety,
    siteLink: "https://budgety-gilberttsurwa-jonas.netlify.com",
    githubLink: "https://github.com/GillyRabutTsurwa/budgety-app-jonas",
    isFavourite: false,
  },
  {
    img: bookList,
    siteLink: "https://booklist-gilberttsurwa-brad.netlify.com",
    githubLink: "https://github.com/GillyRabutTsurwa/booklist-gilberttsurwa-brad",
    isFavourite: true,
  },
];
// =====================================
const thumbnailVue: Array<Thumbnail> = [
  {
    img: winprecars,
    siteLink: "https://winprecars.com",
    githubLink: "https://github.com/GillyRabutTsurwa/winprecars",
    isFavourite: false,
  },
  {
    img: blog,
    siteLink: "https://gilbertrabuttsurwa.blog",
    githubLink: "https://github.com/GillyRabutTsurwa/blog",
    isFavourite: false,
  },
  {
    img: uiCollection,
    siteLink: "https://ui-components-collection-gillyrabuttsurwa.vercel.app",
    githubLink: "https://github.com/GillyRabutTsurwa/ui-components-collection",
    isFavourite: false,
  },
  {
    img: musicApp,
    siteLink: "https://gilberttsurwa-vue-music-player.netlify.app/",
    githubLink: "https://github.com/GillyRabutTsurwa/vue-music-app",
    isFavourite: false,
  },
  {
    img: pokedex,
    siteLink: "https://gilberttsurwa-pokedex-legacy.netlify.app/",
    githubLink: "https://github.com/GillyRabutTsurwa/pokedex-legacy",
    isFavourite: true,
  },
  {
    img: planets,
    siteLink: "https://planets-site-git-master-gillyrabuttsurwa.vercel.app/",
    githubLink: "https://github.com/GillyRabutTsurwa/planets-site",
    isFavourite: true,
  },
];
// =====================================
const thumbnailReact: Array<Thumbnail> = [
  {
    img: dadJokes,
    siteLink: "https://gilberttsurwa-dadjokes-react.netlify.app/",
    githubLink: "https://github.com/GillyRabutTsurwa/dadjokes-app-react",
    isFavourite: true,
  },
  {
    img: lightsOut,
    siteLink: "https://gilberttsurwa-lightsout.vercel.app/",
    githubLink: "https://github.com/GillyRabutTsurwa/lights-out-game",
    isFavourite: true,
  },
];
// =====================================
const thumbnailSvelte: Array<Thumbnail> = [
  {
    img: archStudio,
    siteLink: "https://gilberttsurwa-arch-studio.vercel.app/",
    githubLink: "https://github.com/GillyRabutTsurwa/arch-studio-website",
    isFavourite: true,
  },
  {
    img: jobsDashboard,
    siteLink: "https://jobs-dashboard-nu.vercel.app/",
    githubLink: "https://github.com/GillyRabutTsurwa/jobs-dashboard",
    isFavourite: true,
  },
  {
    img: whitneyVanessa,
    siteLink: "https://whitneyvanessa.com",
    githubLink: "https://github.com/GillyRabutTsurwa/whitney-vanessa-blog",
    isFavourite: false,
  },
];

export const useAssets = () => {
  const assets = {
    css: thumbnailCSS,
    javascript: thumbnailJavascript,
    vue: thumbnailVue,
    svelte: thumbnailSvelte,
    react: thumbnailReact,
  };

  return {
    assets: assets,
  };
};
