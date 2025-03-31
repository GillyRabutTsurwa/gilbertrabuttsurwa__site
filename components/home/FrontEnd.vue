<script setup>
const { assets } = useAssets();
const { css, javascript, vue, svelte, react } = assets;

const shuffle = (array) => {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const allProjects = [...css, ...javascript, ...vue, ...svelte, ...react];
const favourites = allProjects.filter((currentProject) => currentProject.isFavourite);
</script>

<template>
  <section>
  <ul class="gallery__list">
    <Thumbnail v-for="(currentCssAsset, index) in shuffle(favourites)" :key="index" :thumbnail="currentCssAsset" />
  </ul>
  </section>
</template>

<style lang="scss" scoped>
  section {
    grid-column: 1 / -1;
  }

  .gallery__list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 48rem));
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
</style>