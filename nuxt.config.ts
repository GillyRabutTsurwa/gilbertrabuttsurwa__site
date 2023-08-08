// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@sidebase/nuxt-auth",
        "@nuxtjs/sanity",
        "@nuxtjs/google-fonts",
        "@pinia/nuxt",
        [
            "@storyblok/nuxt",
            {
                accessToken: process.env.STORYBLOK_TOKEN,
                apiOptions: { region: "us" },
            },
        ],
    ],
    runtimeConfig: {
        github: {
            client_ID: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
        },
        google: {
            client_ID: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
        },
        auth: {
            secret: process.env.AUTH_SECRET,
        },
        mongodb: {
            uri: process.env.MONGODB_URI,
        },
        instagram: {
            api_key: process.env.INSTAGRAM_TOKEN,
        },
        public: {
            sanity: {
                projectId: process.env.VITE_SANITY_PROJECT_ID,
                dataset: process.env.VITE_SANITY_ENV_PROD,
                apiVersion: process.env.VITE_SANITY_API_VERSION,
                useCdn: false,
            },
        },
    },
    app: {
        head: {
            meta: [
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0",
                },
            ],
            link: [
                {
                    rel: "stylesheet",
                    href: "https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css",
                },
            ],
            script: [
                {
                    src: "https://kit.fontawesome.com/7a26a17053.js",
                    crossorigin: "anonymous",
                },
            ],
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                    @use "@/assets/sass/abstracts/_extends.scss" as *; 
                    @use "@/assets/sass/abstracts/_functions.scss" as *;
                    @use "@/assets/sass/abstracts/_mixins.scss" as *;
                    @use "@/assets/sass/abstracts/_variables.scss" as *;
                    @use "@/assets/sass/base/_animations.scss" as *;
                    @use "@/assets/sass/base/_base.scss" as *;
                    @use "@/assets/sass/base/_reset.scss" as *;
                    @use "@/assets/sass/base/_typography.scss" as *;
                    `,
                },
            },
        },
    },
    css: ["@/assets/sass/main.scss"],
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
    googleFonts: {
        display: "swap",
        preconnect: true,
        families: {
            Abel: true,
            "League+Spartan": {
                wght: [200, 300, 400, 600, 700],
            },
            "Lexend+Deca": {
                wght: [100, 300, 400, 500],
            },
            "Kulim+Park": true,
        },
    },
});
