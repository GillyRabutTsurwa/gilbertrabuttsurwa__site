<script setup lang="ts">
const randomIconIndex: Ref<number> = ref(0);
const iconArray: Ref<string[]> = ref([
  "html5-plain",
  "css3-plain",
  "sass-original",
  "javascript-plain",
  "typescript-plain",
  "tailwindcss-plain",
  "bootstrap-plain",
  "jquery-plain",
  "react-plain",
  "svelte-plain",
  "vuejs-plain",
  "nuxtjs-plain",
  "storybook-plain",
  "wordpress-plain",
  "sanity-plain",
  "npm-original-wordmark",
  "nodejs-plain",
  "express-original-wordmark",
  "mongodb-plain-wordmark",
  "mongoose-original-wordmark",
  "mysql-original",
  "supabase-plain",
  "git-plain",
  "github-plain",
  "webpack-plain",
  "linux-plain",
  "archlinux-plain",
  "vercel-original",
  "netlify-plain",
  "vscode-plain",
  "babel-plain",
  "postman-plain",
  "gulp-plain",
  "homebrew-plain",
  "ssh-original",
  "ohmyzsh-plain",
  "stackoverflow-plain"
]);



const returnRandomIndex = (): void => {
  randomIconIndex.value = Math.floor(Math.random() * iconArray.value.length);
};

const randomIcon: ComputedRef<string> = computed(() => {
  return iconArray.value[randomIconIndex.value];
});

const startIcons = () => {
  setInterval(returnRandomIndex, 4000);
};

onMounted(() => {
  startIcons();
});
</script>

<template>
  <i :class="`devicon-${randomIcon}`" />
</template>

<style lang="scss" scoped>
i[class^="devicon"] {
  display: block;
  // font-size: 9.5rem;
  z-index: 1000;
  color: $colour-secondary; // pour le moment
  -webkit-animation: fade 3800ms ease-in-out infinite;
  animation: fade 3800ms ease-in-out infinite;
}
</style>