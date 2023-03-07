// import adapter from "@sveltejs/adapter-auto"; NOTE: not using this for now.
import adapter from "@sveltejs/adapter-netlify";
import { vitePreprocess } from "@sveltejs/kit/vite";
import preprocessor from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            edge: false,
            split: false,
        }),
    },
    preprocess: preprocessor(vitePreprocess()),
};

export default config;
