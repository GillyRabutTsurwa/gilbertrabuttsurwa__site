<script setup lang="ts">
const route = useRoute();
const layout: ComputedRef<string> = computed(() => {
  return route.name.includes("blog") ? "blog" : "default";
});
definePageMeta({
  layout: layout.value,
});

</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/main.scss"
</style>