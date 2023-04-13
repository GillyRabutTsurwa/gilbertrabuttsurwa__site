<script setup>
const route = useRoute();
definePageMeta({
    title: "Gil's Projects",
});

console.log(route.meta.title) // My home page
console.log(route.meta);
</script>

<template>
    <Showcase />
</template>



<style lang="scss" scoped></style>