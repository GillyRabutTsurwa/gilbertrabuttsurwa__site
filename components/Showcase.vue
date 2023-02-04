<template>
  <div>
    <div class="showcase-top">
      <a href="https://github.com/GillyRabutTsurwa" target="_blank">
        <i class="devicon-github-plain"></i>
        <span>GitHub Repo</span>
      </a>
      <h2 class="showcase-language-subtitle">CSS / Sass Projects</h2>
    </div>

    <div class="showcase-container">
      <Thumbnail v-for="(currentThumbnail, index) in thumbnailCSS" v-bind:key="index" v-bind:thumbnailObj="currentThumbnail" />
    </div>

    <h2 class="showcase-language-subtitle">Javascript Projects</h2>

    <div class="showcase-container">
      <Thumbnail v-for="(currentThumbnail, index) in thumbnailJavascript" v-bind:key="index" v-bind:thumbnailObj="currentThumbnail" />
    </div>

    <h2 class="showcase-language-subtitle">Vue / Nuxt Projects</h2>

    <div class="showcase-container">
      <Thumbnail v-for="(currentThumbnail, index) in thumbnailVue" v-bind:key="index" v-bind:thumbnailObj="currentThumbnail" />
    </div>

    <h2 class="showcase-language-subtitle">Svelte(Kit) Projects</h2>

    <div class="showcase-container">
      <Thumbnail v-for="(currentThumbnail, index) in thumbnailSvelte" v-bind:key="index" v-bind:thumbnailObj="currentThumbnail" />
    </div>

    <h2 class="showcase-language-subtitle">React</h2>

    <div class="showcase-container">
      <Thumbnail v-for="(currentThumbnail, index) in thumbnailReact" v-bind:key="index" v-bind:thumbnailObj="currentThumbnail" />
    </div>

  </div>
</template>

<script>
import Thumbnail from "./Thumbnail";
export default {
  name: "Showcase",
  components: {
    Thumbnail: Thumbnail,
  },
  head() {
    return {
      title: "Gil's Projects",
    };
  },
  data() {
    return {
      thumbnailCSS: [
        {
          img: require("../assets/img/project-thumbnails/nu-renaissance-thumbnail-min.png"),
          siteLink: " https://gilberttsurwa-nurenaissance.netlify.app",
          githubLink: "https://github.com/GillyRabutTsurwa/gilberttsurwa-nu-renaissance-website",
        },
        {
          img: require("../assets/img/project-thumbnails/omnifood-thumbnail-min.png"),
          siteLink: "https://omnifood-gilberttsurwa-jonas.netlify.com/",
          githubLink: "https://github.com/GillyRabutTsurwa/omnifood-gilberttsurwa-jonas",
        },
        {
          img: require("../assets/img/project-thumbnails/natours-thumbnail-min.png"),
          siteLink: "https://natours-gilberttsurwa-jonas.netlify.com",
          githubLink: "https://github.com/GillyRabutTsurwa/natours-jonas",
        },
        {
          img: require("../assets/img/project-thumbnails/trillo-thumbnail-min.png"),
          siteLink: "https://trillo-gilberttsurwa-jonas.netlify.com/",
          githubLink: "https://github.com/GillyRabutTsurwa/trillo-jonas",
        },
        {
          img: require("../assets/img/project-thumbnails/nexter-thumbnail-min.png"),
          siteLink: "https://nexter-gilberttsurwa-jonas.netlify.app",
          githubLink: "https://github.com/GillyRabutTsurwa/nexter-jonas",
        },
        {
          img: require("../assets/img/project-thumbnails/candy-museum-thumbnail-min.png"),
          siteLink: "https://candymuseum-gilberttsurwa-colt.netlify.app",
          githubLink: "https://github.com/GillyRabutTsurwa/candymuseum-colt",
        },
        {
          img: require("../assets/img/project-thumbnails/phono-thumbnail-min.png"),
          siteLink: "https://first-deployed-website.netlify.com",
          githubLink: "https://github.com/GillyRabutTsurwa/phono-headphones-website",
        },
        {
          img: require("../assets/img/project-thumbnails/grandma-sweets-thumbnail-min.png"),
          siteLink: "https://grandmassweets-gilberttsurwa-codeaddict.netlify.com",
          githubLink: "https://github.com/GillyRabutTsurwa/grandma-sweets-codeaddict",
        },
      ],
      // =====================================
      thumbnailJavascript: [
        {
          img: require("../assets/img/project-thumbnails/colourgame-app-thumbnail-min.png"),
          siteLink: "https://colourgame-gilberttsurwa-colt.netlify.com",
          githubLink: "https://github.com/GillyRabutTsurwa/colourgame-app-colt",
        },
        {
          img: require("../assets/img/project-thumbnails/forkify-app-thumbnail-min.png"),
          siteLink: "https://gilberttsurwaforkifyproject.netlify.app/",
          githubLink: "https://github.com/GillyRabutTsurwa/forkify-app-jonas",
        },
        {
          img: require("../assets/img/project-thumbnails/piggame-thumbnail-min.png"),
          siteLink: "https://piggame-gilberttsurwa-jonas.netlify.com/",
          githubLink: "https://github.com/GillyRabutTsurwa/piggame-app-jonas",
        },
        {
          img: require("../assets/img/project-thumbnails/tasklist-app-thumbnail-min.png"),
          siteLink: "https://tasklist-gilberttsurwa-brad.netlify.com",
          githubLink: "https://github.com/GillyRabutTsurwa/tasklist-app-brad",
        },
        {
          img: require("../assets/img/project-thumbnails/astrotime-thumbnail-min.png"),
          siteLink: "https://astroclock-gilbertrabuttsurwa.netlify.com/",
          githubLink: "https://github.com/GillyRabutTsurwa/astroboy-clock",
        },
        {
          img: require("../assets/img/project-thumbnails/password-generator-app-thumbnail-min.png"),
          siteLink: "https://passwordgenerator-gilberttsurwa-brad.netlify.com",
          githubLink: "https://github.com/GillyRabutTsurwa/password-generator-brad",
        },
        {
          img: require("../assets/img/project-thumbnails/budgety-app-thumbnail-min.png"),
          siteLink: "https://budgety-gilberttsurwa-jonas.netlify.com",
          githubLink: "https://github.com/GillyRabutTsurwa/budgety-app-jonas",
        },
        {
          img: require("../assets/img/project-thumbnails/booklist-app-thumbnail-min.png"),
          siteLink: "https://booklist-gilberttsurwa-brad.netlify.com",
          githubLink: "https://github.com/GillyRabutTsurwa/booklist-gilberttsurwa-brad",
        },
      ],
      // =====================================
      thumbnailVue: [
        {
          img: require("../assets/img/project-thumbnails/pokedex-pikachu.png"),
          siteLink: "https://gilberttsurwa-pokedex-legacy.netlify.app/",
          githubLink: "https://github.com/GillyRabutTsurwa/pokedex-legacy",
        },
        {
          img: require("../assets/img/project-thumbnails/vue-music-app-thumbnail.png"),
          siteLink: "https://gilberttsurwa-vue-music-player.netlify.app/",
          githubLink: "https://github.com/GillyRabutTsurwa/vue-music-app",
        },
        {
          img: require("../assets/img/project-thumbnails/baba-jokes-app-thumbnail.png"),
          siteLink: "https://gilberttsurwa-baba-jokes.netlify.app/",
          githubLink: "https://github.com/GillyRabutTsurwa/nuxt-with-brad-traversy",
        },
        {
          img: require("../assets/img/project-thumbnails/blog-app-thumbnail.png"),
          siteLink: "https://gilbertrabuttsurwa.tech",
          githubLink: "https://github.com/GillyRabutTsurwa/my-website",
        },
      ],
      // =====================================
      thumbnailSvelte: [
        {
          img: require("../assets/img/project-thumbnails/arch-studio-thumbnail.png"),
          siteLink: "https://gilberttsurwa-arch-studio.vercel.app/",
          githubLink: "https://github.com/GillyRabutTsurwa/arch-studio-website",
        },
      ],
      // =====================================
      thumbnailReact: [
        {
          img: require("../assets/img/project-thumbnails/dadjokes-react-thumbnail.png"),
          siteLink: "https://gilberttsurwa-dadjokes-react.netlify.app/",
          githubLink: "https://github.com/GillyRabutTsurwa/dadjokes-app-react",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.showcase-top {
  margin: 0 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;

  & a {
    margin-right: auto;
    text-decoration: none;
    color: $steelblue;
    background-color: #fff;
    padding: 1rem 2.1rem;
  }
}

.showcase-language-subtitle {
  font-size: 2.5rem;

  // &:not(:first-child) {
  margin: 3rem 3rem 3rem 0;
  text-align: right;
  //}
}

.showcase-container {
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(32rem, 70rem)); /* will stick with this one for now. looks great */
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-evenly;
}
</style>