<script>
  import Frontend from "$lib/components/Frontend.svelte";
  import Backend from "$lib/components/Backend.svelte";

  let currentComponent = Frontend;
  const showFrontend = () => {
    currentComponent = Frontend;
    console.log("frotnend");
  };
  const showBackend = () => {
    currentComponent = Backend;
    console.log("backend");
  };
</script>

<section class="skills">
  <h2 class="skills__main-title">Select Projects</h2>
  <div class="skills__buttons">
    <button on:click={showFrontend} class="header__button skills__buttons--button">Front-End</button>
    <button on:click={showBackend} class="header__button skills__buttons--button">Back-End</button>
  </div>
  <svelte:component this={currentComponent} />
</section>

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
  }
</style>
