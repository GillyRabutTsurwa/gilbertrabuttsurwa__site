<script setup>
const status = ref(null);
const logChange = (emitValue) => {
  status.value = emitValue ? "Enabled" : "Disabled";
}
</script>

<template>
  <section class="map">
    <h2>Gil's Favourite Spots</h2>
    <span>Scroll {{ status }}</span>
    <Map @scroll-status="logChange" />
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/variables";
@use "@/assets/sass/mixins";

.map {
  @include mixins.breakpoint(1023) {
    order: 6; //NOTE: this works because i display the parent (#app) to be display: grid in pages/index.vue
  }

  h2 {
    text-align: center;
    font-size: 3rem;
    margin-right: 2rem;
  }

  span {
    display: inline-block;
    // width: 20rem;
    border: 2px solid #000;
    border-radius: 1rem;
    font-size: 1.5rem;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    padding: 1.5rem 3rem;
    margin: 2rem auto;
    background-color: variables.$steelblue;
    cursor: not-allowed;
    opacity: 1;
    transition: opacity 0.5s ease-in;

    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}



.hide {
  visibility: hidden;
  opacity: 0;
}
</style>
