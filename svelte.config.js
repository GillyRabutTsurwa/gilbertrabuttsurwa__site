// import adapter from "@sveltejs/adapter-auto"; NOTE: not using this for now.
import adapter from "@sveltejs/adapter-netlify";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      edge: false,
      split: false,
    }),
  },
};

export default config;
