const storyblokOptions = {
    accessToken: process.env.STORYBLOK_TOKEN,
    apiOptions: { region: "us" },
};
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devServer: {
        // host: "0.0.0.0",
    },
    modules: ["@nuxtjs/sanity", "@nuxtjs/supabase", "@nuxtjs/google-fonts", "@pinia/nuxt", ["@storyblok/nuxt", storyblokOptions]],
    //NOTE: for sanity config via @nuxt/sanityjs docs
    sanity: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_ENV_PROD,
        apiVersion: process.env.SANITY_API_VERSION,
        useCdn: false,
    },
    supabase: {
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY,
        redirectOptions: {
            login: "/login",
            callback: "/blog/uncensored",
            exclude: ["/", "/blog", "/blog/personal", "/blog/personal/*", "/blog/tech", "/blog/tech/*", "/projects", "/shop", "/contact"],
        },
    },
    runtimeConfig: {
        public: {
            client_url: process.env.CLIENT_URL,
        },
        auth: {
            secret: process.env.AUTH_SECRET,
        },
        // NOTE: to use for making sanity client (via vanilla js)
        // NOTE: need this to construct the api for all my endpoints
        sanity: {
            projectId: process.env.SANITY_PROJECT_ID,
            dataset: process.env.SANITY_ENV_PROD,
            apiVersion: process.env.SANITY_API_VERSION,
            useCdn: false,
        },
        stripe: {
            key: process.env.STRIPE_KEY,
        },
        github: {
            client_ID: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
        },
        google: {
            client_ID: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
        },
        instagram: {
            api_key: process.env.INSTAGRAM_TOKEN,
            client_ID: process.env.INSTAGRAM_CLIENT_ID,
            client_secret: process.env.INSTAGRAM_CLIENT_SECRET,
        },
        mongodb: {
            uri: process.env.MONGODB_URI,
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
                    href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css",
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
    //NOTE: properly setup sass thanks to this: https://www.therdnotes.com/use-scss-with-nuxt-3
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
        {
            path: "~/components/blog",
            pathPrefix: false,
        },
        {
            path: "~/components/home",
            pathPrefix: false,
        },
        {
            path: "~/components/layout",
            pathPrefix: false,
        },
        {
            path: "~/components/shared",
            pathPrefix: false,
        },
        {
            path: "~/components/shop",
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
