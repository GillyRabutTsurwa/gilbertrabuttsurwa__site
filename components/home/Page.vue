<script setup>
const props = defineProps({ blok: Object });
console.log(props);
</script>

<template>
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
</template>