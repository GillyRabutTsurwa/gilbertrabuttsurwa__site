import { readable } from "svelte/store";

import nuRenaissance from "$lib/images/project-thumbnails/nu-renaissance-thumbnail-min.png";
import omnifood from "$lib/images/project-thumbnails/omnifood-thumbnail-min.png";
import natours from "$lib/images/project-thumbnails/natours-thumbnail-min.png";
import trillo from "$lib/images/project-thumbnails/trillo-thumbnail-min.png";
import nexter from "$lib/images/project-thumbnails/nexter-thumbnail-min.png";
import candyMuseum from "$lib/images/project-thumbnails/candy-museum-thumbnail-min.png";
import phono from "$lib/images/project-thumbnails/phono-thumbnail-min.png";
import grandmaSweets from "$lib/images/project-thumbnails/grandma-sweets-thumbnail-min.png";

import colourGame from "$lib/images/project-thumbnails/colourgame-app-thumbnail-min.png";
import forkify from "$lib/images/project-thumbnails/forkify-app-thumbnail-min.png";
import pigGame from "$lib/images/project-thumbnails/piggame-thumbnail-min.png";
import taskList from "$lib/images/project-thumbnails/tasklist-app-thumbnail-min.png";
import astroTime from "$lib/images/project-thumbnails/astrotime-thumbnail-min.png";
import passowrdGenerator from "$lib/images/project-thumbnails/password-generator-app-thumbnail-min.png";
import budgety from "$lib/images/project-thumbnails/budgety-app-thumbnail-min.png";
import bookList from "$lib/images/project-thumbnails/booklist-app-thumbnail-min.png";

import pokedex from "$lib/images/project-thumbnails/pokedex-pikachu.png";
import musicApp from "$lib/images/project-thumbnails/vue-music-app-thumbnail.png";
import dadJokes from "$lib/images/project-thumbnails/baba-jokes-app-thumbnail.png";
import blog from "$lib/images/project-thumbnails/blog-app-thumbnail.png";

import archStudio from "$lib/images/project-thumbnails/arch-studio-thumbnail.png";
import dadJokesReact from "$lib/images/project-thumbnails/dadjokes-react-thumbnail.png";

const thumbnailCSS = [
  {
    img: nuRenaissance,
    siteLink: " https://gilberttsurwa-nurenaissance.netlify.app",
    githubLink: "https://github.com/GillyRabutTsurwa/gilberttsurwa-nu-renaissance-website",
  },
  {
    img: omnifood,
    siteLink: "https://omnifood-gilberttsurwa-jonas.netlify.com/",
    githubLink: "https://github.com/GillyRabutTsurwa/omnifood-gilberttsurwa-jonas",
  },
  {
    img: natours,
    siteLink: "https://natours-gilberttsurwa-jonas.netlify.com",
    githubLink: "https://github.com/GillyRabutTsurwa/natours-jonas",
  },
  {
    img: trillo,
    siteLink: "https://trillo-gilberttsurwa-jonas.netlify.com/",
    githubLink: "https://github.com/GillyRabutTsurwa/trillo-jonas",
  },
  {
    img: nexter,
    siteLink: "https://nexter-gilberttsurwa-jonas.netlify.app",
    githubLink: "https://github.com/GillyRabutTsurwa/nexter-jonas",
  },
  {
    img: candyMuseum,
    siteLink: "https://candymuseum-gilberttsurwa-colt.netlify.app",
    githubLink: "https://github.com/GillyRabutTsurwa/candymuseum-colt",
  },
  {
    img: phono,
    siteLink: "https://first-deployed-website.netlify.com",
    githubLink: "https://github.com/GillyRabutTsurwa/phono-headphones-website",
  },
  {
    img: grandmaSweets,
    siteLink: "https://grandmassweets-gilberttsurwa-codeaddict.netlify.com",
    githubLink: "https://github.com/GillyRabutTsurwa/grandma-sweets-codeaddict",
  },
];
// =====================================
const thumbnailJavascript = [
  {
    img: colourGame,
    siteLink: "https://colourgame-gilberttsurwa-colt.netlify.com",
    githubLink: "https://github.com/GillyRabutTsurwa/colourgame-app-colt",
  },
  {
    img: forkify,
    siteLink: "https://gilberttsurwaforkifyproject.netlify.app/",
    githubLink: "https://github.com/GillyRabutTsurwa/forkify-app-jonas",
  },
  {
    img: pigGame,
    siteLink: "https://piggame-gilberttsurwa-jonas.netlify.com/",
    githubLink: "https://github.com/GillyRabutTsurwa/piggame-app-jonas",
  },
  {
    img: taskList,
    siteLink: "https://tasklist-gilberttsurwa-brad.netlify.com",
    githubLink: "https://github.com/GillyRabutTsurwa/tasklist-app-brad",
  },
  {
    img: astroTime,
    siteLink: "https://astroclock-gilbertrabuttsurwa.netlify.com/",
    githubLink: "https://github.com/GillyRabutTsurwa/astroboy-clock",
  },
  {
    img: passowrdGenerator,
    siteLink: "https://passwordgenerator-gilberttsurwa-brad.netlify.com",
    githubLink: "https://github.com/GillyRabutTsurwa/password-generator-brad",
  },
  {
    img: budgety,
    siteLink: "https://budgety-gilberttsurwa-jonas.netlify.com",
    githubLink: "https://github.com/GillyRabutTsurwa/budgety-app-jonas",
  },
  {
    img: bookList,
    siteLink: "https://booklist-gilberttsurwa-brad.netlify.com",
    githubLink: "https://github.com/GillyRabutTsurwa/booklist-gilberttsurwa-brad",
  },
];
// =====================================
const thumbnailVue = [
  {
    img: pokedex,
    siteLink: "https://gilberttsurwa-pokedex-legacy.netlify.app/",
    githubLink: "https://github.com/GillyRabutTsurwa/pokedex-legacy",
  },
  {
    img: musicApp,
    siteLink: "https://gilberttsurwa-vue-music-player.netlify.app/",
    githubLink: "https://github.com/GillyRabutTsurwa/vue-music-app",
  },
  {
    img: dadJokes,
    siteLink: "https://gilberttsurwa-baba-jokes.netlify.app/",
    githubLink: "https://github.com/GillyRabutTsurwa/nuxt-with-brad-traversy",
  },
  // {
  //   img: blog,
  //   siteLink: "https://gilbertrabuttsurwa.tech",
  //   githubLink: "https://github.com/GillyRabutTsurwa/my-website",
  // },
];
// =====================================
const thumbnailSvelte = [
  {
    img: archStudio,
    siteLink: "https://gilberttsurwa-arch-studio.vercel.app/",
    githubLink: "https://github.com/GillyRabutTsurwa/arch-studio-website",
  },
  {
    img: blog,
    siteLink: "https://gilbertrabuttsurwa.tech",
    githubLink: "https://github.com/GillyRabutTsurwa/my-website",
  },
];
// =====================================
const thumbnailReact = [
  {
    img: dadJokesReact,
    siteLink: "https://gilberttsurwa-dadjokes-react.netlify.app/",
    githubLink: "https://github.com/GillyRabutTsurwa/dadjokes-app-react",
  },
];

export const assets = readable({
  css: thumbnailCSS,
  javascript: thumbnailJavascript,
  vue: thumbnailVue,
  svelte: thumbnailSvelte,
  react: thumbnailReact,
});
