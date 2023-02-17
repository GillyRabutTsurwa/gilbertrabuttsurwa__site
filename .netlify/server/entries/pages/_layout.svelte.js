import { c as create_ssr_component } from "../../chunks/index2.js";
const main = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@-webkit-keyframes svelte-1gm38y4-ellipsisFade{0%,50%{opacity:0}100%{opacity:1}}@keyframes svelte-1gm38y4-ellipsisFade{0%,50%{opacity:0}100%{opacity:1}}@-webkit-keyframes svelte-1gm38y4-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes svelte-1gm38y4-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.svelte-1gm38y4::-moz-selection{background:rgb(238, 238, 238);color:#1a2934}.svelte-1gm38y4::selection{background:rgb(238, 238, 238);color:#1a2934}.svelte-1gm38y4,.svelte-1gm38y4::before,.svelte-1gm38y4::after{margin:0;padding:0;box-sizing:border-box}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"app svelte-1gm38y4"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export {
  Layout as default
};
