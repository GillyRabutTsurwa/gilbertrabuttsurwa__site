<script>
  import { assets } from "../../store/thumbnails";
  import Thumbnail from "./Thumbnail.svelte";
  console.log($assets);
  const { css, javascript, vue, svelte, react } = $assets;
  console.log(css);
</script>

<div class="showcase">
  <div class="showcase-top">
    <a href="https://github.com/GillyRabutTsurwa" target="_blank" rel="noreferrer">
      <i class="devicon-github-plain" />
      <span>GitHub Repo</span>
    </a>
    <h2 class="showcase-language-subtitle">CSS / Sass Projects</h2>
  </div>

  <ul class="showcase__list">
    {#each css as currentCSSAsset}
      <Thumbnail thumbnailObj={currentCSSAsset} />
    {/each}
  </ul>

  <h2 class="showcase-language-subtitle">Javascript Projects</h2>

  <ul class="showcase__list">
    {#each javascript as currentJSAsset}
      <Thumbnail thumbnailObj={currentJSAsset} />
    {/each}
  </ul>

  <h2 class="showcase-language-subtitle">Vue / Nuxt Projects</h2>
  <ul class="showcase__list">
    {#each vue as currentVueAsset}
      <Thumbnail thumbnailObj={currentVueAsset} />
    {/each}
  </ul>

  <h2 class="showcase-language-subtitle">Svelte(Kit) Projects</h2>
  <ul class="showcase__list">
    {#each svelte as currentSvelteAsset}
      <Thumbnail thumbnailObj={currentSvelteAsset} />
    {/each}
  </ul>

  <h2 class="showcase-language-subtitle">React</h2>

  <ul class="showcase__list">
    {#each react as currentReactAsset}
      <Thumbnail thumbnailObj={currentReactAsset} />
    {/each}
  </ul>
</div>

<style lang="scss">
  @use "../sass/variables";
  .showcase {
    width: 100%;
    height: 100%;
    background-color: variables.$steelblue;
    color: variables.$default-grey;
    padding: 0 3rem;

    &-top {
      margin: 0 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 8vh;

      & a {
        margin-right: auto;
        text-decoration: none;
        color: #1a2934;
        background-color: #fff;
        padding: 1rem 2.1rem;
      }
    }

    &-language-subtitle {
      font-size: 2.5rem;
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
