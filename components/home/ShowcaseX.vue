<script setup>
const { assets } = useAssets();
const { css, javascript, vue, svelte, react } = assets;
console.log(assets);

// const versionType = import.meta.env.DEV ? "draft" : "published";
// const story = await useAsyncStoryblok("projects", { version: versionType });
// console.log(story);
// console.log(story.value.content);
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<!-- <style lang="scss" scoped>
.showcase {
  width: 100%;
  height: 100%;
  background-color: $steelblue;
  color: $default-grey;
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
</style> -->
