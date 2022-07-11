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
    color: #1a2934;
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
  &__language {
    position: relative;
    // TESTING;
    width: 100%;
    height: 100%;

    &-title {
      font-size: 1.7rem;
    }

    &:hover &--x {
      -webkit-filter: blur(1.2rem);
      filter: blur(1.2rem);
    }

    &:hover &--y {
      opacity: 1;
    }

    // these are not children (although they are nested)
    // theyre simply here to target the lang-*** class to place the grid items in the grid container
    // &.lang-CSS {
    //   grid-column: 1 / 2;
    //   grid-row: 3 / 4;
    // }

    // &.lang-JS {
    //   grid-column: 1 / 2;
    //   grid-row: 4 / 5;
    // }

    // &.lang-Vue {
    //   grid-column: 2 / 3;
    //   grid-row: 3 / -1;

    //   @include responsive(tablet-portrait) {
    //     grid-column: 1 / -1;
    //     grid-row: 4 / -1;
    //   }
    // }
    // ===============================================================

    &--x,
    &--y {
      // ? QUESTION: ARE THESE NEEDED?
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      // ? ==============================
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;

      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
    }

    &--x {
      background-color: #1a2934;
      & i {
        font-size: 9rem;
      }
    }
    &--y {
      opacity: 0;
      z-index: 1000;
    }
  }
}

//
.skills__list {
  list-style: none;
  text-align: center;

  &--item {
    font-size: 3rem;

    a {
      &:link,
      &:visited {
        color: rgb(238, 238, 238);
        -webkit-text-decoration: none;
        text-decoration: none;
      }
      &:hover,
      &:active {
        color: #fff;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 2px 2px 2px rgba(206, 89, 55, 0);
      }
    }
  }
}
</style>