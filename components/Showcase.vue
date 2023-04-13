<script setup>
const { assets } = useAssets();
const { css, javascript, vue, svelte, react } = assets;
console.log(assets)
</script>

<template>
  <div class="showcase">
    <div class="showcase-top">
      <a href="https://github.com/GillyRabutTsurwa" target="_blank" rel="noreferrer">
        <i class="devicon-github-plain" />
        <span>GitHub Repo</span>
      </a>
      <h2 style="font-size: 4rem;">Projects Showcase</h2>
      <a href="https://gilbertrabuttsurwa.blog" target="_blank" rel="noreferrer">
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
@use "@/assets/sass/variables";

.showcase {
  width: 100%;
  height: 100%;
  background-color: variables.$steelblue;
  color: variables.$default-grey;
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
        color: #1a2934;
        background-color: #fff;
        padding: 1rem 2.1rem;
        transition: all 0.2s ease-in-out;
        border: 2px solid transparent;
      }

      &:hover,
      &:active {
        color: #fff;
        background-color: #1a2934;
        border: 2px solid #fff;
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
