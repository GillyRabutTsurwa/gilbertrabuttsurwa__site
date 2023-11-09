<script setup>
const route = useRoute();
definePageMeta({
    title: "Gil's Projects",
});

console.log(route.meta.title);
console.log(route.meta);

const versionType = import.meta.env.DEV ? "draft" : "published";
const story = await useAsyncStoryblok("/projects", { version: versionType });
console.log(story);
console.log(story.value.content);
</script>

<template>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>



<style lang="scss" scoped></style>