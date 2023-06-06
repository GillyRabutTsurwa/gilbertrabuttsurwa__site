<script setup>
const story = await useAsyncStoryblok("home", { version: "draft" });
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
