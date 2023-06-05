<script setup>
// TESTING:
const story = await useAsyncStoryblok("home", { version: "draft" });
console.log(story);
console.log(story.value.content);

</script>
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <!-- <Header />
  <Premier />
  <Deuxieme />
  <Troisieme />
  <Quatrieme />
  <Cinquieme />
  <Footer /> -->
</template>

<style lang="scss">
/* TESTING */
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
