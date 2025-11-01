<script setup>
const { assets } = useAssets();
const { css, javascript, vue, svelte, react } = assets;
const config = useRuntimeConfig();
const site_url = config.public.client_url;
</script>

<template>
  <div class="showcase">
    <div class="showcase-top">
      <a href="https://github.com/GillyRabutTsurwa" target="_blank" rel="noreferrer">
        <i class="devicon-github-plain" />
        <span>GitHub Repo</span>
      </a>
      <h2 style="font-size: 4rem;">Projects Showcase</h2>
      <a :href="`${site_url}/blog`" target="_blank" rel="noreferrer">
        <i class="devicon-devicon-plain" />
        <span>Blog Site</span>
      </a>
    </div>

    <h2 class="showcase-language-subtitle">CSS / Sass Projects</h2>
    <ul class="showcase__list">
      <Thumbnail v-for="(currentCssAsset, index) in css" :key="index" :thumbnail="currentCssAsset" />
    </ul>

    <h2 class="showcase-language-subtitle">Javascript Projects</h2>
    <ul class="showcase__list">
      <Thumbnail v-for="(currentJSAsset, index) in javascript" :key="index" :thumbnail="currentJSAsset" />
    </ul>

    <h2 class="showcase-language-subtitle">Vue / Nuxt Projects</h2>
    <ul class="showcase__list">
      <Thumbnail v-for="(currentVueAsset, index) in vue" :key="index" :thumbnail="currentVueAsset" />
    </ul>

    <h2 class="showcase-language-subtitle">React</h2>
    <ul class="showcase__list">
      <Thumbnail v-for="(currentReactAsset, index) in react" :key="index" :thumbnail="currentReactAsset" />
    </ul>

    <h2 class="showcase-language-subtitle">Svelte(Kit) Projects</h2>
    <ul class="showcase__list">
      <Thumbnail v-for="(currentSvelteAsset, index) in svelte" :key="index" :thumbnail="currentSvelteAsset" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.showcase {
  width: 100%;
  height: 100%;
  background-color: $colour-primary;
  color: $colour-secondary;
  padding: 0 3rem;

  &-top {
    padding: 6rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;

    & a {

      &,
      &:link,
      &:visited {
        // margin-right: auto;
        text-decoration: none;
        color: $colour-primary;
        background-color: $colour-secondary;
        padding: 1rem 2.1rem;
        transition: all 0.2s ease-in-out;
        border: 2px solid transparent;
      }

      &:hover,
      &:active {
        color: $colour-secondary;
        background-color: $colour-primary;
        border: 2px solid $colour-secondary;
      }

      i {
        margin-right: 1rem;
      }
    }
  }

  &-language-subtitle {
    font-size: 3rem;
    // &:not(:first-child) {
    margin: 3rem 3rem 3rem 0;
    text-align: right;
    grid-column: 1 / -1;
    //}
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(45rem, 1fr));
    gap: 3rem;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-content: space-evenly;
  }
}
</style>