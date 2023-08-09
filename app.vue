<script setup lang="ts">
const route = useRoute();
const layout: ComputedRef<string> = computed(() => route.name.includes("blog") ? "blog" : "default");
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/main.scss"
</style>