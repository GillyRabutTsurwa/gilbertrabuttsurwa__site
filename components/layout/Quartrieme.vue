<template>
  <section class="skills">
    <h2 class="skills__main-title">Select Projects</h2>
    <div class="skills__buttons">
      <button @click="currentComponent = 'FrontEnd'" class="header__button skills__buttons--button">Front-End</button>
      <button @click="currentComponent = 'BackEnd'" class="header__button skills__buttons--button">Back-End</button>
    </div>
    <component :is="currentComponent"></component>
  </section>
</template>

<script>
import FrontEnd from "~/components/FrontEnd";
export default {
  components: { FrontEnd },
  name: "Quartrieme",
  data() {
    return {
      currentComponent: "FrontEnd",
    };
  },
};
</script>

<style lang="scss">
.skills {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  // grid-template-rows: repeat(2, min-content) repeat(2, 55vh);
  // grid-template-rows: repeat(2, min-content) 80vh;
  grid-template-rows: repeat(2, min-content) 1fr;

  // height: 100vh;
  min-height: 100vh;
  margin: 0 3rem;

  background-color: $default-grey;

  gap: 4rem;
  padding-top: 6rem;
  color: rgb(238, 238, 238);

  @include responsive(tablet-portrait) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content repeat(3, 1fr);
    row-gap: 4rem;
    column-gap: 0;
  }

  &__main-title {
    grid-column: 1 / -1;
    justify-self: center;
    font-size: 3rem;
    color: $steelblue;
  }

  &__buttons {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    justify-self: center;
    display: flex;
    align-items: flex-start;

    &--button {
      margin-top: 0;
      margin-right: 2.5rem;
    }
  }
}
</style>