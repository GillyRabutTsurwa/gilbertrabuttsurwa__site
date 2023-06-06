// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        [
            "@storyblok/nuxt",
            {
                accessToken: "gVxtEKl9Q1ThlwQdzJdoywtt",
                apiOptions: { region: "us" },
            },
        ],
    ],
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
                    href: "https://fonts.googleapis.com/css2?family=Kulim+Park:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap",
                },
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
    css: ["@/assets/sass/main.scss"],
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
});
