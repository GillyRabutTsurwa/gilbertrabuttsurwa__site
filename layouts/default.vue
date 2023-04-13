<script setup>
const route = useRoute();
const projectsPage = route.name === "projects" || route.name === "shop";
</script>
<template>
    <Navigation v-if="!projectsPage" />
    <slot />
</template>


<style lang="scss" scoped></style>