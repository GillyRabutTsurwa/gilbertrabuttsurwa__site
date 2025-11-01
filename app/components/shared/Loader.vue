<script setup lang="ts">
const randomIconIndex: Ref<number> = ref(0);
const iconArray = ref([
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

returnRandomIndex();
</script>

<template>
  <div class="loader">
    <i :class="`devicon-${randomIcon}`" />
  </div>
</template>

<style lang="scss" scoped>
.loader {
  position: relative;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 5000; // To hide the nav button when load page is running//NOTE: REMEMBER. NEED TO SET A POSITION
  -webkit-transition: opacity 2s ease-in;
  -webkit-transition: opacity 2s ease-in;
  transition: opacity 2s ease-in;
  background-color: $colour-primary;

  & i {
    color: $colour-secondary;
    font-size: 40rem;
  }
}
</style>
