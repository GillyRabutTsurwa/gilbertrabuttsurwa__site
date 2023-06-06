<script setup>
// use draft dataset in development and published dataset in production
const versionType = import.meta.env.DEV ? "draft" : "published";
const story = await useAsyncStoryblok("home", { version: versionType });
console.log(story);
console.log(story.value.content);
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <Footer />
</template>

<style lang="scss">
.maincontent {
  height: 100%;
}

.observable {
  opacity: 0;
  transition: opacity 0.75s ease-in;
}

.observer-appear {
  opacity: 1;
}
</style>
