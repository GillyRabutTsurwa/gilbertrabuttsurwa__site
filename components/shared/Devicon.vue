<script setup>
const currentIndex = ref(0);
const iconArray = ref([
  "html5-plain",
  "css3-plain",
  "sass-original",
  "javascript-plain",
  "vuejs-plain",
  "nuxtjs-plain",
  "react-plain",
  "bootstrap-plain",
  "tailwindcss-plain",
  "jquery-plain",
  "nodejs-plain",
  "express-original-wordmark",
  "mongodb-plain-wordmark",
  "git-plain",
  "github-plain",
  "webpack-plain",
  "babel-plain",
  "heroku-original-wordmark",
  "gulp-plain"]);



const nextIcon = () => {
  currentIndex.value += 1;
  if (currentIndex.value > iconArray.value.length - 1) {
    currentIndex.value = 0;
  }
};

const currentDevicon = computed(() => {
  return iconArray.value[currentIndex.value];
});

const startIcons = () => {
  setInterval(nextIcon, 4000);
};

onMounted(() => {
  startIcons();
});
</script>

<template>
  <i :class="`devicon-${currentDevicon}`" />
</template>

<style lang="scss" scoped>
i[class^="devicon"] {
  display: block;
  // font-size: 9.5rem;
  z-index: 1000;
  color: $steelblue;
  -webkit-animation: fade 3800ms ease-in-out infinite;
  animation: fade 3800ms ease-in-out infinite;
}
</style>