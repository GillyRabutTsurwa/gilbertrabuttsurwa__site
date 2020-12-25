export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    // title: process.env.npm_package_name || "",
    title: "Gil's Portfolio Website",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Welcome to my portfolio website. In here you can learn more about me and take a look at the projects I have done. I am Front-End Developer and Javascript is my bread and butter. Explore my site and reach out to me if needed."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      // NEW: INCLUDING DEVICON ICONS
      // got the how-to here: https://nuxtjs.org/faq/external-resources
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Kulim+Park:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
      }
    ],
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"
      },
      {
        src: "https://kit.fontawesome.com/7a26a17053.js",
        crossorigin: "anonymous"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/sass/main.scss"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    //NEW:IMPORTANT: pour faire nos sass variables et mixins utilisables sur touts nos components et pas seulement sur notre fichier sass principale.
    "@nuxtjs/style-resources"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  //NEW: using style resources
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  styleResources: {
    scss: [
      "assets/sass/_variables.scss",
      "assets/sass/_mixins.scss",
      "assets/sass/_animations.scss"
    ]
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extractCSS: true
  }
};
